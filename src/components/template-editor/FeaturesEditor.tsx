
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ColorPicker } from './ColorPicker';
import { TemplateData } from '@/types/template';
import { Plus, Trash2, Star, Heart, Zap, Shield, Award, Target } from 'lucide-react';

interface FeaturesEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (updates: any) => void;
}

export const FeaturesEditor = ({ template, onUpdate, onStyleUpdate }: FeaturesEditorProps) => {
  const features = template.features || {
    title: 'למה לבחור בנו?',
    subtitle: 'השירותים המובילים בתחום',
    items: [
      { title: 'ניסיון רב', description: 'מעל 10 שנות ניסיון בתחום', icon: 'star' },
      { title: 'שירות מקצועי', description: 'צוות מקצועי ומנוסה', icon: 'award' },
      { title: 'מחירים הוגנים', description: 'מחירים תחרותיים', icon: 'target' }
    ]
  };

  const iconOptions = [
    { value: 'star', label: 'כוכב', icon: Star },
    { value: 'heart', label: 'לב', icon: Heart },
    { value: 'zap', label: 'ברק', icon: Zap },
    { value: 'shield', label: 'מגן', icon: Shield },
    { value: 'award', label: 'פרס', icon: Award },
    { value: 'target', label: 'מטרה', icon: Target }
  ];

  const layoutOptions = [
    { value: 'grid', label: 'רשת' },
    { value: 'list', label: 'רשימה' },
    { value: 'carousel', label: 'קרוסלה' }
  ];

  const updateFeatures = (field: string, value: any) => {
    onUpdate({ [field]: value });
  };

  const updateFeatureItem = (index: number, field: string, value: string) => {
    const updatedItems = [...features.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    updateFeatures('items', updatedItems);
  };

  const addFeatureItem = () => {
    const newItem = {
      title: 'תכונה חדשה',
      description: 'תיאור התכונה החדשة',
      icon: 'star'
    };
    updateFeatures('items', [...features.items, newItem]);
  };

  const removeFeatureItem = (index: number) => {
    const updatedItems = features.items.filter((_, i) => i !== index);
    updateFeatures('items', updatedItems);
  };

  return (
    <div className="space-y-6">
      
      {/* הגדרות כלליות */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">הגדרות חלק התכונות</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          
          <div>
            <Label className="text-white text-sm">כותרת ראשית</Label>
            <Input
              value={features.title || ''}
              onChange={(e) => updateFeatures('title', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white mt-1"
              placeholder="למה לבחור בנו?"
            />
          </div>

          <div>
            <Label className="text-white text-sm">תת כותרת</Label>
            <Input
              value={features.subtitle || ''}
              onChange={(e) => updateFeatures('subtitle', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white mt-1"
              placeholder="השירותים המובילים בתחום"
            />
          </div>

          <div>
            <Label className="text-white text-sm">פריסה</Label>
            <Select 
              value={features.layout || 'grid'} 
              onValueChange={(value) => updateFeatures('layout', value)}
            >
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {layoutOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-white hover:bg-gray-700">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        </CardContent>
      </Card>

      {/* רשימת תכונות */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg">רשימת התכונות</CardTitle>
          <Button
            onClick={addFeatureItem}
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Plus className="w-4 h-4 ml-1" />
            הוסף תכונה
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {features.items.map((item, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-600">
              <CardContent className="p-4 space-y-3">
                
                <div className="flex items-center justify-between">
                  <Label className="text-white text-sm font-medium">תכונה {index + 1}</Label>
                  <Button
                    onClick={() => removeFeatureItem(index)}
                    size="sm"
                    variant="destructive"
                    className="bg-red-600 hover:bg-red-700 w-8 h-8 p-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-white text-xs">כותרת</Label>
                    <Input
                      value={item.title}
                      onChange={(e) => updateFeatureItem(index, 'title', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                      placeholder="כותרת התכונה"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white text-xs">אייקון</Label>
                    <Select 
                      value={item.icon} 
                      onValueChange={(value) => updateFeatureItem(index, 'icon', value)}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        {iconOptions.map((option) => {
                          const IconComponent = option.icon;
                          return (
                            <SelectItem key={option.value} value={option.value} className="text-white hover:bg-gray-600">
                              <div className="flex items-center gap-2">
                                <IconComponent className="w-4 h-4" />
                                {option.label}
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-white text-xs">תיאור</Label>
                  <Textarea
                    value={item.description}
                    onChange={(e) => updateFeatureItem(index, 'description', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white text-sm"
                    placeholder="תיאור התכונה"
                    rows={2}
                  />
                </div>

              </CardContent>
            </Card>
          ))}

        </CardContent>
      </Card>

    </div>
  );
};
