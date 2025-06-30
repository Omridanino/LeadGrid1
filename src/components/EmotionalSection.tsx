import { ColorScheme } from "@/types/colors";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { cn } from "@/lib/utils";

interface EmotionalSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedHeroDesign?: string;
  heroBackgroundStyle?: any;
}

export const EmotionalSection = ({ 
  content, 
  currentColors, 
  formData, 
  selectedHeroDesign, 
  heroBackgroundStyle 
}: EmotionalSectionProps) => {
  const emotionalContent = content?.emotionalSection || {};
  
  const renderAdvancedButton = (button: any, index: number) => {
    const buttonStyle = button?.style || 'default';
    const buttonText = button?.text || content?.cta || 'לחץ כאן';
    
    switch (buttonStyle) {
      case 'liquid-glass':
      case 'זכוכית נוזלית':
        return (
          <LiquidButton key={index} size="xxl" className="text-white">
            {buttonText}
          </LiquidButton>
        );
      case 'metal-gold':
      case 'מתכת זהב':
        return (
          <MetalButton key={index} variant="gold" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-silver':
      case 'מתכת כסף':
        return (
          <MetalButton key={index} variant="default" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-bronze':
      case 'מתכת ברונזה':
        return (
          <MetalButton key={index} variant="bronze" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-primary':
      case 'מתכת ראשי':
        return (
          <MetalButton key={index} variant="primary" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-success':
      case 'מתכת ירוק':
        return (
          <MetalButton key={index} variant="success" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-error':
      case 'מתכת אדום':
        return (
          <MetalButton key={index} variant="error" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      default:
        return (
          <button 
            key={index}
            className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
            style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
          >
            {buttonText}
          </button>
        );
    }
  };

  const title = emotionalContent.title || 'הגיע הזמן לפעול';
  const subtitle = emotionalContent.subtitle || 'אל תחמיץ את ההזדמנות הזו';
  const text = emotionalContent.text || 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה';
  const badge = emotionalContent.badge || 'מוגבל בזמן';
  const backgroundColor = emotionalContent.backgroundColor || '#1e1e2e';
  const buttons = emotionalContent.buttons || [{ id: '1', text: 'התחל עכשיו', style: 'primary', visible: true }];
  const useHeroDesign = emotionalContent.useHeroDesign || false;

  const getTextStyle = (colorKey: string) => {
    if (!useHeroDesign) {
      const colorValue = emotionalContent?.colors?.[colorKey];
      if (colorValue) {
        if (colorValue.includes('gradient')) {
          return { 
            background: colorValue,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          };
        }
        return { color: colorValue };
      }
    }
    return {};
  };

  const getBadgeStyle = () => {
    if (!useHeroDesign) {
      const badgeColor = emotionalContent?.colors?.badge;
      if (badgeColor) {
        if (badgeColor.includes('gradient')) {
          return { 
            background: badgeColor,
            color: '#ffffff',
            border: 'none'
          };
        }
        return { 
          backgroundColor: badgeColor,
          color: '#ffffff',
          border: 'none'
        };
      }
    }
    return {};
  };

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

  const getHeroDesignClasses = () => {
    if (!useHeroDesign) return '';
    
    switch (selectedHeroDesign) {
      case 'hero-futuristic':
        return 'relative overflow-hidden';
      case 'hero-neon-cyber':
        return 'relative overflow-hidden';
      case 'hero-holographic':
        return 'relative overflow-hidden';
      case 'hero-liquid-metal':
        return 'relative overflow-hidden';
      case 'hero-glass-refraction':
        return 'relative overflow-hidden backdrop-blur-sm';
      default:
        return 'relative overflow-hidden';
    }
  };

  const renderHeroDesignEffects = () => {
    if (!useHeroDesign) return null;
    
    switch (selectedHeroDesign) {
      case 'hero-futuristic':
        return (
          <>
            {/* Copy the exact background layers from hero-futuristic */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-black" />
            
            {/* Animated elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin [animation-duration:20s]" />
            </div>
            
            {/* Grid pattern */}
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
            {/* Copy the exact background layers from hero-neon-cyber */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
            
            {/* Neon effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
              <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse [animation-delay:1s]" />
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse [animation-delay:2s]" />
              <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse [animation-delay:3s]" />
            </div>
            
            {/* Cyber grid */}
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
            {/* Copy the exact background layers from hero-holographic */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/20 to-pink-600/10" />
            
            {/* Holographic effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse [animation-delay:1.5s]" />
            </div>
            
            {/* Iridescent overlay */}
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
            {/* Copy the exact background layers from hero-liquid-metal */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/50 via-slate-700/50 to-slate-600/50" />
            
            {/* Metallic effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-400/10 to-slate-600/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-slate-600/10 to-slate-800/10 rounded-full blur-2xl animate-pulse [animation-delay:2s]" />
            </div>
            
            {/* Liquid metal reflections */}
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
            {/* Copy the exact background layers from hero-glass-refraction */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900" />
            <div className="absolute inset-0 backdrop-blur-sm" />
            
            {/* Glass refraction effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
            </div>
            
            {/* Glass prismatic effects */}
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

  return (
    <section 
      className={cn("py-20 px-8", getHeroDesignClasses())}
      style={getBackgroundStyle()}
    >
      {renderHeroDesignEffects()}
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {badge && (
          <div 
            className={cn(
              "inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold",
              useHeroDesign && "backdrop-blur-sm border border-white/20"
            )}
            style={getBadgeStyle() || (useHeroDesign ? 
              { background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' } :
              { background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', color: '#ffffff' }
            )}
          >
            {badge}
          </div>
        )}
        
        <h2 
          className={cn(
            "text-4xl md:text-6xl font-bold mb-6",
            useHeroDesign && "bg-gradient-to-b from-white via-white/90 to-gray-300 bg-clip-text text-transparent"
          )}
          style={useHeroDesign ? {} : (getTextStyle('title') || { color: '#ffffff' })}
        >
          {title}
        </h2>
        
        {subtitle && (
          <h3 
            className={cn(
              "text-2xl md:text-3xl mb-8",
              useHeroDesign && "text-gray-300"
            )}
            style={useHeroDesign ? {} : (getTextStyle('subtitle') || { color: '#d1d5db' })}
          >
            {subtitle}
          </h3>
        )}
        
        <p 
          className={cn(
            "text-xl md:text-2xl leading-relaxed mb-12",
            useHeroDesign && "text-gray-300"
          )}
          style={useHeroDesign ? {} : (getTextStyle('text') || { color: '#d1d5db' })}
        >
          {text}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          {buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
            renderAdvancedButton(button, index)
          )}
        </div>
      </div>
    </section>
  );
};
