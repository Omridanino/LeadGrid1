
import { TemplateData } from "@/types/template";

export const templates: TemplateData[] = [
  // === BASIC CATEGORY (13 templates) ===
  {
    id: 1,
    name: "מינימליסטי קלאסי",
    category: 'basic',
    hero: {
      title: "הפתרון המושלם לעסק שלך",
      subtitle: "טכנולוגיה מתקדמת שמביאה תוצאות",
      description: "גלה איך אפשר לשפר את הביצועים שלך ולהגדיל את הרווחים עם הכלים החדשניים ביותר בשוק",
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד",
      image: "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
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
        {
          name: "דנה לוי",
          role: "מנכ\"לית",
          content: "השירות שינה את העסק שלי לחלוטין!",
          rating: 5
        },
        {
          name: "אורי כהן",
          role: "יזם",
          content: "פשוט ויעיל, ממליץ בחום.",
          rating: 4
        }
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
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png",
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png"
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
      backgroundColor: "bg-white",
      textColor: "#111827",
      primaryColor: "#3b82f6",
      secondaryColor: "#9333ea",
      heroBackground: "bg-gradient-to-br from-blue-50 to-indigo-100",
      emotionalBackground: "bg-gray-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gray-100",
      galleryBackground: "bg-white",
      processBackground: "bg-gray-50",
      whyUsBackground: "bg-white",
      contactBackground: "bg-gray-100"
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
      button2Text: "צפה בדמו",
      image: "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
        {
          name: "רונית ברק",
          role: "מנהלת שיווק",
          content: "הפלטפורמה שינתה את כללי המשחק עבורנו.",
          rating: 5
        },
        {
          name: "גיא לוי",
          role: "יזם",
          content: "תמיכה מעולה ותוצאות מדהימות.",
          rating: 4
        }
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
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png",
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
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
      backgroundColor: "bg-slate-50",
      textColor: "#1f2937",
      primaryColor: "#10b981",
      secondaryColor: "#06b6d4",
      heroBackground: "bg-gradient-to-br from-emerald-50 to-cyan-100",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-slate-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-slate-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-slate-50",
      contactBackground: "bg-white"
    }
  },
  {
    id: 3,
    name: "קורפורטיבי אלגנטי",
    category: 'basic',
    hero: {
      title: "פתרונות מתקדמים לעולם העסקי",
      subtitle: "מובילים את השינוי הטכנולוגי",
      description: "אנחנו מספקים פתרונות מתקדמים שמאפשרים לחברות להתמודד עם האתגרים של המאה ה-21",
      button1Text: "בואו נתחיל",
      button2Text: "קבל מידע",
      image: "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png"
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
        {
          name: "מיכל כהן",
          role: "סמנכ\"לית טכנולוגיות",
          content: "השירות המקצועי ביותר שקיבלנו אי פעם.",
          rating: 5
        },
        {
          name: "דוד רוזן",
          role: "מנהל כללי",
          content: "תוצאות מעבר לציפיות, מומלץ בחום!",
          rating: 5
        }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "אודותינו",
      description: "צוות מנוסה עם מעל 15 שנות ניסיון בתחום הטכנולوגיה",
      button1Text: "הכר אותנו",
      button2Text: "יצירת קשר"
    },
    gallery: {
      title: "פרויקטים מובחרים",
      images: [
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
      heroBackground: "bg-gradient-to-br from-gray-100 to-slate-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-gray-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-gray-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gray-50",
      contactBackground: "bg-white"
    }
  },
  {
    id: 4,
    name: "טכנולוגי חדשני",
    category: 'basic',
    hero: {
      title: "עתיד הטכנולוגיה כאן",
      subtitle: "פתרונות AI מתקדמים",
      description: "טכנולוגיית בינה מלאכותית מתקדמת שמשנה את הדרך שבה אנחנו עובדים ומתפתחים",
      button1Text: "גלה את העתיד",
      button2Text: "בקש דמו",
      image: "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png"
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
        {
          name: "תמר לוי",
          role: "מנכ\"לית סטארט-אפ",
          content: "הטכנולוגיה הזו שינתה את כל העסק שלנו.",
          rating: 5
        },
        {
          name: "רון כהן",
          role: "מנהל טכנולוגיות",
          content: "פתרון מהפכני שחסך לנו זמן ומשאבים רבים.",
          rating: 5
        }
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
        "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
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
      backgroundColor: "bg-slate-900",
      textColor: "#f1f5f9",
      primaryColor: "#3b82f6",
      secondaryColor: "#8b5cf6",
      heroBackground: "bg-gradient-to-br from-slate-800 to-blue-900",
      emotionalBackground: "bg-slate-800",
      testimonialsBackground: "bg-slate-900",
      aboutBackground: "bg-slate-800",
      galleryBackground: "bg-slate-900",
      processBackground: "bg-slate-800",
      whyUsBackground: "bg-slate-900",
      contactBackground: "bg-slate-800"
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
      button2Text: "קבל הצעה",
      image: "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
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
        {
          name: "יעל רוזנברג",
          role: "מנהלת עסקים",
          content: "רמת השירות הגבוהה ביותר שחוויתי אי פעם.",
          rating: 5
        },
        {
          name: "עמית גולדברג",
          role: "יזם מוביל",
          content: "יוקרה אמיתית עם תוצאות מדהימות.",
          rating: 5
        }
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
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
      heroBackground: "bg-gradient-to-br from-amber-100 to-yellow-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-amber-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-amber-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-amber-50",
      contactBackground: "bg-white"
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
      button2Text: "גלה את החזון",
      image: "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
        {
          name: "נועה אברהם",
          role: "משקיעה מלאך",
          content: "הפוטנציאל כאן הוא בלתי מוגבל.",
          rating: 5
        },
        {
          name: "איתי שמיר",
          role: "יועץ עסקי",
          content: "רעיון מבריק עם צוות מעולה.",
          rating: 5
        }
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
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png",
        "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
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
      backgroundColor: "bg-purple-50",
      textColor: "#581c87",
      primaryColor: "#7c3aed",
      secondaryColor: "#a855f7",
      heroBackground: "bg-gradient-to-br from-purple-100 to-pink-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-purple-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-purple-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-purple-50",
      contactBackground: "bg-white"
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
      button2Text: "למד על קיימות",
      image: "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png"
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
        {
          name: "מיכל ירוק",
          role: "פעילת סביבתית",
          content: "פתרונות מעשיים שבאמת עובדים.",
          rating: 5
        },
        {
          name: "דני כהן",
          role: "בעל עסק ירוק",
          content: "עזרו לי להפוך את העסק לירוק לחלוטין.",
          rating: 5
        }
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
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
      heroBackground: "bg-gradient-to-br from-green-100 to-emerald-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-green-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-green-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-green-50",
      contactBackground: "bg-white"
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
      button2Text: "חשב השקעה",
      image: "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png"
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
        {
          name: "אבי לוי",
          role: "בעל עסק",
          content: "הצלחתי להכפיל את ההשקעות שלי.",
          rating: 5
        },
        {
          name: "רחל כהן",
          role: "עובדת היי-טק",
          content: "סוף סוף יש לי תוכנית פיננסית.",
          rating: 5
        }
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
        "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
      backgroundColor: "bg-blue-50",
      textColor: "#1e3a8a",
      primaryColor: "#2563eb",
      secondaryColor: "#3b82f6",
      heroBackground: "bg-gradient-to-br from-blue-100 to-indigo-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-blue-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-blue-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-blue-50",
      contactBackground: "bg-white"
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
      button2Text: "שירותים רפואיים",
      image: "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
    },
    emotional: {
      title: "כי הבריאות שלך חשובה לנו",
      description: "כל מטופל הוא עולם שלם - אנחנו כאן כדי לדאוג לבriאות שלך בכל רגע",
      button1Text: "למד עוד",
      button2Text: "יעוץ רפואי"
    },
    testimonials: {
      title: "מטופלים מרוצים",
      testimonials: [
        {
          name: "שרה לוי",
          role: "מטופלת",
          content: "הטיפול הטוב ביותר שקיבלתי אי פעם.",
          rating: 5
        },
        {
          name: "משה כהן",
          role: "מטופל",
          content: "צוות מקצועי ואכפתי באמת.",
          rating: 5
        }
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
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png",
        "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png"
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
        { title: "טכנولוגיה", description: "ציוד רפואי מתקדם ביותר", icon: "zap" },
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
      backgroundColor: "bg-teal-50",
      textColor: "#134e4a",
      primaryColor: "#0d9488",
      secondaryColor: "#14b8a6",
      heroBackground: "bg-gradient-to-br from-teal-100 to-cyan-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-teal-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-teal-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-teal-50",
      contactBackground: "bg-white"
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
      button2Text: "גלה קורסים",
      image: "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
        {
          name: "נועה אברהם",
          role: "בוגרת קורס",
          content: "שינה לי את הקריירה והחיים.",
          rating: 5
        },
        {
          name: "יוסי לוי",
          role: "תלמיד מבוגר",
          content: "לא האמנתי שאוכל ללמוד בגיל שלי.",
          rating: 5
        }
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
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png",
        "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png",
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png"
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
      heroBackground: "bg-gradient-to-br from-orange-100 to-red-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-orange-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-orange-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-orange-50",
      contactBackground: "bg-white"
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
      button2Text: "ראה תפריט",
      image: "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png"
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
        {
          name: "יעל רוזן",
          role: "בלוגרית אוכל",
          content: "החוויה הקולינרית הטובה ביותר בארץ.",
          rating: 5
        },
        {
          name: "דני גולד",
          role: "שף מוכר",
          content: "רמה של אוכל שאני רואה רק במסעדות בחו\"ל.",
          rating: 5
        }
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
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
      heroBackground: "bg-gradient-to-br from-red-100 to-pink-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-red-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-red-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-red-50",
      contactBackground: "bg-white"
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
      button2Text: "תוכניות אימון",
      image: "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png"
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
        {
          name: "רון אברהם",
          role: "מתאמן",
          content: "הגעתי למטרות שחלמתי עליהן.",
          rating: 5
        },
        {
          name: "טל כהן",
          role: "ספורטאית",
          content: "המאמנים הטובים ביותר שפגשתי.",
          rating: 5
        }
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
        "/lovable-uploads/ec6b8374-3932-48ac-ac2d-703d465caf06.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png",
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
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
      heroBackground: "bg-gradient-to-br from-yellow-100 to-orange-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-yellow-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-yellow-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-yellow-50",
      contactBackground: "bg-white"
    }
  },
  {
    id: 13,
    name: "נדל\"ן יוקרתי",
    category: 'basic',
    hero: {
      title: "הבית של החלומות שלכם",
      subtitle: "נדל\"ן יוקרתי ברמה הגבוהה ביותר",
      description: "אנחנו מוצאים לכם את הנכס המושלם - בין אם זה בית חלומות או השקעה חכמה",
      button1Text: "מצא נכס",
      button2Text: "יעוץ נדל\"ן",
      image: "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png"
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
        {
          name: "משפחת לוי",
          role: "קונים",
          content: "מצאו לנו את הבית המושלם בדיוק לפי הבקשה שלנו.",
          rating: 5
        },
        {
          name: "יורם כהן",
          role: "משקיע",
          content: "עזרו לי לעשות השקעה מצוינת.",
          rating: 5
        }
      ],
      button1Text: "עוד המלצות",
      button2Text: "הצטרף ללקוחות"
    },
    about: {
      title: "המומחים שלכם",
      description: "צוות מומחי נדל\"ן עם ניסיון עמוק בשוק הישראלי",
      button1Text: "הכר את הצוות",
      button2Text: "ייעוץ מקצועי"
    },
    gallery: {
      title: "נכסים מובחרים",
      images: [
        "/lovable-uploads/01342860-952c-4dea-9951-95169ffa74d3.png",
        "/lovable-uploads/c593ddc8-57d2-4134-9169-3c4bd34946c1.png",
        "/lovable-uploads/be5c31f2-ee31-49ec-a0bc-1182066b9cca.png"
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
        { title: "ניסיון", description: "מעל 20 שנות ניסיון בשוק הנדל\"ן", icon: "award" },
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
      backgroundColor: "bg-indigo-50",
      textColor: "#3730a3",
      primaryColor: "#4f46e5",
      secondaryColor: "#6366f1",
      heroBackground: "bg-gradient-to-br from-indigo-100 to-purple-200",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-indigo-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-indigo-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-indigo-50",
      contactBackground: "bg-white"
    }
  }
];
