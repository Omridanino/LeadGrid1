
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/types/colors";
import { HeroSection } from "@/components/preview/HeroSection";
import { NavigationSection } from "@/components/preview/NavigationSection";

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

      {/* Full Screen Preview - Only Hero Section */}
      <div 
        className={`w-full h-full ${getStyleClass()}`} 
        style={{ 
          overflowY: 'auto',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          position: 'relative'
        }}
      >
        {/* Hero Section Only */}
        <HeroSection 
          content={content}
          currentColors={currentColors}
          formData={formData}
          heroImage={heroImage}
        />

        {/* Navigation */}
        <NavigationSection formData={formData} />
      </div>
    </div>
  );
};

export default FullScreenPreview;
