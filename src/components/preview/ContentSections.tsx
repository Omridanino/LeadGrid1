
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
        return 'geometric-card';
      default:
        return 'bg-gray-800/50 border-gray-700 tech-glow';
    }
  };

  // Get appropriate button component
  const renderButton = (text: string, className?: string) => {
    const baseClass = "text-lg px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105";
    
    if (formData.heroStyle === 'glass') {
      return (
        <LiquidButton 
          size="lg" 
          className={`${baseClass} ${className || ''}`}
          style={{ 
            backgroundColor: currentColors.primary,
            color: 'white'
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
          color: 'white'
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
        <section 
          className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
          style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
        >
          <div className="container mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-8 ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.featuresColor }}>
              {content.sections.emotionalSection.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: currentColors.featuresTextColor }}>
              {content.sections.emotionalSection.content}
            </p>
          </div>
        </section>
      )}

      {/* Why Us Section */}
      {content?.sections?.whyUs && (
        <section 
          className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
          style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
        >
          <div className="container mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.featuresColor }}>
              {content.sections.whyUs.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.sections.whyUs.reasons?.map((reason: any, index: number) => (
                <Card key={index} className={`${getCardClass()} hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center tech-glow" style={{ backgroundColor: currentColors.primary }}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: currentColors.featuresColor }}>
                      {reason.title}
                    </h3>
                    <p style={{ color: currentColors.featuresTextColor }}>
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
        <section 
          className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
          style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
        >
          <div className="container mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.featuresColor }}>
              {content.sections.whatWeGive.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.sections.whatWeGive.services?.map((service: any, index: number) => (
                <Card key={index} className={`${getCardClass()} hover:bg-gray-700/50 transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-6 h-6" style={{ color: currentColors.primary }} />
                      <h3 className="text-lg font-semibold" style={{ color: currentColors.featuresColor }}>
                        {service.title}
                      </h3>
                    </div>
                    <p style={{ color: currentColors.featuresTextColor }}>
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
        <section 
          className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
          style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
        >
          <div className="container mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.featuresColor }}>
              <Image className="w-8 h-8 inline-block mr-3" />
              {content?.sections?.gallery?.title || 'גלריית העבודות שלנו'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {content?.sections?.gallery?.images?.filter((img: any) => img?.url).map((galleryImage: any, index: number) => (
                <div key={index} className="relative group overflow-hidden rounded-lg aspect-square tech-glow">
                  <img 
                    src={galleryImage.url}
                    alt={galleryImage.description || `עבודה ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold">{galleryImage.description || `עבודה ${index + 1}`}</p>
                  </div>
                </div>
              )) || (
                <div className="col-span-3 text-center py-12">
                  <Image className="w-16 h-16 mx-auto mb-4 text-gray-500" />
                  <p className="text-gray-400">עדיין לא הועלו תמונות לגלריה</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Process Section */}
      {selectedElements.includes('process') && (
        <section 
          className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
          style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
        >
          <div className="container mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.featuresColor }}>
              <Cpu className="w-8 h-8 inline-block mr-3" />
              תהליך העבודה הטכנולוגי שלנו
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "ניתוח חכם", desc: "ניתוח מתקדם של הצרכים באמצעות AI", icon: <Zap className="w-8 h-8" /> },
                { step: 2, title: "תכנון דיגיטלי", desc: "עיצוב מתקדם באמצעות כלים טכנולוגיים", icon: <Cpu className="w-8 h-8" /> },
                { step: 3, title: "פיתוח חכם", desc: "יישום מתקדם עם טכנולוגיות חדישות", icon: <Network className="w-8 h-8" /> },
                { step: 4, title: "השקה חדשנית", desc: "הטמעה חכמה ומעקב בזמן אמת", icon: <Rocket className="w-8 h-8" /> }
              ].map((process, index) => (
                <Card key={index} className={`${getCardClass()} text-center`}>
                  <CardContent className="p-6">
                    <div 
                      className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center tech-glow"
                      style={{ backgroundColor: currentColors.primary }}
                    >
                      <div className="text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: currentColors.primary }}
                    >
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: currentColors.featuresColor }}>
                      {process.title}
                    </h3>
                    <p style={{ color: currentColors.featuresTextColor }}>
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
        <section 
          className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
          style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
        >
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-4xl font-bold mb-6 ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.aboutColor }}>
                  <Users className="w-8 h-8 inline-block mr-3" />
                  קצת עלינו
                </h2>
                <p className="text-lg mb-6" style={{ color: currentColors.aboutTextColor }}>
                  אנחנו צוות מקצועי עם ניסיון של מעל 10 שנים בתחום. אנו מתמחים בפתרונות יצירתיים ומותאמים אישית לכל לקוח.
                </p>
                <p className="text-lg" style={{ color: currentColors.aboutTextColor }}>
                  המטרה שלנו היא לספק שירות ברמה הגבוהה ביותר ולהבטיח שביעות רצון מלאה של הלקוחות שלנו.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="הצוות שלנו"
                  className="rounded-lg shadow-lg tech-glow"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {content?.sections?.testimonials && content.sections.testimonials.some((t: any) => t.name && t.content) && (
        <section 
          className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
          style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
        >
          <div className="container mx-auto">
            <h2 className={`text-4xl font-bold mb-12 text-center ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.featuresColor }}>
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.sections.testimonials.filter((t: any) => t.name && t.content).map((testimonial: any, index: number) => (
                <Card key={index} className={getCardClass()}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 italic" style={{ color: currentColors.featuresTextColor }}>
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-300" />
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: currentColors.featuresColor }}>
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
      <section 
        className={`py-20 px-4 ${formData.heroStyle === 'glass' ? 'glass-morphism' : formData.heroStyle === 'metal' ? 'metal-texture' : ''}`}
        style={{ backgroundColor: formData.heroStyle === 'glass' || formData.heroStyle === 'metal' ? 'transparent' : currentColors.background }}
      >
        <div className="container mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-8 ${formData.heroStyle === 'metal' ? 'metal-text' : formData.heroStyle === 'glass' ? 'glass-text' : ''}`} style={{ color: currentColors.contactColor }}>
            {content?.contactTitle || 'בואו נתחיל לעבוד יחד'}
          </h2>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <Phone className="w-5 h-5" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>050-1234567</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-5 h-5" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>info@business.co.il</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="w-5 h-5" style={{ color: currentColors.primary }} />
              <span style={{ color: currentColors.contactTextColor }}>תל אביב, ישראל</span>
            </div>
          </div>
          <div className="mt-8">
            {renderButton('צור קשר עכשיו')}
          </div>
        </div>
      </section>
    </>
  );
};
