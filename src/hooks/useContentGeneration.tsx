
import { useState } from 'react';

interface FormData {
  businessName: string;
  businessType: string;
  targetAudience: string;
  mainGoal: string;
  keyFeatures: string;
  brandColors: string;
  contactInfo: string;
}

export const useContentGeneration = (formData: FormData) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateCreativeContent = () => {
    // Parse brand colors from user input
    const colorMapping: { [key: string]: string } = {
      'כחול': '#2563eb', 'חום': '#92400e', 'אדום': '#dc2626', 'ירוק': '#16a34a',
      'סגול': '#7c3aed', 'כתום': '#ea580c', 'ורוד': '#ec4899', 'צהוב': '#eab308',
      'שחור': '#1f2937', 'לבן': '#f8fafc', 'כסף': '#64748b', 'זהב': '#f59e0b'
    };

    let primaryColor = '#3b82f6';
    let secondaryColor = '#8b5cf6';

    // Extract colors from user input
    const colorText = formData.brandColors.toLowerCase();
    Object.keys(colorMapping).forEach(color => {
      if (colorText.includes(color)) {
        if (!primaryColor || primaryColor === '#3b82f6') {
          primaryColor = colorMapping[color];
        } else if (!secondaryColor || secondaryColor === '#8b5cf6') {
          secondaryColor = colorMapping[color];
        }
      }
    });

    // Creative features generation based on business type
    const creativeFeatures = {
      'שירותים עסקיים': ['פתרונות מותאמים אישית', 'צוות מומחים ברמה גבוהה', 'תהליכים מהירים ויעילים', 'תוצאות מדידות ומוכחות'],
      'טכנולוגיה': ['טכנולוגיה מתקדמת ביותר', 'אבטחה ברמה צבאית', 'ממשק אינטואיטיבי וידידותי', 'עדכונים רציפים וחדשנות'],
      'חינוך': ['מתודולוגיה ייחודית ומוכחת', 'ליווי צמוד ואישי', 'תוצאות מרשימות ומדידות', 'ניסיון רב שנים בתחום'],
      'בריאות': ['טיפול מקצועי ומתקדם', 'ציוד רפואי חדיש', 'צוות רפואי מומחה', 'גישה אישית לכל מטופל'],
      'default': ['איכות ללא פשרות', 'שירות מהיר ואמין', 'מחירים הוגנים ותחרותיים', 'ניסיון מוכח ורב שנים']
    };

    const businessFeatures = creativeFeatures[formData.businessType as keyof typeof creativeFeatures] || creativeFeatures.default;

    // Creative about text generation
    const creativeBusiness = {
      'שירותים עסקיים': `${formData.businessName} הוקמה מתוך חזון ברור - לספק פתרונות עסקיים מתקדמים שמניבים תוצאות מדידות. אנו מתמחים בהובלת ארגונים לשיפור ביצועים דרך אסטרטגיות חכמות וטכנולוגיות מתקדמות.`,
      'טכנולוגיה': `${formData.businessName} נמצאת בחזית החדשנות הטכנולוגית. אנו פיתחנו פלטפורמות מתקדמות המשלבות בינה מלאכותית וטכנולוגיות ענן לפתרונות עתידניים.`,
      'חינוך': `${formData.businessName} מובילה בתחום החינוך המתקדם. המתודולוגיה הייחודית שלנו משלבת טכניקות למידה מודרניות עם גישה אישית לכל תלמיד.`,
      'בריאות': `${formData.businessName} מציעה רפואה מתקדמת ואישית. המרפאה שלנו משלבת ציוד רפואי חדיש עם גישה הוליסטית לבריאות המטופל.`,
      'default': `${formData.businessName} הוקמה מתוך אהבה וחשק לספק שירות מעולה. אנו מאמינים שכל לקוח ראוי לקבל יחס אישי ופתרונות מותאמים בדיוק לצרכיו.`
    };

    const aboutText = creativeBusiness[formData.businessType as keyof typeof creativeBusiness] || creativeBusiness.default;

    return {
      headline: `גלו את העתיד עם ${formData.businessName}`,
      subheadline: `הפתרון המתקדם והמקצועי ביותר עבור ${formData.targetAudience} בתחום ${formData.businessType}`,
      features: businessFeatures,
      cta: `הצטרפו אלינו עוד היום`,
      aboutText,
      colors: { primary: primaryColor, secondary: secondaryColor }
    };
  };

  return { generatedContent, setGeneratedContent, generateCreativeContent };
};
