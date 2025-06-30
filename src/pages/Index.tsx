
import { useState } from "react";
import Header from "@/components/Header";
import ModernHeroSection from "@/components/ModernHeroSection";
import ModernFeaturesSection from "@/components/ModernFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import { LaunchButton } from "@/components/LaunchButton";

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
      <ModernHeroSection onStartQuestionnaire={handleOpenQuestionnaire} />
      
      {/* Launch Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              מוכן להשיק את האתר שלך?
            </h2>
            <p className="text-xl text-gray-400">
              הפוך את האתר שלך לחי ופעיל תוך דקות ספורות
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <LaunchButton />
          </div>
        </div>
      </section>
      
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
