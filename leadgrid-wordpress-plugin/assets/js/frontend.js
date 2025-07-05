
jQuery(document).ready(function($) {
    'use strict';

    // Smooth scrolling for LeadGrid buttons
    $('.leadgrid-hero .btn[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
        }
    });

    // Animate features on scroll
    if ($('.leadgrid-features').length) {
        $(window).on('scroll', function() {
            $('.leadgrid-features .feature-item').each(function() {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
                
                if (elementTop < windowBottom - 100) {
                    $(this).addClass('animate-in');
                }
            });
        });
    }

    // Testimonials carousel (if multiple testimonials)
    if ($('.leadgrid-testimonials .testimonials-grid .testimonial-item').length > 3) {
        // Add carousel functionality for mobile
        var $testimonials = $('.leadgrid-testimonials .testimonials-grid');
        var $items = $testimonials.find('.testimonial-item');
        
        if ($(window).width() <= 768) {
            $testimonials.addClass('testimonials-carousel');
            
            var currentIndex = 0;
            var totalItems = $items.length;
            
            // Add navigation dots
            var dotsHtml = '<div class="testimonials-dots">';
            for (var i = 0; i < totalItems; i++) {
                dotsHtml += '<span class="dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></span>';
            }
            dotsHtml += '</div>';
            
            $testimonials.after(dotsHtml);
            
            // Show only first item initially
            $items.hide().first().show();
            
            // Auto-rotate every 5 seconds
            setInterval(function() {
                currentIndex = (currentIndex + 1) % totalItems;
                showTestimonial(currentIndex);
            }, 5000);
            
            // Dot navigation
            $('.testimonials-dots .dot').on('click', function() {
                currentIndex = $(this).data('index');
                showTestimonial(currentIndex);
            });
            
            function showTestimonial(index) {
                $items.fadeOut(300);
                $items.eq(index).fadeIn(300);
                $('.testimonials-dots .dot').removeClass('active').eq(index).addClass('active');
            }
        }
    }

    // Contact form enhancements
    $('.leadgrid-contact form').on('submit', function(e) {
        var $form = $(this);
        var $submitButton = $form.find('input[type="submit"], button[type="submit"]');
        
        // Add loading state
        $submitButton.prop('disabled', true).addClass('loading');
        
        // Re-enable after 3 seconds (in case of form validation errors)
        setTimeout(function() {
            $submitButton.prop('disabled', false).removeClass('loading');
        }, 3000);
    });

    // Add entrance animations
    function addEntranceAnimations() {
        var animatedElements = [
            '.leadgrid-hero h1',
            '.leadgrid-hero h2',
            '.leadgrid-hero p',
            '.leadgrid-hero .btn',
            '.leadgrid-features h2',
            '.leadgrid-testimonials h2',
            '.leadgrid-contact h2'
        ];
        
        animatedElements.forEach(function(selector, index) {
            $(selector).css({
                'opacity': '0',
                'transform': 'translateY(30px)',
                'transition': 'all 0.6s ease'
            }).delay(index * 100).animate({
                'opacity': '1'
            }, {
                duration: 600,
                step: function(now) {
                    $(this).css('transform', 'translateY(' + (30 - (30 * now)) + 'px)');
                }
            });
        });
    }

    // Initialize animations
    setTimeout(addEntranceAnimations, 500);

    // Responsive handling
    $(window).on('resize', function() {
        // Recalculate layouts if needed
        if ($(window).width() > 768) {
            $('.testimonials-carousel .testimonial-item').show();
            $('.testimonials-dots').remove();
        }
    });

    // Add hover effects for interactive elements
    $('.leadgrid-features .feature-item, .leadgrid-testimonials .testimonial-item').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );

    // Parallax effect for hero section (subtle)
    if ($('.leadgrid-hero').length && $(window).width() > 768) {
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            var parallax = scrolled * 0.5;
            $('.leadgrid-hero').css('transform', 'translateY(' + parallax + 'px)');
        });
    }
});

// Add CSS for animations
var animationCSS = `
<style>
.leadgrid-features .feature-item,
.leadgrid-testimonials .testimonial-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.leadgrid-features .feature-item:hover,
.leadgrid-testimonials .testimonial-item:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.testimonials-carousel {
    position: relative;
    overflow: hidden;
}

.testimonials-dots {
    text-align: center;
    margin-top: 20px;
}

.testimonials-dots .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc;
    margin: 0 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.testimonials-dots .dot.active {
    background: #1e40af;
}

.loading {
    position: relative;
}

.loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    margin: -8px 0 0 -8px;
    border: 2px solid transparent;
    border-top: 2px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
    .leadgrid-hero {
        padding: 60px 20px;
    }
    
    .leadgrid-features,
    .leadgrid-testimonials,
    .leadgrid-contact {
        padding: 60px 20px;
    }
    
    .leadgrid-hero .btn {
        display: block;
        margin: 10px auto;
        max-width: 250px;
    }
}
</style>
`;

$('head').append(animationCSS);
