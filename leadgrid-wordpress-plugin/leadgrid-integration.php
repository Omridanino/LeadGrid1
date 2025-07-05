
<?php
/**
 * Plugin Name: LeadGrid Integration Pro
 * Plugin URI: https://leadgrid.co.il
 * Description: Advanced integration between LeadGrid landing pages and WordPress with full editing capabilities, API management, and real-time synchronization
 * Version: 2.0.0
 * Author: LeadGrid Team
 * License: GPL v2 or later
 * Text Domain: leadgrid-integration
 * Domain Path: /languages
 * Requires at least: 5.0
 * Tested up to: 6.4
 * Requires PHP: 7.4
 * Network: false
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit('Direct access denied.');
}

// Define plugin constants
define('LEADGRID_PLUGIN_URL', plugin_dir_url(__FILE__));
define('LEADGRID_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('LEADGRID_PLUGIN_VERSION', '2.0.0');
define('LEADGRID_PLUGIN_BASENAME', plugin_basename(__FILE__));
define('LEADGRID_API_VERSION', 'v1');
define('LEADGRID_MIN_WP_VERSION', '5.0');
define('LEADGRID_MIN_PHP_VERSION', '7.4');

// Version and compatibility checks
register_activation_hook(__FILE__, 'leadgrid_check_requirements');
function leadgrid_check_requirements() {
    if (version_compare(PHP_VERSION, LEADGRID_MIN_PHP_VERSION, '<')) {
        deactivate_plugins(LEADGRID_PLUGIN_BASENAME);
        wp_die(sprintf(
            __('LeadGrid Integration requires PHP version %s or higher. You are running version %s.', 'leadgrid-integration'),
            LEADGRID_MIN_PHP_VERSION,
            PHP_VERSION
        ));
    }
    
    if (version_compare(get_bloginfo('version'), LEADGRID_MIN_WP_VERSION, '<')) {
        deactivate_plugins(LEADGRID_PLUGIN_BASENAME);
        wp_die(sprintf(
            __('LeadGrid Integration requires WordPress version %s or higher. You are running version %s.', 'leadgrid-integration'),
            LEADGRID_MIN_WP_VERSION,
            get_bloginfo('version')
        ));
    }
}

// Include required files
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-core.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-api.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-admin.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-settings.php';

// Initialize the plugin
function leadgrid_init() {
    new LeadGrid_Core();
}
add_action('plugins_loaded', 'leadgrid_init');

// Plugin activation
register_activation_hook(__FILE__, 'leadgrid_activate');
function leadgrid_activate() {
    global $wpdb;
    
    // Create LeadGrid pages table
    $pages_table = $wpdb->prefix . 'leadgrid_pages';
    
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE $pages_table (
        id int(11) NOT NULL AUTO_INCREMENT,
        leadgrid_id varchar(255) NOT NULL,
        wp_post_id bigint(20) NOT NULL,
        page_data longtext,
        sync_status varchar(20) DEFAULT 'pending',
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY leadgrid_id (leadgrid_id),
        KEY wp_post_id (wp_post_id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
    
    // Create API keys table
    $api_keys_table = $wpdb->prefix . 'leadgrid_api_keys';
    
    $sql_keys = "CREATE TABLE $api_keys_table (
        id int(11) NOT NULL AUTO_INCREMENT,
        api_key varchar(255) NOT NULL,
        api_secret varchar(255) NOT NULL,
        is_active tinyint(1) DEFAULT 1,
        usage_count int(11) DEFAULT 0,
        last_used datetime,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY api_key (api_key)
    ) $charset_collate;";
    
    dbDelta($sql_keys);
    
    // Create logs table
    $logs_table = $wpdb->prefix . 'leadgrid_logs';
    
    $sql_logs = "CREATE TABLE $logs_table (
        id int(11) NOT NULL AUTO_INCREMENT,
        level varchar(20) NOT NULL,
        message text NOT NULL,
        context longtext,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY level (level),
        KEY created_at (created_at)
    ) $charset_collate;";
    
    dbDelta($sql_logs);
    
    // Set default options
    add_option('leadgrid_api_endpoint', 'http://localhost:3000/api');
    add_option('leadgrid_cache_enabled', true);
    add_option('leadgrid_cache_duration', 3600);
    add_option('leadgrid_debug_mode', false);
    
    // Log activation
    error_log('LeadGrid Integration Pro activated successfully');
}

// Plugin deactivation
register_deactivation_hook(__FILE__, 'leadgrid_deactivate');
function leadgrid_deactivate() {
    // Clear scheduled events
    wp_clear_scheduled_hook('leadgrid_sync_pages');
    wp_clear_scheduled_hook('leadgrid_cache_cleanup');
    wp_clear_scheduled_hook('leadgrid_cleanup_rate_limits');
    
    error_log('LeadGrid Integration Pro deactivated');
}

// Plugin uninstall
register_uninstall_hook(__FILE__, 'leadgrid_uninstall');
function leadgrid_uninstall() {
    global $wpdb;
    
    // Only remove data if the option is set
    if (get_option('leadgrid_remove_data_on_uninstall', false)) {
        // Drop tables
        $wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}leadgrid_pages");
        $wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}leadgrid_api_keys");
        $wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}leadgrid_logs");
        
        // Remove options
        $options = array(
            'leadgrid_api_endpoint',
            'leadgrid_api_key',
            'leadgrid_site_id',
            'leadgrid_cache_enabled',
            'leadgrid_cache_duration',
            'leadgrid_debug_mode',
            'leadgrid_auto_sync',
            'leadgrid_sync_interval',
            'leadgrid_security_enabled',
            'leadgrid_rate_limit',
            'leadgrid_webhook_secret',
            'leadgrid_encryption_key',
            'leadgrid_remove_data_on_uninstall'
        );
        
        foreach ($options as $option) {
            delete_option($option);
        }
        
        error_log('LeadGrid Integration Pro uninstalled and data removed');
    }
}
