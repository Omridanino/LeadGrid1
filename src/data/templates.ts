
import { TemplateData } from '@/types/template';

export const templates: TemplateData[] = [
  {
    id: 'nexus-pro',
    name: 'Nexus Pro',
    category: 'עסקי מתקדם',
    hero: {
      title: 'פתרונות טכנולוגיים מתקדמים',
      subtitle: 'המערכת החכמה ביותר לניהול העסק שלך',
      button1Text: 'התחל עכשיו',
      button2Text: 'למד עוד',
      backgroundType: 'gradient'
    },
    about: {
      title: 'אודותינו',
      description: 'אנחנו מספקים פתרונות טכנולוגיים מתקדמים לעסקים'
    },
    features: {
      title: 'היתרונות שלנו',
      items: [
        { title: 'טכנולוגיה מתקדמת', description: 'פתרונות חדשניים ומתקדמים', icon: 'zap' },
        { title: 'תמיכה 24/7', description: 'תמיכה טכנית מלאה בכל עת', icon: 'shield' },
        { title: 'ביטחון מתקדם', description: 'אבטחת מידע ברמה הגבוהה ביותר', icon: 'lock' }
      ]
    },
    testimonials: {
      title: 'מה הלקוחות אומרים',
      testimonials: [
        { name: 'דוד כהן', text: 'שירות מעולה ופתרונות חדשניים', company: 'טק קורפ' }
      ]
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
      ]
    },
    contact: {
      title: 'צור קשר',
      description: 'צור איתנו קשר',
      email: 'info@example.com',
      address: 'תל אביב, ישראל'
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        { question: 'איך זה עובד?', answer: 'הסבר מפורט על האופן בו המערכת עובדת' }
      ]
    },
    finalCta: {
      title: 'מוכן להתחיל?',
      buttonText: 'התחל עכשיו'
    },
    styles: {
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      borderRadius: '12px'
    }
  },
  {
    id: 'cyber-flow',
    name: 'CyberFlow',
    category: 'טכנולוגיה',
    hero: {
      title: 'העתיד של הטכנולוגיה כאן',
      subtitle: 'חוויה דיגיטלית מהפכנית שתשנה את הדרך בה אתם עובדים',
      button1Text: 'גלה עכשיו',
      button2Text: 'צפה בדמו',
      backgroundType: 'gradient'
    },
    about: {
      title: 'החזון שלנו',
      description: 'אנחנו יוצרים את העתיד הדיגיטלי עם פתרונות מתקדמים'
    },
    features: {
      title: 'תכונות מתקדמות',
      items: [
        { title: 'בינה מלאכותית', description: 'טכנולוגיית AI מתקדמת', icon: 'brain' },
        { title: 'אוטומציה מלאה', description: 'תהליכים אוטומטיים חכמים', icon: 'cog' },
        { title: 'ניתוח נתונים', description: 'תובנות עמוקות מהנתונים שלך', icon: 'chart' }
      ]
    },
    testimonials: {
      title: 'לקוחות מרוצים',
      testimonials: [
        { name: 'שרה לוי', text: 'טכנולוגיה מהפכנית שחסכה לנו זמן רב', company: 'אינובייט' }
      ]
    },
    pricing: {
      title: 'תוכניות מחיר',
      plans: [
        { 
          name: 'פרו', 
          price: '₪199', 
          period: 'חודש',
          features: ['AI מתקדם', 'אוטומציה', 'תמיכה VIP'],
          buttonText: 'התחל עכשיו'
        }
      ]
    },
    contact: {
      title: 'בואו נתחבר',
      description: 'צור איתנו קשר',
      email: 'hello@cyberflow.com',
      address: 'הרצליה, ישראל'
    },
    faq: {
      title: 'שאלות ותשובות',
      questions: [
        { question: 'מה זה CyberFlow?', answer: 'פלטפורמה מתקדמת לאוטומציה וניהול עסקים' }
      ]
    },
    finalCta: {
      title: 'הצטרף למהפכה',
      buttonText: 'התחל מסע'
    },
    styles: {
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      borderRadius: '16px'
    }
  },
  {
    id: 'quantum-edge',
    name: 'Quantum Edge',
    category: 'מדעי',
    hero: {
      title: 'מחשוב קוונטי לעסק שלך',
      subtitle: 'פתרונות מחשוב מתקדמים המבוססים על טכנולוגיה קוונטית',
      button1Text: 'חקור עכשיו',
      button2Text: 'המחקר שלנו',
      backgroundType: 'gradient'
    },
    about: {
      title: 'מי אנחנו',
      description: 'חברה מובילה בתחום המחשוב הקוונטי ופתרונות עסקיים מתקדמים'
    },
    features: {
      title: 'יכולות קוונטיות',
      items: [
        { title: 'מחשוב קוונטי', description: 'עוצמת חישוב שלא הכרתם', icon: 'cpu' },
        { title: 'אלגוריתמים מתקדמים', description: 'פתרונות מתמטיים מהפכניים', icon: 'formula' },
        { title: 'הצפנה קוונטית', description: 'אבטחה ברמה הגבוהה ביותר', icon: 'shield' }
      ]
    },
    testimonials: {
      title: 'מה המדענים אומרים',
      testimonials: [
        { name: 'פרופ\' יוסי כהן', text: 'פריצת דרך בתחום המחשוב הקוונטי', company: 'מכון ויצמן' }
      ]
    },
    pricing: {
      title: 'חבילות מחקר',
      plans: [
        { 
          name: 'אקדמי', 
          price: '₪499', 
          period: 'חודש',
          features: ['גישה למעבדות', 'תמיכת מחקר', 'פרסומים'],
          buttonText: 'התחל עכשיו'
        }
      ]
    },
    contact: {
      title: 'צור קשר מדעי',
      description: 'צור איתנו קשר',
      email: 'research@quantum-edge.com',
      address: 'רחובות, ישראל'
    },
    faq: {
      title: 'שאלות מדעיות',
      questions: [
        { question: 'מה זה מחשוב קוונטי?', answer: 'טכנולוגיה מתקדמת המבוססת על עקרונות הפיזיקה הקוונטית' }
      ]
    },
    finalCta: {
      title: 'כנס לעידן הקוונטי',
      buttonText: 'התחל מחקר'
    },
    styles: {
      primaryColor: '#10B981',
      secondaryColor: '#059669',
      borderRadius: '8px'
    }
  },
  {
    id: 'digital-genesis',
    name: 'Digital Genesis',
    category: 'יצירתי',
    hero: {
      title: 'בראשית הדיגיטל החדש',
      subtitle: 'יוצרים חוויות דיגיטליות מהפכניות שמגדירות מחדש את המציאות',
      button1Text: 'צור עכשיו',
      button2Text: 'הגלריה שלנו',
      backgroundType: 'gradient'
    },
    about: {
      title: 'הסיפור שלנו',
      description: 'סטודיו דיגיטלי המתמחה ביצירת חוויות ויזואליות מדהימות'
    },
    features: {
      title: 'כוחות יצירתיים',
      items: [
        { title: 'עיצוב חדשני', description: 'עיצובים שמדברים לנשמה', icon: 'palette' },
        { title: 'אנימציה מתקדמת', description: 'תנועה שמחיה את הרעיונות', icon: 'play' },
        { title: 'חוויית משתמש', description: 'ממשקים אינטואיטיביים ויפים', icon: 'user' }
      ]
    },
    testimonials: {
      title: 'יצירות מוערכות',
      testimonials: [
        { name: 'מיכל רוזן', text: 'יצירה דיגיטלית שמבטאת את החזון שלנו בצורה מושלמת', company: 'ארט סטודיו' }
      ]
    },
    pricing: {
      title: 'חבילות יצירה',
      plans: [
        { 
          name: 'יוצר', 
          price: '₪299', 
          period: 'פרויקט',
          features: ['עיצוב מותאם', 'אנימציות', 'תמיכה יצירתית'],
          buttonText: 'התחל עכשיו'
        }
      ]
    },
    contact: {
      title: 'בואו ניצור ביחד',
      description: 'צור איתנו קשר',
      email: 'create@digital-genesis.com',
      address: 'תל אביב, ישראל'
    },
    faq: {
      title: 'שאלות יצירתיות',
      questions: [
        { question: 'איך מתחיל תהליך יצירה?', answer: 'אנחנו מתחילים בשיחה על החזון שלכם ובונים משם' }
      ]
    },
    finalCta: {
      title: 'הגשם את החלום',
      buttonText: 'בוא ניצור'
    },
    styles: {
      primaryColor: '#F59E0B',
      secondaryColor: '#D97706',
      borderRadius: '20px'
    }
  },
  {
    id: 'phoenix-rise',
    name: 'Phoenix Rise',
    category: 'עסקי',
    hero: {
      title: 'קום וזרח כמו עוף החול',
      subtitle: 'פתרונות עסקיים שמעצימים חברות לצמוח ולהצליח בעידן הדיגיטלי',
      button1Text: 'קום וזרח',
      button2Text: 'סיפורי הצלחה',
      backgroundType: 'gradient'
    },
    about: {
      title: 'המסע שלנו',
      description: 'אנחנו עוזרים לעסקים לקום מחדש ולהגיע לגבהים חדשים'
    },
    features: {
      title: 'כנפי הצמיחה',
      items: [
        { title: 'אסטרטגיה עסקית', description: 'תוכניות מותאמות לצמיחה', icon: 'target' },
        { title: 'טרנספורמציה דיגיטלית', description: 'מעבר חלק לעידן הדיגיטלי', icon: 'transform' },
        { title: 'ליווי מקצועי', description: 'תמיכה בכל שלב של המסע', icon: 'handshake' }
      ]
    },
    testimonials: {
      title: 'סיפורי התחדשות',
      testimonials: [
        { name: 'אבי גולד', text: 'החברה שלנו קמה לתחייה והגיעה לשיאים חדשים', company: 'גולד אנטרפרייז' }
      ]
    },
    pricing: {
      title: 'תוכניות שינוי',
      plans: [
        { 
          name: 'התחדשות', 
          price: '₪599', 
          period: 'חודש',
          features: ['ייעוץ אסטרטגי', 'ליווי צמוד', 'דוחות התקדמות'],
          buttonText: 'התחל עכשיו'
        }
      ]
    },
    contact: {
      title: 'בוא נתחיל מסע',
      description: 'צור איתנו קשר',
      email: 'rise@phoenix-rise.com',
      address: 'ירושלים, ישראל'
    },
    faq: {
      title: 'שאלות על התחדשות',
      questions: [
        { question: 'כמה זמן לוקח תהליך השינוי?', answer: 'כל עסק הוא ייחודי, אבל בדרך כלל רואים תוצאות תוך 3-6 חודשים' }
      ]
    },
    finalCta: {
      title: 'זמן לקום ולזרוח',
      buttonText: 'התחל מסע'
    },
    styles: {
      primaryColor: '#EF4444',
      secondaryColor: '#DC2626',
      borderRadius: '12px'
    }
  },
  {
    id: 'stellar-stream',
    name: 'Stellar Stream',
    category: 'מדיה',
    hero: {
      title: 'זרם התוכן הכוכבי שלך',
      subtitle: 'פלטפורמת סטרימינג ותוכן מתקדמת שמביאה את הכוכבים אליך הביתה',
      button1Text: 'צפה עכשיו',
      button2Text: 'התוכן שלנו',
      backgroundType: 'gradient'
    },
    about: {
      title: 'הסטודיו שלנו',
      description: 'אנחנו יוצרים ומפיצים תוכן איכותי לכל המשפחה'
    },
    features: {
      title: 'תכונות הזרמה',
      items: [
        { title: 'איכות 4K', description: 'חוויית צפייה בחדות מקסימלית', icon: 'monitor' },
        { title: 'תוכן מקורי', description: 'סדרות וסרטים בלעדיים', icon: 'film' },
        { title: 'צפייה אישית', description: 'המלצות מותאמות אישית', icon: 'user-check' }
      ]
    },
    testimonials: {
      title: 'צופים מרוצים',
      testimonials: [
        { name: 'רונית ברק', text: 'התוכן הכי טוב ברשת, איכות מעולה וחוויה מדהימה', company: 'משפחת ברק' }
      ]
    },
    pricing: {
      title: 'מנויים',
      plans: [
        { 
          name: 'פרימיום', 
          price: '₪39', 
          period: 'חודש',
          features: ['תוכן בלעדי', '4K באיכות', 'ללא פרסומות'],
          buttonText: 'התחל עכשיו'
        }
      ]
    },
    contact: {
      title: 'צור איתנו קשר',
      description: 'צור איתנו קשר',
      email: 'info@stellar-stream.com',
      address: 'פתח תקווה, ישראל'
    },
    faq: {
      title: 'שאלות צפייה',
      questions: [
        { question: 'איך אני מתחיל לצפות?', answer: 'פשוט הירשם, בחר תוכנית ותתחיל לצפות מיד' }
      ]
    },
    finalCta: {
      title: 'התחל לצפות היום',
      buttonText: 'הירשם עכשיו'
    },
    styles: {
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      borderRadius: '16px'
    }
  }
];
