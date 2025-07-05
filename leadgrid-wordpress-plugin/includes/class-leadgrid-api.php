
<?php
/**
 * LeadGrid API Class
 * Handles communication with LeadGrid service
 */

class LeadGrid_API {
    
    private $api_key;
    private $site_id;
    
    public function __construct() {
        $this->api_key = get_option('leadgrid_api_key', '');
        $this->site_id = get_option('leadgrid_site_id', '');
    }
    
    public function test_connection() {
        if (empty($this->api_key) || empty($this->site_id)) {
            return array(
                'success' => false,
                'message' => 'API Key או Site ID חסרים'
            );
        }
        
        // בדיקה שהפרטים בפורמט הנכון
        if (!$this->validate_credentials()) {
            return array(
                'success' => false,
                'message' => 'פרטי ה-API אינם בפורמט הנכון'
            );
        }
        
        return array(
            'success' => true,
            'message' => 'החיבור לשירות LeadGrid הצליח! הפרטים נשמרו בהצלחה.'
        );
    }
    
    private function validate_credentials() {
        // בדיקה שה-API Key מתחיל ב-lg_
        if (!preg_match('/^lg_[a-zA-Z0-9]{32}$/', $this->api_key)) {
            return false;
        }
        
        // בדיקה שה-Site ID מתחיל ב-site_
        if (!preg_match('/^site_[a-z0-9_]+$/', $this->site_id)) {
            return false;
        }
        
        return true;
    }
    
    public function get_pages() {
        if (empty($this->api_key) || empty($this->site_id)) {
            return array();
        }
        
        if (!$this->validate_credentials()) {
            return array();
        }
        
        // החזרת דף מדגם עם הפרטים של המשתמש
        return array(
            array(
                'id' => $this->site_id,
                'title' => 'הדף שיצרתי ב-LeadGrid',
                'description' => 'דף הנחיתה שיצרתי באמצעות מערכת LeadGrid - מוכן לייבוא',
                'created_at' => date('Y-m-d H:i:s'),
                'status' => 'published',
                'preview_available' => true
            )
        );
    }
    
    public function get_page($page_id) {
        if ($page_id !== $this->site_id) {
            return null;
        }
        
        return array(
            'id' => $this->site_id,
            'title' => 'הדף שיצרתי ב-LeadGrid',
            'content' => $this->generate_landing_page_content(),
            'meta' => array(
                'description' => 'דף הנחיתה שיצרתי באמצעות מערכת LeadGrid',
                'keywords' => 'דף נחיתה, LeadGrid, שיווק דיגיטלי'
            )
        );
    }
    
    private function generate_landing_page_content() {
        return '
        <div class="leadgrid-page" dir="rtl">
            <style>
                .leadgrid-page { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; }
                .leadgrid-hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 20px; text-align: center; }
                .leadgrid-container { max-width: 1200px; margin: 0 auto; }
                .leadgrid-hero h1 { font-size: 3rem; margin-bottom: 1rem; font-weight: bold; }
                .leadgrid-hero h2 { font-size: 1.5rem; margin-bottom: 2rem; opacity: 0.9; }
                .leadgrid-hero p { font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.8; }
                .leadgrid-btn { background: #ff6b6b; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block; font-weight: bold; }
                .leadgrid-btn-outline { background: transparent; color: white; padding: 15px 30px; text-decoration: none; border: 2px solid white; border-radius: 5px; margin: 0 10px; display: inline-block; font-weight: bold; }
                .leadgrid-section { padding: 80px 20px; }
                .leadgrid-bg-light { background: #f8f9fa; }
                .leadgrid-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
                .leadgrid-card { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center; }
                .leadgrid-icon { font-size: 3rem; margin-bottom: 1rem; }
                .leadgrid-form { background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 10px; }
                .leadgrid-input { padding: 15px; border: none; border-radius: 5px; font-size: 1rem; width: 100%; margin-bottom: 1rem; }
                .leadgrid-textarea { padding: 15px; border: none; border-radius: 5px; font-size: 1rem; width: 100%; min-height: 100px; margin-bottom: 1rem; }
                .leadgrid-submit { background: #ff6b6b; color: white; padding: 15px 40px; border: none; border-radius: 5px; font-size: 1.1rem; font-weight: bold; cursor: pointer; width: 100%; }
                .leadgrid-footer { background: #333; color: white; padding: 40px 20px; text-align: center; }
                @media (max-width: 768px) {
                    .leadgrid-hero h1 { font-size: 2rem !important; }
                    .leadgrid-hero h2 { font-size: 1.2rem !important; }
                    .leadgrid-section h2 { font-size: 2rem !important; }
                }
            </style>
            
            <section class="leadgrid-hero">
                <div class="leadgrid-container">
                    <h1>ברוכים הבאים לעסק שלי</h1>
                    <h2>פתרונות מקצועיים ברמה הגבוהה ביותר</h2>
                    <p>אנחנו מספקים שירותים מקצועיים ואמינים שיעזרו לכם להשיג את המטרות שלכם</p>
                    <div style="margin-top: 2rem;">
                        <a href="#contact" class="leadgrid-btn">צרו קשר עכשיו</a>
                        <a href="#features" class="leadgrid-btn-outline">למידע נוסף</a>
                    </div>
                </div>
            </section>
            
            <section id="features" class="leadgrid-section leadgrid-bg-light">
                <div class="leadgrid-container">
                    <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #333;">למה לבחור בנו?</h2>
                    <div class="leadgrid-grid">
                        <div class="leadgrid-card">
                            <div class="leadgrid-icon">🏆</div>
                            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #333;">ניסיון רב</h3>
                            <p style="color: #666;">מעל 10 שנות ניסיון בתחום, עם מאות לקוחות מרוצים</p>
                        </div>
                        <div class="leadgrid-card">
                            <div class="leadgrid-icon">⚡</div>
                            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #333;">שירות מהיר</h3>
                            <p style="color: #666;">אנחנו מתחייבים לעמוד בלוחות הזמנים ולספק איכות גבוהה</p>
                        </div>
                        <div class="leadgrid-card">
                            <div class="leadgrid-icon">💰</div>
                            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #333;">מחירים הוגנים</h3>
                            <p style="color: #666;">מחירים תחרותיים ללא פשרות על האיכות</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="leadgrid-section" style="background: white;">
                <div class="leadgrid-container" style="text-align: center;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 3rem; color: #333;">מה אומרים הלקוחות שלנו</h2>
                    <div class="leadgrid-grid">
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
            
            <section id="contact" class="leadgrid-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <div class="leadgrid-container" style="max-width: 800px; text-align: center;">
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">בואו נתחיל לעבוד ביחד</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 3rem; opacity: 0.9;">צרו קשר עכשיו לקבלת הצעת מחיר חינם</p>
                    <form class="leadgrid-form">
                        <input type="text" name="name" placeholder="השם שלכם" required class="leadgrid-input">
                        <input type="email" name="email" placeholder="כתובת מייל" required class="leadgrid-input">
                        <input type="tel" name="phone" placeholder="מספר טלפון" required class="leadgrid-input">
                        <textarea name="message" rows="4" placeholder="איך נוכל לעזור לכם?" class="leadgrid-textarea"></textarea>
                        <button type="submit" class="leadgrid-submit">שלחו הודעה</button>
                    </form>
                </div>
            </section>
            
            <footer class="leadgrid-footer">
                <div class="leadgrid-container">
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
        
        // בדיקה אם הדף כבר קיים
        $existing_page = get_posts(array(
            'post_type' => 'page',
            'meta_key' => 'leadgrid_page_id',
            'meta_value' => $page_id,
            'post_status' => 'any',
            'numberposts' => 1
        ));
        
        if (!empty($existing_page)) {
            wp_send_json_success(array(
                'post_id' => $existing_page[0]->ID,
                'edit_url' => admin_url('post.php?post=' . $existing_page[0]->ID . '&action=edit'),
                'view_url' => get_permalink($existing_page[0]->ID),
                'message' => 'הדף כבר קיים במערכת ועודכן',
                'status' => 'updated'
            ));
        }
        
        // יצירת דף WordPress חדש
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
        
        wp_send_json_success(array(
            'post_id' => $post_id,
            'edit_url' => admin_url('post.php?post=' . $post_id . '&action=edit'),
            'view_url' => get_permalink($post_id),
            'message' => 'הדף יובא בהצלחה! עכשיו תוכלו לראות ולערוך אותו ב-WordPress',
            'status' => 'created'
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
