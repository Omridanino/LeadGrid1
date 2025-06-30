
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

// Color schemes for different categories
const colorSchemes = {
  basic: [
    {
      backgroundColor: "bg-white",
      textColor: "text-gray-900",
      primaryColor: "#3B82F6",
      secondaryColor: "#1E40AF",
      heroBackground: "bg-gradient-to-br from-blue-50 to-indigo-100",
      emotionalBackground: "bg-gray-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-blue-50",
      galleryBackground: "bg-gray-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-blue-50",
      contactBackground: "bg-gray-100"
    },
    {
      backgroundColor: "bg-slate-50",
      textColor: "text-slate-900",
      primaryColor: "#0F172A",
      secondaryColor: "#475569",
      heroBackground: "bg-gradient-to-br from-slate-100 to-gray-200",
      emotionalBackground: "bg-slate-100",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-slate-50",
      galleryBackground: "bg-gray-100",
      processBackground: "bg-white",
      whyUsBackground: "bg-slate-100",
      contactBackground: "bg-slate-200"
    }
  ],
  "3d": [
    {
      backgroundColor: "bg-black",
      textColor: "text-white",
      primaryColor: "#8B5CF6",
      secondaryColor: "#A78BFA",
      heroBackground: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
      emotionalBackground: "bg-gradient-to-r from-purple-800 to-pink-800",
      testimonialsBackground: "bg-gray-900",
      aboutBackground: "bg-gradient-to-br from-indigo-900 to-purple-900",
      galleryBackground: "bg-black",
      processBackground: "bg-gray-900",
      whyUsBackground: "bg-gradient-to-r from-blue-900 to-purple-900",
      contactBackground: "bg-gray-800"
    }
  ],
  glass: [
    {
      backgroundColor: "bg-black/80",
      textColor: "text-white",
      primaryColor: "#06B6D4",
      secondaryColor: "#0891B2",
      heroBackground: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-lg",
      emotionalBackground: "bg-white/10 backdrop-blur-md",
      testimonialsBackground: "bg-black/40 backdrop-blur-sm",
      aboutBackground: "bg-cyan-900/20 backdrop-blur-lg",
      galleryBackground: "bg-black/60 backdrop-blur-md",
      processBackground: "bg-white/5 backdrop-blur-sm",
      whyUsBackground: "bg-blue-900/20 backdrop-blur-lg",
      contactBackground: "bg-gray-900/80 backdrop-blur-xl"
    }
  ],
  geometric: [
    {
      backgroundColor: "bg-gray-900",
      textColor: "text-white",
      primaryColor: "#F59E0B",
      secondaryColor: "#D97706",
      heroBackground: "bg-gradient-to-br from-yellow-900 to-orange-900",
      emotionalBackground: "bg-gray-800",
      testimonialsBackground: "bg-black",
      aboutBackground: "bg-gradient-to-r from-orange-900 to-red-900",
      galleryBackground: "bg-gray-900",
      processBackground: "bg-black",
      whyUsBackground: "bg-gradient-to-br from-red-900 to-yellow-900",
      contactBackground: "bg-gray-800"
    }
  ],
  creative: [
    {
      backgroundColor: "bg-rose-50",
      textColor: "text-rose-900",
      primaryColor: "#E11D48",
      secondaryColor: "#BE185D",
      heroBackground: "bg-gradient-to-br from-rose-100 to-pink-200",
      emotionalBackground: "bg-pink-50",
      testimonialsBackground: "bg-white",
      aboutBackground: "bg-rose-100",
      galleryBackground: "bg-pink-50",
      processBackground: "bg-white",
      whyUsBackground: "bg-rose-50",
      contactBackground: "bg-pink-100"
    }
  ]
};

export const generateTemplates = (): TemplateData[] => {
  const templates: TemplateData[] = [];
  let id = 1;

  // Generate 20 Basic templates
  for (let i = 0; i < 20; i++) {
    templates.push({
      id: id++,
      name: `תבנית בסיסית ${i + 1}`,
      category: 'basic',
      hero: {
        badge: i % 3 === 0 ? "חדש" : undefined,
        title: `העסק המוביל בתחום ${i + 1}`,
        subtitle: `פתרונות מקצועיים וחדשניים`,
        description: `אנחנו מביאים לכם את הטכנולוגיה הכי מתקדמת בשוק, עם שירות אישי ומקצועי שמבטיח תוצאות מעולות.`,
        button1Text: "בואו נתחיל",
        button2Text: "קבלו הצעת מחיר"
      },
      emotional: {
        badge: i % 4 === 0 ? "מיוחד" : undefined,
        title: `למה אלפי לקוחות בוחרים בנו?`,
        description: `כי אנחנו לא רק ספקים - אנחנו שותפים לדרך. כל פרויקט הוא עבורנו הזדמנות ליצור משהו מיוחד, להתאים בדיוק את מה שאתם צריכים ולהבטיח שאתם מרוצים לגמרי מהתוצאה.`,
        button1Text: "צרו איתנו קשר",
        button2Text: "ראו עבודות קודמות"
      },
      testimonials: {
        badge: i % 5 === 0 ? "ביקורות" : undefined,
        title: "מה הלקוחות שלנו אומרים",
        testimonials: sampleTestimonials,
        button1Text: "הצטרפו אלינו",
        button2Text: "קראו עוד ביקורות"
      },
      about: {
        title: "קצת עלינו",
        description: `אנחנו צוות של מקצוענים מנוסים שמאמינים בכוח של טכנולוgia ויצירתיות. החזון שלנו הוא להביא לכל עסק, גדול או קטן, את הכלים הכי מתקדמים שיעזרו לו לצמוח ולהצליח בעולם הדיגיטלי.`,
        button1Text: "הכירו את הצוות",
        button2Text: "ראו את החזון שלנו"
      },
      gallery: {
        title: "גלריית עבודות",
        images: sampleImages,
        button1Text: "ראו עוד עבודות",
        button2Text: "בקשו הצעת מחיר"
      },
      process: i % 3 === 0 ? {
        title: "איך אנחנו עובדים",
        steps: sampleProcessSteps,
        button1Text: "בואו נתחיל",
        button2Text: "שאלו אותנו שאלות"
      } : undefined,
      whyUs: {
        title: "למה דווקא אנחנו?",
        items: sampleWhyUsItems,
        button1Text: "בחרו בנו",
        button2Text: "השוו מחירים"
      },
      contact: {
        title: "בואו נדבר",
        subtitle: "אנחנו כאן בשבילכם - צרו קשר ונחזור אליכם תוך 24 שעות"
      },
      styles: colorSchemes.basic[i % colorSchemes.basic.length]
    });
  }

  // Continue with other categories...
  // This is just the beginning - we'll generate all 100 templates
  
  return templates;
};

export const templates = generateTemplates();
