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

  const getCreativeServiceCards = () => {
    const services = [
      { icon: "🎯", title: "יעוץ אסטרטגי", desc: "פתרונות מותאמים אישית" },
      { icon: "⚡", title: "ביצוע מהיר", desc: "תוצאות בזמן שיא" },
      { icon: "🔧", title: "תמיכה מלאה", desc: "ליווי לאורך כל הדרך" },
      { icon: "📊", title: "מדידה ובקרה", desc: "מעקב אחר הישגים" },
      { icon: "🎨", title: "עיצוב מקצועי", desc: "אסתטיקה ופונקציונליות" },
      { icon: "🚀", title: "חדשנות טכנולוגית", desc: "פתרונות מתקדמים" }
    ];
    
    return services.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  const getTimelineSteps = () => {
    const steps = [
      { step: "01", title: "פגישת היכרות", desc: "נכיר את הצרכים והמטרות שלכם", color: "#3b82f6" },
      { step: "02", title: "תכנון אסטרטגי", desc: "נבנה תכנית מותאמת אישית", color: "#8b5cf6" },
      { step: "03", title: "יישום מקצועי", desc: "נוציא לפועל עם מקצועיות מלאה", color: "#06b6d4" },
      { step: "04", title: "תוצאות מדודות", desc: "נמדוד ונשפר את הביצועים", color: "#10b981" }
    ];
    
    return steps;
  };

  const getFloatingFeatures = () => {
    const features = [
      { 
        title: "מהירות שיא", 
        desc: "תוצאות תוך 24-48 שעות",
        gradient: "from-blue-500 to-cyan-400",
        position: "top-20 right-10",
        size: "w-48 h-32"
      },
      { 
        title: "איכות מעולה", 
        desc: "סטנדרטים הגבוהים ביותר",
        gradient: "from-purple-500 to-pink-400", 
        position: "top-40 left-20",
        size: "w-52 h-36"
      },
      { 
        title: "מחיר הוגן", 
        desc: "ערך אמיתי לכל שקל",
        gradient: "from-green-500 to-emerald-400",
        position: "bottom-32 right-16", 
        size: "w-44 h-28"
      }
    ];
    
    return features;
  };

  const getLayeredCards = () => {
    const cards = [
      {
        title: "המלצת הלקוח",
        name: "דוד כהן",
        role: "מנכ\"ל חברת טכנולוגיה",
        content: "השירות המקצועי ביותר שקיבלתי!",
        color: "from-blue-500 to-blue-600",
        rotation: "-rotate-6",
        zIndex: "z-30"
      },
      {
        title: "פרויקט מוצלח",
        name: "שרה לוי", 
        role: "בעלת חנות אופנה",
        content: "תוצאות מעבר לכל הציפיות",
        color: "from-purple-500 to-purple-600",
        rotation: "rotate-3",
        zIndex: "z-20"
      },
      {
        title: "שביעות רצון",
        name: "מיכאל אברהם",
        role: "יועץ עסקי",
        content: "מומלץ בחום לכולם!",
        color: "from-cyan-500 to-cyan-600", 
        rotation: "-rotate-2",
        zIndex: "z-10"
      }
    ];
    
    return cards;
  };

  const getPricingPlans = () => {
    const plans = [
      {
        name: "תכנית בסיסית",
        price: "₪499",
        period: "לחודש",
        features: ["ייעוץ טלפוני", "דוח חודשי", "תמיכה בשעות עבודה"],
        highlighted: false,
        buttonText: "התחל עכשיו"
      },
      {
        name: "תכנית מתקדמת", 
        price: "₪999",
        period: "לחודש",
        features: ["ייעוץ אישי", "דוח שבועי", "תמיכה 24/7", "אסטרטגיה מותאמת"],
        highlighted: true,
        buttonText: "הכי פופולרי"
      },
      {
        name: "תכנית פרימיום",
        price: "₪1,999", 
        period: "לחודש",
        features: ["ייעוץ VIP", "דוח יומי", "תמיכה VIP", "ליווי אישי", "גישה לכל הכלים"],
        highlighted: false,
        buttonText: "לעסקים גדולים"
      }
    ];
    
    return plans;
  };

  const get3DElements = () => {
    const elements = [
      {
        type: "floating-cube",
        position: "top-10 right-10",
        color: "bg-gradient-to-br from-blue-400 to-blue-600",
        animation: "animate-bounce",
        size: "w-16 h-16"
      },
      {
        type: "floating-sphere", 
        position: "bottom-20 left-10",
        color: "bg-gradient-to-br from-purple-400 to-purple-600",
        animation: "animate-pulse",
        size: "w-20 h-20"
      },
      {
        type: "floating-pyramid",
        position: "top-1/2 left-1/4",
        color: "bg-gradient-to-br from-cyan-400 to-cyan-600", 
        animation: "animate-ping",
        size: "w-12 h-12"
      }
    ];
    
    return elements;
  };

  const getImprovedTestimonials = () => {
    const allTestimonials = [
      {
        name: "יוסי כהן",
        role: "מנהל עסק",
        content: `השירות של ${formData.businessName} פשוט יוצא מהכלל! קיבלתי בדיוק מה שחיפשתי ואפילו יותר`,
        rating: 5,
        image: "👨‍💼"
      },
      {
        name: "שרה לוי",
        role: "לקוחה קבועה", 
        content: "מקצועיות ברמה הגבוהה ביותר. ממליצה בחום לכל מי שמחפש איכות!",
        rating: 5,
        image: "👩‍💻"
      },
      {
        name: "דוד מזרחי",
        role: "איש עסקים",
        content: `בזכות ${formData.businessName} הצלחתי להגיע למטרות שלי ואף לחרוג מהן`,
        rating: 5,
        image: "👨‍🏭"
      },
      {
        name: "מירי רוזן",
        role: "מנהלת שיווק",
        content: "התוצאות היו מעבר לכל הציפיות! שירות יוצא מן הכלל עם תשומת לב לפרטים",
        rating: 5,
        image: "👩‍🎨"
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

  const getCreativeElements = () => {
    const allElements = [
      {
        type: 'serviceCards',
        content: getCreativeServiceCards()
      },
      {
        type: 'timeline',
        content: getTimelineSteps()
      },
      {
        type: 'floatingFeatures',
        content: getFloatingFeatures()
      },
      {
        type: 'layeredCards',
        content: getLayeredCards()
      },
      {
        type: 'pricing',
        content: getPricingPlans()
      },
      {
        type: '3dElements',
        content: get3DElements()
      }
    ];
    
    // Always include service cards, plus 2-3 random additional elements
    const selectedElements = [allElements[0]]; // Always include service cards
    const remainingElements = allElements.slice(1);
    const shuffled = remainingElements.sort(() => 0.5 - Math.random());
    const numAdditional = Math.floor(Math.random() * 3) + 2; // 2-4 additional elements
    
    selectedElements.push(...shuffled.slice(0, numAdditional));
    
    return selectedElements;
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
      creativeElements: getCreativeElements()
    };
  };

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
