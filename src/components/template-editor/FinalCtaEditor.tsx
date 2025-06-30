
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TemplateData } from '@/types/template';

interface FinalCtaEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const FinalCtaEditor = ({ template, onUpdate }: FinalCtaEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white text-sm font-medium">תג</Label>
        <Input
          value={template.finalCta.badge || ''}
          onChange={(e) => onUpdate({ badge: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          placeholder="תג..."
        />
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">כותרת</Label>
        <Input
          value={template.finalCta.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          placeholder="כותרת קריאה לפעולה..."
        />
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">תיאור</Label>
        <Textarea
          value={template.finalCta.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white text-right"
          rows={3}
          placeholder="תיאור קריאה לפעולה..."
        />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label className="text-white text-sm font-medium">כפתור 1</Label>
          <Input
            value={template.finalCta.button1Text}
            onChange={(e) => onUpdate({ button1Text: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="טקסט כפתור..."
          />
        </div>
        <div>
          <Label className="text-white text-sm font-medium">כפתור 2</Label>
          <Input
            value={template.finalCta.button2Text}
            onChange={(e) => onUpdate({ button2Text: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="טקסט כפתור..."
          />
        </div>
      </div>
    </div>
  );
};
