
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, TrendingUp } from "lucide-react";
import { ColorScheme } from "@/components/ColorEditor";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
}

const LandingPagePreview = ({ content, currentColors, formData }: LandingPagePreviewProps) => {
  return (
    <Card className="bg-gray-900 border-gray-700 overflow-hidden">
      <CardContent className="p-0">
        {/* Enhanced Preview Header */}
        <div 
          className="landing-preview p-12 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`
          }}
        >
          <div className="relative z-10">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              🚀 הפתרון המתקדם ביותר בשוק
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{content.headline}</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">{content.subheadline}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="text-xl px-10 py-4 shadow-2xl rounded-xl"
                style={{ backgroundColor: currentColors.accent, color: 'white' }}
              >
                {content.cta}
              </Button>
              <Button 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 text-xl px-10 py-4 rounded-xl"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                צפה בדמו
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">10,000+</div>
                <div className="text-blue-200 text-sm">לקוחות מרוצים</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-blue-200 text-sm">זמינות השירות</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-200 text-sm">תמיכה טכנית</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Preview Content */}
        <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-6 flex items-center">
                <Star className="w-8 h-8 text-yellow-500 ml-3" />
                היתרונות שלנו
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {content.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl hover:from-gray-600/50 hover:to-gray-700/50 transition-all duration-300 border border-gray-600/30">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0"
                      style={{ backgroundColor: currentColors.primary }}
                    >
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold mb-6 flex items-center">
                <Users className="w-8 h-8 text-blue-500 ml-3" />
                אודותינו
              </h3>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-600/30">
                <p className="text-gray-300 leading-relaxed mb-6">{content.aboutText}</p>
                <div className="flex items-center justify-center space-x-reverse space-x-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">150+</div>
                    <div className="text-blue-300 text-sm">פרויקטים</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-blue-300 text-sm">שביעות רצון</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">5★</div>
                    <div className="text-blue-300 text-sm">דירוג ממוצע</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Section */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-500 ml-3" />
              צור קשר ותתחיל עוד היום
            </h3>
            <div className="bg-gray-800/50 p-6 rounded-xl mb-6">
              <div className="whitespace-pre-line text-gray-300 text-center leading-relaxed">
                {formData.contactInfo}
              </div>
            </div>
            <div className="text-center">
              <Button 
                className="text-xl px-8 py-4 rounded-xl"
                style={{ backgroundColor: currentColors.primary, color: 'white' }}
              >
                צור קשר עכשיו
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LandingPagePreview;
