
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
    }
    
    public function enqueue_scripts($hook) {
        if (strpos($hook, 'leadgrid') !== false) {
            wp_enqueue_script('jquery');
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
    }
    
    public function admin_page() {
        ?>
        <div class="wrap" dir="rtl">
            <h1>🚀 LeadGrid Integration Pro</h1>
            
            <div class="notice notice-info">
                <p><strong>ברוכים הבאים לתוסף LeadGrid!</strong></p>
                <p>כדי להתחיל, אנא עברו לעמוד <a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>">הגדרות</a> והזינו את פרטי ה-API שלכם.</p>
            </div>

            <div class="leadgrid-admin-content">
                <div class="postbox" style="margin-top: 20px;">
                    <h2 class="hndle">מדריך מהיר - 4 שלבים פשוטים</h2>
                    <div class="inside">
                        <ol style="font-size: 14px; line-height: 1.8; padding: 20px;">
                            <li style="margin-bottom: 15px;"><strong>יצרתם דף ב-LeadGrid?</strong> אם לא, <a href="https://leadgrid.co.il" target="_blank">לחצו כאן ליצירת דף חינם</a></li>
                            <li style="margin-bottom: 15px;"><strong>קבלו את פרטי ה-API:</strong> לאחר יצירת דף, בעמוד הפרסום תקבלו:
                                <ul style="margin-top: 10px; margin-right: 20px;">
                                    <li>• <strong>Site ID</strong> (מתחיל ב-site_)</li>
                                    <li>• <strong>API Key</strong> (מתחיל ב-lg_)</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 15px;"><strong>הגדירו את הפרטים:</strong> היכנסו ל<a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>">הגדרות</a> והזינו את הפרטים</li>
                            <li style="margin-bottom: 15px;"><strong>ייבאו את הדף:</strong> עברו ל<a href="<?php echo admin_url('admin.php?page=leadgrid-import'); ?>">ייבוא דפים</a> וייבאו את הדף שלכם</li>
                        </ol>
                    </div>
                </div>

                <div class="postbox" style="margin-top: 20px;">
                    <h2 class="hndle">מה התוסף מאפשר?</h2>
                    <div class="inside">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 20px;">
                            <div>
                                <ul style="font-size: 14px; line-height: 1.6;">
                                    <li>✅ ייבוא דפי נחיתה מ-LeadGrid</li>
                                    <li>✅ עריכה מלאה ב-WordPress</li>
                                    <li>✅ עיצוב רספונסיבי אוטומטי</li>
                                </ul>
                            </div>
                            <div>
                                <ul style="font-size: 14px; line-height: 1.6;">
                                    <li>✅ טפסי יצירת קשר פעילים</li>
                                    <li>✅ אופטימיזציה ל-SEO</li>
                                    <li>✅ תמיכה בעברית מלאה</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="postbox" style="margin-top: 20px; background: #e7f3ff; border-right: 4px solid #0073aa;">
                    <h2 class="hndle">💡 טיפ חשוב</h2>
                    <div class="inside">
                        <p style="font-size: 14px; margin: 15px;">אם אתם מקבלים שגיאה "Failed to load pages", ודאו שהזנתם את פרטי ה-API בפורמט הנכון:</p>
                        <ul style="margin-right: 20px; font-size: 13px;">
                            <li>• Site ID צריך להתחיל ב-<code>site_</code></li>
                            <li>• API Key צריך להתחיל ב-<code>lg_</code></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
    
    public function settings_page() {
        if (isset($_POST['submit'])) {
            check_admin_referer('leadgrid_settings');
            
            $api_key = sanitize_text_field($_POST['api_key']);
            $site_id = sanitize_text_field($_POST['site_id']);
            
            // וולידציה של הפרטים
            $errors = array();
            
            if (empty($api_key)) {
                $errors[] = 'API Key הוא שדה חובה';
            } elseif (!preg_match('/^lg_[a-zA-Z0-9]{32}$/', $api_key)) {
                $errors[] = 'API Key חייב להתחיל ב-lg_ ולהכיל 32 תווים';
            }
            
            if (empty($site_id)) {
                $errors[] = 'Site ID הוא שדה חובה';
            } elseif (!preg_match('/^site_[a-z0-9_]+$/', $site_id)) {
                $errors[] = 'Site ID חייב להתחיל ב-site_';
            }
            
            if (empty($errors)) {
                update_option('leadgrid_api_key', $api_key);
                update_option('leadgrid_site_id', $site_id);
                echo '<div class="notice notice-success"><p><strong>✅ ההגדרות נשמרו בהצלחה!</strong></p></div>';
            } else {
                echo '<div class="notice notice-error"><p><strong>❌ שגיאות בהגדרות:</strong></p><ul>';
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
            <h1>הגדרות LeadGrid</h1>
            
            <div class="notice notice-info">
                <p><strong>איפה למצוא את הפרטים?</strong></p>
                <p>לאחר יצירת דף ב-LeadGrid, בעמוד הפרסום תמצאו את פרטי ה-API Key ו-Site ID. הם נוצרים אוטומטית עבור כל דף.</p>
            </div>

            <form method="post" action="">
                <?php wp_nonce_field('leadgrid_settings'); ?>
                
                <table class="form-table">
                    <tr>
                        <th scope="row">
                            <label for="site_id">Site ID</label>
                            <p class="description">צריך להתחיל ב-site_</p>
                        </th>
                        <td>
                            <input type="text" name="site_id" id="site_id" value="<?php echo esc_attr($site_id); ?>" class="regular-text" placeholder="site_example_123" />
                            <p class="description">ה-Site ID שקיבלתם מ-LeadGrid (מתחיל ב-site_)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <label for="api_key">API Key</label>
                            <p class="description">צריך להתחיל ב-lg_</p>
                        </th>
                        <td>
                            <input type="text" name="api_key" id="api_key" value="<?php echo esc_attr($api_key); ?>" class="regular-text" placeholder="lg_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                            <p class="description">ה-API Key שקיבלתם מ-LeadGrid (מתחיל ב-lg_)</p>
                        </td>
                    </tr>
                </table>
                
                <p class="submit">
                    <input type="submit" name="submit" class="button-primary" value="💾 שמירת הגדרות" />
                    <button type="button" id="test-connection" class="button" style="margin-right: 10px;">🔍 בדיקת חיבור</button>
                </p>
            </form>
            
            <div id="connection-result" style="margin-top: 20px;"></div>
            
            <div class="postbox" style="margin-top: 30px;">
                <h2 class="hndle">📋 דוגמאות לפרטים נכונים</h2>
                <div class="inside">
                    <table style="width: 100%; font-family: monospace; font-size: 13px;">
                        <tr>
                            <td><strong>Site ID:</strong></td>
                            <td><code>site_lm8n9o2p3q_4r5s6t7u8v</code></td>
                        </tr>
                        <tr>
                            <td><strong>API Key:</strong></td>
                            <td><code>lg_A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6</code></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <script>
        jQuery(document).ready(function($) {
            $('#test-connection').click(function() {
                var button = $(this);
                var originalText = button.text();
                button.prop('disabled', true).text('🔄 בודק...');
                
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'leadgrid_test_connection',
                        nonce: '<?php echo wp_create_nonce('leadgrid_nonce'); ?>'
                    },
                    success: function(response) {
                        var result = $('#connection-result');
                        if (response.success) {
                            result.html('<div class="notice notice-success"><p><strong>✅ ' + response.data + '</strong></p></div>');
                        } else {
                            result.html('<div class="notice notice-error"><p><strong>❌ ' + response.data + '</strong></p></div>');
                        }
                    },
                    error: function() {
                        $('#connection-result').html('<div class="notice notice-error"><p><strong>❌ שגיאה בבדיקת החיבור</strong></p></div>');
                    },
                    complete: function() {
                        button.prop('disabled', false).text(originalText);
                    }
                });
            });
        });
        </script>
        <?php
    }
    
    public function import_page() {
        ?>
        <div class="wrap" dir="rtl">
            <h1>ייבוא דפי LeadGrid</h1>
            
            <?php
            $api_key = get_option('leadgrid_api_key', '');
            $site_id = get_option('leadgrid_site_id', '');
            
            if (empty($api_key) || empty($site_id)) {
                ?>
                <div class="notice notice-warning">
                    <p><strong>⚠️ חסרים פרטי API!</strong></p>
                    <p>כדי לייבא דפים, תחילה צריך להגדיר את פרטי ה-API ב<a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>">עמוד ההגדרות</a>.</p>
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
                    <p><a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>" class="button">תקן הגדרות</a></p>
                </div>
                <?php
                return;
            }
            ?>
            
            <div class="notice notice-success">
                <p><strong>✅ מוכן לייבוא!</strong> פרטי ה-API שלכם מוגדרים נכון.</p>
            </div>

            <div class="postbox">
                <h2 class="hndle">📄 דפים זמינים לייבוא</h2>
                <div class="inside">
                    <p style="margin-bottom: 20px;">לחצו על הכפתור למטה כדי לטעון את הדפים הזמינים לייבוא מהחשבון שלכם ב-LeadGrid.</p>
                    <button id="load-pages" class="button button-primary">📥 טען דפים זמינים</button>
                    <div id="pages-list" style="margin-top: 20px;"></div>
                </div>
            </div>
        </div>

        <script>
        jQuery(document).ready(function($) {
            $('#load-pages').click(function() {
                var button = $(this);
                var originalText = button.text();
                button.prop('disabled', true).text('⏳ טוען...');
                
                // הצגת הדף הזמין לייבוא
                var pagesHtml = '<div class="leadgrid-pages-grid">';
                pagesHtml += '<div class="leadgrid-page-item" style="border: 1px solid #ddd; padding: 20px; margin: 20px 0; background: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">';
                pagesHtml += '<div style="display: flex; align-items: center; margin-bottom: 15px;">';
                pagesHtml += '<div style="font-size: 24px; margin-left: 10px;">📄</div>';
                pagesHtml += '<h3 style="margin: 0; color: #333;">הדף שיצרתי ב-LeadGrid</h3>';
                pagesHtml += '</div>';
                pagesHtml += '<p style="color: #666; margin-bottom: 15px;">דף הנחיתה שיצרתי באמצעות מערכת LeadGrid - מוכן לייבוא לאתר WordPress</p>';
                pagesHtml += '<div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 15px; font-family: monospace; font-size: 12px;">';
                pagesHtml += '<p style="margin: 5px 0;"><strong>Site ID:</strong> <?php echo esc_js($site_id); ?></p>';
                pagesHtml += '<p style="margin: 5px 0;"><strong>סטטוס:</strong> <span style="color: green; font-weight: bold;">✅ מוכן לייבוא</span></p>';
                pagesHtml += '</div>';
                pagesHtml += '<button class="button button-primary import-page-btn" data-page-id="<?php echo esc_js($site_id); ?>" style="background: #0073aa; border-color: #0073aa;">🚀 ייבא דף זה עכשיו</button>';
                pagesHtml += '</div>';
                pagesHtml += '</div>';
                
                $('#pages-list').html(pagesHtml);
                button.prop('disabled', false).text('🔄 רענן רשימת דפים');
            });
            
            $(document).on('click', '.import-page-btn', function() {
                var button = $(this);
                var pageId = button.data('page-id');
                var originalText = button.text();
                
                button.prop('disabled', true).text('⏳ מייבא...');
                
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
                            var result = '<div class="notice notice-success" style="margin: 15px 0; padding: 15px; border-radius: 5px;">';
                            result += '<p style="margin-bottom: 10px;"><strong>🎉 הייבוא הושלם בהצלחה!</strong></p>';
                            result += '<p style="margin-bottom: 15px;">' + response.data.message + '</p>';
                            result += '<div>';
                            result += '<a href="' + response.data.edit_url + '" class="button button-secondary" style="margin-left: 10px;">✏️ ערוך את הדף</a>';
                            result += '<a href="' + response.data.view_url + '" class="button button-primary" target="_blank">👁️ צפה בדף</a>';
                            result += '</div>';
                            result += '</div>';
                            
                            button.parent().html(result);
                        } else {
                            alert('❌ שגיאה בייבוא: ' + response.data);
                            button.prop('disabled', false).text(originalText);
                        }
                    },
                    error: function() {
                        alert('❌ שגיאה בייבוא הדף. אנא נסו שוב.');
                        button.prop('disabled', false).text(originalText);
                    }
                });
            });
        });
        </script>
        <?php
    }
}
