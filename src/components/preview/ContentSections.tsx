
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { Phone, Mail, MapPin, Star, CheckCircle2, Users, Target, Image, Award, Zap, Cpu, Network, Rocket } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";

interface ContentSectionsProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  // Get appropriate card class based on hero style
  const getCardClass = () => {
    switch (formData.heroStyle) {
      case 'glass':
        return 'glass-card border-0';
      case 'metal':
        return 'metal-card border-0';
      case 'geometric':
        return 'geometric-card border-0';
      default:
        return 'bg-gray-800/60 border-gray-600 tech-glow hover:bg-gray-700/70 transition-all duration-300';
    }
  };

  // Get appropriate section background
  const getSectionStyle = () => {
    switch (formData.heroStyle) {
      case 'glass':
        return 'glass-morphism';
      case 'metal':
        return 'metal-texture';
      case 'geometric':
        return 'geometric-hero';
      default:
        return 'matrix-bg';
    }
  };

  // Get appropriate button component
  const renderButton = (text: string, className?: string) => {
    const baseClass = "text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 enhanced-button";
    
    if (formData.heroStyle === 'glass') {
      return (
        <LiquidButton 
          size="lg" 
          className={`${baseClass} ${className || ''}`}
          style={{ 
            backgroundColor: currentColors.primary,
            color: 'white',
            fontWeight: '600'
          }}
        >
          {text}
        </LiquidButton>
      );
    } else if (formData.heroStyle === 'metal') {
      return (
        <MetalButton 
          variant="primary"
          className={`${baseClass} ${className || ''}`}
          style={{ fontWeight: '600' }}
        >
          {text}
        </MetalButton>
      );
    }

    return (
      <Button 
        size="lg" 
        className={`${baseClass} shadow-lg hover:shadow-xl tech-glow ${className || ''}`}
        style={{ 
          backgroundColor: currentColors.primary,
          color: 'white',
          fontWeight: '600'
        }}
      >
        {text}
      </Button>
    );
  };

  return (
    <>
      {/* Emotional Section */}
      {content?.sections?.emotionalSection && (
        <section className={`py-24 px-6 ${getSectionStyle()}`}>
          <div className="container mx-auto text-center max-w-6xl">
            <h2 className={`text-5xl md:text-6xl font-bold mb-12 ${
              formData.heroStyle === 'metal' ? 'metal-text' : 
              formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
            }`} style={{ color: currentColors.featuresColor }}>
              {content.sections.emotionalSection.title}
            </h2>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed" 
               style={{ color: currentColors.featuresTextColor }}>
              {content.sections.emotionalSection.content}
            </p>
          </div>
        </section>
      )}

      {/* Why Us Section */}
      {content?.sections?.whyUs && (
        <section className={`py-24 px-6 ${getSectionStyle()}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
              formData.heroStyle === 'metal' ? 'metal-text' : 
              formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
            }`} style={{ color: currentColors.featuresColor }}>
              {content.sections.whyUs.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.sections.whyUs.reasons?.map((reason: any, index: number) => (
                <Card key={index} className={`${getCardClass()} hover:scale-105 transition-all duration-300`}>
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center tech-glow floating-animation" 
                         style={{ backgroundColor: currentColors.primary }}>
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: currentColors.featuresColor }}>
                      {reason.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: currentColors.featuresTextColor }}>
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Give Section */}
      {content?.sections?.whatWeGive && (
        <section className={`py-24 px-6 ${getSectionStyle()}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
              formData.heroStyle === 'metal' ? 'metal-text' : 
              formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
            }`} style={{ color: currentColors.featuresColor }}>
              {content.sections.whatWeGive.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.sections.whatWeGive.services?.map((service: any, index: number) => (
                <Card key={index} className={`${getCardClass()} hover:scale-105 transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <CheckCircle2 className="w-8 h-8 flex-shrink-0" style={{ color: currentColors.primary }} />
                      <h3 className="text-xl font-semibold" style={{ color: currentColors.featuresColor }}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed" style={{ color: currentColors.featuresTextColor }}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {selectedElements.includes('gallery') && (
        <section className={`py-24 px-6 ${getSectionStyle()}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
              formData.heroStyle === 'metal' ? 'metal-text' : 
              formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
            }`} style={{ color: currentColors.featuresColor }}>
              <Image className="w-12 h-12 inline-block ml-4" />
              {content?.sections?.gallery?.title || 'גלריית העבודות שלנו'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content?.sections?.gallery?.images?.filter((img: any) => img?.url).map((galleryImage: any, index: number) => (
                <div key={index} className="relative group overflow-hidden rounded-xl aspect-square tech-glow hover:scale-105 transition-all duration-300">
                  <img 
                    src={galleryImage.url}
                    alt={galleryImage.description || `עבודה ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg">{galleryImage.description || `עבודה ${index + 1}`}</p>
                  </div>
                </div>
              )) || (
                <div className="col-span-3 text-center py-16">
                  <Image className="w-20 h-20 mx-auto mb-6 text-gray-500" />
                  <p className="text-gray-400 text-xl">עדיין לא הועלו תמונות לגלריה</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Process Section */}
      {selectedElements.includes('process') && (
        <section className={`py-24 px-6 ${getSectionStyle()}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
              formData.heroStyle === 'metal' ? 'metal-text' : 
              formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
            }`} style={{ color: currentColors.featuresColor }}>
              <Cpu className="w-12 h-12 inline-block ml-4" />
              תהליך העבודה הטכנולוגי שלנו
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, title: "ניתוח חכם", desc: "ניתוח מתקדם של הצרכים באמצעות AI", icon: <Zap className="w-10 h-10" /> },
                { step: 2, title: "תכנון דיגיטלי", desc: "עיצוב מתקדם באמצעות כלים טכנולוגיים", icon: <Cpu className="w-10 h-10" /> },
                { step: 3, title: "פיתוח חכם", desc: "יישום מתקדם עם טכנולוגיות חדישות", icon: <Network className="w-10 h-10" /> },
                { step: 4, title: "השקה חדשנית", desc: "הטמעה חכמה ומעקב בזמן אמת", icon: <Rocket className="w-10 h-10" /> }
              ].map((process, index) => (
                <Card key={index} className={`${getCardClass()} text-center hover:scale-105 transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div 
                      className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center tech-glow floating-animation"
                      style={{ backgroundColor: currentColors.primary }}
                    >
                      <div className="text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div 
                      className="text-4xl font-bold mb-4"
                      style={{ color: currentColors.primary }}
                    >
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: currentColors.featuresColor }}>
                      {process.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: currentColors.featuresTextColor }}>
                      {process.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {selectedElements.includes('about') && (
        <section className={`py-24 px-6 ${getSectionStyle()}`}>
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${
                  formData.heroStyle === 'metal' ? 'metal-text' : 
                  formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
                }`} style={{ color: currentColors.aboutColor }}>
                  <Users className="w-12 h-12 inline-block ml-4" />
                  קצת עלינו
                </h2>
                <p className="text-xl mb-8 leading-relaxed" style={{ color: currentColors.aboutTextColor }}>
                  אנחנו צוות מקצועי עם ניסיון של מעל 10 שנים בתחום. אנו מתמחים בפתרונות יצירתיים ומותאמים אישית לכל לקוח.
                </p>
                <p className="text-xl leading-relaxed" style={{ color: currentColors.aboutTextColor }}>
                  המטרה שלנו היא לספק שירות ברמה הגבוהה ביותר ולהבטיח שביעות רצון מלאה של הלקוחות שלנו.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="הצוות שלנו"
                  className="rounded-2xl shadow-lg tech-glow hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {content?.sections?.testimonials && content.sections.testimonials.some((t: any) => t.name && t.content) && (
        <section className={`py-24 px-6 ${getSectionStyle()}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center ${
              formData.heroStyle === 'metal' ? 'metal-text' : 
              formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
            }`} style={{ color: currentColors.featuresColor }}>
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.sections.testimonials.filter((t: any) => t.name && t.content).map((testimonial: any, index: number) => (
                <Card key={index} className={`${getCardClass()} hover:scale-105 transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-6 italic text-lg leading-relaxed" style={{ color: currentColors.featuresTextColor }}>
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center">
                        <Users className="w-7 h-7 text-gray-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg" style={{ color: currentColors.featuresColor }}>
                          {testimonial.name}
                        </p>
                        {testimonial.role && (
                          <p className="text-sm" style={{ color: currentColors.featuresTextColor }}>
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className={`py-24 px-6 ${getSectionStyle()}`}>
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className={`text-5xl md:text-6xl font-bold mb-12 ${
            formData.heroStyle === 'metal' ? 'metal-text' : 
            formData.heroStyle === 'glass' ? 'glass-text' : 'tech-title'
          }`} style={{ color: currentColors.contactColor }}>
            {content?.contactTitle || 'בואו נתחיל לעבוד יחד'}
          </h2>
          <div className="max-w-md mx-auto space-y-6 mb-12">
            <div className="flex items-center gap-4 justify-center text-xl">
              <Phone className="w-6 h-6" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>050-1234567</span>
            </div>
            <div className="flex items-center gap-4 justify-center text-xl">
              <Mail className="w-6 h-6" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>info@business.co.il</span>
            </div>
            <div className="flex items-center gap-4 justify-center text-xl">
              <MapPin className="w-6 h-6" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>תל אביב, ישראל</span>
            </div>
          </div>
          <div className="mt-12">
            {renderButton('צור קשר עכשיו')}
          </div>
        </div>
      </section>
    </>
  );
};
