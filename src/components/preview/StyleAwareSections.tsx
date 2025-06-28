
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
        // Liquid Glass styling to match the hero
        const glassStyles = {
          standard: 'bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50',
          alternate: 'bg-gradient-to-br from-blue-900/50 via-cyan-900/30 to-purple-900/50',
          final: 'bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-blue-900/50'
        };
        return `${baseStyles} ${glassStyles[sectionType] || glassStyles.standard}`;
        
      case 'metal':
        const metalStyles = {
          standard: 'bg-gradient-to-br from-gray-900 via-yellow-900 to-gray-900',
          alternate: 'bg-gradient-to-br from-yellow-900 via-orange-900 to-gray-900',
          final: 'bg-gradient-to-br from-orange-900 via-red-900 to-gray-900'
        };
        return `${baseStyles} ${metalStyles[sectionType] || metalStyles.standard}`;
        
      case 'image':
        const imageStyles = {
          standard: 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900',
          alternate: 'bg-gradient-to-br from-purple-900 via-pink-900 to-gray-900',
          final: 'bg-gradient-to-br from-pink-900 via-indigo-900 to-gray-900'
        };
        return `${baseStyles} ${imageStyles[sectionType] || imageStyles.standard}`;
        
      default:
        // 3D Hero style - match the advanced hero styling
        const defaultStyles = {
          standard: 'bg-gradient-to-br from-black via-gray-900 to-black',
          alternate: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
          final: 'bg-gradient-to-br from-black via-purple-900/30 to-black'
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
          </div>
        );
        
      case 'glass':
        // Advanced Liquid Glass effects to match hero
        return (
          <div className="absolute inset-0">
            {/* Glassmorphism Grid Background */}
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
            
            {/* Floating Glass Orbs */}
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-30 backdrop-blur-md"
                 style={{
                   background: `linear-gradient(135deg, 
                     rgba(255, 255, 255, 0.1), 
                     rgba(255, 255, 255, 0.05))`,
                   border: '1px solid rgba(255, 255, 255, 0.2)',
                   boxShadow: `
                     inset 0 1px 0 rgba(255, 255, 255, 0.2),
                     0 8px 32px rgba(0, 0, 0, 0.3)
                   `,
                 }}></div>
            
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full opacity-20 backdrop-blur-lg"
                 style={{
                   background: `linear-gradient(135deg, 
                     rgba(255, 255, 255, 0.08), 
                     rgba(255, 255, 255, 0.03))`,
                   border: '1px solid rgba(255, 255, 255, 0.1)',
                   boxShadow: `
                     inset 0 1px 0 rgba(255, 255, 255, 0.1),
                     0 12px 40px rgba(0, 0, 0, 0.4)
                   `,
                 }}></div>
            
            <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full opacity-25 backdrop-blur-sm"
                 style={{
                   background: `linear-gradient(135deg, 
                     rgba(107, 115, 255, 0.1), 
                     rgba(156, 64, 255, 0.05))`,
                   border: '1px solid rgba(255, 255, 255, 0.15)',
                   boxShadow: `
                     inset 0 1px 0 rgba(255, 255, 255, 0.15),
                     0 10px 30px rgba(107, 115, 255, 0.2)
                   `,
                 }}></div>
          </div>
        );
        
      case 'metal':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-10 right-10 w-2 h-20 bg-gradient-to-b from-yellow-400 to-transparent"></div>
              <div className="absolute bottom-10 left-10 w-20 h-2 bg-gradient-to-r from-orange-400 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-40 bg-gradient-to-b from-yellow-300 to-transparent rotate-45"></div>
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
            </div>
          </div>
        );
        
      default:
        // Advanced 3D Hero effects to match the main hero
        return (
          <div className="absolute inset-0">
            {/* Glassmorphism Grid */}
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
            
            {/* Floating Glass Orbs like in the hero */}
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
