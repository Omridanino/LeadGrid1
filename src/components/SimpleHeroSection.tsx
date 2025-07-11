import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface SimpleHeroSectionProps {
  onStartQuestionnaire: () => void;
}

const SimpleHeroSection = ({ onStartQuestionnaire }: SimpleHeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full">
            ✨ מערכת חדשנית ליצירת דפי נחיתה
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            צור דף נחיתה מקצועי
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              תוך דקות ספורות
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            מערכת AI מתקדמת שיוצרת עבורך דף נחיתה מותאם אישית עם עיצוב מקצועי, 
            תוכן איכותי וכל מה שאתה צריך כדי להצליח
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onStartQuestionnaire}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              התחל עכשיו
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              צפה בדוגמאות
            </Button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">יצירה מהירה</h3>
              <p className="text-gray-300">דף נחיתה מוכן תוך דקות</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">עיצוב מקצועי</h3>
              <p className="text-gray-300">תבניות מותאמות לכל תחום</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">רספונסיבי</h3>
              <p className="text-gray-300">נראה מושלם בכל מכשיר</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleHeroSection;