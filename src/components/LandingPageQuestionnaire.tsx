
import TemplateSelector from "./TemplateSelector";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: LandingPageQuestionnaireProps) => {
  return <TemplateSelector isOpen={isOpen} onClose={onClose} />;
};

export default LandingPageQuestionnaire;
