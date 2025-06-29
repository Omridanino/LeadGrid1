
import { ColorScheme } from "@/types/colors";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { HeroSectionClean } from "@/components/ui/hero-section-clean";
import { HeroSectionModern } from "@/components/ui/hero-section-modern";
import { HeroSectionLamp } from "@/components/ui/hero-section-lamp";
import { HeroSectionRetro } from "@/components/ui/hero-section-retro";
import { GradientHero } from "@/components/ui/gradient-hero";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { HeroFluidBlobs } from "@/components/ui/hero-fluid-blobs";
import { HeroIsometricIllustration } from "@/components/ui/hero-isometric-illustration";
import { HeroGeometricShapes } from "@/components/ui/hero-geometric-shapes";
import { HeroNeumorphism } from "@/components/ui/hero-neumorphism";
import { HeroMinimalTech } from "@/components/ui/hero-minimal-tech";
import { HeroNeonCyber } from "@/components/ui/hero-neon-cyber";
import { HeroFloatingCubes } from "@/components/ui/hero-floating-cubes";
import { HeroHolographic } from "@/components/ui/hero-holographic";
import { HeroMorphingShapes } from "@/components/ui/hero-morphing-shapes";
import { HeroLiquidMetal } from "@/components/ui/hero-liquid-metal";
import { HeroGlassRefraction } from "@/components/ui/hero-glass-refraction";
import { HeroParticleStorm } from "@/components/ui/hero-particle-storm";
import { HeroCrystalMatrix } from "@/components/ui/hero-crystal-matrix";
import { HeroDigitalWaves } from "@/components/ui/hero-digital-waves";
import { HeroNeonGridPortal } from "@/components/ui/hero-neon-grid-portal";
import { HeroQuantumBubbles } from "@/components/ui/hero-quantum-bubbles";
import { HeroCosmicGeometry } from "@/components/ui/hero-cosmic-geometry";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { useState, useEffect } from "react";

interface EmotionalSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
}

export const EmotionalSection = ({ content, currentColors, formData }: EmotionalSectionProps) => {
  const emotionalContent = content?.emotionalSection || {};
  
  // בדיקה אם צריך להשתמש ברקע ההירו
  const useHeroBackground = 
    emotionalContent.useHeroBackground || 
    content?.useHeroBackground ||
    emotionalContent.sameAsHero ||
    false;

  console.log('EmotionalSection - useHeroBackground:', useHeroBackground);
  console.log('EmotionalSection - emotionalContent:', emotionalContent);

  // אם לא צריך להשתמש ברקע ההירו, נציג את הפסקה הרגילה
  if (!useHeroBackground) {
    // Helper function to render advanced buttons with proper functionality
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

    // Helper function to get inline style for text colors with gradient support
    const getTextStyle = (colorKey: string) => {
      const colorValue = emotionalContent?.colors?.[colorKey];
      if (colorValue) {
        // Check if it's a gradient
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
      return {};
    };

    // Helper function to get inline style for badge colors with gradient support
    const getBadgeStyle = () => {
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
      return {};
    };

    // Fix background color handling to support all color types
    const getBackgroundStyle = () => {
      if (backgroundColor === 'default') {
        return { backgroundColor: '#1e1e2e' };
      }
      
      // Check if it's a gradient
      if (backgroundColor && backgroundColor.includes('gradient')) {
        return { background: backgroundColor };
      }
      
      // Handle solid colors including hex values
      return { backgroundColor: backgroundColor };
    };

    return (
      <section 
        className="py-20 px-8 relative"
        style={getBackgroundStyle()}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {badge && (
            <div 
              className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold"
              style={getBadgeStyle() || { background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', color: '#ffffff' }}
            >
              {badge}
            </div>
          )}
          
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={getTextStyle('title') || { color: '#ffffff' }}
          >
            {title}
          </h2>
          
          {subtitle && (
            <h3 
              className="text-2xl md:text-3xl mb-8"
              style={getTextStyle('subtitle') || { color: '#d1d5db' }}
            >
              {subtitle}
            </h3>
          )}
          
          <p 
            className="text-xl md:text-2xl leading-relaxed mb-12"
            style={getTextStyle('text') || { color: '#d1d5db' }}
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
  }

  // אם צריך להשתמש ברקע ההירו - נשתמש באותו קומפוננט הירו עם התוכן של פסקת הרגש
  const designStyle = formData?.designStyle || 'basic';
  
  console.log('Using hero background with design style:', designStyle);
  
  // Helper function to create emotional content props that match hero structure
  const getEmotionalContentForHero = () => ({
    badge: emotionalContent.badge || 'רגעים מכריעים',
    headline: emotionalContent.title || 'הגיע הזמן לפעול',
    subheadline: emotionalContent.subtitle || 'אל תחמיץ את ההזדמנות הזו',
    description: emotionalContent.text || 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה',
    buttons: emotionalContent.buttons || [{ id: '1', text: 'התחל עכשיו', style: 'primary', visible: true }],
    colors: emotionalContent.colors,
    cta: emotionalContent.buttons?.[0]?.text || 'התחל עכשיו'
  });

  // Handle Basic Design Style variations
  if (designStyle === 'basic' || designStyle.startsWith('hero-section-')) {
    const [selectedBasicDesign, setSelectedBasicDesign] = useState<string>('');

    useEffect(() => {
      const randomSeed = Date.now() + Math.random() * 1000;
      const availableDesigns = [
        'hero-section-clean',
        'hero-section-minimal', 
        'hero-section-classic',
        'hero-section-elegant',
        'hero-section-modern',
        'hero-section-lamp',
        'hero-section-retro'
      ];
      
      const randomIndex = Math.floor(randomSeed % availableDesigns.length);
      const selectedDesign = availableDesigns[randomIndex];
      setSelectedBasicDesign(selectedDesign);
    }, [formData?.businessName, formData?.businessType]);

    const emotionalContentForHero = getEmotionalContentForHero();

    if (selectedBasicDesign === 'hero-section-clean') {
      return (
        <HeroSectionClean
          formData={formData}
          currentColors={currentColors}
          content={emotionalContentForHero}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-modern') {
      return (
        <HeroSectionModern
          formData={formData}
          currentColors={currentColors}
          content={emotionalContentForHero}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-lamp') {
      return (
        <HeroSectionLamp
          formData={formData}
          currentColors={currentColors}
          content={emotionalContentForHero}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-retro') {
      return (
        <HeroSectionRetro
          formData={formData}
          currentColors={currentColors}
          content={emotionalContentForHero}
        />
      );
    }

    // Enhanced Mockup Hero (minimal) with emotional content
    if (selectedBasicDesign === 'hero-section-minimal') {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black/[0.96]">
          <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {emotionalContent.badge && (
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                  style={{
                    background: emotionalContent.colors?.badge?.includes('gradient') 
                      ? emotionalContent.colors.badge 
                      : emotionalContent.colors?.badge || 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    color: '#ffffff'
                  }}
                >
                  {emotionalContent.badge}
                </div>
              )}
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {emotionalContent.title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                {emotionalContent.subtitle}
              </p>
              
              <p className="text-lg mb-12 text-gray-400">
                {emotionalContent.text}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {emotionalContent.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                  <button 
                    key={index}
                    className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
                    style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Beams Background (classic) with emotional content
    if (selectedBasicDesign === 'hero-section-classic') {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {emotionalContent.badge && (
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                  style={{
                    background: emotionalContent.colors?.badge?.includes('gradient') 
                      ? emotionalContent.colors.badge 
                      : emotionalContent.colors?.badge || 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    color: '#ffffff'
                  }}
                >
                  {emotionalContent.badge}
                </div>
              )}
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {emotionalContent.title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                {emotionalContent.subtitle}
              </p>
              
              <p className="text-lg mb-12 text-gray-400">
                {emotionalContent.text}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {emotionalContent.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                  <button 
                    key={index}
                    className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
                    style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Gradient Hero (elegant) with emotional content
    if (selectedBasicDesign === 'hero-section-elegant') {
      return (
        <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=%229C92AC&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {emotionalContent.badge && (
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                  style={{
                    background: emotionalContent.colors?.badge?.includes('gradient') 
                      ? emotionalContent.colors.badge 
                      : emotionalContent.colors?.badge || 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    color: '#ffffff'
                  }}
                >
                  {emotionalContent.badge}
                </div>
              )}
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {emotionalContent.title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                {emotionalContent.subtitle}
              </p>
              
              <p className="text-lg mb-12 text-gray-400">
                {emotionalContent.text}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {emotionalContent.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                  <button 
                    key={index}
                    className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
                    style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  // GRADIENT Design Style
  if (designStyle === 'gradient') {
    const [selectedGradientDesign, setSelectedGradientDesign] = useState(0);

    useEffect(() => {
      setSelectedGradientDesign(Math.floor(Math.random() * 15));
    }, [formData?.businessName]);

    const emotionalContentForHero = getEmotionalContentForHero();

    if (selectedGradientDesign === 0) {
      return (
        <GradientHero 
          title={emotionalContent.title || 'העתיד כאן'}
          subtitle={emotionalContent.subtitle || 'פתרונות מתקדמים'}
          primaryCta={{
            text: emotionalContent.buttons?.[0]?.text || 'התחילו היום',
            onClick: () => {}
          }}
        />
      );
    }
    if (selectedGradientDesign === 1) {
      return (
        <AnimatedHero 
          title={emotionalContent.title || 'העתיד'}
          subtitle={emotionalContent.subtitle || 'כאן עכשיו'}
          primaryCta={{
            text: emotionalContent.buttons?.[0]?.text || 'התחילו היום',
            onClick: () => {}
          }}
          secondaryCta={{
            text: 'קפיצה לשיחה',
            onClick: () => {}
          }}
        />
      );
    }
    if (selectedGradientDesign === 2) {
      return (
        <HeroGeometric 
          badge={emotionalContent.badge}
          title1={emotionalContent.title || 'העתיד'}
          title2={emotionalContent.subtitle || 'דיגיטלי'}
        />
      );
    }
    // Continue with other gradient designs...
    if (selectedGradientDesign >= 3) {
      return (
        <HeroNeonCyber formData={formData} currentColors={currentColors} content={emotionalContentForHero} />
      );
    }
  }

  // GLASS Design Style
  if (designStyle === 'glass') {
    const [selectedGlassDesign, setSelectedGlassDesign] = useState(0);

    useEffect(() => {
      setSelectedGlassDesign(Math.floor(Math.random() * 12));
    }, [formData?.businessName]);

    const emotionalContentForHero = getEmotionalContentForHero();

    if (selectedGlassDesign === 0) {
      return (
        <HeroGlassRefraction formData={formData} currentColors={currentColors} content={emotionalContentForHero} />
      );
    }
    if (selectedGlassDesign === 1) {
      return (
        <HeroLiquidMetal formData={formData} currentColors={currentColors} content={emotionalContentForHero} />
      );
    }
    // Continue with other glass designs...
    return (
      <HeroWithMockup 
        title={emotionalContent.title || 'זכוכית נוזלית'}
        description={emotionalContent.subtitle || 'עיצוב מתקדם וחדשני'}
      />
    );
  }

  // GEOMETRIC Design Style
  if (designStyle === 'geometric') {
    const emotionalContentForHero = getEmotionalContentForHero();
    return (
      <HeroGeometricShapes formData={formData} currentColors={currentColors} content={emotionalContentForHero} />
    );
  }

  // METAL Design Style
  if (designStyle === 'metal') {
    const emotionalContentForHero = getEmotionalContentForHero();
    return (
      <HeroLiquidMetal formData={formData} currentColors={currentColors} content={emotionalContentForHero} />
    );
  }

  // IMAGE Design Style
  if (designStyle === 'image') {
    const emotionalContentForHero = getEmotionalContentForHero();
    return (
      <HeroIsometricIllustration formData={formData} currentColors={currentColors} content={emotionalContentForHero} />
    );
  }

  // Default fallback
  return null;
};
