
import LandingPagePreview from "@/components/LandingPagePreview";
import InteractivePreviewEditor from "@/components/InteractivePreviewEditor";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

const GeneratedLandingPage = () => {
  const state = useGeneratedPageState();
  const location = useLocation();
  const [isEditMode, setIsEditMode] = useState(false);
  
  // Check URL parameters for preview and edit mode
  const urlParams = new URLSearchParams(location.search);
  const isPreviewMode = urlParams.get('preview') === 'true';
  const shouldEnableEdit = urlParams.get('edit') === 'true';
  
  // Initialize content generation
  const { generateCreativeContent, setGeneratedContent } = useContentGeneration(state.formData);
  
  // Load data from localStorage if in preview mode
  useEffect(() => {
    if (isPreviewMode) {
      const savedTemplateData = localStorage.getItem('previewTemplateData');
      const savedFormData = localStorage.getItem('previewFormData');
      
      if (savedTemplateData && savedFormData) {
        try {
          const templateData = JSON.parse(savedTemplateData);
          const formData = JSON.parse(savedFormData);
          
          const updatedFormData = {
            ...formData,
            selectedTemplate: templateData
          };
          
          console.log("Loading preview data:", updatedFormData);
          state.setFormData(updatedFormData);
          
          if (shouldEnableEdit) {
            setIsEditMode(true);
          } else {
            // Always enable edit mode when accessing via preview
            setIsEditMode(true);
          }
        } catch (error) {
          console.error("Error loading preview data:", error);
        }
      }
    }
  }, [isPreviewMode, shouldEnableEdit, state]);
  
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

  console.log("Debug - Current state:", {
    hasFormData: !!state.formData,
    hasSelectedTemplate: !!state.formData?.selectedTemplate,
    isPreviewMode,
    shouldEnableEdit
  });

  // Always show InteractivePreviewEditor when formData is available or we're in preview mode
  if (state.formData?.selectedTemplate || isPreviewMode) {
    console.log("Showing InteractivePreviewEditor");
    
    // Use data from localStorage if available, otherwise use state
    let effectiveFormData = state.formData;
    if (isPreviewMode) {
      const savedTemplateData = localStorage.getItem('previewTemplateData');
      const savedFormData = localStorage.getItem('previewFormData');
      
      if (savedTemplateData && savedFormData) {
        try {
          const templateData = JSON.parse(savedTemplateData);
          const formData = JSON.parse(savedFormData);
          
          effectiveFormData = {
            ...formData,
            selectedTemplate: templateData
          };
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
        }
      }
    }
    
    return (
      <InteractivePreviewEditor 
        isOpen={true}
        onClose={() => window.close()}
        generatedContent={null}
        formData={effectiveFormData}
        onSave={(updatedContent) => {
          console.log("Saving content:", updatedContent);
          // Save changes to localStorage
          const updatedFormData = {
            ...effectiveFormData,
            selectedTemplate: {
              ...effectiveFormData.selectedTemplate,
              ...updatedContent
            }
          };
          localStorage.setItem('previewFormData', JSON.stringify(updatedFormData));
          state.setFormData(updatedFormData);
        }}
        onDownload={() => {
          console.log("Downloading...");
          // Handle download
          import("@/utils/pageGenerator").then(({ generatePageHTML }) => {
            const htmlContent = generatePageHTML(effectiveFormData.selectedTemplate);
            const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${effectiveFormData.selectedTemplate.hero?.title?.replace(/[^a-zA-Z0-9\u0590-\u05FF]/g, '-') || 'landing-page'}.html`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative" dir="rtl">
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
