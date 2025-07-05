
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
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-blocks.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-sync.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-admin.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-settings.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-templates.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-analytics.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-cache.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-security.php';
require_once LEADGRID_PLUGIN_PATH . 'includes/class-leadgrid-logger.php';

// Initialize the plugin
function leadgrid_init() {
    // Load text domain for translations
    load_plugin_textdomain('leadgrid-integration', false, dirname(LEADGRID_PLUGIN_BASENAME) . '/languages');
    
    // Initialize core classes
    new LeadGrid_Core();
}
add_action('plugins_loaded', 'leadgrid_init');

// Activation hook
register_activation_hook(__FILE__, 'leadgrid_activate');
function leadgrid_activate() {
    // Create necessary database tables
    leadgrid_create_tables();
    
    // Set default options
    leadgrid_set_default_options();
    
    // Create upload directories
    leadgrid_create_directories();
    
    // Schedule cron jobs
    leadgrid_schedule_events();
    
    // Flush rewrite rules
    flush_rewrite_rules();
    
    // Log activation
    LeadGrid_Logger::log('Plugin activated successfully');
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'leadgrid_deactivate');
function leadgrid_deactivate() {
    // Clear scheduled events
    wp_clear_scheduled_hook('leadgrid_sync_pages');
    wp_clear_scheduled_hook('leadgrid_cleanup_logs');
    wp_clear_scheduled_hook('leadgrid_analytics_report');
    
    // Flush rewrite rules
    flush_rewrite_rules();
    
    // Log deactivation
    LeadGrid_Logger::log('Plugin deactivated');
}

// Uninstall hook
register_uninstall_hook(__FILE__, 'leadgrid_uninstall');
function leadgrid_uninstall() {
    // Remove database tables (if user chooses to)
    if (get_option('leadgrid_remove_data_on_uninstall', false)) {
        leadgrid_remove_tables();
        leadgrid_remove_options();
        leadgrid_remove_directories();
    }
}

// Create database tables
function leadgrid_create_tables() {
    global $wpdb;
    
    $charset_collate = $wpdb->get_charset_collate();
    
    // Main pages table
    $pages_table = $wpdb->prefix . 'leadgrid_pages';
    $sql_pages = "CREATE TABLE $pages_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        leadgrid_id varchar(255) NOT NULL,
        wp_post_id bigint(20),
        page_data longtext,
        template_data longtext,
        last_sync datetime DEFAULT CURRENT_TIMESTAMP,
        sync_status varchar(50) DEFAULT 'pending',
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        UNIQUE KEY leadgrid_id (leadgrid_id),
        KEY wp_post_id (wp_post_id),
        KEY sync_status (sync_status),
        KEY last_sync (last_sync)
    ) $charset_collate;";
    
    // API keys table
    $api_table = $wpdb->prefix . 'leadgrid_api_keys';
    $sql_api = "CREATE TABLE $api_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        api_key varchar(255) NOT NULL,
        api_secret varchar(255) NOT NULL,
        is_active tinyint(1) DEFAULT 1,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        last_used datetime NULL,
        usage_count int(11) DEFAULT 0,
        PRIMARY KEY (id),
        UNIQUE KEY api_key (api_key),
        KEY is_active (is_active)
    ) $charset_collate;";
    
    // Analytics table
    $analytics_table = $wpdb->prefix . 'leadgrid_analytics';
    $sql_analytics = "CREATE TABLE $analytics_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        page_id mediumint(9),
        event_type varchar(50) NOT NULL,
        event_data longtext,
        ip_address varchar(45),
        user_agent varchar(500),
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY page_id (page_id),
        KEY event_type (event_type),
        KEY created_at (created_at),
        FOREIGN KEY (page_id) REFERENCES $pages_table(id) ON DELETE CASCADE
    ) $charset_collate;";
    
    // Logs table
    $logs_table = $wpdb->prefix . 'leadgrid_logs';
    $sql_logs = "CREATE TABLE $logs_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        level varchar(20) NOT NULL,
        message text NOT NULL,
        context longtext,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY level (level),
        KEY created_at (created_at)
    ) $charset_collate;";
    
    // Templates table
    $templates_table = $wpdb->prefix . 'leadgrid_templates';
    $sql_templates = "CREATE TABLE $templates_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        description text,
        template_data longtext NOT NULL,
        preview_image varchar(500),
        category varchar(100),
        is_premium tinyint(1) DEFAULT 0,
        is_active tinyint(1) DEFAULT 1,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        KEY category (category),
        KEY is_active (is_active),
        KEY is_premium (is_premium)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql_pages);
    dbDelta($sql_api);
    dbDelta($sql_analytics);
    dbDelta($sql_logs);
    dbDelta($sql_templates);
    
    // Insert default templates
    leadgrid_insert_default_templates();
}

// Set default options
function leadgrid_set_default_options() {
    $defaults = array(
        'leadgrid_api_endpoint' => 'https://api.leadgrid.co.il',
        'leadgrid_auto_sync' => true,
        'leadgrid_sync_interval' => 300,
        'leadgrid_cache_enabled' => true,
        'leadgrid_cache_duration' => 3600,
        'leadgrid_analytics_enabled' => true,
        'leadgrid_security_enabled' => true,
        'leadgrid_rate_limit' => 100,
        'leadgrid_debug_mode' => false,
        'leadgrid_remove_data_on_uninstall' => false,
        'leadgrid_webhook_secret' => wp_generate_password(32, false),
        'leadgrid_version' => LEADGRID_PLUGIN_VERSION
    );
    
    foreach ($defaults as $option => $value) {
        add_option($option, $value);
    }
    
    // Generate initial API key
    leadgrid_generate_api_key();
}

// Generate API key
function leadgrid_generate_api_key() {
    global $wpdb;
    
    $api_key = 'lg_' . wp_generate_password(32, false);
    $api_secret = wp_generate_password(64, false);
    
    $wpdb->insert(
        $wpdb->prefix . 'leadgrid_api_keys',
        array(
            'api_key' => $api_key,
            'api_secret' => hash('sha256', $api_secret),
            'is_active' => 1
        )
    );
    
    // Store the first API key as the main one
    update_option('leadgrid_main_api_key', $api_key);
    
    return $api_key;
}

// Create directories
function leadgrid_create_directories() {
    $upload_dir = wp_upload_dir();
    $leadgrid_dir = $upload_dir['basedir'] . '/leadgrid';
    
    $directories = array(
        $leadgrid_dir,
        $leadgrid_dir . '/templates',
        $leadgrid_dir . '/cache',
        $leadgrid_dir . '/logs',
        $leadgrid_dir . '/exports'
    );
    
    foreach ($directories as $dir) {
        if (!file_exists($dir)) {
            wp_mkdir_p($dir);
            
            // Add .htaccess for security
            $htaccess_content = "Order deny,allow\nDeny from all";
            file_put_contents($dir . '/.htaccess', $htaccess_content);
        }
    }
}

// Schedule events
function leadgrid_schedule_events() {
    if (!wp_next_scheduled('leadgrid_sync_pages')) {
        wp_schedule_event(time(), 'leadgrid_sync_interval', 'leadgrid_sync_pages');
    }
    
    if (!wp_next_scheduled('leadgrid_cleanup_logs')) {
        wp_schedule_event(time(), 'daily', 'leadgrid_cleanup_logs');
    }
    
    if (!wp_next_scheduled('leadgrid_analytics_report')) {
        wp_schedule_event(time(), 'weekly', 'leadgrid_analytics_report');
    }
}

// Insert default templates
function leadgrid_insert_default_templates() {
    global $wpdb;
    
    $templates = array(
        array(
            'name' => 'Modern Hero',
            'description' => 'עיצוב מודרני עם גיבור מרשים',
            'template_data' => json_encode(array(
                'sections' => array(
                    'hero' => array(
                        'style' => 'modern',
                        'background' => 'gradient',
                        'layout' => 'centered'
                    )
                )
            )),
            'category' => 'business',
            'is_premium' => 0
        ),
        array(
            'name' => 'Professional Services',
            'description' => 'תבנית מקצועית לשירותים עסקיים',
            'template_data' => json_encode(array(
                'sections' => array(
                    'hero' => array('style' => 'professional'),
                    'features' => array('layout' => 'grid'),
                    'testimonials' => array('style' => 'carousel'),
                    'contact' => array('form' => 'advanced')
                )
            )),
            'category' => 'services',
            'is_premium' => 0
        )
    );
    
    foreach ($templates as $template) {
        $wpdb->insert($wpdb->prefix . 'leadgrid_templates', $template);
    }
}

// Remove tables
function leadgrid_remove_tables() {
    global $wpdb;
    
    $tables = array(
        $wpdb->prefix . 'leadgrid_pages',
        $wpdb->prefix . 'leadgrid_api_keys',
        $wpdb->prefix . 'leadgrid_analytics',
        $wpdb->prefix . 'leadgrid_logs',
        $wpdb->prefix . 'leadgrid_templates'
    );
    
    foreach ($tables as $table) {
        $wpdb->query("DROP TABLE IF EXISTS $table");
    }
}

// Remove options
function leadgrid_remove_options() {
    $options = array(
        'leadgrid_api_endpoint',
        'leadgrid_auto_sync',
        'leadgrid_sync_interval',
        'leadgrid_cache_enabled',
        'leadgrid_cache_duration',
        'leadgrid_analytics_enabled',
        'leadgrid_security_enabled',
        'leadgrid_rate_limit',
        'leadgrid_debug_mode',
        'leadgrid_remove_data_on_uninstall',
        'leadgrid_webhook_secret',
        'leadgrid_main_api_key',
        'leadgrid_version'
    );
    
    foreach ($options as $option) {
        delete_option($option);
    }
}

// Remove directories
function leadgrid_remove_directories() {
    $upload_dir = wp_upload_dir();
    $leadgrid_dir = $upload_dir['basedir'] . '/leadgrid';
    
    if (file_exists($leadgrid_dir)) {
        leadgrid_delete_directory($leadgrid_dir);
    }
}

// Helper function to delete directory recursively
function leadgrid_delete_directory($dir) {
    if (!file_exists($dir)) {
        return;
    }
    
    $files = array_diff(scandir($dir), array('.', '..'));
    
    foreach ($files as $file) {
        $path = $dir . '/' . $file;
        is_dir($path) ? leadgrid_delete_directory($path) : unlink($path);
    }
    
    rmdir($dir);
}

// Add custom cron intervals
add_filter('cron_schedules', 'leadgrid_cron_schedules');
function leadgrid_cron_schedules($schedules) {
    $interval = get_option('leadgrid_sync_interval', 300);
    
    $schedules['leadgrid_sync_interval'] = array(
        'interval' => $interval,
        'display' => __('LeadGrid Sync Interval', 'leadgrid-integration')
    );
    
    return $schedules;
}
