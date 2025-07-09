
# LeadGrid WordPress Theme

ערכת נושא WordPress מותאמת אישית עבור דפי נחיתה מקצועיים בעברית.

## תכונות

### 🎨 **עיצוב מודרני**
- עיצוב רספונסיבי מלא
- גראדיאנטים וצבעים מותאמים
- אנימציות חלקות
- תמיכה מלאה בעברית (RTL)

### 🛠️ **פונקציונליות מתקדמת**
- Hero section מותאם אישית
- סקציית features עם כרטיסים
- סקציית contact מותאמת
- Widget מותאם לפרטי קשר
- תפריט ניווט רספונסיבי

### 📱 **מותאם למכשירים ניידים**
- עיצוב mobile-first
- תפריט המבורגר במכשירים קטנים
- ביצועים מהירים

## התקנה

1. העלו את תיקיית ה-theme לתיקיית `/wp-content/themes/`
2. היכנסו לפאנל הניהול של WordPress
3. עברו ל **Appearance → Themes**
4. הפעילו את ה-theme "LeadGrid Landing Theme"

## התאמה אישית

### WordPress Customizer
היכנסו ל **Appearance → Customize** וערכו:

- **Hero Section**: כותרת וכותרת משנה
- **Contact Information**: טלפון, אימייל וכתובת
- **Colors**: צבעים מותאמים אישית
- **Typography**: פונטים וגדלים

### Widgets
- **Contact Widget**: הוסיפו פרטי קשר בסיידבר
- **Recent Posts**: רשימת פוסטים אחרונים
- **Categories**: קטגוריות
- **Tag Cloud**: ענן תגיות

## קבצי Theme

```
wordpress-theme/
├── style.css          # עיצובים מרכזיים
├── index.php          # עמוד ראשי
├── header.php         # כותרת האתר
├── footer.php         # כותרת תחתונה
├── sidebar.php        # סיידבר
├── functions.php      # פונקציות WordPress
├── js/script.js       # JavaScript מותאם
└── README.md          # מדריך זה
```

## התאמות נוספות

### שינוי צבעים
ערכו את הקובץ `style.css` וחפשו את המשתנים:
```css
/* Primary Colors */
--primary-blue: #3b82f6;
--primary-purple: #8b5cf6;
--primary-cyan: #06b6d4;
```

### הוספת תוכן מותאם
ערכו את הקובץ `index.php` ושנו:
- כותרות הסקציות
- תוכן הכרטיסים
- פרטי קשר

### הוספת Google Analytics
הוסיפו את הקוד בקובץ `functions.php`:
```php
function add_google_analytics() {
    ?>
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
    </script>
    <?php
}
add_action('wp_head', 'add_google_analytics');
```

## תמיכה טכנית

לתמיכה טכנית או שאלות נוספות, צרו קשר עם צוות LeadGrid.

---

**פותח בגאווה עבור השוק הישראלי** 🇮🇱
