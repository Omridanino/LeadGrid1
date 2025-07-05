
<?php
/**
 * LeadGrid Templates Class
 * Handles template management and rendering
 */

class LeadGrid_Templates {
    
    public function __construct() {
        add_action('wp_ajax_leadgrid_get_templates', array($this, 'ajax_get_templates'));
        add_action('wp_ajax_leadgrid_save_template', array($this, 'ajax_save_template'));
        add_action('wp_ajax_leadgrid_delete_template', array($this, 'ajax_delete_template'));
        add_action('wp_ajax_leadgrid_apply_template', array($this, 'ajax_apply_template'));
    }
    
    public function get_templates($category = null, $is_premium = null) {
        global $wpdb;
        
        $where_conditions = array('is_active = 1');
        $where_values = array();
        
        if ($category) {
            $where_conditions[] = 'category = %s';
            $where_values[] = $category;
        }
        
        if ($is_premium !== null) {
            $where_conditions[] = 'is_premium = %d';
            $where_values[] = $is_premium ? 1 : 0;
        }
        
        $where_clause = 'WHERE ' . implode(' AND ', $where_conditions);
        
        $query = "SELECT * FROM {$wpdb->prefix}leadgrid_templates {$where_clause} ORDER BY created_at DESC";
        
        if (!empty($where_values)) {
            $query = $wpdb->prepare($query, $where_values);
        }
        
        return $wpdb->get_results($query);
    }
    
    public function get_template($id) {
        global $wpdb;
        
        return $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_templates WHERE id = %d AND is_active = 1", $id)
        );
    }
    
    public function save_template($data) {
        global $wpdb;
        
        $template_data = array(
            'name' => sanitize_text_field($data['name']),
            'description' => sanitize_textarea_field($data['description'] ?? ''),
            'template_data' => wp_json_encode($data['template_data']),
            'category' => sanitize_text_field($data['category'] ?? 'general'),
            'is_premium' => absint($data['is_premium'] ?? 0),
            'preview_image' => esc_url_raw($data['preview_image'] ?? '')
        );
        
        if (isset($data['id']) && $data['id']) {
            // Update existing template
            $template_data['updated_at'] = current_time('mysql');
            
            $result = $wpdb->update(
                $wpdb->prefix . 'leadgrid_templates',
                $template_data,
                array('id' => $data['id'])
            );
            
            if ($result !== false) {
                LeadGrid_Logger::log('Template updated: ' . $data['name']);
                return $data['id'];
            }
        } else {
            // Create new template
            $template_data['created_at'] = current_time('mysql');
            
            $result = $wpdb->insert(
                $wpdb->prefix . 'leadgrid_templates',
                $template_data
            );
            
            if ($result) {
                $template_id = $wpdb->insert_id;
                LeadGrid_Logger::log('Template created: ' . $data['name']);
                return $template_id;
            }
        }
        
        return false;
    }
    
    public function delete_template($id) {
        global $wpdb;
        
        $template = $this->get_template($id);
        
        if (!$template) {
            return false;
        }
        
        // Soft delete - just mark as inactive
        $result = $wpdb->update(
            $wpdb->prefix . 'leadgrid_templates',
            array('is_active' => 0),
            array('id' => $id)
        );
        
        if ($result) {
            LeadGrid_Logger::log('Template deleted: ' . $template->name);
            return true;
        }
        
        return false;
    }
    
    public function apply_template_to_page($template_id, $page_id) {
        $template = $this->get_template($template_id);
        
        if (!$template) {
            return false;
        }
        
        $template_data = json_decode($template->template_data, true);
        
        if (!$template_data) {
            return false;
        }
        
        // Get current page data
        global $wpdb;
        $page = $wpdb->get_row(
            $wpdb->prepare("SELECT * FROM {$wpdb->prefix}leadgrid_pages WHERE id = %d", $page_id)
        );
        
        if (!$page) {
            return false;
        }
        
        $current_data = json_decode($page->page_data, true) ?: array();
        
        // Merge template data with current data (template takes precedence for structure)
        $merged_data = array_merge($current_data, $template_data);
        
        // Update page data
        $result = $wpdb->update(
            $wpdb->prefix . 'leadgrid_pages',
            array(
                'page_data' => wp_json_encode($merged_data),
                'template_data' => $template->template_data,
                'updated_at' => current_time('mysql')
            ),
            array('id' => $page_id)
        );
        
        if ($result !== false) {
            // Update WordPress post content
            if ($page->wp_post_id) {
                $blocks = new LeadGrid_Blocks();
                $wp_content = $blocks->convert_to_blocks($merged_data);
                
                wp_update_post(array(
                    'ID' => $page->wp_post_id,
                    'post_content' => $wp_content
                ));
            }
            
            // Clear cache
            $cache = new LeadGrid_Cache();
            $cache->clear_page_cache($page->wp_post_id);
            
            LeadGrid_Logger::log("Template '{$template->name}' applied to page {$page_id}");
            
            return true;
        }
        
        return false;
    }
    
    public function get_template_categories() {
        global $wpdb;
        
        $categories = $wpdb->get_col(
            "SELECT DISTINCT category FROM {$wpdb->prefix}leadgrid_templates WHERE is_active = 1 ORDER BY category"
        );
        
        return $categories ?: array();
    }
    
    public function duplicate_template($id) {
        $template = $this->get_template($id);
        
        if (!$template) {
            return false;
        }
        
        $new_template_data = array(
            'name' => $template->name . ' (Copy)',
            'description' => $template->description,
            'template_data' => json_decode($template->template_data, true),
            'category' => $template->category,
            'is_premium' => 0, // Duplicated templates are not premium by default
            'preview_image' => $template->preview_image
        );
        
        return $this->save_template($new_template_data);
    }
    
    public function export_template($id) {
        $template = $this->get_template($id);
        
        if (!$template) {
            return false;
        }
        
        // Remove sensitive data
        unset($template->id);
        $template->created_at = current_time('mysql');
        $template->updated_at = current_time('mysql');
        
        return wp_json_encode($template, JSON_PRETTY_PRINT);
    }
    
    public function import_template($json_data) {
        $template_data = json_decode($json_data, true);
        
        if (!$template_data || !isset($template_data['name'])) {
            return false;
        }
        
        // Ensure required fields
        $template_data['name'] = sanitize_text_field($template_data['name']);
        $template_data['is_premium'] = 0; // Imported templates are not premium
        
        return $this->save_template($template_data);
    }
    
    public function ajax_get_templates() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        $category = sanitize_text_field($_POST['category'] ?? '');
        $is_premium = isset($_POST['is_premium']) ? (bool) $_POST['is_premium'] : null;
        
        $templates = $this->get_templates($category ?: null, $is_premium);
        
        wp_send_json_success($templates);
    }
    
    public function ajax_save_template() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        $template_data = $_POST['template'] ?? array();
        
        if (empty($template_data['name'])) {
            wp_send_json_error(__('Template name is required', 'leadgrid-integration'));
        }
        
        $template_id = $this->save_template($template_data);
        
        if ($template_id) {
            wp_send_json_success(array(
                'template_id' => $template_id,
                'message' => __('Template saved successfully', 'leadgrid-integration')
            ));
        } else {
            wp_send_json_error(__('Failed to save template', 'leadgrid-integration'));
        }
    }
    
    public function ajax_delete_template() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        $template_id = absint($_POST['template_id'] ?? 0);
        
        if (!$template_id) {
            wp_send_json_error(__('Invalid template ID', 'leadgrid-integration'));
        }
        
        if ($this->delete_template($template_id)) {
            wp_send_json_success(__('Template deleted successfully', 'leadgrid-integration'));
        } else {
            wp_send_json_error(__('Failed to delete template', 'leadgrid-integration'));
        }
    }
    
    public function ajax_apply_template() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        $template_id = absint($_POST['template_id'] ?? 0);
        $page_id = absint($_POST['page_id'] ?? 0);
        
        if (!$template_id || !$page_id) {
            wp_send_json_error(__('Invalid template or page ID', 'leadgrid-integration'));
        }
        
        if ($this->apply_template_to_page($template_id, $page_id)) {
            wp_send_json_success(__('Template applied successfully', 'leadgrid-integration'));
        } else {
            wp_send_json_error(__('Failed to apply template', 'leadgrid-integration'));
        }
    }
    
    public function render_template_selector($current_template_id = null) {
        $templates = $this->get_templates();
        $categories = $this->get_template_categories();
        
        ob_start();
        ?>
        <div class="leadgrid-template-selector">
            <div class="template-filters">
                <select id="template-category-filter">
                    <option value=""><?php _e('All Categories', 'leadgrid-integration'); ?></option>
                    <?php foreach ($categories as $category): ?>
                        <option value="<?php echo esc_attr($category); ?>"><?php echo esc_html(ucfirst($category)); ?></option>
                    <?php endforeach; ?>
                </select>
                
                <label>
                    <input type="checkbox" id="show-premium-templates"> 
                    <?php _e('Show Premium Templates', 'leadgrid-integration'); ?>
                </label>
            </div>
            
            <div class="templates-grid">
                <?php foreach ($templates as $template): ?>
                    <div class="template-item <?php echo $template->is_premium ? 'premium' : ''; ?>" 
                         data-template-id="<?php echo $template->id; ?>"
                         data-category="<?php echo esc_attr($template->category); ?>">
                        
                        <?php if ($template->preview_image): ?>
                            <img src="<?php echo esc_url($template->preview_image); ?>" alt="<?php echo esc_attr($template->name); ?>">
                        <?php else: ?>
                            <div class="template-placeholder">
                                <span class="dashicons dashicons-layout"></span>
                            </div>
                        <?php endif; ?>
                        
                        <div class="template-info">
                            <h4><?php echo esc_html($template->name); ?></h4>
                            <p><?php echo esc_html($template->description); ?></p>
                            
                            <div class="template-actions">
                                <button type="button" class="button button-primary apply-template" 
                                        data-template-id="<?php echo $template->id; ?>">
                                    <?php _e('Apply', 'leadgrid-integration'); ?>
                                </button>
                                
                                <button type="button" class="button preview-template" 
                                        data-template-id="<?php echo $template->id; ?>">
                                    <?php _e('Preview', 'leadgrid-integration'); ?>
                                </button>
                            </div>
                        </div>
                        
                        <?php if ($template->is_premium): ?>
                            <div class="premium-badge"><?php _e('Premium', 'leadgrid-integration'); ?></div>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        
        <style>
        .leadgrid-template-selector {
            margin: 20px 0;
        }
        
        .template-filters {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 5px;
        }
        
        .template-filters select,
        .template-filters label {
            margin-right: 15px;
        }
        
        .templates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .template-item {
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            background: white;
            transition: box-shadow 0.3s ease;
            position: relative;
        }
        
        .template-item:hover {
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .template-item img,
        .template-placeholder {
            width: 100%;
            height: 200px;
            object-fit: cover;
            background: #f1f1f1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .template-placeholder .dashicons {
            font-size: 48px;
            color: #ccc;
        }
        
        .template-info {
            padding: 15px;
        }
        
        .template-info h4 {
            margin: 0 0 10px 0;
            font-size: 16px;
        }
        
        .template-info p {
            margin: 0 0 15px 0;
            color: #666;
            font-size: 14px;
        }
        
        .template-actions {
            display: flex;
            gap: 10px;
        }
        
        .template-actions .button {
            flex: 1;
        }
        
        .premium-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #f39c12;
            color: white;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .template-item.premium {
            border-color: #f39c12;
        }
        </style>
        <?php
        return ob_get_clean();
    }
}
