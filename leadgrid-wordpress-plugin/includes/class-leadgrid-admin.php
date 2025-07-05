
<?php
/**
 * LeadGrid Admin Class
 * WordPress admin interface for the plugin
 */

class LeadGrid_Admin {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'register_settings'));
    }
    
    public function add_admin_menu() {
        add_menu_page(
            __('LeadGrid Integration', 'leadgrid-integration'),
            __('LeadGrid', 'leadgrid-integration'),
            'manage_options',
            'leadgrid',
            array($this, 'admin_page'),
            'dashicons-layout',
            30
        );
        
        add_submenu_page(
            'leadgrid',
            __('Settings', 'leadgrid-integration'),
            __('Settings', 'leadgrid-integration'),
            'manage_options',
            'leadgrid-settings',
            array($this, 'settings_page')
        );
        
        add_submenu_page(
            'leadgrid',
            __('Import Pages', 'leadgrid-integration'),
            __('Import Pages', 'leadgrid-integration'),
            'manage_options',
            'leadgrid-import',
            array($this, 'import_page')
        );
        
        add_submenu_page(
            'leadgrid',
            __('Sync Status', 'leadgrid-integration'),
            __('Sync Status', 'leadgrid-integration'),
            'manage_options',
            'leadgrid-sync',
            array($this, 'sync_page')
        );
    }
    
    public function register_settings() {
        register_setting('leadgrid_settings', 'leadgrid_api_key');
        register_setting('leadgrid_settings', 'leadgrid_api_endpoint');
        register_setting('leadgrid_settings', 'leadgrid_auto_sync');
        register_setting('leadgrid_settings', 'leadgrid_sync_interval');
    }
    
    public function admin_page() {
        ?>
        <div class="wrap">
            <h1><?php _e('LeadGrid Integration', 'leadgrid-integration'); ?></h1>
            
            <div class="leadgrid-dashboard">
                <div class="leadgrid-card">
                    <h2><?php _e('Welcome to LeadGrid Integration', 'leadgrid-integration'); ?></h2>
                    <p><?php _e('Seamlessly integrate your LeadGrid landing pages with WordPress.', 'leadgrid-integration'); ?></p>
                    
                    <div class="leadgrid-stats">
                        <?php
                        global $wpdb;
                        $total_pages = $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->prefix}leadgrid_pages");
                        $synced_pages = $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->prefix}leadgrid_pages WHERE sync_status = 'synced'");
                        ?>
                        <div class="stat-box">
                            <h3><?php echo $total_pages; ?></h3>
                            <p><?php _e('Total Pages', 'leadgrid-integration'); ?></p>
                        </div>
                        <div class="stat-box">
                            <h3><?php echo $synced_pages; ?></h3>
                            <p><?php _e('Synced Pages', 'leadgrid-integration'); ?></p>
                        </div>
                    </div>
                    
                    <div class="leadgrid-actions">
                        <a href="<?php echo admin_url('admin.php?page=leadgrid-import'); ?>" class="button button-primary">
                            <?php _e('Import Pages', 'leadgrid-integration'); ?>
                        </a>
                        <a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>" class="button">
                            <?php _e('Settings', 'leadgrid-integration'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
        .leadgrid-dashboard {
            max-width: 800px;
        }
        .leadgrid-card {
            background: white;
            padding: 20px;
            border: 1px solid #ccd0d4;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        .leadgrid-stats {
            display: flex;
            gap: 20px;
            margin: 20px 0;
        }
        .stat-box {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 4px;
            text-align: center;
            flex: 1;
        }
        .stat-box h3 {
            font-size: 24px;
            margin: 0 0 5px 0;
            color: #0073aa;
        }
        .leadgrid-actions {
            margin-top: 20px;
        }
        .leadgrid-actions .button {
            margin-right: 10px;
        }
        </style>
        <?php
    }
    
    public function settings_page() {
        ?>
        <div class="wrap">
            <h1><?php _e('LeadGrid Settings', 'leadgrid-integration'); ?></h1>
            
            <form method="post" action="options.php">
                <?php settings_fields('leadgrid_settings'); ?>
                
                <table class="form-table">
                    <tr>
                        <th scope="row"><?php _e('API Key', 'leadgrid-integration'); ?></th>
                        <td>
                            <input type="password" name="leadgrid_api_key" value="<?php echo esc_attr(get_option('leadgrid_api_key')); ?>" class="regular-text" />
                            <p class="description"><?php _e('Your LeadGrid API key for authentication.', 'leadgrid-integration'); ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><?php _e('API Endpoint', 'leadgrid-integration'); ?></th>
                        <td>
                            <input type="url" name="leadgrid_api_endpoint" value="<?php echo esc_attr(get_option('leadgrid_api_endpoint', 'https://api.leadgrid.co.il')); ?>" class="regular-text" />
                            <p class="description"><?php _e('LeadGrid API endpoint URL.', 'leadgrid-integration'); ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><?php _e('Auto Sync', 'leadgrid-integration'); ?></th>
                        <td>
                            <label>
                                <input type="checkbox" name="leadgrid_auto_sync" value="1" <?php checked(get_option('leadgrid_auto_sync', true)); ?> />
                                <?php _e('Automatically sync changes from LeadGrid', 'leadgrid-integration'); ?>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><?php _e('Sync Interval', 'leadgrid-integration'); ?></th>
                        <td>
                            <select name="leadgrid_sync_interval">
                                <option value="300" <?php selected(get_option('leadgrid_sync_interval', 300), 300); ?>><?php _e('5 minutes', 'leadgrid-integration'); ?></option>
                                <option value="600" <?php selected(get_option('leadgrid_sync_interval', 300), 600); ?>><?php _e('10 minutes', 'leadgrid-integration'); ?></option>
                                <option value="1800" <?php selected(get_option('leadgrid_sync_interval', 300), 1800); ?>><?php _e('30 minutes', 'leadgrid-integration'); ?></option>
                                <option value="3600" <?php selected(get_option('leadgrid_sync_interval', 300), 3600); ?>><?php _e('1 hour', 'leadgrid-integration'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
                
                <?php submit_button(); ?>
            </form>
            
            <div class="leadgrid-test-connection">
                <h2><?php _e('Test Connection', 'leadgrid-integration'); ?></h2>
                <button type="button" id="test-connection" class="button"><?php _e('Test API Connection', 'leadgrid-integration'); ?></button>
                <div id="connection-result"></div>
            </div>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            $('#test-connection').click(function() {
                var button = $(this);
                var result = $('#connection-result');
                
                button.prop('disabled', true).text('Testing...');
                result.empty();
                
                $.ajax({
                    url: ajaxurl,
                    method: 'POST',
                    data: {
                        action: 'leadgrid_test_connection',
                        nonce: '<?php echo wp_create_nonce('leadgrid_nonce'); ?>'
                    },
                    success: function(response) {
                        if (response.success) {
                            result.html('<div class="notice notice-success"><p>' + response.data + '</p></div>');
                        } else {
                            result.html('<div class="notice notice-error"><p>' + response.data + '</p></div>');
                        }
                    },
                    error: function() {
                        result.html('<div class="notice notice-error"><p>Connection test failed</p></div>');
                    },
                    complete: function() {
                        button.prop('disabled', false).text('Test API Connection');
                    }
                });
            });
        });
        </script>
        <?php
    }
    
    public function import_page() {
        ?>
        <div class="wrap">
            <h1><?php _e('Import LeadGrid Pages', 'leadgrid-integration'); ?></h1>
            
            <div class="leadgrid-import-form">
                <h2><?php _e('Import Individual Page', 'leadgrid-integration'); ?></h2>
                <form id="import-single-page">
                    <table class="form-table">
                        <tr>
                            <th scope="row"><?php _e('Page ID', 'leadgrid-integration'); ?></th>
                            <td>
                                <input type="text" id="page-id" name="page_id" class="regular-text" placeholder="Enter LeadGrid Page ID" />
                                <p class="description"><?php _e('Enter the LeadGrid page ID to import.', 'leadgrid-integration'); ?></p>
                            </td>
                        </tr>
                    </table>
                    <button type="submit" class="button button-primary"><?php _e('Import Page', 'leadgrid-integration'); ?></button>
                </form>
                <div id="import-result"></div>
            </div>
            
            <div class="leadgrid-bulk-import">
                <h2><?php _e('Bulk Import', 'leadgrid-integration'); ?></h2>
                <p><?php _e('Import all pages from your LeadGrid account.', 'leadgrid-integration'); ?></p>
                <button type="button" id="bulk-import" class="button button-primary"><?php _e('Import All Pages', 'leadgrid-integration'); ?></button>
                <div id="bulk-import-result"></div>
            </div>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            $('#import-single-page').submit(function(e) {
                e.preventDefault();
                
                var pageId = $('#page-id').val();
                var result = $('#import-result');
                
                if (!pageId) {
                    result.html('<div class="notice notice-error"><p>Please enter a page ID</p></div>');
                    return;
                }
                
                $.ajax({
                    url: ajaxurl,
                    method: 'POST',
                    data: {
                        action: 'leadgrid_import_page',
                        page_id: pageId,
                        nonce: '<?php echo wp_create_nonce('leadgrid_nonce'); ?>'
                    },
                    success: function(response) {
                        if (response.success) {
                            result.html('<div class="notice notice-success"><p>Page imported successfully! <a href="' + response.data.edit_url + '">Edit page</a></p></div>');
                        } else {
                            result.html('<div class="notice notice-error"><p>' + response.data + '</p></div>');
                        }
                    },
                    error: function() {
                        result.html('<div class="notice notice-error"><p>Import failed</p></div>');
                    }
                });
            });
        });
        </script>
        <?php
    }
    
    public function sync_page() {
        global $wpdb;
        
        $pages = $wpdb->get_results(
            "SELECT p.*, pm.meta_value as leadgrid_id 
             FROM {$wpdb->prefix}leadgrid_pages p
             LEFT JOIN {$wpdb->posts} posts ON p.wp_post_id = posts.ID
             LEFT JOIN {$wpdb->postmeta} pm ON posts.ID = pm.post_id AND pm.meta_key = 'leadgrid_id'"
        );
        
        ?>
        <div class="wrap">
            <h1><?php _e('Sync Status', 'leadgrid-integration'); ?></h1>
            
            <div class="leadgrid-sync-actions">
                <button type="button" id="force-sync" class="button button-primary"><?php _e('Force Sync All', 'leadgrid-integration'); ?></button>
                <div id="sync-result"></div>
            </div>
            
            <table class="wp-list-table widefat fixed striped">
                <thead>
                    <tr>
                        <th><?php _e('LeadGrid ID', 'leadgrid-integration'); ?></th>
                        <th><?php _e('WordPress Post', 'leadgrid-integration'); ?></th>
                        <th><?php _e('Last Sync', 'leadgrid-integration'); ?></th>
                        <th><?php _e('Status', 'leadgrid-integration'); ?></th>
                        <th><?php _e('Actions', 'leadgrid-integration'); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($pages as $page): ?>
                    <tr>
                        <td><?php echo esc_html($page->leadgrid_id); ?></td>
                        <td>
                            <?php if ($page->wp_post_id): ?>
                                <a href="<?php echo get_edit_post_link($page->wp_post_id); ?>">
                                    <?php echo get_the_title($page->wp_post_id); ?>
                                </a>
                            <?php else: ?>
                                <?php _e('No post found', 'leadgrid-integration'); ?>
                            <?php endif; ?>
                        </td>
                        <td><?php echo esc_html($page->last_sync); ?></td>
                        <td>
                            <span class="status-<?php echo esc_attr($page->sync_status); ?>">
                                <?php echo esc_html(ucfirst($page->sync_status)); ?>
                            </span>
                        </td>
                        <td>
                            <button type="button" class="button sync-single" data-leadgrid-id="<?php echo esc_attr($page->leadgrid_id); ?>">
                                <?php _e('Sync', 'leadgrid-integration'); ?>
                            </button>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        
        <style>
        .status-synced { color: #46b450; }
        .status-pending { color: #ffb900; }
        .status-error { color: #dc3232; }
        .leadgrid-sync-actions {
            margin-bottom: 20px;
        }
        </style>
        <?php
    }
}
