
import { useState } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateCreativeContent = () => {
    // Extract key themes from user input
    const businessType = formData.businessType?.toLowerCase() || '';
    const targetAudience = formData.targetAudience?.toLowerCase() || '';
    const mainGoal = formData.mainGoal?.toLowerCase() || '';
    const keyFeatures = formData.keyFeatures?.toLowerCase() || '';
    const brandColors = formData.brandColors?.toLowerCase() || '';

    // Generate contextual content based on business type and goals
    const getIndustrySpecificContent = () => {
      const industryMap: { [key: string]: any } = {
        restaurant: {
          badge: "🍽️ החוויה הקולינרית הטובה ביותר",
          headline: `${formData.businessName} - טעמים שלא תשכחו`,
          subheadline: "חוויה קולינרית מיוחדת עם מנות ייחודיות ושירות חם ואישי. כל ביקור הוא חגיגה של טעמים.",
          cta: "הזמינו מקום",
          featuresTitle: "למה דווקא אצלנו?",
          features: [
            "מנות טריות ומיוחדות מכל יום",
            "שירות מקצועי ואישי",
            "אווירה חמה ונעימה",
            "מחירים הוגנים",
            "מיקום נוח וזמין"
          ],
          aboutTitle: "הסיפור שלנו",
          aboutText: "החלום שלנו היה ליצור מקום שבו כל ארוחה היא חוויה. עם רכיבים טריים ומתכונים מסורתיים, אנחנו מביאים לכם טעמים אותנטיים בכל ביקור.",
          contactTitle: "בואו לטעום אצלנו",
          stats: { customers: "5,000+", uptime: "7 ימים", support: "שף אישי" }
        },
        cafe: {
          badge: "☕ הקפה הטוב ביותר בעיר",
          headline: `${formData.businessName} - הקפה שמתחיל את היום`,
          subheadline: "קפה איכותי, אווירה נעימה ופינוקים מתוקים. המקום המושלם להתחיל את היום או להפסקה מרגיעה.",
          cta: "בואו לקפה",
          featuresTitle: "מה מיוחד אצלנו?",
          features: [
            "פולי קפה איכותיים מהטובים בעולם",
            "באריסטה מנוסה וידענית",
            "עוגות ומאפים טריים יומיומיים",
            "אווירה נעימה לעבודה ולפגישות",
            "WiFi מהיר וחינם"
          ],
          aboutTitle: "על הקפה שלנו",
          aboutText: "אנחנו מאמינים שקפה טוב יכול לשנות את כל היום. עם תשוקה לאיכות ותשומת לב לפרטים, אנחנו מכינים כל כוס בהתאמה אישית.",
          contactTitle: "בואו לקפה איתנו",
          stats: { customers: "כוסות ביום 500+", uptime: "פתוח 7 ימים", support: "באריסטה מקצועי" }
        },
        tech: {
          badge: "🚀 הטכנולוגיה של העתיד כבר כאן",
          headline: `${formData.businessName} - פתרונות טכנולוגיים מתקדמים`,
          subheadline: "אנחנו מפתחים פתרונות טכנולוגיים חדשניים שמניעים עסקים קדימה. החדשנות שלנו היא ההצלחה שלכם.",
          cta: "התחילו עכשיו",
          featuresTitle: "הטכנולוגיות שלנו",
          features: [
            "בינה מלאכותית מתקדמת",
            "פתרונות ענן מאובטחים",
            "ממשק משתמש אינטואיטיבי",
            "תמיכה טכנית 24/7",
            "אינטגרציה קלה עם מערכות קיימות"
          ],
          aboutTitle: "החזון שלנו",
          aboutText: "אנחנו רואים עתיד שבו טכנולוגיה מפשטת את החיים ומניעה חדשנות. הצוות שלנו עובד ללא הרף כדי להפוך את החזון הזה למציאות.",
          contactTitle: "בואו נבנה את העתיד יחד",
          stats: { customers: "לקוחות 100+", uptime: "99.9%", support: "24/7" }
        },
        consulting: {
          badge: "🎯 הייעוץ שמביא תוצאות",
          headline: `${formData.businessName} - הייעוץ שמוביל להצלחה`,
          subheadline: "אנחנו מספקים ייעוץ מקצועי ומותאם אישית שמוביל לתוצאות מדידות. הניסיון שלנו הוא הכוח שלכם.",
          cta: "קבעו ייעוץ",
          featuresTitle: "למה בוחרים בנו?",
          features: [
            "ניסיון של למעלה מ-10 שנים",
            "גישה מותאמת אישית לכל לקוח",
            "תוצאות מדידות ומוכחות",
            "צוות מומחים בתחומים שונים",
            "ליווי צמוד לאורך כל הדרך"
          ],
          aboutTitle: "הגישה שלנו",
          aboutText: "אנחנו מאמינים שכל עסק הוא ייחודי. הגישה שלנו מתבססת על הבנה עמוקה של הצרכים הספציפיים שלכם ופיתוח אסטרטגיות מותאמות.",
          contactTitle: "בואו נצא למסע ההצלחה יחד",
          stats: { customers: "פרויקטים 200+", uptime: "שנות ניסיון 10+", support: "ייעוץ אישי" }
        },
        retail: {
          badge: "🛍️ הקניות הטובות ביותר",
          headline: `${formData.businessName} - הכל מה שאתם צריכים`,
          subheadline: "מבחר ענק של מוצרים איכותיים במחירים מעולים. החנות שלכם לכל מה שאתם צריכים.",
          cta: "קנו עכשיו",
          featuresTitle: "מה מיוחד בחנות שלנו?",
          features: [
            "מבחר ענק של מוצרים איכותיים",
            "מחירים תחרותיים",
            "שירות לקוחות מעולה",
            "משלוחים מהירים",
            "אחריות מלאה על כל המוצרים"
          ],
          aboutTitle: "על החנות שלנו",
          aboutText: "אנחנו מאמינים שקניות צריכות להיות חוויה נעימה. עם מבחר ענק ושירות אישי, אנחנו כאן כדי לעזור לכם למצוא בדיוק מה שאתם מחפשים.",
          contactTitle: "בואו לקנות אצלנו",
          stats: { customers: "קונים מרוצים 15,000+", uptime: "פתוח 6 ימים", support: "ייעוץ אישי" }
        },
        services: {
          badge: "🔧 השירות הטוב ביותר",
          headline: `${formData.businessName} - השירות שאתם מחפשים`,
          subheadline: "אנחנו מספקים שירותים מקצועיים ואמינים שחוסכים לכם זמן וכסף. הפתרון המושלם לכל הצרכים שלכם.",
          cta: "קבלו הצעת מחיר",
          featuresTitle: "למה דווקא אנחנו?",
          features: [
            "מקצועיות ברמה הגבוהה ביותר",
            "זמינות 24/7",
            "מחירים הוגנים ושקופים",
            "אחריות מלאה על כל העבודות",
            "שירות מהיר ויעיל"
          ],
          aboutTitle: "על השירות שלנו",
          aboutText: "עם שנות ניסיון רבות בתחום, אנחנו מבינים בדיוק מה הלקוחות שלנו צריכים. המקצועיות והאמינות שלנו הן הערובה שלכם לשירות מעולה.",
          contactTitle: "בואו נתחיל לעבוד יחד",
          stats: { customers: "לקוחות מרוצים 8,000+", uptime: "זמינות 24/7", support: "תמיכה מלאה" }
        }
      };

      return industryMap[businessType] || industryMap.services;
    };

    // Get industry-specific content
    const industryContent = getIndustrySpecificContent();

    // Customize based on user's specific inputs
    if (formData.keyFeatures && formData.keyFeatures.trim()) {
      const userFeatures = formData.keyFeatures.split(',').map((f: string) => f.trim()).filter((f: string) => f.length > 0);
      if (userFeatures.length > 0) {
        industryContent.features = userFeatures.slice(0, 6); // Limit to 6 features
      }
    }

    // Customize headline and subheadline if user provided specific info
    if (formData.targetAudience && formData.targetAudience.trim()) {
      industryContent.subheadline = `פתרון מותאם במיוחד עבור ${formData.targetAudience}. ${industryContent.subheadline}`;
    }

    // Adjust CTA based on main goal
    const goalToCTA: { [key: string]: string } = {
      sales: "קנו עכשיו",
      leads: "קבלו הצעת מחיר",
      awareness: "למדו עוד",
      signup: "הרשמו היום",
      contact: "צרו קשר",
      booking: "קבעו תור"
    };

    if (mainGoal && goalToCTA[mainGoal]) {
      industryContent.cta = goalToCTA[mainGoal];
    }

    return industryContent;
  };

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
