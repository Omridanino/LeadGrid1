
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
                    <h2 class="hndle">מדריך מהיר</h2>
                    <div class="inside">
                        <ol style="font-size: 14px; line-height: 1.6;">
                            <li><strong>קבלו את פרטי ה-API:</strong> לאחר יצירת דף ב-LeadGrid, תקבלו API Key ו-Site ID</li>
                            <li><strong>הגדירו את הפרטים:</strong> היכנסו ל<a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>">הגדרות</a> והזינו את הפרטים</li>
                            <li><strong>ייבאו את הדף:</strong> עברו ל<a href="<?php echo admin_url('admin.php?page=leadgrid-import'); ?>">ייבוא דפים</a> וייבאו את הדף שלכם</li>
                            <li><strong>ערכו ופרסמו:</strong> הדף יתווסף כדף WordPress רגיל שתוכלו לערוך</li>
                        </ol>
                    </div>
                </div>

                <div class="postbox" style="margin-top: 20px;">
                    <h2 class="hndle">מה התוסף מאפשר?</h2>
                    <div class="inside">
                        <ul style="font-size: 14px; line-height: 1.6;">
                            <li>✅ ייבוא דפי נחיתה מ-LeadGrid</li>
                            <li>✅ עריכה מלאה ב-WordPress</li>
                            <li>✅ עיצוב רספונסיבי אוטומטי</li>
                            <li>✅ טפסי יצירת קשר פעילים</li>
                            <li>✅ אופטימיזציה ל-SEO</li>
                            <li>✅ תמיכה בעברית מלאה</li>
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
            
            update_option('leadgrid_api_key', sanitize_text_field($_POST['api_key']));
            update_option('leadgrid_site_id', sanitize_text_field($_POST['site_id']));
            
            echo '<div class="notice notice-success"><p>ההגדרות נשמרו בהצלחה!</p></div>';
        }
        
        $api_key = get_option('leadgrid_api_key', '');
        $site_id = get_option('leadgrid_site_id', '');
        ?>
        <div class="wrap" dir="rtl">
            <h1>הגדרות LeadGrid</h1>
            
            <div class="notice notice-info">
                <p><strong>איפה למצוא את הפרטים?</strong></p>
                <p>לאחר יצירת דף ב-LeadGrid, תקבלו אוטומטית את פרטי ה-API Key ו-Site ID במסך הפרסום.</p>
            </div>

            <form method="post" action="">
                <?php wp_nonce_field('leadgrid_settings'); ?>
                
                <table class="form-table">
                    <tr>
                        <th scope="row">Site ID</th>
                        <td>
                            <input type="text" name="site_id" value="<?php echo esc_attr($site_id); ?>" class="regular-text" />
                            <p class="description">ה-Site ID שקיבלתם מ-LeadGrid (מתחיל ב-site_)</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">API Key</th>
                        <td>
                            <input type="text" name="api_key" value="<?php echo esc_attr($api_key); ?>" class="regular-text" />
                            <p class="description">ה-API Key שקיבלתם מ-LeadGrid (מתחיל ב-lg_)</p>
                        </td>
                    </tr>
                </table>
                
                <p class="submit">
                    <input type="submit" name="submit" class="button-primary" value="שמירה" />
                    <button type="button" id="test-connection" class="button" style="margin-right: 10px;">בדיקת חיבור</button>
                </p>
            </form>
            
            <div id="connection-result" style="margin-top: 20px;"></div>
        </div>

        <script>
        jQuery(document).ready(function($) {
            $('#test-connection').click(function() {
                var button = $(this);
                button.prop('disabled', true).text('בודק...');
                
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
                            result.html('<div class="notice notice-success"><p>' + response.data + '</p></div>');
                        } else {
                            result.html('<div class="notice notice-error"><p>' + response.data + '</p></div>');
                        }
                    },
                    error: function() {
                        $('#connection-result').html('<div class="notice notice-error"><p>שגיאה בבדיקת החיבור</p></div>');
                    },
                    complete: function() {
                        button.prop('disabled', false).text('בדיקת חיבור');
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
                    <p><strong>חסרים פרטי API!</strong></p>
                    <p>כדי לייבא דפים, תחילה צריך להגדיר את פרטי ה-API ב<a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>">עמוד ההגדרות</a>.</p>
                </div>
                <?php
                return;
            }
            ?>
            
            <div class="notice notice-info">
                <p><strong>מוכן לייבוא!</strong> פרטי ה-API שלכם מוגדרים נכון.</p>
            </div>

            <div class="postbox">
                <h2 class="hndle">דפים זמינים לייבוא</h2>
                <div class="inside">
                    <button id="load-pages" class="button button-primary">טען דפים זמינים</button>
                    <div id="pages-list" style="margin-top: 20px;"></div>
                </div>
            </div>
        </div>

        <script>
        jQuery(document).ready(function($) {
            $('#load-pages').click(function() {
                var button = $(this);
                button.prop('disabled', true).text('טוען...');
                
                // הצגת הדף הזמין לייבוא
                var pagesHtml = '<div class="leadgrid-pages-grid">';
                pagesHtml += '<div class="leadgrid-page-item" style="border: 1px solid #ddd; padding: 20px; margin: 10px 0; background: #fff;">';
                pagesHtml += '<h3>הדף שיצרתי ב-LeadGrid</h3>';
                pagesHtml += '<p>דף הנחיתה שיצרתי באמצעות מערכת LeadGrid</p>';
                pagesHtml += '<p><strong>Site ID:</strong> <?php echo esc_js($site_id); ?></p>';
                pagesHtml += '<p><strong>סטטוס:</strong> <span style="color: green;">מוכן לייבוא</span></p>';
                pagesHtml += '<button class="button button-primary import-page-btn" data-page-id="<?php echo esc_js($site_id); ?>">ייבא דף זה</button>';
                pagesHtml += '</div>';
                pagesHtml += '</div>';
                
                $('#pages-list').html(pagesHtml);
                button.prop('disabled', false).text('רענן רשימת דפים');
            });
            
            $(document).on('click', '.import-page-btn', function() {
                var button = $(this);
                var pageId = button.data('page-id');
                
                button.prop('disabled', true).text('מייבא...');
                
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
                            var result = '<div class="notice notice-success" style="margin: 10px 0; padding: 10px;">';
                            result += '<p><strong>הייבוא הושלם בהצלחה!</strong></p>';
                            result += '<p><a href="' + response.data.edit_url + '" class="button">ערוך את הדף</a> ';
                            result += '<a href="' + response.data.view_url + '" class="button" target="_blank">צפה בדף</a></p>';
                            result += '</div>';
                            
                            button.parent().html(result);
                        } else {
                            alert('שגיאה בייבוא: ' + response.data);
                            button.prop('disabled', false).text('ייבא דף זה');
                        }
                    },
                    error: function() {
                        alert('שגיאה בייבוא הדף');
                        button.prop('disabled', false).text('ייבא דף זה');
                    }
                });
            });
        });
        </script>
        <?php
    }
}
