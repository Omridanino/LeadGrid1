
import HeroEditor from "@/components/HeroEditor";
import EmotionalSectionEditor from "@/components/EmotionalSectionEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorScheme } from "@/types/colors";

interface ContentElementsEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  onColorsChange: (newColors: ColorScheme) => void;
  formData?: any;
}

const ContentElementsEditor = ({ 
  content, 
  onContentChange, 
  onColorsChange, 
  formData 
}: ContentElementsEditorProps) => {
  console.log("ContentElementsEditor - content:", content);
  console.log("ContentElementsEditor - formData:", formData);

  // Initialize content with safe defaults
  const safeContent = content || {
    hero: {
      headline: '',
      subheadline: '',
      cta: '',
      badge: '',
      stats: {}
    },
    emotional: {
      badge: 'הסיפור שלנו',
      headline: 'הרגש שמניע אותנו קדימה', 
      description: 'כל מה שאנחנו עושים נובע מהלב - מהרצון העמוק לעזור, ליצור ולהשפיע.',
      buttons: [],
      colors: {
        badge: '',
        headline: '',
        subheadline: ''
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-white">עריכת תוכן</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <HeroEditor
            content={safeContent.hero || safeContent}
            onContentChange={(newHeroContent) => {
              console.log("Hero content changed:", newHeroContent);
              const updatedContent = {
                ...safeContent,
                hero: newHeroContent
              };
              onContentChange(updatedContent);
            }}
            formData={formData}
          />
          
          <EmotionalSectionEditor
            content={safeContent}
            onContentChange={onContentChange}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentElementsEditor;
