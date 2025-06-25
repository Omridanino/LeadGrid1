
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface HeroSectionProps {
  onStartQuestionnaire: () => void;
}

const HeroSection = ({ onStartQuestionnaire }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite] bg-clip-text text-transparent">
            ברוכים הבאים
            <br />
            ל־LeadGrid
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          מערכת כוללת עם כל מה שצריך ליצירת דפי נחיתה מקצועיים - 
          עיצוב מותאם, תוכן חכם, אופטימיזציה למנועי חיפוש ואנליטיקס מתקדם
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={onStartQuestionnaire}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
          >
            <Zap className="w-5 h-5 ml-2" />
            צור דף נחיתה בדקות
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4">
            צפה בדמו חי
          </Button>
        </div>
        
        {/* Advanced Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-600/20">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">עיצוב מותאם</h3>
              <p className="text-gray-300 text-sm">עיצובים מקצועיים שמותאמים לתחום שלך עם ברנדינג מושלם</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-600/20">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">מהירות שיא</h3>
              <p className="text-gray-300 text-sm">דפים שנטענים במהירות הבזק ומותאמים למובייל ולמחשב</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-600/20">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">אנליטיקס מתקדם</h3>
              <p className="text-gray-300 text-sm">מעקב מפורט אחרי ביצועים והמרות עם דוחות בזמן אמת</p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
