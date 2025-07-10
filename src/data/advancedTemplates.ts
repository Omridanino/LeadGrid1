
import { TemplateData } from '@/types/template';

export const advancedTemplates: TemplateData[] = [
  {
    id: 'tech-startup-modern',
    name: 'סטארט-אפ טכנולוגי מודרני',
    category: 'טכנולוגיה',
    hero: {
      badge: 'חדשנות דיגיטלית',
      title: 'המוצר שישנה את העולם הדיגיטלי',
      subtitle: 'פתרון טכנולוגי מהפכני לעסקים מודרניים',
      description: 'גלה את הדרך החדשנית ביותר לנהל את העסק שלך עם הטכנולוגיה המתקדמת ביותר בשוק',
      button1Text: 'התחל חינמי',
      button2Text: 'ראה דמו',
      image: '/api/placeholder/600/400'
    },
    emotional: {
      badge: 'למה אנחנו?',
      title: 'כי אנחנו מאמינים שטכנולוגיה צריכה לפשט את החיים',
      description: 'אחרי שנים של עבודה עם מאות חברות, הבנו מה באמת חסר בשוק',
      button1Text: 'הצטרף אלינו',
      button2Text: 'קרא עוד'
    },
    features: {
      badge: 'מה אנחנו מציעים',
      title: 'הכלים שיקדמו את העסק שלך',
      subtitle: 'פתרונות טכנולוגיים מתקדמים',
      items: [
        {
          title: 'ממשק חכם ואינטואיטיבי',
          description: 'ממשק משתמש מתקדם שמותאם לצרכים שלך',
          icon: 'Smartphone'
        },
        {
          title: 'אוטומציה מלאה',
          description: 'חסוך זמן עם אוטומציות חכמות שעובדות בשבילך',
          icon: 'Zap'
        },
        {
          title: 'אבטחה מתקדמת',
          description: 'הגנה ברמה הגבוהה ביותר על הנתונים שלך',
          icon: 'Shield'
        }
      ],
      button1Text: 'ראה את כל התכונות',
      button2Text: 'התחל ניסיון'
    },
    testimonials: {
      badge: 'מה אומרים עלינו',
      title: 'לקוחות מרוצים מכל העולם',
      testimonials: [
        {
          name: 'יוסי כהן',
          role: 'מנכ"ל, טכנולוגיות מתקדמות',
          content: 'הפתרון הזה שינה לנו את כל דרך העבודה. נחסכו לנו שעות של עבודה כל יום.',
          rating: 5,
          image: '/api/placeholder/80/80'
        }
      ],
      button1Text: 'הצטרף ללקוחות מרוצים',
      button2Text: 'ראה עוד המלצות'
    },
    about: {
      badge: 'מי אנחנו',
      title: 'הצוות שמאחורי החדשנות',
      description: 'אנחנו צוות של מהנדסים, מעצבים ויזמים שמאמינים שטכנולוגיה צריכה לשרת את האנשים',
      image: '/api/placeholder/400/500',
      stats: [
        { number: '10,000+', label: 'לקוחות פעילים' },
        { number: '99.9%', label: 'זמינות מערכת' }
      ],
      button1Text: 'הכר את הצוות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      badge: 'תמחור שקוף',
      title: 'בחר את התוכנית המתאימה לך',
      subtitle: 'התחל חינמי, שדרג בכל עת',
      plans: [
        {
          name: 'התחלתי',
          price: 'חינמי',
          period: 'לתמיד',
          features: ['עד 1,000 משתמשים', 'תמיכה בצ\'אט'],
          recommended: false,
          buttonText: 'התחל חינמי'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'יש לי שאלות'
    },
    faq: {
      badge: 'שאלות נפוצות',
      title: 'כל מה שרצית לדעת',
      subtitle: 'התשובות לשאלות הכי נפוצות',
      questions: [
        {
          question: 'כמה זמן לוקח ההטמעה?',
          answer: 'ההטמעה לוקחת בין שבוע לחודש'
        }
      ],
      button1Text: 'התחל ניסיון',
      button2Text: 'יש לי שאלה נוספת'
    },
    finalCta: {
      badge: 'מוכן להתחיל?',
      title: 'הצטרף למהפכה הטכנולוגיה עוד היום!',
      description: 'התחל ניסיון חינמי של 30 יום',
      button1Text: 'התחל ניסיון חינמי',
      button2Text: 'דבר עם מומחה'
    },
    contact: {
      title: 'בוא נכיר - דבר עם המומחים שלנו',
      subtitle: 'הצוות שלנו כאן כדי לעזור לך להצליח',
      buttonText: 'שלח הודעה',
      fields: [
        { name: 'name', type: 'text', placeholder: 'שם מלא', required: true },
        { name: 'email', type: 'email', placeholder: 'כתובת אימייל', required: true }
      ]
    },
    footer: {
      companyName: 'TechFlow Modern',
      description: 'הפתרון הטכנולוגי המתקדם לעסקים מודרניים',
      socialMedia: [
        { name: 'LinkedIn', href: '#', icon: 'Linkedin' }
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
    advancedStyles: {
      seo: {
        title: 'TechFlow Modern - פתרון טכנולוגי מתקדם',
        description: 'פתרון טכנולוגי מהפכני לעסקים מודרניים',
        keywords: 'טכנולוגיה, עסקים, אוטומציה',
        ogImage: '/api/placeholder/1200/630',
        indexable: true
      }
    }
  }
];
