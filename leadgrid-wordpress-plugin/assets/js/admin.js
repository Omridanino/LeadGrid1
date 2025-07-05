
jQuery(document).ready(function($) {
    'use strict';

    // Test API Connection
    $('#test-connection').on('click', function() {
        var $button = $(this);
        var $result = $('#connection-result');
        
        $button.prop('disabled', true).text('Testing Connection...');
        $result.empty();
        
        $.ajax({
            url: leadgrid_ajax.ajax_url,
            method: 'POST',
            data: {
                action: 'leadgrid_test_connection',
                nonce: leadgrid_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    $result.html('<div class="notice notice-success"><p><strong>Success!</strong> ' + response.data + '</p></div>');
                } else {
                    $result.html('<div class="notice notice-error"><p><strong>Error:</strong> ' + response.data + '</p></div>');
                }
            },
            error: function(xhr, status, error) {
                $result.html('<div class="notice notice-error"><p><strong>Connection Failed:</strong> ' + error + '</p></div>');
            },
            complete: function() {
                $button.prop('disabled', false).text('Test API Connection');
            }
        });
    });

    // Import Single Page
    $('#import-single-page').on('submit', function(e) {
        e.preventDefault();
        
        var pageId = $('#page-id').val().trim();
        var $result = $('#import-result');
        var $form = $(this);
        
        if (!pageId) {
            $result.html('<div class="notice notice-error"><p>Please enter a valid Page ID</p></div>');
            return;
        }
        
        $form.addClass('leadgrid-loading');
        $result.empty();
        
        $.ajax({
            url: leadgrid_ajax.ajax_url,
            method: 'POST',
            data: {
                action: 'leadgrid_import_page',
                page_id: pageId,
                nonce: leadgrid_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    $result.html('<div class="notice notice-success"><p><strong>Success!</strong> Page imported successfully! <a href="' + response.data.edit_url + '" class="button button-small">Edit Page</a></p></div>');
                    $('#page-id').val(''); // Clear input
                } else {
                    $result.html('<div class="notice notice-error"><p><strong>Import Failed:</strong> ' + response.data + '</p></div>');
                }
            },
            error: function(xhr, status, error) {
                $result.html('<div class="notice notice-error"><p><strong>Import Failed:</strong> ' + error + '</p></div>');
            },
            complete: function() {
                $form.removeClass('leadgrid-loading');
            }
        });
    });

    // Bulk Import
    $('#bulk-import').on('click', function() {
        var $button = $(this);
        var $result = $('#bulk-import-result');
        
        if (!confirm('This will import all pages from your LeadGrid account. Continue?')) {
            return;
        }
        
        $button.prop('disabled', true).text('Importing Pages...');
        $result.empty();
        
        $.ajax({
            url: leadgrid_ajax.ajax_url,
            method: 'POST',
            data: {
                action: 'leadgrid_bulk_import',
                nonce: leadgrid_ajax.nonce
            },
            timeout: 60000, // 60 seconds timeout for bulk import
            success: function(response) {
                if (response.success) {
                    $result.html('<div class="notice notice-success"><p><strong>Success!</strong> ' + response.data.message + '</p></div>');
                } else {
                    $result.html('<div class="notice notice-error"><p><strong>Bulk Import Failed:</strong> ' + response.data + '</p></div>');
                }
            },
            error: function(xhr, status, error) {
                if (status === 'timeout') {
                    $result.html('<div class="notice notice-warning"><p><strong>Import Timeout:</strong> The import is still running in the background. Please check the sync status page.</p></div>');
                } else {
                    $result.html('<div class="notice notice-error"><p><strong>Bulk Import Failed:</strong> ' + error + '</p></div>');
                }
            },
            complete: function() {
                $button.prop('disabled', false).text('Import All Pages');
            }
        });
    });

    // Force Sync All
    $('#force-sync').on('click', function() {
        var $button = $(this);
        var $result = $('#sync-result');
        
        $button.prop('disabled', true).text('Syncing...');
        $result.empty();
        
        $.ajax({
            url: leadgrid_ajax.ajax_url,
            method: 'POST',
            data: {
                action: 'leadgrid_force_sync',
                nonce: leadgrid_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    $result.html('<div class="notice notice-success"><p><strong>Success!</strong> ' + response.data.message + '</p></div>');
                    // Refresh the page to show updated sync status
                    setTimeout(function() {
                        location.reload();
                    }, 2000);
                } else {
                    $result.html('<div class="notice notice-error"><p><strong>Sync Failed:</strong> ' + response.data + '</p></div>');
                }
            },
            error: function(xhr, status, error) {
                $result.html('<div class="notice notice-error"><p><strong>Sync Failed:</strong> ' + error + '</p></div>');
            },
            complete: function() {
                $button.prop('disabled', false).text('Force Sync All');
            }
        });
    });

    // Individual Page Sync
    $('.sync-single').on('click', function() {
        var $button = $(this);
        var leadgridId = $button.data('leadgrid-id');
        var $row = $button.closest('tr');
        
        $button.prop('disabled', true).text('Syncing...');
        
        $.ajax({
            url: leadgrid_ajax.ajax_url,
            method: 'POST',
            data: {
                action: 'leadgrid_sync_single',
                leadgrid_id: leadgridId,
                nonce: leadgrid_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    $row.find('.status-pending, .status-error').removeClass('status-pending status-error').addClass('status-synced').text('Synced');
                    $button.after('<span class="sync-success" style="color: #16a34a; margin-left: 10px;">✓ Synced</span>');
                    setTimeout(function() {
                        $('.sync-success').fadeOut();
                    }, 3000);
                } else {
                    alert('Sync failed: ' + response.data);
                }
            },
            error: function() {
                alert('Sync failed due to network error');
            },
            complete: function() {
                $button.prop('disabled', false).text('Sync');
            }
        });
    });

    // Auto-refresh sync status every 30 seconds on sync page
    if ($('.wp-list-table').length && window.location.href.indexOf('leadgrid-sync') > -1) {
        setInterval(function() {
            // Subtle indication that status is being refreshed
            $('.wp-list-table tbody').fadeTo(200, 0.7).fadeTo(200, 1);
        }, 30000);
    }

    // Form validation for settings
    $('form[action="options.php"]').on('submit', function(e) {
        var apiKey = $('input[name="leadgrid_api_key"]').val();
        var apiEndpoint = $('input[name="leadgrid_api_endpoint"]').val();
        
        if (!apiKey.trim()) {
            alert('Please enter your LeadGrid API key');
            e.preventDefault();
            return false;
        }
        
        if (!apiEndpoint.trim() || !isValidUrl(apiEndpoint)) {
            alert('Please enter a valid API endpoint URL');
            e.preventDefault();
            return false;
        }
    });

    // URL validation helper
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    // Enhanced UI feedback
    $('.leadgrid-card').hover(
        function() { $(this).css('box-shadow', '0 4px 8px rgba(0,0,0,0.1)'); },
        function() { $(this).css('box-shadow', '0 2px 4px rgba(0,0,0,0.05)'); }
    );

    // Copy API endpoint for webhooks
    if ($('#leadgrid-webhook-url').length) {
        $('#copy-webhook-url').on('click', function() {
            var $input = $('#leadgrid-webhook-url');
            $input.select();
            document.execCommand('copy');
            
            var $button = $(this);
            var originalText = $button.text();
            $button.text('Copied!').prop('disabled', true);
            
            setTimeout(function() {
                $button.text(originalText).prop('disabled', false);
            }, 2000);
        });
    }
});
