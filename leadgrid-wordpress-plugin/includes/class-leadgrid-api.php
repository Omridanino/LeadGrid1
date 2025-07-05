
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
        // For now, simulate connection test
        if (empty($this->api_key) || empty($this->site_id)) {
            return array(
                'success' => false,
                'message' => 'API Key או Site ID חסרים'
            );
        }
        
        // Simulate successful connection
        return array(
            'success' => true,
            'message' => 'החיבור לשירות LeadGrid הצליח!'
        );
    }
    
    public function get_pages() {
        // Return sample pages for now
        return $this->get_sample_pages();
    }
    
    public function get_page($page_id) {
        return $this->get_sample_page_data($page_id);
    }
    
    private function get_sample_pages() {
        return array(
            array(
                'id' => 'sample-business-1',
                'title' => 'עסק שירותים מקצועי',
                'description' => 'דף נחיתה מקצועי לעסק שירותים',
                'created_at' => '2024-01-15 10:30:00',
                'status' => 'published'
            ),
            array(
                'id' => 'sample-restaurant-1',
                'title' => 'מסעדה איטלקית',
                'description' => 'דף נחיתה למסעדה עם תפריט ופרטי התקשרות',
                'created_at' => '2024-01-10 14:20:00',
                'status' => 'published'
            ),
            array(
                'id' => 'sample-tech-1',
                'title' => 'חברת הייטק',
                'description' => 'דף נחיתה לחברת טכנולוגיה חדשנית',
                'created_at' => '2024-01-05 09:15:00',
                'status' => 'published'
            )
        );
    }
    
    private function get_sample_page_data($page_id) {
        $pages_data = array(
            'sample-business-1' => array(
                'id' => 'sample-business-1',
                'title' => 'עסק שירותים מקצועי',
                'content' => '
                <div class="leadgrid-page">
                    <section class="leadgrid-hero">
                        <div class="container">
                            <h1>שירותים מקצועיים ברמה הגבוהה ביותר</h1>
                            <h2>פתרונות מותאמים אישית לכל לקוח</h2>
                            <p>אנחנו מספקים שירותים מקצועיים ואמינים כבר מעל 10 שנים. הצוות המנוסה שלנו כאן כדי לעזור לכם להשיג את המטרות שלכם.</p>
                            <a href="#contact" class="btn">צרו קשר עכשיו</a>
                            <a href="#features" class="btn">למידע נוסף</a>
                        </div>
                    </section>
                    
                    <section id="features" class="leadgrid-features">
                        <div class="container">
                            <h2>למה לבחור בנו?</h2>
                            <div class="features-grid">
                                <div class="feature-item">
                                    <h3>ניסיון רב</h3>
                                    <p>מעל 10 שנות ניסיון בתחום, עם מאות לקוחות מרוצים</p>
                                </div>
                                <div class="feature-item">
                                    <h3>שירות אמין</h3>
                                    <p>אנחנו מתחייבים לעמוד בלוחות הזמנים ולספק איכות גבוהה</p>
                                </div>
                                <div class="feature-item">
                                    <h3>מחירים הוגנים</h3>
                                    <p>מחירים תחרותיים ללא פשרות על האיכות</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section class="leadgrid-testimonials">
                        <div class="container">
                            <h2>מה אומרים הלקוחות שלנו</h2>
                            <div class="testimonials-grid">
                                <div class="testimonial-item">
                                    <p>"שירות מצוין ומקצועי. ממליץ בחום!"</p>
                                    <div class="testimonial-author">
                                        <strong>יוסי כהן</strong>
                                        <span>מנהל חברת ABC</span>
                                    </div>
                                </div>
                                <div class="testimonial-item">
                                    <p>"הצוות המקצועי ביותר שעבדתי איתו. תודה רבה!"</p>
                                    <div class="testimonial-author">
                                        <strong>רחל לוי</strong>
                                        <span>יזמת עצמאית</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="contact" class="leadgrid-contact">
                        <div class="container">
                            <h2>בואו נתחיל לעבוד ביחד</h2>
                            <p>צרו קשר עכשיו לקבלת הצעת מחיר חינם</p>
                            <form class="contact-form leadgrid-contact-form">
                                <input type="text" name="name" placeholder="השם שלכם" required>
                                <input type="email" name="email" placeholder="כתובת מייל" required>
                                <input type="tel" name="phone" placeholder="מספר טלפון" required>
                                <textarea name="message" rows="4" placeholder="איך נוכל לעזור לכם?"></textarea>
                                <button type="submit">שלחו הודעה</button>
                            </form>
                        </div>
                    </section>
                </div>',
                'meta' => array(
                    'description' => 'שירותים מקצועיים ברמה הגבוהה ביותר',
                    'keywords' => 'שירותים, מקצועי, איכות'
                )
            ),
            
            'sample-restaurant-1' => array(
                'id' => 'sample-restaurant-1',
                'title' => 'מסעדה איטלקית',
                'content' => '
                <div class="leadgrid-page">
                    <section class="leadgrid-hero">
                        <div class="container">
                            <h1>המסעדה האיטלקית הטובה ביותר בעיר</h1>
                            <h2>חוויה קולינרית אותנטית</h2>
                            <p>טעמים מסורתיים מאיטליה, חומרי גלם טריים ואווירה חמה ומזמינה. בואו לחוות את האוכל האיטלקי האמיתי.</p>
                            <a href="#contact" class="btn">הזמינו שולחן</a>
                            <a href="#features" class="btn">התפריט שלנו</a>
                        </div>
                    </section>
                    
                    <section id="features" class="leadgrid-features">
                        <div class="container">
                            <h2>מה מיוחד אצלנו?</h2>
                            <div class="features-grid">
                                <div class="feature-item">
                                    <h3>מתכונים מסורתיים</h3>
                                    <p>מתכונים עתיקים מאיטליה שעברו מדור לדור</p>
                                </div>
                                <div class="feature-item">
                                    <h3>חומרי גלם טריים</h3>
                                    <p>רק החומרים הטובים ביותר, טריים מדי יום</p>
                                </div>
                                <div class="feature-item">
                                    <h3>אווירה מיוחדת</h3>
                                    <p>עיצוב איטלקי אותנטי ושירות חם ואישי</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section class="leadgrid-testimonials">
                        <div class="container">
                            <h2>מה אומרים האורחים שלנו</h2>
                            <div class="testimonials-grid">
                                <div class="testimonial-item">
                                    <p>"הפסטה הכי טעימה שאכלתי מחוץ לאיטליה!"</p>
                                    <div class="testimonial-author">
                                        <strong>דוד משה</strong>
                                        <span>לקוח קבוע</span>
                                    </div>
                                </div>
                                <div class="testimonial-item">
                                    <p>"חוויה קולינרית מדהימה. חוזרים שוב ושוב!"</p>
                                    <div class="testimonial-author">
                                        <strong>שרה אברהם</strong>
                                        <span>חובבת אוכל</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="contact" class="leadgrid-contact">
                        <div class="container">
                            <h2>הזמינו שולחן עכשיו</h2>
                            <p>טלפון: 03-1234567 | כתובת: רחוב הרצל 123, תל אביב</p>
                            <form class="contact-form leadgrid-contact-form">
                                <input type="text" name="name" placeholder="השם שלכם" required>
                                <input type="email" name="email" placeholder="כתובת מייל" required>
                                <input type="tel" name="phone" placeholder="מספר טלפון" required>
                                <input type="date" name="date" required>
                                <input type="time" name="time" required>
                                <input type="number" name="guests" placeholder="מספר סועדים" min="1" max="20" required>
                                <textarea name="message" rows="3" placeholder="בקשות מיוחדות"></textarea>
                                <button type="submit">הזמינו שולחן</button>
                            </form>
                        </div>
                    </section>
                </div>',
                'meta' => array(
                    'description' => 'המסעדה האיטלקית הטובה ביותר בעיר',
                    'keywords' => 'מסעדה, איטלקי, אוכל, טעים'
                )
            ),
            
            'sample-tech-1' => array(
                'id' => 'sample-tech-1',
                'title' => 'חברת הייטק',
                'content' => '
                <div class="leadgrid-page">
                    <section class="leadgrid-hero">
                        <div class="container">
                            <h1>חדשנות טכנולוגית ברמה העולמית</h1>
                            <h2>פתרונות דיגיטליים מתקדמים</h2>
                            <p>אנחנו מפתחים טכנולוגיות מתקדמות שמובילות את השוק. הצטרפו אלינו למהפכה הדיגיטלית הבאה.</p>
                            <a href="#contact" class="btn">צרו קשר</a>
                            <a href="#features" class="btn">המוצרים שלנו</a>
                        </div>
                    </section>
                    
                    <section id="features" class="leadgrid-features">
                        <div class="container">
                            <h2>מה אנחנו מציעים?</h2>
                            <div class="features-grid">
                                <div class="feature-item">
                                    <h3>בינה מלאכותית</h3>
                                    <p>פתרונות AI מתקדמים לעסקים בכל הגדלים</p>
                                </div>
                                <div class="feature-item">
                                    <h3>פיתוח אפליקציות</h3>
                                    <p>אפליקציות מובייל ווב חדשניות ואמינות</p>
                                </div>
                                <div class="feature-item">
                                    <h3>ייעוץ טכנולוגי</h3>
                                    <p>ייעוץ מקצועי להטמעת טכנולוגיות חדשות</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section class="leadgrid-testimonials">
                        <div class="container">
                            <h2>לקוחות מרוצים</h2>
                            <div class="testimonials-grid">
                                <div class="testimonial-item">
                                    <p>"הפתרון שלהם חסך לנו שעות עבודה רבות!"</p>
                                    <div class="testimonial-author">
                                        <strong>אבי רוזן</strong>
                                        <span>מנכ"ל חברת XYZ</span>
                                    </div>
                                </div>
                                <div class="testimonial-item">
                                    <p>"צוות מקצועי ופתרונות חדשניים. מומלץ בחום!"</p>
                                    <div class="testimonial-author">
                                        <strong>לינה שמש</strong>
                                        <span>מנהלת IT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="contact" class="leadgrid-contact">
                        <div class="container">
                            <h2>בואו נשוחח על הפרויקט שלכם</h2>
                            <p>נשמח לשמוע על הרעיונות שלכם ולעזור להגשים אותם</p>
                            <form class="contact-form leadgrid-contact-form">
                                <input type="text" name="name" placeholder="השם שלכם" required>
                                <input type="email" name="email" placeholder="כתובת מייל" required>
                                <input type="text" name="company" placeholder="שם החברה">
                                <input type="tel" name="phone" placeholder="מספר טלפון" required>
                                <textarea name="project" rows="4" placeholder="ספרו לנו על הפרויקט שלכם" required></textarea>
                                <button type="submit">שלחו בקשה</button>
                            </form>
                        </div>
                    </section>
                </div>',
                'meta' => array(
                    'description' => 'חדשנות טכנולוגית ברמה העולמית',
                    'keywords' => 'הייטק, טכנולוגיה, AI, פיתוח'
                )
            )
        );
        
        return isset($pages_data[$page_id]) ? $pages_data[$page_id] : null;
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
        
        // Create WordPress page
        $wp_page = array(
            'post_title' => $page_data['title'],
            'post_content' => $page_data['content'],
            'post_status' => 'publish',
            'post_type' => 'page',
            'meta_input' => array(
                'leadgrid_page_id' => $page_id,
                'leadgrid_imported_at' => current_time('mysql')
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
            'message' => 'Page imported successfully!'
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
