
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
      <DialogContent className="w-[95vw] max-w-5xl max-h-[95vh] overflow-y-auto border-0 p-0 bg-transparent shadow-none">
        <div 
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.95),
              rgba(248, 250, 252, 0.95))`,
            backdropFilter: 'blur(20px)',
            boxShadow: `
              0 25px 50px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `,
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="0.4"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="relative p-8">
            <DialogHeader className="pb-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-right">
                  <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    יוצר דף נחיתה מותאם אישית
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 text-lg mt-1">
                    בינה מלאכותית מתקדמת ליצירת דפי נחיתה מקצועיים
                  </DialogDescription>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 border border-blue-200/50">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">תהליך מהיר של 4 שלבים</span>
              </div>
            </DialogHeader>

            <div className="space-y-8">
              {/* Progress indicator */}
              <div className="flex justify-between items-center bg-gray-50/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50">
                <div className="flex space-x-3 space-x-reverse">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-500 transform ${
                          step === currentStep
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-110 rotate-3'
                            : step < currentStep
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'
                            : 'bg-white text-gray-400 border-2 border-gray-200 shadow-sm'
                        }`}
                      >
                        {step < currentStep ? '✓' : step}
                      </div>
                      <div className={`text-xs mt-2 font-medium transition-colors ${
                        step === currentStep ? 'text-blue-600' : step < currentStep ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        שלב {step}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <span className="text-2xl font-bold text-gray-900">{currentStep}</span>
                  <span className="text-gray-500 text-lg"> / 4</span>
                  <div className="text-sm text-gray-600 mt-1">שלבים הושלמו</div>
                </div>
              </div>

              {/* Step content */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
                <CardHeader className="bg-gradient-to-r from-gray-50/50 to-blue-50/30 border-b border-gray-100">
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    {getStepTitle(currentStep)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {renderCurrentStep()}
                </CardContent>
              </Card>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-4">
                <Button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 rounded-xl px-8 font-medium shadow-sm hover:shadow-md transition-all"
                >
                  קודם
                </Button>

                <div className="flex gap-4">
                  <Button
                    onClick={handlePreviewPage}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl px-8 font-medium"
                  >
                    <Eye className="w-5 h-5 ml-2" />
                    צפה ועדכן דף
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={nextStep}
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl px-8 font-medium"
                    >
                      הבא
                      <ArrowRight className="w-5 h-5 mr-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl px-8 font-medium"
                    >
                      <Download className="w-5 h-5 ml-2" />
                      סיים וצור דף
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
