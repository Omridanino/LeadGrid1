
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Palette, 
  Type, 
  Layout, 
  Image, 
  Code, 
  Smartphone, 
  Tablet, 
  Monitor,
  Globe,
  Search,
  BarChart3,
  Zap,
  Settings
} from 'lucide-react';

interface AdvancedStyleEditorProps {
  onStyleChange: (styles: any) => void;
  currentStyles: any;
}

export const AdvancedStyleEditor = ({ onStyleChange, currentStyles }: AdvancedStyleEditorProps) => {
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [selectedElement, setSelectedElement] = useState('body');

  const handleStyleUpdate = (category: string, property: string, value: any) => {
    const updatedStyles = {
      ...currentStyles,
      [activeDevice]: {
        ...currentStyles[activeDevice],
        [category]: {
          ...currentStyles[activeDevice]?.[category],
          [property]: value
        }
      }
    };
    onStyleChange(updatedStyles);
  };

  const fontFamilies = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins',
    'Playfair Display', 'Merriweather', 'Source Sans Pro', 'Raleway',
    'Oswald', 'Dancing Script', 'Lobster', 'Pacifico', 'Righteous',
    'Heebo', 'Assistant', 'Rubik', 'Varela Round', 'Alef'
  ];

  const gradientPresets = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
  ];

  return (
    <div className="space-y-6">
      {/* Device Selection */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Layout className="w-5 h-5" />
            רספונסיביות - בחר מכשיר
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {[
              { id: 'mobile', icon: Smartphone, label: 'מובייל' },
              { id: 'tablet', icon: Tablet, label: 'טאבלט' },
              { id: 'desktop', icon: Monitor, label: 'דסקטופ' }
            ].map((device) => {
              const Icon = device.icon;
              return (
                <Button
                  key={device.id}
                  variant={activeDevice === device.id ? 'default' : 'outline'}
                  onClick={() => setActiveDevice(device.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {device.label}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-gray-800">
          <TabsTrigger value="colors" className="text-white">
            <Palette className="w-4 h-4 mr-1" />
            צבעים
          </TabsTrigger>
          <TabsTrigger value="typography" className="text-white">
            <Type className="w-4 h-4 mr-1" />
            טיפוגרפיה
          </TabsTrigger>
          <TabsTrigger value="layout" className="text-white">
            <Layout className="w-4 h-4 mr-1" />
            פריסה
          </TabsTrigger>
          <TabsTrigger value="effects" className="text-white">
            <Zap className="w-4 h-4 mr-1" />
            אפקטים
          </TabsTrigger>
          <TabsTrigger value="seo" className="text-white">
            <Search className="w-4 h-4 mr-1" />
            SEO
          </TabsTrigger>
          <TabsTrigger value="integrations" className="text-white">
            <BarChart3 className="w-4 h-4 mr-1" />
            אינטגרציות
          </TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">ניהול צבעים מתקדם</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">צבע ראשי</Label>
                  <Input
                    type="color"
                    value={currentStyles[activeDevice]?.colors?.primary || '#3b82f6'}
                    onChange={(e) => handleStyleUpdate('colors', 'primary', e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <Label className="text-white">צבע משני</Label>
                  <Input
                    type="color"
                    value={currentStyles[activeDevice]?.colors?.secondary || '#8b5cf6'}
                    onChange={(e) => handleStyleUpdate('colors', 'secondary', e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <Label className="text-white">צבע רקע</Label>
                  <Input
                    type="color"
                    value={currentStyles[activeDevice]?.colors?.background || '#ffffff'}
                    onChange={(e) => handleStyleUpdate('colors', 'background', e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <Label className="text-white">צבע טקסט</Label>
                  <Input
                    type="color"
                    value={currentStyles[activeDevice]?.colors?.text || '#000000'}
                    onChange={(e) => handleStyleUpdate('colors', 'text', e.target.value)}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <Label className="text-white mb-2 block">גרדיאנטים מוכנים</Label>
                <div className="grid grid-cols-4 gap-2">
                  {gradientPresets.map((gradient, index) => (
                    <div
                      key={index}
                      className="w-full h-12 rounded-md cursor-pointer border-2 border-gray-600 hover:border-white transition-colors"
                      style={{ background: gradient }}
                      onClick={() => handleStyleUpdate('colors', 'gradient', gradient)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">טיפוגרפיה מתקדמת</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">בחר פונט</Label>
                <Select
                  value={currentStyles[activeDevice]?.typography?.fontFamily || 'Inter'}
                  onValueChange={(value) => handleStyleUpdate('typography', 'fontFamily', value)}
                >
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {fontFamilies.map((font) => (
                      <SelectItem key={font} value={font} className="text-white">
                        <span style={{ fontFamily: font }}>{font}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-white">גודל טקסט בסיסי</Label>
                <Slider
                  value={[currentStyles[activeDevice]?.typography?.baseFontSize || 16]}
                  onValueChange={(value) => handleStyleUpdate('typography', 'baseFontSize', value[0])}
                  max={24}
                  min={12}
                  step={1}
                  className="mt-2"
                />
                <span className="text-gray-400 text-sm">
                  {currentStyles[activeDevice]?.typography?.baseFontSize || 16}px
                </span>
              </div>

              <div>
                <Label className="text-white">גובה שורה</Label>
                <Slider
                  value={[currentStyles[activeDevice]?.typography?.lineHeight || 1.5]}
                  onValueChange={(value) => handleStyleUpdate('typography', 'lineHeight', value[0])}
                  max={3}
                  min={1}
                  step={0.1}
                  className="mt-2"
                />
                <span className="text-gray-400 text-sm">
                  {currentStyles[activeDevice]?.typography?.lineHeight || 1.5}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-white">RTL (עברית)</Label>
                <Switch
                  checked={currentStyles[activeDevice]?.typography?.rtl || false}
                  onCheckedChange={(checked) => handleStyleUpdate('typography', 'rtl', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Layout Tab */}
        <TabsContent value="layout" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">פריסה ומרווחים</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">רוחב מקסימלי של תוכן</Label>
                <Slider
                  value={[currentStyles[activeDevice]?.layout?.maxWidth || 1200]}
                  onValueChange={(value) => handleStyleUpdate('layout', 'maxWidth', value[0])}
                  max={1600}
                  min={800}
                  step={50}
                  className="mt-2"
                />
                <span className="text-gray-400 text-sm">
                  {currentStyles[activeDevice]?.layout?.maxWidth || 1200}px
                </span>
              </div>

              <div>
                <Label className="text-white">מרווח פנימי</Label>
                <Slider
                  value={[currentStyles[activeDevice]?.layout?.padding || 20]}
                  onValueChange={(value) => handleStyleUpdate('layout', 'padding', value[0])}
                  max={100}
                  min={0}
                  step={5}
                  className="mt-2"
                />
                <span className="text-gray-400 text-sm">
                  {currentStyles[activeDevice]?.layout?.padding || 20}px
                </span>
              </div>

              <div>
                <Label className="text-white">מרווח חיצוני</Label>
                <Slider
                  value={[currentStyles[activeDevice]?.layout?.margin || 10]}
                  onValueChange={(value) => handleStyleUpdate('layout', 'margin', value[0])}
                  max={50}
                  min={0}
                  step={5}
                  className="mt-2"
                />
                <span className="text-gray-400 text-sm">
                  {currentStyles[activeDevice]?.layout?.margin || 10}px
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Effects Tab */}
        <TabsContent value="effects" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">אפקטים ואנימציות</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">רדיוס פינות</Label>
                <Slider
                  value={[currentStyles[activeDevice]?.effects?.borderRadius || 8]}
                  onValueChange={(value) => handleStyleUpdate('effects', 'borderRadius', value[0])}
                  max={50}
                  min={0}
                  step={2}
                  className="mt-2"
                />
                <span className="text-gray-400 text-sm">
                  {currentStyles[activeDevice]?.effects?.borderRadius || 8}px
                </span>
              </div>

              <div>
                <Label className="text-white">צל (Shadow)</Label>
                <Slider
                  value={[currentStyles[activeDevice]?.effects?.shadowIntensity || 20]}
                  onValueChange={(value) => handleStyleUpdate('effects', 'shadowIntensity', value[0])}
                  max={100}
                  min={0}
                  step={5}
                  className="mt-2"
                />
                <span className="text-gray-400 text-sm">
                  {currentStyles[activeDevice]?.effects?.shadowIntensity || 20}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-white">אנימציות</Label>
                <Switch
                  checked={currentStyles[activeDevice]?.effects?.animations || true}
                  onCheckedChange={(checked) => handleStyleUpdate('effects', 'animations', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-white">אפקט Parallax</Label>
                <Switch
                  checked={currentStyles[activeDevice]?.effects?.parallax || false}
                  onCheckedChange={(checked) => handleStyleUpdate('effects', 'parallax', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO Tab */}
        <TabsContent value="seo" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">SEO אוטומטי</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">כותרת עמוד (Title)</Label>
                <Input
                  value={currentStyles.seo?.title || ''}
                  onChange={(e) => handleStyleUpdate('seo', 'title', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="כותרת SEO לעמוד"
                />
              </div>

              <div>
                <Label className="text-white">תיאור מטא (Meta Description)</Label>
                <Textarea
                  value={currentStyles.seo?.description || ''}
                  onChange={(e) => handleStyleUpdate('seo', 'description', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="תיאור קצר לעמוד (עד 160 תווים)"
                  rows={3}
                />
              </div>

              <div>
                <Label className="text-white">מילות מפתח</Label>
                <Input
                  value={currentStyles.seo?.keywords || ''}
                  onChange={(e) => handleStyleUpdate('seo', 'keywords', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="מילות מפתח מופרדות בפסיקים"
                />
              </div>

              <div>
                <Label className="text-white">תמונת שיתוף (OG Image URL)</Label>
                <Input
                  value={currentStyles.seo?.ogImage || ''}
                  onChange={(e) => handleStyleUpdate('seo', 'ogImage', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-white">אינדקס בגוגל</Label>
                <Switch
                  checked={currentStyles.seo?.indexable !== false}
                  onCheckedChange={(checked) => handleStyleUpdate('seo', 'indexable', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">אינטגרציות ופיקסלים</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">Facebook Pixel ID</Label>
                <Input
                  value={currentStyles.integrations?.facebookPixel || ''}
                  onChange={(e) => handleStyleUpdate('integrations', 'facebookPixel', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="123456789012345"
                />
              </div>

              <div>
                <Label className="text-white">Google Analytics ID</Label>
                <Input
                  value={currentStyles.integrations?.googleAnalytics || ''}
                  onChange={(e) => handleStyleUpdate('integrations', 'googleAnalytics', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="G-XXXXXXXXXX"
                />
              </div>

              <div>
                <Label className="text-white">TikTok Pixel ID</Label>
                <Input
                  value={currentStyles.integrations?.tiktokPixel || ''}
                  onChange={(e) => handleStyleUpdate('integrations', 'tiktokPixel', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="XXXXXXXXXXXXXXXXX"
                />
              </div>

              <div>
                <Label className="text-white">LinkedIn Insight Tag</Label>
                <Input
                  value={currentStyles.integrations?.linkedinInsight || ''}
                  onChange={(e) => handleStyleUpdate('integrations', 'linkedinInsight', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="12345"
                />
              </div>

              <div>
                <Label className="text-white">Google Tag Manager ID</Label>
                <Input
                  value={currentStyles.integrations?.gtm || ''}
                  onChange={(e) => handleStyleUpdate('integrations', 'gtm', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="GTM-XXXXXXX"
                />
              </div>

              <div>
                <Label className="text-white">Zapier Webhook URL</Label>
                <Input
                  value={currentStyles.integrations?.zapierWebhook || ''}
                  onChange={(e) => handleStyleUpdate('integrations', 'zapierWebhook', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                />
              </div>

              <div>
                <Label className="text-white">Custom Scripts (Head)</Label>
                <Textarea
                  value={currentStyles.integrations?.customHeadScripts || ''}
                  onChange={(e) => handleStyleUpdate('integrations', 'customHeadScripts', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="<script>קוד מותאם אישית</script>"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
