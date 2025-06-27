
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Play, Star, Shield, Clock, Award, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ModernHeroSectionProps {
  onStartQuestionnaire: () => void;
}

const ModernHeroSection = ({ onStartQuestionnaire }: ModernHeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
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

    const handleScroll = () => setScrollY(window.scrollY);

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-black"
      style={{ perspective: '1200px' }}
    >
      {/* רקע תלת-ממדי מתקדם */}
      <div className="absolute inset-0 overflow-hidden">
        {/* גרדיאנט דינמי */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out opacity-40"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(99, 102, 241, 0.1) 40%, 
              transparent 70%)`
          }}
        />
        
        {/* גריד תלת-ממדי */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translateY(${scrollY * 0.5}px) rotateX(60deg) translateZ(-200px)`,
            transformStyle: 'preserve-3d'
          }}
        />

        {/* אובייקטים צפים */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              width: `${40 + i * 8}px`,
              height: `${40 + i * 8}px`,
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 35}%`,
              background: `linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(99, 102, 241, 0.3))`,
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              transform: `translateZ(${30 + i * 20}px) rotateY(${i * 45}deg)`,
              animation: `float3D ${12 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
              filter: 'blur(1px)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          />
        ))}
      </div>

      {/* תוכן ראשי */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* תג סטטוס */}
          <div 
            className="inline-flex items-center gap-3 backdrop-blur-xl border px-6 py-3 rounded-full mb-10 animate-slideUp group hover:scale-105 transition-all duration-500 shadow-lg"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              transform: 'translateZ(40px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-blue-400"
                  style={{
                    animation: `pulse ${1.5 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </div>
            <Star className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium text-sm tracking-wide">
              פלטפורמה מתקדמת לבניית דפי נחיתה
            </span>
          </div>

          {/* כותרת ראשית */}
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none animate-slideUp animate-delay-300"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(96, 165, 250, 0.3)',
              transform: 'translateZ(60px)',
              letterSpacing: '-0.02em'
            }}
          >
            יוצרים דפי נחיתה
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              שמכניסים כסף
            </span>
          </h1>

          {/* תיאור */}
          <div 
            className="backdrop-blur-xl border p-8 max-w-4xl mx-auto mb-12 rounded-2xl shadow-xl animate-slideUp animate-delay-600 relative overflow-hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderColor: 'rgba(59, 130, 246, 0.2)',
              transform: 'translateZ(40px)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              גלו איך יוצרים דפי נחיתה מהפנטים שמושכים לקוחות כמו מגנט,
              <br />
              עם עיצוב מקצועי, תוכן שמוכר ואנליטיקס שחושף כל הזדמנות
            </p>
          </div>

          {/* כפתורי פעולה */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slideUp animate-delay-900">
            <Button
              onClick={onStartQuestionnaire}
              size="lg"
              className="relative group px-10 py-4 text-lg font-bold rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                border: 'none',
                transform: 'translateZ(30px)',
                boxShadow: '0 15px 35px rgba(59, 130, 246, 0.4)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-3 text-white">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                בואו נתחיל לבנות יחד
              </span>
            </Button>
            
            <Button
              size="lg" 
              variant="outline"
              className="backdrop-blur-xl border px-10 py-4 text-lg font-semibold rounded-xl hover:backdrop-blur-2xl transition-all duration-500 shadow-lg group transform hover:scale-105"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(59, 130, 246, 0.4)',
                color: '#ffffff',
                transform: 'translateZ(20px)'
              }}
            >
              <span className="flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                איך זה עובד?
              </span>
            </Button>
          </div>

          {/* תכונות מתקדמות */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideUp animate-delay-1200">
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
                className="backdrop-blur-xl border p-6 rounded-xl hover:backdrop-blur-2xl transition-all duration-500 group shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transform: `translateZ(${20 - i * 5}px)`,
                  animationDelay: `${1.5 + i * 0.2}s`
                }}
              >
                <feature.icon 
                  className="w-10 h-10 mb-4 mx-auto group-hover:scale-110 transition-all duration-300" 
                  style={{ 
                    color: feature.color,
                    filter: `drop-shadow(0 4px 8px ${feature.color}40)`
                  }} 
                />
                <h3 className="text-lg font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* חץ גלילה */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>

      {/* סטיילים */}
      <style>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translateZ(20px) rotateY(0deg) scale(1);
          }
          33% { 
            transform: translateZ(40px) rotateY(120deg) scale(1.1);
          }
          66% { 
            transform: translateZ(10px) rotateY(240deg) scale(0.9);
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px) translateZ(var(--z-offset, 0px));
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
        @media (max-width: 768px) {
          h1 {
            font-size: 3.5rem !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernHeroSection;
