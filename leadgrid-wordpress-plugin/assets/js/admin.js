
(function($) {
    'use strict';
    
    $(document).ready(function() {
        // Initialize admin functionality
        initializeAdminScripts();
    });
    
    function initializeAdminScripts() {
        // Connection test functionality is already in the admin page
        
        // Add confirmation for destructive actions
        $('.leadgrid-delete-page').on('click', function(e) {
            if (!confirm(leadgrid_admin.strings.confirm_delete)) {
                e.preventDefault();
                return false;
            }
        });
        
        // Auto-refresh functionality for import status
        var importStatusInterval;
        
        function startImportStatusCheck() {
            importStatusInterval = setInterval(function() {
                checkImportStatus();
            }, 5000);
        }
        
        function stopImportStatusCheck() {
            if (importStatusInterval) {
                clearInterval(importStatusInterval);
            }
        }
        
        function checkImportStatus() {
            $.ajax({
                url: leadgrid_admin.ajax_url,
                type: 'POST',
                data: {
                    action: 'leadgrid_get_import_status',
                    nonce: leadgrid_admin.nonce
                },
                success: function(response) {
                    if (response.success) {
                        updateImportStatus(response.data);
                    }
                }
            });
        }
        
        function updateImportStatus(data) {
            // Update import status in the UI
            data.forEach(function(item) {
                var statusElement = $('#import-status-' + item.id);
                if (statusElement.length) {
                    statusElement.text(item.status);
                }
            });
        }
        
        // Settings validation
        $('#leadgrid-settings-form').on('submit', function(e) {
            var apiKey = $('input[name="leadgrid_api_key"]').val();
            var siteId = $('input[name="leadgrid_site_id"]').val();
            
            if (!apiKey.trim()) {
                alert('API Key is required');
                e.preventDefault();
                return false;
            }
            
            if (!siteId.trim()) {
                alert('Site ID is required');
                e.preventDefault();
                return false;
            }
        });
        
        // Tooltips for help text
        $('.leadgrid-help-tooltip').on('mouseenter', function() {
            var tooltip = $(this).find('.tooltip-text');
            tooltip.fadeIn();
        }).on('mouseleave', function() {
            var tooltip = $(this).find('.tooltip-text');
            tooltip.fadeOut();
        });
        
        // Notice dismissal
        $('.leadgrid-notice .notice-dismiss').on('click', function() {
            $(this).closest('.leadgrid-notice').fadeOut();
        });
    }
    
    // Utility functions
    window.leadgridAdmin = {
        showNotice: function(message, type) {
            type = type || 'info';
            var noticeClass = 'notice-' + type;
            var notice = $('<div class="notice ' + noticeClass + ' is-dismissible leadgrid-notice"><p>' + message + '</p><button type="button" class="notice-dismiss"></button></div>');
            
            $('.wrap h1').after(notice);
            
            setTimeout(function() {
                notice.fadeOut();
            }, 5000);
        },
        
        confirmAction: function(message, callback) {
            if (confirm(message)) {
                callback();
            }
        }
    };
    
})(jQuery);
