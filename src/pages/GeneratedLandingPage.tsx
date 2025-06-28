
import LandingPagePreview from "@/components/LandingPagePreview";
import ContentElementsEditor from "@/components/ContentElementsEditor";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GeneratedLandingPage = () => {
  const state = useGeneratedPageState();
  const location = useLocation();
  const [isEditorVisible, setIsEditorVisible] = useState(true);
  
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
    <div className="min-h-screen bg-black text-white relative" dir="rtl">
      {/* Toggle Button - Fixed Position */}
      {!isEditorVisible && (
        <Button
          onClick={() => setIsEditorVisible(true)}
          className="fixed top-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white"
          size="sm"
        >
          <ChevronRight className="w-4 h-4 ml-1" />
          הצג עורך
        </Button>
      )}

      {/* Content Editor - Fixed Left Side */}
      {isEditorVisible && (
        <div className="fixed top-0 left-0 w-80 h-full bg-black/95 backdrop-blur-sm border-r border-gray-800 z-50 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-lg font-bold">עורך תוכן</h2>
              <div className="flex gap-2">
                <Button
                  onClick={() => setIsEditorVisible(false)}
                  size="sm"
                  className="bg-gray-600 hover:bg-gray-700"
                >
                  <ChevronLeft className="w-4 h-4 ml-1" />
                  הסתר
                </Button>
              </div>
            </div>
            
            <ContentElementsEditor 
              content={state.content}
              onContentChange={state.setContent}
              formData={state.formData}
            />
          </div>
        </div>
      )}
      
      {/* Main Preview - With Dynamic Left Padding */}
      <div 
        className="w-full min-h-screen transition-all duration-300" 
        style={{ paddingLeft: isEditorVisible ? '320px' : '0px' }}
      >
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
