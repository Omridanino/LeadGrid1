
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

  // Use selectedElements from formData if available, or show all sections if content exists
  const elementsToShow = selectedElements && selectedElements.length > 0 
    ? selectedElements 
    : content ? Object.keys(content).filter(key => key !== 'businessInfo' && key !== 'headline' && key !== 'subheadline' && key !== 'cta')
    : [];

  console.log("Elements to show:", elementsToShow);

  // If no content, don't render anything
  if (!content) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">טוען תוכן...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Services Section */}
      {elementsToShow.includes('services') && content?.services && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {content.services.title}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {content.services.subtitle}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {content.services.items?.map((service: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-8 text-center hover:scale-105 transition-all duration-300`}>
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
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
      {elementsToShow.includes('about') && content?.about && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    {content.about.title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {content.about.description}
                  </p>
                  <div className="space-y-4">
                    {content.about.highlights?.map((highlight: string, index: number) => (
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
                    <div className={`${styleClasses.icon} w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      למה לבחור בנו?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {content.about.whyChooseUs}
                    </p>
                    {content.about.vision && (
                      <div className="mt-6 pt-6 border-t border-gray-600">
                        <h4 className={`text-lg font-bold mb-2 text-white ${styleClasses.typography}`}>
                          החזון שלנו
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {content.about.vision}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {elementsToShow.includes('features') && content?.features && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {content.features.title}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {content.features.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.features.items?.map((feature: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center hover:scale-105 transition-all duration-300`}>
                    <div className={`${styleClasses.icon} w-14 h-14 mx-auto mb-4 flex items-center justify-center`}>
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

      {/* Benefits Section */}
      {elementsToShow.includes('benefits') && content?.benefits && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {content.benefits.title}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {content.benefits.subtitle}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {content.benefits.items?.map((benefit: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-8 text-right`}>
                    <div className="flex items-start gap-4">
                      <div className={`${styleClasses.icon} w-12 h-12 flex-shrink-0 flex items-center justify-center`}>
                        <span className="text-lg">{benefit.icon}</span>
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
      {elementsToShow.includes('testimonials') && content?.testimonials && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {content.testimonials.title}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {content.testimonials.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.testimonials.items?.map((testimonial: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center`}>
                    <div className="mb-4">
                      <span className="text-3xl text-yellow-400">
                        {'⭐'.repeat(testimonial.rating || 5)}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className={`${styleClasses.icon} w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
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

      {/* Process Section */}
      {elementsToShow.includes('process') && content?.process && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {content.process.title}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {content.process.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.process.steps?.map((step: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center relative`}>
                    <div className="absolute -top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
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
      {elementsToShow.includes('faq') && content?.faq && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {content.faq.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {content.faq.subtitle}
                </p>
              </div>
              <div className="space-y-6">
                {content.faq.items?.map((faq: any, index: number) => (
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
      {elementsToShow.includes('gallery') && content?.gallery && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {content.gallery.title}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {content.gallery.subtitle}
              </p>
              <div className={`${styleClasses.card} p-8`}>
                <div className={`${styleClasses.icon} w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                  <span className="text-4xl">🖼️</span>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  גלריית עבודות
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {content.gallery.description || "בקרוב תוכלו לראות כאן דוגמאות מעבודות שביצענו"}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {elementsToShow.includes('contact') && content?.contact && (
        <section className={`section-standard ${styleClasses.background}`} style={getSectionStyle()}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {content.contact.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {content.contact.subtitle}
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    פרטי יצירת קשר
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10 flex items-center justify-center`}>
                        <span>📞</span>
                      </div>
                      <span className="text-gray-300">050-1234567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10 flex items-center justify-center`}>
                        <span>✉️</span>
                      </div>
                      <span className="text-gray-300">info@business.co.il</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`${styleClasses.icon} w-10 h-10 flex items-center justify-center`}>
                        <span>📍</span>
                      </div>
                      <span className="text-gray-300">תל אביב, ישראל</span>
                    </div>
                  </div>
                </div>
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    בואו נתחיל
                  </h3>
                  <div className="space-y-4">
                    <button className={`${styleClasses.button} w-full p-4 text-center text-white font-bold rounded-lg transition-all duration-300`}>
                      {content.contact.cta}
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
