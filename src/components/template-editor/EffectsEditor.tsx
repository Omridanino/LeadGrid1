
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { TemplateData } from '@/types/template';

interface EffectsEditorProps {
  template: TemplateData;
  onUpdate: (section: string, effectType: string | null) => void;
}

const availableEffects = [
  { id: 'fade-in', name: 'הופעה הדרגתית', description: 'אלמנטים מופיעים בהדרגה' },
  { id: 'slide-up', name: 'החלקה מלמטה', description: 'אלמנטים מחליקים מלמטה למעלה' },
  { id: 'scale-in', name: 'הגדלה הדרגתית', description: 'אלמנטים מתחילים קטנים ומתרחבים' },
  { id: 'float', name: 'ריחוף', description: 'אלמנטים מרחפים למעלה ולמטה' },
  { id: 'glow', name: 'זוהר', description: 'אפקט זוהר סביב אלמנטים' },
  { id: 'parallax', name: 'פרלקס', description: 'רקע נע בקצב שונה מהתוכן' },
  { id: 'glass', name: 'זכוכית', description: 'אפקט זכוכית מטושטשת' },
  { id: 'neon', name: 'ניאון', description: 'אפקט ניאון זוהר' },
  { id: 'particles', name: 'חלקיקים', description: 'חלקיקים נעים ברקע' },
  { id: 'wave', name: 'גלים', description: 'אנימציית גלים ברקע' }
];

const sections = [
  { id: 'hero', name: 'הירו' },
  { id: 'emotional', name: 'רגש' },
  { id: 'features', name: 'תכונות' },
  { id: 'testimonials', name: 'עדויות' },
  { id: 'about', name: 'אודות' },
  { id: 'pricing', name: 'מחירים' },
  { id: 'faq', name: 'שאלות' },
  { id: 'finalCta', name: 'קריאה לפעולה' },
  { id: 'contact', name: 'יצירת קשר' }
];

export const EffectsEditor = ({ template, onUpdate }: EffectsEditorProps) => {
  const getEffectForSection = (sectionId: string) => {
    return template.effects?.[sectionId] || null;
  };

  const handleEffectToggle = (sectionId: string, enabled: boolean) => {
    if (!enabled) {
      onUpdate(sectionId, null);
    }
  };

  const handleEffectChange = (sectionId: string, effectId: string) => {
    onUpdate(sectionId, effectId);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
          <h3 className="text-white text-lg font-semibold">עריכת אפקטים</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="bg-gray-800 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            <span>*</span>
            <span>ניתן לבחור אפקט אחד בלבד לכל סקשן</span>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section) => {
            const currentEffect = getEffectForSection(section.id);
            const isEnabled = currentEffect !== null;
            
            return (
              <Card key={section.id} className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-base">{section.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      {isEnabled && (
                        <Badge variant="secondary" className="text-xs">
                          {availableEffects.find(e => e.id === currentEffect)?.name}
                        </Badge>
                      )}
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={(checked) => handleEffectToggle(section.id, checked)}
                      />
                    </div>
                  </div>
                </CardHeader>
                
                {isEnabled && (
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <Label className="text-white text-sm">בחר אפקט:</Label>
                      <Select
                        value={currentEffect || ''}
                        onValueChange={(value) => handleEffectChange(section.id, value)}
                      >
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue placeholder="בחר אפקט..." />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 z-[100]">
                          {availableEffects.map((effect) => (
                            <SelectItem 
                              key={effect.id} 
                              value={effect.id}
                              className="text-white hover:bg-gray-700 focus:bg-gray-700 bg-gray-800"
                            >
                              <div className="text-right w-full">
                                <div className="font-medium text-white">{effect.name}</div>
                                <div className="text-xs text-gray-400">{effect.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
