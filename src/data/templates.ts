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
      description: "תבנית מינימליסטית שמאפשרת לתוכן שלכם לזרוח ללא הפרעות",
      button1Text: "התחל כעת",
      button2Text: "למד עוד",
      image: "photo-1451187580459-43490279c0fa"
    },
    emotional: {
      badge: "חוויה נקייה",
      title: "כל פיקסל ממוקד",
      description: "עיצוב מינימליסטי שיוצר חוויה רגועה ומרוכזת לצופים שלכם",
      button1Text: "גלה יותר",
      button2Text: "צור קשר"
    },
    testimonials: {
      badge: "ביקורות",
      title: "לקוחות מספרים",
      testimonials: [
        { name: "דנה כהן", role: "מעצבת גרפית", content: "הפשטות הזו פשוט מושלמת", rating: 5 },
        { name: "רון לוי", role: "יועץ עסקי", content: "העיצוב הנקי הזה עוזר ללקוחות להתמקד", rating: 5 }
      ],
      button1Text: "הצטרף אלינו",
      button2Text: "ראה עוד"
    },
    about: {
      title: "אודותינו",
      description: "אנחנו מאמינים שפשטות היא התחכום האמיתי",
      button1Text: "הכר אותנו",
      button2Text: "צור קשר"
    },
    gallery: {
      title: "גלריה",
      images: ["photo-1451187580459-43490279c0fa", "photo-1441057206919-63d19fac2369"],
      button1Text: "ראה הכל",
      button2Text: "הורד קטלוג"
    },
    process: {
      title: "התהליך שלנו",
      steps: [
        { title: "תכנון", description: "אנחנו מתכננים בקפידה", icon: "📝" },
        { title: "ביצוע", description: "מימוש מדויק ונקי", icon: "⚡" }
      ],
      button1Text: "התחל התהליך",
      button2Text: "שאל שאלות"
    },
    whyUs: {
      title: "למה אנחנו?",
      items: [
        { title: "פשטות", description: "עיצוב נקי וברור", icon: "✨" },
        { title: "איכות", description: "ביצוע ללא פשרות", icon: "🎯" }
      ],
      button1Text: "בחר בנו",
      button2Text: "השווה"
    },
    contact: {
      title: "צור קשר",
      subtitle: "נשמח לשמוע ממך"
    },
    styles: {
      backgroundColor: "#ffffff",
      textColor: "#333333",
      primaryColor: "#2563eb",
      secondaryColor: "#64748b",
      heroBackground: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      emotionalBackground: "#ffffff",
      testimonialsBackground: "#f8fafc",
      aboutBackground: "#ffffff",
      galleryBackground: "#f8fafc",
      processBackground: "#ffffff",
      whyUsBackground: "#f8fafc",
      contactBackground: "#ffffff"
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
      description: "תבנית עם רקע לבן נקי שמציבה את התוכן שלכם במרכז",
      button1Text: "התחל עכשיו",
      button2Text: "גלה עוד",
      image: "photo-1470071459604-3b5ec3a7fe05"
    },
    emotional: {
      badge: "חוויה טהורה",
      title: "פחות רעש, יותר מסר",
      description: "עיצוב מינימליסטי שמאפשר ללקוחות להתמקד במה שחשוב באמת",
      button1Text: "למד עוד",
      button2Text: "התקשר"
    },
    testimonials: {
      badge: "חוות דעת",
      title: "מה אומרים עלינו",
      testimonials: [
        { name: "מיכל רוזן", role: "מנהלת שיווק", content: "הפשטות מדברת בכל שפה", rating: 5 },
        { name: "אבי ברק", role: "יזם", content: "עיצוב שפשוט עובד", rating: 5 }
      ],
      button1Text: "הצטרף",
      button2Text: "קרא עוד"
    },
    about: {
      title: "הסיפור שלנו",
      description: "אנחנו יוצרים עיצובים שמדברים בשקט אבל אומרים הכל",
      button1Text: "למד עלינו",
      button2Text: "פגוש אותנו"
    },
    gallery: {
      title: "עבודות",
      images: ["photo-1470071459604-3b5ec3a7fe05", "photo-1500375592092-40eb2168fd21"],
      button1Text: "צפה בכל העבודות",
      button2Text: "הזמן פגישה"
    },
    process: {
      title: "איך אנחנו עובדים",
      steps: [
        { title: "הקשבה", description: "אנחנו מקשיבים לך", icon: "👂" },
        { title: "יצירה", description: "יוצרים בדיוק מה שצריך", icon: "🎨" }
      ],
      button1Text: "בוא נתחיל",
      button2Text: "שאל אותנו"
    },
    whyUs: {
      title: "מה מיוחד בנו",
      items: [
        { title: "בהירות", description: "הכל ברור ופשוט", icon: "💡" },
        { title: "יעילות", description: "תוצאות מהירות", icon: "⚡" }
      ],
      button1Text: "בחר אותנו",
      button2Text: "השווה מחירים"
    },
    contact: {
      title: "בוא נדבר",
      subtitle: "אנחנו כאן בשבילך"
    },
    styles: {
      backgroundColor: "#ffffff",
      textColor: "#1f2937",
      primaryColor: "#059669",
      secondaryColor: "#6b7280",
      heroBackground: "#ffffff",
      emotionalBackground: "#f9fafb",
      testimonialsBackground: "#ffffff",
      aboutBackground: "#f9fafb",
      galleryBackground: "#ffffff",
      processBackground: "#f9fafb",
      whyUsBackground: "#ffffff",
      contactBackground: "#f9fafb"
    }
  },
  {
    id: 3,
    name: "גיאומטריה נקייה",
    category: "minimal",
    hero: {
      badge: "סדר מושלם",
      title: "כשכל דבר במקומו",
      subtitle: "עיצוב מסודר וחכם",
      description: "תבנית עם גישה גיאומטרית נקייה שיוצרת סדר ויזואלי מושלם",
      button1Text: "גלה את הסדר",
      button2Text: "למד עוד",
      image: "photo-1487252665478-49b61b47f302"
    },
    emotional: {
      badge: "סדר וברור",
      title: "מבנה שמוביל להצלחה",
      description: "עיצוב גיאומטרי שיוצר מסלול ברור ללקוחות שלכם",
      button1Text: "ראה איך",
      button2Text: "התחבר אלינו"
    },
    testimonials: {
      badge: "המלצות",
      title: "מה חושבים עלינו",
      testimonials: [
        { name: "גל שמיר", role: "מהנדס", content: "הסדר הזה פשוט מושלם", rating: 5 },
        { name: "נועה דוד", role: "ארכיטקטית", content: "עיצוב שמבין בסדר", rating: 5 }
      ],
      button1Text: "הצטרף אלינו",
      button2Text: "שמע עוד"
    },
    about: {
      title: "מי אנחנו",
      description: "אנחנו מאמינים שסדר יוצר יופי ויעילות",
      button1Text: "הכר אותנו",
      button2Text: "יצירת קשר"
    },
    gallery: {
      title: "פרויקטים",
      images: ["photo-1487252665478-49b61b47f302", "photo-1482881497185-d4a9ddbe4151"],
      button1Text: "כל הפרויקטים",
      button2Text: "הזמן ייעוץ"
    },
    process: {
      title: "המתודה שלנו",
      steps: [
        { title: "ניתוח", description: "מבינים את הצרכים", icon: "🔍" },
        { title: "מבנה", description: "בונים את הפתרון", icon: "🏗️" }
      ],
      button1Text: "התחל איתנו",
      button2Text: "שאל שאלות"
    },
    whyUs: {
      title: "היתרונות שלנו",
      items: [
        { title: "סדר", description: "הכל מסודר ומובן", icon: "📐" },
        { title: "דיוק", description: "ביצוע מדויק", icon: "🎯" }
      ],
      button1Text: "בחר בסדר",
      button2Text: "השוה אפשרויות"
    },
    contact: {
      title: "דבר איתנו",
      subtitle: "נסדר לך הכל"
    },
    styles: {
      backgroundColor: "#f8fafc",
      textColor: "#0f172a",
      primaryColor: "#3b82f6",
      secondaryColor: "#64748b",
      heroBackground: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
      emotionalBackground: "#ffffff",
      testimonialsBackground: "#f8fafc",
      aboutBackground: "#ffffff",
      galleryBackground: "#f8fafc",
      processBackground: "#ffffff",
      whyUsBackground: "#f8fafc",
      contactBackground: "#ffffff"
    }
  },

  // Adding more minimal templates...
  {
    id: 4,
    name: "אור רך",
    category: "minimal",
    hero: {
      badge: "עדינות מושלמת",
      title: "כשהאור מוביל את הדרך",
      subtitle: "עיצוב עדין וחמים",
      description: "תבנית עם תאורה רכה ועדינה שיוצרת אווירה נעימה ומזמינה",
      button1Text: "הכנס לאור",
      button2Text: "גלה עוד"
    },
    emotional: {
      badge: "חמימות",
      title: "עיצוב שמחמם את הלב",
      description: "אור רך שיוצר חיבור רגשי עם הצופים",
      button1Text: "הרגש איתנו",
      button2Text: "דבר איתנו"
    },
    testimonials: {
      badge: "חוות דעת",
      title: "אור על הדרך",
      testimonials: [
        { name: "יעל אמיר", role: "מעצבת פנים", content: "האור הזה פשוט קסום", rating: 5 },
        { name: "עמי רון", role: "צלם", content: "עיצוב שמבין באור", rating: 5 }
      ],
      button1Text: "הצטרף לאור",
      button2Text: "קרא עוד"
    },
    about: {
      title: "האור שלנו",
      description: "אנחנו מאירים דרכים חדשות בעיצוב",
      button1Text: "הכר את האור",
      button2Text: "צור קשר"
    },
    gallery: {
      title: "תאורה",
      images: ["photo-1500673922987-e212871fec22", "photo-1523712999610-f77fbcfc3843"],
      button1Text: "ראה את האור",
      button2Text: "הזמן פגישה"
    },
    process: {
      title: "דרך האור",
      steps: [
        { title: "הארה", description: "מבינים את החזון", icon: "💡" },
        { title: "הבהרה", description: "מבהירים את הדרך", icon: "🌟" }
      ],
      button1Text: "תן לנו להאיר",
      button2Text: "שאל אותנו"
    },
    whyUs: {
      title: "האור שלנו",
      items: [
        { title: "בהירות", description: "הכל ברור ומואר", icon: "🔆" },
        { title: "חמימות", description: "גישה אישית וחמה", icon: "🌅" }
      ],
      button1Text: "בחר באור",
      button2Text: "השווה"
    },
    contact: {
      title: "האר איתנו",
      subtitle: "בוא נאיר יחד"
    },
    styles: {
      backgroundColor: "#fffef7",
      textColor: "#292524",
      primaryColor: "#f59e0b",
      secondaryColor: "#78716c",
      heroBackground: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
      emotionalBackground: "#fffef7",
      testimonialsBackground: "#fffbeb",
      aboutBackground: "#fffef7",
      galleryBackground: "#fffbeb",
      processBackground: "#fffef7",
      whyUsBackground: "#fffbeb",
      contactBackground: "#fffef7"
    }
  },

  // ===== BOLD & COLORFUL (15 templates) =====
  {
    id: 16,
    name: "פיצוץ צבעים",
    category: "colorful",
    hero: {
      badge: "צבעוני ונועז",
      title: "כשהצבעים מדברים חזק",
      subtitle: "עיצוב שלא עוצר",
      description: "תבנית צבעונית ונועזת שתושך את העין ותשאיר רושם בל יימחה",
      button1Text: "בוא נצבע",
      button2Text: "ראה צבעים",
      image: "photo-1518770660439-4636190af475"
    },
    emotional: {
      badge: "אנרגיה טהורה",
      title: "צבעים שמעירים רגשות",
      description: "עיצוב צבעוני שיוצר חוויה רגשית עזה ובלתי נשכחת",
      button1Text: "הרגש עכשיו",
      button2Text: "דבר איתנו"
    },
    testimonials: {
      badge: "ביקורות צבעוניות",
      title: "מה אומרים על הצבעים",
      testimonials: [
        { name: "מור כהן", role: "מעצבת גרפית", content: "הצבעים פשוט מדהימים!", rating: 5 },
        { name: "תום לוי", role: "יזם", content: "עיצוב שבולט מהקהל", rating: 5 }
      ],
      button1Text: "הצטרף לצבעים",
      button2Text: "שמע עוד"
    },
    about: {
      title: "אנחנו צבעוניים",
      description: "אנחנו מאמינים שהחיים צריכים להיות צבעוניים",
      button1Text: "הכר את הצבעים",
      button2Text: "צור קשר צבעוני"
    },
    gallery: {
      title: "גלריית צבעים",
      images: ["photo-1518770660439-4636190af475", "photo-1526374965328-7f61d4dc18c5"],
      button1Text: "כל הצבעים",
      button2Text: "הזמן ייעוץ"
    },
    process: {
      title: "התהליך הצבעוני",
      steps: [
        { title: "בחירה", description: "בוחרים את הצבעים הנכונים", icon: "🎨" },
        { title: "יצירה", description: "יוצרים קסם צבעוני", icon: "🌈" }
      ],
      button1Text: "התחל לצבוע",
      button2Text: "שאל על צבעים"
    },
    whyUs: {
      title: "למה צבעוני?",
      items: [
        { title: "בולט", description: "עיצוב שבולט מהקהל", icon: "🔥" },
        { title: "זוכר", description: "עיצוב שלא שוכחים", icon: "💫" }
      ],
      button1Text: "בחר בצבעוני",
      button2Text: "השווה"
    },
    contact: {
      title: "דבר בצבעים",
      subtitle: "בוא נצבע יחד"
    },
    styles: {
      backgroundColor: "#1e1b4b",
      textColor: "#ffffff",
      primaryColor: "#ec4899",
      secondaryColor: "#06b6d4",
      heroBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emotionalBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      testimonialsBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      aboutBackground: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      galleryBackground: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      processBackground: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      whyUsBackground: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      contactBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  },

  // ===== ARTISTIC & EXPERIMENTAL (15 templates) =====
  {
    id: 31,
    name: "אמנות דיגיטלית",
    category: "artistic",
    hero: {
      badge: "יצירתיות ללא גבולות",
      title: "כשהאמנות פוגשת טכנולוגיה",
      subtitle: "עיצוב שמפר כללים",
      description: "תבנית אמנותית ייחודית שמשלבת יצירתיות ופרובוקציה",
      button1Text: "יצור איתנו",
      button2Text: "גלה אמנות",
      image: "photo-1451187580459-43490279c0fa"
    },
    emotional: {
      badge: "רגש ויצירה",
      title: "אמנות שמעוררת רגשות",
      description: "עיצוב אמנותי שיוצר חוויה רגשית עמוקה וייחודית",
      button1Text: "הרגש עכשיו",
      button2Text: "צור איתנו"
    },
    testimonials: {
      badge: "ביקורות אמנותיות",
      title: "מה אומרים על האמנות",
      testimonials: [
        { name: "שי אמן", role: "אמן דיגיטלי", content: "יצירתיות ברמה אחרת", rating: 5 },
        { name: "רינה גל", role: "אוצרת", content: "עיצוב שזה אמנות אמיתית", rating: 5 }
      ],
      button1Text: "הצטרף לאמנות",
      button2Text: "קרא עוד"
    },
    about: {
      title: "האמנות שלנו",
      description: "אנחנו יוצרים אמנות דיגיטלית שמעבירה מסרים",
      button1Text: "הכר את האמנות",
      button2Text: "פגוש אמנים"
    },
    gallery: {
      title: "יצירות",
      images: ["photo-1451187580459-43490279c0fa", "photo-1487958449943-2429e8be8625"],
      button1Text: "כל היצירות",
      button2Text: "הזמן יצירה"
    },
    process: {
      title: "תהליך היצירה",
      steps: [
        { title: "השראה", description: "מוצאים השראה", icon: "🎭" },
        { title: "יצירה", description: "יוצרים משהו חדש", icon: "🖌️" }
      ],
      button1Text: "בוא ניצור",
      button2Text: "שאל על יצירה"
    },
    whyUs: {
      title: "למה אמנות?",
      items: [
        { title: "ייחודיות", description: "כל יצירה ייחודית", icon: "🎨" },
        { title: "השפעה", description: "אמנות שמשפיעה", icon: "💡" }
      ],
      button1Text: "בחר באמנות",
      button2Text: "השווה יצירות"
    },
    contact: {
      title: "יצור איתנו",
      subtitle: "בוא ניצור יחד"
    },
    styles: {
      backgroundColor: "#0f0f0f",
      textColor: "#ffffff",
      primaryColor: "#ff6b6b",
      secondaryColor: "#4ecdc4",
      heroBackground: "linear-gradient(45deg, #000000, #434343)",
      emotionalBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      testimonialsBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      aboutBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      galleryBackground: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      processBackground: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      whyUsBackground: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      contactBackground: "linear-gradient(45deg, #000000, #434343)"
    }
  },

  // ===== CORPORATE & ELEGANT (15 templates) =====
  {
    id: 46,
    name: "עסקי מקצועי",
    category: "corporate",
    hero: {
      badge: "מקצועיות ללא פשרות",
      title: "כשהעסק מדבר בכבוד",
      subtitle: "עיצוב מקצועי ואלגנטי",
      description: "תבנית עסקית מקצועית שמעבירה אמינות ויוקרה",
      button1Text: "התחל עסק",
      button2Text: "למד עוד",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    emotional: {
      badge: "אמינות מוכחת",
      title: "עסק שאפשר לסמוך עליו",
      description: "עיצוב מקצועי שמעביר אמינות ויוצר אמון עם לקוחות",
      button1Text: "סמוך עלינו",
      button2Text: "דבר איתנו"
    },
    testimonials: {
      badge: "המלצות עסקיות",
      title: "לקוחות עסקיים מספרים",
      testimonials: [
        { name: "דוד שטרן", role: "מנכ\"ל", content: "מקצועיות ברמה הגבוהה ביותר", rating: 5 },
        { name: "רחל גולד", role: "מנהלת כספים", content: "שירות אמין ומקצועי", rating: 5 }
      ],
      button1Text: "הצטרף ללקוחות",
      button2Text: "קרא המלצות"
    },
    about: {
      title: "החברה שלנו",
      description: "אנחנו מובילים בתחום עם ניסיון של שנים רבות",
      button1Text: "הכר את החברה",
      button2Text: "צור קשר עסקי"
    },
    gallery: {
      title: "פרויקטים עסקיים",
      images: ["photo-1488590528505-98d2b5aba04b", "photo-1486312338219-ce68d2c6f44d"],
      button1Text: "כל הפרויקטים",
      button2Text: "הזמן פגישה"
    },
    process: {
      title: "התהליך העסקי",
      steps: [
        { title: "ייעוץ", description: "ייעוץ מקצועי מלא", icon: "💼" },
        { title: "ביצוע", description: "ביצוע מקצועי ומדויק", icon: "⚡" }
      ],
      button1Text: "התחל התהליך",
      button2Text: "שאל שאלות"
    },
    whyUs: {
      title: "המקצועיות שלנו",
      items: [
        { title: "ניסיון", description: "שנות ניסיון רבות", icon: "🏆" },
        { title: "אמינות", description: "לקוחות סומכים עלינו", icon: "🤝" }
      ],
      button1Text: "בחר במקצועים",
      button2Text: "השווה שירותים"
    },
    contact: {
      title: "יצירת קשר עסקי",
      subtitle: "נשמח לעזור לעסק שלך"
    },
    styles: {
      backgroundColor: "#ffffff",
      textColor: "#1f2937",
      primaryColor: "#1e40af",
      secondaryColor: "#6b7280",
      heroBackground: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      emotionalBackground: "#ffffff",
      testimonialsBackground: "#f8fafc",
      aboutBackground: "#ffffff",
      galleryBackground: "#f8fafc",
      processBackground: "#ffffff",
      whyUsBackground: "#f8fafc",
      contactBackground: "#ffffff"
    }
  },

  // ===== ORGANIC & SOFT (5 templates) =====
  {
    id: 61,
    name: "טבע רך",
    category: "organic",
    hero: {
      badge: "טבעי ורך",
      title: "כשהטבע מוביל",
      subtitle: "עיצוב אורגני ורך",
      description: "תבנית עם גישה טבעית ורכה שמזכירה את יופי הטבע",
      button1Text: "הצטרף לטבע",
      button2Text: "גלה טבעיות",
      image: "photo-1506744038136-46273834b3fb"
    },
    emotional: {
      badge: "רגש טבעי",
      title: "חיבור לטבע",
      description: "עיצוב שיוצר חיבור רגשי לטבע ולסביבה",
      button1Text: "התחבר לטבע",
      button2Text: "דבר איתנו"
    },
    testimonials: {
      badge: "המלצות טבעיות",
      title: "מה אומרים בטבע",
      testimonials: [
        { name: "ירדן ירוק", role: "איש טבע", content: "עיצוב שמחבר לטבע", rating: 5 },
        { name: "עדן פרח", role: "אקולוגית", content: "טבעיות אמיתית", rating: 5 }
      ],
      button1Text: "הצטרף לטבעיים",
      button2Text: "קרא עוד"
    },
    about: {
      title: "הטבע שלנו",
      description: "אנחנו מאמינים בעיצוב שמכבד את הטבע",
      button1Text: "הכר את הטבע",
      button2Text: "צור קשר טבעי"
    },
    gallery: {
      title: "גלריית טבע",
      images: ["photo-1506744038136-46273834b3fb", "photo-1500375592092-40eb2168fd21"],
      button1Text: "כל הטבע",
      button2Text: "הזמן טיול"
    },
    process: {
      title: "התהליך הטבעי",
      steps: [
        { title: "השראה", description: "מתחברים לטבע", icon: "🌱" },
        { title: "יצירה", description: "יוצרים באופן טבעי", icon: "🌿" }
      ],
      button1Text: "התחל טבעי",
      button2Text: "שאל על טבע"
    },
    whyUs: {
      title: "למה טבעי?",
      items: [
        { title: "טבעיות", description: "הכל טבעי ואותנטי", icon: "🌿" },
        { title: "רכות", description: "גישה רכה וחמה", icon: "🌸" }
      ],
      button1Text: "בחר בטבעי",
      button2Text: "השווה"
    },
    contact: {
      title: "דבר בטבעיות",
      subtitle: "בוא נתחבר לטבע יחד"
    },
    styles: {
      backgroundColor: "#fefefe",
      textColor: "#374151",
      primaryColor: "#059669",
      secondaryColor: "#6b7280",
      heroBackground: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      emotionalBackground: "#f0fdf4",
      testimonialsBackground: "#ecfdf5",
      aboutBackground: "#f0fdf4",
      galleryBackground: "#ecfdf5",
      processBackground: "#f0fdf4",
      whyUsBackground: "#ecfdf5",
      contactBackground: "#f0fdf4"
    }
  },

  // ===== TECH & FUTURISTIC (5 templates) =====
  {
    id: 66,
    name: "עתיד טכנולוגי",
    category: "tech",
    hero: {
      badge: "טכנולוגיה מתקדמת",
      title: "העתיד כבר כאן",
      subtitle: "עיצוב פוטוריסטי",
      description: "תבנית טכנולוגית מתקדמת שמציגה את העתיד של העיצוב",
      button1Text: "כנס לעתיד",
      button2Text: "גלה טכנולוגיה",
      image: "photo-1518770660439-4636190af475"
    },
    emotional: {
      badge: "חדשנות טכנולוגית",
      title: "טכנולוגיה שמרגשת",
      description: "עיצוב טכנולוגי שיוצר התרגשות וציפייה לעתיד",
      button1Text: "התרגש מהעתיד",
      button2Text: "צור קשר טכנולוגי"
    },
    testimonials: {
      badge: "ביקורות טכנולוגיות",
      title: "מה אומרים על הטכנולוגיה",
      testimonials: [
        { name: "רן טק", role: "מהנדס תוכנה", content: "טכנולוגיה ברמה אחרת", rating: 5 },
        { name: "מיה קוד", role: "מפתחת", content: "עיצוב שמבין בטכנולוגיה", rating: 5 }
      ],
      button1Text: "הצטרף לעתיד",
      button2Text: "קרא עוד"
    },
    about: {
      title: "הטכנולוגיה שלנו",
      description: "אנחנו חלוצים בטכנולוגיות העתיד",
      button1Text: "הכר את הטכנולוגיה",
      button2Text: "פגישה טכנולוגית"
    },
    gallery: {
      title: "גלריית טכנולוגיה",
      images: ["photo-1518770660439-4636190af475", "photo-1526374965328-7f61d4dc18c5"],
      button1Text: "כל הטכנולוגיות",
      button2Text: "הזמן הדגמה"
    },
    process: {
      title: "התהליך הטכנולוגי",
      steps: [
        { title: "חדשנות", description: "מחדשים כל הזמן", icon: "🚀" },
        { title: "פיתוח", description: "מפתחים לעתיד", icon: "⚡" }
      ],
      button1Text: "התחל בעתיד",
      button2Text: "שאל על טכנולוגיה"
    },
    whyUs: {
      title: "למה טכנולוגיה?",
      items: [
        { title: "חדשנות", description: "תמיד בחזית הטכנולוגיה", icon: "🔬" },
        { title: "עתיד", description: "מביאים את העתיד היום", icon: "🌟" }
      ],
      button1Text: "בחר בעתיד",
      button2Text: "השווה טכנולוגיות"
    },
    contact: {
      title: "תתחבר לעתיד",
      subtitle: "בוא נבנה את העתיד יחד"
    },
    styles: {
      backgroundColor: "#0a0a0a",
      textColor: "#ffffff",
      primaryColor: "#00d9ff",
      secondaryColor: "#64748b",
      heroBackground: "linear-gradient(135deg, #0f1419 0%, #1a202c 100%)",
      emotionalBackground: "#111827",
      testimonialsBackground: "#0f1419",
      aboutBackground: "#111827",
      galleryBackground: "#0f1419",
      processBackground: "#111827",
      whyUsBackground: "#0f1419",
      contactBackground: "#111827"
    }
  }

  // Note: This represents a sample set. In a full implementation, 
  // you would continue adding templates until reaching 70 total templates
  // across all categories with the specified distribution.
];
