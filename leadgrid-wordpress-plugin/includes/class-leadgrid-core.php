
<?php
/**
 * LeadGrid Core Class
 * Main plugin functionality and initialization
 */

class LeadGrid_Core {
    
    private $settings;
    private $cache;
    private $security;
    
    public function __construct() {
        $this->init_hooks();
        $this->init_components();
    }
    
    private function init_hooks() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_scripts'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
        add_action('rest_api_init', array($this, 'register_rest_routes'));
        add_action('wp_ajax_leadgrid_generate_api_key', array($this, 'ajax_generate_api_key'));
        add_action('wp_ajax_leadgrid_test_connection', array($this, 'ajax_test_connection'));
        
        // Frontend hooks
        add_action('wp_head', array($this, 'add_meta_tags'));
        add_action('wp_footer', array($this, 'add_tracking_code'));
        
        // Admin hooks
        add_filter('plugin_action_links_' . LEADGRID_PLUGIN_BASENAME, array($this, 'plugin_action_links'));
        add_filter('plugin_row_meta', array($this, 'plugin_row_meta'), 10, 2);
    }
    
    private function init_components() {
        $this->settings = new LeadGrid_Settings();
        $this->cache = new LeadGrid_Cache();
        $this->security = new LeadGrid_Security();
        
        // Initialize other components
        new LeadGrid_API();
        new LeadGrid_Blocks();
        new LeadGrid_Sync();
        new LeadGrid_Admin();
        new LeadGrid_Templates();
        new LeadGrid_Analytics();
    }
    
    public function init() {
        // Register custom post type
        $this->register_post_type();
        
        // Add rewrite rules
        $this->add_rewrite_rules();
        
        // Register taxonomies
        $this->register_taxonomies();
        
        // Initialize shortcodes
        $this->init_shortcodes();
        
        // Check for updates
        $this->check_version_update();
    }
    
    public function register_post_type() {
        $labels = array(
            'name' => __('LeadGrid Pages', 'leadgrid-integration'),
            'singular_name' => __('LeadGrid Page', 'leadgrid-integration'),
            'menu_name' => __('LeadGrid Pages', 'leadgrid-integration'),
            'add_new' => __('Add New Page', 'leadgrid-integration'),
            'add_new_item' => __('Add New LeadGrid Page', 'leadgrid-integration'),
            'edit_item' => __('Edit LeadGrid Page', 'leadgrid-integration'),
            'new_item' => __('New LeadGrid Page', 'leadgrid-integration'),
            'view_item' => __('View LeadGrid Page', 'leadgrid-integration'),
            'search_items' => __('Search LeadGrid Pages', 'leadgrid-integration'),
            'not_found' => __('No LeadGrid pages found', 'leadgrid-integration'),
            'not_found_in_trash' => __('No LeadGrid pages found in trash', 'leadgrid-integration')
        );
        
        register_post_type('leadgrid_page', array(
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => false, // We have our own menu
            'query_var' => true,
            'rewrite' => array('slug' => 'leadgrid-page'),
            'capability_type' => 'page',
            'has_archive' => true,
            'hierarchical' => false,
            'menu_position' => null,
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'),
            'show_in_rest' => true,
            'rest_base' => 'leadgrid-pages',
            'menu_icon' => 'dashicons-layout',
            'can_export' => true,
            'delete_with_user' => false
        ));
    }
    
    public function register_taxonomies() {
        // Page categories
        register_taxonomy('leadgrid_category', 'leadgrid_page', array(
            'hierarchical' => true,
            'labels' => array(
                'name' => __('Page Categories', 'leadgrid-integration'),
                'singular_name' => __('Page Category', 'leadgrid-integration')
            ),
            'show_ui' => true,
            'show_admin_column' => true,
            'query_var' => true,
            'rewrite' => array('slug' => 'leadgrid-category'),
            'show_in_rest' => true
        ));
        
        // Page tags
        register_taxonomy('leadgrid_tag', 'leadgrid_page', array(
            'hierarchical' => false,
            'labels' => array(
                'name' => __('Page Tags', 'leadgrid-integration'),
                'singular_name' => __('Page Tag', 'leadgrid-integration')
            ),
            'show_ui' => true,
            'show_admin_column' => true,
            'query_var' => true,
            'rewrite' => array('slug' => 'leadgrid-tag'),
            'show_in_rest' => true
        ));
    }
    
    private function add_rewrite_rules() {
        // API endpoint for syncing
        add_rewrite_rule(
            '^leadgrid-api/([^/]*)/([^/]*)/?',
            'index.php?leadgrid_api=1&leadgrid_endpoint=$matches[1]&leadgrid_id=$matches[2]',
            'top'
        );
        
        // Webhook endpoint
        add_rewrite_rule(
            '^leadgrid-webhook/([^/]*)/?',
            'index.php?leadgrid_webhook=1&leadgrid_action=$matches[1]',
            'top'
        );
        
        // Add query vars
        add_filter('query_vars', array($this, 'add_query_vars'));
        
        // Handle requests
        add_action('template_redirect', array($this, 'handle_api_requests'));
    }
    
    public function add_query_vars($vars) {
        $vars[] = 'leadgrid_api';
        $vars[] = 'leadgrid_webhook';
        $vars[] = 'leadgrid_endpoint';
        $vars[] = 'leadgrid_action';
        $vars[] = 'leadgrid_id';
        return $vars;
    }
    
    public function handle_api_requests() {
        if (get_query_var('leadgrid_api')) {
            $this->handle_api_request();
        }
        
        if (get_query_var('leadgrid_webhook')) {
            $this->handle_webhook_request();
        }
    }
    
    private function handle_api_request() {
        $endpoint = get_query_var('leadgrid_endpoint');
        $id = get_query_var('leadgrid_id');
        
        // Security check
        if (!$this->security->verify_api_request()) {
            wp_die('Unauthorized', 401);
        }
        
        $api = new LeadGrid_API();
        
        switch ($endpoint) {
            case 'sync':
                $result = $api->sync_page_endpoint($id);
                break;
            case 'pages':
                $result = $api->get_pages_endpoint();
                break;
            case 'page':
                $result = $api->get_page_endpoint($id);
                break;
            default:
                $result = array('error' => 'Invalid endpoint');
                break;
        }
        
        wp_send_json($result);
    }
    
    private function handle_webhook_request() {
        $action = get_query_var('leadgrid_action');
        
        // Verify webhook signature
        if (!$this->security->verify_webhook_signature()) {
            wp_die('Invalid signature', 401);
        }
        
        $data = json_decode(file_get_contents('php://input'), true);
        
        switch ($action) {
            case 'page-updated':
                $this->handle_page_updated_webhook($data);
                break;
            case 'page-deleted':
                $this->handle_page_deleted_webhook($data);
                break;
            default:
                wp_send_json_error('Invalid webhook action');
                break;
        }
        
        wp_send_json_success();
    }
    
    private function handle_page_updated_webhook($data) {
        if (isset($data['page_id'])) {
            $sync = new LeadGrid_Sync();
            $sync->sync_page($data['page_id']);
            
            LeadGrid_Logger::log('Page updated via webhook: ' . $data['page_id']);
        }
    }
    
    private function handle_page_deleted_webhook($data) {
        if (isset($data['page_id'])) {
            global $wpdb;
            
            $page = $wpdb->get_row(
                $wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_pages WHERE leadgrid_id = %s", $data['page_id'])
            );
            
            if ($page && $page->wp_post_id) {
                wp_delete_post($page->wp_post_id, true);
                $wpdb->delete($wpdb->prefix . 'leadgrid_pages', array('leadgrid_id' => $data['page_id']));
                
                LeadGrid_Logger::log('Page deleted via webhook: ' . $data['page_id']);
            }
        }
    }
    
    private function init_shortcodes() {
        add_shortcode('leadgrid_page', array($this, 'leadgrid_page_shortcode'));
        add_shortcode('leadgrid_form', array($this, 'leadgrid_form_shortcode'));
        add_shortcode('leadgrid_stats', array($this, 'leadgrid_stats_shortcode'));
    }
    
    public function leadgrid_page_shortcode($atts) {
        $atts = shortcode_atts(array(
            'id' => '',
            'template' => 'default'
        ), $atts);
        
        if (!$atts['id']) {
            return '';
        }
        
        // Get page data and render
        global $wpdb;
        $page = $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_pages WHERE leadgrid_id = %s", $atts['id'])
        );
        
        if (!$page) {
            return '';
        }
        
        $page_data = json_decode($page->page_data, true);
        $blocks = new LeadGrid_Blocks();
        
        return $blocks->render_page_content($page_data, $atts['template']);
    }
    
    public function leadgrid_form_shortcode($atts) {
        $atts = shortcode_atts(array(
            'id' => '',
            'style' => 'default'
        ), $atts);
        
        // Render contact form
        ob_start();
        include LEADGRID_PLUGIN_PATH . 'templates/contact-form.php';
        return ob_get_clean();
    }
    
    public function leadgrid_stats_shortcode($atts) {
        $atts = shortcode_atts(array(
            'type' => 'summary',
            'period' => '30'
        ), $atts);
        
        $analytics = new LeadGrid_Analytics();
        $stats = $analytics->get_stats_for_shortcode($atts['type'], $atts['period']);
        
        ob_start();
        include LEADGRID_PLUGIN_PATH . 'templates/stats-display.php';
        return ob_get_clean();
    }
    
    public function enqueue_frontend_scripts() {
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
        
        // Localize script
        wp_localize_script('leadgrid-frontend', 'leadgrid_frontend', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('leadgrid_frontend_nonce'),
            'analytics_enabled' => get_option('leadgrid_analytics_enabled', true)
        ));
    }
    
    public function enqueue_admin_scripts($hook) {
        // Only load on LeadGrid pages
        if (strpos($hook, 'leadgrid') === false && $hook !== 'post.php' && $hook !== 'post-new.php') {
            return;
        }
        
        wp_enqueue_script(
            'leadgrid-admin',
            LEADGRID_PLUGIN_URL . 'assets/js/admin.js',
            array('jquery', 'wp-api', 'wp-util'),
            LEADGRID_PLUGIN_VERSION,
            true
        );
        
        wp_enqueue_style(
            'leadgrid-admin',
            LEADGRID_PLUGIN_URL . 'assets/css/admin.css',
            array(),
            LEADGRID_PLUGIN_VERSION
        );
        
        // Localize admin script
        wp_localize_script('leadgrid-admin', 'leadgrid_admin', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('leadgrid_admin_nonce'),
            'api_endpoint' => get_option('leadgrid_api_endpoint', 'https://api.leadgrid.co.il'),
            'debug_mode' => get_option('leadgrid_debug_mode', false),
            'strings' => array(
                'confirm_delete' => __('Are you sure you want to delete this page?', 'leadgrid-integration'),
                'sync_success' => __('Page synced successfully', 'leadgrid-integration'),
                'sync_error' => __('Failed to sync page', 'leadgrid-integration')
            )
        ));
    }
    
    public function register_rest_routes() {
        register_rest_route('leadgrid/v1', '/pages', array(
            'methods' => 'GET',
            'callback' => array($this, 'rest_get_pages'),
            'permission_callback' => array($this, 'rest_check_permissions')
        ));
        
        register_rest_route('leadgrid/v1', '/pages/(?P<id>\d+)', array(
            'methods' => 'GET',
            'callback' => array($this, 'rest_get_page'),
            'permission_callback' => array($this, 'rest_check_permissions')
        ));
        
        register_rest_route('leadgrid/v1', '/sync/(?P<id>[a-zA-Z0-9_-]+)', array(
            'methods' => 'POST',
            'callback' => array($this, 'rest_sync_page'),
            'permission_callback' => array($this, 'rest_check_permissions')
        ));
    }
    
    public function rest_check_permissions() {
        return current_user_can('manage_options');
    }
    
    public function rest_get_pages($request) {
        global $wpdb;
        
        $pages = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}leadgrid_pages ORDER BY created_at DESC");
        
        return rest_ensure_response($pages);
    }
    
    public function rest_get_page($request) {
        global $wpdb;
        
        $id = $request->get_param('id');
        $page = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_pages WHERE id = %d", $id));
        
        if (!$page) {
            return new WP_Error('not_found', 'Page not found', array('status' => 404));
        }
        
        return rest_ensure_response($page);
    }
    
    public function rest_sync_page($request) {
        $id = $request->get_param('id');
        
        $sync = new LeadGrid_Sync();
        $result = $sync->sync_page($id);
        
        return rest_ensure_response($result);
    }
    
    public function add_meta_tags() {
        if (is_singular('leadgrid_page')) {
            global $post;
            
            $leadgrid_data = get_post_meta($post->ID, 'leadgrid_data', true);
            if ($leadgrid_data) {
                $data = json_decode($leadgrid_data, true);
                
                if (isset($data['seo'])) {
                    echo '<meta name="description" content="' . esc_attr($data['seo']['description'] ?? '') . '">' . "\n";
                    echo '<meta name="keywords" content="' . esc_attr($data['seo']['keywords'] ?? '') . '">' . "\n";
                    
                    // Open Graph tags
                    echo '<meta property="og:title" content="' . esc_attr($data['seo']['title'] ?? get_the_title()) . '">' . "\n";
                    echo '<meta property="og:description" content="' . esc_attr($data['seo']['description'] ?? '') . '">' . "\n";
                    echo '<meta property="og:type" content="website">' . "\n";
                    echo '<meta property="og:url" content="' . esc_url(get_permalink()) . '">' . "\n";
                    
                    if (isset($data['seo']['image'])) {
                        echo '<meta property="og:image" content="' . esc_url($data['seo']['image']) . '">' . "\n";
                    }
                }
            }
        }
    }
    
    public function add_tracking_code() {
        if (get_option('leadgrid_analytics_enabled', true) && is_singular('leadgrid_page')) {
            ?>
            <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Track page view
                if (typeof leadgrid_frontend !== 'undefined') {
                    jQuery.post(leadgrid_frontend.ajax_url, {
                        action: 'leadgrid_track_event',
                        event_type: 'page_view',
                        page_id: <?php echo get_the_ID(); ?>,
                        nonce: leadgrid_frontend.nonce
                    });
                }
            });
            </script>
            <?php
        }
    }
    
    public function plugin_action_links($links) {
        $settings_link = '<a href="' . admin_url('admin.php?page=leadgrid-settings') . '">' . __('Settings', 'leadgrid-integration') . '</a>';
        array_unshift($links, $settings_link);
        
        return $links;
    }
    
    public function plugin_row_meta($links, $file) {
        if ($file === LEADGRID_PLUGIN_BASENAME) {
            $links[] = '<a href="https://docs.leadgrid.co.il" target="_blank">' . __('Documentation', 'leadgrid-integration') . '</a>';
            $links[] = '<a href="https://leadgrid.co.il/support" target="_blank">' . __('Support', 'leadgrid-integration') . '</a>';
        }
        
        return $links;
    }
    
    private function check_version_update() {
        $current_version = get_option('leadgrid_version', '1.0.0');
        
        if (version_compare($current_version, LEADGRID_PLUGIN_VERSION, '<')) {
            $this->perform_update($current_version);
            update_option('leadgrid_version', LEADGRID_PLUGIN_VERSION);
        }
    }
    
    private function perform_update($from_version) {
        // Perform version-specific updates
        if (version_compare($from_version, '2.0.0', '<')) {
            // Update to 2.0.0
            $this->update_to_200();
        }
        
        LeadGrid_Logger::log('Plugin updated from ' . $from_version . ' to ' . LEADGRID_PLUGIN_VERSION);
    }
    
    private function update_to_200() {
        // Add new columns or tables if needed
        // This is where you'd put migration code
    }
    
    public function ajax_generate_api_key() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $api_key = leadgrid_generate_api_key();
        
        wp_send_json_success(array(
            'api_key' => $api_key,
            'message' => __('New API key generated successfully', 'leadgrid-integration')
        ));
    }
    
    public function ajax_test_connection() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $endpoint = get_option('leadgrid_api_endpoint', 'https://api.leadgrid.co.il');
        $api_key = get_option('leadgrid_main_api_key');
        
        $response = wp_remote_get($endpoint . '/test', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $api_key,
                'Content-Type' => 'application/json'
            ),
            'timeout' => 10
        ));
        
        if (is_wp_error($response)) {
            wp_send_json_error('Connection failed: ' . $response->get_error_message());
        }
        
        $code = wp_remote_retrieve_response_code($response);
        if ($code === 200) {
            wp_send_json_success('Connection successful');
        } else {
            wp_send_json_error('Connection failed with code: ' . $code);
        }
    }
}
