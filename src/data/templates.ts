
import { TemplateData } from "@/types/template";

export const templates: TemplateData[] = [
  // === BASIC CATEGORY (14 templates) ===
  {
    id: 1,
    name: "מינימליסטי אלגנטי",
    category: 'basic',
    hero: {
      title: "הפתרון המושלם לעסק שלך",
      subtitle: "טכנולוגיה מתקדמת שמביאה תוצאות",
      description: "גלה איך אפשר לשפר את הביצועים שלך ולהגדיל את הרווחים עם הכלים החדשניים ביותר בשוק",
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    emotional: {
      title: "הרגש את ההבדל",
      description: "כלי עבודה שמחברים אותך ללקוחות שלך ברמה האישית",
      button1Text: "גלה עוד",
      button2Text: "צור קשר"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        { name: "דנה לוי", role: "מנכ\"לית", content: "השירות שינה את העסק שלי לחלוטין!", rating: 5 },
        { name: "אורי כהן", role: "יזם", content: "פשוט ויעיל, ממליץ בחום.", rating: 4 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "מי אנחנו",
      description: "צוות מומחים שמאמין בטכנולוגיה לשיפור עסקים",
      button1Text: "למד עוד",
      button2Text: "פנה אלינו"
    },
    gallery: {
      title: "גלריית פרויקטים",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ],
      button1Text: "ראה את כולם",
      button2Text: "צור קשר"
    },
    process: {
      title: "תהליך העבודה",
      steps: [
        { title: "הבנת הצרכים", description: "פגישה ראשונית להבנת העסק והיעדים" },
        { title: "פיתוח מותאם", description: "יצירת פתרונות מותאמים אישית" },
        { title: "השקה ותמיכה", description: "השקה מקצועית ותמיכה שוטפת" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    whyUs: {
      title: "למה לבחור בנו?",
      items: [
        { title: "מקצועיות", description: "צוות מומחים עם ניסיון רב", icon: "star" },
        { title: "חדשנות", description: "שימוש בטכנולוגיות המתקדמות ביותר", icon: "zap" },
        { title: "תמיכה", description: "שירות לקוחות זמין ומסור", icon: "heart" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "אנחנו כאן בשבילכם"
    },
    styles: {
      backgroundColor: "bg-slate-50",
      textColor: "#334155",
      primaryColor: "#0f172a",
      secondaryColor: "#475569",
      heroBackground: "bg-gradient-to-br from-slate-50 via-white to-slate-100",
      emotionalBackground: "bg-gradient-to-r from-slate-100 to-gray-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-slate-50 to-white",
      galleryBackground: "bg-slate-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-slate-50",
      contactBackground: "bg-slate-100"
    }
  },
  {
    id: 2,
    name: "עסקי מודרני",
    category: 'basic',
    hero: {
      title: "מהפכת הדיגיטל מתחילה כאן",
      subtitle: "פתרונות טכנולוגיים לעסקים חכמים",
      description: "הצטרף לאלפי עסקים שכבר שדרגו את הפעילות שלהם והגדילו את ההכנסות ב-300% תוך 6 חודשים",
      button1Text: "קבל הצעה",
      button2Text: "צפה בדמו"
    },
    emotional: {
      title: "העסק שלך, בדרך להצלחה",
      description: "כלים חכמים לניהול יעיל וצמיחה מתמדת",
      button1Text: "למד עוד",
      button2Text: "פנה אלינו"
    },
    testimonials: {
      title: "מה הלקוחות אומרים",
      testimonials: [
        { name: "רונית ברק", role: "מנהלת שיווק", content: "הפלטפורמה שינתה את כללי המשחק עבורנו.", rating: 5 },
        { name: "גיא לוי", role: "יזם", content: "תמיכה מעולה ותוצאות מדהימות.", rating: 4 }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף עכשיו"
    },
    about: {
      title: "הצוות שלנו",
      description: "אנשי מקצוע עם תשוקה לטכנולוגיה וחדשנות",
      button1Text: "למד עוד",
      button2Text: "צור קשר"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      ],
      button1Text: "ראה את כולם",
      button2Text: "פנה אלינו"
    },
    process: {
      title: "איך אנחנו עובדים",
      steps: [
        { title: "ניתוח שוק", description: "מחקר מעמיק להבנת הצרכים" },
        { title: "פיתוח מותאם", description: "יצירת פתרונות מותאמים אישית" },
        { title: "השקה והדרכה", description: "הטמעה מקצועית והדרכה" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    whyUs: {
      title: "למה אנחנו הבחירה הנכונה",
      items: [
        { title: "חדשנות", description: "טכנולוגיות מתקדמות ופתרונות יצירתיים", icon: "zap" },
        { title: "אמינות", description: "שירות מקצועי ואמין לאורך כל הדרך", icon: "shield" },
        { title: "תוצאות", description: "הגדלת רווחים וצמיחה עסקית", icon: "star" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "נשמח לעזור לך לצמוח"
    },
    styles: {
      backgroundColor: "bg-blue-50",
      textColor: "#1e3a8a",
      primaryColor: "#1d4ed8",
      secondaryColor: "#3b82f6",
      heroBackground: "bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100",
      emotionalBackground: "bg-gradient-to-r from-blue-100 to-indigo-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-blue-50 to-white",
      galleryBackground: "bg-blue-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-blue-50",
      contactBackground: "bg-blue-100"
    }
  },
  {
    id: 3,
    name: "טכנולוגי מתקדם",
    category: 'basic',
    hero: {
      title: "עתיד הטכנולוגיה כאן",
      subtitle: "פתרונות AI מתקדמים",
      description: "טכנולוגיית בינה מלאכותית מתקדמת שמשנה את הדרך שבה אנחנו עובדים ומתפתחים",
      button1Text: "גלה את העתיד",
      button2Text: "בקש דמו"
    },
    emotional: {
      title: "החדשנות שתשנה הכל",
      description: "טכנולוגיה שמקדמת את העסק שלך לעידן חדש",
      button1Text: "התחל מהפכה",
      button2Text: "למד עוד"
    },
    testimonials: {
      title: "חדשנים מובילים",
      testimonials: [
        { name: "תמר לוי", role: "מנכ\"לית סטארט-אפ", content: "הטכנולוגיה הזו שינתה את כל העסק שלנו.", rating: 5 },
        { name: "רון כהן", role: "מנהל טכנולוגיות", content: "פתרון מהפכני שחסך לנו זמן ומשאבים רבים.", rating: 5 }
      ],
      button1Text: "עוד סיפורים",
      button2Text: "הצטרף למהפכה"
    },
    about: {
      title: "החזון שלנו",
      description: "מובילים את מהפכת הטכנולוגיה עם פתרונות חכמים ומתקדמים",
      button1Text: "הכר את הצוות",
      button2Text: "שותפות אסטרטגית"
    },
    gallery: {
      title: "פתרונות טכנולוגיים",
      images: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      ],
      button1Text: "כל הפתרונות",
      button2Text: "בקש התאמה"
    },
    process: {
      title: "תהליך החדשנות",
      steps: [
        { title: "זיהוי הזדמנויות", description: "מיפוי פוטנציאל השיפור" },
        { title: "פיתוח פתרון", description: "יצירת טכנולוגיה מותאמת" },
        { title: "הטמעה חכמה", description: "יישום מדורג ומבוקר" }
      ],
      button1Text: "התחל חדשנות",
      button2Text: "קבל הערכה"
    },
    whyUs: {
      title: "למה אנחנו מובילים",
      items: [
        { title: "חדשנות", description: "טכנולוגיות מתקדמות ביותר", icon: "zap" },
        { title: "מומחיות", description: "צוות מהמומחים המובילים בתחום", icon: "award" },
        { title: "תוצאות", description: "הוכחנו הצלחה אצל מאות לקוחות", icon: "star" }
      ],
      button1Text: "בחר בחדשנות",
      button2Text: "קבל פרטים"
    },
    contact: {
      title: "בואו נחדש יחד",
      subtitle: "המהפכה מתחילה כאן"
    },
    styles: {
      backgroundColor: "bg-purple-50",
      textColor: "#581c87",
      primaryColor: "#7c3aed",
      secondaryColor: "#a855f7",
      heroBackground: "bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100",
      emotionalBackground: "bg-gradient-to-r from-purple-100 to-pink-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-purple-50 to-white",
      galleryBackground: "bg-purple-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-purple-50",
      contactBackground: "bg-purple-100"
    }
  },
  {
    id: 4,
    name: "קורפורטיבי אלגנטי",
    category: 'basic',
    hero: {
      title: "פתרונות מתקדמים לעולם העסקי",
      subtitle: "מובילים את השינוי הטכנולוגי",
      description: "אנחנו מספקים פתרונות מתקדמים שמאפשרים לחברות להתמודד עם האתגרים של המאה ה-21",
      button1Text: "בואו נתחיל",
      button2Text: "קבל מידע"
    },
    emotional: {
      title: "השותף שלך להצלחה",
      description: "פתרונות מותאמים אישית לכל סוג של עסק",
      button1Text: "גלה עוד",
      button2Text: "תיעוץ חינם"
    },
    testimonials: {
      title: "המלצות לקוחות",
      testimonials: [
        { name: "מיכל כהן", role: "סמנכ\"לית טכנולוגיות", content: "השירות המקצועי ביותר שקיבלנו אי פעם.", rating: 5 },
        { name: "דוד רוזן", role: "מנהל כללי", content: "תוצאות מעבר לציפיות, מומלץ בחום!", rating: 5 }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "אודותינו",
      description: "צוות מנוסה עם מעל 15 שנות ניסיון בתחום הטכנולוגיה",
      button1Text: "הכר אותנו",
      button2Text: "יצירת קשר"
    },
    gallery: {
      title: "פרויקטים מובחרים",
      images: [
        "https://images.unsplash.com/photo-1527576539890-dfa815648363",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      ],
      button1Text: "כל הפרויקטים",
      button2Text: "פנייה לעבודה"
    },
    process: {
      title: "המתודולוגיה שלנו",
      steps: [
        { title: "אבחון וניתוח", description: "הבנה מעמיקה של הצרכים העסקיים" },
        { title: "תכנון אסטרטגי", description: "בניית תוכנית עבודה מפורטת" },
        { title: "יישום ומעקב", description: "הטמעה מלאה עם מעקב שוטף" }
      ],
      button1Text: "התחל תהליך",
      button2Text: "קבל הצעה"
    },
    whyUs: {
      title: "הייחודיות שלנו",
      items: [
        { title: "ניסיון", description: "מעל 15 שנות ניסיון מוכח בשוק", icon: "award" },
        { title: "מקצועיות", description: "צוות מומחים בכירים", icon: "star" },
        { title: "אמינות", description: "מחויבות לתוצאות ואיכות", icon: "shield" }
      ],
      button1Text: "בחר בנו",
      button2Text: "למד עוד"
    },
    contact: {
      title: "בואו נתחיל לעבוד",
      subtitle: "הצוות שלנו ממתין לכם"
    },
    styles: {
      backgroundColor: "bg-gray-50",
      textColor: "#374151",
      primaryColor: "#1f2937",
      secondaryColor: "#6b7280",
      heroBackground: "bg-gradient-to-br from-gray-50 via-white to-slate-100",
      emotionalBackground: "bg-gradient-to-r from-gray-100 to-slate-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-gray-50 to-white",
      galleryBackground: "bg-gray-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-gray-50",
      contactBackground: "bg-gray-100"
    }
  },
  {
    id: 5,
    name: "יוקרתי פרמיום",
    category: 'basic',
    hero: {
      title: "חוויה יוקרתית ייחודית",
      subtitle: "איכות פרמיום ללא פשרות",
      description: "אנחנו מתמחים במתן חוויות יוקרתיות ומותאמות אישית עם תשומת לב לכל פרט",
      button1Text: "חווה יוקרה",
      button2Text: "קבל הצעה"
    },
    emotional: {
      title: "יוקרה שמדברת בשבילכם",
      description: "כל פרט מתוכנן במיוחד כדי לספק חוויה בלתי נשכחת",
      button1Text: "גלה את היוקרה",
      button2Text: "יעוץ אישי"
    },
    testimonials: {
      title: "לקוחות VIP",
      testimonials: [
        { name: "יעל רוזנברג", role: "מנהלת עסקים", content: "רמת השירות הגבוהה ביותר שחוויתי אי פעם.", rating: 5 },
        { name: "עמית גולדברג", role: "יזם מוביל", content: "יוקרה אמיתית עם תוצאות מדהימות.", rating: 5 }
      ],
      button1Text: "עוד חוויות",
      button2Text: "הצטרף לVIP"
    },
    about: {
      title: "מסורת של מצוינות",
      description: "מעל 20 שנה של מתן שירותים יוקרתיים ברמה הגבוהה ביותר",
      button1Text: "המסורת שלנו",
      button2Text: "בקש פגישה"
    },
    gallery: {
      title: "פרויקטים יוקרתיים",
      images: [
        "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22"
      ],
      button1Text: "הפורטפוליו",
      button2Text: "פרויקט מותאם"
    },
    process: {
      title: "תהליך יוקרתי",
      steps: [
        { title: "ייעוץ אישי", description: "פגישה אישית להבנת החזון" },
        { title: "תכנון בלעדי", description: "יצירת פתרון ייחודי ומותאם" },
        { title: "ביצוע מושלם", description: "הטמעה ברמה הגבוהה ביותר" }
      ],
      button1Text: "התחל בחוויה",
      button2Text: "ייעוץ חינם"
    },
    whyUs: {
      title: "מה עושה אותנו יוקרתיים",
      items: [
        { title: "איכות", description: "רק החומרים והטכנולוגיות הטובות ביותר", icon: "award" },
        { title: "בלעדיות", description: "פתרונות ייחודיים שלא תמצאו במקום אחר", icon: "star" },
        { title: "שירות אישי", description: "יחס אישי ומקצועי לכל לקוח", icon: "heart" }
      ],
      button1Text: "בחר ביוקרה",
      button2Text: "למד עוד"
    },
    contact: {
      title: "בואו נתחיל חוויה יוקרתית",
      subtitle: "הצוות הפרמיום שלנו ממתין"
    },
    styles: {
      backgroundColor: "bg-amber-50",
      textColor: "#78350f",
      primaryColor: "#d97706",
      secondaryColor: "#f59e0b",
      heroBackground: "bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100",
      emotionalBackground: "bg-gradient-to-r from-amber-100 to-orange-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-amber-50 to-white",
      galleryBackground: "bg-amber-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-amber-50",
      contactBackground: "bg-amber-100"
    }
  },
  {
    id: 6,
    name: "סטארט-אפ דינמי",
    category: 'basic',
    hero: {
      title: "החלום הופך למציאות",
      subtitle: "סטארט-אפ שמשנה את העולם",
      description: "אנחנו בונים את העתיד עם רעיונות חדשניים וטכנולוגיה מתקדמת שמשנה את הדרך שבה אנחנו חיים",
      button1Text: "הצטרף למהפכה",
      button2Text: "גלה את החזון"
    },
    emotional: {
      title: "חלום שהופך למציאות",
      description: "כל יום אנחנו מתקרבים צעד נוסף למטרה שלנו לשנות את העולם",
      button1Text: "הצטרף אלינו",
      button2Text: "שמע את הסיפור"
    },
    testimonials: {
      title: "המאמינים הראשונים",
      testimonials: [
        { name: "נועה אברהם", role: "משקיעה מלאך", content: "הפוטנציאל כאן הוא בלתי מוגבל.", rating: 5 },
        { name: "איתי שמיר", role: "יועץ עסקי", content: "רעיון מבריק עם צוות מעולה.", rating: 5 }
      ],
      button1Text: "עוד סיפורים",
      button2Text: "הצטרף לקהילה"
    },
    about: {
      title: "הסיפור שלנו",
      description: "התחלנו בחלום פשוט - לבנות משהו שיעשה את העולם למקום טוב יותר",
      button1Text: "הסיפור המלא",
      button2Text: "הכר את הצוות"
    },
    gallery: {
      title: "המסע שלנו",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1501854140801-50d01698950b"
      ],
      button1Text: "המסע המלא",
      button2Text: "הצטרף למסע"
    },
    process: {
      title: "איך אנחנו בונים חלומות",
      steps: [
        { title: "רעיון חדשני", description: "זיהוי בעיות אמיתיות וחשיבה על פתרונות" },
        { title: "פיתוח מהיר", description: "בניית MVP ובדיקות עם משתמשים אמיתיים" },
        { title: "צמיחה מתמדת", description: "שיפור מתמיד על בסיס משוב וצרכים" }
      ],
      button1Text: "הצטרף לחלום",
      button2Text: "בואו נדבר"
    },
    whyUs: {
      title: "למה אנחנו שונים",
      items: [
        { title: "חזון", description: "חלום גדול לשנות את העולם", icon: "star" },
        { title: "מהירות", description: "מהירות פיתוח וחדשנות", icon: "zap" },
        { title: "קהילה", description: "בניית קהילה של מאמינים", icon: "heart" }
      ],
      button1Text: "הצטרף אלינו",
      button2Text: "גלה עוד"
    },
    contact: {
      title: "בואו נבנה את העתיד יחד",
      subtitle: "המהפכה מתחילה עכשיו"
    },
    styles: {
      backgroundColor: "bg-teal-50",
      textColor: "#134e4a",
      primaryColor: "#0d9488",
      secondaryColor: "#14b8a6",
      heroBackground: "bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100",
      emotionalBackground: "bg-gradient-to-r from-teal-100 to-cyan-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-teal-50 to-white",
      galleryBackground: "bg-teal-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-teal-50",
      contactBackground: "bg-teal-100"
    }
  },
  {
    id: 7,
    name: "אקולוגי ירוק",
    category: 'basic',
    hero: {
      title: "יחד נציל את הכדור הארץ",
      subtitle: "פתרונות ירוקים לעתיד בר-קיימא",
      description: "אנחנו מאמינים שכל אחד יכול לעשות את הפרק שלו למען כדור הארץ - בואו נעשה זאת יחד",
      button1Text: "הצטרף לשינוי",
      button2Text: "למד על קיימות"
    },
    emotional: {
      title: "כדור הארץ צריך אותנו",
      description: "כל צעד קטן שאנחנו עושים יכול לעשות הבדל גדול לעתיד שלנו",
      button1Text: "התחל לפעול",
      button2Text: "גלה איך"
    },
    testimonials: {
      title: "סיפורי השפעה",
      testimonials: [
        { name: "מיכל ירוק", role: "פעילת סביבתית", content: "פתרונות מעשיים שבאמת עובדים.", rating: 5 },
        { name: "דני כהן", role: "בעל עסק ירוק", content: "עזרו לי להפוך את העסק לירוק לחלוטין.", rating: 5 }
      ],
      button1Text: "עוד סיפורים",
      button2Text: "שתף את הסיפור שלך"
    },
    about: {
      title: "המשימה שלנו",
      description: "להפוך את העולם למקום ירוק וקיים יותר, צעד אחר צעד",
      button1Text: "המשימה המלאה",
      button2Text: "הצטרף למשימה"
    },
    gallery: {
      title: "פרויקטים ירוקים",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1501854140801-50d01698950b"
      ],
      button1Text: "כל הפרויקטים",
      button2Text: "הצע פרויקט"
    },
    process: {
      title: "איך אנחנו עושים שינוי",
      steps: [
        { title: "זיהוי הזדמנויות", description: "מיפוי אזורים לשיפור סביבתי" },
        { title: "פתרונות חכמים", description: "פיתוח פתרונות ידידותיים לסביבה" },
        { title: "יישום קהילתי", description: "הטמעה עם מעורבות הקהילה" }
      ],
      button1Text: "התחל שינוי",
      button2Text: "הצטרף לפעילות"
    },
    whyUs: {
      title: "למה זה חשוב",
      items: [
        { title: "עתיד", description: "בניית עתיד בר-קיימא לילדים שלנו", icon: "heart" },
        { title: "פעולה", description: "מעבר מדיבורים לפעולות אמיתיות", icon: "zap" },
        { title: "קהילה", description: "בניית קהילה שאכפת לה", icon: "star" }
      ],
      button1Text: "הצטרף לתנועה",
      button2Text: "למד עוד"
    },
    contact: {
      title: "בואו נעשה שינוי יחד",
      subtitle: "כל צעד קטן חשוב"
    },
    styles: {
      backgroundColor: "bg-green-50",
      textColor: "#14532d",
      primaryColor: "#16a34a",
      secondaryColor: "#22c55e",
      heroBackground: "bg-gradient-to-br from-green-50 via-emerald-50 to-green-100",
      emotionalBackground: "bg-gradient-to-r from-green-100 to-emerald-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-green-50 to-white",
      galleryBackground: "bg-green-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-green-50",
      contactBackground: "bg-green-100"
    }
  },
  {
    id: 8,
    name: "פיננסי מקצועי",
    category: 'basic',
    hero: {
      title: "הכסף שלך בידיים הנכונות",
      subtitle: "ייעוץ פיננסי מקצועי ואמין",
      description: "אנחנו עוזרים לך לנהל את הכסף שלך בחכמה ולהשיג את המטרות הפיננסיות שלך",
      button1Text: "תיעוץ חינם",
      button2Text: "חשב השקעה"
    },
    emotional: {
      title: "בטחון פיננסי זה לא חלום",
      description: "עם הכלים הנכונים והייעוץ המקצועי, אפשר להגיע לכל מטרה פיננסית",
      button1Text: "התחל לחסוך",
      button2Text: "בדוק מצב"
    },
    testimonials: {
      title: "לקוחות מרוויחים",
      testimonials: [
        { name: "אבי לוי", role: "בעל עסק", content: "הצלחתי להכפיל את ההשקעות שלי.", rating: 5 },
        { name: "רחל כהן", role: "עובדת היי-טק", content: "סוף סוף יש לי תוכנית פיננסית.", rating: 5 }
      ],
      button1Text: "עוד סיפורי הצלחה",
      button2Text: "התחל גם אתה"
    },
    about: {
      title: "המומחים שלך",
      description: "צוות של יועצים פיננסיים מוסמכים עם ניסיון של עשרות שנים",
      button1Text: "הכר את הצוות",
      button2Text: "קבע פגישה"
    },
    gallery: {
      title: "שירותים פיננסיים",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      ],
      button1Text: "כל השירותים",
      button2Text: "בחר שירות"
    },
    process: {
      title: "תהליך הייעוץ",
      steps: [
        { title: "הערכת מצב", description: "ניתוח מפורט של המצב הפיננסי הנוכחי" },
        { title: "תכנון אסטרטגי", description: "בניית תוכנית פיננסית מותאמת אישית" },
        { title: "יישום ומעקב", description: "הטמעת התוכנית עם מעקב שוטף" }
      ],
      button1Text: "התחל תהליך",
      button2Text: "ייעוץ ראשוני"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "ניסיון", description: "מעל 25 שנות ניסיון בשוק ההון", icon: "award" },
        { title: "שקיפות", description: "עבודה שקופה וללא עמלות נסתרות", icon: "shield" },
        { title: "תוצאות", description: "מאות לקוחות שהשיגו את המטרות שלהם", icon: "star" }
      ],
      button1Text: "בחר בהצלחה",
      button2Text: "קבל פרטים"
    },
    contact: {
      title: "בואו נתכנן את העתיד הפיננסי שלך",
      subtitle: "הייעוץ הראשון חינם"
    },
    styles: {
      backgroundColor: "bg-indigo-50",
      textColor: "#3730a3",
      primaryColor: "#4f46e5",
      secondaryColor: "#6366f1",
      heroBackground: "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100",
      emotionalBackground: "bg-gradient-to-r from-indigo-100 to-purple-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-indigo-50 to-white",
      galleryBackground: "bg-indigo-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-indigo-50",
      contactBackground: "bg-indigo-100"
    }
  },
  {
    id: 9,
    name: "רפואי מתקדם",
    category: 'basic',
    hero: {
      title: "הבריאות שלך בראש סדר העדיפויות",
      subtitle: "רפואה מתקדמת עם נגיעה אנושית",
      description: "אנחנו מחברים בין הטכנולוגיה הרפואית המתקדמת ביותר לטיפול אישי ומקצועי",
      button1Text: "קבע תור",
      button2Text: "שירותים רפואיים"
    },
    emotional: {
      title: "כי הבריאות שלך חשובה לנו",
      description: "כל מטופל הוא עולם שלם - אנחנו כאן כדי לדאוג לבריאות שלך בכל רגע",
      button1Text: "למד עוד",
      button2Text: "יעוץ רפואי"
    },
    testimonials: {
      title: "מטופלים מרוצים",
      testimonials: [
        { name: "שרה לוי", role: "מטופלת", content: "הטיפול הטוב ביותר שקיבלתי אי פעם.", rating: 5 },
        { name: "משה כהן", role: "מטופל", content: "צוות מקצועי ואכפתי באמת.", rating: 5 }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף למטופלים"
    },
    about: {
      title: "המרכז הרפואי שלנו",
      description: "צוות רפואי מוביל עם ציוד מתקדם ברמה הגבוהה ביותר",
      button1Text: "הכר את הצוות",
      button2Text: "סיור במרכז"
    },
    gallery: {
      title: "מתקנים מתקדמים",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ],
      button1Text: "כל המתקנים",
      button2Text: "קבע ביקור"
    },
    process: {
      title: "תהליך הטיפול",
      steps: [
        { title: "אבחון מקיף", description: "בדיקות מקיפות עם ציוד מתקדם" },
        { title: "תוכנית טיפול", description: "בניית תוכנית טיפול מותאמת אישית" },
        { title: "מעקב רפואי", description: "מעקב שוטף והתאמת הטיפול" }
      ],
      button1Text: "קבע תור",
      button2Text: "ייעוץ רפואי"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "מומחיות", description: "רופאים מובילים עם התמחויות נדירות", icon: "award" },
        { title: "טכנולוגיה", description: "ציוד רפואי מתקדם ביותר", icon: "zap" },
        { title: "אכפתיות", description: "יחס אישי ומקצועי לכל מטופל", icon: "heart" }
      ],
      button1Text: "בחר בבריאות",
      button2Text: "למד עוד"
    },
    contact: {
      title: "הבריאות שלך מתחילה כאן",
      subtitle: "אנחנו כאן בשבילך"
    },
    styles: {
      backgroundColor: "bg-cyan-50",
      textColor: "#155e75",
      primaryColor: "#0891b2",
      secondaryColor: "#06b6d4",
      heroBackground: "bg-gradient-to-br from-cyan-50 via-sky-50 to-cyan-100",
      emotionalBackground: "bg-gradient-to-r from-cyan-100 to-sky-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-cyan-50 to-white",
      galleryBackground: "bg-cyan-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-cyan-50",
      contactBackground: "bg-cyan-100"
    }
  },
  {
    id: 10,
    name: "חינוכי מעצים",
    category: 'basic',
    hero: {
      title: "החינוך שמשנה חיים",
      subtitle: "למידה מעצימה ומותאמת אישית",
      description: "אנחנו מאמינים שכל אדם יכול ללמוד ולהצליח - בואו נגלה יחד את הפוטנציאל שלכם",
      button1Text: "התחל ללמוד",
      button2Text: "גלה קורסים"
    },
    emotional: {
      title: "למידה שמשנה הכל",
      description: "כל ידע חדש שאתם רוכשים פותח בפניכם אפשרויות חדשות בחיים",
      button1Text: "התחל מסע",
      button2Text: "גלה עוד"
    },
    testimonials: {
      title: "סיפורי הצלחה",
      testimonials: [
        { name: "נועה אברהם", role: "בוגרת קורס", content: "שינה לי את הקריירה והחיים.", rating: 5 },
        { name: "יוסי לוי", role: "תלמיד מבוגר", content: "לא האמנתי שאוכל ללמוד בגיל שלי.", rating: 5 }
      ],
      button1Text: "עוד סיפורים",
      button2Text: "הצטרף ללומדים"
    },
    about: {
      title: "הפילוסופיה שלנו",
      description: "למידה מעצימה שמתאימה לכל אדם בכל גיל ובכל מצב",
      button1Text: "הגישה שלנו",
      button2Text: "הכר את המרצים"
    },
    gallery: {
      title: "סביבות למידה",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      ],
      button1Text: "כל הסביבות",
      button2Text: "בקר אותנו"
    },
    process: {
      title: "תהליך הלמידה",
      steps: [
        { title: "הערכת יכולות", description: "מיפוי נקודות החוזק והצרכים" },
        { title: "תוכנית אישית", description: "בניית מסלול למידה מותאם" },
        { title: "למידה והתפתחות", description: "למידה מתמדת עם ליווי אישי" }
      ],
      button1Text: "התחל ללמוד",
      button2Text: "ייעוץ חינוכי"
    },
    whyUs: {
      title: "למה ללמוד אצלנו",
      items: [
        { title: "התאמה אישית", description: "כל תוכנית למידה מותאמת אישית", icon: "heart" },
        { title: "מרצים מובילים", description: "המרצים הטובים ביותר בתחום", icon: "star" },
        { title: "תוצאות מוכחות", description: "אלפי בוגרים מוצלחים", icon: "award" }
      ],
      button1Text: "הצטרף ללמידה",
      button2Text: "גלה עוד"
    },
    contact: {
      title: "בואו נתחיל מסע למידה",
      subtitle: "המסע שלכם מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-orange-50",
      textColor: "#c2410c",
      primaryColor: "#ea580c",
      secondaryColor: "#fb923c",
      heroBackground: "bg-gradient-to-br from-orange-50 via-red-50 to-orange-100",
      emotionalBackground: "bg-gradient-to-r from-orange-100 to-red-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-orange-50 to-white",
      galleryBackground: "bg-orange-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-orange-50",
      contactBackground: "bg-orange-100"
    }
  },
  {
    id: 11,
    name: "מזון גורמה",
    category: 'basic',
    hero: {
      title: "חוויה קולינרית בלתי נשכחת",
      subtitle: "מזון גורמה ברמה הגבוהה ביותר",
      description: "אנחנו מביאים לכם את החוויה הקולינרית המושלמת עם שפים מובילים וחומרי גלם מעולים",
      button1Text: "הזמן עכשיו",
      button2Text: "ראה תפריט"
    },
    emotional: {
      title: "כל ביס הוא חוויה",
      description: "אנחנו יוצרים זיכרונות דרך החושים והטעמים המיוחדים ביותר",
      button1Text: "טעם את ההבדל",
      button2Text: "חוויה מיוחדת"
    },
    testimonials: {
      title: "אוהבי אוכל אמיתיים",
      testimonials: [
        { name: "יעל רוזן", role: "בלוגרית אוכל", content: "החוויה הקולינרית הטובה ביותר בארץ.", rating: 5 },
        { name: "דני גולד", role: "שף מוכר", content: "רמה של אוכל שאני רואה רק במסעדות בחול.", rating: 5 }
      ],
      button1Text: "עוד ביקורות",
      button2Text: "הצטרף לחוויה"
    },
    about: {
      title: "הפילוסופיה הקולינרית שלנו",
      description: "אנחנו מאמינים שאוכל טוב הוא אמנות שמחברת בין אנשים",
      button1Text: "הכר את השפים",
      button2Text: "הסיפור שלנו"
    },
    gallery: {
      title: "גלריית המנות",
      images: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      ],
      button1Text: "כל המנות",
      button2Text: "הזמן מנה"
    },
    process: {
      title: "תהליך היצירה",
      steps: [
        { title: "בחירת חומרי גלם", description: "רק החומרים הטובים והטריים ביותר" },
        { title: "יצירה קולינרית", description: "שפים מובילים יוצרים את המנות" },
        { title: "הגשה מושלמת", description: "כל פרט בהגשה מושלם עד הסוף" }
      ],
      button1Text: "הזמן עכשיו",
      button2Text: "חוויית שף"
    },
    whyUs: {
      title: "מה עושה אותנו מיוחדים",
      items: [
        { title: "איכות", description: "רק חומרי גלם מהמעלה הראשונה", icon: "star" },
        { title: "יצירתיות", description: "מנות יצירתיות ומקוריות", icon: "heart" },
        { title: "חוויה", description: "כל ארוחה היא חוויה בלתי נשכחת", icon: "award" }
      ],
      button1Text: "טעם אותנו",
      button2Text: "הזמן שולחן"
    },
    contact: {
      title: "בואו ניצור חוויה קולינרית",
      subtitle: "השולחן שלכם מחכה"
    },
    styles: {
      backgroundColor: "bg-red-50",
      textColor: "#991b1b",
      primaryColor: "#dc2626",
      secondaryColor: "#ef4444",
      heroBackground: "bg-gradient-to-br from-red-50 via-pink-50 to-red-100",
      emotionalBackground: "bg-gradient-to-r from-red-100 to-pink-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-red-50 to-white",
      galleryBackground: "bg-red-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-red-50",
      contactBackground: "bg-red-100"
    }
  },
  {
    id: 12,
    name: "ספורט וכושר",
    category: 'basic',
    hero: {
      title: "הגוף שלך, החוזק שלך",
      subtitle: "אימונים מקצועיים לכל רמה",
      description: "אנחנו כאן כדי לעזור לכם להגיע לכושר הטוב ביותר שלכם עם אימונים מותאמים אישית",
      button1Text: "התחל להתאמן",
      button2Text: "תוכניות אימון"
    },
    emotional: {
      title: "כל אימון הוא צעד קדימה",
      description: "כל יום שאתם מתאמנים אתם הופכים לגרסה חזקה יותר של עצמכם",
      button1Text: "הצטרף אלינו",
      button2Text: "בואו נתחיל"
    },
    testimonials: {
      title: "סיפורי הצלחה",
      testimonials: [
        { name: "רון אברהם", role: "מתאמן", content: "הגעתי למטרות שחלמתי עליהן.", rating: 5 },
        { name: "טל כהן", role: "ספורטאית", content: "המאמנים הטובים ביותר שפגשתי.", rating: 5 }
      ],
      button1Text: "עוד סיפורים",
      button2Text: "התחל את המסע"
    },
    about: {
      title: "המאמנים שלנו",
      description: "צוות מאמנים מוסמכים עם ניסיון רב בהכשרת ספורטאים",
      button1Text: "הכר את הצוות",
      button2Text: "בחר מאמן"
    },
    gallery: {
      title: "מתקני האימון",
      images: [
        "https://images.unsplash.com/photo-1527576539890-dfa815648363",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      ],
      button1Text: "כל המתקנים",
      button2Text: "סיור במועדון"
    },
    process: {
      title: "תהליך האימון",
      steps: [
        { title: "הערכת כושר", description: "מדידה מקיפה של הכושר הנוכחי" },
        { title: "תוכנית אישית", description: "בניית תוכנית אימון מותאמת" },
        { title: "אימון ומעקב", description: "אימונים עם מעקב התקדמות" }
      ],
      button1Text: "התחל אימון",
      button2Text: "הערכת כושר"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "מקצועיות", description: "מאמנים מוסמכים ומנוסים", icon: "award" },
        { title: "ציוד מתקדם", description: "מתקנים וציוד ברמה הגבוהה ביותר", icon: "zap" },
        { title: "תוצאות", description: "מאות מתאמנים שהגיעו למטרותיהם", icon: "star" }
      ],
      button1Text: "הצטרף אלינו",
      button2Text: "למד עוד"
    },
    contact: {
      title: "בואו נתחיל את המסע לכושר",
      subtitle: "הגוף החזק שלכם מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-yellow-50",
      textColor: "#a16207",
      primaryColor: "#d97706",
      secondaryColor: "#f59e0b",
      heroBackground: "bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100",
      emotionalBackground: "bg-gradient-to-r from-yellow-100 to-orange-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-yellow-50 to-white",
      galleryBackground: "bg-yellow-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-yellow-50",
      contactBackground: "bg-yellow-100"
    }
  },
  {
    id: 13,
    name: "נדלן יוקרתי",
    category: 'basic',
    hero: {
      title: "הבית של החלומות שלכם",
      subtitle: "נדלן יוקרתי ברמה הגבוהה ביותר",
      description: "אנחנו מוצאים לכם את הנכס המושלם - בין אם זה בית חלומות או השקעה חכמה",
      button1Text: "מצא נכס",
      button2Text: "יעוץ נדלן"
    },
    emotional: {
      title: "בית זה לא רק מקום, זה הרגש",
      description: "אנחנו מבינים שמחפשים בית הוא לחפש את המקום שבו תרגישו הכי טוב",
      button1Text: "מצא את הבית",
      button2Text: "בואו נדבר"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        { name: "משפחת לוי", role: "קונים", content: "מצאו לנו את הבית המושלם בדיוק לפי הבקשה שלנו.", rating: 5 },
        { name: "יורם כהן", role: "משקיע", content: "עזרו לי לעשות השקעה מצוינת.", rating: 5 }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף ללקוחות"
    },
    about: {
      title: "המומחים שלכם",
      description: "צוות מומחי נדלן עם ניסיון עמוק בשוק הישראלי",
      button1Text: "הכר את הצוות",
      button2Text: "ייעוץ מקצועי"
    },
    gallery: {
      title: "נכסים מובחרים",
      images: [
        "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
        "https://images.unsplash.com/photo-1500673922987-e212871fec22"
      ],
      button1Text: "כל הנכסים",
      button2Text: "בקר בנכס"
    },
    process: {
      title: "תהליך מציאת הנכס",
      steps: [
        { title: "הבנת הצרכים", description: "שיחה מפורטת להבנת הדרישות" },
        { title: "חיפוש מותאם", description: "מציאת נכסים שמתאימים בדיוק" },
        { title: "ליווי עד הסגירה", description: "ליווי מלא עד חתימת החוזה" }
      ],
      button1Text: "התחל חיפוש",
      button2Text: "ייעוץ ראשוני"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "ניסיון", description: "מעל 20 שנות ניסיון בשוק הנדלן", icon: "award" },
        { title: "קשרים", description: "רשת קשרים נרחבת בתחום", icon: "star" },
        { title: "שירות אישי", description: "ליווי אישי לאורך כל התהליך", icon: "heart" }
      ],
      button1Text: "בחר בנו",
      button2Text: "למד עוד"
    },
    contact: {
      title: "בואו נמצא לכם את הבית המושלם",
      subtitle: "הבית של החלומות מתחיל כאן"
    },
    styles: {
      backgroundColor: "bg-pink-50",
      textColor: "#be185d",
      primaryColor: "#e11d48",
      secondaryColor: "#f43f5e",
      heroBackground: "bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100",
      emotionalBackground: "bg-gradient-to-r from-pink-100 to-rose-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-pink-50 to-white",
      galleryBackground: "bg-pink-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-pink-50",
      contactBackground: "bg-pink-100"
    }
  },
  {
    id: 14,
    name: "יוקרה פרמיום",
    category: 'basic',
    hero: {
      title: "יוקרה ללא גבולות",
      subtitle: "חוויה פרמיום ברמה שלא הכרתם",
      description: "אנחנו מגדירים מחדש את המושג יוקרה עם שירות מותאם אישית ותשומת לב לכל פרט קטן",
      button1Text: "חוויה יוקרתית",
      button2Text: "עולם הפרמיום"
    },
    emotional: {
      title: "כי מגיע לכם הטוב ביותר",
      description: "אנחנו מאמינים שכל לקוח ראוי לחוויה מושלמת שתישאר איתו לנצח",
      button1Text: "הזמן חוויה",
      button2Text: "התחל את המסע"
    },
    testimonials: {
      title: "חוויות יוקרתיות",
      testimonials: [
        { name: "אליעזר גולד", role: "לקוח VIP", content: "השירות הכי יוקרתי והמקצועי שקיבלתי אי פעם.", rating: 5 },
        { name: "רבקה דיימונד", role: "לקוחה פרמיום", content: "כל פרט מושלם, חוויה שלא תשכח.", rating: 5 }
      ],
      button1Text: "חוויות נוספות",
      button2Text: "הזמן עכשיו"
    },
    about: {
      title: "מותג היוקרה שלנו",
      description: "מותג יוקרה שמתמחה בשירות פרמיום ללקוחות הבורחים מהרגיל",
      button1Text: "המותג שלנו",
      button2Text: "עולם היוקרה"
    },
    gallery: {
      title: "יוקרה בכל פרט",
      images: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1501854140801-50d01698950b"
      ],
      button1Text: "גלריה מלאה",
      button2Text: "תאם פגישה"
    },
    process: {
      title: "תהליך פרמיום",
      steps: [
        { title: "ייעוץ יוקרתי", description: "פגישה אישית בסביבה יוקרתית" },
        { title: "תכנון מותאם", description: "יצירת חוויה ייחודית לכל לקוח" },
        { title: "ביצוע מושלם", description: "השקעה בכל פרט עד לשלמות" }
      ],
      button1Text: "התחל מסע",
      button2Text: "הזמן ייעוץ"
    },
    whyUs: {
      title: "המעלות היוקרתיות שלנו",
      items: [
        { title: "בלעדיות", description: "שירותים בלעדיים שלא תמצאו בשום מקום", icon: "star" },
        { title: "איכות פרמיום", description: "רק החומרים והשירותים הטובים ביותר", icon: "award" },
        { title: "יחס אישי", description: "כל לקוח הוא עולם שלם עבורנו", icon: "heart" }
      ],
      button1Text: "בחר יוקרה",
      button2Text: "חוויה מלאה"
    },
    contact: {
      title: "יוקרה מתחילה כאן",
      subtitle: "הצוות הפרמיום שלנו מחכה לכם"
    },
    styles: {
      backgroundColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      textColor: "#6b21a8",
      primaryColor: "#9333ea",
      secondaryColor: "#c084fc",
      heroBackground: "bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200",
      emotionalBackground: "bg-gradient-to-r from-purple-200 to-pink-100",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gradient-to-l from-purple-100 to-white",
      galleryBackground: "bg-purple-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gradient-to-r from-white to-purple-100",
      contactBackground: "bg-gradient-to-br from-purple-200 to-pink-200"
    }
  }

  // Continue with 3D, Glass, Cosmic, and Creative categories...
  // Each category will have 14 templates with unique designs and effects
];
