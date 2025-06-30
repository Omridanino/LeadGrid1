
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TemplateData } from '@/types/template';
import { ColorPicker } from './ColorPicker';
import IconSelector from '../IconSelector';

interface FinalCtaEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (styleUpdates: any) => void;
}

export const FinalCtaEditor = ({ template, onUpdate, onStyleUpdate }: FinalCtaEditorProps) => {
  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">תוכן</h3>
        
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
        
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label className="text-white text-sm font-medium">כפתור 1</Label>
            <Input
              value={template.finalCta.button1Text}
              onChange={(e) => onUpdate({ button1Text: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white text-right"
              placeholder="טקסט כפתור..."
            />
            <div>
              <Label className="text-white text-xs font-medium mb-1 block">אייקון כפתור 1</Label>
              <IconSelector
                selectedIcon={template.finalCta.button1Icon || ''}
                onIconSelect={(icon) => onUpdate({ button1Icon: icon })}
                triggerClassName="w-full bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-white text-sm font-medium">כפתור 2</Label>
            <Input
              value={template.finalCta.button2Text}
              onChange={(e) => onUpdate({ button2Text: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white text-right"
              placeholder="טקסט כפתור..."
            />
            <div>
              <Label className="text-white text-xs font-medium mb-1 block">אייקון כפתור 2</Label>
              <IconSelector
                selectedIcon={template.finalCta.button2Icon || ''}
                onIconSelect={(icon) => onUpdate({ button2Icon: icon })}
                triggerClassName="w-full bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">צבעים</h3>
        
        <ColorPicker
          label="רקע הסקשן"
          value={template.styles.finalCtaBackground}
          onChange={(value) => onStyleUpdate({ finalCtaBackground: value })}
        />
        
        <ColorPicker
          label="צבע טקסט"
          value="#ffffff"
          onChange={(value) => onStyleUpdate({ textColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור ראשי"
          value={template.styles.accentColor}
          onChange={(value) => onStyleUpdate({ accentColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור משני"
          value={template.styles.secondaryColor}
          onChange={(value) => onStyleUpdate({ secondaryColor: value })}
        />
      </div>
    </div>
  );
};
