
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TemplateData } from '@/types/template';

interface EmotionalEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const EmotionalEditor = ({ template, onUpdate }: EmotionalEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white text-sm font-medium">תג</Label>
        <Input
          value={template.emotional.badge || ''}
          onChange={(e) => onUpdate({ badge: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          placeholder="תג..."
        />
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">כותרת</Label>
        <Input
          value={template.emotional.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          placeholder="כותרת רגשית..."
        />
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">תוכן</Label>
        <Textarea
          value={template.emotional.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          rows={4}
          placeholder="תוכן רגשי..."
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-white text-sm font-medium">כפתור 1</Label>
          <Input
            value={template.emotional.button1Text}
            onChange={(e) => onUpdate({ button1Text: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="טקסט כפתור..."
          />
        </div>
        <div>
          <Label className="text-white text-sm font-medium">כפתור 2</Label>
          <Input
            value={template.emotional.button2Text}
            onChange={(e) => onUpdate({ button2Text: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="טקסט כפתור..."
          />
        </div>
      </div>
    </div>
  );
};
