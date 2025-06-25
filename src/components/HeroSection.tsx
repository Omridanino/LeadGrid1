
import { Button } from "@/components/ui/button";
import { Zap, FileText } from "lucide-react";

interface HeroSectionProps {
  onStartQuestionnaire: () => void;
}

const HeroSection = ({ onStartQuestionnaire }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite] bg-clip-text text-transparent">
            המהפכה הדיגיטלית
            <br />
            מתחילה כאן
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          גלה איך יוצרים דפי נחיתה שמכניסים כסף לכיס תוך דקות ספורות - 
          עם עיצוב מהפנט, תוכן שמושך כמו מגנט ואנליטיקס שחושף כל סוד
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={onStartQuestionnaire}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5 ml-2" />
            בוא נתחיל את הקסם
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FileText className="w-5 h-5 ml-2" />
            איך זה עובד?
          </Button>
        </div>
        
        {/* Enhanced Features Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border border-blue-600/20 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">עיצוב שקורע עיניים</h3>
              <p className="text-gray-300 text-sm">תבניות עיצוב שגורמות ללקוחות להישאר ולקנות - לא רק להסתכל</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-600/20 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">מהירות אור</h3>
              <p className="text-gray-300 text-sm">דפים שנטענים כל כך מהר שגוגל יתאהב בהם (וגם הלקוחות שלך)</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-2xl border border-cyan-600/20 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-xl mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">המרות שמשגעות</h3>
              <p className="text-gray-300 text-sm">נתונים בזמן אמת שמראים בדיוק איך הדף שלך הופך לכסף</p>
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
