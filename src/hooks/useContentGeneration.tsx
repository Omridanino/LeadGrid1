
import { useState } from "react";

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateDynamicStats = (businessType: string) => {
    const type = businessType?.toLowerCase() || '';
    
    if (type.includes('קפה') || type.includes('בית קפה')) {
      return {
        customers: '2,500+ כוסות יומיות',
        experience: '8 שנות מקצועיות',
        satisfaction: '95% לקוחות חוזרים',
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
        satisfaction: '94% לקוחות חוזרים',
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

  const getImprovedTestimonials = () => {
    const allTestimonials = [
      {
        name: "יוסי כהן",
        role: "מנהל עסק",
        content: `השירות של ${formData.businessName} פשוט יוצא מהכלל! קיבלתי בדיוק מה שחיפשתי ואפילו יותר`,
        rating: 5
      },
      {
        name: "שרה לוי",
        role: "לקוחה קבועה",
        content: "מקצועיות ברמה הגבוהה ביותר. ממליצה בחום לכל מי שמחפש איכות!",
        rating: 5
      },
      {
        name: "דוד מזרחי",
        role: "איש עסקים",
        content: `בזכות ${formData.businessName} הצלחתי להגיע למטרות שלי ואף לחרוג מהן`,
        rating: 5
      },
      {
        name: "מירי רוזן",
        role: "מנהלת שיווק",
        content: "התוצאות היו מעבר לכל הציפיות! שירות יוצא מן הכלל עם תשומת לב לפרטים",
        rating: 5
      },
      {
        name: "אבי ישראלי",
        role: "יועץ עסקי",
        content: "מקצועיות, יעילות ותוצאות מרשימות. בדיוק מה שחיפשתי ועוד קצת",
        rating: 5
      },
      {
        name: "נועה גרין",
        role: "בעלת עסק",
        content: "השקעה שמשתלמת לטווח הארוך. ממליצה בחום לכל מי שרוצה תוצאות!",
        rating: 5
      },
      {
        name: "רן שמיר",
        role: "מנכ\"ל סטארט-אפ",
        content: "הגישה החדשנית והמקצועית עזרה לי להגיע לתוצאות שלא חלמתי עליהן",
        rating: 5
      },
      {
        name: "ליאת כרמי",
        role: "יזמת דיגיטל",
        content: "השירות המושלם עם יחס אישי וחם. כל פרט נלקח בחשבון עד הסוף",
        rating: 5
      }
    ];

    const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const getImprovedHeadlines = () => {
    const headlines = [
      `${formData.businessName} - המובילים ב${formData.businessType}`,
      `${formData.businessName} - החוויה המושלמת שחיפשתם`,
      `${formData.businessName} - קובעים סטנדרט חדש ב${formData.businessType}`,
      `${formData.businessName} - ${formData.businessType} ברמה אחרת`,
      `${formData.businessName} - הבחירה הנכונה להצלחה שלכם`,
      `${formData.businessName} - מגשימים חלומות ב${formData.businessType}`,
      `${formData.businessName} - המקום שבו איכות פוגשת מצוינות`
    ];
    return headlines[Math.floor(Math.random() * headlines.length)];
  };

  const getImprovedSubheadlines = () => {
    const subheadlines = [
      `גלו את ${formData.mainGoal} עם ${formData.keyFeatures}. אנחנו כאן כדי להפוך את החלום שלכם למציאות מוחשית.`,
      `החוויה שלכם היא העדיפות הראשונה שלנו. עם ${formData.keyFeatures} אנחנו מבטיחים ${formData.mainGoal} ברמה הגבוהה ביותר.`,
      `מחפשים ${formData.businessType} מקצועי ואמין? ${formData.keyFeatures} זה מה שהופך אותנו למובילים בתחום.`,
      `בואו נגשים יחד את ${formData.mainGoal}. עם ${formData.keyFeatures} אנחנו נוביל אתכם להצלחה מבטיחה.`,
      `${formData.keyFeatures} ברמה חדשה לחלוטין. הצטרפו אלינו למסע מרגש לקראת ${formData.mainGoal}.`,
      `המקום שבו פוגשים איכות, מקצועיות ו${formData.keyFeatures}. המטרה שלנו: ${formData.mainGoal} עבורכם.`,
      `עם ${formData.keyFeatures} ומחויבות מלאה ל${formData.mainGoal}, אנחנו נעשה הכל כדי שתגיעו למקום הכי טוב.`
    ];
    return subheadlines[Math.floor(Math.random() * subheadlines.length)];
  };

  const getImprovedFeatures = () => {
    const allFeatures = [
      `שירות ${formData.businessType} מקצועי ואמין`,
      `מתמחים ב${formData.keyFeatures}`,
      `מטרתנו: ${formData.mainGoal}`,
      "צוות מנוסה ומקצועי ברמה הגבוהה ביותר",
      "שירות זמין 24/7 לכל שאלה ובקשה",
      "מחירים תחרותיים והוגנים",
      "אחריות מלאה על השירות והתוצאות",
      "ייעוץ מקצועי ללא תשלום",
      "תמיכה מלאה לאורך כל הדרך",
      "פתרונות מותאמים אישית לכל לקוח",
      "שיטות עבודה מתקדמות וחדשניות",
      "עמידה בלוחות זמנים ובהתחייבויות"
    ];
    
    const shuffled = allFeatures.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  };

  const getImprovedFAQ = () => {
    const allFAQs = [
      {
        question: `מה הופך את ${formData.businessName} למיוחדים בתחום?`,
        answer: `אנחנו מתמחים ב${formData.businessType} ומציעים ${formData.keyFeatures} ברמה הגבוהה ביותר. המטרה שלנו היא ${formData.mainGoal} עם דגש על איכות ושירות מעולה.`
      },
      {
        question: "כמה זמן לוקח לקבל שירות איכותי?",
        answer: "אנחנו מחויבים למתן שירות מהיר ויעיל. הזמן תלוי בסוג השירות הנדרש, אך אנחנו תמיד עומדים בלוחות הזמנים המוסכמים."
      },
      {
        question: "האם יש אחריות מלאה על השירות?",
        answer: "כן! אנחנו נותנים אחריות מלאה על כל השירותים שלנו ומתחייבים לשביעות רצון מלאה של הלקוחות."
      },
      {
        question: "איך אפשר ליצור קשר ולקבל ייעוץ?",
        answer: `תוכלו ליצור קשר דרך הפרטים הבאים: ${formData.contactInfo}. אנחנו נשמח לספק ייעוץ מקצועי ללא תשלום.`
      },
      {
        question: "מה כולל השירות שלכם?",
        answer: `השירות שלנו כולל ${formData.keyFeatures} עם דגש על ${formData.mainGoal}. אנחנו מספקים פתרון מלא ומותאם אישית.`
      },
      {
        question: "האם אתם עובדים עם לקוחות בכל הארץ?",
        answer: "כן, אנחנו מספקים שירות לכל הארץ עם אותה רמת מקצועיות ואיכות בכל מקום."
      }
    ];
    
    const shuffled = allFAQs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const getRandomElements = () => {
    const allElements = [
      {
        type: 'testimonial',
        content: {
          name: "רחל אברהם",
          role: "יזמת מובילה",
          content: "השירות הכי מקצועי שקיבלתי אי פעם! התוצאות עלו על כל הציפיות שלי",
          rating: 5
        }
      },
      {
        type: 'testimonial',
        content: {
          name: "מיכאל גולן",
          role: "מנהל פרויקטים בכיר",
          content: "עבודה מדויקת, מהירה ואמינה. ממליץ בחום לכל מי שמחפש איכות!",
          rating: 5
        }
      },
      {
        type: 'text',
        content: {
          text: "אנחנו גאים להיות חלק מהמסע שלכם להצלחה. כל פרויקט שאנחנו לוקחים הוא הזדמנות ליצור משהו מיוחד, ייחודי ובלתי נשכח."
        }
      },
      {
        type: 'text',
        content: {
          text: "החזון שלנו הוא להפוך כל חלום למציאות מוחשית ומרגשת. עם ניסיון רב שנים ומחויבות מלאה, אנחנו כאן כדי להוביל אתכם להצלחה מבטיחה."
        }
      },
      {
        type: 'faq',
        content: {
          question: "מה הופך אתכם למיוחדים ויוצאי דופן בתחום?",
          answer: "השילוב הייחודי שלנו בין מקצועיות גבוהה, שירות אישי וחם ומחויבות מלאה לתוצאות מעולות."
        }
      },
      {
        type: 'faq',
        content: {
          question: "איך אתם מבטיחים איכות גבוהה ועקבית?",
          answer: "אנחנו עוברים תהליך בדיקה קפדני בכל שלב ומקפידים על הסטנדרטים הגבוהים ביותר בתחום."
        }
      },
      {
        type: 'title',
        content: {
          text: "למה לבחור דווקא בנו?",
          size: 'h2'
        }
      },
      {
        type: 'title',
        content: {
          text: "הסיפור המרגש מאחורי ההצלחה",
          size: 'h2'
        }
      }
    ];

    const shuffled = allElements.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 4) + 2);
  };

  const generateCreativeContent = () => {
    const stats = generateDynamicStats(formData.businessType);
    
    return {
      stats: stats,
      badge: `✨ ${formData.businessType} מובילים בתחום`,
      headline: getImprovedHeadlines(),
      subheadline: getImprovedSubheadlines(),
      cta: `בואו נתחיל יחד!`,
      featuresTitle: "למה לבחור דווקא בנו?",
      aboutTitle: "הסיפור שלנו",
      aboutText: `${formData.businessName} הוקמה מתוך אמונה עמוקה שכל לקוח מגיע לשירות המיוחד והמקצועי ביותר. אנחנו מתמחים ב${formData.businessType} ומציעים ${formData.keyFeatures} ברמה הגבוהה ביותר. המטרה שלנו היא ${formData.mainGoal} עבור כל לקוח ולקוח, תוך שמירה על איכות ללא פשרות.`,
      contactTitle: "בואו נדבר ונכיר!",
      features: getImprovedFeatures(),
      testimonials: getImprovedTestimonials(),
      faq: getImprovedFAQ(),
      emotional: {
        title: "החלום שלכם מתחיל כאן ועכשיו",
        content: `כל מסע מתחיל בצעד אחד נכון. ${formData.businessName} כאן כדי ללוות אותכם בדרך המרגשת להצלחה. עם ${formData.keyFeatures} ומחויבות מלאה ל${formData.mainGoal}, אנחנו נעשה הכל כדי שתגיעו למקום הכי טוב ומוצלח.`
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
