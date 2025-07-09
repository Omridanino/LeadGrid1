
<?php
/**
 * LeadGrid AI Landing Page Generator Theme Functions
 */

// Theme setup
function leadgrid_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'leadgrid'),
        'footer' => __('Footer Menu', 'leadgrid'),
    ));
    
    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'leadgrid_theme_setup');

// Enqueue styles and scripts
function leadgrid_scripts() {
    wp_enqueue_style('leadgrid-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Add Google Fonts
    wp_enqueue_style(
        'leadgrid-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Heebo:wght@400;500;600;700;800;900&display=swap',
        array(),
        null
    );
    
    // Add custom JavaScript
    wp_enqueue_script('leadgrid-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('leadgrid-script', 'leadgrid_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('leadgrid_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'leadgrid_scripts');

// Register widget area
function leadgrid_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'leadgrid'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'leadgrid'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Widgets', 'leadgrid'),
        'id'            => 'footer-widgets',
        'description'   => __('Footer widget area.', 'leadgrid'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'leadgrid_widgets_init');

// Custom excerpt length
function leadgrid_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'leadgrid_excerpt_length');

// Custom excerpt more
function leadgrid_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'leadgrid_excerpt_more');

// Add custom body classes
function leadgrid_body_classes($classes) {
    if (!is_sidebar_active('sidebar-1')) {
        $classes[] = 'no-sidebar';
    }
    return $classes;
}
add_filter('body_class', 'leadgrid_body_classes');

// LeadGrid Contact Widget
class LeadGrid_AI_Contact_Widget extends WP_Widget {
    
    function __construct() {
        parent::__construct(
            'leadgrid_ai_contact_widget',
            __('LeadGrid AI Contact', 'leadgrid'),
            array('description' => __('Advanced contact widget for LeadGrid AI platform', 'leadgrid'))
        );
    }
    
    public function widget($args, $instance) {
        echo $args['before_widget'];
        
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        
        echo '<div class="leadgrid-contact-widget">';
        echo '<div class="contact-info">';
        
        if (!empty($instance['phone'])) {
            echo '<p class="contact-item"><span class="contact-icon">📞</span> <a href="tel:' . esc_attr($instance['phone']) . '">' . esc_html($instance['phone']) . '</a></p>';
        }
        
        if (!empty($instance['email'])) {
            echo '<p class="contact-item"><span class="contact-icon">✉️</span> <a href="mailto:' . esc_attr($instance['email']) . '">' . esc_html($instance['email']) . '</a></p>';
        }
        
        if (!empty($instance['address'])) {
            echo '<p class="contact-item"><span class="contact-icon">📍</span> ' . esc_html($instance['address']) . '</p>';
        }
        
        if (!empty($instance['website'])) {
            echo '<p class="contact-item"><span class="contact-icon">🌐</span> <a href="' . esc_url($instance['website']) . '" target="_blank">' . esc_html($instance['website']) . '</a></p>';
        }
        
        echo '</div>';
        
        if (!empty($instance['cta_text']) && !empty($instance['cta_link'])) {
            echo '<a href="' . esc_url($instance['cta_link']) . '" class="contact-cta-button">' . esc_html($instance['cta_text']) . '</a>';
        }
        
        echo '</div>';
        echo $args['after_widget'];
    }
    
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('צור קשר עכשיו', 'leadgrid');
        $phone = !empty($instance['phone']) ? $instance['phone'] : '';
        $email = !empty($instance['email']) ? $instance['email'] : '';
        $address = !empty($instance['address']) ? $instance['address'] : '';
        $website = !empty($instance['website']) ? $instance['website'] : '';
        $cta_text = !empty($instance['cta_text']) ? $instance['cta_text'] : '';
        $cta_link = !empty($instance['cta_link']) ? $instance['cta_link'] : '';
        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php _e('Title:'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('phone')); ?>"><?php _e('Phone:'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('phone')); ?>" name="<?php echo esc_attr($this->get_field_name('phone')); ?>" type="text" value="<?php echo esc_attr($phone); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('email')); ?>"><?php _e('Email:'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('email')); ?>" name="<?php echo esc_attr($this->get_field_name('email')); ?>" type="email" value="<?php echo esc_attr($email); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('address')); ?>"><?php _e('Address:'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('address')); ?>" name="<?php echo esc_attr($this->get_field_name('address')); ?>" type="text" value="<?php echo esc_attr($address); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('website')); ?>"><?php _e('Website:'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('website')); ?>" name="<?php echo esc_attr($this->get_field_name('website')); ?>" type="url" value="<?php echo esc_attr($website); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('cta_text')); ?>"><?php _e('CTA Button Text:'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('cta_text')); ?>" name="<?php echo esc_attr($this->get_field_name('cta_text')); ?>" type="text" value="<?php echo esc_attr($cta_text); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('cta_link')); ?>"><?php _e('CTA Button Link:'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('cta_link')); ?>" name="<?php echo esc_attr($this->get_field_name('cta_link')); ?>" type="url" value="<?php echo esc_attr($cta_link); ?>">
        </p>
        <?php
    }
    
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';
        $instance['phone'] = (!empty($new_instance['phone'])) ? sanitize_text_field($new_instance['phone']) : '';
        $instance['email'] = (!empty($new_instance['email'])) ? sanitize_email($new_instance['email']) : '';
        $instance['address'] = (!empty($new_instance['address'])) ? sanitize_text_field($new_instance['address']) : '';
        $instance['website'] = (!empty($new_instance['website'])) ? esc_url_raw($new_instance['website']) : '';
        $instance['cta_text'] = (!empty($new_instance['cta_text'])) ? sanitize_text_field($new_instance['cta_text']) : '';
        $instance['cta_link'] = (!empty($new_instance['cta_link'])) ? esc_url_raw($new_instance['cta_link']) : '';
        return $instance;
    }
}

// Register the widget
function register_leadgrid_widgets() {
    register_widget('LeadGrid_AI_Contact_Widget');
}
add_action('widgets_init', 'register_leadgrid_widgets');

// Add smooth scrolling functionality
function leadgrid_smooth_scroll() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling for anchor links
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Add animation classes on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.feature-card, .testimonial-card').forEach(el => {
            observer.observe(el);
        });
    });
    </script>
    <?php
}
add_action('wp_footer', 'leadgrid_smooth_scroll');

// Add customizer options
function leadgrid_customize_register($wp_customize) {
    
    // LeadGrid AI Section
    $wp_customize->add_section('leadgrid_ai_settings', array(
        'title'    => __('LeadGrid AI Settings', 'leadgrid'),
        'priority' => 30,
    ));
    
    // Hero Section
    $wp_customize->add_setting('hero_title', array(
        'default'           => 'LeadGrid - בונה דפי נחיתה מתקדם',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label'   => __('Hero Title', 'leadgrid'),
        'section' => 'leadgrid_ai_settings',
        'type'    => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'יצירת דפי נחיתה מקצועיים ואתרי WordPress אמיתיים באמצעות בינה מלאכותית מתקדמת',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label'   => __('Hero Subtitle', 'leadgrid'),
        'section' => 'leadgrid_ai_settings',
        'type'    => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '050-1234567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label'   => __('Phone Number', 'leadgrid'),
        'section' => 'leadgrid_ai_settings',
        'type'    => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'info@leadgrid.co.il',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label'   => __('Email Address', 'leadgrid'),
        'section' => 'leadgrid_ai_settings',
        'type'    => 'email',
    ));
    
    // AI Features Settings
    $wp_customize->add_setting('enable_ai_chat', array(
        'default'           => true,
        'sanitize_callback' => 'wp_validate_boolean',
    ));
    
    $wp_customize->add_control('enable_ai_chat', array(
        'label'   => __('Enable AI Chat Widget', 'leadgrid'),
        'section' => 'leadgrid_ai_settings',
        'type'    => 'checkbox',
    ));
    
    // Colors
    $wp_customize->add_setting('primary_color', array(
        'default'           => '#3b82f6',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label'   => __('Primary Color', 'leadgrid'),
        'section' => 'leadgrid_ai_settings',
    )));
}
add_action('customize_register', 'leadgrid_customize_register');

// Helper function to get customizer values
function leadgrid_get_option($option, $default = '') {
    return get_theme_mod($option, $default);
}

// Add admin menu for LeadGrid settings
function leadgrid_admin_menu() {
    add_theme_page(
        'LeadGrid AI Settings',
        'LeadGrid AI',
        'manage_options',
        'leadgrid-settings',
        'leadgrid_admin_page'
    );
}
add_action('admin_menu', 'leadgrid_admin_menu');

function leadgrid_admin_page() {
    ?>
    <div class="wrap">
        <h1>🚀 LeadGrid AI Settings</h1>
        <div class="leadgrid-admin-content">
            <div class="leadgrid-card">
                <h2>ברוכים הבאים ל-LeadGrid AI</h2>
                <p>זוהי ערכת הנושא המתקדמת ביותר ליצירת דפי נחיתה באמצעות בינה מלאכותית.</p>
                
                <h3>🎯 תכונות מתקדמות:</h3>
                <ul>
                    <li>🤖 יצירת תוכן באמצעות AI</li>
                    <li>🎨 5 סגנונות עיצוב מתקדמים</li>
                    <li>🌐 אינטגרציה עם Namecheap לדומיינים</li>
                    <li>💳 מערכת תשלומים עם Stripe</li>
                    <li>⚡ טעינה מהירה ומותאמת לישראל</li>
                </ul>
                
                <h3>🔧 הגדרות מהירות:</h3>
                <p>עברו ל<strong>Appearance → Customize → LeadGrid AI Settings</strong> כדי להתאים אישית את המערכת.</p>
                
                <a href="<?php echo admin_url('customize.php?autofocus[section]=leadgrid_ai_settings'); ?>" class="button button-primary">
                    פתח את ה-Customizer
                </a>
            </div>
        </div>
    </div>
    
    <style>
    .leadgrid-admin-content {
        max-width: 800px;
    }
    .leadgrid-card {
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        margin: 20px 0;
    }
    .leadgrid-card h2 {
        color: #3b82f6;
        margin-bottom: 15px;
    }
    .leadgrid-card ul {
        margin: 15px 0;
    }
    .leadgrid-card li {
        margin: 8px 0;
        font-size: 16px;
    }
    </style>
    <?php
}

// Security enhancements
function leadgrid_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
    }
}
add_action('send_headers', 'leadgrid_security_headers');

// Optimize performance
function leadgrid_performance_optimizations() {
    // Remove unnecessary WordPress features
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'index_rel_link');
    remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'leadgrid_performance_optimizations');

?>
