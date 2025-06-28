
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

  // Generate rich content
  const richContent = generateRichContent(formData);
  const finalContent = content || richContent;

  // Get elements to show
  const elementsToShow = selectedElements && selectedElements.length > 0 
    ? selectedElements 
    : formData?.selectedElements || [];

  console.log("Elements to show FINAL:", elementsToShow);

  // If no elements selected, show all elements for demo
  const defaultElements = ['services', 'about', 'testimonials', 'process', 'faq', 'features', 'gallery', 'contact'];
  const finalElementsToShow = elementsToShow.length > 0 ? elementsToShow : defaultElements;

  // Helper function to get style classes based on hero style
  const getStyleClasses = () => {
    if (!formData || !formData.heroStyle) {
      return {
        card: 'backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl bg-gradient-to-br from-white/15 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-500',
        button: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl text-white font-bold px-8 py-4 transition-all duration-300 hover:scale-105',
        icon: 'backdrop-blur-xl border border-white/30 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 shadow-2xl p-4',
        typography: 'font-black text-white text-shadow-lg',
        textShadow: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))'
      };
    }
    
    switch (formData.heroStyle) {
      case 'geometric':
        return {
          card: 'backdrop-blur-lg border border-red-500/50 rounded-2xl bg-gradient-to-br from-red-900/30 to-teal-900/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 geometric-card',
          button: 'bg-gradient-to-r from-red-600 to-teal-600 hover:from-red-700 hover:to-teal-700 rounded-xl shadow-2xl text-white font-bold px-8 py-4 transition-all duration-300 hover:scale-105',
          icon: 'bg-gradient-to-r from-red-500/30 to-teal-500/30 rounded-xl border border-red-500/50 p-4 shadow-xl',
          typography: 'font-bold text-white geometric-text',
          textShadow: 'drop-shadow(0 0 15px rgba(239,68,68,0.7))'
        };
        
      case 'glass':
        return {
          card: 'backdrop-blur-3xl border border-white/40 rounded-3xl shadow-2xl bg-gradient-to-br from-white/20 to-white/5 hover:from-white/25 hover:to-white/10 transition-all duration-500 liquid-glass-card',
          button: 'backdrop-blur-lg border border-white/40 rounded-2xl shadow-2xl bg-gradient-to-r from-purple-500/90 to-pink-500/90 hover:from-purple-600/95 hover:to-pink-600/95 text-white font-bold px-8 py-4 transition-all duration-300 hover:scale-105',
          icon: 'backdrop-blur-xl border border-white/40 rounded-2xl bg-gradient-to-br from-white/25 to-white/10 shadow-2xl p-4',
          typography: 'font-black text-white liquid-glass-text',
          textShadow: 'drop-shadow(0 0 25px rgba(255,255,255,0.4))'
        };
        
      case 'metal':
        return {
          card: 'backdrop-blur-lg border border-yellow-500/50 rounded-2xl bg-gradient-to-br from-yellow-900/40 to-orange-900/40 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 metal-card',
          button: 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-xl shadow-2xl text-white font-bold px-8 py-4 transition-all duration-300 hover:scale-105',
          icon: 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-xl border border-yellow-500/50 p-4 shadow-xl',
          typography: 'font-bold text-white metal-text',
          textShadow: 'drop-shadow(0 0 15px rgba(251,191,36,0.7))'
        };
        
      case 'image':
        return {
          card: 'backdrop-blur-lg border border-purple-500/50 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 image-depth-card',
          button: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl shadow-2xl text-white font-bold px-8 py-4 transition-all duration-300 hover:scale-105',
          icon: 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl border border-purple-500/50 p-4 shadow-xl',
          typography: 'font-bold text-white image-depth-text',
          textShadow: 'drop-shadow(0 0 15px rgba(147,51,234,0.7))'
        };
        
      default:
        return {
          card: 'backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl bg-gradient-to-br from-white/15 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-500',
          button: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 backdrop-blur-sm border border-white/30 rounded-2xl shadow-2xl text-white font-bold px-8 py-4 transition-all duration-300 hover:scale-105',
          icon: 'backdrop-blur-xl border border-white/30 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 shadow-2xl p-4',
          typography: 'font-black text-white text-shadow-lg',
          textShadow: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))'
        };
    }
  };

  const styleClasses = getStyleClasses();

  const StyledCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`${styleClasses.card} ${className} p-10 m-4`}>
      {/* Glass reflection effect for applicable styles */}
      {(formData?.heroStyle === 'glass' || !formData?.heroStyle) && (
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.5) 0%,
              transparent 25%,
              transparent 75%,
              rgba(255, 255, 255, 0.2) 100%)`,
          }}
        />
      )}
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Services Section */}
      {finalElementsToShow.includes('services') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="standard">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                  style={{ textShadow: styleClasses.textShadow }}>
                {finalContent.services?.title || "השירותים המקצועיים שלנו"}
              </h2>
              <p className={`text-2xl text-gray-200 mb-20 max-w-4xl mx-auto leading-relaxed ${styleClasses.typography}`}>
                {finalContent.services?.subtitle || "פתרונות מותאמים אישית שיעזרו לכם להגיע להצלחה"}
              </p>
              <div className="grid md:grid-cols-3 gap-10">
                {finalContent.services?.items?.map((service: any, index: number) => (
                  <StyledCard key={index} className="text-center hover:scale-110 transition-all duration-500 min-h-[400px] flex flex-col">
                    <div className={`${styleClasses.icon} w-24 h-24 mx-auto mb-8 flex items-center justify-center text-white text-4xl`}>
                      <span className="text-5xl">{service.icon}</span>
                    </div>
                    <h3 className={`text-3xl mb-6 text-white ${styleClasses.typography}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed mb-8 text-lg flex-grow">
                      {service.description}
                    </p>
                    {service.features && (
                      <div className="space-y-4 mt-auto">
                        {service.features.map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-gray-200">
                            <span className="text-green-400 text-xl">✓</span>
                            <span className="text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </StyledCard>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* About Section */}
      {finalElementsToShow.includes('about') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="alternate">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                      style={{ textShadow: styleClasses.textShadow }}>
                    {finalContent.about?.title || "הסיפור שלנו"}
                  </h2>
                  <p className="text-2xl text-gray-200 mb-10 leading-relaxed">
                    {finalContent.about?.description}
                  </p>
                  
                  {finalContent.about?.values && (
                    <div className="space-y-8">
                      {finalContent.about.values.map((value: any, index: number) => (
                        <div key={index} className="flex items-start gap-6">
                          <div className={`${styleClasses.icon} w-16 h-16 flex items-center justify-center text-white text-2xl`}>
                            <span className="text-3xl">{value.icon}</span>
                          </div>
                          <div>
                            <h4 className={`text-2xl mb-3 text-white ${styleClasses.typography}`}>
                              {value.title}
                            </h4>
                            <p className="text-gray-200 leading-relaxed text-lg">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <StyledCard className="min-h-[400px]">
                  {finalContent.about?.team?.stats && (
                    <div className="text-center">
                      <h3 className={`text-3xl mb-8 text-white ${styleClasses.typography}`}>
                        {finalContent.about.team.title}
                      </h3>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {finalContent.about.team.stats.map((stat: any, index: number) => (
                          <div key={index} className="text-center">
                            <div className={`text-5xl mb-3 text-white ${styleClasses.typography}`}>
                              {stat.number}
                            </div>
                            <div className="text-lg text-gray-200">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-200 leading-relaxed text-lg">
                        {finalContent.about.team.description}
                      </p>
                    </div>
                  )}
                </StyledCard>
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Testimonials Section */}
      {finalElementsToShow.includes('testimonials') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="standard">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                  style={{ textShadow: styleClasses.textShadow }}>
                {finalContent.testimonials?.title || "לקוחות מספרים"}
              </h2>
              <p className="text-2xl text-gray-200 mb-20 max-w-4xl mx-auto leading-relaxed">
                {finalContent.testimonials?.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {finalContent.testimonials?.items?.map((testimonial: any, index: number) => (
                  <StyledCard key={index} className="text-center h-full flex flex-col min-h-[500px]">
                    <div className="mb-6">
                      <div className="text-5xl mb-4">
                        {'⭐'.repeat(testimonial.rating || 5)}
                      </div>
                    </div>
                    <p className="text-gray-200 mb-8 leading-relaxed text-xl flex-grow font-medium">
                      "{testimonial.text}"
                    </p>
                    {testimonial.project && (
                      <div className="mb-6 p-4 bg-white/10 rounded-xl">
                        <div className="text-gray-300 mb-2 font-semibold">פרויקט:</div>
                        <div className="text-white font-semibold text-lg">{testimonial.project}</div>
                        {testimonial.result && (
                          <>
                            <div className="text-gray-300 mb-2 mt-3 font-semibold">תוצאה:</div>
                            <div className="text-green-400 font-semibold text-lg">{testimonial.result}</div>
                          </>
                        )}
                      </div>
                    )}
                    <div className="mt-auto">
                      <div className={`${styleClasses.icon} w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white`}>
                        <span className="text-3xl">👤</span>
                      </div>
                      <h4 className={`text-white text-xl ${styleClasses.typography} mb-2`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-300 font-medium">
                        {testimonial.role}
                      </p>
                      {testimonial.company && (
                        <p className="text-gray-400 text-sm mt-1">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </StyledCard>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Process Section */}
      {finalElementsToShow.includes('process') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="alternate">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                  style={{ textShadow: styleClasses.textShadow }}>
                {finalContent.process?.title || "איך אנחנו עובדים"}
              </h2>
              <p className="text-2xl text-gray-200 mb-20 max-w-4xl mx-auto leading-relaxed">
                {finalContent.process?.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {finalContent.process?.steps?.map((step: any, index: number) => (
                  <StyledCard key={index} className="text-center relative h-full flex flex-col min-h-[350px]">
                    <div className={`absolute -top-6 right-6 w-12 h-12 ${styleClasses.button} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl`}>
                      {step.number}
                    </div>
                    <div className={`${styleClasses.icon} w-20 h-20 mx-auto mb-8 flex items-center justify-center text-white text-3xl`}>
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-white ${styleClasses.typography}`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed mb-6 flex-grow text-lg">
                      {step.description}
                    </p>
                    {step.duration && (
                      <div className="mt-auto">
                        <div className="text-gray-300 mb-2 font-semibold">משך זמן:</div>
                        <div className="text-white font-semibold text-lg">{step.duration}</div>
                      </div>
                    )}
                  </StyledCard>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* FAQ Section */}
      {finalElementsToShow.includes('faq') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="standard">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                    style={{ textShadow: styleClasses.textShadow }}>
                  {finalContent.faq?.title || "שאלות ותשובות"}
                </h2>
                <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  {finalContent.faq?.subtitle}
                </p>
              </div>
              <div className="space-y-8">
                {finalContent.faq?.items?.map((faq: any, index: number) => (
                  <StyledCard key={index} className="min-h-[150px]">
                    <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                      ❓ {faq.question}
                    </h3>
                    <p className="text-gray-200 leading-relaxed mb-4 text-lg">
                      {faq.answer}
                    </p>
                    {faq.category && (
                      <div className="inline-block px-4 py-2 bg-white/15 rounded-full text-gray-300 font-medium">
                        🏷️ {faq.category}
                      </div>
                    )}
                  </StyledCard>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Features Section */}
      {finalElementsToShow.includes('features') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="alternate">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                  style={{ textShadow: styleClasses.textShadow }}>
                {finalContent.features?.title || "למה דווקא אנחנו"}
              </h2>
              <p className="text-2xl text-gray-200 mb-20 max-w-4xl mx-auto leading-relaxed">
                {finalContent.features?.subtitle}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {finalContent.features?.items?.map((feature: any, index: number) => (
                  <StyledCard key={index} className="text-center hover:scale-110 transition-all duration-500 h-full flex flex-col min-h-[350px]">
                    <div className={`${styleClasses.icon} w-20 h-20 mx-auto mb-8 flex items-center justify-center text-white text-3xl`}>
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <h3 className={`text-2xl font-bold mb-6 text-white ${styleClasses.typography}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 mb-8 flex-grow leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    {feature.details && (
                      <div className="space-y-3 mt-auto">
                        {feature.details.map((detail: string, detailIndex: number) => (
                          <div key={detailIndex} className="flex items-center gap-3 text-gray-200">
                            <span className="text-green-400 text-lg">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </StyledCard>
                ))}
              </div>
            </div>
          </div>
        </StyleAwareSection>
      )}

      {/* Gallery Section */}
      {finalElementsToShow.includes('gallery') && (
        <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="final">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                  style={{ textShadow: styleClasses.textShadow }}>
                {finalContent.gallery?.title || "הגלריה שלנו"}
              </h2>
              <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                {finalContent.gallery?.subtitle}
              </p>
              <StyledCard className="mb-12 min-h-[300px] flex flex-col justify-center">
                <div className={`${styleClasses.icon} w-32 h-32 mx-auto mb-10 flex items-center justify-center text-white text-5xl`}>
                  <span className="text-6xl">🖼️</span>
                </div>
                <h3 className={`text-4xl font-bold mb-8 text-white ${styleClasses.typography}`}>
                  פורטפוליו מרשים של עבודות
                </h3>
                <p className="text-gray-200 leading-relaxed mb-10 text-xl">
                  {finalContent.gallery?.description}
                </p>
                {finalContent.gallery?.categories && (
                  <div className="flex flex-wrap justify-center gap-6">
                    {finalContent.gallery.categories.map((category: string, index: number) => (
                      <div key={index} className="px-6 py-3 bg-white/15 rounded-full text-gray-200 text-lg font-medium">
                        📂 {category}
                      </div>
                    ))}
                  </div>
                )}
              </StyledCard>
            </div>
          </div>
        </StyleAwareSection>
      )}
    
    {/* Contact Section */}
    {finalElementsToShow.includes('contact') && (
      <StyleAwareSection heroStyle={formData?.heroStyle || 'default'} sectionType="final">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`text-5xl md:text-7xl mb-8 text-white ${styleClasses.typography}`}
                  style={{ textShadow: styleClasses.textShadow }}>
                {finalContent.contact?.title || "בואו נתחיל לעבוד יחד"}
              </h2>
              <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
                {finalContent.contact?.subtitle}
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {finalContent.contact?.description}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <StyledCard className="min-h-[400px]">
                <h3 className={`text-3xl mb-8 text-white ${styleClasses.typography}`}>
                  📞 דרכי יצירת קשר
                </h3>
                <div className="space-y-8">
                  {finalContent.contact?.contactMethods?.map((method: any, index: number) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className={`${styleClasses.icon} w-16 h-16 flex items-center justify-center text-white text-2xl`}>
                        <span className="text-3xl">{method.icon}</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-2 text-xl">{method.type}</div>
                        <div className="text-gray-200 mb-2 text-lg font-medium">{method.value}</div>
                        <div className="text-gray-300">{method.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </StyledCard>
              <StyledCard className="min-h-[400px]">
                <h3 className={`text-3xl mb-8 text-white ${styleClasses.typography}`}>
                  🚀 {finalContent.contact?.cta?.primary || "התחילו עכשיו"}
                </h3>
                <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                  {finalContent.contact?.cta?.secondary}
                </p>
                {finalContent.contact?.cta?.benefits && (
                  <div className="space-y-4 mb-10">
                    {finalContent.contact.cta.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-green-400 text-2xl">✓</span>
                        <span className="text-gray-200 text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
                <button className={`${styleClasses.button} w-full p-6 text-center text-xl transition-all duration-300 hover:shadow-2xl`}>
                  📧 צרו קשר עכשיו
                </button>
              </StyledCard>
            </div>
          </div>
        </div>
      </StyleAwareSection>
    )}
    </div>
  );
};
