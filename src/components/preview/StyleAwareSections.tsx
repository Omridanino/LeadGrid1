

import { ReactNode } from "react";

interface StyleAwareSectionProps {
  children: ReactNode;
  heroStyle: string;
  sectionType?: 'standard' | 'hero' | 'alternate' | 'final';
  className?: string;
}

export const StyleAwareSection = ({ children, heroStyle, sectionType = 'standard', className = '' }: StyleAwareSectionProps) => {
  const getSectionStyles = () => {
    const baseStyles = "py-20 relative overflow-hidden min-h-screen flex items-center";
    
    switch (heroStyle) {
      case 'geometric':
        const geometricStyles = {
          standard: 'bg-gradient-to-br from-red-900 via-gray-900 to-red-800 geometric-pattern',
          alternate: 'bg-gradient-to-tr from-teal-900 via-red-800 to-gray-900 geometric-alternate',
          final: 'bg-gradient-to-bl from-gray-900 via-teal-800 to-red-900 geometric-final'
        };
        return `${baseStyles} ${geometricStyles[sectionType] || geometricStyles.standard}`;
        
      case 'glass':
        const glassStyles = {
          standard: 'liquid-glass-section bg-gradient-to-br from-purple-900/40 via-blue-900/20 to-indigo-900/40',
          alternate: 'liquid-glass-section bg-gradient-to-tr from-blue-900/40 via-cyan-900/20 to-purple-900/40',
          final: 'liquid-glass-section bg-gradient-to-bl from-indigo-900/40 via-purple-900/20 to-blue-900/40'
        };
        return `${baseStyles} ${glassStyles[sectionType] || glassStyles.standard}`;
        
      case 'metal':
        const metalStyles = {
          standard: 'metal-section bg-gradient-to-br from-yellow-900/60 via-gray-900 to-orange-900/60',
          alternate: 'metal-section bg-gradient-to-tr from-orange-900/60 via-yellow-800 to-gray-900',
          final: 'metal-section bg-gradient-to-bl from-gray-900 via-orange-800 to-yellow-900/60'
        };
        return `${baseStyles} ${metalStyles[sectionType] || metalStyles.standard}`;
        
      case 'image':
        const imageStyles = {
          standard: 'image-depth-section bg-gradient-to-br from-purple-900/70 via-pink-900/50 to-gray-900',
          alternate: 'image-depth-section bg-gradient-to-tr from-pink-900/70 via-indigo-900/50 to-purple-900',
          final: 'image-depth-section bg-gradient-to-bl from-gray-900 via-purple-900/50 to-pink-900/70'
        };
        return `${baseStyles} ${imageStyles[sectionType] || imageStyles.standard}`;
        
      default:
        // עיצוב תלת-ממדי מתקדם - זהה לכל הסקשנים
        return `${baseStyles} style-3d-section bg-gradient-to-br from-black via-purple-900/30 to-gray-900`;
    }
  };

  const getAdvanced3DBackgroundEffects = () => {
    // אפקטים תלת-ממדיים מתקדמים מותאמים לביצועים
    return (
      <div className="style-3d-bg absolute inset-0">
        {/* רקע רדיאלי מרובה שכבות */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 50% 10%, rgba(236, 72, 153, 0.1) 0%, transparent 60%),
              radial-gradient(circle at 90% 40%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* כדורים זכוכיתיים תלת-ממדיים מתקדמים */}
        <div className="absolute backdrop-blur-2xl border border-white/25 rounded-full w-32 h-32 top-1/5 left-1/4 opacity-50"
             style={{
               background: `linear-gradient(135deg, 
                 rgba(255, 255, 255, 0.2), 
                 rgba(255, 255, 255, 0.05))`,
               boxShadow: `
                 inset 0 4px 0 rgba(255, 255, 255, 0.3),
                 0 25px 80px rgba(168, 85, 247, 0.2),
                 0 8px 32px rgba(0, 0, 0, 0.4)
               `,
               transform: 'translateZ(25px)',
               animation: 'float3D 8s ease-in-out infinite'
             }}></div>
        
        <div className="absolute backdrop-blur-2xl border border-white/20 rounded-full w-40 h-40 bottom-1/4 right-1/3 opacity-40"
             style={{
               background: `linear-gradient(135deg, 
                 rgba(255, 255, 255, 0.18), 
                 rgba(255, 255, 255, 0.04))`,
               boxShadow: `
                 inset 0 4px 0 rgba(255, 255, 255, 0.25),
                 0 30px 90px rgba(59, 130, 246, 0.18),
                 0 10px 40px rgba(0, 0, 0, 0.35)
               `,
               transform: 'translateZ(35px)',
               animation: 'float3D 12s ease-in-out infinite reverse'
             }}></div>
        
        <div className="absolute backdrop-blur-xl border border-white/15 rounded-full w-24 h-24 top-1/2 right-1/6 opacity-60"
             style={{
               background: `linear-gradient(135deg, 
                 rgba(255, 255, 255, 0.22), 
                 rgba(255, 255, 255, 0.06))`,
               boxShadow: `
                 inset 0 3px 0 rgba(255, 255, 255, 0.3),
                 0 20px 60px rgba(236, 72, 153, 0.15),
                 0 6px 24px rgba(0, 0, 0, 0.3)
               `,
               transform: 'translateZ(20px)',
               animation: 'float3D 10s ease-in-out infinite 2s'
             }}></div>

        <div className="absolute backdrop-blur-xl border border-white/20 rounded-full w-28 h-28 top-3/4 left-1/6 opacity-45"
             style={{
               background: `linear-gradient(135deg, 
                 rgba(255, 255, 255, 0.2), 
                 rgba(255, 255, 255, 0.05))`,
               boxShadow: `
                 inset 0 3px 0 rgba(255, 255, 255, 0.28),
                 0 22px 65px rgba(34, 211, 238, 0.16),
                 0 7px 28px rgba(0, 0, 0, 0.32)
               `,
               transform: 'translateZ(30px)',
               animation: 'float3D 14s ease-in-out infinite 4s'
             }}></div>

        {/* אלמנטים גיאומטריים מרחפים */}
        <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-gradient-to-br from-white/25 to-purple-500/15 transform rotate-45 opacity-35"
             style={{
               boxShadow: '0 12px 35px rgba(168, 85, 247, 0.2)',
               animation: 'geometricFloat 6s ease-in-out infinite'
             }}></div>
        
        <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-gradient-to-br from-white/20 to-blue-500/15 rounded-full opacity-45"
             style={{
               boxShadow: '0 10px 30px rgba(59, 130, 246, 0.18)',
               animation: 'geometricFloat 8s ease-in-out infinite 2s'
             }}></div>

        <div className="absolute top-2/3 left-1/4 w-5 h-5 bg-gradient-to-br from-white/22 to-pink-500/15 transform rotate-12 opacity-40"
             style={{
               boxShadow: '0 8px 25px rgba(236, 72, 153, 0.16)',
               animation: 'geometricFloat 7s ease-in-out infinite 1s'
             }}></div>

        {/* קווי עומק ואור */}
        <div className="absolute top-1/4 left-1/2 w-px h-20 bg-gradient-to-b from-white/25 to-transparent transform -rotate-12 opacity-25"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-px bg-gradient-to-r from-white/20 to-transparent opacity-20"></div>
        <div className="absolute top-2/3 left-1/4 w-px h-16 bg-gradient-to-b from-purple-400/30 to-transparent transform rotate-45 opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-px bg-gradient-to-r from-blue-400/25 to-transparent opacity-25"></div>

        {/* חלקיקי אור נוספים */}
        <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-white/30 rounded-full opacity-60"
             style={{ animation: 'sparkle 4s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/6 left-1/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full opacity-50"
             style={{ animation: 'sparkle 5s ease-in-out infinite 1s' }}></div>
        <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-blue-400/35 rounded-full opacity-55"
             style={{ animation: 'sparkle 6s ease-in-out infinite 2s' }}></div>
      </div>
    );
  };

  const getBackgroundEffects = () => {
    switch (heroStyle) {
      case 'geometric':
        return (
          <div className="absolute inset-0 geometric-bg-effects">
            {/* Geometric Shapes */}
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-red-500/30 transform rotate-45 animate-pulse"></div>
            <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-teal-500/40 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-orange-500/25 transform rotate-12"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-500/30 transform rotate-45"></div>
            <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-purple-500/20 transform -rotate-12"></div>
            
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
        );
        
      case 'glass':
        return (
          <div className="liquid-glass-bg absolute inset-0">
            {/* Advanced Liquid Orbs */}
            <div className="liquid-orb-mega absolute top-1/4 left-1/3 w-40 h-40 rounded-full blur-3xl animate-pulse"
                 style={{
                   background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)'
                 }}></div>
            <div className="liquid-orb-mega absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full blur-2xl animate-bounce"
                 style={{
                   background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)'
                 }}></div>
            <div className="liquid-orb-mega absolute top-1/2 right-1/3 w-24 h-24 rounded-full blur-xl animate-pulse"
                 style={{
                   background: 'radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)'
                 }}></div>
            
            {/* Glass Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        );
        
      case 'metal':
        return (
          <div className="metal-bg absolute inset-0">
            {/* Metal Reflections */}
            <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-gradient-to-b from-yellow-300/50 to-transparent transform rotate-12"></div>
            <div className="absolute bottom-1/3 right-1/3 w-32 h-2 bg-gradient-to-r from-orange-300/50 to-transparent"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-gradient-to-b from-yellow-400/60 to-transparent transform -rotate-45"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-1 bg-gradient-to-r from-gold-400/50 to-transparent"></div>
            
            {/* Metallic Patterns */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    rgba(251, 191, 36, 0.1) 0px,
                    transparent 2px,
                    transparent 10px,
                    rgba(251, 191, 36, 0.1) 12px
                  )
                `
              }}
            />
          </div>
        );
        
      case 'image':
        return (
          <div className="image-depth-bg absolute inset-0">
            {/* Depth Particles */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Color Gradients */}
            <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-xl"></div>
          </div>
        );
        
      default:
        // עיצוב תלת-ממדי מתקדם לכל הסקשנים
        return getAdvanced3DBackgroundEffects();
    }
  };

  return (
    <section className={`${getSectionStyles()} ${className}`}>
      {getBackgroundEffects()}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

