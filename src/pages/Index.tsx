
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import TemplateEditor from "@/components/TemplateEditor";
import TemplatePreview from "@/components/template-editor/TemplatePreview";
import { PublishingWizard } from "@/components/PublishingWizard";
import Header from "@/components/Header";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState("questionnaire");
  const { pageData, setPageData, template, setTemplate } = useGeneratedPageState();

  // Handle URL parameters for direct template editing
  useEffect(() => {
    const templateParam = searchParams.get('template');
    const editParam = searchParams.get('edit');
    
    if (templateParam && editParam === 'true' && !pageData) {
      // Load template data from localStorage or API
      const savedTemplate = localStorage.getItem(`template_${templateParam}`);
      if (savedTemplate) {
        try {
          const templateData = JSON.parse(savedTemplate);
          setTemplate(templateData);
          setPageData(templateData);
          setCurrentStep("editor");
        } catch (error) {
          console.error('Error loading template:', error);
        }
      }
    }
  }, [searchParams, pageData, setTemplate, setPageData]);

  const handleQuestionnaireComplete = (data: any) => {
    setPageData(data);
    setCurrentStep("editor");
  };

  const handleTemplateUpdate = (updatedTemplate: any) => {
    setTemplate(updatedTemplate);
    setPageData(updatedTemplate);
  };

  const handlePublish = () => {
    setCurrentStep("publish");
  };

  const handleBackToEditor = () => {
    setCurrentStep("editor");
  };

  const handleStartOver = () => {
    setPageData(null);
    setTemplate(null);
    setCurrentStep("questionnaire");
  };

  const handleCloseEditor = () => {
    setCurrentStep("questionnaire");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentStep === "questionnaire" && (
          <LandingPageQuestionnaire 
            isOpen={true}
            onClose={handleQuestionnaireComplete}
          />
        )}

        {currentStep === "editor" && template && (
          <TemplateEditor
            template={template}
            onTemplateChange={handleTemplateUpdate}
            onClose={handleCloseEditor}
          />
        )}

        {currentStep === "publish" && (
          <PublishingWizard
            template={pageData}
            isOpen={true}
            onClose={handleBackToEditor}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
