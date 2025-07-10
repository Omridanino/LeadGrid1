
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Gauge, Zap, Image, FileText, Globe, CheckCircle, AlertTriangle } from 'lucide-react';
import { TemplateData } from '@/types/template';

interface PerformanceOptimizerProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
}

export const PerformanceOptimizer = ({ template, onUpdate }: PerformanceOptimizerProps) => {
  const [performanceSettings, setPerformanceSettings] = useState({
    imageOptimization: template.advancedStyles?.performance?.imageOptimization !== false,
    lazyLoading: template.advancedStyles?.performance?.lazyLoading !== false,
    minification: template.advancedStyles?.performance?.minification !== false,
    compression: template.advancedStyles?.performance?.compression !== false,
    caching: template.advancedStyles?.performance?.caching !== false,
    preloading: template.advancedStyles?.performance?.preloading !== false,
    webpConversion: template.advancedStyles?.performance?.webpConversion !== false,
    cssOptimization: template.advancedStyles?.performance?.cssOptimization !== false
  });

  // Performance Score calculation
  const calculatePerformanceScore = () => {
    const settings = Object.values(performanceSettings);
    const enabledCount = settings.filter(Boolean).length;
    return Math.round((enabledCount / settings.length) * 100);
  };

  const performanceScore = calculatePerformanceScore();

  const handleUpdate = (setting: string, value: boolean) => {
    const newSettings = { ...performanceSettings, [setting]: value };
    setPerformanceSettings(newSettings);
    
    onUpdate({
      performance: newSettings
    });
  };

  const getPerformanceScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceScoreBadge = (score: number) => {
    if (score >= 80) return { variant: 'default', text: 'מהיר' };
    if (score >= 60) return { variant: 'secondary', text: 'בינוני' };
    return { variant: 'destructive', text: 'איטי' };
  };

  const optimizations = [
    {
      key: 'imageOptimization',
      title: 'אופטימיזציה אוטומטית של תמונות',
      description: 'דחיסה וחיתוך אוטומטי של תמונות',
      icon: Image,
      impact: 'גבוה',
      savings: 'עד 70% הקטנת גודל'
    },
    {
      key: 'lazyLoading',
      title: 'טעינה עצלה (Lazy Loading)',
      description: 'טעינת תמונות ותוכן רק כשצריך',
      icon: Zap,
      impact: 'גבוה',
      savings: 'עד 50% מהירות טעינה'
    },
    {
      key: 'minification',
      title: 'דחיסת קוד',
      description: 'הקטנת קבצי CSS, JS ו-HTML',
      icon: FileText,
      impact: 'בינוני',
      savings: 'עד 30% הקטנת גודל'
    },
    {
      key: 'compression',
      title: 'דחיסת GZIP',
      description: 'דחיסה של כל התוכן שנשלח',
      icon: Globe,
      impact: 'גבוה',
      savings: 'עד 80% הקטנת נתונים'
    },
    {
      key: 'caching',
      title: 'מטמון חכם',
      description: 'שמירה זמנית של תוכן בדפדפן',
      icon: Gauge,
      impact: 'גבוה',
      savings: 'עד 90% מהירות חזרה'
    },
    {
      key: 'preloading',
      title: 'טעינה מוקדמת',
      description: 'טעינת משאבים חשובים מראש',
      icon: Zap,
      impact: 'בינוני',
      savings: 'עד 40% מהירות'
    },
    {
      key: 'webpConversion',
      title: 'המרה ל-WebP',
      description: 'המרת תמונות לפורמט מתקדם',
      icon: Image,
      impact: 'גבוה',
      savings: 'עד 60% הקטנת תמונות'
    },
    {
      key: 'cssOptimization',
      title: 'אופטימיזציה של CSS',
      description: 'הסרת CSS לא נחוץ',
      icon: FileText,
      impact: 'בינוני',
      savings: 'עד 40% הקטנת CSS'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Gauge className="w-5 h-5 text-orange-400" />
        <h3 className="text-white text-lg font-bold">אופטימיזציה לביצועים ומהירות</h3>
      </div>

      {/* Performance Score Card */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              ציון ביצועים כללי
            </span>
            <Badge className={getPerformanceScoreColor(performanceScore)}>
              {getPerformanceScoreBadge(performanceScore).text}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Progress value={performanceScore} className="flex-1" />
            <span className={`font-bold text-lg ${getPerformanceScoreColor(performanceScore)}`}>
              {performanceScore}/100
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              {performanceSettings.imageOptimization ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">אופטימיזציית תמונות</span>
            </div>
            <div className="flex items-center gap-2">
              {performanceSettings.compression ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">דחיסת תוכן</span>
            </div>
            <div className="flex items-center gap-2">
              {performanceSettings.caching ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">מטמון</span>
            </div>
            <div className="flex items-center gap-2">
              {performanceSettings.lazyLoading ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span className="text-slate-300">טעינה עצלה</span>
            </div>
          </div>

          <div className="p-4 bg-orange-900/20 border border-orange-700/30 rounded-lg">
            <h4 className="text-orange-300 font-semibold mb-2">📊 הערכת ביצועים</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-orange-200 font-bold">~2.5s</div>
                <div className="text-orange-300">זמן טעינה משוער</div>
              </div>
              <div className="text-center">
                <div className="text-orange-200 font-bold">~1.2MB</div>
                <div className="text-orange-300">גודל דף משוער</div>
              </div>
              <div className="text-center">
                <div className="text-orange-200 font-bold">~95</div>
                <div className="text-orange-300">ציון PageSpeed</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optimization Settings */}
      <div className="grid gap-4">
        {optimizations.map((optimization) => {
          const IconComponent = optimization.icon;
          const isEnabled = performanceSettings[optimization.key as keyof typeof performanceSettings];
          
          return (
            <Card key={optimization.key} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <IconComponent className="w-5 h-5 text-orange-400" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium">{optimization.title}</h4>
                        <Badge 
                          variant={optimization.impact === 'גבוה' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          השפעה {optimization.impact}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-1">{optimization.description}</p>
                      <p className="text-green-400 text-xs">{optimization.savings}</p>
                    </div>
                  </div>
                  <Switch
                    checked={isEnabled}
                    onCheckedChange={(checked) => handleUpdate(optimization.key, checked)}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Performance Tips */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">🚀 טיפים לשיפור ביצועים</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <h5 className="text-orange-300 font-semibold">אופטימיזציה בסיסית</h5>
              <ul className="text-slate-300 space-y-1">
                <li>• השתמש בתמונות מדחוסות</li>
                <li>• הפעל את כל האופטימיזציות</li>
                <li>• בדוק ביצועים באופן קבוע</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-orange-300 font-semibold">אופטימיזציה מתקדמת</h5>
              <ul className="text-slate-300 space-y-1">
                <li>• השתמש ב-CDN לתמונות</li>
                <li>• מזער את מספר הבקשות</li>
                <li>• אופטמז עבור מובייל</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
