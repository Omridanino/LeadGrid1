
import { useState } from "react";
import AdvancedQuestionnaire from "./AdvancedQuestionnaire";
import AdvancedLandingPageGenerator from "./AdvancedLandingPageGenerator";
import { FormData } from "@/utils/questionnaireUtils";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: LandingPageQuestionnaireProps) => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleQuestionnaireComplete = (data: FormData) => {
    console.log('Questionnaire completed with data:', data);
    setFormData(data);
    setShowQuestionnaire(false);
  };

  const handleGeneratorClose = () => {
    setShowQuestionnaire(true);
    setFormData(null);
    onClose();
  };

  return (
    <>
      {showQuestionnaire && (
        <AdvancedQuestionnaire
          isOpen={isOpen}
          onClose={onClose}
          onComplete={handleQuestionnaireComplete}
        />
      )}
      {!showQuestionnaire && formData && (
        <AdvancedLandingPageGenerator
          isOpen={isOpen}
          onClose={handleGeneratorClose}
          formData={formData}
        />
      )}
    </>
  );
};

export default LandingPageQuestionnaire;
