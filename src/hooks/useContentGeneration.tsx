
import { useState, useCallback } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState(null);

  const generateCreativeContent = useCallback(() => {
    const businessName = formData.businessName || "העסק שלי";
    const businessType = formData.businessType || "שירותים עסקיים";
    const targetAudience = formData.targetAudience || "לקוחות פוטנציאליים";
    const mainGoal = formData.mainGoal || "הגדלת מכירות";
    const keyFeatures = formData.keyFeatures || "שירות מקצועי, מהירות, אמינות";

    // Enhanced content generation with more professional and varied language
    const generateVariedContent = (baseText: string, category: 'service' | 'testimonial' | 'faq' | 'general' = 'general') => {
      const variations = {
        service: [
          `שירות ${businessType} מקצועי ואמין`,
          `פתרונות ${businessType} מותאמים אישית`,
          `מומחיות בתחום ה${businessType}`,
          `שירותי ${businessType} ברמה הגבוהה ביותר`
        ],
        testimonial: [
          `שירות מעולה ומקצועי ב${businessType}`,
          `התוצאות הטובות ביותר שקיבלתי ב${businessType}`,
          `ממליץ בחום על השירות המקצועי`,
          `חוויה נהדרת וטיפול אישי`
        ],
        faq: [
          `איך ${businessName} יכול לעזור לי?`,
          `מה הופך את ${businessName} למיוחד?`,
          `כמה זמן לוקח התהליך?`,
          `איך אפשר ליצור קשר?`
        ],
        general: [baseText]
      };

      return variations[category][Math.floor(Math.random() * variations[category].length)] || baseText;
    };

    return {
      badge: `${businessType} מקצועי`,
      headline: `${businessName} - ${generateVariedContent('הפתרון המושלם עבורכם', 'service')}`,
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

      featuresTitle: "למה כדאי לבחור בנו?",
      features: keyFeatures.split(',').map(feature => 
        generateVariedContent(feature.trim(), 'service')
      ),

      aboutTitle: `אודות ${businessName}`,
      aboutText: `${businessName} הוא ${businessType} מוביל עם ${generateVariedContent('שנות ניסיון רבות', 'service')}. אנו מתמחים במתן פתרונות מקצועיים ומותאמים אישית עבור ${targetAudience}, תוך הקפדה על איכות גבוהה ושירות אישי.`,

      testimonials: [
        {
          name: "דני כהן",
          role: "מנהל עסק",
          content: generateVariedContent('', 'testimonial'),
          rating: 5,
          image: "👨‍💼"
        },
        {
          name: "שרה לוי", 
          role: "יזמת",
          content: generateVariedContent('', 'testimonial'),
          rating: 5,
          image: "👩‍💼"
        },
        {
          name: "מיכל רוזן",
          role: "בעלת חנות",
          content: generateVariedContent('', 'testimonial'),
          rating: 5,
          image: "👩‍🔧"
        }
      ],

      faq: [
        {
          question: generateVariedContent('', 'faq'),
          answer: `ב${businessName} אנו מספקים ${generateVariedContent('שירות מקצועי ואמין', 'service')} המותאם לצרכיכם הספציפיים.`
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
      
      // Add default Why Choose Us section
      whyChooseUs: {
        title: "למה כדאי לבחור בנו?",
        items: [
          { text: "מומחיות בתחום האדריכלות הגבוהה ביותר", icon: "award-line" },
          { text: "שירותי אדריכל ברמה הגבוהה ביותר", icon: "star-line" },
          { text: "שירות אדריכלי מקצועי ואמין", icon: "shield-check-line" },
          { text: "פתרונות אדריכלים מותאמים אישית", icon: "settings-3-line" },
          { text: "מומחיות בתחום האדריכלות", icon: "palette-line" },
          { text: "שירותי אדריכל ברמה הגבוהה ביותר", icon: "rocket-line" },
          { text: "מומחיות בתחום האדריכלות", icon: "thumb-up-line" },
          { text: "שירות אדריכלי מקצועי ואמין", icon: "heart-line" }
        ]
      },
      
      creativeElements: []
    };
  }, [formData]);

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
