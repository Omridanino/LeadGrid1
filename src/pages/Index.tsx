
import { useState } from 'react';
import Header from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import ModernFeaturesSection from '@/components/ModernFeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import LandingPageQuestionnaire from '@/components/LandingPageQuestionnaire';

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  console.log('Index render - isQuestionnaireOpen:', isQuestionnaireOpen);

  const handleGetStarted = () => {
    setIsQuestionnaireOpen(true);
  };


  return (
    <div className="min-h-screen bg-background">
      <Header onStartQuestionnaire={() => setIsQuestionnaireOpen(true)} />
      <HeroSection onGetStarted={handleGetStarted} />
      <ModernFeaturesSection />
      <TestimonialsSection />
      <Footer />
      
      <LandingPageQuestionnaire 
        isOpen={isQuestionnaireOpen}
        onClose={() => setIsQuestionnaireOpen(false)} 
      />
    </div>
  );
};

export default Index;
