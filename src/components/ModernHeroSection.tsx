
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Play, Star, Shield, Clock, Award, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

interface ModernHeroSectionProps {
  onStartQuestionnaire: () => void;
}

const ModernHeroSection = ({ onStartQuestionnaire }: ModernHeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glassmorphism Grid */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Interactive Gradient Following Mouse */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 40%, 
              transparent 70%)`
          }}
        />

        {/* Floating Glass Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute backdrop-blur-md border border-white/10 rounded-full"
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: `${15 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 40}%`,
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05))`,
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 8px 32px rgba(0, 0, 0, 0.3)
              `,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Premium Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-2xl"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1), 
                  rgba(255, 255, 255, 0.05))`,
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  0 8px 32px rgba(0, 0, 0, 0.4)
                `,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-white font-semibold">פלטפורמה מתקדמת לדור הבא</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none text-white"
              style={{ 
                textShadow: `
                  0 0 20px rgba(255, 255, 255, 0.2),
                  0 0 40px rgba(255, 255, 255, 0.1)
                `,
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              יוצרים דפי נחיתה
              <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                שמכניסים כסף
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div 
              className="backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1), 
                  rgba(255, 255, 255, 0.05))`,
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  0 20px 40px rgba(0, 0, 0, 0.4)
                `,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                גלו איך יוצרים דפי נחיתה מהפנטים שמושכים לקוחות כמו מגנט,
                <br />
                עם עיצוב מקצועי, תוכן שמוכר ואנליטיקס שחושף כל הזדמנות
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.button
                onClick={onStartQuestionnaire}
                className="relative group px-10 py-5 rounded-xl font-bold text-xl text-black overflow-hidden shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.9), 
                    rgba(255, 255, 255, 0.8))`,
                  boxShadow: `
                    0 0 20px rgba(255, 255, 255, 0.3),
                    0 15px 35px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.4)
                  `,
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  בואו נתחיל לבנות יחד
                </span>
              </motion.button>
              
              <motion.button 
                className="backdrop-blur-xl border border-white/30 px-10 py-5 rounded-xl font-bold text-xl text-white hover:border-white/50 transition-all duration-300 shadow-xl group"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.1), 
                    rgba(255, 255, 255, 0.05))`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 12px 30px rgba(0, 0, 0, 0.3)
                  `,
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  איך זה עובד?
                </span>
              </motion.button>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {[
                { 
                  icon: Shield, 
                  title: 'אמינות מוחלטת', 
                  desc: 'טכנולוגיה מתקדמת ובטוחה',
                },
                { 
                  icon: Clock, 
                  title: 'מהירות ברק', 
                  desc: 'תוצאות תוך דקות ספורות',
                },
                { 
                  icon: Award, 
                  title: 'איכות פרימיום', 
                  desc: 'עיצוב ברמה מקצועית עליונה',
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="backdrop-blur-xl border border-white/20 p-6 rounded-xl hover:border-white/40 transition-all duration-500 group shadow-xl relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.1), 
                      rgba(255, 255, 255, 0.05))`,
                    boxShadow: `
                      inset 0 1px 0 rgba(255, 255, 255, 0.2),
                      0 8px 25px rgba(0, 0, 0, 0.3)
                    `,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div 
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)' }}
                  />
                  <feature.icon 
                    className="w-10 h-10 mb-4 mx-auto group-hover:scale-110 transition-all duration-300 text-white" 
                    style={{ 
                      filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
                    }} 
                  />
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - AI Robot */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              
              <div className="w-full h-full bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                
                {/* AI Robot Image */}
                <motion.div 
                  className="w-full h-full flex items-center justify-center relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <motion.img
                    src="/lovable-uploads/058c3afe-63fd-41ea-971c-bcd6b4dfaa54.png"
                    alt="AI Robot - The Future of Landing Pages"
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))',
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Floating particles around robot */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default ModernHeroSection;
