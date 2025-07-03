
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
  CreditCard,
  Zap,
  Star
} from 'lucide-react';
import { LeadgridDomainWizard } from './domain/LeadgridDomainWizard';
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
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <Rocket className="w-12 h-12 text-white" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-black" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎯 האתר שלך מוכן להשקה עם LEADGRID!
          </h2>
          <p className="text-xl text-gray-400 mb-2">
            הפתרון הישראלי המלא לפרסום מקצועי - דומיין, אחסון ותמיכה
          </p>
          <p className="text-sm text-gray-500">
            עריכה וניהול מלא גם אחרי הפרסום + תמיכה טכנית בעברית
          </p>
        </div>

        {/* Template Preview */}
        <Card className="bg-gray-800 border-gray-700 max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              תצוגה מקדימה - {template.name}
              <Badge className="bg-green-600 text-white text-xs mr-2">מוכן לפרסום</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-white font-semibold text-lg mb-3">{template.hero.title}</h3>
              <p className="text-gray-400 mb-4">{template.hero.subtitle}</p>
              <div className="flex gap-3">
                <div 
                  className="px-4 py-2 text-white text-sm rounded font-medium"
                  style={{ backgroundColor: template.styles.primaryColor }}
                >
                  {template.hero.button1Text}
                </div>
                <div 
                  className="px-4 py-2 text-white text-sm rounded"
                  style={{ backgroundColor: template.styles.secondaryColor }}
                >
                  {template.hero.button2Text}
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">
              זו רק תצוגה מקדימה קטנה - האתר המלא יכלול את כל הקטעים והתוכן שיצרת
            </p>
          </CardContent>
        </Card>

        {/* LEADGRID Features */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50 max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              למה LEADGRID? הפתרון הישראלי המלא
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="font-medium">דומיינים ישראליים</div>
                    <div className="text-sm text-blue-300">.co.il, .com במחירי הטובים</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Server className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="font-medium">אחסון מקומי</div>
                    <div className="text-sm text-blue-300">שרתים בישראל - מהירות מקסימלית</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Lock className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="font-medium">SSL פרימיום</div>
                    <div className="text-sm text-blue-300">אבטחה מתקדמת וחינם</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="font-medium">תמיכה בעברית</div>
                    <div className="text-sm text-blue-300">24/7 עם צוות ישראלי</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-200">
                  <Zap className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="font-medium">עריכה חיה</div>
                    <div className="text-sm text-blue-300">שינוי התוכן גם אחרי הפרסום</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <CreditCard className="w-6 h-6 text-pink-400" />
                  <div>
                    <div className="font-medium">תשלום ישראלי</div>
                    <div className="text-sm text-blue-300">כרטיס אשראי, Bit, PayPal</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-blue-700/30">
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-300 font-bold text-lg">מבצע השקה מיוחד!</span>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-yellow-200 font-medium">
                  דומיין .co.il חינם + אחסון שנה שלמה רק ב-₪89
                </p>
                <p className="text-yellow-300 text-sm mt-1">
                  (במקום ₪169 - חסכון של ₪80!)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Launch Button */}
        <div className="text-center">
          <Button 
            onClick={() => setIsWizardOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-16 py-6 text-xl font-bold shadow-2xl"
          >
            <Rocket className="w-7 h-7 ml-3" />
            פרסם עם LEADGRID עכשיו!
            <ArrowRight className="w-7 h-7 mr-3" />
          </Button>
          <p className="text-gray-500 text-sm mt-3">
            תהליך של 5 דקות בלבד - הכל בעברית ושקוף
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-3xl mx-auto pt-8">
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
              השלב האחרון - האתר שלך עומד להיות חי באינטרנט!
            </p>
          </div>
        </div>
      </div>

      <LeadgridDomainWizard
        template={template}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onComplete={(result) => {
          console.log('LEADGRID domain purchase completed:', result);
          setIsWizardOpen(false);
        }}
      />
    </>
  );
};
