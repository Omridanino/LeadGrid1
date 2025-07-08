
import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ModernFeaturesSection } from '@/components/ModernFeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { LandingPageQuestionnaire } from '@/components/LandingPageQuestionnaire';
import { ServicesFlow } from '@/components/services/ServicesFlow';

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [showServicesFlow, setShowServicesFlow] = useState(false);

  console.log('Index render - isQuestionnaireOpen:', isQuestionnaireOpen);

  const handleGetStarted = () => {
    setShowServicesFlow(true);
  };

  const handleServicesComplete = () => {
    setShowServicesFlow(false);
    // כאן אפשר להוסיף לוגיקה נוספת כמו מעבר לדף הצלחה
  };

  const handleServicesBack = () => {
    setShowServicesFlow(false);
  };

  if (showServicesFlow) {
    return (
      <ServicesFlow
        onComplete={handleServicesComplete}
        onBack={handleServicesBack}
      />
    );
  }

  if (isQuestionnaireOpen) {
    return (
      <LandingPageQuestionnaire 
        onClose={() => setIsQuestionnaireOpen(false)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onGetStarted={handleGetStarted} />
      <ModernFeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
