
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

      {/* Full Screen Preview */}
      <div className={`w-full h-full overflow-y-auto overflow-x-hidden ${getStyleClass()}`}>
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
    </div>
  );
};

export default FullScreenPreview;
