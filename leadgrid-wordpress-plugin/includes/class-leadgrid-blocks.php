
<?php
/**
 * LeadGrid Blocks Class
 * Converts LeadGrid content to WordPress blocks
 */

class LeadGrid_Blocks {
    
    public function __construct() {
        add_action('init', array($this, 'register_blocks'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_assets'));
    }
    
    public function register_blocks() {
        // Register custom Gutenberg blocks for LeadGrid components
        register_block_type('leadgrid/hero', array(
            'editor_script' => 'leadgrid-blocks',
            'render_callback' => array($this, 'render_hero_block')
        ));
        
        register_block_type('leadgrid/features', array(
            'editor_script' => 'leadgrid-blocks',
            'render_callback' => array($this, 'render_features_block')
        ));
        
        register_block_type('leadgrid/testimonials', array(
            'editor_script' => 'leadgrid-blocks',
            'render_callback' => array($this, 'render_testimonials_block')
        ));
        
        register_block_type('leadgrid/contact', array(
            'editor_script' => 'leadgrid-blocks',
            'render_callback' => array($this, 'render_contact_block')
        ));
    }
    
    public function enqueue_block_assets() {
        wp_enqueue_script(
            'leadgrid-blocks',
            LEADGRID_PLUGIN_URL . 'assets/js/blocks.js',
            array('wp-blocks', 'wp-element', 'wp-editor'),
            LEADGRID_PLUGIN_VERSION,
            true
        );
        
        wp_enqueue_style(
            'leadgrid-blocks-editor',
            LEADGRID_PLUGIN_URL . 'assets/css/blocks-editor.css',
            array('wp-edit-blocks'),
            LEADGRID_PLUGIN_VERSION
        );
    }
    
    public function convert_to_blocks($page_data) {
        $blocks = array();
        
        // Convert hero section
        if (isset($page_data['hero'])) {
            $blocks[] = $this->create_hero_block($page_data['hero']);
        }
        
        // Convert features section
        if (isset($page_data['features'])) {
            $blocks[] = $this->create_features_block($page_data['features']);
        }
        
        // Convert testimonials section
        if (isset($page_data['testimonials'])) {
            $blocks[] = $this->create_testimonials_block($page_data['testimonials']);
        }
        
        // Convert contact section
        if (isset($page_data['contact'])) {
            $blocks[] = $this->create_contact_block($page_data['contact']);
        }
        
        return implode("\n\n", $blocks);
    }
    
    private function create_hero_block($hero_data) {
        $attributes = array(
            'title' => $hero_data['title'] ?? '',
            'subtitle' => $hero_data['subtitle'] ?? '',
            'description' => $hero_data['description'] ?? '',
            'button1Text' => $hero_data['button1Text'] ?? '',
            'button2Text' => $hero_data['button2Text'] ?? '',
            'backgroundColor' => $hero_data['backgroundColor'] ?? '#1e40af',
            'textColor' => $hero_data['textColor'] ?? '#ffffff'
        );
        
        return '<!-- wp:leadgrid/hero ' . wp_json_encode($attributes) . ' -->';
    }
    
    private function create_features_block($features_data) {
        $attributes = array(
            'title' => $features_data['title'] ?? '',
            'items' => $features_data['items'] ?? array(),
            'backgroundColor' => $features_data['backgroundColor'] ?? '#f8fafc'
        );
        
        return '<!-- wp:leadgrid/features ' . wp_json_encode($attributes) . ' -->';
    }
    
    private function create_testimonials_block($testimonials_data) {
        $attributes = array(
            'title' => $testimonials_data['title'] ?? '',
            'testimonials' => $testimonials_data['testimonials'] ?? array(),
            'backgroundColor' => $testimonials_data['backgroundColor'] ?? '#f1f5f9'
        );
        
        return '<!-- wp:leadgrid/testimonials ' . wp_json_encode($attributes) . ' -->';
    }
    
    private function create_contact_block($contact_data) {
        $attributes = array(
            'title' => $contact_data['title'] ?? '',
            'subtitle' => $contact_data['subtitle'] ?? '',
            'backgroundColor' => $contact_data['backgroundColor'] ?? '#f8fafc'
        );
        
        return '<!-- wp:leadgrid/contact ' . wp_json_encode($attributes) . ' -->';
    }
    
    public function render_hero_block($attributes) {
        $title = esc_html($attributes['title'] ?? '');
        $subtitle = esc_html($attributes['subtitle'] ?? '');
        $description = esc_html($attributes['description'] ?? '');
        $button1_text = esc_html($attributes['button1Text'] ?? '');
        $button2_text = esc_html($attributes['button2Text'] ?? '');
        $bg_color = esc_attr($attributes['backgroundColor'] ?? '#1e40af');
        $text_color = esc_attr($attributes['textColor'] ?? '#ffffff');
        
        ob_start();
        ?>
        <section class="leadgrid-hero" style="background: <?php echo $bg_color; ?>; color: <?php echo $text_color; ?>; padding: 80px 20px; text-align: center;">
            <div class="container" style="max-width: 1200px; margin: 0 auto;">
                <?php if ($title): ?>
                    <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: bold;"><?php echo $title; ?></h1>
                <?php endif; ?>
                
                <?php if ($subtitle): ?>
                    <h2 style="font-size: 1.5rem; margin-bottom: 1rem; opacity: 0.9;"><?php echo $subtitle; ?></h2>
                <?php endif; ?>
                
                <?php if ($description): ?>
                    <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9;"><?php echo $description; ?></p>
                <?php endif; ?>
                
                <div class="hero-buttons">
                    <?php if ($button1_text): ?>
                        <a href="#contact" class="btn btn-primary" style="background: rgba(255,255,255,0.2); color: white; padding: 16px 32px; border: 2px solid white; border-radius: 8px; text-decoration: none; display: inline-block; margin: 0 10px; font-weight: bold;"><?php echo $button1_text; ?></a>
                    <?php endif; ?>
                    
                    <?php if ($button2_text): ?>
                        <a href="#about" class="btn btn-secondary" style="background: rgba(255,255,255,0.2); color: white; padding: 16px 32px; border: 2px solid white; border-radius: 8px; text-decoration: none; display: inline-block; margin: 0 10px; font-weight: bold;"><?php echo $button2_text; ?></a>
                    <?php endif; ?>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
    
    public function render_features_block($attributes) {
        $title = esc_html($attributes['title'] ?? '');
        $items = $attributes['items'] ?? array();
        $bg_color = esc_attr($attributes['backgroundColor'] ?? '#f8fafc');
        
        ob_start();
        ?>
        <section class="leadgrid-features" style="background: <?php echo $bg_color; ?>; padding: 80px 20px;">
            <div class="container" style="max-width: 1200px; margin: 0 auto; text-align: center;">
                <?php if ($title): ?>
                    <h2 style="font-size: 2.5rem; margin-bottom: 3rem; color: #1e40af;"><?php echo $title; ?></h2>
                <?php endif; ?>
                
                <div class="features-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <?php foreach ($items as $item): ?>
                        <div class="feature-item" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #1e40af;"><?php echo esc_html($item['title'] ?? ''); ?></h3>
                            <p style="color: #6b7280;"><?php echo esc_html($item['description'] ?? ''); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
    
    public function render_testimonials_block($attributes) {
        $title = esc_html($attributes['title'] ?? '');
        $testimonials = $attributes['testimonials'] ?? array();
        $bg_color = esc_attr($attributes['backgroundColor'] ?? '#f1f5f9');
        
        ob_start();
        ?>
        <section class="leadgrid-testimonials" style="background: <?php echo $bg_color; ?>; padding: 80px 20px;">
            <div class="container" style="max-width: 1200px; margin: 0 auto; text-align: center;">
                <?php if ($title): ?>
                    <h2 style="font-size: 2.5rem; margin-bottom: 3rem; color: #1e40af;"><?php echo $title; ?></h2>
                <?php endif; ?>
                
                <div class="testimonials-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    <?php foreach ($testimonials as $testimonial): ?>
                        <div class="testimonial-item" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <p style="font-style: italic; margin-bottom: 1rem; color: #374151;">"<?php echo esc_html($testimonial['content'] ?? ''); ?>"</p>
                            <div class="testimonial-author">
                                <strong style="color: #1e40af;"><?php echo esc_html($testimonial['name'] ?? ''); ?></strong>
                                <span style="color: #6b7280; display: block;"><?php echo esc_html($testimonial['role'] ?? ''); ?></span>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
    
    public function render_contact_block($attributes) {
        $title = esc_html($attributes['title'] ?? '');
        $subtitle = esc_html($attributes['subtitle'] ?? '');
        $bg_color = esc_attr($attributes['backgroundColor'] ?? '#f8fafc');
        
        ob_start();
        ?>
        <section class="leadgrid-contact" style="background: <?php echo $bg_color; ?>; padding: 80px 20px;">
            <div class="container" style="max-width: 800px; margin: 0 auto; text-align: center;">
                <?php if ($title): ?>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: #1e40af;"><?php echo $title; ?></h2>
                <?php endif; ?>
                
                <?php if ($subtitle): ?>
                    <p style="font-size: 1.25rem; margin-bottom: 2rem; color: #6b7280;"><?php echo $subtitle; ?></p>
                <?php endif; ?>
                
                <div class="contact-form" style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <?php echo do_shortcode('[contact-form-7 id="1" title="Contact form 1"]'); ?>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }
}
