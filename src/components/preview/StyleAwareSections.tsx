
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
          standard: 'bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900',
          alternate: 'bg-gradient-to-br from-teal-900 via-cyan-900 to-gray-900',
          final: 'bg-gradient-to-br from-cyan-900 via-blue-900 to-gray-900'
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
        const defaultStyles = {
          standard: 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900',
          alternate: 'bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900',
          final: 'bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900'
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
        return (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-40 h-40 bg-teal-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-lg animate-pulse"></div>
            </div>
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
        return (
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
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
