
import { useState, useEffect } from "react";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroSectionModern } from "@/components/ui/hero-section-modern";
import { HeroSectionLamp } from "@/components/ui/hero-section-lamp";
import { HeroSectionRetro } from "@/components/ui/hero-section-retro";
import { HeroSectionClean } from "@/components/ui/hero-section-clean";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  // שמירת הסגנון הנוכחי ב-state כדי שלא ישתנה בכל עדכון
  const [currentDesignStyle, setCurrentDesignStyle] = useState<string>(() => {
    const savedStyle = localStorage.getItem('currentDesignStyle');
    return savedStyle || 'clean';
  });

  // שמירת הסגנון ב-localStorage כשהוא משתנה
  useEffect(() => {
    if (currentDesignStyle) {
      localStorage.setItem('currentDesignStyle', currentDesignStyle);
    }
  }, [currentDesignStyle]);

  // קביעת הסגנון על פי formData או השמור
  const designStyle = formData?.designStyle || currentDesignStyle;

  // עדכון הסגנון אם השתנה ב-formData
  useEffect(() => {
    if (formData?.designStyle && formData.designStyle !== currentDesignStyle) {
      setCurrentDesignStyle(formData.designStyle);
    }
  }, [formData?.designStyle, currentDesignStyle]);

  // רינדור הקומפוננטה המתאימה לפי הסגנון
  const renderHeroComponent = () => {
    switch (designStyle) {
      case 'modern':
        return <HeroSectionModern formData={formData} currentColors={currentColors} content={content} />;
      case 'lamp':
        return <HeroSectionLamp formData={formData} currentColors={currentColors} content={content} />;
      case 'retro':
        return <HeroSectionRetro formData={formData} currentColors={currentColors} content={content} />;
      case '3d-tech':
        return <HeroFuturistic formData={formData} currentColors={currentColors} content={content} />;
      case 'clean':
      case 'minimal':
      case 'classic':
      case 'elegant':
      case 'animated':
      default:
        return <HeroSectionClean formData={formData} currentColors={currentColors} content={content} />;
    }
  };

  return (
    <div className="hero-section-container">
      {renderHeroComponent()}
    </div>
  );
};
