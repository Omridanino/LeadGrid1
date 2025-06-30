
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

  // Helper function to get inline style for text colors with gradient support for emotional section
  const getEmotionalTextStyle = (colorKey: string) => {
    const emotionalContent = content?.emotionalSection || {};
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

  // Helper function to get inline style for badge colors with gradient support for emotional section
  const getEmotionalBadgeStyle = () => {
    const emotionalContent = content?.emotionalSection || {};
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

  // Dynamic Background Components based on design style
  const renderDynamicBackground = () => {
    const backgroundVariations = [
      'floating-cubes',
      'neon-cyber', 
      'holographic',
      'morphing-shapes',
      'liquid-metal',
      'glass-refraction',
      'particle-storm',
      'crystal-matrix',
      'digital-waves',
      'neon-grid-portal',
      'quantum-bubbles',
      'cosmic-geometry'
    ];

    const randomVariation = backgroundVariations[Math.floor(Math.random() * backgroundVariations.length)];

    switch (designStyle) {
      case 'glass':
        switch (randomVariation) {
          case 'floating-cubes':
            return <HeroFloatingCubes />;
          case 'glass-refraction':
            return <HeroGlassRefraction />;
          case 'holographic':
            return <HeroHolographic />;
          case 'liquid-metal':
            return <HeroLiquidMetal />;
          default:
            return <HeroFluidBlobs />;
        }
      
      case 'geometric':
        switch (randomVariation) {
          case 'cosmic-geometry':
            return <HeroCosmicGeometry />;
          case 'crystal-matrix':
            return <HeroCrystalMatrix />;
          case 'morphing-shapes':
            return <HeroMorphingShapes />;
          case 'floating-cubes':
            return <HeroFloatingCubes />;
          default:
            return <HeroGeometricShapes />;
        }
      
      case 'metal':
        switch (randomVariation) {
          case 'liquid-metal':
            return <HeroLiquidMetal />;
          case 'neon-cyber':
            return <HeroNeonCyber />;
          case 'digital-waves':
            return <HeroDigitalWaves />;
          case 'particle-storm':
            return <HeroParticleStorm />;
          default:
            return <HeroMinimalTech />;
        }
      
      case 'image':
        return <HeroIsometricIllustration />;
      
      case 'gradient':
      default:
        switch (randomVariation) {
          case 'neon-grid-portal':
            return <HeroNeonGridPortal />;
          case 'quantum-bubbles':
            return <HeroQuantumBubbles />;
          case 'particle-storm':
            return <HeroParticleStorm />;
          case 'digital-waves':
            return <HeroDigitalWaves />;
          case 'holographic':
            return <HeroHolographic />;
          case 'cosmic-geometry':
            return <HeroCosmicGeometry />;
          default:
            return <GradientHero 
              title={content?.headline || formData?.businessName || 'העסק שלכם'}
              subtitle={content?.subheadline || content?.description || `פתרונות מקצועיים ל${formData?.targetAudience || 'הלקוחות שלכם'}`}
            />;
        }
    }
  };

  // Return ONE unified section with dynamic background
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
        {renderDynamicBackground()}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto py-20">
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
        
        {/* Emotional Section Content - Same background, continuous flow */}
        <div className="py-20 px-8">
          <div className="container mx-auto max-w-4xl text-center">
            {content?.emotionalSection?.badge && (
              <div 
                className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold"
                style={getEmotionalBadgeStyle() || { background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', color: '#ffffff' }}
              >
                {content.emotionalSection.badge}
              </div>
            )}
            
            <h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              style={getEmotionalTextStyle('title') || { color: '#ffffff' }}
            >
              {content?.emotionalSection?.title || 'הגיע הזמן לפעול'}
            </h2>
            
            {content?.emotionalSection?.subtitle && (
              <h3 
                className="text-2xl md:text-3xl mb-8"
                style={getEmotionalTextStyle('subtitle') || { color: '#d1d5db' }}
              >
                {content.emotionalSection.subtitle}
              </h3>
            )}
            
            <p 
              className="text-xl md:text-2xl leading-relaxed mb-12"
              style={getEmotionalTextStyle('text') || { color: '#d1d5db' }}
            >
              {content?.emotionalSection?.text || 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה'}
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              {content?.emotionalSection?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                renderAdvancedButton(button, index)
              ) || (
                <button 
                  className="px-8 py-4 rounded-xl font-semibold text-lg"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  התחל עכשיו
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
