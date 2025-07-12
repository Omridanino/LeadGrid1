import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, ArrowRight, ArrowLeft, CheckCircle, Wand2 } from 'lucide-react';
import { BusinessInfoStep } from './questionnaire/BusinessInfoStep';
import { GoalsAndFeaturesStep } from './questionnaire/GoalsAndFeaturesStep';
import { DesignStyleStep } from './questionnaire/DesignStyleStep';
import { ElementsSelectionStep } from './questionnaire/ElementsSelectionStep';
import { BrandingStep } from './questionnaire/BrandingStep';
import { FormData, initialFormData, getStepTitle, validateRequiredFields } from '@/utils/questionnaireUtils';
import { useContentGeneration } from '@/hooks/useContentGeneration';
import { generateRichContent } from '@/utils/contentGenerator';
import VisualLandingPageEditor from './VisualLandingPageEditor';
import { toast } from '@/hooks/use-toast';

interface CompleteLandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompleteLandingPageQuestionnaire = ({ isOpen, onClose }: CompleteLandingPageQuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [showEditor, setShowEditor] = useState(false);

  const totalSteps = 5;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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

  const generateContent = async () => {
    setIsGenerating(true);
    try {
      console.log('Generating content with formData:', formData);
      
      // יצירת תוכן עשיר עם הסקשנים שנבחרו
      const content = generateRichContent(formData);
      
      // הוספת הסקשנים שנבחרו לתוכן
      const enhancedContent = {
        ...content,
        selectedElements: formData.selectedElements,
        metadata: {
          businessName: formData.businessName,
          businessType: formData.businessType,
          targetAudience: formData.targetAudience,
          designStyle: formData.designStyle,
          generatedAt: new Date().toISOString()
        }
      };

      setGeneratedContent(enhancedContent);
      setShowEditor(true);

      toast({
        title: "הצלחה! 🎉",
        description: "דף הנחיתה נוצר בהצלחה עם כל הסקשנים שבחרת",
      });

    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה ביצירת התוכן. אנא נסה שוב.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BusinessInfoStep 
            formData={formData} 
            updateFormData={updateFormData}
            open={true}
            setOpen={() => {}}
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
            formData={formData} 
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.businessName && formData.businessType && formData.businessStory;
      case 2:
        return formData.mainServices && formData.targetAudience;
      case 3:
        return formData.designStyle;
      case 4:
        return formData.selectedElements.length > 0;
      case 5:
        return true; // הברנדינג הוא אופציונלי
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  if (showEditor && generatedContent) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50">
        <VisualLandingPageEditor 
          isOpen={true}
          onClose={() => {
            setShowEditor(false);
            onClose();
          }}
          generatedContent={generatedContent}
          formData={formData}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center border-b">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              שלב {currentStep} מתוך {totalSteps}
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {getStepTitle(currentStep)}
          </CardTitle>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="h-4 w-4 ml-2" />
              הקודם
            </Button>

            {currentStep === totalSteps ? (
              <Button
                onClick={generateContent}
                disabled={isGenerating || !canProceed()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                    יוצר דף נחיתה...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4 mr-2" />
                    צור דף נחיתה
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
              >
                הבא
                <ArrowRight className="h-4 w-4 mr-2" />
              </Button>
            )}
          </div>

          {/* Summary for last step */}
          {currentStep === totalSteps && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-3">סיכום הבחירות שלך:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><strong>שם העסק:</strong> {formData.businessName}</div>
                <div><strong>סוג העסק:</strong> {formData.businessType}</div>
                <div><strong>קהל יעד:</strong> {formData.targetAudience}</div>
                <div><strong>סגנון עיצוב:</strong> {formData.designStyle}</div>
                <div><strong>מספר סקשנים:</strong> {formData.selectedElements.length}</div>
              </div>
              
              <div className="mt-3">
                <strong>הסקשנים שנבחרו:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.selectedElements.map((elementId) => (
                    <Badge key={elementId} variant="secondary" className="text-xs">
                      {elementId}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompleteLandingPageQuestionnaire;