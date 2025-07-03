
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
        { title: 'טכנולוגיה מתקדמת', description: 'פתרונות חדשניים ומתקדמים', icon: 'zap' },
        { title: 'תמיכה 24/7', description: 'תמיכה טכנית מלאה בכל עת', icon: 'shield' },
        { title: 'ביטחון מתקדם', description: 'אבטחת מידע ברמה הגבוהה ביותר', icon: 'lock' }
      ],
      button1Text: 'גלה עוד',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'מה הלקוחות אומרים',
      testimonials: [
        { name: 'דוד כהן', role: 'מנכ"ל', content: 'שירות מעולה ופתרונות חדשניים שהפכו את העסק שלנו', rating: 5, company: 'טק קורפ' }
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
    id: 'cyber-flow',
    name: 'CyberFlow',
    category: 'טכנולוגיה',
    hero: {
      title: 'העתיד של הטכנולוגיה כאן',
      subtitle: 'חוויה דיגיטלית מהפכנית שתשנה את הדרך בה אתם עובדים',
      description: 'פלטפורמת הסייבר המתקדמת ביותר לעסקים המחפשים לחדש ולהוביל בתחום הטכנולוגיה',
      button1Text: 'גלה עכשיו',
      button2Text: 'צפה בדמו'
    },
    emotional: {
      title: 'היכנס לעידן הסייבר החדש',
      description: 'טכנולוגיה שתשנה את העתיד ותוביל אותך לחדשנות ללא גבולות',
      button1Text: 'התחל מסע',
      button2Text: 'למד עוד'
    },
    about: {
      title: 'החזון שלנו',
      description: 'אנחנו יוצרים את העתיד הדיגיטלי עם פתרונות מתקדמים המבוססים על טכנולוגיות פורצות דרך',
      button1Text: 'קרא עוד',
      button2Text: 'הצוות שלנו'
    },
    features: {
      title: 'תכונות מתקדמות',
      items: [
        { title: 'בינה מלאכותית', description: 'טכנולוגיית AI מתקדמת', icon: 'brain' },
        { title: 'אוטומציה מלאה', description: 'תהליכים אוטומטיים חכמים', icon: 'cog' },
        { title: 'ניתוח נתונים', description: 'תובנות עמוקות מהנתונים שלך', icon: 'chart' }
      ],
      button1Text: 'גלה יכולות',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'לקוחות מרוצים',
      testimonials: [
        { name: 'שרה לוי', role: 'מנהלת פיתוח', content: 'טכנולוגיה מהפכנית שחסכה לנו זמן רב והגדילה את היעילות', rating: 5, company: 'אינובייט' }
      ],
      button1Text: 'עוד סיפורים',
      button2Text: 'הצטרף אלינו'
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
      ],
      button1Text: 'השווה מחירים',
      button2Text: 'יצירת קשר'
    },
    contact: {
      title: 'בואו נתחבר',
      subtitle: 'מוכנים להיכנס לעידן הסייבר החדש?',
      buttonText: 'יצירת קשר'
    },
    faq: {
      title: 'שאלות ותשובות',
      questions: [
        { question: 'מה זה CyberFlow?', answer: 'פלטפורמה מתקדמת לאוטומציה וניהול עסקים בעידן הדיגיטלי' }
      ],
      button1Text: 'עוד שאלות',
      button2Text: 'תמיכה'
    },
    finalCta: {
      title: 'הצטרף למהפכה',
      description: 'הזמן להיכנס לעידן החדש של הטכנולוגיה',
      button1Text: 'התחל מסע',
      button2Text: 'קבל ייעוץ'
    },
    footer: {
      companyName: 'CyberFlow'
    },
    styles: {
      backgroundColor: '#0f0f23',
      heroBackground: '#1a1a2e',
      emotionalBackground: '#8b5cf6',
      featuresBackground: '#16213e',
      testimonialsBackground: '#0f0f23',
      aboutBackground: '#1a1a2e',
      pricingBackground: '#16213e',
      faqBackground: '#0f0f23',
      finalCtaBackground: '#7c3aed',
      contactBackground: '#1a1a2e',
      footerBackground: '#0a0a14',
      textColor: '#ffffff',
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      accentColor: '#a78bfa'
    }
  },
  {
    id: 'quantum-edge',
    name: 'Quantum Edge',
    category: 'מדעי',
    hero: {
      title: 'מחשוב קוונטי לעסק שלך',
      subtitle: 'פתרונות מחשוב מתקדמים המבוססים על טכנולוגיה קוונטית',
      description: 'פריצת דרך בתחום המחשוב הקוונטי המביאה יכולות חישוב חדשות לעסק שלך',
      button1Text: 'חקור עכשיו',
      button2Text: 'המחקר שלנו'
    },
    emotional: {
      title: 'כנס לעידן הקוונטי',
      description: 'טכנולוגיית העתיד כבר כאן - מחשוב קוונטי שיפתח בפניך אפשרויות חדשות',
      button1Text: 'גלה עוד',
      button2Text: 'התחל מחקר'
    },
    about: {
      title: 'מי אנחנו',
      description: 'חברה מובילה בתחום המחשוב הקוונטי ופתרונות עסקיים מתקדמים המבוססים על עקרונות הפיזיקה הקוונטית',
      button1Text: 'הסיפור שלנו',
      button2Text: 'הצוות המדעי'
    },
    features: {
      title: 'יכולות קוונטיות',
      items: [
        { title: 'מחשוב קוונטי', description: 'עוצמת חישוב שלא הכרתם', icon: 'cpu' },
        { title: 'אלגוריתמים מתקדמים', description: 'פתרונות מתמטיים מהפכניים', icon: 'formula' },
        { title: 'הצפנה קוונטית', description: 'אבטחה ברמה הגבוהה ביותר', icon: 'shield' }
      ],
      button1Text: 'מדע וטכנולוגיה',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'מה המדענים אומרים',
      testimonials: [
        { name: 'פרופ\' יוסי כהן', role: 'חוקר בכיר', content: 'פריצת דרך בתחום המחשוב הקוונטי שמובילה לחדשנות מדעית', rating: 5, company: 'מכון ויצמן' }
      ],
      button1Text: 'מחקרים נוספים',
      button2Text: 'הצטרף למחקר'
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
      ],
      button1Text: 'תוכניות מחקר',
      button2Text: 'ייעוץ אקדמי'
    },
    contact: {
      title: 'צור קשר מדעי',
      subtitle: 'מעוניין בשיתוף מחקרי או יישום עסקי?',
      buttonText: 'פנה אלינו'
    },
    faq: {
      title: 'שאלות מדעיות',
      questions: [
        { question: 'מה זה מחשוב קוונטי?', answer: 'טכנולוגיה מתקדמת המבוססת על עקרונות הפיזיקה הקוונטית המאפשרת חישובים מורכבים' }
      ],
      button1Text: 'מדריך מדעי',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'כנס לעידן הקוונטי',
      description: 'הצטרף למהפכת המחשוב הקוונטי וקח חלק בעיצוב העתיד',
      button1Text: 'התחל מחקר',
      button2Text: 'קבל ייעוץ'
    },
    footer: {
      companyName: 'Quantum Edge'
    },
    styles: {
      backgroundColor: '#ffffff',
      heroBackground: '#ecfdf5',
      emotionalBackground: '#10b981',
      featuresBackground: '#f0fdf4',
      testimonialsBackground: '#ffffff',
      aboutBackground: '#ecfdf5',
      pricingBackground: '#f0fdf4',
      faqBackground: '#ffffff',
      finalCtaBackground: '#059669',
      contactBackground: '#ecfdf5',
      footerBackground: '#064e3b',
      textColor: '#064e3b',
      primaryColor: '#10B981',
      secondaryColor: '#059669',
      accentColor: '#34d399'
    }
  },
  {
    id: 'digital-genesis',
    name: 'Digital Genesis',
    category: 'יצירתי',
    hero: {
      title: 'בראשית הדיגיטל החדש',
      subtitle: 'יוצרים חוויות דיגיטליות מהפכניות שמגדירות מחדש את המציאות',
      description: 'סטודיו דיגיטלי יצירתי המתמחה ביצירת חוויות ויזואליות מדהימות ופתרונות עיצוב חדשניים',
      button1Text: 'צור עכשיו',
      button2Text: 'הגלריה שלנו'
    },
    emotional: {
      title: 'הגשם את החזון היצירתי שלך',
      description: 'עיצוב שמדבר, יוצר ומשפיע - נביא את הרעיונות שלך לחיים בצורה מדהימה',
      button1Text: 'התחל ליצור',
      button2Text: 'השראה'
    },
    about: {
      title: 'הסיפור שלנו',
      description: 'סטודיו דיגיטלי המתמחה ביצירת חוויות ויזואליות מדהימות ופתרונות עיצוב שמשאירים רושם',
      button1Text: 'הסיפור המלא',
      button2Text: 'היוצרים'
    },
    features: {
      title: 'כוחות יצירתיים',
      items: [
        { title: 'עיצוב חדשני', description: 'עיצובים שמדברים לנשמה', icon: 'palette' },
        { title: 'אנימציה מתקדמת', description: 'תנועה שמחיה את הרעיונות', icon: 'play' },
        { title: 'חוויית משתמש', description: 'ממשקים אינטואיטיביים ויפים', icon: 'user' }
      ],
      button1Text: 'הפורטפוליו',
      button2Text: 'התחל פרויקט'
    },
    testimonials: {
      title: 'יצירות מוערכות',
      testimonials: [
        { name: 'מיכל רוזן', role: 'מנהלת אמנותית', content: 'יצירה דיגיטלית שמבטאת את החזון שלנו בצורה מושלמת ומעבירה את המסר בדיוק', rating: 5, company: 'ארט סטודיו' }
      ],
      button1Text: 'עוד יצירות',
      button2Text: 'הצטרף אלינו'
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
      ],
      button1Text: 'חבילות מותאמות',
      button2Text: 'ייעוץ יצירתי'
    },
    contact: {
      title: 'בואו ניצור ביחד',
      subtitle: 'מוכנים להפוך את הרעיון שלכם למציאות דיגיטלית מדהימה?',
      buttonText: 'בואו ניצור'
    },
    faq: {
      title: 'שאלות יצירתיות',
      questions: [
        { question: 'איך מתחיל תהליך יצירה?', answer: 'אנחנו מתחילים בשיחה על החזון שלכם ובונים משם את הפרויקט צעד אחר צעד' }
      ],
      button1Text: 'תהליך היצירה',
      button2Text: 'שאל אותנו'
    },
    finalCta: {
      title: 'הגשם את החלום',
      description: 'הזמן להפוך את הרעיונות שלך למציאות דיגיטלית מרהיבה',
      button1Text: 'בוא ניצור',
      button2Text: 'קבל הצעה'
    },
    footer: {
      companyName: 'Digital Genesis'
    },
    styles: {
      backgroundColor: '#fffbeb',
      heroBackground: '#fef3c7',
      emotionalBackground: '#f59e0b',
      featuresBackground: '#fef9e7',
      testimonialsBackground: '#fffbeb',
      aboutBackground: '#fef3c7',
      pricingBackground: '#fef9e7',
      faqBackground: '#fffbeb',
      finalCtaBackground: '#d97706',
      contactBackground: '#fef3c7',
      footerBackground: '#92400e',
      textColor: '#92400e',
      primaryColor: '#F59E0B',
      secondaryColor: '#D97706',
      accentColor: '#fbbf24'
    }
  },
  {
    id: 'phoenix-rise',
    name: 'Phoenix Rise',
    category: 'עסקי',
    hero: {
      title: 'קום וזרח כמו עוף החול',
      subtitle: 'פתרונות עסקיים שמעצימים חברות לצמוח ולהצליח בעידן הדיגיטלי',
      description: 'חברת ייעוץ עסקי המתמחה בהתחדשות עסקית ומובילה חברות לשיאים חדשים של הצלחה',
      button1Text: 'קום וזרח',
      button2Text: 'סיפורי הצלחה'
    },
    emotional: {
      title: 'הזמן שלך לקום ולזרוח',
      description: 'כל עסק יכול לקום מחדש ולהגיע לגבהים חדשים - בואו נעזור לכם במסע ההתחדשות',
      button1Text: 'התחל מסע',
      button2Text: 'ייעוץ חינם'
    },
    about: {
      title: 'המסע שלנו',
      description: 'אנחנו עוזרים לעסקים לקום מחדש ולהגיע לגבהים חדשים באמצעות אסטרטגיות מתקדמות וליווי מקצועי',
      button1Text: 'הדרך שלנו',
      button2Text: 'הצוות'
    },
    features: {
      title: 'כנפי הצמיחה',
      items: [
        { title: 'אסטרטגיה עסקית', description: 'תוכניות מותאמות לצמיחה', icon: 'target' },
        { title: 'טרנספורמציה דיגיטלית', description: 'מעבר חלק לעידן הדיגיטלי', icon: 'transform' },
        { title: 'ליווי מקצועי', description: 'תמיכה בכל שלב של המסע', icon: 'handshake' }
      ],
      button1Text: 'שירותים',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'סיפורי התחדשות',
      testimonials: [
        { name: 'אבי גולד', role: 'מנכ"ל', content: 'החברה שלנו קמה לתחייה והגיעה לשיאים חדשים בזכות הליווי המקצועי', rating: 5, company: 'גולד אנטרפרייז' }
      ],
      button1Text: 'עוד סיפורים',
      button2Text: 'הצטרף למסע'
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
      ],
      button1Text: 'תוכניות מותאמות',
      button2Text: 'ייעוץ אישי'
    },
    contact: {
      title: 'בוא נתחיל מסע',
      subtitle: 'מוכנים להתחדש ולהגיע לגבהים חדשים?',
      buttonText: 'התחל מסע'
    },
    faq: {
      title: 'שאלות על התחדשות',
      questions: [
        { question: 'כמה זמן לוקח תהליך השינוי?', answer: 'כל עסק הוא ייחודי, אבל בדרך כלל רואים תוצאות תוך 3-6 חודשים' }
      ],
      button1Text: 'מדריך התחדשות',
      button2Text: 'שאל יועץ'
    },
    finalCta: {
      title: 'זמן לקום ולזרוח',
      description: 'הצטרף לעסקים שכבר קמו וזרחו איתנו - הזמן שלך הגיע',
      button1Text: 'התחל מסע',
      button2Text: 'קבל ייעוץ'
    },
    footer: {
      companyName: 'Phoenix Rise'
    },
    styles: {
      backgroundColor: '#fef2f2',
      heroBackground: '#fee2e2',
      emotionalBackground: '#ef4444',
      featuresBackground: '#fef7f7',
      testimonialsBackground: '#fef2f2',
      aboutBackground: '#fee2e2',
      pricingBackground: '#fef7f7',
      faqBackground: '#fef2f2',
      finalCtaBackground: '#dc2626',
      contactBackground: '#fee2e2',
      footerBackground: '#7f1d1d',
      textColor: '#7f1d1d',
      primaryColor: '#EF4444',
      secondaryColor: '#DC2626',
      accentColor: '#f87171'
    }
  },
  {
    id: 'stellar-stream',
    name: 'Stellar Stream',
    category: 'מדיה',
    hero: {
      title: 'זרם התוכן הכוכבי שלך',
      subtitle: 'פלטפורמת סטרימינג ותוכן מתקדמת שמביאה את הכוכבים אליך הביתה',
      description: 'פלטפורמת סטרימינג מתקדמת המציעה תוכן איכותי, חוויית צפייה מושלמת וטכנולוגיה חדשנית',
      button1Text: 'צפה עכשיו',
      button2Text: 'התוכן שלנו'
    },
    emotional: {
      title: 'הכוכבים מחכים לך',
      description: 'חוויית סטרימינג שתשנה את הדרך בה אתה צופה בתוכן - איכות, נוחות וחדשנות',
      button1Text: 'התחל לצפות',
      button2Text: 'גלה תוכן'
    },
    about: {
      title: 'הסטודיו שלנו',
      description: 'אנחנו יוצרים ומפיצים תוכן איכותי לכל המשפחה עם הטכנולוגיה המתקדמת ביותר בתחום הסטרימינג',
      button1Text: 'הסיפור שלנו',
      button2Text: 'הצוות'
    },
    features: {
      title: 'תכונות הזרמה',
      items: [
        { title: 'איכות 4K', description: 'חוויית צפייה בחדות מקסימלית', icon: 'monitor' },
        { title: 'תוכן מקורי', description: 'סדרות וסרטים בלעדיים', icon: 'film' },
        { title: 'צפייה אישית', description: 'המלצות מותאמות אישית', icon: 'user-check' }
      ],
      button1Text: 'כל התכונות',
      button2Text: 'התחל לצפות'
    },
    testimonials: {
      title: 'צופים מרוצים',
      testimonials: [
        { name: 'רונית ברק', role: 'צופה קבועה', content: 'התוכן הכי טוב ברשת, איכות מעולה וחוויה מדהימה שמשפרת כל ערב', rating: 5, company: 'משפחת ברק' }
      ],
      button1Text: 'עוד ביקורות',
      button2Text: 'הצטרף אלינו'
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
      ],
      button1Text: 'השווה מנויים',
      button2Text: 'מנוי משפחתי'
    },
    contact: {
      title: 'צור איתנו קשר',
      subtitle: 'יש לך שאלות או רוצה לדעת עוד על התוכן שלנו?',
      buttonText: 'צור קשר'
    },
    faq: {
      title: 'שאלות צפייה',
      questions: [
        { question: 'איך אני מתחיל לצפות?', answer: 'פשוט הירשם, בחר תוכנית ותתחיל לצפות מיד בכל המכשירים' }
      ],
      button1Text: 'מדריך למתחילים',
      button2Text: 'תמיכה טכנית'
    },
    finalCta: {
      title: 'התחל לצפות היום',
      description: 'הצטרף למיליוני צופים שכבר נהנים מהתוכן הכוכבי שלנו',
      button1Text: 'הירשם עכשיו',
      button2Text: 'צפייה חינם'
    },
    footer: {
      companyName: 'Stellar Stream'
    },
    styles: {
      backgroundColor: '#0f0f23',
      heroBackground: '#1e1b4b',
      emotionalBackground: '#8b5cf6',
      featuresBackground: '#312e81',
      testimonialsBackground: '#0f0f23',
      aboutBackground: '#1e1b4b',
      pricingBackground: '#312e81',
      faqBackground: '#0f0f23',
      finalCtaBackground: '#7c3aed',
      contactBackground: '#1e1b4b',
      footerBackground: '#0a0a0f',
      textColor: '#ffffff',
      primaryColor: '#8B5CF6',
      secondaryColor: '#7C3AED',
      accentColor: '#a78bfa'
    }
  }
];
