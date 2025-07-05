
<?php
/**
 * LeadGrid Core Class
 * Main plugin initialization and coordination
 */

class LeadGrid_Core {
    
    private $api;
    private $admin;
    private $settings;
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
    }
    
    public function init() {
        // Initialize components
        $this->api = new LeadGrid_API();
        $this->settings = new LeadGrid_Settings();
        
        if (is_admin()) {
            $this->admin = new LeadGrid_Admin();
        }
        
        // Load text domain
        load_plugin_textdomain('leadgrid-integration', false, dirname(LEADGRID_PLUGIN_BASENAME) . '/languages');
        
        // Register shortcodes
        add_shortcode('leadgrid_page', array($this, 'render_page_shortcode'));
        
        // Add REST API endpoints
        add_action('rest_api_init', array($this, 'register_rest_routes'));
    }
    
    public function enqueue_scripts() {
        wp_enqueue_style(
            'leadgrid-frontend',
            LEADGRID_PLUGIN_URL . 'assets/css/frontend.css',
            array(),
            LEADGRID_PLUGIN_VERSION
        );
        
        wp_enqueue_script(
            'leadgrid-frontend',
            LEADGRID_PLUGIN_URL . 'assets/js/frontend.js',
            array('jquery'),
            LEADGRID_PLUGIN_VERSION,
            true
        );
        
        wp_localize_script('leadgrid-frontend', 'leadgrid_ajax', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('leadgrid_nonce')
        ));
    }
    
    public function enqueue_admin_scripts($hook) {
        if (strpos($hook, 'leadgrid') === false) {
            return;
        }
        
        wp_enqueue_style(
            'leadgrid-admin',
            LEADGRID_PLUGIN_URL . 'assets/css/admin.css',
            array(),
            LEADGRID_PLUGIN_VERSION
        );
        
        wp_enqueue_script(
            'leadgrid-admin',
            LEADGRID_PLUGIN_URL . 'assets/js/admin.js',
            array('jquery'),
            LEADGRID_PLUGIN_VERSION,
            true
        );
        
        wp_localize_script('leadgrid-admin', 'leadgrid_admin', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('leadgrid_nonce'),
            'strings' => array(
                'confirm_delete' => __('Are you sure you want to delete this page?', 'leadgrid-integration'),
                'importing' => __('Importing...', 'leadgrid-integration'),
                'success' => __('Success!', 'leadgrid-integration'),
                'error' => __('Error occurred', 'leadgrid-integration')
            )
        ));
    }
    
    public function render_page_shortcode($atts) {
        $atts = shortcode_atts(array(
            'id' => '',
        ), $atts);
        
        if (empty($atts['id'])) {
            return '<p>' . __('LeadGrid Page ID is required', 'leadgrid-integration') . '</p>';
        }
        
        $page_data = $this->api->get_page($atts['id']);
        
        if (!$page_data) {
            return '<p>' . __('LeadGrid page not found', 'leadgrid-integration') . '</p>';
        }
        
        return $page_data['content'] ?? '';
    }
    
    public function register_rest_routes() {
        register_rest_route('leadgrid/v1', '/pages', array(
            'methods' => 'GET',
            'callback' => array($this, 'rest_get_pages'),
            'permission_callback' => array($this, 'rest_permission_check')
        ));
        
        register_rest_route('leadgrid/v1', '/pages/(?P<id>[a-zA-Z0-9_]+)', array(
            'methods' => 'GET',
            'callback' => array($this, 'rest_get_page'),
            'permission_callback' => array($this, 'rest_permission_check')
        ));
        
        register_rest_route('leadgrid/v1', '/import', array(
            'methods' => 'POST',
            'callback' => array($this, 'rest_import_page'),
            'permission_callback' => array($this, 'rest_permission_check')
        ));
    }
    
    public function rest_get_pages($request) {
        $pages = $this->api->get_pages();
        return rest_ensure_response($pages);
    }
    
    public function rest_get_page($request) {
        $page_id = $request->get_param('id');
        $page = $this->api->get_page($page_id);
        
        if (!$page) {
            return new WP_Error('page_not_found', 'Page not found', array('status' => 404));
        }
        
        return rest_ensure_response($page);
    }
    
    public function rest_import_page($request) {
        $page_id = $request->get_param('page_id');
        
        if (!$page_id) {
            return new WP_Error('missing_page_id', 'Page ID is required', array('status' => 400));
        }
        
        // Simulate the AJAX import
        $_POST['page_id'] = $page_id;
        $_POST['nonce'] = wp_create_nonce('leadgrid_nonce');
        
        ob_start();
        $this->api->ajax_import_page();
        $output = ob_get_clean();
        
        // Parse the JSON response
        $response = json_decode($output, true);
        
        if (isset($response['success']) && $response['success']) {
            return rest_ensure_response($response['data']);
        } else {
            return new WP_Error('import_failed', $response['data'] ?? 'Import failed', array('status' => 500));
        }
    }
    
    public function rest_permission_check() {
        return current_user_can('manage_options');
    }
}
