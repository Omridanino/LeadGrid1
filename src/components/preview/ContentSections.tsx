
import { StyleAwareSection } from "./StyleAwareSections";

interface ContentSectionsProps {
  content: any;
  currentColors: any;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  // אם אין formData, לא מציגים כלום
  if (!formData || !formData.businessName) {
    return null;
  }

  return (
    <div className="w-full">
      {/* מעבר חלק מההירו */}
      <div 
        className="w-full h-32 relative"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0,0,0,0.8) 0%, 
            rgba(0,0,0,0.4) 50%, 
            transparent 100%)`
        }}
      />

      {/* פסקת רגש */}
      <EmotionalSection 
        formData={formData}
        currentColors={currentColors}
      />

      {/* שירותים */}
      <ServicesSection 
        formData={formData}
        currentColors={currentColors}
      />

      {/* למה אנחנו */}
      <WhyUsSection 
        formData={formData}
        currentColors={currentColors}
      />

      {/* ביקורות */}
      <TestimonialsSection 
        formData={formData}
        currentColors={currentColors}
      />

      {/* אודותינו */}
      <AboutSection 
        formData={formData}
        currentColors={currentColors}
      />

      {/* יצירת קשר */}
      <ContactSection 
        formData={formData}
        currentColors={currentColors}
      />
    </div>
  );
};

// רכיב פסקת רגש
const EmotionalSection = ({ formData, currentColors }: { formData: any; currentColors: any }) => {
  const generateEmotionalContent = () => {
    const businessName = formData?.businessName || 'העסק שלנו';
    const businessType = formData?.businessType || 'עסק מקצועי';
    const targetAudience = formData?.targetAudience || 'לקוחות יקרים';
    // תיקון: וידוא שהמשתנה הוא מערך לפני שימוש ב-join
    const businessValues = Array.isArray(formData?.businessValues) 
      ? formData.businessValues 
      : ['איכות', 'מקצועיות'];
    const mainGoals = Array.isArray(formData?.mainGoals) 
      ? formData.mainGoals 
      : ['שירות מעולה'];

    // יצירת תוכן רגשי טבעי ואותנטי יותר
    const emotionalMessages = [
      `כל בוקר אנחנו ב-${businessName} קמים עם מטרה אחת ברורה - לעזור לכם להגשים בדיוק את מה שחלמתם עליו.`,
      `אנחנו יודעים שהדרך ל${businessType} איכותי לא תמיד פשוטה, ולכן החלטנו להיות הכתובת שעליה תוכלו לסמוך.`,
      `מה שמניע אותנו זה לראות איך ${targetAudience} שלנו מקבלים בדיוק את מה שהם צריכים, ברמה שחורגת מהציפיות.`
    ];

    const selectedMessage = emotionalMessages[Math.floor(Math.random() * emotionalMessages.length)];

    return {
      title: `${businessName} - חלום שהופך למציאות`,
      content: `${selectedMessage} ${businessValues.join(' ו')} - זה לא סתם מילים עבורנו. זה מה שמגדיר אותנו בכל פרויקט, בכל שיחה, בכל רגע של העבודה שלנו. בואו נבנה יחד משהו שבאמת יעשה את ההבדל בחיים שלכם.`
    };
  };

  const emotionalContent = generateEmotionalContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ color: currentColors.headlineColor }}
          >
            {emotionalContent.title}
          </h2>
          
          <div 
            className="text-xl md:text-2xl leading-relaxed font-medium opacity-90"
            style={{ color: currentColors.subheadlineColor }}
          >
            {emotionalContent.content}
          </div>

          <div className="mt-12">
            <div 
              className="w-32 h-1 mx-auto rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${currentColors.primary}, ${currentColors.secondary}, ${currentColors.accent})`
              }}
            />
          </div>
        </div>
      </div>
    </StyleAwareSection>
  );
};

// רכיב השירותים
const ServicesSection = ({ formData, currentColors }: { formData: any; currentColors: any }) => {
  const generateServicesContent = () => {
    const businessName = formData?.businessName || 'העסק שלנו';
    const businessType = formData?.businessType || 'עסק מקצועי';
    // תיקון: וידוא שהמשתנה הוא מערך לפני שימוש ב-map
    const mainServices = Array.isArray(formData?.mainServices) 
      ? formData.mainServices 
      : ['שירות מקצועי', 'ייעוץ מומחה', 'תמיכה מלאה'];

    return {
      title: `מה ${businessName} מציע לכם?`,
      subtitle: `השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם`,
      services: mainServices.map((service: string, index: number) => ({
        title: service,
        description: `${service} ברמה הגבוהה ביותר, עם התמחות מעמיקה ויחס אישי לכל פרט.`,
        icon: ['🎯', '💎', '🚀'][index] || '⭐'
      }))
    };
  };

  const servicesContent = generateServicesContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="standard">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: currentColors.headlineColor }}
            >
              {servicesContent.title}
            </h2>
            <p 
              className="text-xl opacity-90"
              style={{ color: currentColors.subheadlineColor }}
            >
              {servicesContent.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesContent.services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.headlineColor }}>
                  {service.title}
                </h3>
                <p className="text-lg opacity-80" style={{ color: currentColors.subheadlineColor }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyleAwareSection>
  );
};

// רכיב למה אנחנו
const WhyUsSection = ({ formData, currentColors }: { formData: any; currentColors: any }) => {
  const generateWhyUsContent = () => {
    const businessName = formData?.businessName || 'העסק שלנו';
    const businessValues = Array.isArray(formData?.businessValues) 
      ? formData.businessValues 
      : ['איכות', 'מקצועיות'];
    const experience = formData?.experience || 'שנים רבות';

    return {
      title: `למה לבחור דווקא ב-${businessName}?`,
      reasons: [
        {
          title: 'ניסיון מוכח ומקצועיות',
          description: `עם ${experience} של עבודה מקצועית, אנחנו יודעים בדיוק איך לתת לכם את מה שאתם צריכים.`,
          icon: '🏆'
        },
        {
          title: businessValues[0] || 'איכות ללא פשרות',
          description: 'כל פרויקט מקבל את מלוא תשומת הלב שלנו, מהרעיון הראשון ועד התוצאה הסופית.',
          icon: '💎'
        },
        {
          title: 'יחס אישי ושירות מותאם',
          description: 'אנחנו מאמינים שכל לקוח הוא עולם ומלואו, ולכן מתאימים את הגישה בדיוק לצרכים שלכם.',
          icon: '🤝'
        }
      ]
    };
  };

  const whyUsContent = generateWhyUsContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: currentColors.headlineColor }}
          >
            {whyUsContent.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUsContent.reasons.map((reason, index) => (
              <div key={index} className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="text-5xl mb-6">{reason.icon}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.headlineColor }}>
                  {reason.title}
                </h3>
                <p className="text-lg opacity-80" style={{ color: currentColors.subheadlineColor }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyleAwareSection>
  );
};

// רכיב ביקורות
const TestimonialsSection = ({ formData, currentColors }: { formData: any; currentColors: any }) => {
  const generateTestimonials = () => {
    const businessType = formData?.businessType || 'עסק מקצועי';
    const businessName = formData?.businessName || 'העסק';

    const testimonialTemplates = [
      {
        name: 'שרה כהן',
        role: 'לקוחה מרוצה',
        text: `העבודה עם ${businessName} הייתה חוויה מדהימה. הם הבינו בדיוק מה אני צריכה והביאו תוצאות שחרגו מכל הציפיות שלי.`,
        rating: 5
      },
      {
        name: 'דוד לוי',
        role: 'בעל עסק',
        text: `מקצועיות ברמה הגבוהה ביותר. הצוות היה זמין, אמין ומחויב להצלחה שלי. ממליץ בחום!`,
        rating: 5
      },
      {
        name: 'מיכל גרין',
        role: 'יזמת',
        text: `סוף סוף מצאתי מישהו שבאמת מבין מה אני צריכה. השירות היה מעל ומעבר לכל מה שציפיתי.`,
        rating: 5
      }
    ];

    return {
      title: 'מה הלקוחות שלנו אומרים',
      subtitle: 'ביקורות אמיתיות מלקוחות מרוצים',
      testimonials: testimonialTemplates
    };
  };

  const testimonialsContent = generateTestimonials();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="standard">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: currentColors.headlineColor }}
            >
              {testimonialsContent.title}
            </h2>
            <p 
              className="text-xl opacity-90"
              style={{ color: currentColors.subheadlineColor }}
            >
              {testimonialsContent.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsContent.testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-lg mb-6 opacity-90" style={{ color: currentColors.subheadlineColor }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold" style={{ color: currentColors.headlineColor }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm opacity-70" style={{ color: currentColors.subheadlineColor }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyleAwareSection>
  );
};

// רכיב אודותינו
const AboutSection = ({ formData, currentColors }: { formData: any; currentColors: any }) => {
  const generateAboutContent = () => {
    const businessName = formData?.businessName || 'העסק שלנו';
    const businessType = formData?.businessType || 'עסק מקצועי';
    const businessValues = Array.isArray(formData?.businessValues) 
      ? formData.businessValues 
      : ['איכות', 'מקצועיות'];
    const vision = formData?.vision || 'להיות הכתובת המובילה בתחום';

    return {
      title: `הסיפור שלנו ב-${businessName}`,
      story: `כשהחלטנו להקים את ${businessName}, המטרה הייתה ברורה - ליצור ${businessType} שבאמת עושה את ההבדל. אנחנו מאמינים ב${businessValues.join(' וב')} כדרך חיים, לא רק כמילים יפות. ${vision} - זה מה שמניע אותנו כל יום מחדש.`,
      values: businessValues.map((value: string) => ({
        title: value,
        description: `${value} זה לא רק מה שאנחנו עושים, זה מי שאנחנו.`
      }))
    };
  };

  const aboutContent = generateAboutContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: currentColors.headlineColor }}
          >
            {aboutContent.title}
          </h2>
          
          <p 
            className="text-xl md:text-2xl leading-relaxed mb-12 opacity-90"
            style={{ color: currentColors.subheadlineColor }}
          >
            {aboutContent.story}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.headlineColor }}>
                  {value.title}
                </h3>
                <p className="text-lg opacity-80" style={{ color: currentColors.subheadlineColor }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyleAwareSection>
  );
};

// רכיב יצירת קשר
const ContactSection = ({ formData, currentColors }: { formData: any; currentColors: any }) => {
  const generateContactContent = () => {
    const businessName = formData?.businessName || 'העסק שלנו';

    return {
      title: 'בואו נתחיל לעבוד יחד',
      subtitle: `מוכנים לגלות מה ${businessName} יכול לעשות עבורכם?`,
      cta: 'השאירו פרטים ונחזור אליכם תוך 24 שעות',
      benefits: [
        'ייעוץ ראשוני בחינם',
        'הצעת מחיר מותאמת אישית',
        'פגישה ללא התחייבות'
      ]
    };
  };

  const contactContent = generateContactContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="final">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: currentColors.headlineColor }}
          >
            {contactContent.title}
          </h2>
          
          <p 
            className="text-xl mb-8 opacity-90"
            style={{ color: currentColors.subheadlineColor }}
          >
            {contactContent.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {contactContent.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                <span className="text-green-400 mr-2">✓</span>
                <span style={{ color: currentColors.subheadlineColor }}>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="השם שלכם"
                className="w-full p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <input 
                type="tel" 
                placeholder="טלפון"
                className="w-full p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <textarea 
                placeholder="איך נוכל לעזור לכם?"
                rows={4}
                className="w-full p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <button 
                type="submit"
                className="w-full p-4 rounded-lg font-bold text-white transition-all hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
                }}
              >
                {contactContent.cta}
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyleAwareSection>
  );
};
