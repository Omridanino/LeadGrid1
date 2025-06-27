
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

  // Get unique style class based on hero style - with null check
  const getStyleClass = () => {
    if (!formData || !formData.heroStyle) {
      return 'style-3d'; // default fallback
    }
    
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
      <div className={`w-full min-h-screen ${getStyleClass()}`} style={{ position: 'relative' }}>
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

        {/* All Content Sections - Always render all sections */}
        <ContentSections 
          content={content}
          currentColors={currentColors}
          formData={formData}
          selectedElements={selectedElements}
        />

        {/* Footer Section */}
        <footer style={{ 
          background: 'rgba(0,0,0,0.5)', 
          backdropFilter: 'blur(16px)', 
          padding: '4rem 0', 
          textAlign: 'center' 
        }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {formData.businessName || 'העסק שלי'}
              </h3>
              <p className="text-gray-400 mb-8">
                © 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.
              </p>
              <div className="flex justify-center gap-8 text-gray-400">
                <span>טלפון: 050-1234567</span>
                <span>אימייל: info@business.co.il</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPagePreview;
