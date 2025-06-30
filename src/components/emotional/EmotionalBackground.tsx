
interface EmotionalBackgroundProps {
  useHeroDesign: boolean;
  selectedHeroDesign?: string;
  heroBackgroundStyle?: any;
  backgroundColor: string;
}

export const EmotionalBackground = ({ 
  useHeroDesign, 
  selectedHeroDesign, 
  heroBackgroundStyle, 
  backgroundColor 
}: EmotionalBackgroundProps) => {
  const getBackgroundStyle = () => {
    if (useHeroDesign && heroBackgroundStyle) {
      return heroBackgroundStyle;
    }
    
    if (backgroundColor === 'default') {
      return { backgroundColor: '#1e1e2e' };
    }
    
    if (backgroundColor && backgroundColor.includes('gradient')) {
      return { background: backgroundColor };
    }
    
    return { backgroundColor: backgroundColor };
  };

  const renderHeroDesignEffects = () => {
    if (!useHeroDesign) return null;
    
    switch (selectedHeroDesign) {
      case 'hero-futuristic':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-black" />
            
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin [animation-duration:20s]" />
            </div>
            
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </>
        );
        
      case 'hero-neon-cyber':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
            
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse [animation-delay:1s]" />
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse [animation-delay:2s]" />
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse [animation-delay:3s]" />
            </div>
            
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </>
        );
        
      case 'hero-holographic':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/20 to-pink-600/10" />
            
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse [animation-delay:1.5s]" />
            </div>
            
            <div 
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                background: `
                  linear-gradient(45deg, 
                    transparent 30%, 
                    rgba(255, 255, 255, 0.1) 50%, 
                    transparent 70%),
                  linear-gradient(-45deg, 
                    rgba(59, 130, 246, 0.1) 0%, 
                    rgba(147, 51, 234, 0.1) 50%, 
                    rgba(236, 72, 153, 0.1) 100%)
                `
              }}
            />
          </>
        );
        
      case 'hero-liquid-metal':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/50 via-slate-700/50 to-slate-600/50" />
            
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-400/10 to-slate-600/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-slate-600/10 to-slate-800/10 rounded-full blur-2xl animate-pulse [animation-delay:2s]" />
            </div>
            
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(ellipse at top left, rgba(148, 163, 184, 0.1) 0%, transparent 50%),
                  radial-gradient(ellipse at bottom right, rgba(71, 85, 105, 0.1) 0%, transparent 50%)
                `
              }}
            />
          </>
        );
        
      case 'hero-glass-refraction':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900" />
            <div className="absolute inset-0 backdrop-blur-sm" />
            
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
            </div>
            
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  linear-gradient(45deg, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    rgba(59, 130, 246, 0.05) 25%, 
                    rgba(147, 51, 234, 0.05) 50%, 
                    rgba(236, 72, 153, 0.05) 75%, 
                    rgba(255, 255, 255, 0.1) 100%)
                `
              }}
            />
          </>
        );
        
      default:
        return null;
    }
  };

  return {
    backgroundStyle: getBackgroundStyle(),
    effects: renderHeroDesignEffects()
  };
};
