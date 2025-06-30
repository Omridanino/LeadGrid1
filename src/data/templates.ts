
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
  }
];
