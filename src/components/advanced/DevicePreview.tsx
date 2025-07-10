
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import { TemplateData } from '@/types/template';
import { TemplatePreview } from '../template-editor/TemplatePreview';

interface DevicePreviewProps {
  template: TemplateData;
}

export const DevicePreview = ({ template }: DevicePreviewProps) => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getDeviceStyles = () => {
    switch (activeDevice) {
      case 'mobile':
        return { width: '375px', height: '667px' };
      case 'tablet':
        return { width: '768px', height: '1024px' };
      default:
        return { width: '100%', height: '800px' };
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-500" />
            תצוגה מקדימה - מכשירים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Device Selector */}
          <div className="flex gap-2">
            <Button
              onClick={() => setActiveDevice('desktop')}
              className={`flex items-center gap-2 ${
                activeDevice === 'desktop' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              <Monitor className="w-4 h-4" />
              דסקטופ
            </Button>
            <Button
              onClick={() => setActiveDevice('tablet')}
              className={`flex items-center gap-2 ${
                activeDevice === 'tablet' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              <Tablet className="w-4 h-4" />
              טאבלט
            </Button>
            <Button
              onClick={() => setActiveDevice('mobile')}
              className={`flex items-center gap-2 ${
                activeDevice === 'mobile' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              מובייל
            </Button>
          </div>

          {/* Device Frame */}
          <div className="bg-gray-900 p-4 rounded-lg overflow-auto">
            <div className="mx-auto transition-all duration-300" style={getDeviceStyles()}>
              <div className="w-full h-full bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="h-full overflow-y-auto">
                  <TemplatePreview template={template} />
                </div>
              </div>
            </div>
          </div>

          {/* Device Info */}
          <div className="text-center text-gray-400 text-sm">
            {activeDevice === 'mobile' && 'iPhone SE (375×667px)'}
            {activeDevice === 'tablet' && 'iPad (768×1024px)'}
            {activeDevice === 'desktop' && 'דסקטופ (רספונסיבי)'}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
