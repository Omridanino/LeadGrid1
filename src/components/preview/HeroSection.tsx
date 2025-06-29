
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
import { HeroSimpleDark } from "@/components/ui/hero-simple-dark";
import { HeroFloatingElements } from "@/components/ui/hero-floating-elements";
import { HeroSpaceParticles } from "@/components/ui/hero-space-particles";
import { HeroTechGradient } from "@/components/ui/hero-tech-gradient";
import { HeroCrystalElements } from "@/components/ui/hero-crystal-elements";
import { HeroBankingRibbons } from "@/components/ui/hero-banking-ribbons";
import { ArrowLeft, Play, Shield, Zap, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

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
      const availableDesigns = [
        'hero-section-clean',
        'hero-section-minimal', 
        'hero-section-classic',
        'hero-section-elegant',
        'hero-section-modern',
        'hero-section-lamp',
        'hero-section-retro'
      ];
      
      // Create a unique seed based on business name and type to ensure consistency
      const seed = (formData?.businessName || '') + (formData?.businessType || '') + Date.now();
      const randomIndex = Math.abs(seed.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % availableDesigns.length;
      const selectedDesign = availableDesigns[randomIndex];
      
      console.log('Selected random basic design:', selectedDesign, 'from index:', randomIndex);
      setSelectedBasicDesign(selectedDesign);
    }, [formData?.businessName, formData?.businessType]);

    // Enhanced content props
    const customContentProps = getCustomContentProps();

    if (selectedBasicDesign === 'hero-section-clean') {
      return (
        <HeroSectionClean
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-modern') {
      return (
        <HeroSectionModern
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-lamp') {
      return (
        <HeroSectionLamp
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-retro') {
      return (
        <HeroSectionRetro
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    // Enhanced Mockup Hero (minimal) with custom content
    if (selectedBasicDesign === 'hero-section-minimal') {
      return (
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
                className="text-5xl md:text-7xl font-bold mb-8 text-white"
                style={getTextStyle('headline')}
              >
                {content?.headline || formData?.businessName || 'העסק שלכם'}
              </h1>
              
              <p 
                className="text-xl md:text-2xl mb-12 text-gray-300"
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
      );
    }

    // Return elegant for classic and elegant
    return (
      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              {content?.headline || formData?.businessName || 'העסק'}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              {content?.subheadline || content?.description || 'פתרונות מקצועיים'}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'בואו נתחיל'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 3D Tech Design Style - עם סגנונות מותאמים אישית
  if (designStyle === '3d-tech') {
    const [selectedDesign, setSelectedDesign] = useState(0);

    useEffect(() => {
      // Create a unique seed based on business info for consistent randomization
      const seed = (formData?.businessName || '') + (formData?.businessType || '') + (formData?.targetAudience || '');
      const randomValue = Math.abs(seed.split('').reduce((a, b) => a + b.charCodeAt(0), 0));
      const randomIndex = randomValue % 20; // 20 different 3D designs
      console.log('Selected random 3D design:', randomIndex, 'with seed:', seed);
      setSelectedDesign(randomIndex);
    }, [formData?.businessName, formData?.businessType, formData?.targetAudience]);

    // Enhanced content props
    const customContentProps = {
      ...getCustomContentProps(),
      buttons: content?.buttons?.filter((btn: any) => btn.visible !== false)
    };

    // New designs from uploaded images (designs 8-19)
    if (selectedDesign === 8) {
      return <HeroSimpleDark formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 9) {
      return <HeroFloatingElements formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 10) {
      return <HeroSpaceParticles formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 11) {
      return <HeroTechGradient formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 12) {
      return <HeroCrystalElements formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 13) {
      return <HeroBankingRibbons formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 14) {
      return <HeroFuturistic formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 15) {
      return <GradientHero formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 16) {
      return <AnimatedHero formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 17) {
      return <HeroGeometric formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 18) {
      return <HorizonHeroSection formData={formData} currentColors={currentColors} content={customContentProps} />;
    }
    
    if (selectedDesign === 19) {
      return <HeroWithMockup formData={formData} currentColors={currentColors} content={customContentProps} />;
    }

    // Original designs (0-7)
    if (selectedDesign === 0) {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black/[0.96]">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-screen">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <div className="max-w-2xl">
                {content?.badge && (
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm"
                    style={getBadgeStyle()}
                  >
                    <Zap className="w-4 h-4" />
                    <span>{content.badge}</span>
                  </div>
                )}
                
                <h1 
                  className="text-4xl md:text-6xl font-bold mb-6 text-white"
                  style={getTextStyle('headline')}
                >
                  {content?.headline || formData?.businessName || 'חוויה תלת מימדית'}
                </h1>
                
                <p 
                  className="text-lg leading-relaxed mb-8 max-w-lg text-gray-300"
                  style={getTextStyle('subheadline')}
                >
                  {content?.subheadline || content?.description || `הביאו את העסק שלכם למימד חדש עם טכנולוגיות מתקדמות ועיצוב חדשני`}
                </p>
                
                <div className="flex gap-4">
                  {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                    renderAdvancedButton(button, index)
                  ) || (
                    <button 
                      className="px-6 py-3 rounded-lg font-semibold transition"
                      style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                    >
                      {content?.cta || 'התחלו עכשיו'}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      );
    }

    if (selectedDesign === 1) {
      return (
        <div className="h-screen w-screen relative">
          <ChromeGrid />
          <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center text-center">
            {content?.badge && (
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm pointer-events-auto"
                style={getBadgeStyle()}
              >
                <Shield className="w-4 h-4" />
                <span>{content.badge}</span>
              </div>
            )}
            
            <h1 
              className="text-5xl md:text-7xl font-light mb-4 tracking-widest whitespace-nowrap text-white"
              style={getTextStyle('headline')}
            >
              {content?.headline || formData?.businessName || 'דיגיטל אמיץ'}
            </h1>
            
            <p 
              className="text-sm md:text-lg font-mono tracking-wide mb-8 max-w-2xl text-gray-300"
              style={getTextStyle('subheadline')}
            >
              {content?.subheadline || 'טכנולוגיה שמביאה חיים למגע - דרך חדשה לעשות דברים'}
            </p>
            
            <div className="flex gap-4 pointer-events-auto">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                renderAdvancedButton(button, index)
              ) || (
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition transform hover:scale-105"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content?.cta || 'היכנסו'}
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (selectedDesign === 2) {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black">
          <AuroraHero />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {content?.headline || formData?.businessName || 'עתיד אורורה'}
              </h1>
              <p className="text-xl mb-12 text-gray-300">
                {content?.subheadline || 'חוויה חדשנית עם אפקטים ויזואליים מרהיבים'}
              </p>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'גלה עוד'}
              </button>
            </div>
          </div>
        </section>
      );
    }

    if (selectedDesign === 3) {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black">
          <LavaLamp />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {content?.headline || formData?.businessName || 'זרם נוזלי'}
              </h1>
              <p className="text-xl mb-12 text-gray-300">
                {content?.subheadline || 'עיצוב דינמי עם תנועות נוזליות מרהיבות'}
              </p>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'התחל כעת'}
              </button>
            </div>
          </div>
        </section>
      );
    }

    if (selectedDesign === 4) {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black">
          <Scene />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {content?.headline || formData?.businessName || 'קוביית רוביק'}
              </h1>
              <p className="text-xl mb-12 text-gray-300">
                {content?.subheadline || 'פתרונות מורכבים בפשטות מדהימה'}
              </p>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'פתור איתנו'}
              </button>
            </div>
          </div>
        </section>
      );
    }

    if (selectedDesign === 5) {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black">
          <BeamsBackground />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {content?.headline || formData?.businessName || 'קרני אור'}
              </h1>
              <p className="text-xl mb-12 text-gray-300">
                {content?.subheadline || 'נתיבי אור המובילים לעתיד דיגיטלי'}
              </p>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'עקוב אחר האור'}
              </button>
            </div>
          </div>
        </section>
      );
    }

    if (selectedDesign === 6) {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black">
          <InteractiveRobotSpline />
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                {content?.headline || formData?.businessName || 'רובוט אינטראקטיבי'}
              </h1>
              <p className="text-xl mb-12 text-gray-300">
                {content?.subheadline || 'טכנולוגיה אינטראקטיבית עם אינטליגנציה מלאכותית'}
              </p>
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'פגוש את הרובוט'}
              </button>
            </div>
          </div>
        </section>
      );
    }

    // Fallback design
    return (
      <section className="relative overflow-hidden min-h-screen bg-black">
        <BackgroundCircles />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              {content?.headline || formData?.businessName || 'עיגולי רקע'}
            </h1>
            <p className="text-xl mb-12 text-gray-300">
              {content?.subheadline || 'עיצוב גיאומטרי עם תנועות מרהיבות'}
            </p>
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-lg"
              style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
            >
              {content?.cta || 'היכנס למעגל'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Fallback to basic design with custom styles
  return (
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
  );
};
