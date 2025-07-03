
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { professions } from "@/constants/professions";
import { QuestionnaireData } from '../LandingPageQuestionnaire';

interface BusinessInfoStepProps {
  data: QuestionnaireData;
  onUpdate: (section: keyof QuestionnaireData, data: any) => void;
}

export const BusinessInfoStep = ({ data, onUpdate }: BusinessInfoStepProps) => {
  const updateBusinessInfo = (field: string, value: string) => {
    onUpdate('businessInfo', {
      ...data.businessInfo,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessName" className="text-white font-semibold">שם העסק המלא *</Label>
        <Input
          id="businessName"
          value={data.businessInfo.businessName}
          onChange={(e) => updateBusinessInfo('businessName', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="לדוגמה: קפה דלוקס - בית קפה בוטיק"
        />
        <p className="text-sm text-gray-400 mt-1">השם המלא כפי שמופיע ללקוחות</p>
      </div>
      
      <div>
        <Label htmlFor="businessType" className="text-white font-semibold">סוג העסק / התמחות מקצועית *</Label>
        <Select onValueChange={(value) => updateBusinessInfo('businessType', value)} value={data.businessInfo.businessType}>
          <SelectTrigger className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 focus:border-purple-500 focus:ring-purple-500">
            <SelectValue placeholder="בחר את התחום המקצועי שלך..." />
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
      </div>

      <div>
        <Label htmlFor="targetAudience" className="text-white font-semibold">קהל היעד שלך *</Label>
        <Textarea
          id="targetAudience"
          value={data.businessInfo.targetAudience}
          onChange={(e) => updateBusinessInfo('targetAudience', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="מי הם הלקוחות שלך? לדוגמה: בעלי עסקים קטנים, הורים צעירים, אנשי מקצוע..."
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="description" className="text-white font-semibold">תיאור העסק שלך *</Label>
        <Textarea
          id="description"
          value={data.businessInfo.description}
          onChange={(e) => updateBusinessInfo('description', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="ספר על העסק שלך, השירותים שאתה מציע, מה מייחד אותך מהמתחרים..."
          rows={4}
        />
        <p className="text-sm text-gray-400 mt-1">המידע הזה יעזור ליצור תוכן מותאם לאתר שלך</p>
      </div>
    </div>
  );
};
