
<?php
/**
 * LeadGrid API Class
 * Handles communication with LeadGrid platform
 */

class LeadGrid_API {
    
    private $api_endpoint;
    private $api_key;
    
    public function __construct() {
        $this->api_endpoint = get_option('leadgrid_api_endpoint', 'https://api.leadgrid.co.il');
        $this->api_key = get_option('leadgrid_api_key');
        
        add_action('wp_ajax_leadgrid_import_page', array($this, 'ajax_import_page'));
        add_action('wp_ajax_leadgrid_test_connection', array($this, 'ajax_test_connection'));
    }
    
    public function get_page($page_id) {
        $response = wp_remote_get($this->api_endpoint . '/pages/' . $page_id, array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json'
            ),
            'timeout' => 30
        ));
        
        if (is_wp_error($response)) {
            return false;
        }
        
        $body = wp_remote_retrieve_body($response);
        return json_decode($body, true);
    }
    
    public function get_pages($limit = 50, $offset = 0) {
        $response = wp_remote_get($this->api_endpoint . '/pages', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json'
            ),
            'body' => json_encode(array(
                'limit' => $limit,
                'offset' => $offset
            )),
            'timeout' => 30
        ));
        
        if (is_wp_error($response)) {
            return false;
        }
        
        $body = wp_remote_retrieve_body($response);
        return json_decode($body, true);
    }
    
    public function send_page_update($wp_post_id, $content) {
        $page_data = array(
            'wp_post_id' => $wp_post_id,
            'content' => $content,
            'timestamp' => current_time('mysql')
        );
        
        $response = wp_remote_post($this->api_endpoint . '/pages/update', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json'
            ),
            'body' => json_encode($page_data),
            'timeout' => 30
        ));
        
        if (is_wp_error($response)) {
            return false;
        }
        
        return wp_remote_retrieve_response_code($response) === 200;
    }
    
    public function ajax_import_page() {
        check_ajax_referer('leadgrid_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $page_id = sanitize_text_field($_POST['page_id']);
        $page_data = $this->get_page($page_id);
        
        if (!$page_data) {
            wp_send_json_error('Failed to fetch page data');
        }
        
        // Convert LeadGrid page to WordPress blocks
        $blocks = new LeadGrid_Blocks();
        $wp_content = $blocks->convert_to_blocks($page_data);
        
        // Create WordPress post
        $post_id = wp_insert_post(array(
            'post_title' => $page_data['title'] ?? 'LeadGrid Page',
            'post_content' => $wp_content,
            'post_status' => 'draft',
            'post_type' => 'leadgrid_page',
            'meta_input' => array(
                'leadgrid_id' => $page_id,
                'leadgrid_data' => json_encode($page_data)
            )
        ));
        
        if (is_wp_error($post_id)) {
            wp_send_json_error('Failed to create WordPress post');
        }
        
        // Store mapping in custom table
        global $wpdb;
        $wpdb->insert(
            $wpdb->prefix . 'leadgrid_pages',
            array(
                'leadgrid_id' => $page_id,
                'wp_post_id' => $post_id,
                'page_data' => json_encode($page_data),
                'sync_status' => 'imported'
            )
        );
        
        wp_send_json_success(array(
            'post_id' => $post_id,
            'edit_url' => get_edit_post_link($post_id)
        ));
    }
    
    public function ajax_test_connection() {
        check_ajax_referer('leadgrid_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $response = wp_remote_get($this->api_endpoint . '/test', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json'
            ),
            'timeout' => 10
        ));
        
        if (is_wp_error($response)) {
            wp_send_json_error('Connection failed: ' . $response->get_error_message());
        }
        
        $code = wp_remote_retrieve_response_code($response);
        if ($code === 200) {
            wp_send_json_success('Connection successful');
        } else {
            wp_send_json_error('Connection failed with code: ' . $code);
        }
    }
}
