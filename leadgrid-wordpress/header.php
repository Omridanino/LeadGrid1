
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- LeadGrid Meta Tags -->
    <meta name="description" content="LeadGrid - פלטפורמה AI מתקדמת ליצירת דפי נחיתה מקצועיים עבור עסקים ישראליים. דומיין + אחסון + דף נחיתה במקום אחד.">
    <meta name="keywords" content="דפי נחיתה, בינה מלאכותית, אתרים לעסקים, דומיין, אחסון, LeadGrid">
    <meta name="author" content="LeadGrid">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?php bloginfo('name'); ?> - בונה דפי נחיתה מתקדם">
    <meta property="og:description" content="יצירת דפי נחיתה מקצועיים באמצעות בינה מלאכותית מתקדמת">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/images/leadgrid-og-image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
            🚀 <?php echo get_bloginfo('name') ?: 'LeadGrid'; ?>
        </a>
        
        <nav class="main-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_id'        => 'primary-menu',
                'fallback_cb'    => false,
            ));
            ?>
            
            <!-- Default menu if no menu is set -->
            <?php if (!has_nav_menu('primary')) : ?>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">בית</a></li>
                    <li><a href="#features">יתרונות</a></li>
                    <li><a href="#testimonials">המלצות</a></li>
                    <li><a href="#contact">צור קשר</a></li>
                    <li><a href="#start-questionnaire" class="cta-nav-btn">התחל עכשיו</a></li>
                </ul>
            <?php endif; ?>
        </nav>
        
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>

<style>
/* Mobile Menu Styles */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.mobile-menu-toggle span {
    width: 25px;
    height: 3px;
    background: white;
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
}

.cta-nav-btn {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
    padding: 8px 16px !important;
    border-radius: 8px !important;
    color: white !important;
    font-weight: bold !important;
}

.cta-nav-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
    .mobile-menu-toggle {
        display: flex;
    }
    
    .main-navigation {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .main-navigation.active {
        display: block;
    }
    
    .main-navigation ul {
        flex-direction: column;
        padding: 20px;
        gap: 10px;
    }
    
    .main-navigation a {
        display: block;
        padding: 12px 16px;
        border-radius: 8px;
        transition: all 0.3s ease;
    }
    
    .main-navigation a:hover {
        background: rgba(59, 130, 246, 0.1);
    }
}
</style>

<script>
// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navigation = document.querySelector('.main-navigation');
    
    if (mobileToggle && navigation) {
        mobileToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navigation.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navigation.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
});
</script>
