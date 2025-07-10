
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Gauge, Zap, Image, FileText, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { TemplateData } from '@/types/template';

interface PerformanceOptimizerProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const PerformanceOptimizer = ({ template, onUpdate }: PerformanceOptimizerProps) => {
  const [performanceSettings, setPerformanceSettings] = useState({
    imageOptimization: template.advancedStyles?.performance?.imageOptimization ?? true,
    lazyLoading: template.advancedStyles?.performance?.lazyLoading ?? true,
    minification: template.advancedStyles?.performance?.minification ?? true,
    caching: template.advancedStyles?.performance?.caching ?? true,
    compression: template.advancedStyles?.performance?.compression ?? true,
    preloading: template.advancedStyles?.performance?.preloading ?? true
  });

  const calculatePerformanceScore = () => {
    const enabledFeatures = Object.values(performanceSettings).filter(Boolean).length;
    return Math.round((enabledFeatures / Object.keys(performanceSettings).length) * 100);
  };

  const handleUpdate = (field: string, value: boolean) => {
    const newSettings = { ...performanceSettings, [field]: value };
    setPerformanceSettings(newSettings);
    
    onUpdate({
      performance: newSettings
    });
  };

  const performanceScore = calculatePerformanceScore();

  const optimizationItems = [
    {
      key: 'imageOptimization',
      title: 'אופטימיזציה של תמונות',
      description: 'דחיסה אוטומטית ואופטימיזציה של תמונות',
      icon: Image,
      impact: 'גבוה'
    },
    {
      key: 'lazyLoading',
      title: 'Lazy Loading',
      description: 'טעינת תמונות ותוכן רק כשהמשתמש מגיע אליהם',
      icon: Zap,
      impact: 'גבוה'
    },
    {
      key: 'minification',
      title: 'דחיסת קבצים',
      description: 'הקטנת גודל קבצי CSS, JS ו-HTML',
      icon: FileText,
      impact: 'בינוני'
    },
    {
      key: 'caching',
      title: 'Cache אינטליגנטי',
      description: 'שמירת קבצים בזיכרון המקומי לטעינה מהירה יותר',
      icon: Shield,
      impact: 'גבוה'
    },
    {
      key: 'compression',
      title: 'דחיסת GZIP',
      description: 'דחיסת התוכן לפני העברה ללקוח',
      icon: Gauge,
      impact: 'בינוני'
    },
    {
      key: 'preloading',
      title: 'טעינה מוקדמת',
      description: 'טעינת משאבים חשובים מראש',
      icon: Zap,
      impact: 'בינוני'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Gauge className="w-5 h-5 text-orange-400" />
        <h3 className="text-white text-lg font-bold">אופטימיזציית ביצועים</h3>
      </div>

      {/* Performance Score */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            {performanceScore >= 80 ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
            )}
            ציון ביצועים
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">ציון כללי</span>
              <Badge variant={performanceScore >= 80 ? "default" : "secondary"}>
                {performanceScore}/100
              </Badge>
            </div>
            <Progress value={performanceScore} className="w-full" />
            <p className="text-xs text-slate-400">
              {performanceScore >= 90 ? 'מעולה! הדף שלך מותאם לביצועים גבוהים' :
               performanceScore >= 70 ? 'טוב, אבל יש מקום לשיפור' :
               'מומלץ להפעיל יותר אופטימיזציות'}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Optimization Settings */}
      <div className="grid gap-4">
        {optimizationItems.map((item) => {
          const Icon = item.icon;
          const isEnabled = performanceSettings[item.key as keyof typeof performanceSettings];
          
          return (
            <Card key={item.key} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isEnabled ? 'text-green-400' : 'text-slate-400'}`} />
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={item.impact === 'גבוה' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      השפעה {item.impact}
                    </Badge>
                    <Switch
                      checked={isEnabled}
                      onCheckedChange={(checked) => handleUpdate(item.key, checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Performance Tips */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-sm">טיפים לשיפור ביצועים</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-xs text-slate-400 space-y-1">
            <p>• השתמש בתמונות בפורמט WebP או AVIF לביצועים טובים יותר</p>
            <p>• הקטן את מספר הפונטים החיצוניים</p>
            <p>• שמור על מספר הבקשות למינימום</p>
            <p>• השתמש ב-CDN לתמונות וקבצים סטטיים</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
