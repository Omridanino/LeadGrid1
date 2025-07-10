
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Search, Globe, FileText, Image } from 'lucide-react';

interface SEOEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const SEOEditor = ({ onUpdate, currentData }: SEOEditorProps) => {
  const [seoData, setSeoData] = useState({
    title: currentData?.title || '',
    description: currentData?.description || '',
    keywords: currentData?.keywords || '',
    ogImage: currentData?.ogImage || '',
    indexable: currentData?.indexable !== false,
    ...currentData
  });

  useEffect(() => {
    onUpdate(seoData);
  }, [seoData, onUpdate]);

  const handleInputChange = (field: string, value: any) => {
    setSeoData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="w-5 h-5" />
            SEO ומטא תגים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="seo-title" className="text-white">כותרת העמוד (Title)</Label>
            <Input
              id="seo-title"
              value={seoData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="כותרת העמוד שתופיע ב-Google"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="seo-description" className="text-white">תיאור העמוד (Description)</Label>
            <Textarea
              id="seo-description"
              value={seoData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="תיאור קצר שיופיע בתוצאות החיפוש"
              className="bg-gray-700 border-gray-600 text-white"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="seo-keywords" className="text-white">מילות מפתח (Keywords)</Label>
            <Input
              id="seo-keywords"
              value={seoData.keywords}
              onChange={(e) => handleInputChange('keywords', e.target.value)}
              placeholder="מילות מפתח מופרדות בפסיק"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="og-image" className="text-white">תמונת שיתוף (OG Image)</Label>
            <Input
              id="og-image"
              value={seoData.ogImage}
              onChange={(e) => handleInputChange('ogImage', e.target.value)}
              placeholder="קישור לתמונה לשיתוף ברשתות חברתיות"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="indexable" className="text-white">זמין למנועי חיפוש</Label>
              <p className="text-sm text-gray-400">האם לאפשר למנועי חיפוש לאנדקס את העמוד</p>
            </div>
            <Switch
              id="indexable"
              checked={seoData.indexable}
              onCheckedChange={(checked) => handleInputChange('indexable', checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
