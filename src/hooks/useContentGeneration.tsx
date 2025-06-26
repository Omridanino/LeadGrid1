
import { useMemo, useState } from 'react';

const transformUserText = (text: string, context: string = '') => {
  if (!text || text.trim() === '') return '';
  
  // Function to rephrase and enhance user input
  const variations = {
    // Service transformations
    'טכנאי מזגנים': 'מומחה למערכות מיזוג אוויר ותחזוקה מקצועית',
    'פיתוח אתרים': 'פתרונות דיגיטליים מתקדמים ופיתוח אתרי אינטרנט',
    'ייעוץ עסקי': 'ליווי אסטרטגי וייעוץ עסקי מקצועי',
    'עיצוב גרפי': 'עיצוב ויזואלי יצירתי ופתרונות גרפיים',
    'רפואת שיניים': 'טיפולי שיניים מתקדמים ורפואת פה מקצועית',
    'עורך דין': 'ייצוג משפטי מקצועי וייעוץ חוקי מומחה',
    'רופא': 'שירותי רפואה מקצועיים וטיפול רפואי איכותי',
    'מורה פרטי': 'חינוך אישי מותאם וליווי לימודי מקצועי',
    'צלם': 'צילום מקצועי ושימור רגעים מיוחדים',
    'בעל מסעדה': 'חוויה קולינרית מושלמת ואירוח ברמה גבוהה'
  };

  // Try to find matching transformation
  for (const [key, value] of Object.entries(variations)) {
    if (text.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }

  // Generic enhancement patterns
  const enhancementPatterns = [
    { pattern: /שירות/g, replacement: 'שירות מקצועי ואמין' },
    { pattern: /איכות/g, replacement: 'איכות ברמה הגבוהה ביותר' },
    { pattern: /ניסיון/g, replacement: 'ניסיון מוכח ומומחיות רבת שנים' },
    { pattern: /מהיר/g, replacement: 'ביצוע מהיר ויעיל' },
    { pattern: /זול|מחיר נמוך/g, replacement: 'מחירים הוגנים ותחרותיים' }
  ];

  let enhanced = text;
  enhancementPatterns.forEach(({ pattern, replacement }) => {
    enhanced = enhanced.replace(pattern, replacement);
  });

  return enhanced;
};

const generateServicesFromUserInput = (services: string, businessType: string) => {
  if (!services || services.trim() === '') {
    return ['שירות מקצועי ואמין', 'ניسיון רב בתחום', 'גישה אישית לכל לקוח'];
  }

  const servicesList = services.split('\n').filter(s => s.trim());
  if (servicesList.length === 0) {
    return ['שירות מקצועי ואמין', 'ניסיון רב בתחום', 'גישה אישית לכל לקוח'];
  }

  return servicesList.map(service => {
    const cleanService = service.replace(/^\d+\.\s*/, '').trim();
    return transformUserText(cleanService, businessType);
  }).filter(Boolean);
};

const generateAdvantagesFromUserInput = (advantages: string, businessType: string) => {
  if (!advantages || advantages.trim() === '') {
    return ['מקצועיות ברמה גבוהה', 'שירות אישי ומותאם', 'תוצאות מוכחות ואמינות'];
  }

  const advantagesList = advantages.split('\n').filter(adv => adv.trim());
  if (advantagesList.length === 0) {
    return ['מקצועיות ברמה גבוהה', 'שירות אישי ומותאם', 'תוצאות מוכחות ואמינות'];
  }

  return advantagesList.map(advantage => {
    const cleanAdvantage = advantage.replace(/^\d+\.\s*/, '').trim();
    return transformUserText(cleanAdvantage, businessType);
  }).filter(Boolean);
};

const getBusinessTypeContent = (businessType: string, businessAdvantages: string, businessServices: string) => {
  const services = generateServicesFromUserInput(businessServices, businessType);
  const advantages = generateAdvantagesFromUserInput(businessAdvantages, businessType);
  
  // Generate profession-specific content
  const professionData = {
    // Restaurant/Food
    'מסעדה': {
      testimonials: [
        { name: 'רחל כהן', role: 'לקוחה קבועה', content: 'הגעתי לכאן עם המשפחה בשישי בערב והחוויה הייתה מדהימה! הטעמים, השירות והאווירה - הכל מושלם. חזרנו כבר שלוש פעמים השבוע.', rating: 5, image: '👩' },
        { name: 'דוד לוי', role: 'תושב השכונה', content: 'כבר שנתיים שאני אוכל כאן בקביעות. האיכות תמיד עקבית, המנות תמיד טריות והצוות מכיר אותי באופן אישי. זה הבית השני שלי.', rating: 5, image: '👨' },
        { name: 'מירי שמש', role: 'אם משפחה', content: 'חגגנו כאן את יום ההולדת של בתי. הצוות הכין הפתעה מיוחדת, הילדים נהנו והאוכל היה פנטסטי. תודה על החוויה הבלתי נשכחת!', rating: 5, image: '👩‍🦱' }
      ],
      faq: [
        { question: 'מה המומחיות המיוחדת שלכם?', answer: `אנחנו מתמחים ב${services[0]} עם דגש על איכות ושירות אישי` },
        { question: 'איך אתם מבטיחים איכות עקבית?', answer: `עם ${advantages[0]}, אנחנו שומרים על סטנדרטים גבוהים בכל ארוחה` },
        { question: 'מה הופך אתכם למיוחדים?', answer: `השילוב של ${advantages[1]} ו${advantages[2] || 'מחויבות לשביעות רצון הלקוח'}` }
      ],
      aboutText: `אנחנו מביאים לכם ${services[0]} בשילוב ${advantages[0]}. המטרה שלנו היא ליצור חוויה קולינרית בלתי נשכחת לכל לקוח.`,
      emotional: {
        title: 'הטעם של בית, החוויה של חיים',
        content: `עם ${advantages[0]} ו${services[0]}, אנחנו יוצרים לא רק ארוחה - אלא זיכרונות לכל החיים.`
      }
    },
    
    // Coffee Shop  
    'בית קפה': {
      testimonials: [
        { name: 'יעל גולן', role: 'פרילנסרית', content: 'זה הבית הקפה הקבוע שלי! כל בוקר אני מגיעה לכאן עם המחשב הנייד. הצוות כבר יודע בדיוק איך אני אוהבת את הקפה והם תמיד שומרים לי את השולחן הקטן ליד החלון.', rating: 5, image: '👩‍💻' },
        { name: 'תום ברק', role: 'סטודנט', content: 'כתבתי כאן את כל העבודות של התואר. האווירה מושלמת ללמידה, הקפה מצוין והמחירים סבירים לסטודנט. הבעלים אפילו נתן לי הנחה בתקופת הבחינות!', rating: 5, image: '👨‍🎓' },
        { name: 'ליאת מזור', role: 'אמא עובדת', content: 'זה המקום שלי להפוגה בין העבודה לבית. כל פעם שאני מגיעה הצוות מקבל אותי בחיוך, זוכר מה אני אוהבת ונותן לי את הרגיעה שאני צריכה.', rating: 5, image: '👩‍💼' }
      ],
      faq: [
        { question: 'מה מיוחד בשירות שלכם?', answer: `אנחנו מציעים ${services[0]} עם ${advantages[0]} לחוויה אישית ומותאמת` },
        { question: 'איך אתם יוצרים אווירה מיוחדת?', answer: `בזכות ${advantages[1]}, אנחנו יוצרים מקום שמרגיש כמו בית שני` },
        { question: 'מה הופך אתכם למועדפים?', answer: `השילוב של ${services[0]} ו${advantages[2] || 'התחשבות בצרכי הלקוח'}` }
      ],
      aboutText: `אנחנו מביאים לכם ${services[0]} עם ${advantages[0]}. כל כוס קפה אצלנו היא הזדמנות ליצור קשר אנושי אמיתי.`,
      emotional: {
        title: 'הבית השני שלכם בשכונה',
        content: `עם ${advantages[0]} ו${services[0]}, אנחנו בונים קהילה של אנשים שאוהבים להרגיש בבית.`
      }
    },

    // Technology/Software
    'פיתוח תוכנה': {
      testimonials: [
        { name: 'אבי ישראלי', role: 'מנכ"ל סטארט-אפ', content: 'הגעתי אליהם עם רעיון מעורפל לאפליקציה. הם לא רק פיתחו לי מוצר מדהים, אלא גם ייעצו לי איך להציג אותו למשקיעים. הפרויקט הושק בזמן ובתקציב.', rating: 5, image: '👨‍💼' },
        { name: 'דנה רוזן', role: 'מנהלת IT', content: 'הם בנו לנו מערכת ניהול פנימית שחסכה לנו שעות עבודה כל יום. מה שמרשים אותי זה השירות המתמשך - גם שנה אחרי המסירה הם עדיין זמינים לכל שאלה.', rating: 5, image: '👩‍💻' },
        { name: 'רון מלכה', role: 'יזם דיגיטלי', content: 'עבדתי עם הרבה חברות פיתוח, אבל כאן מצאתי שותפים אמיתיים. הם הבינו את החזון שלי, הציעו פתרונות יצירתיים ומסרו פרויקט שחרג מכל הציפיות.', rating: 5, image: '👨‍🔬' }
      ],
      faq: [
        { question: 'איך תהליך העבודה נראה?', answer: `אנחנו מתחילים ב${services[0]} ומתקדמים עם ${advantages[0]} לאורך כל הפרויקט` },
        { question: 'מה קורה אחרי המסירה?', answer: `בזכות ${advantages[1]}, אנחנו נותנים תמיכה מלאה ומעקב מתמשך` },
        { question: 'איך אתם מבטיחים איכות?', answer: `עם ${advantages[2] || 'בדיקות מקיפות'} ו${services[0]}, אנחנו מבטיחים תוצאות מעולות` }
      ],
      aboutText: `אנחנו מציעים ${services[0]} עם ${advantages[0]}. אנחנו לא רק כותבים קוד - אנחנו בונים פתרונות שמקדמים עסקים.`,
      emotional: {
        title: 'השותפים הטכנולוגיים שלכם',
        content: `עם ${advantages[0]} ו${services[0]}, אנחנו השותפים שלכם בדרך להצלחה דיגיטלית.`
      }
    },

    // Default for other professions
    'default': {
      testimonials: [
        { name: 'מיכל ברק', role: 'לקוחה מרוצה', content: `הגעתי אליהם עם אתגר מסובך. הם לא רק מצאו פתרון מעולה אלא גם הסבירו לי את כל התהליך. ה${services[0]} שלהם באמת יוצא דופן.`, rating: 5, image: '👩' },
        { name: 'יוסי כהן', role: 'לקוח קבוע', content: `אני עובד איתם כבר שלוש שנים וכל פעם הם מפתיעים אותי. ה${advantages[0]} שלהם מתבטא בכל פרט קטן, והם תמיד זמינים כשאני צריך.`, rating: 5, image: '👨' },
        { name: 'שרה לוי', role: 'לקוחה מרוצה', content: `מה שהכי מרשים אותי זה השקיפות והכנות שלהם. הם תמיד אומרים לי בדיוק מה הם יכולים לעשות ועומדים בהבטחות. זה ${services[0]} באמת אמין.`, rating: 5, image: '👩‍🦱' }
      ],
      faq: [
        { question: 'מה מבדיל אתכם?', answer: `אנחנו משקיעים ב${advantages[0]} ומתמחים ב${services[0]} מותאם אישית` },
        { question: 'איך נבנה האמון?', answer: `בזכות ${advantages[1]}, אנחנו מאמינים בשקיפות מלאה ותקשורת ברורה` },
        { question: 'מה אחרי השירות?', answer: `עם ${advantages[2] || 'מחויבות לשביעות רצון'}, אנחנו נשארים זמינים לכל צורך` }
      ],
      aboutText: `אנחנו מתמחים ב${services[0]} עם ${advantages[0]}. אנחנו מאמינים שכל לקוח ייחודי ומגיע לשירות המותאם בדיוק לצרכים שלו.`,
      emotional: {
        title: 'השותפים שלכם להצלחה',
        content: `עם ${advantages[0]} ו${services[0]}, אנחנו השותפים שלכם בדרך להגשמת המטרות.`
      }
    }
  };

  // Find matching profession data
  const key = Object.keys(professionData).find(key => 
    businessType.toLowerCase().includes(key.toLowerCase())
  ) || 'default';
  
  const data = professionData[key];
  
  return {
    features: services.length > 0 ? services : advantages,
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
      const businessContent = getBusinessTypeContent(
        formData.businessType || '', 
        formData.businessAdvantages || '',
        formData.businessServices || ''
      );
      
      // Filter selected elements
      const selectedElements = formData.selectedElements || [];
      let creativeElements = [];

      if (selectedElements.includes('serviceCards')) {
        const services = generateServicesFromUserInput(formData.businessServices || '', formData.businessType || '');
        creativeElements.push({
          type: 'serviceCards',
          content: services.slice(0, 4).map((service, index) => ({
            title: service,
            desc: `פתרון מקצועי ומותאם אישית`,
            icon: ['⭐', '🏆', '👍', '❤️'][index] || '⭐'
          }))
        });
      }

      if (selectedElements.includes('timeline')) {
        creativeElements.push({
          type: 'timeline',
          content: [
            { step: '01', title: 'ייעוץ ראשוני', desc: 'נפגשים להכרת הצרכים והמטרות שלכם', color: '#3b82f6' },
            { step: '02', title: 'תכנון מפורט', desc: 'מכינים תכנית עבודה מפורטת ושקופה', color: '#8b5cf6' },
            { step: '03', title: 'ביצוע מקצועי', desc: 'מבצעים את העבודה במקצועיות ובדיוק', color: '#06b6d4' },
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
              name: 'חבילה מקצועית',
              price: '₪1,999',
              period: 'חודש',
              features: businessContent.features,
              buttonText: 'הכי פופולרי',
              highlighted: true
            },
            {
              name: 'חבילה מתקדמת',
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
