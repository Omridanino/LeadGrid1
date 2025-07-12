
import CompleteLandingPageQuestionnaire from "./CompleteLandingPageQuestionnaire";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: LandingPageQuestionnaireProps) => {
  return <CompleteLandingPageQuestionnaire isOpen={isOpen} onClose={onClose} />;
};

export default LandingPageQuestionnaire;
