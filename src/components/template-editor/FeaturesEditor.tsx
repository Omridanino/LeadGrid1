
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { TemplateData } from '@/types/template';

interface FeaturesEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const FeaturesEditor = ({ template, onUpdate }: FeaturesEditorProps) => {
  const updateItems = (newItems: any[]) => {
    onUpdate({ items: newItems });
  };

  return (
    <div className="space-y-4">
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
                  <Input
                    value={item.icon}
                    onChange={(e) => {
                      const newItems = [...template.features.items];
                      newItems[index] = { ...item, icon: e.target.value };
                      updateItems(newItems);
                    }}
                    className="bg-gray-700 border-gray-600 text-white w-16 text-center"
                    placeholder="🎯"
                  />
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
                icon: '⭐'
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
  );
};
