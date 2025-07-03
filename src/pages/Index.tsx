
import { useState } from 'react';
import { LandingPageQuestionnaire, QuestionnaireData } from '@/components/LandingPageQuestionnaire';
import { TemplateSelector } from '@/components/TemplateSelector';
import { TemplateEditor } from '@/components/template-editor/TemplateEditor';
import { LaunchSection } from '@/components/LaunchSection';
import { TemplateData } from '@/types/template';
import { generateContentFromQuestionnaire } from '@/utils/contentGenerator';
import { getDesignVariation } from '@/utils/designVariations';

type AppState = 'questionnaire' | 'template-selection' | 'editing' | 'launch';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('questionnaire');
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);

  const handleQuestionnaireComplete = (data: QuestionnaireData) => {
    console.log('Questionnaire completed:', data);
    setQuestionnaireData(data);
    setCurrentState('template-selection');
  };

  const handleTemplateSelect = (template: TemplateData) => {
    if (!questionnaireData) return;
    
    // Generate content based on questionnaire
    const generatedContent = generateContentFromQuestionnaire(questionnaireData, template);
    
    // Apply design variations
    const designVariation = getDesignVariation(questionnaireData.designStyle);
    const finalTemplate: TemplateData = {
      ...generatedContent,
      styles: {
        ...generatedContent.styles,
        ...designVariation.styles,
        primaryColor: questionnaireData.branding.primaryColor,
        secondaryColor: questionnaireData.branding.secondaryColor,
      },
      effects: designVariation.effects
    };
    
    console.log('Template selected and customized:', finalTemplate);
    setSelectedTemplate(finalTemplate);
    setCurrentState('editing');
  };

  const handleEditComplete = (editedTemplate: TemplateData) => {
    console.log('Editing completed:', editedTemplate);
    setSelectedTemplate(editedTemplate);
    setCurrentState('launch');
  };

  const handleBackToQuestionnaire = () => {
    setCurrentState('questionnaire');
    setQuestionnaireData(null);
    setSelectedTemplate(null);
  };

  const handleBackToTemplateSelection = () => {
    setCurrentState('template-selection');
  };

  const handleBackToEditing = () => {
    setCurrentState('editing');
  };

  return (
    <div className="min-h-screen">
      {currentState === 'questionnaire' && (
        <LandingPageQuestionnaire 
          onComplete={handleQuestionnaireComplete}
          onBack={() => {}} // No back from questionnaire
        />
      )}
      
      {currentState === 'template-selection' && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <TemplateSelector 
            onSelect={handleTemplateSelect}
            onBack={handleBackToQuestionnaire}
          />
        </div>
      )}
      
      {currentState === 'editing' && selectedTemplate && (
        <TemplateEditor 
          template={selectedTemplate}
          questionnaireData={questionnaireData}
          onComplete={handleEditComplete}
          onBack={handleBackToTemplateSelection}
        />
      )}
      
      {currentState === 'launch' && selectedTemplate && (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
          <LaunchSection 
            template={selectedTemplate}
            onBack={handleBackToEditing}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
