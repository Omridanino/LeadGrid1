
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Globe, Search, Tag, Image, CheckCircle, AlertCircle } from 'lucide-react';
import { TemplateData } from '@/types/template';

interface SEOOptimizerProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const SEOOptimizer = ({ template, onUpdate }: SEOOptimizerProps) => {
  const [seoData, setSeoData] = useState({
    title: template.advancedStyles?.seo?.title || template.name,
    description: template.advancedStyles?.seo?.description || '',
    keywords: template.advancedStyles?.seo?.keywords || '',
    ogImage: template.advancedStyles?.seo?.ogImage || '',
    indexable: template.advancedStyles?.seo?.indexable !== false
  });

  const calculateSEOScore = () => {
    let score = 0;
    if (seoData.title && seoData.title.length >= 30 && seoData.title.length <= 60) score += 25;
    if (seoData.description && seoData.description.length >= 120 && seoData.description.length <= 160) score += 25;
    if (seoData.keywords && seoData.keywords.split(',').length >= 3) score += 25;
    if (seoData.ogImage) score += 25;
    return score;
  };

  const handleUpdate = (field: string, value: any) => {
    const newSeoData = { ...seoData, [field]: value };
    setSeoData(newSeoData);
    
    onUpdate({
      seo: newSeoData
    });
  };

  const seoScore = calculateSEOScore();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="w-5 h-5 text-blue-400" />
        <h3 className="text-white text-lg font-bold">מיטוב SEO מתקדם</h3>
      </div>

      {/* SEO Score */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            {seoScore >= 75 ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-yellow-400" />
            )}
            ציון SEO
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">ציון כללי</span>
              <Badge variant={seoScore >= 75 ? "default" : "secondary"}>
                {seoScore}/100
              </Badge>
            </div>
            <Progress value={seoScore} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Basic Meta Tags */}
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
            <p className="text-xs text-slate-400 mt-1">
              {seoData.title.length}/60 תווים - מומלץ 30-60 תווים
            </p>
          </div>

          <div>
            <Label className="text-slate-300">תיאור הדף (Description)</Label>
            <Textarea
              value={seoData.description}
              onChange={(e) => handleUpdate('description', e.target.value)}
              placeholder="הכנס תיאור קצר לדף"
              className="bg-slate-700 border-slate-600 text-white h-20"
            />
            <p className="text-xs text-slate-400 mt-1">
              {seoData.description.length}/160 תווים - מומלץ 120-160 תווים
            </p>
          </div>

          <div>
            <Label className="text-slate-300">מילות מפתח (Keywords)</Label>
            <Input
              value={seoData.keywords}
              onChange={(e) => handleUpdate('keywords', e.target.value)}
              placeholder="מילה1, מילה2, מילה3"
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">
              {seoData.keywords.split(',').filter(k => k.trim()).length} מילות מפתח - מומלץ לפחות 3
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Open Graph */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Image className="w-4 h-4" />
            Open Graph (שיתוף ברשתות)
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

      {/* Advanced Settings */}
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
