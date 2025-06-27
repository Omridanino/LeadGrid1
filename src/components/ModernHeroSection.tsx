
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
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black pt-24"
    >
      {/* Mouse-following Spotlight Effect */}
      <div 
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)',
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)'
        }}
      />

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
            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none text-white"
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
              השתלטות דיגיטלית מוחלטת
              <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                AI מרוכז, טכנולוגיה מתקדמת
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
                מערכת נחיתה AI מבוססת ביצועים עם אוטומציה מלאה
                <br />
                שמנתחת, אופטימיזית ומזרימה לקוחות 24/7
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
                className="relative group px-10 py-5 rounded-xl font-bold text-xl overflow-hidden shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, 
                    #6B73FF 0%, 
                    #9C40FF 50%, 
                    #FF6B9D 100%)`,
                  color: 'white',
                  boxShadow: `
                    0 0 20px rgba(107, 115, 255, 0.4),
                    0 15px 35px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `,
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-3">
                  <Zap 
                    className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(107, 115, 255, 0.8))'
                    }}
                  />
                  נתחיל עכשיו
                </span>
              </motion.button>
              
              <motion.button 
                className="relative group px-10 py-5 rounded-xl font-bold text-xl overflow-hidden shadow-xl"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.1), 
                    rgba(255, 255, 255, 0.05))`,
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 12px 30px rgba(0, 0, 0, 0.3)
                  `,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.15), 
                    rgba(255, 255, 255, 0.08))`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-800" />
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
                fill="white"
              />
              
              <div className="w-full h-full bg-black/50 backdrop-blur-sm border border-white/20 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                <RadialOrbitalTimeline timelineData={timelineData} />
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
