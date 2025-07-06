
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { TemplateData } from '@/types/template';
import { BackgroundSelector } from './BackgroundSelector';
import { ColorPicker } from './ColorPicker';
import IconSelector from '../IconSelector';

interface FeaturesEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (styleUpdates: any) => void;
}

export const FeaturesEditor = ({ template, onUpdate, onStyleUpdate }: FeaturesEditorProps) => {
  const updateItems = (newItems: any[]) => {
    onUpdate({ items: newItems });
  };

  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">תוכן</h3>
        
        <div>
          <Label className="text-white text-sm font-medium">תג</Label>
          <Input
            value={template.features.badge || ''}
            onChange={(e) => onUpdate({ badge: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="תג..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">כותרת</Label>
          <Input
            value={template.features.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="כותרת התכונות..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">תת כותרת</Label>
          <Input
            value={template.features.subtitle || ''}
            onChange={(e) => onUpdate({ subtitle: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="תת כותרת..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">תכונות</Label>
          <div className="space-y-3">
            {template.features.items.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded border border-gray-600">
                        <i className={`ri-${item.icon} text-lg text-white`}></i>
                      </div>
                      <IconSelector
                        selectedIcon={item.icon}
                        onIconSelect={(icon) => {
                          const newItems = [...template.features.items];
                          newItems[index] = { ...item, icon };
                          updateItems(newItems);
                        }}
                        triggerClassName="text-xs px-2 py-1"
                      />
                    </div>
                    <Input
                      value={item.title}
                      onChange={(e) => {
                        const newItems = [...template.features.items];
                        newItems[index] = { ...item, title: e.target.value };
                        updateItems(newItems);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                      placeholder="שם התכונה"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newItems = template.features.items.filter((_, i) => i !== index);
                        updateItems(newItems);
                      }}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    value={item.description}
                    onChange={(e) => {
                      const newItems = [...template.features.items];
                      newItems[index] = { ...item, description: e.target.value };
                      updateItems(newItems);
                    }}
                    className="bg-gray-700 border-gray-600 text-white text-right"
                    placeholder="תיאור התכונה"
                  />
                </CardContent>
              </Card>
            ))}
            <Button
              onClick={() => {
                const newItems = [...template.features.items, {
                  title: 'תכונה חדשה',
                  description: 'תיאור התכונה',
                  icon: 'star-line'
                }];
                updateItems(newItems);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 ml-1" />
              הוסף תכונה
            </Button>
          </div>
        </div>
      </div>

      {/* Colors and Background Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">עיצוב רקע</h3>
        
        <BackgroundSelector
          label="רקע הסקשן"
          colorValue={template.styles.featuresBackground}
          imageValue={template.styles.featuresBackgroundImage}
          onColorChange={(value) => onStyleUpdate({ featuresBackground: value })}
          onImageChange={(value) => onStyleUpdate({ featuresBackgroundImage: value })}
        />
        
        <ColorPicker
          label="צבע כותרת"
          value={template.styles.textColor}
          onChange={(value) => onStyleUpdate({ textColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור ראשי"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
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
