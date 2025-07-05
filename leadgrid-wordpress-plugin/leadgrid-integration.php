
<?php
/**
 * Plugin Name: LeadGrid Integration
 * Plugin URI: https://leadgrid.co.il
 * Description: Seamless integration between LeadGrid landing pages and WordPress with full editing capabilities
 * Version: 1.0.0
 * Author: LeadGrid
 * License: GPL v2 or later
 * Text Domain: leadgrid-integration
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('LEADGRID_PLUGIN_URL', plugin_dir_url(__FILE__));
define('LEADGRID_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('LEADGRID_PLUGIN_VERSION', '1.0.0');

// Include required files
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-core.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-api.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-blocks.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-sync.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-admin.php';

// Initialize the plugin
function leadgrid_init() {
    new LeadGrid_Core();
}
add_action('plugins_loaded', 'leadgrid_init');

// Activation hook
register_activation_hook(__FILE__, 'leadgrid_activate');
function leadgrid_activate() {
    // Create necessary database tables
    leadgrid_create_tables();
    
    // Set default options
    add_option('leadgrid_api_key', '');
    add_option('leadgrid_auto_sync', true);
    add_option('leadgrid_sync_interval', 300); // 5 minutes
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'leadgrid_deactivate');
function leadgrid_deactivate() {
    // Clear scheduled sync events
    wp_clear_scheduled_hook('leadgrid_sync_pages');
}

// Create database tables
function leadgrid_create_tables() {
    global $wpdb;
    
    $table_name = $wpdb->prefix . 'leadgrid_pages';
    
    $charset_collate = $wpdb->get_charset_collate();
    
    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        leadgrid_id varchar(255) NOT NULL,
        wp_post_id bigint(20),
        page_data longtext,
        last_sync datetime DEFAULT CURRENT_TIMESTAMP,
        sync_status varchar(50) DEFAULT 'pending',
        PRIMARY KEY (id),
        UNIQUE KEY leadgrid_id (leadgrid_id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}
