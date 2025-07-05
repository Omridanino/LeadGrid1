import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlignLeft, AlignCenter, AlignRight, Type } from 'lucide-react';
import { TemplateData, TextSection } from '@/types/template';

interface TextEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<TextSection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const TextEditor = ({ template, onUpdate }: TextEditorProps) => {
  const textData = template.text || {
    content: 'זהו טקסט לדוגמה. באפשרותך לערוך אותו ולהתאים אותו לצרכים שלך.',
    alignment: 'right' as const,
    textSize: 'medium' as const
  };

  const alignmentOptions = [
    { value: 'right', label: 'ימין', icon: AlignRight },
    { value: 'center', label: 'מרכז', icon: AlignCenter },
    { value: 'left', label: 'שמאל', icon: AlignLeft }
  ];

  const sizeOptions = [
    { value: 'small', label: 'קטן' },
    { value: 'medium', label: 'בינוני' },
    { value: 'large', label: 'גדול' }
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Type className="w-5 h-5" />
            עריכת טקסט
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">תווית (Badge)</Label>
            <Input
              value={textData.badge || ''}
              onChange={(e) => onUpdate({ ...textData, badge: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תווית קטנה מעל הטקסט"
            />
          </div>

          <div>
            <Label className="text-slate-200">כותרת (אופציונלי)</Label>
            <Input
              value={textData.title || ''}
              onChange={(e) => onUpdate({ ...textData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת לטקסט"
            />
          </div>

          <div>
            <Label className="text-slate-200">תוכן הטקסט</Label>
            <Textarea
              value={textData.content}
              onChange={(e) => onUpdate({ ...textData, content: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white min-h-32"
              placeholder="כתוב כאן את התוכן..."
            />
          </div>

          <div>
            <Label className="text-slate-200">גודל הטקסט</Label>
            <Select 
              value={textData.textSize} 
              onValueChange={(value) => onUpdate({ ...textData, textSize: value as any })}
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
                    onClick={() => onUpdate({ ...textData, alignment: option.value as any })}
                    className={`${
                      textData.alignment === option.value 
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
          <div className={`text-${textData.alignment} space-y-3`}>
            {textData.badge && (
              <div className="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                {textData.badge}
              </div>
            )}
            {textData.title && (
              <h3 className="text-xl font-bold text-white">
                {textData.title}
              </h3>
            )}
            <div className={`text-slate-300 leading-relaxed ${
              textData.textSize === 'small' ? 'text-sm' :
              textData.textSize === 'medium' ? 'text-base' : 'text-lg'
            }`}>
              {textData.content.split('\n').map((line, index) => (
                <p key={index} className="mb-2">{line}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};