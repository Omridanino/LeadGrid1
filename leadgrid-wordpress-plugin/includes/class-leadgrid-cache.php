
<?php
/**
 * LeadGrid Cache Class
 * Handles caching functionality
 */

class LeadGrid_Cache {
    
    private $cache_group = 'leadgrid';
    private $cache_enabled;
    private $cache_duration;
    
    public function __construct() {
        $this->cache_enabled = get_option('leadgrid_cache_enabled', true);
        $this->cache_duration = get_option('leadgrid_cache_duration', 3600);
        
        add_action('save_post', array($this, 'clear_page_cache'));
        add_action('leadgrid_clear_cache', array($this, 'clear_all'));
    }
    
    public function get($key, $default = null) {
        if (!$this->cache_enabled) {
            return $default;
        }
        
        $cached = wp_cache_get($key, $this->cache_group);
        
        if ($cached === false) {
            // Try to get from transients as fallback
            $cached = get_transient($this->get_transient_key($key));
            
            if ($cached !== false) {
                // Store in object cache for faster access
                wp_cache_set($key, $cached, $this->cache_group, $this->cache_duration);
            }
        }
        
        return $cached !== false ? $cached : $default;
    }
    
    public function set($key, $value, $duration = null) {
        if (!$this->cache_enabled) {
            return false;
        }
        
        $duration = $duration ?? $this->cache_duration;
        
        // Store in object cache
        $object_cache_result = wp_cache_set($key, $value, $this->cache_group, $duration);
        
        // Also store in transients for persistence
        $transient_result = set_transient($this->get_transient_key($key), $value, $duration);
        
        return $object_cache_result || $transient_result;
    }
    
    public function delete($key) {
        wp_cache_delete($key, $this->cache_group);
        delete_transient($this->get_transient_key($key));
        
        return true;
    }
    
    public function clear_all() {
        // Clear object cache group
        wp_cache_flush_group($this->cache_group);
        
        // Clear all LeadGrid transients
        global $wpdb;
        
        $wpdb->query(
            "DELETE FROM {$wpdb->options} 
             WHERE option_name LIKE '_transient_leadgrid_%' 
             OR option_name LIKE '_transient_timeout_leadgrid_%'"
        );
        
        LeadGrid_Logger::log('All cache cleared');
        
        return true;
    }
    
    public function clear_page_cache($post_id = null) {
        if ($post_id && get_post_type($post_id) === 'leadgrid_page') {
            $leadgrid_id = get_post_meta($post_id, 'leadgrid_id', true);
            
            if ($leadgrid_id) {
                $this->delete('page_' . $leadgrid_id);
                $this->delete('page_data_' . $leadgrid_id);
                $this->delete('page_blocks_' . $leadgrid_id);
                
                LeadGrid_Logger::log('Page cache cleared for: ' . $leadgrid_id);
            }
        }
        
        // Clear related caches
        $this->delete('pages_list');
        $this->delete('sync_status');
        
        return true;
    }
    
    public function get_page_data($leadgrid_id, $force_refresh = false) {
        $cache_key = 'page_data_' . $leadgrid_id;
        
        if ($force_refresh) {
            $this->delete($cache_key);
        }
        
        $cached_data = $this->get($cache_key);
        
        if ($cached_data === null) {
            // Fetch from API
            $api = new LeadGrid_API();
            $page_data = $api->get_page($leadgrid_id);
            
            if ($page_data) {
                $this->set($cache_key, $page_data);
                return $page_data;
            }
            
            return false;
        }
        
        return $cached_data;
    }
    
    public function cache_page_blocks($leadgrid_id, $blocks_html) {
        $cache_key = 'page_blocks_' . $leadgrid_id;
        return $this->set($cache_key, $blocks_html);
    }
    
    public function get_page_blocks($leadgrid_id) {
        $cache_key = 'page_blocks_' . $leadgrid_id;
        return $this->get($cache_key);
    }
    
    public function cache_api_response($endpoint, $params, $response) {
        $cache_key = 'api_' . md5($endpoint . serialize($params));
        return $this->set($cache_key, $response, 1800); // 30 minutes for API responses
    }
    
    public function get_cached_api_response($endpoint, $params) {
        $cache_key = 'api_' . md5($endpoint . serialize($params));
        return $this->get($cache_key);
    }
    
    public function warm_cache() {
        // Get all LeadGrid pages and warm their cache
        global $wpdb;
        
        $pages = $wpdb->get_results(
            "SELECT leadgrid_id FROM {$wpdb->prefix}leadgrid_pages WHERE sync_status = 'synced'"
        );
        
        $warmed = 0;
        
        foreach ($pages as $page) {
            $page_data = $this->get_page_data($page->leadgrid_id, true);
            
            if ($page_data) {
                // Pre-generate blocks HTML
                $blocks = new LeadGrid_Blocks();
                $blocks_html = $blocks->convert_to_blocks($page_data);
                $this->cache_page_blocks($page->leadgrid_id, $blocks_html);
                
                $warmed++;
            }
        }
        
        LeadGrid_Logger::log("Cache warmed for {$warmed} pages");
        
        return $warmed;
    }
    
    public function get_cache_stats() {
        global $wpdb;
        
        // Count transients
        $transient_count = $wpdb->get_var(
            "SELECT COUNT(*) FROM {$wpdb->options} 
             WHERE option_name LIKE '_transient_leadgrid_%'"
        );
        
        // Calculate approximate cache size
        $cache_size = $wpdb->get_var(
            "SELECT SUM(LENGTH(option_value)) FROM {$wpdb->options} 
             WHERE option_name LIKE '_transient_leadgrid_%'"
        );
        
        return array(
            'enabled' => $this->cache_enabled,
            'duration' => $this->cache_duration,
            'transient_count' => (int) $transient_count,
            'cache_size' => (int) $cache_size,
            'cache_size_formatted' => $this->format_bytes($cache_size)
        );
    }
    
    private function format_bytes($bytes, $precision = 2) {
        $units = array('B', 'KB', 'MB', 'GB', 'TB');
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, $precision) . ' ' . $units[$i];
    }
    
    private function get_transient_key($key) {
        return 'leadgrid_' . $key;
    }
    
    public function schedule_cache_cleanup() {
        if (!wp_next_scheduled('leadgrid_cache_cleanup')) {
            wp_schedule_event(time(), 'daily', 'leadgrid_cache_cleanup');
        }
        
        add_action('leadgrid_cache_cleanup', array($this, 'cleanup_expired_cache'));
    }
    
    public function cleanup_expired_cache() {
        global $wpdb;
        
        // Clean expired transients
        $expired_count = $wpdb->query(
            "DELETE t1, t2 FROM {$wpdb->options} t1
             LEFT JOIN {$wpdb->options} t2 ON t2.option_name = REPLACE(t1.option_name, '_transient_', '_transient_timeout_')
             WHERE t1.option_name LIKE '_transient_leadgrid_%'
             AND t2.option_value < UNIX_TIMESTAMP()"
        );
        
        if ($expired_count > 0) {
            LeadGrid_Logger::log("Cleaned up {$expired_count} expired cache entries");
        }
    }
    
    public function flush_cache_on_settings_change() {
        add_action('update_option_leadgrid_cache_enabled', array($this, 'clear_all'));
        add_action('update_option_leadgrid_cache_duration', array($this, 'clear_all'));
    }
}
