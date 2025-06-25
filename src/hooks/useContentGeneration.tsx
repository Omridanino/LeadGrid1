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

  const getRandomElements = () => {
    const allElements = [
      {
        type: 'testimonial',
        content: {
          name: "רחל אברהם",
          role: "יזמת",
          content: "השירות הכי מקצועי שקיבלתי! התוצאות עלו על כל הציפיות שלי",
          rating: 5
        }
      },
      {
        type: 'testimonial',
        content: {
          name: "מיכאל גולן",
          role: "מנהל פרויקטים",
          content: "עבודה מדויקת ומהירה. ממליץ בחום לכל מי שמחפש איכות!",
          rating: 5
        }
      },
      {
        type: 'text',
        content: {
          text: "אנחנו גאים להיות חלק מהמסע שלכם להצלחה. כל פרויקט שאנחנו לוקחים הוא הזדמנות ליצור משהו מיוחד ובלתי נשכח."
        }
      },
      {
        type: 'text',
        content: {
          text: "החזון שלנו הוא להפוך כל חלום למציאות מוחשית. עם ניסיון רב שנים ומחויבות מלאה, אנחנו כאן כדי להוביל אתכם להצלחה."
        }
      },
      {
        type: 'faq',
        content: {
          question: "מה הופך אתכם למיוחדים בתחום?",
          answer: "השילוב הייניקלי שלנו בין מקצועיות גבוהה, שירות אישי ומחויבות לתוצאות מעולות."
        }
      },
      {
        type: 'faq',
        content: {
          question: "איך אתם מבטיחים איכות גבוהה?",
          answer: "אנחנו עוברים תהליך בדיקה קפדני בכל שלב ומקפידים על הסטנדרטים הגבוהים ביותר בתחום."
        }
      },
      {
        type: 'title',
        content: {
          text: "למה לבחור בנו?",
          size: 'h2'
        }
      },
      {
        type: 'title',
        content: {
          text: "הסיפור שמאחורי ההצלחה",
          size: 'h2'
        }
      }
    ];

    // Return 2-4 random elements
    const shuffled = allElements.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 3) + 2);
  };

  const getRandomTestimonials = () => {
    const allTestimonials = [
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
      },
      {
        name: "מירי רוזן",
        role: "מנהלת שיווק",
        content: "התוצאות היו מעבר לכל הציפיות! שירות יוצא מן הכלל",
        rating: 5
      },
      {
        name: "אבי ישראלי",
        role: "יועץ עסקי",
        content: "מקצועיות, יעילות ותוצאות מרשימות. בדיוק מה שחיפשתי",
        rating: 5
      },
      {
        name: "נועה גרין",
        role: "בעלת עסק",
        content: "השקעה שמשתלמת לטווח הארוך. ממליצה לכולם!",
        rating: 5
      }
    ];

    // Return 3 random testimonials
    const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const getRandomHeadlines = () => {
    const headlines = [
      `${formData.businessName} - ${formData.businessType} ברמה אחרת`,
      `${formData.businessName} - החוויה המושלמת ב${formData.businessType}`,
      `${formData.businessName} - מובילים את הדרך ב${formData.businessType}`,
      `${formData.businessName} - ${formData.businessType} שמעביר ציפיות`,
      `${formData.businessName} - הבחירה הנכונה ל${formData.businessType}`
    ];
    return headlines[Math.floor(Math.random() * headlines.length)];
  };

  const getRandomSubheadlines = () => {
    const subheadlines = [
      `גלה את ${formData.mainGoal} עם ${formData.keyFeatures}. אנחנו כאן כדי להפוך את החלום שלך למציאות.`,
      `החוויה שלך היא העדיפות שלנו. עם ${formData.keyFeatures} אנחנו מבטיחים ${formData.mainGoal} ברמה הגבוהה ביותר.`,
      `מחפש ${formData.businessType} מקצועי? ${formData.keyFeatures} זה מה שהופך אותנו למובילים בתחום.`,
      `בואו נגשים יחד את ${formData.mainGoal}. עם ${formData.keyFeatures} אנחנו נוביל אתכם להצלחה.`,
      `${formData.keyFeatures} ברמה חדשה לחלוטין. הצטרפו אלינו למסע לקראת ${formData.mainGoal}.`
    ];
    return subheadlines[Math.floor(Math.random() * subheadlines.length)];
  };

  const generateCreativeContent = () => {
    const stats = generateDynamicStats(formData.businessType);
    
    return {
      stats: stats,
      badge: `✨ ${formData.businessType} מובילים בתחום`,
      headline: getRandomHeadlines(),
      subheadline: getRandomSubheadlines(),
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
      testimonials: getRandomTestimonials(),
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
      customElements: getRandomElements()
    };
  };

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
