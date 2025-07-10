
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MousePointer, Sparkles, Eye, Zap } from 'lucide-react';

interface InteractivityEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const InteractivityEditor = ({ onUpdate, currentData }: InteractivityEditorProps) => {
  const [interactivityData, setInteractivityData] = useState({
    animations: currentData?.animations || false,
    hoverEffects: currentData?.hoverEffects || false,
    parallaxScrolling: currentData?.parallaxScrolling || false,
    smoothScrolling: currentData?.smoothScrolling || false,
    customCursor: currentData?.customCursor || false,
    particleEffects: currentData?.particleEffects || false,
    ...currentData
  });

  useEffect(() => {
    onUpdate(interactivityData);
  }, [interactivityData, onUpdate]);

  const handleInputChange = (field: string, value: boolean) => {
    setInteractivityData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <MousePointer className="w-5 h-5" />
            אינטראקטיביות
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="animations" className="text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                אנימציות
              </Label>
              <p className="text-sm text-gray-400">הפעל אנימציות כניסה ויציאה</p>
            </div>
            <Switch
              id="animations"
              checked={interactivityData.animations}
              onCheckedChange={(checked) => handleInputChange('animations', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="hover-effects" className="text-white flex items-center gap-2">
                <Eye className="w-4 h-4" />
                אפקטי Hover
              </Label>
              <p className="text-sm text-gray-400">אפקטים בעת העברת עכבר</p>
            </div>
            <Switch
              id="hover-effects"
              checked={interactivityData.hoverEffects}
              onCheckedChange={(checked) => handleInputChange('hoverEffects', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="parallax-scrolling" className="text-white flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Parallax Scrolling
              </Label>
              <p className="text-sm text-gray-400">אפקט תלת-מימד בגלילה</p>
            </div>
            <Switch
              id="parallax-scrolling"
              checked={interactivityData.parallaxScrolling}
              onCheckedChange={(checked) => handleInputChange('parallaxScrolling', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="smooth-scrolling" className="text-white">גלילה חלקה</Label>
              <p className="text-sm text-gray-400">גלילה חלקה במעבר בין קטעים</p>
            </div>
            <Switch
              id="smooth-scrolling"
              checked={interactivityData.smoothScrolling}
              onCheckedChange={(checked) => handleInputChange('smoothScrolling', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="custom-cursor" className="text-white">עכבר מותאם אישית</Label>
              <p className="text-sm text-gray-400">עכבר עם עיצוב מיוחד</p>
            </div>
            <Switch
              id="custom-cursor"
              checked={interactivityData.customCursor}
              onCheckedChange={(checked) => handleInputChange('customCursor', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="particle-effects" className="text-white">אפקטי חלקיקים</Label>
              <p className="text-sm text-gray-400">חלקיקים נעים ברקע</p>
            </div>
            <Switch
              id="particle-effects"
              checked={interactivityData.particleEffects}
              onCheckedChange={(checked) => handleInputChange('particleEffects', checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
