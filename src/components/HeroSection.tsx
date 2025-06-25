
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import DragDropBuilder from "@/components/DragDropBuilder";

interface HeroSectionProps {
  onStartQuestionnaire: () => void;
}

const HeroSection = ({ onStartQuestionnaire }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-600/30">
          🚀 העתיד של דפי הנחיתה כבר כאן
        </Badge>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
          ברוכים הבאים
          <br />
          ל־LeadGrid
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          הפלטפורמה המתקדמת ביותר בעולם ליצירת דפי נחיתה חכמים, מהירים וממירי לקוחות — 
          הרבה מעבר למה ש־WIX או כל מערכת אחרת מציעה
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
        <div className="max-w-5xl mx-auto">
          <DragDropBuilder />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
