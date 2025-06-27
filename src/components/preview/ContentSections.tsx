
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
        background: 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900',
        card: 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl',
        button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
        icon: 'bg-gradient-to-r from-purple-500 to-pink-500 rounded-full',
        typography: 'font-bold'
      };
    }
    
    switch (formData.heroStyle) {
      case 'geometric':
        return {
          background: 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900',
          card: 'bg-white/10 backdrop-blur-lg border border-blue-300/30 rounded-lg',
          button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
          icon: 'bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg',
          typography: 'font-bold'
        };
      case 'glass':
        return {
          background: 'bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900',
          card: 'bg-white/5 backdrop-blur-xl border border-teal-300/20 rounded-2xl',
          button: 'bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500',
          icon: 'bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full',
          typography: 'font-light'
        };
      case 'metal':
        return {
          background: 'bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900',
          card: 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-lg border border-yellow-300/30 rounded-lg',
          button: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600',
          icon: 'bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg',
          typography: 'font-bold'
        };
      case 'image':
        return {
          background: 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900',
          card: 'bg-black/40 backdrop-blur-lg border border-purple-300/30 rounded-xl',
          button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
          icon: 'bg-gradient-to-r from-purple-500 to-pink-500 rounded-full',
          typography: 'font-bold'
        };
      default:
        return {
          background: 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900',
          card: 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl',
          button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
          icon: 'bg-gradient-to-r from-purple-500 to-pink-500 rounded-full',
          typography: 'font-bold'
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

  // בדיקת הסקשנים שיש להציג - תיקון הבעיה כאן
  const elementsToShow = selectedElements && selectedElements.length > 0 
    ? selectedElements 
    : formData?.selectedElements || [];

  console.log("Elements to show FINAL:", elementsToShow);

  // אם אין תוכן אבל יש אלמנטים שנבחרו, ניצור תוכן בסיסי
  const getDefaultContent = () => {
    const businessName = formData?.businessName || "העסק שלי";
    const businessType = formData?.businessType || "שירותים עסקיים";
    
    return {
      services: {
        title: "השירותים שלנו",
        subtitle: `הפתרונות המקצועיים של ${businessName}`,
        items: [
          { title: "שירות ראשון", description: "תיאור שירות ראשון מקצועי ואמין", icon: "⭐" },
          { title: "שירות שני", description: "תיאור שירות שני איכותי ומותאם אישית", icon: "🚀" },
          { title: "שירות שלישי", description: "תיאור שירות שלישי מתקדם ויעיל", icon: "💎" }
        ]
      },
      about: {
        title: "אודותינו",
        description: `${businessName} מתמחה ב${businessType} ומספק שירות מעולה`,
        highlights: ["ניסיון רב שנים", "מקצועיות ברמה גבוהה", "שירות אישי"],
        whyChooseUs: "אנחנו מספקים שירות מקצועי עם יחס אישי לכל לקוח"
      },
      testimonials: {
        title: "מה הלקוחות אומרים",
        subtitle: "ההמלצות שלנו מדברות בעד עצמן",
        items: [
          { name: "יוסי כהן", role: "לקוח מרוצה", text: "שירות מעולה ומקצועי!", rating: 5 },
          { name: "רחל לוי", role: "לקוחה קבועה", text: "ממליצה בחום על השירות", rating: 5 }
        ]
      },
      contact: {
        title: "צרו קשר",
        subtitle: "מוכנים להתחיל? בואו נדבר!",
        cta: "צרו קשר עכשיו"
      },
      features: {
        title: "המאפיינים שלנו",
        subtitle: "מה מייחד אותנו מהשאר",
        items: [
          { title: "איכות גבוהה", description: "שירות ברמה מקצועית גבוהה", icon: "✅" },
          { title: "מהירות", description: "מענה מהיר ויעיל", icon: "⚡" }
        ]
      },
      faq: {
        title: "שאלות נפוצות",
        subtitle: "התשובות לשאלות הנפוצות ביותר",
        items: [
          { question: "איך אתם עובדים?", answer: "אנחנו עובדים בצורה מקצועית ומסודרת" },
          { question: "כמה זמן לוקח?", answer: "זמני העבודה משתנים לפי הפרויקט" }
        ]
      },
      process: {
        title: "התהליך שלנו",
        subtitle: "איך אנחנו עובדים איתכם",
        steps: [
          { title: "היכרות", description: "נפגשים ומכירים את הצרכים שלכם", icon: "🤝" },
          { title: "תכנון", description: "מכינים תכנית עבודה מפורטת", icon: "📋" },
          { title: "ביצוע", description: "מבצעים את העבודה בצורה מקצועית", icon: "⚡" },
          { title: "מסירה", description: "מוסרים את התוצר הסופי", icon: "🎯" }
        ]
      },
      gallery: {
        title: "גלריה",
        subtitle: "דוגמאות מעבודותינו",
        description: "כאן תוכלו לראות דוגמאות מעבודות שביצענו"
      }
    };
  };

  const finalContent = content || getDefaultContent();

  console.log("Final content:", finalContent);
  console.log("Elements to show:", elementsToShow);

  // If no elements selected, don't show anything
  if (!elementsToShow || elementsToShow.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Services Section */}
      {elementsToShow.includes('services') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.services?.title || "השירותים שלנו"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.services?.subtitle || "הפתרונות המקצועיים שלנו"}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {finalContent.services?.items?.map((service: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-8 text-center hover:scale-105 transition-all duration-300`}>
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white`}>
                      <span className="text-2xl">{service.icon}</span>
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
      {elementsToShow.includes('about') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    {finalContent.about?.title || "אודותינו"}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {finalContent.about?.description || "אנחנו מספקים שירות מקצועי ואמין"}
                  </p>
                  <div className="space-y-4">
                    {finalContent.about?.highlights?.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`${styleClasses.icon} w-8 h-8 flex items-center justify-center text-white`}>
                          <span>✓</span>
                        </div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styleClasses.card} p-8`}>
                  <div className="text-center">
                    <div className={`${styleClasses.icon} w-20 h-20 mx-auto mb-6 flex items-center justify-center text-white`}>
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      למה לבחור בנו?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {finalContent.about?.whyChooseUs || "אנחנו מספקים שירות מקצועי עם יחס אישי"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {elementsToShow.includes('testimonials') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.testimonials?.title || "מה הלקוחות אומרים"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.testimonials?.subtitle || "ההמלצות שלנו מדברות בעד עצמן"}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {finalContent.testimonials?.items?.map((testimonial: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center`}>
                    <div className="mb-4">
                      <span className="text-3xl text-yellow-400">
                        {'⭐'.repeat(testimonial.rating || 5)}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className={`${styleClasses.icon} w-12 h-12 mx-auto mb-3 flex items-center justify-center text-white`}>
                      <span className="text-lg">👤</span>
                    </div>
                    <h4 className={`font-bold text-white ${styleClasses.typography}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {elementsToShow.includes('contact') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {finalContent.contact?.title || "צרו קשר"}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {finalContent.contact?.subtitle || "מוכנים להתחיל? בואו נדבר!"}
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    פרטי יצירת קשר
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10 flex items-center justify-center text-white`}>
                        <span>📞</span>
                      </div>
                      <span className="text-gray-300">050-1234567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10 flex items-center justify-center text-white`}>
                        <span>✉️</span>
                      </div>
                      <span className="text-gray-300">info@business.co.il</span>
                    </div>
                  </div>
                </div>
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    בואו נתחיל
                  </h3>
                  <button className={`${styleClasses.button} w-full p-4 text-center text-white font-bold rounded-lg transition-all duration-300`}>
                    {finalContent.contact?.cta || "צרו קשר עכשיו"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {elementsToShow.includes('process') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.process?.title || "התהליך שלנו"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.process?.subtitle || "איך אנחנו עובדים איתכם"}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {finalContent.process?.steps?.map((step: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center relative`}>
                    <div className="absolute -top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 text-white ${styleClasses.typography}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {elementsToShow.includes('faq') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {finalContent.faq?.title || "שאלות נפוצות"}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {finalContent.faq?.subtitle || "התשובות לשאלות הנפוצות ביותר"}
                </p>
              </div>
              <div className="space-y-6">
                {finalContent.faq?.items?.map((faq: any, index: number) => (
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

      {/* Gallery Section */}
      {elementsToShow.includes('gallery') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.gallery?.title || "גלריה"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.gallery?.subtitle || "דוגמאות מעבודותינו"}
              </p>
              <div className={`${styleClasses.card} p-8`}>
                <div className={`${styleClasses.icon} w-20 h-20 mx-auto mb-6 flex items-center justify-center text-white`}>
                  <span className="text-4xl">🖼️</span>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  גלריית עבודות
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {finalContent.gallery?.description || "כאן תוכלו לראות דוגמאות מעבודות שביצענו"}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {elementsToShow.includes('features') && (
        <section className={`${styleClasses.background} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.features?.title || "המאפיינים שלנו"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.features?.subtitle || "מה מייחד אותנו מהשאר"}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {finalContent.features?.items?.map((feature: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center hover:scale-105 transition-all duration-300`}>
                    <div className={`${styleClasses.icon} w-14 h-14 mx-auto mb-4 flex items-center justify-center text-white`}>
                      <span className="text-xl">{feature.icon}</span>
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
    </div>
  );
};
