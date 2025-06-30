
import { TemplateData } from "@/types/template";

// Sample data for generating templates
const sampleTestimonials = [
  { name: "דני כהן", role: "מנהל שיווק", content: "השירות המעולה ביותר שקיבלתי! תוצאות מדהימות תוך זמן קצר.", rating: 5 },
  { name: "רחל לוי", role: "יזמת", content: "צוות מקצועי וחרוץ. ממליצה בחום לכל מי שרוצה להצליח.", rating: 5 },
  { name: "משה אברהם", role: "בעל עסק", content: "שינו לי את העסק! מעולה בכל קנה מידה.", rating: 5 },
  { name: "שרה גולד", role: "מנהלת מוצר", content: "איכות שירות גבוהה ויחס אישי מדהים.", rating: 4 },
  { name: "אמיר רוזן", role: "סוכן נדלן", content: "עבודה מקצועית ותוצאות מעבר לכל ציפייה!", rating: 5 },
  { name: "נועה פרידמן", role: "מעצבת", content: "הם הבינו בדיוק מה אני צריכה. מומלץ!", rating: 4 }
];

const sampleImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400"
];

const sampleProcessSteps = [
  { title: "ייעוץ ראשוני", description: "פגישה אישית להבנת הצרכים והמטרות שלכם" },
  { title: "תכנון אסטרטגי", description: "יצירת תוכנית מותאמת אישית לעסק שלכם" },
  { title: "ביצוע מקצועי", description: "יישום התוכנית בצורה מדויקת ומקצועית" },
  { title: "מעקב ושיפור", description: "מעקב מתמיד ושיפורים לקבלת התוצאות הטובות ביותר" }
];

const sampleWhyUsItems = [
  { title: "ניסיון עשיר", description: "מעל 10 שנות ניסיון בתחום", icon: "award" },
  { title: "שירות 24/7", description: "זמינים עבורכם בכל שעה", icon: "shield" },
  { title: "תוצאות מוכחות", description: "מאות לקוחות מרוצים", icon: "star" },
  { title: "מחירים הוגנים", description: "איכות גבוהה במחיר שווה", icon: "check" },
  { title: "מהירות ביצוע", description: "תוצאות מהירות ויעילות", icon: "zap" },
  { title: "יחס אישי", description: "כל לקוח הוא עולם ומלואו", icon: "heart" }
];

export const generateTemplates = (): TemplateData[] => {
  const templates: TemplateData[] = [];
  let id = 1;

  // 20 Enhanced Basic Templates with unique variations
  const basicVariations = [
    // Modern Minimalist
    { bg: "bg-gradient-to-br from-slate-50 via-white to-blue-50", text: "text-slate-900", primary: "#2563EB", secondary: "#1E40AF" },
    // Professional Corporate
    { bg: "bg-gradient-to-tr from-gray-100 via-white to-slate-100", text: "text-gray-900", primary: "#1F2937", secondary: "#374151" },
    // Clean Tech
    { bg: "bg-gradient-to-bl from-blue-50 via-indigo-50 to-white", text: "text-slate-900", primary: "#3B82F6", secondary: "#2563EB" },
    // Elegant Business
    { bg: "bg-gradient-to-r from-white via-gray-50 to-blue-50", text: "text-gray-900", primary: "#059669", secondary: "#047857" },
    // Sophisticated
    { bg: "bg-gradient-to-tl from-slate-100 via-white to-gray-100", text: "text-slate-900", primary: "#7C3AED", secondary: "#6D28D9" }
  ];

  for (let i = 0; i < 20; i++) {
    const variation = basicVariations[i % basicVariations.length];
    templates.push({
      id: id++,
      name: `תבנית בסיסית מתקדמת ${i + 1}`,
      category: 'basic',
      hero: {
        badge: i % 3 === 0 ? "חדש" : i % 4 === 0 ? "מומלץ" : undefined,
        title: `פתרונות חכמים לעסק מצליח ${i + 1}`,
        subtitle: `טכנולוגיה מתקדמת עם שירות אישי`,
        description: `אנחנו מביאים לכם את הפתרונות הטכנולוגיים הכי מתקדמים בשוק, עם שירות אישי ומקצועי שמבטיח תוצאות מעולות ושביעות רצון מלאה.`,
        button1Text: "בואו נתחיל יחד",
        button2Text: "קבלו הצעת מחיר"
      },
      emotional: {
        badge: i % 5 === 0 ? "בלעדי" : undefined,
        title: `למה אלפי לקוחות בוחרים בנו כל יום?`,
        description: `כי אנחנו לא רק ספקי שירות - אנחנו שותפים לדרך שלכם להצלחה. כל פרויקט הוא עבורנו הזדמנות ליצור משהו מיוחד ובלתי נשכח שמביא תוצאות מדהימות.`,
        button1Text: "הצטרפו למשפחה שלנו",
        button2Text: "ראו סיפורי הצלחה"
      },
      testimonials: {
        badge: "מה אומרים עלינו",
        title: "לקוחות מרוצים מספרים",
        testimonials: sampleTestimonials,
        button1Text: "הפכו ללקוחות מרוצים",
        button2Text: "קראו עוד המלצות"
      },
      about: {
        title: "הסיפור שלנו והחזון",
        description: `אנחנו צוות של מומחים מנוסים שמאמינים בכוח של חדשנות טכנולוגית ויחס אישי. החזון שלנו הוא להפוך כל עסק לסיפור הצלחה באמצעות פתרונות חכמים ומותאמים אישית.`,
        button1Text: "הכירו את הצוות",
        button2Text: "למדו על החזון"
      },
      gallery: {
        title: "פרויקטים שגאים בהם",
        images: sampleImages,
        button1Text: "עוד פרויקטים מרהיבים",
        button2Text: "בואו ניצור משהו יחד"
      },
      process: i % 3 !== 0 ? {
        title: "איך אנחנו עובדים איתכם",
        steps: sampleProcessSteps,
        button1Text: "בואו נתחיל את התהליך",
        button2Text: "שאלו אותנו שאלות"
      } : undefined,
      whyUs: {
        title: "למה אנחנו הבחירה הנכונה",
        items: sampleWhyUsItems,
        button1Text: "בחרו בהצלחה",
        button2Text: "השוו עם המתחרים"
      },
      contact: {
        title: "בואו נדבר על הפרויקט שלכם",
        subtitle: "אנחנו כאן בשבילכם - צרו קשר ונחזור אליכם תוך שעה"
      },
      styles: {
        backgroundColor: variation.bg,
        textColor: variation.text,
        primaryColor: variation.primary,
        secondaryColor: variation.secondary,
        heroBackground: `${variation.bg} relative overflow-hidden`,
        emotionalBackground: "bg-white border-t border-gray-200 shadow-lg",
        testimonialsBackground: "bg-gradient-to-r from-gray-50 to-slate-50",
        aboutBackground: "bg-white",
        galleryBackground: "bg-gradient-to-bl from-gray-50 to-white",
        processBackground: "bg-white border-t border-gray-100",
        whyUsBackground: "bg-gradient-to-tr from-blue-50 to-white",
        contactBackground: "bg-gradient-to-b from-gray-50 to-white"
      }
    });
  }

  // 20 Advanced 3D Templates with unique effects
  const threeDEffects = [
    "perspective-1000 transform-gpu",
    "transform-style-preserve-3d hover:rotate-y-12",
    "backface-visibility-hidden transform rotateX(15deg)",
    "transform-origin-center hover:scale-110 hover:rotateY(10deg)",
    "will-change-transform hover:translate-z-12"
  ];

  for (let i = 0; i < 20; i++) {
    const effectClass = threeDEffects[i % threeDEffects.length];
    templates.push({
      id: id++,
      name: `תבנית תלת-מימד מתקדמת ${i + 1}`,
      category: '3d',
      hero: {
        badge: i % 2 === 0 ? "תלת-מימד מתקדם" : i % 3 === 0 ? "חוויה עתידנית" : undefined,
        title: `עתיד דיגיטלי בתלת מימד ${i + 1}`,
        subtitle: `חוויה ויזואלית מהפכנית שמעוררת השראה`,
        description: `צללו לתוך עולם של חדשנות דיגיטלית עם אפקטים תלת-מימדיים מרהיבים. אנחנו יוצרים חוויות שמשנות את הדרך שבה אנשים מתקשרים עם טכנולוגיה ומביאים את העתיד לעכשיו.`,
        button1Text: "צללו לחוויה",
        button2Text: "גלו את הטכנולוגיה"
      },
      emotional: {
        badge: "מהפכני ומעורר השראה",
        title: `למה אנחנו חלוצי העתיד הדיגיטלי?`,
        description: `כי אנחנו לא רק עוקבים אחרי הטרנדים - אנחנו יוצרים אותם. עם ויזיה חדשנית, טכנולוגיה מתקדמת ותשוקה אמיתית לחדשנות, אנחנו הופכים חלומות לחוויות דיגיטליות מהפכניות.`,
        button1Text: "הצטרפו למהפכה",
        button2Text: "חוו את העתיד עכשיו"
      },
      testimonials: {
        badge: "סיפורים מהעתיד",
        title: "לקוחות מספרים על החוויה",
        testimonials: sampleTestimonials,
        button1Text: "הפכו לחלק מהסיפור",
        button2Text: "עוד סיפורי הצלחה עתידניים"
      },
      about: {
        title: "מי אנחנו ומה המשימה שלנו",
        description: `אנחנו צוות של חלוצי טכנולוגיה ואמנים דיגיטליים שמביאים את העתיד לעכשיו. המשימה שלנו היא ליצור חוויות דיגיטליות תלת-מימדיות שמעוררות השראה ומשאירות חותם בלתי נמחה.`,
        button1Text: "הכירו את החזון העתידני",
        button2Text: "ראו את הצוות החלוצי"
      },
      gallery: {
        title: "יצירות מהעתיד",
        images: sampleImages,
        button1Text: "עוד יצירות עתידניות",
        button2Text: "יצרו את העתיד איתנו"
      },
      process: {
        title: "התהליך החדשני שלנו",
        steps: sampleProcessSteps,
        button1Text: "התחילו את המסע העתידני",
        button2Text: "שאלו על הטכנולוגיה"
      },
      whyUs: {
        title: "למה אנחנו מובילי העתיד",
        items: sampleWhyUsItems,
        button1Text: "בחרו בעתיד",
        button2Text: "השוו עם העבר"
      },
      contact: {
        title: "בואו ניצור את העתיד יחד",
        subtitle: "יש לכם חזון עתידני? אנחנו כאן להפוך אותו למציאות דיגיטלית מהפכנית"
      },
      styles: {
        backgroundColor: `bg-black text-white ${effectClass}`,
        textColor: "text-white drop-shadow-lg",
        primaryColor: "#8B5CF6",
        secondaryColor: "#A78BFA",
        heroBackground: `bg-gradient-to-br from-purple-900/95 via-blue-900/90 to-indigo-900/95 relative overflow-hidden backdrop-blur-sm ${effectClass}`,
        emotionalBackground: "bg-gradient-to-r from-purple-800/80 to-pink-800/80 backdrop-blur-md border-y border-purple-500/30",
        testimonialsBackground: "bg-gray-900/95 backdrop-blur-lg border-y border-blue-500/20",
        aboutBackground: "bg-gradient-to-br from-indigo-900/90 to-purple-900/90 backdrop-blur-sm",
        galleryBackground: "bg-black/95 backdrop-blur-xl",
        processBackground: "bg-gray-900/90 backdrop-blur-lg border-y border-purple-500/30",
        whyUsBackground: "bg-gradient-to-r from-blue-900/85 to-purple-900/85 backdrop-blur-md",
        contactBackground: "bg-gray-800/95 backdrop-blur-xl border-t border-purple-500/40"
      }
    });
  }

  // 20 Advanced Glass Templates with unique glassmorphism effects
  const glassEffects = [
    "backdrop-blur-xl bg-white/10 border border-white/20",
    "backdrop-blur-2xl bg-white/5 border border-white/30 shadow-2xl",
    "backdrop-blur-3xl bg-gradient-to-br from-white/15 to-white/5 border border-white/25",
    "backdrop-blur-xl bg-cyan-500/10 border border-cyan-300/30",
    "backdrop-blur-2xl bg-blue-500/5 border border-blue-300/20 shadow-cyan-500/25"
  ];

  for (let i = 0; i < 20; i++) {
    const glassEffect = glassEffects[i % glassEffects.length];
    templates.push({
      id: id++,
      name: `תבנית זכוכית מתוחכמת ${i + 1}`,
      category: 'glass',
      hero: {
        badge: i % 3 === 0 ? "שקוף ואלגנטי" : i % 4 === 0 ? "עיצוב מינימליסטי" : undefined,
        title: `אלגנטיות שקופה ומתוחכמת ${i + 1}`,
        subtitle: `עיצוב מינימליסטי עם עומק ויזואלי מרהיב`,
        description: `חוויה ויזואלית עדינה ומתוחכמת שמשלבת שקיפות עם עומק. אנחנו מאמינים בכוח של הפשטות האלגנטית וביופי של השקיפות - פתרונות נקיים שמדגישים את התוכן החשוב באמת.`,
        button1Text: "גלו את האלגנטיות",
        button2Text: "חוו את השקיפות"
      },
      emotional: {
        badge: "מינימליסטי ומושלם",
        title: `למה פשטות היא האמנות העליונה?`,
        description: `כי יופי אמיתי טמון בפרטים הקטנים ובבהירות הרעיון. אנחנו יוצרים חוויות שמדברות בשקט אבל משאירות רושם עמוק, עם עיצוב שקוף שמאפשר לתוכן לזרוח במלוא עוצמתו.`,
        button1Text: "חוו את השקט האלגנטי",
        button2Text: "ראו את היופי הפשוט"
      },
      testimonials: {
        badge: "דעות שקופות וכנות",
        title: "מה אומרים לקוחות מרוצים",
        testimonials: sampleTestimonials,
        button1Text: "הצטרפו למשפחה האלגנטית",
        button2Text: "עוד המלצות כנות"
      },
      about: {
        title: "הפילוסופיה שלנו",
        description: `אנחנו מאמינים שיופי אמיתי נמצא בפשטות ובבהירות. הצוות שלנו מתמחה ביצירת פתרונות נקיים, אלגנטיים ושקופים שמדגישים את התוכן החשוב ויוצרים חוויות משתמש מושלמות.`,
        button1Text: "למדו על הפילוסופיה",
        button2Text: "הכירו את הגישה"
      },
      gallery: {
        title: "עבודות שקופות ויפות",
        images: sampleImages,
        button1Text: "עוד יצירות אלגנטיות",
        button2Text: "ניצור משהו יפה יחד"
      },
      process: i % 2 === 0 ? {
        title: "התהליך הנקי והברור שלנו",
        steps: sampleProcessSteps,
        button1Text: "התחילו בפשטות",
        button2Text: "שאלו על התהליך"
      } : undefined,
      whyUs: {
        title: "למה אלגנטיות זה הכל",
        items: sampleWhyUsItems,
        button1Text: "בחרו באלגנטיות",
        button2Text: "השוו עם אחרים"
      },
      contact: {
        title: "בואו נדבר בפשטות",
        subtitle: "יש לכם רעיון? אנחנו כאן להפוך אותו לחוויה אלגנטית ושקופה"
      },
      styles: {
        backgroundColor: `bg-black/80 text-white ${glassEffect}`,
        textColor: "text-white drop-shadow-2xl",
        primaryColor: "#06B6D4",
        secondaryColor: "#0891B2",
        heroBackground: `bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-3xl relative overflow-hidden ${glassEffect}`,
        emotionalBackground: `bg-white/10 backdrop-blur-2xl border-y border-white/20`,
        testimonialsBackground: `bg-black/40 backdrop-blur-xl border-y border-cyan-300/20`,
        aboutBackground: `bg-cyan-900/20 backdrop-blur-3xl border border-cyan-300/30`,
        galleryBackground: `bg-black/60 backdrop-blur-2xl`,
        processBackground: `bg-white/5 backdrop-blur-xl border-y border-white/15`,
        whyUsBackground: `bg-blue-900/20 backdrop-blur-3xl border border-blue-300/25`,
        contactBackground: `bg-gray-900/80 backdrop-blur-3xl border-t border-white/30`
      }
    });
  }

  // 20 Advanced Geometric Templates with unique shapes and patterns
  const geometricPatterns = [
    "polygon-hexagon rotate-45 hover:rotate-90",
    "triangle-pattern scale-110 hover:scale-125",
    "diamond-grid transform-gpu transition-all",
    "pentagon-spiral hover:animate-spin",
    "octagon-maze perspective-1000"
  ];

  for (let i = 0; i < 20; i++) {
    const pattern = geometricPatterns[i % geometricPatterns.length];
    templates.push({
      id: id++,
      name: `תבנית גיאומטרית מתקדמת ${i + 1}`,
      category: 'geometric',
      hero: {
        badge: i % 2 === 0 ? "גיאומטריה מתקדמת" : i % 3 === 0 ? "צורות מושלמות" : undefined,
        title: `צורות מדויקות ויפות ${i + 1}`,
        subtitle: `מתמטיקה יפה פוגשת עיצוב מושלם`,
        description: `עיצוב מדויק ומתמטי שמשלב יופי עם פונקציונליות מושלמת. אנחנו יוצרים הרמוניה מושלמת בין גיאומטריה לאמנות דיגיטלית, עם דפוסים וצורות שמעוררים השראה ומשדרים מקצועיות.`,
        button1Text: "גלו את הדיוק המתמטי",
        button2Text: "חוו את ההרמוניה"
      },
      emotional: {
        badge: "מדויק ומושלם",
        title: `למה דיוק מתמטי הוא יופי אמיתי?`,
        description: `כי בעולם מורכב, יש יופי מיוחד בפשטות המתמטית ובדיוק הגיאומטרי. אנחנו מביאים סדר לכאוס ויוצרים הרמוניה מושלמת שמשדרת מקצועיות, אמינות ויופי טימלס.`,
        button1Text: "חוו את הסדר המושלם",
        button2Text: "ראו את הדיוק בפעולה"
      },
      testimonials: {
        badge: "מדידות מדויקות של הצלחה",
        title: "לקוחות מדברים במספרים",
        testimonials: sampleTestimonials,
        button1Text: "הצטרפו למשוואת ההצלחה",
        button2Text: "עוד נתוני הצלחה"
      },
      about: {
        title: "הגישה המתמטית שלנו",
        description: `אנחנו מאמינים במתמטיקה של היופי ובדיוק של הביצוע. הצוות שלנו מתמחה ביצירת עיצובים גיאומטריים מדויקים שמשלבים אסתטיקה מושלמת עם פונקציונליות מתמטית ומדויקת.`,
        button1Text: "למדו על הגישה המדעית",
        button2Text: "הכירו את המומחים"
      },
      gallery: {
        title: "יצירות גיאומטריות מושלמות",
        images: sampleImages,
        button1Text: "עוד יצירות מדויקות",
        button2Text: "ניצור דיוק יחד"
      },
      process: {
        title: "התהליך המתמטי והמדויק שלנו",
        steps: sampleProcessSteps,
        button1Text: "התחילו את המשוואה",
        button2Text: "שאלו על השיטה"
      },
      whyUs: {
        title: "למה אנחנו הפתרון המדויק",
        items: sampleWhyUsItems,
        button1Text: "בחרו בדיוק המתמטי",
        button2Text: "השוו את המספרים"
      },
      contact: {
        title: "בואו ניצור משוואת הצלחה",
        subtitle: "יש לכם פרויקט? אנחנו כאן להפוך אותו ליצירת אמנות גיאומטרית מדויקת"
      },
      styles: {
        backgroundColor: `bg-gray-900 text-white ${pattern}`,
        textColor: "text-white font-medium drop-shadow-lg",
        primaryColor: "#F59E0B",
        secondaryColor: "#D97706",
        heroBackground: `bg-gradient-to-br from-yellow-900/90 to-orange-900/90 relative overflow-hidden ${pattern}`,
        emotionalBackground: "bg-gray-800/95 border-y border-yellow-500/30",
        testimonialsBackground: "bg-black/90 border-y border-orange-500/25",
        aboutBackground: "bg-gradient-to-r from-orange-900/95 to-red-900/90",
        galleryBackground: "bg-gray-900/95",
        processBackground: "bg-black/95 border-y border-yellow-500/20",
        whyUsBackground: "bg-gradient-to-br from-red-900/90 to-yellow-900/85",
        contactBackground: "bg-gray-800/95 border-t border-orange-500/40"
      }
    });
  }

  // 20 Advanced Creative Templates with unique artistic effects
  const creativeEffects = [
    "artistic-brush hover:brush-animation",
    "watercolor-splash transition-all duration-700",
    "paint-drip hover:drip-effect",
    "creative-burst animate-pulse",
    "abstract-flow hover:flow-animation"
  ];

  for (let i = 0; i < 20; i++) {
    const effect = creativeEffects[i % creativeEffects.length];
    templates.push({
      id: id++,
      name: `תבנית יצירתית מתקדמת ${i + 1}`,
      category: 'creative',
      hero: {
        badge: i % 3 === 0 ? "יצירתי ומעורר השראה" : i % 4 === 0 ? "אמנות דיגיטלית" : undefined,
        title: `יצירתיות ללא גבולות ${i + 1}`,
        subtitle: `אמנות דיגיטלית שמעוררת השראה ורגשות`,
        description: `עיצוב שבוקע משפע של יצירתיות, חדשנות אמנותית ותשוקה לחדשנות. אנחנו משחררים את הדמיון ויוצרים חוויות ייחודיות שמעוררות השראה, מחברות לבבות ומשאירות חותם בלתי נמחה בזיכרון.`,
        button1Text: "שחררו את היצירתיות",
        button2Text: "גלו את האמנות הדיגיטלית"
      },
      emotional: {
        badge: "מעורר השראה ורגשות",
        title: `למה יצירתיות היא הכוח שמשנה הכל?`,
        description: `כי היא הופכת את הרגיל לחריג, את החלום למציאות ואת הרעיון לחוויה בלתי נשכחת. אנחנו לא רק יוצרים פתרונות דיגיטליים - אנחנו יוצרים חוויות אמנותיות שמעוררות רגשות ומשאירות זיכרונות.`,
        button1Text: "הצטרפו למסע היצירתי",
        button2Text: "חוו את הקסם האמנותי"
      },
      testimonials: {
        badge: "סיפורי השראה אמיתיים",
        title: "לקוחות מספרים על החוויה היצירתית",
        testimonials: sampleTestimonials,
        button1Text: "הפכו לחלק מהיצירה",
        button2Text: "עוד סיפורי השראה"
      },
      about: {
        title: "המשימה האמנותית שלנו",
        description: `אנחנו מאמינים שיצירתיות היא הכוח שמניע את העולם קדימה ומחבר בין אנשים. הצוות האמנותי שלנו מקדיש את הכישרון והתשוקה ליצירת פתרונות דיגיטליים שמעוררים השראה ומחברים לבבות.`,
        button1Text: "הכירו את החזון האמנותי",
        button2Text: "ראו את הצוות היצירתי"
      },
      gallery: {
        title: "גלריית השראה ויצירתיות",
        images: sampleImages,
        button1Text: "עוד יצירות מעוררות השראה",
        button2Text: "בואו ניצור אמנות יחד"
      },
      process: i % 4 === 0 ? {
        title: "התהליך היצירתי והמעורר השראה שלנו",
        steps: sampleProcessSteps,
        button1Text: "התחילו את המסע היצירתי",
        button2Text: "גלו את התהליך האמנותי"
      } : undefined,
      whyUs: {
        title: "למה אנחנו אמנים דיגיטליים יוצאי דופן",
        items: sampleWhyUsItems,
        button1Text: "בחרו באמנות דיגיטלית",
        button2Text: "השוו חוויות יצירתיות"
      },
      contact: {
        title: "בואו ניצור יצירת אמנות דיגיטלית",
        subtitle: "יש לכם חלום אמנותי? אנחנו כאן להפוך אותו למציאות יצירתית ומעוררת השראה"
      },
      styles: {
        backgroundColor: `bg-gradient-to-br from-rose-50 to-pink-100 text-rose-900 ${effect}`,
        textColor: "text-rose-900 font-semibold",
        primaryColor: "#E11D48",
        secondaryColor: "#BE185D",
        heroBackground: `bg-gradient-to-br from-rose-100/95 to-pink-200/90 relative overflow-hidden ${effect}`,
        emotionalBackground: "bg-pink-50/95 border-y border-rose-200",
        testimonialsBackground: "bg-white/95 border-y border-pink-200",
        aboutBackground: "bg-rose-100/90",
        galleryBackground: "bg-pink-50/95",
        processBackground: "bg-white/95 border-y border-rose-200",
        whyUsBackground: "bg-rose-50/95",
        contactBackground: "bg-pink-100/95 border-t border-rose-300"
      }
    });
  }

  return templates;
};

export const templates = generateTemplates();
