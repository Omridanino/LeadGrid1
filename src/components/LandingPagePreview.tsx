
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, TrendingUp, Phone } from "lucide-react";
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
      description: "הכפתור עובד! בדף האמיתי זה יוביל לטופס יצירת קשר או לדף הזמנה",
    });
  };

  const handleContactClick = () => {
    toast({
      title: "📞 יצירת קשר",
      description: "בדף האמיתי זה יפתח אפליקציית הטלפון או האימייל",
    });
  };

  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Hero Section */}
        <div 
          className="landing-preview p-12 text-center relative overflow-hidden min-h-[500px] flex flex-col justify-center"
          style={{
            background: content.heroImage 
              ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${content.heroImage}) center/cover`
              : `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`
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
              🚀 {content.badge || 'הפתרון המתקדם ביותר בשוק'}
            </Badge>
            
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: currentColors.headlineColor || currentColors.text }}
            >
              {content.headline}
            </h1>
            
            <p 
              className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: currentColors.subheadlineColor || currentColors.text }}
            >
              {content.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="text-xl px-10 py-4 shadow-2xl rounded-xl hover:scale-105 transition-transform font-bold"
                style={{ 
                  backgroundColor: currentColors.accent || currentColors.primary, 
                  color: 'white',
                  border: 'none'
                }}
                onClick={handleCtaClick}
              >
                {content.cta}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">{content.stats?.customers || '10,000+'}</div>
                <div className="text-sm opacity-80" style={{ color: currentColors.subheadlineColor || '#e0f2fe' }}>לקוחות מרוצים</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">{content.stats?.uptime || '99.9%'}</div>
                <div className="text-sm opacity-80" style={{ color: currentColors.subheadlineColor || '#e0f2fe' }}>זמינות השירות</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                <div className="text-2xl font-bold text-white mb-1">{content.stats?.support || '24/7'}</div>
                <div className="text-sm opacity-80" style={{ color: currentColors.subheadlineColor || '#e0f2fe' }}>תמיכה טכנית</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Sections */}
        <div className="p-8" style={{ backgroundColor: currentColors.background }}>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Features Section */}
            <div className="space-y-6">
              <h2 
                className="text-3xl font-bold mb-6 flex items-center"
                style={{ color: currentColors.featuresColor || currentColors.text }}
              >
                <Star className="w-8 h-8 ml-3" style={{ color: currentColors.accent || currentColors.primary }} />
                {content.featuresTitle || 'היתרונות שלנו'}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {content.features.map((feature: string, index: number) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 rounded-xl hover:scale-105 transition-all duration-300 border"
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      borderColor: `${currentColors.primary}40`
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0"
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
            
            {/* About Section */}
            <div className="space-y-6">
              <h2 
                className="text-3xl font-bold mb-6 flex items-center"
                style={{ color: currentColors.aboutColor || currentColors.text }}
              >
                <Users className="w-8 h-8 ml-3" style={{ color: currentColors.secondary || currentColors.primary }} />
                {content.aboutTitle || 'אודותינו'}
              </h2>
              <div 
                className="p-6 rounded-xl border"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: `${currentColors.secondary || currentColors.primary}40`
                }}
              >
                <p 
                  className="leading-relaxed mb-6"
                  style={{ color: currentColors.aboutTextColor || currentColors.text }}
                >
                  {content.aboutText}
                </p>
                <div className="flex items-center justify-center space-x-reverse space-x-6 text-center">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: currentColors.text }}>150+</div>
                    <div className="text-sm opacity-80" style={{ color: currentColors.aboutTextColor || currentColors.text }}>פרויקטים</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: currentColors.text }}>98%</div>
                    <div className="text-sm opacity-80" style={{ color: currentColors.aboutTextColor || currentColors.text }}>שביעות רצון</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: currentColors.text }}>5★</div>
                    <div className="text-sm opacity-80" style={{ color: currentColors.aboutTextColor || currentColors.text }}>דירוג ממוצע</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div 
            className="p-8 rounded-2xl border text-center"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderColor: `${currentColors.primary}40`
            }}
          >
            <h2 
              className="text-2xl font-bold mb-6 flex items-center justify-center"
              style={{ color: currentColors.contactColor || currentColors.text }}
            >
              <TrendingUp className="w-6 h-6 ml-3" style={{ color: currentColors.accent || currentColors.primary }} />
              {content.contactTitle || 'צור קשר ותתחיל עוד היום'}
            </h2>
            <div 
              className="p-6 rounded-xl mb-6"
              style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
            >
              <div 
                className="whitespace-pre-line leading-relaxed flex items-center justify-center gap-4"
                style={{ color: currentColors.contactTextColor || currentColors.text }}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" style={{ color: currentColors.accent || currentColors.primary }} />
                  <span>{formData.contactInfo}</span>
                </div>
              </div>
            </div>
            <Button 
              className="text-xl px-8 py-4 rounded-xl hover:scale-105 transition-transform font-bold"
              style={{ 
                backgroundColor: currentColors.primary, 
                color: 'white',
                border: 'none'
              }}
              onClick={handleContactClick}
            >
              צור קשר עכשיו
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPagePreview;
