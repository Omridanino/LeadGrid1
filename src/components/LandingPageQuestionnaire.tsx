
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
        return <BusinessInfoStep formData={formData} updateFormData={updateFormData} open={false} setOpen={() => {}} />;
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
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto border-gray-700/50 text-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{
          background: `linear-gradient(135deg, 
            rgba(0, 0, 0, 0.95), 
            rgba(15, 23, 42, 0.9))`,
          backdropFilter: 'blur(20px)',
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 25px 50px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(255, 255, 255, 0.05)
          `,
        }}
      >
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            יוצר דף נחיתה מותאם אישית
          </DialogTitle>
          <DialogDescription className="text-gray-300">
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
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step === currentStep
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                      : step < currentStep
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-gray-700/50 text-gray-400'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-400">שלב {currentStep} מתוך 4</span>
          </div>

          {/* Step content */}
          <Card className="border-gray-700/50 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(15, 23, 42, 0.8), 
                rgba(30, 41, 59, 0.6))`,
              backdropFilter: 'blur(10px)',
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.05),
                0 15px 35px rgba(0, 0, 0, 0.3)
              `,
            }}
          >
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
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
              className="border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:text-white disabled:opacity-50 backdrop-blur-sm"
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              קודם
            </Button>

            <div className="flex gap-3">
              <Button
                onClick={handlePreviewPage}
                className="text-white shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, 
                    #3B82F6 0%, 
                    #1D4ED8 100%)`,
                  boxShadow: `
                    0 0 20px rgba(59, 130, 246, 0.3),
                    0 8px 25px rgba(0, 0, 0, 0.2)
                  `
                }}
              >
                <Eye className="w-4 h-4 ml-2" />
                צפה ועדכן דף
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="text-white shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, 
                      #8B5CF6 0%, 
                      #7C3AED 100%)`,
                    boxShadow: `
                      0 0 20px rgba(139, 92, 246, 0.3),
                      0 8px 25px rgba(0, 0, 0, 0.2)
                    `
                  }}
                >
                  הבא
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="text-white shadow-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, 
                      #10B981 0%, 
                      #059669 100%)`,
                    boxShadow: `
                      0 0 20px rgba(16, 185, 129, 0.3),
                      0 8px 25px rgba(0, 0, 0, 0.2)
                    `
                  }}
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
