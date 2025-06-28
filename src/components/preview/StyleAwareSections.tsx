
import { ReactNode } from "react";

interface StyleAwareSectionProps {
  children: ReactNode;
  heroStyle: string;
  sectionType?: 'standard' | 'hero' | 'alternate' | 'final';
  className?: string;
}

export const StyleAwareSection = ({ children, heroStyle, sectionType = 'standard', className = '' }: StyleAwareSectionProps) => {
  const getSectionStyles = () => {
    const baseStyles = "py-20 relative overflow-hidden";
    
    switch (heroStyle) {
      case 'geometric':
        const geometricStyles = {
          standard: 'bg-gradient-to-br from-gray-900 via-red-900 to-gray-900',
          alternate: 'bg-gradient-to-br from-red-900 via-teal-900 to-gray-900',
          final: 'bg-gradient-to-br from-teal-900 via-blue-900 to-gray-900'
        };
        return `${baseStyles} ${geometricStyles[sectionType] || geometricStyles.standard}`;
        
      case 'glass':
        const glassStyles = {
          standard: 'liquid-glass-hero bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50',
          alternate: 'liquid-glass-hero bg-gradient-to-br from-blue-900/50 via-cyan-900/30 to-purple-900/50',
          final: 'liquid-glass-hero bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-blue-900/50'
        };
        return `${baseStyles} ${glassStyles[sectionType] || glassStyles.standard}`;
        
      case 'metal':
        const metalStyles = {
          standard: 'bg-metal bg-gradient-to-br from-gray-900 via-yellow-900/50 to-gray-900',
          alternate: 'bg-metal bg-gradient-to-br from-yellow-900/50 via-orange-900/50 to-gray-900',
          final: 'bg-metal bg-gradient-to-br from-orange-900/50 via-red-900/50 to-gray-900'
        };
        return `${baseStyles} ${metalStyles[sectionType] || metalStyles.standard}`;
        
      case 'image':
        const imageStyles = {
          standard: 'bg-image-depth bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900',
          alternate: 'bg-image-depth bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-gray-900',
          final: 'bg-image-depth bg-gradient-to-br from-pink-900/50 via-indigo-900/50 to-gray-900'
        };
        return `${baseStyles} ${imageStyles[sectionType] || imageStyles.standard}`;
        
      default:
        // 3D Hero style - דיוק מוחלט לפי הסגנון המקורי
        const defaultStyles = {
          standard: 'style-3d bg-gradient-to-br from-black via-gray-900 to-black',
          alternate: 'style-3d bg-gradient-to-br from-gray-900 via-black to-gray-900',
          final: 'style-3d bg-gradient-to-br from-black via-purple-900/30 to-black'
        };
        return `${baseStyles} ${defaultStyles[sectionType] || defaultStyles.standard}`;
    }
  };

  const getBackgroundEffects = () => {
    switch (heroStyle) {
      case 'geometric':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/20 rounded-lg rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-teal-500/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500/20 rounded-lg rotate-12"></div>
            <div className="absolute top-20% right-30% w-20 h-20 bg-yellow-500/20 rounded-lg rotate-45"></div>
          </div>
        );
        
      case 'glass':
        return (
          <div className="liquid-background">
            {/* Liquid Glass Orbs */}
            <div className="liquid-orb liquid-orb-1"></div>
            <div className="liquid-orb liquid-orb-2"></div>
            <div className="liquid-orb liquid-orb-3"></div>
            
            {/* Liquid Waves */}
            <div className="liquid-waves">
              <div className="liquid-wave liquid-wave-1"></div>
              <div className="liquid-wave liquid-wave-2"></div>
              <div className="liquid-wave liquid-wave-3"></div>
            </div>
            
            {/* Additional Glass Effects */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
                `,
              }}
            />
          </div>
        );
        
      case 'metal':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-10 right-10 w-2 h-20 bg-gradient-to-b from-yellow-400 to-transparent"></div>
              <div className="absolute bottom-10 left-10 w-20 h-2 bg-gradient-to-r from-orange-400 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-40 bg-gradient-to-b from-yellow-300 to-transparent rotate-45"></div>
              <div className="absolute top-1/4 right-1/4 w-3 h-16 bg-gradient-to-b from-gold-400 to-transparent rotate-12"></div>
            </div>
          </div>
        );
        
      case 'image':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-10 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        );
        
      default:
        // 3D Hero effects - בדיוק כמו בהירו הראשי
        return (
          <div className="absolute inset-0">
            {/* Glassmorphism Grid כמו בהירו */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
                `,
              }}
            />
            
            {/* Floating Glass Orbs בדיוק כמו בהירו */}
            <div className="absolute backdrop-blur-md border border-white/10 rounded-full w-16 h-16 top-20 left-1/4 opacity-30"
                 style={{
                   background: `linear-gradient(135deg, 
                     rgba(255, 255, 255, 0.1), 
                     rgba(255, 255, 255, 0.05))`,
                   boxShadow: `
                     inset 0 1px 0 rgba(255, 255, 255, 0.2),
                     0 8px 32px rgba(0, 0, 0, 0.3)
                   `,
                 }}></div>
            
            <div className="absolute backdrop-blur-md border border-white/10 rounded-full w-24 h-24 bottom-20 right-1/4 opacity-25"
                 style={{
                   background: `linear-gradient(135deg, 
                     rgba(255, 255, 255, 0.1), 
                     rgba(255, 255, 255, 0.05))`,
                   boxShadow: `
                     inset 0 1px 0 rgba(255, 255, 255, 0.2),
                     0 8px 32px rgba(0, 0, 0, 0.3)
                   `,
                 }}></div>
            
            <div className="absolute backdrop-blur-md border border-white/10 rounded-full w-12 h-12 top-1/2 right-10 opacity-35"
                 style={{
                   background: `linear-gradient(135deg, 
                     rgba(255, 255, 255, 0.1), 
                     rgba(255, 255, 255, 0.05))`,
                   boxShadow: `
                     inset 0 1px 0 rgba(255, 255, 255, 0.2),
                     0 8px 32px rgba(0, 0, 0, 0.3)
                   `,
                 }}></div>
          </div>
        );
    }
  };

  return (
    <section className={`${getSectionStyles()} ${className}`}>
      {getBackgroundEffects()}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};
