
import { useState, useCallback } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState(null);

  const generateCreativeContent = useCallback(() => {
    const businessName = formData.businessName || "העסק שלי";
    const businessType = formData.businessType || "שירותים עסקיים";
    const businessStory = formData.businessStory || "";
    const businessValues = formData.businessValues || "";
    const mainServices = formData.mainServices || "";
    const uniqueAdvantages = formData.uniqueAdvantages || "";
    const competitionDifference = formData.competitionDifference || "";
    const targetAudience = formData.targetAudience || "לקוחות פוטנציאליים";
    const clientProblems = formData.clientProblems || "";
    const mainGoal = formData.mainGoal || "הגדלת מכירות";
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

    // Generate rich content based on the detailed form data
    const generateRichContent = () => {
      return {
        emotionalSection: {
          title: businessStory ? "הסיפור שלנו" : "החלום שהופך למציאות",
          content: businessStory || `${businessName} מציע שירותי ${businessType} ברמה הגבוהה ביותר עבור ${targetAudience}.`
        },
        whyUs: {
          title: "למה בדיוק אנחנו?",
          reasons: uniqueAdvantages ? [
            { title: "הייחודיות שלנו", description: uniqueAdvantages.substring(0, 100) + "..." },
            { title: "מה מבדיל אותנו", description: competitionDifference.substring(0, 100) + "..." },
            { title: "הערכים שלנו", description: businessValues.substring(0, 100) + "..." },
            { title: "הניסיון שלנו", description: formData.businessFoundation?.substring(0, 100) + "..." || "ניסיון עשיר ומוכח בתחום" }
          ] : [
            { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
            { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
            { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
            { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
          ]
        },
        whatWeGive: {
          title: "השירותים המקצועיים שלנו",
          services: mainServices ? [
            { title: "השירותים שלנו", description: mainServices.substring(0, 150) + "..." },
            { title: "הפתרונות שלנו", description: clientProblems ? `אנחנו פותרים: ${clientProblems.substring(0, 120)}...` : "פתרונות מותאמים אישית לכל לקוח" },
            { title: "התוצאות שלנו", description: "תוצאות מוכחות ומדידות שאתם יכולים לראות ולהרגיש" },
            { title: "הליווי שלנו", description: "תמיכה מלאה לאורך כל התהליך מההתחלה ועד הסוף" }
          ] : [
            { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
            { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
            { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
            { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
          ]
        }
      };
    };

    const richContent = generateRichContent();

    // Create compelling headlines based on the story and values
    const createHeadline = () => {
      if (businessStory && businessStory.length > 50) {
        return `${businessName} - ${businessStory.split('.')[0].substring(0, 60)}...`;
      }
      return `${businessName} - ${businessType} מקצועי ואמין`;
    };

    const createSubheadline = () => {
      if (uniqueAdvantages && targetAudience) {
        return `${uniqueAdvantages.split('.')[0].substring(0, 80)}... מתמחים בשירות ${targetAudience}`;
      }
      return `מספקים שירותי ${businessType} ברמה הגבוהה ביותר עבור ${targetAudience}`;
    };

    return {
      techBackground: isTechy3D ? techBackgrounds[0] : null,
      
      headline: createHeadline(),
      subheadline: createSubheadline(),
      cta: mainGoal === "leads" ? "קבלו הצעת מחיר חינם" : 
           mainGoal === "sales" ? "התחילו עכשיו" :
           mainGoal === "booking" ? "קבעו תור עכשיו" :
           mainGoal === "contact" ? "צרו קשר לייעוץ חינם" :
           mainGoal === "awareness" ? "גלו עוד עלינו" : "התחילו איתנו היום",
      
      sections: {
        emotionalSection: richContent.emotionalSection,
        whyUs: richContent.whyUs,
        whatWeGive: richContent.whatWeGive,
        
        testimonials: [
          {
            name: "דני כהן",
            role: targetAudience.split(',')[0] || "לקוח מרוצה",
            content: `השירות של ${businessName} פשוט מעולה! ${uniqueAdvantages ? uniqueAdvantages.split('.')[0] : 'הצוות המקצועי והיחס האישי עשו את כל ההבדל'}.`
          },
          {
            name: "שרה לוי", 
            role: "יזמת",
            content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. ${competitionDifference ? competitionDifference.split('.')[0] : 'מקצועיות ברמה אחרת'}!`
          },
          {
            name: "מיכל רוזן",
            role: "בעלת עסק",
            content: `${businessValues ? businessValues.split('.')[0] : 'הליווי והתמיכה שקיבלתי היו פשוט מדהימים'}. השירות החרג מכל הציפיות!`
          }
        ],
        
        gallery: {
          title: "גלריית העבודות שלנו",
          images: []
        }
      },

      contactTitle: formData.businessVision ? 
        `בואו נגשים יחד את ${formData.businessVision.split('.')[0].toLowerCase()}` : 
        "בואו נתחיל לעבוד יחד"
    };
  }, [formData]);

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
