import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Wand2 } from 'lucide-react';
import { BusinessInfoStep } from './questionnaire/BusinessInfoStep';
import { GoalsAndFeaturesStep } from './questionnaire/GoalsAndFeaturesStep';
import { DesignStyleStep } from './questionnaire/DesignStyleStep';
import { ElementsSelectionStep } from './questionnaire/ElementsSelectionStep';
import { BrandingStep } from './questionnaire/BrandingStep';
import { FormData, initialFormData, validateRequiredFields, getStepTitle } from '@/utils/questionnaireUtils';

interface AdvancedQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (formData: FormData) => void;
}

const AdvancedQuestionnaire = ({ isOpen, onClose, onComplete }: AdvancedQuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [open, setOpen] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    console.log('Form completed with data:', formData);
    onComplete(formData);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!(formData.businessName && formData.businessType && formData.businessStory && formData.businessValues);
      case 2:
        return !!(formData.mainServices && formData.uniqueAdvantages && formData.competitionDifference && 
                 formData.targetAudience && formData.clientPainPoints && formData.successStories && formData.urgencyMessage);
      case 3:
        return !!(formData.designStyle);
      case 4:
        return formData.selectedElements.length > 0;
      case 5:
        return !!(formData.contactInfo);
      default:
        return true;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BusinessInfoStep
            formData={formData}
            updateFormData={updateFormData}
            open={open}
            setOpen={setOpen}
          />
        );
      case 2:
        return (
          <GoalsAndFeaturesStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <DesignStyleStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <ElementsSelectionStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 5:
        return (
          <BrandingStep
            formData={{
              brandColors: formData.brandColors || '',
              contactInfo: formData.contactInfo
            }}
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-700 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">בניית דף נחיתה מקצועי</h2>
            <Button variant="ghost" onClick={onClose} className="text-gray-400 hover:text-white">
              ✕
            </Button>
          </div>
          
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">שלב {currentStep} מתוך {totalSteps}</span>
              <span className="text-blue-400">{Math.round(progress)}% הושלם</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          {/* Steps Indicator */}
          <div className="flex justify-between mt-4">
            {Array.from({ length: totalSteps }, (_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;
              
              return (
                <div key={stepNumber} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                    ${isActive ? 'bg-blue-600 text-white' : 
                      isCompleted ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'}
                  `}>
                    {isCompleted ? '✓' : stepNumber}
                  </div>
                  {stepNumber < totalSteps && (
                    <div className={`w-8 h-1 mx-1 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">
                {getStepTitle(currentStep)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderCurrentStep()}
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-6 flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <ChevronRight className="w-4 h-4 ml-2" />
            הקודם
          </Button>
          
          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              הבא
              <ChevronLeft className="w-4 h-4 mr-2" />
            </Button>
          ) : (
            <Button
              onClick={handleComplete}
              disabled={!canProceed()}
              className="bg-green-600 hover:bg-green-700"
            >
              <Wand2 className="w-4 h-4 ml-2" />
              צור דף נחיתה
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedQuestionnaire;