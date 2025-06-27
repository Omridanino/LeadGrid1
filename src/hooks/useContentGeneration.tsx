
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
    const professionalBackground = formData.professionalBackground || "";
    const businessVision = formData.businessVision || "";
    const selectedElements = formData.selectedElements || [];

    // Generate comprehensive content for all possible sections
    const generateAllSectionsContent = () => {
      return {
        // Services Section - מבוסס על השירותים המרכזיים
        services: {
          title: "השירותים המקצועיים שלנו",
          subtitle: `הפתרונות המתקדמים של ${businessName}`,
          items: mainServices ? 
            mainServices.split(',').map((service: string, index: number) => ({
              title: service.trim(),
              description: `${service.trim()} ברמה הגבוהה ביותר עם מחויבות מלאה לאיכות ולשירות`,
              icon: ['⭐', '🚀', '💎', '🎯', '⚡', '🏆'][index % 6]
            })) :
            [
              { title: 'שירות מקצועי', description: 'אנחנו מספקים שירות מקצועי ואמין ברמה הגבוהה ביותר', icon: '⭐' },
              { title: 'יחס אישי', description: 'כל לקוח מקבל יחס אישי ומסור עם תשומת לב לפרטים', icon: '❤️' },
              { title: 'תוצאות מוכחות', description: 'הישגים קונקרטיים ומדידים שאתם יכולים לראות ולהרגיש', icon: '🏆' }
            ]
        },

        // About Section - מבוסס על הסיפור והחזון
        about: {
          title: businessStory ? "הסיפור שלנו" : "קצת עלינו",
          description: businessStory || `${businessName} מתמחה ב${businessType} ומספק שירות ברמה הגבוהה ביותר. ${professionalBackground}`,
          highlights: uniqueAdvantages ? 
            uniqueAdvantages.split('.').filter(Boolean).slice(0, 4) :
            ['ניסיון עשיר ומוכח', 'מקצועיות ברמה גבוהה', 'יחס אישי לכל לקוח', 'מחירים הוגנים ושקופים'],
          whyChooseUs: competitionDifference || 'ניסיון עשיר, מקצועיות ויחס אישי לכל לקוח',
          vision: businessVision || `החזון שלנו הוא להיות המובילים בתחום ה${businessType} ולהעניק ללקוחותינו את השירות הטוב ביותר`
        },

        // Features Section - מבוסס על היתרונות הייחודיים
        features: {
          title: "מה מייחד אותנו",
          subtitle: uniqueAdvantages ? uniqueAdvantages.split('.')[0] : "היתרונות שלנו שיעשו לכם את ההבדל",
          items: uniqueAdvantages ?
            uniqueAdvantages.split('.').filter(Boolean).slice(0, 6).map((advantage: string, index: number) => ({
              title: advantage.trim(),
              description: `${advantage.trim()} - זה מה שמבדיל אותנו מהשאר`,
              icon: ['⚡', '🚀', '✅', '💡', '🎯', '🏆'][index % 6]
            })) :
            [
              { title: 'איכות מעולה', description: 'רמה גבוהה של שירות בכל שלב', icon: '⚡' },
              { title: 'מהירות', description: 'מענה מהיר ויעיל לכל בקשה', icon: '🚀' },
              { title: 'אמינות', description: 'שירות אמין ומוכח לאורך זמן', icon: '✅' }
            ]
        },

        // Benefits Section - מבוסס על הבעיות שפותרים ללקוחות
        benefits: {
          title: "היתרונות שתקבלו",
          subtitle: clientProblems ? `פותרים עבורכם: ${clientProblems.split('.')[0]}` : "כל מה שאתם צריכים כדי להצליח",
          items: clientProblems ?
            clientProblems.split('.').filter(Boolean).slice(0, 4).map((problem: string, index: number) => ({
              title: `פתרון ל${problem.trim()}`,
              description: `אנחנו דואגים לפתור ${problem.trim()} בצורה מקצועית ויעילה`,
              icon: ['⏰', '💰', '📈', '🎯'][index % 4]
            })) :
            [
              { title: 'חיסכון בזמן', description: 'נעזור לכם לחסוך זמן יקר ולהתמקד במה שחשוב', icon: '⏰' },
              { title: 'חיסכון בכסף', description: 'פתרונות חסכוניים ויעילים שמתאימים לתקציב', icon: '💰' }
            ]
        },

        // Testimonials Section - המלצות ממוקדות
        testimonials: {
          title: "מה הלקוחות אומרים עלינו",
          subtitle: "ההמלצות האמיתיות שיספרו לכם הכל על השירות שלנו",
          items: [
            {
              name: "דני כהן",
              role: targetAudience.split(',')[0]?.trim() || "לקוח מרוצה",
              text: `השירות של ${businessName} פשוט מעולה! ${uniqueAdvantages ? uniqueAdvantages.split('.')[0] : 'הצוות המקצועי והיחס האישי עשו את כל ההבדל'}. ממליץ בחום!`,
              rating: 5
            },
            {
              name: "שרה לוי",
              role: "יזמת",
              text: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מצוינות. ${competitionDifference ? competitionDifference.split('.')[0] : 'מקצועיות ברמה אחרת'}!`,
              rating: 5
            },
            {
              name: "מיכל רוזן",
              role: "בעלת עסק",
              text: `${businessValues ? businessValues.split('.')[0] : 'הליווי והתמיכה שקיבלתי היו פשוט מדהימים'}. השירות חרג מכל הציפיות שלי!`,
              rating: 5
            }
          ]
        },

        // FAQ Section - שאלות נפוצות מותאמות
        faq: {
          title: "שאלות נפוצות",
          subtitle: "התשובות לכל מה שרציתם לדעת על השירותים שלנו",
          items: [
            {
              question: `איך ${businessName} עובדים?`,
              answer: professionalBackground ? 
                `${professionalBackground.split('.')[0]}. אנחנו נותנים יחס אישי לכל לקוח ומתאימים את השירות בדיוק לצרכים שלכם.` :
                "אנחנו עובדים בצורה מקצועית ומסודרת, עם יחס אישי לכל לקוח ותשומת לב לפרטים."
            },
            {
              question: "כמה זמן לוקח השירות?",
              answer: "זמני השירות משתנים בהתאם לסוג הפרויקט והדרישות הספציפיות. נספק לכם הערכה מדויקת כבר בשלב התכנון."
            },
            {
              question: "מה כלול במחיר?",
              answer: mainServices ? 
                `המחיר כולל את כל ${mainServices.split(',')[0]?.trim()} הבסיסיים, ליווי צמוד לאורך התהליך ותמיכה מלאה.` :
                "המחיר כולל את כל השירותים הבסיסיים, ליווי צמוד ותמיכה מלאה."
            },
            {
              question: `למה לבחור ב${businessName}?`,
              answer: competitionDifference || `${uniqueAdvantages ? uniqueAdvantages.split('.')[0] : 'הניסיון והמקצועיות שלנו'}, יחד עם יחס אישי ומחויבות לתוצאות - זה מה שמבדיל אותנו.`
            }
          ]
        },

        // Process Section - תהליך העבודה
        process: {
          title: "איך אנחנו עובדים",
          subtitle: "התהליך המסודר והמקצועי שלנו מההתחלה ועד הסוף",
          steps: [
            {
              title: "פגישת היכרות",
              description: "נפגשים כדי להבין בדיוק את הצרכים והמטרות שלכם",
              icon: "🤝"
            },
            {
              title: "תכנון מפורט",
              description: "מכינים תכנית עבודה מפורטת המותאמת לדרישות שלכם",
              icon: "📋"
            },
            {
              title: "ביצוע מקצועי",
              description: "מבצעים את העבודה ברמה הגבוהה ביותר עם עדכונים שוטפים",
              icon: "⚡"
            },
            {
              title: "מסירה ותמיכה",
              description: "מוסרים את התוצר הסופי ונותנים תמיכה מלאה",
              icon: "🎯"
            }
          ]
        },

        // Gallery Section - גלריית עבודות
        gallery: {
          title: "גלריית העבודות שלנו",
          subtitle: "דוגמאות מעבודות שביצענו עבור לקוחות מרוצים",
          description: "כל פרויקט הוא סיפור של הצלחה משותפת",
          images: []
        },

        // Contact Section - יצירת קשר מפורטת
        contact: {
          title: businessVision ? 
            `בואו נגשים יחד את ${businessVision.split('.')[0]?.toLowerCase()}` : 
            "בואו נתחיל לעבוד יחד",
          subtitle: mainGoal === "leads" ? "קבלו הצעת מחיר מותאמת אישית - חינם!" :
                   mainGoal === "sales" ? "מוכנים להתחיל? בואו נדבר!" :
                   mainGoal === "booking" ? "קבעו פגישת ייעוץ חינם עכשיו" :
                   mainGoal === "contact" ? "צרו קשר לייעוץ מקצועי וחינם" :
                   "מוכנים לקחת את העסק שלכם לשלב הבא?",
          cta: mainGoal === "leads" ? "קבלו הצעת מחיר חינם" : 
               mainGoal === "sales" ? "התחילו עכשיו" :
               mainGoal === "booking" ? "קבעו תור עכשיו" :
               mainGoal === "contact" ? "צרו קשר לייעוץ חינם" :
               mainGoal === "awareness" ? "גלו עוד עלינו" : "התחילו איתנו היום"
        }
      };
    };

    const allContent = generateAllSectionsContent();

    // Filter content based on selected elements
    const filteredContent: any = {};
    
    selectedElements.forEach((elementId: string) => {
      if (allContent[elementId as keyof typeof allContent]) {
        filteredContent[elementId] = allContent[elementId as keyof typeof allContent];
      }
    });

    // Always include hero content
    const heroContent = {
      headline: businessStory && businessStory.length > 50 ? 
        `${businessName} - ${businessStory.split('.')[0].substring(0, 60)}...` :
        `${businessName} - ${businessType} מקצועי ואמין`,
      
      subheadline: uniqueAdvantages && targetAudience ? 
        `${uniqueAdvantages.split('.')[0].substring(0, 80)}... מתמחים בשירות ${targetAudience}` :
        `מספקים שירותי ${businessType} ברמה הגבוהה ביותר עבור ${targetAudience}`,
      
      cta: filteredContent.contact?.cta || "התחילו איתנו היום"
    };

    return {
      ...heroContent,
      ...filteredContent,
      // Add business info for footer and contact details
      businessInfo: {
        name: businessName,
        type: businessType,
        story: businessStory,
        values: businessValues,
        vision: businessVision
      }
    };
  }, [formData]);

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
