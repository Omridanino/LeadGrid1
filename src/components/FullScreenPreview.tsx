
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroSection } from "@/components/preview/HeroSection";
import { NavigationSection } from "@/components/preview/NavigationSection";
import { ContentSections } from "@/components/preview/ContentSections";
import { PreviewStyles } from "@/components/preview/PreviewStyles";

interface FullScreenPreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenPreview = ({ content, currentColors, formData, heroImage, isOpen, onClose }: FullScreenPreviewProps) => {
  if (!isOpen) return null;

  const selectedElements = formData?.selectedElements || [];

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
    <div className="fixed inset-0 z-[9999] bg-black" dir="rtl">
      {/* Close Button */}
      <Button
        onClick={onClose}
        className="fixed top-4 right-4 z-[10000] bg-red-600 hover:bg-red-700 rounded-full p-3"
        size="sm"
      >
        <X className="w-5 h-5" />
      </Button>

      {/* Full Screen Preview - Scrollable */}
      <div 
        className={`w-full h-full overflow-y-auto overflow-x-hidden ${getStyleClass()}`} 
        style={{ 
          scrollBehavior: 'smooth',
          position: 'relative'
        }}
      >
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

        {/* Content Sections - All sections will be rendered */}
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

export default FullScreenPreview;
