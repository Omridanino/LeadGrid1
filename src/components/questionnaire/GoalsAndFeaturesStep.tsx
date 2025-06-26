
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/utils/questionnaireUtils";

interface GoalsAndFeaturesStepProps {
  formData: FormData;
  updateFormData: (field: string, value: string) => void;
}

export const GoalsAndFeaturesStep = ({ formData, updateFormData }: GoalsAndFeaturesStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessServices" className="text-white text-lg font-semibold mb-3 block">
          מה השירותים שאתם מציעים? *
        </Label>
        <Textarea
          id="businessServices"
          placeholder="תאר את השירותים או המוצרים העיקריים שלך (לדוגמה: ייעוץ עסקי, פיתוח אתרים, טיפול רפואי, וכו')"
          value={formData.businessServices || ''}
          onChange={(e) => updateFormData('businessServices', e.target.value)}
          className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="businessAdvantages" className="text-white text-lg font-semibold mb-3 block">
          מה 3 היתרונות העיקריים שלך? *
        </Label>
        <Textarea
          id="businessAdvantages"
          placeholder="כתב 3 יתרונות עיקריים שמבדילים אותך מהמתחרים&#10;לדוגמה:&#10;ניסיון של 10 שנים בתחום&#10;שירות אישי ומקצועי&#10;מחירים תחרותיים"
          value={formData.businessAdvantages}
          onChange={(e) => updateFormData('businessAdvantages', e.target.value)}
          className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="mainGoal" className="text-white text-lg font-semibold mb-3 block">
          מה המטרה העיקרית של דף הנחיתה?
        </Label>
        <Input
          id="mainGoal"
          placeholder="לדוגמה: הגדלת מכירות, קבלת פניות, הרשמה לשירות"
          value={formData.mainGoal}
          onChange={(e) => updateFormData('mainGoal', e.target.value)}
          className="bg-gray-800 border-gray-600 text-white"
        />
      </div>
    </div>
  );
};
