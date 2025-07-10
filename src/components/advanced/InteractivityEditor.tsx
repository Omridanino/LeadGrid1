
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Zap, MousePointer, Eye, Volume2 } from 'lucide-react';

interface InteractivityEditorProps {
  onUpdate: (updates: any) => void;
  currentSettings: any;
}

export const InteractivityEditor = ({ onUpdate, currentSettings }: InteractivityEditorProps) => {
  const [settings, setSettings] = useState(currentSettings?.interactivity || {
    hoverEffects: true,
    smoothScrolling: true,
    clickAnimations: true,
    parallaxEffect: false,
    mouseFollower: false,
    loadingAnimations: true,
    autoplay: false,
    backgroundMusic: false
  });

  const updateSetting = (key: string, value: any) => {
    const updatedSettings = { ...settings, [key]: value };
    setSettings(updatedSettings);
    onUpdate({ interactivity: updatedSettings });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-purple-500" />
            אינטראקטיביות ואנימציות
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Hover Effects */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">אפקטי Hover</Label>
              <p className="text-gray-400 text-sm">אפקטים כשמעבירים עכבר על אלמנטים</p>
            </div>
            <Switch
              checked={settings.hoverEffects}
              onCheckedChange={(checked) => updateSetting('hoverEffects', checked)}
            />
          </div>

          {/* Smooth Scrolling */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">גלילה חלקה</Label>
              <p className="text-gray-400 text-sm">גלילה חלקה בין סקשנים</p>
            </div>
            <Switch
              checked={settings.smoothScrolling}
              onCheckedChange={(checked) => updateSetting('smoothScrolling', checked)}
            />
          </div>

          {/* Click Animations */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">אנימציות לחיצה</Label>
              <p className="text-gray-400 text-sm">אנימציות כשלוחצים על כפתורים</p>
            </div>
            <Switch
              checked={settings.clickAnimations}
              onCheckedChange={(checked) => updateSetting('clickAnimations', checked)}
            />
          </div>

          {/* Parallax Effect */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">אפקט פרלקס</Label>
              <p className="text-gray-400 text-sm">רקע נע לפי הגלילה</p>
            </div>
            <Switch
              checked={settings.parallaxEffect}
              onCheckedChange={(checked) => updateSetting('parallaxEffect', checked)}
            />
          </div>

          {/* Mouse Follower */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">עוקב עכבר</Label>
              <p className="text-gray-400 text-sm">אלמנט שעוקב אחרי העכבר</p>
            </div>
            <Switch
              checked={settings.mouseFollower}
              onCheckedChange={(checked) => updateSetting('mouseFollower', checked)}
            />
          </div>

          {/* Loading Animations */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">אנימציות טעינה</Label>
              <p className="text-gray-400 text-sm">אנימציות כשאלמנטים נכנסים לתצוגה</p>
            </div>
            <Switch
              checked={settings.loadingAnimations}
              onCheckedChange={(checked) => updateSetting('loadingAnimations', checked)}
            />
          </div>

          {/* Animation Speed */}
          <div>
            <Label className="text-white font-medium">מהירות אנימציות</Label>
            <Select 
              value={settings.animationSpeed || 'normal'} 
              onValueChange={(value) => updateSetting('animationSpeed', value)}
            >
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                <SelectItem value="slow" className="text-white">איטי</SelectItem>
                <SelectItem value="normal" className="text-white">רגיל</SelectItem>
                <SelectItem value="fast" className="text-white">מהיר</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Custom CSS */}
          <div>
            <Label className="text-white font-medium">CSS מותאם אישית</Label>
            <textarea
              value={settings.customCSS || ''}
              onChange={(e) => updateSetting('customCSS', e.target.value)}
              className="w-full mt-2 p-3 bg-gray-700 border-gray-600 text-white rounded font-mono text-sm"
              rows={4}
              placeholder="/* הוסף CSS מותאם אישית כאן */"
            />
          </div>

          {/* Custom JavaScript */}
          <div>
            <Label className="text-white font-medium">JavaScript מותאם אישית</Label>
            <textarea
              value={settings.customJS || ''}
              onChange={(e) => updateSetting('customJS', e.target.value)}
              className="w-full mt-2 p-3 bg-gray-700 border-gray-600 text-white rounded font-mono text-sm"
              rows={4}
              placeholder="// הוסף JavaScript מותאם אישית כאן"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
