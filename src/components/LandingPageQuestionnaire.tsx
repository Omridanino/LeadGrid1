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

  // פונקציה לקבלת שם קצר של השלב למובייל
  const getStepShortName = (step: number) => {
    switch (step) {
      case 1:
        return "פרטי עסק";
      case 2:
        return "מטרות";
      case 3:
        return "עיצוב";
      case 4:
        return "אלמנטים";
      default:
        return `שלב ${step}`;
    }
  };

  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-4xl max-h-[85vh] overflow-y-auto border-0 p-0 bg-transparent shadow-none">
        <div 
          className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border border-white/20"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.95) 0%,
              rgba(248, 250, 252, 0.9) 25%,
              rgba(239, 246, 255, 0.8) 50%,
              rgba(245, 243, 255, 0.8) 75%,
              rgba(255, 255, 255, 0.95) 100%)`,
            backdropFilter: 'blur(20px)',
            boxShadow: `
              0 24px 48px rgba(0, 0, 0, 0.12),
              0 12px 24px rgba(59, 130, 246, 0.08),
              0 6px 12px rgba(147, 51, 234, 0.06),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `,
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div 
              className="absolute inset-0"
              style={{ backgroundImage: `url("${backgroundPattern}")` }}
            ></div>
          </div>

          {/* Gradient overlay bars */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 opacity-60"></div>

          <div className="relative p-4 md:p-6">
            <DialogHeader className="pb-6 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-center md:text-right">
                  <DialogTitle className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                    יוצר דף נחיתה מותאם אישית
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 text-sm md:text-base mt-1 font-medium">
                    בינה מלאכותית מתקדמת ליצירת דפי נחיתה מקצועיים ✨
                  </DialogDescription>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-full px-4 py-2 border-2 border-blue-200/50 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <Target className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="text-xs font-semibold text-blue-700">תהליך מהיר של 4 שלבים 🚀</span>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Enhanced Progress indicator */}
              <div className="bg-gradient-to-r from-gray-50/80 via-blue-50/60 to-purple-50/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-white/30 shadow-lg">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 space-x-reverse">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex flex-col items-center relative">
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold transition-all duration-500 transform shadow-lg ${
                            step === currentStep
                              ? 'bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-2xl scale-110 rotate-3 animate-pulse'
                              : step < currentStep
                              ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl scale-105'
                              : 'bg-gradient-to-br from-white to-gray-50 text-gray-400 border-2 border-gray-200 shadow-md hover:shadow-lg hover:scale-105'
                          }`}
                        >
                          {step < currentStep ? '✓' : step}
                        </div>
                        <div className={`text-xs mt-2 font-semibold transition-all duration-300 text-center ${
                          step === currentStep ? 'text-blue-600' : step < currentStep ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          <div className="hidden md:block">שלב {step}</div>
                          <div className="md:hidden">{getStepShortName(step)}</div>
                        </div>
                        {step < currentStep && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-left bg-gradient-to-br from-white/80 to-blue-50/60 rounded-xl p-3 shadow-lg backdrop-blur-sm border border-white/40">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{currentStep}</span>
                    <span className="text-gray-500 text-lg"> / 4</span>
                    <div className="text-xs text-gray-600 mt-1 font-medium">שלבים הושלמו</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Step content */}
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/90 via-blue-50/30 to-purple-50/20 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
                <CardHeader className="bg-gradient-to-r from-gray-50/60 via-blue-50/40 to-purple-50/30 border-b-2 border-white/30 backdrop-blur-sm py-4">
                  <CardTitle className="text-lg md:text-xl text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                      {getStepTitle(currentStep)}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  {renderCurrentStep()}
                </CardContent>
              </Card>

              {/* Enhanced Navigation buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-4 bg-gradient-to-r from-white/60 via-blue-50/40 to-purple-50/30 rounded-xl p-4 backdrop-blur-sm border border-white/30 shadow-lg">
                <Button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 disabled:opacity-50 rounded-xl px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  ← קודם
                </Button>

                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                  <Button
                    onClick={handlePreviewPage}
                    size="lg"
                    className="w-full md:w-auto bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl px-6 font-semibold backdrop-blur-sm"
                  >
                    <Eye className="w-4 h-4 ml-2" />
                    צפה ועדכן דף
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={nextStep}
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl px-6 font-semibold backdrop-blur-sm"
                    >
                      הבא →
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl px-6 font-semibold backdrop-blur-sm animate-pulse"
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
