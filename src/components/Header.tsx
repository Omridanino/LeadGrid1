
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onStartQuestionnaire: () => void;
}

const Header = ({ onStartQuestionnaire }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuestionnaireClick = () => {
    console.log("Header: onStartQuestionnaire clicked");
    onStartQuestionnaire();
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#features", label: "התכונות שלנו" },
    { href: "#testimonials", label: "המלצות לקוחות" },
    { href: "#faq", label: "שאלות נפוצות" },
    { href: "#contact", label: "צרו קשר" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-2xl bg-black/80 border-b border-white/10 shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* לוגו מינימליסטי */}
          <div className="flex items-center space-x-reverse space-x-3 group cursor-pointer">
            <div 
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
            >
              <Zap className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">
                LeadGrid
              </h1>
              <p className="text-xs text-gray-400 font-medium">דור חדש של דפי נחיתה</p>
            </div>
          </div>
          
          {/* תפריט דסקטופ */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative group font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* כפתורי פעולה */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-4">
            <Button 
              onClick={handleQuestionnaireClick}
              className="relative group px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                התחילו עכשיו
              </span>
            </Button>
          </div>

          {/* כפתור המבורגר למובייל */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center hover:border-blue-400/50 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* תפריט מובייל */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full backdrop-blur-2xl bg-black/95 border-b border-white/10 transform transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <nav className="flex flex-col space-y-4 mb-6">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium py-2 border-b border-gray-800 hover:border-blue-400/30"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <Button 
            onClick={handleQuestionnaireClick}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            <Zap className="w-4 h-4 ml-2" />
            התחילו עכשיו
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
