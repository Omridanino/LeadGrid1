
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Image as ImageIcon } from "lucide-react";

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
};
