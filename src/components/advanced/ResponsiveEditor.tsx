
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import { TemplateData } from '@/types/template';

interface ResponsiveEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const ResponsiveEditor = ({ template, onUpdate }: ResponsiveEditorProps) => {
  const [responsiveSettings, setResponsiveSettings] = useState({
    desktop: {
      fontSize: template.advancedStyles?.desktop?.fontSize || 16,
      spacing: template.advancedStyles?.desktop?.spacing || 24,
      containerWidth: template.advancedStyles?.desktop?.containerWidth || 1200
    },
    tablet: {
      fontSize: template.advancedStyles?.tablet?.fontSize || 14,
      spacing: template.advancedStyles?.tablet?.spacing || 20,
      containerWidth: template.advancedStyles?.tablet?.containerWidth || 768
    },
    mobile: {
      fontSize: template.advancedStyles?.mobile?.fontSize || 12,
      spacing: template.advancedStyles?.mobile?.spacing || 16,
      containerWidth: template.advancedStyles?.mobile?.containerWidth || 375
    }
  });

  const handleUpdate = (device: string, field: string, value: number) => {
    const newSettings = {
      ...responsiveSettings,
      [device]: {
        ...responsiveSettings[device as keyof typeof responsiveSettings],
        [field]: value
      }
    };
    setResponsiveSettings(newSettings);
    
    onUpdate({
      advancedStyles: {
        ...template.advancedStyles,
        ...newSettings
      }
    });
  };

  const DeviceSettings = ({ device, icon: Icon, settings }: any) => (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Icon className="w-4 h-4" />
          {device === 'desktop' ? 'דסקטופ' : device === 'tablet' ? 'טאבלט' : 'מובייל'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-slate-300">גודל גופן בסיסי</Label>
          <div className="mt-2">
            <Slider
              value={[settings.fontSize]}
              onValueChange={(value) => handleUpdate(device, 'fontSize', value[0])}
              max={24}
              min={10}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>10px</span>
              <span className="font-medium">{settings.fontSize}px</span>
              <span>24px</span>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-slate-300">מרווחים בין אלמנטים</Label>
          <div className="mt-2">
            <Slider
              value={[settings.spacing]}
              onValueChange={(value) => handleUpdate(device, 'spacing', value[0])}
              max={48}
              min={8}
              step={2}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>8px</span>
              <span className="font-medium">{settings.spacing}px</span>
              <span>48px</span>
            </div>
          </div>
        </div>

        <div>
          <Label className="text-slate-300">רוחב מקסימלי של תוכן</Label>
          <div className="mt-2">
            <Slider
              value={[settings.containerWidth]}
              onValueChange={(value) => handleUpdate(device, 'containerWidth', value[0])}
              max={device === 'desktop' ? 1400 : device === 'tablet' ? 1024 : 500}
              min={device === 'desktop' ? 800 : device === 'tablet' ? 600 : 320}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>{device === 'desktop' ? '800px' : device === 'tablet' ? '600px' : '320px'}</span>
              <span className="font-medium">{settings.containerWidth}px</span>
              <span>{device === 'desktop' ? '1400px' : device === 'tablet' ? '1024px' : '500px'}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Smartphone className="w-5 h-5 text-green-400" />
        <h3 className="text-white text-lg font-bold">עיצוב רספונסיבי</h3>
      </div>

      <Tabs defaultValue="desktop" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800">
          <TabsTrigger value="desktop" className="text-white data-[state=active]:bg-blue-600">
            <Monitor className="w-4 h-4 mr-1" />
            דסקטופ
          </TabsTrigger>
          <TabsTrigger value="tablet" className="text-white data-[state=active]:bg-blue-600">
            <Tablet className="w-4 h-4 mr-1" />
            טאבלט
          </TabsTrigger>
          <TabsTrigger value="mobile" className="text-white data-[state=active]:bg-blue-600">
            <Smartphone className="w-4 h-4 mr-1" />
            מובייל
          </TabsTrigger>
        </TabsList>

        <TabsContent value="desktop">
          <DeviceSettings 
            device="desktop" 
            icon={Monitor} 
            settings={responsiveSettings.desktop}
          />
        </TabsContent>

        <TabsContent value="tablet">
          <DeviceSettings 
            device="tablet" 
            icon={Tablet} 
            settings={responsiveSettings.tablet}
          />
        </TabsContent>

        <TabsContent value="mobile">
          <DeviceSettings 
            device="mobile" 
            icon={Smartphone} 
            settings={responsiveSettings.mobile}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
