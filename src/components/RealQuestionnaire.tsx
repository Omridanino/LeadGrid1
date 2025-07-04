import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  X, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  User,
  Building2,
  Target,
  Palette,
  Rocket
} from 'lucide-react';
import { professions } from "@/constants/professions";
import TemplateEditor from './TemplateEditor';
import { generateCustomTemplate } from '@/utils/customTemplateGenerator';

interface RealQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  // שלב 1 - פרטי העסק
  businessName: string;
  businessType: string;
  businessDescription: string;
  
  // שלב 2 - קהל יעד
  targetAudience: string;
  mainProblem: string;
  uniqueValue: string;
  
  // שלב 3 - מטרות ותוכן
  mainGoal: string;
  ctaText: string;
  keyFeatures: string[];
  
  // שלב 4 - עיצוב
  designStyle: string;
  colorPreference: string;
  mood: string;
}

const RealQuestionnaire = ({ isOpen, onClose }: RealQuestionnaireProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    businessType: '',
    businessDescription: '',
    targetAudience: '',
    mainProblem: '',
    uniqueValue: '',
    mainGoal: '',
    ctaText: '',
    keyFeatures: [],
    designStyle: '',
    colorPreference: '',
    mood: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTemplate, setGeneratedTemplate] = useState(null);
  const [showEditor, setShowEditor] = useState(false);

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      generateTemplate();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateTemplate = async () => {
    setIsGenerating(true);
    try {
      const template = await generateCustomTemplate(formData);
      setGeneratedTemplate(template);
      setShowEditor(true);
    } catch (error) {
      console.error('Error generating template:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.businessName && formData.businessType && formData.businessDescription;
      case 2:
        return formData.targetAudience && formData.mainProblem && formData.uniqueValue;
      case 3:
        return formData.mainGoal && formData.ctaText;
      case 4:
        return formData.designStyle && formData.colorPreference && formData.mood;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  if (showEditor && generatedTemplate) {
    return (
      <TemplateEditor
        template={generatedTemplate}
        onTemplateChange={setGeneratedTemplate}
        onClose={() => setShowEditor(false)}
        onPublishSuccess={() => {}}
      />
    );
  }

  const steps = [
    { number: 1, title: 'פרטי העסק', icon: <Building2 className="w-5 h-5" /> },
    { number: 2, title: 'קהל היעד', icon: <Target className="w-5 h-5" /> },
    { number: 3, title: 'מטרות ותוכן', icon: <User className="w-5 h-5" /> },
    { number: 4, title: 'עיצוב ומראה', icon: <Palette className="w-5 h-5" /> }
  ];

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">🚀 בואו ניצור את הדף המושלם עבורך</h2>
              <p className="text-gray-400 text-sm mt-1">כמה שאלות קצרות ואנחנו מכינים דף נחיתה מותאם אישית</p>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${currentStep >= step.number 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/40' 
                    : 'bg-gray-700 text-gray-400'
                  }
                `}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    step.icon
                  )}
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`w-16 h-2 mx-3 rounded-full transition-all duration-300 ${
                    currentStep > step.number 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/40">
              שלב {currentStep} מתוך {steps.length}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  {steps[currentStep - 1].icon}
                </div>
                {steps[currentStep - 1].title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              
              {/* שלב 1 - פרטי העסק */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-white font-semibold block mb-2">מה שם העסק שלך? *</label>
                    <Input
                      value={formData.businessName}
                      onChange={(e) => updateFormData('businessName', e.target.value)}
                      placeholder="לדוגמה: קפה דלוקס"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">איזה סוג עסק זה? *</label>
                    <Select onValueChange={(value) => updateFormData('businessType', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="בחר את סוג העסק..." />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        {professions.map((profession) => (
                          <SelectItem key={profession.value} value={profession.value} className="text-white">
                            {profession.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">ספר במשפט אחד על העסק שלך *</label>
                    <Textarea
                      value={formData.businessDescription}
                      onChange={(e) => updateFormData('businessDescription', e.target.value)}
                      placeholder="לדוגמה: בית קפה בוטיק המתמחה בקפה איכות עם אווירה חמה ופינות עבודה נוחות"
                      rows={3}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
              )}

              {/* שלב 2 - קהל יעד */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-white font-semibold block mb-2">מי הקהל שאתה מכוון אליו? *</label>
                    <Textarea
                      value={formData.targetAudience}
                      onChange={(e) => updateFormData('targetAudience', e.target.value)}
                      placeholder="לדוגמה: סטודנטים ועובדים היי-טק בגילאי 25-40 המחפשים מקום שקט לעבודה עם קפה איכות"
                      rows={3}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">איזה בעיה אתה פותר עבור הלקוחות? *</label>
                    <Textarea
                      value={formData.mainProblem}
                      onChange={(e) => updateFormData('mainProblem', e.target.value)}
                      placeholder="לדוגמה: קושי למצוא מקום שקט לעבודה עם קפה טוב ואווירה נעימה במרכז העיר"
                      rows={3}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">מה מייחד אותך מהמתחרים? *</label>
                    <Textarea
                      value={formData.uniqueValue}
                      onChange={(e) => updateFormData('uniqueValue', e.target.value)}
                      placeholder="לדוגמה: הקפה הכי טרי בעיר, Wi-Fi מהיר, פינות עבודה מעוצבות ושירות אישי"
                      rows={3}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
              )}

              {/* שלב 3 - מטרות ותוכן */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-white font-semibold block mb-2">מה המטרה העיקרית של הדף? *</label>
                    <Select onValueChange={(value) => updateFormData('mainGoal', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="בחר מטרה..." />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="leads" className="text-white">יצירת לידים - אנשים יוכלו ליצור קשר</SelectItem>
                        <SelectItem value="sales" className="text-white">מכירות - לקוחות יזמינו או יקנו</SelectItem>
                        <SelectItem value="awareness" className="text-white">מודעות - שאנשים יכירו את העסק</SelectItem>
                        <SelectItem value="booking" className="text-white">הזמנות - תיאום פגישות או הזמנות</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">מה הכפתור הראשי יגיד? *</label>
                    <Input
                      value={formData.ctaText}
                      onChange={(e) => updateFormData('ctaText', e.target.value)}
                      placeholder="לדוגמה: הזמן מקום, צור קשר, קבל הצעת מחיר"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">מה היתרונות הכי חשובים שלך? (עד 3)</label>
                    <Textarea
                      value={formData.keyFeatures.join('\n')}
                      onChange={(e) => updateFormData('keyFeatures', e.target.value.split('\n').filter(f => f.trim()))}
                      placeholder="כל שורה = יתרון אחד, לדוגמה:&#10;קפה טרי מקורקע מדי יום&#10;מקומות עבודה שקטים עם שקעי חשמל&#10;Wi-Fi מהיר ויציב"
                      rows={4}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
              )}

              {/* שלב 4 - עיצוב */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-white font-semibold block mb-2">איזה סטייל עיצוב מתאים לך? *</label>
                    <Select onValueChange={(value) => updateFormData('designStyle', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="בחר סטייל..." />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="modern" className="text-white">מודרני ומינימליסטי</SelectItem>
                        <SelectItem value="creative" className="text-white">יצירתי וצבעוני</SelectItem>
                        <SelectItem value="professional" className="text-white">מקצועי ועסקי</SelectItem>
                        <SelectItem value="tech" className="text-white">טכנולוגי ועתידני</SelectItem>
                        <SelectItem value="warm" className="text-white">חם ואנושי</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">איזה צבעים מתאימים לעסק? *</label>
                    <Select onValueChange={(value) => updateFormData('colorPreference', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="בחר צבעים..." />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="blue" className="text-white">כחול - אמינות ומקצועיות</SelectItem>
                        <SelectItem value="green" className="text-white">ירוק - טבע וצמיחה</SelectItem>
                        <SelectItem value="purple" className="text-white">סגול - יצירתיות ויוקרה</SelectItem>
                        <SelectItem value="orange" className="text-white">כתום - אנרגיה וחמימות</SelectItem>
                        <SelectItem value="dark" className="text-white">כהה - אלגנטיות ועוצמה</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-white font-semibold block mb-2">איזה אווירה רוצה להעביר? *</label>
                    <Select onValueChange={(value) => updateFormData('mood', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="בחר אווירה..." />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="trustworthy" className="text-white">אמין ומקצועי</SelectItem>
                        <SelectItem value="innovative" className="text-white">חדשני ומתקדם</SelectItem>
                        <SelectItem value="friendly" className="text-white">ידידותי ונגיש</SelectItem>
                        <SelectItem value="premium" className="text-white">יוקרתי ואיכותי</SelectItem>
                        <SelectItem value="energetic" className="text-white">אנרגטי ודינמי</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800 flex justify-between items-center">
          <Button
            onClick={prevStep}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            אחורה
          </Button>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {currentStep < 4 ? 'עוד כמה שאלות ונסיים' : 'כל הכבוד! בואו ניצור את הדף שלך'}
            </p>
          </div>
          
          <Button
            onClick={nextStep}
            disabled={!canProceed() || isGenerating}
            className="bg-blue-500 hover:bg-blue-600"
          >
            {isGenerating ? (
              'יוצר את הדף...'
            ) : currentStep < 4 ? (
              <>
                הבא
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                צור את הדף!
                <Rocket className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default RealQuestionnaire;