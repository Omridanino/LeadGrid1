import { useState, useEffect } from "react";
import { StyleAwareSection } from "./StyleAwareSections";
import { generateRichContent } from "@/utils/contentGenerator";

interface ContentSectionsProps {
  content: any;
  currentColors: any;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  console.log("ContentSections - formData:", formData);
  console.log("ContentSections - selectedElements:", selectedElements);

  // Helper function to get style classes based on hero style
  const getStyleClasses = () => {
    if (!formData || !formData.heroStyle) {
      return {
        card: 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl',
        button: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
        icon: 'bg-gradient-to-r from-purple-500 to-pink-500 rounded-full',
        typography: 'font-bold'
      };
    }
    
    switch (formData.heroStyle) {
      case 'geometric':
        return {
          card: 'card-geometric',
          button: 'btn-geometric',
          icon: 'icon-geometric',
          typography: 'typography-modern'
        };
      case 'glass':
        return {
          card: 'card-liquid-glass',
          button: 'btn-liquid-glass',
          icon: 'icon-liquid-glass',
          typography: 'typography-liquid'
        };
      case 'metal':
        return {
          card: 'card-metal',
          button: 'btn-metal',
          icon: 'icon-metal',
          typography: 'typography-luxury'
        };
      case 'image':
        return {
          card: 'card-image-depth',
          button: 'btn-image-depth',
          icon: 'icon-image-depth',
          typography: 'typography-cinematic'
        };
      default:
        return {
          card: 'card-3d',
          button: 'btn-3d',
          icon: 'icon-3d',
          typography: 'typography-hero'
        };
    }
  };

  const styleClasses = getStyleClasses();

  // Generate rich content
  const richContent = generateRichContent(formData);
  const finalContent = content || richContent;

  // Get elements to show
  const elementsToShow = selectedElements && selectedElements.length > 0 
    ? selectedElements 
    : formData?.selectedElements || [];

  console.log("Elements to show FINAL:", elementsToShow);

  // If no elements selected, don't show anything
  if (!elementsToShow || elementsToShow.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Services Section */}
      {elementsToShow.includes('services') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="standard">
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
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white text-2xl`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    {service.features && (
                      <div className="space-y-2">
                        {service.features.map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="text-green-400">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* About Section */}
      {elementsToShow.includes('about') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="alternate">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className={`text-4xl md:text-6xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    {finalContent.about?.title || "אודותינו"}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {finalContent.about?.description}
                  </p>
                  
                  {finalContent.about?.values && (
                    <div className="space-y-6">
                      {finalContent.about.values.map((value: any, index: number) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`${styleClasses.icon} w-12 h-12 flex items-center justify-center text-white text-lg`}>
                            {value.icon}
                          </div>
                          <div>
                            <h4 className={`text-lg font-bold text-white mb-2 ${styleClasses.typography}`}>
                              {value.title}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`${styleClasses.card} p-8`}>
                  {finalContent.about?.team?.stats && (
                    <div className="text-center">
                      <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                        {finalContent.about.team.title}
                      </h3>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {finalContent.about.team.stats.map((stat: any, index: number) => (
                          <div key={index} className="text-center">
                            <div className={`text-3xl font-bold text-white mb-2 ${styleClasses.typography}`}>
                              {stat.number}
                            </div>
                            <div className="text-sm text-gray-300">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {finalContent.about.team.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Testimonials Section */}
      {elementsToShow.includes('testimonials') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="standard">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.testimonials?.title || "מה הלקוחות אומרים"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.testimonials?.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {finalContent.testimonials?.items?.map((testimonial: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-8 text-center h-full flex flex-col`}>
                    <div className="mb-4">
                      <span className="text-3xl text-yellow-400">
                        {'⭐'.repeat(testimonial.rating || 5)}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg flex-grow">
                      "{testimonial.text}"
                    </p>
                    {testimonial.project && (
                      <div className="mb-4 p-3 bg-white/5 rounded-lg">
                        <div className="text-sm text-gray-400 mb-1">פרויקט:</div>
                        <div className="text-white font-semibold">{testimonial.project}</div>
                        {testimonial.result && (
                          <>
                            <div className="text-sm text-gray-400 mb-1 mt-2">תוצאה:</div>
                            <div className="text-green-400 font-semibold">{testimonial.result}</div>
                          </>
                        )}
                      </div>
                    )}
                    <div className="mt-auto">
                      <div className={`${styleClasses.icon} w-12 h-12 mx-auto mb-3 flex items-center justify-center text-white`}>
                        <span className="text-lg">👤</span>
                      </div>
                      <h4 className={`font-bold text-white ${styleClasses.typography}`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                      {testimonial.company && (
                        <p className="text-gray-500 text-xs mt-1">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Process Section */}
      {elementsToShow.includes('process') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="alternate">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.process?.title || "התהליך שלנו"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.process?.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {finalContent.process?.steps?.map((step: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center relative h-full flex flex-col`}>
                    <div className="absolute -top-4 right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white text-2xl`}>
                      {step.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 text-white ${styleClasses.typography}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                      {step.description}
                    </p>
                    {step.duration && (
                      <div className="mt-auto">
                        <div className="text-xs text-gray-400 mb-1">משך זמן:</div>
                        <div className="text-white font-semibold text-sm">{step.duration}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Contact Section */}
      {elementsToShow.includes('contact') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="final">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {finalContent.contact?.title || "צרו קשר"}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  {finalContent.contact?.subtitle}
                </p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {finalContent.contact?.description}
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    פרטי יצירת קשר
                  </h3>
                  <div className="space-y-6">
                    {finalContent.contact?.contactMethods?.map((method: any, index: number) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`${styleClasses.icon} w-12 h-12 flex items-center justify-center text-white text-lg`}>
                          {method.icon}
                        </div>
                        <div>
                          <div className="text-white font-semibold mb-1">{method.type}</div>
                          <div className="text-gray-300 mb-1">{method.value}</div>
                          <div className="text-sm text-gray-400">{method.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${styleClasses.card} p-8`}>
                  <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                    {finalContent.contact?.cta?.primary || "בואו נתחיל"}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {finalContent.contact?.cta?.secondary}
                  </p>
                  {finalContent.contact?.cta?.benefits && (
                    <div className="space-y-3 mb-8">
                      {finalContent.contact.cta.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-green-400 text-lg">✓</span>
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <button className={`${styleClasses.button} w-full p-4 text-center text-white font-bold rounded-lg transition-all duration-300`}>
                    צרו קשר עכשיו
                  </button>
                </div>
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* FAQ Section */}
      {elementsToShow.includes('faq') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="standard">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                  {finalContent.faq?.title || "שאלות נפוצות"}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {finalContent.faq?.subtitle}
                </p>
              </div>
              <div className="space-y-6">
                {finalContent.faq?.items?.map((faq: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-8`}>
                    <h3 className={`text-xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      {faq.answer}
                    </p>
                    {faq.category && (
                      <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-gray-400">
                        {faq.category}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Features Section */}
      {elementsToShow.includes('features') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="alternate">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.features?.title || "המאפיינים שלנו"}
              </h2>
              <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                {finalContent.features?.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {finalContent.features?.items?.map((feature: any, index: number) => (
                  <div key={index} className={`${styleClasses.card} p-6 text-center hover:scale-105 transition-all duration-300 h-full flex flex-col`}>
                    <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-6 flex items-center justify-center text-white text-2xl`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <div className="space-y-2 mt-auto">
                        {feature.details.map((detail: string, detailIndex: number) => (
                          <div key={detailIndex} className="flex items-center gap-2 text-xs text-gray-400">
                            <span className="text-green-400">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Gallery Section */}
      {elementsToShow.includes('gallery') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="final">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                {finalContent.gallery?.title || "גלריה"}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                {finalContent.gallery?.subtitle}
              </p>
              <div className={`${styleClasses.card} p-12 mb-8`}>
                <div className={`${styleClasses.icon} w-24 h-24 mx-auto mb-8 flex items-center justify-center text-white text-4xl`}>
                  🖼️
                </div>
                <h3 className={`text-3xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                  גלריית עבודות מרשימה
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {finalContent.gallery?.description}
                </p>
                {finalContent.gallery?.categories && (
                  <div className="flex flex-wrap justify-center gap-4">
                    {finalContent.gallery.categories.map((category: string, index: number) => (
                      <div key={index} className="px-4 py-2 bg-white/10 rounded-full text-gray-300 text-sm">
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}
    </div>
  );
};
