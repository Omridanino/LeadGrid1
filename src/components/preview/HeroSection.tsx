import React from 'react';
import { ColorScheme } from "@/types/colors";
import { AnimatedHero } from "@/components/ui/animated-hero";
import EmotionalSection from "@/components/EmotionalSection";

interface HeroSectionProps {
  formData: any;
  currentColors: ColorScheme;
  content: any;
}

const HeroSection = ({ formData, currentColors, content }: HeroSectionProps) => {
  const selectedGradientDesign = 3;

  const renderHeroContent = () => {
    if (selectedGradientDesign === 3) {
      return (
        <>
          <AnimatedHero 
            title={content?.headline || formData?.businessName || 'זכוכית'}
            subtitle="נוזלית"
            primaryCta={{
              text: content?.cta || 'התחילו היום',
              onClick: () => {}
            }}
            secondaryCta={{
              text: 'קפיצה לשיחה',
              onClick: () => {}
            }}
          />
          <EmotionalSection content={content} currentColors={currentColors} formData={formData} />
        </>
      );
    }
  };

  return (
    <div>
      {renderHeroContent()}
    </div>
  );
};

export default HeroSection;
