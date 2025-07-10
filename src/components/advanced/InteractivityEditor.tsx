
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { MousePointer } from 'lucide-react';

interface InteractivityEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const InteractivityEditor = ({ onUpdate, currentData }: InteractivityEditorProps) => {
  const [settings, setSettings] = useState({
    hoverEffects: currentData?.hoverEffects || true,
    parallaxScrolling: currentData?.parallaxScrolling || false,
    smoothScrolling: currentData?.smoothScrolling || true,
    animationSpeed: currentData?.animationSpeed || 300,
    mouseFollower: currentData?.mouseFollower || false,
    clickAnimations: currentData?.clickAnimations || true
  });

  const updateSetting = (key: string, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onUpdate(newSettings);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-pink-500" />
            הגדרות אינטראקטיביות
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">אפקטי Hover</Label>
              <p className="text-gray-400 text-sm">אפקטים כשמרחפים מעל אלמנטים</p>
            </div>
            <Switch
              checked={settings.hoverEffects}
              onCheckedChange={(checked) => updateSetting('hoverEffects', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">גלילה חלקה</Label>
              <p className="text-gray-400 text-sm">גלילה רכה בין קטעים</p>
            </div>
            <Switch
              checked={settings.smoothScrolling}
              onCheckedChange={(checked) => updateSetting('smoothScrolling', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">אפקט פרלקס</Label>
              <p className="text-gray-400 text-sm">תנועת רקע תלויית גלילה</p>
            </div>
            <Switch
              checked={settings.parallaxScrolling}
              onCheckedChange={(checked) => updateSetting('parallaxScrolling', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">עוקב עכבר</Label>
              <p className="text-gray-400 text-sm">אלמנט שעוקב אחרי העכבר</p>
            </div>
            <Switch
              checked={settings.mouseFollower}
              onCheckedChange={(checked) => updateSetting('mouseFollower', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">אנימציות לחיצה</Label>
              <p className="text-gray-400 text-sm">אפקטים בלחיצה על כפתורים</p>
            </div>
            <Switch
              checked={settings.clickAnimations}
              onCheckedChange={(checked) => updateSetting('clickAnimations', checked)}
            />
          </div>

          <div>
            <Label className="text-white">מהירות אנימציה</Label>
            <div className="mt-2">
              <Slider
                value={[settings.animationSpeed]}
                onValueChange={(value) => updateSetting('animationSpeed', value[0])}
                max={1000}
                min={100}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>מהיר (100ms)</span>
                <span className="font-medium">{settings.animationSpeed}ms</span>
                <span>איטי (1000ms)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
