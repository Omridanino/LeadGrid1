
import { useState, useEffect } from "react";

interface ContentSectionsProps {
  content: any;
  currentColors: any;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  // Debug: בואו נראה מה יש בנתונים
  console.log("ContentSections - formData:", formData);
  console.log("ContentSections - selectedElements:", selectedElements);
  console.log("ContentSections - content:", content);

  // Helper function to get style classes based on hero style
  const getStyleClasses = () => {
    if (!formData || !formData.heroStyle) {
      return {
        background: 'bg-3d',
        card: 'card-3d',
        button: 'btn-3d',
        icon: 'icon-3d',
        typography: 'typography-modern'
      };
    }
    
    switch (formData.heroStyle) {
      case 'geometric':
        return {
          background: 'bg-geometric',
          card: 'card-geometric',
          button: 'btn-geometric',
          icon: 'icon-geometric',
          typography: 'typography-modern'
        };
      case 'glass':
        return {
          background: 'bg-liquid-glass',
          card: 'card-liquid-glass',
          button: 'btn-liquid-glass',
          icon: 'icon-liquid-glass',
          typography: 'typography-liquid'
        };
      case 'metal':
        return {
          background: 'bg-metal',
          card: 'card-metal',
          button: 'btn-metal',
          icon: 'icon-metal',
          typography: 'typography-luxury'
        };
      case 'image':
        return {
          background: 'bg-image-depth',
          card: 'card-image-depth',
          button: 'btn-image-depth',
          icon: 'icon-image-depth',
          typography: 'typography-cinematic'
        };
      default:
        return {
          background: 'bg-3d',
          card: 'card-3d',
          button: 'btn-3d',
          icon: 'icon-3d',
          typography: 'typography-modern'
        };
    }
  };

  const styleClasses = getStyleClasses();

  // Helper function to get consistent section styling
  const getSectionStyle = () => {
    return {
      background: 'rgba(0,0,0,0.3)',
      backdropFilter: 'blur(16px)',
      padding: '6rem 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    };
  };

  // Generate default content if none exists
  const getDefaultContent = () => {
    const businessName = formData?.businessName || 'העסק שלי';
    const businessType = formData?.businessType || 'שירותים עסקיים';
    
    return {
      services: {
        title: 'השירותים שלנו',
        subtitle: 'מקצועיות ברמה הגבוהה ביותר',
        items: [
          { title: 'שירות מקצועי', description: 'אנחנו מספקים שירות מקצועי ואמין', icon: '⭐' },
          { title: 'יחס אישי', description: 'כל לקוח מקבל יחס אישי ומסור', icon: '❤️' },
          { title: 'תוצאות מוכחות', description: 'הישגים קונקרטיים ומדידים', icon: '🏆' }
        ]
      },
      about: {
        title: 'הסיפור שלנו',
        description: `${businessName} מתמחה ב${businessType} ומספק שירות ברמה הגבוהה ביותר.`,
        highlights: ['ניסיון עשיר', 'מקצועיות גבוהה', 'יחס אישי', 'מחירים הוגנים'],
        whyChooseUs: 'ניסיון עשיר, מקצועיות ויחס אישי לכל לקוח'
      },
      features: {
        title: 'מה מייחד אותנו',
        subtitle: 'היתרונות שלנו שיעשו לכם את ההבדל',
        items: [
          { title: 'איכות מעולה', description: 'רמה גבוהה של שירות', icon: '⚡' },
          { title: 'מהירות', description: 'מענה מהיר ויעיל', icon: '🚀' },
          { title: 'אמינות', description: 'שירות אמין ומוכח', icon: '✅' }
        ]
      },
      benefits: {
        title: 'היתרונות שתקבלו',
        subtitle: 'כל מה שאתם צריכים כדי להצליח',
        items: [
          { title: 'חיסכון בזמן', description: 'נעזור לכם לחסוך זמן יקר', icon: '⏰' },
          { title: 'חיסכון בכסף', description: 'פתרונות חסכוניים ויעילים', icon: '💰' }
        ]
      },
      testimonials: {
        title: 'מה הלקוחות אומרים',
        subtitle: 'ההמלצות שיספרו לכם הכל',
        items: [
          { name: 'יוסי כהן', text: 'שירות מעולה ומקצועי', role: 'לקוח מרוצה' },
          { name: 'שרה לוי', text: 'ממליצה בחום!', role: 'לקוחה מרוצה' }
        ]
      },
      faq: {
        title: 'שאלות נפוצות',
        subtitle: 'התשובות לכל מה שרציתם לדעת',
        items: [
          { question: 'כמה זמן לוקח השירות?', answer: 'זה תלוי בסוג השירות, נעזור לכם בהתאמה אישית' },
          { question: 'מה כלול במחיר?', answer: 'המחיר כולל את כל השירותים הבסיסיים' }
        ]
      },
      contact: {
        title: 'בואו נתחיל',
        subtitle: 'מוכנים לקחת את העסק שלכם לשלב הבא?'
      }
    };
  };

  // Use provided content or default content
  const displayContent = content || getDefaultContent();

  // אם אין selectedElements, נציג את כל הסקשנים
  const elementsToShow = selectedElements && selectedElements.length > 0 
    ? selectedElements 
    : ['services', 'about', 'features', 'benefits', 'testimonials', 'faq', 'contact'];

  console.log("Elements to show:", elementsToShow);

  return (
    <div className="w-full">
      {/* Services Section */}
      {elementsToShow.includes('services') && displayContent?.services && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {displayContent.services.title || 'השירותים שלנו'}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {displayContent.services.subtitle || 'מקצועיות ברמה הגבוהה ביותר'}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {displayContent.services.items?.map((service: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-8 text-center hover:scale-105 transition-all duration-300`}>
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6`}>
                      <span className="text-2xl">{service.icon || '⭐'}</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {elementsToShow.includes('about') && displayContent?.about && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    {displayContent.about.title || 'הסיפור שלנו'}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {displayContent.about.description}
                  </p>
                  <div className="space-y-4">
                    {displayContent.about.highlights?.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`${styleClasses.icon} w-8 h-8 flex items-center justify-center`}>
                          <span className="text-white">✓</span>
                        </div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styleClasses.card} p-8`}>
                  <div className="text-center">
                    <div className={`${styleClasses.icon} w-20 h-20 mx-auto mb-6`}>
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      למה לבחור בנו?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {displayContent.about.whyChooseUs || 'ניסיון עשיר, מקצועיות ויחס אישי לכל לקוח'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {elementsToShow.includes('features') && displayContent?.features && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {displayContent.features.title || 'מה מייחד אותנו'}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {displayContent.features.subtitle || 'היתרונות שלנו שיעשו לכם את ההבדל'}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayContent.features.items?.map((feature: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center`}>
                    <div className={`${styleClasses.icon} w-14 h-14 mx-auto mb-4`}>
                      <span className="text-xl">{feature.icon || '⚡'}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 text-white ${styleClasses.typography}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {elementsToShow.includes('benefits') && displayContent?.benefits && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {displayContent.benefits.title || 'היתרונות שתקבלו'}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {displayContent.benefits.subtitle || 'כל מה שאתם צריכים כדי להצליח'}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {displayContent.benefits.items?.map((benefit: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-8 text-right`}>
                    <div className="flex items-start gap-4">
                      <div className={`${styleClasses.icon} w-12 h-12 flex-shrink-0`}>
                        <span className="text-lg">{benefit.icon || '✨'}</span>
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold mb-3 text-white ${styleClasses.typography}`}>
                          {benefit.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {elementsToShow.includes('testimonials') && displayContent?.testimonials && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {displayContent.testimonials.title || 'מה הלקוחות אומרים'}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {displayContent.testimonials.subtitle || 'ההמלצות שיספרו לכם הכל'}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayContent.testimonials.items?.map((testimonial: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center`}>
                    <div className="mb-4">
                      <span className="text-3xl text-yellow-400">⭐⭐⭐⭐⭐</span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className={`${styleClasses.icon} w-12 h-12 mx-auto mb-3`}>
                      <span className="text-lg">👤</span>
                    </div>
                    <h4 className={`font-bold text-white ${styleClasses.typography}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role || 'לקוח מרוצה'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {elementsToShow.includes('faq') && displayContent?.faq && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {displayContent.faq.title || 'שאלות נפוצות'}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {displayContent.faq.subtitle || 'התשובות לכל מה שרציתם לדעת'}
                </p>
              </div>
              <div className="space-y-6">
                {displayContent.faq.items?.map((faq: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6`}>
                    <h3 className={`text-xl font-bold mb-3 text-white ${styleClasses.typography}`}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {elementsToShow.includes('contact') && displayContent?.contact && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {displayContent.contact.title || 'בואו נתחיל'}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {displayContent.contact.subtitle || 'מוכנים לקחת את העסק שלכם לשלב הבא?'}
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    פרטי יצירת קשר
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10`}>
                        <span>📞</span>
                      </div>
                      <span className="text-gray-300">050-1234567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10`}>
                        <span>✉️</span>
                      </div>
                      <span className="text-gray-300">info@business.co.il</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10`}>
                        <span>📍</span>
                      </div>
                      <span className="text-gray-300">תל אביב, ישראל</span>
                    </div>
                  </div>
                </div>
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    שלחו הודעה
                  </h3>
                  <div className="space-y-4">
                    <button className={`${styleClasses.button} w-full p-4 text-center text-white font-bold rounded-lg transition-all duration-300`}>
                      התקשרו עכשיו
                    </button>
                    <button className={`${styleClasses.button} w-full p-4 text-center text-white font-bold rounded-lg transition-all duration-300`}>
                      שלחו WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
