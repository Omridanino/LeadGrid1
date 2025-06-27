
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, ArrowRight, Eye, Download } from "lucide-react";
import { BusinessInfoStep } from "./questionnaire/BusinessInfoStep";
import { GoalsAndFeaturesStep } from "./questionnaire/GoalsAndFeaturesStep";
import { DesignStyleStep } from "./questionnaire/DesignStyleStep";
import { ElementsSelectionStep } from "./questionnaire/ElementsSelectionStep";
import { FormData, initialFormData, getStepTitle, validateRequiredFields } from "@/utils/questionnaireUtils";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: LandingPageQuestionnaireProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  console.log("LandingPageQuestionnaire render - isOpen:", isOpen, "currentStep:", currentStep);

  const handleSubmit = () => {
    console.log("handleSubmit called with formData:", formData);
    if (!validateRequiredFields(formData)) {
      toast({
        title: "⚠️ שדות חסרים",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "🎉 דף הנחיתה נוצר בהצלחה!",
      description: "כעת תועבר לדף החדש שלך",
    });

    navigate('/generated-landing-page', { 
      state: { formData } 
    });
    
    onClose();
  };

  const handlePreviewPage = () => {
    console.log("handlePreviewPage called");
    if (!validateRequiredFields(formData)) {
      toast({
        title: "⚠️ שדות חסרים", 
        description: "אנא מלא לפחות את שם העסק וסוג העסק לפני הצפייה",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "👀 פותח תצוגה מקדימה...",
      description: "כעת תוכל לראות ולערוך את הדף שלך",
    });

    navigate('/generated-landing-page', { 
      state: { formData } 
    });
    
    onClose();
  };

  const updateFormData = (field: string, value: string | string[]) => {
    console.log("updateFormData called:", field, value);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    console.log("nextStep called, current step:", currentStep);
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    console.log("prevStep called, current step:", currentStep);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    console.log("renderCurrentStep called for step:", currentStep);
    switch (currentStep) {
      case 1:
        return <BusinessInfoStep formData={formData} updateFormData={updateFormData} open={open} setOpen={setOpen} />;
      case 2:
        return <GoalsAndFeaturesStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <DesignStyleStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <ElementsSelectionStep formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            יוצר דף נחיתה מותאם אישית
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            בואו ניצור עבורכם דף נחיתה מדהים שיהפוך מבקרים ללקוחות
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 space-x-reverse">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step === currentStep
                      ? 'bg-purple-600 text-white'
                      : step < currentStep
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-400">שלב {currentStep} מתוך 4</span>
          </div>

          {/* Step content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {getStepTitle(currentStep)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderCurrentStep()}
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
            >
              קודם
            </Button>

            <div className="flex gap-3">
              <Button
                onClick={handlePreviewPage}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Eye className="w-4 h-4 ml-2" />
                צפה ועדכן דף
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  הבא
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Download className="w-4 h-4 ml-2" />
                  סיים וצור דף
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LandingPageQuestionnaire;
