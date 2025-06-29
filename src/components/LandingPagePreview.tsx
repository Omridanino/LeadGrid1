import { ColorScheme } from "@/types/colors";
import { EmotionalSection } from "./EmotionalSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ModernFeaturesSection } from "./ModernFeaturesSection";
import { Footer } from "./Footer";
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
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { HeroParallax } from "@/components/ui/hero-parallax";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  // Get the selected hero design from formData
  const selectedHeroDesign = formData?.selectedHeroDesign || formData?.designStyle || 'hero-liquid-metal';
  
  console.log('LandingPagePreview - selectedHeroDesign:', selectedHeroDesign);

  const renderHeroSection = () => {
    switch (selectedHeroDesign) {
      case 'hero-section-clean':
        return (
          <HeroSectionClean
            formData={formData}
            currentColors={currentColors}
            content={content}
          />
        );
      case 'hero-section-modern':
        return (
          <HeroSectionModern
            formData={formData}
            currentColors={currentColors}
            content={content}
          />
        );
      case 'hero-section-lamp':
        return (
          <HeroSectionLamp
            formData={formData}
            currentColors={currentColors}
            content={content}
          />
        );
      case 'hero-section-retro':
        return (
          <HeroSectionRetro
            formData={formData}
            currentColors={currentColors}
            content={content}
          />
        );
      case 'gradient-hero':
        return (
          <GradientHero 
            title={content.headline}
            subtitle={content.subheadline}
            primaryCta={{
              text: content.cta,
              onClick: () => {}
            }}
          />
        );
      case 'animated-hero':
        return (
          <AnimatedHero 
            title={content.headline}
            subtitle={content.subheadline}
            primaryCta={{
              text: content.cta,
              onClick: () => {}
            }}
            secondaryCta={{
              text: 'קפיצה לשיחה',
              onClick: () => {}
            }}
          />
        );
      case 'hero-geometric':
        return (
          <HeroGeometric 
            badge={content.badge}
            title1={content.headline}
            title2={content.subheadline}
          />
        );
      case 'hero-neon-cyber':
        return (
          <HeroNeonCyber 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-glass-refraction':
        return (
          <HeroGlassRefraction 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-liquid-metal':
        return (
          <HeroLiquidMetal 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-with-mockup':
        return (
          <HeroWithMockup 
            title={content.headline}
            description={content.subheadline}
          />
        );
      case 'hero-geometric-shapes':
        return (
          <HeroGeometricShapes 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-isometric-illustration':
        return (
          <HeroIsometricIllustration 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-fluid-blobs':
        return (
          <HeroFluidBlobs 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-floating-cubes':
        return (
          <HeroFloatingCubes 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-digital-waves':
        return (
          <HeroDigitalWaves 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-particle-storm':
        return (
          <HeroParticleStorm 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-futuristic':
        return (
          <HeroFuturistic 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-parallax':
        return (
          <HeroParallax 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-neumorphism':
        return (
          <HeroNeumorphism 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-minimal-tech':
        return (
          <HeroMinimalTech 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-holographic':
        return (
          <HeroHolographic 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-morphing-shapes':
        return (
          <HeroMorphingShapes 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-crystal-matrix':
        return (
          <HeroCrystalMatrix 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-neon-grid-portal':
        return (
          <HeroNeonGridPortal 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-quantum-bubbles':
        return (
          <HeroQuantumBubbles 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      case 'hero-cosmic-geometry':
        return (
          <HeroCosmicGeometry 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
      default:
        return (
          <HeroLiquidMetal 
            formData={formData} 
            currentColors={currentColors} 
            content={content} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {renderHeroSection()}
      
      {elements.includes('emotional') && (
        <EmotionalSection 
          content={content} 
          currentColors={currentColors} 
          formData={formData}
          selectedHeroDesign={selectedHeroDesign}
        />
      )}
      
      {elements.includes('testimonials') && (
        <TestimonialsSection content={content} currentColors={currentColors} />
      )}
      
      {elements.includes('modern-features') && (
        <ModernFeaturesSection content={content} currentColors={currentColors} />
      )}
      
      <Footer content={content} currentColors={currentColors} />
    </div>
  );
};

export default LandingPagePreview;
