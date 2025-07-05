
<?php
/**
 * LeadGrid Admin Class
 * Handles WordPress admin interface
 */

class LeadGrid_Admin {
    
    public function __construct() {
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'admin_init'));
    }
    
    public function add_admin_menu() {
        add_menu_page(
            __('LeadGrid', 'leadgrid-integration'),
            __('LeadGrid', 'leadgrid-integration'),
            'manage_options',
            'leadgrid',
            array($this, 'admin_page'),
            'dashicons-layout',
            30
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
            __('Settings', 'leadgrid-integration'),
            __('Settings', 'leadgrid-integration'),
            'manage_options',
            'leadgrid-settings',
            array($this, 'settings_page')
        );
    }
    
    public function admin_init() {
        // Register settings will be handled by LeadGrid_Settings class
    }
    
    public function admin_page() {
        ?>
        <div class="wrap">
            <h1><?php _e('LeadGrid Integration', 'leadgrid-integration'); ?></h1>
            
            <div class="leadgrid-admin-dashboard">
                <div class="leadgrid-card">
                    <h2><?php _e('Welcome to LeadGrid Integration', 'leadgrid-integration'); ?></h2>
                    <p><?php _e('Import your LeadGrid landing pages directly into WordPress with full editing capabilities.', 'leadgrid-integration'); ?></p>
                    
                    <div class="leadgrid-quick-actions">
                        <a href="<?php echo admin_url('admin.php?page=leadgrid-import'); ?>" class="button button-primary">
                            <?php _e('Import Pages', 'leadgrid-integration'); ?>
                        </a>
                        <a href="<?php echo admin_url('admin.php?page=leadgrid-settings'); ?>" class="button">
                            <?php _e('Settings', 'leadgrid-integration'); ?>
                        </a>
                    </div>
                </div>
                
                <div class="leadgrid-card">
                    <h3><?php _e('Connection Status', 'leadgrid-integration'); ?></h3>
                    <div id="leadgrid-connection-status">
                        <button type="button" class="button" id="test-connection">
                            <?php _e('Test Connection', 'leadgrid-integration'); ?>
                        </button>
                        <div id="connection-result"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            $('#test-connection').click(function() {
                var button = $(this);
                var result = $('#connection-result');
                
                button.prop('disabled', true).text('<?php _e('Testing...', 'leadgrid-integration'); ?>');
                
                $.ajax({
                    url: leadgrid_admin.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'leadgrid_test_connection',
                        nonce: leadgrid_admin.nonce
                    },
                    success: function(response) {
                        if (response.success) {
                            result.html('<div class="notice notice-success"><p>' + response.data + '</p></div>');
                        } else {
                            result.html('<div class="notice notice-error"><p>' + response.data + '</p></div>');
                        }
                    },
                    error: function() {
                        result.html('<div class="notice notice-error"><p><?php _e('Connection test failed', 'leadgrid-integration'); ?></p></div>');
                    },
                    complete: function() {
                        button.prop('disabled', false).text('<?php _e('Test Connection', 'leadgrid-integration'); ?>');
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
            
            <div class="leadgrid-import-container">
                <div class="leadgrid-card">
                    <h2><?php _e('Available Pages', 'leadgrid-integration'); ?></h2>
                    <p><?php _e('Import your LeadGrid pages as WordPress pages.', 'leadgrid-integration'); ?></p>
                    
                    <button type="button" class="button" id="load-pages">
                        <?php _e('Load Available Pages', 'leadgrid-integration'); ?>
                    </button>
                    
                    <div id="pages-list"></div>
                </div>
            </div>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            $('#load-pages').click(function() {
                var button = $(this);
                var list = $('#pages-list');
                
                button.prop('disabled', true).text('<?php _e('Loading...', 'leadgrid-integration'); ?>');
                
                $.ajax({
                    url: leadgrid_admin.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'leadgrid_get_pages',
                        nonce: leadgrid_admin.nonce
                    },
                    success: function(response) {
                        if (response.success && response.data.pages) {
                            var html = '<div class="leadgrid-pages-grid">';
                            
                            response.data.pages.forEach(function(page) {
                                html += '<div class="leadgrid-page-item">';
                                html += '<h3>' + page.title + '</h3>';
                                html += '<p>' + (page.description || '') + '</p>';
                                html += '<p><small><?php _e('Created:', 'leadgrid-integration'); ?> ' + page.created_at + '</small></p>';
                                html += '<button type="button" class="button button-primary import-page" data-page-id="' + page.id + '">';
                                html += '<?php _e('Import', 'leadgrid-integration'); ?>';
                                html += '</button>';
                                html += '</div>';
                            });
                            
                            html += '</div>';
                            list.html(html);
                        } else {
                            list.html('<div class="notice notice-error"><p>' + (response.data || '<?php _e('Failed to load pages', 'leadgrid-integration'); ?>') + '</p></div>');
                        }
                    },
                    error: function() {
                        list.html('<div class="notice notice-error"><p><?php _e('Failed to load pages', 'leadgrid-integration'); ?></p></div>');
                    },
                    complete: function() {
                        button.prop('disabled', false).text('<?php _e('Load Available Pages', 'leadgrid-integration'); ?>');
                    }
                });
            });
            
            $(document).on('click', '.import-page', function() {
                var button = $(this);
                var pageId = button.data('page-id');
                var pageItem = button.closest('.leadgrid-page-item');
                
                button.prop('disabled', true).text('<?php _e('Importing...', 'leadgrid-integration'); ?>');
                
                $.ajax({
                    url: leadgrid_admin.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'leadgrid_import_page',
                        page_id: pageId,
                        nonce: leadgrid_admin.nonce
                    },
                    success: function(response) {
                        if (response.success) {
                            pageItem.append('<div class="notice notice-success"><p>' + response.data.message + '</p></div>');
                            button.text('<?php _e('Imported', 'leadgrid-integration'); ?>').addClass('button-disabled');
                        } else {
                            pageItem.append('<div class="notice notice-error"><p>' + response.data + '</p></div>');
                            button.prop('disabled', false).text('<?php _e('Import', 'leadgrid-integration'); ?>');
                        }
                    },
                    error: function() {
                        pageItem.append('<div class="notice notice-error"><p><?php _e('Import failed', 'leadgrid-integration'); ?></p></div>');
                        button.prop('disabled', false).text('<?php _e('Import', 'leadgrid-integration'); ?>');
                    }
                });
            });
        });
        </script>
        <?php
    }
    
    public function settings_page() {
        $settings = new LeadGrid_Settings();
        
        if (isset($_POST['submit'])) {
            check_admin_referer('leadgrid_settings_nonce');
            
            update_option('leadgrid_api_endpoint', esc_url_raw($_POST['leadgrid_api_endpoint']));
            update_option('leadgrid_api_key', sanitize_text_field($_POST['leadgrid_api_key']));
            update_option('leadgrid_site_id', sanitize_text_field($_POST['leadgrid_site_id']));
            update_option('leadgrid_cache_enabled', isset($_POST['leadgrid_cache_enabled']));
            update_option('leadgrid_debug_mode', isset($_POST['leadgrid_debug_mode']));
            
            echo '<div class="notice notice-success"><p>' . __('Settings saved!', 'leadgrid-integration') . '</p></div>';
        }
        
        $api_endpoint = get_option('leadgrid_api_endpoint', 'http://localhost:3000/api');
        $api_key = get_option('leadgrid_api_key', '');
        $site_id = get_option('leadgrid_site_id', '');
        $cache_enabled = get_option('leadgrid_cache_enabled', true);
        $debug_mode = get_option('leadgrid_debug_mode', false);
        ?>
        
        <div class="wrap">
            <h1><?php _e('LeadGrid Settings', 'leadgrid-integration'); ?></h1>
            
            <form method="post" action="">
                <?php wp_nonce_field('leadgrid_settings_nonce'); ?>
                
                <table class="form-table">
                    <tr>
                        <th scope="row"><?php _e('API Endpoint', 'leadgrid-integration'); ?></th>
                        <td>
                            <input type="url" name="leadgrid_api_endpoint" value="<?php echo esc_attr($api_endpoint); ?>" class="regular-text" />
                            <p class="description"><?php _e('LeadGrid API endpoint URL', 'leadgrid-integration'); ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><?php _e('API Key', 'leadgrid-integration'); ?></th>
                        <td>
                            <input type="text" name="leadgrid_api_key" value="<?php echo esc_attr($api_key); ?>" class="regular-text" />
                            <p class="description"><?php _e('Your LeadGrid API key', 'leadgrid-integration'); ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><?php _e('Site ID', 'leadgrid-integration'); ?></th>
                        <td>
                            <input type="text" name="leadgrid_site_id" value="<?php echo esc_attr($site_id); ?>" class="regular-text" />
                            <p class="description"><?php _e('Your LeadGrid site ID', 'leadgrid-integration'); ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><?php _e('Enable Cache', 'leadgrid-integration'); ?></th>
                        <td>
                            <input type="checkbox" name="leadgrid_cache_enabled" <?php checked($cache_enabled); ?> />
                            <p class="description"><?php _e('Enable caching for better performance', 'leadgrid-integration'); ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><?php _e('Debug Mode', 'leadgrid-integration'); ?></th>
                        <td>
                            <input type="checkbox" name="leadgrid_debug_mode" <?php checked($debug_mode); ?> />
                            <p class="description"><?php _e('Enable debug logging', 'leadgrid-integration'); ?></p>
                        </td>
                    </tr>
                </table>
                
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }
}
