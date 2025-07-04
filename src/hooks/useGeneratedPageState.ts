
import { useState, useEffect } from 'react';
import { ColorScheme } from '@/types/colors';

export const useGeneratedPageState = () => {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentColors, setCurrentColors] = useState<ColorScheme>({
    primary: "#3b82f6",
    secondary: "#8b5cf6", 
    accent: "#06b6d4",
    background: "#000000",
    heroBackground: "#000000",
    text: "#ffffff",
    headlineColor: "#ffffff",
    subheadlineColor: "#e0f2fe",
    featuresColor: "#ffffff",
    featuresTextColor: "#e5e7eb",
    aboutColor: "#ffffff",
    aboutTextColor: "#d1d5db",
    contactColor: "#ffffff",
    contactTextColor: "#d1d5db"
  });
  
  const [formData, setFormData] = useState<any>(null);
  const [heroImage, setHeroImage] = useState<string>('');
  const [isFullScreenPreview, setIsFullScreenPreview] = useState(false);
  
  // Add missing state properties for compatibility
  const [isSaved, setIsSaved] = useState(false);
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false);
  const [showDesignEditor, setShowDesignEditor] = useState(false);
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  const [showSidePanel, setShowSidePanel] = useState(true);
  const [elements, setElements] = useState<any[]>([]);

  // Add the missing pageData and template properties
  const [pageData, setPageData] = useState<any>(null);
  const [template, setTemplate] = useState<any>(null);

  // Load saved data on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('generatedContent');
    const savedFormData = localStorage.getItem('formData');
    const savedColors = localStorage.getItem('pageColors');
    const savedHeroImage = localStorage.getItem('heroImage');
    const savedPageData = localStorage.getItem('pageData');
    const savedTemplate = localStorage.getItem('template');

    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    if (savedFormData) {
      console.log("Loading saved formData from localStorage:", JSON.parse(savedFormData));
      setFormData(JSON.parse(savedFormData));
    }
    if (savedColors) {
      setCurrentColors(JSON.parse(savedColors));
    }
    if (savedHeroImage) {
      setHeroImage(savedHeroImage);
    }
    if (savedPageData) {
      setPageData(JSON.parse(savedPageData));
    }
    if (savedTemplate) {
      setTemplate(JSON.parse(savedTemplate));
    }
  }, []);

  // Save formData to localStorage when it changes
  useEffect(() => {
    if (formData) {
      console.log("Saving formData to localStorage:", formData);
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  // Save pageData to localStorage when it changes
  useEffect(() => {
    if (pageData) {
      localStorage.setItem('pageData', JSON.stringify(pageData));
    }
  }, [pageData]);

  // Save template to localStorage when it changes
  useEffect(() => {
    if (template) {
      localStorage.setItem('template', JSON.stringify(template));
    }
  }, [template]);

  // Handle color changes - NO TOAST NOTIFICATIONS
  const handleColorChange = (newColors: ColorScheme) => {
    setCurrentColors(newColors);
    localStorage.setItem('pageColors', JSON.stringify(newColors));
  };

  const setGeneratedContent = (newContent: any) => {
    setContent(newContent);
    localStorage.setItem('generatedContent', JSON.stringify(newContent));
  };

  const generateCreativeContent = () => {
    return content || {};
  };

  return {
    content,
    setContent,
    isLoading,
    setIsLoading,
    currentColors,
    setCurrentColors,
    formData,
    setFormData,
    heroImage,
    setHeroImage,
    isFullScreenPreview,
    setIsFullScreenPreview,
    handleColorChange,
    isSaved,
    setIsSaved,
    showAdvancedEditor,
    setShowAdvancedEditor,
    showDesignEditor,
    setShowDesignEditor,
    showWordPressGuide,
    setShowWordPressGuide,
    showSidePanel,
    setShowSidePanel,
    elements,
    setElements,
    setGeneratedContent,
    generateCreativeContent,
    // Add the missing properties
    pageData,
    setPageData,
    template,
    setTemplate
  };
};
