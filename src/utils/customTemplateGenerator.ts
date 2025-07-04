import { TemplateData } from '@/types/template';

interface QuestionnaireData {
  businessName: string;
  businessType: string;
  businessDescription: string;
  targetAudience: string;
  mainProblem: string;
  uniqueValue: string;
  mainGoal: string;
  ctaText: string;
  keyFeatures: string[];
  designStyle: string;
  colorPreference: string;
  mood: string;
}

const getColorScheme = (colorPreference: string) => {
  const schemes = {
    blue: {
      primary: '#2563eb',
      secondary: '#1d4ed8',
      accent: '#3b82f6',
      background: '#f8fafc',
      text: '#1e293b'
    },
    green: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#10b981',
      background: '#f0fdf4',
      text: '#1e293b'
    },
    purple: {
      primary: '#7c3aed',
      secondary: '#6d28d9',
      accent: '#8b5cf6',
      background: '#faf5ff',
      text: '#1e293b'
    },
    orange: {
      primary: '#ea580c',
      secondary: '#dc2626',
      accent: '#f97316',
      background: '#fff7ed',
      text: '#1e293b'
    },
    dark: {
      primary: '#1e293b',
      secondary: '#0f172a',
      accent: '#334155',
      background: '#f8fafc',
      text: '#0f172a'
    }
  };
  
  return schemes[colorPreference] || schemes.blue;
};

const generateFeatures = (keyFeatures: string[], businessType: string) => {
  const icons = ['⭐', '🎯', '💎', '🚀', '✨', '🔥', '💪', '🎨'];
  
  return {
    title: 'למה לבחור בנו?',
    subtitle: 'הסיבות שאתם תאהבו לעבוד איתנו',
    items: keyFeatures.slice(0, 6).map((feature, index) => ({
      icon: icons[index] || '⭐',
      title: feature.length > 30 ? feature.substring(0, 30) + '...' : feature,
      description: feature
    }))
  };
};

const generateTestimonials = (businessType: string, businessName: string) => {
  const testimonialTemplates = {
    'בית קפה': [
      { name: 'רונן כהן', role: 'לקוח קבוע', content: `המקום הכי נעים לעבוד! הקפה ב${businessName} פשוט מושלם והאווירה מדהימה.`, rating: 5 },
      { name: 'מיכל לוי', role: 'פרילנסרית', content: 'סוף סוף מצאתי מקום שקט ונוח לעבודה עם קפה באיכות גבוהה. ממליצה בחום!', rating: 5 }
    ],
    'ברברשופ': [
      { name: 'דוד יוסף', role: 'לקוח קבוע', content: `תספורת מושלמת! הברבר ב${businessName} באמת מקצוען והיחס מעולה.`, rating: 5 },
      { name: 'אבי גרין', role: 'לקוח מרוצה', content: 'האווירה הכי טובה בעיר! תמיד יוצא משם מרוצה ומעוצב מושלם.', rating: 5 }
    ],
    default: [
      { name: 'יוסי כהן', role: 'לקוח מרוצה', content: `שירות מעולה ומקצועי! באמת מרוצה מהעבודה עם ${businessName}.`, rating: 5 },
      { name: 'שרה לוי', role: 'לקוחה קבועה', content: 'השירות הכי טוב שקיבלתי! ממליצה בחום לכולם.', rating: 5 }
    ]
  };
  
  const templates = testimonialTemplates[businessType] || testimonialTemplates.default;
  
  return {
    title: 'מה הלקוחות שלנו אומרים',
    subtitle: 'ביקורות אמיתיות מלקוחות מרוצים',
    testimonials: templates
  };
};

export const generateCustomTemplate = async (data: QuestionnaireData): Promise<TemplateData> => {
  const colors = getColorScheme(data.colorPreference);
  
  const template: TemplateData = {
    id: `custom-${Date.now()}`,
    name: `דף ${data.businessName}`,
    category: data.businessType,
    hero: {
      title: data.businessName,
      subtitle: data.businessDescription,
      description: `${data.businessDescription}\n\n${data.uniqueValue}`,
      button1Text: data.ctaText,
      button2Text: 'קרא עוד',
      badge: `${data.businessType} מקצועי`
    },
    emotional: {
      title: 'בואו נעבוד יחד',
      description: `${data.mainProblem}\n\nזה בדיוק מה שאנחנו כאן לפתור עבורכם!`,
      button1Text: data.ctaText,
      button2Text: 'למד עוד'
    },
    features: {
      ...generateFeatures(data.keyFeatures, data.businessType),
      button1Text: data.ctaText,
      button2Text: 'צור קשר'
    },
    about: {
      title: 'קצת עלינו',
      description: `${data.businessDescription}\n\nאנחנו מתמחים בפתרון הבעיה הבאה: ${data.mainProblem}\n\nמה שמייחד אותנו: ${data.uniqueValue}`,
      image: '/placeholder-about.jpg',
      button1Text: data.ctaText,
      button2Text: 'קרא עוד'
    },
    testimonials: {
      ...generateTestimonials(data.businessType, data.businessName),
      button1Text: data.ctaText,
      button2Text: 'עוד המלצות'
    },
    contact: {
      title: 'בואו נתחיל לעבוד יחד',
      subtitle: 'צרו קשר היום ונראה איך נוכל לעזור לכם',
      buttonText: data.ctaText
    },
    faq: {
      title: 'שאלות נפוצות',
      questions: [
        {
          question: `איך ${data.businessName} שונה מהמתחרים?`,
          answer: data.uniqueValue
        },
        {
          question: 'כמה זמן לוקח לקבל שירות?',
          answer: 'בדרך כלל אנחנו זמינים מיד, תלוי בעומס. צרו קשר ונבדוק זמינות.'
        },
        {
          question: 'מה המחירים?',
          answer: 'המחירים משתנים לפי הצרכים. צרו קשר לקבלת הצעת מחיר מותאמת אישית.'
        }
      ],
      button1Text: data.ctaText,
      button2Text: 'עוד שאלות'
    },
    pricing: {
      title: 'התעריפים שלנו',
      subtitle: 'בחרו את החבילה המתאימה לכם',
      plans: [
        {
          name: 'בסיסי',
          price: '₪99',
          period: 'לחודש',
          features: data.keyFeatures.slice(0, 3),
          recommended: false,
          buttonText: data.ctaText
        },
        {
          name: 'מתקדם',
          price: '₪199',
          period: 'לחודש', 
          features: data.keyFeatures,
          recommended: true,
          buttonText: data.ctaText
        }
      ],
      button1Text: data.ctaText,
      button2Text: 'השווה תוכניות'
    },
    finalCta: {
      title: 'מוכנים להתחיל?',
      description: `הצטרפו לעשרות לקוחות מרוצים שכבר נהנים מהשירות של ${data.businessName}`,
      button1Text: data.ctaText,
      button2Text: 'קבל פרטים'
    },
    styles: {
      primaryColor: colors.primary,
      secondaryColor: colors.secondary,
      accentColor: colors.accent,
      backgroundColor: colors.background,
      textColor: colors.text,
      heroBackground: colors.primary,
      emotionalBackground: '#f1f5f9',
      featuresBackground: '#f8fafc',
      aboutBackground: '#ffffff',
      testimonialsBackground: '#f1f5f9',
      pricingBackground: '#f8fafc',
      faqBackground: '#ffffff',
      finalCtaBackground: colors.primary,
      contactBackground: colors.primary,
      footerBackground: '#1e293b'
    },
    footer: {
      companyName: data.businessName,
      description: data.businessDescription,
      contactInfo: {
        address: 'תל אביב, ישראל',
        phone: '050-123-4567',
        email: 'info.Leadgrid@gmail.com'
      },
      socialMedia: [
        { name: 'Facebook', icon: 'facebook-fill', href: '#' },
        { name: 'Instagram', icon: 'instagram-line', href: '#' },
        { name: 'WhatsApp', icon: 'whatsapp-line', href: '#' }
      ]
    }
  };
  
  return template;
};