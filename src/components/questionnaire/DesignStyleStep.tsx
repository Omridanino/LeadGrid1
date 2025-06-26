
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Navigation, Menu } from "lucide-react";

interface DesignStyleStepProps {
  formData: {
    designStyle: string;
    heroStyle: string;
    navigationStyle: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const DesignStyleStep = ({ formData, updateFormData }: DesignStyleStepProps) => {
  // Set 3D as default if not already set
  if (!formData.designStyle) {
    updateFormData('designStyle', '3d');
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="designStyle" className="text-white font-semibold">סגנון העיצוב שלנו *</Label>
        <div className="mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">סגנון תלת מימדי (3D)</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            חוויה ויזואלית מרשימה, דינמית וסוחפת עם אלמנטים תלת-ממדיים מתקדמים. 
            כולל מודלים מרחפים, צללים עמוקים, אנימציות חלקות ואפקטים אינטראקטיביים שיוצרים חוויית משתמש בלתי נשכחת. 
            מתאים למותגים חדשניים, טכנולוגיים או יוקרתיים שרוצים להרשים ולהיזכר.
          </p>
        </div>
      </div>

      <div>
        <Label htmlFor="heroStyle" className="text-white font-semibold">איך תרצו שיוצג הדף בחלק העליון?</Label>
        <Select onValueChange={(value) => updateFormData('heroStyle', value)} value={formData.heroStyle}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון הצגה" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gradient">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                רקע תלת מימדי עם משפטים (ללא תמונה)
              </div>
            </SelectItem>
            <SelectItem value="geometric">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                עיצוב גיאומטרי מתקדם
              </div>
            </SelectItem>
            <SelectItem value="glass">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                אפקט זכוכית נוזלית
              </div>
            </SelectItem>
            <SelectItem value="metal">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                עיצוב מתכתי יוקרתי
              </div>
            </SelectItem>
            <SelectItem value="image">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                תמונה עם אפקטים תלת מימדיים
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {formData.heroStyle === 'gradient' && "הדף יוצג עם רקע תלת מימדי מרהיב עם אפקטי תאורה ואנימציות"}
          {formData.heroStyle === 'geometric' && "הדף יוצג עם צורות גיאומטריות מרחפות ואפקטי תאורה מתקדמים"}
          {formData.heroStyle === 'glass' && "הדף יוצג עם אפקטי זכוכית נוזלית וכפתורים אינטראקטיביים"}
          {formData.heroStyle === 'metal' && "הדף יוצג עם עיצוב מתכתי יוקרתי וכפתורים תלת מימדיים"}
          {formData.heroStyle === 'image' && "הדף יוצג עם תמונה רלוונטית עם שכבות תלת מימדיות ואפקטים חזותיים"}
        </p>
      </div>

      <div>
        <Label htmlFor="navigationStyle" className="text-white font-semibold">סגנון הניווט</Label>
        <Select onValueChange={(value) => updateFormData('navigationStyle', value)} value={formData.navigationStyle || 'traditional'}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="בחר סגנון ניווט" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="traditional">
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                ניווט מסורתי
              </div>
            </SelectItem>
            <SelectItem value="dock">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                Dock מצוף (מתקדם)
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {(formData.navigationStyle || 'traditional') === 'traditional' && "תפריט ניווט רגיל בחלק העליון של הדף"}
          {formData.navigationStyle === 'dock' && "ניווט מצוף מתקדם עם אפקטי הגדלה ואנימציות"}
        </p>
      </div>
    </div>
  );
};
