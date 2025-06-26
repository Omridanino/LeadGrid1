
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
  const [currentGradient, setCurrentGradient] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  // Enhanced gradient backgrounds
  const gradientBackgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
  ];

  // Enhanced animated backgrounds with more sophisticated effects
  const animatedBackgrounds = [
    'radial-gradient(circle at 20% 80%, #120078 0%, #9d0208 50%, #f48c06 100%)',
    'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    'conic-gradient(from 0deg at 50% 50%, #ff006e, #fb5607, #ffbe0b, #8338ec)',
    'radial-gradient(circle at 50% 50%, #667eea 0%, #764ba2 50%, #f2994a 100%)',
    'linear-gradient(45deg, #fa709a, #fee140, #43e97b, #38f9d7)',
    'linear-gradient(270deg, #8b5cf6, #06b6d4, #10b981, #f59e0b)',
    'radial-gradient(ellipse at top, #e11d48, #7c3aed, #2563eb)',
    'conic-gradient(from 90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ef4444)'
  ];

  // Cycle through gradients
  useEffect(() => {
    if (formData.heroStyle === 'gradient') {
      const interval = setInterval(() => {
        setCurrentGradient((prev) => (prev + 1) % gradientBackgrounds.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [formData.heroStyle]);

  // Cycle through animations
  useEffect(() => {
    if (formData.heroStyle === 'animated') {
      const interval = setInterval(() => {
        setCurrentAnimation((prev) => (prev + 1) % animatedBackgrounds.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [formData.heroStyle]);

  const selectedElements = formData?.selectedElements || [];

  return (
    <div className="w-full bg-gray-900 text-white overflow-y-auto max-h-screen">
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
