
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            
            <div class="footer-section">
                <h3>אודות <?php bloginfo('name'); ?></h3>
                <p><?php bloginfo('description'); ?></p>
                <p>אנחנו מתחייבים לספק שירות מעולה ופתרונות מותאמים אישית לכל לקוח.</p>
            </div>
            
            <div class="footer-section">
                <h3>קישורים מהירים</h3>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">בית</a></li>
                    <li><a href="#about">אודות</a></li>
                    <li><a href="#services">שירותים</a></li>
                    <li><a href="#contact">צור קשר</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>פרטי קשר</h3>
                <ul>
                    <li>📞 <a href="tel:0501234567">050-1234567</a></li>
                    <li>✉️ <a href="mailto:info@yourbusiness.co.il">info@yourbusiness.co.il</a></li>
                    <li>📍 הכתובת שלכם כאן</li>
                    <li>🌐 <a href="<?php echo esc_url(home_url('/')); ?>"><?php echo str_replace(['http://', 'https://'], '', home_url()); ?></a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>עקבו אחרינו</h3>
                <ul>
                    <li><a href="#" target="_blank">פייסבוק</a></li>
                    <li><a href="#" target="_blank">אינסטגרם</a></li>
                    <li><a href="#" target="_blank">לינקדאין</a></li>
                    <li><a href="#" target="_blank">יוטיוב</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. כל הזכויות שמורות.</p>
            <p>עוצב ופותח בגאווה בישראל ❤️</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
