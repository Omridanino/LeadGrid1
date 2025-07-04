
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
        { title: 'בינה מלאכותית', description: 'טכנולוגיית AI מתקדמת', icon: 'brain-line' },
        { title: 'אוטומציה מלאה', description: 'תהליכים אוטומטיים חכמים', icon: 'settings-line' },
        { title: 'ניתוח נתונים', description: 'תובנות עמוקות מהנתונים שלך', icon: 'bar-chart-line' }
      ],
      button1Text: 'גלה יכולות',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'לקוחות מרוצים',
      testimonials: [
        { name: 'שרה לוי', role: 'מנהלת פיתוח', content: 'טכנולוגיה מהפכנית שחסכה לנו זמן רב והגדילה את היעילות', rating: 5 }
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
        { title: 'מחשוב קוונטי', description: 'עוצמת חישוב שלא הכרתם', icon: 'cpu-line' },
        { title: 'אלגוריתמים מתקדמים', description: 'פתרונות מתמטיים מהפכניים', icon: 'function-line' },
        { title: 'הצפנה קוונטית', description: 'אבטחה ברמה הגבוהה ביותר', icon: 'shield-line' }
      ],
      button1Text: 'מדע וטכנולוגיה',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'מה המדענים אומרים',
      testimonials: [
        { name: 'פרופ\' יוסי כהן', role: 'חוקר בכיר', content: 'פריצת דרך בתחום המחשוב הקוונטי שמובילה לחדשנות מדעית', rating: 5 }
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
        { title: 'עיצוב חדשני', description: 'עיצובים שמדברים לנשמה', icon: 'palette-line' },
        { title: 'אנימציה מתקדמת', description: 'תנועה שמחיה את הרעיונות', icon: 'play-circle-line' },
        { title: 'חוויית משתמש', description: 'ממשקים אינטואיטיביים ויפים', icon: 'user-line' }
      ],
      button1Text: 'הפורטפוליו',
      button2Text: 'התחל פרויקט'
    },
    testimonials: {
      title: 'יצירות מוערכות',
      testimonials: [
        { name: 'מיכל רוזן', role: 'מנהלת אמנותית', content: 'יצירה דיגיטלית שמבטאת את החזון שלנו בצורה מושלמת ומעבירה את המסר בדיוק', rating: 5 }
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
        { title: 'אסטרטגיה עסקית', description: 'תוכניות מותאמות לצמיחה', icon: 'target-line' },
        { title: 'טרנספורמציה דיגיטלית', description: 'מעבר חלק לעידן הדיגיטלי', icon: 'refresh-line' },
        { title: 'ליווי מקצועי', description: 'תמיכה בכל שלב של המסע', icon: 'handshake-line' }
      ],
      button1Text: 'שירותים',
      button2Text: 'התחל עכשיו'
    },
    testimonials: {
      title: 'סיפורי התחדשות',
      testimonials: [
        { name: 'אבי גולד', role: 'מנכ"ל', content: 'החברה שלנו קמה לתחייה והגיעה לשיאים חדשים בזכות הליווי המקצועי', rating: 5 }
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
        { title: 'איכות 4K', description: 'חוויית צפייה בחדות מקסימלית', icon: 'monitor-line' },
        { title: 'תוכן מקורי', description: 'סדרות וסרטים בלעדיים', icon: 'film-line' },
        { title: 'צפייה אישית', description: 'המלצות מותאמות אישית', icon: 'user-heart-line' }
      ],
      button1Text: 'כל התכונות',
      button2Text: 'התחל לצפות'
    },
    testimonials: {
      title: 'צופים מרוצים',
      testimonials: [
        { name: 'רונית ברק', role: 'צופה קבועה', content: 'התוכן הכי טוב ברשת, איכות מעולה וחוויה מדהימה שמשפרת כל ערב', rating: 5 }
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
  },
  {
    id: 'crystal-matrix',
    name: 'Crystal Matrix',
    category: 'פרימיום - תלת ממד',
    hero: {
      title: 'עולם התלת ממד החדש',
      subtitle: 'חוויה קריסטלית מהפכנית שמביאה את הטכנולוגיה לממד חדש',
      description: 'פלטפורמה תלת ממדית מתקדמת המשלבת אלמנטים קריסטליים וחוויות אינטראקטיביות מדהימות',
      button1Text: 'כנס לעולם התלת ממד',
      button2Text: 'צפה בדמו 3D'
    },
    emotional: {
      title: 'הרגש את הקריסטל החדש',
      description: 'טכנולוגיה תלת ממדית שמביאה אותך למציאות חדשה ומדהימה',
      button1Text: 'התחל מסע קריסטלי',
      button2Text: 'חקור את הממד'
    },
    about: {
      title: 'אמנות קריסטלית דיגיטלית',
      description: 'אנחנו יוצרים חוויות תלת ממדיות מהפכניות שמשלבות אמנות קריסטלית עם טכנולוגיה מתקדמת',
      button1Text: 'הסיפור התלת ממדי',
      button2Text: 'האמנים שלנו'
    },
    features: {
      title: 'כוחות קריסטליים',
      items: [
        { title: 'גרפיקה תלת ממדית', description: 'אלמנטים קריסטליים מדהימים', icon: 'cube-line' },
        { title: 'אינטראקציה מתקדמת', description: 'חוויית מגע תלת ממדית', icon: 'hand-heart-line' },
        { title: 'פיזיקה ריאליסטית', description: 'תנועה וצללים אמיתיים', icon: 'magic-line' }
      ],
      button1Text: 'חקור יכולות',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'חוויות קריסטליות',
      testimonials: [
        { name: 'יובל דיאמונד', role: 'מעצב תלת ממד', content: 'החוויה הכי מדהימה שראיתי - קריסטלים דיגיטליים שמרגישים אמיתיים', rating: 5 }
      ],
      button1Text: 'עוד חוויות',
      button2Text: 'הצטרף לעולם'
    },
    pricing: {
      title: 'חבילות קריסטל',
      plans: [
        { 
          name: 'קריסטל פרו', 
          price: '₪799', 
          period: 'חודש',
          features: ['גרפיקה 3D מלאה', 'אינטראקציה מתקדמת', 'אפקטים קריסטליים'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה חבילות',
      button2Text: 'ייעוץ תלת ממדי'
    },
    contact: {
      title: 'בוא ניצור ביחד',
      subtitle: 'מוכן לכנוס לעולם הקריסטלים התלת ממדיים?',
      buttonText: 'צור קשר קריסטלי'
    },
    faq: {
      title: 'שאלות תלת ממדיות',
      questions: [
        { question: 'מה זה Crystal Matrix?', answer: 'פלטפורמה תלת ממדית מתקדמת שמציעה חוויות קריסטליות אינטראקטיביות' }
      ],
      button1Text: 'מדריך תלת ממד',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'כנס לעולם הקריסטל',
      description: 'הזמן להרגיש את המגע התלת ממדי החדש',
      button1Text: 'התחל מסע',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Crystal Matrix'
    },
    styles: {
      backgroundColor: '#0a0a0a',
      heroBackground: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
      emotionalBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      featuresBackground: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      testimonialsBackground: '#0a0a0a',
      aboutBackground: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      pricingBackground: 'linear-gradient(135deg, #2980b9 0%, #6bb6ff 100%)',
      faqBackground: '#0a0a0a',
      finalCtaBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      contactBackground: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#667EEA',
      secondaryColor: '#764BA2',
      accentColor: '#6bb6ff'
    },
    effects: {
      hero: 'hero-crystal-matrix',
      features: 'hero-cosmic-geometry',
      testimonials: 'hero-quantum-bubbles'
    }
  },
  {
    id: 'glass-refraction',
    name: 'Glass Refraction',
    category: 'פרימיום - זכוכית',
    hero: {
      title: 'שקיפות מושלמת',
      subtitle: 'עיצוב זכוכית מתקדם שמביא שקיפות וטוהר לעסק שלך',
      description: 'פלטפורמה עם אפקטי זכוכית מתקדמים, שקיפות מושכלת ועיצוב מיוחד שמדגיש את התוכן',
      button1Text: 'ראה דרך הזכוכית',
      button2Text: 'חקור שקיפות'
    },
    emotional: {
      title: 'הבהירות שחיפשת',
      description: 'עיצוב זכוכית שמביא בהירות ושקיפות לכל התהליכים שלך',
      button1Text: 'התחל בשקיפות',
      button2Text: 'גלה בהירות'
    },
    about: {
      title: 'אמנות הזכוכית',
      description: 'אנחנו מתמחים ביצירת חוויות דיגיטליות עם אפקטי זכוכית מתקדמים ושקיפות מושלמת',
      button1Text: 'הסיפור השקוף',
      button2Text: 'הצוות שלנו'
    },
    features: {
      title: 'אפקטי זכוכית',
      items: [
        { title: 'Glassmorphism', description: 'אפקטי זכוכית מתקדמים', icon: 'square-line' },
        { title: 'שקיפות חכמה', description: 'רמות שקיפות מתכווננות', icon: 'eye-line' },
        { title: 'טשטוש מתקדם', description: 'אפקטי blur מדויקים', icon: 'contrast-line' }
      ],
      button1Text: 'חקור אפקטים',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'משוב שקוף',
      testimonials: [
        { name: 'מיכל זכוכית', role: 'מעצבת UI/UX', content: 'האפקטים הכי יפים שראיתי - זכוכית דיגיטלית שמרגישה אמיתית', rating: 5 }
      ],
      button1Text: 'עוד ביקורות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'חבילות זכוכית',
      plans: [
        { 
          name: 'זכוכית פרו', 
          price: '₪599', 
          period: 'חודש',
          features: ['אפקטי זכוכית מלאים', 'שקיפות מתכווננת', 'טשטוש מתקדם'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה חבילות',
      button2Text: 'ייעוץ עיצוב'
    },
    contact: {
      title: 'בואו ניצור שקיפות',
      subtitle: 'מוכנים לחוויית זכוכית מושלמת?',
      buttonText: 'צור קשר שקוף'
    },
    faq: {
      title: 'שאלות שקופות',
      questions: [
        { question: 'מה זה Glassmorphism?', answer: 'סגנון עיצוב מתקדם שמשתמש באפקטי זכוכית, שקיפות וטשטוש למראה מודרני' }
      ],
      button1Text: 'מדריך זכוכית',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'ראה את העתיד בבהירות',
      description: 'הצטרף לחוויית הזכוכית הדיגיטלית המתקדמת',
      button1Text: 'התחל מסע',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Glass Refraction'
    },
    styles: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      heroBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      emotionalBackground: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)',
      featuresBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
      testimonialsBackground: 'rgba(255, 255, 255, 0.05)',
      aboutBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      pricingBackground: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
      faqBackground: 'rgba(255, 255, 255, 0.05)',
      finalCtaBackground: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)',
      contactBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      footerBackground: 'rgba(0, 0, 0, 0.8)',
      textColor: '#ffffff',
      primaryColor: '#3B82F6',
      secondaryColor: '#9333EA',
      accentColor: '#60A5FA'
    },
    effects: {
      hero: 'hero-glass-refraction',
      features: 'beams-background',
      testimonials: 'hero-morphing-shapes'
    }
  },
  {
    id: 'neon-portal',
    name: 'Neon Portal',
    category: 'פרימיום - ניאון',
    hero: {
      title: 'נכנס לפורטל הניאון',
      subtitle: 'עולם זוהר של טכנולוגיה מתקדמת וחוויות נאון מדהימות',
      description: 'פלטפורמה עם אפקטי ניאון מתקדמים, זוהר חיצוני וצבעים חשמליים שמובילים לעתיד',
      button1Text: 'כנס לפורטל',
      button2Text: 'הדלק את הניאון'
    },
    emotional: {
      title: 'הניאון מזמן אותך',
      description: 'זוהר חשמלי שמאיר את הדרך לעתיד הטכנולוגי שלך',
      button1Text: 'הצטרף לזוהר',
      button2Text: 'התחל לזהור'
    },
    about: {
      title: 'מאסטרי הניאון',
      description: 'אנחנו יוצרים חוויות דיגיטליות זוהרות עם אפקטי ניאון מתקדמים וטכנולוגיה חשמלית',
      button1Text: 'הסיפור הזוהר',
      button2Text: 'הצוות החשמלי'
    },
    features: {
      title: 'כוחות ניאון',
      items: [
        { title: 'זוהר חשמלי', description: 'אפקטי ניאון מרהיבים', icon: 'flashlight-line' },
        { title: 'צבעים חיים', description: 'פלטת צבעים חשמלית', icon: 'palette-line' },
        { title: 'אנימציות זוהרות', description: 'תנועות ניאון חלקות', icon: 'magic-line' }
      ],
      button1Text: 'חקור את הזוהר',
      button2Text: 'הדלק עכשיו'
    },
    testimonials: {
      title: 'עדויות זוהרות',
      testimonials: [
        { name: 'רועי ניאון', role: 'מפתח חזית', content: 'הניאון הכי מדהים שראיתי - זוהר שמבהיר את כל הפרויקט', rating: 5 }
      ],
      button1Text: 'עוד עדויות',
      button2Text: 'הצטרף לזוהר'
    },
    pricing: {
      title: 'חבילות ניאון',
      plans: [
        { 
          name: 'ניאון מקס', 
          price: '₪899', 
          period: 'חודש',
          features: ['אפקטי ניאון מלאים', 'זוהר מתכוונן', 'צבעים חשמליים'],
          buttonText: 'הדלק עכשיו'
        }
      ],
      button1Text: 'השווה חבילות',
      button2Text: 'ייעוץ ניאון'
    },
    contact: {
      title: 'בואו נזהיר ביחד',
      subtitle: 'מוכנים להדליק את הניאון הדיגיטלי?',
      buttonText: 'צור קשר זוהר'
    },
    faq: {
      title: 'שאלות זוהרות',
      questions: [
        { question: 'איך עובד הניאון הדיגיטלי?', answer: 'אנחנו משתמשים באפקטי CSS מתקדמים וטכנולוגיות אנימציה ליצירת זוהר אמיתי' }
      ],
      button1Text: 'מדריך ניאון',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'הדלק את העתיד',
      description: 'הזמן להיכנס לעולם הניאון הדיגיטלי החדש',
      button1Text: 'הדלק עכשיו',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Neon Portal'
    },
    styles: {
      backgroundColor: '#0a0a0a',
      heroBackground: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 50%, #0a0a2a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ff0080 0%, #00ff80 100%)',
      featuresBackground: 'linear-gradient(135deg, #1a0a1a 0%, #0a1a2a 100%)',
      testimonialsBackground: '#0a0a0a',
      aboutBackground: 'linear-gradient(135deg, #0a0a0a 0%, #2a0a2a 100%)',
      pricingBackground: 'linear-gradient(135deg, #8000ff 0%, #ff0080 100%)',
      faqBackground: '#0a0a0a',
      finalCtaBackground: 'linear-gradient(135deg, #00ff80 0%, #0080ff 100%)',
      contactBackground: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%)',
      footerBackground: '#000000',
      textColor: '#ffffff',
      primaryColor: '#00FF80',
      secondaryColor: '#FF0080',
      accentColor: '#8000FF'
    },
    effects: {
      hero: 'hero-neon-grid-portal',
      features: 'hero-digital-waves',
      testimonials: 'hero-particle-storm'
    }
  },
  {
    id: 'clay-morph',
    name: 'Clay Morph',
    category: 'פרימיום - חומר',
    hero: {
      title: 'תחושת החומר הרך',
      subtitle: 'עיצוב חדשני בסגנון Claymorphism שמביא תחושה רכה ונעימה',
      description: 'פלטפורמה עם אלמנטים רכים בסגנון פלסטלינה, צללים עמוקים ותחושה טקטילית מיוחדת',
      button1Text: 'גע בחומר',
      button2Text: 'חקור רכות'
    },
    emotional: {
      title: 'הרגש את הרכות',
      description: 'עיצוב שמזמין למגע, נעים לעין ומביא תחושה חמה ואנושית',
      button1Text: 'התחל במגע',
      button2Text: 'חקור רכות'
    },
    about: {
      title: 'אמני החומר',
      description: 'אנחנו יוצרים חוויות דיגיטליות עם תחושה טקטילית, רכות וחמימות שמביאות נוחות',
      button1Text: 'הסיפור הרך',
      button2Text: 'הצוות שלנו'
    },
    features: {
      title: 'תכונות רכות',
      items: [
        { title: 'עיצוב טקטילי', description: 'אלמנטים שמזמינים למגע', icon: 'hand-heart-line' },
        { title: 'צללים עמוקים', description: 'אפקטי צל טבעיים', icon: 'contrast-line' },
        { title: 'חומרים רכים', description: 'טקסטורות נעימות ומרגיעות', icon: 'heart-line' }
      ],
      button1Text: 'חקור תכונות',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'חוויות רכות',
      testimonials: [
        { name: 'דנה רכות', role: 'מעצבת חוויה', content: 'העיצוב הכי נעים שראיתי - תחושה שמזמינה להישאר ולחקור', rating: 5 }
      ],
      button1Text: 'עוד חוויות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'חבילות רכות',
      plans: [
        { 
          name: 'חומר פרו', 
          price: '₪499', 
          period: 'חודש',
          features: ['עיצוב טקטילי מלא', 'צללים עמוקים', 'אנימציות רכות'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה חבילות',
      button2Text: 'ייעוץ עיצוב'
    },
    contact: {
      title: 'בואו ניצור רכות',
      subtitle: 'מוכנים לחוויה טקטילית מיוחדת?',
      buttonText: 'צור קשר רך'
    },
    faq: {
      title: 'שאלות רכות',
      questions: [
        { question: 'מה זה Claymorphism?', answer: 'סגנון עיצוב שמחקה חומרים רכים כמו פלסטלינה עם צללים עמוקים ואלמנטים מעוגלים' }
      ],
      button1Text: 'מדריך חומר',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'גע בעתיד הרך',
      description: 'הצטרף לחוויית העיצוב הטקטילית החדשה',
      button1Text: 'התחל מגע',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Clay Morph'
    },
    styles: {
      backgroundColor: '#f5f1eb',
      heroBackground: 'linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 100%)',
      emotionalBackground: 'linear-gradient(135deg, #d4a574 0%, #c49464 100%)',
      featuresBackground: 'linear-gradient(135deg, #f0ebe0 0%, #e6ddd1 100%)',
      testimonialsBackground: '#f5f1eb',
      aboutBackground: 'linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 100%)',
      pricingBackground: 'linear-gradient(135deg, #deb887 0%, #d2b48c 100%)',
      faqBackground: '#f5f1eb',
      finalCtaBackground: 'linear-gradient(135deg, #cd853f 0%, #d2691e 100%)',
      contactBackground: 'linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 100%)',
      footerBackground: '#8b4513',
      textColor: '#3c2414',
      primaryColor: '#D4A574',
      secondaryColor: '#CD853F',
      accentColor: '#DEB887'
    },
    effects: {
      hero: 'hero-neumorphism',
      features: 'hero-morphing-shapes',
      testimonials: 'fluid-blob'
    }
  },
  {
    id: 'liquid-metal',
    name: 'Liquid Metal',
    category: 'פרימיום - מתכת',
    hero: {
      title: 'מתכת נוזלית עתידנית',
      subtitle: 'עיצוב מתכתי מתקדם עם הברקות, רפלקציות וגרדיאנטים יוקרתיים',
      description: 'פלטפורמה עם אפקטי מתכת נוזלית, הברקות כרום ועיצוב יוקרתי שמשדר טכנולוגיה מתקדמת',
      button1Text: 'חקור מתכת',
      button2Text: 'ראה הברקות'
    },
    emotional: {
      title: 'הברק של העתיד',
      description: 'מתכת נוזלית שמשתנה ומסתגלת לצרכים שלך עם יוקרה ואלגנטיות',
      button1Text: 'התחל להבריק',
      button2Text: 'חקור מתכת'
    },
    about: {
      title: 'יוצרי המתכת',
      description: 'אנחנו מתמחים ביצירת חוויות דיגיטליות יוקרתיות עם אפקטי מתכת מתקדמים ועיצוב פרימיום',
      button1Text: 'הסיפור המבריק',
      button2Text: 'הצוות שלנו'
    },
    features: {
      title: 'כוחות מתכתיים',
      items: [
        { title: 'הברקות כרום', description: 'אפקטי מתכת מבריקים', icon: 'star-line' },
        { title: 'רפלקציות דינמיות', description: 'השתקפויות אמיתיות', icon: 'contrast-line' },
        { title: 'גרדיאנטים יוקרתיים', description: 'מעברי צבע מתכתיים', icon: 'palette-line' }
      ],
      button1Text: 'חקור יכולות',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'עדויות מבריקות',
      testimonials: [
        { name: 'אלון כרום', role: 'מעצב פרימיום', content: 'האפקטים הכי יוקרתיים שראיתי - מתכת דיגיטלית שמרגישה אמיתית', rating: 5 }
      ],
      button1Text: 'עוד עדויות',
      button2Text: 'הצטרף אלינו'
    },
    pricing: {
      title: 'חבילות מתכת',
      plans: [
        { 
          name: 'כרום פרו', 
          price: '₪1299', 
          period: 'חודש',
          features: ['אפקטי כרום מלאים', 'רפלקציות מתקדמות', 'גרדיאנטים יוקרתיים'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה חבילות',
      button2Text: 'ייעוץ יוקרה'
    },
    contact: {
      title: 'בואו ניצור יוקרה',
      subtitle: 'מוכנים לחוויית המתכת הפרימיום?',
      buttonText: 'צור קשר מבריק'
    },
    faq: {
      title: 'שאלות מתכתיות',
      questions: [
        { question: 'איך נוצרים אפקטי המתכת?', answer: 'אנחנו משתמשים בגרדיאנטים מתקדמים, צללים ואפקטי CSS ליצירת מראה מתכתי אמיתי' }
      ],
      button1Text: 'מדריך מתכת',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'הברק לקראת העתיד',
      description: 'הצטרף לחוויית המתכת הנוזלית המתקדמת',
      button1Text: 'התחל להבריק',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Liquid Metal'
    },
    styles: {
      backgroundColor: '#1a1a1a',
      heroBackground: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #c0c0c0 0%, #808080 100%)',
      featuresBackground: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
      testimonialsBackground: '#1a1a1a',
      aboutBackground: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
      pricingBackground: 'linear-gradient(135deg, #b8b8b8 0%, #909090 100%)',
      faqBackground: '#1a1a1a',
      finalCtaBackground: 'linear-gradient(135deg, #d3d3d3 0%, #a9a9a9 100%)',
      contactBackground: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
      footerBackground: '#0d0d0d',
      textColor: '#ffffff',
      primaryColor: '#C0C0C0',
      secondaryColor: '#808080',
      accentColor: '#D3D3D3'
    },
    effects: {
      hero: 'hero-liquid-metal',
      features: 'chrome-grid',
      testimonials: 'hero-holographic'
    }
  },
  {
    id: 'organic-flow',
    name: 'Organic Flow',
    category: 'פרימיום - טבעי',
    hero: {
      title: 'זרימה טבעית אורגנית',
      subtitle: 'עיצוב המשתלב עם הטבע עם צורות זורמות וצבעים רגועים',
      description: 'פלטפורמה שמביאה את הטבע לדיגיטל עם צורות אורגניות, טקסטורות טבעיות וזרימה הרמונית',
      button1Text: 'זרום עם הטבע',
      button2Text: 'חקור אורגני'
    },
    emotional: {
      title: 'התחבר לטבע הפנימי',
      description: 'זרימה טבעית שמביאה שלווה, איזון וחיבור עמוק לטבע',
      button1Text: 'התחל זרימה',
      button2Text: 'מצא איזון'
    },
    about: {
      title: 'חוכמת הטבע',
      description: 'אנחנו יוצרים חוויות דיגיטליות שמשתלבות עם הטבע ומביאות הרמוניה לחיי הדיגיטל',
      button1Text: 'הסיפור הטבעי',
      button2Text: 'הצוות שלנו'
    },
    features: {
      title: 'כוחות טבעיים',
      items: [
        { title: 'צורות זורמות', description: 'עיצובים אורגניים וחלקים', icon: 'leaf-line' },
        { title: 'צבעי אדמה', description: 'פלטת צבעים טבעית', icon: 'palette-line' },
        { title: 'טקסטורות טבעיות', description: 'חומרים ממקור הטבע', icon: 'tree-line' }
      ],
      button1Text: 'חקור טבע',
      button2Text: 'נסה עכשיו'
    },
    testimonials: {
      title: 'עדויות טבעיות',
      testimonials: [
        { name: 'שירה ירוק', role: 'מעצבת בת קיימא', content: 'העיצוב הכי מרגיע שראיתי - טבע דיגיטלי שמביא שלווה אמיתית', rating: 5 }
      ],
      button1Text: 'עוד עדויות',
      button2Text: 'הצטרף לטבע'
    },
    pricing: {
      title: 'חבילות טבעיות',
      plans: [
        { 
          name: 'טבע פרו', 
          price: '₪399', 
          period: 'חודש',
          features: ['עיצוב אורגני מלא', 'צבעי טבע', 'טקסטורות אמיתיות'],
          buttonText: 'התחל עכשיו'
        }
      ],
      button1Text: 'השווה חבילות',
      button2Text: 'ייעוץ טבעי'
    },
    contact: {
      title: 'בואו ניצור הרמוניה',
      subtitle: 'מוכנים לחוויה טבעית ומרגיעה?',
      buttonText: 'צור קשר טבעי'
    },
    faq: {
      title: 'שאלות טבעיות',
      questions: [
        { question: 'איך משתלבים בטבע דיגיטלית?', answer: 'אנחנו משתמשים בצורות אורגניות, צבעי טבע ותנועות זורמות ליצירת הרמוניה' }
      ],
      button1Text: 'מדריך טבע',
      button2Text: 'שאל מומחה'
    },
    finalCta: {
      title: 'זרום עם הטבע',
      description: 'הצטרף לזרימה הטבעית החדשה של הדיגיטל',
      button1Text: 'התחל זרימה',
      button2Text: 'קבל הדגמה'
    },
    footer: {
      companyName: 'Organic Flow'
    },
    styles: {
      backgroundColor: '#f7f5f0',
      heroBackground: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)',
      emotionalBackground: 'linear-gradient(135deg, #8fbc8f 0%, #9acd32 100%)',
      featuresBackground: 'linear-gradient(135deg, #f5f5dc 0%, #f0f8e8 100%)',
      testimonialsBackground: '#f7f5f0',
      aboutBackground: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)',
      pricingBackground: 'linear-gradient(135deg, #daa520 0%, #b8860b 100%)',
      faqBackground: '#f7f5f0',
      finalCtaBackground: 'linear-gradient(135deg, #228b22 0%, #32cd32 100%)',
      contactBackground: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)',
      footerBackground: '#2f4f2f',
      textColor: '#2f4f2f',
      primaryColor: '#8FBC8F',
      secondaryColor: '#228B22',
      accentColor: '#9ACD32'
    },
    effects: {
      hero: 'hero-morphing-shapes',
      features: 'fluid-blob',
      testimonials: 'hero-liquid-metal'
    }
  }
];
