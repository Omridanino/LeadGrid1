
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { Phone, Mail, MapPin, Star, CheckCircle2, Users, Target, Image, Award, Zap, Cpu, Network, Rocket, ArrowLeft, Quote, Shield, Clock, ThumbsUp, TrendingUp, Heart, Sparkles } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";

interface ContentSectionsProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedElements: string[];
}

export const ContentSections = ({ content, currentColors, formData, selectedElements }: ContentSectionsProps) => {
  const renderButton = (text: string, className?: string, isSecondary?: boolean) => {
    const baseClass = `btn-base ${className || ''}`;
    
    if (formData.heroStyle === 'glass') {
      return (
        <button className={`${baseClass} ${isSecondary ? 'btn-glass' : 'btn-primary'}`}>
          <ArrowLeft className="w-5 h-5" />
          {text}
        </button>
      );
    } else if (formData.heroStyle === 'metal') {
      return (
        <button className={`${baseClass} ${isSecondary ? 'btn-glass' : 'btn-metal'}`}>
          <ArrowLeft className="w-5 h-5" />
          {text}
        </button>
      );
    } else if (formData.heroStyle === 'geometric') {
      return (
        <button className={`${baseClass} ${isSecondary ? 'btn-glass' : 'btn-geometric'}`}>
          <ArrowLeft className="w-5 h-5" />
          {text}
        </button>
      );
    }

    return (
      <button className={`${baseClass} ${isSecondary ? 'btn-glass' : 'btn-primary'}`}>
        <ArrowLeft className="w-5 h-5" />
        {text}
      </button>
    );
  };

  const getSectionBackground = (index: number) => {
    const backgrounds = [
      'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      'bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900',
      'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      'bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900'
    ];
    return backgrounds[index % backgrounds.length];
  };

  const getCardClass = () => {
    if (formData.heroStyle === 'glass') return 'glass-card';
    if (formData.heroStyle === 'metal') return 'metal-card';
    if (formData.heroStyle === 'geometric') return 'geometric-card';
    return 'glass-card';
  };

  const getIconClass = () => {
    if (formData.heroStyle === 'glass') return 'icon-glass';
    if (formData.heroStyle === 'metal') return 'icon-metal';
    if (formData.heroStyle === 'geometric') return 'icon-premium';
    return 'icon-premium';
  };

  return (
    <>
      {/* Value Proposition Section */}
      {content?.sections?.emotionalSection && (
        <section className={`section-standard ${getSectionBackground(0)}`}>
          <div className="container-hero">
            <div className="text-center max-w-6xl mx-auto">
              <h2 className="typography-modern text-5xl md:text-7xl font-black mb-8 text-white animate-slide-up">
                {content.sections.emotionalSection.title}
              </h2>
              <div className={`${getCardClass()} p-12 animate-slide-up animate-delay-1`}>
                <p className="typography-body text-xl md:text-2xl leading-relaxed text-white">
                  {content.sections.emotionalSection.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      {content?.sections?.whyUs && (
        <section className={`section-standard ${getSectionBackground(1)}`}>
          <div className="container-hero">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="typography-modern text-5xl md:text-6xl font-black mb-6 text-white">
                {content.sections.whyUs.title}
              </h2>
              <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
                הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
              </p>
            </div>
            
            <div className="grid-professional">
              {content.sections.whyUs.reasons?.map((reason: any, index: number) => (
                <div key={index} className={`${getCardClass()} p-8 text-center animate-scale-in animate-delay-${index + 1}`}>
                  <div className={`${getIconClass()} mx-auto mb-6`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="typography-modern text-2xl font-bold mb-4 text-white">
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
        <section className={`section-standard ${getSectionBackground(2)}`}>
          <div className="container-hero">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="typography-modern text-5xl md:text-6xl font-black mb-6 text-white">
                {content.sections.whatWeGive.title}
              </h2>
              <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
                השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.sections.whatWeGive.services?.map((service: any, index: number) => (
                <div key={index} className={`${getCardClass()} p-8 animate-slide-up animate-delay-${index + 1}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={getIconClass()}>
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="typography-modern text-xl font-bold text-white mb-2">
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
        <section className={`section-standard ${getSectionBackground(3)}`}>
          <div className="container-hero">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="typography-modern text-5xl md:text-6xl font-black mb-6 text-white">
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
                <div key={index} className={`${getCardClass()} text-center p-8 animate-scale-in animate-delay-${index + 1}`}>
                  <div className="relative mb-8">
                    <div className={getIconClass()} style={{ margin: '0 auto' }}>
                      <div className="text-white">
                        {process.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="typography-modern text-xl font-bold mb-4 text-white">
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
        <section className={`section-standard ${getSectionBackground(0)}`}>
          <div className="container-hero">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="typography-modern text-5xl md:text-6xl font-black mb-6 text-white">
                מה הלקוחות שלנו אומרים
              </h2>
              <p className="typography-body text-xl text-gray-300 max-w-3xl mx-auto">
                עדויות אמיתיות מלקוחות מרוצים
              </p>
            </div>
            
            <div className="grid-testimonials">
              {content.sections.testimonials.filter((t: any) => t.name && t.content).map((testimonial: any, index: number) => (
                <div key={index} className={`${getCardClass()} p-8 animate-scale-in animate-delay-${index + 1}`}>
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  
                  <p className="typography-body text-lg leading-relaxed text-white mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="typography-modern font-bold text-white">
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

      {/* Enhanced CTA Section */}
      <section className="section-standard bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        <div className="container-hero text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="typography-hero text-5xl md:text-6xl font-black mb-8 text-white animate-slide-up">
              {content?.contactTitle || 'מוכנים להתחיל?'}
            </h2>
            
            <div className={`${getCardClass()} p-8 mb-12 animate-slide-up animate-delay-1`}>
              <p className="typography-body text-xl md:text-2xl text-white leading-relaxed">
                בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 animate-slide-up animate-delay-2">
              <div className={`${getCardClass()} p-6`}>
                <div className="flex items-center gap-4 justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span className="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div className={`${getCardClass()} p-6`}>
                <div className="flex items-center gap-4 justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span className="typography-body text-white font-medium">info@business.co.il</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up animate-delay-3">
              {renderButton('צור קשר עכשיו', 'text-lg')}
              {renderButton('קבל הצעת מחיר', 'text-lg', true)}
            </div>

            {/* Enhanced Trust Badges */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up animate-delay-4">
              {[
                { icon: <Shield className="w-6 h-6" />, title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
                { icon: <Clock className="w-6 h-6" />, title: 'מענה מהיר', desc: 'תוך 24 שעות' },
                { icon: <Heart className="w-6 h-6" />, title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
              ].map((badge, index) => (
                <div key={index} className={`${getCardClass()} p-6 text-center`}>
                  <div className={`${getIconClass()} mx-auto mb-3 text-white`}>
                    {badge.icon}
                  </div>
                  <h3 className="typography-modern font-semibold text-white mb-1">
                    {badge.title}
                  </h3>
                  <p className="typography-body text-gray-300 text-sm">
                    {badge.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
