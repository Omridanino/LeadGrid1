
import { useState } from "react";
import Header from "@/components/Header";
import ModernHeroSection from "@/components/ModernHeroSection";
import ModernFeaturesSection from "@/components/ModernFeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
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
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <Header onStartQuestionnaire={handleOpenQuestionnaire} />
      <ModernHeroSection onStartQuestionnaire={handleOpenQuestionnaire} />
      <ModernFeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
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
