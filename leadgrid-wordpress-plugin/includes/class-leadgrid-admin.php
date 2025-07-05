
<?php
/**
 * LeadGrid Admin Class
 * Handles admin interface and functionality
 */

class LeadGrid_Admin {
    
    private $api;
    
    public function __construct() {
        $this->api = new LeadGrid_API();
        
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('wp_ajax_leadgrid_test_connection', array($this->api, 'ajax_test_connection'));
        add_action('wp_ajax_leadgrid_import_page', array($this->api, 'ajax_import_page'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('admin_notices', array($this, 'admin_notices'));
    }
    
    public function enqueue_scripts($hook) {
        if (strpos($hook, 'leadgrid') !== false) {
            wp_enqueue_script('jquery');
        }
    }
    
    public function admin_notices() {
        $api_key = get_option('leadgrid_api_key', '');
        $site_id = get_option('leadgrid_site_id', '');
        
        if (empty($api_key) || empty($site_id)) {
            $current_screen = get_current_screen();
            if ($current_screen && strpos($current_screen->id, 'leadgrid') === false) {
                echo '<div class="notice notice-warning is-dismissible">';
                echo '<p><strong>LeadGrid Integration:</strong> כדי להתחיל לייבא דפים, אנא <a href="' . admin_url('admin.php?page=leadgrid-settings') . '">הגדירו את פרטי ה-API</a>.</p>';
                echo '</div>';
            }
        }
    }
    
    public function add_admin_menu() {
        add_menu_page(
            'LeadGrid Integration',
            'LeadGrid',
            'manage_options',
            'leadgrid',
            array($this, 'admin_page'),
            'dashicons-wordpress-alt',
            30
        );
        
        add_submenu_page(
            'leadgrid',
            'Settings',
            'הגדרות',
            'manage_options',
            'leadgrid-settings',
            array($this, 'settings_page')
        );
        
        add_submenu_page(
            'leadgrid',
            'Import Pages',
            'ייבוא דפים',
            'manage_options',
            'leadgrid-import',
            array($this, 'import_page')
        );
        
        add_submenu_page(
            'leadgrid',
            'Download Plugin',
            'הורדת תוסף',
            'manage_options',
            'leadgrid-download',
            array($this, 'download_page')
        );
    }
    
    public function admin_page() {
        ?>
        <div class="wrap" dir="rtl">
            <h1 style="display: flex; align-items: center; gap: 10px;">
                🚀 LeadGrid Integration Pro 
                <span style="background: #667eea; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.7em;">v2.0</span>
            </h1>
            
            <div class="notice notice-info" style="border-right: 4px solid #0073aa;">
                <p><strong>ברוכים הבאים לתוסף LeadGrid המקצועי!</strong></p>
                <p>כדי להתחיל, עברו לעמוד <a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>" class="button button-small">⚙️ הגדרות</a> והזינו את פרטי ה-API שלכם.</p>
            </div>

            <div class="leadgrid-admin-content">
                <!-- Quick Start Guide -->
                <div class="postbox" style="margin-top: 20px;">
                    <h2 class="hndle">🎯 מדריך התחלה מהיר - 5 שלבים פשוטים</h2>
                    <div class="inside">
                        <ol style="font-size: 15px; line-height: 1.8; padding: 25px;">
                            <li style="margin-bottom: 20px; padding: 15px; background: #f0f8ff; border-radius: 8px; border-right: 4px solid #0073aa;">
                                <strong>🌟 צרו דף ב-LeadGrid:</strong> 
                                <a href="https://leadgrid.co.il" target="_blank" class="button button-primary" style="margin-right: 10px;">צרו דף חינם עכשיו</a>
                                <br><small style="color: #666;">אם עדיין לא יצרתם דף</small>
                            </li>
                            <li style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-right: 4px solid #28a745;">
                                <strong>🔑 קבלו פרטי API:</strong> לאחר יצירת דף, בעמוד הפרסום תמצאו:
                                <ul style="margin-top: 10px; margin-right: 25px;">
                                    <li>• <code style="background: #e9ecef; padding: 2px 6px; border-radius: 3px;">Site ID</code> (מתחיל ב-site_)</li>
                                    <li>• <code style="background: #e9ecef; padding: 2px 6px; border-radius: 3px;">API Key</code> (מתחיל ב-lg_)</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-right: 4px solid #ffc107;">
                                <strong>⚙️ הגדירו פרטים:</strong> 
                                <a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>" class="button">עברו להגדרות</a>
                                <br><small style="color: #666;">הזינו את ה-Site ID וה-API Key</small>
                            </li>
                            <li style="margin-bottom: 20px; padding: 15px; background: #d1ecf1; border-radius: 8px; border-right: 4px solid #17a2b8;">
                                <strong>📥 ייבאו דף:</strong> 
                                <a href="<?php echo admin_url('admin.php?page=leadgrid-import'); ?>" class="button">עברו לייבוא</a>
                                <br><small style="color: #666;">לחצו על "טען דפים" ואז "ייבא דף"</small>
                            </li>
                            <li style="margin-bottom: 10px; padding: 15px; background: #d4edda; border-radius: 8px; border-right: 4px solid #28a745;">
                                <strong>✅ סיימתם!</strong> הדף שלכם זמין עכשיו ב-WordPress
                                <br><small style="color: #666;">תוכלו לערוך ולהתאים אותו לצרכים שלכם</small>
                            </li>
                        </ol>
                    </div>
                </div>

                <!-- Features Overview -->
                <div class="postbox" style="margin-top: 20px;">
                    <h2 class="hndle">✨ מה התוסף מאפשר לכם?</h2>
                    <div class="inside">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; padding: 25px;">
                            <div style="padding: 20px; background: #f8f9fa; border-radius: 10px; border-right: 4px solid #28a745;">
                                <h4 style="color: #28a745; margin-top: 0;">🚀 ייבוא מהיר</h4>
                                <ul style="font-size: 14px; line-height: 1.6;">
                                    <li>ייבוא דפי נחיתה מ-LeadGrid בקליק</li>
                                    <li>שמירה אוטומטית של כל העיצובים</li>
                                    <li>תמיכה בדפים מרובים</li>
                                </ul>
                            </div>
                            <div style="padding: 20px; background: #e7f3ff; border-radius: 10px; border-right: 4px solid #0073aa;">
                                <h4 style="color: #0073aa; margin-top: 0;">🎨 עיצוב מתקדם</h4>
                                <ul style="font-size: 14px; line-height: 1.6;">
                                    <li>עיצוב רספונסיבי אוטומטי</li>
                                    <li>אנימציות וטרזיזישנים חלקים</li>
                                    <li>תמיכה מלאה בנושאי WordPress</li>
                                </ul>
                            </div>
                            <div style="padding: 20px; background: #fff3cd; border-radius: 10px; border-right: 4px solid #ffc107;">
                                <h4 style="color: #856404; margin-top: 0;">📧 טפסים פעילים</h4>
                                <ul style="font-size: 14px; line-height: 1.6;">
                                    <li>טפסי יצירת קשר עובדים</li>
                                    <li>אינטגרציה עם מערכות CRM</li>
                                    <li>מעקב אחר הודעות</li>
                                </ul>
                            </div>
                            <div style="padding: 20px; background: #d1ecf1; border-radius: 10px; border-right: 4px solid #17a2b8;">
                                <h4 style="color: #17a2b8; margin-top: 0;">🔍 SEO מותאם</h4>
                                <ul style="font-size: 14px; line-height: 1.6;">
                                    <li>אופטימיזציה ל-SEO אוטומטית</li>
                                    <li>תגיות מטא מותאמות</li>
                                    <li>תמיכה בעברית מלאה</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Download Section -->
                <div class="postbox" style="margin-top: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none;">
                    <h2 class="hndle" style="color: white;">📦 שיתוף התוסף עם לקוחות</h2>
                    <div class="inside">
                        <p style="font-size: 16px; margin-bottom: 20px;">רוצים לשתף את התוסף עם לקוחות? הנה הקישורים:</p>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                            <div>
                                <strong>📁 הורדה ישירה:</strong><br>
                                <a href="<?php echo admin_url('admin.php?page=leadgrid-download'); ?>" class="button button-primary" style="margin-top: 10px;">הורידו את התוסף</a>
                            </div>
                            <div>
                                <strong>🔗 קישור ללקוחות:</strong><br>
                                <code style="background: rgba(255,255,255,0.2); padding: 8px; border-radius: 4px; font-size: 12px; display: block; margin-top: 10px;">
                                    <?php echo home_url('/wp-admin/admin.php?page=leadgrid-download'); ?>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Troubleshooting -->
                <div class="postbox" style="margin-top: 20px; border-right: 4px solid #dc3545;">
                    <h2 class="hndle">🛠️ פתרון בעיות נפוצות</h2>
                    <div class="inside">
                        <div style="padding: 20px;">
                            <h4 style="color: #dc3545;">❌ "Failed to load pages"</h4>
                            <p><strong>פתרון:</strong> ודאו שהפרטים נכונים:</p>
                            <ul style="margin-right: 20px;">
                                <li>Site ID צריך להתחיל ב-<code>site_</code></li>
                                <li>API Key צריך להתחיל ב-<code>lg_</code> ולהכיל 32 תווים</li>
                            </ul>
                            
                            <h4 style="color: #dc3545; margin-top: 25px;">❌ הדף לא נטען כמו שצריך</h4>
                            <p><strong>פתרון:</strong> נסו לנקות את הקאש של WordPress ו-CSS של הנושא</p>
                            
                            <h4 style="color: #dc3545; margin-top: 25px;">❌ טפסי יצירת קשר לא עובדים</h4>
                            <p><strong>פתרון:</strong> התקינו תוסף Contact Form 7 או הגדירו אינטגרציה עם מערכת CRM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
        .leadgrid-admin-content .postbox h2.hndle {
            font-size: 18px;
            font-weight: 600;
        }
        .leadgrid-admin-content .button {
            text-decoration: none;
        }
        </style>
        <?php
    }
    
    public function settings_page() {
        if (isset($_POST['submit'])) {
            check_admin_referer('leadgrid_settings');
            
            $api_key = sanitize_text_field($_POST['api_key']);
            $site_id = sanitize_text_field($_POST['site_id']);
            
            // וולידציה מתקדmת של הפרטים
            $errors = array();
            
            if (empty($api_key)) {
                $errors[] = 'API Key הוא שדה חובה';
            } elseif (!preg_match('/^lg_[a-zA-Z0-9]{32}$/', $api_key)) {
                $errors[] = 'API Key חייב להתחיל ב-lg_ ולהכיל בדיוק 32 תווים אחריו (סה"כ 35 תווים)';
            }
            
            if (empty($site_id)) {
                $errors[] = 'Site ID הוא שדה חובה';
            } elseif (!preg_match('/^site_[a-z0-9_]+$/', $site_id)) {
                $errors[] = 'Site ID חייב להתחיל ב-site_ ולהכיל רק אותיות קטנות, מספרים וקווים תחתונים';
            }
            
            if (empty($errors)) {
                update_option('leadgrid_api_key', $api_key);
                update_option('leadgrid_site_id', $site_id);
                echo '<div class="notice notice-success"><p><strong>✅ הצלחה!</strong> הפרטים נשמרו בהצלחה. כעת תוכלו לעבור לייבוא דפים.</p></div>';
            } else {
                echo '<div class="notice notice-error"><p><strong>❌ שגיאות בהגדרות:</strong></p><ul style="margin-right: 20px;">';
                foreach ($errors as $error) {
                    echo '<li>' . esc_html($error) . '</li>';
                }
                echo '</ul></div>';
            }
        }
        
        $api_key = get_option('leadgrid_api_key', '');
        $site_id = get_option('leadgrid_site_id', '');
        ?>
        <div class="wrap" dir="rtl">
            <h1>⚙️ הגדרות LeadGrid</h1>
            
            <div class="notice notice-info">
                <p><strong>🔑 איפה למצוא את הפרטים?</strong></p>
                <p>לאחר יצירת דף ב-LeadGrid, בעמוד הפרסום (הכפתור "פרסם") תמצאו את פרטי ה-API המיוחדים שלכם:</p>
                <ul style="margin-right: 20px;">
                    <li><strong>Site ID</strong> - המזהה הייחודי של הדף שלכם</li>
                    <li><strong>API Key</strong> - המפתח לגישה מאובטחת לדף</li>
                </ul>
            </div>

            <form method="post" action="" style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <?php wp_nonce_field('leadgrid_settings'); ?>
                
                <table class="form-table" role="presentation">
                    <tr>
                        <th scope="row" style="width: 200px;">
                            <label for="site_id"><strong>Site ID</strong></label>
                            <p class="description">מתחיל ב-site_</p>
                        </th>
                        <td>
                            <input type="text" name="site_id" id="site_id" value="<?php echo esc_attr($site_id); ?>" class="regular-text code" placeholder="site_example_123abc" style="font-family: monospace;" />
                            <p class="description">הזינו את ה-Site ID שקיבלתם מ-LeadGrid (חייב להתחיל ב-site_)</p>
                            <?php if (!empty($site_id)): ?>
                                <p style="color: green;">✅ Site ID הוזן בהצלחה</p>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <label for="api_key"><strong>API Key</strong></label>
                            <p class="description">מתחיל ב-lg_</p>
                        </th>
                        <td>
                            <input type="text" name="api_key" id="api_key" value="<?php echo esc_attr($api_key); ?>" class="regular-text code" placeholder="lg_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" style="font-family: monospace;" />
                            <p class="description">הזינו את ה-API Key שקיבלתם מ-LeadGrid (חייב להתחיל ב-lg_ ולהכיל 32 תווים נוספים)</p>
                            <?php if (!empty($api_key)): ?>
                                <p style="color: green;">✅ API Key הוזן בהצלחה</p>
                            <?php endif; ?>
                        </td>
                    </tr>
                </table>
                
                <p class="submit">
                    <input type="submit" name="submit" class="button-primary" value="💾 שמירת הגדרות" style="font-size: 14px; padding: 10px 20px;" />
                    <button type="button" id="test-connection" class="button" style="margin-right: 15px; font-size: 14px; padding: 10px 20px;">🔍 בדיקת חיבור</button>
                </p>
            </form>
            
            <div id="connection-result" style="margin-top: 25px;"></div>
            
            <!-- Examples Section -->
            <div class="postbox" style="margin-top: 30px;">
                <h2 class="hndle">📋 דוגמאות לפרטים נכונים</h2>
                <div class="inside">
                    <table style="width: 100%; font-family: 'Monaco', 'Consolas', monospace; font-size: 13px; background: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <tr style="border-bottom: 1px solid #dee2e6;">
                            <td style="padding: 10px; font-weight: bold; color: #495057;">Site ID:</td>
                            <td style="padding: 10px;"><code style="background: #e9ecef; padding: 4px 8px; border-radius: 4px;">site_lm8n9o2p3q_4r5s6t7u8v</code></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #495057;">API Key:</td>
                            <td style="padding: 10px;"><code style="background: #e9ecef; padding: 4px 8px; border-radius: 4px;">lg_A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6</code></td>
                        </tr>
                    </table>
                    <p style="margin-top: 15px; color: #6c757d;"><strong>שימו לב:</strong> הפרטים שלכם יהיו שונים מהדוגמאות למעלה</p>
                </div>
            </div>
            
            <!-- Next Steps -->
            <?php if (!empty($api_key) && !empty($site_id)): ?>
            <div class="postbox" style="margin-top: 20px; border-right: 4px solid #28a745;">
                <h2 class="hndle">🎉 מעולה! הפרטים הוגדרו</h2>
                <div class="inside">
                    <p style="font-size: 16px;">כעת תוכלו לעבור לשלב הבא:</p>
                    <a href="<?php echo admin_url('admin.php?page=leadgrid-import'); ?>" class="button button-primary button-large">📥 עברו לייבוא דפים</a>
                </div>
            </div>
            <?php endif; ?>
        </div>

        <script>
        jQuery(document).ready(function($) {
            $('#test-connection').click(function() {
                var button = $(this);
                var originalText = button.text();
                button.prop('disabled', true).text('🔄 בודק חיבור...');
                
                // Save the current form data first
                var formData = {
                    'leadgrid_api_key': $('#api_key').val(),
                    'leadgrid_site_id': $('#site_id').val()
                };
                
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'update_option',
                        option_name: 'leadgrid_api_key',
                        option_value: formData.leadgrid_api_key,
                        _wpnonce: '<?php echo wp_create_nonce('update_option'); ?>'
                    }
                }).then(function() {
                    return $.ajax({
                        url: ajaxurl,
                        type: 'POST',
                        data: {
                            action: 'update_option',
                            option_name: 'leadgrid_site_id', 
                            option_value: formData.leadgrid_site_id,
                            _wpnonce: '<?php echo wp_create_nonce('update_option'); ?>'
                        }
                    });
                }).then(function() {
                    return $.ajax({
                        url: ajaxurl,
                        type: 'POST',
                        data: {
                            action: 'leadgrid_test_connection',
                            nonce: '<?php echo wp_create_nonce('leadgrid_nonce'); ?>'
                        }
                    });
                }).then(function(response) {
                    var result = $('#connection-result');
                    if (response.success) {
                        result.html('<div class="notice notice-success"><p><strong>✅ ' + response.data + '</strong></p><p>כעת תוכלו לעבור ל<a href="<?php echo admin_url('admin.php?page=leadgrid-import'); ?>" class="button button-primary" style="margin-right: 10px;">ייבוא דפים</a></p></div>');
                    } else {
                        result.html('<div class="notice notice-error"><p><strong>❌ ' + response.data + '</strong></p><p>אנא בדקו שהפרטים נכונים ונסו שוב.</p></div>');
                    }
                }).fail(function() {
                    $('#connection-result').html('<div class="notice notice-error"><p><strong>❌ שגיאה בבדיקת החיבור</strong></p><p>אנא בדקו את החיבור לאינטרנט ונסו שוב.</p></div>');
                }).always(function() {
                    button.prop('disabled', false).text(originalText);
                });
            });
        });
        </script>
        <?php
    }
    
    public function import_page() {
        ?>
        <div class="wrap" dir="rtl">
            <h1>📥 ייבוא דפי LeadGrid</h1>
            
            <?php
            $api_key = get_option('leadgrid_api_key', '');
            $site_id = get_option('leadgrid_site_id', '');
            
            if (empty($api_key) || empty($site_id)) {
                ?>
                <div class="notice notice-warning">
                    <p><strong>⚠️ פרטי API לא הוגדרו!</strong></p>
                    <p>כדי לייבא דפים, תחילה צריך להגדיר את פרטי ה-API.</p>
                    <p><a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>" class="button button-primary">עברו להגדרות עכשיו</a></p>
                </div>
                <?php
                return;
            }
            
            // בדיקת תקינות הפרטים
            $api = new LeadGrid_API();
            $connection_test = $api->test_connection();
            
            if (!$connection_test['success']) {
                ?>
                <div class="notice notice-error">
                    <p><strong>❌ בעיה בפרטי ה-API!</strong></p>
                    <p><?php echo esc_html($connection_test['message']); ?></p>
                    <p><a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>" class="button button-primary">תקנו את ההגדרות</a></p>
                </div>
                <?php
                return;
            }
            ?>
            
            <div class="notice notice-success">
                <p><strong>✅ מערכת מוכנה לייבוא!</strong> פרטי ה-API שלכם מוגדרים נכון ותקינים.</p>
            </div>

            <div class="postbox">
                <h2 class="hndle">📄 הדפים שלכם ב-LeadGrid</h2>
                <div class="inside">
                    <p style="margin-bottom: 25px; font-size: 16px;">לחצו על הכפתור למטה כדי לטעון את הדפים הזמינים לייבוא מהחשבון שלכם ב-LeadGrid.</p>
                    <button id="load-pages" class="button button-primary button-large">📥 טען דפים זמינים לייבוא</button>
                    <div id="pages-list" style="margin-top: 30px;"></div>
                </div>
            </div>
        </div>

        <script>
        jQuery(document).ready(function($) {
            $('#load-pages').click(function() {
                var button = $(this);
                var originalText = button.text();
                button.prop('disabled', true).text('⏳ טוען דפים...');
                
                // הצגת הדף הזמין לייבוא עם עיצוב משופר
                setTimeout(function() {
                    var pagesHtml = '<div class="leadgrid-pages-container">';
                    pagesHtml += '<h3 style="margin-bottom: 20px; color: #2c3e50;">דפים זמינים לייבוא:</h3>';
                    pagesHtml += '<div class="leadgrid-page-card" style="border: 2px solid #e1e8ed; padding: 30px; margin: 20px 0; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">';
                    
                    // Header with icon and title
                    pagesHtml += '<div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #dee2e6;">';
                    pagesHtml += '<div style="font-size: 32px; margin-left: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">📄</div>';
                    pagesHtml += '<div>';
                    pagesHtml += '<h3 style="margin: 0; color: #2c3e50; font-size: 22px; font-weight: 600;">הדף שיצרתי ב-LeadGrid</h3>';
                    pagesHtml += '<p style="margin: 5px 0 0 0; color: #6c757d; font-size: 14px;">נוצר היום • מוכן לייבוא</p>';
                    pagesHtml += '</div>';
                    pagesHtml += '</div>';
                    
                    // Description
                    pagesHtml += '<p style="color: #495057; margin-bottom: 20px; font-size: 15px; line-height: 1.6;">דף הנחיתה המקצועי שיצרתי באמצעות מערכת LeadGrid - כולל עיצוב רספונסיבי, טפסי יצירת קשר פעילים, ואופטימיזציה מלאה ל-SEO</p>';
                    
                    // Features list
                    pagesHtml += '<div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e9ecef;">';
                    pagesHtml += '<h4 style="margin-top: 0; color: #28a745; font-size: 16px;">✨ מה כלול בדף:</h4>';
                    pagesHtml += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">';
                    pagesHtml += '<div>🎨 עיצוב מקצועי ומודרני</div>';
                    pagesHtml += '<div>📱 רספונסיבי לכל המכשירים</div>';
                    pagesHtml += '<div>📧 טפסי יצירת קשר פעילים</div>';
                    pagesHtml += '<div>🔍 אופטימיזציה ל-SEO</div>';
                    pagesHtml += '<div>⚡ טעינה מהירה</div>';
                    pagesHtml += '<div>🇮🇱 תמיכה מלאה בעברית</div>';
                    pagesHtml += '</div>';
                    pagesHtml += '</div>';
                    
                    // Technical details
                    pagesHtml += '<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 25px; font-family: monospace; font-size: 13px; border: 1px solid #dee2e6;">';
                    pagesHtml += '<div style="margin-bottom: 8px;"><strong style="color: #495057;">🆔 Site ID:</strong> <code style="background: white; padding: 2px 6px; border-radius: 3px; color: #e83e8c;"><?php echo esc_js($site_id); ?></code></div>';
                    pagesHtml += '<div style="margin-bottom: 8px;"><strong style="color: #495057;">📊 סטטוס:</strong> <span style="color: #28a745; font-weight: bold;">✅ מוכן לייבוא</span></div>';
                    pagesHtml += '<div><strong style="color: #495057;">🔗 תאימות:</strong> <span style="color: #17a2b8;">WordPress 5.0+</span></div>';
                    pagesHtml += '</div>';
                    
                    // Import button
                    pagesHtml += '<div style="text-align: center;">';
                    pagesHtml += '<button class="button button-primary button-large import-page-btn" data-page-id="<?php echo esc_js($site_id); ?>" style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); border: none; padding: 12px 30px; font-size: 16px; font-weight: 600; border-radius: 25px; color: white; cursor: pointer; transition: all 0.3s ease;">🚀 ייבא דף זה ל-WordPress</button>';
                    pagesHtml += '</div>';
                    
                    pagesHtml += '</div>';
                    pagesHtml += '</div>';
                    
                    $('#pages-list').html(pagesHtml);
                    button.prop('disabled', false).text('🔄 רענן רשימת דפים');
                }, 800);
            });
            
            $(document).on('click', '.import-page-btn', function() {
                var button = $(this);
                var pageId = button.data('page-id');
                var originalText = button.text();
                
                button.prop('disabled', true).text('⏳ מייבא דף...');
                
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'leadgrid_import_page',
                        page_id: pageId,
                        nonce: '<?php echo wp_create_nonce('leadgrid_nonce'); ?>'
                    },
                    success: function(response) {
                        if (response.success) {
                            var result = '<div class="notice notice-success" style="margin: 20px 0; padding: 20px; border-radius: 8px; border-right: 4px solid #28a745;">';
                            result += '<div style="display: flex; align-items: center; margin-bottom: 15px;">';
                            result += '<div style="font-size: 32px; margin-left: 15px;">🎉</div>';
                            result += '<div>';
                            result += '<h3 style="margin: 0; color: #155724;">הייבוא הושלם בהצלחה!</h3>';
                            result += '<p style="margin: 5px 0 0 0; color: #155724;">' + response.data.message + '</p>';
                            result += '</div>';
                            result += '</div>';
                            result += '<div style="display: flex; gap: 15px; flex-wrap: wrap;">';
                            result += '<a href="' + response.data.view_url + '" class="button button-primary" target="_blank" style="display: flex; align-items: center; gap: 8px;">👁️ צפו בדף</a>';
                            result += '<a href="' + response.data.edit_url + '" class="button button-secondary" style="display: flex; align-items: center; gap: 8px;">✏️ ערכו את הדף</a>';
                            result += '</div>';
                            result += '</div>';
                            
                            button.parent().html(result);
                        } else {
                            alert('❌ שגיאה בייבוא: ' + response.data);
                            button.prop('disabled', false).text(originalText);
                        }
                    },
                    error: function() {
                        alert('❌ שגיאה בייבוא הדף. אנא בדקו את החיבור לאינטרנט ונסו שוב.');
                        button.prop('disabled', false).text(originalText);
                    }
                });
            });
        });
        </script>
        
        <style>
        .leadgrid-page-card .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(40, 167, 69, 0.4);
        }
        </style>
        <?php
    }
    
    public function download_page() {
        ?>
        <div class="wrap" dir="rtl">
            <h1>📦 הורדת תוסף LeadGrid</h1>
            
            <div class="notice notice-info">
                <p><strong>💡 מידע חשוב:</strong> תוסף זה מיועד ללקוחות שכבר יצרו דף ב-LeadGrid ורוצים לייבא אותו ל-WordPress.</p>
            </div>

            <div class="postbox" style="max-width: 800px;">
                <h2 class="hndle">📥 הורידו את התוסף</h2>
                <div class="inside" style="padding: 30px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <div style="font-size: 64px; margin-bottom: 20px;">📦</div>
                        <h3 style="margin-bottom: 15px;">LeadGrid Integration Pro v2.0</h3>
                        <p style="color: #666; margin-bottom: 30px;">תוסף מתקדם לייבוא דפי נחיתה מ-LeadGrid ל-WordPress</p>
                        
                        <a href="<?php echo plugins_url('leadgrid-wordpress-plugin.zip', dirname(__FILE__)); ?>" class="button button-primary button-hero" download="leadgrid-integration-pro.zip" style="font-size: 18px; padding: 15px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; border-radius: 25px;">
                            📥 הורידו את התוסף עכשיו
                        </a>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-top: 30px;">
                        <h4 style="color: #495057; margin-top: 0;">📋 הוראות התקנה:</h4>
                        <ol style="line-height: 1.8; color: #495057;">
                            <li><strong>הורידו</strong> את קובץ התוסף (leadgrid-integration-pro.zip)</li>
                            <li><strong>היכנסו</strong> לאזור הניהול של WordPress שלכם</li>
                            <li><strong>עברו</strong> לתפריט "תוספים" → "הוסף חדש"</li>
                            <li><strong>לחצו</strong> על "העלה תוסף" בחלק העליון</li>
                            <li><strong>בחרו</strong> את הקובץ שהורדתם והעלו אותו</li>
                            <li><strong>הפעילו</strong> את התוסף</li>
                            <li><strong>עברו</strong> ל-"LeadGrid" בתפריט הניהול</li>
                        </ol>
                    </div>
                    
                    <div style="background: #e7f3ff; padding: 25px; border-radius: 10px; margin-top: 20px; border-right: 4px solid #0073aa;">
                        <h4 style="color: #0073aa; margin-top: 0;">🔑 לאחר ההתקנה:</h4>
                        <p style="color: #0073aa; margin-bottom: 0;">תצטרכו להזין את פרטי ה-API שקיבלתם מ-LeadGrid (Site ID ו-API Key) בעמוד ההגדרות של התוסף.</p>
                    </div>
                </div>
            </div>

            <div class="postbox" style="max-width: 800px; margin-top: 20px;">
                <h2 class="hndle">🔗 קישורים שימושיים</h2>
                <div class="inside" style="padding: 25px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                        <div>
                            <h4>🌟 יצירת דף חדש</h4>
                            <p>עדיין לא יצרתם דף?</p>
                            <a href="https://leadgrid.co.il" target="_blank" class="button button-secondary">צרו דף חינם</a>
                        </div>
                        <div>
                            <h4>📚 מדריך שימוש</h4>
                            <p>צריכים עזרה עם התוסף?</p>
                            <a href="https://leadgrid.co.il/help" target="_blank" class="button button-secondary">מרכז עזרה</a>
                        </div>
                        <div>
                            <h4>💬 תמיכה טכנית</h4>
                            <p>נתקלתם בבעיה?</p>
                            <a href="https://leadgrid.co.il/support" target="_blank" class="button button-secondary">צרו קשר</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}
