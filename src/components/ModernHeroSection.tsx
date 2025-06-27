
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Play, Star, Shield, Clock, Award, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ModernHeroSectionProps {
  onStartQuestionnaire: () => void;
}

const ModernHeroSection = ({ onStartQuestionnaire }: ModernHeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

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
      style={{ perspective: '1200px' }}
    >
      {/* Premium Dark Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        {/* Glassmorphism Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Interactive Gradient Following Mouse */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(14, 165, 233, 0.1) 0%, 
              rgba(16, 185, 129, 0.05) 40%, 
              transparent 70%)`
          }}
        />

        {/* Floating 3D Glass Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute backdrop-blur-md border border-white/10 rounded-full"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 50}%`,
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05))`,
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 8px 32px rgba(0, 0, 0, 0.3)
              `,
            }}
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          style={{ y: textY }}
        >
          {/* Premium Status Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full mb-12 shadow-2xl"
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
              <Star className="w-5 h-5 text-blue-400" />
            </motion.div>
            <span className="text-white font-semibold text-lg">פלטפורמה מתקדמת לדור הבא</span>
          </motion.div>

          {/* 3D Headline */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-10 text-white"
            style={{ 
              textShadow: `
                0 0 20px rgba(14, 165, 233, 0.5),
                0 0 40px rgba(14, 165, 233, 0.3),
                0 0 80px rgba(14, 165, 233, 0.1)
              `,
              transform: 'translateZ(50px)',
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 50, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            יוצרים דפי נחיתה
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              שמכניסים כסף
            </span>
          </motion.h1>

          {/* Glassmorphism Description Panel */}
          <motion.div 
            className="backdrop-blur-xl border border-white/20 p-10 max-w-4xl mx-auto mb-16 rounded-3xl shadow-2xl relative overflow-hidden"
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
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              גלו איך יוצרים דפי נחיתה מהפנטים שמושכים לקוחות כמו מגנט,
              <br />
              עם עיצוב מקצועי, תוכן שמוכר ואנליטיקס שחושף כל הזדמנות
            </p>
          </motion.div>

          {/* Premium 3D Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button
              onClick={onStartQuestionnaire}
              className="relative group px-12 py-6 rounded-2xl font-bold text-xl text-white overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(14, 165, 233, 0.8), 
                  rgba(16, 185, 129, 0.8))`,
                boxShadow: `
                  0 0 20px rgba(14, 165, 233, 0.4),
                  0 15px 35px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
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
              className="backdrop-blur-xl border border-white/30 px-12 py-6 rounded-2xl font-bold text-xl text-white hover:border-white/50 transition-all duration-300 shadow-xl group"
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

          {/* 3D Feature Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { 
                icon: Shield, 
                title: 'אמינות מוחלטת', 
                desc: 'טכנולוגיה מתקדמת ובטוחה',
                color: 'rgba(16, 185, 129, 0.6)'
              },
              { 
                icon: Clock, 
                title: 'מהירות ברק', 
                desc: 'תוצאות תוך דקות ספורות',
                color: 'rgba(14, 165, 233, 0.6)' 
              },
              { 
                icon: Award, 
                title: 'איכות פרימיום', 
                desc: 'עיצוב ברמה מקצועית עליונה',
                color: 'rgba(139, 92, 246, 0.6)'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="backdrop-blur-xl border border-white/20 p-8 rounded-2xl hover:border-white/40 transition-all duration-500 group shadow-xl relative overflow-hidden"
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
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
                />
                <feature.icon 
                  className="w-12 h-12 mb-6 mx-auto group-hover:scale-110 transition-all duration-300 text-white" 
                  style={{ 
                    filter: `drop-shadow(0 0 10px ${feature.color})`
                  }} 
                />
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
