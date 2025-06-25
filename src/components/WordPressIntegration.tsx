
import WordPressGuide from "./WordPressGuide";

interface WordPressIntegrationProps {
  htmlCode: string;
}

const WordPressIntegration = ({ htmlCode }: WordPressIntegrationProps) => {
  return <WordPressGuide htmlCode={htmlCode} />;
};

export default WordPressIntegration;
