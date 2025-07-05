
<?php
/**
 * LeadGrid Core Class
 * Main plugin functionality
 */

class LeadGrid_Core {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('admin_enqueue_scripts', array($this, 'admin_enqueue_scripts'));
        
        // Initialize components
        new LeadGrid_API();
        new LeadGrid_Blocks();
        new LeadGrid_Sync();
        new LeadGrid_Admin();
    }
    
    public function init() {
        // Register custom post type for LeadGrid pages
        $this->register_post_type();
        
        // Add rewrite rules
        add_rewrite_rule(
            '^leadgrid-sync/([^/]*)/?',
            'index.php?leadgrid_sync=1&leadgrid_id=$matches[1]',
            'top'
        );
        
        // Add query vars
        add_filter('query_vars', array($this, 'add_query_vars'));
        
        // Handle sync requests
        add_action('template_redirect', array($this, 'handle_sync_request'));
    }
    
    public function register_post_type() {
        register_post_type('leadgrid_page', array(
            'labels' => array(
                'name' => __('LeadGrid Pages', 'leadgrid-integration'),
                'singular_name' => __('LeadGrid Page', 'leadgrid-integration'),
            ),
            'public' => true,
            'has_archive' => false,
            'supports' => array('title', 'editor', 'custom-fields'),
            'show_in_rest' => true,
            'menu_icon' => 'dashicons-layout',
            'capability_type' => 'page',
        ));
    }
    
    public function add_query_vars($vars) {
        $vars[] = 'leadgrid_sync';
        $vars[] = 'leadgrid_id';
        return $vars;
    }
    
    public function handle_sync_request() {
        if (get_query_var('leadgrid_sync')) {
            $leadgrid_id = get_query_var('leadgrid_id');
            
            // Verify API key and sync request
            $api_key = $_SERVER['HTTP_X_LEADGRID_API_KEY'] ?? '';
            if (!$this->verify_api_key($api_key)) {
                wp_die('Unauthorized', 401);
            }
            
            // Handle the sync
            $sync = new LeadGrid_Sync();
            $result = $sync->sync_page($leadgrid_id);
            
            wp_send_json($result);
        }
    }
    
    private function verify_api_key($api_key) {
        $stored_key = get_option('leadgrid_api_key');
        return hash_equals($stored_key, $api_key);
    }
    
    public function enqueue_scripts() {
        wp_enqueue_script(
            'leadgrid-frontend',
            LEADGRID_PLUGIN_URL . 'assets/js/frontend.js',
            array('jquery'),
            LEADGRID_PLUGIN_VERSION,
            true
        );
        
        wp_enqueue_style(
            'leadgrid-frontend',
            LEADGRID_PLUGIN_URL . 'assets/css/frontend.css',
            array(),
            LEADGRID_PLUGIN_VERSION
        );
    }
    
    public function admin_enqueue_scripts($hook) {
        if (strpos($hook, 'leadgrid') === false) {
            return;
        }
        
        wp_enqueue_script(
            'leadgrid-admin',
            LEADGRID_PLUGIN_URL . 'assets/js/admin.js',
            array('jquery', 'wp-api'),
            LEADGRID_PLUGIN_VERSION,
            true
        );
        
        wp_enqueue_style(
            'leadgrid-admin',
            LEADGRID_PLUGIN_URL . 'assets/css/admin.css',
            array(),
            LEADGRID_PLUGIN_VERSION
        );
        
        wp_localize_script('leadgrid-admin', 'leadgrid_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('leadgrid_nonce'),
            'api_endpoint' => get_option('leadgrid_api_endpoint', 'https://api.leadgrid.co.il')
        ));
    }
}
