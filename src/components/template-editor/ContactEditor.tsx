import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TemplateData } from '@/types/template';
import { ColorPicker } from './ColorPicker';

interface ContactEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (styleUpdates: any) => void;
}

export const ContactEditor = ({ template, onUpdate, onStyleUpdate }: ContactEditorProps) => {
  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">תוכן</h3>
        
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

      {/* Colors Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">צבעים</h3>
        
        <ColorPicker
          label="רקע הסקשן"
          value={template.styles.contactBackground}
          onChange={(value) => onStyleUpdate({ contactBackground: value })}
        />
        
        <ColorPicker
          label="צבע כותרת"
          value={template.styles.textColor}
          onChange={(value) => onStyleUpdate({ textColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
        />
        
        <ColorPicker
          label="רקע טופס"
          value="#ffffff"
          onChange={(value) => onStyleUpdate({ backgroundColor: value })}
        />
      </div>
    </div>
  );
};
