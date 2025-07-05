
<?php
/**
 * LeadGrid Settings Class
 * Handles plugin settings and configuration
 */

class LeadGrid_Settings {
    
    private $settings_group = 'leadgrid_settings';
    private $settings_page = 'leadgrid-settings';
    
    public function __construct() {
        add_action('admin_init', array($this, 'register_settings'));
        add_action('wp_ajax_leadgrid_save_settings', array($this, 'ajax_save_settings'));
        add_action('wp_ajax_leadgrid_reset_settings', array($this, 'ajax_reset_settings'));
    }
    
    public function register_settings() {
        // API Settings
        register_setting($this->settings_group, 'leadgrid_api_endpoint', array(
            'type' => 'string',
            'sanitize_callback' => 'esc_url_raw',
            'default' => 'https://api.leadgrid.co.il'
        ));
        
        register_setting($this->settings_group, 'leadgrid_main_api_key', array(
            'type' => 'string',
            'sanitize_callback' => 'sanitize_text_field'
        ));
        
        // Sync Settings
        register_setting($this->settings_group, 'leadgrid_auto_sync', array(
            'type' => 'boolean',
            'default' => true
        ));
        
        register_setting($this->settings_group, 'leadgrid_sync_interval', array(
            'type' => 'integer',
            'sanitize_callback' => 'absint',
            'default' => 300
        ));
        
        // Cache Settings
        register_setting($this->settings_group, 'leadgrid_cache_enabled', array(
            'type' => 'boolean',
            'default' => true
        ));
        
        register_setting($this->settings_group, 'leadgrid_cache_duration', array(
            'type' => 'integer',
            'sanitize_callback' => 'absint',
            'default' => 3600
        ));
        
        // Analytics Settings
        register_setting($this->settings_group, 'leadgrid_analytics_enabled', array(
            'type' => 'boolean',
            'default' => true
        ));
        
        register_setting($this->settings_group, 'leadgrid_analytics_retention', array(
            'type' => 'integer',
            'sanitize_callback' => 'absint',
            'default' => 90
        ));
        
        // Security Settings
        register_setting($this->settings_group, 'leadgrid_security_enabled', array(
            'type' => 'boolean',
            'default' => true
        ));
        
        register_setting($this->settings_group, 'leadgrid_rate_limit', array(
            'type' => 'integer',
            'sanitize_callback' => 'absint',
            'default' => 100
        ));
        
        register_setting($this->settings_group, 'leadgrid_webhook_secret', array(
            'type' => 'string',
            'sanitize_callback' => 'sanitize_text_field'
        ));
        
        // Advanced Settings
        register_setting($this->settings_group, 'leadgrid_debug_mode', array(
            'type' => 'boolean',
            'default' => false
        ));
        
        register_setting($this->settings_group, 'leadgrid_remove_data_on_uninstall', array(
            'type' => 'boolean',
            'default' => false
        ));
        
        register_setting($this->settings_group, 'leadgrid_custom_css', array(
            'type' => 'string',
            'sanitize_callback' => 'wp_strip_all_tags'
        ));
        
        register_setting($this->settings_group, 'leadgrid_custom_js', array(
            'type' => 'string',
            'sanitize_callback' => 'wp_strip_all_tags'
        ));
    }
    
    public function get_setting($key, $default = null) {
        return get_option($key, $default);
    }
    
    public function update_setting($key, $value) {
        return update_option($key, $value);
    }
    
    public function get_all_settings() {
        return array(
            'api' => array(
                'endpoint' => $this->get_setting('leadgrid_api_endpoint', 'https://api.leadgrid.co.il'),
                'api_key' => $this->get_setting('leadgrid_main_api_key', ''),
                'webhook_secret' => $this->get_setting('leadgrid_webhook_secret', '')
            ),
            'sync' => array(
                'auto_sync' => $this->get_setting('leadgrid_auto_sync', true),
                'sync_interval' => $this->get_setting('leadgrid_sync_interval', 300)
            ),
            'cache' => array(
                'enabled' => $this->get_setting('leadgrid_cache_enabled', true),
                'duration' => $this->get_setting('leadgrid_cache_duration', 3600)
            ),
            'analytics' => array(
                'enabled' => $this->get_setting('leadgrid_analytics_enabled', true),
                'retention' => $this->get_setting('leadgrid_analytics_retention', 90)
            ),
            'security' => array(
                'enabled' => $this->get_setting('leadgrid_security_enabled', true),
                'rate_limit' => $this->get_setting('leadgrid_rate_limit', 100)
            ),
            'advanced' => array(
                'debug_mode' => $this->get_setting('leadgrid_debug_mode', false),
                'remove_data_on_uninstall' => $this->get_setting('leadgrid_remove_data_on_uninstall', false),
                'custom_css' => $this->get_setting('leadgrid_custom_css', ''),
                'custom_js' => $this->get_setting('leadgrid_custom_js', '')
            )
        );
    }
    
    public function validate_settings($settings) {
        $validated = array();
        
        // Validate API endpoint
        if (isset($settings['leadgrid_api_endpoint'])) {
            $validated['leadgrid_api_endpoint'] = esc_url_raw($settings['leadgrid_api_endpoint']);
        }
        
        // Validate sync interval (minimum 60 seconds)
        if (isset($settings['leadgrid_sync_interval'])) {
            $interval = absint($settings['leadgrid_sync_interval']);
            $validated['leadgrid_sync_interval'] = max(60, $interval);
        }
        
        // Validate cache duration (minimum 300 seconds)
        if (isset($settings['leadgrid_cache_duration'])) {
            $duration = absint($settings['leadgrid_cache_duration']);
            $validated['leadgrid_cache_duration'] = max(300, $duration);
        }
        
        // Validate rate limit (minimum 10 requests)
        if (isset($settings['leadgrid_rate_limit'])) {
            $limit = absint($settings['leadgrid_rate_limit']);
            $validated['leadgrid_rate_limit'] = max(10, $limit);
        }
        
        // Validate analytics retention (minimum 7 days)
        if (isset($settings['leadgrid_analytics_retention'])) {
            $retention = absint($settings['leadgrid_analytics_retention']);
            $validated['leadgrid_analytics_retention'] = max(7, $retention);
        }
        
        return $validated;
    }
    
    public function export_settings() {
        $settings = $this->get_all_settings();
        
        // Remove sensitive data
        unset($settings['api']['api_key']);
        unset($settings['api']['webhook_secret']);
        
        return json_encode($settings, JSON_PRETTY_PRINT);
    }
    
    public function import_settings($json_data) {
        $settings = json_decode($json_data, true);
        
        if (!$settings || !is_array($settings)) {
            return new WP_Error('invalid_json', __('Invalid JSON format', 'leadgrid-integration'));
        }
        
        $validated_settings = $this->validate_settings($this->flatten_settings($settings));
        
        foreach ($validated_settings as $key => $value) {
            update_option($key, $value);
        }
        
        return true;
    }
    
    private function flatten_settings($settings) {
        $flattened = array();
        
        foreach ($settings as $group => $group_settings) {
            foreach ($group_settings as $key => $value) {
                $flattened['leadgrid_' . $key] = $value;
            }
        }
        
        return $flattened;
    }
    
    public function ajax_save_settings() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        $settings = $_POST['settings'] ?? array();
        $validated_settings = $this->validate_settings($settings);
        
        foreach ($validated_settings as $key => $value) {
            update_option($key, $value);
        }
        
        // Clear cache after settings update
        $cache = new LeadGrid_Cache();
        $cache->clear_all();
        
        // Reschedule sync events if interval changed
        if (isset($validated_settings['leadgrid_sync_interval'])) {
            wp_clear_scheduled_hook('leadgrid_sync_pages');
            wp_schedule_event(time(), 'leadgrid_sync_interval', 'leadgrid_sync_pages');
        }
        
        LeadGrid_Logger::log('Settings updated successfully');
        
        wp_send_json_success(__('Settings saved successfully', 'leadgrid-integration'));
    }
    
    public function ajax_reset_settings() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        // Reset to default values
        $defaults = array(
            'leadgrid_api_endpoint' => 'https://api.leadgrid.co.il',
            'leadgrid_auto_sync' => true,
            'leadgrid_sync_interval' => 300,
            'leadgrid_cache_enabled' => true,
            'leadgrid_cache_duration' => 3600,
            'leadgrid_analytics_enabled' => true,
            'leadgrid_analytics_retention' => 90,
            'leadgrid_security_enabled' => true,
            'leadgrid_rate_limit' => 100,
            'leadgrid_debug_mode' => false,
            'leadgrid_remove_data_on_uninstall' => false,
            'leadgrid_custom_css' => '',
            'leadgrid_custom_js' => ''
        );
        
        foreach ($defaults as $key => $value) {
            update_option($key, $value);
        }
        
        // Generate new webhook secret
        update_option('leadgrid_webhook_secret', wp_generate_password(32, false));
        
        LeadGrid_Logger::log('Settings reset to defaults');
        
        wp_send_json_success(__('Settings reset to defaults', 'leadgrid-integration'));
    }
    
    public function get_webhook_url() {
        return home_url('leadgrid-webhook/page-updated');
    }
    
    public function get_api_endpoint_url($endpoint = '') {
        $base_url = home_url('leadgrid-api');
        return $endpoint ? $base_url . '/' . $endpoint : $base_url;
    }
}
