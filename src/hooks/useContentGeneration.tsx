
import { useState, useCallback } from 'react';
import { generateRichContent } from '@/utils/contentGenerator';

export const useContentGeneration = (formData: any) => {
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateCreativeContent = useCallback(() => {
    console.log("Generating creative content for:", formData);
    
    if (!formData) {
      console.log("No form data provided, using defaults");
      return generateRichContent({});
    }

    // Generate rich, comprehensive content
    const richContent = generateRichContent(formData);
    
    console.log("Generated rich content:", richContent);
    return richContent;
  }, [formData]);

  return {
    generateCreativeContent,
    generatedContent,
    setGeneratedContent
  };
};
