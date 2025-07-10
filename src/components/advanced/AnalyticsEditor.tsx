
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BarChart3, Facebook, Chrome, Linkedin, Music } from 'lucide-react';

interface AnalyticsEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const AnalyticsEditor = ({ onUpdate, currentData }: AnalyticsEditorProps) => {
  const [analyticsData, setAnalyticsData] = useState({
    facebookPixel: currentData?.facebookPixel || '',
    googleAnalytics: currentData?.googleAnalytics || '',
    tiktokPixel: currentData?.tiktokPixel || '',
    linkedinInsight: currentData?.linkedinInsight || '',
    gtm: currentData?.gtm || '',
    customHeadScripts: currentData?.customHeadScripts || '',
    ...currentData
  });

  useEffect(() => {
    onUpdate(analyticsData);
  }, [analyticsData, onUpdate]);

  const handleInputChange = (field: string, value: string) => {
    setAnalyticsData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            אנליטיקס ופיקסלים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="facebook-pixel" className="text-white flex items-center gap-2">
              <Facebook className="w-4 h-4" />
              Facebook Pixel ID
            </Label>
            <Input
              id="facebook-pixel"
              value={analyticsData.facebookPixel}
              onChange={(e) => handleInputChange('facebookPixel', e.target.value)}
              placeholder="123456789012345"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="google-analytics" className="text-white flex items-center gap-2">
              <Chrome className="w-4 h-4" />
              Google Analytics ID
            </Label>
            <Input
              id="google-analytics"
              value={analyticsData.googleAnalytics}
              onChange={(e) => handleInputChange('googleAnalytics', e.target.value)}
              placeholder="G-XXXXXXXXXX או UA-XXXXXXXXX"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tiktok-pixel" className="text-white flex items-center gap-2">
              <Music className="w-4 h-4" />
              TikTok Pixel ID
            </Label>
            <Input
              id="tiktok-pixel"
              value={analyticsData.tiktokPixel}
              onChange={(e) => handleInputChange('tiktokPixel', e.target.value)}
              placeholder="C4XXXXXXXXXXXXXXXXXXXXXXXXXX"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin-insight" className="text-white flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn Insight Tag
            </Label>
            <Input
              id="linkedin-insight"
              value={analyticsData.linkedinInsight}
              onChange={(e) => handleInputChange('linkedinInsight', e.target.value)}
              placeholder="1234567"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gtm" className="text-white flex items-center gap-2">
              <Chrome className="w-4 h-4" />
              Google Tag Manager ID
            </Label>
            <Input
              id="gtm"
              value={analyticsData.gtm}
              onChange={(e) => handleInputChange('gtm', e.target.value)}
              placeholder="GTM-XXXXXXX"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-scripts" className="text-white">קוד מותאם אישית (Head)</Label>
            <Textarea
              id="custom-scripts"
              value={analyticsData.customHeadScripts}
              onChange={(e) => handleInputChange('customHeadScripts', e.target.value)}
              placeholder="<script>...</script>"
              className="bg-gray-700 border-gray-600 text-white"
              rows={5}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
