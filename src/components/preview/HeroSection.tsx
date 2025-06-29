
import React from 'react';
import { ColorScheme } from "@/types/colors";
import { AnimatedHero } from "@/components/ui/animated-hero";
import EmotionalSection from "@/components/EmotionalSection";

interface HeroSectionProps {
  formData: any;
  currentColors: ColorScheme;
  content: any;
  heroImage?: string;
}

const HeroSection = ({ formData, currentColors, content, heroImage }: HeroSectionProps) => {
  const selectedGradientDesign = 3;

  const renderHeroContent = () => {
    if (selectedGradientDesign === 3) {
      return (
        <>
          <AnimatedHero 
            title1={content?.headline || formData?.businessName || 'זכוכית'}
            title2="נוזלית"
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
