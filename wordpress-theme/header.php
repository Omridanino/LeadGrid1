
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
            <?php bloginfo('name'); ?>
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
                    <li><a href="#about">אודות</a></li>
                    <li><a href="#contact">צור קשר</a></li>
                </ul>
            <?php endif; ?>
        </nav>
    </div>
</header>
