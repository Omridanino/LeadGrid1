
import { TemplateData } from '@/types/template';

export const advancedTemplates: TemplateData[] = [
  {
    id: 'tech-startup-modern',
    name: 'סטארט-אפ טכנולוגי מודרני',
    category: 'טכנולוגיה מתקדמת',
    hero: {
      badge: 'מהפכה דיגיטלית',
      title: 'הפתרון הטכנולוגי החדשני שישנה את העתיד',
      subtitle: 'חוויה דיגיטלית מתקדמת לעסקים חכמים',
      description: 'פלטפורמה טכנולוגית מהפכנית המשלבת בינה מלאכותית, אוטומציה חכמה ואנליטיקה מתקדמת',
      button1Text: 'התחל ניסיון חינמי',
      button2Text: 'ראה דמו חי',
      image: '/api/placeholder/700/500',
      backgroundImage: '/api/placeholder/1200/800'
    },
    emotional: {
      badge: 'החזון שלנו',
      title: 'כי טכנולוגיה אמיתית צריכה לשרת את האנשים',
      description: 'אחרי שנים של מחקר ופיתוח, יצרנו פתרון שמבין את הצרכים האמיתיים של עסקים מודרניים ומספק תוצאות מדויקות ומדודות',
      button1Text: 'קרא את הסיפור שלנו',
      button2Text: 'הצטרף לקהילה'
    },
    features: {
      badge: 'יכולות מתקדמות',
      title: 'טכנולוגיה שמקדמת את העסק שלך קדימה',
      subtitle: 'פיצ\'רים חכמים ומתקדמים',
      items: [
        {
          title: 'בינה מלאכותית מובנית',
          description: 'אלגוריתמים חכמים שלומדים ומתאימים לעסק שלך',
          icon: 'Brain'
        },
        {
          title: 'אוטומציה מלאה',
          description: 'תהליכים אוטומטיים שחוסכים זמן ומגדילים יעילות',
          icon: 'Zap'
        },
        {
          title: 'אבטחה ברמת ארגון',
          description: 'הגנה מתקדמת בסטנדרטים הגבוהים ביותר',
          icon: 'Shield'
        }
      ],
      button1Text: 'גלה את כל היכולות',
      button2Text: 'בקש הדגמה'
    },
    testimonials: {
      badge: 'לקוחות מרוצים',
      title: 'סיפורי הצלחה מרחבי העולם',
      testimonials: [
        {
          name: 'דר\' מיכל כהן',
          role: 'מנכ"לית, TechVision Ltd',
          content: 'הפתרון הזה שינה לנו את כל דרך העבודה. החסכון בזמן וההגדלה ביעילות פשוט מדהימים.',
          rating: 5,
          image: '/api/placeholder/100/100'
        },
        {
          name: 'יניב רוזנברג',
          role: 'CTO, Digital Innovations',
          content: 'הטכנולוגיה הכי מתקדמת שראיתי. האינטגרציה קלה והתוצאות מיידיות.',
          rating: 5,
          image: '/api/placeholder/100/100'
        }
      ],
      button1Text: 'קרא עוד המלצות',
      button2Text: 'הצטרף ללקוחות מרוצים'
    },
    about: {
      badge: 'מי אנחנו',
      title: 'צוות של חדשנים טכנולוגיים',
      description: 'אנחנו צוות בינלאומי של מהנדסים, מדענים ויזמים שמתמחים בטכנולוגיות עתיד ומאמינים שחדשנות טכנולוגית יכולה לשנות עולמות.',
      image: '/api/placeholder/500/600',
      stats: [
        { number: '50,000+', label: 'לקוחות פעילים' },
        { number: '99.99%', label: 'זמינות מערכת' },
        { number: '24/7', label: 'תמיכה מקצועית' }
      ],
      button1Text: 'הכר את הצוות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      badge: 'תמחור שקוף',
      title: 'תוכניות המותאמות לכל עסק',
      subtitle: 'גמישות מלאה ללא התחייבויות',
      plans: [
        {
          name: 'Starter',
          price: 'חינמי',
          period: 'לתמיד',
          features: [
            'עד 5,000 פעולות בחודש',
            'תמיכה קהילתית',
            '10GB אחסון',
            'תכונות בסיסיות'
          ],
          recommended: false,
          buttonText: 'התחל חינמי'
        },
        {
          name: 'Professional',
          price: '199₪',
          period: 'לחודש',
          features: [
            'פעולות ללא הגבלה',
            'תמיכה מקצועית 24/7',
            '500GB אחסון',
            'כל התכונות המתקדמות',
            'אנליטיקס מתקדמת'
          ],
          recommended: true,
          buttonText: 'הכי פופולרי'
        },
        {
          name: 'Enterprise',
          price: '599₪',
          period: 'לחודש',
          features: [
            'כל מה שיש ב-Professional',
            'אבטחה ברמת ארגון',
            'אחסון ללא הגבלה',
            'מנהל לקוחות ייעודי',
            'התאמות אישיות מלאות'
          ],
          recommended: false,
          buttonText: 'צור קשר'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'דבר עם יועץ'
    },
    faq: {
      badge: 'שאלות נפוצות',
      title: 'כל מה שרצית לדעת על הפלטפורמה',
      subtitle: 'מענה לשאלות הכי חשובות',
      questions: [
        {
          question: 'כמה זמן לוקחת ההטמעה?',
          answer: 'ההטמעה הבסיסית לוקחת 24-48 שעות. הטמעה מלאה עם התאמות אישיות עד שבועיים.'
        },
        {
          question: 'האם יש תמיכה בעברית?',
          answer: 'כן, יש לנו תמיכה מלאה בעברית עם צוות ישראלי זמין 24/7.'
        },
        {
          question: 'מה לגבי אבטחת המידע?',
          answer: 'אנחנו עומדים בכל הסטנדרטים הבינלאומיים ומשתמשים בהצפנה מתקדמת ברמה צבאית.'
        }
      ],
      button1Text: 'בדוק את הפלטפורמה',
      button2Text: 'יש לי שאלה נוספת'
    },
    finalCta: {
      badge: 'מוכן להתחיל?',
      title: 'הצטרף למהפכה הטכנולוגית עוד היום!',
      description: 'התחל ניסיון חינמי של 14 יום וגלה איך הטכנולוגיה שלנו יכולה לשנות את העסק שלך לטובה',
      button1Text: 'התחל ניסיון חינמי',
      button2Text: 'בקש הדגמה אישית'
    },
    contact: {
      title: 'בוא נדבר - הצוות שלנו כאן בשבילך',
      subtitle: 'מומחים טכנולוגיים שיעזרו לך להצליח',
      buttonText: 'שלח הודעה',
      fields: [
        { name: 'name', type: 'text', placeholder: 'שם מלא', required: true },
        { name: 'email', type: 'email', placeholder: 'כתובת אימייל', required: true },
        { name: 'company', type: 'text', placeholder: 'שם החברה', required: false },
        { name: 'message', type: 'textarea', placeholder: 'איך נוכל לעזור לך?', required: true }
      ]
    },
    footer: {
      companyName: 'TechFlow Pro',
      description: 'הפלטפורמה הטכנולוגית המתקדמת לעסקים חכמים',
      socialMedia: [
        { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
        { name: 'Twitter', href: '#', icon: 'Twitter' },
        { name: 'GitHub', href: '#', icon: 'Github' }
      ]
    },
    sectionsOrder: ['hero', 'emotional', 'features', 'testimonials', 'about', 'pricing', 'faq', 'finalCta', 'contact'],
    styles: {
      backgroundColor: 'hsl(0 0% 100%)',
      heroBackground: 'linear-gradient(135deg, hsl(210 100% 98%) 0%, hsl(220 100% 96%) 100%)',
      emotionalBackground: 'hsl(210 40% 98%)',
      featuresBackground: 'hsl(0 0% 100%)',
      testimonialsBackground: 'hsl(210 40% 98%)',
      aboutBackground: 'hsl(0 0% 100%)',
      pricingBackground: 'linear-gradient(135deg, hsl(210 100% 98%) 0%, hsl(220 100% 96%) 100%)',
      faqBackground: 'hsl(210 40% 98%)',
      finalCtaBackground: 'linear-gradient(135deg, hsl(210 91% 60%) 0%, hsl(220 91% 68%) 100%)',
      contactBackground: 'hsl(0 0% 100%)',
      footerBackground: 'hsl(220 10% 3.9%)',
      textColor: 'hsl(220 10% 3.9%)',
      primaryColor: 'hsl(210 91% 60%)',
      secondaryColor: 'hsl(210 40% 98%)',
      accentColor: 'hsl(15 95% 53%)'
    },
    effects: {
      hero: 'slide-in-right',
      features: 'fade-in-up',
      testimonials: 'scale-in',
      pricing: 'slide-in-left'
    },
    advancedStyles: {
      seo: {
        title: 'TechFlow Pro - פלטפורמה טכנולוגית מתקדמת',
        description: 'פלטפורמה טכנולוגית מהפכנית עם בינה מלאכותית, אוטומציה ואבטחה מתקדמת לעסקים חכמים.',
        keywords: 'טכנולוגיה, בינה מלאכותית, אוטומציה, פלטפורמה דיגיטלית',
        ogImage: '/api/placeholder/1200/630',
        indexable: true
      }
    }
  },
  {
    id: 'saas-premium',
    name: 'SaaS פרימיום',
    category: 'תוכנה כשירות',
    hero: {
      badge: 'פתרון SaaS מוביל',
      title: 'הפלטפורמה החכמה לניהול עסק מודרני',
      subtitle: 'כל מה שאתה צריך במקום אחד',
      description: 'פלטפורמת SaaS מתקדמת המשלבת ניהול לקוחות, אוטומציה שיווקית ואנליטיקס חכמה',
      button1Text: 'התחל חינמי היום',
      button2Text: 'צפה בהדגמה',
      image: '/api/placeholder/700/500',
      backgroundImage: '/api/placeholder/1200/800'
    },
    emotional: {
      badge: 'למה אנחנו שונים',
      title: 'כי הבנו שעסקים צריכים פתרונות פשוטים לבעיות מורכבות',
      description: 'אחרי מאות שיחות עם בעלי עסקים, פיתחנו פלטפורמה שמתמקדת במה שבאמת חשוב - תוצאות מדודות וצמיחה אמיתית',
      button1Text: 'גלה איך זה עובד',
      button2Text: 'קרא סיפורי הצלחה'
    },
    features: {
      badge: 'פיצ\'רים מתקדמים',
      title: 'כל מה שהעסק שלך צריך במקום אחד',
      subtitle: 'פתרון מקיף ומתקדם',
      items: [
        {
          title: 'CRM חכם ואוטומטי',
          description: 'ניהול לקוחות מתקדם עם אוטומציה מובנית',
          icon: 'Users'
        },
        {
          title: 'אנליטיקס בזמן אמת',
          description: 'דוחות מפורטים וניתוח נתונים מתקדם',
          icon: 'BarChart3'
        },
        {
          title: 'אינטגרציות רחבות',
          description: 'התחברות לכל הכלים שאתה כבר משתמש בהם',
          icon: 'Link'
        }
      ],
      button1Text: 'ראה את כל התכונות',
      button2Text: 'בקש הדגמה חיה'
    },
    testimonials: {
      badge: 'מה אומרים עלינו',
      title: 'אלפי לקוחות מרוצים ברחבי העולם',
      testimonials: [
        {
          name: 'שרה מזרחי',
          role: 'מייסדת, Digital Growth',
          content: 'הפלטפורמה הזאת שינתה לנו את המשחק. מעקב אחר לקוחות, אוטומציה של שיווק - הכל במקום אחד.',
          rating: 5,
          image: '/api/placeholder/100/100'
        },
        {
          name: 'אבי גולדשטיין',
          role: 'מנהל שיווק, StartupHub',
          content: 'החסכון בזמן מדהים. מה שלקח לנו שעות עכשיו קורה אוטומטית.',
          rating: 5,
          image: '/api/placeholder/100/100'
        }
      ],
      button1Text: 'קרא עוד המלצות',
      button2Text: 'הצטרף ללקוחות מרוצים'
    },
    about: {
      badge: 'הסיפור שלנו',
      title: 'צוות של מומחים בטכנולוגיה ועסקים',
      description: 'אנחנו צוות בינלאומי של מפתחים, מעצבים ואנשי עסקים שחולמים על עולם בו טכנולוגיה עוזרת לעסקים להצליח בקלות.',
      image: '/api/placeholder/500/600',
      stats: [
        { number: '25,000+', label: 'עסקים פעילים' },
        { number: '99.8%', label: 'שביעות רצון' },
        { number: '15', label: 'מדינות' }
      ],
      button1Text: 'הכר את הצוות',
      button2Text: 'הצטרף למשפחה'
    },
    pricing: {
      badge: 'תמחור פשוט ושקוף',
      title: 'בחר את התוכנית המתאימה לך',
      subtitle: 'גמישות מלאה, ללא הפתעות',
      plans: [
        {
          name: 'Basic',
          price: '49₪',
          period: 'לחודש',
          features: [
            'עד 1,000 קונטקטים',
            'דוחות בסיסיים',
            'תמיכה באימייל',
            'אינטגרציות בסיסיות'
          ],
          recommended: false,
          buttonText: 'התחל היום'
        },
        {
          name: 'Professional',
          price: '149₪',
          period: 'לחודש',
          features: [
            'עד 10,000 קונטקטים',
            'דוחות מתקדמים',
            'תמיכה בטלפון',
            'כל האינטגרציות',
            'אוטומציות מתקדמות'
          ],
          recommended: true,
          buttonText: 'הכי פופולרי'
        },
        {
          name: 'Enterprise',
          price: 'לפי בקשה',
          period: 'התאמה אישית',
          features: [
            'קונטקטים ללא הגבלה',
            'דוחות מותאמים אישית',
            'מנהל לקוחות ייעודי',
            'אבטחה מתקדמת',
            'הדרכות והטמעה'
          ],
          recommended: false,
          buttonText: 'צור קשר'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'דבר עם יועץ'
    },
    faq: {
      badge: 'שאלות נפוצות',
      title: 'תשובות לשאלות הכי חשובות',
      subtitle: 'כל מה שצריך לדעת',
      questions: [
        {
          question: 'האם יש תקופת ניסיון חינמית?',
          answer: 'כן! יש תקופת ניסיון של 14 יום חינמית ללא צורך בכרטיס אשראי.'
        },
        {
          question: 'כמה קל לעבור מהמערכת הקיימת?',
          answer: 'מאוד קל! יש לנו כלים לייבוא נתונים מכל המערכות הפופולריות והצוות שלנו יעזור לך.'
        },
        {
          question: 'האם אני יכול לבטל בכל עת?',
          answer: 'כמובן. אין התחייבויות ארוכות טווח ואפשר לבטל בכל עת.'
        }
      ],
      button1Text: 'התחל ניסיון חינמי',
      button2Text: 'שאל אותנו הכל'
    },
    finalCta: {
      badge: 'מוכן לשדרג?',
      title: 'הצטרף לאלפי עסקים שכבר משתמשים ומצליחים!',
      description: 'התחל ניסיון חינמי של 14 יום וגלה איך הפלטפורמה שלנו יכולה לשנות את העסק שלך',
      button1Text: 'התחל ניסיון חינמי',
      button2Text: 'בקש הדגמה'
    },
    contact: {
      title: 'בוא נדבר - אנחנו כאן בשבילך',
      subtitle: 'הצוות שלנו ישמח לעזור לך להתחיל',
      buttonText: 'שלח הודעה',
      fields: [
        { name: 'name', type: 'text', placeholder: 'שם מלא', required: true },
        { name: 'email', type: 'email', placeholder: 'כתובת אימייל', required: true },
        { name: 'company', type: 'text', placeholder: 'שם החברה', required: false },
        { name: 'message', type: 'textarea', placeholder: 'ספר לנו על העסק שלך', required: true }
      ]
    },
    footer: {
      companyName: 'SaaSFlow',
      description: 'הפלטפורמה החכמה לניהול עסק מודרני',
      socialMedia: [
        { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
        { name: 'Twitter', href: '#', icon: 'Twitter' },
        { name: 'Facebook', href: '#', icon: 'Facebook' }
      ]
    },
    sectionsOrder: ['hero', 'emotional', 'features', 'testimonials', 'about', 'pricing', 'faq', 'finalCta', 'contact'],
    styles: {
      backgroundColor: 'hsl(0 0% 100%)',
      heroBackground: 'linear-gradient(135deg, hsl(230 100% 98%) 0%, hsl(250 100% 96%) 100%)',
      emotionalBackground: 'hsl(230 40% 98%)',
      featuresBackground: 'hsl(0 0% 100%)',
      testimonialsBackground: 'hsl(230 40% 98%)',
      aboutBackground: 'hsl(0 0% 100%)',
      pricingBackground: 'linear-gradient(135deg, hsl(230 100% 98%) 0%, hsl(250 100% 96%) 100%)',
      faqBackground: 'hsl(230 40% 98%)',
      finalCtaBackground: 'linear-gradient(135deg, hsl(230 91% 60%) 0%, hsl(250 91% 68%) 100%)',
      contactBackground: 'hsl(0 0% 100%)',
      footerBackground: 'hsl(240 10% 3.9%)',
      textColor: 'hsl(240 10% 3.9%)',
      primaryColor: 'hsl(230 91% 60%)',
      secondaryColor: 'hsl(230 40% 98%)',
      accentColor: 'hsl(280 95% 53%)'
    },
    effects: {
      hero: 'slide-in-right',
      features: 'fade-in-up',
      testimonials: 'scale-in',
      pricing: 'slide-in-left'
    },
    advancedStyles: {
      seo: {
        title: 'SaaSFlow - פלטפורמה חכמה לניהול עסק',
        description: 'פלטפורמת SaaS מתקדמת לניהול לקוחות, אוטומציה שיווקית ואנליטיקס חכמה לעסקים מודרניים.',
        keywords: 'SaaS, ניהול לקוחות, CRM, אוטומציה שיווקית, אנליטיקס',
        ogImage: '/api/placeholder/1200/630',
        indexable: true
      }
    }
  }
];
