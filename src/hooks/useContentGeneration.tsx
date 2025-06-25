import { useState } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateDynamicStats = (businessType: string) => {
    const type = businessType?.toLowerCase() || '';
    
    if (type.includes('קפה') || type.includes('בית קפה')) {
      return {
        customers: '2,500+ כוסות יומיות',
        experience: '8 שנות מקצועיות',
        satisfaction: '95% חזרה ללקוחות',
        awards: '3 פרסי איכות'
      };
    }
    
    if (type.includes('מסעדה') || type.includes('אוכל')) {
      return {
        customers: '5,000+ ארוחות מוגשות',
        experience: '12 שנות ניסיון קולינרי',
        satisfaction: '98% שביעות רצון',
        dishes: '120+ מנות במתכון הבית'
      };
    }
    
    if (type.includes('טכנולוגי') || type.includes('תוכנה')) {
      return {
        customers: '300+ לקוחות פעילים',
        experience: '7 שנות חדשנות טכנולוגית',
        satisfaction: '99% זמינות מערכת',
        projects: '450+ פרויקטים הושלמו'
      };
    }
    
    if (type.includes('יועץ') || type.includes('ייעוץ')) {
      return {
        customers: '800+ לקוחות ייעוץ',
        experience: '15 שנות מומחיות',
        satisfaction: '96% המלצות חיוביות',
        success: '85% עלייה ברווחיות'
      };
    }
    
    if (type.includes('רפואה') || type.includes('בריאות')) {
      return {
        patients: '1,200+ מטופלים',
        experience: '10 שנות ניסיון רפואי',
        satisfaction: '97% שביעות רצון',
        treatments: '95% הצלחה בטיפולים'
      };
    }
    
    if (type.includes('חנות') || type.includes('אופנה')) {
      return {
        customers: '3,000+ לקוחות מרוצים',
        experience: '6 שנות ניסיון בתחום',
        satisfaction: '94% חזרה ללקוחות',
        products: '500+ מוצרים במלאי'
      };
    }
    
    if (type.includes('חינוך') || type.includes('הוראה')) {
      return {
        students: '1,500+ תלמידים הצליחו',
        experience: '12 שנות הוראה',
        satisfaction: '96% שביעות הורים',
        courses: '25 קורסים פעילים'
      };
    }
    
    if (type.includes('עיצוב') || type.includes('גרפיקה')) {
      return {
        projects: '400+ פרויקטי עיצוב',
        experience: '9 שנות יצירתיות',
        satisfaction: '98% אישור ראשון',
        clients: '200+ לקוחות חוזרים'
      };
    }
    
    if (type.includes('נדלן')) {
      return {
        deals: '150+ עסקאות הושלמו',
        experience: '11 שנות ניסיון בשוק',
        satisfaction: '93% המלצות לקוחות',
        portfolio: '50M₪ ערך נכסים'
      };
    }
    
    // ברירת מחדל
    return {
      customers: '2,500+ לקוחות מרוצים',
      experience: '10 שנות ניסיון',
      satisfaction: '98% שביעות רצון',
      projects: '500+ פרויקטים הושלמו'
    };
  };

  const generateCreativeContent = () => {
    const stats = generateDynamicStats(formData.businessType);
    
    return {
      stats: stats,
      badge: `✨ ${formData.businessType} מובילים בתחום`,
      headline: `${formData.businessName} - ${formData.businessType} ברמה אחרת`,
      subheadline: `גלה את ${formData.mainGoal} עם ${formData.keyFeatures}. אנחנו כאן כדי להפוך את החלום שלך למציאות.`,
      cta: `בוא נתחיל עכשיו!`,
      featuresTitle: "למה בוחרים בנו?",
      aboutTitle: "הסיפור שלנו",
      aboutText: `${formData.businessName} הוקמה מתוך אמונה שכל לקוח מגיע לשירות המיוחד ביותר. אנחנו מתמחים ב${formData.businessType} ומציעים ${formData.keyFeatures}. המטרה שלנו היא ${formData.mainGoal} עבור כל לקוח ולקוח.`,
      contactTitle: "בוא נדבר!",
      features: [
        `שירות ${formData.businessType} מקצועי ואמין`,
        `מתמחים ב${formData.keyFeatures}`,
        `מטרתנו: ${formData.mainGoal}`,
        "צוות מנוסה ומקצועי",
        "שירות 24/7",
        "מחירים תחרותיים",
        "אחריות מלאה על השירות",
        "ייעוץ חינם"
      ],
      testimonials: [
        {
          name: "יוסי כהן",
          role: "לקוח מרוצה",
          content: `השירות של ${formData.businessName} פשוט מעולה! קיבלתי בדיוק מה שחיפשתי`,
          rating: 5
        },
        {
          name: "שרה לוי",
          role: "לקוחה קבועה",
          content: "מקצועיות ברמה הגבוהה ביותר. ממליצה בחום!",
          rating: 5
        },
        {
          name: "דוד מזרחי",
          role: "איש עסקים",
          content: `בזכות ${formData.businessName} הצלחתי להגיע למטרות שלי`,
          rating: 5
        }
      ],
      faq: [
        {
          question: `מה הופך את ${formData.businessName} למיוחדים?`,
          answer: `אנחנו מתמחים ב${formData.businessType} ומציעים ${formData.keyFeatures} ברמה הגבוהה ביותר. המטרה שלנו היא ${formData.mainGoal}.`
        },
        {
          question: "כמה זמן לוקח לקבל שירות?",
          answer: "אנחנו מחויבים למתן שירות מהיר ויעיל. הזמן תלוי בסוג השירות הנדרש."
        },
        {
          question: "האם יש אחריות על השירות?",
          answer: "כן! אנחנו נותנים אחריות מלאה על כל השירותים שלנו."
        },
        {
          question: "איך אפשר ליצור קשר?",
          answer: `תוכלו ליצור קשר דרך הפרטים הבאים: ${formData.contactInfo}`
        }
      ],
      emotional: {
        title: "החלום שלך מתחיל כאן",
        content: `כל מסע מתחיל בצעד אחד. ${formData.businessName} כאן כדי ללוות אותך בדרך להצלחה. עם ${formData.keyFeatures} ומחויבות ל${formData.mainGoal}, אנחנו נעשה הכל כדי שתגיע למקום הכי טוב.`
      },
      customElements: []
    };
  };

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
