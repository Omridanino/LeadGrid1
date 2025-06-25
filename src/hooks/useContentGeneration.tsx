
import { useState } from 'react';

interface FormData {
  businessName: string;
  businessType: string;
  targetAudience: string;
  mainGoal: string;
  keyFeatures: string;
  brandColors: string;
  contactInfo: string;
}

export const useContentGeneration = (formData: FormData) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateCreativeContent = () => {
    // Parse brand colors from user input
    const colorMapping: { [key: string]: string } = {
      'כחול': '#2563eb', 'חום': '#92400e', 'אדום': '#dc2626', 'ירוק': '#16a34a',
      'סגול': '#7c3aed', 'כתום': '#ea580c', 'ורוד': '#ec4899', 'צהוב': '#eab308',
      'שחור': '#1f2937', 'לבן': '#f8fafc', 'כסף': '#64748b', 'זהב': '#f59e0b'
    };

    let primaryColor = '#3b82f6';
    let secondaryColor = '#8b5cf6';

    // Extract colors from user input
    const colorText = formData.brandColors.toLowerCase();
    Object.keys(colorMapping).forEach(color => {
      if (colorText.includes(color)) {
        if (!primaryColor || primaryColor === '#3b82f6') {
          primaryColor = colorMapping[color];
        } else if (!secondaryColor || secondaryColor === '#8b5cf6') {
          secondaryColor = colorMapping[color];
        }
      }
    });

    // יצירת סגנונות עיצוב מגוונים
    const designStyles = [
      'מודרני ומינימליסטי',
      'יוקרתי ואלגנטי', 
      'צעיר ואנרגטי',
      'מקצועי ואמין',
      'יצירתי וחדשני',
      'חם ומזמין',
      'טכנולוגי ועתידני'
    ];

    const randomStyle = designStyles[Math.floor(Math.random() * designStyles.length)];

    // Creative features generation based on business type with MORE VARIETY
    const creativeFeatures = {
      'restaurant': [
        '🍽️ תפריט משתנה עונתי מבית השף',
        '🌟 אווירה אינטימית ויוקרתית', 
        '🥂 בר קוקטיילים מובחר',
        '👨‍🍳 שפים עם ניסיון בינלאומי',
        '🍷 מבחר יינות נדירים',
        '🎵 מוזיקה חיה בסופי שבוע'
      ],
      'cafe': [
        '☕ קפה טרי קלוי במקום',
        '🥐 מאפים טריים בכל יום',
        '📚 פינת קריאה שקטה',
        '💻 Wi-Fi מהיר לעבודה',
        '🌱 חלופות טבעוניות מגוונות',
        '🎨 תערוכות אמנות מתחלפות'
      ],
      'tech': [
        '🚀 בינה מלאכותית מתקדמת',
        '🔒 אבטחת סייבר ברמה צבאית',
        '⚡ ביצועים מהירים פי 10',
        '🌐 תמיכה בענן היברידי',
        '📱 ממשק נוח בכל המכשירים',
        '🔧 עדכונים אוטומטיים רציפים'
      ],
      'consulting': [
        '🎯 אסטרטגיות מותאמות אישית',
        '📊 ניתוח נתונים מתקדם',
        '🏆 שיפור ROI בממוצע 150%',
        '👥 צוות יועצים בעלי ניסיון',
        '⏰ זמינות 24/7 לליווי',
        '📈 מעקב וביקורת שוטפים'
      ],
      'retail': [
        '🛍️ מוצרים ייחודיים ומובחרים',
        '🚚 משלוח מהיר תוך 24 שעות',
        '💳 תשלומים גמישים ובטוחים',
        '↩️ החזרות קלות עד 30 יום',
        '🎁 אריזת מתנה מיוחדת',
        '⭐ שירות לקוחות מעולה'
      ],
      'services': [
        '🔧 שירות מקצועי ומהיר',
        '🏅 וותק של מעל 15 שנה',
        '💯 אחריות מלאה על השירות',
        '📞 מוקד שירות זמין 24/7',
        '🎖️ טכנאים מוסמכים ומנוסים',
        '💰 מחירים הוגנים ושקופים'
      ],
      'healthcare': [
        '🏥 ציוד רפואי מתקדם ביותר',
        '👩‍⚕️ צוות רפואי מומחה ומנוסה',
        '⏰ תורים גמישים בכל השעות',
        '🩺 בדיקות מקיפות ומדויקות',
        '💊 טיפולים חדשניים ומותאמים',
        '🤝 יחס אישי וחם לכל מטופל'
      ],
      'education': [
        '🎓 מתודולוגיית הוראה ייחודית',
        '👨‍🏫 מורים מובילים בתחומם',
        '📚 חומרי לימוד עדכניים',
        '💻 כלים דיגיטליים מתקדמים',
        '🏆 הישגים מוכחים של תלמידים',
        '🎯 התאמה אישית לכל תלמיד'
      ],
      'fitness': [
        '💪 מתקנים חדישים ומתקדמים',
        '🏋️‍♂️ מאמנים אישיים מוסמכים',
        '📋 תוכניות אימון מותאמות',
        '🍎 ייעוץ תזונה מקצועי',
        '👥 קבוצות אימון מגוונות',
        '📊 מעקב התקדמות דיגיטלי'
      ],
      'beauty': [
        '✨ טיפולים חדשניים ומפנקים',
        '🌿 מוצרים טבעיים ואיכותיים',
        '👩‍⚕️ קוסמטיקאיות מוסמכות',
        '🛁 סביבה מרגיעה ונעימה',
        '💆‍♀️ טיפולי פנים מתקדמים',
        '💅 שירותי יופי מקיפים'
      ],
      'default': [
        '🎯 פתרונות מותאמים בדיוק לצרכיכם',
        '⚡ שירות מהיר ויעיל',
        '💎 איכות פרימיום ללא פשרות',
        '🤝 יחס אישי ומקצועי',
        '🏆 ניסיון מוכח ורב שנים',
        '💰 מחירים הוגנים ותחרותיים'
      ]
    };

    // יצירת כותרות יצירתיות יותר
    const creativeHeadlines = {
      'restaurant': [
        `חוויה קולינרית שלא תשכחו ב${formData.businessName}`,
        `המסעדה החדשה שכולם מדברים עליها`,
        `טעמים מהעולם במקום אחד`,
        `גסטרונומיה ברמה עולמית במרכז העיר`
      ],
      'cafe': [
        `הקפה הכי טוב בעיר ב${formData.businessName}`,
        `המקום המושלם לעבודה ונוחות`,
        `קפה, תרבות ואווירה חמה`,
        `הפסקת הקפה שמגיעה לכם`
      ],
      'tech': [
        `המהפכה הטכנולוגית הבאה כאן`,
        `פתרונות חכמים לעולם דיגיטלי`,
        `החדשנות שתשנה לכם את החיים`,
        `הטכנולוgia של המחר - כבר היום`
      ],
      'default': [
        `הפתרון שחיפשתם כל הזמן`,
        `שירות ברמה החדשה`,
        `המקום שכולם רוצים להגיע אליו`,
        `החוויה שתשנה לכם הכל`
      ]
    };

    const headlineOptions = creativeHeadlines[formData.businessType as keyof typeof creativeHeadlines] || creativeHeadlines.default;
    const selectedHeadline = headlineOptions[Math.floor(Math.random() * headlineOptions.length)];

    const businessFeatures = creativeFeatures[formData.businessType as keyof typeof creativeFeatures] || creativeFeatures.default;
    // בחירה אקראית של 4-6 תכונות
    const shuffledFeatures = [...businessFeatures].sort(() => 0.5 - Math.random());
    const selectedFeatures = shuffledFeatures.slice(0, Math.floor(Math.random() * 2) + 4);

    // Creative about text generation with more personality
    const creativeBusiness = {
      'restaurant': `${formData.businessName} היא לא רק מסעדה - היא חוויה קולינרית שמשלבת מסורת עם חדשנות. הצוות שלנו מגיש לכם כל יום מנות שמוכנות באהבה ובתשומת לב לפרטים הקטנים. כל מנה מספרת סיפור, וכל ביקור הופך לזיכרון בלתי נשכח.`,
      
      'cafe': `${formData.businessName} הוא המקום בו הקפה פוגש את התרבות. כאן תמצאו לא רק את הקפה הטוב ביותר בעיר, אלא גם קהילה חמה של אנשים שאוהבים את החיים הטובים. בין אם אתם באים לעבוד, להיפגש עם חברים או פשוט ליהנות מרגע של שקט - אנחנו כאן בשבילכם.`,
      
      'tech': `${formData.businessName} נמצאת בחזית מהפכת הטכנולוגיה. אנחנו לא רק פותחים פתרונות - אנחנו יוצרים את העתיד. הטכנולוגיות שלנו משנות את הדרך שבה אנשים עובדים, חיים ומתחברים. כל קו קוד שאנחנו כותבים הוא צעד נוסף לעבר עולם טוב יותר.`,
      
      'consulting': `${formData.businessName} מובילה ארגונים לשיאים חדשים של הצלחה. אנחנו לא רק יועצים - אנחנו שותפים לדרך. עם ניסיון של שנים רבות ושיטות עבודה מתקדמות, אנחנו עוזרים לעסקים להגשים את הפוטנציאל המלא שלהם ולהשיג תוצאות יוצאות דופן.`,
      
      'default': `${formData.businessName} נוסדה מתוך חזון ברור - להעניק לכם שירות ברמה הגבוהה ביותר. אנחנו מאמינים שכל לקוח ראוי ליחס מיוחד, ולכן אנחנו משקיעים את כל המאמץ שלנו כדי להבין את הצרכים שלכם ולתת לכם בדיוק מה שאתם מחפשים. הניסיון שלנו הוא הכוח שלכם.`
    };

    const aboutText = creativeBusiness[formData.businessType as keyof typeof creativeBusiness] || creativeBusiness.default;

    return {
      headline: selectedHeadline,
      subheadline: `הפתרון ה${randomStyle} עבור ${formData.targetAudience} שמחפשים ${formData.mainGoal.includes('מכירות') ? 'את המוצר המושלם' : formData.mainGoal.includes('לידים') ? 'שירות מקצועי' : 'חוויה מיוחדת'}`,
      features: selectedFeatures,
      cta: formData.mainGoal.includes('מכירות') ? 'רכשו עכשיו במחיר מיוחד' : 
           formData.mainGoal.includes('לידים') ? 'קבלו הצעת מחיר חינם' :
           formData.mainGoal.includes('תורים') ? 'קבעו תור עכשיו' : 'הצטרפו אלינו היום',
      aboutText,
      colors: { primary: primaryColor, secondary: secondaryColor },
      designStyle: randomStyle
    };
  };

  return { generatedContent, setGeneratedContent, generateCreativeContent };
};
