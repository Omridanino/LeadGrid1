
import LandingPagePreview from "@/components/LandingPagePreview";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    if (location.state?.selectedTemplate && location.state.formData) {
      const updatedFormData = {
        ...location.state.formData,
        selectedTemplate: location.state.selectedTemplate
      };
      console.log("Setting formData with selected template:", updatedFormData);
      state.setFormData(updatedFormData);
    }
  }, [location.state, state.formData]);

  // Generate content when formData is available and no template is selected
  useEffect(() => {
    if (state.formData && !state.content && !state.formData.selectedTemplate) {
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

  console.log('GeneratedLandingPage - state.content:', state.content);
  console.log('GeneratedLandingPage - state.formData:', state.formData);
  console.log('GeneratedLandingPage - content whyUs:', state.content?.whyUs);
  console.log('GeneratedLandingPage - content whatWeGive:', state.content?.whatWeGive);

  return (
    <div className="min-h-screen bg-black text-white relative" dir="rtl">
      {/* Main Preview - Full Width */}
      <div className="w-full min-h-screen">
        <LandingPagePreview 
          content={state.content}
          currentColors={state.currentColors}
          formData={state.formData}
          heroImage={state.heroImage}
          elements={elementsAsStrings}
        />
      </div>
    </div>
  );
};

export default GeneratedLandingPage;
