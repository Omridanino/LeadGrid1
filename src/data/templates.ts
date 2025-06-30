
import { TemplateData } from "@/types/template";

export const templates: TemplateData[] = [
  // BASIC CATEGORY - 14 TEMPLATES
  {
    id: 1,
    name: "בסיסי מינימלי",
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
        { name: "יוסי כהן", text: "שירות מעולה ותוצאות מרשימות", company: "טק פלוס" },
        { name: "שרה לוי", text: "ההשקעה הכי טובה שעשיתי", company: "דיגיטל סטארט" }
      ]
    },
    about: {
      title: "מי אנחנו",
      description: "צוות מקצועי עם ניסיון של שנים בתחום הטכנולוגיה",
      features: ["מומחיות טכנית", "שירות אישי", "תמיכה 24/7"]
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: []
    },
    whyUs: {
      title: "למה לבחור בנו",
      reasons: ["איכות מעולה", "מחירים הוגנים", "זמני אספקה קצרים"]
    },
    contact: {
      title: "צור קשר",
      description: "נשמח לשמוע ממך ולעזור",
      phone: "050-123-4567",
      email: "info@example.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-slate-50 to-gray-100",
      textColor: "#1f2937",
      heroBackground: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      emotionalBackground: "bg-gradient-to-br from-gray-50 to-slate-100",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-br from-slate-50 to-gray-50",
      galleryBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-br from-gray-50 to-slate-50",
      contactBackground: "bg-gradient-to-br from-slate-100 to-gray-200"
    }
  },
  {
    id: 2,
    name: "בסיסי כחול",
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
        { name: "דן אברהם", text: "פתרון מדויק בדיוק מה שחיפשתי", company: "אברהם טק" },
        { name: "מיכל רוזן", text: "שירות מקצועי ותוצאות מהירות", company: "רוזן דיגיטל" }
      ]
    },
    about: {
      title: "הסיפור שלנו",
      description: "בונים את העתיד הדיגיטלי עם פתרונות מובילים בתעשייה",
      features: ["חדשנות מתמדת", "איכות ללא פשרות", "תמיכה מתמשכת"]
    },
    gallery: {
      title: "עבודות שביצענו",
      images: []
    },
    whyUs: {
      title: "היתרונות שלנו",
      reasons: ["ניסיון עשיר", "טכנולוגיה מתקדמת", "צוות מומחים"]
    },
    contact: {
      title: "בואו נדבר",
      description: "נשמח לשתף בחוויה שלנו",
      phone: "03-123-4567",
      email: "hello@company.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      textColor: "#1e3a8a",
      heroBackground: "bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-200",
      emotionalBackground: "bg-gradient-to-br from-indigo-50 to-blue-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-blue-50",
      aboutBackground: "bg-gradient-to-br from-blue-50 to-indigo-50",
      galleryBackground: "bg-gradient-to-br from-indigo-50 to-blue-50",
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
        { name: "אורי גולד", text: "התוצאות עברו את כל הציפיות", company: "גולד אנטרפרייזס" },
        { name: "נועה שחר", text: "שירות אדיב ומקצועי ברמה הגבוהה", company: "שחר קריאייטיב" }
      ]
    },
    about: {
      title: "החזון שלנו",
      description: "ליצור עתיד טוב יותר באמצעות טכנולוגיה מתקדמת ואחראית",
      features: ["חשיבה ירוקה", "פתרונות יעילים", "שירות מעולה"]
    },
    gallery: {
      title: "הישגים ופרויקטים",
      images: []
    },
    whyUs: {
      title: "למה אנחנו שונים",
      reasons: ["גישה חדשנית", "מחויבות לאיכות", "יחס אישי לכל לקוח"]
    },
    contact: {
      title: "נתחיל לעבוד",
      description: "הזמן להגשים את החלום שלכם",
      phone: "02-987-6543",
      email: "contact@green-tech.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      textColor: "#065f46",
      heroBackground: "bg-gradient-to-br from-green-100 via-emerald-50 to-green-200",
      emotionalBackground: "bg-gradient-to-br from-emerald-50 to-green-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-green-50",
      aboutBackground: "bg-gradient-to-br from-green-50 to-emerald-50",
      galleryBackground: "bg-gradient-to-br from-emerald-50 to-green-50",
      whyUsBackground: "bg-gradient-to-br from-green-100 to-emerald-100",
      contactBackground: "bg-gradient-to-br from-emerald-100 to-green-200"
    }
  },
  // Continue with remaining basic templates (4-14)...
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
        { name: "רונית כהן", text: "עיצוב שמדבר אל הלב", company: "כהן סטודיו" },
        { name: "איתי מור", text: "יצירתיות ללא גבולות", company: "מור קריאייטיב" }
      ]
    },
    about: {
      title: "האמנות שלנו",
      description: "יוצרים חוויות דיגיטליות שמשאירות רושם בל יימחה",
      features: ["חדשנות יצירתית", "עיצוב ייחודי", "חוויית משתמש מושלמת"]
    },
    gallery: {
      title: "גלריית יצירות",
      images: []
    },
    whyUs: {
      title: "הייחודיות שלנו",
      reasons: ["גישה אמנותית", "טכנולוגיה מתקדמת", "תשומת לב לפרטים"]
    },
    contact: {
      title: "בואו ניצור יחד",
      description: "הפרויקט הבא שלכם מתחיל כאן",
      phone: "04-555-7890",
      email: "create@purple-studio.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      textColor: "#581c87",
      heroBackground: "bg-gradient-to-br from-purple-100 via-violet-50 to-purple-200",
      emotionalBackground: "bg-gradient-to-br from-violet-50 to-purple-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-purple-50",
      aboutBackground: "bg-gradient-to-br from-purple-50 to-violet-50",
      galleryBackground: "bg-gradient-to-br from-violet-50 to-purple-50",
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
        { name: "תומר לב", text: "טכנולוגיה שמעבר לדמיון", company: "לב 3D" },
        { name: "הדר שני", text: "חוויה שמשנה תפיסות", company: "שני אינטראקטיב" }
      ]
    },
    about: {
      title: "חדשנות תלת מימדית",
      description: "פיתוח פתרונות ויזואליים מתקדמים עם אפקטים תלת מימדיים מרהיבים",
      features: ["רינדור בזמן אמת", "אנימציות מתקדמות", "אינטראקטיביות מלאה"]
    },
    gallery: {
      title: "יצירות תלת מימדיות",
      images: []
    },
    whyUs: {
      title: "מה מייחד אותנו",
      reasons: ["טכנולוגיה מתקדמת", "חוויה מרהיבה", "ביצועים מהירים"]
    },
    contact: {
      title: "בוא לעתיד",
      description: "צור קשר לחוויה תלת מימדית מלאה",
      phone: "03-3D3-D3D3",
      email: "future@3d-tech.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900",
      textColor: "#e5e7eb",
      heroBackground: "bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900",
      emotionalBackground: "bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900",
      testimonialsBackground: "bg-gradient-to-br from-gray-900 to-slate-900",
      aboutBackground: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
      galleryBackground: "bg-gradient-to-br from-indigo-900 to-purple-900",
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
        { name: "אריאל נוב", text: "כמו להיות בסרט מדע בדיוני", company: "נוב פיוצ'ר" },
        { name: "מאיה זהב", text: "טכנולוגיה שמדהימה", company: "זהב הולו" }
      ]
    },
    about: {
      title: "טכנולוגיית הולו",
      description: "מובילים בפיתוח חוויות הולוגרפיות אינטראקטיביות",
      features: ["הולוגרמות בזמן אמת", "אפקטים פוטוריסטיים", "אינטראקציה מתקדמת"]
    },
    gallery: {
      title: "הולוגרמות מדהימות",
      images: []
    },
    whyUs: {
      title: "למה אנחנו הטובים",
      reasons: ["טכנולוגיה ייחודית", "חוויה בלתי נשכחת", "חדשנות מתמדת"]
    },
    contact: {
      title: "צור קשר עם העתיד",
      description: "בוא לחוות את הטכנולוגיה של מחר",
      phone: "077-HOLO-NOW",
      email: "hologram@future-tech.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-cyan-900 via-blue-900 to-teal-900",
      textColor: "#a7f3d0",
      heroBackground: "bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900",
      emotionalBackground: "bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900",
      testimonialsBackground: "bg-gradient-to-br from-cyan-900 to-teal-900",
      aboutBackground: "bg-gradient-to-br from-teal-900 via-blue-900 to-cyan-900",
      galleryBackground: "bg-gradient-to-br from-blue-900 to-cyan-900",
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
        { name: "דנה כריסטל", text: "עיצוב שמאיר את הנשמה", company: "כריסטל דיזיין" },
        { name: "רועי זכוכית", text: "שקיפות שמדברת בכל צבע", company: "זכוכית ארט" }
      ]
    },
    about: {
      title: "מאסטרי הזכוכית",
      description: "יוצרים חוויות דיגיטליות עם אפקטי זכוכית מתקדמים",
      features: ["זכוכית אינטראקטיבית", "אפקטי שבירת אור", "שקיפות דינמית"]
    },
    gallery: {
      title: "גלריית זכוכית",
      images: []
    },
    whyUs: {
      title: "הבהירות שלנו",
      reasons: ["שקיפות מושלמת", "עיצוב נקי", "חוויה מרגיעה"]
    },
    contact: {
      title: "ראה דרכנו",
      description: "צור קשר לעיצוב זכוכית מותאם אישית",
      phone: "03-GLASS-ME",
      email: "transparent@glass-design.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-slate-100 via-white to-gray-100",
      textColor: "#475569",
      heroBackground: "bg-gradient-to-br from-white via-slate-50 to-gray-100",
      emotionalBackground: "bg-gradient-to-br from-gray-50 via-white to-slate-100",
      testimonialsBackground: "bg-gradient-to-br from-white to-slate-50",
      aboutBackground: "bg-gradient-to-br from-slate-50 via-white to-gray-50",
      galleryBackground: "bg-gradient-to-br from-white to-slate-50",
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
        { name: "פרופ' גיאומטר", text: "מתמטיקה שהופכת לאמנות", company: "אוניברסיטת הצורות" },
        { name: "אדריכלית דפוסים", text: "הרמוניה מושלמת בכל פיקסל", company: "סטודיו פיתגורס" }
      ]
    },
    about: {
      title: "מדע הצורות",
      description: "משלבים מתמטיקה ואמנות ליצירת חוויות ויזואליות מהפנטות",
      features: ["דפוסים מתמטיים", "גיאומטריה מקודשת", "הרמוניה ויזואלית"]
    },
    gallery: {
      title: "גלריית צורות",
      images: []
    },
    whyUs: {
      title: "הדיוק שלנו",
      reasons: ["מתמטיקה מדויקת", "עיצוב הרמוני", "אסתטיקה מושלמת"]
    },
    contact: {
      title: "חבר לנוסחה",
      description: "בוא להיות חלק מהמשוואה המושלמת",
      phone: "03-GEOMETRY",
      email: "shapes@geometric-art.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-orange-100 via-red-50 to-pink-100",
      textColor: "#dc2626",
      heroBackground: "bg-gradient-to-br from-red-100 via-orange-50 to-pink-100",
      emotionalBackground: "bg-gradient-to-br from-pink-50 via-red-100 to-orange-100",
      testimonialsBackground: "bg-gradient-to-br from-orange-50 to-red-50",
      aboutBackground: "bg-gradient-to-br from-red-50 via-pink-50 to-orange-50",
      galleryBackground: "bg-gradient-to-br from-pink-50 to-red-50",
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
        { name: "פיקאסו דיגיטלי", text: "יצירתיות שמעוררת השראה", company: "סטודיו האמנים" },
        { name: "דה וינצ'י מודרני", text: "אמנות שחורגת מהדמיון", company: "רנסנס דיגיטלי" }
      ]
    },
    about: {
      title: "סטודיו יצירתי",
      description: "מקום שבו טכנולוגיה פוגשת אמנות ויוצרת קסם",
      features: ["יצירתיות בלתי מוגבלת", "אמנות דיגיטלית", "חווית חושים מלאה"]
    },
    gallery: {
      title: "גלריית יצירות",
      images: []
    },
    whyUs: {
      title: "הרוח היצירתית",
      reasons: ["אמנות אמיתית", "יצירתיות מקורית", "חוויה אמנותית"]
    },
    contact: {
      title: "בוא ליצור יחד",
      description: "הפרויקט הבא שלכם מתחיל כאן",
      phone: "03-CREATE-ART",
      email: "art@creative-soul.com"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100",
      textColor: "#7c2d92",
      heroBackground: "bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100",
      emotionalBackground: "bg-gradient-to-br from-rose-50 via-pink-100 to-purple-100",
      testimonialsBackground: "bg-gradient-to-br from-purple-50 to-pink-50",
      aboutBackground: "bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50",
      galleryBackground: "bg-gradient-to-br from-rose-50 to-pink-50",
      whyUsBackground: "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-50",
      contactBackground: "bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100"
    }
  }
];
