
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

  // Get appropriate background class based on design style
  const getBackgroundClass = () => {
    switch (formData.heroStyle) {
      case 'glass':
        return 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
      case 'metal':
        return 'bg-gradient-to-br from-gray-900 via-black to-gray-800';
      case 'geometric':
        return 'bg-[#030303]';
      default:
        return 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900';
    }
  };

  return (
    <div className={`w-full text-white overflow-y-auto max-h-screen ${getBackgroundClass()}`}>
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
