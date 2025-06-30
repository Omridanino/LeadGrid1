
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/types/colors";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { ChromeGrid } from "@/components/ui/chrome-grid";
import { AuroraHero } from "@/components/ui/futurastic-hero-section";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { Scene } from "@/components/ui/rubik-s-cube";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { BeamsBackground } from "@/components/ui/beams-background";
import { GradientHero } from "@/components/ui/gradient-hero";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { BackgroundCircles } from "@/components/ui/background-circles";
import { HorizonHeroSection } from "@/components/ui/horizon-hero-section";
import { HeroSectionClean } from "@/components/ui/hero-section-clean";
import { HeroSectionModern } from "@/components/ui/hero-section-modern";
import { HeroSectionLamp } from "@/components/ui/hero-section-lamp";
import { HeroSectionRetro } from "@/components/ui/hero-section-retro";
import { HeroIsometricIllustration } from "@/components/ui/hero-isometric-illustration";
import { HeroNeumorphism } from "@/components/ui/hero-neumorphism";
import { HeroMinimalTech } from "@/components/ui/hero-minimal-tech";
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
import { ArrowLeft, Play, Shield, Zap, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { EmotionalSection } from "@/components/EmotionalSection";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const designStyle = formData?.designStyle || 'basic';

  // Helper function to get inline style for text colors with gradient support
  const getTextStyle = (colorKey: string) => {
    const colorValue = content?.colors?.[colorKey];
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

  // Helper function to get inline style for button colors with gradient support
  const getButtonStyle = (buttonColor?: string) => {
    if (buttonColor) {
      if (buttonColor.includes('gradient')) {
        return { 
          background: buttonColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        backgroundColor: buttonColor,
        color: '#ffffff',
        border: 'none'
      };
    }
    return {};
  };

  // Helper function to get inline style for badge colors with gradient support
  const getBadgeStyle = () => {
    const badgeColor = content?.colors?.badge;
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

  // Helper function to create custom content props for components
  const getCustomContentProps = () => ({
    badge: content?.badge,
    headline: content?.headline || formData?.businessName,
    subheadline: content?.subheadline || content?.description,
    description: content?.description,
    buttons: content?.buttons,
    colors: content?.colors,
    cta: content?.cta
  });

  // Helper function to render advanced buttons with proper functionality
  const renderAdvancedButton = (button: any, index: number) => {
    const buttonStyle = button?.style || 'default';
    const buttonText = button?.text || content?.cta || 'לחץ כאן';
    
    console.log('Rendering button with style:', buttonStyle, 'text:', buttonText);
    
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
            style={getButtonStyle(button.color)}
          >
            {buttonText}
          </button>
        );
    }
  };

  // Handle Basic Design Style variations
  if (designStyle === 'basic' || designStyle.startsWith('hero-section-')) {
    const [selectedBasicDesign, setSelectedBasicDesign] = useState<string>('');

    useEffect(() => {
      // Generate a truly random selection based on timestamp and random
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
      
      console.log('Selected random design:', selectedDesign, 'from index:', randomIndex);
      setSelectedBasicDesign(selectedDesign);
    }, [formData?.businessName, formData?.businessType]);

    // Enhanced Mockup Hero (minimal) with custom content
    if (selectedBasicDesign === 'hero-section-minimal') {
      return (
        <>
          <section className="relative overflow-hidden min-h-screen bg-black/[0.96]">
            <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto">
                {content?.badge && (
                  <div 
                    className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                    style={getBadgeStyle()}
                  >
                    {content.badge}
                  </div>
                )}
                
                <h1 
                  className="text-5xl md:text-7xl font-bold mb-8"
                  style={getTextStyle('headline')}
                >
                  {content?.headline || formData?.businessName || 'העסק שלכם'}
                </h1>
                
                <p 
                  className="text-xl md:text-2xl mb-12"
                  style={getTextStyle('subheadline')}
                >
                  {content?.subheadline || content?.description || `פתרונות מקצועיים ל${formData?.targetAudience || 'הלקוחות שלכם'}`}
                </p>
                
                <div className="flex gap-4 justify-center flex-wrap">
                  {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                    renderAdvancedButton(button, index)
                  ) || (
                    <button 
                      className="px-8 py-4 rounded-xl font-semibold text-lg"
                      style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                    >
                      {content?.cta || 'בואו נתחיל'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }

    // All other basic designs - pass content as props
    const customContentProps = getCustomContentProps();

    if (selectedBasicDesign === 'hero-section-clean') {
      return (
        <>
          <HeroSectionClean
            formData={formData}
            currentColors={currentColors}
            content={customContentProps}
          />
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }

    if (selectedBasicDesign === 'hero-section-modern') {
      return (
        <>
          <HeroSectionModern
            formData={formData}
            currentColors={currentColors}
            content={customContentProps}
          />
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }

    if (selectedBasicDesign === 'hero-section-lamp') {
      return (
        <>
          <HeroSectionLamp
            formData={formData}
            currentColors={currentColors}
            content={customContentProps}
          />
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }

    if (selectedBasicDesign === 'hero-section-retro') {
      return (
        <>
          <HeroSectionRetro
            formData={formData}
            currentColors={currentColors}
            content={customContentProps}
          />
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }

    // Beams Background (classic) with custom content
    if (selectedBasicDesign === 'hero-section-classic') {
      return (
        <>
          <section className="relative overflow-hidden min-h-screen bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto">
                {content?.badge && (
                  <div 
                    className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                    style={getBadgeStyle()}
                  >
                    {content.badge}
                  </div>
                )}
                
                <h1 
                  className="text-5xl md:text-7xl font-bold mb-8"
                  style={getTextStyle('headline')}
                >
                  {content?.headline || formData?.businessName || 'חלומות דיגיטליים'}
                </h1>
                
                <p 
                  className="text-xl md:text-2xl mb-12"
                  style={getTextStyle('subheadline')}
                >
                  {content?.subheadline || content?.description || 'שם המחשבות מקבלות צורה והתודעה זורמת כמו כספית נוזלית'}
                </p>
                
                <div className="flex gap-4 justify-center flex-wrap">
                  {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                    renderAdvancedButton(button, index)
                  ) || (
                    <button 
                      className="px-8 py-4 rounded-xl font-semibold text-lg"
                      style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                    >
                      {content?.cta || 'היכנסו לזרימה'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }

    // Gradient Hero (elegant) with custom content
    if (selectedBasicDesign === 'hero-section-elegant') {
      return (
        <>
          <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=%229C92AC&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
            
            <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
              <div className="text-center max-w-4xl mx-auto">
                {content?.badge && (
                  <div 
                    className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                    style={getBadgeStyle()}
                  >
                    {content.badge}
                  </div>
                )}
                
                <h1 
                  className="text-5xl md:text-7xl font-bold mb-8"
                  style={getTextStyle('headline')}
                >
                  {content?.headline || formData?.businessName || 'העתיד כאן עכשיו'}
                </h1>
                
                <p 
                  className="text-xl md:text-2xl mb-12"
                  style={getTextStyle('subheadline')}
                >
                  {content?.subheadline || content?.description || 'expérience דיגיטלית מתקדמת שמביאה את העסק שלכם לעידן החדש'}
                </p>
                
                <div className="flex gap-4 justify-center flex-wrap">
                  {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                    renderAdvancedButton(button, index)
                  ) || (
                    <button 
                      className="px-8 py-4 rounded-xl font-semibold text-lg"
                      style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                    >
                      {content?.cta || 'נתחיל היום'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }

    // Default fallback
    return (
      <>
        <section className="relative overflow-hidden min-h-screen bg-black">
          <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {content?.badge && (
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                  style={getBadgeStyle()}
                >
                  {content.badge}
                </div>
              )}
              
              <h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                style={getTextStyle('headline')}
              >
                {content?.headline || formData?.businessName || 'העסק'}
              </h1>
              
              <p 
                className="text-xl md:text-2xl mb-12"
                style={getTextStyle('subheadline')}
              >
                {content?.subheadline || content?.description || 'פתרונות מקצועיים'}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                  renderAdvancedButton(button, index)
                ) || (
                  <button 
                    className="px-8 py-4 rounded-xl font-semibold text-lg"
                    style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                  >
                    {content?.cta || 'בואו נתחיל'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
        <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
      </>
    );
  }

  // Fallback to basic design with custom styles
  return (
    <>
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {content?.badge && (
              <div 
                className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                style={getBadgeStyle()}
              >
                {content.badge}
              </div>
            )}
            
            <h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              style={getTextStyle('headline')}
            >
              {content?.headline || formData?.businessName || 'העסק'}
            </h1>
            
            <p 
              className="text-xl md:text-2xl mb-12"
              style={getTextStyle('subheadline')}
            >
              {content?.subheadline || content?.description || 'פתרונות מקצועיים'}
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                renderAdvancedButton(button, index)
              ) || (
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-lg"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content?.cta || 'בואו נתחיל'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
    </>
  );
};
