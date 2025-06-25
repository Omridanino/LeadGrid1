
import { useState } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateCreativeContent = () => {
    // Parse colors from user input
    const parseColors = (colorString: string) => {
      const colors = colorString.toLowerCase();
      const colorMap: { [key: string]: { primary: string; secondary: string; accent: string } } = {
        'כחול': { primary: '#3b82f6', secondary: '#1e40af', accent: '#06b6d4' },
        'ירוק': { primary: '#10b981', secondary: '#059669', accent: '#34d399' },
        'אדום': { primary: '#ef4444', secondary: '#dc2626', accent: '#f87171' },
        'סגול': { primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a855f7' },
        'ורוד': { primary: '#ec4899', secondary: '#db2777', accent: '#f472b6' },
        'כתום': { primary: '#f59e0b', secondary: '#d97706', accent: '#fbbf24' },
        'צהוב': { primary: '#eab308', secondary: '#ca8a04', accent: '#fde047' },
        'brown': { primary: '#a16207', secondary: '#92400e', accent: '#d97706' },
        'חום': { primary: '#a16207', secondary: '#92400e', accent: '#d97706' }
      };

      // Check for specific color combinations
      if (colors.includes('צהוב') && colors.includes('ורוד')) {
        return { primary: '#eab308', secondary: '#ec4899', accent: '#fde047' };
      }
      if (colors.includes('כחול') && colors.includes('כסף')) {
        return { primary: '#3b82f6', secondary: '#6b7280', accent: '#06b6d4' };
      }
      if (colors.includes('אדום') && colors.includes('לבן')) {
        return { primary: '#ef4444', secondary: '#f8fafc', accent: '#f87171' };
      }

      // Find first matching color
      for (const [colorName, colorScheme] of Object.entries(colorMap)) {
        if (colors.includes(colorName)) {
          return colorScheme;
        }
      }

      return { primary: '#3b82f6', secondary: '#8b5cf6', accent: '#06b6d4' };
    };

    const selectedColors = parseColors(formData.brandColors || '');

    // Generate enhanced features based on user input and business type
    const generateEnhancedFeatures = () => {
      const businessType = formData.businessType?.toLowerCase() || '';
      const userFeatures = formData.keyFeatures?.toLowerCase() || '';
      
      let enhancedFeatures = [];
      
      if (userFeatures.includes('איכות') || userFeatures.includes('איכותי')) {
        enhancedFeatures.push('מוצרים ושירותים ברמה הגבוהה ביותר עם בקרת איכות מתמדת');
      }
      if (userFeatures.includes('מחיר') || userFeatures.includes('זול') || userFeatures.includes('הוגן')) {
        enhancedFeatures.push('מחירים תחרותיים ללא פשרות על האיכות');
      }
      if (userFeatures.includes('שירות') || userFeatures.includes('לקוחות')) {
        enhancedFeatures.push('שירות לקוחות אישי ומקצועי 24/7');
      }
      if (userFeatures.includes('ניסיון') || userFeatures.includes('שנים')) {
        enhancedFeatures.push('צוות מנוסה ומומחה עם שנות ניסיון רבות בתחום');
      }
      if (userFeatures.includes('מהיר') || userFeatures.includes('זמן')) {
        enhancedFeatures.push('ביצוע מהיר ויעיל עם עמידה בזמנים');
      }
      if (userFeatures.includes('מיקום') || userFeatures.includes('נוח')) {
        enhancedFeatures.push('מיקום נוח ונגיש עם חניה בחינם');
      }

      // Add business-specific features if not enough user input
      if (enhancedFeatures.length < 4) {
        if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
          enhancedFeatures.push('מנות טריות המוכנות יומיומית', 'תפריט מגוון המתאים לכל הטעמים', 'אווירה חמה ומזמינה לכל המשפחה');
        } else if (businessType.includes('קפה') || businessType.includes('בית קפה')) {
          enhancedFeatures.push('פולי קפה מהטובים בעולם', 'באריסטה מקצועי ומנוסה', 'מקום מושלם לעבודה ופגישות');
        } else if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
          enhancedFeatures.push('טכנולוגיות מתקדמות ועדכניות', 'פתרונות מותאמים אישית', 'תמיכה טכנית מקצועית');
        } else if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
          enhancedFeatures.push('גישה אישית לכל לקוח', 'תוצאות מדידות ומוכחות', 'ליווי צמוד לאורך כל התהליך');
        } else {
          enhancedFeatures.push('פתרון מותאם אישית לצרכים שלכם', 'עבודה מקצועית ואמינה', 'התחייבות למצוינות בכל פרט');
        }
      }

      return enhancedFeatures.slice(0, 6);
    };

    // Generate testimonials
    const generateTestimonials = () => {
      const businessName = formData.businessName || 'העסק';
      return [
        {
          name: 'שרה כהן',
          role: 'לקוחה מרוצה',
          content: `השירות ב${businessName} פשוט מדהים! בדיוק מה שחיפשתי. ממליצה בחום!`,
          rating: 5
        },
        {
          name: 'דוד לוי',
          role: 'לקוח קבוע',
          content: `עובד עם ${businessName} כבר שנתיים וכל פעם מתרשם מחדש מהמקצועיות והאיכות.`,
          rating: 5
        },
        {
          name: 'רחל אברהם',
          role: 'לקוחה מרוצה',
          content: `הצוות מקצועי, השירות מעולה והמחירים הוגנים. בהחלט חוזרת!`,
          rating: 5
        }
      ];
    };

    // Generate FAQ
    const generateFAQ = () => {
      const businessType = formData.businessType?.toLowerCase() || '';
      let faq = [];

      if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
        faq = [
          { question: 'האם יש אפשרות להזמנת מקום?', answer: 'כן, ניתן להזמין מקום מראש בטלפון או דרך האתר שלנו.' },
          { question: 'האם המטבח כשר?', answer: 'כן, המטבח שלנו כשר בהשגחת הרבנות המקומית.' },
          { question: 'האם יש תפריט לילדים?', answer: 'בהחלט! יש לנו תפריט מיוחד לילדים עם מנות שהם אוהבים.' }
        ];
      } else if (businessType.includes('שירות') || businessType.includes('עסק')) {
        faq = [
          { question: 'כמה זמן לוקח לקבל הצעת מחיר?', answer: 'אנחנו מתחייבים לחזור אליכם תוך 24 שעות עם הצעת מחיר מפורטת.' },
          { question: 'האם יש אחריות על השירות?', answer: 'כן, אנחנו נותנים אחריות מלאה על כל השירותים שלנו.' },
          { question: 'האם אתם עובדים בסופי שבוע?', answer: 'כן, אנחנו זמינים גם בסופי שבוע לפי תיאום מראש.' }
        ];
      } else {
        faq = [
          { question: 'איך אפשר ליצור קשר?', answer: 'ניתן ליצור קשר טלפונית, במייל או דרך הטופס באתר.' },
          { question: 'מה שעות הפעילות?', answer: 'אנחנו פעילים ימים א\'-ו\' בין השעות 8:00-18:00.' },
          { question: 'איפה אתם נמצאים?', answer: 'אנחנו נמצאים במרכז העיר עם גישה נוחה ואפשרויות חניה.' }
        ];
      }

      return faq;
    };

    // Generate emotional content
    const generateEmotionalContent = () => {
      const businessName = formData.businessName || 'העסק שלנו';
      return {
        title: `למה בוחרים ב${businessName}?`,
        content: `כי אנחנו מאמינים שכל לקוח הוא חלק מהמשפחה שלנו. במשך השנים למדנו שהסוד להצלחה טמון ביחס האישי, בתשומת הלב לפרטים ובמחויבות לשביעות רצון מלאה. כאן אתם לא רק לקוחות - אתם שותפים בחלום שלנו.`
      };
    };

    const content = {
      colors: selectedColors,
      badge: `🏆 ${formData.businessName} - הבחירה הטובה ביותר`,
      headline: `${formData.businessName} - ${formData.targetAudience ? `הפתרון המושלם עבור ${formData.targetAudience}` : 'הפתרון שחיפשתם'}`,
      subheadline: `עם ${formData.businessName} תקבלו שירות מקצועי ואמין שמבוסס על ${formData.keyFeatures ? 'מה שחשוב לכם ביותר' : 'איכות ומצוינות'}. הצטרפו לאלפי לקוחות מרוצים שכבר בחרו בנו.`,
      cta: formData.mainGoal === 'contact' ? 'צרו קשר עכשיו' : 
           formData.mainGoal === 'booking' ? 'קבעו תור היום' :
           formData.mainGoal === 'sales' ? 'רכשו עכשיו' : 'התחילו היום',
      features: generateEnhancedFeatures(),
      featuresTitle: `למה דווקא ${formData.businessName}?`,
      aboutTitle: `הסיפור של ${formData.businessName}`,
      aboutText: `${formData.businessName} נוסד מתוך אהבה אמיתית ל${formData.businessType || 'תחום'}. אנחנו מאמינים שכל פרויקט הוא הזדמנות ליצור משהו מיוחד ולהעניק חוויה שלא תישכח. הניסיון שלנו, בשילוב עם התשוקה למצוינות, הופכים אותנו לבחירה הטבעית עבור ${formData.targetAudience || 'לקוחות הבוחרים באיכות'}.`,
      contactTitle: `מוכנים להתחיל? בואו נדבר!`,
      testimonials: generateTestimonials(),
      faq: generateFAQ(),
      emotional: generateEmotionalContent(),
      stats: { 
        customers: '2,500+ לקוחות', 
        experience: '10+ שנות ניסיון', 
        satisfaction: '98% שביעות רצון',
        projects: '500+ פרויקטים'
      }
    };

    return content;
  };

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
