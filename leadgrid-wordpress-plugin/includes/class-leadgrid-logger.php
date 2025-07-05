<?php
/**
 * LeadGrid Logger Class
 * Handles logging functionality
 */

class LeadGrid_Logger {
    
    const LOG_LEVEL_ERROR = 'error';
    const LOG_LEVEL_WARNING = 'warning';
    const LOG_LEVEL_INFO = 'info';
    const LOG_LEVEL_DEBUG = 'debug';
    
    private static $log_levels = array(
        self::LOG_LEVEL_ERROR => 1,
        self::LOG_LEVEL_WARNING => 2,
        self::LOG_LEVEL_INFO => 3,
        self::LOG_LEVEL_DEBUG => 4
    );
    
    public static function log($message, $level = self::LOG_LEVEL_INFO, $context = array()) {
        global $wpdb;
        
        // Check if debug mode is enabled for debug logs
        if ($level === self::LOG_LEVEL_DEBUG && !get_option('leadgrid_debug_mode', false)) {
            return;
        }
        
        // Insert log entry
        $wpdb->insert(
            $wpdb->prefix . 'leadgrid_logs',
            array(
                'level' => $level,
                'message' => $message,
                'context' => json_encode($context),
                'created_at' => current_time('mysql')
            )
        );
        
        // Also log to WordPress debug log if WP_DEBUG is enabled
        if (defined('WP_DEBUG') && WP_DEBUG) {
            error_log(sprintf('[LeadGrid %s] %s %s', strtoupper($level), $message, !empty($context) ? json_encode($context) : ''));
        }
        
        // Clean up old logs
        self::cleanup_old_logs();
    }
    
    public static function error($message, $context = array()) {
        self::log($message, self::LOG_LEVEL_ERROR, $context);
    }
    
    public static function warning($message, $context = array()) {
        self::log($message, self::LOG_LEVEL_WARNING, $context);
    }
    
    public static function info($message, $context = array()) {
        self::log($message, self::LOG_LEVEL_INFO, $context);
    }
    
    public static function debug($message, $context = array()) {
        self::log($message, self::LOG_LEVEL_DEBUG, $context);
    }
    
    public static function get_logs($limit = 100, $level = null, $start_date = null, $end_date = null) {
        global $wpdb;
        
        $where_conditions = array();
        $where_values = array();
        
        if ($level) {
            $where_conditions[] = 'level = %s';
            $where_values[] = $level;
        }
        
        if ($start_date) {
            $where_conditions[] = 'created_at >= %s';
            $where_values[] = $start_date;
        }
        
        if ($end_date) {
            $where_conditions[] = 'created_at <= %s';
            $where_values[] = $end_date;
        }
        
        $where_clause = !empty($where_conditions) ? 'WHERE ' . implode(' AND ', $where_conditions) : '';
        
        $query = $wpdb->prepare(
            "SELECT * FROM {$wpdb->prefix}leadgrid_logs {$where_clause} ORDER BY created_at DESC LIMIT %d",
            array_merge($where_values, array($limit))
        );
        
        return $wpdb->get_results($query);
    }
    
    public static function get_log_stats($days = 7) {
        global $wpdb;
        
        $stats = $wpdb->get_results(
            $wpdb->prepare(
                "SELECT 
                    level,
                    COUNT(*) as count,
                    DATE(created_at) as log_date
                FROM {$wpdb->prefix}leadgrid_logs 
                WHERE created_at >= DATE_SUB(NOW(), INTERVAL %d DAY)
                GROUP BY level, DATE(created_at)
                ORDER BY log_date DESC, level",
                $days
            )
        );
        
        $formatted_stats = array();
        foreach ($stats as $stat) {
            $formatted_stats[$stat->log_date][$stat->level] = $stat->count;
        }
        
        return $formatted_stats;
    }
    
    public static function export_logs($format = 'json', $filters = array()) {
        $logs = self::get_logs(
            $filters['limit'] ?? 1000,
            $filters['level'] ?? null,
            $filters['start_date'] ?? null,
            $filters['end_date'] ?? null
        );
        
        switch ($format) {
            case 'csv':
                return self::export_logs_csv($logs);
            case 'xml':
                return self::export_logs_xml($logs);
            case 'json':
            default:
                return json_encode($logs, JSON_PRETTY_PRINT);
        }
    }
    
    private static function export_logs_csv($logs) {
        $output = "Timestamp,Level,Message,Context\n";
        
        foreach ($logs as $log) {
            $output .= sprintf(
                "%s,%s,\"%s\",\"%s\"\n",
                $log->created_at,
                $log->level,
                str_replace('"', '""', $log->message),
                str_replace('"', '""', $log->context)
            );
        }
        
        return $output;
    }
    
    private static function export_logs_xml($logs) {
        $xml = new SimpleXMLElement('<logs/>');
        
        foreach ($logs as $log) {
            $log_element = $xml->addChild('log');
            $log_element->addChild('timestamp', htmlspecialchars($log->created_at));
            $log_element->addChild('level', htmlspecialchars($log->level));
            $log_element->addChild('message', htmlspecialchars($log->message));
            $log_element->addChild('context', htmlspecialchars($log->context));
        }
        
        return $xml->asXML();
    }
    
    public static function clear_logs($older_than_days = null) {
        global $wpdb;
        
        if ($older_than_days) {
            $result = $wpdb->query(
                $wpdb->prepare(
                    "DELETE FROM {$wpdb->prefix}leadgrid_logs WHERE created_at < DATE_SUB(NOW(), INTERVAL %d DAY)",
                    $older_than_days
                )
            );
        } else {
            $result = $wpdb->query("TRUNCATE TABLE {$wpdb->prefix}leadgrid_logs");
        }
        
        self::log('Logs cleared' . ($older_than_days ? " (older than {$older_than_days} days)" : ' (all)'));
        
        return $result;
    }
    
    private static function cleanup_old_logs() {
        // Only run cleanup occasionally to avoid performance issues
        if (rand(1, 100) !== 1) {
            return;
        }
        
        global $wpdb;
        
        // Keep logs for 30 days by default
        $retention_days = get_option('leadgrid_log_retention', 30);
        
        $wpdb->query(
            $wpdb->prepare(
                "DELETE FROM {$wpdb->prefix}leadgrid_logs WHERE created_at < DATE_SUB(NOW(), INTERVAL %d DAY)",
                $retention_days
            )
        );
    }
    
    public static function get_log_file_path() {
        $upload_dir = wp_upload_dir();
        return $upload_dir['basedir'] . '/leadgrid/logs/leadgrid.log';
    }
    
    public static function write_to_file($message, $level = self::LOG_LEVEL_INFO) {
        $log_file = self::get_log_file_path();
        $log_dir = dirname($log_file);
        
        if (!file_exists($log_dir)) {
            wp_mkdir_p($log_dir);
        }
        
        $timestamp = current_time('Y-m-d H:i:s');
        $log_entry = sprintf("[%s] [%s] %s\n", $timestamp, strtoupper($level), $message);
        
        file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);
        
        // Rotate log file if it gets too large (10MB)
        if (file_exists($log_file) && filesize($log_file) > 10 * 1024 * 1024) {
            self::rotate_log_file($log_file);
        }
    }
    
    private static function rotate_log_file($log_file) {
        $backup_file = $log_file . '.' . date('Y-m-d-H-i-s');
        rename($log_file, $backup_file);
        
        // Keep only the last 5 backup files
        $log_dir = dirname($log_file);
        $backup_files = glob($log_dir . '/leadgrid.log.*');
        
        if (count($backup_files) > 5) {
            usort($backup_files, function($a, $b) {
                return filemtime($b) - filemtime($a);
            });
            
            $files_to_delete = array_slice($backup_files, 5);
            foreach ($files_to_delete as $file) {
                unlink($file);
            }
        }
    }
}
