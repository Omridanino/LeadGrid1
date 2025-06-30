
import { TemplateData } from "@/types/template";

export const templates: TemplateData[] = [
  // Basic Templates (מקצועי ומינימליסטי)
  {
    id: 1,
    name: "עסקי קלאסי",
    category: "basic",
    hero: {
      badge: "פתרון מקצועי",
      title: "הפתרון המושלם לעסק שלך",
      subtitle: "טכנולוגיה מתקדמת ושירות אישי",
      description: "אנחנו מביאים לך את הכלים הטובים ביותר כדי להצליח בעולם הדיגיטלי של היום",
      button1Text: "התחל עכשיו",
      button2Text: "קבל הצעת מחיר"
    },
    emotional: {
      badge: "למה לבחור בנו",
      title: "אנחנו כאן בשביל הצלחתך",
      description: "עם ניסיון של שנים רבות, אנחנו מבינים בדיוק מה העסק שלך צריך כדי לצמוח ולהתפתח",
      button1Text: "בוא נכיר",
      button2Text: "שמע סיפורים"
    },
    testimonials: {
      badge: "מה הלקוחות אומרים",
      title: "הצלחות שמדברות בעד עצמן",
      testimonials: [
        { name: "שרה כהן", role: "מנכ\"לית", content: "השירות פשוט מעולה, הכי טוב שיש!", rating: 5 },
        { name: "דני לוי", role: "יזם", content: "המומחיות שלהם הצילה לנו חודשים של עבודה", rating: 5 },
        { name: "מירי גולן", role: "בעלת עסק", content: "ממליצה בחום לכל מי שרוצה תוצאות אמיתיות", rating: 5 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "קצת עלינו",
      description: "אנחנו צוות של מומחים שאוהבים מה שהם עושים. המטרה שלנו היא להביא לכם את הפתרון הטוב ביותר.",
      button1Text: "הכירו אותנו",
      button2Text: "ההיסטוריה שלנו"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"],
      button1Text: "גלריה מלאה",
      button2Text: "פרויקט חדש"
    },
    process: {
      title: "איך אנחנו עובדים",
      steps: [
        { title: "היכרות", description: "נכיר את הצרכים שלכם", icon: "👋" },
        { title: "תכנון", description: "נבנה תוכנית מותאמת", icon: "📋" },
        { title: "ביצוע", description: "נממש את הפרויקט", icon: "🚀" }
      ],
      button1Text: "בוא נתחיל",
      button2Text: "שאל שאלות"
    },
    whyUs: {
      title: "למה דווקא אנחנו",
      items: [
        { title: "ניסיון רב", description: "שנים של מומחיות בתחום", icon: "⭐" },
        { title: "שירות אישי", description: "כל לקוח הוא עולם", icon: "💝" },
        { title: "תוצאות מוכחות", description: "מאות לקוחות מרוצים", icon: "🎯" }
      ],
      button1Text: "בחר בנו",
      button2Text: "השווה מחירים"
    },
    contact: {
      title: "בוא נדבר",
      subtitle: "נשמח לשמוע ממך"
    },
    styles: {
      backgroundColor: "bg-white",
      textColor: "text-gray-900",
      primaryColor: "text-blue-600",
      secondaryColor: "text-gray-600",
      heroBackground: "bg-gradient-to-br from-blue-50 to-indigo-100",
      emotionalBackground: "bg-gray-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-blue-50",
      galleryBackground: "bg-gray-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-indigo-50",
      contactBackground: "bg-gray-900"
    }
  },

  // 3D Advanced Templates (תלת מימד מתקדם)
  {
    id: 2,
    name: "עתיד תלת מימדי",
    category: "3d",
    hero: {
      badge: "חדשנות טכנולוגית",
      title: "העתיד כבר כאן",
      subtitle: "חוויה תלת מימדית מרהיבה",
      description: "טכנולוגיה מתקדמת שמביאה את העתיד אל ההווה עם אפקטים חזותיים מדהימים",
      button1Text: "חווה עכשיו",
      button2Text: "גלה עוד"
    },
    emotional: {
      title: "חדשנות ללא גבולות",
      description: "אנחנו חושבים מחוץ לקופסה ויוצרים פתרונות שמשנים את המשחק",
      button1Text: "הצטרף למהפכה",
      button2Text: "ראה דוגמאות"
    },
    testimonials: {
      title: "לקוחות מבהירים",
      testimonials: [
        { name: "אלי רוזן", role: "מנהל טכנולוגיות", content: "האפקטים התלת מימדיים פשוט מדהימים!", rating: 5 },
        { name: "נועה ברק", role: "מעצבת UX", content: "חוויית משתמש בלתי נשכחת", rating: 5 },
        { name: "יונתן כץ", role: "מפתח", content: "הטכנולוגיה הכי מתקדמת שראיתי", rating: 5 }
      ],
      button1Text: "עוד ביקורות",
      button2Text: "הצטרף"
    },
    about: {
      title: "אנחנו בונים עתיד",
      description: "צוות של חדשנים שמאמינים שטכנולוגיה צריכה להיות יפה ופונקציונלית באותה מידה",
      button1Text: "הצוות שלנו",
      button2Text: "החזון שלנו"
    },
    gallery: {
      title: "יצירות תלת מימדיות",
      images: ["https://images.unsplash.com/photo-1518770660439-4636190af475", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"],
      button1Text: "עוד יצירות",
      button2Text: "הזמן עכשיו"
    },
    whyUs: {
      title: "למה אנחנו מובילים",
      items: [
        { title: "טכנולוגיה מתקדמת", description: "כלים מתקדמים ביותר", icon: "🚀" },
        { title: "עיצוב חדשני", description: "יופי ופונקציונליות", icon: "🎨" },
        { title: "ביצועים מעולים", description: "מהירות וזמינות", icon: "⚡" }
      ],
      button1Text: "בחר בעתיד",
      button2Text: "השווה"
    },
    contact: {
      title: "בוא נבנה עתיד",
      subtitle: "יחד נוכל להגשים חלומות"
    },
    styles: {
      backgroundColor: "bg-slate-900",
      textColor: "text-white",
      primaryColor: "text-cyan-400",
      secondaryColor: "text-slate-300",
      heroBackground: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      emotionalBackground: "bg-slate-800",
      testimonialsBackground: "bg-slate-900",
      aboutBackground: "bg-gradient-to-r from-purple-900 to-slate-900",
      galleryBackground: "bg-slate-800",
      processBackground: "bg-slate-900",
      whyUsBackground: "bg-gradient-to-br from-slate-900 to-purple-900",
      contactBackground: "bg-black"
    }
  },

  // Glass Premium Templates (זכוכית פרימיום)
  {
    id: 3,
    name: "זיגוג מודרני",
    category: "glass",
    hero: {
      badge: "שקיפות מושלמת",
      title: "עיצוב זכוכית מדהים",
      subtitle: "שקיפות שמביאה בהירות",
      description: "אלגנטיות וחדשנות במקום אחד עם אפקטי זכוכית מתקדמים שיוצרים חוויה ויזואלית מרהיבה",
      button1Text: "ראה דרך הזכוכית",
      button2Text: "למד עוד"
    },
    emotional: {
      title: "בהירות בכל פרט",
      description: "אנחנו מאמינים שיופי נמצא בפשטות ובבהירות - בדיוק כמו זכוכית נקייה",
      button1Text: "גלה את הסוד",
      button2Text: "הצטרף למסע"
    },
    testimonials: {
      title: "שקיפות בביקורות",
      testimonials: [
        { name: "מיכל אבנר", role: "מעצבת פנים", content: "האלגנטיות של הזכוכית פשוט מרהיבה", rating: 5 },
        { name: "רון דוד", role: "אדריכל", content: "השקיפות יוצרת תחושה של מרחב אינסופי", rating: 5 },
        { name: "ליאת חן", role: "מעצבת", content: "הפתרון הכי אלגנטי שראיתי", rating: 5 }
      ],
      button1Text: "עוד חוות דעת",
      button2Text: "בואו נכיר"
    },
    about: {
      title: "אמנות הזכוכית",
      description: "אנחנו מתמחים ביצירת חוויות ויזואליות מדהימות באמצעות טכנולוגיית זכוכית מתקדמת",
      button1Text: "המומחיות שלנו",
      button2Text: "התהליך שלנו"
    },
    gallery: {
      title: "יצירות זכוכית",
      images: ["https://images.unsplash.com/photo-1493397212122-2b85dda8106b", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"],
      button1Text: "גלריה מלאה",
      button2Text: "הזמן יצירה"
    },
    whyUs: {
      title: "שקיפות ויופי",
      items: [
        { title: "איכות פרימיום", description: "חומרים מהשורה הראשונה", icon: "💎" },
        { title: "עיצוב אלגנטי", description: "יופי שלא נגמר", icon: "✨" },
        { title: "טכנולוגיה מתקדמת", description: "חדשנות באמנות", icon: "🔮" }
      ],
      button1Text: "בחר באלגנטיות",
      button2Text: "השווה אפשרויות"
    },
    contact: {
      title: "שקיפות מלאה",
      subtitle: "דבר איתנו בגלוי"
    },
    styles: {
      backgroundColor: "bg-slate-50",
      textColor: "text-slate-900",
      primaryColor: "text-blue-600",
      secondaryColor: "text-slate-600",
      heroBackground: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      emotionalBackground: "bg-white/80",
      testimonialsBackground: "bg-slate-50/90",
      aboutBackground: "bg-gradient-to-r from-white to-blue-50",
      galleryBackground: "bg-white/70",
      processBackground: "bg-slate-50/80",
      whyUsBackground: "bg-gradient-to-br from-indigo-50 to-white",
      contactBackground: "bg-slate-900"
    }
  },

  // Cosmic Space Templates (קוסמי/חלל)
  {
    id: 4,
    name: "גלקסיה דיגיטלית",
    category: "geometric",
    hero: {
      badge: "מסע בין כוכבים",
      title: "חקור את הגלקסיה הדיגיטלית",
      subtitle: "אינסוף אפשרויות בחלל הרחב",
      description: "מסע מדהים אל עולמות דיגיטליים לא נחקרים עם טכנולוגיית חלל מתקדמת",
      button1Text: "התחל מסע",
      button2Text: "חקור כוכבים"
    },
    emotional: {
      title: "חלומות בין גלקסיים",
      description: "כמו חלוצי החלל, אנחנו חוקרים אפשרויות חדשות ופורצים גבולות",
      button1Text: "הצטרף לחקירה",
      button2Text: "גלה עולמות"
    },
    testimonials: {
      title: "קולות מהגלקסיה",
      testimonials: [
        { name: "קפטן אבי כוכב", role: "חוקר חלל", content: "המסע הכי מרהיב שעשיתי אי פעם!", rating: 5 },
        { name: "נווטת שירה", role: "מהנדסת חלל", content: "הטכנולוגיה מהעתיד באמת", rating: 5 },
        { name: "דר' יוסי גלקסיה", role: "מדען", content: "פריצת דרך אמיתית בתחום", rating: 5 }
      ],
      button1Text: "עוד עדויות",
      button2Text: "הצטרף לצוות"
    },
    about: {
      title: "חוקרי הגלקסיה",
      description: "אנחנו צוות של חוקרים דיגיטליים השואפים להביא את טכנולוגיית העתיד לכדור הארץ",
      button1Text: "צוות החלל",
      button2Text: "המיסיה שלנו"
    },
    gallery: {
      title: "תמונות מהחלל",
      images: ["https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"],
      button1Text: "עוד תמונות",
      button2Text: "הזמן מסע"
    },
    whyUs: {
      title: "למה לטוס איתנו",
      items: [
        { title: "ניסיון קוסמי", description: "מסעות בגלקסיות רחוקות", icon: "🚀" },
        { title: "טכנולוגיה מתקדמת", description: "כלי חלל מהדור הבא", icon: "🛸" },
        { title: "בטיחות מלאה", description: "חזרה בטוחה מובטחת", icon: "🌟" }
      ],
      button1Text: "טוס איתנו",
      button2Text: "השווה מסעות"
    },
    contact: {
      title: "קשר קוסמי",
      subtitle: "נשלח אות לכדור הארץ"
    },
    styles: {
      backgroundColor: "bg-gray-900",
      textColor: "text-white",
      primaryColor: "text-purple-400",
      secondaryColor: "text-gray-300",
      heroBackground: "bg-gradient-to-br from-purple-900 via-blue-900 to-black",
      emotionalBackground: "bg-gray-900",
      testimonialsBackground: "bg-black",
      aboutBackground: "bg-gradient-to-r from-indigo-900 to-purple-900",
      galleryBackground: "bg-gray-800",
      processBackground: "bg-gray-900",
      whyUsBackground: "bg-gradient-to-br from-purple-900 to-black",
      contactBackground: "bg-black"
    }
  },

  // Creative Artistic Templates (אמנותי יצירתי)
  {
    id: 5,
    name: "אמנות דיגיטלית",
    category: "creative",
    hero: {
      badge: "יצירתיות ללא גבולות",
      title: "אמנות פוגשת טכנולוגיה",
      subtitle: "יצירות דיגיטליות מרהיבות",
      description: "בעולם שבו אמנות ודיגיטל נפגשים, אנחנו יוצרים חוויות ויזואליות בלתי נשכחות",
      button1Text: "צור אמנות",
      button2Text: "גלה יצירות"
    },
    emotional: {
      title: "כל אחד יכול ליצור",
      description: "האמנות היא השפה האוניברסלית, ואנחנו כאן כדי לעזור לך לבטא את עצמך",
      button1Text: "התחל ליצור",
      button2Text: "השתתף בקהילה"
    },
    testimonials: {
      title: "אמנים אוהבים אותנו",
      testimonials: [
        { name: "מיה צבע", role: "אמנית דיגיטלית", content: "הכלים הכי טובים ליצירה דיגיטלית!", rating: 5 },
        { name: "גל מכחול", role: "מעצב גרפי", content: "חוויית יצירה מדהימה ומעוררת השראה", rating: 5 },
        { name: "נועם פלטיה", role: "אמן רחוב", content: "הביא את האמנות שלי לעידן הדיגיטלי", rating: 5 }
      ],
      button1Text: "עוד אמנים",
      button2Text: "הצטרף לאמנים"
    },
    about: {
      title: "סטודיו יצירתי",
      description: "אנחנו מאמינים שכל אחד נושא בתוכו אמן, והמשימה שלנו היא לעזור לו להוציא אותו החוצה",
      button1Text: "הסטודיו שלנו",
      button2Text: "הפילוסופיה שלנו"
    },
    gallery: {
      title: "גלריית יצירות",
      images: ["https://images.unsplash.com/photo-1500673922987-e212871fec22", "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"],
      button1Text: "עוד בגלריה",
      button2Text: "קנה יצירה"
    },
    whyUs: {
      title: "למה ליצור איתנו",
      items: [
        { title: "כלים מתקדמים", description: "טכנולוגיית יצירה מהשורה הראשונה", icon: "🎨" },
        { title: "קהילה תומכת", description: "אמנים עוזרים לאמנים", icon: "🤝" },
        { title: "השראה אינסופית", description: "חדש כל יום", icon: "💡" }
      ],
      button1Text: "התחל ליצור",
      button2Text: "הצטרף לקהילה"
    },
    contact: {
      title: "בוא ניצור יחד",
      subtitle: "האמנות מחכה לך"
    },
    styles: {
      backgroundColor: "bg-orange-50",
      textColor: "text-gray-900",
      primaryColor: "text-orange-600",
      secondaryColor: "text-gray-700",
      heroBackground: "bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100",
      emotionalBackground: "bg-pink-50",
      testimonialsBackground: "bg-orange-50",
      aboutBackground: "bg-gradient-to-r from-purple-100 to-pink-100",
      galleryBackground: "bg-yellow-50",
      processBackground: "bg-orange-50",
      whyUsBackground: "bg-gradient-to-br from-pink-100 to-orange-100",
      contactBackground: "bg-gray-900"
    }
  },

  // Image-based Templates (14 תבניות עם תמונות)
  {
    id: 6,
    name: "פורטפוליו מקצועי",
    category: "basic",
    hero: {
      badge: "עבודות מובחרות",
      title: "הפורטפוליו שלי",
      subtitle: "יצירות שמספרות סיפור",
      description: "כל עבודה היא עולם ומלואו, ואני כאן כדי להציג את היצירות שלי בצורה הכי טובה",
      button1Text: "ראה עבודות",
      button2Text: "צור קשר",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    emotional: {
      title: "כל עבודה מספרת סיפור",
      description: "מאחורי כל פרויקט יש סיפור, חלום ורצון ליצור משהו משמעותי",
      button1Text: "שמע סיפורים",
      button2Text: "ספר לי על הפרויקט שלך"
    },
    testimonials: {
      title: "לקוחות מספרים",
      testimonials: [
        { name: "רותי אשכול", role: "מנהלת שיווק", content: "העבודה הכי מקצועית שקיבלתי!", rating: 5 },
        { name: "משה זית", role: "בעל עסק", content: "הבין בדיוק מה אני צריך ויצר בהתאם", rating: 5 },
        { name: "דנה פרח", role: "מנכ\"לית", content: "איכות עבודה וזמני אספקה מעולים", rating: 5 }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף ללקוחות"
    },
    about: {
      title: "קצת עליי",
      description: "אני מאמין שעיצוב טוב צריך לפתור בעיות ולהעביר מסרים, לא רק להיראות יפה",
      button1Text: "הסיפור שלי",
      button2Text: "הגישה שלي"
    },
    gallery: {
      title: "עבודות נבחרות",
      images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"],
      button1Text: "כל העבודות",
      button2Text: "הזמן עבודה"
    },
    whyUs: {
      title: "למה לעבוד איתי",
      items: [
        { title: "ניסיון מוכח", description: "מאות פרויקטים מוצלחים", icon: "📊" },
        { title: "יחס אישי", description: "כל לקוח מקבל תשומת לב מלאה", icon: "💝" },
        { title: "איכות גבוהה", description: "תמיד בזמן ובאיכות מעולה", icon: "⭐" }
      ],
      button1Text: "בחר בי",
      button2Text: "השווה הצעות"
    },
    contact: {
      title: "בוא נעבוד יחד",
      subtitle: "נשמח לשמוע על הפרויקט שלך"
    },
    styles: {
      backgroundColor: "bg-white",
      textColor: "text-gray-900",
      primaryColor: "text-indigo-600",
      secondaryColor: "text-gray-600",
      heroBackground: "bg-gradient-to-br from-indigo-50 to-blue-100",
      emotionalBackground: "bg-gray-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-indigo-50",
      galleryBackground: "bg-gray-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-blue-50",
      contactBackground: "bg-gray-900"
    }
  },

  {
    id: 7,
    name: "סטארטאפ חדשני",
    category: "3d",
    hero: {
      badge: "חדשנות טכנולוגית",
      title: "הסטארטאפ של העתיד",
      subtitle: "טכנולוגיה שמשנה עולמות",
      description: "אנחנו בונים את הטכנולוגיה שתשנה את הצורה שבה אנשים חיים ועובדים",
      button1Text: "גלה את הטכנולוגיה",
      button2Text: "השקע בעתיד",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    emotional: {
      title: "אנחנו בונים עתיד",
      description: "כל יום אנחנו מתקרבים צעד אל החזון שלנו - עולם טוב יותר באמצעות טכנולוגיה",
      button1Text: "הצטרף למהפכה",
      button2Text: "השקע בחלום"
    },
    testimonials: {
      title: "משקיעים ולקוחות מאמינים",
      testimonials: [
        { name: "אורי השקעות", role: "VC", content: "הפוטנציאל הכי גבוה שראיתי השנה!", rating: 5 },
        { name: "טל חדשנות", role: "CTO", content: "הטכנולוגיה באמת מהשורה הראשונה", rating: 5 },
        { name: "מיכל עתיד", role: "מנכ\"לית", content: "שינו לנו את הצורה שאנחנו עובדים", rating: 5 }
      ],
      button1Text: "עוד עדויות",
      button2Text: "הצטרף לחזון"
    },
    about: {
      title: "מי אנחנו",
      description: "צוות של חלומנים ומהנדסים שמאמינים שטכנולוגיה יכולה לעשות טוב בעולם",
      button1Text: "הצוות שלנו",
      button2Text: "החזון שלנו"
    },
    gallery: {
      title: "הטכנולוגיה שלנו",
      images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"],
      button1Text: "עוד על הטכנולוגיה",
      button2Text: "בקש הדגמה"
    },
    whyUs: {
      title: "למה אנחנו",
      items: [
        { title: "צוות מוביל", description: "מהנדסים מהטובים בתחום", icon: "🚀" },
        { title: "חזון ברור", description: "יעד מוגדר ודרך ברורה", icon: "🎯" },
        { title: "תמיכת משקיעים", description: "גיבוי כספי איתן", icon: "💰" }
      ],
      button1Text: "הצטרף אלינו",
      button2Text: "השקע עכשיו"
    },
    contact: {
      title: "בוא נשנה עולמות",
      subtitle: "יחד נוכל להגיע רחוק"
    },
    styles: {
      backgroundColor: "bg-slate-900",
      textColor: "text-white",
      primaryColor: "text-emerald-400",
      secondaryColor: "text-slate-300",
      heroBackground: "bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900",
      emotionalBackground: "bg-slate-800",
      testimonialsBackground: "bg-slate-900",
      aboutBackground: "bg-gradient-to-r from-emerald-900 to-slate-900",
      galleryBackground: "bg-slate-800",
      processBackground: "bg-slate-900",
      whyUsBackground: "bg-gradient-to-br from-slate-900 to-emerald-900",
      contactBackground: "bg-black"
    }
  },

  {
    id: 8,
    name: "אגנטסיה קריאטיבית",
    category: "glass",
    hero: {
      badge: "יצירתיות ללא גבולות",
      title: "האגנטסיה הקריאטיבית שלך",
      subtitle: "רעיונות שהופכים למציאות",
      description: "אנחנו לוקחים את הרעיון שלך ומפתחים אותו לקמפיין מדהים שמביא תוצאות",
      button1Text: "ראה פרויקטים",
      button2Text: "בוא נתחיל",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
    },
    emotional: {
      title: "רעיונות שמשנים עולמות",
      description: "כל קמפיין מתחיל ברעיון קטן, ואנחנו יודעים איך להפוך אותו לדבר גדול",
      button1Text: "שתף רעיון",
      button2Text: "ראה תוצאות"
    },
    testimonials: {
      title: "לקוחות מספרים על הצלחות",
      testimonials: [
        { name: "גיל מותגים", role: "מנהל שיווק", content: "הקמפיין הכי מוצלח שיש לנו!", rating: 5 },
        { name: "שירה יצירתית", role: "מנכ\"לית", content: "החזירו לנו את הכיף בשיווק", rating: 5 },
        { name: "עומר הצלחות", role: "בעל עסק", content: "המכירות עלו ב-300% אחרי הקמפיין", rating: 5 }
      ],
      button1Text: "עוד סיפורי הצלחה",
      button2Text: "הצטרף להצלחות"
    },
    about: {
      title: "אנחנו חושבים אחרת",
      description: "באגנטסיה שלנו אין דבר כזה 'זה לא אפשרי' - אנחנו מוצאים דרך לכל רעיון",
      button1Text: "הגישה שלנו",
      button2Text: "הצוות היצירתי"
    },
    gallery: {
      title: "קמפיינים מדהימים",
      images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", "https://images.unsplash.com/photo-1500673922987-e212871fec22"],
      button1Text: "עוד קמפיינים",
      button2Text: "בקש קמפיין"
    },
    whyUs: {
      title: "למה דווקא אנחנו",
      items: [
        { title: "יצירתיות מובילה", description: "רעיונות שמבדילים", icon: "🎨" },
        { title: "תוצאות מוכחות", description: "מדידות ברורות של הצלחה", icon: "📈" },
        { title: "שירות אישי", description: "כל לקוח הוא שותף", icon: "🤝" }
      ],
      button1Text: "בחר ביצירתיות",
      button2Text: "השווה הצעות"
    },
    contact: {
      title: "בוא נכין קמפיין",
      subtitle: "הרעיון הבא שלך מחכה"
    },
    styles: {
      backgroundColor: "bg-slate-50",
      textColor: "text-slate-900",
      primaryColor: "text-pink-600",
      secondaryColor: "text-slate-600",
      heroBackground: "bg-gradient-to-br from-pink-50 via-white to-purple-50",
      emotionalBackground: "bg-white/80",
      testimonialsBackground: "bg-slate-50/90",
      aboutBackground: "bg-gradient-to-r from-white to-pink-50",
      galleryBackground: "bg-white/70",
      processBackground: "bg-slate-50/80",
      whyUsBackground: "bg-gradient-to-br from-purple-50 to-white",
      contactBackground: "bg-slate-900"
    }
  },

  {
    id: 9,
    name: "חלל וחדשנות",
    category: "geometric",
    hero: {
      badge: "טכנולוגיה מהעתיד",
      title: "מסע אל הלא נודע",
      subtitle: "חקר, גלה, חדש",
      description: "אנחנו לוקחים את הטכנולוגיה הכי מתקדמת ומתרגמים אותה לפתרונות מעשיים",
      button1Text: "התחל מסע",
      button2Text: "גלה טכנולוגיות",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    emotional: {
      title: "חלומות שהופכים למציאות",
      description: "מה שנראה כמו מדע בדיוני אתמול, הוא המציאות של היום ועתיד של מחר",
      button1Text: "חלום איתנו",
      button2Text: "ראה חדשנות"
    },
    testimonials: {
      title: "חוקרים ומדענים מספרים",
      testimonials: [
        { name: "פרופ' שלמה כוכב", role: "מדען חלל", content: "הטכנולוגיה הכי מתקדמת שיש!", rating: 5 },
        { name: "דר' רבקה חדש", role: "חוקרת", content: "פריצת דרך אמיתית במדע", rating: 5 },
        { name: "מהנדס חלל אבי", role: "מהנדס", content: "העתיד כבר כאן, ואנחנו חלק ממנו", rating: 5 }
      ],
      button1Text: "עוד מדענים",
      button2Text: "הצטרף לחקירה"
    },
    about: {
      title: "חוקרי הלא ידוע",
      description: "אנחנו צוות של מדענים, מהנדסים וחולמים שמאמינים שהעתיד מתחיל עכשיו",
      button1Text: "צוות המחקר",
      button2Text: "המעבדות שלנו"
    },
    gallery: {
      title: "גילויים מדעיים",
      images: ["https://images.unsplash.com/photo-1523712999610-f77fbcfc3843", "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"],
      button1Text: "עוד גילויים",
      button2Text: "הצטרף למחקר"
    },
    whyUs: {
      title: "למה לחקור איתנו",
      items: [
        { title: "מחקר מתקדם", description: "טכנולוגיות מהשורה הראשונה", icon: "🔬" },
        { title: "צוות מומחים", description: "מדענים מובילים בתחום", icon: "👨‍🔬" },
        { title: "חזון רחב", description: "מחשבה על העתיד", icon: "🌟" }
      ],
      button1Text: "חקר איתנו",
      button2Text: "הצטרף למשימה"
    },
    contact: {
      title: "בוא נחקור יחד",
      subtitle: "העתיד מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-gray-900",
      textColor: "text-white",
      primaryColor: "text-blue-400",
      secondaryColor: "text-gray-300",
      heroBackground: "bg-gradient-to-br from-blue-900 via-indigo-900 to-black",
      emotionalBackground: "bg-gray-900",
      testimonialsBackground: "bg-black",
      aboutBackground: "bg-gradient-to-r from-indigo-900 to-blue-900",
      galleryBackground: "bg-gray-800",
      processBackground: "bg-gray-900",
      whyUsBackground: "bg-gradient-to-br from-blue-900 to-black",
      contactBackground: "bg-black"
    }
  },

  {
    id: 10,
    name: "אמנות ועיצוב",
    category: "creative",
    hero: {
      badge: "יצירה ללא גבולות",
      title: "כשאמנות פוגשת עיצוב",
      subtitle: "יופי ופונקציונליות במקום אחד",
      description: "אנחנו מאמינים שעיצוב טוב צריך להיות גם יפה וגם פונקציונלי - בדיוק כמו אמנות טובה",
      button1Text: "ראה יצירות",
      button2Text: "הזמן עיצוב",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    emotional: {
      title: "כל עיצוב מספר סיפור",
      description: "מאחורי כל יצירה יש רגש, מחשבה ורצון להעביר מסר - זה מה שאנחנו עושים",
      button1Text: "שמע סיפורים",
      button2Text: "ספר את הסיפור שלך"
    },
    testimonials: {
      title: "לקוחות אוהבים את היצירות",
      testimonials: [
        { name: "מיכל אמנות", role: "גלרניקית", content: "העיצובים הכי יפים שראיתי!", rating: 5 },
        { name: "דוד יצירה", role: "מעצב פנים", content: "איכות ויופי ברמה מעולה", rating: 5 },
        { name: "שרה צבעים", role: "אמנית", content: "השראה אמיתית לעבודה שלי", rating: 5 }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף ללקוחות"
    },
    about: {
      title: "אמנים ומעצבים",
      description: "אנחנו צוות של אמנים ומעצבים שחיים ונושמים יצירה, צבע וצורה",
      button1Text: "הצוות היצירתי",
      button2Text: "הגישה שלנו"
    },
    gallery: {
      title: "גלריית עבודות",
      images: ["https://images.unsplash.com/photo-1493397212122-2b85dda8106b", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"],
      button1Text: "כל היצירות",
      button2Text: "הזמן יצירה"
    },
    whyUs: {
      title: "למה ליצור איתנו",
      items: [
        { title: "יצירתיות מובילה", description: "רעיונות חדשים כל יום", icon: "🎨" },
        { title: "איכות מעולה", description: "תמיד ברמה הגבוהה ביותר", icon: "⭐" },
        { title: "יחס אישי", description: "כל לקוח מקבל עבודה מותאמת", icon: "💝" }
      ],
      button1Text: "צור איתנו",
      button2Text: "השווה מחירים"
    },
    contact: {
      title: "בוא ניצור יחד",
      subtitle: "היצירה הבאה שמחכה לך"
    },
    styles: {
      backgroundColor: "bg-orange-50",
      textColor: "text-gray-900",
      primaryColor: "text-purple-600",
      secondaryColor: "text-gray-700",
      heroBackground: "bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100",
      emotionalBackground: "bg-pink-50",
      testimonialsBackground: "bg-orange-50",
      aboutBackground: "bg-gradient-to-r from-orange-100 to-purple-100",
      galleryBackground: "bg-yellow-50",
      processBackground: "bg-orange-50",
      whyUsBackground: "bg-gradient-to-br from-pink-100 to-purple-100",
      contactBackground: "bg-gray-900"
    }
  },

  // 4 תבניות נוספות עם תמונות
  {
    id: 11,
    name: "בית קפה מודרני",
    category: "basic",
    hero: {
      badge: "קפה איכות",
      title: "בית הקפה שלך",
      subtitle: "טעם שלא תשכח",
      description: "אנחנו מכינים את הקפה הכי טוב בעיר, עם חומרי גלם מובחרים ואווירה חמה",
      button1Text: "הזמן עכשיו",
      button2Text: "ראה תפריט",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    emotional: {
      title: "הבית השני שלך",
      description: "בית קפה זה לא רק מקום לשתות קפה - זה מקום להיות, להרגיש בבית, לפגוש חברים",
      button1Text: "בוא להכיר",
      button2Text: "הצטרף לקהילה"
    },
    testimonials: {
      title: "מה הלקוחות אומרים",
      testimonials: [
        { name: "עמי קפה", role: "קפה-מן", content: "הקפה הכי טוב שיש בעיר!", rating: 5 },
        { name: "רותי לאטה", role: "אוהבת קפה", content: "אווירה מדהימה ושירות מעולה", rating: 5 },
        { name: "יוסי אספרסו", role: "מומחה קפה", content: "איכות מעולה ומחירים הוגנים", rating: 5 }
      ],
      button1Text: "עוד המלצות",
      button2Text: "שתף חוויה"
    },
    about: {
      title: "הסיפור שלנו",
      description: "התחלנו מאהבה לקפה טוב והמשכנו מאהבה לאנשים - זה מה שעושה אותנו מיוחדים",
      button1Text: "הסיפור המלא",
      button2Text: "פגש את הצוות"
    },
    gallery: {
      title: "האווירה שלנו",
      images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6", "https://images.unsplash.com/photo-1498050108023-c5249f4df085"],
      button1Text: "עוד תמונות",
      button2Text: "הזמן שולחן"
    },
    whyUs: {
      title: "למה דווקא אצלנו",
      items: [
        { title: "קפה מעולה", description: "קלוי טרי כל יום", icon: "☕" },
        { title: "אווירה חמה", description: "מקום שמרגיש כמו בית", icon: "🏠" },
        { title: "שירות אישי", description: "אנחנו זוכרים איך אתם אוהבים", icon: "💝" }
      ],
      button1Text: "בוא לבקר",
      button2Text: "הזמן קפה"
    },
    contact: {
      title: "בוא לקפה",
      subtitle: "אנחנו מחכים לך"
    },
    styles: {
      backgroundColor: "bg-amber-50",
      textColor: "text-gray-900",
      primaryColor: "text-amber-700",
      secondaryColor: "text-gray-600",
      heroBackground: "bg-gradient-to-br from-amber-100 to-orange-100",
      emotionalBackground: "bg-orange-50",
      testimonialsBackground: "bg-amber-50",
      aboutBackground: "bg-gradient-to-r from-orange-100 to-amber-100",
      galleryBackground: "bg-yellow-50",
      processBackground: "bg-amber-50",
      whyUsBackground: "bg-gradient-to-br from-orange-100 to-amber-100",
      contactBackground: "bg-gray-900"
    }
  },

  {
    id: 12,
    name: "חברת פיתוח",
    category: "3d",
    hero: {
      badge: "פיתוח מתקדם",
      title: "בונים את העתיד",
      subtitle: "קוד שמשנה עולמות",
      description: "אנחנו מפתחים מערכות וטכנולוגיות שעוזרות לעסקים לצמוח ולהתפתח",
      button1Text: "ראה פרויקטים",
      button2Text: "בקש הצעת מחיר",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    emotional: {
      title: "קוד זה אמנות",
      description: "כל שורת קוד שאנחנו כותבים היא עוד צעד קדימה לעולם דיגיטלי טוב יותר",
      button1Text: "הצטרף לחזון",
      button2Text: "ראה איך עובדים"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        { name: "רון קוד", role: "CTO", content: "הפיתוח הכי מקצועי שקיבלתי!", rating: 5 },
        { name: "מיכל מערכות", role: "VP מוצר", content: "זמני פיתוח מהירים ואיכות גבוהה", rating: 5 },
        { name: "אבי טכנולוגיה", role: "מייסד", content: "הצוות הכי טוב שעבדנו איתו", rating: 5 }
      ],
      button1Text: "עוד לקוחות",
      button2Text: "הצטרף ללקוחות"
    },
    about: {
      title: "מי אנחנו",
      description: "צוות של מפתחים מנוסים שאוהבים אתגרים ומאמינים בכוח של טכנולוגיה טובה",
      button1Text: "הצוות שלנו",
      button2Text: "המומחיות שלנו"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", "https://images.unsplash.com/photo-1518770660439-4636190af475"],
      button1Text: "כל הפרויקטים",
      button2Text: "התחל פרויקט"
    },
    whyUs: {
      title: "למה לפתח איתנו",
      items: [
        { title: "ניסיון מוכח", description: "מאות פרויקטים מוצלחים", icon: "💻" },
        { title: "טכנולוגיות מתקדמות", description: "תמיד עדכניים", icon: "🚀" },
        { title: "תמיכה מלאה", description: "אחרי השקה גם", icon: "🛠️" }
      ],
      button1Text: "בחר בנו",
      button2Text: "השווה הצעות"
    },
    contact: {
      title: "בוא נפתח יחד",
      subtitle: "הפרויקט הבא שלך מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-slate-900",
      textColor: "text-white",
      primaryColor: "text-green-400",
      secondaryColor: "text-slate-300",
      heroBackground: "bg-gradient-to-br from-slate-900 via-green-900 to-slate-900",
      emotionalBackground: "bg-slate-800",
      testimonialsBackground: "bg-slate-900",
      aboutBackground: "bg-gradient-to-r from-green-900 to-slate-900",
      galleryBackground: "bg-slate-800",
      processBackground: "bg-slate-900",
      whyUsBackground: "bg-gradient-to-br from-slate-900 to-green-900",
      contactBackground: "bg-black"
    }
  },

  {
    id: 13,
    name: "סטודיו עיצוב",
    category: "glass",
    hero: {
      badge: "עיצוב מרהיב",
      title: "הסטודיו שלך לעיצוב",
      subtitle: "יופי שנוגע בלב",
      description: "אנחנו יוצרים עיצובים שלא רק נראים טוב, אלא גם מרגישים נכון ופועלים בצורה מושלמת",
      button1Text: "ראה עבודות",
      button2Text: "התחל פרויקט",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
    },
    emotional: {
      title: "עיצוב שמעורר רגשות",
      description: "אנחנו מאמינים שעיצוב טוב צריך לא רק להיראות יפה, אלא גם לעורר רגשות ולספר סיפור",
      button1Text: "שמע את הסיפור",
      button2Text: "ספר לנו את שלך"
    },
    testimonials: {
      title: "לקוחות מספרים",
      testimonials: [
        { name: "נועה עיצוב", role: "מנהלת מותג", content: "העיצוב הכי יפה שיש לנו!", rating: 5 },
        { name: "אלון יופי", role: "בעל עסק", content: "הלקוחות שלנו מתים על העיצוב החדש", rating: 5 },
        { name: "שירה אלגנטיות", role: "מעצבת פנים", content: "רמת מקצועיות שלא ראיתי", rating: 5 }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף ללקוחות"
    },
    about: {
      title: "מי אנחנו",
      description: "סטודיו של מעצבים מנוסים שחיים ונושמים עיצוב, צבע, צורה ויופי",
      button1Text: "הסטודיו שלנו",
      button2Text: "הגישה שלנו"
    },
    gallery: {
      title: "עבודות שלנו",
      images: ["https://images.unsplash.com/photo-1500673922987-e212871fec22", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"],
      button1Text: "כל העבודות",
      button2Text: "הזמן עיצוב"
    },
    whyUs: {
      title: "למה לעצב איתנו",
      items: [
        { title: "יצירתיות מובילה", description: "רעיונות חדשים ומקוריים", icon: "🎨" },
        { title: "מקצועיות גבוהה", description: "איכות ברמה הגבוהה ביותר", icon: "⭐" },
        { title: "שירות אישי", description: "כל פרויקט הוא עולם", icon: "💝" }
      ],
      button1Text: "בחר בנו",
      button2Text: "קבל הצעת מחיר"
    },
    contact: {
      title: "בוא נעצב יחד",
      subtitle: "העיצוב הבא שלך מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-slate-50",
      textColor: "text-slate-900",
      primaryColor: "text-indigo-600",
      secondaryColor: "text-slate-600",
      heroBackground: "bg-gradient-to-br from-indigo-50 via-white to-purple-50",
      emotionalBackground: "bg-white/80",
      testimonialsBackground: "bg-slate-50/90",
      aboutBackground: "bg-gradient-to-r from-white to-indigo-50",
      galleryBackground: "bg-white/70",
      processBackground: "bg-slate-50/80",
      whyUsBackground: "bg-gradient-to-br from-purple-50 to-white",
      contactBackground: "bg-slate-900"
    }
  },

  {
    id: 14,
    name: "מרכז כושר",
    category: "geometric",
    hero: {
      badge: "בריאות ושרירים",
      title: "המרכז כושר שלך",
      subtitle: "חזק יותר מכל יום",
      description: "אנחנו כאן כדי לעזור לך להגיע ליעדים שלך, עם ציוד מתקדם ואימונים מקצועיים",
      button1Text: "התחל להתאמן",
      button2Text: "ראה חבילות",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    emotional: {
      title: "החיים שלך מתחילים כאן",
      description: "כל אימון הוא צעד קדימה לגרסה טובה יותר של עצמך - ואנחנו כאן לכל הדרך",
      button1Text: "הצטרף למסע",
      button2Text: "שמע סיפורי הצלחה"
    },
    testimonials: {
      title: "חברי המועדון מספרים",
      testimonials: [
        { name: "גיא חזק", role: "חבר מועדון", content: "השתניתי לגמרי תוך 3 חודשים!", rating: 5 },
        { name: "מיכל כושר", role: "מתאמנת", content: "האווירה הכי טובה וחיובית", rating: 5 },
        { name: "רון שריר", role: "מתאמן ותיק", content: "הציוד הכי מתקדם שיש", rating: 5 }
      ],
      button1Text: "עוד סיפורים",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "מי אנחנו",
      description: "מרכז כושר שמאמין שכל אחד יכול להיות הגרסה הטובה ביותר של עצמו",
      button1Text: "המאמנים שלנו",
      button2Text: "הפילוסופיה שלנו"
    },
    gallery: {
      title: "המתקנים שלנו",
      images: ["https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"],
      button1Text: "עוד תמונות",
      button2Text: "בוא לבקר"
    },
    whyUs: {
      title: "למה להתאמן אצלנו",
      items: [
        { title: "ציוד מתקדם", description: "הטכנולוגיה הכי חדשה", icon: "🏋️" },
        { title: "מאמנים מקצועיים", description: "הטובים בתחום", icon: "💪" },
        { title: "אווירה תומכת", description: "כולם פה למען כולם", icon: "🤝" }
      ],
      button1Text: "הצטרף עכשיו",
      button2Text: "השווה מחירים"
    },
    contact: {
      title: "בוא נתחיל להתאמן",
      subtitle: "השרירים שלך מחכים"
    },
    styles: {
      backgroundColor: "bg-gray-900",
      textColor: "text-white",
      primaryColor: "text-red-400",
      secondaryColor: "text-gray-300",
      heroBackground: "bg-gradient-to-br from-red-900 via-gray-900 to-black",
      emotionalBackground: "bg-gray-900",
      testimonialsBackground: "bg-black",
      aboutBackground: "bg-gradient-to-r from-gray-900 to-red-900",
      galleryBackground: "bg-gray-800",
      processBackground: "bg-gray-900",
      whyUsBackground: "bg-gradient-to-br from-red-900 to-black",
      contactBackground: "bg-black"
    }
  }
];
