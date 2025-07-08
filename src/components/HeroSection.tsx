
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Target, Star } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white overflow-hidden" dir="rtl">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 ml-2" />
              פלטפורמת הבנייה החכמה ביותר בישראל
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            בנה דף נחיתה
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              שמביא לידים
            </span>
            <span className="text-green-400">בדקות ספורות</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            הפלטפורמה הישראלית הראשונה שבונה דפי נחיתה מקצועיים
            עם בינה מלאכותית - ללא צורך בידע טכני
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>בנייה תוך 5 דקות</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" />
              <span>אופטימיזציה להמרות</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-400" />
              <span>תמיכה בעברית</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 ml-2" />
              בואו נתחיל - חינם
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-400">
                ✨ החודש הראשון חינם לחלוטין
              </p>
              <p className="text-xs text-gray-500">
                ללא התחייבות • ביטול בכל עת
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">מהירים כבר השתמשו ואהבו:</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">+1,200 עסקים</div>
              <div className="text-lg font-semibold">+25,000 לידים</div>
              <div className="text-lg font-semibold">⭐ 4.9/5</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000" />
      </div>
    </section>
  );
};
