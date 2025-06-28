
import { useState, useEffect } from "react";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroSectionModern } from "@/components/ui/hero-section-modern";
import { HeroSectionLamp } from "@/components/ui/hero-section-lamp";
import { HeroSectionRetro } from "@/components/ui/hero-section-retro";
import { HeroSectionClean } from "@/components/ui/hero-section-clean";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

const getRandomDesignStyle = () => {
  const basicStyles = ['clean', 'minimal', 'classic', 'elegant', 'modern', 'lamp', 'retro', 'animated'];
  return basicStyles[Math.floor(Math.random() * basicStyles.length)];
};

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  // שמירת הסגנון הנוכחי ב-state כדי שלא ישתנה בכל עדכון
  const [currentDesignStyle, setCurrentDesignStyle] = useState<string>(() => {
    // קבלת הסגנון משמור או יצירת חדש אם אין
    const savedStyle = localStorage.getItem('currentDesignStyle');
    return savedStyle || getRandomDesignStyle();
  });

  // שמירת הסגנון ב-localStorage כשהוא משתנה
  useEffect(() => {
    localStorage.setItem('currentDesignStyle', currentDesignStyle);
  }, [currentDesignStyle]);

  // רק אם אין סגנון שמור, נבחר חדש (זה קורה רק בטעינה הראשונה)
  useEffect(() => {
    if (!localStorage.getItem('currentDesignStyle')) {
      const newStyle = getRandomDesignStyle();
      setCurrentDesignStyle(newStyle);
    }
  }, []);

  // אם המשתמש ביקש להחליף סגנון במפורש (זה יכול להיות תכונה עתידית)
  const changeDesignStyle = () => {
    const newStyle = getRandomDesignStyle();
    setCurrentDesignStyle(newStyle);
  };

  const designStyle = formData?.designStyle || currentDesignStyle;

  // רינדור הקומפוננטה המתאימה לפי הסגנון
  const renderHeroComponent = () => {
    switch (designStyle) {
      case 'modern':
        return <HeroSectionModern formData={formData} currentColors={currentColors} content={content} />;
      case 'lamp':
        return <HeroSectionLamp formData={formData} currentColors={currentColors} content={content} />;
      case 'retro':
        return <HeroSectionRetro formData={formData} currentColors={currentColors} content={content} />;
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
