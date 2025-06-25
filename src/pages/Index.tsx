
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <Header onStartQuestionnaire={() => setIsQuestionnaireOpen(true)} />
      <HeroSection onStartQuestionnaire={() => setIsQuestionnaireOpen(true)} />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
      
      {/* Questionnaire Modal */}
      <LandingPageQuestionnaire 
        isOpen={isQuestionnaireOpen} 
        onClose={() => setIsQuestionnaireOpen(false)} 
      />
    </div>
  );
};

export default Index;
