
import { useState } from "react";
import Header from "@/components/Header";

import ModernFeaturesSection from "@/components/ModernFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  const handleOpenQuestionnaire = () => {
    console.log("Index: Opening questionnaire");
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    console.log("Index: Closing questionnaire");
    setIsQuestionnaireOpen(false);
  };

  console.log("Index render - isQuestionnaireOpen:", isQuestionnaireOpen);

  return (
    <div className="min-h-screen bg-black text-white md:text-right text-center" dir="rtl">
      <Header onStartQuestionnaire={handleOpenQuestionnaire} />
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">דף הבית</h1>
      </div>
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
