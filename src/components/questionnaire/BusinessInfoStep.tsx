
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { professions } from "@/constants/professions";

interface BusinessInfoStepProps {
  formData: {
    businessName: string;
    businessType: string;
    targetAudience: string;
    businessAdvantages: string;
  };
  updateFormData: (field: string, value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const BusinessInfoStep = ({ formData, updateFormData }: BusinessInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessName" className="text-white font-semibold">שם העסק *</Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => updateFormData('businessName', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="לדוגמה: קפה דלוקס"
        />
      </div>
      
      <div>
        <Label htmlFor="businessType" className="text-white font-semibold">סוג העסק / המקצוע *</Label>
        <Select onValueChange={(value) => updateFormData('businessType', value)} value={formData.businessType}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר מקצוע..." />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600 max-h-60 overflow-y-auto z-50">
            {professions.map((profession) => (
              <SelectItem
                key={profession.value}
                value={profession.value}
                className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700"
              >
                {profession.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 mt-1">בחר את המקצוע שלך מהרשימה</p>
      </div>

      <div>
        <Label htmlFor="businessAdvantages" className="text-white font-semibold">3 היתרונות המרכזיים של העסק שלך *</Label>
        <Textarea
          id="businessAdvantages"
          value={formData.businessAdvantages}
          onChange={(e) => updateFormData('businessAdvantages', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="למשל: 
1. שירות מהיר ואמין תוך 24 שעות
2. צוות מנוסה עם 10+ שנות ניסיון
3. מחירים תחרותיים עם אחריות מלאה"
          rows={4}
        />
        <p className="text-sm text-gray-400 mt-1">רשום 3 יתרונות ספציפיים שמבדילים אותך מהמתחרים</p>
      </div>

      <div>
        <Label htmlFor="targetAudience" className="text-white font-semibold">קהל היעד</Label>
        <Textarea
          id="targetAudience"
          value={formData.targetAudience}
          onChange={(e) => updateFormData('targetAudience', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="תאר את קהל היעד שלך (גיל, תחומי עניין, צרכים...)"
          rows={3}
        />
      </div>
    </div>
  );
};
