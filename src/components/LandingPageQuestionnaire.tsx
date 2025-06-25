
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Eye, Send } from "lucide-react";

const LandingPageQuestionnaire = () => {
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreviewPage = () => {
    // Check if basic info is filled
    if (!formData.businessName || !formData.businessType) {
      toast({
        title: "⚠️ נתונים חסרים",
        description: "אנא מלא לפחות את שם העסק וסוג העסק כדי לראות תצוגה מקדימה",
        variant: "destructive"
      });
      return;
    }

    // Navigate to generated page with form data
    navigate('/generated-landing-page', { state: { formData } });
    
    toast({
      title: "🎨 פותח דף לעריכה!",
      description: "הדף נטען עם כל אפשרויות העריכה המתקדמות",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.businessName || !formData.businessType || !formData.targetAudience) {
      toast({
        title: "⚠️ אנא מלא את כל השדות הנדרשים",
        description: "שם העסק, סוג העסק וקהל היעד הם שדות חובה",
        variant: "destructive"
      });
      return;
    }

    // Simulate sending email (in real app, this would be an API call)
    toast({
      title: "📧 האימייל נשלח בהצלחה!",
      description: "דף הנחיתה שלך נשלח לכתובת האימייל שצוינה",
    });

    // Navigate to preview after sending
    setTimeout(() => {
      navigate('/generated-landing-page', { state: { formData } });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-600/30">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
            <Sparkles className="text-yellow-400" />
            צור דף נחיתה מותאם אישית
          </CardTitle>
          <p className="text-blue-200 mt-2">
            מלא את הפרטים וקבל דף נחיתה מקצועי תוך דקות
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessName" className="text-white font-semibold">
                  שם העסק *
                </Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  placeholder="לדוגמה: חברת ABC"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="businessType" className="text-white font-semibold">
                  סוג העסק *
                </Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => handleInputChange('businessType', value)}
                  required
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="בחר סוג עסק" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="שירותים עסקיים">שירותים עסקיים</SelectItem>
                    <SelectItem value="טכנולוגיה">טכנולוגיה</SelectItem>
                    <SelectItem value="חינוך">חינוך</SelectItem>
                    <SelectItem value="בריאות">בריאות</SelectItem>
                    <SelectItem value="מסחר">מסחר</SelectItem>
                    <SelectItem value="תיירות">תיירות</SelectItem>
                    <SelectItem value="אחר">אחר</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="targetAudience" className="text-white font-semibold">
                  קהל היעד *
                </Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  placeholder="לדוגמה: בעלי עסקים קטנים"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="mainGoal" className="text-white font-semibold">
                  המטרה העיקרית
                </Label>
                <Select
                  value={formData.mainGoal}
                  onValueChange={(value) => handleInputChange('mainGoal', value)}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="בחר מטרה" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="הגדלת מכירות">הגדלת מכירות</SelectItem>
                    <SelectItem value="יצירת לידים">יצירת לידים</SelectItem>
                    <SelectItem value="הגדלת מודעות">הגדלת מודעות</SelectItem>
                    <SelectItem value="רישום לניוזלטר">רישום לניוזלטר</SelectItem>
                    <SelectItem value="הורדת חומר שיווקי">הורדת חומר שיווקי</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="keyFeatures" className="text-white font-semibold">
                התכונות העיקריות של השירות/מוצר
              </Label>
              <Textarea
                id="keyFeatures"
                value={formData.keyFeatures}
                onChange={(e) => handleInputChange('keyFeatures', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                placeholder="לדוגמה: שירות מהיר, מחירים תחרותיים, ניסיון רב..."
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="brandColors" className="text-white font-semibold">
                  צבעי המותג המועדפים
                </Label>
                <Input
                  id="brandColors"
                  value={formData.brandColors}
                  onChange={(e) => handleInputChange('brandColors', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  placeholder="לדוגמה: כחול וכסף"
                />
              </div>
              
              <div>
                <Label htmlFor="contactInfo" className="text-white font-semibold">
                  פרטי יצירת קשר
                </Label>
                <Textarea
                  id="contactInfo"
                  value={formData.contactInfo}
                  onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  placeholder="טלפון, אימייל, כתובת..."
                  rows={2}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="button"
                onClick={handlePreviewPage}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-lg py-6 rounded-xl"
                size="lg"
              >
                <Eye className="w-5 h-5 ml-2" />
                צפייה בדף ועריכה מתקדמת
              </Button>
              
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-6 rounded-xl"
                size="lg"
              >
                <Send className="w-5 h-5 ml-2" />
                שלח לאימייל
              </Button>
            </div>
          </form>
          
          {/* Info Box */}
          <div className="bg-blue-900/30 border border-blue-600/30 rounded-xl p-4 mt-6">
            <p className="text-blue-200 text-sm">
              <strong>💡 טיפ:</strong> לחץ על "צפייה בדף ועריכה מתקדמת" כדי לראות את הדף שנוצר ולערוך אותו עם כל האפשרויות המתקדמות:
              שינוי צבעים, עריכת טקסטים, הוספת תמונות ועוד!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPageQuestionnaire;
