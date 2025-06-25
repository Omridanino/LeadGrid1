import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, ArrowRight, Eye, Download, Image as ImageIcon, Palette, CheckSquare } from "lucide-react";

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
    contactInfo: "",
    heroStyle: "gradient",
    selectedElements: [] as string[]
  });

  const elementOptions = [
    { id: "serviceCards", label: "כרטיסי שירותים עם אייקונים", description: "הצגת השירותים שלכם בכרטיסיות מעוצבות" },
    { id: "timeline", label: "ציר זמן של התהליך", description: "הסבר על התהליך בצורה ויזואלית" },
    { id: "floatingFeatures", label: "תכונות צפות באוויר", description: "הדגשת יתרונות במיקומים דינמיים" },
    { id: "layeredCards", label: "כרטיסי המלצות מרובדים", description: "המלצות לקוחות בעיצוב תלת-ממדי" },
    { id: "pricing", label: "טבלת מחירים", description: "הצגת חבילות ומחירים בצורה ברורה" },
    { id: "3dElements", label: "אלמנטים תלת-ממדיים", description: "עיצובים מתקדמים עם אפקטי עומק" },
    { id: "statistics", label: "סטטיסטיקות מרשימות", description: "נתונים על הצלחות והישגים" },
    { id: "beforeAfter", label: "לפני ואחרי", description: "השוואות ותוצאות מוכחות" },
    { id: "teamSection", label: "הצוות שלנו", description: "הכירו את האנשים מאחורי העסק" },
    { id: "portfolio", label: "גלריית עבודות", description: "הצגת פרויקטים ועבודות קודמות" },
    { id: "ctaButtons", label: "כפתורי פעולה מתקדמים", description: "כפתורים בולטים לפעולות חשובות" },
    { id: "socialProof", label: "הוכחות חברתיות", description: "לוגואים של לקוחות וחברות" },
    { id: "videoSection", label: "סקשן וידאו", description: "אזור לסרטון הצגה או הסבר" },
    { id: "mapLocation", label: "מפה ומיקום", description: "הצגת המיקום הפיזי של העסק" },
    { id: "newsletter", label: "הרשמה לnewsletter", description: "איסוף אימיילים ועדכונים" }
  ];

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

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleElementToggle = (elementId: string) => {
    const currentElements = formData.selectedElements;
    const isSelected = currentElements.includes(elementId);
    
    if (isSelected) {
      updateFormData('selectedElements', currentElements.filter(id => id !== elementId));
    } else {
      updateFormData('selectedElements', [...currentElements, elementId]);
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
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

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="heroStyle" className="text-white font-semibold">איך תרצו שיוצג הדף בחלק העליון?</Label>
        <Select onValueChange={(value) => updateFormData('heroStyle', value)} value={formData.heroStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון הצגה" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gradient">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                רקע יפה עם משפטים (ללא תמונה)
              </div>
            </SelectItem>
            <SelectItem value="image">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                תמונה עם משפטים על גביה
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {formData.heroStyle === 'gradient' 
            ? "הדף יוצג עם רקע בצבעי הדרגה יפים ללא תמונות"
            : "הדף יוצג עם תמונה רלוונטית לעסק שלכם ברקע"
          }
        </p>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-white font-semibold text-lg">איזה אלמנטים תרצו לראות בדף שלכם?</Label>
        <p className="text-gray-400 text-sm mt-1">בחרו את האלמנטים שהכי מתאימים לעסק שלכם (ניתן לבחור כמה שרוצים)</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
        {elementOptions.map((element) => (
          <div 
            key={element.id}
            className={`flex items-start space-x-3 space-x-reverse p-4 rounded-lg border cursor-pointer transition-all ${
              formData.selectedElements.includes(element.id)
                ? 'border-purple-500 bg-purple-900/20'
                : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
            }`}
            onClick={() => handleElementToggle(element.id)}
          >
            <Checkbox
              checked={formData.selectedElements.includes(element.id)}
              onChange={() => {}}
              className="mt-1"
            />
            <div className="flex-1">
              <h4 className="text-white font-medium">{element.label}</h4>
              <p className="text-gray-400 text-sm mt-1">{element.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center p-4 bg-gray-800 rounded-lg">
        <p className="text-gray-300">
          נבחרו {formData.selectedElements.length} אלמנטים
        </p>
        {formData.selectedElements.length === 0 && (
          <p className="text-yellow-400 text-sm mt-1">
            אם לא תבחרו כלום, נוסיף אלמנטים אקראיים מתאימים לעסק שלכם
          </p>
        )}
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
              {[1, 2, 3, 4, 5].map((step) => (
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
            <span className="text-sm text-gray-400">שלב {currentStep} מתוך 5</span>
          </div>

          {/* Step content */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-lg">
                {currentStep === 1 && "פרטים בסיסיים על העסק"}
                {currentStep === 2 && "מטרות ותכונות"}
                {currentStep === 3 && "עיצוב ויצירת קשר"}
                {currentStep === 4 && "סגנון תצוגה"}
                {currentStep === 5 && "אלמנטים לדף"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}
              {currentStep === 5 && renderStep5()}
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

              {currentStep < 5 ? (
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
