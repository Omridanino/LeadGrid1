import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, TrendingUp, Phone, Quote, MessageCircle, HelpCircle, Heart, Zap, Target, Calendar, Award } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";
import { useToast } from "@/hooks/use-toast";

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

  const colors = content.colors || currentColors;

  const getHeroImageUrl = () => {
    // If user uploaded custom image, use it
    if (heroImage && heroImage.startsWith('data:')) {
      return heroImage;
    }
    
    // Otherwise use automatic image based on business type
    const businessType = formData.businessType?.toLowerCase() || '';
    
    if (businessType.includes('קפה') || businessType.includes('בית קפה')) {
      return 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    } else if (businessType.includes('מסעדה') || businessType.includes('אוכל')) {
      return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    } else if (businessType.includes('טכנולוגי') || businessType.includes('תוכנה')) {
      return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    } else if (businessType.includes('יועץ') || businessType.includes('ייעוץ')) {
      return 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    } else if (businessType.includes('רפואה') || businessType.includes('בריאות')) {
      return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    } else if (businessType.includes('חנות') || businessType.includes('אופנה')) {
      return 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    }
    
    return 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  };

  const renderServiceCards = (serviceCards: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: currentColors.text }}>
        <Target className="w-8 h-8 ml-3 inline" style={{ color: colors.accent }} />
        השירותים שלנו
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {serviceCards.map((service: any, index: number) => (
          <div 
            key={index}
            className="group p-6 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${colors.primary}40`
            }}
          >
            <div 
              className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-2xl"
              style={{ backgroundColor: colors.primary }}
            >
              {service.icon}
            </div>
            <h3 className="font-bold mb-2" style={{ color: colors.primary }}>{service.title}</h3>
            <p className="text-sm" style={{ color: currentColors.text }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTimeline = (timelineSteps: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: currentColors.text }}>
        <Calendar className="w-8 h-8 ml-3 inline" style={{ color: colors.secondary }} />
        התהליך שלנו
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute right-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: colors.secondary }}></div>
          
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

  const renderFloatingFeatures = (features: any[]) => (
    <div className="p-8 relative overflow-hidden min-h-96" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-8 text-center relative z-10" style={{ color: currentColors.text }}>
        <Zap className="w-8 h-8 ml-3 inline" style={{ color: colors.accent }} />
        היתרונות שלנו
      </h2>
      <div className="relative">
        {features.map((feature: any, index: number) => (
          <div 
            key={index}
            className={`absolute ${feature.position} ${feature.size} p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-110 transition-all duration-500`}
            style={{ 
              background: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`
            }}
          >
            <h3 className="font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-white/90 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLayeredCards = (cards: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: currentColors.text }}>
        <Quote className="w-8 h-8 ml-3 inline" style={{ color: colors.primary }} />
        מה אומרים עלינו
      </h2>
      <div className="max-w-4xl mx-auto relative h-80">
        {cards.map((card: any, index: number) => (
          <div 
            key={index}
            className={`absolute w-80 p-8 rounded-2xl shadow-2xl ${card.rotation} ${card.zIndex} hover:scale-105 transition-all duration-300`}
            style={{ 
              background: `linear-gradient(135deg, ${card.color.split(' ')[1]}, ${card.color.split(' ')[3]})`,
              left: `${index * 60}px`,
              top: `${index * 20}px`
            }}
          >
            <h3 className="font-bold text-white mb-2">{card.title}</h3>
            <p className="text-white/90 mb-4">"{card.content}"</p>
            <div>
              <div className="font-semibold text-white">{card.name}</div>
              <div className="text-white/70 text-sm">{card.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPricing = (plans: any[]) => (
    <div className="p-8" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: currentColors.text }}>
        <Award className="w-8 h-8 ml-3 inline" style={{ color: colors.accent }} />
        התכניות שלנו
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan: any, index: number) => (
          <div 
            key={index}
            className={`p-8 rounded-2xl border relative ${plan.highlighted ? 'scale-105 shadow-2xl' : ''}`}
            style={{ 
              backgroundColor: plan.highlighted ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
              borderColor: plan.highlighted ? colors.accent : `${colors.primary}40`
            }}
          >
            {plan.highlighted && (
              <div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: colors.accent }}
              >
                הכי פופולרי
              </div>
            )}
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: currentColors.text }}>{plan.price}</span>
              <span className="text-gray-400">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center">
                  <Check className="w-5 h-5 ml-2" style={{ color: colors.accent }} />
                  <span style={{ color: currentColors.text }}>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              className="w-full rounded-xl font-bold"
              style={{ 
                backgroundColor: plan.highlighted ? colors.accent : colors.primary,
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

  const render3DElements = (elements: any[]) => (
    <div className="p-8 relative overflow-hidden min-h-96" style={{ backgroundColor: currentColors.background }}>
      <h2 className="text-3xl font-bold mb-8 text-center relative z-10" style={{ color: currentColors.text }}>
        אלמנטים דינמיים
      </h2>
      {elements.map((element: any, index: number) => (
        <div 
          key={index}
          className={`absolute ${element.position} ${element.size} ${element.color} ${element.animation} rounded-2xl shadow-2xl`}
          style={{ animationDuration: `${2 + index}s` }}
        ></div>
      ))}
      <div className="relative z-10 text-center">
        <p className="text-lg" style={{ color: currentColors.text }}>
          חוויה ויזואלית מרשימה שמוסיפה עומק לדף
        </p>
      </div>
    </div>
  );

  const renderCreativeElements = () => {
    if (!content.customElements || content.customElements.length === 0) {
      return null;
    }

    return content.customElements.map((element: any, index: number) => {
      if (['serviceCards', 'timeline', 'floatingFeatures', 'layeredCards', 'pricing', '3dElements'].includes(element.type)) {
        return null; // These are handled in renderCreativeElements
      }

      switch (element.type) {
        case 'title':
          const TitleTag = element.content.size || 'h2';
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <TitleTag 
                className="text-center font-bold mb-8"
                style={{ color: currentColors.text }}
              >
                {element.content.text}
              </TitleTag>
            </div>
          );
        
        case 'text':
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <div className="max-w-4xl mx-auto text-center">
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  {element.content.text}
                </p>
              </div>
            </div>
          );
        
        case 'testimonial':
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <div 
                className="max-w-2xl mx-auto p-6 rounded-xl border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${colors.primary}40`
                }}
              >
                <div className="flex mb-4">
                  {[...Array(element.content.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p 
                  className="mb-4 text-lg leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  "{element.content.content}"
                </p>
                <div>
                  <div className="font-semibold" style={{ color: colors.primary }}>
                    {element.content.name}
                  </div>
                  <div className="text-gray-400 text-sm">{element.content.role}</div>
                </div>
              </div>
            </div>
          );
        
        default:
          return null;
      }
    });
  };

  const renderCustomElements = () => {
    if (!content.customElements || content.customElements.length === 0) {
      return null;
    }

    return content.customElements.map((element: any, index: number) => {
      if (['serviceCards', 'timeline', 'floatingFeatures', 'layeredCards', 'pricing', '3dElements'].includes(element.type)) {
        return null; // These are handled in renderCreativeElements
      }

      switch (element.type) {
        case 'title':
          const TitleTag = element.content.size || 'h2';
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <TitleTag 
                className="text-center font-bold mb-8"
                style={{ color: currentColors.text }}
              >
                {element.content.text}
              </TitleTag>
            </div>
          );
        
        case 'text':
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <div className="max-w-4xl mx-auto text-center">
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  {element.content.text}
                </p>
              </div>
            </div>
          );
        
        case 'image':
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <div className="text-center max-w-4xl mx-auto">
                <img 
                  src={element.content.url} 
                  alt={element.content.alt}
                  className="max-w-full h-auto rounded-xl mb-4 mx-auto"
                />
                {element.content.caption && (
                  <p 
                    className="italic text-sm"
                    style={{ color: currentColors.text }}
                  >
                    {element.content.caption}
                  </p>
                )}
              </div>
            </div>
          );
        
        case 'testimonial':
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <div 
                className="max-w-2xl mx-auto p-6 rounded-xl border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${colors.primary}40`
                }}
              >
                <div className="flex mb-4">
                  {[...Array(element.content.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p 
                  className="mb-4 text-lg leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  "{element.content.content}"
                </p>
                <div>
                  <div className="font-semibold" style={{ color: colors.primary }}>
                    {element.content.name}
                  </div>
                  <div className="text-gray-400 text-sm">{element.content.role}</div>
                </div>
              </div>
            </div>
          );
        
        case 'faq':
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <div 
                className="max-w-4xl mx-auto p-6 rounded-xl border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${colors.secondary}40`
                }}
              >
                <h3 
                  className="font-semibold mb-3 text-lg"
                  style={{ color: colors.secondary }}
                >
                  {element.content.question}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  {element.content.answer}
                </p>
              </div>
            </div>
          );
        
        case 'blog':
          return (
            <div key={index} className="p-8" style={{ backgroundColor: currentColors.background }}>
              <div className="max-w-4xl mx-auto">
                <h2 
                  className="text-3xl font-bold mb-4"
                  style={{ color: currentColors.text }}
                >
                  {element.content.title}
                </h2>
                <p 
                  className="text-lg italic mb-6"
                  style={{ color: colors.secondary }}
                >
                  {element.content.excerpt}
                </p>
                <div 
                  className="leading-relaxed whitespace-pre-line"
                  style={{ color: currentColors.text }}
                >
                  {element.content.content}
                </div>
              </div>
            </div>
          );
        
        default:
          return null;
      }
    });
  };

  const finalHeroImage = formData.heroStyle === 'image' ? getHeroImageUrl() : null;

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div 
          className="p-12 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          style={{
            background: finalHeroImage 
              ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${finalHeroImage}')` 
              : `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
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
                backgroundColor: colors.accent, 
                color: 'white',
                border: 'none'
              }}
              onClick={handleCtaClick}
            >
              {content.cta}
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
              {Object.entries(content.stats).map(([key, value], index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-white mb-1">{value as string}</div>
                  <div className="text-sm text-white/80">{key}</div>
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
            <Star className="w-8 h-8 ml-3" style={{ color: colors.accent }} />
            {content.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {content.features.map((feature: string, index: number) => (
              <div 
                key={index} 
                className="flex items-start p-6 rounded-xl hover:scale-105 transition-all duration-300 border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${colors.primary}40`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0 mt-1"
                  style={{ backgroundColor: colors.primary }}
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

        {/* About Section */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.aboutColor || currentColors.text }}
          >
            <Users className="w-8 h-8 ml-3" style={{ color: colors.secondary }} />
            {content.aboutTitle}
          </h2>
          <div 
            className="p-8 rounded-xl border max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${colors.secondary}40`
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

        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.text }}
          >
            <Heart className="w-8 h-8 ml-3" style={{ color: colors.accent }} />
            {content.emotional.title}
          </h2>
          <div 
            className="p-8 rounded-xl border max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${colors.accent}40`
            }}
          >
            <p 
              className="text-lg leading-relaxed text-center"
              style={{ color: currentColors.text }}
            >
              {content.emotional.content}
            </p>
          </div>
        </div>

        {/* Custom Elements */}
        {renderCustomElements()}

        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.text }}
          >
            <Quote className="w-8 h-8 ml-3" style={{ color: colors.primary }} />
            מה אומרים עלינו
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial: any, index: number) => (
              <div 
                key={index}
                className="p-6 rounded-xl border hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${colors.primary}40`
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p 
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: currentColors.text }}
                >
                  "{testimonial.content}"
                </p>
                <div className="text-sm">
                  <div className="font-semibold" style={{ color: colors.primary }}>{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <h2 
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center"
            style={{ color: currentColors.text }}
          >
            <HelpCircle className="w-8 h-8 ml-3" style={{ color: colors.secondary }} />
            שאלות נפוצות
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {content.faq.map((item: any, index: number) => (
              <div 
                key={index}
                className="p-6 rounded-xl border hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${colors.secondary}40`
                }}
              >
                <h3 
                  className="font-semibold mb-3 text-lg"
                  style={{ color: colors.secondary }}
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
        
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <div 
            className="p-8 rounded-2xl border text-center max-w-4xl mx-auto"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${colors.primary}40`
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6 flex items-center justify-center"
              style={{ color: currentColors.contactColor || currentColors.text }}
            >
              <MessageCircle className="w-6 h-6 ml-3" style={{ color: colors.accent }} />
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
                backgroundColor: colors.primary, 
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
