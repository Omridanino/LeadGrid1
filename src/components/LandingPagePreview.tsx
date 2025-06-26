
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

  const getHeroImageUrl = () => {
    if (heroImage && heroImage.startsWith('data:')) {
      return heroImage;
    }
    
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

  const renderCreativeElements = () => {
    if (!content.creativeElements || content.creativeElements.length === 0) {
      return null;
    }

    return content.creativeElements.map((element: any, index: number) => {
      switch (element.type) {
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

