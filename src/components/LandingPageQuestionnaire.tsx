import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: QuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    targetAudience: "",
    mainGoal: "",
    keyFeatures: "",
    brandColors: "",
    contactInfo: ""
  });

  const questions = [
    {
      step: 1,
      title: "בואו נכיר את העסק שלך",
      fields: [
        { key: "businessName", label: "מה שם העסק שלך?", placeholder: "לדוגמה: טכנולוגיה מתקדמת בע״מ" },
        { key: "businessType", label: "באיזה תחום אתם עוסקים?", placeholder: "לדוגמה: פיתוח תוכנה, שיווק דיגיטלי, ייעוץ עסקי" }
      ]
    },
    {
      step: 2,
      title: "קהל היעד והמטרות",
      fields: [
        { key: "targetAudience", label: "מי הלקוחות שלכם?", placeholder: "לדוגמה: בעלי עסקים קטנים, חברות הייטק, צרכנים פרטיים" },
        { key: "mainGoal", label: "מה המטרה העיקרית של הדף?", placeholder: "לדוגמה: הגדלת מכירות, איסוף לידים, הרשמה לשירות" }
      ]
    },
    {
      step: 3,
      title: "התוכן והעיצוב",
      fields: [
        { key: "keyFeatures", label: "מה הייחודיות שלכם? (3-5 נקודות)", placeholder: "לדוגמה: מהירות, איכות, מחיר תחרותי, שירות אישי", type: "textarea" },
        { key: "brandColors", label: "איזה צבעים מייצגים את המותג?", placeholder: "לדוגמה: כחול וכסף, ירוק ולבן, כתום ושחור" }
      ]
    },
    {
      step: 4,
      title: "פרטים לסיום",
      fields: [
        { key: "contactInfo", label: "פרטי קשר (טלפון, אימייל, כתובת)", placeholder: "הפרטים שיופיעו בדף הנחיתה", type: "textarea" }
      ]
    }
  ];

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      generateLandingPage();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateLandingPage = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsGenerating(false);
    onClose();
    
    // Navigate to the generated landing page with form data
    navigate('/generated-landing-page', { 
      state: { formData }
    });
    
    toast({
      title: "🎉 דף הנחיתה נוצר בהצלחה!",
      description: `דף נחיתה מותאם עבור ${formData.businessName} מוכן לשימוש`,
    });
  };

  const currentQuestion = questions[currentStep - 1];
  const canProceed = currentQuestion.fields.every(field => formData[field.key as keyof typeof formData]);

  if (isGenerating) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md" dir="rtl">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">הבינה המלאכותית יוצרת את הדף שלך...</h3>
            <p className="text-gray-600 mb-4">זה יקח רק כמה שניות</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style={{width: "75%"}}></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">יצירת דף נחיתה מותאם</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="flex justify-center space-x-reverse space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">{currentQuestion.title}</h3>
              
              <div className="space-y-4">
                {currentQuestion.fields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium mb-2">{field.label}</label>
                    {field.type === "textarea" ? (
                      <Textarea
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        rows={3}
                      />
                    ) : (
                      <Input
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              הקודם
            </Button>
            
            <Button 
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {currentStep === questions.length ? (
                <>
                  <Sparkles className="w-4 h-4 ml-2" />
                  צור את הדף שלי!
                </>
              ) : (
                <>
                  הבא
                  <ArrowRight className="w-4 h-4 mr-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LandingPageQuestionnaire;
