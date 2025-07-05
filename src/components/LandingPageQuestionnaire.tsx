
import TemplateSelector from "./TemplateSelector";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const LandingPageQuestionnaire = ({ isOpen, onClose, initialCategory }: LandingPageQuestionnaireProps) => {
  return <TemplateSelector isOpen={isOpen} onClose={onClose} initialCategory={initialCategory} />;
};

export default LandingPageQuestionnaire;
