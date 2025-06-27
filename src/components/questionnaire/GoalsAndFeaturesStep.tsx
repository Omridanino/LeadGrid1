
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
        <Select onValueChange={(value) => updateFormData('mainGoal', value)} value={formData.mainGoal}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר מטרה עיקרית" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600 z-50">
            <SelectItem value="sales" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">הגדלת מכירות</SelectItem>
            <SelectItem value="leads" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">יצירת לידים</SelectItem>
            <SelectItem value="awareness" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">הגדלת המודעות למותג</SelectItem>
            <SelectItem value="signup" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">רישום לשירות</SelectItem>
            <SelectItem value="contact" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">יצירת קשר</SelectItem>
            <SelectItem value="booking" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">קביעת תורים</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="keyFeatures" className="text-white font-semibold">מה מיוחד בעסק שלך?</Label>
        <Textarea
          id="keyFeatures"
          value={formData.keyFeatures}
          onChange={(e) => updateFormData('keyFeatures', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="כתב כמה נקודות על מה שעושה את העסק שלך מיוחד (איכות, מחיר, שירות, ניסיון, מיקום וכו')"
          rows={4}
        />
      </div>
    </div>
  );
};
