import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { TemplateData } from '@/types/template';
import { ColorPicker } from './ColorPicker';

interface AboutEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (styleUpdates: any) => void;
}

export const AboutEditor = ({ template, onUpdate, onStyleUpdate }: AboutEditorProps) => {
  const updateStats = (newStats: any[]) => {
    onUpdate({ stats: newStats });
  };

  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">תוכן</h3>
        
        <div>
          <Label className="text-white text-sm font-medium">תג</Label>
          <Input
            value={template.about.badge || ''}
            onChange={(e) => onUpdate({ badge: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="תג..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">כותרת</Label>
          <Input
            value={template.about.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="כותרת אודות..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">תיאור</Label>
          <Textarea
            value={template.about.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            rows={4}
            placeholder="תיאור מפורט על החברה..."
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label className="text-white text-sm font-medium">כפתור 1</Label>
            <Input
              value={template.about.button1Text}
              onChange={(e) => onUpdate({ button1Text: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white text-right"
              placeholder="טקסט כפתור..."
            />
          </div>
          <div>
            <Label className="text-white text-sm font-medium">כפתור 2</Label>
            <Input
              value={template.about.button2Text}
              onChange={(e) => onUpdate({ button2Text: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white text-right"
              placeholder="טקסט כפתור..."
            />
          </div>
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">סטטיסטיקות</Label>
          <div className="space-y-3">
            {template.about.stats?.map((stat, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={stat.number}
                      onChange={(e) => {
                        const newStats = [...(template.about.stats || [])];
                        newStats[index] = { ...stat, number: e.target.value };
                        updateStats(newStats);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-center w-24"
                      placeholder="100+"
                    />
                    <Input
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...(template.about.stats || [])];
                        newStats[index] = { ...stat, label: e.target.value };
                        updateStats(newStats);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                      placeholder="לקוחות מרוצים"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newStats = template.about.stats?.filter((_, i) => i !== index) || [];
                        updateStats(newStats);
                      }}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )) || []}
            <Button
              onClick={() => {
                const newStats = [...(template.about.stats || []), {
                  number: '100+',
                  label: 'לקוחות מרוצים'
                }];
                updateStats(newStats);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 ml-1" />
              הוסף סטטיסטיקה
            </Button>
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">צבעים</h3>
        
        <ColorPicker
          label="רקע הסקשן"
          value={template.styles.aboutBackground}
          onChange={(value) => onStyleUpdate({ aboutBackground: value })}
        />
        
        <ColorPicker
          label="צבע כותרת"
          value={template.styles.textColor}
          onChange={(value) => onStyleUpdate({ textColor: value })}
        />
        
        <ColorPicker
          label="צבע סטטיסטיקות"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור ראשי"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
        />
      </div>
    </div>
  );
};
