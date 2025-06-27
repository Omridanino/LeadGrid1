
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Premium Logo */}
          <motion.div 
            className="flex items-center space-x-reverse space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(14, 165, 233, 0.8), 
                  rgba(16, 185, 129, 0.8))`,
                boxShadow: `
                  0 0 20px rgba(14, 165, 233, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
              }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <motion.h1 
                className="text-2xl md:text-3xl font-black text-white"
                style={{
                  textShadow: '0 0 10px rgba(14, 165, 233, 0.3)',
                }}
              >
                LeadGrid
              </motion.h1>
              <p className="text-xs text-gray-400 font-medium">דור חדש של דפי נחיתה</p>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-8">
            {navItems.map((item, index) => (
              <motion.a 
                key={index}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium text-lg"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-4">
            <motion.button
              onClick={handleQuestionnaireClick}
              className="relative group px-8 py-4 font-bold rounded-2xl transition-all duration-300 text-white shadow-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(14, 165, 233, 0.8), 
                  rgba(16, 185, 129, 0.8))`,
                boxShadow: `
                  0 0 20px rgba(14, 165, 233, 0.4),
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2 text-lg">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>
                התחילו עכשיו
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center hover:border-white/40 transition-all duration-300 shadow-xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05))`,
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 8px 25px rgba(0, 0, 0, 0.3)
              `,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-black/90 border-b border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col space-y-6 mb-8">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-lg py-3 border-b border-white/10 hover:border-white/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              <motion.button
                onClick={handleQuestionnaireClick}
                className="w-full font-bold py-4 rounded-2xl transition-all duration-300 shadow-2xl text-white relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(14, 165, 233, 0.8), 
                    rgba(16, 185, 129, 0.8))`,
                  boxShadow: `
                    0 0 20px rgba(14, 165, 233, 0.4),
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-active:translate-x-full transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                  <Zap className="w-5 h-5" />
                  התחילו עכשיו
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
