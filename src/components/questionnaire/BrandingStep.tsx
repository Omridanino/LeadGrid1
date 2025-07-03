
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QuestionnaireData } from '../LandingPageQuestionnaire';

interface BrandingStepProps {
  data: QuestionnaireData;
  onUpdate: (section: keyof QuestionnaireData, data: any) => void;
}

export const BrandingStep = ({ data, onUpdate }: BrandingStepProps) => {
  const updateField = (field: string, value: string) => {
    // For now, we'll add these to the branding section or create a new section
    const updatedBranding = {
      ...data.branding,
      [field]: value
    };
    onUpdate('branding', updatedBranding);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="brandColors" className="text-white font-semibold">צבעי המותג המועדפים *</Label>
        <Input
          id="brandColors"
          value={data.branding.primaryColor || ''}
          onChange={(e) => updateField('primaryColor', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="לדוגמה: כחול וכסף, אדום ולבן, ירוק וזהב, ורוד וסגול..."
        />
        <p className="text-sm text-gray-400 mt-1">הצבעים האלה ישפיעו על העיצוב הכללי של הדף</p>
      </div>

      <div>
        <Label htmlFor="contactInfo" className="text-white font-semibold">פרטי יצירת קשר</Label>
        <Textarea
          id="contactInfo"
          value={data.branding.contactInfo || ''}
          onChange={(e) => updateField('contactInfo', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white"
          placeholder="טלפון: 050-1234567&#10;אימייל: info@business.co.il&#10;כתובת: רחוב הדוגמה 123, תל אביב"
          rows={3}
        />
      </div>
    </div>
  );
};
