

import { useMemo, useState } from 'react';

const getBusinessTypeContent = (businessType: string, businessAdvantages: string) => {
  const advantages = businessAdvantages ? businessAdvantages.split('\n').filter(adv => adv.trim()) : [];
  
  // Generate profession-specific content
  const professionData = {
    // Restaurant/Food
    'מסעדה': {
      features: ['מנות טריות יומיות', 'שירות מהיר ומקצועי', 'אווירה נעימה ומזמינה', 'מחירים הוגנים'],
      testimonials: [
        { name: 'רחל כהן', role: 'לקוחה קבועה', content: 'הגעתי לכאן עם המשפחה בשישי בערב והחוויה הייתה מדהימה! הטעמים, השירות והאווירה - הכל מושלם. חזרנו כבר שלוש פעמים השבוע.', rating: 5, image: '👩' },
        { name: 'דוד לוי', role: 'תושב השכונה', content: 'כבר שנתיים שאני אוכל כאן בקביעות. האיכות תמיד עקבית, המנות תמיד טריות והצוות מכיר אותי באופן אישי. זה הבית השני שלי.', rating: 5, image: '👨' },
        { name: 'מירי שמש', role: 'חוגגת יום הולדת', content: 'חגגנו כאן את יום ההולדת של בתי. הצוות הכין הפתעה מיוחדת, הילדים נהנו משעשועים והאוכל היה פנטסטי. תודה על החוויה הבלתי נשכחת!', rating: 5, image: '👩‍🦱' }
      ],
      faq: [
        { question: 'מה המומחיות המיוחדת של המסעדה?', answer: 'אנחנו מתמחים בבישול ביתי אותנטי עם מרכיבים טריים ומתכונים משפחתיים' },
        { question: 'האם יש תפריט מיוחד לילדים?', answer: 'כמובן! יש לנו תפריט ילדים מגוון עם מנות שהילדים אוהבים' },
        { question: 'איך מזמינים שולחן לאירוע?', answer: 'ניתן להזמין טלפונית או דרך האתר. אנחנו מציעים חבילות מיוחדות לאירועים' }
      ],
      aboutText: 'המסעדה שלנו נוסדה מתוך אהבה אמיתית לבישול ולאירוח. אנחנו מביאים לשולחן שלכם טעמים ביתיים אותנטיים עם שירות חם ואישי. כל מנה מוכנת בקפידה מרמת מרכיבים הטריים ביותר.',
      emotional: {
        title: 'הטעם של בית, החוויה של חיים',
        content: 'כל ארוחה אצלנו היא לא רק אוכל - זו חוויה משפחתית שלמה. מהרגע שאתם נכנסים אתם מרגישים את החמימות הביתית ואת הטעמים שמזכירים לכם את הבית.'
      }
    },
    
    // Coffee Shop  
    'בית קפה': {
      features: ['קפה איכותי מקלייה מקומית', 'אווירה שקטה ונעימה לעבודה', 'מבחר עוגות ומאפים טריים', 'שירות אישי וחם'],
      testimonials: [
        { name: 'יעל גולן', role: 'פרילנסרית', content: 'זה הבית הקפה הקבוע שלי! כל בוקר אני מגיעה לכאן עם המחשב הנייד. הצוות כבר יודע בדיוק איך אני אוהבת את הקפה והם תמיד שומרים לי את השולחן הקטן ליד החלון.', rating: 5, image: '👩‍💻' },
        { name: 'תום ברק', role: 'סטודנט', content: 'כתבתי כאן את כל העבודות של התואר. האווירה מושלמת ללמידה, הקפה מצוין והמחירים סבירים לסטודנט. הבעלים אפילו נתן לי הנחה בתקופת הבחינות!', rating: 5, image: '👨‍🎓' },
        { name: 'ליאת מזור', role: 'אמא עובדת', content: 'זה המקום שלי להפוגה בין העבודה לבית. כל פעם שאני מגיעה הצוות מקבל אותי בחיוך, זוכר מה אני אוהבת ונותן לי את הרגיעה שאני צריכה. זה יותר מבית קפה - זה משפחה.', rating: 5, image: '👩‍💼' }
      ],
      faq: [
        { question: 'מה מיוחד בקפה שלכם?', answer: 'אנחנו עובדים עם קלייה מקומית ובוחרים בקפידה את הפולים הטובים ביותר מכל העולם' },
        { question: 'האם יש אוכל טרי כל יום?', answer: 'כל הכריכים והמאפים נעשים בבוקר במטבח שלנו בטכניקות ביתיות' },
        { question: 'איך האווירה מתאימה לעבודה?', answer: 'יצרנו מקום שקט עם WiFi מהיר, שקעי חשמל בכל שולחן ומוזיקה רקע נעימה' }
      ],
      aboutText: 'בית הקפה שלנו נוצר מחלום להביא קפה איכותי ואווירה ביתית לשכונה. אנחנו מכירים כל לקוח בשמו, זוכרים את ההעדפות שלו ויוצרים חווית קפה אישית ומיוחדה.',
      emotional: {
        title: 'הבית השני שלכם בשכונה',
        content: 'כל כוס קפה אצלנו היא הזדמנות ליצור קשר אנושי. אנחנו לא רק מכינים קפה - אנחנו בונים קהילה של אנשים שאוהבים להרגיש בבית.'
      }
    },

    // Technology/Software
    'פיתוח תוכנה': {
      features: ['פתרונות טכנולוגיים חדשניים', 'צוות מקצועי עם ניסיון מוכח', 'ליווי אישי לאורך כל הפרויקט', 'טכנולוגיות מתקדמות ועדכניות'],
      testimonials: [
        { name: 'אבי ישראלי', role: 'מנכ"ל סטארט-אפ', content: 'הגעתי אליהם עם רעיון מעורפל לאפליקציה. הם לא רק פיתחו לי מוצר מדהים, אלא גם ייעצו לי איך להציג אותו למשקיעים. הפרויקט הושק בזמן ובתקציב, וכיום יש לנו אלפי משתמשים פעילים.', rating: 5, image: '👨‍💼' },
        { name: 'דנה רוזן', role: 'מנהלת IT', content: 'הם בנו לנו מערכת ניהול פנימית שחסכה לנו שעות עבודה כל יום. מה שמרשים אותי זה השירות המתמשך - גם שנה אחרי המסירה הם עדיין זמינים לכל שאלה ועדכון.', rating: 5, image: '👩‍💻' },
        { name: 'רון מלכה', role: 'יזם דיגיטלי', content: 'עבדתי עם הרבה חברות פיתוח, אבל כאן מצאתי שותפים אמיתיים. הם הבינו את החזון שלי, הציעו פתרונות יצירתיים ומסרו פרויקט שחרג מכל הציפיות שלי.', rating: 5, image: '👨‍🔬' }
      ],
      faq: [
        { question: 'איך תהליך הפיתוח נראה?', answer: 'אנחנו מתחילים בהבנת הצרכים, ממשיכים לתכנון מפורט, ומפתחים בשלבים עם מעורבות ומשוב מתמיד' },
        { question: 'מה קורה אחרי הושקת המוצר?', answer: 'אנחנו נותנים תמיכה מלאה, עדכונים ביטחוניים ומוכנים להרחבות עתידיות' },
        { question: 'איך אתם מבטיחים איכות?', answer: 'אנחנו עובדים עם בדיקות מתמשכות, סקירות קוד וסטנדרטים גבוהים של תכנות' }
      ],
      aboutText: 'אנחנו צוות של מפתחים נלהבים שמאמינים שטכנולוגיה צריכה לפתור בעיות אמיתיות. אנחנו לא רק כותבים קוד - אנחנו בונים פתרונות שמקדמים עסקים ויוצרים ערך אמיתי.',
      emotional: {
        title: 'השותפים הטכנולוגיים שלכם',
        content: 'כל פרויקט אצלנו מתחיל בהקשבה לחלומות שלכם ומסתיים בהגשמה שלהם. אנחנו לא רק ספקי שירות - אנחנו השותפים שלכם בדרך להצלחה דיגיטלית.'
      }
    },

    // Default for other professions
    'default': {
      features: ['שירות מקצועי ואמין', 'ניסיון רב בתחום', 'גישה אישית לכל לקוח', 'תוצאות מוכחות'],
      testimonials: [
        { name: 'מיכל ברק', role: 'לקוחה מרוצה', content: 'הגעתי אליהם עם בעיה מסובכת שאף אחד לא הצליח לפתור. הם לא רק מצאו פתרון, אלא גם הסבירו לי את כל התהליך ונתנו לי כלים להתמודד לעתיד. השירות האישי שלהם באמת יוצא דופן.', rating: 5, image: '👩' },
        { name: 'יוסי כהן', role: 'לקוח קבוע', content: 'אני עובד איתם כבר שלוש שנים וכל פעם הם מפתיעים אותי. הם זוכרים את הפרטים הקטנים, מתאימים את השירות בדיוק לצרכים שלי ותמיד זמינים כשאני צריך אותם.', rating: 5, image: '👨' },
        { name: 'שרה לוי', role: 'לקוחה מרוצה', content: 'מה שהכי מרשים אותי זה הכנות והשקיפות שלהם. הם תמיד אומרים לי בדיוק מה הם יכולים לעשות, כמה זה יעלה וכמה זמן זה ייקח. אין הפתעות, רק שירות מקצועי ואמין.', rating: 5, image: '👩‍🦱' }
      ],
      faq: [
        { question: 'מה מבדיל אתכם מהמתחרים?', answer: 'אנחנו משקיעים זמן להכיר כל לקוח אישית ולהתאים את השירות בדיוק לצרכים שלו' },
        { question: 'איך נבנה האמון בינינו?', answer: 'אנחנו מאמינים בשקיפות מלאה, תקשורת ברורה ועמידה בהבטחות' },
        { question: 'מה אחרי שהשירות מסתיים?', answer: 'אנחנו נשארים זמינים לכל שאלה, יעוץ או שירות נוסף שתצטרכו' }
      ],
      aboutText: 'אנחנו מאמינים שכל לקוח ייחודי ומגיע לשירות המותאם בדיוק לצרכים שלו. אנחנו משקיעים זמן להכיר אתכם, להבין את המטרות שלכם ולבנות פתרון שיביא לכם בדיוק את מה שאתם צריכים.',
      emotional: {
        title: 'השותפים שלכם להצלחה',
        content: 'אנחנו לא רק נותני שירות - אנחנו השותפים שלכם בדרך להצלחה. ההצלחה שלכם היא המטרה שלנו, והשביעות רצון שלכם היא הפרס הכי גדול שלנו.'
      }
    }
  };

  // Find matching profession data
  const key = Object.keys(professionData).find(key => 
    businessType.toLowerCase().includes(key.toLowerCase())
  ) || 'default';
  
  const data = professionData[key];
  
  // Create enhanced features from user advantages
  const enhancedFeatures = advantages.length >= 3 ? 
    advantages.map((advantage, index) => {
      const cleanAdvantage = advantage.replace(/^\d+\.\s*/, '').trim();
      // Generate enhanced versions based on the advantage
      const enhancements = [
        `${cleanAdvantage} ברמה הגבוהה ביותר`,
        `${cleanAdvantage} עם ליווי אישי`,
        `${cleanAdvantage} המותאם לכל לקוח`,
        `${cleanAdvantage} בגישה חדשנית`,
        `${cleanAdvantage} עם מחויבות מלאה לתוצאות`
      ];
      return enhancements[index % enhancements.length];
    }) : 
    data.features;

  return {
    features: enhancedFeatures,
    testimonials: data.testimonials,
    faq: data.faq,
    aboutText: data.aboutText,
    emotional: data.emotional
  };
};

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState(null);

  const generateCreativeContent = useMemo(() => {
    return () => {
      const businessContent = getBusinessTypeContent(formData.businessType || '', formData.businessAdvantages || '');
      
      // Filter selected elements
      const selectedElements = formData.selectedElements || [];
      let creativeElements = [];

      if (selectedElements.includes('serviceCards')) {
        creativeElements.push({
          type: 'serviceCards',
          content: businessContent.features.slice(0, 4).map((feature, index) => ({
            title: feature,
            desc: `פתרון מקצועי ומותאם אישית בתחום ${feature.toLowerCase()}`,
            icon: ['⭐', '🏆', '👍', '❤️'][index]
          }))
        });
      }

      if (selectedElements.includes('timeline')) {
        creativeElements.push({
          type: 'timeline',
          content: [
            { step: '01', title: 'ייעוץ ראשוני', desc: 'נפגשים להכרת הצרכים והמטרות שלכם', color: '#3b82f6' },
            { step: '02', title: 'תכנון והצעת מחיר', desc: 'מכינים תכנית עבודה מפורטת ושקופה', color: '#8b5cf6' },
            { step: '03', title: 'ביצוע העבודה', desc: 'מבצעים את העבודה במקצועיות ובדיוק', color: '#06b6d4' },
            { step: '04', title: 'מסירה ומעקב', desc: 'מוסרים את העבודה ונותנים ליווי מתמשך', color: '#10b981' }
          ]
        });
      }

      if (selectedElements.includes('pricing')) {
        creativeElements.push({
          type: 'pricing',
          content: [
            {
              name: 'חבילה בסיסית',
              price: '₪999',
              period: 'חודש',
              features: businessContent.features.slice(0, 3),
              buttonText: 'התחל עכשיו',
              highlighted: false
            },
            {
              name: 'חבילה מתקדמת',
              price: '₪1,999',
              period: 'חודש',
              features: businessContent.features,
              buttonText: 'הכי פופולרי',
              highlighted: true
            },
            {
              name: 'חבילה מקצועית',
              price: '₪2,999',
              period: 'חודש',
              features: [...businessContent.features, 'תמיכה 24/7', 'יעוץ אישי'],
              buttonText: 'צור קשר',
              highlighted: false
            }
          ]
        });
      }

      // Add emotional section as floating element if not already selected
      if (!selectedElements.includes('emotional')) {
        creativeElements.push({
          type: 'emotional',
          content: businessContent.emotional
        });
      }

      return {
        badge: `${formData.businessName || 'העסק שלנו'} - המקום הנכון עבורכם`,
        headline: `${formData.businessName || 'העסק שלנו'}`,
        subheadline: `${formData.targetAudience ? `פתרונות מקצועיים עבור ${formData.targetAudience}` : 'הפתרון המושלם לכל הצרכים שלכם'}`,
        cta: 'צור קשר עכשיו',
        stats: {
          'לקוחות מרוצים': '500+',
          'שנות ניסיון': '10+',
          'פרויקטים': '1,000+',
          'שביעות רצון': '98%'
        },
        featuresTitle: 'למה לבחור בנו?',
        features: businessContent.features,
        aboutTitle: `על ${formData.businessName || 'העסק שלנו'}`,
        aboutText: `${businessContent.aboutText} אנחנו גאים בהיסטוריה שלנו, בצוות המקצועי שלנו ובגישה החדשנית שלנו לכל פרויקט. המטרה שלנו היא לא רק לספק שירות, אלא ליצור שותפות אמיתית שתביא לכם תוצאות מעל לציפיות.`,
        testimonials: businessContent.testimonials,
        faq: businessContent.faq,
        contactTitle: 'בואו נתחיל לעבוד יחד',
        creativeElements
      };
    };
  }, [formData]);

  return {
    generateCreativeContent,
    setGeneratedContent,
    generatedContent
  };
};

