
<?php
/**
 * LeadGrid Landing Theme Functions
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
    ));
}
add_action('after_setup_theme', 'leadgrid_theme_setup');

// Enqueue styles and scripts
function leadgrid_scripts() {
    wp_enqueue_style('leadgrid-style', get_stylesheet_uri());
    
    // Add custom JavaScript if needed
    wp_enqueue_script('leadgrid-script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true);
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
}
add_action('widgets_init', 'leadgrid_widgets_init');

// Custom excerpt length
function leadgrid_excerpt_length($length) {
    return 25;
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

// Custom contact widget
class LeadGrid_Contact_Widget extends WP_Widget {
    
    function __construct() {
        parent::__construct(
            'leadgrid_contact_widget',
            __('LeadGrid Contact', 'leadgrid'),
            array('description' => __('Display contact information', 'leadgrid'))
        );
    }
    
    public function widget($args, $instance) {
        echo $args['before_widget'];
        
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        
        echo '<div class="contact-widget">';
        echo '<div class="contact-info">';
        
        if (!empty($instance['phone'])) {
            echo '<p>📞 <a href="tel:' . esc_attr($instance['phone']) . '">' . esc_html($instance['phone']) . '</a></p>';
        }
        
        if (!empty($instance['email'])) {
            echo '<p>✉️ <a href="mailto:' . esc_attr($instance['email']) . '">' . esc_html($instance['email']) . '</a></p>';
        }
        
        if (!empty($instance['address'])) {
            echo '<p>📍 ' . esc_html($instance['address']) . '</p>';
        }
        
        echo '</div>';
        
        if (!empty($instance['phone'])) {
            echo '<a href="tel:' . esc_attr($instance['phone']) . '" class="contact-button">התקשרו עכשיו</a>';
        }
        
        echo '</div>';
        echo $args['after_widget'];
    }
    
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('צור קשר', 'leadgrid');
        $phone = !empty($instance['phone']) ? $instance['phone'] : '';
        $email = !empty($instance['email']) ? $instance['email'] : '';
        $address = !empty($instance['address']) ? $instance['address'] : '';
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
        <?php
    }
    
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';
        $instance['phone'] = (!empty($new_instance['phone'])) ? sanitize_text_field($new_instance['phone']) : '';
        $instance['email'] = (!empty($new_instance['email'])) ? sanitize_email($new_instance['email']) : '';
        $instance['address'] = (!empty($new_instance['address'])) ? sanitize_text_field($new_instance['address']) : '';
        return $instance;
    }
}

// Register the widget
function register_leadgrid_widgets() {
    register_widget('LeadGrid_Contact_Widget');
}
add_action('widgets_init', 'register_leadgrid_widgets');

// Add smooth scrolling to anchor links
function leadgrid_smooth_scroll() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
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
    });
    </script>
    <?php
}
add_action('wp_footer', 'leadgrid_smooth_scroll');

// Add customizer options
function leadgrid_customize_register($wp_customize) {
    
    // Hero Section
    $wp_customize->add_section('leadgrid_hero', array(
        'title'    => __('Hero Section', 'leadgrid'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default'           => 'ברוכים הבאים לאתר שלנו',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label'   => __('Hero Title', 'leadgrid'),
        'section' => 'leadgrid_hero',
        'type'    => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'אנחנו כאן כדי לעזור לכם להצליח',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label'   => __('Hero Subtitle', 'leadgrid'),
        'section' => 'leadgrid_hero',
        'type'    => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_section('leadgrid_contact', array(
        'title'    => __('Contact Information', 'leadgrid'),
        'priority' => 35,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '050-1234567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label'   => __('Phone Number', 'leadgrid'),
        'section' => 'leadgrid_contact',
        'type'    => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'info@yourbusiness.co.il',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label'   => __('Email Address', 'leadgrid'),
        'section' => 'leadgrid_contact',
        'type'    => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default'           => 'הכתובת שלכם כאן',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label'   => __('Address', 'leadgrid'),
        'section' => 'leadgrid_contact',
        'type'    => 'text',
    ));
}
add_action('customize_register', 'leadgrid_customize_register');

// Helper function to get customizer values
function leadgrid_get_option($option, $default = '') {
    return get_theme_mod($option, $default);
}
?>
