
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Smartphone, Tablet, Monitor } from 'lucide-react';

interface ResponsiveEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const ResponsiveEditor = ({ onUpdate, currentData }: ResponsiveEditorProps) => {
  const [responsiveData, setResponsiveData] = useState({
    breakpoints: {
      mobile: currentData?.breakpoints?.mobile || 768,
      tablet: currentData?.breakpoints?.tablet || 1024,
      desktop: currentData?.breakpoints?.desktop || 1440,
    },
    hiddenOnMobile: currentData?.hiddenOnMobile || [],
    hiddenOnTablet: currentData?.hiddenOnTablet || [],
    mobileLayout: currentData?.mobileLayout || 'stack',
    tabletLayout: currentData?.tabletLayout || 'adaptive',
    ...currentData
  });

  useEffect(() => {
    onUpdate(responsiveData);
  }, [responsiveData, onUpdate]);

  const handleBreakpointChange = (device: string, value: number) => {
    setResponsiveData(prev => ({
      ...prev,
      breakpoints: {
        ...prev.breakpoints,
        [device]: value
      }
    }));
  };

  const handleLayoutChange = (device: string, layout: string) => {
    setResponsiveData(prev => ({
      ...prev,
      [`${device}Layout`]: layout
    }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            עיצוב רספונסיבי
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-white font-medium">נקודות שבירה (Breakpoints)</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mobile-breakpoint" className="text-white flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  מובייל
                </Label>
                <Input
                  id="mobile-breakpoint"
                  type="number"
                  value={responsiveData.breakpoints.mobile}
                  onChange={(e) => handleBreakpointChange('mobile', parseInt(e.target.value))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tablet-breakpoint" className="text-white flex items-center gap-2">
                  <Tablet className="w-4 h-4" />
                  טאבלט
                </Label>
                <Input
                  id="tablet-breakpoint"
                  type="number"
                  value={responsiveData.breakpoints.tablet}
                  onChange={(e) => handleBreakpointChange('tablet', parseInt(e.target.value))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="desktop-breakpoint" className="text-white flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  דסקטופ
                </Label>
                <Input
                  id="desktop-breakpoint"
                  type="number"
                  value={responsiveData.breakpoints.desktop}
                  onChange={(e) => handleBreakpointChange('desktop', parseInt(e.target.value))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium">פריסה במכשירים</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mobile-layout" className="text-white">פריסה במובייל</Label>
                <Select value={responsiveData.mobileLayout} onValueChange={(value) => handleLayoutChange('mobile', value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stack">ערימה</SelectItem>
                    <SelectItem value="grid">רשת</SelectItem>
                    <SelectItem value="carousel">קרוסלה</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tablet-layout" className="text-white">פריסה בטאבלט</Label>
                <Select value={responsiveData.tabletLayout} onValueChange={(value) => handleLayoutChange('tablet', value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adaptive">אדפטיבי</SelectItem>
                    <SelectItem value="desktop">כמו דסקטופ</SelectItem>
                    <SelectItem value="mobile">כמו מובייל</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
