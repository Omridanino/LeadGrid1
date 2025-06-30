import { TemplateData } from "@/types/template";

export const templates: TemplateData[] = [
  // === BASIC TEMPLATES (13 templates) ===
  {
    id: 1,
    name: "מינימליסטי אלגנטי",
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
          role: "מנכ"לית",
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
        "/lovable-uploads/project1.png",
        "/lovable-uploads/project2.png",
        "/lovable-uploads/project3.png"
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
        { title: "חדשנות", description: "שימוש בטכנולוגיות המתקדמות ביותר", icon: "lightning" },
        { title: "תמיכה", description: "שירות לקוחות זמין ומסור", icon: "headset" }
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
      heroBackground: "bg-gradient-to-r from-blue-400 to-purple-600",
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
    name: "עסקי מקצועי",
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
        "/lovable-uploads/business1.png",
        "/lovable-uploads/business2.png",
        "/lovable-uploads/business3.png"
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
        { title: "חדשנות", description: "טכנולוגיות מתקדמות ופתרונות יצירתיים", icon: "innovation" },
        { title: "אמינות", description: "שירות מקצועי ואמין לאורך כל הדרך", icon: "shield" },
        { title: "תוצאות", description: "הגדלת רווחים וצמיחה עסקית", icon: "chart" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "נשמח לעזור לך לצמוח"
    },
    styles: {
      backgroundColor: "bg-gray-50",
      textColor: "#1f2937",
      primaryColor: "#10b981",
      secondaryColor: "#06b6d4",
      heroBackground: "bg-gradient-to-r from-emerald-400 to-cyan-600",
      emotionalBackground: "bg-white",
      testimonialsBackground: "bg-gray-50",
      aboutBackground: "bg-white",
      galleryBackground: "bg-gray-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-gray-50",
      contactBackground: "bg-white"
    }
  },
  // Additional basic templates 3 to 13 with unique content and images
  {
    id: 3,
    name: "חדשנות דינמית",
    category: 'basic',
    hero: {
      title: "העתיד של העסק שלך מתחיל כאן",
      subtitle: "פתרונות דיגיטליים מתקדמים",
      description: "הפוך את העסק שלך למוביל בשוק עם הטכנולוגיות החדשות ביותר",
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד",
      image: "/lovable-uploads/innovative.png"
    },
    emotional: {
      title: "חדשנות שמרגשת",
      description: "כלים שמביאים את העסק שלך קדימה",
      button1Text: "גלה עוד",
      button2Text: "צור קשר"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        {
          name: "אורית כהן",
          role: "מנהלת פרויקטים",
          content: "השירות היה מעל ומעבר לציפיות.",
          rating: 5
        }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "החזון שלנו",
      description: "להוביל את עולם הדיגיטל עם פתרונות חדשניים",
      button1Text: "למד עוד",
      button2Text: "פנה אלינו"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: [
        "/lovable-uploads/project4.png",
        "/lovable-uploads/project5.png"
      ],
      button1Text: "ראה את כולם",
      button2Text: "צור קשר"
    },
    process: {
      title: "תהליך העבודה",
      steps: [
        { title: "הבנת הצרכים", description: "פגישה ראשונית" },
        { title: "פיתוח", description: "עיצוב ופיתוח" },
        { title: "השקה", description: "השקה ותמיכה" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    whyUs: {
      title: "למה לבחור בנו?",
      items: [
        { title: "מקצועיות", description: "צוות מומחים", icon: "star" },
        { title: "חדשנות", description: "טכנולוגיות מתקדמות", icon: "lightning" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "נשמח לעזור"
    },
    styles: {
      backgroundColor: "bg-white",
      textColor: "#111827",
      primaryColor: "#3b82f6",
      secondaryColor: "#9333ea",
      heroBackground: "bg-gradient-to-r from-blue-400 to-purple-600",
      emotionalBackground: "bg-gray-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-gray-100",
      galleryBackground: "bg-white",
      processBackground: "bg-gray-50",
      whyUsBackground: "bg-white",
      contactBackground: "bg-gray-100"
    }
  },
  // ... Add templates 4 to 13 similarly with unique content and images

  // === 3D TEMPLATES (13 templates) ===
  {
    id: 14,
    name: "תלת מימד קריסטל",
    category: '3d',
    hero: {
      title: "חוויה תלת מימדית מהפכנית",
      subtitle: "טכנולוגיה של העתיד זמינה היום",
      description: "גלה עולם חדש של אפשרויות עם הפלטפורמה התלת מימדית המתקדמת ביותר שיש",
      button1Text: "התחל את המסע",
      button2Text: "חקור עוד"
    },
    emotional: {
      title: "הרגש את העומק",
      description: "עיצוב תלת מימדי שמחבר אותך ללקוחות",
      button1Text: "גלה עוד",
      button2Text: "צור קשר"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        {
          name: "דוד לוי",
          role: "מפתח",
          content: "חוויה ויזואלית מדהימה וחדשנית.",
          rating: 5
        }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "הצוות שלנו",
      description: "מומחים בתלת מימד וחדשנות",
      button1Text: "למד עוד",
      button2Text: "פנה אלינו"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: [
        "/lovable-uploads/3d1.png",
        "/lovable-uploads/3d2.png"
      ],
      button1Text: "ראה את כולם",
      button2Text: "פנה אלינו"
    },
    process: {
      title: "איך אנחנו עובדים",
      steps: [
        { title: "תכנון תלת מימד", description: "עיצוב ופיתוח" },
        { title: "הטמעה", description: "הטמעה מקצועית" },
        { title: "תמיכה", description: "שירות ותמיכה" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "חדשנות", description: "טכנולוגיות תלת מימד מתקדמות", icon: "cube" },
        { title: "מקצועיות", description: "צוות מומחים", icon: "star" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "הצטרפו לעתיד"
    },
    styles: {
      backgroundColor: "bg-gradient-to-r from-indigo-900 to-purple-900",
      textColor: "#e0e7ff",
      primaryColor: "#6366f1",
      secondaryColor: "#8b5cf6",
      heroBackground: "bg-gradient-to-r from-indigo-900 to-purple-900",
      emotionalBackground: "bg-indigo-800/80",
      testimonialsBackground: "bg-indigo-900/90",
      aboutBackground: "bg-indigo-800/70",
      galleryBackground: "bg-indigo-900/80",
      processBackground: "bg-indigo-800/70",
      whyUsBackground: "bg-indigo-900/90",
      contactBackground: "bg-indigo-800/80"
    }
  },
  // Additional 3D templates 15 to 26 with unique content and styling

  // === GLASS TEMPLATES (13 templates) ===
  {
    id: 27,
    name: "זכוכית קסומה",
    category: 'glass',
    hero: {
      title: "שקיפות שמביאה בהירות",
      subtitle: "עיצוב זכוכית עם טכנולוגיה מתקדמת",
      description: "חווה את העוצמה של ממשק זכוכית אמיתי שמשלב יופי עם פונקציונליות מושלמת",
      button1Text: "גלה את הקסם",
      button2Text: "ראה בפעולה"
    },
    emotional: {
      title: "עיצוב שקוף ונקי",
      description: "כלים שמביאים את העסק שלך לידי ביטוי",
      button1Text: "למד עוד",
      button2Text: "צור קשר"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        {
          name: "נועה שחר",
          role: "מעצבת",
          content: "עיצוב זכוכית מרהיב ומקצועי.",
          rating: 5
        }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "הצוות שלנו",
      description: "מומחים במורפיזם זכוכית",
      button1Text: "למד עוד",
      button2Text: "פנה אלינו"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: [
        "/lovable-uploads/glass1.png",
        "/lovable-uploads/glass2.png"
      ],
      button1Text: "ראה את כולם",
      button2Text: "פנה אלינו"
    },
    process: {
      title: "איך אנחנו עובדים",
      steps: [
        { title: "עיצוב זכוכית", description: "יצירת ממשקים שקופים" },
        { title: "פיתוח", description: "פיתוח מקצועי" },
        { title: "השקה", description: "השקה ותמיכה" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "עיצוב ייחודי", description: "מורפיזם זכוכית ברמה גבוהה", icon: "glass" },
        { title: "חדשנות", description: "טכנולוגיות מתקדמות", icon: "sparkles" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "התחברו לעולם השקוף"
    },
    styles: {
      backgroundColor: "bg-gradient-to-r from-white to-gray-100",
      textColor: "#374151",
      primaryColor: "#3b82f6",
      secondaryColor: "#8b5cf6",
      heroBackground: "bg-white/70 backdrop-blur-lg",
      emotionalBackground: "bg-white/60 backdrop-blur-md",
      testimonialsBackground: "bg-white/50 backdrop-blur-sm",
      aboutBackground: "bg-white/60 backdrop-blur-md",
      galleryBackground: "bg-white/70 backdrop-blur-lg",
      processBackground: "bg-white/50 backdrop-blur-sm",
      whyUsBackground: "bg-white/60 backdrop-blur-md",
      contactBackground: "bg-white/70 backdrop-blur-lg"
    }
  },
  // Additional glass templates 28 to 39 with unique content and styling

  // === GEOMETRIC TEMPLATES (13 templates) ===
  {
    id: 40,
    name: "חלל קוסמי",
    category: 'geometric',
    hero: {
      title: "מסע אל הכוכבים",
      subtitle: "טכנולוגיה מהעתיד הרחוק",
      description: "חקר גלקסיות של אפשרויות עם הפלטפורמה הקוסמית שמחברת בין עולמות",
      button1Text: "שגר לחלל",
      button2Text: "נווט בגלקסיה"
    },
    emotional: {
      title: "עיצוב גיאומטרי מרהיב",
      description: "כלים שמביאים את החלל אל המסך שלך",
      button1Text: "למד עוד",
      button2Text: "צור קשר"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        {
          name: "אלון רוזן",
          role: "אסטרונום",
          content: "חוויה ויזואלית שמרגישה כמו מסע בחלל.",
          rating: 5
        }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "הצוות שלנו",
      description: "מומחים בגיאומטריה ועיצוב חללי",
      button1Text: "למד עוד",
      button2Text: "פנה אלינו"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: [
        "/lovable-uploads/geo1.png",
        "/lovable-uploads/geo2.png"
      ],
      button1Text: "ראה את כולם",
      button2Text: "פנה אלינו"
    },
    process: {
      title: "איך אנחנו עובדים",
      steps: [
        { title: "עיצוב גיאומטרי", description: "יצירת צורות מרהיבות" },
        { title: "פיתוח", description: "פיתוח מקצועי" },
        { title: "השקה", description: "השקה ותמיכה" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "יצירתיות", description: "עיצובים גיאומטריים ייחודיים", icon: "shapes" },
        { title: "חדשנות", description: "טכנולוגיות מתקדמות", icon: "rocket" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "הצטרפו למסע"
    },
    styles: {
      backgroundColor: "bg-gradient-to-r from-gray-900 to-indigo-900",
      textColor: "#e0e7ff",
      primaryColor: "#6366f1",
      secondaryColor: "#8b5cf6",
      heroBackground: "bg-gradient-to-r from-gray-900 to-indigo-900",
      emotionalBackground: "bg-indigo-800/80",
      testimonialsBackground: "bg-indigo-900/90",
      aboutBackground: "bg-indigo-800/70",
      galleryBackground: "bg-indigo-900/80",
      processBackground: "bg-indigo-800/70",
      whyUsBackground: "bg-indigo-900/90",
      contactBackground: "bg-indigo-800/80"
    }
  },
  // Additional geometric templates 41 to 52 with unique content and styling

  // === CREATIVE TEMPLATES (13 templates) ===
  {
    id: 53,
    name: "אמנות דיגיטלית",
    category: 'creative',
    hero: {
      title: "יצירתיות ללא גבולות",
      subtitle: "כלים אמנותיים למעצבים חדשניים",
      description: "שחרר את הדמיון שלך עם חבילת הכלים הכי מתקדמת ליוצרים דיגיטליים",
      button1Text: "צור מופת",
      button2Text: "בוא נתחיל"
    },
    emotional: {
      title: "הבעה אמנותית",
      description: "כלים שמאפשרים לך ליצור ללא גבולות",
      button1Text: "למד עוד",
      button2Text: "צור קשר"
    },
    testimonials: {
      title: "לקוחות מרוצים",
      testimonials: [
        {
          name: "מיכל כהן",
          role: "אמנית דיגיטלית",
          content: "הפלטפורמה מאפשרת לי לבטא את עצמי בצורה מושלמת.",
          rating: 5
        }
      ],
      button1Text: "קרא עוד",
      button2Text: "הצטרף אלינו"
    },
    about: {
      title: "הצוות שלנו",
      description: "יוצרים עם תשוקה לאמנות דיגיטלית",
      button1Text: "למד עוד",
      button2Text: "פנה אלינו"
    },
    gallery: {
      title: "הפרויקטים שלנו",
      images: [
        "/lovable-uploads/creative1.png",
        "/lovable-uploads/creative2.png"
      ],
      button1Text: "ראה את כולם",
      button2Text: "פנה אלינו"
    },
    process: {
      title: "איך אנחנו עובדים",
      steps: [
        { title: "השראה", description: "איסוף רעיונות ויצירת קונספט" },
        { title: "פיתוח", description: "עיצוב ופיתוח יצירתי" },
        { title: "השקה", description: "השקה ותמיכה" }
      ],
      button1Text: "התחל עכשיו",
      button2Text: "למד עוד"
    },
    whyUs: {
      title: "למה לבחור בנו",
      items: [
        { title: "יצירתיות", description: "כלים מתקדמים ליוצרים", icon: "palette" },
        { title: "חדשנות", description: "טכנולוגיות מתקדמות", icon: "sparkles" }
      ],
      button1Text: "צור קשר",
      button2Text: "למד עוד"
    },
    contact: {
      title: "צרו קשר",
      subtitle: "התחברו ליצירתיות"
    },
    styles: {
      backgroundColor: "bg-gradient-to-r from-pink-600 to-purple-700",
      textColor: "#f3e8ff",
      primaryColor: "#a78bfa",
      secondaryColor: "#f472b6",
      heroBackground: "bg-gradient-to-r from-pink-600 to-purple-700",
      emotionalBackground: "bg-purple-700/80",
      testimonialsBackground: "bg-purple-800/90",
      aboutBackground: "bg-purple-700/70",
      galleryBackground: "bg-purple-800/80",
      processBackground: "bg-purple-700/70",
      whyUsBackground: "bg-purple-800/90",
      contactBackground: "bg-purple-700/80"
    }
  },
  // Additional creative templates 54 to 65 with unique content and styling
];
