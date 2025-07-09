
// LeadGrid Landing Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Contact form validation
    initContactValidation();
    
    // Scroll effects
    initScrollEffects();
    
    // Click tracking for analytics
    initAnalytics();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const header = document.querySelector('.site-header');
    const nav = document.querySelector('.main-navigation');
    
    // Create mobile menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        padding: 10px;
    `;
    
    // Insert button before navigation
    if (nav) {
        nav.parentNode.insertBefore(menuButton, nav);
        
        // Toggle menu on button click
        menuButton.addEventListener('click', function() {
            nav.classList.toggle('mobile-open');
        });
    }
    
    // Show/hide mobile menu based on screen size
    function handleResize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            if (nav) {
                nav.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                `;
                
                // Add mobile open styles
                const style = document.createElement('style');
                style.textContent = `
                    .main-navigation.mobile-open {
                        transform: translateY(0) !important;
                        opacity: 1 !important;
                        visibility: visible !important;
                    }
                    .main-navigation.mobile-open ul {
                        flex-direction: column;
                        padding: 20px;
                        gap: 1rem;
                    }
                `;
                document.head.appendChild(style);
            }
        } else {
            menuButton.style.display = 'none';
            if (nav) {
                nav.style.cssText = '';
                nav.classList.remove('mobile-open');
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
}

// Contact form validation
function initContactValidation() {
    const contactButtons = document.querySelectorAll('.cta-button[href^="tel:"], .contact-button[href^="tel:"]');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Contact',
                    'event_label': 'Phone Call'
                });
            }
        });
    });
    
    const emailButtons = document.querySelectorAll('a[href^="mailto:"]');
    
    emailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Contact',
                    'event_label': 'Email'
                });
            }
        });
    });
}

// Scroll effects
function initScrollEffects() {
    // Header shadow on scroll
    const header = document.querySelector('.site-header');
    
    function handleScroll() {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.feature-card, .contact-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Analytics and tracking
function initAnalytics() {
    // Track page sections views
    const sections = document.querySelectorAll('section[id]');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                    'event_category': 'Engagement',
                    'event_label': entry.target.id
                });
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': buttonText
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading states for forms
function addLoadingState(button, text = 'טוען...') {
    const originalText = button.textContent;
    button.textContent = text;
    button.disabled = true;
    
    return function removeLoadingState() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Simple notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
    
    // Add CSS animations
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
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
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
