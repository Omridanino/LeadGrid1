
import LandingPagePreview from "@/components/LandingPagePreview";
import ContentElementsEditor from "@/components/ContentElementsEditor";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GeneratedLandingPage = () => {
  const state = useGeneratedPageState();
  const location = useLocation();
  
  // Initialize content generation
  const { generateCreativeContent, setGeneratedContent } = useContentGeneration(state.formData);
  
  // Get formData from navigation state or use existing formData
  useEffect(() => {
    if (location.state?.formData && !state.formData) {
      console.log("Setting formData from navigation:", location.state.formData);
      state.setFormData(location.state.formData);
    }
  }, [location.state, state.formData]);

  // Generate content when formData is available
  useEffect(() => {
    if (state.formData && !state.content) {
      console.log("Generating content for formData:", state.formData);
      const newContent = generateCreativeContent();
      console.log("Generated content:", newContent);
      state.setContent(newContent);
      setGeneratedContent(newContent);
    }
  }, [state.formData, state.content, generateCreativeContent, setGeneratedContent]);

  // Convert PageElement[] to string[] for elements prop
  const elementsAsStrings = state.elements?.map(element => 
    typeof element === 'string' ? element : element.type || ''
  ).filter(Boolean) || [];

  return (
    <div className="min-h-screen bg-black text-white flex" dir="rtl">
      {/* Content and Elements Editor - מוחזר לצד שמאל */}
      <ContentElementsEditor 
        content={state.content}
        onContentChange={state.setContent}
        formData={state.formData}
      />
      
      {/* Main Preview */}
      <main className="flex-1">
        <LandingPagePreview 
          content={state.content}
          currentColors={state.currentColors}
          formData={state.formData}
          heroImage={state.heroImage}
          elements={elementsAsStrings}
        />
      </main>
    </div>
  );
};

export default GeneratedLandingPage;
