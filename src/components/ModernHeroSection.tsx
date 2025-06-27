
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Play, Star, Shield, Clock, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"
      style={{ perspective: '1000px' }}
    >
      {/* תת-מערכת רקע תלת-ממדית מתקדמת */}
      <div className="absolute inset-0 overflow-hidden">
        {/* גרדיאנט בסיסי דינמי */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 40%, 
              rgba(29, 78, 216, 0.05) 80%,
              transparent 100%)`
          }}
        />
        
        {/* אובייקטים תלת-ממדיים צפים */}
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-70"
              style={{
                width: `${60 + Math.sin(i) * 40}px`,
                height: `${60 + Math.cos(i) * 40}px`,
                left: `${15 + (i % 4) * 20}%`,
                top: `${10 + Math.floor(i / 4) * 25}%`,
                background: `linear-gradient(${45 + i * 30}deg, 
                  rgba(59, 130, 246, 0.4), 
                  rgba(147, 51, 234, 0.2))`,
                borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '0%',
                transform: `translateZ(${20 + i * 15}px) rotateX(${i * 15}deg) rotateY(${i * 20}deg)`,
                animation: `float3D ${8 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`,
                filter: 'blur(1px)',
                backdropFilter: 'blur(2px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          ))}
        </div>

        {/* חלקיקים נוצצים */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: '#ffffff',
                animation: `sparkle ${4 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              }}
            />
          ))}
        </div>
      </div>

      {/* תוכן ראשי */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* תג סטטוס פרימיום */}
          <div 
            className="inline-flex items-center gap-4 backdrop-blur-xl border-2 px-8 py-4 rounded-full mb-12 shadow-2xl animate-slideUp group hover:scale-105 transition-all duration-500"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              transform: 'translateZ(50px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{
                    animation: `pulse ${1.5 + i * 0.2}s ease-in-out infinite ${i * 0.3}s`
                  }}
                />
              ))}
            </div>
            <Star className="w-6 h-6 text-yellow-400 animate-spin-slow" />
            <span className="text-white text-lg font-bold tracking-wide">
              מערכת דור חדש לבניית דפי נחיתה
            </span>
          </div>

          {/* כותרת ראשית מרשימה */}
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-none animate-slideUp animate-delay-300"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(96, 165, 250, 0.3)',
              transform: 'translateZ(100px)',
              transformStyle: 'preserve-3d',
              letterSpacing: '-0.02em'
            }}
          >
            יוצרים דפי נחיתה
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              שמכניסים כסף
            </span>
          </h1>

          {/* תיאור מתקדם */}
          <div 
            className="backdrop-blur-2xl border-2 p-10 max-w-5xl mx-auto mb-16 rounded-3xl shadow-2xl animate-slideUp animate-delay-600 relative overflow-hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(59, 130, 246, 0.2)',
              transform: 'translateZ(75px)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60" />
            <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-light">
              גלו איך יוצרים דפי נחיתה מהפנטים שמושכים לקוחות כמו מגנט,
              <br />
              עם עיצוב מקצועי, תוכן שמוכר ואנליטיקס שחושף כל הזדמנות
            </p>
          </div>

          {/* כפתורי פעולה מתקדמים */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20 animate-slideUp animate-delay-900">
            <Button
              onClick={onStartQuestionnaire}
              size="lg"
              className="relative group px-12 py-6 text-xl font-bold rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-110 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                border: 'none',
                transform: 'translateZ(50px)',
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-3 text-white">
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                בואו נתחיל לבנות יחד
              </span>
            </Button>
            
            <Button
              size="lg" 
              variant="outline"
              className="backdrop-blur-xl border-2 px-12 py-6 text-xl font-bold rounded-2xl hover:backdrop-blur-2xl transition-all duration-500 shadow-xl group transform hover:scale-105"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(59, 130, 246, 0.4)',
                color: '#ffffff',
                transform: 'translateZ(25px)'
              }}
            >
              <span className="flex items-center gap-3">
                <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                איך זה עובד?
              </span>
            </Button>
          </div>

          {/* תכונות מתקדמות */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slideUp animate-delay-1200">
            {[
              { 
                icon: Shield, 
                title: 'אמינות מוחלטת', 
                desc: 'טכנולוגיה מתקדמת ובטוחה',
                color: '#10b981'
              },
              { 
                icon: Clock, 
                title: 'מהירות ברק', 
                desc: 'תוצאות תוך דקות ספורות',
                color: '#f59e0b' 
              },
              { 
                icon: Award, 
                title: 'איכות פרימיום', 
                desc: 'עיצוב ברמה מקצועית עליונה',
                color: '#8b5cf6'
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="backdrop-blur-xl border-2 p-8 rounded-2xl hover:backdrop-blur-2xl transition-all duration-500 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transform: `translateZ(${30 - i * 10}px)`,
                  animationDelay: `${1.5 + i * 0.2}s`
                }}
              >
                <feature.icon 
                  className="w-12 h-12 mb-6 mx-auto group-hover:scale-110 transition-all duration-300" 
                  style={{ 
                    color: feature.color,
                    filter: `drop-shadow(0 4px 8px ${feature.color}40)`
                  }} 
                />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* סטיילים מותאמים אישית */}
      <style>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translateZ(20px) rotateX(0deg) rotateY(0deg) scale(1);
          }
          33% { 
            transform: translateZ(40px) rotateX(15deg) rotateY(120deg) scale(1.1);
          }
          66% { 
            transform: translateZ(10px) rotateX(-10deg) rotateY(240deg) scale(0.9);
          }
        }
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg);
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(60px) translateZ(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) translateZ(var(--z-offset, 0px));
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-900 { animation-delay: 0.9s; }
        .animate-delay-1200 { animation-delay: 1.2s; }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }
          .backdrop-blur-2xl {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernHeroSection;
