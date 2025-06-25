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
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      return [
        { icon: "code-box-line", title: "פיתוח מותאם אישית", desc: "פתרונות טכנולוגיים המותאמים לצרכים הייחודיים שלכם" },
        { icon: "shield-check-line", title: "אבטחה מתקדמת", desc: "הגנה מלאה על המידע והנתונים הרגישים שלכם" },
        { icon: "speed-line", title: "ביצועים מעולים", desc: "מערכות מהירות ויעילות שחוסכות זמן ומשאבים" },
        { icon: "headphone-line", title: "תמיכה 24/7", desc: "צוות מקצועי זמין תמיד לכל שאלה או בעיה" }
      ];
    }
    
    if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      return [
        { icon: "lightbulb-line", title: "אסטרטגיה מנצחת", desc: "תכנון עסקי מדויק שמוביל לתוצאות מדודות" },
        { icon: "line-chart-line", title: "גידול במכירות", desc: "העלאה משמעותית בהכנסות ורווחיות העסק" },
        { icon: "team-line", title: "ייעוץ אישי", desc: "ליווי צמוד ומותאם לאתגרים הספציפיים שלכם" },
        { icon: "trophy-line", title: "הצלחה מוכחת", desc: "עשרות עסקים שכבר השיגו יעדים עם הייעוץ שלנו" }
      ];
    }
    
    if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
      return [
        { icon: "restaurant-line", title: "מנות גורמה", desc: "מטבח איכותי עם מרכיבים טריים ומקומיים" },
        { icon: "time-line", title: "שירות מהיר", desc: "הגשה מהירה וחווית אוכל מושלמת" },
        { icon: "heart-line", title: "אווירה חמה", desc: "סביבה נעימה ומזמינה לכל המשפחה" },
        { icon: "star-line", title: "טעם בלתי נשכח", desc: "חוויה קולינרית שתרצו לחזור אליה שוב ושוב" }
      ];
    }
    
    // שירותים כלליים
    return [
      { icon: "customer-service-line", title: "שירות מקצועי", desc: "צוות מנוסה ומומחה שדואג לכל פרט" },
      { icon: "rocket-line", title: "תוצאות מהירות", desc: "פתרונות יעילים שמביאים תוצאות בזמן קצר" },
      { icon: "shield-star-line", title: "אמינות מוחלטת", desc: "עמידה בהתחייבויות ואחריות מלאה על השירות" },
      { icon: "thumb-up-line", title: "שביעות רצון", desc: "לקוחות מרוצים שחוזרים וממליצים הלאה" }
    ];
  };

  const getTimelineSteps = () => {
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      return [
        { step: "01", title: "ניתוח דרישות", desc: "מפגש מעמיק להבנת הצרכים הטכנולוגיים שלכם", color: "#3b82f6", icon: "search-line" },
        { step: "02", title: "תכנון הפתרון", desc: "עיצוב ארכיטקטורה טכנית מותאמת לעסק", color: "#8b5cf6", icon: "settings-line" },
        { step: "03", title: "פיתוח ובניה", desc: "קידוד מקצועי עם בדיקות איכות רציפות", color: "#06b6d4", icon: "code-line" },
        { step: "04", title: "השקה ותמיכה", desc: "עליית המערכת ותמיכה מתמשכת", color: "#10b981", icon: "rocket-line" }
      ];
    }
    
    if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      return [
        { step: "01", title: "אבחון עסקי", desc: "בדיקה מקיפה של המצב הנוכחי והזדמנויות", color: "#3b82f6", icon: "file-search-line" },
        { step: "02", title: "בניית אסטרטגיה", desc: "יצירת תכנית פעולה מדויקת ומותאמת", color: "#8b5cf6", icon: "road-map-line" },
        { step: "03", title: "יישום התכנית", desc: "ליווי בביצוע השינויים והשיפורים", color: "#06b6d4", icon: "play-circle-line" },
        { step: "04", title: "מדידה והתאמה", desc: "מעקב אחר תוצאות ועדכונים שוטפים", color: "#10b981", icon: "bar-chart-line" }
      ];
    }
    
    // תהליך כללי
    return [
      { step: "01", title: "פגישת היכרות", desc: "נכיר את הצרכים והמטרות שלכם", color: "#3b82f6", icon: "user-heart-line" },
      { step: "02", title: "תכנון מותאם", desc: "נבנה תכנית פעולה אישית ומקצועית", color: "#8b5cf6", icon: "mind-map" },
      { step: "03", title: "ביצוע מושלם", desc: "נוציא לפועל עם מקצועיות ודיוק", color: "#06b6d4", icon: "check-double-line" },
      { step: "04", title: "מעקב ושיפור", desc: "נמדוד תוצאות ונמשיך לשפר", color: "#10b981", icon: "trending-up-line" }
    ];
  };

  const getFloatingFeatures = () => {
    const features = [
      { 
        title: "מהירות שיא", 
        desc: "תוצאות תוך 24-48 שעות",
        gradient: "from-blue-500 to-cyan-400",
        position: "top-20 right-10",
        size: "w-48 h-32",
        icon: "speed-line"
      },
      { 
        title: "איכות מעולה", 
        desc: "סטנדרטים הגבוהים ביותר",
        gradient: "from-purple-500 to-pink-400", 
        position: "top-40 left-20",
        size: "w-52 h-36",
        icon: "medal-line"
      },
      { 
        title: "מחיר הוגן", 
        desc: "ערך אמיתי לכל שקל",
        gradient: "from-green-500 to-emerald-400",
        position: "bottom-32 right-16", 
        size: "w-44 h-28",
        icon: "money-dollar-circle-line"
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
        zIndex: "z-30",
        icon: "user-line"
      },
      {
        title: "פרויקט מוצלח",
        name: "שרה לוי", 
        role: "בעלת חנות אופנה",
        content: "תוצאות מעבר לכל הציפיות",
        color: "from-purple-500 to-purple-600",
        rotation: "rotate-3",
        zIndex: "z-20",
        icon: "briefcase-line"
      },
      {
        title: "שביעות רצון",
        name: "מיכאל אברהם",
        role: "יועץ עסקי",
        content: "מומלץ בחום לכולם!",
        color: "from-cyan-500 to-cyan-600", 
        rotation: "-rotate-2",
        zIndex: "z-10",
        icon: "heart-line"
      }
    ];
    
    return cards;
  };

  const getPricingPlans = () => {
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      return [
        {
          name: "פתרון בסיסי",
          price: "₪2,999",
          period: "התקנה חד פעמית",
          features: ["מערכת בסיסית", "הדרכה ראשונית", "תמיכה 3 חודשים"],
          highlighted: false,
          buttonText: "התחל עכשיו",
          icon: "computer-line"
        },
        {
          name: "פתרון מתקדם", 
          price: "₪7,999",
          period: "כולל פיתוח מותאם",
          features: ["מערכת מתקדמת", "התאמות אישיות", "תמיכה שנתית", "עדכונים רגילים"],
          highlighted: true,
          buttonText: "הכי פופולרי",
          icon: "rocket-line"
        },
        {
          name: "פתרון ארגוני",
          price: "₪19,999", 
          period: "מערכת מלאה",
          features: ["פתרון מלא", "אינטגרציות", "תמיכה VIP", "ליווי מלא", "אחריות מורחבת"],
          highlighted: false,
          buttonText: "לארגונים",
          icon: "building-line"
        }
      ];
    }
    
    if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      return [
        {
          name: "ייעוץ בסיסי",
          price: "₪999",
          period: "לחודש",
          features: ["ייעוץ טלפוני", "דוח חודשי", "תמיכה בשעות עבודה"],
          highlighted: false,
          buttonText: "התחל עכשיו",
          icon: "customer-service-line"
        },
        {
          name: "ייעוץ מתקדם", 
          price: "₪1,999",
          period: "לחודש",
          features: ["ייעוץ אישי", "דוח שבועי", "תמיכה 24/7", "אסטרטגיה מותאמת"],
          highlighted: true,
          buttonText: "הכי פופולרי",
          icon: "lightbulb-line"
        },
        {
          name: "ייעוץ VIP",
          price: "₪4,999", 
          period: "לחודש",
          features: ["ייעוץ VIP", "דוח יומי", "ליווי אישי", "גישה לכל הכלים", "אסטרטגיה מלאה"],
          highlighted: false,
          buttonText: "לעסקים גדולים",
          icon: "vip-crown-line"
        }
      ];
    }
    
    // תכניות כלליות
    return [
      {
        name: "תכנית בסיסית",
        price: "₪499",
        period: "לחודש",
        features: ["שירות בסיסי", "תמיכה רגילה", "דוח חודשי"],
        highlighted: false,
        buttonText: "התחל עכשיו",
        icon: "price-tag-3-line"
      },
      {
        name: "תכנית מתקדמת", 
        price: "₪999",
        period: "לחודש",
        features: ["שירות מתקדם", "תמיכה 24/7", "דוח שבועי", "תכונות נוספות"],
        highlighted: true,
        buttonText: "הכי פופולרי",
        icon: "star-line"
      },
      {
        name: "תכנית פרימיום",
        price: "₪1,999", 
        period: "לחודש",
        features: ["שירות מלא", "תמיכה VIP", "דוח יומי", "ליווי אישי", "כל התכונות"],
        highlighted: false,
        buttonText: "לעסקים גדולים",
        icon: "vip-crown-line"
      }
    ];
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

  const getBeforeAfterSection = () => {
    return {
      title: "התוצאות מדברות בעד עצמן",
      subtitle: "ראו איך שינינו חיים ועסקים",
      cases: [
        {
          title: "הגדלת מכירות",
          before: "₪50K חודשי",
          after: "₪120K חודשי",
          improvement: "+140%"
        },
        {
          title: "שביעות רצון לקוחות",
          before: "3.2/5 כוכבים",
          after: "4.9/5 כוכבים",
          improvement: "+53%"
        }
      ]
    };
  };

  const getTeamSection = () => {
    return {
      title: "הצוות המקצועי שלנו",
      subtitle: "הכירו את האנשים שיובילו אתכם להצלחה",
      members: [
        {
          name: "דן כהן",
          role: "מנהל פרויקטים",
          experience: "8 שנות ניסיון",
          icon: "user-settings-line"
        },
        {
          name: "רחל לוי",
          role: "מומחית שיווק",
          experience: "6 שנות ניסיון",
          icon: "women-line"
        },
        {
          name: "יוסי מזרחי",
          role: "יועץ אסטרטגי",
          experience: "12 שנות ניסיון",
          icon: "user-star-line"
        }
      ]
    };
  };

  const getPortfolioSection = () => {
    return {
      title: "העבודות שלנו",
      subtitle: "דוגמאות לפרויקטים מוצלחים שביצענו",
      projects: [
        {
          title: "פרויקט A",
          category: "עיצוב אתרים",
          description: "אתר קונסטרקציה מלא עם ממשק ניהול",
          result: "300% עלייה בלידים",
          icon: "palette-line"
        },
        {
          title: "פרויקט B", 
          category: "קמפיין שיווקי",
          description: "קמפיין דיגיטלי לחברת טכנולוגיה",
          result: "250% ROI",
          icon: "megaphone-line"
        },
        {
          title: "פרויקט C",
          category: "אפליקציה",
          description: "אפליקצית משלוחים חדשנית",
          result: "10K הורדות בחודש הראשון",
          icon: "smartphone-line"
        }
      ]
    };
  };

  const getAdvancedCTAButtons = () => {
    return [
      {
        text: "התחל עכשיו - חינם!",
        style: "primary",
        icon: "rocket-line"
      },
      {
        text: "קבל ייעוץ ללא תשלום",
        style: "secondary", 
        icon: "chat-line"
      },
      {
        text: "הזמן פגישת היכרות",
        style: "outline",
        icon: "calendar-line"
      }
    ];
  };

  const getSocialProofSection = () => {
    return {
      title: "הם כבר בוטחים בנו",
      subtitle: "חברות מובילות שבחרו לעבוד איתנו",
      logos: [
        "🏢 טכנולוגיות ABC",
        "🏪 רשת חנויות XYZ", 
        "🏥 מרכז רפואי המרכז",
        "🎓 האוניברסיטה הפתוחה",
        "🏭 תעשיות ישראל",
        "💼 קבוצת השקעות פיניקס"
      ]
    };
  };

  const getVideoSection = () => {
    return {
      title: "צפו בסיפור ההצלחה שלנו",
      subtitle: "3 דקות שיסבירו לכם למה אנחנו הבחירה הנכונה",
      videoPlaceholder: "🎥 וידאו הצגה - 3:24 דקות",
      description: "הסרטון כולל המלצות לקוחות, הצגת התהליך והתוצאות המרשימות"
    };
  };

  const getMapLocationSection = () => {
    return {
      title: "בואו לבקר אותנו",
      subtitle: "המשרדים שלנו נמצאים במרכז הארץ",
      address: "רחוב הטכנולוגיה 15, תל אביב",
      hours: "ימים א'-ה' 9:00-17:00",
      phone: "03-1234567",
      mapPlaceholder: "🗺️ מפה אינטראקטיבית"
    };
  };

  const getNewsletterSection = () => {
    return {
      title: "הישארו מעודכנים",
      subtitle: "קבלו טיפים, חדשות ועדכונים חשובים ישירות למייל",
      benefits: [
        "טיפים שבועיים לשיפור העסק",
        "מדריכים בלעדיים",
        "הזמנות לאירועים מיוחדים",
        "הנחות על שירותים"
      ],
      placeholder: "הכניסו את כתובת המייל שלכם"
    };
  };

  const getImprovedTestimonials = () => {
    const allTestimonials = [
      {
        name: "יוסי כהן",
        role: "מנהל עסק",
        content: `השירות של ${formData.businessName} פשוט יוצא מהכלל! קיבלתי בדיוק מה שחיפשתי ואפילו יותר`,
        rating: 5,
        icon: "user-line"
      },
      {
        name: "שרה לוי",
        role: "לקוחה קבועה", 
        content: "מקצועיות ברמה הגבוהה ביותר. ממליצה בחום לכל מי שמחפש איכות!",
        rating: 5,
        icon: "women-line"
      },
      {
        name: "דוד מזרחי",
        role: "איש עסקים",
        content: `בזכות ${formData.businessName} הצלחתי להגיע למטרות שלי ואף לחרוג מהן`,
        rating: 5,
        icon: "briefcase-line"
      },
      {
        name: "מירי רוזן",
        role: "מנהלת שיווק",
        content: "התוצאות היו מעבר לכל הציפיות! שירות יוצא מן הכלל עם תשומת לב לפרטים",
        rating: 5,
        icon: "user-star-line"
      }
    ];

    const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const getImprovedHeadlines = () => {
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      const headlines = [
        `${formData.businessName} - פתרונות טכנולוגיים מתקדמים`,
        `${formData.businessName} - החדשנות הטכנולוגית שלכם`,
        `${formData.businessName} - מערכות חכמות לעסק מצליח`,
        `${formData.businessName} - הטכנולוגיה שמקדמת עסקים`
      ];
      return headlines[Math.floor(Math.random() * headlines.length)];
    }
    
    if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      const headlines = [
        `${formData.businessName} - הייעוץ שמביא תוצאות`,
        `${formData.businessName} - מומחים בהצלחה עסקית`,
        `${formData.businessName} - הדרך הנכונה לגדילה`,
        `${formData.businessName} - אסטרטגיה מנצחת לעסק שלכם`
      ];
      return headlines[Math.floor(Math.random() * headlines.length)];
    }
    
    const headlines = [
      `${formData.businessName} - המובילים ב${formData.businessType}`,
      `${formData.businessName} - החוויה המושלמת שחיפשתם`,
      `${formData.businessName} - קובעים סטנדרט חדש ב${formData.businessType}`,
      `${formData.businessName} - ${formData.businessType} ברמה אחרת`
    ];
    return headlines[Math.floor(Math.random() * headlines.length)];
  };

  const getImprovedSubheadlines = () => {
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      const subheadlines = [
        `פתרונות טכנולוגיים מתקדמים שחוסכים זמן, כסף ומשאבים. אנחנו מביאים לכם את הטכנולוגיה הכי מתקדמת בשוק.`,
        `מערכות חכמות ואמינות שמעצימות את הביצועים של העסק שלכם. הצטרפו למהפכה הטכנולוגית.`,
        `עם שנות ניסיון בפיתוח וחדשנות, אנחנו יוצרים פתרונות מותאמים שמובילים להצלחה מדודה.`
      ];
      return subheadlines[Math.floor(Math.random() * subheadlines.length)];
    }
    
    if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      const subheadlines = [
        `ייעוץ אסטרטגי מקצועי שמוביל לגידול משמעותי בהכנסות והצלחה עסקית מדודה.`,
        `עם מאות עסקים מצליחים מאחורינו, אנחנו יודעים בדיוק איך להוביל אתכם להצלחה.`,
        `מומחים בבניית אסטרטגיות מנצחות שמביאות תוצאות מהירות ומשמעותיות לעסק שלכם.`
      ];
      return subheadlines[Math.floor(Math.random() * subheadlines.length)];
    }
    
    const subheadlines = [
      `גלו את ${formData.mainGoal} עם ${formData.keyFeatures}. אנחנו כאן כדי להפוך את החלום שלכם למציאות מוחשית.`,
      `החוויה שלכם היא העדיפות הראשונה שלנו. עם ${formData.keyFeatures} אנחנו מבטיחים ${formData.mainGoal} ברמה הגבוהה ביותר.`,
      `מחפשים ${formData.businessType} מקצועי ואמין? ${formData.keyFeatures} זה מה שהופך אותנו למובילים בתחום.`
    ];
    return subheadlines[Math.floor(Math.random() * subheadlines.length)];
  };

  const getImprovedFeatures = () => {
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      return [
        "פיתוח מותאם אישית לצרכים הייחודיים שלכם",
        "אבטחה מתקדמת והגנה מלאה על המידע",
        "ביצועים מעולים ומהירות תגובה גבוהה",
        "תמיכה טכנית מקצועית 24/7",
        "עדכונים רגילים ושיפורים מתמידים",
        "אינטגרציה חלקה עם מערכות קיימות",
        "ממשק משתמש אינטואיטיבי וידידותי",
        "גיבוי אוטומטי ושחזור מהיר"
      ];
    }
    
    if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      return [
        "אבחון עסקי מקיף וזיהוי הזדמנויות",
        "אסטרטגיה מותאמת אישית לעסק שלכם",
        "ליווי מקצועי לאורך כל התהליך",
        "כלים מתקדמים למדידת תוצאות",
        "ניסיון מוכח במגוון תחומים עסקיים",
        "גישה ישירה למומחים מובילים",
        "תכניות פעולה מעשיות וברות יישום",
        "מעקב שוטף והתאמות לפי הצורך"
      ];
    }
    
    const allFeatures = [
      `שירות ${formData.businessType} מקצועי ואמין`,
      `מתמחים ב${formData.keyFeatures}`,
      `מטרתנו: ${formData.mainGoal}`,
      "צוות מנוסה ומקצועי ברמה הגבוהה ביותר",
      "שירות זמין 24/7 לכל שאלה ובקשה",
      "מחירים תחרותיים והוגנים",
      "אחריות מלאה על השירות והתוצאות",
      "ייעוץ מקצועי ללא תשלום"
    ];
    
    return allFeatures;
  };

  const getImprovedFAQ = () => {
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      return [
        {
          question: "כמה זמן לוקח לפתח מערכת מותאמת?",
          answer: "זמן הפיתוח תלוי במורכבות הפרויקט, אך בדרך כלל בין 4-12 שבועות. נקבע לוח זמנים מדויק לאחר הניתוח הראשוני."
        },
        {
          question: "האם אתם מספקים תמיכה לאחר השקת המערכת?",
          answer: "כן, אנחנו מספקים תמיכה מלאה, הדרכות ועדכונים. כל פרויקט כולל תקופת אחריות וחבילת תמיכה מותאמת."
        },
        {
          question: "איך אתם מבטיחים אבטחה ופרטיות?",
          answer: "אנחנו משתמשים בטכנולוגיות האבטחה המתקדמות ביותר, כולל הצפנה, גיבויים מאובטחים ופרוטוקולי אבטחה מובילים."
        },
        {
          question: "האם המערכת תתאים לגידול העסק בעתיד?",
          answer: "כל המערכות שלנו בנויות להיות סקיילביליות ומתאימות לגידול. הן יכולות להתרחב ולהתאים לצרכים משתנים."
        }
      ];
    }
    
    if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      return [
        {
          question: "איך מתחילים תהליך ייעוץ עסקי?",
          answer: "התהליך מתחיל בפגישת אבחון ללא התחייבות, בה אנחנו מכירים את העסק ובונים תכנית פעולה מותאמת."
        },
        {
          question: "כמה זמן לוקח לראות תוצאות?",
          answer: "תוצאות ראשוניות נראות בדרך כלל תוך 30-60 יום, אך שיפורים משמעותיים מתרחשים בדרך כלל תוך 3-6 חודשים."
        },
        {
          question: "מה כולל הליווי העסקי?",
          answer: "הליווי כולל פגישות קבועות, בניית אסטרטגיות, כלים מעשיים, מעקב אחר יעדים והתאמות לפי הצורך."
        },
        {
          question: "האם הייעוץ מתאים לכל סוג של עסק?",
          answer: "אנחנו עובדים עם מגוון רחב של עסקים - מסטארטאפים ועד חברות גדולות, בכל התחומים. כל ייעוץ מותאם אישית."
        }
      ];
    }
    
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
      }
    ];
    
    return allFAQs.slice(0, 4);
  };

  const getSelectedElements = () => {
    const selectedElements = formData.selectedElements || [];
    
    // אם לא נבחרו אלמנטים, נחזיר את כל האלמנטים הקיימים
    if (selectedElements.length === 0) {
      return [
        { type: 'serviceCards', content: getCreativeServiceCards() },
        { type: 'timeline', content: getTimelineSteps() },
        { type: 'floatingFeatures', content: getFloatingFeatures() },
        { type: 'layeredCards', content: getLayeredCards() }
      ];
    }

    // חיבור בין ה-ID לפונקציות
    const elementMap = {
      serviceCards: { type: 'serviceCards', content: getCreativeServiceCards() },
      timeline: { type: 'timeline', content: getTimelineSteps() },
      floatingFeatures: { type: 'floatingFeatures', content: getFloatingFeatures() },
      layeredCards: { type: 'layeredCards', content: getLayeredCards() },
      pricing: { type: 'pricing', content: getPricingPlans() },
      '3dElements': { type: '3dElements', content: get3DElements() },
      statistics: { type: 'statistics', content: generateDynamicStats(formData.businessType) },
      beforeAfter: { type: 'beforeAfter', content: getBeforeAfterSection() },
      teamSection: { type: 'teamSection', content: getTeamSection() },
      portfolio: { type: 'portfolio', content: getPortfolioSection() },
      ctaButtons: { type: 'ctaButtons', content: getAdvancedCTAButtons() },
      socialProof: { type: 'socialProof', content: getSocialProofSection() },
      videoSection: { type: 'videoSection', content: getVideoSection() },
      mapLocation: { type: 'mapLocation', content: getMapLocationSection() },
      newsletter: { type: 'newsletter', content: getNewsletterSection() }
    };

    return selectedElements.map(elementId => elementMap[elementId]).filter(Boolean);
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
      creativeElements: getSelectedElements()
    };
  };

  return {
    generatedContent,
    setGeneratedContent,
    generateCreativeContent
  };
};
