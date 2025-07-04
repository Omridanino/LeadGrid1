import { TemplateData } from '@/types/template';

export const templates: TemplateData[] = [
  {
    id: 'nexus-pro',
    name: 'Nexus Pro',
    category: 'עסקי מתקדם',
    hero: {
      title: 'פתרונות טכנולוגיים מתקדמים',
      subtitle: 'המערכת החכמה ביותר לניהול העסק שלך',
      description: 'פלטפורמה מתקדמת המשלבת בינה מלאכותית וטכנולוגיות חדשניות לניהול עסק יעיל ומקצועי',
      button1Text: 'התחל עכשיו',
      button2Text: 'למד עוד'
    },
    emotional: {
      title: 'שנה את הדרך שבה אתה מנהל את העסק',
      description: 'עם פתרונות הטכנולוגיה המתקדמים שלנו, תוכל להגיע לרמות חדשות של יעילות ורווחיות',
      button1Text: 'גלה איך',
      button2Text: 'קבל ייעוץ חינם'
    },
    about: {
      title: 'אודותינו',
      description: 'אנחנו מספקים פתרונות טכנולוגיים מתקדמים לעסקים המעוניינים לצמוח ולהתפתח בעידן הדיגיטלי',
      button1Text: 'קרא עוד',
      button2Text: 'פגוש את הצוות'
    },
    features: {
      title: 'היתרונות שלנו',
      items: [
        { title: 'טכנולוגיה מתקדמת', description: 'פתרונות חדשניים ומתקדמים', icon: 'flashlight-line' },
        { title: 'תמיכה 24/7', description: 'תמיכה טכנית מלאה בכל עת', icon: 'shield-check-line' },
        { title: 'ביטחון מתקדם', description: 'אבטחת מידע ברמה הגבוהה ביותר', icon: 'lock-line' }
      ],
      button1Text: 'גלה עוד',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'מה הלקוחות אומרים',
      testimonials: [
        { name: 'דוד כהן', role: 'מנכ"ל', content: 'שירות מעולה ופתרונות חדשניים שהפכו את העסק שלנו', rating: 5 }
      ],
      button1Text: 'ראה עוד עדויות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'מחירים',
      plans: [
        { 
          name: 'בסיסי', 
          price: '₪99', 
          period: 'חודש',
          features: ['תכונה 1', 'תכונה 2'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה תוכניות',
      button2Text: 'צור קשר'
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'נשמח לשמוע ממך ולעזור לך להתחיל',
      buttonText: 'שלח הודעה'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'איך זה עובד?', answer: 'הסבר מפורט על האופן בו המערכת עובדת ומה היתרונות' }
      ],
      button1Text: 'שאל אותנו',
      button2Text: 'קבל תמיכה'
    },
    finalCta: {
      title: 'מוכן להתחיל?',
      description: 'הצטרף לאלפי עסקים שכבר משתמשים בפתרונות שלנו',
      button1Text: 'התחל עכשיו',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Nexus Pro'
    },
    styles: {
      backgroundColor: '#ffffff',
      heroBackground: '#f8fafc',
      emotionalBackground: '#1e40af',
      featuresBackground: '#f1f5f9',
      testimonialsBackground: '#ffffff',
      aboutBackground: '#f8fafc',
      pricingBackground: '#f1f5f9',
      faqBackground: '#ffffff',
      finalCtaBackground: '#3b82f6',
      contactBackground: '#f8fafc',
      footerBackground: '#1f2937',
      textColor: '#1f2937',
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      accentColor: '#60a5fa'
    }
  },
  {
    id: 'holographic-matrix',
    name: 'Holographic Matrix',
    category: 'פרימיום - הולוגרפי',
    hero: {
      title: 'הולוגרמה דיגיטלית עתידנית',
      subtitle: 'מציאות מעורבת מתקדמת עם אפקטי הולוגרפיה מטורפים',
      description: 'פלטפורמה הולוגרפית מהפכנית המשלבת מציאות מעורבת, אפקטי אור תלת ממדיים ועיצוב עתידני שלא מהעולם הזה',
      button1Text: 'כנס להולוגרמה',
      button2Text: 'חקור מציאות חדשה'
    },
    emotional: {
      title: 'העתיד כבר כאן בהולוגרמה',
      description: 'חוויה הולוגרפית שמשנה את התפיסה שלך על מציאות - טכנולוגיה שמפגישה בין עולמות',
      button1Text: 'התחל במציאות חדשה',
      button2Text: 'גלה הולוגרמות'
    },
    about: {
      title: 'מעבדת ההולוגרמות העתידנית',
      description: 'אנחנו חלוצים בפיתוח טכנולוגיות הולוגרפיות מתקדמות המביאות את המציאות המעורבת לשגרה',
      button1Text: 'המעבדה שלנו',
      button2Text: 'המדענים שלנו'
    },
    features: {
      title: 'כוחות הולוגרפיים מתקדמים',
      items: [
        { title: 'הולוגרמות תלת ממד', description: 'הקרנות מרחפות באוויר', icon: 'cpu-line' },
        { title: 'מציאות מעורבת', description: 'שילוב מושלם של דיגיטל ופיזי', icon: 'eye-line' },
        { title: 'אינטראקציה אוויר', description: 'מגע ללא מגע באלמנטים', icon: 'hand-heart-line' }
      ],
      button1Text: 'חקור הולוגרמות',
      button2Text: 'נסה טכנולוגיה'
    },
    testimonials: {
      title: 'עדויות מהעתיד',
      testimonials: [
        { name: 'ד"ר הולו קוד', role: 'חוקר מציאות מעורבת', content: 'ההולוגרמות הכי מתקדמות שראיתי - טכנולוגיה שמשנה את העולם', rating: 5 }
      ],
      button1Text: 'עוד עדויות עתידניות',
      button2Text: 'הצטרף למהפכה'
    },
    pricing: {
      title: 'חבילות הולוגרפיות פרימיום',
      plans: [
        { 
          name: 'הולו פרו', 
          price: '₪2499', 
          period: 'חודש',
          features: ['הולוגרמות מלאות', 'מציאות מעורבת', 'אינטראקציה אוויר'],
          buttonText: 'כנס להולוגרמה'
        }
      ],
      button1Text: 'השווה מציאויות',
      button2Text: 'ייעוץ הולוגרפי'
    },
    contact: {
      title: 'צור קשר הולוגרפי',
      subtitle: 'מוכן לפגוש אותנו בהולוגרמה?',
      buttonText: 'פגישה הולוגרפית'
    },
    faq: {
      title: 'שאלות עתידניות',
      questions: [
        { question: 'איך עובדות הולוגרמות דיגיטליות?', answer: 'אנחנו משתמשים בטכנולוגיות מתקדמות של הקרנה ומציאות מעורבת ליצירת אשליה מושלמת' }
      ],
      button1Text: 'מדריך הולוגרמות',
      button2Text: 'שאל מומחה עתידני'
    },
    finalCta: {
      title: 'צעד אל העתיד הדיגיטלי',
      description: 'הצטרף לחוויית ההולוגרמה המתקדמת בעולם',
      button1Text: 'כנס להולוגרמה',
      button2Text: 'קבל הדגמה עתידנית'
    },
    footer: {
      companyName: 'Holographic Matrix'
    },
    styles: {
      backgroundColor: '#000008',
      heroBackground: 'radial-gradient(ellipse at center, #1a0033 0%, #000008 50%, #000000 100%)',
      emotionalBackground: 'linear-gradient(45deg, #ff00ff 0%, #00ffff 25%, #ff0080 50%, #8000ff 75%, #00ff80 100%)',
      featuresBackground: 'radial-gradient(circle at 25% 25%, #330066 0%, #000011 70%)',
      testimonialsBackground: 'linear-gradient(135deg, #000008 0%, #1a0033 100%)',
      aboutBackground: 'radial-gradient(ellipse at center, #001133 0%, #000008 70%)',
      pricingBackground: 'linear-gradient(45deg, #8000ff 0%, #ff0080 50%, #00ffff 100%)',
      faqBackground: '#000008',
      finalCtaBackground: 'linear-gradient(45deg, #ff00ff 0%, #00ffff 100%)',
      contactBackground: 'radial-gradient(circle at center, #330066 0%, #000008 100%)',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#ff00ff',
      secondaryColor: '#00ffff',
      accentColor: '#8000ff'
    },
    effects: {
      hero: 'hero-holographic',
      emotional: 'hero-neon-grid-portal',
      features: 'hero-quantum-bubbles',
      testimonials: 'hero-particle-storm',
      about: 'hero-cosmic-geometry',
      pricing: 'hero-digital-waves',
      contact: 'hero-morphing-shapes'
    }
  }
];