
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Image as ImageIcon, Zap, Sparkles, Layers, Gem } from "lucide-react";

interface HeroStyleStepProps {
  formData: {
    heroStyle: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const HeroStyleStep = ({ formData, updateFormData }: HeroStyleStepProps) => {
  return (
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
                רקע בגרדיאנטים יפים
              </div>
            </SelectItem>
            <SelectItem value="animated">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                רקע חי ומונפש
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
                <Layers className="w-4 h-4" />
                אפקט זכוכית נוזלית
              </div>
            </SelectItem>
            <SelectItem value="metal">
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4" />
                עיצוב מתכתי יוקרתי
              </div>
            </SelectItem>
            <SelectItem value="image">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                תמונת רקע מתאימה לעסק
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-2">
          {formData.heroStyle === 'gradient' && "הדף יוצג עם רקע בצבעי דרגה יפים ומשתנים"}
          {formData.heroStyle === 'animated' && "הדף יוצג עם רקע מונפש וצבעוני שמשתנה כל הזמן"}
          {formData.heroStyle === 'geometric' && "הדף יוצג עם צורות גיאומטריות מרחפות ואפקטי תאורה מתקדמים"}
          {formData.heroStyle === 'glass' && "הדף יוצג עם אפקטי זכוכית נוזלית וכפתורים מתקדמים"}
          {formData.heroStyle === 'metal' && "הדף יוצג עם עיצוב מתכתי יוקרתי וכפתורים תלת מימדיים"}
          {formData.heroStyle === 'image' && "הדף יוצג עם תמונה רלוונטית לעסק שלכם ברקע"}
        </p>
      </div>
    </div>
  );
};
