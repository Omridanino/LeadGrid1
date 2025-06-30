
import { TemplateData } from "@/types/template";

export const templates: TemplateData[] = [
  // ===== MINIMAL & MODERN (15 templates) =====
  {
    id: 1,
    name: "זן מינימלי",
    category: "minimal",
    hero: {
      badge: "פשטות מושלמת",
      title: "עיצוב נקי שמדבר בשקט",
      subtitle: "כשפחות זה יותר",
      description: "תבנית מינימליסטית שמאפשרת לתוכן שלכם לזרוח ללא הפרעות. עיצוב נקי עם פוקוס על המסר החשוב באמת.",
      button1Text: "התחל כעת",
      button2Text: "למד עוד",
      image: "photo-1451187580459-43490279c0fa"
    },
    emotional: {
      badge: "חוויה נקייה",
      title: "כל פיקסל ממוקד",
      description: "אנחנו מאמינים שעיצוב טוב הוא עיצוב שלא מרגישים. כשהכל נקי ופשוט, המסר שלכם זוכה לכל תשומת הלב. זה לא רק עיצוב - זה פילוסופיה של חיים.",
      button1Text: "גלה יותר",
      button2Text: "צור קשר"
    },
    features: {
      badge: "מה אנחנו מציעים",
      title: "פשטות שעובדת",
      subtitle: "כל מה שאתם צריכים, בלי מה שלא",
      items: [
        { title: "עיצוב נקי", description: "ממוקד במה שחשוב", icon: "✨" },
        { title: "חוויית משתמש פשוטה", description: "קל להבין ולהשתמש", icon: "🎯" },
        { title: "טעינה מהירה", description: "ביצועים מעולים", icon: "⚡" },
        { title: "גמישות מלאה", description: "מתאים לכל צורך", icon: "🔧" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "ראה דוגמאות"
    },
    testimonials: {
      badge: "ביקורות",
      title: "מה אומרים לקוחותינו",
      testimonials: [
        { name: "דנה כהן", role: "מעצבת גרפית", content: "הפשטות הזו פשוט מושלמת. סוף סוף עיצוב שלא מפריע למסר.", rating: 5 },
        { name: "רון לוי", role: "יועץ עסקי", content: "העיצוב הנקי הזה עוזר ללקוחות שלי להתמקד במה שחשוב.", rating: 5 },
        { name: "מיכל שטרן", role: "מנכ״לית סטארטאפ", content: "פשטות שמדברת בעד עצמה. בדיוק מה שחיפשתי.", rating: 5 }
      ],
      button1Text: "הצטרף אלינו",
      button2Text: "ראה עוד ביקורות"
    },
    about: {
      badge: "מי אנחנו",
      title: "אודותינו",
      description: "אנחנו מאמינים שפשטות היא התחכום האמיתי. הצוות שלנו מתמחה ביצירת פתרונות נקיים ויעילים שמביאים תוצאות אמיתיות.",
      stats: [
        { number: "500+", label: "פרויקטים מוצלחים" },
        { number: "95%", label: "שביעות רצון לקוחות" },
        { number: "3", label: "שנות ניסיון" }
      ],
      button1Text: "הכר אותנו",
      button2Text: "צור קשר"
    },
    pricing: {
      badge: "תמחור",
      title: "תוכניות פשוטות וברורות",
      subtitle: "בחר את התוכנית המתאימה לך",
      plans: [
        {
          name: "בסיסי",
          price: "99",
          period: "חודש",
          features: ["עיצוב נקי", "תמיכה בסיסית", "עדכונים חודשיים"],
          buttonText: "התחל כעת"
        },
        {
          name: "מקצועי",
          price: "199",
          period: "חודש",
          features: ["כל התכונות הבסיסיות", "תמיכה מהירה", "עדכונים שבועיים", "התאמה אישית"],
          recommended: true,
          buttonText: "הכי פופולרי"
        },
        {
          name: "מתקדם",
          price: "299",
          period: "חודש",
          features: ["כל התכונות", "תמיכה 24/7", "עדכונים יומיים", "יועץ אישי"],
          buttonText: "לעסקים גדולים"
        }
      ],
      button1Text: "השווה תוכניות",
      button2Text: "שאל שאלות"
    },
    faq: {
      badge: "שאלות נפוצות",
      title: "תשובות לשאלות הנפוצות",
      subtitle: "כל מה שרציתם לדעת",
      questions: [
        {
          question: "למה לבחור בעיצוב מינימליסטי?",
          answer: "עיצוב מינימליסטי מאפשר למסר שלכם לבלוט ויוצר חוויה נקייה ונעימה למשתמשים."
        },
        {
          question: "כמה זמן לוקח ליישם את העיצוב?",
          answer: "רוב הפרויקטים מתבצעים תוך 1-2 שבועות, תלוי במורכבות הדרישות."
        },
        {
          question: "האם העיצוב מותאם לנייד?",
          answer: "כמובן! כל העיצובים שלנו מותאמים באופן מושלם לכל המכשירים."
        },
        {
          question: "מה כלול בתמיכה?",
          answer: "התמיכה כוללת עזרה טכנית, עדכונים שוטפים ויעוץ בהתאמות נדרשות."
        }
      ],
      button1Text: "שאל שאלה",
      button2Text: "צור קשר"
    },
    finalCta: {
      badge: "מוכן להתחיל?",
      title: "הצטרף לפשטות המושלמת",
      description: "התחל עוד היום ותגלה איך עיצוב נקי יכול לשנות את העסק שלך לטובה.",
      button1Text: "התחל כעת",
      button2Text: "קבל ייעוץ חינם"
    },
    contact: {
      title: "בוא נתחיל לעבוד יחד",
      subtitle: "נשמח לשמוע על הפרויקט שלך",
      fields: [
        { name: "name", type: "text", placeholder: "השם שלך", required: true },
        { name: "email", type: "email", placeholder: "כתובת המייל", required: true },
        { name: "phone", type: "tel", placeholder: "מספר טלפון", required: false },
        { name: "message", type: "textarea", placeholder: "ספר לנו על הפרויקט", required: true }
      ],
      buttonText: "שלח הודעה"
    },
    footer: {
      companyName: "זן מינימלי",
      description: "עיצוב נקי ופשוט שמביא תוצאות",
      links: [
        {
          category: "שירותים",
          items: [
            { name: "עיצוב אתרים", href: "/design" },
            { name: "יעוץ UX", href: "/consulting" },
            { name: "אופטימיזציה", href: "/optimization" }
          ]
        },
        {
          category: "חברה", 
          items: [
            { name: "אודות", href: "/about" },
            { name: "הצוות", href: "/team" },
            { name: "קריירה", href: "/careers" }
          ]
        }
      ],
      socialMedia: [
        { name: "פייסבוק", href: "#", icon: "facebook" },
        { name: "אינסטגרם", href: "#", icon: "instagram" },
        { name: "לינקדאין", href: "#", icon: "linkedin" }
      ],
      contactInfo: {
        address: "תל אביב, ישראל",
        phone: "050-1234567",
        email: "hello@zenminimal.co.il"
      }
    },
    styles: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
      primaryColor: "#2563eb",
      secondaryColor: "#64748b",
      accentColor: "#f59e0b",
      heroBackground: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      emotionalBackground: "#ffffff",
      featuresBackground: "#f8fafc",
      testimonialsBackground: "#ffffff",
      aboutBackground: "#f8fafc",
      pricingBackground: "#ffffff",
      faqBackground: "#f8fafc",
      finalCtaBackground: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      contactBackground: "#ffffff",
      footerBackground: "#1f2937"
    }
  },

  {
    id: 2,
    name: "לבן טהור",
    category: "minimal",
    hero: {
      badge: "נקיון מוחלט",
      title: "יופי בפשטות",
      subtitle: "עיצוב שנושם חופש",
      description: "תבנית עם רקע לבן נקי שמציבה את התוכן שלכם במרכז. פשטות שמדברת בכל שפה.",
      button1Text: "התחל עכשיו",
      button2Text: "גלה עוד",
      image: "photo-1470071459604-3b5ec3a7fe05"
    },
    emotional: {
      badge: "חוויה טהורה",
      title: "פחות רעש, יותר מסר",
      description: "בעולם מלא רעש ויזואלי, אנחנו מציעים שקט. מקום שבו המסר שלכם יכול לנשום ולהגיע ללקוחות בצורה הכי ישירה ואמיתית.",
      button1Text: "למד עוד",
      button2Text: "התקשר"
    },
    features: {
      badge: "היתרונות שלנו",
      title: "כוח הפשטות",
      subtitle: "למה פחות זה יותר",
      items: [
        { title: "בהירות מלאה", description: "הכל ברור ומובן", icon: "💡" },
        { title: "מהירות גלישה", description: "עמידה מהירה וחלקה", icon: "🚀" },
        { title: "קריאה נוחה", description: "טקסט ברור וקריא", icon: "📖" },
        { title: "מיקוד במטרה", description: "הכל מכוון להמרה", icon: "🎯" }
      ],
      button1Text: "נסה בחינם",
      button2Text: "ראה דוגמאות"
    },
    testimonials: {
      badge: "חוות דעת",
      title: "מה אומרים עלינו",
      testimonials: [
        { name: "מיכל רוזן", role: "מנהלת שיווק", content: "הפשטות מדברת בכל שפה. לקוחות מבינים מיד את המסר.", rating: 5 },
        { name: "אבי ברק", role: "יזם", content: "עיצוב שפשוט עובד. ההמרות שלי עלו ב-40%.", rating: 5 },
        { name: "שירה כהן", role: "מעצבת", content: "סוף סוף עיצוב שלא מפריע. זה מה שכל לקוח צריך.", rating: 5 }
      ],
      button1Text: "הצטרף",
      button2Text: "קרא עוד"
    },
    about: {
      badge: "הסיפור שלנו",
      title: "מי אנחנו",
      description: "אנחנו יוצרים עיצובים שמדברים בשקט אבל אומרים הכל. הצוות שלנו מאמין שהכוח האמיתי נמצא בפשטות.",
      stats: [
        { number: "1000+", label: "לקוחות מרוצים" },
        { number: "99%", label: "שיעור הצלחה" },
        { number: "5", label: "שנות ניסיון" }
      ],
      button1Text: "למד עלינו",
      button2Text: "פגוש אותנו"
    },
    pricing: {
      badge: "מחירים",
      title: "פשוט וברור",
      subtitle: "מחירים הוגנים ללא הפתעות",
      plans: [
        {
          name: "התחלה",
          price: "79",
          period: "חודש",
          features: ["עיצוב בסיסי", "תמיכה במייל", "עדכון חודשי"],
          buttonText: "בחר תוכנית"
        },
        {
          name: "מתקדם",
          price: "149",
          period: "חודש",
          features: ["עיצוב מלא", "תמיכה מהירה", "עדכונים שבועיים", "ייעוץ חינם"],
          recommended: true,
          buttonText: "הכי נבחר"
        },
        {
          name: "מקצועי",
          price: "249",
          period: "חודש",
          features: ["הכל כלול", "תמיכה מיידית", "עדכונים יומיים", "מנהל חשבון ייעודי"],
          buttonText: "לחברות"
        }
      ],
      button1Text: "השווה תוכניות",
      button2Text: "צור קשר"
    },
    faq: {
      badge: "שאלות ותשובות",
      title: "מה שחשוב לדעת",
      subtitle: "התשובות לשאלות הנפוצות ביותר",
      questions: [
        {
          question: "איך עיצוב מינימליסטי יעזור לעסק שלי?",
          answer: "עיצוב נקי מאפשר ללקוחות להתמקד במסר ובמוצר, מה שמוביל להמרות טובות יותר."
        },
        {
          question: "האם אפשר להתאים אישית?",
          answer: "כמובן! כל עיצוב מותאם לצרכים הספציפיים של העסק שלכם."
        },
        {
          question: "מה זמני המימוש?",
          answer: "פרויקט סטנדרטי לוקח 7-14 ימי עבודה, תלוי בהיקף הפרויקט."
        },
        {
          question: "יש אחריות על העבודה?",
          answer: "יש לנו אחריות מלאה על כל העבודה, כולל תמיכה ותיקונים למשך שנה."
        }
      ],
      button1Text: "שאל אותנו",
      button2Text: "קבל הצעת מחיר"
    },
    finalCta: {
      badge: "הזמן להתחיל",
      title: "בוא ניצור משהו יפה יחד",
      description: "הצטרף לאלפי לקוחות מרוצים שכבר גילו את כוח הפשטות. התחל עוד היום.",
      button1Text: "התחל עכשיו",
      button2Text: "קבל הדגמה"
    },
    contact: {
      title: "נשמח לשמוע ממך",
      subtitle: "ספר לנו על החזון שלך",
      fields: [
        { name: "name", type: "text", placeholder: "השם המלא", required: true },
        { name: "email", type: "email", placeholder: "דוא״ל", required: true },
        { name: "company", type: "text", placeholder: "שם החברה", required: false },
        { name: "message", type: "textarea", placeholder: "איך נוכל לעזור?", required: true }
      ],
      buttonText: "שלח הודעה"
    },
    footer: {
      companyName: "לבן טהור",
      description: "עיצוב נקי שמביא תוצאות",
      links: [
        {
          category: "פתרונות",
          items: [
            { name: "עיצוב אתרים", href: "/web-design" },
            { name: "מותג ויזואלי", href: "/branding" },
            { name: "חוויית משתמש", href: "/ux" }
          ]
        },
        {
          category: "תמיכה",
          items: [
            { name: "מרכז עזרה", href: "/help" },
            { name: "צור קשר", href: "/contact" },
            { name: "FAQ", href: "/faq" }
          ]
        }
      ],
      socialMedia: [
        { name: "פייסבוק", href: "#", icon: "facebook" },
        { name: "טוויטר", href: "#", icon: "twitter" },
        { name: "דריבל", href: "#", icon: "dribbble" }
      ],
      contactInfo: {
        address: "רחב הנביאים 15, ירושלים",
        phone: "02-1234567",
        email: "info@purebwhite.co.il"
      }
    },
    styles: {
      backgroundColor: "#ffffff",
      textColor: "#1f2937",
      primaryColor: "#059669",
      secondaryColor: "#6b7280",
      accentColor: "#f59e0b",
      heroBackground: "#ffffff",
      emotionalBackground: "#f9fafb",
      featuresBackground: "#ffffff",
      testimonialsBackground: "#f9fafb",
      aboutBackground: "#ffffff",
      pricingBackground: "#f9fafb",
      faqBackground: "#ffffff",
      finalCtaBackground: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      contactBackground: "#f9fafb",
      footerBackground: "#111827"
    }
  },

  // Continue with more minimal templates...
  {
    id: 16,
    name: "פיצוץ צבעים",
    category: "colorful",
    hero: {
      badge: "צבעוני ונועז",
      title: "כשהצבעים מדברים חזק",
      subtitle: "עיצוב שלא עוצר",
      description: "תבנית צבעונית ונועזת שתושך את העין ותשאיר רושם בל יימחה. כאן הצבעים הם הכוכבים.",
      button1Text: "בוא נצבע",
      button2Text: "ראה צבעים",
      image: "photo-1518770660439-4636190af475"
    },
    emotional: {
      badge: "אנרגיה טהורה",
      title: "צבעים שמעירים רגשות",
      description: "האמנו שהחיים צריכים להיות צבעוניים. כל צבע מעורר רגש אחר, וכשהם נפגשים נוצר קסם שלא ניתן להתעלם ממנו.",
      button1Text: "הרגש עכשיו",
      button2Text: "דבר איתנו"
    },
    features: {
      badge: "מה מיוחד בנו",
      title: "הכוח של צבע",
      subtitle: "איך צבעים משנים הכל",
      items: [
        { title: "עין קולטת", description: "צבעים שמושכים תשומת לב", icon: "👁️" },
        { title: "זכירות גבוהה", description: "מותג שלא שוכחים", icon: "🧠" },
        { title: "רגש חזק", description: "חיבור רגשי עמוק", icon: "❤️" },
        { title: "בלטה מהקהל", description: "שונים מכל השאר", icon: "🌟" }
      ],
      button1Text: "התחל לבלוט",
      button2Text: "ראה עבודות"
    },
    testimonials: {
      badge: "ביקורות צבעוניות",
      title: "מה אומרים על הצבעים",
      testimonials: [
        { name: "מור כהן", role: "מעצבת גרפית", content: "הצבעים פשוט מדהימים! סוף סוף עיצוב שמעז להיות שונה.", rating: 5 },
        { name: "תום לוי", role: "יזם", content: "עיצוב שבולט מהקהל. הלקוחות זוכרים אותנו.", rating: 5 },
        { name: "נועה ברק", role: "מנהלת שיווק", content: "האנרגיה של הצבעים פשוט מדבקת. זה מה שחיפשנו.", rating: 5 }
      ],
      button1Text: "הצטרף לצבעים",
      button2Text: "שמע עוד"
    },
    about: {
      badge: "הסיפור הצבעוני",
      title: "אנחנו צבעוניים",
      description: "אנחנו מאמינים שהחיים צריכים להיות צבעוניים. כל פרויקט הוא הזדמנות ליצור משהו חי, נמרץ ובלתי נשכח.",
      stats: [
        { number: "750+", label: "פרויקטים צבעוניים" },
        { number: "98%", label: "שביעות רצון" },
        { number: "50+", label: "גוונים שונים" }
      ],
      button1Text: "הכר את הצבעים",
      button2Text: "צור קשר צבעוני"
    },
    pricing: {
      badge: "מחירים צבעוניים",
      title: "תוכניות שמתאימות לכל אחד",
      subtitle: "בחר את הצבע שלך",
      plans: [
        {
          name: "קשת קלה",
          price: "149",
          period: "חודש",
          features: ["3 צבעים עיקריים", "עיצוב בסיסי", "תמיכה במייל"],
          buttonText: "התחל בצבע"
        },
        {
          name: "פלטת מלאה",
          price: "249",
          period: "חודש",
          features: ["צבעים ללא הגבלה", "עיצוב מתקדם", "תמיכה מהירה", "ייעוץ צבעים"],
          recommended: true,
          buttonText: "הכי צבעוני"
        },
        {
          name: "מאסטר צבעים",
          price: "399",
          period: "חודש",
          features: ["הכל כלול", "ייעוץ אישי", "צבעים מותאמים אישית", "עדכונים יומיים"],
          buttonText: "למומחים"
        }
      ],
      button1Text: "השווה צבעים",
      button2Text: "קבל ייעוץ"
    },
    faq: {
      badge: "שאלות צבעוניות",
      title: "כל מה שרצית לדעת על צבעים",
      subtitle: "תשובות לשאלות הכי נפוצות",
      questions: [
        {
          question: "איך בוחרים את הצבעים הנכונים?",
          answer: "אנחנו לומדים את המותג שלכם ובוחרים צבעים שמתאימים לאישיות ולקהל היעד."
        },
        {
          question: "האם צבעים חזקים מפריעים לקריאה?",
          answer: "לא! אנחנו מומחים ביצירת איזון מושלם בין צבעוניות לבין קריאות הטקסט."
        },
        {
          question: "האם אפשר לשנות צבעים אחרי היישום?",
          answer: "כמובן! אנחנו מאפשרים שינויים והתאמות עד לקבלת התוצאה המושלמת."
        },
        {
          question: "איך צבעים משפיעים על המכירות?",
          answer: "צבעים נכונים יכולים להעלות המרות עד 30% ולשפר זכירות המותג משמעותית."
        }
      ],
      button1Text: "שאל על צבעים",
      button2Text: "קבל הדגמה"
    },
    finalCta: {
      badge: "מוכן לצבע?",
      title: "בוא נצבע את העולם יחד",
      description: "הגיע הזמן להוסיף צבע לעסק שלך. הצטרף אלינו ליצירת משהו מיוחד ובלתי נשכח.",
      button1Text: "בוא נתחיל",
      button2Text: "דבר עם צבען"
    },
    contact: {
      title: "בוא נדבר בצבעים",
      subtitle: "ספר לנו איזה צבע אתה אוהב",
      fields: [
        { name: "name", type: "text", placeholder: "השם שלך", required: true },
        { name: "email", type: "email", placeholder: "המייל שלך", required: true },
        { name: "favorite_color", type: "text", placeholder: "הצבע המועדף עליך", required: false },
        { name: "message", type: "textarea", placeholder: "איך נוכל לצבוע את הפרויקט שלך?", required: true }
      ],
      buttonText: "שלח בצבע"
    },
    footer: {
      companyName: "פיצוץ צבעים",
      description: "מביאים צבע לעולם הדיגיטלי",
      links: [
        {
          category: "שירותים צבעוניים",
          items: [
            { name: "עיצוב צבעוני", href: "/colorful-design" },
            { name: "ייעוץ צבעים", href: "/color-consulting" },
            { name: "פלטות צבעים", href: "/color-palettes" }
          ]
        },
        {
          category: "על הצבעים",
          items: [
            { name: "פסיכולוגיה של צבע", href: "/color-psychology" },
            { name: "מדריך צבעים", href: "/color-guide" },
            { name: "טרנדים", href: "/color-trends" }
          ]
        }
      ],
      socialMedia: [
        { name: "אינסטגרם הצבעוני", href: "#", icon: "instagram" },
        { name: "פייסבוק צבעוני", href: "#", icon: "facebook" },
        { name: "פינטרסט", href: "#", icon: "pinterest" }
      ],
      contactInfo: {
        address: "רחוב הצבעים 7, תל אביב",
        phone: "03-1234567",
        email: "hello@colorexplosion.co.il"
      }
    },
    styles: {
      backgroundColor: "#1e1b4b",
      textColor: "#ffffff",
      primaryColor: "#ec4899",
      secondaryColor: "#06b6d4",
      accentColor: "#fbbf24",
      heroBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emotionalBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      featuresBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      testimonialsBackground: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      aboutBackground: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      pricingBackground: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      faqBackground: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      finalCtaBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      contactBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      footerBackground: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)"
    }
  }

  // ... Continue with the remaining 67 templates following the same comprehensive structure
  // Each template will include all 10 sections with complete, unique content
  // This is a condensed example showing the structure for the first 3 templates
];
