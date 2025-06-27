
import { useState, useEffect } from 'react';
import { ColorScheme } from '@/components/ColorEditor';

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
  
  // Add back missing state properties
  const [isSaved, setIsSaved] = useState(false);
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false);
  const [showDesignEditor, setShowDesignEditor] = useState(false);
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  const [showSidePanel, setShowSidePanel] = useState(true);
  const [elements, setElements] = useState<any[]>([]);

  // Load saved data on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('generatedContent');
    const savedFormData = localStorage.getItem('formData');
    const savedColors = localStorage.getItem('pageColors');
    const savedHeroImage = localStorage.getItem('heroImage');

    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
    if (savedColors) {
      setCurrentColors(JSON.parse(savedColors));
    }
    if (savedHeroImage) {
      setHeroImage(savedHeroImage);
    }
  }, []);

  // Handle color changes - NO TOAST NOTIFICATIONS
  const handleColorChange = (newColors: ColorScheme) => {
    setCurrentColors(newColors);
    localStorage.setItem('pageColors', JSON.stringify(newColors));
    // Removed all toast notifications from here
  };

  // Add back missing functions
  const setGeneratedContent = (newContent: any) => {
    setContent(newContent);
    localStorage.setItem('generatedContent', JSON.stringify(newContent));
  };

  const generateCreativeContent = () => {
    // Return existing content or generate new one based on formData
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
    // Add back missing properties
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
    generateCreativeContent
  };
};
