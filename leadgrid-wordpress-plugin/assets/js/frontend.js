
(function($) {
    'use strict';
    
    $(document).ready(function() {
        initializeFrontendFeatures();
    });
    
    function initializeFrontendFeatures() {
        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            
            var target = $($(this).attr('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 800);
            }
        });
        
        // Form handling for LeadGrid contact forms
        $('.leadgrid-contact-form').on('submit', function(e) {
            e.preventDefault();
            
            var form = $(this);
            var formData = new FormData(this);
            formData.append('action', 'leadgrid_submit_form');
            formData.append('nonce', leadgrid_ajax.nonce);
            
            // Show loading state
            var submitButton = form.find('button[type="submit"]');
            var originalText = submitButton.text();
            submitButton.text('שולח...').prop('disabled', true);
            
            $.ajax({
                url: leadgrid_ajax.ajax_url,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    if (response.success) {
                        showFormMessage(form, 'ההודעה נשלחה בהצלחה!', 'success');
                        form[0].reset();
                    } else {
                        showFormMessage(form, response.data || 'שגיאה בשליחת ההודעה', 'error');
                    }
                },
                error: function() {
                    showFormMessage(form, 'שגיאה בשליחת ההודעה', 'error');
                },
                complete: function() {
                    submitButton.text(originalText).prop('disabled', false);
                }
            });
        });
        
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            $('.leadgrid-page img[data-src]').each(function() {
                imageObserver.observe(this);
            });
        }
        
        // Animation on scroll
        if ('IntersectionObserver' in window) {
            var animationObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            $('.leadgrid-animate').each(function() {
                animationObserver.observe(this);
            });
        }
        
        // Mobile menu toggle (if needed)
        $('.leadgrid-mobile-menu-toggle').on('click', function() {
            $('.leadgrid-mobile-menu').toggleClass('open');
        });
        
        // Back to top button
        var backToTop = $('<button class="leadgrid-back-to-top" title="חזור למעלה">↑</button>');
        $('body').append(backToTop);
        
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                backToTop.fadeIn();
            } else {
                backToTop.fadeOut();
            }
        });
        
        backToTop.on('click', function() {
            $('html, body').animate({scrollTop: 0}, 800);
        });
    }
    
    function showFormMessage(form, message, type) {
        var messageClass = type === 'success' ? 'success' : 'error';
        var messageElement = $('<div class="leadgrid-form-message ' + messageClass + '">' + message + '</div>');
        
        form.find('.leadgrid-form-message').remove();
        form.prepend(messageElement);
        
        setTimeout(function() {
            messageElement.fadeOut();
        }, 5000);
    }
    
    // Utility functions
    window.leadgridFrontend = {
        scrollToElement: function(selector, offset) {
            offset = offset || 0;
            var target = $(selector);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - offset
                }, 800);
            }
        },
        
        showMessage: function(message, type) {
            var messageClass = type === 'success' ? 'success' : 'error';
            var messageElement = $('<div class="leadgrid-message ' + messageClass + '">' + message + '</div>');
            
            $('body').append(messageElement);
            
            setTimeout(function() {
                messageElement.addClass('show');
            }, 100);
            
            setTimeout(function() {
                messageElement.removeClass('show');
                setTimeout(function() {
                    messageElement.remove();
                }, 300);
            }, 3000);
        }
    };
    
})(jQuery);

// Add CSS for messages and animations
var leadgridCSS = `
    .leadgrid-form-message {
        padding: 12px;
        margin-bottom: 15px;
        border-radius: 4px;
        font-weight: bold;
    }
    .leadgrid-form-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    .leadgrid-form-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    .leadgrid-back-to-top {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #1e40af;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    }
    .leadgrid-back-to-top:hover {
        background: #1e3a8a;
        transform: translateY(-2px);
    }
    .leadgrid-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    .leadgrid-animate.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    .leadgrid-message {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 4px;
        font-weight: bold;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }
    .leadgrid-message.show {
        transform: translateX(0);
    }
    .leadgrid-message.success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    .leadgrid-message.error {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
`;

// Inject CSS
var styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = leadgridCSS;
document.head.appendChild(styleSheet);
