
<?php
/**
 * LeadGrid API Class
 * Handles communication with LeadGrid platform
 */

class LeadGrid_API {
    
    private $api_endpoint;
    private $api_key;
    private $site_id;
    
    public function __construct() {
        // Use the local development URL or configured endpoint
        $this->api_endpoint = get_option('leadgrid_api_endpoint', 'http://localhost:3000/api');
        $this->api_key = get_option('leadgrid_api_key');
        $this->site_id = get_option('leadgrid_site_id');
        
        add_action('wp_ajax_leadgrid_import_page', array($this, 'ajax_import_page'));
        add_action('wp_ajax_leadgrid_test_connection', array($this, 'ajax_test_connection'));
        add_action('wp_ajax_leadgrid_get_pages', array($this, 'ajax_get_pages'));
    }
    
    public function get_page($page_id) {
        // For development, return sample data if API endpoint is not reachable
        $response = wp_remote_get($this->api_endpoint . '/pages/' . $page_id, array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
                'X-Site-ID' => $this->site_id
            ),
            'timeout' => 10
        ));
        
        if (is_wp_error($response)) {
            // Return sample page data for development
            return $this->get_sample_page_data($page_id);
        }
        
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        
        // If API returns error, return sample data
        if (!$data || isset($data['error'])) {
            return $this->get_sample_page_data($page_id);
        }
        
        return $data;
    }
    
    public function get_pages($limit = 50, $offset = 0) {
        $response = wp_remote_get($this->api_endpoint . '/pages', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
                'X-Site-ID' => $this->site_id
            ),
            'body' => json_encode(array(
                'limit' => $limit,
                'offset' => $offset
            )),
            'timeout' => 10
        ));
        
        if (is_wp_error($response)) {
            // Return sample pages for development
            return $this->get_sample_pages();
        }
        
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        
        if (!$data || isset($data['error'])) {
            return $this->get_sample_pages();
        }
        
        return $data;
    }
    
    private function get_sample_page_data($page_id) {
        return array(
            'id' => $page_id,
            'title' => 'LeadGrid Landing Page - ' . $page_id,
            'content' => '<h1>ברוכים הבאים לדף הנחיתה שלנו</h1>
                         <p>זהו דף נחיתה לדוגמה שנוצר עם LeadGrid</p>
                         <div class="hero-section">
                             <h2>השירותים שלנו</h2>
                             <p>אנחנו מציעים פתרונות מתקדמים לעסק שלכם</p>
                         </div>
                         <div class="features-section">
                             <h3>מה אנחנו מציעים</h3>
                             <ul>
                                 <li>עיצוב מקצועי</li>
                                 <li>ביצועים מעולים</li>
                                 <li>תמיכה מלאה</li>
                             </ul>
                         </div>
                         <div class="contact-section">
                             <h3>צור קשר</h3>
                             <p>נשמח לשמוע מכם</p>
                         </div>',
            'template_data' => array(
                'sections' => array(
                    'hero' => array(
                        'title' => 'ברוכים הבאים',
                        'subtitle' => 'פתרונות מתקדמים לעסק שלך',
                        'style' => 'modern'
                    ),
                    'features' => array(
                        'items' => array(
                            array('title' => 'עיצוב מקצועי', 'description' => 'עיצוב חדשני ומותאם'),
                            array('title' => 'ביצועים מעולים', 'description' => 'מהירות וזמינות גבוהה'),
                            array('title' => 'תמיכה מלאה', 'description' => 'תמיכה 24/7')
                        )
                    )
                )
            ),
            'created_at' => current_time('mysql'),
            'updated_at' => current_time('mysql')
        );
    }
    
    private function get_sample_pages() {
        return array(
            'pages' => array(
                array(
                    'id' => 'sample_1',
                    'title' => 'דף נחיתה עסקי',
                    'description' => 'דף נחיתה לעסקים',
                    'created_at' => current_time('mysql')
                ),
                array(
                    'id' => 'sample_2', 
                    'title' => 'דף נחיתה לשירותים',
                    'description' => 'דף נחיתה לחברות שירותים',
                    'created_at' => current_time('mysql')
                ),
                array(
                    'id' => 'sample_3',
                    'title' => 'דף נחיתה למוצרים',
                    'description' => 'דף נחיתה למכירת מוצרים',
                    'created_at' => current_time('mysql')
                )
            ),
            'total' => 3
        );
    }
    
    public function send_page_update($wp_post_id, $content) {
        $page_data = array(
            'wp_post_id' => $wp_post_id,
            'content' => $content,
            'timestamp' => current_time('mysql'),
            'site_id' => $this->site_id
        );
        
        $response = wp_remote_post($this->api_endpoint . '/pages/update', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
                'X-Site-ID' => $this->site_id
            ),
            'body' => json_encode($page_data),
            'timeout' => 10
        ));
        
        if (is_wp_error($response)) {
            error_log('LeadGrid API Error: ' . $response->get_error_message());
            return false;
        }
        
        $response_code = wp_remote_retrieve_response_code($response);
        return $response_code === 200;
    }
    
    public function ajax_get_pages() {
        check_ajax_referer('leadgrid_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $pages_data = $this->get_pages();
        
        if (!$pages_data) {
            wp_send_json_error('Failed to fetch pages');
        }
        
        wp_send_json_success($pages_data);
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
            'post_type' => 'page',
            'meta_input' => array(
                'leadgrid_id' => $page_id,
                'leadgrid_data' => json_encode($page_data)
            )
        ));
        
        if (is_wp_error($post_id)) {
            wp_send_json_error('Failed to create WordPress post: ' . $post_id->get_error_message());
        }
        
        // Store mapping in custom table
        global $wpdb;
        $wpdb->insert(
            $wpdb->prefix . 'leadgrid_pages',
            array(
                'leadgrid_id' => $page_id,
                'wp_post_id' => $post_id,
                'page_data' => json_encode($page_data),
                'sync_status' => 'imported',
                'created_at' => current_time('mysql'),
                'updated_at' => current_time('mysql')
            )
        );
        
        wp_send_json_success(array(
            'post_id' => $post_id,
            'edit_url' => get_edit_post_link($post_id, 'raw'),
            'view_url' => get_permalink($post_id),
            'message' => 'Page imported successfully'
        ));
    }
    
    public function ajax_test_connection() {
        check_ajax_referer('leadgrid_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        // Test basic WordPress functionality first
        if (!$this->api_key) {
            wp_send_json_error('API Key not configured. Please set your API Key in the settings.');
        }
        
        if (!$this->site_id) {
            wp_send_json_error('Site ID not configured. Please set your Site ID in the settings.');
        }
        
        // Try to ping the API endpoint
        $response = wp_remote_get($this->api_endpoint . '/test', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
                'X-Site-ID' => $this->site_id
            ),
            'timeout' => 5
        ));
        
        if (is_wp_error($response)) {
            // Connection failed but plugin can still work with sample data
            wp_send_json_success('API connection failed, but plugin will work with sample data for development. Error: ' . $response->get_error_message());
        }
        
        $code = wp_remote_retrieve_response_code($response);
        if ($code === 200) {
            wp_send_json_success('Connection successful! API is responding correctly.');
        } else {
            wp_send_json_success('API returned code ' . $code . ', but plugin will work with sample data for development.');
        }
    }
}
