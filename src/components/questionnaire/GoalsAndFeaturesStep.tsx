
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GoalsAndFeaturesStepProps {
  formData: {
    mainGoal: string;
    keyFeatures: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const GoalsAndFeaturesStep = ({ formData, updateFormData }: GoalsAndFeaturesStepProps) => {
  return (
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
};
