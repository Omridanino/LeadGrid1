
import { useState, useEffect } from "react";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroSection } from "@/components/preview/HeroSection";
import { NavigationSection } from "@/components/preview/NavigationSection";
import { ContentSections } from "@/components/preview/ContentSections";
import { PreviewStyles } from "@/components/preview/PreviewStyles";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  const selectedElements = formData?.selectedElements || [];

  // Get unique style class based on hero style
  const getStyleClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'style-geometric';
      case 'glass':
        return 'style-glass';
      case 'metal':
        return 'style-metal';
      case 'image':
        return 'style-image';
      default:
        return 'style-3d';
    }
  };

  return (
    <div className={`w-full h-full overflow-y-auto overflow-x-hidden ${getStyleClass()}`} style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <PreviewStyles />

      {/* Hero Section */}
      <HeroSection 
        content={content}
        currentColors={currentColors}
        formData={formData}
        heroImage={heroImage}
      />

      {/* Navigation */}
      <NavigationSection formData={formData} />

      {/* Content Sections */}
      <ContentSections 
        content={content}
        currentColors={currentColors}
        formData={formData}
        selectedElements={selectedElements}
      />
    </div>
  );
};

export default LandingPagePreview;
