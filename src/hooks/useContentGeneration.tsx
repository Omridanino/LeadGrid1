
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

    // Generate enhanced features based on user input and business type - ALWAYS 6 features
    const generateEnhancedFeatures = () => {
      const businessType = formData.businessType?.toLowerCase() || '';
      const userFeatures = formData.keyFeatures?.toLowerCase() || '';
      
      let enhancedFeatures = [];
      
      // Start with user's key features but enhance them
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

      // Add business-specific features to reach exactly 6
      const businessSpecificFeatures = [];
      
      if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
        businessSpecificFeatures.push(
          'מנות טריות המוכנות יומיומית מחומרי גלם מהטובים ביותר',
          'תפריט מגוון המתאים לכל הטעמים כולל אופציות טבעוניות',
          'אווירה חמה ומזמינה לכל המשפחה עם עיצוב מיוחד',
          'שף מנוסה עם רקע בינלאומי ויצירתיות במטבח',
          'משלוחים מהירים עם שמירה על איכות המזון',
          'מחירים הוגנים עם מנות נדיבות וערך מוסף'
        );
      } else if (businessType.includes('קפה') || businessType.includes('בית קפה')) {
        businessSpecificFeatures.push(
          'פולי קפה מהטובים בעולם עם קלייה טרייה יומיומית',
          'באריסטה מקצועי ומנוסה שיכין לכם את הקפה המושלם',
          'מקום מושלם לעבודה ופגישות עם WiFi מהיר וחינם',
          'מגוון עוגות וקינוחים הנאפים במקום מדי יום',
          'אווירה נעימה ושקטה למפגשים או עבודה',
          'משקאות מיוחדים וייחודיים שלא תמצאו במקום אחר'
        );
      } else if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
        businessSpecificFeatures.push(
          'טכנולוגיות מתקדמות ועדכניות המובילות בשוק',
          'פתרונות מותאמים אישית בדיוק לצרכים שלכם',
          'תמיכה טכנית מקצועית זמינה 24/7',
          'צוות מפתחים מומחים עם ניסיון רב בפרויקטים מורכבים',
          'עמידה בתקני אבטחה הגבוהים ביותר',
          'אינטגרציה חלקה עם המערכות הקיימות שלכם'
        );
      } else if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
        businessSpecificFeatures.push(
          'גישה אישית לכל לקוח עם הבנה עמוקה של הצרכים',
          'תוצאות מדידות ומוכחות עם מעקב ובקרה',
          'ליווי צמוד לאורך כל התהליך עד להשגת המטרות',
          'ניסיון עשיר בתחום עם רקורד מוכח של הצלחות',
          'כלים ושיטות עבודה מתקדמות ויעילות',
          'זמינות גבוהה ותגובה מהירה לכל פנייה'
        );
      } else {
        businessSpecificFeatures.push(
          'פתרון מותאם אישית לצרכים הייחודיים שלכם',
          'עבודה מקצועית ואמינה עם תשומת לב לפרטים',
          'התחייבות למצוינות בכל שלב של התהליך',
          'צוות מנוסה ומקצועי עם גישה חמה ואישית',
          'שירות מהיר ויעיל עם עמידה בלוחות זמנים',
          'מחירים שקופים והוגנים ללא הפתעות'
        );
      }

      // Combine and ensure exactly 6 features
      const allFeatures = [...enhancedFeatures, ...businessSpecificFeatures];
      
      // Always return exactly 6 features
      return allFeatures.slice(0, 6);
    };

    // Generate business-specific testimonials
    const generateTestimonials = () => {
      const businessName = formData.businessName || 'העסק';
      const businessType = formData.businessType?.toLowerCase() || '';
      
      if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
        return [
          {
            name: 'מירי גולדברג',
            role: 'לקוחה קבועה',
            content: `חוויה קולינרית מדהימה! האוכל ב${businessName} טעים מאוד והשירות מעולה. חוזרים שוב ושוב!`,
            rating: 5
          },
          {
            name: 'יוסי כהן',
            role: 'אבא למשפחה',
            content: `המקום המושלם לארוחת משפחה. הילדים שמחים, האוכל נהדר, והמחירים הוגנים.`,
            rating: 5
          },
          {
            name: 'רונית לוי',
            role: 'חובבת אוכל',
            content: `כל מנה ב${businessName} היא יצירת אמנות! הטעמים מפתיעים והצגה יפהפייה.`,
            rating: 5
          }
        ];
      } else if (businessType.includes('קפה') || businessType.includes('בית קפה')) {
        return [
          {
            name: 'תומר רוזן',
            role: 'עורך דין',
            content: `הקפה ב${businessName} הוא הטוב ביותר בעיר! המקום מושלם לפגישות עבודה.`,
            rating: 5
          },
          {
            name: 'נועה אברמוביץ',
            role: 'סטודנטית',
            content: `אוהבת לבוא לכאן ללמוד. האווירה שקטה, הקפה מעולה והעוגות טריות!`,
            rating: 5
          },
          {
            name: 'דני שפירא',
            role: 'פרילאנסר',
            content: `המשרד השני שלי! WiFi מעולה, קפה טעים ושירות נחמד. מה עוד צריך?`,
            rating: 5
          }
        ];
      } else if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
        return [
          {
            name: 'איתן גרינברג',
            role: 'מנכ"ל סטארטאפ',
            content: `${businessName} פיתחו לנו מערכת מדהימה! המקצועיות והיחס האישי פשוט מעולים.`,
            rating: 5
          },
          {
            name: 'מיכל כץ',
            role: 'מנהלת IT',
            content: `הפתרון הטכנולוגי שקיבלנו מ${businessName} חסך לנו המון זמן וכסף. ממליצה בחום!`,
            rating: 5
          },
          {
            name: 'רון אשכנזי',
            role: 'יזם טכנולוגי',
            content: `צוות מקצועי שמבין בדיוק מה שצריך. התמיכה שלהם זמינה תמיד!`,
            rating: 5
          }
        ];
      } else if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
        return [
          {
            name: 'רחל פרידמן',
            role: 'בעלת עסק',
            content: `הייעוץ של ${businessName} שינה לנו את העסק! התוצאות מדברות בעד עצמן.`,
            rating: 5
          },
          {
            name: 'אבי משה',
            role: 'מנהל כללי',
            content: `גישה מקצועית, ליווי צמוד והבנה עמוקה של הצרכים שלנו. פשוט מעולה!`,
            rating: 5
          },
          {
            name: 'שרה בן דוד',
            role: 'יזמת',
            content: `בזכות הייעוץ המקצועי הצלחנו להגדיל את המכירות ב-150%! תודה ${businessName}!`,
            rating: 5
          }
        ];
      } else {
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
      }
    };

    // Generate FAQ based on business type
    const generateFAQ = () => {
      const businessType = formData.businessType?.toLowerCase() || '';
      let faq = [];

      if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
        faq = [
          { question: 'האם יש אפשרות להזמנת מקום?', answer: 'כן, ניתן להזמין מקום מראש בטלפון או דרך האתר שלנו.' },
          { question: 'האם המטבח כשר?', answer: 'כן, המטבח שלנו כשר בהשגחת הרבנות המקומית.' },
          { question: 'האם יש תפריט לילדים?', answer: 'בהחלט! יש לנו תפריט מיוחד לילדים עם מנות שהם אוהבים.' }
        ];
      } else if (businessType.includes('קפה') || businessType.includes('בית קפה')) {
        faq = [
          { question: 'האם יש WiFi במקום?', answer: 'כן, יש WiFi מהיר וחינמי לכל הלקוחות.' },
          { question: 'האם אפשר להזמין מראש?', answer: 'כן, ניתן להזמין קפה מראש ולאסוף במהירות.' },
          { question: 'האם יש אופציות טבעוניות?', answer: 'בהחלט! יש לנו חלב שקדים, שיבולת שועל וסויה.' }
        ];
      } else if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
        faq = [
          { question: 'כמה זמן לוקח פיתוח מערכת?', answer: 'זמן הפיתוח תלוי במורכבות הפרויקט, בדרך כלל בין 2-6 חודשים.' },
          { question: 'האם יש תמיכה לאחר המסירה?', answer: 'כן, אנחנו מספקים תמיכה טכנית מלאה לאחר המסירה.' },
          { question: 'האם המערכת תהיה מאובטחת?', answer: 'כן, אנחנו עומדים בתקני האבטחה הגבוהים ביותר בתעשייה.' }
        ];
      } else if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
        faq = [
          { question: 'כמה זמן לוקח לראות תוצאות?', answer: 'תוצאות ראשוניות נראות בדרך כלל תוך 4-6 שבועות מתחילת התהליך.' },
          { question: 'איך נמדדת ההצלחה?', answer: 'אנחנו קובעים יחד מדדי הצלחה ברורים ועוקבים אחריהם באופן קבוע.' },
          { question: 'האם יש התחייבות לתוצאות?', answer: 'כן, אנחנו מתחייבים להשגת המטרות שנקבעו יחד בתחילת התהליך.' }
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
