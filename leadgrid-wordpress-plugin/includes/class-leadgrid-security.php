
<?php
/**
 * LeadGrid Security Class
 * Handles security features and authentication
 */

class LeadGrid_Security {
    
    private $rate_limits = array();
    
    public function __construct() {
        add_action('init', array($this, 'init_security'));
        add_action('wp_ajax_leadgrid_revoke_api_key', array($this, 'ajax_revoke_api_key'));
    }
    
    public function init_security() {
        if (!get_option('leadgrid_security_enabled', true)) {
            return;
        }
        
        // Initialize rate limiting
        $this->init_rate_limiting();
        
        // Security headers
        add_action('send_headers', array($this, 'add_security_headers'));
    }
    
    public function verify_api_request() {
        // Check if security is enabled
        if (!get_option('leadgrid_security_enabled', true)) {
            return true;
        }
        
        $api_key = $this->get_api_key_from_request();
        
        if (!$api_key) {
            LeadGrid_Logger::log('API request without API key', 'warning');
            return false;
        }
        
        // Verify API key exists and is active
        global $wpdb;
        $key_data = $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_api_keys WHERE api_key = %s AND is_active = 1", $api_key)
        );
        
        if (!$key_data) {
            LeadGrid_Logger::log('Invalid API key used: ' . substr($api_key, 0, 10) . '...', 'warning');
            return false;
        }
        
        // Check rate limiting
        if (!$this->check_rate_limit($api_key)) {
            LeadGrid_Logger::log('Rate limit exceeded for API key: ' . substr($api_key, 0, 10) . '...', 'warning');
            return false;
        }
        
        // Update usage statistics
        $this->update_api_key_usage($key_data->id);
        
        return true;
    }
    
    public function verify_webhook_signature() {
        if (!get_option('leadgrid_security_enabled', true)) {
            return true;
        }
        
        $signature = $_SERVER['HTTP_X_LEADGRID_SIGNATURE'] ?? '';
        $payload = file_get_contents('php://input');
        $secret = get_option('leadgrid_webhook_secret');
        
        if (!$signature || !$secret) {
            return false;
        }
        
        $expected_signature = 'sha256=' . hash_hmac('sha256', $payload, $secret);
        
        return hash_equals($expected_signature, $signature);
    }
    
    private function get_api_key_from_request() {
        // Check Authorization header
        $auth_header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        if (strpos($auth_header, 'Bearer ') === 0) {
            return substr($auth_header, 7);
        }
        
        // Check X-API-Key header
        if (isset($_SERVER['HTTP_X_API_KEY'])) {
            return $_SERVER['HTTP_X_API_KEY'];
        }
        
        // Check query parameter (less secure, but for compatibility)
        if (isset($_GET['api_key'])) {
            return $_GET['api_key'];
        }
        
        return null;
    }
    
    private function init_rate_limiting() {
        // Clean old rate limit data every hour
        if (!wp_next_scheduled('leadgrid_cleanup_rate_limits')) {
            wp_schedule_event(time(), 'hourly', 'leadgrid_cleanup_rate_limits');
        }
        
        add_action('leadgrid_cleanup_rate_limits', array($this, 'cleanup_rate_limits'));
    }
    
    private function check_rate_limit($api_key) {
        $limit = get_option('leadgrid_rate_limit', 100);
        $window = 3600; // 1 hour
        
        $current_time = time();
        $window_start = $current_time - $window;
        
        // Initialize if not exists
        if (!isset($this->rate_limits[$api_key])) {
            $this->rate_limits[$api_key] = array();
        }
        
        // Remove old requests
        $this->rate_limits[$api_key] = array_filter(
            $this->rate_limits[$api_key],
            function($timestamp) use ($window_start) {
                return $timestamp > $window_start;
            }
        );
        
        // Check if limit exceeded
        if (count($this->rate_limits[$api_key]) >= $limit) {
            return false;
        }
        
        // Add current request
        $this->rate_limits[$api_key][] = $current_time;
        
        return true;
    }
    
    public function cleanup_rate_limits() {
        $this->rate_limits = array();
    }
    
    private function update_api_key_usage($key_id) {
        global $wpdb;
        
        $wpdb->update(
            $wpdb->prefix . 'leadgrid_api_keys',
            array(
                'last_used' => current_time('mysql'),
                'usage_count' => new WP_MySQL_Expression('usage_count + 1')
            ),
            array('id' => $key_id)
        );
    }
    
    public function generate_api_key() {
        global $wpdb;
        
        $api_key = 'lg_' . wp_generate_password(32, false);
        $api_secret = wp_generate_password(64, false);
        
        $result = $wpdb->insert(
            $wpdb->prefix . 'leadgrid_api_keys',
            array(
                'api_key' => $api_key,
                'api_secret' => hash('sha256', $api_secret),
                'is_active' => 1,
                'created_at' => current_time('mysql')
            )
        );
        
        if ($result) {
            LeadGrid_Logger::log('New API key generated: ' . substr($api_key, 0, 10) . '...');
            return $api_key;
        }
        
        return false;
    }
    
    public function revoke_api_key($api_key) {
        global $wpdb;
        
        $result = $wpdb->update(
            $wpdb->prefix . 'leadgrid_api_keys',
            array('is_active' => 0),
            array('api_key' => $api_key)
        );
        
        if ($result) {
            LeadGrid_Logger::log('API key revoked: ' . substr($api_key, 0, 10) . '...');
            return true;
        }
        
        return false;
    }
    
    public function get_api_keys() {
        global $wpdb;
        
        return $wpdb->get_results("SELECT * FROM {$wpdb->prefix}leadgrid_api_keys ORDER BY created_at DESC");
    }
    
    public function get_api_key_stats($api_key) {
        global $wpdb;
        
        $key_data = $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_api_keys WHERE api_key = %s", $api_key)
        );
        
        if (!$key_data) {
            return false;
        }
        
        // Get recent usage
        $recent_usage = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT COUNT(*) FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE event_type = 'api_request' 
                AND event_data LIKE %s 
                AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)",
                '%' . $wpdb->esc_like($api_key) . '%'
            )
        );
        
        return array(
            'api_key' => $key_data,
            'recent_usage' => $recent_usage,
            'current_rate_limit' => count($this->rate_limits[$api_key] ?? array())
        );
    }
    
    public function add_security_headers() {
        if (!is_admin() && strpos($_SERVER['REQUEST_URI'], 'leadgrid-api') !== false) {
            header('X-Content-Type-Options: nosniff');
            header('X-Frame-Options: DENY');
            header('X-XSS-Protection: 1; mode=block');
            header('Referrer-Policy: strict-origin-when-cross-origin');
        }
    }
    
    public function sanitize_input($input, $type = 'text') {
        switch ($type) {
            case 'email':
                return sanitize_email($input);
            case 'url':
                return esc_url_raw($input);
            case 'int':
                return absint($input);
            case 'float':
                return floatval($input);
            case 'html':
                return wp_kses_post($input);
            case 'text':
            default:
                return sanitize_text_field($input);
        }
    }
    
    public function encrypt_sensitive_data($data) {
        if (!function_exists('sodium_crypto_secretbox')) {
            // Fallback to base64 encoding (not secure, but better than nothing)
            return base64_encode($data);
        }
        
        $key = $this->get_encryption_key();
        $nonce = random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $encrypted = sodium_crypto_secretbox($data, $nonce, $key);
        
        return base64_encode($nonce . $encrypted);
    }
    
    public function decrypt_sensitive_data($encrypted_data) {
        if (!function_exists('sodium_crypto_secretbox_open')) {
            // Fallback from base64 encoding
            return base64_decode($encrypted_data);
        }
        
        $key = $this->get_encryption_key();
        $data = base64_decode($encrypted_data);
        
        if (strlen($data) < SODIUM_CRYPTO_SECRETBOX_NONCEBYTES) {
            return false;
        }
        
        $nonce = substr($data, 0, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $encrypted = substr($data, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        
        return sodium_crypto_secretbox_open($encrypted, $nonce, $key);
    }
    
    private function get_encryption_key() {
        $key = get_option('leadgrid_encryption_key');
        
        if (!$key) {
            if (function_exists('sodium_crypto_secretbox_keygen')) {
                $key = sodium_crypto_secretbox_keygen();
            } else {
                $key = wp_generate_password(32, false);
            }
            
            update_option('leadgrid_encryption_key', base64_encode($key));
        } else {
            $key = base64_decode($key);
        }
        
        return $key;
    }
    
    public function ajax_revoke_api_key() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        $api_key = sanitize_text_field($_POST['api_key'] ?? '');
        
        if (!$api_key) {
            wp_send_json_error(__('Invalid API key', 'leadgrid-integration'));
        }
        
        if ($this->revoke_api_key($api_key)) {
            wp_send_json_success(__('API key revoked successfully', 'leadgrid-integration'));
        } else {
            wp_send_json_error(__('Failed to revoke API key', 'leadgrid-integration'));
        }
    }
}

class WP_MySQL_Expression {
    private $expression;
    
    public function __construct($expression) {
        $this->expression = $expression;
    }
    
    public function __toString() {
        return $this->expression;
    }
}
