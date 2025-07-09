
<?php get_header(); ?>

<main class="site-main">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="container">
                    <h1 class="hero-title"><?php the_title(); ?></h1>
                    <p class="hero-subtitle"><?php echo get_the_excerpt(); ?></p>
                    <a href="#contact" class="cta-button">צור קשר עכשיו</a>
                    <a href="#about" class="cta-button secondary">למד עוד</a>
                </div>
            </section>

            <!-- Features Section -->
            <section class="features-section" id="about">
                <div class="container">
                    <h2 class="page-title">למה לבחור בנו?</h2>
                    
                    <div class="features-grid">
                        <div class="feature-card">
                            <h3 class="feature-title">✨ איכות מעולה</h3>
                            <p class="feature-description">אנחנו מתחייבים לאיכות הגבוהה ביותר בכל מה שאנחנו עושים</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3 class="feature-title">⚡ שירות מהיר</h3>
                            <p class="feature-description">זמני התגובה שלנו הם הקצרים בשוק - אנחנו כאן בשבילכם</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3 class="feature-title">🎯 פתרונות מותאמים</h3>
                            <p class="feature-description">כל פתרון מותאם בדיוק לצרכים הייחודיים שלכם</p>
                        </div>
                        
                        <div class="feature-card">
                            <h3 class="feature-title">🏆 ניסיון מוכח</h3>
                            <p class="feature-description">שנים של ניסיון ולקוחות מרוצים מדברים בעד עצמם</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Main Content -->
            <section class="page-content">
                <div class="container">
                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="contact-section" id="contact">
                <div class="container">
                    <h2 class="contact-title">מוכנים להתחיל?</h2>
                    <p class="contact-info">
                        צרו קשר היום וגלו איך אנחנו יכולים לעזור לכם<br><br>
                        📞 <a href="tel:0501234567" style="color: white; text-decoration: none;">050-1234567</a><br>
                        ✉️ <a href="mailto:info@yourbusiness.co.il" style="color: white; text-decoration: none;">info@yourbusiness.co.il</a><br>
                        📍 הכתובת שלכם כאן
                    </p>
                    <a href="tel:0501234567" class="cta-button">התקשרו עכשיו</a>
                </div>
            </section>

        <?php endwhile; ?>
    <?php else : ?>
        
        <!-- Default Content if no posts -->
        <section class="hero-section">
            <div class="container">
                <h1 class="hero-title">ברוכים הבאים לאתר שלנו</h1>
                <p class="hero-subtitle">אנחנו כאן כדי לעזור לכם להצליח</p>
                <a href="#contact" class="cta-button">צור קשר עכשיו</a>
            </div>
        </section>
        
        <section class="page-content">
            <div class="container">
                <p>לא נמצא תוכן להצגה.</p>
            </div>
        </section>
        
    <?php endif; ?>
</main>

<?php get_footer(); ?>
