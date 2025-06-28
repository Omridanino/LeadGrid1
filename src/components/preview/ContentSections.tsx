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
      {/* מעבר חלק מההירו - מוקטן משמעותית */}
      <div 
        className="w-full h-8 relative"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0,0,0,0.6) 0%, 
            rgba(0,0,0,0.3) 30%, 
            rgba(0,0,0,0.1) 70%,
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
    const businessValues = Array.isArray(formData?.businessValues) 
      ? formData.businessValues 
      : ['איכות', 'מקצועיות'];
    const mainGoals = Array.isArray(formData?.mainGoals) 
      ? formData.mainGoals 
      : ['שירות מעולה'];

    const emotionalMessages = [
      `בכל בוקר, כשאנחנו פותחים את הדלתות ב-${businessName}, אנחנו חושבים על דבר אחד - איך להפוך את החלום שלכם למציאות. זה לא רק עבודה בעבורנו, זה שליחות אמיתית.`,
      `${businessName} נולד מתוך הרצון לעשות את הדברים אחרת. לתת לכם שירות ש${businessType} אמיתי צריך לתת - עם נשמה, עם לב, עם מקצועיות שלא מוכנה להתפשר.`,
      `אנחנו מאמינים שכל ${targetAudience} שלנו מגיע ליחס אישי, לתשומת לב אמיתית ולתוצאות שעוברות את הציפיות. זה מה שמניע אותנו בכל יום מחדש.`,
      `הדרך שלנו התחילה עם חזון פשוט - להיות הכתובת שאליה ${targetAudience} פונים כשהם צריכים ${businessType} שבאמת אכפת לו. כל פרויקט, כל לקוח, כל פרט - הכל חשוב לנו.`
    ];

    const selectedMessage = emotionalMessages[Math.floor(Math.random() * emotionalMessages.length)];

    return {
      title: `${businessName} - מעבר מחלום למציאות`,
      content: `${selectedMessage} ${businessValues.join(' ו')} - אלה לא רק מילים במצגת, אלה הערכים שמנחים אותנו בכל החלטה. בואו נעשה משהו יפה יחד.`,
      cta: 'בואו נתחיל לעבוד יחד'
    };
  };

  const emotionalContent = generateEmotionalContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
      <div className="container mx-auto px-4 relative">
        {/* 3D עיצוב משופר */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg transform rotate-45 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full blur-lg animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* אייקון מרכזי */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-4xl">💫</div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-sm animate-ping"></div>
            </div>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ color: currentColors.headlineColor }}
          >
            {emotionalContent.title}
          </h2>
          
          <div 
            className="text-xl md:text-2xl leading-relaxed font-medium opacity-90 mb-12"
            style={{ color: currentColors.subheadlineColor }}
          >
            {emotionalContent.content}
          </div>

          {/* כפתור פעולה */}
          <button 
            className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 backdrop-blur-sm border border-white/20 shadow-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
            }}
          >
            <div className="flex items-center gap-2">
              <span>🚀</span>
              <span>{emotionalContent.cta}</span>
            </div>
          </button>

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
    const mainServices = Array.isArray(formData?.mainServices) 
      ? formData.mainServices 
      : ['שירות מקצועי', 'ייעוץ מומחה', 'תמיכה מלאה'];

    const serviceIcons = ['🎯', '💎', '🚀', '⭐', '🔥', '💡'];

    return {
      title: `השירותים המקצועיים של ${businessName}`,
      subtitle: `כל מה שאתם צריכים ל${businessType} מושלם - במקום אחד`,
      services: mainServices.slice(0, 6).map((service: string, index: number) => ({
        title: service,
        description: `${service} ברמה הגבוהה ביותר - עם התמחות מעמיקה, כלים מתקדמים ויחס אישי שאין שני לו.`,
        icon: serviceIcons[index] || '⭐'
      })),
      cta: 'גלו את כל השירותים'
    };
  };

  const servicesContent = generateServicesContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="standard">
      <div className="container mx-auto px-4 relative">
        {/* 3D רקע משופר */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-lg transform rotate-12 blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* אייקון מרכזי */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-3xl">🛠️</div>
              </div>
            </div>

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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {servicesContent.services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <div className="text-2xl">{service.icon}</div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-pink-500/40 to-purple-500/40 rounded-full blur-sm animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.headlineColor }}>
                  {service.title}
                </h3>
                <p className="text-lg opacity-80 mb-6" style={{ color: currentColors.subheadlineColor }}>
                  {service.description}
                </p>
                <button 
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 text-white hover:scale-105 transition-all"
                >
                  <div className="flex items-center gap-2 justify-center">
                    <span>📞</span>
                    <span>פרטים נוספים</span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* כפתור פעולה מרכזי */}
          <div className="text-center">
            <button 
              className="px-10 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 backdrop-blur-sm border border-white/20 shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
              }}
            >
              <div className="flex items-center gap-2">
                <span>🎯</span>
                <span>{servicesContent.cta}</span>
              </div>
            </button>
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
      subtitle: 'הסיבות שהופכות אותנו לבחירה הנכונה עבורכם',
      reasons: [
        {
          title: 'ניסיון מוכח ומקצועיות',
          description: `עם ${experience} של עבודה מקצועית ומאות לקוחות מרוצים, אנחנו יודעים בדיוק איך לתת לכם את השירות הטוב ביותר.`,
          icon: '🏆'
        },
        {
          title: businessValues[0] || 'איכות ללא פשרות',
          description: 'כל פרויקט מקבל את מלוא תשומת הלב שלנו. אנחנו לא מתפשרים על איכות ולא מוותרים על מצוינות.',
          icon: '💎'
        },
        {
          title: 'יחס אישי ושירות מותאם',
          description: 'אנחנו מאמינים שכל לקוח הוא עולם ומלואו. לכן אנחנו מתאימים את הגישה, השירות והפתרונות בדיוק לצרכים שלכם.',
          icon: '🤝'
        },
        {
          title: 'זמינות ותמיכה מלאה',
          description: 'אנחנו כאן בשבילכם לפני, במהלך ואחרי הפרויקט. תמיכה מלאה ושירות לקוחות ברמה הגבוהה ביותר.',
          icon: '🚀'
        },
        {
          title: 'מחירים הוגנים ושקופים',
          description: 'בלי הפתעות, בלי עלויות נסתרות. הצעת מחיר ברורה ומפורטת מראש, עם יחס מחיר-איכות שאין שני לו.',
          icon: '💰'
        }
      ],
      cta: 'בואו נעבוד יחד'
    };
  };

  const whyUsContent = generateWhyUsContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
      <div className="container mx-auto px-4 relative">
        {/* 3D רקע */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-green-500/15 to-blue-500/15 rounded-lg transform rotate-45 blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-3xl">🌟</div>
              </div>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: currentColors.headlineColor }}
            >
              {whyUsContent.title}
            </h2>
            <p 
              className="text-xl opacity-90"
              style={{ color: currentColors.subheadlineColor }}
            >
              {whyUsContent.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {whyUsContent.reasons.slice(0, 3).map((reason, index) => (
              <div key={index} className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <div className="text-3xl">{reason.icon}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.headlineColor }}>
                  {reason.title}
                </h3>
                <p className="text-lg opacity-80" style={{ color: currentColors.subheadlineColor }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* שורה נוספת */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {whyUsContent.reasons.slice(3, 5).map((reason, index) => (
              <div key={index + 3} className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <div className="text-2xl">{reason.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: currentColors.headlineColor }}>
                  {reason.title}
                </h3>
                <p className="text-base opacity-80" style={{ color: currentColors.subheadlineColor }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* כפתור פעולה */}
          <div className="text-center">
            <button 
              className="px-10 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 backdrop-blur-sm border border-white/20 shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
              }}
            >
              <div className="flex items-center gap-2">
                <span>🤝</span>
                <span>{whyUsContent.cta}</span>
              </div>
            </button>
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
        text: `העבודה עם ${businessName} הייתה חוויה מדהימה מתחילה ועד סוף. הם הבינו בדיוק מה אני צריכה והביאו תוצאות שחרגו מכל הציפיות שלי. ממליצה בחום!`,
        rating: 5,
        icon: '👩‍💼'
      },
      {
        name: 'דוד לוי',
        role: 'בעל עסק',
        text: `מקצועיות ברמה הגבוהה ביותר. הצוות של ${businessName} היה זמין, אמין ומחויב להצלחה שלי. קיבלתי בדיוק מה שהובטח לי ועוד יותר.`,
        rating: 5,
        icon: '👨‍💼'
      },
      {
        name: 'מיכל גרין',
        role: 'יזמת',
        text: `סוף סוף מצאתי מישהו שבאמת מבין מה אני צריכה. השירות היה מעל ומעבר לכל מה שציפיתי. ${businessName} - אתם הכי!`,
        rating: 5,
        icon: '👩‍🚀'
      }
    ];

    return {
      title: 'מה הלקוחות שלנו אומרים',
      subtitle: 'ביקורות אמיתיות מלקוחות מרוצים שעבדו איתנו',
      testimonials: testimonialTemplates,
      cta: 'הצטרפו אליהם'
    };
  };

  const testimonialsContent = generateTestimonials();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="standard">
      <div className="container mx-auto px-4 relative">
        {/* 3D רקע */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-10 w-28 h-28 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-lg transform rotate-12 blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-3xl">💬</div>
              </div>
            </div>

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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonialsContent.testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">{testimonial.icon}</span>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
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

          <div className="text-center">
            <button 
              className="px-10 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 backdrop-blur-sm border border-white/20 shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
              }}
            >
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>{testimonialsContent.cta}</span>
              </div>
            </button>
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
      title: `הסיפור של ${businessName}`,
      story: `הדרך שלנו התחילה עם חלום פשוט - ליצור ${businessType} שבאמת עושה את ההבדל. לא עוד עסק רגיל, אלא מקום שבו ${businessValues.join(' ו')} הם לא רק מילים יפות אלא דרך חיים. כל יום אנחנו קמים עם המחשבה: "${vision}" - וזה מה שמניע אותנו להיות טובים יותר, לחדש, לשפר ולהתקדם.`,
      mission: 'המשימה שלנו היא לתת לכם חוויה שתזכרו, שירות שתספרו עליו לאחרים, ותוצאות שישנו לכם את החיים.',
      values: businessValues.slice(0, 4).map((value: string) => ({
        title: value,
        description: `${value} - זה לא רק מה שאנחנו עושים, זה מי שאנחנו. זה הבסיס לכל החלטה שאנחנו נדרשים לקבל.`,
        icon: ['🎯', '💎', '🚀', '⭐'][businessValues.indexOf(value)] || '🌟'
      })),
      cta: 'הכירו אותנו יותר'
    };
  };

  const aboutContent = generateAboutContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="alternate">
      <div className="container mx-auto px-4 relative">
        {/* 3D רקע */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-lg transform rotate-45 blur-2xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-3xl">📖</div>
              </div>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ color: currentColors.headlineColor }}
            >
              {aboutContent.title}
            </h2>
          </div>
          
          <div className="text-center mb-12">
            <p 
              className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90"
              style={{ color: currentColors.subheadlineColor }}
            >
              {aboutContent.story}
            </p>
            
            <p 
              className="text-lg leading-relaxed mb-8 opacity-80"
              style={{ color: currentColors.subheadlineColor }}
            >
              {aboutContent.mission}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: currentColors.headlineColor }}>
                    {value.title}
                  </h3>
                </div>
                <p className="text-lg opacity-80" style={{ color: currentColors.subheadlineColor }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              className="px-10 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 backdrop-blur-sm border border-white/20 shadow-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
              }}
            >
              <div className="flex items-center gap-2">
                <span>👥</span>
                <span>{aboutContent.cta}</span>
              </div>
            </button>
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
      title: 'מוכנים להתחיל?',
      subtitle: `בואו נגרום לחלומות שלכם להתממש עם ${businessName}`,
      cta: 'שלחו הודעה עכשיו',
      benefits: [
        { text: 'ייעוץ ראשוני בחינם', icon: '🎁' },
        { text: 'הצעת מחיר מותאמת אישית', icon: '💎' },
        { text: 'פגישה ללא התחייבות', icon: '🤝' },
        { text: 'מענה תוך 24 שעות', icon: '⚡' }
      ]
    };
  };

  const contactContent = generateContactContent();

  return (
    <StyleAwareSection heroStyle={formData.heroStyle || '3d'} sectionType="final">
      <div className="container mx-auto px-4 relative">
        {/* 3D רקע אחרון */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-lg transform rotate-45 blur-2xl"></div>
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-bounce"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <div className="text-4xl">📞</div>
            </div>
          </div>

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

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {contactContent.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <span className="text-2xl mr-3">{benefit.icon}</span>
                <span style={{ color: currentColors.subheadlineColor }}>{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto mb-8">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="השם שלכם"
                className="w-full p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/15 focus:border-white/40 transition-all"
              />
              <input 
                type="tel" 
                placeholder="טלפון"
                className="w-full p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/15 focus:border-white/40 transition-all"
              />
              <textarea 
                placeholder="איך נוכל לעזור לכם?"
                rows={4}
                className="w-full p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/15 focus:border-white/40 transition-all"
              />
            </form>
          </div>

          <button 
            className="px-12 py-5 rounded-xl font-bold text-white transition-all hover:scale-105 backdrop-blur-sm border border-white/20 shadow-2xl text-lg"
            style={{ 
              background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`
            }}
          >
            <div className="flex items-center gap-3">
              <span>🚀</span>
              <span>{contactContent.cta}</span>
            </div>
          </button>
        </div>
      </div>
    </StyleAwareSection>
  );
};
