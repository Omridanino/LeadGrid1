
<?php get_header(); ?>

<main class="site-main">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="container">
                    <div class="hero-content animate-fade-in-up">
                        <h1 class="hero-title"><?php echo get_theme_mod('hero_title', 'LeadGrid - בונה דפי נחיתה מתקדם'); ?></h1>
                        <p class="hero-subtitle"><?php echo get_theme_mod('hero_subtitle', 'יצירת דפי נחיתה מקצועיים ואתרי WordPress אמיתיים באמצעות בינה מלאכותית מתקדמת'); ?></p>
                        <div class="hero-actions">
                            <a href="#start-questionnaire" class="cta-button" id="start-questionnaire-btn">
                                🚀 התחל עכשיו - חינם
                            </a>
                            <a href="#features" class="cta-button secondary">
                                📖 למד עוד על המערכת
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="features-section" id="features">
                <div class="container">
                    <h2 class="section-title">למה LeadGrid?</h2>
                    
                    <div class="features-grid">
                        <div class="feature-card">
                            <span class="feature-icon">🤖</span>
                            <h3 class="feature-title">בינה מלאכותית מתקדמת</h3>
                            <p class="feature-description">מערכת AI שמבינה את העסק שלך ויוצרת דף נחיתה מותאם אישית עם תוכן מקצועי בעברית</p>
                        </div>
                        
                        <div class="feature-card">
                            <span class="feature-icon">🎨</span>
                            <h3 class="feature-title">עיצוב מקצועי</h3>
                            <p class="feature-description">5 סגנונות עיצוב מתקדמים עם אפשרות התאמה מלאה - מקלאסי ועד מודרני וחדשני</p>
                        </div>
                        
                        <div class="feature-card">
                            <span class="feature-icon">🌐</span>
                            <h3 class="feature-title">דומיין ואחסון אמיתי</h3>
                            <p class="feature-description">רכישת דומיין דרך Namecheap + אחסון מהיר ויציב - הכל במקום אחד</p>
                        </div>
                        
                        <div class="feature-card">
                            <span class="feature-icon">💳</span>
                            <h3 class="feature-title">תשלומים מאובטחים</h3>
                            <p class="feature-description">מערכת תשלומים מלאה עם Stripe - תמיכה בכרטיסי אשראי ישראלים</p>
                        </div>
                        
                        <div class="feature-card">
                            <span class="feature-icon">⚡</span>
                            <h3 class="feature-title">מהיר וקל</h3>
                            <p class="feature-description">דף נחיתה מקצועי מוכן תוך 15 דקות - ללא צורך בידע טכני</p>
                        </div>
                        
                        <div class="feature-card">
                            <span class="feature-icon">🇮🇱</span>
                            <h3 class="feature-title">מותאם לישראל</h3>
                            <p class="feature-description">ממשק בעברית, מחירים בשקלים, תמיכה מקצועית - הכל מותאם לשוק הישראלי</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials Section -->
            <section class="testimonials-section">
                <div class="container">
                    <h2 class="section-title">מה אומרים עלינו</h2>
                    
                    <div class="testimonials-grid">
                        <div class="testimonial-card">
                            <p>"LeadGrid חסך לי שבועות של עבודה. במקום לשלם לחברת פיתוח אלפי שקלים, קיבלתי דף נחיתה מקצועי תוך רבע שעה!"</p>
                            <div class="testimonial-author">
                                <strong>דני כהן</strong> - יועץ עסקי
                            </div>
                        </div>
                        
                        <div class="testimonial-card">
                            <p>"המערכת פשוט מדהימה. האיכות של התוכן שה-AI יוצר זה ברמה של קופירייטר מקצועי, והעיצוב נראה כמו של סטודיו גרפי יקר."</p>
                            <div class="testimonial-author">
                                <strong>מיכל לוי</strong> - מעצבת פנים
                            </div>
                        </div>
                        
                        <div class="testimonial-card">
                            <p>"בתור מישהי שלא מבינה כלום בטכנולוגיה, LeadGrid עזר לי להקים נוכחות דיגיטלית מקצועית בקלות מדהימה."</p>
                            <div class="testimonial-author">
                                <strong>רוית אברהם</strong> - קוסמטיקאית
                            </div>
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
                        הצטרפו לאלפי עסקים שכבר בחרו ב-LeadGrid<br>
                        דף נחיתה מקצועי + דומיין + אחסון = הכל במקום אחד<br><br>
                        
                        📞 <a href="tel:<?php echo get_theme_mod('contact_phone', '050-1234567'); ?>" style="color: inherit;">
                            <?php echo get_theme_mod('contact_phone', '050-1234567'); ?>
                        </a><br>
                        
                        ✉️ <a href="mailto:<?php echo get_theme_mod('contact_email', 'info@leadgrid.co.il'); ?>" style="color: inherit;">
                            <?php echo get_theme_mod('contact_email', 'info@leadgrid.co.il'); ?>
                        </a><br>
                        
                        🌐 דפי נחיתה מקצועיים בבינה מלאכותית
                    </p>
                    
                    <div class="contact-actions">
                        <a href="#start-questionnaire" class="cta-button" id="start-questionnaire-btn-2">
                            🚀 התחל עכשיו - חינם
                        </a>
                        <a href="tel:<?php echo get_theme_mod('contact_phone', '050-1234567'); ?>" class="cta-button secondary">
                            📞 התקשר עכשיו
                        </a>
                    </div>
                </div>
            </section>

        <?php endwhile; ?>
    <?php else : ?>
        
        <!-- Default Content if no posts -->
        <section class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">LeadGrid - בונה דפי נחיתה מתקדם</h1>
                    <p class="hero-subtitle">יצירת דפי נחיתה מקצועיים באמצעות בינה מלאכותית</p>
                    <a href="#contact" class="cta-button">התחל עכשיו</a>
                </div>
            </div>
        </section>
        
        <section class="page-content">
            <div class="container">
                <p>ברוכים הבאים ל-LeadGrid - הפלטפורמה המתקדמת ביותר ליצירת דפי נחיתה באמצעות בינה מלאכותית</p>
            </div>
        </section>
        
    <?php endif; ?>
</main>

<script>
// Add smooth scrolling and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
    
    // Start questionnaire button functionality
    document.querySelectorAll('[id^="start-questionnaire-btn"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('כאן תתחבר למערכת LeadGrid המלאה עם שאלון חכם ויצירת דפי נחיתה');
            // Here you would integrate with your actual LeadGrid questionnaire system
        });
    });
});
</script>

<?php get_footer(); ?>
