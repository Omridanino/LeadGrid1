
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { BarChart3, Facebook, Chrome, Linkedin, Zap } from 'lucide-react';
import { TemplateData } from '@/types/template';

interface AnalyticsEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const AnalyticsEditor = ({ template, onUpdate }: AnalyticsEditorProps) => {
  const [analytics, setAnalytics] = useState({
    facebookPixel: template.advancedStyles?.integrations?.facebookPixel || '',
    googleAnalytics: template.advancedStyles?.integrations?.googleAnalytics || '',
    tiktokPixel: template.advancedStyles?.integrations?.tiktokPixel || '',
    linkedinInsight: template.advancedStyles?.integrations?.linkedinInsight || '',
    gtm: template.advancedStyles?.integrations?.gtm || '',
    zapierWebhook: template.advancedStyles?.integrations?.zapierWebhook || '',
    customHeadScripts: template.advancedStyles?.integrations?.customHeadScripts || ''
  });

  const handleUpdate = (field: string, value: string) => {
    const newAnalytics = { ...analytics, [field]: value };
    setAnalytics(newAnalytics);
    
    onUpdate({
      advancedStyles: {
        ...template.advancedStyles,
        integrations: newAnalytics
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-5 h-5 text-purple-400" />
        <h3 className="text-white text-lg font-bold">פיקסלים ואנליטיקס</h3>
      </div>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Facebook className="w-4 h-4" />
            Facebook Pixel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">Facebook Pixel ID</Label>
            <Input
              value={analytics.facebookPixel}
              onChange={(e) => handleUpdate('facebookPixel', e.target.value)}
              placeholder="123456789012345"
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">מזהה הפיקסל של פייסבוק לטראקינג</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Chrome className="w-4 h-4" />
            Google Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">Google Analytics ID</Label>
            <Input
              value={analytics.googleAnalytics}
              onChange={(e) => handleUpdate('googleAnalytics', e.target.value)}
              placeholder="G-XXXXXXXXXX או UA-XXXXXXXXX"
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">מזהה Google Analytics למעקב אחר ביקורים</p>
          </div>

          <div>
            <Label className="text-slate-300">Google Tag Manager ID</Label>
            <Input
              value={analytics.gtm}
              onChange={(e) => handleUpdate('gtm', e.target.value)}
              placeholder="GTM-XXXXXXX"
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">מזהה Google Tag Manager</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            רשתות חברתיות נוספות
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">TikTok Pixel ID</Label>
            <Input
              value={analytics.tiktokPixel}
              onChange={(e) => handleUpdate('tiktokPixel', e.target.value)}
              placeholder="C4XXXXXXXXXXXXXXXXXXXXXXX"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label className="text-slate-300">LinkedIn Insight Tag</Label>
            <Input
              value={analytics.linkedinInsight}
              onChange={(e) => handleUpdate('linkedinInsight', e.target.value)}
              placeholder="12345"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-4 h-4" />
            אינטגרציות נוספות
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">Zapier Webhook URL</Label>
            <Input
              value={analytics.zapierWebhook}
              onChange={(e) => handleUpdate('zapierWebhook', e.target.value)}
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              className="bg-slate-700 border-slate-600 text-white"
            />
            <p className="text-xs text-slate-400 mt-1">URL לחיבור עם Zapier</p>
          </div>

          <div>
            <Label className="text-slate-300">סקריפטים מותאמים אישית</Label>
            <Textarea
              value={analytics.customHeadScripts}
              onChange={(e) => handleUpdate('customHeadScripts', e.target.value)}
              placeholder="<script>...</script>"
              className="bg-slate-700 border-slate-600 text-white h-24"
            />
            <p className="text-xs text-slate-400 mt-1">סקריפטים שיתווספו ל-head של הדף</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
