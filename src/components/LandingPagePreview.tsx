
import { useState, useEffect } from "react";
import { ColorScheme } from "@/types/colors";
import { HeroSection } from "@/components/preview/HeroSection";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  // Show loading or placeholder if formData is not ready
  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full" style={{ 
      maxHeight: '100vh', 
      overflowY: 'auto', 
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      <div className="w-full min-h-screen" style={{ position: 'relative' }}>
        {/* Hero Section Only */}
        <HeroSection 
          content={content}
          currentColors={currentColors}
          formData={formData}
          heroImage={heroImage}
        />
      </div>
    </div>
  );
};

export default LandingPagePreview;
