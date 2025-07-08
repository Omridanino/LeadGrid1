
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      
      {/* Content */}
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
