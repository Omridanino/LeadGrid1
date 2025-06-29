
import React from 'react';
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { GradientHero } from "@/components/ui/gradient-hero";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroFloatingCubes } from "@/components/ui/hero-floating-cubes";
import { HeroFluidBlobs } from "@/components/ui/hero-fluid-blobs";
import { HeroGeometricShapes } from "@/components/ui/hero-geometric-shapes";
import { HeroNeonCyber } from "@/components/ui/hero-neon-cyber";
import { HeroDigitalWaves } from "@/components/ui/hero-digital-waves";
import { HeroParticleStorm } from "@/components/ui/hero-particle-storm";
import { HeroHolographic } from "@/components/ui/hero-holographic";
import { EmotionalSection } from "@/components/ui/emotional-section";
import { ColorScheme } from '@/types/colors';
import { getRandomVariation } from '@/utils/designVariations';

interface HeroSectionProps {
  formData?: any;
  content?: any;
  currentColors?: ColorScheme;
  heroImage?: string;
  elements?: string[];
}

const HeroSection = ({ formData, content, currentColors, heroImage, elements }: HeroSectionProps) => {
  const renderHeroSection = () => {
    const heroContent = content?.hero || content || {};
    const designStyle = formData?.designStyle || formData?.heroStyle || 'modern';
    
    // Get random variation based on design style
    const variation = getRandomVariation(designStyle);
    const combinedDesignStyle = `${designStyle}-${variation.id}`;

    switch (designStyle) {
      case 'modern':
        return (
          <>
            <HeroWithMockup
              title={heroContent.headline || formData?.businessName || 'דף נחיתה מודרני'}
              description={heroContent.subheadline || heroContent.description || 'פתרון מתקדם ומקצועי לעסק שלכם'}
              primaryCta={{
                text: heroContent.cta || 'בואו נתחיל',
                onClick: () => {}
              }}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="modern"
              />
            )}
          </>
        );

      case 'gradient':
      case '3d':
        return (
          <>
            <GradientHero
              title={heroContent.headline || formData?.businessName || 'דף נחיתה גרדיינט'}
              subtitle={heroContent.subheadline || heroContent.description || 'עיצוב מתקדם עם גרדיינטים מרהיבים'}
              primaryCta={{
                text: heroContent.cta || 'התחילו היום',
                onClick: () => {}
              }}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle={combinedDesignStyle}
              />
            )}
          </>
        );

      case 'futuristic':
        return (
          <>
            <HeroFuturistic
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="futuristic"
              />
            )}
          </>
        );

      case 'parallax':
        return (
          <>
            <HeroParallax
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="parallax"
              />
            )}
          </>
        );

      case 'floating-cubes':
        return (
          <>
            <HeroFloatingCubes
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="floating-cubes"
              />
            )}
          </>
        );

      case 'fluid-blobs':
        return (
          <>
            <HeroFluidBlobs
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="fluid-blobs"
              />
            )}
          </>
        );

      case 'geometric':
        return (
          <>
            <HeroGeometricShapes
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="geometric"
              />
            )}
          </>
        );

      case 'neon':
        return (
          <>
            <HeroNeonCyber
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="neon"
              />
            )}
          </>
        );

      case 'digital-waves':
        return (
          <>
            <HeroDigitalWaves
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="digital-waves"
              />
            )}
          </>
        );

      case 'particle-storm':
        return (
          <>
            <HeroParticleStorm
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="particle-storm"
              />
            )}
          </>
        );

      case 'holographic':
        return (
          <>
            <HeroHolographic
              formData={formData}
              currentColors={currentColors}
              content={heroContent}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="holographic"
              />
            )}
          </>
        );

      default:
        return (
          <>
            <HeroWithMockup
              title={heroContent.headline || formData?.businessName || 'דף נחיתה מודרני'}
              description={heroContent.subheadline || heroContent.description || 'פתרון מתקדם ומקצועי לעסק שלכם'}
              primaryCta={{
                text: heroContent.cta || 'בואו נתחיל',
                onClick: () => {}
              }}
            />
            {content?.emotional && (
              <EmotionalSection
                formData={formData}
                currentColors={currentColors}
                content={content.emotional}
                designStyle="modern"
              />
            )}
          </>
        );
    }
  };

  return (
    <>
      {renderHeroSection()}
    </>
  );
};

export default HeroSection;
