
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onStartQuestionnaire: () => void;
}

const Header = ({ onStartQuestionnaire }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "תכונות שלנו" },
    { href: "#testimonials", label: "המלצות לקוחות" },
    { href: "#faq", label: "שאלות נפוצות" },
    { href: "#contact", label: "צור קשר" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
      style={{
        background: `linear-gradient(135deg, 
          rgba(0, 0, 0, 0.9), 
          rgba(0, 0, 0, 0.8))`,
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          0 8px 32px rgba(0, 0, 0, 0.3)
        `,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 space-x-reverse"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, 
                  #6B73FF 0%, 
                  #9C40FF 50%, 
                  #FF6B9D 100%)`,
                boxShadow: `
                  0 0 20px rgba(107, 115, 255, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
              }}
            >
              <Zap 
                className="w-6 h-6 text-white" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(107, 115, 255, 0.8))'
                }}
              />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              LEADGRID
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={onStartQuestionnaire}
              className="relative group px-6 py-3 rounded-xl font-semibold text-white overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  #6B73FF 0%, 
                  #9C40FF 50%, 
                  #FF6B9D 100%)`,
                boxShadow: `
                  0 0 20px rgba(107, 115, 255, 0.3),
                  0 8px 16px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800" />
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                התחילו עכשיו
              </span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b border-white/10"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(0, 0, 0, 0.95), 
                  rgba(0, 0, 0, 0.9))`,
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => {
                    onStartQuestionnaire();
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 px-6 py-3 rounded-xl font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, 
                      #6B73FF 0%, 
                      #9C40FF 50%, 
                      #FF6B9D 100%)`,
                    boxShadow: `
                      0 0 20px rgba(107, 115, 255, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    התחילו עכשיו
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
