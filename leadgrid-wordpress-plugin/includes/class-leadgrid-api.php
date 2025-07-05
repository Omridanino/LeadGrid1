
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
        // Always return sample data for development since API doesn't exist yet
        return $this->get_sample_page_data($page_id);
    }
    
    public function get_pages($limit = 50, $offset = 0) {
        // Always return sample data for development
        return $this->get_sample_pages();
    }
    
    private function get_sample_page_data($page_id) {
        return array(
            'id' => $page_id,
            'title' => 'דף נחיתה LeadGrid - ' . $page_id,
            'content' => '
                <div style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; direction: rtl;">
                    <!-- Hero Section -->
                    <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 20px; text-align: center;">
                        <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: bold;">
                            ברוכים הבאים לעסק שלנו
                        </h1>
                        <p style="font-size: 1.5rem; margin-bottom: 30px; opacity: 0.9;">
                            פתרונות מתקדמים ומקצועיים עבור הלקוחות שלנו
                        </p>
                        <a href="#contact" style="display: inline-block; background: #ff6b6b; color: white; padding: 15px 40px; font-size: 1.2rem; text-decoration: none; border-radius: 50px; margin-top: 20px;">
                            צור קשר עכשיו
                        </a>
                    </section>

                    <!-- Features Section -->
                    <section style="padding: 80px 20px; background: #f8f9fa;">
                        <div style="text-align: center; margin-bottom: 50px;">
                            <h2 style="font-size: 2.5rem; color: #333; margin-bottom: 20px;">השירותים שלנו</h2>
                            <p style="font-size: 1.2rem; color: #666;">מה אנחנו מציעים ללקוחות שלנו</p>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                            <div style="background: white; padding: 40px; border-radius: 10px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                <h3 style="color: #667eea; font-size: 1.5rem; margin-bottom: 15px;">עיצוב מקצועי</h3>
                                <p style="color: #666; line-height: 1.6;">עיצוב חדשני ומותאם אישית לכל לקוח</p>
                            </div>
                            <div style="background: white; padding: 40px; border-radius: 10px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                <h3 style="color: #667eea; font-size: 1.5rem; margin-bottom: 15px;">ביצועים מעולים</h3>
                                <p style="color: #666; line-height: 1.6;">מהירות וזמינות גבוהה עם תמיכה מלאה</p>
                            </div>
                            <div style="background: white; padding: 40px; border-radius: 10px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                <h3 style="color: #667eea; font-size: 1.5rem; margin-bottom: 15px;">תמיכה 24/7</h3>
                                <p style="color: #666; line-height: 1.6;">תמיכה מלאה בכל שעות היום והלילה</p>
                            </div>
                        </div>
                    </section>

                    <!-- Contact Section -->
                    <section id="contact" style="padding: 80px 20px; background: #333; color: white; text-align: center;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 20px;">צור קשר</h2>
                        <p style="font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9;">נשמח לשמוע מכם ולעזור בכל שאלה</p>
                        <div style="max-width: 500px; margin: 0 auto;">
                            <form style="display: grid; gap: 20px;">
                                <input type="text" placeholder="שם מלא" style="padding: 15px; border: none; border-radius: 5px; font-size: 1rem;">
                                <input type="email" placeholder="אימייל" style="padding: 15px; border: none; border-radius: 5px; font-size: 1rem;">
                                <textarea placeholder="הודעה" rows="5" style="padding: 15px; border: none; border-radius: 5px; font-size: 1rem; resize: vertical;"></textarea>
                                <button type="submit" style="background: #ff6b6b; color: white; padding: 15px; border: none; border-radius: 5px; font-size: 1.1rem; cursor: pointer;">
                                    שלח הודעה
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            ',
            'template_data' => array(
                'sections' => array(
                    'hero' => array(
                        'title' => 'ברוכים הבאים לעסק שלנו',
                        'subtitle' => 'פתרונות מתקדמים ומקצועיים',
                        'style' => 'modern'
                    ),
                    'features' => array(
                        'items' => array(
                            array('title' => 'עיצוב מקצועי', 'description' => 'עיצוב חדשני ומותאם'),
                            array('title' => 'ביצועים מעולים', 'description' => 'מהירות וזמינות גבוהה'),
                            array('title' => 'תמיכה 24/7', 'description' => 'תמיכה מלאה בכל עת')
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
                    'id' => 'sample_business',
                    'title' => 'דף נחיתה עסקי מקצועי',
                    'description' => 'דף נחיתה מלא עם hero, features וטופס יצירת קשר',
                    'created_at' => current_time('mysql')
                ),
                array(
                    'id' => 'sample_services', 
                    'title' => 'דף שירותים מתקדם',
                    'description' => 'דף מתקדם להצגת שירותים עם גלריה',
                    'created_at' => current_time('mysql')
                ),
                array(
                    'id' => 'sample_products',
                    'title' => 'דף מוצרים ומכירות',
                    'description' => 'דף נחיתה למכירת מוצרים עם pricing',
                    'created_at' => current_time('mysql')
                )
            ),
            'total' => 3
        );
    }
    
    public function send_page_update($wp_post_id, $content) {
        // For development, just log the update
        error_log('LeadGrid: Page update sent for post ID ' . $wp_post_id);
        return true;
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
        
        // Create WordPress post directly with the HTML content
        $post_id = wp_insert_post(array(
            'post_title' => $page_data['title'] ?? 'LeadGrid Page',
            'post_content' => $page_data['content'], // Use the full HTML content
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
        
        // For development, always return success since we're using sample data
        wp_send_json_success('Connection test successful! Using sample data for development. API Key: ' . substr($this->api_key, 0, 8) . '... Site ID: ' . $this->site_id);
    }
}
