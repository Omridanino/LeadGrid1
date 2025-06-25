
import { useMemo } from 'react';

const getBusinessTypeContent = (businessType: string, businessAdvantages: string) => {
  const advantages = businessAdvantages ? businessAdvantages.split('\n').filter(adv => adv.trim()) : [];
  
  // Generate profession-specific content
  const professionData = {
    // Restaurant/Food
    'מסעדה': {
      features: ['מנות טריות יומיות', 'שירות מהיר ומקצועי', 'אווירה נעימה ומזמינה', 'מחירים הוגנים'],
      testimonials: [
        { name: 'רחל כהן', role: 'לקוחה קבועה', content: 'האוכל כאן פשוט מדהים! טעם ביתי אמיתי', rating: 5, image: '👩' },
        { name: 'דוד לוי', role: 'משפחה', content: 'המקום המושלם לארוחת משפחה. שירות מעולה!', rating: 5, image: '👨' },
        { name: 'מירי שמש', role: 'תושבת השכונה', content: 'הולכת לכאן כל שבוע. איכות מעולה ומחירים נוחים', rating: 5, image: '👩‍🦱' }
      ],
      faq: [
        { question: 'האם יש אפשרות להזמין מראש?', answer: 'כן, אפשר להזמין מראש טלפונית או דרך האתר' },
        { question: 'האם יש מנות טבעוניות?', answer: 'כן, יש לנו מגוון רחב של מנות טבעוניות וצמחוניות' },
        { question: 'מה שעות הפעילות?', answer: 'אנחנו פתוחים ימים א-ה 11:00-23:00, ו-ש 18:00-24:00' }
      ],
      aboutText: 'המסעדה שלנו מתמחה בהגשת אוכל טרי ואיכותי עם טעם ביתי אמיתי. אנחנו גאים בשירות המקצועי והאווירה הנעימה שאנחנו יוצרים לכל לקוח.',
      emotional: {
        title: 'טעם של בית, חוויה של חיים',
        content: 'כל ארוחה אצלנו היא חוויה קולינרית שלמה. מהרגע שאתם נכנסים אתם מרגישים את החמימות והטעם הביתי האמיתי שמחכה לכם.'
      }
    },
    
    // Coffee Shop  
    'בית קפה': {
      features: ['קפה טרי נקלה במקום', 'אווירה נעימה לעבודה', 'מבחר עוגות וכריכים', 'WiFi מהיר וחינמי'],
      testimonials: [
        { name: 'יעל גולן', role: 'פרילנסרית', content: 'המקום הכי נעים לעבוד בו! קפה מעולה ואווירה שקטה', rating: 5, image: '👩‍💻' },
        { name: 'תום ברק', role: 'סטודנט', content: 'הקפה הכי טוב באזור! אווירה נעימה ומחירים סבירים', rating: 5, image: '👨‍🎓' },
        { name: 'ליאת מזור', role: 'אמא עובדת', content: 'המקום שלי להפוגה. קפה מצוין ושירות חם', rating: 5, image: '👩‍💼' }
      ],
      faq: [
        { question: 'האם יש WiFi חינמי?', answer: 'כן, יש WiFi מהיר וחינמי לכל הלקוחות' },
        { question: 'האם אפשר להביא מחשב נייד?', answer: 'בהחלט! יש שקעי חשמל ושולחנות נוחים לעבודה' },
        { question: 'מה שעות הפתיחה?', answer: 'אנחנו פתוחים א-ו 07:00-22:00, ש 08:00-14:00' }
      ],
      aboutText: 'בית הקפה שלנו הוא מקום מפגש חם ונעים שבו תוכלו ליהנות מקפה איכותי ומאווירה שקטה ונעימה. מושלם לעבודה, לפגישות או סתם להנאה.',
      emotional: {
        title: 'הבית השני שלכם',
        content: 'כל לקוח אצלנו הוא חבר. אנחנו יוצרים מקום שבו תרגישו בבית, עם קפה שיעיר אתכם לחיים ואווירה שתגרום לכם לחזור.'
      }
    },

    // Technology/Software
    'פיתוח תוכנה': {
      features: ['פתרונות טכנולוגיים מתקדמים', 'צוות מומחים מנוסים', 'תמיכה טכנית 24/7', 'פיתוח מותאם אישית'],
      testimonials: [
        { name: 'אבי ישראלי', role: 'מנכ"ל סטארט-אפ', content: 'הפתרון שהם פיתחו לנו חסך לנו חודשים של עבודה', rating: 5, image: '👨‍💼' },
        { name: 'דנה רוזן', role: 'מנהלת IT', content: 'מקצועיות גבוהה ושירות ברמה של חברות בינלאומיות', rating: 5, image: '👩‍💻' },
        { name: 'רון מלכה', role: 'יזם טכנולוגי', content: 'הצוות הכי מוכשר שעבדתי איתו. תוצאות מעל לציפיות', rating: 5, image: '👨‍🔬' }
      ],
      faq: [
        { question: 'כמה זמן לוקח פיתוח פרויקט?', answer: 'תלוי במורכבות הפרויקט, בדרך כלל בין 2-6 חודשים' },
        { question: 'האם יש תמיכה אחרי השקה?', answer: 'כן, אנחנו נותנים תמיכה מלאה לשנה ותחזוקה שוטפת' },
        { question: 'איך תהליך הפיתוח נראה?', answer: 'אנחנו עובדים בשיטת Agile עם עדכונים שבועיים ושקיפות מלאה' }
      ],
      aboutText: 'אנחנו צוות של מפתחים מוכשרים שמתמחים בפתרונות טכנולוגיים מתקדמים. אנחנו לוקחים את החזון שלכם והופכים אותו למציאות דיגיטלית.',
      emotional: {
        title: 'הטכנולוגיה שמניעה את העתיד',
        content: 'כל פרויקט אצלנו הוא הזדמנות לחדש ולהוביל. אנחנו לא רק כותבים קוד - אנחנו בונים את העתיד הדיגיטלי שלכם.'
      }
    },

    // Default for other professions
    'default': {
      features: ['שירות מקצועי ואמין', 'ניסיון רב בתחום', 'גישה אישית לכל לקוח', 'תוצאות מוכחות'],
      testimonials: [
        { name: 'מיכל ברק', role: 'לקוחה מרוצה', content: 'שירות מקצועי ואמין! בהחלט ממליצה', rating: 5, image: '👩' },
        { name: 'יוסי כהן', role: 'לקוח קבוע', content: 'עבודה מקצועית ונתינת שירות ברמה גבוהה', rating: 5, image: '👨' },
        { name: 'שרה לוי', role: 'לקוחה', content: 'תמיד זמינים ונותנים פתרונות יצירתיים', rating: 5, image: '👩‍🦱' }
      ],
      faq: [
        { question: 'איך אפשר ליצור קשר?', answer: 'אפשר ליצור קשר טלפונית, במייל או דרך הטופס בכותרת הדף' },
        { question: 'מה זמני התגובה?', answer: 'אנחנו חוזרים תוך 24 שעות על כל פניה' },
        { question: 'האם יש אחריות על השירות?', answer: 'כן, אנחנו נותנים אחריות מלאה על כל השירותים שלנו' }
      ],
      aboutText: 'אנחנו מתמחים במתן שירות מקצועי ואמין עם גישה אישית לכל לקוח. הניסיון הרב שלנו מאפשר לנו לתת פתרונות מותאמים ויעילים.',
      emotional: {
        title: 'השותף שלכם להצלחה',
        content: 'אנחנו מאמינים בבניית קשרים ארוכי טווח עם הלקוחות שלנו. ההצלחה שלכם היא ההצלחה שלנו.'
      }
    }
  };

  // Find matching profession data
  const key = Object.keys(professionData).find(key => 
    businessType.toLowerCase().includes(key.toLowerCase())
  ) || 'default';
  
  const data = professionData[key];
  
  // Use business advantages if provided, otherwise use default features
  const features = advantages.length >= 3 ? 
    advantages.map(adv => adv.replace(/^\d+\.\s*/, '').trim()) : 
    data.features;

  return {
    features,
    testimonials: data.testimonials,
    faq: data.faq,
    aboutText: data.aboutText,
    emotional: data.emotional
  };
};

export const useContentGeneration = (formData: any) => {
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
            desc: `${feature} עם התמחות מקצועית וניסיון מוכח`,
            icon: ['star-line', 'award-line', 'thumb-up-line', 'heart-line'][index]
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

      return {
        badge: `${formData.businessName || 'העסק שלנו'} - המקום הנכון עבורכם`,
        headline: `${formData.businessName || 'העסק שלנו'}`,
        subheadline: `${formData.targetAudience ? `שירותים מקצועיים עבור ${formData.targetAudience}` : 'הפתרון המושלם לכל הצרכים שלכם'}`,
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
        aboutText: businessContent.aboutText,
        emotional: businessContent.emotional,
        testimonials: businessContent.testimonials,
        faq: businessContent.faq,
        contactTitle: 'בואו נתחיל לעבוד יחד',
        creativeElements
      };
    };
  }, [formData]);

  return {
    generateCreativeContent: generateCreativeContent(),
    setGeneratedContent: () => {},
    generatedContent: null
  };
};
