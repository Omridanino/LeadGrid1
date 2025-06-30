
import { ColorScheme } from "@/types/colors";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { cn } from "@/lib/utils";

interface EmotionalSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedHeroDesign?: string;
}

export const EmotionalSection = ({ content, currentColors, formData, selectedHeroDesign }: EmotionalSectionProps) => {
  console.log('EmotionalSection - selectedHeroDesign:', selectedHeroDesign);
  console.log('EmotionalSection - formData.designStyle:', formData?.designStyle);
  
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

  // מחזיר את הסגנון המדויק של ההירו הנבחר
  const getHeroMatchingStyles = () => {
    if (!useHeroDesign) {
      // אם לא בסגנון הירו, השתמש ברקע הרגיל
      return {
        background: backgroundColor === 'default' ? '#1e1e2e' : backgroundColor,
        backgroundImage: backgroundColor?.includes('gradient') ? backgroundColor : undefined
      };
    }

    console.log('Using hero design:', selectedHeroDesign);
    console.log('Design style:', formData?.designStyle);

    // אם צריך להתאים לסגנון הירו, העתק את הסגנון הספציפי
    switch (selectedHeroDesign) {
      case 'hero-section-clean':
        return { 
          background: 'black',
          color: '#ffffff'
        };
      case 'hero-section-modern':
        return { 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff'
        };
      case 'hero-section-lamp':
        return { 
          background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))',
          backgroundColor: '#0a0a0a',
          color: '#ffffff'
        };
      case 'hero-section-retro':
        return { 
          background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)',
          color: '#ffffff'
        };
      case 'hero-section-classic':
        return { 
          background: 'black',
          backgroundImage: 'linear-gradient(to right,#4f4f4f2e 1px,transparent 1px),linear-gradient(to bottom,#4f4f4f2e 1px,transparent 1px)',
          backgroundSize: '14px 24px',
          color: '#ffffff'
        };
      case 'hero-section-elegant':
        return { 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff'
        };
      case 'hero-section-minimal':
        return { 
          background: 'rgba(0,0,0,0.96)',
          color: '#ffffff'
        };
      // עיצובי Gradient
      case 'hero-geometric':
      case 'hero-neon-cyber':
      case 'hero-floating-cubes':
      case 'hero-holographic':
      case 'hero-morphing-shapes':
      case 'hero-liquid-metal':
      case 'hero-glass-refraction':
      case 'hero-particle-storm':
      case 'hero-crystal-matrix':
      case 'hero-digital-waves':
      case 'hero-neon-grid-portal':
      case 'hero-quantum-bubbles':
      case 'hero-cosmic-geometry':
        return { 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff'
        };
      default:
        // ברירת מחדל לפי סגנון העיצוב הכללי
        if (formData?.designStyle === 'gradient') {
          return { 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff'
          };
        } else if (formData?.designStyle === 'glass') {
          return { 
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            color: '#ffffff'
          };
        } else if (formData?.designStyle === 'metal') {
          return { 
            background: 'linear-gradient(135deg, #2c3e50, #34495e, #2c3e50)',
            color: '#ffffff'
          };
        } else if (formData?.designStyle === 'geometric') {
          return { 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff'
          };
        } else {
          return { 
            background: '#1e1e2e',
            color: '#ffffff'
          };
        }
    }
  };

  const getHeroBasedClasses = () => {
    if (!useHeroDesign) return '';
    
    switch (selectedHeroDesign) {
      case 'hero-glass-refraction':
        return 'relative overflow-hidden backdrop-blur-sm';
      default:
        return 'relative overflow-hidden';
    }
  };

  const renderHeroBasedEffects = () => {
    if (!useHeroDesign) return null;
    
    switch (selectedHeroDesign) {
      case 'hero-futuristic':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
          </div>
        );
      case 'hero-neon-cyber':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse [animation-delay:1s]" />
          </div>
        );
      case 'hero-holographic':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
          </div>
        );
      case 'hero-liquid-metal':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/50 to-slate-600/50" />
          </div>
        );
      case 'hero-glass-refraction':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5" />
          </div>
        );
      default:
        return null;
    }
  };

  const getHeroBasedTextStyles = () => {
    if (!useHeroDesign) return {};
    
    switch (selectedHeroDesign) {
      case 'hero-futuristic':
      case 'hero-holographic':
      case 'hero-liquid-metal':
      case 'hero-glass-refraction':
        return {
          title: { 
            background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.9), #d1d5db)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          },
          subtitle: { color: '#d1d5db' },
          text: { color: '#d1d5db' }
        };
      case 'hero-neon-cyber':
        return {
          title: { 
            color: '#00ffff',
            textShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 0, 255, 0.6)'
          },
          subtitle: { color: '#00ffff' },
          text: { color: '#00ffff' }
        };
      case 'hero-particle-storm':
        return {
          title: { 
            color: '#ffffff',
            filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.8))'
          },
          subtitle: { color: '#ffffff' },
          text: { color: '#ffffff' }
        };
      case 'hero-morphing-shapes':
        return {
          title: { color: '#ffffff' },
          subtitle: { color: '#ffffff' },
          text: { color: '#ffffff' }
        };
      case 'hero-quantum-bubbles':
        return {
          title: { 
            background: 'linear-gradient(45deg, #a8edea, #fed6e3, #d299c2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 30px rgba(168, 237, 234, 0.8))'
          },
          subtitle: { color: '#e2e8f0' },
          text: { color: '#e2e8f0' }
        };
      default:
        return {
          title: { color: '#ffffff' },
          subtitle: { color: '#d1d5db' },
          text: { color: '#d1d5db' }
        };
    }
  };

  const getHeroBadgeStyle = () => {
    if (!useHeroDesign) return getBadgeStyle();
    
    switch (selectedHeroDesign) {
      case 'hero-neon-cyber':
        return { 
          backgroundColor: 'rgba(0, 255, 255, 0.2)', 
          color: '#00ffff', 
          border: '1px solid #00ffff' 
        };
      case 'hero-quantum-bubbles':
        return { 
          background: 'rgba(168, 237, 234, 0.2)',
          color: '#a8edea',
          border: '1px solid rgba(168, 237, 234, 0.3)'
        };
      default:
        return { 
          background: 'rgba(255,255,255,0.1)', 
          color: '#ffffff', 
          border: '1px solid rgba(255,255,255,0.2)' 
        };
    }
  };

  const heroTextStyles = getHeroBasedTextStyles();
  const heroStyles = getHeroMatchingStyles();

  return (
    <section 
      className={cn("py-20 px-8", getHeroBasedClasses())}
      style={heroStyles}
    >
      {renderHeroBasedEffects()}
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {badge && (
          <div 
            className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
            style={getHeroBadgeStyle()}
          >
            {badge}
          </div>
        )}
        
        <h2 
          className="text-4xl md:text-6xl font-bold mb-6"
          style={useHeroDesign ? heroTextStyles.title : (getTextStyle('title') || { color: '#ffffff' })}
        >
          {title}
        </h2>
        
        {subtitle && (
          <h3 
            className="text-2xl md:text-3xl mb-8"
            style={useHeroDesign ? heroTextStyles.subtitle : (getTextStyle('subtitle') || { color: '#d1d5db' })}
          >
            {subtitle}
          </h3>
        )}
        
        <p 
          className="text-xl md:text-2xl leading-relaxed mb-12"
          style={useHeroDesign ? heroTextStyles.text : (getTextStyle('text') || { color: '#d1d5db' })}
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
