import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Type, AlignCenter, AlignLeft, AlignRight } from 'lucide-react';
import { TemplateData, HeadingSection } from '@/types/template';

interface HeadingEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<HeadingSection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const HeadingEditor = ({ template, onUpdate }: HeadingEditorProps) => {
  const headingData = template.heading || {
    title: 'כותרת ראשית',
    subtitle: 'תת כותרת מסבירה',
    alignment: 'center' as const,
    size: 'large' as const
  };

  const alignmentOptions = [
    { value: 'right', label: 'ימין', icon: AlignRight },
    { value: 'center', label: 'מרכז', icon: AlignCenter },
    { value: 'left', label: 'שמאל', icon: AlignLeft }
  ];

  const sizeOptions = [
    { value: 'small', label: 'קטן', example: 'text-2xl' },
    { value: 'medium', label: 'בינוני', example: 'text-3xl' },
    { value: 'large', label: 'גדול', example: 'text-4xl' },
    { value: 'xl', label: 'ענק', example: 'text-6xl' }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Type className="w-5 h-5" />
            עריכת כותרת
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">תווית (Badge)</Label>
            <Input
              value={headingData.badge || ''}
              onChange={(e) => onUpdate({ ...headingData, badge: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תווית קטנה מעל הכותרת"
            />
          </div>

          <div>
            <Label className="text-slate-200">כותרת ראשית</Label>
            <Input
              value={headingData.title}
              onChange={(e) => onUpdate({ ...headingData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="הכותרת הראשית"
            />
          </div>

          <div>
            <Label className="text-slate-200">תת כותרת</Label>
            <Textarea
              value={headingData.subtitle || ''}
              onChange={(e) => onUpdate({ ...headingData, subtitle: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תת כותרת מסבירה"
              rows={3}
            />
          </div>

          <div>
            <Label className="text-slate-200">גודל הכותרת</Label>
            <Select 
              value={headingData.size} 
              onValueChange={(value) => onUpdate({ ...headingData, size: value as any })}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sizeOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-slate-200">יישור הטקסט</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {alignmentOptions.map(option => {
                const Icon = option.icon;
                return (
                  <Button
                    key={option.value}
                    onClick={() => onUpdate({ ...headingData, alignment: option.value as any })}
                    className={`${
                      headingData.alignment === option.value 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-slate-700/50 hover:bg-slate-600/50'
                    } text-white`}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {option.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white">תצוגה מקדימה</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`text-${headingData.alignment} space-y-2`}>
            {headingData.badge && (
              <div className="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                {headingData.badge}
              </div>
            )}
            <h1 className={`font-bold text-white ${
              headingData.size === 'small' ? 'text-2xl' :
              headingData.size === 'medium' ? 'text-3xl' :
              headingData.size === 'large' ? 'text-4xl' : 'text-6xl'
            }`}>
              {headingData.title}
            </h1>
            {headingData.subtitle && (
              <p className="text-slate-300 text-lg opacity-80">
                {headingData.subtitle}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};