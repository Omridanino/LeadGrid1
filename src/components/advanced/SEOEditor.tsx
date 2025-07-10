
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Search, Tag, Image } from 'lucide-react';
import { TemplateData } from '@/types/template';

interface SEOEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const SEOEditor = ({ template, onUpdate }: SEOEditorProps) => {
  const [seoData, setSeoData] = useState({
    title: template.advancedStyles?.seo?.title || template.name,
    description: template.advancedStyles?.seo?.description || '',
    keywords: template.advancedStyles?.seo?.keywords || '',
    ogImage: template.advancedStyles?.seo?.ogImage || '',
    indexable: template.advancedStyles?.seo?.indexable !== false
  });

  const handleUpdate = (field: string, value: any) => {
    const newSeoData = { ...seoData, [field]: value };
    setSeoData(newSeoData);
    
    onUpdate({
      advancedStyles: {
        ...template.advancedStyles,
        seo: newSeoData
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="w-5 h-5 text-blue-400" />
        <h3 className="text-white text-lg font-bold">הגדרות SEO</h3>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-4 h-4" />
            מטא תגים בסיסיים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">כותרת הדף (Title)</Label>
            <Input
              value={seoData.title}
              onChange={(e) => handleUpdate('title', e.target.value)}
              placeholder="הכנס כותרת לדף"
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">עד 60 תווים מומלץ</p>
          </div>

          <div>
            <Label className="text-slate-300">תיאור הדף (Description)</Label>
            <Textarea
              value={seoData.description}
              onChange={(e) => handleUpdate('description', e.target.value)}
              placeholder="הכנס תיאור קצר לדף"
              className="bg-slate-700 border-slate-600 text-white h-20"
            />
            <p className="text-xs text-slate-400 mt-1">עד 160 תווים מומלץ</p>
          </div>

          <div>
            <Label className="text-slate-300">מילות מפתח (Keywords)</Label>
            <Input
              value={seoData.keywords}
              onChange={(e) => handleUpdate('keywords', e.target.value)}
              placeholder="מילה1, מילה2, מילה3"
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">הפרד עם פסיקים</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Image className="w-4 h-4" />
            Open Graph (שיתוף ברשתות חברתיות)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">תמונה לשיתוף</Label>
            <Input
              value={seoData.ogImage}
              onChange={(e) => handleUpdate('ogImage', e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">המלצה: 1200x630 פיקסלים</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Tag className="w-4 h-4" />
            הגדרות מתקדמות
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">אפשר אינדוקס במנועי חיפוש</Label>
              <p className="text-xs text-slate-400">האם הדף יופיע בתוצאות חיפוש</p>
            </div>
            <Switch
              checked={seoData.indexable}
              onCheckedChange={(checked) => handleUpdate('indexable', checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
