
import React from 'react';
import { ColorScheme } from "@/types/colors";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
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
    <div 
      className={`hero w-full min-h-screen text-white ${getStyleClass()}`}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: currentColors?.heroBackground || '#1e1e1e',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="hero-content text-center flex flex-col items-center justify-center h-full w-full" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '2rem'
      }}>
        {content?.badge && (
          <div className="badge badge-secondary mb-4">{content.badge}</div>
        )}
        <h1 className="hero-title text-5xl font-bold mb-4" style={{ color: currentColors?.headlineColor || 'white' }}>
          {content?.headline || formData?.businessName}
        </h1>
        <p className="hero-subtitle text-2xl mb-8" style={{ color: currentColors?.subheadlineColor || 'white' }}>
          {content?.subheadline || content?.description}
        </p>
        {content?.cta && (
          <button className="btn btn-primary">{content.cta}</button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
