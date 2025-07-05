
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ColorPicker } from './ColorPicker';
import { TemplateData } from '@/types/template';
import { Upload, Image, X } from 'lucide-react';

interface HeroEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (updates: any) => void;
}

export const HeroEditor = ({ template, onUpdate, onStyleUpdate }: HeroEditorProps) => {
  const hero = template.hero || {
    title: '',
    subtitle: '',
    description: '',
    primaryButton: { text: '', link: '' },
    secondaryButton: { text: '', link: '' },
    backgroundImage: '',
    showVideo: false,
    videoUrl: ''
  };

  const styles = template.styles || {
    primaryColor: '#1e40af',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontFamily: 'Arial'
  };

  const updateHero = (field: string, value: any) => {
    onUpdate({ [field]: value });
  };

  const updateButton = (buttonType: 'primaryButton' | 'secondaryButton', field: string, value: string) => {
    onUpdate({
      [buttonType]: {
        ...hero[buttonType],
        [field]: value
      }
    });
  };

  const fontOptions = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'Trebuchet MS', label: 'Trebuchet MS' },
    { value: 'Impact', label: 'Impact' },
    { value: 'Courier New', label: 'Courier New' }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">חלק הפתיחה</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* כותרת ראשית */}
          <div>
            <Label className="text-white text-sm">כותרת ראשית</Label>
            <Input
              value={hero.title || ''}
              onChange={(e) => updateHero('title', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white mt-1"
              placeholder="הכנס כותרת ראשית..."
            />
          </div>

          {/* תת כותרת */}
          <div>
            <Label className="text-white text-sm">תת כותרת</Label>
            <Input
              value={hero.subtitle || ''}
              onChange={(e) => updateHero('subtitle', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white mt-1"
              placeholder="הכנס תת כותרת..."
            />
          </div>

          {/* תיאור */}
          <div>
            <Label className="text-white text-sm">תיאור</Label>
            <Textarea
              value={hero.description || ''}
              onChange={(e) => updateHero('description', e.target.value)}
              className="bg-gray-800 border-gray-700 text-white mt-1"
              placeholder="הכנס תיאור..."
              rows={3}
            />
          </div>

          {/* כפתור ראשי */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-white text-sm">טקסט כפתור ראשי</Label>
              <Input
                value={hero.primaryButton?.text || ''}
                onChange={(e) => updateButton('primaryButton', 'text', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white mt-1"
                placeholder="צרו קשר"
              />
            </div>
            <div>
              <Label className="text-white text-sm">קישור כפתור ראשי</Label>
              <Input
                value={hero.primaryButton?.link || ''}
                onChange={(e) => updateButton('primaryButton', 'link', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white mt-1"
                placeholder="#contact"
              />
            </div>
          </div>

          {/* כפתור משני */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-white text-sm">טקסט כפתור משני</Label>
              <Input
                value={hero.secondaryButton?.text || ''}
                onChange={(e) => updateButton('secondaryButton', 'text', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white mt-1"
                placeholder="למידע נוסף"
              />
            </div>
            <div>
              <Label className="text-white text-sm">קישור כפתור משני</Label>
              <Input
                value={hero.secondaryButton?.link || ''}
                onChange={(e) => updateButton('secondaryButton', 'link', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white mt-1"
                placeholder="#about"
              />
            </div>
          </div>

          {/* תמונת רקע */}
          <div>
            <Label className="text-white text-sm">תמונת רקע</Label>
            <div className="flex gap-2 mt-1">
              <Input
                value={hero.backgroundImage || ''}
                onChange={(e) => updateHero('backgroundImage', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white flex-1"
                placeholder="https://example.com/image.jpg"
              />
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3"
              >
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* וידאו */}
          <div className="flex items-center justify-between">
            <Label className="text-white text-sm">הצג וידאו</Label>
            <Switch
              checked={hero.showVideo || false}
              onCheckedChange={(checked) => updateHero('showVideo', checked)}
            />
          </div>

          {hero.showVideo && (
            <div>
              <Label className="text-white text-sm">קישור לוידאו</Label>
              <Input
                value={hero.videoUrl || ''}
                onChange={(e) => updateHero('videoUrl', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white mt-1"
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* הגדרות עיצוב */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-lg">הגדרות עיצוב</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* צבע ראשי */}
          <ColorPicker
            label="צבע ראשי"
            value={styles.primaryColor}
            onChange={(color) => onStyleUpdate({ primaryColor: color })}
          />

          {/* צבע רקע */}
          <ColorPicker
            label="צבע רקע"
            value={styles.backgroundColor}
            onChange={(color) => onStyleUpdate({ backgroundColor: color })}
          />

          {/* צבע טקסט */}
          <ColorPicker
            label="צבע טקסט"
            value={styles.textColor}
            onChange={(color) => onStyleUpdate({ textColor: color })}
          />

          {/* גופן */}
          <div>
            <Label className="text-white text-sm">גופן</Label>
            <Select value={styles.fontFamily} onValueChange={(value) => onStyleUpdate({ fontFamily: value })}>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {fontOptions.map((font) => (
                  <SelectItem key={font.value} value={font.value} className="text-white hover:bg-gray-700">
                    {font.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};
