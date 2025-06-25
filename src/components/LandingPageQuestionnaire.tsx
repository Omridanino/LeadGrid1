
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, ArrowRight, Eye, Download } from "lucide-react";

interface LandingPageQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingPageQuestionnaire = ({ isOpen, onClose }: LandingPageQuestionnaireProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    targetAudience: "",
    mainGoal: "",
    keyFeatures: "",
    brandColors: "",
    contactInfo: ""
  });

  const handleSubmit = () => {
    if (!formData.businessName || !formData.businessType) {
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
    if (!formData.businessName || !formData.businessType) {
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

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessName" className="text-white font-semibold">שם העסק *</Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => updateFormData('businessName', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="לדוגמה: קפה דלוקס"
        />
      </div>
      
      <div>
        <Label htmlFor="businessType" className="text-white font-semibold">סוג העסק / התחום *</Label>
        <Textarea
          id="businessType"
          value={formData.businessType}
          onChange={(e) => updateFormData('businessType', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="תאר את העסק שלך בכמה מילים (לדוגמה: מסעדה איטלקית, חנות בגדים, סטודיו לעיצוב גרפי, משרד עורכי דין...)"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="targetAudience" className="text-white font-semibold">קהל היעד</Label>
        <Textarea
          id="targetAudience"
          value={formData.targetAudience}
          onChange={(e) => updateFormData('targetAudience', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="תאר את קהל היעד שלך (גיל, תחומי עניין, צרכים...)"
          rows={3}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="mainGoal" className="text-white font-semibold">המטרה העיקרית של הדף</Label>
        <Select onValueChange={(value) => updateFormData('mainGoal', value)}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר מטרה עיקרית" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">הגדלת מכירות</SelectItem>
            <SelectItem value="leads">יצירת לידים</SelectItem>
            <SelectItem value="awareness">הגדלת המודעות למותג</SelectItem>
            <SelectItem value="signup">רישום לשירות</SelectItem>
            <SelectItem value="contact">יצירת קשר</SelectItem>
            <SelectItem value="booking">קביעת תורים</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="keyFeatures" className="text-white font-semibold">מה מיוחד בעסק שלך?</Label>
        <Textarea
          id="keyFeatures"
          value={formData.keyFeatures}
          onChange={(e) => updateFormData('keyFeatures', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="כתב כמה נקודות על מה שעושה את העסק שלך מיוחד (איכות, מחיר, שירות, ניסיון, מיקום וכו')"
          rows={4}
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="brandColors" className="text-white font-semibold">צבעי המותג המועדפים *</Label>
        <Input
          id="brandColors"
          value={formData.brandColors}
          onChange={(e) => updateFormData('brandColors', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="לדוגמה: כחול וכסף, אדום ולבן, ירוק וזהב, ורוד וסגול..."
        />
        <p className="text-sm text-gray-400 mt-1">הצבעים האלה ישפיעו על העיצוב הכללי של הדף</p>
      </div>

      <div>
        <Label htmlFor="contactInfo" className="text-white font-semibold">פרטי יצירת קשר</Label>
        <Textarea
          id="contactInfo"
          value={formData.contactInfo}
          onChange={(e) => updateFormData('contactInfo', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="טלפון: 050-1234567&#10;אימייל: info@business.co.il&#10;כתובת: רחוב הדוגמה 123, תל אביב"
          rows={3}
        />
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            יוצר דף נחיתה מותאם אישית
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 space-x-reverse">
              {[1, 2, 3].map((step) => (
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
            <span className="text-sm text-gray-400">שלב {currentStep} מתוך 3</span>
          </div>

          {/* Step content */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg">
                {currentStep === 1 && "פרטים בסיסיים על העסק"}
                {currentStep === 2 && "מטרות ותכונות"}
                {currentStep === 3 && "עיצוב ויצירת קשר"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
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

              {currentStep < 3 ? (
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
