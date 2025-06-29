
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { professions } from "@/constants/professions";

interface BusinessInfoStepProps {
  formData: {
    businessName: string;
    businessType: string;
    businessStory: string;
    businessValues: string;
  };
  updateFormData: (field: string, value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const BusinessInfoStep = ({ formData, updateFormData }: BusinessInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="businessName" className="text-white font-semibold">שם העסק המלא *</Label>
        <Input
          id="businessName"
          value={formData.businessName}
          onChange={(e) => updateFormData('businessName', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="לדוגמה: קפה דלוקס - בית קפה בוטיק"
        />
        <p className="text-sm text-gray-400 mt-1">השם המלא כפי שמופיע ללקוחות</p>
      </div>
      
      <div>
        <Label htmlFor="businessType" className="text-white font-semibold">סוג העסק / התמחות מקצועית *</Label>
        <Select onValueChange={(value) => updateFormData('businessType', value)} value={formData.businessType}>
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
        <Label htmlFor="businessStory" className="text-white font-semibold">ספר את הסיפור של העסק שלך *</Label>
        <Textarea
          id="businessStory"
          value={formData.businessStory}
          onChange={(e) => updateFormData('businessStory', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="איך התחיל העסק? מה הביא אותך להקים אותו? מה השראת אותך?"
          rows={4}
        />
        <p className="text-sm text-gray-400 mt-1">הסיפור האישי שלך חשוב ליצירת חיבור עם הלקוחות</p>
      </div>

      <div>
        <Label htmlFor="businessValues" className="text-white font-semibold">מה הערכים המרכזיים של העסק שלך? *</Label>
        <Textarea
          id="businessValues"
          value={formData.businessValues}
          onChange={(e) => updateFormData('businessValues', e.target.value)}
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
          placeholder="מה חשוב לך בעבודה? איך אתה מתייחס ללקוחות? למשל: אמינות, איכות, יחס אישי..."
          rows={3}
        />
        <p className="text-sm text-gray-400 mt-1">הערכים שלך יעזרו ללקוחות להזדהות איתך</p>
      </div>
    </div>
  );
};
