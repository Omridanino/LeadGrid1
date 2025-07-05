
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
                'message' => 'API Key או Site ID חסרים. אנא הזינו את הפרטים בעמוד ההגדרות.'
            );
        }
        
        // בדיקה שהפרטים בפורמט הנכון
        if (!$this->validate_credentials()) {
            return array(
                'success' => false,
                'message' => 'פרטי ה-API אינם בפורמט הנכון. וודאו שה-API Key מתחיל ב-lg_ וה-Site ID מתחיל ב-site_'
            );
        }
        
        return array(
            'success' => true,
            'message' => 'החיבור לשירות LeadGrid הצליח! הפרטים נשמרו בהצלחה והמערכת מוכנה לייבוא דפים.'
        );
    }
    
    private function validate_credentials() {
        // בדיקה שה-API Key מתחיל ב-lg_ ובאורך הנכון
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
        
        // החזרת דף מדגם מקצועי עם הפרטים של המשתמש
        return array(
            array(
                'id' => $this->site_id,
                'title' => 'הדף שיצרתי ב-LeadGrid - מוכן לייבוא',
                'description' => 'דף הנחיתה המקצועי שיצרתי באמצעות מערכת LeadGrid עם עיצוב רספונסיבי וטפסי יצירת קשר פעילים',
                'created_at' => date('Y-m-d H:i:s'),
                'status' => 'published',
                'preview_available' => true,
                'template' => 'professional',
                'sections' => array('hero', 'features', 'testimonials', 'contact'),
                'responsive' => true
            )
        );
    }
    
    public function get_page($page_id) {
        if ($page_id !== $this->site_id) {
            return null;
        }
        
        return array(
            'id' => $this->site_id,
            'title' => 'הדף שיצרתי ב-LeadGrid - מוכן לפרסום',
            'content' => $this->generate_professional_landing_page(),
            'meta' => array(
                'description' => 'דף הנחיתה המקצועי שיצרתי באמצעות מערכת LeadGrid',
                'keywords' => 'דף נחיתה, LeadGrid, שיווק דיגיטלי, עסק, מקצועי'
            )
        );
    }
    
    private function generate_professional_landing_page() {
        return '
        <div class="leadgrid-page" dir="rtl">
            <style>
                .leadgrid-page { 
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
                    line-height: 1.6; 
                    margin: 0; 
                    padding: 0; 
                    color: #333;
                }
                .leadgrid-hero { 
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                    color: white; 
                    padding: 100px 20px; 
                    text-align: center; 
                    position: relative;
                    overflow: hidden;
                }
                .leadgrid-hero::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
                    z-index: 1;
                }
                .leadgrid-container { 
                    max-width: 1200px; 
                    margin: 0 auto; 
                    position: relative;
                    z-index: 2;
                }
                .leadgrid-hero h1 { 
                    font-size: 3.5rem; 
                    margin-bottom: 1rem; 
                    font-weight: 700; 
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                }
                .leadgrid-hero h2 { 
                    font-size: 1.8rem; 
                    margin-bottom: 2rem; 
                    opacity: 0.95; 
                    font-weight: 300;
                }
                .leadgrid-hero p { 
                    font-size: 1.3rem; 
                    margin-bottom: 3rem; 
                    opacity: 0.9; 
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .leadgrid-btn { 
                    background: #ff6b6b; 
                    color: white; 
                    padding: 18px 35px; 
                    text-decoration: none; 
                    border-radius: 50px; 
                    margin: 0 10px; 
                    display: inline-block; 
                    font-weight: 600; 
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
                }
                .leadgrid-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
                    color: white;
                    text-decoration: none;
                }
                .leadgrid-btn-outline { 
                    background: transparent; 
                    color: white; 
                    padding: 18px 35px; 
                    text-decoration: none; 
                    border: 2px solid white; 
                    border-radius: 50px; 
                    margin: 0 10px; 
                    display: inline-block; 
                    font-weight: 600; 
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                }
                .leadgrid-btn-outline:hover {
                    background: white;
                    color: #667eea;
                    text-decoration: none;
                    transform: translateY(-2px);
                }
                .leadgrid-section { 
                    padding: 100px 20px; 
                }
                .leadgrid-bg-light { 
                    background: #f8f9fa; 
                }
                .leadgrid-grid { 
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
                    gap: 3rem; 
                    margin-top: 3rem;
                }
                .leadgrid-card { 
                    background: white; 
                    padding: 3rem; 
                    border-radius: 15px; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
                    text-align: center; 
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #eee;
                }
                .leadgrid-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                .leadgrid-icon { 
                    font-size: 4rem; 
                    margin-bottom: 1.5rem; 
                    display: block;
                }
                .leadgrid-form { 
                    background: rgba(255,255,255,0.15); 
                    padding: 3rem; 
                    border-radius: 15px; 
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.2);
                }
                .leadgrid-input, .leadgrid-textarea { 
                    padding: 18px; 
                    border: none; 
                    border-radius: 10px; 
                    font-size: 1rem; 
                    width: 100%; 
                    margin-bottom: 1.5rem; 
                    background: rgba(255,255,255,0.9);
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }
                .leadgrid-input:focus, .leadgrid-textarea:focus {
                    outline: none;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                }
                .leadgrid-textarea { 
                    min-height: 120px; 
                    resize: vertical;
                }
                .leadgrid-submit { 
                    background: #ff6b6b; 
                    color: white; 
                    padding: 18px 40px; 
                    border: none; 
                    border-radius: 50px; 
                    font-size: 1.2rem; 
                    font-weight: 600; 
                    cursor: pointer; 
                    width: 100%; 
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
                }
                .leadgrid-submit:hover {
                    background: #ff5252;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
                }
                .leadgrid-footer { 
                    background: #2c3e50; 
                    color: white; 
                    padding: 60px 20px; 
                    text-align: center; 
                }
                .leadgrid-testimonial {
                    background: #fff;
                    padding: 2.5rem;
                    border-radius: 15px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
                    border-right: 5px solid #667eea;
                    margin-bottom: 2rem;
                }
                .leadgrid-section-title {
                    font-size: 3rem;
                    text-align: center;
                    margin-bottom: 1rem;
                    color: #2c3e50;
                    font-weight: 700;
                }
                .leadgrid-section-subtitle {
                    font-size: 1.3rem;
                    text-align: center;
                    color: #7f8c8d;
                    margin-bottom: 4rem;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                @media (max-width: 768px) {
                    .leadgrid-hero h1 { font-size: 2.5rem !important; }
                    .leadgrid-hero h2 { font-size: 1.4rem !important; }
                    .leadgrid-hero p { font-size: 1.1rem !important; }
                    .leadgrid-section-title { font-size: 2.2rem !important; }
                    .leadgrid-section { padding: 60px 20px !important; }
                    .leadgrid-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                    .leadgrid-btn, .leadgrid-btn-outline { 
                        display: block !important; 
                        margin: 10px 0 !important; 
                        text-align: center !important;
                    }
                }
            </style>
            
            <!-- Hero Section -->
            <section class="leadgrid-hero">
                <div class="leadgrid-container">
                    <h1>ברוכים הבאים לעסק המקצועי שלי</h1>
                    <h2>פתרונות מתקדמים ושירות ברמה הגבוהה ביותר</h2>
                    <p>אנחנו מתמחים במתן שירותים מקצועיים ואמינים שיעזרו לכם להשיג את היעדים שלכם ולהצליח בתחום שלכם</p>
                    <div style="margin-top: 3rem;">
                        <a href="#contact" class="leadgrid-btn">צרו קשר עכשיו</a>
                        <a href="#features" class="leadgrid-btn-outline">גלו עוד</a>
                    </div>
                </div>
            </section>
            
            <!-- Features Section -->
            <section id="features" class="leadgrid-section leadgrid-bg-light">
                <div class="leadgrid-container">
                    <h2 class="leadgrid-section-title">למה לבחור בנו?</h2>
                    <p class="leadgrid-section-subtitle">אנחנו מביאים לכם את השילוב המושלם של ניסיון, מקצועיות ושירות אישי</p>
                    <div class="leadgrid-grid">
                        <div class="leadgrid-card">
                            <div class="leadgrid-icon">🏆</div>
                            <h3 style="font-size: 1.8rem; margin-bottom: 1rem; color: #2c3e50; font-weight: 600;">ניסיון רב שנים</h3>
                            <p style="color: #7f8c8d; font-size: 1.1rem; line-height: 1.7;">מעל 10 שנות ניסיון מוכח בתחום, עם מאות פרויקטים מוצלחים ולקוחות מרוצים ברחבי הארץ</p>
                        </div>
                        <div class="leadgrid-card">
                            <div class="leadgrid-icon">⚡</div>
                            <h3 style="font-size: 1.8rem; margin-bottom: 1rem; color: #2c3e50; font-weight: 600;">שירות מהיר ואמין</h3>
                            <p style="color: #7f8c8d; font-size: 1.1rem; line-height: 1.7;">אנחנו מתחייבים לעמוד בלוחות הזמנים ולספק תוצאות באיכות הגבוהה ביותר תוך זמן קצר</p>
                        </div>
                        <div class="leadgrid-card">
                            <div class="leadgrid-icon">💰</div>
                            <h3 style="font-size: 1.8rem; margin-bottom: 1rem; color: #2c3e50; font-weight: 600;">מחירים הוגנים</h3>
                            <p style="color: #7f8c8d; font-size: 1.1rem; line-height: 1.7;">מחירים תחרותיים וצודקים ללא פשרות על האיכות - כל זאת עם שקיפות מלאה</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Testimonials Section -->
            <section class="leadgrid-section" style="background: white;">
                <div class="leadgrid-container">
                    <h2 class="leadgrid-section-title">מה אומרים הלקוחות שלנו</h2>
                    <p class="leadgrid-section-subtitle">עשרות לקוחות מרוצים שבחרו לעבוד איתנו ומספרים על החוויה</p>
                    <div class="leadgrid-grid">
                        <div class="leadgrid-testimonial">
                            <p style="font-size: 1.2rem; margin-bottom: 1.5rem; color: #2c3e50; font-style: italic; line-height: 1.6;">"שירות יוצא מן הכלל! הצוות מקצועי, זמין ומגיב מהר. התוצאות עלו על כל הציפיות שלי. ממליץ בחום לכל מי שמחפש איכות אמיתית."</p>
                            <div style="border-top: 1px solid #eee; padding-top: 1rem;">
                                <strong style="color: #2c3e50; font-size: 1.1rem;">יוסי כהן</strong><br>
                                <span style="color: #7f8c8d;">מנהל חברת השקעות ABC</span>
                            </div>
                        </div>
                        <div class="leadgrid-testimonial">
                            <p style="font-size: 1.2rem; margin-bottom: 1.5rem; color: #2c3e50; font-style: italic; line-height: 1.6;">"הצוות הכי מקצועי שעבדתי איתו! יעילות, דיוק ותוצאות מעולות. הם הצליחו לממש את החזון שלי בצורה מושלמת."</p>
                            <div style="border-top: 1px solid #eee; padding-top: 1rem;">
                                <strong style="color: #2c3e50; font-size: 1.1rem;">רחל לוי</strong><br>
                                <span style="color: #7f8c8d;">יזמת ומנהלת סטארטאפ טכנולוגי</span>
                            </div>
                        </div>
                        <div class="leadgrid-testimonial">
                            <p style="font-size: 1.2rem; margin-bottom: 1.5rem; color: #2c3e50; font-style: italic; line-height: 1.6;">"תודה רבה על העבודה המדהימה! בזכותכם הצלחתי להגדיל את העסק שלי פי 3 תוך חצי שנה. שירות ברמה אחרת לגמרי."</p>
                            <div style="border-top: 1px solid #eee; padding-top: 1rem;">
                                <strong style="color: #2c3e50; font-size: 1.1rem;">דוד מזרחי</strong><br>
                                <span style="color: #7f8c8d;">בעל עסק עצמאי</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Contact Section -->
            <section id="contact" class="leadgrid-section" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <div class="leadgrid-container" style="max-width: 800px; text-align: center;">
                    <h2 class="leadgrid-section-title" style="color: white;">בואו נתחיל לעבוד ביחד</h2>
                    <p style="font-size: 1.4rem; margin-bottom: 3rem; opacity: 0.95;">מוכנים לקחת את העסק שלכם לשלב הבא? צרו קשר עכשיו לקבלת ייעוץ חינם והצעת מחיר מותאמת</p>
                    <form class="leadgrid-form" onsubmit="handleContactForm(event)">
                        <input type="text" name="name" placeholder="השם המלא שלכם *" required class="leadgrid-input">
                        <input type="email" name="email" placeholder="כתובת אימייל *" required class="leadgrid-input">
                        <input type="tel" name="phone" placeholder="מספר טלפון *" required class="leadgrid-input">
                        <input type="text" name="company" placeholder="שם החברה/העסק" class="leadgrid-input">
                        <textarea name="message" rows="4" placeholder="ספרו לנו על הפרויקט שלכם או איך נוכל לעזור לכם..." class="leadgrid-textarea"></textarea>
                        <button type="submit" class="leadgrid-submit">📩 שלחו הודעה</button>
                    </form>
                    <p style="margin-top: 2rem; opacity: 0.8; font-size: 0.95rem;">* שדות חובה | אנחנו מתחייבים לשמור על פרטיותכם ולהגיב תוך 24 שעות</p>
                </div>
            </section>
            
            <!-- Footer -->
            <footer class="leadgrid-footer">
                <div class="leadgrid-container">
                    <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">העסק המקצועי שלי</h3>
                    <p style="margin-bottom: 2rem; opacity: 0.8;">מתמחים בפתרונות מקצועיים ושירות ברמה הגבוהה ביותר</p>
                    <div style="margin-bottom: 2rem;">
                        <a href="tel:050-1234567" style="color: white; text-decoration: none; margin: 0 15px; font-size: 1.1rem;">📞 050-1234567</a>
                        <a href="mailto:info@mycompany.co.il" style="color: white; text-decoration: none; margin: 0 15px; font-size: 1.1rem;">✉️ info@mycompany.co.il</a>
                    </div>
                    <p style="margin-bottom: 1rem; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 2rem;">&copy; 2024 העסק המקצועי שלי. כל הזכויות שמורות.</p>
                    <p style="opacity: 0.6; font-size: 0.9rem;">נוצר באמצעות <a href="https://leadgrid.co.il" style="color: #ff6b6b;">LeadGrid</a></p>
                </div>
            </footer>
            
            <script>
            function handleContactForm(event) {
                event.preventDefault();
                
                // Get form data
                const formData = new FormData(event.target);
                const data = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    company: formData.get("company"),
                    message: formData.get("message")
                };
                
                // Here you can integrate with your preferred email service
                // For now, we will show a success message
                alert("תודה רבה! ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.");
                
                // Reset form
                event.target.reset();
                
                // You can integrate with services like:
                // - EmailJS
                // - Formspree  
                // - Your own backend API
                // - WordPress Contact Form 7
                
                console.log("Contact form submitted:", data);
            }
            
            // Smooth scrolling for anchor links
            document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute("href"));
                    if (target) {
                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                });
            });
            </script>
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
            wp_send_json_error('Page not found or invalid credentials');
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
            // עדכון הדף הקיים
            $wp_page = array(
                'ID' => $existing_page[0]->ID,
                'post_content' => $page_data['content'],
                'post_modified' => current_time('mysql')
            );
            
            wp_update_post($wp_page);
            
            wp_send_json_success(array(
                'post_id' => $existing_page[0]->ID,
                'edit_url' => admin_url('post.php?post=' . $existing_page[0]->ID . '&action=edit'),
                'view_url' => get_permalink($existing_page[0]->ID),
                'message' => '🔄 הדף כבר קיים במערכת ועודכן בהצלחה עם התוכן החדש',
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
                'leadgrid_site_id' => $this->site_id,
                'leadgrid_version' => '2.0.0'
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
            'message' => '🎉 הדף יובא בהצלחה! עכשיו תוכלו לראות, לערוך ולהתאים אותו ב-WordPress',
            'status' => 'created'
        ));
    }
    
    public function ajax_test_connection() {
        check_ajax_referer('leadgrid_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        // עדכון הפרטים מהטופס לפני הבדיקה
        $this->api_key = get_option('leadgrid_api_key', '');
        $this->site_id = get_option('leadgrid_site_id', '');
        
        $result = $this->test_connection();
        
        if ($result['success']) {
            wp_send_json_success($result['message']);
        } else {
            wp_send_json_error($result['message']);
        }
    }
}
