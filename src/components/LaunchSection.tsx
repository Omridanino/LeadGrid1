
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Zap, 
  Clock, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Globe,
  Shield,
  Server,
  Lock
} from 'lucide-react';
import { NewPublishingWizard } from './publishing/NewPublishingWizard';
import { TemplateData } from '@/types/template';

interface LaunchSectionProps {
  template: TemplateData;
  onBack: () => void;
  className?: string;
}

export const LaunchSection = ({ template, onBack, className = '' }: LaunchSectionProps) => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <div className={`space-y-8 ${className}`}>
        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            האתר שלך מוכן לפרסום! 🎉
          </h2>
          <p className="text-xl text-gray-400 mb-2">
            עכשיו בואו נפרסם אותו לאוויר ונעשה אותו זמין לכולם
          </p>
          <p className="text-sm text-gray-500">
            תוכל לערוך ולעדכן את האתר שלך בכל עת גם אחרי הפרסום
          </p>
        </div>

        {/* Preview Card */}
        <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              תצוגה מקדימה של האתר שלך
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h3 className="text-white font-semibold mb-2">{template.hero.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{template.hero.subtitle}</p>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-blue-600 text-white text-xs rounded">
                  {template.hero.button1Text}
                </div>
                <div className="px-3 py-1 bg-gray-700 text-white text-xs rounded">
                  {template.hero.button2Text}
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">
              זו רק תצוגה מקדימה - האתר המלא יכלול את כל הקטעים שבחרת
            </p>
          </CardContent>
        </Card>

        {/* Launch Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Express Mode */}
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50 hover:from-blue-800/60 hover:to-purple-800/60 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <CardTitle className="text-white">פרסום אקספרס</CardTitle>
                <Badge className="bg-yellow-500 text-black">מומלץ להתחלה</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                האתר שלך יהיה חי תוך 60 שניות עם דומיין חינמי זמני. מושלם להתחלה!
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>דומיין חינמי (.lovable.app)</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <Lock className="w-4 h-4" />
                  <span>SSL אוטומטי ומאובטח</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <Server className="w-4 h-4" />
                  <span>אחסון מהיר בענן</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <Clock className="w-4 h-4" />
                  <span>תוך 60 שניות בלבד</span>
                </div>
              </div>

              <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-700/30">
                <div className="text-blue-300 text-xs font-medium mb-1">חינם לחלוטין!</div>
                <div className="text-blue-200 text-xs">
                  תוכל לשדרג לדומיין מותאם אישית בכל עת
                </div>
              </div>
              
              <Button 
                onClick={() => setIsWizardOpen(true)}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-medium"
              >
                <Zap className="w-4 h-4 ml-2" />
                פרסם תוך 60 שניות
              </Button>
            </CardContent>
          </Card>

          {/* Premium Mode */}
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-400" />
                <CardTitle className="text-white">פרסום מותאם אישית</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">
                בחר דומיין חדש או חבר דומיין קיים. כולל תמיכה מלאה ב-.co.il
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-300">
                  <Globe className="w-4 h-4" />
                  <span>דומיין מותאם (.com, .co.il, .net)</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <Shield className="w-4 h-4" />
                  <span>SSL פרימיום ואבטחה מתקדמת</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <Server className="w-4 h-4" />
                  <span>אחסון פרימיום + גיבויים</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>תמיכה טכנית מלאה</span>
                </div>
              </div>

              <div className="bg-gray-700 p-3 rounded-lg">
                <div className="text-white text-xs font-medium mb-1">החל מ-₪89/שנה</div>
                <div className="text-gray-400 text-xs">
                  כולל דומיין + אחסון + SSL + תמיכה
                </div>
              </div>
              
              <Button 
                onClick={() => setIsWizardOpen(true)}
                variant="outline"
                className="w-full border-gray-600 text-white hover:bg-gray-700"
              >
                <Sparkles className="w-4 h-4 ml-2" />
                בחר דומיין מותאם
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700/30 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="text-center">
              <h4 className="text-green-300 font-medium mb-3 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                מה כלול בכל האפשרויות?
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-200">
                  <CheckCircle className="w-4 h-4" />
                  <span>אבטחה מתקדמת</span>
                </div>
                <div className="flex items-center gap-2 text-green-200">
                  <CheckCircle className="w-4 h-4" />
                  <span>עדכונים אוטומטיים</span>
                </div>
                <div className="flex items-center gap-2 text-green-200">
                  <CheckCircle className="w-4 h-4" />
                  <span>מהירות טעינה גבוהה</span>
                </div>
                <div className="flex items-center gap-2 text-green-200">
                  <CheckCircle className="w-4 h-4" />
                  <span>תמיכה בעברית</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-2xl mx-auto pt-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            חזור לעריכה
          </Button>
          
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              שלב אחרון לפני שהאתר שלך יהיה חי באינטרנט
            </p>
          </div>
        </div>
      </div>

      <NewPublishingWizard
        template={template}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </>
  );
};
