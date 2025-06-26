
import { useState, useCallback } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState(null);

  const generateCreativeContent = useCallback(() => {
    const businessName = formData.businessName || "העסק שלי";
    const businessType = formData.businessType || "שירותים עסקיים";
    const targetAudience = formData.targetAudience || "לקוחות פוטנציאליים";
    const mainGoal = formData.mainGoal || "הגדלת מכירות";
    const keyFeatures = formData.keyFeatures || "שירות מקצועי, מהירות, אמינות";
    const isTechy3D = formData.designStyle === '3d'; // Check if tech style is selected

    // 15 different animated tech backgrounds for variety
    const techBackgrounds = [
      'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d2d5f 100%)',
      'linear-gradient(135deg, #0a0a1f 0%, #1e1e3f 50%, #3232b3 100%)',
      'linear-gradient(135deg, #0c0c26 0%, #1b1b42 50%, #2929a3 100%)',
      'linear-gradient(135deg, #111133 0%, #1f1f4d 50%, #3636cc 100%)',
      'linear-gradient(135deg, #0e0e2a 0%, #1c1c46 50%, #3030b8 100%)',
      'linear-gradient(135deg, #0d0d28 0%, #1a1a44 50%, #2e2eb6 100%)',
      'linear-gradient(135deg, #101030 0%, #1d1d48 50%, #3434ba 100%)',
      'linear-gradient(135deg, #0b0b24 0%, #181840 50%, #2c2cb0 100%)',
      'linear-gradient(135deg, #0f0f2c 0%, #1b1b45 50%, #3131b5 100%)',
      'linear-gradient(135deg, #0a0a22 0%, #17173e 50%, #2a2aae 100%)',
      'linear-gradient(135deg, #0e0e29 0%, #1a1a43 50%, #2f2fb4 100%)',
      'linear-gradient(135deg, #0c0c27 0%, #181841 50%, #2d2db2 100%)',
      'linear-gradient(135deg, #10102e 0%, #1c1c47 50%, #3333b7 100%)',
      'linear-gradient(135deg, #0d0d2b 0%, #191943 50%, #3030b3 100%)',
      'linear-gradient(135deg, #0f0f2d 0%, #1e1e49 50%, #3535b9 100%)'
    ];

    // Select random background for variety
    const selectedBackground = techBackgrounds[Math.floor(Math.random() * techBackgrounds.length)];

    // Enhanced content generation with domain-specific copy
    const generateDomainSpecificContent = (businessType: string) => {
      const lowerBusinessType = businessType.toLowerCase();
      
      if (lowerBusinessType.includes('אדריכל') || lowerBusinessType.includes('עיצוב') || lowerBusinessType.includes('בניה')) {
        return {
          emotionalSection: {
            title: "החלום שלכם הופך למציאות",
            content: "כל פרויקט מתחיל בחלום. אנחנו כאן כדי להפוך את החלום שלכם למבנה מרהיב שישרת אתכם לשנים רבות. עם ניסיון של שנים בתכנון ועיצוב, אנחנו יוצרים חללים שמשקפים את האישיות והצרכים שלכם.",
            icon: "🏗️"
          },
          whyUs: {
            title: "למה בדיוק אנחנו?",
            items: [
              { title: "תכנון חדשני ומתקדם", desc: "שימוש בטכנולוגיות המתקדמות ביותר בתכנון", icon: "🎯" },
              { title: "צוות מקצועי ומנוסה", desc: "אדריכלים ומהנדסים עם עשרות שנות ניסיון", icon: "👥" },
              { title: "ליווי מלא לאורך הפרויקט", desc: "מהרעיון הראשוני ועד למסירת המפתחות", icon: "🔄" },
              { title: "עמידה בלוחות זמנים", desc: "מחויבות מלאה ללוחות הזמנים שנקבעו", icon: "⏰" }
            ]
          },
          whatWeGive: {
            title: "מה אתם מקבלים מאיתנו",
            items: [
              { title: "תכנון אדריכלי מלא", desc: "כולל תוכניות מפורטות ותלת מימד", icon: "📐" },
              { title: "ייעוץ הנדסי מקצועי", desc: "בדיקות יציבות ובטיחות מלאות", icon: "🔧" },
              { title: "ליווי רגולטורי", desc: "טיפול בכל הרישיונות והאישורים", icon: "📋" },
              { title: "פיקוח על הביצוע", desc: "מעקב צמוד אחר איכות הביצוע", icon: "👁️" }
            ]
          }
        };
      } else if (lowerBusinessType.includes('רפואה') || lowerBusinessType.includes('בריאות') || lowerBusinessType.includes('דוקטור')) {
        return {
          emotionalSection: {
            title: "הבריאות שלכם - השליחות שלנו",
            content: "כל מטופל הוא עולם שלם. אנחנו כאן כדי לדאוג לבריאותכם ולרפואתכם ברמה הגבוהה ביותר. עם ציוד רפואי מתקדם וצוות מקצועי, אנחנו נותנים מענה מקצועי ואמין לכל הצרכים הרפואיים שלכם.",
            icon: "🏥"
          },
          whyUs: {
            title: "למה כדאי לבחור בנו לבריאות שלכם?",
            items: [
              { title: "צוות רפואי מומחה", desc: "רופאים מומחים עם הכשרה מתקדמת", icon: "👨‍⚕️" },
              { title: "ציוד רפואי מתקדם", desc: "טכנולוגיה רפואית חדישה ומדויקת", icon: "🔬" },
              { title: "זמינות מלאה", desc: "שירות רפואי זמין 24/7 למקרי חירום", icon: "🚑" },
              { title: "טיפול אישי ומסור", desc: "יחס אישי וחם לכל מטופל", icon: "❤️" }
            ]
          },
          whatWeGive: {
            title: "השירותים הרפואיים שלנו",
            items: [
              { title: "בדיקות מקיפות", desc: "אבחון מדויק עם ציוד מתקדם", icon: "🩺" },
              { title: "טיפולים מתקדמים", desc: "טכנולוגיות טיפול חדישות", icon: "💊" },
              { title: "מעקב רפואי", desc: "ליווי רפואי מתמשך ומקצועי", icon: "📊" },
              { title: "ייעוץ מקצועי", desc: "הדרכה והסברים מפורטים", icon: "💬" }
            ]
          }
        };
      } else if (lowerBusinessType.includes('טכנולוגיה') || lowerBusinessType.includes('תוכנה') || lowerBusinessType.includes('מחשבים')) {
        return {
          emotionalSection: {
            title: "הטכנולוגיה שמניעה את העתיד",
            content: "בעולם דיגיטלי שמתפתח בקצב מסחרר, אנחנו כאן כדי להוביל אתכם קדימה. עם פתרונות טכנולוגיים מתקדמים ויצירתיים, אנחנו הופכים את החזון הדיגיטלי שלכם למציאות מרשימה שמניבה תוצאות.",
            icon: "💻"
          },
          whyUs: {
            title: "למה אנחנו הבחירה הטכנולוגית הנכונה?",
            items: [
              { title: "חדשנות טכנולוגית מתקדמת", desc: "שימוש בטכנולוגיות החדישות ביותר", icon: "🚀" },
              { title: "צוות מפתחים מומחים", desc: "מהנדסי תוכנה עם ניסיון בינלאומי", icon: "👨‍💻" },
              { title: "פתרונות מותאמים אישית", desc: "פיתוח בהתאם לצרכים הייחודיים שלכם", icon: "⚡" },
              { title: "תמיכה טכנית 24/7", desc: "זמינות מלאה לכל בעיה טכנית", icon: "🛠️" }
            ]
          },
          whatWeGive: {
            title: "הפתרונות הטכנולוגיים שלנו",
            items: [
              { title: "פיתוח אפליקציות", desc: "אפליקציות מותאמות לנייד ואינטרנט", icon: "📱" },
              { title: "מערכות ניהול", desc: "פלטפורמות ניהול מתקדמות וידידותיות", icon: "💼" },
              { title: "אבטחת מידע", desc: "הגנה מתקדמת על המידע הדיגיטלי", icon: "🔒" },
              { title: "ייעוץ טכנולוגי", desc: "הדרכה והטמעה של הטכנולוגיות", icon: "🎯" }
            ]
          }
        };
      }
      
      // Default content for other business types
      return {
        emotionalSection: {
          title: "השירות שמשנה את המשחק",
          content: `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}. אנחנו מבינים את הצרכים שלכם ומתמחים במתן פתרונות מותאמים אישית שמביאים תוצאות אמיתיות.`,
          icon: "⭐"
        },
        whyUs: {
          title: "למה כדאי לבחור דווקא בנו?",
          items: [
            { title: "שירות מקצועי ברמה הגבוהה", desc: "צוות מנוסה עם מומחיות מוכחת", icon: "🏆" },
            { title: "זמינות ומהירות בשירות", desc: "מענה מהיר ויעיל לכל פנייה", icon: "⚡" },
            { title: "יחס אישי ומסור", desc: "טיפול אישי בכל לקוח ופרויקט", icon: "❤️" },
            { title: "מחירים הוגנים ושקופים", desc: "תמחור ברור ללא הפתעות", icon: "💰" }
          ]
        },
        whatWeGive: {
          title: "מה אתם מקבלים מאיתנו",
          items: [
            { title: "שירות מותאם אישית", desc: "פתרונות מותאמים לצרכים שלכם", icon: "🎯" },
            { title: "איכות ללא פשרות", desc: "רמת שירות גבוהה בכל שלב", icon: "✨" },
            { title: "ליווי מלא", desc: "תמיכה צמודה לאורך כל התהליך", icon: "🤝" },
            { title: "תוצאות מוכחות", desc: "הישגים קונקרטיים ומדידים", icon: "📈" }
          ]
        }
      };
    };

    const domainContent = generateDomainSpecificContent(businessType);

    return {
      // Tech background for 3D style
      techBackground: isTechy3D ? selectedBackground : null,
      
      // Hero Section
      badge: `${businessType} מקצועי`,
      headline: `${businessName} - ${domainContent.emotionalSection.title.split(' ').slice(0, 4).join(' ')}`,
      subheadline: `מספקים שירותי ${businessType} ברמה הגבוהה ביותר עבור ${targetAudience}. המומחיות והניסיון שלנו מבטיחים תוצאות מעולות שעונות על כל הצרכים שלכם.`,
      cta: mainGoal === "יצירת לידים" ? "קבלו הצעת מחיר" : 
           mainGoal === "הגדלת מכירות" ? "התחילו עכשיו" :
           mainGoal === "בניית מודעות למותג" ? "גלו עוד" : "צרו קשר",
      
      stats: {
        "לקוחות מרוצים": "500+",
        "שנות ניסיון": "10+", 
        "פרויקטים": "1000+",
        "הצלחה": "98%"
      },

      // 6 Fixed Sections for tech style
      sections: isTechy3D ? {
        // Section 1: Hero (already above)
        
        // Section 2: Emotional paragraph
        emotionalSection: domainContent.emotionalSection,
        
        // Section 3: Why us
        whyUs: domainContent.whyUs,
        
        // Section 4: What we give
        whatWeGive: domainContent.whatWeGive,
        
        // Section 5: Reviews/Testimonials
        testimonials: [
          {
            name: "דני כהן",
            role: "מנהל עסק",
            content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל הההבדל. בהחלט ממליץ!`,
            rating: 5,
            image: "👨‍💼"
          },
          {
            name: "שרה לוי", 
            role: "יזמת",
            content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת לגמרי!`,
            rating: 5,
            image: "👩‍💼"
          },
          {
            name: "מיכל רוזן",
            role: "בעלת חנות",
            content: `הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות שלי!`,
            rating: 5,
            image: "👩‍🔧"
          }
        ],
        
        // Section 6: Contact (handled separately)
        contactTitle: "בואו נתחיל לעבוד יחד"
      } : null,

      // Legacy content for non-tech styles
      featuresTitle: "למה כדאי לבחור בנו?",
      features: keyFeatures.split(',').map(feature => feature.trim()),
      aboutTitle: `אודות ${businessName}`,
      aboutText: `${businessName} הוא ${businessType} מוביל עם שנות ניסיון רבות. אנו מתמחים במתן פתרונות מקצועיים ומותאמים אישית עבור ${targetAudience}, תוך הקפדה על איכות גבוהה ושירות אישי.`,
      
      faq: [
        {
          question: `איך ${businessName} יכול לעזור לי?`,
          answer: `ב${businessName} אנו מספקים שירות מקצועי ואמין המותאם לצרכיכם הספציפיים.`
        },
        {
          question: "כמה זמן לוקח התהליך?",
          answer: "זמן הטיפול משתנה בהתאם לסוג הפרויקט, אך אנו מתחייבים למועדים קצרים ויעילים."
        },
        {
          question: "האם יש אחריות על השירות?",
          answer: "כן, אנו נותנים אחריות מלאה על כל השירותים שלנו ותמיכה מתמשכת."
        },
        {
          question: "איך אפשר ליצור קשר?",
          answer: "ניתן ליצור קשר טלפונית, במייל או דרך הטופס באתר. אנו זמינים לכל שאלה."
        }
      ],

      contactTitle: "בואו נתחיל לעבוד יחד",
      creativeElements: []
    };
  }, [formData]);

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
