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

    // Get appropriate style based on business type - now with only 4 items each
    const getWhyChooseStyle = () => {
      const lowerBusinessType = businessType.toLowerCase();
      
      if (lowerBusinessType.includes('אדריכל') || lowerBusinessType.includes('עיצוב') || lowerBusinessType.includes('בניה')) {
        return 'architecture';
      } else if (lowerBusinessType.includes('רפואה') || lowerBusinessType.includes('בריאות') || lowerBusinessType.includes('דוקטור')) {
        return 'medical';
      } else if (lowerBusinessType.includes('טכנולוגיה') || lowerBusinessType.includes('תוכנה') || lowerBusinessType.includes('מחשבים')) {
        return 'tech';
      } else if (lowerBusinessType.includes('חינוך') || lowerBusinessType.includes('הוראה') || lowerBusinessType.includes('לימודים')) {
        return 'education';
      } else if (lowerBusinessType.includes('מזון') || lowerBusinessType.includes('מסעדה') || lowerBusinessType.includes('קייטרינג')) {
        return 'food';
      } else if (lowerBusinessType.includes('אופנה') || lowerBusinessType.includes('ביגוד') || lowerBusinessType.includes('יופי')) {
        return 'fashion';
      } else if (lowerBusinessType.includes('משפטים') || lowerBusinessType.includes('עורך דין') || lowerBusinessType.includes('יעוץ')) {
        return 'legal';
      } else if (lowerBusinessType.includes('נדלן') || lowerBusinessType.includes('השקעות') || lowerBusinessType.includes('בית')) {
        return 'realestate';
      } else if (lowerBusinessType.includes('ספורט') || lowerBusinessType.includes('כושר') || lowerBusinessType.includes('אימון')) {
        return 'fitness';
      } else if (lowerBusinessType.includes('אמנות') || lowerBusinessType.includes('תרבות') || lowerBusinessType.includes('יצירה')) {
        return 'creative';
      } else {
        return 'general';
      }
    };

    const whyChooseStyles = {
      architecture: {
        title: "למה לבחור בנו לפרויקט שלכם?",
        items: [
          { text: "מומחיות בתכנון אדריכלי מתקדם", icon: "building-line" },
          { text: "שירות אדריכלי ברמה הגבוהה ביותר", icon: "pencil-ruler-2-line" },
          { text: "פתרונות יצירתיים ומותאמים אישית", icon: "lightbulb-line" },
          { text: "ליווי מלא לאורך כל הפרויקט", icon: "team-line" }
        ]
      },
      medical: {
        title: "למה לבחור בנו לבריאות שלכם?",
        items: [
          { text: "רפואה מתקדמת וטכנולוגיה חדישה", icon: "stethoscope-line" },
          { text: "צוות רפואי מקצועי ומנוסה", icon: "user-heart-line" },
          { text: "טיפול אישי ומסור לכל מטופל", icon: "heart-line" },
          { text: "זמינות 24/7 למקרי חירום", icon: "phone-line" }
        ]
      },
      tech: {
        title: "למה לבחור בנו לפתרונות טכנולוגיים?",
        items: [
          { text: "טכנולוגיות מתקדמות וחדשניות", icon: "rocket-line" },
          { text: "פיתוח תוכנה מותאם לצרכים", icon: "code-line" },
          { text: "תמיכה טכנית מקצועית 24/7", icon: "customer-service-line" },
          { text: "אבטחת מידע ברמה הגבוהה", icon: "shield-check-line" }
        ]
      },
      education: {
        title: "למה לבחור בנו ללימודים?",
        items: [
          { text: "צוות הוראה מקצועי ומנוסה", icon: "graduation-cap-line" },
          { text: "שיטות הוראה חדשניות ומותאמות", icon: "book-open-line" },
          { text: "ליווי אישי לכל תלמיד", icon: "user-line" },
          { text: "תוצאות לימודיות מוכחות", icon: "trophy-line" }
        ]
      },
      food: {
        title: "למה לבחור בנו לחוויית הקולינרית?",
        items: [
          { text: "מזון טרי ואיכותי ביותר", icon: "restaurant-line" },
          { text: "שפים מקצועיים ומנוסים", icon: "user-star-line" },
          { text: "תפריט מגוון ומתחדש", icon: "file-list-3-line" },
          { text: "שירות מהיר ואדיב", icon: "customer-service-2-line" }
        ]
      },
      fashion: {
        title: "למה לבחור בנו לסטייל המושלם?",
        items: [
          { text: "אופנה עדכנית ומגמות חמות", icon: "shirt-line" },
          { text: "איכות בדים ותפירה מעולה", icon: "scissors-line" },
          { text: "עיצובים ייחודיים ובלעדיים", icon: "palette-line" },
          { text: "התאמה אישית למידות", icon: "ruler-line" }
        ]
      },
      legal: {
        title: "למה לבחור בנו לייצוג משפטי?",
        items: [
          { text: "ניסיון משפטי רב ומוכח", icon: "scales-3-line" },
          { text: "ייצוג מקצועי בכל התחומים", icon: "briefcase-line" },
          { text: "יעוץ משפטי זמין ונגיש", icon: "question-answer-line" },
          { text: "שקיפות מלאה ויושרה", icon: "eye-line" }
        ]
      },
      realestate: {
        title: "למה לבחור בנו לנדלן?",
        items: [
          { text: "ידע עמוק בשוק הנדלן", icon: "home-4-line" },
          { text: "רשת קשרים נרחבת ומקצועית", icon: "links-line" },
          { text: "שירות מלא מהחיפוש לעסקה", icon: "hand-heart-line" },
          { text: "ייעוץ השקעות מקצועי", icon: "line-chart-line" }
        ]
      },
      fitness: {
        title: "למה לבחור בנו לכושר ובריאות?",
        items: [
          { text: "מדרכים מקצועיים ומוסמכים", icon: "run-line" },
          { text: "תוכניות אימון מותאמות אישית", icon: "heart-pulse-line" },
          { text: "ציוד מתקדם ומתקני ספורט", icon: "dumbbell-line" },
          { text: "מעקב התקדמות ותוצאות", icon: "bar-chart-line" }
        ]
      },
      creative: {
        title: "למה לבחור בנו ליצירה ואמנות?",
        items: [
          { text: "יצירתיות ללא גבולות", icon: "brush-line" },
          { text: "אמנים ויצרנים מקצועיים", icon: "user-star-line" },
          { text: "חדשנות ורעיונות מקוריים", icon: "lightbulb-line" },
          { text: "איכות ביצוע ברמה הגבוהה", icon: "award-line" }
        ]
      },
      general: {
        title: "למה כדאי לבחור בנו?",
        items: [
          { text: "שירות מקצועי ואמין", icon: "star-line" },
          { text: "ניסיון רב שנים בתחום", icon: "award-line" },
          { text: "תמיכה 24/7 לכל שאלה", icon: "headphone-line" },
          { text: "מחירים הוגנים ושקופים", icon: "price-tag-line" }
        ]
      }
    };

    const selectedStyle = getWhyChooseStyle();
    const whyChooseUsContent = whyChooseStyles[selectedStyle];

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
      
      // Add the Why Choose Us section with 4 items
      whyChooseUs: whyChooseUsContent,
      
      creativeElements: []
    };
  }, [formData]);

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
