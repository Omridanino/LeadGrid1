
import { useState } from "react";
import Header from "@/components/Header";
import SimpleHeroSection from "@/components/SimpleHeroSection";
import ModernFeaturesSection from "@/components/ModernFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import VisualLandingPageEditor from "@/components/VisualLandingPageEditor";

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [isVisualEditorOpen, setIsVisualEditorOpen] = useState(false);

  const handleOpenQuestionnaire = () => {
    console.log("Index: Opening questionnaire");
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    console.log("Index: Closing questionnaire");
    setIsQuestionnaireOpen(false);
  };

  const handleOpenVisualEditor = () => {
    setIsVisualEditorOpen(true);
  };

  const handleCloseVisualEditor = () => {
    setIsVisualEditorOpen(false);
  };

  console.log("Index render - isQuestionnaireOpen:", isQuestionnaireOpen);

  // If visual editor is open, show only the editor
  if (isVisualEditorOpen) {
    return (
      <VisualLandingPageEditor 
        isOpen={isVisualEditorOpen}
        onClose={handleCloseVisualEditor}
        generatedContent={{}}
        formData={{}}
        onContentUpdate={(data) => {
          console.log('Content updated:', data);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white md:text-right text-center" dir="rtl">
      <Header onStartQuestionnaire={handleOpenQuestionnaire} onOpenLiveEditor={handleOpenVisualEditor} />
      <SimpleHeroSection onStartQuestionnaire={handleOpenQuestionnaire} onOpenLiveEditor={handleOpenVisualEditor} />
      <ModernFeaturesSection />
      <TestimonialsSection />
      <Footer />
      
      {/* Questionnaire Modal */}
      <LandingPageQuestionnaire 
        isOpen={isQuestionnaireOpen} 
        onClose={handleCloseQuestionnaire} 
      />
    </div>
  );
};

export default Index;
