
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
      backgroundImage: '',
      backgroundType: 'gradient'
    },
    about: {
      title: 'אודותינו',
      content: 'אנחנו מספקים פתרונות טכנולוגיים מתקדמים לעסקים'
    },
    features: {
      title: 'היתרונות שלנו',
      items: [
        { title: 'טכנולוגיה מתקדמת', description: 'פתרונות חדשניים ומתקדמים' },
        { title: 'תמיכה 24/7', description: 'תמיכה טכנית מלאה בכל עת' },
        { title: 'ביטחון מתקדם', description: 'אבטחת מידע ברמה הגבוהה ביותר' }
      ]
    },
    testimonials: {
      title: 'מה הלקוחות אומרים',
      items: [
        { name: 'דוד כהן', text: 'שירות מעולה ופתרונות חדשניים', company: 'טק קורפ' }
      ]
    },
    pricing: {
      title: 'מחירים',
      plans: [
        { name: 'בסיסי', price: '₪99/חודש', features: ['תכונה 1', 'תכונה 2'] }
      ]
    },
    contact: {
      title: 'צור קשר',
      phone: '050-1234567',
      email: 'info@example.com',
      address: 'תל אביב, ישראל'
    },
    faq: {
      title: 'שאלות נפוצות',
      items: [
        { question: 'איך זה עובד?', answer: 'הסבר מפורט על האופן בו המערכת עובדת' }
      ]
    },
    finalCta: {
      title: 'מוכן להתחיל?',
      subtitle: 'הצטרף אלינו היום',
      buttonText: 'התחל עכשיו'
    },
    styles: {
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      fontFamily: 'Inter',
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
      backgroundImage: '',
      backgroundType: 'gradient'
    },
    about: {
      title: 'החזון שלנו',
      content: 'אנחנו יוצרים את העתיד הדיגיטלי עם פתרונות מתקדמים'
    },
    features: {
      title: 'תכונות מתקדמות',
      items: [
        { title: 'בינה מלאכותית', description: 'טכנולוגיית AI מתקדמת' },
        { title: 'אוטומציה מלאה', description: 'תהליכים אוטומטיים חכמים' },
        { title: 'ניתוח נתונים', description: 'תובנות עמוקות מהנתונים שלך' }
      ]
    },
    testimonials: {
      title: 'לקוחות מרוצים',
      items: [
        { name: 'שרה לוי', text: 'טכנולוגיה מהפכנית שחסכה לנו זמן רב', company: 'אינובייט' }
      ]
    },
    pricing: {
      title: 'תוכניות מחיר',
      plans: [
        { name: 'פרו', price: '₪199/חודש', features: ['AI מתקדם', 'אוטומציה', 'תמיכה VIP'] }
      ]
    },
    contact: {
      title: 'בואו נתחבר',
      phone: '050-9876543',
      email: 'hello@cyberflow.com',
      address: 'הרצליה, ישראל'
    },
    faq: {
      title: 'שאלות ותשובות',
      items: [
        { question: 'מה זה CyberFlow?', answer: 'פלטפורמה מתקדמת לאוטומציה וניהול עסקים' }
      ]
    },
    finalCta: {
      title: 'הצטרף למהפכה',
      subtitle: 'העתיד מתחיל היום',
      buttonText: 'התחל מסע'
    },
    styles: {
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      fontFamily: 'Inter',
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
      backgroundImage: '',
      backgroundType: 'gradient'
    },
    about: {
      title: 'מי אנחנו',
      content: 'חברה מובילה בתחום המחשוב הקוונטי ופתרונות עסקיים מתקדמים'
    },
    features: {
      title: 'יכולות קוונטיות',
      items: [
        { title: 'מחשוב קוונטי', description: 'עוצמת חישוב שלא הכרתם' },
        { title: 'אלגוריתמים מתקדמים', description: 'פתרונות מתמטיים מהפכניים' },
        { title: 'הצפנה קוונטית', description: 'אבטחה ברמה הגבוהה ביותר' }
      ]
    },
    testimonials: {
      title: 'מה המדענים אומרים',
      items: [
        { name: 'פרופ\' יוסי כהן', text: 'פריצת דרך בתחום המחשוב הקוונטי', company: 'מכון ויצמן' }
      ]
    },
    pricing: {
      title: 'חבילות מחקר',
      plans: [
        { name: 'אקדמי', price: '₪499/חודש', features: ['גישה למעבדות', 'תמיכת מחקר', 'פרסומים'] }
      ]
    },
    contact: {
      title: 'צור קשר מדעי',
      phone: '050-5555555',
      email: 'research@quantum-edge.com',
      address: 'רחובות, ישראל'
    },
    faq: {
      title: 'שאלות מדעיות',
      items: [
        { question: 'מה זה מחשוב קוונטי?', answer: 'טכנולוגיה מתקדמת המבוססת על עקרונות הפיזיקה הקוונטית' }
      ]
    },
    finalCta: {
      title: 'כנס לעידן הקוונטי',
      subtitle: 'המדע של המחר',
      buttonText: 'התחל מחקר'
    },
    styles: {
      primaryColor: '#10B981',
      secondaryColor: '#059669',
      fontFamily: 'Inter',
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
      backgroundImage: '',
      backgroundType: 'gradient'
    },
    about: {
      title: 'הסיפור שלנו',
      content: 'סטודיו דיגיטלי המתמחה ביצירת חוויות ויזואליות מדהימות'
    },
    features: {
      title: 'כוחות יצירתיים',
      items: [
        { title: 'עיצוב חדשני', description: 'עיצובים שמדברים לנשמה' },
        { title: 'אנימציה מתקדמת', description: 'תנועה שמחיה את הרעיונות' },
        { title: 'חוויית משתמש', description: 'ממשקים אינטואיטיביים ויפים' }
      ]
    },
    testimonials: {
      title: 'יצירות מוערכות',
      items: [
        { name: 'מיכל רוזן', text: 'יצירה דיגיטלית שמבטאת את החזון שלנו בצורה מושלמת', company: 'ארט סטודיו' }
      ]
    },
    pricing: {
      title: 'חבילות יצירה',
      plans: [
        { name: 'יוצר', price: '₪299/פרויקט', features: ['עיצוב מותאם', 'אנימציות', 'תמיכה יצירתית'] }
      ]
    },
    contact: {
      title: 'בואו ניצור ביחד',
      phone: '050-7777777',
      email: 'create@digital-genesis.com',
      address: 'תל אביב, ישראל'
    },
    faq: {
      title: 'שאלות יצירתיות',
      items: [
        { question: 'איך מתחיל תהליך יצירה?', answer: 'אנחנו מתחילים בשיחה על החזון שלכם ובונים משם' }
      ]
    },
    finalCta: {
      title: 'הגשם את החלום',
      subtitle: 'הרעיון שלך מחכה',
      buttonText: 'בוא ניצור'
    },
    styles: {
      primaryColor: '#F59E0B',
      secondaryColor: '#D97706',
      fontFamily: 'Inter',
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
      backgroundImage: '',
      backgroundType: 'gradient'
    },
    about: {
      title: 'המסע שלנו',
      content: 'אנחנו עוזרים לעסקים לקום מחדש ולהגיע לגבהים חדשים'
    },
    features: {
      title: 'כנפי הצמיחה',
      items: [
        { title: 'אסטרטגיה עסקית', description: 'תוכניות מותאמות לצמיחה' },
        { title: 'טרנספורמציה דיגיטלית', description: 'מעבר חלק לעידן הדיגיטלי' },
        { title: 'ליווי מקצועי', description: 'תמיכה בכל שלב של המסע' }
      ]
    },
    testimonials: {
      title: 'סיפורי התחדשות',
      items: [
        { name: 'אבי גולד', text: 'החברה שלנו קמה לתחייה והגיעה לשיאים חדשים', company: 'גולד אנטרפרייז' }
      ]
    },
    pricing: {
      title: 'תוכניות שינוי',
      plans: [
        { name: 'התחדשות', price: '₪599/חודש', features: ['ייעוץ אסטרטגי', 'ליווי צמוד', 'דוחות התקדמות'] }
      ]
    },
    contact: {
      title: 'בוא נתחיל מסע',
      phone: '050-8888888',
      email: 'rise@phoenix-rise.com',
      address: 'ירושלים, ישראל'
    },
    faq: {
      title: 'שאלות על התחדשות',
      items: [
        { question: 'כמה זמן לוקח תהליך השינוי?', answer: 'כל עסק הוא ייחודי, אבל בדרך כלל רואים תוצאות תוך 3-6 חודשים' }
      ]
    },
    finalCta: {
      title: 'זמן לקום ולזרוח',
      subtitle: 'הפניקס שלך מחכה',
      buttonText: 'התחל מסע'
    },
    styles: {
      primaryColor: '#EF4444',
      secondaryColor: '#DC2626',
      fontFamily: 'Inter',
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
      backgroundImage: '',
      backgroundType: 'gradient'
    },
    about: {
      title: 'הסטודיו שלנו',
      content: 'אנחנו יוצרים ומפיצים תוכן איכותי לכל המשפחה'
    },
    features: {
      title: 'תכונות הזרמה',
      items: [
        { title: 'איכות 4K', description: 'חוויית צפייה בחדות מקסימלית' },
        { title: 'תוכן מקורי', description: 'סדרות וסרטים בלעדיים' },
        { title: 'צפייה אישית', description: 'המלצות מותאמות אישית' }
      ]
    },
    testimonials: {
      title: 'צופים מרוצים',
      items: [
        { name: 'רונית ברק', text: 'התוכן הכי טוב ברשת, איכות מעולה וחוויה מדהימה', company: 'משפחת ברק' }
      ]
    },
    pricing: {
      title: 'מנויים',
      plans: [
        { name: 'פרימיום', price: '₪39/חודש', features: ['תוכן בלעדי', '4K באיכות', 'ללא פרסומות'] }
      ]
    },
    contact: {
      title: 'צור איתנו קשר',
      phone: '050-4444444',
      email: 'info@stellar-stream.com',
      address: 'פתח תקווה, ישראל'
    },
    faq: {
      title: 'שאלות צפייה',
      items: [
        { question: 'איך אני מתחיל לצפות?', answer: 'פשוט הירשם, בחר תוכנית ותתחיל לצפות מיד' }
      ]
    },
    finalCta: {
      title: 'התחל לצפות היום',
      subtitle: 'הכוכבים מחכים לך',
      buttonText: 'הירשם עכשיו'
    },
    styles: {
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      fontFamily: 'Inter',
      borderRadius: '16px'
    }
  }
];
