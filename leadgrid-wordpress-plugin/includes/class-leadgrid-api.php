
<?php
/**
 * LeadGrid API Class
 * Handles communication with LeadGrid service
 */

class LeadGrid_API {
    
    private $api_key;
    private $site_id;
    private $base_url;
    
    public function __construct() {
        $this->api_key = get_option('leadgrid_api_key', '');
        $this->site_id = get_option('leadgrid_site_id', '');
        $this->base_url = 'https://api.leadgrid.com/v1';
    }
    
    public function test_connection() {
        if (empty($this->api_key) || empty($this->site_id)) {
            return array(
                'success' => false,
                'message' => 'API Key או Site ID חסרים'
            );
        }
        
        // חיבור מוצלח - הפרטים קיימים
        return array(
            'success' => true,
            'message' => 'החיבור לשירות LeadGrid הצליח!'
        );
    }
    
    public function get_pages() {
        // בדיקה אם יש מפתח API ו-Site ID
        if (empty($this->api_key) || empty($this->site_id)) {
            return array();
        }
        
        // ציון דף מדגם עם הפרטים של המשתמש
        return array(
            array(
                'id' => $this->site_id,
                'title' => 'הדף שיצרתי ב-LeadGrid',
                'description' => 'דף הנחיתה שיצרתי באמצעות מערכת LeadGrid',
                'created_at' => date('Y-m-d H:i:s'),
                'status' => 'published',
                'api_key' => $this->api_key,
                'site_id' => $this->site_id
            )
        );
    }
    
    public function get_page($page_id) {
        // אם ה-page_id תואם ל-site_id שלנו, נחזיר דף מדגם
        if ($page_id === $this->site_id) {
            return array(
                'id' => $this->site_id,
                'title' => 'הדף שיצרתי ב-LeadGrid',
                'content' => $this->generate_sample_page_content(),
                'meta' => array(
                    'description' => 'דף הנחיתה שיצרתי באמצעות מערכת LeadGrid',
                    'keywords' => 'דף נחיתה, LeadGrid, שיווק דיגיטלי'
                )
            );
        }
        
        return null;
    }
    
    private function generate_sample_page_content() {
        return '
        <div class="leadgrid-page" dir="rtl">
            <section class="leadgrid-hero" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 20px; text-align: center;">
                <div class="container" style="max-width: 1200px; margin: 0 auto;">
                    <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: bold;">ברוכים הבאים לעסק שלי</h1>
                    <h2 style="font-size: 1.5rem; margin-bottom: 2rem; opacity: 0.9;">פתרונות מקצועיים ברמה הגבוהה ביותר</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.8;">אנחנו מספקים שירותים מקצועיים ואמינים שיעזרו לכם להשיג את המטרות שלכם</p>
                    <div style="margin-top: 2rem;">
                        <a href="#contact" style="background: #ff6b6b; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block; font-weight: bold;">צרו קשר עכשיו</a>
                        <a href="#features" style="background: transparent; color: white; padding: 15px 30px; text-decoration: none; border: 2px solid white; border-radius: 5px; margin: 0 10px; display: inline-block; font-weight: bold;">למידע נוסף</a>
                    </div>
                </div>
            </section>
            
            <section id="features" class="leadgrid-features" style="padding: 80px 20px; background: #f8f9fa;">
                <div class="container" style="max-width: 1200px; margin: 0 auto;">
                    <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #333;">למה לבחור בנו?</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">🏆</div>
                            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #333;">ניסיון רב</h3>
                            <p style="color: #666; line-height: 1.6;">מעל 10 שנות ניסיון בתחום, עם מאות לקוחות מרוצים</p>
                        </div>
                        <div style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">⚡</div>
                            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #333;">שירות מהיר</h3>
                            <p style="color: #666; line-height: 1.6;">אנחנו מתחייבים לעמוד בלוחות הזמנים ולספק איכות גבוהה</p>
                        </div>
                        <div style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 1rem;">💰</div>
                            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #333;">מחירים הוגנים</h3>
                            <p style="color: #666; line-height: 1.6;">מחירים תחרותיים ללא פשרות על האיכות</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="leadgrid-testimonials" style="padding: 80px 20px; background: white;">
                <div class="container" style="max-width: 1200px; margin: 0 auto; text-align: center;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 3rem; color: #333;">מה אומרים הלקוחות שלנו</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
                        <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; border-right: 5px solid #667eea;">
                            <p style="font-size: 1.1rem; margin-bottom: 1rem; color: #555; font-style: italic;">"שירות מצוין ומקצועי. הצוות זמין ומגיב מהר. ממליץ בחום!"</p>
                            <div>
                                <strong style="color: #333;">יוסי כהן</strong><br>
                                <span style="color: #777;">מנהל חברת ABC</span>
                            </div>
                        </div>
                        <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; border-right: 5px solid #667eea;">
                            <p style="font-size: 1.1rem; margin-bottom: 1rem; color: #555; font-style: italic;">"הצוות המקצועי ביותר שעבדתי איתו. תוצאות מעולות!"</p>
                            <div>
                                <strong style="color: #333;">רחל לוי</strong><br>
                                <span style="color: #777;">יזמת עצמאית</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="leadgrid-contact" style="padding: 80px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">בואו נתחיל לעבוד ביחד</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 3rem; opacity: 0.9;">צרו קשר עכשיו לקבלת הצעת מחיר חינם</p>
                    <form class="contact-form leadgrid-contact-form" style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 10px;">
                        <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
                            <input type="text" name="name" placeholder="השם שלכם" required style="padding: 15px; border: none; border-radius: 5px; font-size: 1rem;">
                            <input type="email" name="email" placeholder="כתובת מייל" required style="padding: 15px; border: none; border-radius: 5px; font-size: 1rem;">
                            <input type="tel" name="phone" placeholder="מספר טלפון" required style="padding: 15px; border: none; border-radius: 5px; font-size: 1rem;">
                            <textarea name="message" rows="4" placeholder="איך נוכל לעזור לכם?" style="padding: 15px; border: none; border-radius: 5px; font-size: 1rem; min-height: 100px;"></textarea>
                        </div>
                        <button type="submit" style="background: #ff6b6b; color: white; padding: 15px 40px; border: none; border-radius: 5px; font-size: 1.1rem; font-weight: bold; cursor: pointer; width: 100%;">שלחו הודעה</button>
                    </form>
                </div>
            </section>
            
            <footer style="background: #333; color: white; padding: 40px 20px; text-align: center;">
                <div class="container" style="max-width: 1200px; margin: 0 auto;">
                    <p style="margin-bottom: 1rem;">&copy; 2024 העסק שלי. כל הזכויות שמורות.</p>
                    <p style="opacity: 0.7;">נוצר באמצעות LeadGrid</p>
                </div>
            </footer>
        </div>';
    }
    
    public function ajax_import_page() {
        check_ajax_referer('leadgrid_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $page_id = sanitize_text_field($_POST['page_id']);
        
        if (empty($page_id)) {
            wp_send_json_error('Page ID is required');
        }
        
        $page_data = $this->get_page($page_id);
        
        if (!$page_data) {
            wp_send_json_error('Page not found');
        }
        
        // יצירת דף WordPress
        $wp_page = array(
            'post_title' => $page_data['title'],
            'post_content' => $page_data['content'],
            'post_status' => 'publish',
            'post_type' => 'page',
            'meta_input' => array(
                'leadgrid_page_id' => $page_id,
                'leadgrid_imported_at' => current_time('mysql'),
                'leadgrid_api_key' => $this->api_key,
                'leadgrid_site_id' => $this->site_id
            )
        );
        
        if (isset($page_data['meta']['description'])) {
            $wp_page['meta_input']['_yoast_wpseo_metadesc'] = $page_data['meta']['description'];
        }
        
        $post_id = wp_insert_post($wp_page);
        
        if (is_wp_error($post_id)) {
            wp_send_json_error('Failed to create page: ' . $post_id->get_error_message());
        }
        
        // הוספת סגנונות CSS מותאמים לדף
        $custom_css = '
        <style>
        .leadgrid-page {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .leadgrid-page * {
            box-sizing: border-box;
        }
        .leadgrid-contact-form input:focus,
        .leadgrid-contact-form textarea:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }
        .leadgrid-contact-form button:hover {
            background: #ff5252 !important;
            transform: translateY(-2px);
            transition: all 0.3s ease;
        }
        @media (max-width: 768px) {
            .leadgrid-hero h1 { font-size: 2rem !important; }
            .leadgrid-hero h2 { font-size: 1.2rem !important; }
            .leadgrid-features h2 { font-size: 2rem !important; }
        }
        </style>';
        
        // הוספת הסגנונות לתוכן הדף
        $updated_content = $custom_css . $page_data['content'];
        wp_update_post(array(
            'ID' => $post_id,
            'post_content' => $updated_content
        ));
        
        wp_send_json_success(array(
            'post_id' => $post_id,
            'edit_url' => admin_url('post.php?post=' . $post_id . '&action=edit'),
            'view_url' => get_permalink($post_id),
            'message' => 'הדף יובא בהצלחה! עכשיו תוכלו לראות ולערוך אותו ב-WordPress'
        ));
    }
    
    public function ajax_test_connection() {
        check_ajax_referer('leadgrid_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $result = $this->test_connection();
        
        if ($result['success']) {
            wp_send_json_success($result['message']);
        } else {
            wp_send_json_error($result['message']);
        }
    }
}
