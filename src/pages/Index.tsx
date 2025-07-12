
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
    // Create demo content for the visual editor
    const demoContent = {
      hero: {
        title: "ברוכים הבאים לעסק שלכם",
        subtitle: "פתרונות מתקדמים לצרכים שלכם",
        description: "אנחנו מספקים שירותים איכותיים ומקצועיים שיעזרו לכם להשיג את המטרות שלכם ולהצליח בעסק.",
        button1Text: "התחל עכשיו",
        button2Text: "למד עוד",
        badge: "חדש!"
      },
      features: {
        title: "התכונות שלנו",
        subtitle: "גלה את היתרונות הייחודיים שלנו",
        items: [
          { title: "איכות גבוהה", description: "אנו מתחייבים לספק שירותים באיכות הגבוהה ביותר", icon: "star" },
          { title: "תמיכה 24/7", description: "צוות התמיכה שלנו זמין עבורכם בכל שעות היממה", icon: "heart" },
          { title: "חדשנות מתמדת", description: "אנו תמיד מעדכנים ומשפרים את השירותים שלנו", icon: "zap" }
        ]
      },
      about: {
        title: "אודותינו",
        subtitle: "מי אנחנו ומה אנחנו עושים",
        description: "אנחנו חברה מובילה בתחום עם ניסיון רב שנים. המטרה שלנו היא לספק ללקוחותינו את השירות הטוב ביותר ולעזור להם להצליח."
      },
      contact: {
        title: "נשמח לשמוע ממכם",
        subtitle: "השאירו פרטים ונחזור אליכם במהרה"
      }
    };

    const demoFormData = {
      companyName: "החברה שלי",
      businessType: "שירותים מקצועיים",
      selectedTemplate: demoContent
    };

    return (
      <VisualLandingPageEditor 
        isOpen={isVisualEditorOpen}
        onClose={handleCloseVisualEditor}
        generatedContent={demoContent}
        formData={demoFormData}
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
