
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Globe,
  Shield,
  Server,
  Lock,
  CreditCard
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
            עכשיו בואו נפרסם אותו לאוויר עם דומיין מקצועי ואחסון מתקדם
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
              תצוגה מקדימה של האתר שלך - {template.name}
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
              זו רק תצוגה מקדימה - האתר המלא יכלול את כל הקטעים שערכת
            </p>
          </CardContent>
        </Card>

        {/* Publishing Info */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center text-xl">
              מה כלול בפרסום המקצועי?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-medium">דומיין מותאם אישית</div>
                    <div className="text-sm text-blue-300">yourbusiness.com או .co.il</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Lock className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="font-medium">SSL מאובטח</div>
                    <div className="text-sm text-blue-300">תעודת אבטחה מתקדמת</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Server className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="font-medium">אחסון מהיר CDN</div>
                    <div className="text-sm text-blue-300">זמני טעינה מהירים בכל העולם</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="font-medium">גיבויים אוטומטיים</div>
                    <div className="text-sm text-blue-300">הגנה מלאה על המידע שלך</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-blue-700/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CreditCard className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-medium">החל מ-₪89/שנה</span>
              </div>
              <p className="text-blue-200 text-sm">
                כולל דומיין + אחסון + SSL + תמיכה טכנית מלאה
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Launch Button */}
        <div className="text-center">
          <Button 
            onClick={() => setIsWizardOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 text-lg font-semibold"
          >
            <Rocket className="w-6 h-6 ml-3" />
            פרסם את האתר שלי
            <ArrowRight className="w-6 h-6 mr-3" />
          </Button>
        </div>

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
