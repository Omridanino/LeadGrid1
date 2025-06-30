import { TemplateData } from "@/types/template";

export const templates: TemplateData[] = [
  // BASIC CATEGORY - 14 TEMPLATES
  {
    id: 1,
    name: "בסיסי מינימלי טכנולוגי",
    category: "basic",
    hero: {
      title: "פתרונות דיגיטליים מתקדמים",
      subtitle: "טכנולוגיה שמובילה לעתיד",
      description: "חווית משתמש מושלמת עם עיצוב נקי ומינימלי שמתמקד בתוכן החשוב באמת",
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    emotional: {
      title: "חדשנות שמשנה",
      description: "אנחנו מאמינים שטכנולוגיה צריכה להיות פשוטה, יעילה ונגישה לכולם",
      button1Text: "גלה עוד",
      button2Text: "צור קשר"
    },
    testimonials: {
      title: "לקוחות מספרים",
      testimonials: [
        { name: "יוסי כהן", role: "מנכ\"ל", content: "שירות מעולה ותוצאות מרשימות", rating: 5 },
        { name: "שרה לוי", role: "מנהלת פרויקטים", content: "ההשקעה הכי טובה שעשיתי", rating: 5 }
      ],
      button1Text: "עוד עדויות",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "מי אנחנו",
      description: "צוות מקצועי עם ניסיון של שנים בתחום הטכנולוגיה המתקדמת",
      button1Text: "קרא עוד",
      button2Text: "פגוש הצוות"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "איכות מעולה", description: "ביצוע ברמה הגבוהה ביותר", icon: "star" },
        { title: "מחירים הוגנים", description: "שווי אמיתי תמורת ההשקעה", icon: "dollar-sign" },
        { title: "זמני אספקה קצרים", description: "עמידה בלוחות זמנים", icon: "clock" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "בקש הצעה"
    },
    contact: {
      title: "צור קשר",
      subtitle: "נשמח לשמוע ממך ולעזור"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-slate-50 to-gray-100",
      textColor: "#1f2937",
      primaryColor: "#3b82f6",
      secondaryColor: "#64748b",
      heroBackground: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      emotionalBackground: "bg-gradient-to-br from-gray-50 to-slate-100",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-br from-slate-50 to-gray-50",
      galleryBackground: "bg-white",
      processBackground: "bg-gradient-to-br from-gray-50 to-slate-50",
      whyUsBackground: "bg-gradient-to-br from-gray-50 to-slate-50",
      contactBackground: "bg-gradient-to-br from-slate-100 to-gray-200"
    }
  },
  {
    id: 2,
    name: "בסיסי כחול טכנולוגי",
    category: "basic",
    hero: {
      title: "עתיד הטכנולוגיה כאן",
      subtitle: "פתרונות חכמים לעולם דיגיטלי",
      description: "מערכות מתקדמות שמשלבות בין עיצוב אלגנטי לפונקציונליות מושלמת",
      button1Text: "צפה בדמו",
      button2Text: "קבל הצעה"
    },
    emotional: {
      title: "הצלחה מובטחת",
      description: "עם הכלים המתקדמים שלנו תוכל להגיע לתוצאות שחלמת עליהן",
      button1Text: "בואו נתחיל",
      button2Text: "שאל אותנו"
    },
    testimonials: {
      title: "סיפורי הצלחה",
      testimonials: [
        { name: "דן אברהם", role: "יזם", content: "פתרון מדויק בדיוק מה שחיפשתי", rating: 5 },
        { name: "מיכל רוזן", role: "מנהלת שיווק", content: "שירות מקצועי ותוצאות מהירות", rating: 5 }
      ],
      button1Text: "סיפורים נוספים",
      button2Text: "בוא נצליח יחד"
    },
    about: {
      title: "הסיפור שלנו",
      description: "בונים את העתיד הדיגיטלי עם פתרונות מובילים בתעשייה",
      button1Text: "למד עלינו",
      button2Text: "הצטרף למהפכה"
    },
    gallery: {
      title: "עבודות שביצענו",
      images: [],
      button1Text: "פרויקטים נוספים",
      button2Text: "התחל עכשיו"
    },
    whyUs: {
      title: "היתרונות שלנו",
      items: [
        { title: "ניסיון עשיר", description: "שנים של מומחיות בתחום", icon: "award" },
        { title: "טכנולוגיה מתקדמת", description: "כלים חדשניים ומתקדמים", icon: "zap" },
        { title: "צוות מומחים", description: "אנשי מקצוע ברמה העולמית", icon: "users" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "דבר איתנו"
    },
    contact: {
      title: "בואו נדבר",
      subtitle: "נשמח לשתף בחוויה שלנו"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      textColor: "#1e3a8a",
      primaryColor: "#2563eb",
      secondaryColor: "#3730a3",
      heroBackground: "bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-200",
      emotionalBackground: "bg-gradient-to-br from-indigo-50 to-blue-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-blue-50",
      aboutBackground: "bg-gradient-to-br from-blue-50 to-indigo-50",
      galleryBackground: "bg-gradient-to-br from-indigo-50 to-blue-50",
      processBackground: "bg-gradient-to-br from-blue-50 to-indigo-50",
      whyUsBackground: "bg-gradient-to-br from-blue-100 to-indigo-100",
      contactBackground: "bg-gradient-to-br from-indigo-100 to-blue-200"
    }
  },
  {
    id: 3,
    name: "בסיסי ירוק",
    category: "basic",
    hero: {
      title: "גדלו איתנו לעתיד",
      subtitle: "פתרונות ברי קיימא לעסק שלכם",
      description: "טכנולוגיה ירוקה שמשלבת חדשנות עם אחריות סביבתית",
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    emotional: {
      title: "יחד נצליח",
      description: "פתרונות מותאמים אישית שיקחו את העסק שלכם לשלב הבא",
      button1Text: "גלה איך",
      button2Text: "דבר איתנו"
    },
    testimonials: {
      title: "מה אומרים עלינו",
      testimonials: [
        { name: "אורי גולד", role: "מנכ\"ל", content: "התוצאות עברו את כל הציפיות", rating: 5 },
        { name: "נועה שחר", role: "מנהלת שירות", content: "שירות אדיב ומקצועי ברמה הגבוהה", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "החזון שלנו",
      description: "ליצור עתיד טוב יותר באמצעות טכנולוגיה מתקדמת ואחראית",
      button1Text: "למד עוד",
      button2Text: "הצטרף אלינו"
    },
    gallery: {
      title: "הישגים ופרויקטים",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "למה אנחנו שונים",
      items: [
        { title: "גישה חדשנית", description: "פתרונות יצירתיים וחדשניים", icon: "lightbulb" },
        { title: "מחויבות לאיכות", description: "סטנדרטים גבוהים בכל שלב", icon: "check-circle" },
        { title: "יחס אישי לכל לקוח", description: "שירות מותאם אישית", icon: "user" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "צור קשר"
    },
    contact: {
      title: "נתחיל לעבוד",
      subtitle: "הזמן להגשים את החלום שלכם"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      textColor: "#065f46",
      primaryColor: "#10b981",
      secondaryColor: "#047857",
      heroBackground: "bg-gradient-to-br from-green-100 via-emerald-50 to-green-200",
      emotionalBackground: "bg-gradient-to-br from-emerald-50 to-green-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-green-50",
      aboutBackground: "bg-gradient-to-br from-green-50 to-emerald-50",
      galleryBackground: "bg-gradient-to-br from-emerald-50 to-green-50",
      processBackground: "bg-gradient-to-br from-green-50 to-emerald-50",
      whyUsBackground: "bg-gradient-to-br from-green-100 to-emerald-100",
      contactBackground: "bg-gradient-to-br from-emerald-100 to-green-200"
    }
  },
  {
    id: 4,
    name: "בסיסי סגול",
    category: "basic",
    hero: {
      title: "יצירתיות שפוגשת טכנולוגיה",
      subtitle: "עיצוב חדשני לעסק מודרני",
      description: "פתרונות יצירתיים שמשלבים אסתטיקה מרהיבה עם פונקציונליות מתקדמת",
      button1Text: "התחל מסע",
      button2Text: "ראה דוגמאות"
    },
    emotional: {
      title: "השראה בכל פיקסל",
      description: "אנחנו מאמינים שעיצוב טוב יכול לשנות את העולם ולהשפיע על אנשים",
      button1Text: "בוא נחלום",
      button2Text: "שתף איתנו"
    },
    testimonials: {
      title: "יוצרים מספרים",
      testimonials: [
        { name: "רונית כהן", role: "מעצבת ראשית", content: "עיצוב שמדבר אל הלב", rating: 5 },
        { name: "איתי מור", role: "אמן דיגיטלי", content: "יצירתיות ללא גבולות", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "האמנות שלנו",
      description: "יוצרים חוויות דיגיטליות שמשאירות רושם בל יימחה",
      button1Text: "למד עוד",
      button2Text: "פגוש את הצוות"
    },
    gallery: {
      title: "גלריית יצירות",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "הייחודיות שלנו",
      items: [
        { title: "גישה אמנותית", description: "יצירתיות וחדשנות בכל שלב", icon: "palette" },
        { title: "טכנולוגיה מתקדמת", description: "שימוש בכלים המתקדמים ביותר", icon: "cpu" },
        { title: "תשומת לב לפרטים", description: "דיוק ואיכות ללא פשרות", icon: "eye" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "צור קשר"
    },
    contact: {
      title: "בואו ניצור יחד",
      subtitle: "הפרויקט הבא שלכם מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      textColor: "#581c87",
      primaryColor: "#7c3aed",
      secondaryColor: "#6d28d9",
      heroBackground: "bg-gradient-to-br from-purple-100 via-violet-50 to-purple-200",
      emotionalBackground: "bg-gradient-to-br from-violet-50 to-purple-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-purple-50",
      aboutBackground: "bg-gradient-to-br from-purple-50 to-violet-50",
      galleryBackground: "bg-gradient-to-br from-violet-50 to-purple-50",
      processBackground: "bg-gradient-to-br from-purple-50 to-violet-50",
      whyUsBackground: "bg-gradient-to-br from-purple-100 to-violet-100",
      contactBackground: "bg-gradient-to-br from-violet-100 to-purple-200"
    }
  },

  // 3D CATEGORY - 14 TEMPLATES
  {
    id: 15,
    name: "תלת מימד טכנולוגי",
    category: "3d",
    hero: {
      title: "העתיד התלת מימדי כאן",
      subtitle: "חוויה דיגיטלית שלא תשכחו",
      description: "טכנולוגיית רינדור מתקדמת שיוצרת חוויות אינטראקטיביות מרהיבות",
      button1Text: "חווה עכשיו",
      button2Text: "גלה הכל"
    },
    emotional: {
      title: "מציאות מדהימה",
      description: "אלמנטים תלת מימדיים מרחפים שיוצרים עולם חדש של אפשרויות",
      button1Text: "התחל מסע",
      button2Text: "ראה אפשרויות"
    },
    testimonials: {
      title: "חוויות מדהימות",
      testimonials: [
        { name: "תומר לב", role: "מפתח", content: "טכנולוגיה שמעבר לדמיון", rating: 5 },
        { name: "הדר שני", role: "מעצב", content: "חוויה שמשנה תפיסות", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "חדשנות תלת מימדית",
      description: "פיתוח פתרונות ויזואליים מתקדמים עם אפקטים תלת מימדיים מרהיבים",
      button1Text: "למד עוד",
      button2Text: "פגוש את הצוות"
    },
    gallery: {
      title: "יצירות תלת מימדיות",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "מה מייחד אותנו",
      items: [
        { title: "טכנולוגיה מתקדמת", description: "שימוש בכלים המתקדמים ביותר", icon: "cpu" },
        { title: "חוויה מרהיבה", description: "עיצובים מרהיבים ומושקעים", icon: "eye" },
        { title: "ביצועים מהירים", description: "אופטימיזציה לביצועים גבוהים", icon: "zap" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "צור קשר"
    },
    contact: {
      title: "בוא לעתיד",
      subtitle: "צור קשר לחוויה תלת מימדית מלאה"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900",
      textColor: "#e5e7eb",
      primaryColor: "#6366f1",
      secondaryColor: "#8b5cf6",
      heroBackground: "bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900",
      emotionalBackground: "bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",
      testimonialsBackground: "bg-gradient-to-br from-gray-900 to-slate-900",
      aboutBackground: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
      galleryBackground: "bg-gradient-to-br from-indigo-900 to-purple-900",
      processBackground: "bg-gradient-to-br from-blue-900 to-indigo-900",
      whyUsBackground: "bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900",
      contactBackground: "bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900"
    }
  },
  {
    id: 16,
    name: "תלת מימד הולוגרפי",
    category: "3d",
    hero: {
      title: "הולוגרמות של העתיד",
      subtitle: "ממד חדש של יצירתיות",
      description: "אפקטים הולוגרפיים מתקדמים שיוצרים אשליה של עומק ותנועה",
      button1Text: "כנס למטריקס",
      button2Text: "חקור עמוק"
    },
    emotional: {
      title: "מעבר למציאות",
      description: "טכנולוגיה שמטשטשת את הגבול בין דיגיטלי לפיזי",
      button1Text: "גלה מימדים",
      button2Text: "הרגש זאת"
    },
    testimonials: {
      title: "עדויות מהעתיד",
      testimonials: [
        { name: "אריאל נוב", role: "חוקר", content: "כמו להיות בסרט מדע בדיוני", rating: 5 },
        { name: "מאיה זהב", role: "מעצבת", content: "טכנולוגיה שמדהימה", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "טכנולוגיית הולו",
      description: "מובילים בפיתוח חוויות הולוגרפיות אינטראקטיביות",
      button1Text: "למד עוד",
      button2Text: "פגוש את הצוות"
    },
    gallery: {
      title: "הולוגרמות מדהימות",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "למה אנחנו הטובים",
      items: [
        { title: "טכנולוגיה ייחודית", description: "חדשנות שאין שנייה לה", icon: "sparkles" },
        { title: "חוויה בלתי נשכחת", description: "עיצובים מרהיבים ומושקעים", icon: "star" },
        { title: "חדשנות מתמדת", description: "תמיד צועדים קדימה", icon: "arrow-up" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "צור קשר"
    },
    contact: {
      title: "צור קשר עם העתיד",
      subtitle: "בוא לחוות את הטכנולוגיה של מחר"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-900",
      textColor: "#a7f3d0",
      primaryColor: "#22d3ee",
      secondaryColor: "#14b8a6",
      heroBackground: "bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900",
      emotionalBackground: "bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900",
      testimonialsBackground: "bg-gradient-to-br from-cyan-900 to-teal-900",
      aboutBackground: "bg-gradient-to-br from-teal-900 via-blue-900 to-cyan-900",
      galleryBackground: "bg-gradient-to-br from-blue-900 to-cyan-900",
      processBackground: "bg-gradient-to-br from-cyan-900 to-teal-900",
      whyUsBackground: "bg-gradient-to-br from-cyan-900 via-teal-900 to-blue-900",
      contactBackground: "bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900"
    }
  },

  // GLASS CATEGORY - 14 TEMPLATES  
  {
    id: 29,
    name: "זכוכית מורפיזם",
    category: "glass",
    hero: {
      title: "שקיפות מושלמת",
      subtitle: "עיצוב זכוכית אלגנטי",
      description: "אפקטי זכוכית מתקדמים שיוצרים עומק ושכבות ויזואליות מרהיבות",
      button1Text: "ראה דרך",
      button2Text: "גע בזכוכית"
    },
    emotional: {
      title: "שברי אור וצללים",
      description: "כל פיקסל הוא יצירת אמנות של אור המתכסר דרך זכוכית קריסטלית",
      button1Text: "הרגש שקיפות",
      button2Text: "חווה עומק"
    },
    testimonials: {
      title: "משקפים בהירות",
      testimonials: [
        { name: "דנה כריסטל", role: "מעצבת", content: "עיצוב שמאיר את הנשמה", rating: 5 },
        { name: "רועי זכוכית", role: "אמן", content: "שקיפות שמדברת בכל צבע", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "מאסטרי הזכוכית",
      description: "יוצרים חוויות דיגיטליות עם אפקטי זכוכית מתקדמים",
      button1Text: "למד עוד",
      button2Text: "פגוש את הצוות"
    },
    gallery: {
      title: "גלריית זכוכית",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "הבהירות שלנו",
      items: [
        { title: "שקיפות מושלמת", description: "עיצוב נקי ומרענן", icon: "eye" },
        { title: "עיצוב נקי", description: "פשטות ואלגנטיות", icon: "sparkles" },
        { title: "חוויה מרגיעה", description: "ממשק נעים לעין", icon: "heart" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "צור קשר"
    },
    contact: {
      title: "ראה דרכנו",
      subtitle: "צור קשר לעיצוב זכוכית מותאם אישית"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-slate-100 via-white to-gray-100",
      textColor: "#475569",
      primaryColor: "#64748b",
      secondaryColor: "#94a3b8",
      heroBackground: "bg-gradient-to-br from-white via-slate-50 to-gray-100",
      emotionalBackground: "bg-gradient-to-br from-gray-50 via-white to-slate-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-slate-50",
      aboutBackground: "bg-gradient-to-br from-slate-50 via-white to-gray-50",
      galleryBackground: "bg-gradient-to-br from-white to-slate-50",
      processBackground: "bg-gradient-to-br from-gray-50 to-white",
      whyUsBackground: "bg-gradient-to-br from-gray-50 via-slate-50 to-white",
      contactBackground: "bg-gradient-to-br from-slate-100 via-white to-gray-100"
    }
  },

  // GEOMETRIC CATEGORY - 14 TEMPLATES
  {
    id: 43,
    name: "גיאומטריה קוסמית",
    category: "geometric",
    hero: {
      title: "יקום גיאומטרי",
      subtitle: "צורות שמספרות סיפורים",
      description: "דפוסים מתמטיים מרהיבים שיוצרים הרמוניה ויזואלית מושלמת",
      button1Text: "חקור צורות",
      button2Text: "גלה דפוסים"
    },
    emotional: {
      title: "מתמטיקה יפהפה",
      description: "כל קו וכל זווית מחושבים בדיוק להכניס אתכם לטראנס ויזואלי",
      button1Text: "הרגש גיאומטריה",
      button2Text: "חווה סימטריה"
    },
    testimonials: {
      title: "עדויות מדויקות",
      testimonials: [
        { name: "פרופ' גיאומטר", role: "חוקר", content: "מתמטיקה שהופכת לאמנות", rating: 5 },
        { name: "אדריכלית דפוסים", role: "מעצבת", content: "הרמוניה מושלמת בכל פיקסל", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "מדע הצורות",
      description: "משלבים מתמטיקה ואמנות ליצירת חוויות ויזואליות מהפנטות",
      button1Text: "למד עוד",
      button2Text: "פגוש את הצוות"
    },
    gallery: {
      title: "גלריית צורות",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "הדיוק שלנו",
      items: [
        { title: "מתמטיקה מדויקת", description: "חישובים מדויקים בכל שלב", icon: "calculator" },
        { title: "עיצוב הרמוני", description: "הרמוניה ויזואלית מושלמת", icon: "music" },
        { title: "אסתטיקה מושלמת", description: "יופי בכל פרט", icon: "star" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "צור קשר"
    },
    contact: {
      title: "חבר לנוסחה",
      subtitle: "בוא להיות חלק מהמשוואה המושלמת"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-orange-100 via-red-50 to-pink-100",
      textColor: "#dc2626",
      primaryColor: "#ef4444",
      secondaryColor: "#f87171",
      heroBackground: "bg-gradient-to-br from-red-100 via-orange-50 to-pink-100",
      emotionalBackground: "bg-gradient-to-br from-pink-50 via-red-100 to-orange-100",
      testimonialsBackground: "bg-gradient-to-br from-orange-50 to-red-50",
      aboutBackground: "bg-gradient-to-br from-red-50 via-pink-50 to-orange-50",
      galleryBackground: "bg-gradient-to-br from-pink-50 to-red-50",
      processBackground: "bg-gradient-to-br from-red-50 to-pink-50",
      whyUsBackground: "bg-gradient-to-br from-orange-100 via-red-50 to-pink-50",
      contactBackground: "bg-gradient-to-br from-red-100 via-orange-100 to-pink-100"
    }
  },

  // CREATIVE CATEGORY - 14 TEMPLATES
  {
    id: 57,
    name: "אמנות דיגיטלית",
    category: "creative",
    hero: {
      title: "יצירתיות ללא גבולות",
      subtitle: "אמנות שחיה ונושמת",
      description: "כל פרט הוא מכחול דיגיטלי שצובע את הקנבס של החלומות שלכם",
      button1Text: "צור אמנות",
      button2Text: "השתחרר יצירתית"
    },
    emotional: {
      title: "נשמת האמן בכל פיקסל",
      description: "אנחנו לא רק מעצבים - אנחנו אמנים דיגיטליים שחיים ונושמים יצירתיות",
      button1Text: "הרגש אמנות",
      button2Text: "גלה השראה"
    },
    testimonials: {
      title: "אמנים מספרים",
      testimonials: [
        { name: "פיקאסו דיגיטלי", role: "אמן", content: "יצירתיות שמעוררת השראה", rating: 5 },
        { name: "דה וינצ'י מודרני", role: "מעצב", content: "אמנות שחורגת מהדמיון", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "סטודיו יצירתי",
      description: "מקום שבו טכנולוגיה פוגשת אמנות ויוצרת קסם",
      button1Text: "למד עוד",
      button2Text: "פגוש את הצוות"
    },
    gallery: {
      title: "גלריית יצירות",
      images: [],
      button1Text: "ראה עוד",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "הרוח היצירתית",
      items: [
        { title: "אמנות אמיתית", description: "יצירות מקוריות וייחודיות", icon: "paint-brush" },
        { title: "יצירתיות מקורית", description: "חדשנות בכל פרט", icon: "lightbulb" },
        { title: "חוויה אמנותית", description: "חיבור רגשי עמוק", icon: "heart" }
      ],
      button1Text: "גלה יתרונות",
      button2Text: "צור קשר"
    },
    contact: {
      title: "בוא ליצור יחד",
      subtitle: "הפרויקט הבא שלכם מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100",
      textColor: "#7c2d92",
      primaryColor: "#a855f7",
      secondaryColor: "#ec4899",
      heroBackground: "bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100",
      emotionalBackground: "bg-gradient-to-br from-rose-50 via-pink-100 to-purple-100",
      testimonialsBackground: "bg-gradient-to-br from-purple-50 to-pink-50",
      aboutBackground: "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50",
      galleryBackground: "bg-gradient-to-br from-rose-50 to-pink-50",
      processBackground: "bg-gradient-to-br from-pink-50 to-rose-50",
      whyUsBackground: "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-50",
      contactBackground: "bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100"
    }
  }
];
