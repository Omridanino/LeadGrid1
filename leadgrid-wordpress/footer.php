
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            
            <div class="footer-section">
                <h3>🚀 אודות LeadGrid</h3>
                <p>LeadGrid היא הפלטפורמה המתקדמת ביותר ליצירת דפי נחיתה באמצעות בינה מלאכותית.</p>
                <p>אנחנו עוזרים לעסקים ישראליים להשיג נוכחות דיגיטלית מקצועית תוך דקות ספורות.</p>
                <div class="footer-features">
                    <span class="footer-badge">🤖 AI מתקדם</span>
                    <span class="footer-badge">🌐 דומיין + אחסון</span>
                    <span class="footer-badge">🇮🇱 מותאם לישראל</span>
                </div>
            </div>
            
            <div class="footer-section">
                <h3>🎯 השירותים שלנו</h3>
                <ul>
                    <li><a href="#features">🤖 יצירת דפי נחיתה ב-AI</a></li>
                    <li><a href="#design">🎨 5 סגנונות עיצוב מתקדמים</a></li>
                    <li><a href="#domains">🌐 רכישת דומיינים (Namecheap)</a></li>
                    <li><a href="#hosting">⚡ אחסון מהיר ויציב</a></li>
                    <li><a href="#payments">💳 מערכת תשלומים (Stripe)</a></li>
                    <li><a href="#wordpress">📝 אינטגרציה עם WordPress</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>📞 פרטי קשר</h3>
                <ul class="contact-list">
                    <li>
                        <span class="contact-icon">📞</span>
                        <a href="tel:<?php echo get_theme_mod('contact_phone', '050-1234567'); ?>">
                            <?php echo get_theme_mod('contact_phone', '050-1234567'); ?>
                        </a>
                    </li>
                    <li>
                        <span class="contact-icon">✉️</span>
                        <a href="mailto:<?php echo get_theme_mod('contact_email', 'info@leadgrid.co.il'); ?>">
                            <?php echo get_theme_mod('contact_email', 'info@leadgrid.co.il'); ?>
                        </a>
                    </li>
                    <li>
                        <span class="contact-icon">🌐</span>
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <?php echo str_replace(['http://', 'https://'], '', home_url()); ?>
                        </a>
                    </li>
                    <li>
                        <span class="contact-icon">💬</span>
                        <a href="#" onclick="alert('צ\'אט יהיה זמין בקרוב!')">צ\'אט חי עם התמיכה</a>
                    </li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>🔗 קישורים מהירים</h3>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">🏠 דף הבית</a></li>
                    <li><a href="#start-questionnaire">🚀 התחל עכשיו</a></li>
                    <li><a href="#features">💡 למה LeadGrid?</a></li>
                    <li><a href="#testimonials">⭐ המלצות לקוחות</a></li>
                    <li><a href="#pricing">💰 מחירים</a></li>
                    <li><a href="#faq">❓ שאלות נפוצות</a></li>
                </ul>
                
                <div class="social-links">
                    <h4>עקבו אחרינו:</h4>
                    <a href="#" target="_blank" class="social-link">📘 פייסבוק</a>
                    <a href="#" target="_blank" class="social-link">📸 אינסטגרם</a>
                    <a href="#" target="_blank" class="social-link">💼 לינקדאין</a>
                    <a href="#" target="_blank" class="social-link">📺 יוטיוב</a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <div class="copyright">
                    <p>&copy; <?php echo date('Y'); ?> LeadGrid. כל הזכויות שמורות.</p>
                    <p class="made-with-love">עוצב ופותח בגאווה בישראל 🇮🇱 ❤️</p>
                </div>
                
                <div class="footer-badges">
                    <span class="tech-badge">⚡ Powered by AI</span>
                    <span class="tech-badge">🔒 SSL Secure</span>
                    <span class="tech-badge">🚀 Lightning Fast</span>
                </div>
            </div>
            
            <div class="footer-legal">
                <a href="#privacy">מדיניות פרטיות</a> | 
                <a href="#terms">תנאי שימוש</a> | 
                <a href="#cookies">מדיניות קוקיז</a> |
                <a href="#support">תמיכה טכנית</a>
            </div>
        </div>
    </div>
</footer>

<style>
/* Enhanced Footer Styles */
.footer-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
}

.footer-badge, .tech-badge {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    border: 1px solid rgba(59, 130, 246, 0.2);
}

.contact-list {
    list-style: none;
}

.contact-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    padding: 8px;
    border-radius: 8px;
    transition: background 0.3s ease;
}

.contact-list li:hover {
    background: rgba(255, 255, 255, 0.05);
}

.contact-icon {
    font-size: 1.2rem;
    width: 24px;
    text-align: center;
}

.social-links {
    margin-top: 20px;
}

.social-links h4 {
    color: #3b82f6;
    margin-bottom: 10px;
    font-size: 0.9rem;
}

.social-link {
    display: inline-block;
    margin: 5px 10px 5px 0;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    transform: translateY(-2px);
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.copyright {
    text-align: right;
}

.made-with-love {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 5px;
}

.footer-legal {
    text-align: center;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.85rem;
}

.footer-legal a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    margin: 0 5px;
    transition: color 0.3s ease;
}

.footer-legal a:hover {
    color: #3b82f6;
}

/* Responsive Footer */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }
    
    .footer-bottom-content {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    
    .footer-badges {
        justify-content: center;
    }
    
    .social-links {
        text-align: center;
    }
}
</style>

<?php wp_footer(); ?>

<!-- LeadGrid Analytics & Tracking -->
<script>
// Add any analytics or tracking code here
console.log('LeadGrid WordPress Theme Loaded Successfully! 🚀');

// Simple visitor tracking (replace with your actual analytics)
if (typeof gtag !== 'undefined') {
    gtag('config', 'YOUR-GA-ID');
}
</script>

</body>
</html>
