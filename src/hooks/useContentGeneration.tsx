
import { useState, useCallback } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState(null);

  const generateCreativeContent = useCallback(() => {
    const businessName = formData.businessName || "העסק שלי";
    const businessType = formData.businessType || "שירותים עסקיים";
    const targetAudience = formData.targetAudience || "לקוחות פוטנציאליים";
    const mainGoal = formData.mainGoal || "הגדלת מכירות";
    const keyFeatures = formData.keyFeatures || "שירות מקצועי, מהירות, אמינות";
    const isTechy3D = formData.designStyle === '3d';

    // Enhanced tech backgrounds with more sophisticated gradients
    const techBackgrounds = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
    ];

    // Generate domain-specific content with actual content
    const generateDomainSpecificContent = (businessType: string) => {
      const lowerBusinessType = businessType.toLowerCase();
      
      if (lowerBusinessType.includes('אדריכל') || lowerBusinessType.includes('עיצוב') || lowerBusinessType.includes('בניה')) {
        return {
          emotionalSection: {
            title: "החלום שלכם הופך למציאות",
            content: "כל פרויקט מתחיל בחלום. אנחנו כאן כדי להפוך את החלום שלכם למבנה מרהיב שישרת אתכם לשנים רבות."
          },
          whyUs: {
            title: "למה בדיוק אנחנו?",
            reasons: [
              { title: "תכנון חדשני ומתקדם", description: "שימוש בטכנולוגיות המתקדמות ביותר בתכנון תלת מימדי" },
              { title: "צוות מקצועי ומנוסה", description: "אדריכלים ומהנדסים עם עשרות שנות ניסיון מוכח" },
              { title: "ליווי מלא לאורך הפרויקט", description: "מהרעיון הראשוני ועד למסירת המפתחות - אנחנו איתכם" },
              { title: "עמידה בלוחות זמנים", description: "מחויבות מלאה ללוחות הזמנים שנקבעו מראש" }
            ]
          },
          whatWeGive: {
            title: "מה אתם מקבלים מאיתנו",
            services: [
              { title: "תכנון אדריכלי מלא", description: "כולל תוכניות מפורטות ותלת מימד מרהיבות" },
              { title: "ייעוץ הנדסי מקצועי", description: "בדיקות יציבות ובטיחות מלאות על פי התקנים" },
              { title: "ליווי רגולטורי", description: "טיפול בכל הרישיונות והאישורים הנדרשים" },
              { title: "פיקוח על הביצוע", description: "מעקב צמוד אחר איכות הביצוע בשטח" }
            ]
          }
        };
      } else if (lowerBusinessType.includes('רפואה') || lowerBusinessType.includes('בריאות') || lowerBusinessType.includes('דוקטור')) {
        return {
          emotionalSection: {
            title: "הבריאות שלכם - השליחות שלנו",
            content: "כל מטופל הוא עולם שלם. אנחנו כאן כדי לדאוג לבריאותכם ולרפואתכם ברמה הגבוהה ביותר."
          },
          whyUs: {
            title: "למה כדאי לבחור בנו לבריאות שלכם?",
            reasons: [
              { title: "צוות רפואי מומחה", description: "רופאים מומחים עם הכשרה מתקדמת ומוכרת בינלאומית" },
              { title: "ציוד רפואי מתקדם", description: "טכנולוגיה רפואית חדישה ומדויקת ברמה עולמית" },
              { title: "זמינות מלאה", description: "שירות רפואי זמין 24/7 למקרי חירום ולכל צורך" },
              { title: "טיפול אישי ומסור", description: "יחס אישי וחם לכל מטופל - אתם לא רק מספר" }
            ]
          },
          whatWeGive: {
            title: "השירותים הרפואיים שלנו",
            services: [
              { title: "בדיקות מקיפות", description: "אבחון מדויק עם ציוד מתקדם ושיטות עדכניות" },
              { title: "טיפולים מתקדמים", description: "טכנולוגיות טיפול חדישות המוכרות עולמית" },
              { title: "מעקב רפואי", description: "ליווי רפואי מתמשך ומקצועי לאורך זמן" },
              { title: "ייעוץ מקצועי", description: "הדרכה והסברים מפורטים בשפה ברורה" }
            ]
          }
        };
      }
      
      // Default content for other business types
      return {
        emotionalSection: {
          title: "השירות שמשנה את המשחק",
          content: `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`
        },
        whyUs: {
          title: "למה כדאי לבחור דווקא בנו?",
          reasons: [
            { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
            { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
            { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
            { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
          ]
        },
        whatWeGive: {
          title: "מה אתם מקבלים מאיתנו",
          services: [
            { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
            { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
            { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
            { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
          ]
        }
      };
    };

    const domainContent = generateDomainSpecificContent(businessType);

    return {
      techBackground: isTechy3D ? techBackgrounds[0] : null,
      
      headline: `${businessName} - ${domainContent.emotionalSection.title.split(' ').slice(0, 4).join(' ')}`,
      subheadline: `מספקים שירותי ${businessType} ברמה הגבוהה ביותר עבור ${targetAudience}. המומחיות והניסיון שלנו מבטיחים תוצאות מעולות.`,
      cta: mainGoal === "יצירת לידים" ? "קבלו הצעת מחיר" : 
           mainGoal === "הגדלת מכירות" ? "התחילו עכשיו" :
           mainGoal === "בניית מודעות למותג" ? "גלו עוד" : "צרו קשר",
      
      sections: {
        emotionalSection: domainContent.emotionalSection,
        whyUs: domainContent.whyUs,
        whatWeGive: domainContent.whatWeGive,
        
        testimonials: [
          {
            name: "דני כהן",
            role: "מנהל עסק",
            content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.`
          },
          {
            name: "שרה לוי", 
            role: "יזמת",
            content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!`
          },
          {
            name: "מיכל רוזן",
            role: "בעלת חנות",
            content: `הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!`
          }
        ],
        
        gallery: {
          title: "גלריית העבודות שלנו",
          images: []
        }
      },

      contactTitle: "בואו נתחיל לעבוד יחד"
    };
  }, [formData]);

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
