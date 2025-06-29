
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, ArrowRight, Eye, Download, Zap, Target } from "lucide-react";
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

  const handleSubmit = () => {
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
    if (!validateRequiredFields(formData)) {
      toast({
        title: "⚠️ שדות חסרים", 
        description: "אנא מלא לפחות את שם העסק וסוג העסק לפני הצפייה",
        variant: "destructive"
      });
      return;
    }

    navigate('/generated-landing-page', { 
      state: { formData } 
    });
    
    onClose();
  };

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
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

  const getStepShortName = (step: number) => {
    switch (step) {
      case 1: return "פרטי עסק";
      case 2: return "מטרות";
      case 3: return "עיצוב";
      case 4: return "אלמנטים";
      default: return `שלב ${step}`;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-3xl max-h-[85vh] overflow-y-auto border-0 p-0 bg-transparent shadow-none">
        <div className="relative bg-gradient-to-br from-white/95 to-blue-50/90 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl border border-white/20">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
          
          <div className="relative p-4 md:p-5">
            <DialogHeader className="pb-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                    יוצר דף נחיתה מותאם אישית
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 text-sm mt-1">
                    בינה מלאכותית ליצירת דפי נחיתה מקצועיים ✨
                  </DialogDescription>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-3 py-1 border border-blue-200/50">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-blue-700">4 שלבים מהירים 🚀</span>
              </div>
            </DialogHeader>

            <div className="space-y-5">
              {/* Progress indicator */}
              <div className="bg-gradient-to-r from-gray-50/80 to-blue-50/60 rounded-xl p-3 border border-white/30">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 space-x-reverse">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          step === currentStep
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg scale-110'
                            : step < currentStep
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white'
                            : 'bg-white text-gray-400 border border-gray-200'
                        }`}>
                          {step < currentStep ? '✓' : step}
                        </div>
                        <div className={`text-xs mt-1 font-medium ${
                          step === currentStep ? 'text-blue-600' : step < currentStep ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          <div className="hidden md:block">שלב {step}</div>
                          <div className="md:hidden">{getStepShortName(step)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-left bg-white/60 rounded-lg p-2 border border-white/40">
                    <span className="text-lg font-bold text-blue-600">{currentStep}</span>
                    <span className="text-gray-500"> / 4</span>
                  </div>
                </div>
              </div>

              {/* Step content */}
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <CardHeader className="bg-gradient-to-r from-gray-50/60 to-blue-50/40 border-b border-white/30 py-3">
                  <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <span>{getStepTitle(currentStep)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {renderCurrentStep()}
                </CardContent>
              </Card>

              {/* Navigation buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-3 bg-gradient-to-r from-white/60 to-blue-50/40 rounded-lg p-3 border border-white/30">
                <Button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto border border-gray-300 disabled:opacity-50 rounded-lg px-4"
                >
                  ← קודם
                </Button>

                <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                  <Button
                    onClick={handlePreviewPage}
                    size="sm"
                    className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg px-4"
                  >
                    <Eye className="w-4 h-4 ml-2" />
                    צפה ועדכן
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={nextStep}
                      size="sm"
                      className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-lg px-4"
                    >
                      הבא →
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      size="sm"
                      className="w-full md:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg px-4"
                    >
                      <Download className="w-4 h-4 ml-2" />
                      סיים וצור דף 🎉
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LandingPageQuestionnaire;
