
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import TemplateEditor from "@/components/template-editor/TemplateEditor";
import TemplatePreview from "@/components/template-editor/TemplatePreview";
import PublishingWizard from "@/components/PublishingWizard";
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentStep === "questionnaire" && (
          <LandingPageQuestionnaire onComplete={handleQuestionnaireComplete} />
        )}

        {currentStep === "editor" && template && (
          <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">עריכת התבנית</h1>
                <div className="flex gap-2">
                  <button
                    onClick={handleStartOver}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    התחל מחדש
                  </button>
                  <button
                    onClick={handlePublish}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    פרסם עכשיו
                  </button>
                </div>
              </div>
              <TemplateEditor
                template={template}
                onTemplateUpdate={handleTemplateUpdate}
              />
            </div>
            <div className="bg-white rounded-lg shadow-sm border">
              <TemplatePreview template={template} />
            </div>
          </div>
        )}

        {currentStep === "publish" && (
          <PublishingWizard
            pageData={pageData}
            onBack={handleBackToEditor}
            onComplete={handleStartOver}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
