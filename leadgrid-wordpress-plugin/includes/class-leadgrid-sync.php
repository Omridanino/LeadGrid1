
<?php
/**
 * LeadGrid Sync Class
 * Handles two-way synchronization between LeadGrid and WordPress
 */

class LeadGrid_Sync {
    
    public function __construct() {
        add_action('save_post', array($this, 'sync_to_leadgrid'), 10, 2);
        add_action('leadgrid_sync_pages', array($this, 'sync_from_leadgrid'));
        
        // Schedule regular sync if enabled
        if (get_option('leadgrid_auto_sync', true)) {
            if (!wp_next_scheduled('leadgrid_sync_pages')) {
                wp_schedule_event(time(), 'leadgrid_sync_interval', 'leadgrid_sync_pages');
            }
        }
        
        // Add custom cron interval
        add_filter('cron_schedules', array($this, 'add_sync_interval'));
    }
    
    public function add_sync_interval($schedules) {
        $interval = get_option('leadgrid_sync_interval', 300);
        
        $schedules['leadgrid_sync_interval'] = array(
            'interval' => $interval,
            'display' => __('LeadGrid Sync Interval', 'leadgrid-integration')
        );
        
        return $schedules;
    }
    
    public function sync_to_leadgrid($post_id, $post) {
        // Only sync LeadGrid pages
        if ($post->post_type !== 'leadgrid_page') {
            return;
        }
        
        // Get LeadGrid ID
        $leadgrid_id = get_post_meta($post_id, 'leadgrid_id', true);
        if (!$leadgrid_id) {
            return;
        }
        
        // Parse WordPress content back to LeadGrid format
        $leadgrid_data = $this->parse_wp_content($post->post_content);
        
        // Send to LeadGrid API
        $api = new LeadGrid_API();
        $success = $api->send_page_update($post_id, $leadgrid_data);
        
        if ($success) {
            update_post_meta($post_id, 'last_sync_to_leadgrid', current_time('mysql'));
        }
    }
    
    public function sync_from_leadgrid() {
        global $wpdb;
        
        // Get all LeadGrid pages
        $pages = $wpdb->get_results(
            "SELECT * FROM {$wpdb->prefix}leadgrid_pages WHERE sync_status != 'error'"
        );
        
        $api = new LeadGrid_API();
        
        foreach ($pages as $page) {
            $leadgrid_data = $api->get_page($page->leadgrid_id);
            
            if (!$leadgrid_data) {
                continue;
            }
            
            // Check if page was updated in LeadGrid
            $last_modified = strtotime($leadgrid_data['last_modified'] ?? '');
            $last_sync = strtotime($page->last_sync);
            
            if ($last_modified > $last_sync) {
                $this->update_wp_page($page->wp_post_id, $leadgrid_data);
                
                // Update sync status
                $wpdb->update(
                    $wpdb->prefix . 'leadgrid_pages',
                    array(
                        'page_data' => json_encode($leadgrid_data),
                        'last_sync' => current_time('mysql'),
                        'sync_status' => 'synced'
                    ),
                    array('id' => $page->id)
                );
            }
        }
    }
    
    public function sync_page($leadgrid_id) {
        $api = new LeadGrid_API();
        $leadgrid_data = $api->get_page($leadgrid_id);
        
        if (!$leadgrid_data) {
            return array('success' => false, 'message' => 'Failed to fetch page data');
        }
        
        global $wpdb;
        $page = $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_pages WHERE leadgrid_id = %s", $leadgrid_id)
        );
        
        if ($page) {
            // Update existing page
            $result = $this->update_wp_page($page->wp_post_id, $leadgrid_data);
            
            $wpdb->update(
                $wpdb->prefix . 'leadgrid_pages',
                array(
                    'page_data' => json_encode($leadgrid_data),
                    'last_sync' => current_time('mysql'),
                    'sync_status' => 'synced'
                ),
                array('id' => $page->id)
            );
        } else {
            // Create new page
            $blocks = new LeadGrid_Blocks();
            $wp_content = $blocks->convert_to_blocks($leadgrid_data);
            
            $post_id = wp_insert_post(array(
                'post_title' => $leadgrid_data['title'] ?? 'LeadGrid Page',
                'post_content' => $wp_content,
                'post_status' => 'publish',
                'post_type' => 'leadgrid_page',
                'meta_input' => array(
                    'leadgrid_id' => $leadgrid_id,
                    'leadgrid_data' => json_encode($leadgrid_data)
                )
            ));
            
            $wpdb->insert(
                $wpdb->prefix . 'leadgrid_pages',
                array(
                    'leadgrid_id' => $leadgrid_id,
                    'wp_post_id' => $post_id,
                    'page_data' => json_encode($leadgrid_data),
                    'sync_status' => 'synced'
                )
            );
        }
        
        return array('success' => true, 'message' => 'Page synced successfully');
    }
    
    private function update_wp_page($post_id, $leadgrid_data) {
        $blocks = new LeadGrid_Blocks();
        $wp_content = $blocks->convert_to_blocks($leadgrid_data);
        
        wp_update_post(array(
            'ID' => $post_id,
            'post_title' => $leadgrid_data['title'] ?? 'LeadGrid Page',
            'post_content' => $wp_content,
            'meta_input' => array(
                'leadgrid_data' => json_encode($leadgrid_data),
                'last_sync_from_leadgrid' => current_time('mysql')
            )
        ));
    }
    
    private function parse_wp_content($content) {
        // Parse WordPress blocks back to LeadGrid format
        $blocks = parse_blocks($content);
        $leadgrid_data = array();
        
        foreach ($blocks as $block) {
            switch ($block['blockName']) {
                case 'leadgrid/hero':
                    $leadgrid_data['hero'] = $block['attrs'];
                    break;
                case 'leadgrid/features':
                    $leadgrid_data['features'] = $block['attrs'];
                    break;
                case 'leadgrid/testimonials':
                    $leadgrid_data['testimonials'] = $block['attrs'];
                    break;
                case 'leadgrid/contact':
                    $leadgrid_data['contact'] = $block['attrs'];
                    break;
            }
        }
        
        return $leadgrid_data;
    }
}
