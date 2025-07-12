
import { useState } from "react";
import Header from "@/components/Header";
import SimpleHeroSection from "@/components/SimpleHeroSection";
import ModernFeaturesSection from "@/components/ModernFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import LiveContentEditor from "@/components/LiveContentEditor";

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [isLiveEditorOpen, setIsLiveEditorOpen] = useState(false);

  const handleOpenQuestionnaire = () => {
    console.log("Index: Opening questionnaire");
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    console.log("Index: Closing questionnaire");
    setIsQuestionnaireOpen(false);
  };

  const handleOpenLiveEditor = () => {
    setIsLiveEditorOpen(true);
  };

  const handleCloseLiveEditor = () => {
    setIsLiveEditorOpen(false);
  };

  console.log("Index render - isQuestionnaireOpen:", isQuestionnaireOpen);

  // If live editor is open, show only the editor
  if (isLiveEditorOpen) {
    return (
      <LiveContentEditor 
        onClose={handleCloseLiveEditor}
        onSave={(data) => {
          console.log('Content saved:', data);
          handleCloseLiveEditor();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white md:text-right text-center" dir="rtl">
      <Header onStartQuestionnaire={handleOpenQuestionnaire} onOpenLiveEditor={handleOpenLiveEditor} />
      <SimpleHeroSection onStartQuestionnaire={handleOpenQuestionnaire} onOpenLiveEditor={handleOpenLiveEditor} />
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
