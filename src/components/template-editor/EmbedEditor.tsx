import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Code } from 'lucide-react';
import { TemplateData, EmbedSection } from '@/types/template';

interface EmbedEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<EmbedSection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const EmbedEditor = ({ template, onUpdate }: EmbedEditorProps) => {
  const embedData = template.embed || {
    title: 'תוכן משובץ',
    htmlCode: '',
    height: 400
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Code className="w-5 h-5" />
            קוד HTML משובץ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">כותרת</Label>
            <Input
              value={embedData.title || ''}
              onChange={(e) => onUpdate({ ...embedData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת התוכן"
            />
          </div>

          <div>
            <Label className="text-slate-200">קוד HTML</Label>
            <Textarea
              value={embedData.htmlCode}
              onChange={(e) => onUpdate({ ...embedData, htmlCode: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white font-mono text-sm"
              placeholder="<iframe src=... או כל קוד HTML אחר"
              rows={8}
            />
          </div>

          <div>
            <Label className="text-slate-200">גובה (פיקסלים)</Label>
            <Input
              type="number"
              value={embedData.height || 400}
              onChange={(e) => onUpdate({ ...embedData, height: parseInt(e.target.value) || 400 })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              min="100"
              max="1000"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};