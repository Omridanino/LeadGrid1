
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface HeaderProps {
  onStartQuestionnaire: () => void;
}

const Header = ({ onStartQuestionnaire }: HeaderProps) => {
  const handleQuestionnaireClick = () => {
    console.log("Header: onStartQuestionnaire clicked");
    onStartQuestionnaire();
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-reverse space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LeadGrid
            </h1>
          </div>
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">יתרונות</a>
            <a href="#testimonials" className="text-gray-300 hover:text-blue-400 transition-colors">המלצות</a>
            <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">שאלות נפוצות</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">צור קשר</a>
          </nav>
          <Button 
            onClick={handleQuestionnaireClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl"
          >
            התחל עכשיו
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
