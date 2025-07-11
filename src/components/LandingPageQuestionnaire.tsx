
import AutomaticLandingPageGenerator from "./AutomaticLandingPageGenerator";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: LandingPageQuestionnaireProps) => {
  return <AutomaticLandingPageGenerator isOpen={isOpen} onClose={onClose} />;
};

export default LandingPageQuestionnaire;
