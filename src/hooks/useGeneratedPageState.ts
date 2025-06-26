
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ColorScheme } from "@/components/ColorEditor";
import { useContentGeneration } from "@/hooks/useContentGeneration";

interface PageElement {
  id: string;
  type: 'title' | 'text' | 'image' | 'testimonial' | 'faq' | 'blog' | 'whychoose';
  content: any;
  order: number;
}

const defaultFormData = {
  businessName: "העסק שלי",
  businessType: "שירותים עסקיים",
  targetAudience: "לקוחות פוטנציאליים",
  mainGoal: "הגדלת מכירות",
  keyFeatures: "שירות מקצועי, מהירות, אמינות",
  brandColors: "כחול וכסף",
  contactInfo: "טלפון: 050-1234567\nאימייל: info@business.co.il",
  heroStyle: "gradient",
  selectedElements: [] as string[]
};

const defaultColors: ColorScheme = {
  primary: "#3b82f6",
  secondary: "#8b5cf6", 
  accent: "#06b6d4",
  background: "#1f2937",
  text: "#ffffff",
  headlineColor: "#ffffff",
  subheadlineColor: "#e0f2fe",
  featuresColor: "#ffffff",
  featuresTextColor: "#e5e7eb",
  aboutColor: "#ffffff",
  aboutTextColor: "#d1d5db",
  contactColor: "#ffffff",
  contactTextColor: "#d1d5db"
};

export const useGeneratedPageState = () => {
  const location = useLocation();
  const [showSidePanel, setShowSidePanel] = useState(true);
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  const [showDesignEditor, setShowDesignEditor] = useState(false);
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [heroImage, setHeroImage] = useState<string>('');
  const [currentColors, setCurrentColors] = useState<ColorScheme>(defaultColors);
  const [formData, setFormData] = useState(location.state?.formData || defaultFormData);
  const [elements, setElements] = useState<PageElement[]>([]);

  const { generatedContent, setGeneratedContent, generateCreativeContent } = useContentGeneration(formData);

  // Initialize content
  useEffect(() => {
    if (!generatedContent) {
      setGeneratedContent(generateCreativeContent());
    }
  }, []);

  const content = generatedContent || generateCreativeContent();

  // Track changes for save status
  useEffect(() => {
    setIsSaved(false);
  }, [generatedContent, currentColors, formData, heroImage, elements]);

  return {
    showSidePanel,
    setShowSidePanel,
    showWordPressGuide,
    setShowWordPressGuide,
    showDesignEditor,
    setShowDesignEditor,
    showAdvancedEditor,
    setShowAdvancedEditor,
    isSaved,
    setIsSaved,
    heroImage,
    setHeroImage,
    currentColors,
    setCurrentColors,
    formData,
    setFormData,
    content,
    generatedContent,
    setGeneratedContent,
    generateCreativeContent,
    elements,
    setElements
  };
};
