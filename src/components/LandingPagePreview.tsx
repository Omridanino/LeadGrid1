import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, TrendingUp, Phone, Quote, MessageCircle, HelpCircle, Heart, Zap, Target, Calendar, Award } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";
import { useToast } from "@/hooks/use-toast";
import { getHeroImageUrl } from "@/utils/heroImageUtils";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage }: LandingPagePreviewProps) => {
  const { toast } = useToast();

  const handleCtaClick = () => {
    toast({
      title: "🎯 קריאה לפעולה!",
      description: "בדף האמיתי זה יוביל לטופס יצירת קשר או דף הזמנה",
    });
  };

  const renderServiceCards = (serviceCards: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: currentColors.text }}>
        <Target className="w-8 h-8 ml-3 inline" style={{ color: currentColors.accent }} />
        השירותים שלנו
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {serviceCards.map((service: any, index: number) => (
          <div 
            key={index}
            className="group p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${currentColors.primary}40`
            }}
          >
            <div 
              className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-2xl"
              style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}
            >
              {service.icon}
            </div>
            <h3 className="font-bold mb-2" style={{ color: currentColors.primary }}>{service.title}</h3>
            <p className="text-sm" style={{ color: currentColors.text }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTimeline = (timelineSteps: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: currentColors.text }}>
        <Calendar className="w-8 h-8 ml-3 inline" style={{ color: currentColors.secondary }} />
        התהליך שלנו
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute right-8 top-0 bottom-0 w-0.5" style={{ background: `linear-gradient(to bottom, ${currentColors.primary}, ${currentColors.secondary})` }}></div>
          
          {timelineSteps.map((step: any, index: number) => (
            <div key={index} className="relative flex items-center mb-12">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg z-10"
                style={{ backgroundColor: step.color }}
              >
                {step.step}
              </div>
              <div className="mr-8">
                <h3 className="text-xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h3>
                <p style={{ color: currentColors.text }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPricing = (plans: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: currentColors.text }}>
        <Award className="w-8 h-8 ml-3 inline" style={{ color: currentColors.accent }} />
        התכניות שלנו
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan: any, index: number) => (
          <div 
            key={index}
            className={`p-8 rounded-2xl border relative ${plan.highlighted ? 'scale-105 shadow-2xl' : ''}`}
            style={{ 
              backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
              borderColor: plan.highlighted ? currentColors.accent : `${currentColors.primary}40`
            }}
          >
            {plan.highlighted && (
              <div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: currentColors.accent }}
              >
                הכי פופולרי
              </div>
            )}
            <h3 className="text-2xl font-bold mb-4" style={{ color: currentColors.primary }}>{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: currentColors.text }}>{plan.price}</span>
              <span className="text-gray-400">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center">
                  <Check className="w-5 h-5 ml-2" style={{ color: currentColors.accent }} />
                  <span style={{ color: currentColors.text }}>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="w-full rounded-xl font-bold"
              style={{ 
                backgroundColor: plan.highlighted ? currentColors.accent : currentColors.primary,
                color: 'white'
              }}
              onClick={handleCtaClick}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEmotional = (emotional: any) => (
    <div className="p-8" style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-white">
        <Heart className="w-8 h-8 ml-3" />
        {emotional.title}
      </h2>
      <div className="p-8 rounded-xl max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed text-center text-gray-200">
          {emotional.content}
        </p>
      </div>
    </div>
  );

  const renderWhyChooseUs = (whyChoose: any) => (
    <div className="p-12 relative overflow-hidden" style={{ backgroundColor: currentColors.background }}>
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full animate-pulse"
          style={{ background: `radial-gradient(circle, ${currentColors.primary}, transparent)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full animate-pulse delay-300"
          style={{ background: `radial-gradient(circle, ${currentColors.secondary}, transparent)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full animate-pulse delay-700"
          style={{ background: `radial-gradient(circle, ${currentColors.accent}, transparent)` }}
        ></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: currentColors.text }}>
          <Award className="w-10 h-10 ml-3 inline" style={{ color: currentColors.accent }} />
          {whyChoose.title}
        </h2>
        <p className="text-center text-lg mb-12 opacity-80" style={{ color: currentColors.text }}>
          הסיבות המובילות לבחור בנו מבין כל האפשרויות
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyChoose.items.map((item: any, index: number) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ 
                background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
                border: `1px solid ${currentColors.primary}30`,
                backdropFilter: 'blur(10px)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)`
              }}
            >
              {/* 3D Icon Container */}
              <div className="relative mb-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 relative"
                  style={{ 
                    background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`,
                    boxShadow: `0 10px 25px ${currentColors.primary}40, inset 0 1px 0 rgba(255,255,255,0.2)`
                  }}
                >
                  {/* 3D Effect Shadow */}
                  <div 
                    className="absolute inset-0 rounded-2xl transform translate-y-1 -z-10"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentColors.primary}80, ${currentColors.secondary}80)`,
                      filter: 'blur(4px)'
                    }}
                  ></div>
                  
                  {/* Icon */}
                  <i 
                    className={`ri-${item.icon} text-3xl text-white group-hover:scale-110 transition-transform duration-300`}
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                  ></i>
                  
                  {/* Shine Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)`
                    }}
                  ></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full opacity-60 animate-pulse" 
                     style={{ backgroundColor: currentColors.accent }}></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-40 animate-pulse delay-500" 
                     style={{ backgroundColor: currentColors.secondary }}></div>
              </div>
              
              {/* Content */}
              <div className="text-center relative">
                <p 
                  className="text-lg leading-relaxed font-medium group-hover:text-opacity-90 transition-all duration-300"
                  style={{ 
                    color: currentColors.text,
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  {item.text}
                </p>
                
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                  style={{ 
                    background: `radial-gradient(circle at center, ${currentColors.primary}, transparent 70%)`
                  }}
                ></div>
              </div>

              {/* Border Glow */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"
                style={{ 
                  background: `linear-gradient(145deg, ${currentColors.primary}20, ${currentColors.secondary}20)`,
                  filter: 'blur(1px)'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-80" style={{ color: currentColors.text }}>
            מוכנים להתחיל את המסע איתנו?
          </p>
          <Button 
            size="lg"
            className="px-12 py-4 text-lg font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${currentColors.accent}, ${currentColors.primary})`,
              color: 'white',
              boxShadow: `0 10px 30px ${currentColors.accent}40`
            }}
            onClick={handleCtaClick}
          >
            בואו נתחיל עכשיו ✨
          </Button>
        </div>
      </div>
    </div>
  );

  const renderCreativeElements = () => {
    if (!content.creativeElements || content.creativeElements.length === 0) {
      return null;
    }

    return content.creativeElements.map((element: any, index: number) => {
      switch (element.type) {
        case 'whychoose':
          return <div key={index}>{renderWhyChooseUs(element.content)}</div>;
        case 'serviceCards':
          return <div key={index}>{renderServiceCards(element.content)}</div>;
        case 'timeline':
          return <div key={index}>{renderTimeline(element.content)}</div>;
        case 'pricing':
          return <div key={index}>{renderPricing(element.content)}</div>;
        case 'emotional':
          return <div key={index}>{renderEmotional(element.content)}</div>;
        default:
          return null;
      }
    });
  };

  const finalHeroImage = formData.heroStyle === 'image' ? getHeroImageUrl(content, heroImage || '', formData) : null;

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div 
          className="p-12 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          style={{
            background: finalHeroImage 
              ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
              : `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative z-10">
            <Badge 
              className="mb-6 text-lg px-4 py-2 border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)'
              }}
            >
              {content.badge}
            </Badge>
            
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: currentColors.headlineColor || 'white' }}
            >
              {content.headline}
            </h1>
            
            <p 
              className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: currentColors.subheadlineColor || 'rgba(255,255,255,0.9)' }}
            >
              {content.subheadline}
            </p>
            
            <Button 
              size="lg" 
              className="text-xl px-10 py-4 shadow-2xl rounded-xl hover:scale-105 transition-transform font-bold mb-8"
              style={{ 
                backgroundColor: currentColors.accent, 
                color: 'white',
                border: 'none'
              }}
              onClick={handleCtaClick}
            >
              {content.cta}
            </Button>

            {/* Stats with user selected colors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
              {Object.entries(content.stats).map(([key, value], index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl hover:scale-105 transition-transform shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value as string}</div>
                  <div className="text-white font-semibold text-lg">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.featuresColor || currentColors.text }}
          >
            <Star className="w-8 h-8 ml-3" style={{ color: currentColors.accent }} />
            {content.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {content.features.map((feature: string, index: number) => (
              <div 
                key={index} 
                className="flex items-start p-6 rounded-xl hover:scale-105 transition-all duration-300 border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${currentColors.primary}40`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0 mt-1"
                  style={{ backgroundColor: currentColors.primary }}
                >
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span 
                  className="text-sm leading-relaxed"
                  style={{ color: currentColors.featuresTextColor || currentColors.text }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Elements */}
        {renderCreativeElements()}

        {/* About Section - Enhanced */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.aboutColor || currentColors.text }}
          >
            <Users className="w-8 h-8 ml-3" style={{ color: currentColors.secondary }} />
            {content.aboutTitle}
          </h2>
          <div 
            className="p-8 rounded-xl border max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${currentColors.secondary}40`
            }}
          >
            <p 
              className="text-lg leading-relaxed text-center"
              style={{ color: currentColors.aboutTextColor || currentColors.text }}
            >
              {content.aboutText}
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.text }}
          >
            <Quote className="w-8 h-8 ml-3" style={{ color: currentColors.primary }} />
            מה אומרים עלינו
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div 
                key={index}
                className="p-6 rounded-xl border hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${currentColors.primary}40`
                }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
                    style={{ background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})` }}
                  >
                    {testimonial.image}
                  </div>
                  <div className="mr-4">
                    <div className="font-semibold" style={{ color: currentColors.primary }}>{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p 
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  "{testimonial.content}"
                </p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.text }}
          >
            <HelpCircle className="w-8 h-8 ml-3" style={{ color: currentColors.secondary }} />
            שאלות נפוצות
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {content.faq.map((item: any, index: number) => (
              <div 
                key={index}
                className="p-6 rounded-xl border hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${currentColors.secondary}40`
                }}
              >
                <h3 
                  className="font-semibold mb-3 text-lg"
                  style={{ color: currentColors.secondary }}
                >
                  {item.question}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <div 
            className="p-8 rounded-2xl border text-center max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${currentColors.primary}40`
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6 flex items-center justify-center"
              style={{ color: currentColors.contactColor || currentColors.text }}
            >
              <MessageCircle className="w-6 h-6 ml-3" style={{ color: currentColors.accent }} />
              {content.contactTitle}
            </h2>
            <div 
              className="p-6 rounded-xl mb-6"
              style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
              <div 
                className="whitespace-pre-line leading-relaxed"
                style={{ color: currentColors.contactTextColor || currentColors.text }}
              >
                {formData.contactInfo}
              </div>
            </div>
            <Button 
              className="text-xl px-8 py-4 rounded-xl hover:scale-105 transition-transform font-bold"
              style={{ 
                background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.secondary})`, 
                color: 'white',
                border: 'none'
              }}
              onClick={handleCtaClick}
            >
              {content.cta}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPagePreview;
