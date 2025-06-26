import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { Phone, Mail, MapPin, Star, CheckCircle2, Users, Target, Image, Award, Zap, Cpu, Network, Rocket, ArrowLeft, Quote, Shield, Clock, ThumbsUp, TrendingUp } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";

interface ContentSectionsProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  const renderButton = (text: string, className?: string, isSecondary?: boolean) => {
    const baseClass = `${isSecondary ? 'btn-secondary' : 'btn-primary'} inline-flex items-center gap-3 ${className || ''}`;
    
    if (formData.heroStyle === 'glass') {
      return (
        <LiquidButton 
          size="lg" 
          className={baseClass}
          style={{ 
            backgroundColor: isSecondary ? 'transparent' : currentColors.primary,
            color: 'white',
            fontWeight: '600'
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          {text}
        </LiquidButton>
      );
    } else if (formData.heroStyle === 'metal') {
      return (
        <MetalButton 
          variant={isSecondary ? "default" : "primary"}
          className={baseClass}
          style={{ fontWeight: '600' }}
        >
          <ArrowLeft className="w-5 h-5" />
          {text}
        </MetalButton>
      );
    }

    return (
      <button 
        className={baseClass}
        style={{ 
          backgroundColor: isSecondary ? 'transparent' : currentColors.primary,
          fontWeight: '600'
        }}
      >
        <ArrowLeft className="w-5 h-5" />
        {text}
      </button>
    );
  };

  return (
    <>
      {/* Value Proposition Section */}
      {content?.sections?.emotionalSection && (
        <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="container mx-auto text-center max-w-6xl">
            <div className="animate-fade-in-up">
              <h2 className="typography-display text-5xl md:text-7xl font-black mb-8 text-white">
                {content.sections.emotionalSection.title}
              </h2>
              <p className="typography-body text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-200 glass-card-dark p-8 rounded-3xl">
                {content.sections.emotionalSection.content}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {content?.sections?.whyUs && (
        <section className="section-padding bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="typography-display text-5xl md:text-6xl font-black mb-6 text-white">
                {content.sections.whyUs.title}
              </h2>
              <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
                הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
              </p>
            </div>
            
            <div className="grid-professional">
              {content.sections.whyUs.reasons?.map((reason: any, index: number) => (
                <div key={index} className="glass-card p-8 text-center animate-scale-in hover:scale-105 transition-all duration-300"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="icon-wrapper mx-auto mb-6" 
                       style={{ background: currentColors.primary }}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="typography-heading text-2xl font-bold mb-4 text-white">
                    {reason.title}
                  </h3>
                  <p className="typography-body text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {content?.sections?.whatWeGive && (
        <section className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="typography-display text-5xl md:text-6xl font-black mb-6 text-white">
                {content.sections.whatWeGive.title}
              </h2>
              <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
                השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.sections.whatWeGive.services?.map((service: any, index: number) => (
                <div key={index} className="glass-card p-8 animate-slide-in-right hover:scale-105 transition-all duration-300"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="icon-wrapper flex-shrink-0" style={{ background: currentColors.primary }}>
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="typography-heading text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="typography-body text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {selectedElements.includes('process') && (
        <section className="section-padding bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="typography-display text-5xl md:text-6xl font-black mb-6 text-white">
                <Cpu className="w-12 h-12 inline-block ml-4" />
                תהליך העבודה שלנו
              </h2>
              <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
                תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: <Target className="w-8 h-8" /> },
                { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: <Cpu className="w-8 h-8" /> },
                { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: <Network className="w-8 h-8" /> },
                { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: <Rocket className="w-8 h-8" /> }
              ].map((process, index) => (
                <div key={index} className="glass-card text-center p-8 animate-scale-in hover:scale-105 transition-all duration-300"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative mb-8">
                    <div className="icon-wrapper mx-auto" style={{ background: currentColors.primary }}>
                      <div className="text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="typography-heading text-xl font-bold mb-4 text-white">
                    {process.title}
                  </h3>
                  <p className="typography-body text-gray-300 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {content?.sections?.testimonials && content.sections.testimonials.some((t: any) => t.name && t.content) && (
        <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="typography-display text-5xl md:text-6xl font-black mb-6 text-white">
                מה הלקוחות שלנו אומרים
              </h2>
              <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
                עדויות אמיתיות מלקוחות מרוצים
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.sections.testimonials.filter((t: any) => t.name && t.content).map((testimonial: any, index: number) => (
                <div key={index} className="testimonial-card animate-scale-in"
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  
                  <p className="typography-body text-lg leading-relaxed text-gray-200 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="typography-heading font-bold text-white">
                        {testimonial.name}
                      </p>
                      {testimonial.role && (
                        <p className="typography-body text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section relative">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="typography-display text-5xl md:text-6xl font-black mb-8 text-white animate-fade-in-up">
            {content?.contactTitle || 'מוכנים להתחיל?'}
          </h2>
          
          <p className="typography-body text-xl md:text-2xl mb-12 text-white/90 animate-fade-in-up"
             style={{ animationDelay: '0.2s' }}>
            בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
          </p>

          <div className="max-w-md mx-auto space-y-6 mb-12 animate-fade-in-up"
               style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 justify-center text-lg glass-card-dark p-4 rounded-2xl">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-white font-medium">050-1234567</span>
            </div>
            <div className="flex items-center gap-4 justify-center text-lg glass-card-dark p-4 rounded-2xl">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-white font-medium">info@business.co.il</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
               style={{ animationDelay: '0.6s' }}>
            {renderButton('צור קשר עכשיו', 'text-lg px-12 py-6')}
            {renderButton('קבל הצעת מחיר', 'text-lg px-8 py-4', true)}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 mt-12 animate-fade-in-up"
               style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5" />
              <span className="text-sm">מוגן ומאובטח</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5" />
              <span className="text-sm">מענה מהיר</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <ThumbsUp className="w-5 h-5" />
              <span className="text-sm">ללא התחייבות</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
