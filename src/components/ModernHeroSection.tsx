
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Play, Star, Shield, Clock, Award, ChevronDown, Calendar, Code, FileText, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

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

  // Timeline data for landing page creation process
  const timelineData = [
    {
      id: 1,
      title: "אפיון צרכים",
      date: "שלב 1",
      content: "נאסוף את כל המידע הנדרש על העסק, היעדים והקהל היעד שלכם כדי ליצור דף נחיתה מותאם אישית.",
      category: "Planning",
      icon: User,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "עיצוב ובניית התוכן",
      date: "שלב 2",
      content: "ניצור עיצוב מהפנט עם תוכן שמוכר - כותרות חדות, תיאורים משכנעים וקריאות לפעולה שמביאות תוצאות.",
      category: "Design",
      icon: FileText,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "אופטימיזציה",
      date: "שלב 3",
      content: "נוודא שהדף מהיר, מותאם לנייד ומוכן לקידום בגוגל. כל פיקסל עובד עבורכם.",
      category: "Development",
      icon: Code,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 4,
      title: "מעקב ואנליטיקס",
      date: "שלב 4",
      content: "נתקין מערכות מעקב מתקדמות שיעזרו לכם להבין מה עובד ואיך לשפר את התוצאות.",
      category: "Analytics",
      icon: Calendar,
      relatedIds: [3, 5],
      status: "pending" as const,
      energy: 70,
    },
    {
      id: 5,
      title: "השקה ותמיכה",
      date: "שלב 5",
      content: "נשיק את הדף ונוודא שהכל עובד מושלם. נישאר איתכם לתמיכה מתמשכת.",
      category: "Launch",
      icon: Award,
      relatedIds: [4],
      status: "pending" as const,
      energy: 60,
    },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-24"
    >
      {/* Mouse-following Spotlight Effect */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-10 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 40%, transparent 70%)',
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Minimalist Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.02) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Interactive Gradient Following Mouse */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out opacity-10"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(0, 0, 0, 0.08) 0%, 
              rgba(0, 0, 0, 0.02) 40%, 
              transparent 70%)`
          }}
        />

        {/* Floating Minimalist Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute backdrop-blur-sm border border-gray-200 rounded-full"
            style={{
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              left: `${20 + (i % 2) * 40}%`,
              top: `${30 + Math.floor(i / 2) * 30}%`,
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.8), 
                rgba(255, 255, 255, 0.4))`,
              boxShadow: `
                0 4px 16px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8)
              `,
            }}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-10">
            {/* New Attractive Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-none text-gray-900"
              style={{ 
                textShadow: `
                  0 2px 4px rgba(0, 0, 0, 0.1),
                  0 8px 16px rgba(0, 0, 0, 0.05)
                `,
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              נגיע ביחד למיליון
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                הלקוחות הבאים שלכם
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div 
              className="backdrop-blur-xl border border-gray-300 p-8 rounded-2xl shadow-lg relative overflow-hidden bg-white/80"
              style={{
                boxShadow: `
                  0 10px 25px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                דפי נחיתה שמושכים לקוחות, מגדילים מכירות
                <br />
                ומביאים תוצאות אמיתיות לעסק שלכם
              </p>
            </motion.div>

            {/* Aesthetic Action Buttons with Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.button
                onClick={onStartQuestionnaire}
                className="relative group px-10 py-5 rounded-xl font-bold text-xl text-white overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, #1f2937, #374151, #1f2937)`,
                  boxShadow: `
                    0 8px 25px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-white/10 to-gray-800/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  בואו נתחיל לבנות יחד
                </span>
              </motion.button>
              
              <motion.button 
                className="relative group backdrop-blur-xl border-2 border-gray-400 px-10 py-5 rounded-xl font-bold text-xl text-gray-800 hover:border-gray-600 transition-all duration-300 shadow-md bg-white/60 hover:bg-white/80"
                style={{
                  boxShadow: `
                    0 4px 15px rgba(0, 0, 0, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8)
                  `,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-3">
                  <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  איך זה עובד?
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Orbital Timeline */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(0, 0, 0, 0.1)"
              />
              
              <div className="w-full h-full bg-white/30 backdrop-blur-sm border border-gray-300 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <RadialOrbitalTimeline timelineData={timelineData} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default ModernHeroSection;
