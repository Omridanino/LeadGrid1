import { useState } from "react";
import Header from "@/components/Header";
import ModernHeroSection from "@/components/ModernHeroSection";
import ModernFeaturesSection from "@/components/ModernFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import { RealLaunchButton } from "@/components/RealLaunchButton";

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
      
      {/* Real Launch Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🚀 מוכן להפוך את האתר לאמיתי?
            </h2>
            <p className="text-xl text-gray-400 mb-2">
              קנה דומיין אמיתי ופרסם את האתר שלך לאוויר
            </p>
            <p className="text-gray-500">
              מעל 10,000 אתרים כבר פורסמו באמצעותנו
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <RealLaunchButton />
          </div>

          {/* Success Stories */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">15,000+</div>
              <div className="text-gray-400 text-sm">דומיינים נרכשו</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-gray-400 text-sm">זמן פעילות</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">תמיכה טכנית</div>
            </div>
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
