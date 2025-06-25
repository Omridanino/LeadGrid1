
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, TrendingUp, Phone, Quote, MessageCircle, HelpCircle, Heart } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";
import { useToast } from "@/hooks/use-toast";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
}

const LandingPagePreview = ({ content, currentColors, formData }: LandingPagePreviewProps) => {
  const { toast } = useToast();

  const handleCtaClick = () => {
    toast({
      title: "🎯 קריאה לפעולה!",
      description: "בדף האמיתי זה יוביל לטופס יצירת קשר או דף הזמנה",
    });
  };

  const colors = content.colors || currentColors;

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div 
          className="p-12 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`
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
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">{value as string}</div>
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

          {/* About Section */}
          <div className="mb-12">
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

          {/* Emotional Section */}
          <div className="mb-12">
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

          {/* Testimonials Section */}
          <div className="mb-12">
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
                  className="p-6 rounded-xl border"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: `${colors.primary}40`
                  }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
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

          {/* FAQ Section */}
          <div className="mb-12">
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
                  className="p-6 rounded-xl border"
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
          
          {/* Contact Section */}
          <div 
            className="p-8 rounded-2xl border text-center"
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
