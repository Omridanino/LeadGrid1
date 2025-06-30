
import { TemplateData } from "@/types/template";

// Enhanced sample data with more variety
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
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"
];

const sampleProcessSteps = [
  { title: "ייעוץ ראשוני", description: "פגישה אישית להבנת הצרכים והמטרות שלכם", icon: "users" },
  { title: "תכנון אסטרטגי", description: "יצירת תוכנית מותאמת אישית לעסק שלכם", icon: "target" },
  { title: "ביצוע מקצועי", description: "יישום התוכנית בצורה מדויקת ומקצועית", icon: "rocket" },
  { title: "מעקב ושיפור", description: "מעקב מתמיד ושיפורים לקבלת התוצאות הטובות ביותר", icon: "trending-up" }
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

  // 13 Enhanced Basic Templates - Each with completely unique background
  const basicTemplates = [
    {
      name: "אלגנטי קלאסי",
      bg: "bg-gradient-to-br from-slate-50 via-white to-blue-50",
      text: "text-slate-900",
      primary: "#1E40AF",
      secondary: "#3B82F6",
      heroClass: "bg-gradient-to-br from-blue-900/5 via-white to-slate-100/50",
      emotionalClass: "bg-white shadow-xl border-t-4 border-blue-500",
      testimonialsClass: "bg-gradient-to-r from-blue-50 to-indigo-50",
      aboutClass: "bg-white",
      galleryClass: "bg-slate-50",
      processClass: "bg-white border-y border-slate-200",
      whyUsClass: "bg-gradient-to-br from-blue-50 to-white",
      contactClass: "bg-gradient-to-b from-slate-50 to-white"
    },
    {
      name: "מודרני חי",
      bg: "bg-gradient-to-tr from-emerald-50 via-white to-teal-50",
      text: "text-gray-900",
      primary: "#059669",
      secondary: "#10B981",
      heroClass: "bg-gradient-to-tr from-emerald-500/10 via-white to-teal-100/30",
      emotionalClass: "bg-emerald-50 border-t-4 border-emerald-500",
      testimonialsClass: "bg-gradient-to-r from-teal-50 to-emerald-50",
      aboutClass: "bg-white shadow-inner",
      galleryClass: "bg-emerald-50/50",
      processClass: "bg-white border-y border-emerald-200",
      whyUsClass: "bg-gradient-to-bl from-teal-50 to-white",
      contactClass: "bg-gradient-to-t from-emerald-50 to-white"
    },
    {
      name: "עסקי מתוחכם",
      bg: "bg-gradient-to-bl from-gray-100 via-white to-zinc-50",
      text: "text-gray-900",
      primary: "#374151",
      secondary: "#6B7280",
      heroClass: "bg-gradient-to-bl from-gray-800/5 via-white to-zinc-100/40",
      emotionalClass: "bg-gray-50 border-t-4 border-gray-600",
      testimonialsClass: "bg-gradient-to-r from-zinc-50 to-gray-50",
      aboutClass: "bg-white shadow-lg",
      galleryClass: "bg-zinc-50",
      processClass: "bg-white border-y border-gray-300",
      whyUsClass: "bg-gradient-to-br from-gray-50 to-white",
      contactClass: "bg-gradient-to-b from-zinc-50 to-white"
    },
    {
      name: "חם ומזמין",
      bg: "bg-gradient-to-r from-orange-50 via-white to-amber-50",
      text: "text-orange-900",
      primary: "#EA580C",
      secondary: "#F97316",
      heroClass: "bg-gradient-to-r from-orange-400/10 via-white to-amber-100/50",
      emotionalClass: "bg-orange-50 border-t-4 border-orange-500",
      testimonialsClass: "bg-gradient-to-r from-amber-50 to-orange-50",
      aboutClass: "bg-white shadow-warm",
      galleryClass: "bg-amber-50/60",
      processClass: "bg-white border-y border-orange-200",
      whyUsClass: "bg-gradient-to-tl from-orange-50 to-white",
      contactClass: "bg-gradient-to-t from-amber-50 to-white"
    },
    {
      name: "סגול יוקרתי",
      bg: "bg-gradient-to-tl from-purple-50 via-white to-violet-50",
      text: "text-purple-900",
      primary: "#7C2D12",
      secondary: "#A855F7",
      heroClass: "bg-gradient-to-tl from-purple-600/10 via-white to-violet-100/40",
      emotionalClass: "bg-purple-50 border-t-4 border-purple-600",
      testimonialsClass: "bg-gradient-to-r from-violet-50 to-purple-50",
      aboutClass: "bg-white shadow-purple",
      galleryClass: "bg-violet-50/50",
      processClass: "bg-white border-y border-purple-200",
      whyUsClass: "bg-gradient-to-br from-purple-50 to-white",
      contactClass: "bg-gradient-to-b from-violet-50 to-white"
    },
    {
      name: "ורוד רך",
      bg: "bg-gradient-to-br from-pink-50 via-white to-rose-50",
      text: "text-rose-900",
      primary: "#E11D48",
      secondary: "#F43F5E",
      heroClass: "bg-gradient-to-br from-pink-400/10 via-white to-rose-100/30",
      emotionalClass: "bg-pink-50 border-t-4 border-pink-500",
      testimonialsClass: "bg-gradient-to-r from-rose-50 to-pink-50",
      aboutClass: "bg-white shadow-pink",
      galleryClass: "bg-rose-50/40",
      processClass: "bg-white border-y border-rose-200",
      whyUsClass: "bg-gradient-to-bl from-pink-50 to-white",
      contactClass: "bg-gradient-to-t from-rose-50 to-white"
    },
    {
      name: "כחול אקווה",
      bg: "bg-gradient-to-tr from-cyan-50 via-white to-sky-50",
      text: "text-cyan-900",
      primary: "#0891B2",
      secondary: "#06B6D4",
      heroClass: "bg-gradient-to-tr from-cyan-500/10 via-white to-sky-100/40",
      emotionalClass: "bg-cyan-50 border-t-4 border-cyan-500",
      testimonialsClass: "bg-gradient-to-r from-sky-50 to-cyan-50",
      aboutClass: "bg-white shadow-cyan",
      galleryClass: "bg-sky-50/50",
      processClass: "bg-white border-y border-cyan-200",
      whyUsClass: "bg-gradient-to-tl from-cyan-50 to-white",
      contactClass: "bg-gradient-to-b from-sky-50 to-white"
    },
    {
      name: "ירוק טבעי",
      bg: "bg-gradient-to-bl from-lime-50 via-white to-green-50",
      text: "text-green-900",
      primary: "#16A34A",
      secondary: "#22C55E",
      heroClass: "bg-gradient-to-bl from-lime-400/10 via-white to-green-100/30",
      emotionalClass: "bg-lime-50 border-t-4 border-lime-500",
      testimonialsClass: "bg-gradient-to-r from-green-50 to-lime-50",
      aboutClass: "bg-white shadow-green",
      galleryClass: "bg-green-50/40",
      processClass: "bg-white border-y border-green-200",
      whyUsClass: "bg-gradient-to-br from-lime-50 to-white",
      contactClass: "bg-gradient-to-t from-green-50 to-white"
    },
    {
      name: "חמרה עשיר",
      bg: "bg-gradient-to-r from-amber-50 via-white to-yellow-50",
      text: "text-amber-900",
      primary: "#D97706",
      secondary: "#F59E0B",
      heroClass: "bg-gradient-to-r from-amber-400/10 via-white to-yellow-100/50",
      emotionalClass: "bg-amber-50 border-t-4 border-amber-600",
      testimonialsClass: "bg-gradient-to-r from-yellow-50 to-amber-50",
      aboutClass: "bg-white shadow-amber",
      galleryClass: "bg-yellow-50/60",
      processClass: "bg-white border-y border-amber-200",
      whyUsClass: "bg-gradient-to-tl from-amber-50 to-white",
      contactClass: "bg-gradient-to-b from-yellow-50 to-white"
    },
    {
      name: "אדום אלגנטי",
      bg: "bg-gradient-to-tl from-red-50 via-white to-pink-50",
      text: "text-red-900",
      primary: "#DC2626",
      secondary: "#EF4444",
      heroClass: "bg-gradient-to-tl from-red-500/10 via-white to-pink-100/30",
      emotionalClass: "bg-red-50 border-t-4 border-red-500",
      testimonialsClass: "bg-gradient-to-r from-pink-50 to-red-50",
      aboutClass: "bg-white shadow-red",
      galleryClass: "bg-pink-50/50",
      processClass: "bg-white border-y border-red-200",
      whyUsClass: "bg-gradient-to-br from-red-50 to-white",
      contactClass: "bg-gradient-to-t from-pink-50 to-white"
    },
    {
      name: "כחול רויאל",
      bg: "bg-gradient-to-br from-indigo-50 via-white to-blue-50",
      text: "text-indigo-900",
      primary: "#4F46E5",
      secondary: "#6366F1",
      heroClass: "bg-gradient-to-br from-indigo-600/10 via-white to-blue-100/40",
      emotionalClass: "bg-indigo-50 border-t-4 border-indigo-600",
      testimonialsClass: "bg-gradient-to-r from-blue-50 to-indigo-50",
      aboutClass: "bg-white shadow-indigo",
      galleryClass: "bg-blue-50/50",
      processClass: "bg-white border-y border-indigo-200",
      whyUsClass: "bg-gradient-to-bl from-indigo-50 to-white",
      contactClass: "bg-gradient-to-b from-blue-50 to-white"
    },
    {
      name: "ירוק כהה יוקרתי",
      bg: "bg-gradient-to-tr from-emerald-100 via-white to-teal-100",
      text: "text-emerald-900",
      primary: "#047857",
      secondary: "#059669",
      heroClass: "bg-gradient-to-tr from-emerald-700/15 via-white to-teal-200/50",
      emotionalClass: "bg-emerald-100 border-t-4 border-emerald-700",
      testimonialsClass: "bg-gradient-to-r from-teal-100 to-emerald-100",
      aboutClass: "bg-white shadow-emerald",
      galleryClass: "bg-teal-100/60",
      processClass: "bg-white border-y border-emerald-300",
      whyUsClass: "bg-gradient-to-tl from-emerald-100 to-white",
      contactClass: "bg-gradient-to-t from-teal-100 to-white"
    },
    {
      name: "סגול כהה מלכותי",
      bg: "bg-gradient-to-bl from-violet-100 via-white to-purple-100",
      text: "text-violet-900",
      primary: "#6D28D9",
      secondary: "#8B5CF6",
      heroClass: "bg-gradient-to-bl from-violet-700/15 via-white to-purple-200/50",
      emotionalClass: "bg-violet-100 border-t-4 border-violet-700",
      testimonialsClass: "bg-gradient-to-r from-purple-100 to-violet-100",
      aboutClass: "bg-white shadow-violet",
      galleryClass: "bg-purple-100/60",
      processClass: "bg-white border-y border-violet-300",
      whyUsClass: "bg-gradient-to-br from-violet-100 to-white",
      contactClass: "bg-gradient-to-b from-purple-100 to-white"
    }
  ];

  // Generate 13 Basic Templates
  basicTemplates.forEach((template, i) => {
    templates.push({
      id: id++,
      name: template.name,
      category: 'basic',
      hero: {
        badge: i % 3 === 0 ? "חדש" : i % 4 === 0 ? "מומלץ" : undefined,
        title: `פתרונות חכמים לעסק מצליח`,
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
        backgroundColor: template.bg,
        textColor: template.text,
        primaryColor: template.primary,
        secondaryColor: template.secondary,
        heroBackground: template.heroClass,
        emotionalBackground: template.emotionalClass,
        testimonialsBackground: template.testimonialsClass,
        aboutBackground: template.aboutClass,
        galleryBackground: template.galleryClass,
        processBackground: template.processClass,
        whyUsBackground: template.whyUsClass,
        contactBackground: template.contactClass
      }
    });
  });

  // 13 Advanced 3D Templates - Each with unique 3D effects and backgrounds
  const threeDTemplates = [
    {
      name: "תלת-מימד נאון סייבר",
      bgClass: "bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20",
      effectClass: "perspective-1000 transform-style-preserve-3d",
      heroClass: "bg-gradient-to-br from-purple-900/30 via-black/80 to-pink-900/30 relative overflow-hidden neon-glow",
      emotionalClass: "bg-black/90 border-y border-purple-500/50 neon-border",
      testimonialsClass: "bg-gradient-to-r from-purple-800/20 to-pink-800/20 backdrop-blur-sm",
      aboutClass: "bg-black/95 shadow-neon-purple",
      galleryClass: "bg-purple-900/10 backdrop-blur-xl",
      processClass: "bg-black/90 border-y border-pink-500/30",
      whyUsClass: "bg-gradient-to-r from-pink-900/20 to-purple-900/20 backdrop-blur-md",
      contactClass: "bg-black/95 border-t border-purple-500/60"
    },
    {
      name: "תלת-מימד הולוגרפי",
      bgClass: "bg-gradient-to-tr from-gray-900 via-blue-900/30 to-cyan-900/30",
      effectClass: "holographic-effect transform-gpu",
      heroClass: "bg-gradient-to-tr from-blue-900/40 via-gray-900/90 to-cyan-900/40 holographic-bg",
      emotionalClass: "bg-gray-900/95 border-y border-cyan-400/40 holographic-border",
      testimonialsClass: "bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-lg",
      aboutClass: "bg-gray-900/90 shadow-holographic",
      galleryClass: "bg-cyan-900/15 backdrop-blur-2xl",
      processClass: "bg-gray-900/95 border-y border-blue-400/30",
      whyUsClass: "bg-gradient-to-br from-cyan-900/25 to-blue-900/25 backdrop-blur-lg",
      contactClass: "bg-gray-900/90 border-t border-cyan-400/50"
    },
    {
      name: "תלת-מימד מטריקס דיגיטלי",
      bgClass: "bg-gradient-to-bl from-black via-green-900/20 to-emerald-900/20",
      effectClass: "matrix-rain digital-glitch",
      heroClass: "bg-gradient-to-bl from-green-900/30 via-black/85 to-emerald-900/30 matrix-bg",
      emotionalClass: "bg-black/95 border-y border-green-400/50 digital-border",
      testimonialsClass: "bg-gradient-to-r from-green-800/25 to-emerald-800/25 backdrop-blur-md",
      aboutClass: "bg-black/90 shadow-matrix-green",
      galleryClass: "bg-green-900/10 backdrop-blur-xl digital-overlay",
      processClass: "bg-black/95 border-y border-emerald-400/40",
      whyUsClass: "bg-gradient-to-tl from-emerald-900/20 to-green-900/20 backdrop-blur-lg",
      contactClass: "bg-black/90 border-t border-green-400/60"
    },
    {
      name: "תלת-מימד קוסמי",
      bgClass: "bg-gradient-to-r from-indigo-900 via-purple-900/40 to-pink-900/40",
      effectClass: "cosmic-float stellar-parallax",
      heroClass: "bg-gradient-to-r from-indigo-900/50 via-purple-900/70 to-pink-900/50 cosmic-bg",
      emotionalClass: "bg-indigo-900/80 border-y border-pink-400/40 stellar-border",
      testimonialsClass: "bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-lg",
      aboutClass: "bg-indigo-900/85 shadow-cosmic",
      galleryClass: "bg-purple-900/20 backdrop-blur-2xl cosmic-overlay",
      processClass: "bg-indigo-900/90 border-y border-purple-400/30",
      whyUsClass: "bg-gradient-to-br from-pink-900/30 to-indigo-900/30 backdrop-blur-xl",
      contactClass: "bg-indigo-900/85 border-t border-pink-400/50"
    },
    {
      name: "תלת-מימד נחושת מתכתי",
      bgClass: "bg-gradient-to-tl from-orange-900 via-red-900/40 to-yellow-900/40",
      effectClass: "metallic-shine copper-reflection",
      heroClass: "bg-gradient-to-tl from-orange-900/60 via-red-900/80 to-yellow-900/60 metallic-bg",
      emotionalClass: "bg-orange-900/85 border-y border-yellow-400/50 metallic-border",
      testimonialsClass: "bg-gradient-to-r from-red-800/40 to-orange-800/40 backdrop-blur-md",
      aboutClass: "bg-orange-900/90 shadow-metallic-copper",
      galleryClass: "bg-red-900/20 backdrop-blur-xl metallic-overlay",
      processClass: "bg-orange-900/95 border-y border-red-400/40",
      whyUsClass: "bg-gradient-to-bl from-yellow-900/30 to-orange-900/30 backdrop-blur-lg",
      contactClass: "bg-orange-900/90 border-t border-yellow-400/60"
    },
    {
      name: "תלת-מימד קריסטל קרח",
      bgClass: "bg-gradient-to-br from-slate-900 via-blue-900/30 to-cyan-900/30",
      effectClass: "crystal-refraction ice-shimmer",
      heroClass: "bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-cyan-900/70 crystal-bg",
      emotionalClass: "bg-slate-900/90 border-y border-cyan-300/50 crystal-border",
      testimonialsClass: "bg-gradient-to-r from-blue-800/30 to-slate-800/30 backdrop-blur-lg",
      aboutClass: "bg-slate-900/85 shadow-crystal-ice",
      galleryClass: "bg-blue-900/15 backdrop-blur-2xl crystal-overlay",
      processClass: "bg-slate-900/95 border-y border-blue-300/40",
      whyUsClass: "bg-gradient-to-tr from-cyan-900/25 to-slate-900/25 backdrop-blur-xl",
      contactClass: "bg-slate-900/90 border-t border-cyan-300/60"
    },
    {
      name: "תלת-מימד לבה געשית",
      bgClass: "bg-gradient-to-bl from-red-900 via-orange-900/50 to-yellow-800/40",
      effectClass: "lava-flow volcanic-pulse",
      heroClass: "bg-gradient-to-bl from-red-900/70 via-orange-900/80 to-yellow-800/70 lava-bg",
      emotionalClass: "bg-red-900/90 border-y border-orange-400/60 volcanic-border",
      testimonialsClass: "bg-gradient-to-r from-orange-800/40 to-red-800/40 backdrop-blur-md",
      aboutClass: "bg-red-900/85 shadow-volcanic",
      galleryClass: "bg-orange-900/20 backdrop-blur-xl lava-overlay",
      processClass: "bg-red-900/95 border-y border-yellow-400/50",
      whyUsClass: "bg-gradient-to-tl from-yellow-800/30 to-red-900/30 backdrop-blur-lg",
      contactClass: "bg-red-900/90 border-t border-orange-400/70"
    },
    {
      name: "תלת-מימד אוקיינוס עמוק",
      bgClass: "bg-gradient-to-tr from-blue-900 via-teal-900/40 to-cyan-800/40",
      effectClass: "ocean-waves depth-parallax",
      heroClass: "bg-gradient-to-tr from-blue-900/80 via-teal-900/70 to-cyan-800/80 ocean-bg",
      emotionalClass: "bg-blue-900/90 border-y border-teal-300/50 ocean-border",
      testimonialsClass: "bg-gradient-to-r from-teal-800/35 to-blue-800/35 backdrop-blur-lg",
      aboutClass: "bg-blue-900/85 shadow-ocean-depth",
      galleryClass: "bg-teal-900/20 backdrop-blur-2xl ocean-overlay",
      processClass: "bg-blue-900/95 border-y border-cyan-300/40",
      whyUsClass: "bg-gradient-to-bl from-cyan-800/30 to-blue-900/30 backdrop-blur-xl",
      contactClass: "bg-blue-900/90 border-t border-teal-300/60"
    },
    {
      name: "תלת-מימד יער מסתורין",
      bgClass: "bg-gradient-to-r from-green-900 via-emerald-900/40 to-teal-800/40",
      effectClass: "forest-mist mystical-glow",
      heroClass: "bg-gradient-to-r from-green-900/75 via-emerald-900/65 to-teal-800/75 forest-bg",
      emotionalClass: "bg-green-900/90 border-y border-emerald-300/50 mystical-border",
      testimonialsClass: "bg-gradient-to-r from-emerald-800/35 to-green-800/35 backdrop-blur-md",
      aboutClass: "bg-green-900/85 shadow-forest-mist",
      galleryClass: "bg-emerald-900/20 backdrop-blur-xl forest-overlay",
      processClass: "bg-green-900/95 border-y border-teal-300/40",
      whyUsClass: "bg-gradient-to-tr from-teal-800/30 to-green-900/30 backdrop-blur-lg",
      contactClass: "bg-green-900/90 border-t border-emerald-300/60"
    },
    {
      name: "תלת-מימד חלל אינסופי",
      bgClass: "bg-gradient-to-tl from-black via-indigo-900/30 to-purple-800/30",
      effectClass: "space-drift infinite-scroll",
      heroClass: "bg-gradient-to-tl from-black/90 via-indigo-900/60 to-purple-800/60 space-bg",
      emotionalClass: "bg-black/95 border-y border-indigo-400/50 space-border",
      testimonialsClass: "bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-lg",
      aboutClass: "bg-black/90 shadow-space-void",
      galleryClass: "bg-indigo-900/15 backdrop-blur-2xl space-overlay",
      processClass: "bg-black/95 border-y border-purple-400/40",
      whyUsClass: "bg-gradient-to-br from-purple-800/25 to-indigo-900/25 backdrop-blur-xl",
      contactClass: "bg-black/90 border-t border-indigo-400/60"
    },
    {
      name: "תלת-מימד זהב מלכותי",
      bgClass: "bg-gradient-to-br from-yellow-900 via-amber-800/50 to-orange-800/40",
      effectClass: "golden-shimmer royal-glow",
      heroClass: "bg-gradient-to-br from-yellow-900/80 via-amber-800/70 to-orange-800/80 golden-bg",
      emotionalClass: "bg-yellow-900/90 border-y border-amber-300/60 royal-border",
      testimonialsClass: "bg-gradient-to-r from-amber-800/40 to-yellow-800/40 backdrop-blur-md",
      aboutClass: "bg-yellow-900/85 shadow-golden-royal",
      galleryClass: "bg-amber-800/20 backdrop-blur-xl golden-overlay",
      processClass: "bg-yellow-900/95 border-y border-orange-300/50",
      whyUsClass: "bg-gradient-to-tl from-orange-800/30 to-yellow-900/30 backdrop-blur-lg",
      contactClass: "bg-yellow-900/90 border-t border-amber-300/70"
    },
    {
      name: "תלת-מימד נורדי קפוא",
      bgClass: "bg-gradient-to-bl from-slate-800 via-blue-800/40 to-indigo-800/40",
      effectClass: "frost-effect nordic-aurora",
      heroClass: "bg-gradient-to-bl from-slate-800/80 via-blue-800/70 to-indigo-800/80 nordic-bg",
      emotionalClass: "bg-slate-800/90 border-y border-blue-300/50 frost-border",
      testimonialsClass: "bg-gradient-to-r from-blue-800/35 to-slate-700/35 backdrop-blur-lg",
      aboutClass: "bg-slate-800/85 shadow-nordic-frost",
      galleryClass: "bg-blue-800/20 backdrop-blur-2xl nordic-overlay",
      processClass: "bg-slate-800/95 border-y border-indigo-300/40",
      whyUsClass: "bg-gradient-to-tr from-indigo-800/30 to-slate-800/30 backdrop-blur-xl",
      contactClass: "bg-slate-800/90 border-t border-blue-300/60"
    },
    {
      name: "תלת-מימד זריחה דיגיטלית",
      bgClass: "bg-gradient-to-r from-pink-800 via-orange-800/50 to-yellow-700/40",
      effectClass: "sunrise-glow digital-rays",
      heroClass: "bg-gradient-to-r from-pink-800/80 via-orange-800/70 to-yellow-700/80 sunrise-bg",
      emotionalClass: "bg-pink-800/90 border-y border-orange-300/60 sunrise-border",
      testimonialsClass: "bg-gradient-to-r from-orange-800/40 to-pink-700/40 backdrop-blur-md",
      aboutClass: "bg-pink-800/85 shadow-sunrise",
      galleryClass: "bg-orange-800/20 backdrop-blur-xl sunrise-overlay",
      processClass: "bg-pink-800/95 border-y border-yellow-300/50",
      whyUsClass: "bg-gradient-to-bl from-yellow-700/30 to-pink-800/30 backdrop-blur-lg",
      contactClass: "bg-pink-800/90 border-t border-orange-300/70"
    }
  ];

  // Generate 13 3D Templates
  threeDTemplates.forEach((template, i) => {
    templates.push({
      id: id++,
      name: template.name,
      category: '3d',
      hero: {
        badge: i % 2 === 0 ? "תלת-מימד מתקדם" : i % 3 === 0 ? "חוויה עתידנית" : undefined,
        title: `עתיד דיגיטלי בתלת מימד`,
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
        backgroundColor: template.bgClass,
        textColor: "text-white drop-shadow-lg",
        primaryColor: "#8B5CF6",
        secondaryColor: "#A78BFA",
        heroBackground: template.heroClass,
        emotionalBackground: template.emotionalClass,
        testimonialsBackground: template.testimonialsClass,
        aboutBackground: template.aboutClass,
        galleryBackground: template.galleryClass,
        processBackground: template.processClass,
        whyUsBackground: template.whyUsClass,
        contactBackground: template.contactClass
      }
    });
  });

  // 13 Advanced Glass Templates - Each with unique glassmorphism effects
  const glassTemplates = [
    {
      name: "זכוכית אקווה קריסטל",
      bgClass: "bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-teal-500/20",
      effectClass: "backdrop-blur-3xl bg-cyan-500/5 border border-cyan-300/30",
      heroClass: "bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-teal-500/15 backdrop-blur-3xl crystal-glass",
      emotionalClass: "bg-cyan-500/10 backdrop-blur-2xl border-y border-cyan-300/25 glass-aqua",
      testimonialsClass: "bg-blue-500/8 backdrop-blur-xl border-y border-blue-300/20",
      aboutClass: "bg-teal-500/12 backdrop-blur-3xl glass-teal",
      galleryClass: "bg-cyan-500/6 backdrop-blur-2xl",
      processClass: "bg-blue-500/10 backdrop-blur-xl border-y border-cyan-300/15",
      whyUsClass: "bg-teal-500/8 backdrop-blur-3xl",
      contactClass: "bg-cyan-500/12 backdrop-blur-3xl border-t border-cyan-300/35"
    },
    {
      name: "זכוכית סגולה מיסטית",
      bgClass: "bg-gradient-to-tl from-purple-500/20 via-violet-600/10 to-indigo-500/20",
      effectClass: "backdrop-blur-3xl bg-purple-500/8 border border-purple-300/30",
      heroClass: "bg-gradient-to-tl from-purple-500/18 via-violet-600/12 to-indigo-500/18 backdrop-blur-3xl mystical-glass",
      emotionalClass: "bg-purple-500/12 backdrop-blur-2xl border-y border-violet-300/25 glass-purple",
      testimonialsClass: "bg-violet-500/10 backdrop-blur-xl border-y border-purple-300/20",
      aboutClass: "bg-indigo-500/14 backdrop-blur-3xl glass-indigo",
      galleryClass: "bg-purple-500/8 backdrop-blur-2xl",
      processClass: "bg-violet-500/12 backdrop-blur-xl border-y border-indigo-300/15",
      whyUsClass: "bg-indigo-500/10 backdrop-blur-3xl",
      contactClass: "bg-purple-500/15 backdrop-blur-3xl border-t border-violet-300/35"
    },
    {
      name: "זכוכית ורודה חלומית",
      bgClass: "bg-gradient-to-bl from-pink-500/20 via-rose-500/10 to-red-400/15",
      effectClass: "backdrop-blur-3xl bg-pink-500/6 border border-pink-300/25",
      heroClass: "bg-gradient-to-bl from-pink-500/16 via-rose-500/12 to-red-400/16 backdrop-blur-3xl dreamy-glass",
      emotionalClass: "bg-pink-500/10 backdrop-blur-2xl border-y border-rose-300/25 glass-pink",
      testimonialsClass: "bg-rose-500/8 backdrop-blur-xl border-y border-pink-300/20",
      aboutClass: "bg-red-400/12 backdrop-blur-3xl glass-red",
      galleryClass: "bg-pink-500/6 backdrop-blur-2xl",
      processClass: "bg-rose-500/10 backdrop-blur-xl border-y border-red-300/15",
      whyUsClass: "bg-red-400/8 backdrop-blur-3xl",
      contactClass: "bg-pink-500/13 backdrop-blur-3xl border-t border-rose-300/30"
    },
    {
      name: "זכוכית ירוקה טבעית",
      bgClass: "bg-gradient-to-tr from-green-500/20 via-emerald-500/10 to-teal-400/15",
      effectClass: "backdrop-blur-3xl bg-green-500/7 border border-emerald-300/25",
      heroClass: "bg-gradient-to-tr from-green-500/17 via-emerald-500/13 to-teal-400/17 backdrop-blur-3xl nature-glass",
      emotionalClass: "bg-green-500/11 backdrop-blur-2xl border-y border-emerald-300/25 glass-green",
      testimonialsClass: "bg-emerald-500/9 backdrop-blur-xl border-y border-green-300/20",
      aboutClass: "bg-teal-400/13 backdrop-blur-3xl glass-teal-light",
      galleryClass: "bg-green-500/7 backdrop-blur-2xl",
      processClass: "bg-emerald-500/11 backdrop-blur-xl border-y border-teal-300/15",
      whyUsClass: "bg-teal-400/9 backdrop-blur-3xl",
      contactClass: "bg-green-500/14 backdrop-blur-3xl border-t border-emerald-300/30"
    },
    {
      name: "זכוכית זהובה מלכותית",
      bgClass: "bg-gradient-to-r from-yellow-500/20 via-amber-500/12 to-orange-400/15",
      effectClass: "backdrop-blur-3xl bg-yellow-500/8 border border-amber-300/30",
      heroClass: "bg-gradient-to-r from-yellow-500/18 via-amber-500/14 to-orange-400/18 backdrop-blur-3xl royal-glass",
      emotionalClass: "bg-yellow-500/12 backdrop-blur-2xl border-y border-amber-300/28 glass-gold",
      testimonialsClass: "bg-amber-500/10 backdrop-blur-xl border-y border-yellow-300/22",
      aboutClass: "bg-orange-400/14 backdrop-blur-3xl glass-orange",
      galleryClass: "bg-yellow-500/8 backdrop-blur-2xl",
      processClass: "bg-amber-500/12 backdrop-blur-xl border-y border-orange-300/18",
      whyUsClass: "bg-orange-400/10 backdrop-blur-3xl",
      contactClass: "bg-yellow-500/15 backdrop-blur-3xl border-t border-amber-300/35"
    },
    {
      name: "זכוכית כחולה אוקיינית",
      bgClass: "bg-gradient-to-tl from-blue-600/22 via-sky-500/12 to-cyan-400/18",
      effectClass: "backdrop-blur-3xl bg-blue-600/7 border border-sky-300/28",
      heroClass: "bg-gradient-to-tl from-blue-600/19 via-sky-500/14 to-cyan-400/19 backdrop-blur-3xl ocean-glass",
      emotionalClass: "bg-blue-600/13 backdrop-blur-2xl border-y border-sky-300/26 glass-ocean",
      testimonialsClass: "bg-sky-500/11 backdrop-blur-xl border-y border-blue-300/21",
      aboutClass: "bg-cyan-400/15 backdrop-blur-3xl glass-cyan",
      galleryClass: "bg-blue-600/9 backdrop-blur-2xl",
      processClass: "bg-sky-500/13 backdrop-blur-xl border-y border-cyan-300/17",
      whyUsClass: "bg-cyan-400/11 backdrop-blur-3xl",
      contactClass: "bg-blue-600/16 backdrop-blur-3xl border-t border-sky-300/33"
    },
    {
      name: "זכוכית אדומה לוהטת",
      bgClass: "bg-gradient-to-br from-red-600/21 via-orange-500/13 to-pink-500/17",
      effectClass: "backdrop-blur-3xl bg-red-600/8 border border-orange-300/27",
      heroClass: "bg-gradient-to-br from-red-600/18 via-orange-500/15 to-pink-500/18 backdrop-blur-3xl fire-glass",
      emotionalClass: "bg-red-600/12 backdrop-blur-2xl border-y border-orange-300/25 glass-fire",
      testimonialsClass: "bg-orange-500/10 backdrop-blur-xl border-y border-red-300/20",
      aboutClass: "bg-pink-500/14 backdrop-blur-3xl glass-pink-fire",
      galleryClass: "bg-red-600/8 backdrop-blur-2xl",
      processClass: "bg-orange-500/12 backdrop-blur-xl border-y border-pink-300/16",
      whyUsClass: "bg-pink-500/10 backdrop-blur-3xl",
      contactClass: "bg-red-600/15 backdrop-blur-3xl border-t border-orange-300/32"
    },
    {
      name: "זכוכית לבנדר רכה",
      bgClass: "bg-gradient-to-bl from-purple-400/19 via-lavender-300/11 to-pink-300/16",
      effectClass: "backdrop-blur-3xl bg-purple-400/6 border border-lavender-200/25",
      heroClass: "bg-gradient-to-bl from-purple-400/16 via-lavender-300/13 to-pink-300/16 backdrop-blur-3xl lavender-glass",
      emotionalClass: "bg-purple-400/10 backdrop-blur-2xl border-y border-lavender-200/23 glass-lavender",
      testimonialsClass: "bg-lavender-300/8 backdrop-blur-xl border-y border-purple-200/18",
      aboutClass: "bg-pink-300/12 backdrop-blur-3xl glass-soft-pink",
      galleryClass: "bg-purple-400/6 backdrop-blur-2xl",
      processClass: "bg-lavender-300/10 backdrop-blur-xl border-y border-pink-200/14",
      whyUsClass: "bg-pink-300/8 backdrop-blur-3xl",
      contactClass: "bg-purple-400/13 backdrop-blur-3xl border-t border-lavender-200/28"
    },
    {
      name: "זכוכית ירוק-לימון רענן",
      bgClass: "bg-gradient-to-tr from-lime-500/20 via-green-400/12 to-emerald-300/16",
      effectClass: "backdrop-blur-3xl bg-lime-500/7 border border-green-300/26",
      heroClass: "bg-gradient-to-tr from-lime-500/17 via-green-400/14 to-emerald-300/17 backdrop-blur-3xl fresh-glass",
      emotionalClass: "bg-lime-500/11 backdrop-blur-2xl border-y border-green-300/24 glass-fresh",
      testimonialsClass: "bg-green-400/9 backdrop-blur-xl border-y border-lime-300/19",
      aboutClass: "bg-emerald-300/13 backdrop-blur-3xl glass-emerald-light",
      galleryClass: "bg-lime-500/7 backdrop-blur-2xl",
      processClass: "bg-green-400/11 backdrop-blur-xl border-y border-emerald-200/15",
      whyUsClass: "bg-emerald-300/9 backdrop-blur-3xl",
      contactClass: "bg-lime-500/14 backdrop-blur-3xl border-t border-green-300/29"
    },
    {
      name: "זכוכית אפורה אלגנטית",
      bgClass: "bg-gradient-to-r from-gray-600/18 via-slate-500/10 to-zinc-400/14",
      effectClass: "backdrop-blur-3xl bg-gray-600/5 border border-slate-300/22",
      heroClass: "bg-gradient-to-r from-gray-600/15 via-slate-500/12 to-zinc-400/15 backdrop-blur-3xl elegant-glass",
      emotionalClass: "bg-gray-600/9 backdrop-blur-2xl border-y border-slate-300/20 glass-elegant",
      testimonialsClass: "bg-slate-500/7 backdrop-blur-xl border-y border-gray-300/16",
      aboutClass: "bg-zinc-400/11 backdrop-blur-3xl glass-zinc",
      galleryClass: "bg-gray-600/5 backdrop-blur-2xl",
      processClass: "bg-slate-500/9 backdrop-blur-xl border-y border-zinc-300/12",
      whyUsClass: "bg-zinc-400/7 backdrop-blur-3xl",
      contactClass: "bg-gray-600/12 backdrop-blur-3xl border-t border-slate-300/25"
    },
    {
      name: "זכוכית טורקיז אקזוטית",
      bgClass: "bg-gradient-to-tl from-teal-600/21 via-turquoise-500/13 to-cyan-400/17",
      effectClass: "backdrop-blur-3xl bg-teal-600/8 border border-turquoise-300/27",
      heroClass: "bg-gradient-to-tl from-teal-600/18 via-turquoise-500/15 to-cyan-400/18 backdrop-blur-3xl exotic-glass",
      emotionalClass: "bg-teal-600/12 backdrop-blur-2xl border-y border-turquoise-300/25 glass-exotic",
      testimonialsClass: "bg-turquoise-500/10 backdrop-blur-xl border-y border-teal-300/20",
      aboutClass: "bg-cyan-400/14 backdrop-blur-3xl glass-cyan-exotic",
      galleryClass: "bg-teal-600/8 backdrop-blur-2xl",
      processClass: "bg-turquoise-500/12 backdrop-blur-xl border-y border-cyan-300/16",
      whyUsClass: "bg-cyan-400/10 backdrop-blur-3xl",
      contactClass: "bg-teal-600/15 backdrop-blur-3xl border-t border-turquoise-300/30"
    },
    {
      name: "זכוכית פוקסיה עזה",
      bgClass: "bg-gradient-to-br from-fuchsia-600/20 via-magenta-500/12 to-pink-400/16",
      effectClass: "backdrop-blur-3xl bg-fuchsia-600/7 border border-magenta-300/26",
      heroClass: "bg-gradient-to-br from-fuchsia-600/17 via-magenta-500/14 to-pink-400/17 backdrop-blur-3xl bold-glass",
      emotionalClass: "bg-fuchsia-600/11 backdrop-blur-2xl border-y border-magenta-300/24 glass-bold",
      testimonialsClass: "bg-magenta-500/9 backdrop-blur-xl border-y border-fuchsia-300/19",
      aboutClass: "bg-pink-400/13 backdrop-blur-3xl glass-pink-bold",
      galleryClass: "bg-fuchsia-600/7 backdrop-blur-2xl",
      processClass: "bg-magenta-500/11 backdrop-blur-xl border-y border-pink-300/15",
      whyUsClass: "bg-pink-400/9 backdrop-blur-3xl",
      contactClass: "bg-fuchsia-600/14 backdrop-blur-3xl border-t border-magenta-300/28"
    },
    {
      name: "זכוכית ברונזה עתיקה",
      bgClass: "bg-gradient-to-bl from-amber-700/19 via-bronze-600/11 to-orange-600/15",
      effectClass: "backdrop-blur-3xl bg-amber-700/6 border border-bronze-400/24",
      heroClass: "bg-gradient-to-bl from-amber-700/16 via-bronze-600/13 to-orange-600/16 backdrop-blur-3xl antique-glass",
      emotionalClass: "bg-amber-700/10 backdrop-blur-2xl border-y border-bronze-400/22 glass-antique",
      testimonialsClass: "bg-bronze-600/8 backdrop-blur-xl border-y border-amber-400/17",
      aboutClass: "bg-orange-600/12 backdrop-blur-3xl glass-bronze",
      galleryClass: "bg-amber-700/6 backdrop-blur-2xl",
      processClass: "bg-bronze-600/10 backdrop-blur-xl border-y border-orange-400/13",   
      whyUsClass: "bg-orange-600/8 backdrop-blur-3xl",
      contactClass: "bg-amber-700/13 backdrop-blur-3xl border-t border-bronze-400/27"
    }
  ];

  // Generate 13 Glass Templates
  glassTemplates.forEach((template, i) => {
    templates.push({
      id: id++,
      name: template.name,
      category: 'glass',
      hero: {
        badge: i % 3 === 0 ? "שקוף ואלגנטי" : i % 4 === 0 ? "עיצוב מינימליסטי" : undefined,
        title: `אלגנטיות שקופה ומתוחכמת`,
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
        backgroundColor: template.bgClass,
        textColor: "text-gray-800 drop-shadow-sm",
        primaryColor: "#06B6D4",
        secondaryColor: "#0891B2",
        heroBackground: template.heroClass,
        emotionalBackground: template.emotionalClass,
        testimonialsBackground: template.testimonialsClass,
        aboutBackground: template.aboutClass,
        galleryBackground: template.galleryClass,
        processBackground: template.processClass,
        whyUsBackground: template.whyUsClass,
        contactBackground: template.contactClass
      }
    });
  });

  // 13 Advanced Geometric Templates - Each with unique geometric patterns
  const geometricTemplates = [
    {
      name: "משושים הקסגונליים",
      bgClass: "bg-gradient-to-br from-orange-900 via-red-900/60 to-yellow-800/50",
      effectClass: "hexagon-pattern geometric-flow",
      heroClass: "bg-gradient-to-br from-orange-900/80 via-red-900/70 to-yellow-800/80 hexagon-bg geometric-overlay",
      emotionalClass: "bg-orange-900/90 border-y border-yellow-400/50 hexagon-border",
      testimonialsClass: "bg-gradient-to-r from-red-800/40 to-orange-800/40 backdrop-blur-sm hexagon-testimonials",
      aboutClass: "bg-orange-900/85 shadow-hexagon geometric-about",
      galleryClass: "bg-red-900/20 backdrop-blur-lg hexagon-gallery",
      processClass: "bg-orange-900/95 border-y border-red-400/40 hexagon-process",
      whyUsClass: "bg-gradient-to-bl from-yellow-800/30 to-orange-900/30 backdrop-blur-md hexagon-whyus",
      contactClass: "bg-orange-900/90 border-t border-yellow-400/60 hexagon-contact"
    },
    {
      name: "משולשים דינמיים",
      bgClass: "bg-gradient-to-tl from-blue-900 via-indigo-900/60 to-purple-800/50",
      effectClass: "triangle-pattern dynamic-triangles",
      heroClass: "bg-gradient-to-tl from-blue-900/80 via-indigo-900/70 to-purple-800/80 triangle-bg dynamic-overlay",
      emotionalClass: "bg-blue-900/90 border-y border-purple-400/50 triangle-border",
      testimonialsClass: "bg-gradient-to-r from-indigo-800/40 to-blue-800/40 backdrop-blur-sm triangle-testimonials",
      aboutClass: "bg-blue-900/85 shadow-triangle dynamic-about",
      galleryClass: "bg-indigo-900/20 backdrop-blur-lg triangle-gallery",
      processClass: "bg-blue-900/95 border-y border-indigo-400/40 triangle-process",
      whyUsClass: "bg-gradient-to-br from-purple-800/30 to-blue-900/30 backdrop-blur-md triangle-whyus",
      contactClass: "bg-blue-900/90 border-t border-purple-400/60 triangle-contact"
    },
    {
      name: "מעגלים רדיאליים",
      bgClass: "bg-gradient-to-r from-green-900 via-teal-900/60 to-emerald-800/50",
      effectClass: "circle-pattern radial-circles",
      heroClass: "bg-gradient-to-r from-green-900/80 via-teal-900/70 to-emerald-800/80 circle-bg radial-overlay",
      emotionalClass: "bg-green-900/90 border-y border-emerald-400/50 circle-border",
      testimonialsClass: "bg-gradient-to-r from-teal-800/40 to-green-800/40 backdrop-blur-sm circle-testimonials",
      aboutClass: "bg-green-900/85 shadow-circle radial-about",
      galleryClass: "bg-teal-900/20 backdrop-blur-lg circle-gallery",
      processClass: "bg-green-900/95 border-y border-teal-400/40 circle-process",
      whyUsClass: "bg-gradient-to-tr from-emerald-800/30 to-green-900/30 backdrop-blur-md circle-whyus",
      contactClass: "bg-green-900/90 border-t border-emerald-400/60 circle-contact"
    },
    {
      name: "יהלומים גיאומטריים",
      bgClass: "bg-gradient-to-bl from-purple-900 via-pink-900/60 to-rose-800/50",
      effectClass: "diamond-pattern geometric-diamonds",
      heroClass: "bg-gradient-to-bl from-purple-900/80 via-pink-900/70 to-rose-800/80 diamond-bg geometric-shine",
      emotionalClass: "bg-purple-900/90 border-y border-rose-400/50 diamond-border",
      testimonialsClass: "bg-gradient-to-r from-pink-800/40 to-purple-800/40 backdrop-blur-sm diamond-testimonials",
      aboutClass: "bg-purple-900/85 shadow-diamond geometric-luxury",
      galleryClass: "bg-pink-900/20 backdrop-blur-lg diamond-gallery",
      processClass: "bg-purple-900/95 border-y border-pink-400/40 diamond-process",
      whyusClass: "bg-gradient-to-tl from-rose-800/30 to-purple-900/30 backdrop-blur-md diamond-whyus",
      contactClass: "bg-purple-900/90 border-t border-rose-400/60 diamond-contact"
    },
    {
      name: "ריבועים מודולריים",
      bgClass: "bg-gradient-to-tr from-gray-900 via-slate-800/60 to-zinc-700/50",
      effectClass: "square-pattern modular-squares",
      heroClass: "bg-gradient-to-tr from-gray-900/80 via-slate-800/70 to-zinc-700/80 square-bg modular-overlay",
      emotionalClass: "bg-gray-900/90 border-y border-zinc-400/50 square-border",
      testimonialsClass: "bg-gradient-to-r from-slate-800/40 to-gray-800/40 backdrop-blur-sm square-testimonials",
      aboutClass: "bg-gray-900/85 shadow-square modular-about",
      galleryClass: "bg-slate-800/20 backdrop-blur-lg square-gallery",
      processClass: "bg-gray-900/95 border-y border-slate-400/40 square-process",
      whyUsClass: "bg-gradient-to-bl from-zinc-700/30 to-gray-900/30 backdrop-blur-md square-whyus",
      contactClass: "bg-gray-900/90 border-t border-zinc-400/60 square-contact"
    },
    {
      name: "חמושים גיאומטריים",
      bgClass: "bg-gradient-to-r from-cyan-900 via-blue-800/60 to-indigo-800/50",
      effectClass: "pentagon-pattern geometric-pentagons",
      heroClass: "bg-gradient-to-r from-cyan-900/80 via-blue-800/70 to-indigo-800/80 pentagon-bg geometric-flow",
      emotionalClass: "bg-cyan-900/90 border-y border-indigo-400/50 pentagon-border",
      testimonialsClass: "bg-gradient-to-r from-blue-800/40 to-cyan-800/40 backdrop-blur-sm pentagon-testimonials",
      aboutClass: "bg-cyan-900/85 shadow-pentagon geometric-structure",
      galleryClass: "bg-blue-800/20 backdrop-blur-lg pentagon-gallery",
      processClass: "bg-cyan-900/95 border-y border-blue-400/40 pentagon-process",
      whyUsClass: "bg-gradient-to-tl from-indigo-800/30 to-cyan-900/30 backdrop-blur-md pentagon-whyus",
      contactClass: "bg-cyan-900/90 border-t border-indigo-400/60 pentagon-contact"
    },
    {
      name: "כוכבים גיאומטריים",
      bgClass: "bg-gradient-to-tl from-yellow-800 via-amber-800/60 to-orange-700/50",
      effectClass: "star-pattern geometric-stars",
      heroClass: "bg-gradient-to-tl from-yellow-800/80 via-amber-800/70 to-orange-700/80 star-bg celestial-overlay",
      emotionalClass: "bg-yellow-800/90 border-y border-orange-400/50 star-border",
      testimonialsClass: "bg-gradient-to-r from-amber-800/40 to-yellow-700/40 backdrop-blur-sm star-testimonials",
      aboutClass: "bg-yellow-800/85 shadow-star celestial-about",
      galleryClass: "bg-amber-800/20 backdrop-blur-lg star-gallery",
      processClass: "bg-yellow-800/95 border-y border-amber-400/40 star-process",
      whyUsClass: "bg-gradient-to-br from-orange-700/30 to-yellow-800/30 backdrop-blur-md star-whyus",
      contactClass: "bg-yellow-800/90 border-t border-orange-400/60 star-contact"
    },
    {
      name: "אליפסות דינמיות",
      bgClass: "bg-gradient-to-bl from-teal-900 via-cyan-800/60 to-blue-800/50",
      effectClass: "ellipse-pattern dynamic-ellipses",
      heroClass: "bg-gradient-to-bl from-teal-900/80 via-cyan-800/70 to-blue-800/80 ellipse-bg fluid-overlay",
      emotionalClass: "bg-teal-900/90 border-y border-blue-400/50 ellipse-border",
      testimonialsClass: "bg-gradient-to-r from-cyan-800/40 to-teal-800/40 backdrop-blur-sm ellipse-testimonials",
      aboutClass: "bg-teal-900/85 shadow-ellipse fluid-about",
      galleryClass: "bg-cyan-800/20 backdrop-blur-lg ellipse-gallery",
      processClass: "bg-teal-900/95 border-y border-cyan-400/40 ellipse-process",
      whyUsClass: "bg-gradient-to-tr from-blue-800/30 to-teal-900/30 backdrop-blur-md ellipse-whyus",
      contactClass: "bg-teal-900/90 border-t border-blue-400/60 ellipse-contact"
    },
    {
      name: "אוקטגונים מתוחכמים",
      bgClass: "bg-gradient-to-tr from-red-900 via-pink-800/60 to-rose-700/50",
      effectClass: "octagon-pattern sophisticated-octagons",
      heroClass: "bg-gradient-to-tr from-red-900/80 via-pink-800/70 to-rose-700/80 octagon-bg sophisticated-overlay",
      emotionalClass: "bg-red-900/90 border-y border-rose-400/50 octagon-border",
      testimonialsClass: "bg-gradient-to-r from-pink-800/40 to-red-800/40 backdrop-blur-sm octagon-testimonials",
      aboutClass: "bg-red-900/85 shadow-octagon sophisticated-about",
      galleryClass: "bg-pink-800/20 backdrop-blur-lg octagon-gallery",
      processClass: "bg-red-900/95 border-y border-pink-400/40 octagon-process",
      whyUsClass: "bg-gradient-to-bl from-rose-700/30 to-red-900/30 backdrop-blur-md octagon-whyus",
      contactClass: "bg-red-900/90 border-t border-rose-400/60 octagon-contact"
    },
    {
      name: "ספירלות היפנוטיות",
      bgClass: "bg-gradient-to-r from-violet-900 via-purple-800/60 to-indigo-700/50",
      effectClass: "spiral-pattern hypnotic-spirals",
      heroClass: "bg-gradient-to-r from-violet-900/80 via-purple-800/70 to-indigo-700/80 spiral-bg hypnotic-overlay",
      emotionalClass: "bg-violet-900/90 border-y border-indigo-400/50 spiral-border",
      testimonialsClass: "bg-gradient-to-r from-purple-800/40 to-violet-800/40 backdrop-blur-sm spiral-testimonials",
      aboutClass: "bg-violet-900/85 shadow-spiral hypnotic-about",
      galleryClass: "bg-purple-800/20 backdrop-blur-lg spiral-gallery",
      processClass: "bg-violet-900/95 border-y border-purple-400/40 spiral-process",
      whyUsClass: "bg-gradient-to-tl from-indigo-700/30 to-violet-900/30 backdrop-blur-md spiral-whyus",
      contactClass: "bg-violet-900/90 border-t border-indigo-400/60 spiral-contact"
    },
    {
      name: "קווים אלכסוניים",
      bgClass: "bg-gradient-to-tl from-emerald-900 via-green-800/60 to-teal-700/50",
      effectClass: "diagonal-pattern geometric-lines",
      heroClass: "bg-gradient-to-tl from-emerald-900/80 via-green-800/70 to-teal-700/80 diagonal-bg linear-overlay",
      emotionalClass: "bg-emerald-900/90 border-y border-teal-400/50 diagonal-border",
      testimonialsClass: "bg-gradient-to-r from-green-800/40 to-emerald-800/40 backdrop-blur-sm diagonal-testimonials",
      aboutClass: "bg-emerald-900/85 shadow-diagonal linear-about",
      galleryClass: "bg-green-800/20 backdrop-blur-lg diagonal-gallery",
      processClass: "bg-emerald-900/95 border-y border-green-400/40 diagonal-process",
      whyUsClass: "bg-gradient-to-br from-teal-700/30 to-emerald-900/30 backdrop-blur-md diagonal-whyus",
      contactClass: "bg-emerald-900/90 border-t border-teal-400/60 diagonal-contact"
    },
    {
      name: "גלים גיאומטריים",
      bgClass: "bg-gradient-to-bl from-slate-900 via-gray-800/60 to-blue-800/50",
      effectClass: "wave-pattern geometric-waves",
      heroClass: "bg-gradient-to-bl from-slate-900/80 via-gray-800/70 to-blue-800/80 wave-bg flowing-overlay",
      emotionalClass: "bg-slate-900/90 border-y border-blue-400/50 wave-border",
      testimonialsClass: "bg-gradient-to-r from-gray-800/40 to-slate-800/40 backdrop-blur-sm wave-testimonials",
      aboutClass: "bg-slate-900/85 shadow-wave flowing-about",
      galleryClass: "bg-gray-800/20 backdrop-blur-lg wave-gallery",
      processClass: "bg-slate-900/95 border-y border-gray-400/40 wave-process",
      whyUsClass: "bg-gradient-to-tr from-blue-800/30 to-slate-900/30 backdrop-blur-md wave-whyus",
      contactClass: "bg-slate-900/90 border-t border-blue-400/60 wave-contact"
    },
    {
      name: "רשת תלת-מימדית",
      bgClass: "bg-gradient-to-tr from-amber-900 via-yellow-800/60 to-orange-700/50",
      effectClass: "grid-3d-pattern dimensional-grid",
      heroClass: "bg-gradient-to-tr from-amber-900/80 via-yellow-800/70 to-orange-700/80 grid-3d-bg dimensional-overlay",
      emotionalClass: "bg-amber-900/90 border-y border-orange-400/50 grid-3d-border",
      testimonialsClass: "bg-gradient-to-r from-yellow-800/40 to-amber-800/40 backdrop-blur-sm grid-3d-testimonials",
      aboutClass: "bg-amber-900/85 shadow-grid-3d dimensional-about",
      galleryClass: "bg-yellow-800/20 backdrop-blur-lg grid-3d-gallery",
      processClass: "bg-amber-900/95 border-y border-yellow-400/40 grid-3d-process",
      whyUsClass: "bg-gradient-to-bl from-orange-700/30 to-amber-900/30 backdrop-blur-md grid-3d-whyus",
      contactClass: "bg-amber-900/90 border-t border-orange-400/60 grid-3d-contact"
    }
  ];

  // Generate 13 Geometric Templates
  geometricTemplates.forEach((template, i) => {
    templates.push({
      id: id++,
      name: template.name,
      category: 'geometric',
      hero: {
        badge: i % 2 === 0 ? "גיאומטריה מתקדמת" : i % 3 === 0 ? "צורות מושלמות" : undefined,
        title: `צורות מדויקות ויפות`,
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
        backgroundColor: template.bgClass,
        textColor: "text-white font-medium drop-shadow-lg",
        primaryColor: "#F59E0B",
        secondaryColor: "#D97706",
        heroBackground: template.heroClass,
        emotionalBackground: template.emotionalClass,
        testimonialsBackground: template.testimonialsClass,
        aboutBackground: template.aboutClass,
        galleryBackground: template.galleryClass,
        processBackground: template.processClass,
        whyUsBackground: template.whyUsClass,
        contactBackground: template.contactClass
      }
    });
  });

  // 13 Advanced Creative Templates - Each with unique artistic effects
  const creativeTemplates = [
    {
      name: "מכחול מים צבעוני",
      bgClass: "bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100",
      effectClass: "watercolor-splash artistic-flow",
      heroClass: "bg-gradient-to-br from-blue-200/60 via-purple-100/70 to-pink-200/60 watercolor-bg artistic-texture",
      emotionalClass: "bg-blue-50/80 border-y border-purple-300/40 watercolor-border artistic-edge",
      testimonialsClass: "bg-gradient-to-r from-purple-100/50 to-pink-100/50 watercolor-testimonials",
      aboutClass: "bg-white/90 shadow-watercolor artistic-shadow",
      galleryClass: "bg-pink-50/60 watercolor-gallery",
      processClass: "bg-white/95 border-y border-blue-200/30 watercolor-process",
      whyUsClass: "bg-gradient-to-tl from-pink-100/40 to-blue-100/40 watercolor-whyus",
      contactClass: "bg-purple-50/80 border-t border-pink-300/50 watercolor-contact"
    },
    {
      name: "גרפיטי אורבני",
      bgClass: "bg-gradient-to-tl from-gray-800 via-slate-700/80 to-zinc-600/70",
      effectClass: "graffiti-effect urban-texture",
      heroClass: "bg-gradient-to-tl from-gray-800/90 via-slate-700/80 to-zinc-600/90 graffiti-bg urban-overlay",
      emotionalClass: "bg-gray-800/95 border-y border-zinc-400/60 graffiti-border urban-edge",
      testimonialsClass: "bg-gradient-to-r from-slate-700/60 to-gray-700/60 graffiti-testimonials",
      aboutClass: "bg-gray-900/90 shadow-graffiti urban-shadow",
      galleryClass: "bg-zinc-800/40 graffiti-gallery",
      processClass: "bg-gray-800/95 border-y border-slate-400/50 graffiti-process",
      whyUsClass: "bg-gradient-to-br from-zinc-600/50 to-gray-800/50 graffiti-whyus",
      contactClass: "bg-slate-800/90 border-t border-zinc-400/70 graffiti-contact"
    },
    {
      name: "פסטל חלומי",
      bgClass: "bg-gradient-to-bl from-pink-50 via-lavender-25 to-mint-50",
      effectClass: "pastel-dream soft-glow",
      heroClass: "bg-gradient-to-bl from-pink-100/50 via-lavender-50/60 to-mint-100/50 pastel-bg dreamy-texture",
      emotionalClass: "bg-pink-25/90 border-y border-lavender-200/30 pastel-border dreamy-edge",
      testimonialsClass: "bg-gradient-to-r from-lavender-50/40 to-mint-50/40 pastel-testimonials",
      aboutClass: "bg-white/95 shadow-pastel dreamy-shadow",
      galleryClass: "bg-mint-25/60 pastel-gallery",
      processClass: "bg-white/98 border-y border-pink-100/25 pastel-process",
      whyUsClass: "bg-gradient-to-tr from-mint-50/30 to-pink-50/30 pastel-whyus",
      contactClass: "bg-lavender-25/85 border-t border-mint-200/40 pastel-contact"
    },
    {
      name: "נייר מקומט אמנותי",
      bgClass: "bg-gradient-to-r from-amber-50 via-orange-25 to-yellow-50",
      effectClass: "paper-crumple texture-artistic",
      heroClass: "bg-gradient-to-r from-amber-100/60 via-orange-50/70 to-yellow-100/60 paper-bg crumpled-texture",
      emotionalClass: "bg-amber-25/90 border-y border-orange-200/40 paper-border textured-edge",
      testimonialsClass: "bg-gradient-to-r from-orange-50/50 to-yellow-50/50 paper-testimonials",
      aboutClass: "bg-white/92 shadow-paper textured-shadow",
      galleryClass: "bg-yellow-25/65 paper-gallery",
      processClass: "bg-white/96 border-y border-amber-100/30 paper-process",
      whyUsClass: "bg-gradient-to-bl from-yellow-50/35 to-amber-50/35 paper-whyus",
      contactClass: "bg-orange-25/80 border-t border-yellow-200/45 paper-contact"
    },
    {
      name: "ספריי ארט רחוב",
      bgClass: "bg-gradient-to-tl from-red-700 via-orange-600/70 to-yellow-500/60",
      effectClass: "spray-paint street-art",
      heroClass: "bg-gradient-to-tl from-red-700/85 via-orange-600/75 to-yellow-500/85 spray-bg street-overlay",
      emotionalClass: "bg-red-700/90 border-y border-yellow-400/60 spray-border street-edge",
      testimonialsClass: "bg-gradient-to-r from-orange-600/55 to-red-600/55 spray-testimonials",
      aboutClass: "bg-red-800/90 shadow-spray street-shadow",
      galleryClass: "bg-orange-700/35 spray-gallery",
      processClass: "bg-red-700/95 border-y border-orange-400/50 spray-process",
      whyUsClass: "bg-gradient-to-tr from-yellow-500/45 to-red-700/45 spray-whyus",
      contactClass: "bg-orange-700/90 border-t border-yellow-400/65 spray-contact"
    },
    {
      name: "קולאז' אמנותי",
      bgClass: "bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-100",
      effectClass: "collage-art mixed-media",
      heroClass: "bg-gradient-to-br from-teal-200/55 via-cyan-100/65 to-blue-200/55 collage-bg mixed-texture",
      emotionalClass: "bg-teal-50/85 border-y border-cyan-300/35 collage-border mixed-edge",
      testimonialsClass: "bg-gradient-to-r from-cyan-100/45 to-blue-100/45 collage-testimonials",
      aboutClass: "bg-white/93 shadow-collage mixed-shadow",
      galleryClass: "bg-blue-50/60 collage-gallery",
      processClass: "bg-white/97 border-y border-teal-200/25 collage-process",
      whyUsClass: "bg-gradient-to-bl from-blue-100/30 to-teal-100/30 collage-whyus",
      contactClass: "bg-cyan-50/80 border-t border-blue-300/40 collage-contact"
    },
    {
      name: "מרקם בד אמנותי",
      bgClass: "bg-gradient-to-bl from-indigo-100 via-purple-50 to-pink-100",
      effectClass: "fabric-texture artistic-weave",
      heroClass: "bg-gradient-to-bl from-indigo-200/50 via-purple-100/60 to-pink-200/50 fabric-bg woven-texture",
      emotionalClass: "bg-indigo-50/85 border-y border-purple-300/35 fabric-border woven-edge",
      testimonialsClass: "bg-gradient-to-r from-purple-100/45 to-pink-100/45 fabric-testimonials",
      aboutClass: "bg-white/94 shadow-fabric woven-shadow",
      galleryClass: "bg-pink-50/60 fabric-gallery",
      processClass: "bg-white/98 border-y border-indigo-200/25 fabric-process",
      whyUsClass: "bg-gradient-to-tr from-pink-100/30 to-indigo-100/30 fabric-whyus",
      contactClass: "bg-purple-50/80 border-t border-pink-300/40 fabric-contact"
    },
    {
      name: "צבעי שמן קלאסיים",
      bgClass: "bg-gradient-to-r from-emerald-100 via-green-50 to-teal-100",
      effectClass: "oil-paint classical-art",
      heroClass: "bg-gradient-to-r from-emerald-200/55 via-green-100/65 to-teal-200/55 oil-bg classical-texture",
      emotionalClass: "bg-emerald-50/85 border-y border-green-300/35 oil-border classical-edge",
      testimonialsClass: "bg-gradient-to-r from-green-100/45 to-teal-100/45 oil-testimonials",
      aboutClass: "bg-white/93 shadow-oil classical-shadow",
      galleryClass: "bg-teal-50/60 oil-gallery",
      processClass: "bg-white/97 border-y border-emerald-200/25 oil-process",
      whyUsClass: "bg-gradient-to-tl from-teal-100/30 to-emerald-100/30 oil-whyus",
      contactClass: "bg-green-50/80 border-t border-teal-300/40 oil-contact"
    },
    {
      name: "דיו סיני מסורתי",
      bgClass: "bg-gradient-to-tl from-gray-100 via-slate-50 to-zinc-100",
      effectClass: "ink-wash traditional-chinese",
      heroClass: "bg-gradient-to-tl from-gray-200/50 via-slate-100/60 to-zinc-200/50 ink-bg traditional-texture",
      emotionalClass: "bg-gray-50/85 border-y border-slate-300/35 ink-border traditional-edge",
      testimonialsClass: "bg-gradient-to-r from-slate-100/45 to-zinc-100/45 ink-testimonials",
      aboutClass: "bg-white/94 shadow-ink traditional-shadow",
      galleryClass: "bg-zinc-50/60 ink-gallery",
      processClass: "bg-white/98 border-y border-gray-200/25 ink-process",
      whyUsClass: "bg-gradient-to-br from-zinc-100/30 to-gray-100/30 ink-whyus",
      contactClass: "bg-slate-50/80 border-t border-zinc-300/40 ink-contact"
    },
    {
      name: "אקריליק מודרני",
      bgClass: "bg-gradient-to-br from-violet-100 via-fuchsia-50 to-pink-100",
      effectClass: "acrylic-modern contemporary-art",
      heroClass: "bg-gradient-to-br from-violet-200/55 via-fuchsia-100/65 to-pink-200/55 acrylic-bg contemporary-texture",
      emotionalClass: "bg-violet-50/85 border-y border-fuchsia-300/35 acrylic-border contemporary-edge", 
      testimonialsClass: "bg-gradient-to-r from-fuchsia-100/45 to-pink-100/45 acrylic-testimonials",
      aboutClass: "bg-white/93 shadow-acrylic contemporary-shadow",
      galleryClass: "bg-pink-50/60 acrylic-gallery",
      processClass: "bg-white/97 border-y border-violet-200/25 acrylic-process",
      whyUsClass: "bg-gradient-to-tl from-pink-100/30 to-violet-100/30 acrylic-whyus",
      contactClass: "bg-fuchsia-50/80 border-t border-pink-300/40 acrylic-contact"
    },
    {
      name: "פחם אמנותי",
      bgClass: "bg-gradient-to-bl from-gray-200 via-neutral-100 to-stone-100",
      effectClass: "charcoal-art artistic-sketch",
      heroClass: "bg-gradient-to-bl from-gray-300/50 via-neutral-200/60 to-stone-200/50 charcoal-bg sketch-texture",
      emotionalClass: "bg-gray-100/85 border-y border-neutral-300/35 charcoal-border sketch-edge",
      testimonialsClass: "bg-gradient-to-r from-neutral-100/45 to-stone-100/45 charcoal-testimonials",
      aboutClass: "bg-white/94 shadow-charcoal sketch-shadow",
      galleryClass: "bg-stone-100/60 charcoal-gallery",
      processClass: "bg-white/98 border-y border-gray-200/25 charcoal-process",
      whyusClass: "bg-gradient-to-tr from-stone-100/30 to-gray-200/30 charcoal-whyus",
      contactClass: "bg-neutral-100/80 border-t border-stone-300/40 charcoal-contact"
    },
    {
      name: "קרמיקה עתיקה",
      bgClass: "bg-gradient-to-tr from-amber-100 via-orange-50 to-red-100",
      effectClass: "ceramic-ancient pottery-art",
      heroClass: "bg-gradient-to-tr from-amber-200/55 via-orange-100/65 to-red-200/55 ceramic-bg pottery-texture",
      emotionalClass: "bg-amber-50/85 border-y border-orange-300/35 ceramic-border pottery-edge",
      testimonialsClass: "bg-gradient-to-r from-orange-100/45 to-red-100/45 ceramic-testimonials",
      aboutClass: "bg-white/93 shadow-ceramic pottery-shadow",
      galleryClass: "bg-red-50/60 ceramic-gallery",
      processClass: "bg-white/97 border-y border-amber-200/25 ceramic-process",
      whyUsClass: "bg-gradient-to-bl from-red-100/30 to-amber-100/30 ceramic-whyus",
      contactClass: "bg-orange-50/80 border-t border-red-300/40 ceramic-contact"
    },
    {
      name: "ויטראז צבעוני",
      bgClass: "bg-gradient-to-r from-blue-100 via-green-50 to-yellow-100",
      effectClass: "stained-glass colorful-light",
      heroClass: "bg-gradient-to-r from-blue-200/55 via-green-100/65 to-yellow-200/55 stained-bg glass-light-texture",
      emotionalClass: "bg-blue-50/85 border-y border-green-300/35 stained-border glass-edge",
      testimonialsClass: "bg-gradient-to-r from-green-100/45 to-yellow-100/45 stained-testimonials",
      aboutClass: "bg-white/93 shadow-stained glass-light-shadow",
      galleryClass: "bg-yellow-50/60 stained-gallery",
      processClass: "bg-white/97 border-y border-blue-200/25 stained-process",
      whyUsClass: "bg-gradient-to-tl from-yellow-100/30 to-blue-100/30 stained-whyus",
      contactClass: "bg-green-50/80 border-t border-yellow-300/40 stained-contact"
    }
  ];

  // Generate 13 Creative Templates
  creativeTemplates.forEach((template, i) => {
    templates.push({
      id: id++,
      name: template.name,
      category: 'creative',
      hero: {
        badge: i % 3 === 0 ? "יצירתי ומעורר השראה" : i % 4 === 0 ? "אמנות דיגיטלית" : undefined,
        title: `יצירתיות ללא גבולות`,
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
        backgroundColor: template.bgClass,
        textColor: "text-gray-800 font-semibold",
        primaryColor: "#E11D48",
        secondaryColor: "#BE185D",
        heroBackground: template.heroClass,
        emotionalBackground: template.emotionalClass,
        testimonialsBackground: template.testimonialsClass,
        aboutBackground: template.aboutClass,
        galleryBackground: template.galleryClass,
        processBackground: template.processClass,
        whyUsBackground: template.whyUsClass,
        contactBackground: template.contactClass
      }
    });
  });

  return templates;
};

export const templates = generateTemplates();
