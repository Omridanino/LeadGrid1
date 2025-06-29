
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GoalsAndFeaturesStepProps {
  formData: {
    mainServices: string;
    uniqueAdvantages: string;
    targetAudience: string;
    mainGoal: string;
  };
  updateFormData: (field: string, value: string) => void;
}

export const GoalsAndFeaturesStep = ({ formData, updateFormData }: GoalsAndFeaturesStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="mainServices" className="text-white font-semibold">מה השירותים או המוצרים המרכזיים שלך? *</Label>
        <Textarea
          id="mainServices"
          value={formData.mainServices}
          onChange={(e) => updateFormData('mainServices', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="פרט בדיוק מה אתה מציג: איזה שירותים? איזה מוצרים? איך זה עובד?"
          rows={4}
        />
        <p className="text-sm text-gray-400 mt-1">ככל שתפרט יותר, כך הלקוחות יבינו טוב יותר מה הם מקבלים</p>
      </div>

      <div>
        <Label htmlFor="uniqueAdvantages" className="text-white font-semibold">מה הייחודיות והיתרונות הבולטים שלך? *</Label>
        <Textarea
          id="uniqueAdvantages"
          value={formData.uniqueAdvantages}
          onChange={(e) => updateFormData('uniqueAdvantages', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="מה עושה אותך מיוחד? איזה כישורים או יכולות יש לך שאחרים לא?"
          rows={4}
        />
      </div>

      <div>
        <Label htmlFor="targetAudience" className="text-white font-semibold">מי בדיוק קהל היעד שלך? *</Label>
        <Textarea
          id="targetAudience"
          value={formData.targetAudience}
          onChange={(e) => updateFormData('targetAudience', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="תאר בפירוט: איזה גילאים? איזה מקצועות? מה חשוב להם?"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="mainGoal" className="text-white font-semibold">מה המטרה העיקרית של דף הנחיתה?</Label>
        <Select onValueChange={(value) => updateFormData('mainGoal', value)} value={formData.mainGoal}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר מטרה עיקרית" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-600 z-50">
            <SelectItem value="sales" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">הגדלת מכירות ישירות</SelectItem>
            <SelectItem value="leads" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">יצירת לידים וקביעת פגישות</SelectItem>
            <SelectItem value="awareness" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">הגדלת המודעות למותג</SelectItem>
            <SelectItem value="contact" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">יצירת קשר וייעוץ ראשוני</SelectItem>
            <SelectItem value="booking" className="text-white hover:bg-gray-700 cursor-pointer focus:bg-gray-700">קביעת תורים ושירותים</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
