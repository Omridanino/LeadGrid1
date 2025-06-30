
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

  // 20 Basic Templates
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
        description: `כי אנחנו לא רק ספקים - אנחנו שותפים לדרך. כל פרויקט הוא עבורנו הזדמנות ליצור משהו מיוחד.`,
        button1Text: "צרו איתנו קשר",
        button2Text: "ראו עבודות קודמות"
      },
      testimonials: {
        title: "מה הלקוחות שלנו אומרים",
        testimonials: sampleTestimonials,
        button1Text: "הצטרפו אלינו",
        button2Text: "קראו עוד ביקורות"
      },
      about: {
        title: "קצת עלינו",
        description: `אנחנו צוות של מקצוענים מנוסים שמאמינים בכוח של טכנולוגיה ויצירתיות.`,
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
      styles: {
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
      }
    });
  }

  // 20 3D Templates
  for (let i = 0; i < 20; i++) {
    templates.push({
      id: id++,
      name: `תבנית תלת-מימד ${i + 1}`,
      category: '3d',
      hero: {
        badge: i % 2 === 0 ? "תלת-מימד" : undefined,
        title: `חדשנות דיגיטלית תלת-מימדית ${i + 1}`,
        subtitle: `העתיד כאן - טכנולוגיה מתקדמת`,
        description: `חוויה ויזואלית מרהיבה עם טכנולוגיות הכי מתקדמות. אנחנו יוצרים עבורכם פתרונות דיגיטליים שמשנים את כללי המשחק.`,
        button1Text: "חוו את החדשנות",
        button2Text: "גלו את הטכנולוגיה"
      },
      emotional: {
        badge: "מהפכני",
        title: `למה העתיד מתחיל כאן?`,
        description: `כי אנחנו לא רק עוקבים אחרי הטרנדים - אנחנו יוצרים אותם. עם ויזיה חדשנית ודחיפה טכנולוגית, אנחנו הופכים חלומות לחדשנות דיגיטלית.`,
        button1Text: "הצטרפו למהפכה",
        button2Text: "ראו את העבודות שלנו"
      },
      testimonials: {
        title: "לקוחות מרוצים מדברים",
        testimonials: sampleTestimonials,
        button1Text: "הפכו ללקוחות שלנו",
        button2Text: "עוד סיפורי הצלחה"
      },
      about: {
        title: "מי אנחנו",
        description: `צוות של חלוצי טכנולוגיה שמביאים את העתיד לעכשיו. אנחנו מתמחים ביצירת חוויות דיגיטליות מרהיבות שמשנות את הדרך שבה אנשים מתקשרים עם טכנולוגיה.`,
        button1Text: "הכירו את החזון",
        button2Text: "ראו את הצוות"
      },
      gallery: {
        title: "פרויקטים מרהיבים",
        images: sampleImages,
        button1Text: "עוד פרויקטים",
        button2Text: "בואו נתחיל"
      },
      process: {
        title: "התהליך החדשני שלנו",
        steps: sampleProcessSteps,
        button1Text: "בואו נתחיל",
        button2Text: "שאלות נוספות"
      },
      whyUs: {
        title: "למה אנחנו מובילים?",
        items: sampleWhyUsItems,
        button1Text: "בחרו בעתיד",
        button2Text: "השוו אפשרויות"
      },
      contact: {
        title: "בואו ניצור משהו מדהים",
        subtitle: "יש לכם חזון? אנחנו כאן להפוך אותו למציאות דיגיטלית מרהיבה"
      },
      styles: {
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
    });
  }

  // 20 Glass Templates
  for (let i = 0; i < 20; i++) {
    templates.push({
      id: id++,
      name: `תבנית זכוכית ${i + 1}`,
      category: 'glass',
      hero: {
        badge: i % 3 === 0 ? "שקוף" : undefined,
        title: `אלגנטיות שקופה ${i + 1}`,
        subtitle: `עיצוב מינימליסטי ומתוחכם`,
        description: `חוויה ויזואלית עדינה ומתוחכמת. אנחנו מאמינים בכוח של הפשטות וביופי של השקיפות - פתרונות נקיים ואלגנטיים.`,
        button1Text: "גלו את היופי",
        button2Text: "התחילו כאן"
      },
      emotional: {
        badge: "אלגנטי",
        title: `למה פשטות היא המורכבות העליונה?`,
        description: `כי אמת אמנות טמונה בפרטים הקטנים. אנחנו יוצרים חוויות שמדברות בשקט אבל משאירות רושם עמוק ובלתי נשכח.`,
        button1Text: "חוו את השקט",
        button2Text: "ראו את העבודות"
      },
      testimonials: {
        title: "מה אומרים עלינו",
        testimonials: sampleTestimonials,
        button1Text: "הצטרפו אלינו",
        button2Text: "עוד המלצות"
      },
      about: {
        title: "הסיפור שלנו",
        description: `אנחנו מאמינים שיופי אמיתי נמצא בפשטות. הצוות שלנו מתמחה ביצירת פתרונות נקיים, אלגנטיים ושקופים שמדגישים את התוכן החשוב באמת.`,
        button1Text: "למדו עלינו",
        button2Text: "הפילוסופיה שלנו"
      },
      gallery: {
        title: "עבודות נבחרות",
        images: sampleImages,
        button1Text: "עוד יצירות",
        button2Text: "בואו נתחיל"
      },
      process: i % 2 === 0 ? {
        title: "התהליך הנקי שלנו",
        steps: sampleProcessSteps,
        button1Text: "התחילו איתנו",
        button2Text: "שאלו אותנו"
      } : undefined,
      whyUs: {
        title: "למה דווקא אנחנו?",
        items: sampleWhyUsItems,
        button1Text: "בחרו באלגנטיות",
        button2Text: "השוו אפשרויות"
      },
      contact: {
        title: "בואו נדבר",
        subtitle: "יש לכם רעיון? אנחנו כאן להפוך אותו לחוויה אלגנטית ומרהיבה"
      },
      styles: {
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
    });
  }

  // 20 Geometric Templates
  for (let i = 0; i < 20; i++) {
    templates.push({
      id: id++,
      name: `תבנית גיאומטרית ${i + 1}`,
      category: 'geometric',
      hero: {
        badge: i % 2 === 0 ? "גיאומטרי" : undefined,
        title: `צורות מדויקות ${i + 1}`,
        subtitle: `מתמטיקה יפה בעיצוב`,
        description: `עיצוב מדויק ומתמטי שמשלב יופי עם פונקציונליות. אנחנו יוצרים הרמוניה מושלמת בין גיאומטריה לאמנות דיגיטלית.`,
        button1Text: "גלו את הדיוק",
        button2Text: "התחילו כאן"
      },
      emotional: {
        badge: "מדויק",
        title: `למה דיוק הוא יופי?`,
        description: `כי בעולם מורכב, יש יופי בפשטות המתמטית. אנחנו מביאים סדר לכאוס ויוצרים הרמוניה מושלמת בכל פרוייקט.`,
        button1Text: "חוו את הסדר",
        button2Text: "ראו את העבודות"
      },
      testimonials: {
        title: "לקוחות מרוצים",
        testimonials: sampleTestimonials,
        button1Text: "הצטרפו למשפחה",
        button2Text: "עוד ביקורות"
      },
      about: {
        title: "הגישה שלנו",
        description: `אנחנו מאמינים במתמטיקה של היופי. הצוות שלנו מתמחה ביצירת עיצובים גיאומטריים מדויקים שמשלבים אסתטיקה עם פונקציונליות מושלמת.`,
        button1Text: "למדו על הגישה",
        button2Text: "הכירו את הצוות"
      },
      gallery: {
        title: "יצירות מדויקות",
        images: sampleImages,
        button1Text: "עוד יצירות",
        button2Text: "בואו נתחיל"
      },
      process: {
        title: "התהליך המתמטי שלנו",
        steps: sampleProcessSteps,
        button1Text: "התחילו איתנו",
        button2Text: "שאלות נוספות"
      },
      whyUs: {
        title: "למה אנחנו מדויקים?",
        items: sampleWhyUsItems,
        button1Text: "בחרו בדיוק",
        button2Text: "השוו אפשרויות"
      },
      contact: {
        title: "בואו ניצור דיוק",
        subtitle: "יש לכם פרוייקט? אנחנו כאן להפוך אותו ליצירת אמנות גיאומטרית"
      },
      styles: {
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
    });
  }

  // 20 Creative Templates
  for (let i = 0; i < 20; i++) {
    templates.push({
      id: id++,
      name: `תבנית יצירתית ${i + 1}`,
      category: 'creative',
      hero: {
        badge: i % 3 === 0 ? "יצירתי" : undefined,
        title: `יצירתיות ללא גבול ${i + 1}`,
        subtitle: `חדשנות ואמנות דיגיטלית`,
        description: `עיצוב שבוקע משפע של יצירתיות וחדשנות. אנחנו משחררים את הדמיון ויוצרים חוויות ייחודיות שמעוררות השראה ומשאירות חותם.`,
        button1Text: "שחררו יצירתיות",
        button2Text: "גלו את החדשנות"
      },
      emotional: {
        badge: "מעורר השראה",
        title: `למה יצירתיות משנה הכל?`,
        description: `כי היא הופכת את הרגיל לחריג ואת החלום למציאות. אנחנו לא רק יוצרים פתרונות - אנחנו יוצרים חוויות שמעוררות רגשות ומשאירות זיכרונות.`,
        button1Text: "הצטרפו למסע",
        button2Text: "ראו את הקסם"
      },
      testimonials: {
        title: "סיפורי הצלחה",
        testimonials: sampleTestimonials,
        button1Text: "הפכו לסיפור הבא",
        button2Text: "עוד סיפורים"
      },
      about: {
        title: "המשימה שלנו",
        description: `אנחנו מאמינים שיצירתיות היא הכוח שמניע את העולם קדימה. הצוות שלנו מקדיש את הכישרון ליצירת פתרונות דיגיטליים שמעוררים השראה ומחברים לבבות.`,
        button1Text: "הכירו את המשימה",
        button2Text: "ראו את הצוות"
      },
      gallery: {
        title: "גלריית השראה",
        images: sampleImages,
        button1Text: "עוד יצירות",
        button2Text: "בואו ניצור יחד"
      },
      process: i % 4 === 0 ? {
        title: "התהליך היצירתי שלנו",
        steps: sampleProcessSteps,
        button1Text: "התחילו את המסע",
        button2Text: "שאלו אותנו הכל"
      } : undefined,
      whyUs: {
        title: "למה אנחנו יוצאי דופן?",
        items: sampleWhyUsItems,
        button1Text: "בחרו ביצירתיות",
        button2Text: "השוו חוויות"
      },
      contact: {
        title: "בואו ניצור קסם",
        subtitle: "יש לכם חלום דיגיטלי? אנחנו כאן להפוך אותו למציאות יצירתית ומעוררת השראה"
      },
      styles: {
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
    });
  }

  return templates;
};

export const templates = generateTemplates();
