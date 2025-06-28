
import { useState, useEffect } from "react";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroSectionClean } from "@/components/ui/hero-section-clean";
import { HeroSectionLamp } from "@/components/ui/hero-section-lamp";
import { HeroSectionModern } from "@/components/ui/hero-section-modern";
import { HeroSectionRetro } from "@/components/ui/hero-section-retro";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

// Get text style classes for styling
const getTextStyleClasses = (style: string) => {
  switch (style) {
    case "black-text":
      return "text-black";
    case "white-text":
      return "text-white";
    case "gold-text":
      return "text-yellow-400";
    case "gradient-gold-text":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
    case "gradient-purple-text":
      return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
    case "gradient-blue-text":
      return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
    default:
      return "text-white";
  }
};

const getButtonStyleClasses = (style: string) => {
  switch (style) {
    case "black-on-white":
      return "bg-white text-black border border-black";
    case "white-on-black":
      return "bg-black text-white border border-white";
    case "gradient-gold-black":
      return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
    case "gradient-gold-white":
      return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
    case "gradient-purple-tech":
      return "bg-gradient-to-r from-purple-600 to-white text-white border-0";
    default:
      return "bg-blue-600 text-white";
  }
};

const getRandomBasicDesign = (formData: any) => {
  const designs = ['clean', 'lamp', 'modern', 'retro'];
  const seed = formData?.businessName?.length || 0;
  const randomIndex = (seed * 7 + (formData?.mainServices?.length || 0) * 3) % designs.length;
  return designs[randomIndex];
};

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const [selectedDesign, setSelectedDesign] = useState<string>('clean');

  useEffect(() => {
    if (formData) {
      const design = getRandomBasicDesign(formData);
      setSelectedDesign(design);
    }
  }, [formData]);

  // Prepare content for hero components
  const heroContent = {
    businessName: content?.headline || formData?.businessName || "שם העסק",
    businessStory: content?.subheadline || formData?.businessStory || "הסיפור שלנו",
    mainServices: content?.description || formData?.mainServices || "השירותים שלנו",
    badge: content?.badge || formData?.businessName || "תג עליון",
    buttons: content?.buttons || [
      { text: "התחל עכשיו", style: "black-on-white", visible: true },
      { text: "למד עוד", style: "white-on-black", visible: true }
    ],
    // Pass styling classes
    headlineStyle: content?.headlineStyle,
    subheadlineStyle: content?.subheadlineStyle,
    badgeStyle: content?.badgeStyle,
    getTextStyleClasses,
    getButtonStyleClasses
  };

  const commonProps = {
    formData: { ...formData, ...heroContent },
    currentColors,
    content: heroContent
  };

  switch (selectedDesign) {
    case 'lamp':
      return <HeroSectionLamp {...commonProps} />;
    case 'modern':
      return <HeroSectionModern {...commonProps} />;
    case 'retro':
      return <HeroSectionRetro {...commonProps} />;
    default:
      return <HeroSectionClean {...commonProps} />;
  }
};
