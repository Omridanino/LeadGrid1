
import { TemplateData } from '@/types/template';

export const premiumTemplates: TemplateData[] = [
  {
    id: 'premium-health-wellness',
    name: 'בריאות ורווחה פרמיום',
    category: 'בריאות',
    hero: {
      badge: 'מהפכה בבריאות הדיגיטלית',
      title: 'שנה את חייך תוך 30 יום עם המערכת הדיגיטלית המתקדמת ביותר לבריאות',
      subtitle: 'גלה את הסוד שגרם ל-50,000+ אנשים להשיג את מטרות הבריאות שלהם במהירות שיא',
      description: 'מערכת AI מתקדמת + ליווי אישי + תוכנית תזונה מותאמת + מעקב בזמן אמת = תוצאות מובטחות תוך 30 יום או החזר כספי מלא!',
      button1Text: 'התחל עכשיו - הצטרף ל-50,000+ לקוחות מרוצים',
      button2Text: 'צפה בסרטון הסבר (2 דקות)',
      image: '/api/placeholder/600/400',
      backgroundImage: '/api/placeholder/1920/1080'
    },
    emotional: {
      badge: 'סיפור השינוי',
      title: 'איך השגתי את הגוף והבריאות שתמיד חלמתי עליהם תוך 30 יום בלבד',
      description: 'אחרי שנים של כישלונות, גיליתי את השיטה הפשוטה הזו שעובדת גם עליך. עכשיו אני עוזר לאלפי אנשים להשיג את אותן תוצאות מדהימות.',
      button1Text: 'קבל את התוכנית המלאה עכשיו',
      button2Text: 'קרא עוד סיפורי הצלחה'
    },
    features: {
      badge: 'הכלים המתקדמים ביותר',
      title: 'כל מה שאתה צריך למהפכה בבריאות שלך',
      subtitle: 'מערכת מלאה עם כלים מתקדמים',
      items: [
        {
          title: 'בינה מלאכותית אישית',
          description: 'מערכת AI מתקדמת שלומדת את הרגלי הבריאות שלך ומותאמת תוכנית אישית',
          icon: 'Brain'
        },
        {
          title: 'מעקב בזמן אמת',
          description: 'ניטור מתמיד של הפעילות, התזונה והתקדמות עם דוחות מפורטים',
          icon: 'Activity'
        },
        {
          title: 'תזונה מותאמת אישית',
          description: 'תפריטים מותאמים לטעמים, אלרגיות ומטרות הירידה במשקל שלך',
          icon: 'Apple'
        }
      ],
      button1Text: 'התחל את המהפכה שלך',
      button2Text: 'ראה דמו חינמי'
    },
    testimonials: {
      badge: 'מה אומרים הלקוחות',
      title: 'תוצאות אמיתיות מאנשים אמיתיים',
      testimonials: [
        {
          name: 'רחל כהן',
          role: 'אמא לשלושה, תל אביב',
          content: 'ירדתי 12 קילו תוך חודש וחצי! המערכת כל כך פשוטה לשימוש ומתאימה לאורח החיים העמוס שלי.',
          rating: 5,
          image: '/api/placeholder/80/80'
        },
        {
          name: 'דוד לוי',
          role: 'מנהל הייטק, חיפה',
          content: 'גם בלחץ העבודה הצלחתי להוריד 15 קילו ולהרגיש יותר אנרגטי מאי פעם. פשוט מדהים!',
          rating: 5,
          image: '/api/placeholder/80/80'
        }
      ],
      button1Text: 'הצטרף עכשיו',
      button2Text: 'ראה עוד המלצות'
    },
    about: {
      badge: 'על המומחה',
      title: 'ד"ר יוסי כהן - המומחה המוביל לירידה במשקל בישראל',
      description: 'עם יותר מ-15 שנות ניסיון ויותר מ-50,000 לקוחות מרוצים, פיתחתי את השיטה המהפכנית הזו כדי לעזור לכל אחד להשיג את מטרות הבריאות שלו.',
      image: '/api/placeholder/400/500',
      stats: [
        { number: '50,000+', label: 'לקוחות מרוצים' },
        { number: '98%', label: 'שיעור הצלחה' },
        { number: '15+', label: 'שנות ניסיון' }
      ],
      button1Text: 'קבל ייעוץ אישי',
      button2Text: 'ראה את הניסיון המקצועי'
    },
    pricing: {
      badge: 'מחיר השקה מיוחד',
      title: 'בחר את התוכנית שמתאימה לך',
      subtitle: 'כל התוכניות כוללות החזר כספי מלא תוך 30 יום',
      plans: [
        {
          name: 'בסיסי',
          price: '97₪',
          period: 'לחודש',
          features: [
            'גישה מלאה לאפליקציה',
            'תוכנית תזונה בסיסית',
            'מעקב יומי',
            'תמיכה באימייל'
          ],
          recommended: false,
          buttonText: 'התחל עכשיו'
        },
        {
          name: 'פרמיום',
          price: '197₪',
          period: 'לחודש',
          features: [
            'כל מה שיש בבסיסי',
            'ליווי אישי של מאמן',
            'תוכניות אימון מותאמות',
            'תמיכה 24/7',
            'דוחות מתקדמים'
          ],
          recommended: true,
          buttonText: 'הכי פופולרי - התחל עכשיו'
        },
        {
          name: 'VIP',
          price: '497₪',
          period: 'לחודש',
          features: [
            'כל מה שיש בפרמיום',
            'ליווי אישי של דיאטנית מוסמכת',
            'שיחות וידאו שבועיות',
            'תוכנית מותאמת 100% אישית',
            'גישה מוקדמת לתכונות חדשות'
          ],
          recommended: false,
          buttonText: 'הפתרון הטוב ביותר'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'יש לי שאלות'
    },
    faq: {
      badge: 'שאלות נפוצות',
      title: 'התשובות לכל השאלות שלך',
      subtitle: 'כל מה שרצית לדעת על התוכנית',
      questions: [
        {
          question: 'כמה זמן לוקח לראות תוצאות?',
          answer: 'רוב הלקוחות שלנו רואים תוצאות ראשונות כבר בשבוע הראשון, ותוצאות משמעותיות תוך 30 יום.'
        },
        {
          question: 'האם זה מתאים גם לאנשים עם בעיות בריאות?',
          answer: 'התוכנית שלנו מותאמת לכל מצב בריאותי. אנחנו ממליצים להתייעץ עם הרופא שלך לפני ההתחלה.'
        },
        {
          question: 'מה כולל ההחזר הכספי?',
          answer: 'החזר כספי מלא תוך 30 יום ללא שאלות. אם לא תהיה מרוצה מהתוצאות, פשוט תקבל את כל הכסף בחזרה.'
        }
      ],
      button1Text: 'התחל עכשיו',
      button2Text: 'יש לי שאלה נוספת'
    },
    finalCta: {
      badge: 'הזדמנות אחרונה',
      title: 'תתחיל את המהפכה בבריאות שלך עוד היום!',
      description: 'הצטרף עכשיו ל-50,000+ אנשים שכבר שינו את חייהם. המחיר המיוחד זמין רק עוד 48 שעות!',
      button1Text: 'כן! אני רוצה להתחיל עכשיו',
      button2Text: 'אני עדיין מהסס'
    },
    contact: {
      title: 'יש לך שאלות? בוא נדבר!',
      subtitle: 'צוות המומחים שלנו כאן כדי לעזור לך',
      buttonText: 'שלח הודעה',
      fields: [
        { name: 'name', type: 'text', placeholder: 'שם מלא', required: true },
        { name: 'email', type: 'email', placeholder: 'כתובת אימייל', required: true },
        { name: 'phone', type: 'tel', placeholder: 'מספר טלפון', required: true },
        { name: 'message', type: 'textarea', placeholder: 'איך נוכל לעזור לך?', required: true }
      ]
    },
    footer: {
      companyName: 'HealthTech Pro',
      description: 'המומחים המובילים לבריאות ורווחה דיגיטלית בישראל',
      socialMedia: [
        { name: 'Facebook', href: '#', icon: 'Facebook' },
        { name: 'Instagram', href: '#', icon: 'Instagram' },
        { name: 'YouTube', href: '#', icon: 'Youtube' }
      ]
    },
    sectionsOrder: ['hero', 'emotional', 'features', 'testimonials', 'about', 'pricing', 'faq', 'finalCta', 'contact'],
    styles: {
      backgroundColor: 'hsl(0 0% 100%)',
      heroBackground: 'linear-gradient(135deg, hsl(210 100% 97%) 0%, hsl(220 100% 95%) 100%)',
      emotionalBackground: 'hsl(210 40% 98%)',
      featuresBackground: 'hsl(0 0% 100%)',
      testimonialsBackground: 'hsl(210 40% 98%)',
      aboutBackground: 'hsl(0 0% 100%)',
      pricingBackground: 'linear-gradient(135deg, hsl(210 100% 97%) 0%, hsl(220 100% 95%) 100%)',
      faqBackground: 'hsl(210 40% 98%)',
      finalCtaBackground: 'linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 84% 44%) 100%)',
      contactBackground: 'hsl(0 0% 100%)',
      footerBackground: 'hsl(240 10% 3.9%)',
      textColor: 'hsl(240 10% 3.9%)',
      primaryColor: 'hsl(142 76% 36%)',
      secondaryColor: 'hsl(210 40% 98%)',
      accentColor: 'hsl(24 70% 50%)'
    },
    effects: {
      hero: 'fade-in-up',
      features: 'slide-in-left',
      testimonials: 'fade-in',
      pricing: 'scale-in'
    },
    advancedStyles: {
      seo: {
        title: 'מהפכה בבריאות - ירידה במשקל תוך 30 יום מובטח',
        description: 'המערכת הדיגיטלית המתקדמת ביותר לירידה במשקל ושיפור הבריאות. AI אישי, ליווי מקצועי, תוצאות מובטחות.',
        keywords: 'ירידה במשקל, בריאות, דיאטה, תזונה, AI, מערכת דיגיטלית',
        ogImage: '/api/placeholder/1200/630',
        indexable: true
      },
      popups: {
        enabled: true,
        type: 'exit-intent',
        title: 'רגע! לא תרצה לפספס את זה',
        message: 'קבל 50% הנחה על התוכנית הפרמיום - רק עבור המבקרים החדשים!',
        buttonText: 'קבל הנחה עכשיו',
        showFrequency: 'once'
      },
      notifications: {
        enabled: true,
        type: 'recent-activity',
        message: 'מישהו מתל אביב בדיוק הצטרף לתוכנית!',
        position: 'bottom-left',
        showInterval: 8000,
        autoHide: true,
        hideAfter: 4000
      }
    }
  },
  {
    id: 'premium-business-consulting',
    name: 'ייעוץ עסקי פרמיום',
    category: 'עסקים',
    hero: {
      badge: 'מומחה לצמיחה עסקית',
      title: 'הכפל את הרווחים של העסק שלך תוך 90 יום או פחות',
      subtitle: 'השיטה המוכחת שעזרה ליותר מ-1,000 עסקים להגדיל את המכירות ב-300% תוך פחות מ-3 חודשים',
      description: 'יעוץ אסטרטגי + כלים דיגיטליים + ליווי אישי + מערכת אוטומציה = תוצאות מובטחות או החזר כספי מלא!',
      button1Text: 'קבל ייעוץ חינמי עכשיו (שווה 2,500₪)',
      button2Text: 'ראה סיפורי הצלחה מלקוחות',
      image: '/api/placeholder/600/400',
      backgroundImage: '/api/placeholder/1920/1080'
    },
    emotional: {
      badge: 'הסיפור שלי',
      title: 'איך הצלחתי לבנות אימפריה עסקית מאפס ועכשיו אני עוזר לך לעשות את אותו הדבר',
      description: 'מתחילה עסקית שנכשלה פעמיים עד לבעלת קבוצת חברות מצליחות. עכשיו אני חושף את כל הסודות שלי.',
      button1Text: 'התחל את המסע שלך עכשיו',
      button2Text: 'ראה את הסיפור המלא'
    },
    features: {
      badge: 'הכלים הכי מתקדמים',
      title: 'כל מה שאתה צריך כדי להצליח',
      subtitle: 'מערכת ייעוץ עסקי מקיפה',
      items: [
        {
          title: 'אסטרטגיה עסקית מותאמת',
          description: 'תוכנית צמיחה מותאמת אישית לתחום שלך ולמטרות שלך',
          icon: 'Target'
        },
        {
          title: 'כלים דיגיטליים מתקדמים',
          description: 'CRM, אוטומציות שיווק, מערכות מכירה ועוד',
          icon: 'Zap'
        },
        {
          title: 'ליווי אישי שבועי',
          description: 'שיחות זום קבועות, תמיכה מלאה וייעוץ מתמשך',
          icon: 'Users'
        }
      ],
      button1Text: 'התחל עכשיו',
      button2Text: 'קבל ייעוץ חינמי'
    },
    testimonials: {
      badge: 'סיפורי הצלחה',
      title: 'לקוחות שהכפילו את הרווחים שלהם',
      testimonials: [
        {
          name: 'משה יוסף',
          role: 'בעל חברת טכנולוגיה',
          content: 'הכפלתי את המכירות תוך חודשיים! הייעוץ של רון שינה לי את כל האופן שבו אני מנהל את העסק.',
          rating: 5,
          image: '/api/placeholder/80/80'
        },
        {
          name: 'שרה גולדברג',
          role: 'בעלת רשת חנויות',
          content: 'מ-200,000₪ מחזור לחודש ל-600,000₪! לא האמנתי שזה אפשרי עד שראיתי את התוצאות.',
          rating: 5,
          image: '/api/placeholder/80/80'
        }
      ],
      button1Text: 'הצטרף ללקוחות המרוצים',
      button2Text: 'ראה עוד המלצות'
    },
    about: {
      badge: 'על המומחה',
      title: 'רון כהן - היועץ העסקי #1 בישראל',
      description: 'עם ניסיון של 20+ שנה בבניית עסקים וייעוץ לחברות Fortune 500, אני מביא לך את הכלים המתקדמים ביותר להצלחה עסקית.',
      image: '/api/placeholder/400/500',
      stats: [
        { number: '1,000+', label: 'עסקים שייעצתי להם' },
        { number: '300%', label: 'גידול ממוצע ברווחים' },
        { number: '20+', label: 'שנות ניסיון' }
      ],
      button1Text: 'קבל ייעוץ אישי',
      button2Text: 'ראה את הרקע המקצועי'
    },
    pricing: {
      badge: 'מחיר השקה בלעדי',
      title: 'תוכניות הייעוץ שלנו',
      subtitle: 'כל התוכניות כוללות החזר כספי מלא תוך 60 יום',
      plans: [
        {
          name: 'יועץ דיגיטלי',
          price: '497₪',
          period: 'לחודש',
          features: [
            'גישה למערכת הניהול',
            'כלים דיגיטליים בסיסיים',
            'וידאו הדרכות',
            'תמיכה באימייל'
          ],
          recommended: false,
          buttonText: 'התחל עכשיו'
        },
        {
          name: 'ייעוץ פרמיום',
          price: '1,497₪',
          period: 'לחודש',
          features: [
            'כל מה שיש ביועץ דיגיטלי',
            'שיחת זום שבועית',
            'תוכנית אסטרטגית מותאמת',
            'כלים מתקדמים',
            'תמיכה 24/7'
          ],
          recommended: true,
          buttonText: 'הכי פופולרי - התחל עכשיו'
        },
        {
          name: 'ליווי VIP',
          price: '4,997₪',
          period: 'לחודש',
          features: [
            'כל מה שיש בפרמיום',
            '3 שיחות זום שבועיות',
            'WhatsApp ישיר אלי',
            'ביקור באתר העסק',
            'תוכנית עסקית מלאה'
          ],
          recommended: false,
          buttonText: 'הליווי הטוב ביותר'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'קבל ייעוץ חינמי'
    },
    faq: {
      badge: 'שאלות נפוצות',
      title: 'כל מה שרצית לדעת על התוכנית',
      subtitle: 'התשובות לשאלות הכי נפוצות',
      questions: [
        {
          question: 'כמה זמן לוקח לראות תוצאות?',
          answer: 'רוב הלקוחות רואים שיפור משמעותי בתוך 30-60 יום הראשונים, עם תוצאות דרמטיות תוך 90 יום.'
        },
        {
          question: 'זה מתאים לכל סוג של עסק?',
          answer: 'השיטות שלנו מתאימות למגוון רחב של עסקים - מעסקים קטנים ועד חברות גדולות בכל התחומים.'
        },
        {
          question: 'מה כולל ההחזר הכספי?',
          answer: 'החזר מלא תוך 60 יום אם לא תראה שיפור של לפחות 50% במדדי העסק שלך.'
        }
      ],
      button1Text: 'התחל עכשיו',
      button2Text: 'יש לי שאלה נוספת'
    },
    finalCta: {
      badge: 'הזדמנות מוגבלת',
      title: 'השנה שמתחילה עכשיו תהיה השנה הכי מצליחה של העסק שלך!',
      description: 'הצטרף ל-1,000+ יזמים שכבר הכפילו את הרווחים שלהם. המחיר המיוחד זמין רק עוד 72 שעות!',
      button1Text: 'כן! אני רוצה להכפיל את הרווחים',
      button2Text: 'אני רוצה לשמוע עוד'
    },
    contact: {
      title: 'מוכן להתחיל? בוא נדבר על העסק שלך',
      subtitle: 'קבל ייעוץ ראשוני חינמי בשווי 2,500₪',
      buttonText: 'קבע פגישת ייעוץ חינמית',
      fields: [
        { name: 'name', type: 'text', placeholder: 'שם מלא', required: true },
        { name: 'email', type: 'email', placeholder: 'כתובת אימייל', required: true },
        { name: 'phone', type: 'tel', placeholder: 'מספר טלפון', required: true },
        { name: 'business', type: 'text', placeholder: 'סוג העסק שלך', required: true },
        { name: 'revenue', type: 'select', placeholder: 'מחזור שנתי נוכחי', required: true },
        { name: 'challenge', type: 'textarea', placeholder: 'מה האתגר הכי גדול שלך?', required: true }
      ]
    },
    footer: {
      companyName: 'BusinessGrowth Pro',
      description: 'המומחים המובילים לצמיחה עסקית בישראל',
      socialMedia: [
        { name: 'LinkedIn', href: '#', icon: 'Linkedin' },
        { name: 'Facebook', href: '#', icon: 'Facebook' },
        { name: 'YouTube', href: '#', icon: 'Youtube' }
      ]
    },
    sectionsOrder: ['hero', 'emotional', 'features', 'testimonials', 'about', 'pricing', 'faq', 'finalCta', 'contact'],
    styles: {
      backgroundColor: 'hsl(0 0% 100%)',
      heroBackground: 'linear-gradient(135deg, hsl(220 100% 97%) 0%, hsl(240 100% 95%) 100%)',
      emotionalBackground: 'hsl(220 40% 98%)',
      featuresBackground: 'hsl(0 0% 100%)',
      testimonialsBackground: 'hsl(220 40% 98%)',
      aboutBackground: 'hsl(0 0% 100%)',
      pricingBackground: 'linear-gradient(135deg, hsl(220 100% 97%) 0%, hsl(240 100% 95%) 100%)',
      faqBackground: 'hsl(220 40% 98%)',
      finalCtaBackground: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(230 91% 68%) 100%)',
      contactBackground: 'hsl(0 0% 100%)',
      footerBackground: 'hsl(240 10% 3.9%)',
      textColor: 'hsl(240 10% 3.9%)',
      primaryColor: 'hsl(217 91% 60%)',
      secondaryColor: 'hsl(220 40% 98%)',
      accentColor: 'hsl(25 95% 53%)'
    },
    effects: {
      hero: 'slide-in-right',
      features: 'fade-in-up',
      testimonials: 'scale-in',
      pricing: 'slide-in-left'
    },
    advancedStyles: {
      seo: {
        title: 'ייעוץ עסקי מקצועי - הכפל רווחים תוך 90 יום',
        description: 'המומחה המוביל לצמיחה עסקית בישראל. ייעוץ אסטרטגי, כלים דיגיטליים מתקדמים, תוצאות מובטחות.',
        keywords: 'ייעוץ עסקי, צמיחה עסקית, אסטרטגיה, עסקים, יועץ עסקי',
        ogImage: '/api/placeholder/1200/630',
        indexable: true
      },
      popups: {
        enabled: true,
        type: 'timer',
        timer: 45,
        title: 'הזדמנות מוגבלת!',
        message: 'קבל ייעוץ ראשוני בשווי 2,500₪ בחינם - רק ל-24 השעות הקרובות!',
        buttonText: 'קבל ייעוץ חינמי עכשיו',
        showFrequency: 'session'
      },
      notifications: {
        enabled: true,
        type: 'social-proof',
        message: 'עסק מירושלים בדיוק הזמין ייעוץ וכבר רואה תוצאות!',
        position: 'bottom-right',
        showInterval: 12000,
        autoHide: true,
        hideAfter: 5000
      }
    }
  }
];
