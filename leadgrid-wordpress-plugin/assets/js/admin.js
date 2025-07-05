
// LeadGrid Admin JavaScript - Enhanced Version
jQuery(document).ready(function($) {
    'use strict';

    // Initialize dashboard
    LeadGridAdmin.init();
});

// Main Admin Object
var LeadGridAdmin = {
    
    // Configuration
    config: {
        ajaxUrl: leadgrid_admin.ajax_url,
        nonce: leadgrid_admin.nonce,
        strings: leadgrid_admin.strings,
        debugMode: leadgrid_admin.debug_mode
    },

    // Initialize admin functionality
    init: function() {
        this.bindEvents();
        this.initTabs();
        this.initModals();
        this.initCharts();
        this.initRealTimeUpdates();
        this.initKeyboardShortcuts();
        
        // Show welcome message for new installations
        this.checkFirstRun();
        
        console.log('LeadGrid Admin initialized');
    },

    // Bind event handlers
    bindEvents: function() {
        // API Connection Testing
        $(document).on('click', '#test-connection', this.testConnection);
        
        // API Key Management
        $(document).on('click', '#generate-api-key', this.generateApiKey);
        $(document).on('click', '.copy-api-key', this.copyApiKey);
        $(document).on('click', '.revoke-api-key', this.revokeApiKey);
        
        // Page Import
        $(document).on('submit', '#import-single-page', this.importSinglePage);
        $(document).on('click', '#bulk-import', this.bulkImport);
        
        // Sync Operations
        $(document).on('click', '#force-sync', this.forceSync);
        $(document).on('click', '.sync-single', this.syncSingle);
        
        // Settings
        $(document).on('click', '#save-settings', this.saveSettings);
        $(document).on('click', '#reset-settings', this.resetSettings);
        $(document).on('click', '#export-settings', this.exportSettings);
        $(document).on('change', '#import-settings-file', this.importSettings);
        
        // Templates
        $(document).on('click', '.apply-template', this.applyTemplate);
        $(document).on('click', '.save-template', this.saveTemplate);
        $(document).on('click', '.delete-template', this.deleteTemplate);
        
        // Analytics
        $(document).on('change', '.analytics-filter', this.updateAnalytics);
        $(document).on('click', '.export-analytics', this.exportAnalytics);
        
        // Cache Management
        $(document).on('click', '#clear-cache', this.clearCache);
        $(document).on('click', '#warm-cache', this.warmCache);
        
        // Form validation
        $(document).on('submit', 'form[data-validate]', this.validateForm);
        
        // Auto-save settings
        $(document).on('change', '.auto-save', this.autoSaveSettings);
    },

    // Test API Connection
    testConnection: function(e) {
        e.preventDefault();
        
        var $button = $(this);
        var $result = $('#connection-result');
        
        LeadGridAdmin.setButtonLoading($button, leadgrid_admin.strings.testing || 'Testing...');
        $result.empty();
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_test_connection',
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success) {
                    LeadGridAdmin.showResult($result, 'success', response.data);
                    LeadGridAdmin.showNotification('Connection successful!', 'success');
                } else {
                    LeadGridAdmin.showResult($result, 'error', response.data);
                    LeadGridAdmin.showNotification('Connection failed: ' + response.data, 'error');
                }
            },
            error: function(xhr, status, error) {
                LeadGridAdmin.showResult($result, 'error', 'Connection failed: ' + error);
                LeadGridAdmin.showNotification('Connection failed due to network error', 'error');
            },
            complete: function() {
                LeadGridAdmin.resetButton($button, 'Test API Connection');
            }
        });
    },

    // Generate new API key
    generateApiKey: function(e) {
        e.preventDefault();
        
        if (!confirm('Generate a new API key? This will invalidate the current key.')) {
            return;
        }
        
        var $button = $(this);
        
        LeadGridAdmin.setButtonLoading($button, 'Generating...');
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_generate_api_key',
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success) {
                    $('.api-key-value').text(response.data.api_key);
                    LeadGridAdmin.showNotification(response.data.message, 'success');
                    
                    // Animate the new key
                    $('.api-key-value').addClass('leadgrid-fade-in');
                } else {
                    LeadGridAdmin.showNotification('Failed to generate API key: ' + response.data, 'error');
                }
            },
            error: function() {
                LeadGridAdmin.showNotification('Failed to generate API key', 'error');
            },
            complete: function() {
                LeadGridAdmin.resetButton($button, 'Generate New Key');
            }
        });
    },

    // Copy API key to clipboard
    copyApiKey: function(e) {
        e.preventDefault();
        
        var apiKey = $('.api-key-value').text();
        var $button = $(this);
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(apiKey).then(function() {
                LeadGridAdmin.showCopySuccess($button);
            });
        } else {
            // Fallback for older browsers
            var textArea = document.createElement("textarea");
            textArea.value = apiKey;
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                LeadGridAdmin.showCopySuccess($button);
            } catch (err) {
                LeadGridAdmin.showNotification('Failed to copy API key', 'error');
            }
            
            document.body.removeChild(textArea);
        }
    },

    // Show copy success feedback
    showCopySuccess: function($button) {
        var originalText = $button.text();
        $button.text('Copied!').prop('disabled', true);
        
        setTimeout(function() {
            $button.text(originalText).prop('disabled', false);
        }, 2000);
    },

    // Import single page
    importSinglePage: function(e) {
        e.preventDefault();
        
        var pageId = $('#page-id').val().trim();
        var $result = $('#import-result');
        var $form = $(this);
        
        if (!pageId) {
            LeadGridAdmin.showResult($result, 'error', 'Please enter a valid Page ID');
            return;
        }
        
        LeadGridAdmin.setFormLoading($form, true);
        $result.empty();
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_import_page',
                page_id: pageId,
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success) {
                    var message = 'Page imported successfully! <a href="' + response.data.edit_url + '" class="button button-small">Edit Page</a>';
                    LeadGridAdmin.showResult($result, 'success', message);
                    $('#page-id').val(''); // Clear input
                    LeadGridAdmin.updateStats();
                } else {
                    LeadGridAdmin.showResult($result, 'error', 'Import Failed: ' + response.data);
                }
            },
            error: function(xhr, status, error) {
                LeadGridAdmin.showResult($result, 'error', 'Import Failed: ' + error);
            },
            complete: function() {
                LeadGridAdmin.setFormLoading($form, false);
            }
        });
    },

    // Bulk import all pages
    bulkImport: function(e) {
        e.preventDefault();
        
        if (!confirm('This will import all pages from your LeadGrid account. Continue?')) {
            return;
        }
        
        var $button = $(this);
        var $result = $('#bulk-import-result');
        
        LeadGridAdmin.setButtonLoading($button, 'Importing Pages...');
        $result.empty();
        
        // Show progress bar
        var $progress = $('<div class="leadgrid-progress"><div class="leadgrid-progress-bar" style="width: 0%"></div></div>');
        $result.append($progress);
        
        // Animate progress (fake progress for demo)
        var progress = 0;
        var progressInterval = setInterval(function() {
            progress += Math.random() * 20;
            if (progress > 90) progress = 90;
            $progress.find('.leadgrid-progress-bar').css('width', progress + '%');
        }, 500);
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_bulk_import',
                nonce: LeadGridAdmin.config.nonce
            },
            timeout: 120000, // 2 minutes timeout
            success: function(response) {
                clearInterval(progressInterval);
                $progress.find('.leadgrid-progress-bar').css('width', '100%');
                
                setTimeout(function() {
                    $progress.remove();
                    if (response.success) {
                        LeadGridAdmin.showResult($result, 'success', response.data.message);
                        LeadGridAdmin.updateStats();
                    } else {
                        LeadGridAdmin.showResult($result, 'error', 'Bulk Import Failed: ' + response.data);
                    }
                }, 1000);
            },
            error: function(xhr, status, error) {
                clearInterval(progressInterval);
                $progress.remove();
                
                if (status === 'timeout') {
                    LeadGridAdmin.showResult($result, 'warning', 'Import timeout: The import is still running in the background. Please check the sync status page.');
                } else {
                    LeadGridAdmin.showResult($result, 'error', 'Bulk Import Failed: ' + error);
                }
            },
            complete: function() {
                LeadGridAdmin.resetButton($button, 'Import All Pages');
            }
        });
    },

    // Force sync all pages
    forceSync: function(e) {
        e.preventDefault();
        
        var $button = $(this);
        var $result = $('#sync-result');
        
        LeadGridAdmin.setButtonLoading($button, 'Syncing...');
        $result.empty();
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_force_sync',
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success) {
                    LeadGridAdmin.showResult($result, 'success', response.data.message);
                    
                    // Refresh the page after 2 seconds to show updated sync status
                    setTimeout(function() {
                        if (window.location.href.indexOf('leadgrid-sync') > -1) {
                            location.reload();
                        }
                    }, 2000);
                } else {
                    LeadGridAdmin.showResult($result, 'error', 'Sync Failed: ' + response.data);
                }
            },
            error: function(xhr, status, error) {
                LeadGridAdmin.showResult($result, 'error', 'Sync Failed: ' + error);
            },
            complete: function() {
                LeadGridAdmin.resetButton($button, 'Force Sync All');
            }
        });
    },

    // Sync individual page
    syncSingle: function(e) {
        e.preventDefault();
        
        var $button = $(this);
        var leadgridId = $button.data('leadgrid-id');
        var $row = $button.closest('tr');
        var originalText = $button.text();
        
        $button.prop('disabled', true).text('Syncing...');
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_sync_single',
                leadgrid_id: leadgridId,
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success) {
                    // Update status in the table
                    $row.find('.sync-status-indicator').removeClass('status-pending status-error')
                        .addClass('status-synced').text('Synced');
                    
                    // Show success indicator
                    $button.after('<span class="sync-success dashicons dashicons-yes-alt" style="color: #10b981; margin-left: 10px;"></span>');
                    
                    setTimeout(function() {
                        $('.sync-success').fadeOut();
                    }, 3000);
                    
                    LeadGridAdmin.showNotification('Page synced successfully', 'success');
                } else {
                    LeadGridAdmin.showNotification('Sync failed: ' + response.data, 'error');
                }
            },
            error: function() {
                LeadGridAdmin.showNotification('Sync failed due to network error', 'error');
            },
            complete: function() {
                $button.prop('disabled', false).text(originalText);
            }
        });
    },

    // Save settings
    saveSettings: function(e) {
        e.preventDefault();
        
        var $button = $(this);
        var $form = $button.closest('form');
        var formData = $form.serializeArray();
        var settings = {};
        
        // Convert form data to object
        $.each(formData, function(i, field) {
            if (field.name.startsWith('leadgrid_')) {
                settings[field.name] = field.value;
            }
        });
        
        // Handle checkboxes
        $form.find('input[type="checkbox"]').each(function() {
            var name = $(this).attr('name');
            if (name && name.startsWith('leadgrid_')) {
                settings[name] = $(this).is(':checked');
            }
        });
        
        LeadGridAdmin.setButtonLoading($button, 'Saving...');
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_save_settings',
                settings: settings,
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success) {
                    LeadGridAdmin.showNotification(response.data, 'success');
                    
                    // Show save indicator
                    $button.after('<span class="settings-saved dashicons dashicons-yes-alt" style="color: #10b981; margin-left: 10px;"></span>');
                    setTimeout(function() {
                        $('.settings-saved').fadeOut();
                    }, 3000);
                } else {
                    LeadGridAdmin.showNotification('Failed to save settings: ' + response.data, 'error');
                }
            },
            error: function() {
                LeadGridAdmin.showNotification('Failed to save settings due to network error', 'error');
            },
            complete: function() {
                LeadGridAdmin.resetButton($button, 'Save Settings');
            }
        });
    },

    // Auto-save settings on change
    autoSaveSettings: function() {
        var $field = $(this);
        var name = $field.attr('name');
        var value = $field.is(':checkbox') ? $field.is(':checked') : $field.val();
        
        // Debounce auto-save
        clearTimeout(LeadGridAdmin.autoSaveTimeout);
        LeadGridAdmin.autoSaveTimeout = setTimeout(function() {
            var settings = {};
            settings[name] = value;
            
            $.ajax({
                url: LeadGridAdmin.config.ajaxUrl,
                method: 'POST',
                data: {
                    action: 'leadgrid_save_settings',
                    settings: settings,
                    nonce: LeadGridAdmin.config.nonce
                },
                success: function(response) {
                    if (response.success) {
                        // Show subtle save indicator
                        $field.addClass('auto-saved');
                        setTimeout(function() {
                            $field.removeClass('auto-saved');
                        }, 2000);
                    }
                }
            });
        }, 1000);
    },

    // Clear cache
    clearCache: function(e) {
        e.preventDefault();
        
        var $button = $(this);
        
        LeadGridAdmin.setButtonLoading($button, 'Clearing...');
        
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_clear_cache',
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success) {
                    LeadGridAdmin.showNotification('Cache cleared successfully', 'success');
                    LeadGridAdmin.updateCacheStats();
                } else {
                    LeadGridAdmin.showNotification('Failed to clear cache: ' + response.data, 'error');
                }
            },
            complete: function() {
                LeadGridAdmin.resetButton($button, 'Clear Cache');
            }
        });
    },

    // Initialize tabs
    initTabs: function() {
        $('.leadgrid-tab-button').on('click', function(e) {
            e.preventDefault();
            
            var $button = $(this);
            var target = $button.data('tab');
            
            // Update active states
            $button.siblings().removeClass('active');
            $button.addClass('active');
            
            // Show target content
            $('.leadgrid-tab-content').removeClass('active');
            $('#' + target).addClass('active');
            
            // Save active tab to localStorage
            localStorage.setItem('leadgrid_active_tab', target);
        });
        
        // Restore active tab
        var activeTab = localStorage.getItem('leadgrid_active_tab');
        if (activeTab) {
            $('[data-tab="' + activeTab + '"]').click();
        }
    },

    // Initialize modals
    initModals: function() {
        // Open modal
        $(document).on('click', '[data-modal]', function(e) {
            e.preventDefault();
            var modalId = $(this).data('modal');
            $('#' + modalId).fadeIn();
        });
        
        // Close modal
        $(document).on('click', '.leadgrid-modal-close, .leadgrid-modal', function(e) {
            if (e.target === this) {
                $(this).fadeOut();
            }
        });
        
        // ESC key to close modal
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape') {
                $('.leadgrid-modal').fadeOut();
            }
        });
    },

    // Initialize charts (placeholder for future chart integration)
    initCharts: function() {
        // This would integrate with Chart.js or similar library
        console.log('Charts initialization placeholder');
    },

    // Initialize real-time updates
    initRealTimeUpdates: function() {
        // Auto-refresh sync status every 30 seconds on sync page
        if (window.location.href.indexOf('leadgrid-sync') > -1) {
            setInterval(function() {
                LeadGridAdmin.updateSyncStatus();
            }, 30000);
        }
        
        // Auto-refresh stats every 5 minutes on dashboard
        if (window.location.href.indexOf('page=leadgrid') > -1 && window.location.href.indexOf('leadgrid-') === -1) {
            setInterval(function() {
                LeadGridAdmin.updateStats();
            }, 300000);
        }
    },

    // Initialize keyboard shortcuts
    initKeyboardShortcuts: function() {
        $(document).on('keydown', function(e) {
            // Ctrl/Cmd + S to save settings
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                $('#save-settings').click();
            }
            
            // Ctrl/Cmd + T to test connection
            if ((e.ctrlKey || e.metaKey) && e.key === 't') {
                e.preventDefault();
                $('#test-connection').click();
            }
        });
    },

    // Update statistics
    updateStats: function() {
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_get_stats',
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success && response.data) {
                    $.each(response.data, function(key, value) {
                        var $statBox = $('[data-stat="' + key + '"]');
                        if ($statBox.length) {
                            $statBox.find('h3').text(value);
                        }
                    });
                }
            }
        });
    },

    // Update sync status
    updateSyncStatus: function() {
        $('.wp-list-table tbody').fadeTo(200, 0.7);
        
        setTimeout(function() {
            $('.wp-list-table tbody').fadeTo(200, 1);
        }, 1000);
    },

    // Update cache statistics
    updateCacheStats: function() {
        $.ajax({
            url: LeadGridAdmin.config.ajaxUrl,
            method: 'POST',
            data: {
                action: 'leadgrid_get_cache_stats',
                nonce: LeadGridAdmin.config.nonce
            },
            success: function(response) {
                if (response.success && response.data) {
                    $('#cache-stats').html(
                        '<p>Entries: ' + response.data.transient_count + '</p>' +
                        '<p>Size: ' + response.data.cache_size_formatted + '</p>'
                    );
                }
            }
        });
    },

    // Check if this is first run
    checkFirstRun: function() {
        if (localStorage.getItem('leadgrid_first_run') !== 'false') {
            setTimeout(function() {
                LeadGridAdmin.showNotification('Welcome to LeadGrid Integration! Start by configuring your API settings.', 'info', 5000);
                localStorage.setItem('leadgrid_first_run', 'false');
            }, 1000);
        }
    },

    // Utility functions
    setButtonLoading: function($button, text) {
        $button.prop('disabled', true).addClass('leadgrid-loading');
        if (text) {
            $button.data('original-text', $button.text()).text(text);
        }
    },

    resetButton: function($button, text) {
        $button.prop('disabled', false).removeClass('leadgrid-loading');
        if (text) {
            $button.text(text);
        } else if ($button.data('original-text')) {
            $button.text($button.data('original-text'));
        }
    },

    setFormLoading: function($form, loading) {
        if (loading) {
            $form.addClass('leadgrid-loading');
            $form.find('input, select, textarea, button').prop('disabled', true);
        } else {
            $form.removeClass('leadgrid-loading');
            $form.find('input, select, textarea, button').prop('disabled', false);
        }
    },

    showResult: function($container, type, message) {
        var classes = 'leadgrid-result leadgrid-' + type;
        var $result = $('<div class="' + classes + '">' + message + '</div>');
        $container.html($result);
        $result.addClass('leadgrid-fade-in');
    },

    showNotification: function(message, type, duration) {
        type = type || 'info';
        duration = duration || 3000;
        
        var $notification = $('<div class="leadgrid-notification leadgrid-notification-' + type + '">' + message + '</div>');
        
        $('body').append($notification);
        
        // Position notification
        $notification.css({
            position: 'fixed',
            top: '32px',
            right: '20px',
            zIndex: 100001,
            padding: '15px 20px',
            borderRadius: '6px',
            color: 'white',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            maxWidth: '400px'
        });
        
        // Set colors based on type
        switch (type) {
            case 'success':
                $notification.css('background', '#10b981');
                break;
            case 'error':
                $notification.css('background', '#ef4444');
                break;
            case 'warning':
                $notification.css('background', '#f59e0b');
                break;
            default:
                $notification.css('background', '#3b82f6');
        }
        
        // Show notification
        $notification.hide().slideDown();
        
        // Auto-hide
        setTimeout(function() {
            $notification.slideUp(function() {
                $notification.remove();
            });
        }, duration);
    },

    // Form validation
    validateForm: function(e) {
        var $form = $(this);
        var isValid = true;
        
        $form.find('[required]').each(function() {
            var $field = $(this);
            if (!$field.val().trim()) {
                $field.addClass('error');
                isValid = false;
            } else {
                $field.removeClass('error');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            LeadGridAdmin.showNotification('Please fill in all required fields', 'error');
        }
        
        return isValid;
    }
};

// Add some CSS for dynamic elements
$('<style>')
    .prop('type', 'text/css')
    .html(`
        .auto-saved {
            border-color: #10b981 !important;
            box-shadow: 0 0 0 1px #10b981 !important;
        }
        
        .leadgrid-notification {
            animation: slideInRight 0.3s ease-out;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 1px #ef4444 !important;
        }
    `)
    .appendTo('head');
