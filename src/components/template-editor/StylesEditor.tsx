
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TemplateData } from '@/types/template';

interface StylesEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const StylesEditor = ({ template, onUpdate }: StylesEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-white text-sm font-medium">צבע ראשי</Label>
        <div className="flex items-center gap-2">
          <Input
            value={template.styles.primaryColor}
            onChange={(e) => onUpdate({ primaryColor: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
            placeholder="#3b82f6"
          />
          <div 
            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
            style={{ backgroundColor: template.styles.primaryColor }}
          />
        </div>
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">צבע משני</Label>
        <div className="flex items-center gap-2">
          <Input
            value={template.styles.secondaryColor}
            onChange={(e) => onUpdate({ secondaryColor: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
            placeholder="#8b5cf6"
          />
          <div 
            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
            style={{ backgroundColor: template.styles.secondaryColor }}
          />
        </div>
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">צבע הדגשה</Label>
        <div className="flex items-center gap-2">
          <Input
            value={template.styles.accentColor}
            onChange={(e) => onUpdate({ accentColor: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
            placeholder="#06b6d4"
          />
          <div 
            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
            style={{ backgroundColor: template.styles.accentColor }}
          />
        </div>
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">צבע רקע</Label>
        <div className="flex items-center gap-2">
          <Input
            value={template.styles.backgroundColor}
            onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
            placeholder="#ffffff"
          />
          <div 
            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
            style={{ backgroundColor: template.styles.backgroundColor }}
          />
        </div>
      </div>
      
      <div>
        <Label className="text-white text-sm font-medium">צבע טקסט</Label>
        <div className="flex items-center gap-2">
          <Input
            value={template.styles.textColor}
            onChange={(e) => onUpdate({ textColor: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
            placeholder="#333333"
          />
          <div 
            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
            style={{ backgroundColor: template.styles.textColor }}
          />
        </div>
      </div>
    </div>
  );
};
