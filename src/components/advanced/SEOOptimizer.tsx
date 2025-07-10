
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, CheckCircle, AlertTriangle } from 'lucide-react';
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

  // SEO Score calculation
  const calculateSEOScore = () => {
    let score = 0;
    let maxScore = 100;
    
    // Title check (0-25 points)
    if (seoData.title) {
      if (seoData.title.length >= 30 && seoData.title.length <= 60) {
        score += 25;
      } else if (seoData.title.length > 0) {
        score += 15;
      }
    }
    
    // Description check (0-25 points)
    if (seoData.description) {
      if (seoData.description.length >= 120 && seoData.description.length <= 160) {
        score += 25;
      } else if (seoData.description.length > 0) {
        score += 15;
      }
    }
    
    // Keywords check (0-20 points)
    if (seoData.keywords && seoData.keywords.split(',').length >= 3) {
      score += 20;
    } else if (seoData.keywords) {
      score += 10;
    }
    
    // OG Image check (0-15 points)
    if (seoData.ogImage) {
      score += 15;
    }
    
    // Indexable check (0-15 points)
    if (seoData.indexable) {
      score += 15;
    }
    
    return Math.round(score);
  };

  const seoScore = calculateSEOScore();

  const handleUpdate = (field: string, value: any) => {
    const newSeoData = { ...seoData, [field]: value };
    setSeoData(newSeoData);
    
    onUpdate({
      seo: newSeoData
    });
  };

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSEOScoreBadge = (score: number) => {
    if (score >= 80) return { variant: 'default', text: 'מעולה' };
    if (score >= 60) return { variant: 'secondary', text: 'טוב' };
    return { variant: 'destructive', text: 'זקוק לשיפור' };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-green-400" />
        <h3 className="text-white text-lg font-bold">אופטימיזציה לקידום SEO</h3>
      </div>

      {/* SEO Score Card */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              ציון SEO כללי
            </span>
            <Badge className={getSEOScoreColor(seoScore)}>
              {getSEOScoreBadge(seoScore).text}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Progress value={seoScore} className="flex-1" />
            <span className={`font-bold text-lg ${getSEOScoreColor(seoScore)}`}>
              {seoScore}/100
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              {seoData.title && seoData.title.length >= 30 && seoData.title.length <= 60 ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">כותרת מותאמת</span>
            </div>
            <div className="flex items-center gap-2">
              {seoData.description && seoData.description.length >= 120 && seoData.description.length <= 160 ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">תיאור מותאם</span>
            </div>
            <div className="flex items-center gap-2">
              {seoData.keywords && seoData.keywords.split(',').length >= 3 ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">מילות מפתח</span>
            </div>
            <div className="flex items-center gap-2">
              {seoData.ogImage ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">תמונת שיתוף</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meta Tags */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">מטא תגים בסיסיים</CardTitle>
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
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>אורך: {seoData.title.length} תווים</span>
              <span className={seoData.title.length >= 30 && seoData.title.length <= 60 ? 'text-green-400' : 'text-yellow-400'}>
                מומלץ: 30-60 תווים
              </span>
            </div>
          </div>

          <div>
            <Label className="text-slate-300">תיאור הדף (Description)</Label>
            <Textarea
              value={seoData.description}
              onChange={(e) => handleUpdate('description', e.target.value)}
              placeholder="הכנס תיאור קצר לדף"
              className="bg-slate-700 border-slate-600 text-white h-20"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>אורך: {seoData.description.length} תווים</span>
              <span className={seoData.description.length >= 120 && seoData.description.length <= 160 ? 'text-green-400' : 'text-yellow-400'}>
                מומלץ: 120-160 תווים
              </span>
            </div>
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
              הפרד עם פסיקים • {seoData.keywords ? seoData.keywords.split(',').length : 0} מילות מפתח
            </p>
          </div>

          <div>
            <Label className="text-slate-300">תמונה לשיתוף (Open Graph)</Label>
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

      {/* Advanced SEO Features */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">הגדרות מתקדמות</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-slate-300">אפשר אינדוקס במנועי חיפוש</Label>
              <p className="text-xs text-slate-400">האם הדף יופיע בתוצאות חיפוש</p>
            </div>
            <Button
              variant={seoData.indexable ? "default" : "secondary"}
              size="sm"
              onClick={() => handleUpdate('indexable', !seoData.indexable)}
            >
              {seoData.indexable ? 'מופעל' : 'כבוי'}
            </Button>
          </div>
          
          <div className="p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
            <h4 className="text-blue-300 font-semibold mb-2">💡 טיפים לשיפור SEO</h4>
            <ul className="text-blue-200 text-sm space-y-1">
              <li>• השתמש במילות מפתח רלוונטיות בכותרת</li>
              <li>• כתב תיאור מושך שמעודד קליקים</li>
              <li>• הוסף תמונת שיתוף איכותית</li>
              <li>• ודא שהתוכן רלוונטי למילות המפתח</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
