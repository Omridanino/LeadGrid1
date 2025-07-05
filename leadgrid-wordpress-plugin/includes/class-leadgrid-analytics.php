
<?php
/**
 * LeadGrid Analytics Class
 * Handles analytics and tracking functionality
 */

class LeadGrid_Analytics {
    
    public function __construct() {
        add_action('wp_ajax_leadgrid_track_event', array($this, 'ajax_track_event'));
        add_action('wp_ajax_nopriv_leadgrid_track_event', array($this, 'ajax_track_event'));
        add_action('leadgrid_analytics_report', array($this, 'generate_weekly_report'));
        add_action('wp_ajax_leadgrid_get_analytics', array($this, 'ajax_get_analytics'));
    }
    
    public function track_event($page_id, $event_type, $event_data = array(), $user_info = null) {
        if (!get_option('leadgrid_analytics_enabled', true)) {
            return false;
        }
        
        global $wpdb;
        
        $user_info = $user_info ?? $this->get_user_info();
        
        $result = $wpdb->insert(
            $wpdb->prefix . 'leadgrid_analytics',
            array(
                'page_id' => $page_id,
                'event_type' => $event_type,
                'event_data' => json_encode($event_data),
                'ip_address' => $user_info['ip'],
                'user_agent' => $user_info['user_agent'],
                'created_at' => current_time('mysql')
            )
        );
        
        if ($result) {
            LeadGrid_Logger::debug("Event tracked: {$event_type} for page {$page_id}");
        }
        
        return $result !== false;
    }
    
    public function ajax_track_event() {
        // Allow both logged in and non-logged in users
        $nonce = $_POST['nonce'] ?? '';
        if ($nonce && !wp_verify_nonce($nonce, 'leadgrid_frontend_nonce')) {
            wp_send_json_error('Invalid nonce');
        }
        
        $page_id = absint($_POST['page_id'] ?? 0);
        $event_type = sanitize_text_field($_POST['event_type'] ?? '');
        $event_data = $_POST['event_data'] ?? array();
        
        if (!$page_id || !$event_type) {
            wp_send_json_error('Missing required parameters');
        }
        
        // Sanitize event data
        $sanitized_data = $this->sanitize_event_data($event_data);
        
        $result = $this->track_event($page_id, $event_type, $sanitized_data);
        
        if ($result) {
            wp_send_json_success();
        } else {
            wp_send_json_error('Failed to track event');
        }
    }
    
    private function sanitize_event_data($data) {
        if (!is_array($data)) {
            return array();
        }
        
        $sanitized = array();
        
        foreach ($data as $key => $value) {
            $key = sanitize_key($key);
            
            if (is_string($value)) {
                $sanitized[$key] = sanitize_text_field($value);
            } elseif (is_numeric($value)) {
                $sanitized[$key] = $value;
            } elseif (is_array($value)) {
                $sanitized[$key] = $this->sanitize_event_data($value);
            }
        }
        
        return $sanitized;
    }
    
    private function get_user_info() {
        return array(
            'ip' => $this->get_client_ip(),
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? ''
        );
    }
    
    private function get_client_ip() {
        $ip_headers = array(
            'HTTP_CF_CONNECTING_IP',     // Cloudflare
            'HTTP_CLIENT_IP',
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_FORWARDED',
            'HTTP_X_CLUSTER_CLIENT_IP',
            'HTTP_FORWARDED_FOR',
            'HTTP_FORWARDED',
            'REMOTE_ADDR'
        );
        
        foreach ($ip_headers as $header) {
            if (!empty($_SERVER[$header])) {
                $ip = $_SERVER[$header];
                
                // Handle comma-separated IPs
                if (strpos($ip, ',') !== false) {
                    $ip = trim(explode(',', $ip)[0]);
                }
                
                // Validate IP
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                    return $ip;
                }
            }
        }
        
        return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    }
    
    public function get_page_analytics($page_id, $start_date = null, $end_date = null) {
        global $wpdb;
        
        $start_date = $start_date ?? date('Y-m-d', strtotime('-30 days'));
        $end_date = $end_date ?? date('Y-m-d');
        
        // Get page views
        $page_views = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT COUNT(*) FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE page_id = %d AND event_type = 'page_view' 
                AND DATE(created_at) BETWEEN %s AND %s",
                $page_id, $start_date, $end_date
            )
        );
        
        // Get unique visitors
        $unique_visitors = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT COUNT(DISTINCT ip_address) FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE page_id = %d AND event_type = 'page_view' 
                AND DATE(created_at) BETWEEN %s AND %s",
                $page_id, $start_date, $end_date
            )
        );
        
        // Get daily stats
        $daily_stats = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT 
                    DATE(created_at) as date,
                    event_type,
                    COUNT(*) as count
                FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE page_id = %d 
                AND DATE(created_at) BETWEEN %s AND %s
                GROUP BY DATE(created_at), event_type
                ORDER BY date DESC",
                $page_id, $start_date, $end_date
            )
        );
        
        // Get top events
        $top_events = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT 
                    event_type,
                    COUNT(*) as count
                FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE page_id = %d 
                AND DATE(created_at) BETWEEN %s AND %s
                GROUP BY event_type
                ORDER BY count DESC
                LIMIT 10",
                $page_id, $start_date, $end_date
            )
        );
        
        return array(
            'page_id' => $page_id,
            'period' => array(
                'start' => $start_date,
                'end' => $end_date
            ),
            'summary' => array(
                'page_views' => (int) $page_views,
                'unique_visitors' => (int) $unique_visitors,
                'avg_daily_views' => round($page_views / max(1, (strtotime($end_date) - strtotime($start_date)) / 86400), 2)
            ),
            'daily_stats' => $daily_stats,
            'top_events' => $top_events
        );
    }
    
    public function get_overview_analytics($start_date = null, $end_date = null) {
        global $wpdb;
        
        $start_date = $start_date ?? date('Y-m-d', strtotime('-30 days'));
        $end_date = $end_date ?? date('Y-m-d');
        
        // Total pages
        $total_pages = $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->prefix}leadgrid_pages");
        
        // Total page views
        $total_views = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT COUNT(*) FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE event_type = 'page_view' 
                AND DATE(created_at) BETWEEN %s AND %s",
                $start_date, $end_date
            )
        );
        
        // Total unique visitors
        $unique_visitors = $wpdb->get_var(
            $wpdb->prepare(
                "SELECT COUNT(DISTINCT ip_address) FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE event_type = 'page_view' 
                AND DATE(created_at) BETWEEN %s AND %s",
                $start_date, $end_date
            )
        );
        
        // Top pages
        $top_pages = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT 
                    a.page_id,
                    COUNT(*) as views,
                    COUNT(DISTINCT a.ip_address) as unique_visitors,
                    p.leadgrid_id,
                    posts.post_title
                FROM {$wpdb->prefix}leadgrid_analytics a
                LEFT JOIN {$wpdb->prefix}leadgrid_pages p ON a.page_id = p.id
                LEFT JOIN {$wpdb->posts} posts ON p.wp_post_id = posts.ID
                WHERE a.event_type = 'page_view' 
                AND DATE(a.created_at) BETWEEN %s AND %s
                GROUP BY a.page_id
                ORDER BY views DESC
                LIMIT 10",
                $start_date, $end_date
            )
        );
        
        // Daily trends
        $daily_trends = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT 
                    DATE(created_at) as date,
                    COUNT(*) as views,
                    COUNT(DISTINCT ip_address) as unique_visitors
                FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE event_type = 'page_view' 
                AND DATE(created_at) BETWEEN %s AND %s
                GROUP BY DATE(created_at)
                ORDER BY date ASC",
                $start_date, $end_date
            )
        );
        
        return array(
            'period' => array(
                'start' => $start_date,
                'end' => $end_date
            ),
            'summary' => array(
                'total_pages' => (int) $total_pages,
                'total_views' => (int) $total_views,
                'unique_visitors' => (int) $unique_visitors,
                'avg_daily_views' => round($total_views / max(1, (strtotime($end_date) - strtotime($start_date)) / 86400), 2)
            ),
            'top_pages' => $top_pages,
            'daily_trends' => $daily_trends
        );
    }
    
    public function ajax_get_analytics() {
        check_ajax_referer('leadgrid_admin_nonce', 'nonce');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('Insufficient permissions', 'leadgrid-integration'));
        }
        
        $type = sanitize_text_field($_POST['type'] ?? 'overview');
        $page_id = absint($_POST['page_id'] ?? 0);
        $start_date = sanitize_text_field($_POST['start_date'] ?? '');
        $end_date = sanitize_text_field($_POST['end_date'] ?? '');
        
        if ($type === 'page' && $page_id) {
            $analytics = $this->get_page_analytics($page_id, $start_date, $end_date);
        } else {
            $analytics = $this->get_overview_analytics($start_date, $end_date);
        }
        
        wp_send_json_success($analytics);
    }
    
    public function generate_weekly_report() {
        if (!get_option('leadgrid_analytics_enabled', true)) {
            return;
        }
        
        $analytics = $this->get_overview_analytics(date('Y-m-d', strtotime('-7 days')), date('Y-m-d'));
        
        // Get admin email
        $admin_email = get_option('admin_email');
        
        // Generate report HTML
        $report_html = $this->generate_report_html($analytics);
        
        // Send email
        $subject = sprintf(__('LeadGrid Weekly Report - %s', 'leadgrid-integration'), get_bloginfo('name'));
        
        $headers = array(
            'Content-Type: text/html; charset=UTF-8',
            'From: LeadGrid <noreply@' . parse_url(home_url(), PHP_URL_HOST) . '>'
        );
        
        wp_mail($admin_email, $subject, $report_html, $headers);
        
        LeadGrid_Logger::log('Weekly analytics report sent to ' . $admin_email);
    }
    
    private function generate_report_html($analytics) {
        ob_start();
        ?>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
                .summary { background: #f8fafc; padding: 20px; margin: 20px 0; }
                .stat-box { display: inline-block; margin: 10px; padding: 15px; background: white; border-radius: 5px; text-align: center; }
                .stat-number { font-size: 24px; font-weight: bold; color: #1e40af; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
                th { background: #f1f5f9; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>LeadGrid Weekly Report</h1>
                <p><?php echo $analytics['period']['start']; ?> - <?php echo $analytics['period']['end']; ?></p>
            </div>
            
            <div class="summary">
                <h2>Summary</h2>
                <div class="stat-box">
                    <div class="stat-number"><?php echo $analytics['summary']['total_pages']; ?></div>
                    <div>Total Pages</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number"><?php echo $analytics['summary']['total_views']; ?></div>
                    <div>Page Views</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number"><?php echo $analytics['summary']['unique_visitors']; ?></div>
                    <div>Unique Visitors</div>
                </div>
                <div class="stat-box">
                    <div class="stat-number"><?php echo $analytics['summary']['avg_daily_views']; ?></div>
                    <div>Avg Daily Views</div>
                </div>
            </div>
            
            <?php if (!empty($analytics['top_pages'])): ?>
            <h2>Top Pages</h2>
            <table>
                <thead>
                    <tr>
                        <th>Page Title</th>
                        <th>Views</th>
                        <th>Unique Visitors</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($analytics['top_pages'] as $page): ?>
                    <tr>
                        <td><?php echo esc_html($page->post_title ?: 'Untitled Page'); ?></td>
                        <td><?php echo $page->views; ?></td>
                        <td><?php echo $page->unique_visitors; ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php endif; ?>
        </body>
        </html>
        <?php
        return ob_get_clean();
    }
    
    public function cleanup_old_analytics() {
        global $wpdb;
        
        $retention_days = get_option('leadgrid_analytics_retention', 90);
        
        $deleted = $wpdb->query(
            $wpdb->prepare(
                "DELETE FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE created_at < DATE_SUB(NOW(), INTERVAL %d DAY)",
                $retention_days
            )
        );
        
        if ($deleted > 0) {
            LeadGrid_Logger::log("Cleaned up {$deleted} old analytics records");
        }
        
        return $deleted;
    }
    
    public function get_stats_for_shortcode($type, $period) {
        $end_date = date('Y-m-d');
        $start_date = date('Y-m-d', strtotime("-{$period} days"));
        
        switch ($type) {
            case 'views':
                return $this->get_total_views($start_date, $end_date);
            case 'visitors':
                return $this->get_unique_visitors($start_date, $end_date);
            case 'summary':
            default:
                return $this->get_overview_analytics($start_date, $end_date)['summary'];
        }
    }
    
    private function get_total_views($start_date, $end_date) {
        global $wpdb;
        
        return $wpdb->get_var(
            $wpdb->prepare(
                "SELECT COUNT(*) FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE event_type = 'page_view' 
                AND DATE(created_at) BETWEEN %s AND %s",
                $start_date, $end_date
            )
        );
    }
    
    private function get_unique_visitors($start_date, $end_date) {
        global $wpdb;
        
        return $wpdb->get_var(
            $wpdb->prepare(
                "SELECT COUNT(DISTINCT ip_address) FROM {$wpdb->prefix}leadgrid_analytics 
                WHERE event_type = 'page_view' 
                AND DATE(created_at) BETWEEN %s AND %s",
                $start_date, $end_date
            )
        );
    }
}
