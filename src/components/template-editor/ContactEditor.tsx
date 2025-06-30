
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TemplateData } from '@/types/template';

interface ContactEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const ContactEditor = ({ template, onUpdate }: ContactEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white text-sm font-medium">כותרת</Label>
        <Input
          value={template.contact.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          placeholder="כותרת יצירת קשר..."
        />
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">תת כותרת</Label>
        <Input
          value={template.contact.subtitle || ''}
          onChange={(e) => onUpdate({ subtitle: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          placeholder="תת כותרת..."
        />
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">טקסט כפתור</Label>
        <Input
          value={template.contact.buttonText}
          onChange={(e) => onUpdate({ buttonText: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          placeholder="שלח הודעה"
        />
      </div>
    </div>
  );
};
