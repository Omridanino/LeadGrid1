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
  Sparkles,
  Globe,
  CreditCard
} from 'lucide-react';
import { RealPublishingWizard } from './RealPublishingWizard';
import { TemplateData } from '@/types/template';

interface RealLaunchButtonProps {
  template?: TemplateData;
  className?: string;
}

export const RealLaunchButton = ({ template, className = '' }: RealLaunchButtonProps) => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Default template for demo purposes
  const defaultTemplate: TemplateData = {
    id: 'real-launch',
    name: 'השקה אמיתית',
    category: 'אמיתי',
    hero: {
      title: 'האתר שלך מוכן להשקה אמיתית!',
      subtitle: 'עם דומיין אמיתי ופרסום מקצועי',
      description: 'בואו נפרסם את האתר שלך לאוויר עם דומיין אמיתי',
      button1Text: 'התחל עכשיו',
      button2Text: 'למד עוד'
    },
    emotional: {
      title: 'רגש',
      description: 'תיאור רגשי',
      button1Text: 'כפתור 1',
      button2Text: 'כפתור 2'
    },
    features: {
      title: 'תכונות',
      items: [],
      button1Text: 'כפתור 1',
      button2Text: 'כפתור 2'
    },
    testimonials: {
      title: 'עדויות',
      testimonials: [],
      button1Text: 'כפתור 1',
      button2Text: 'כפתור 2'
    },
    about: {
      title: 'אודות',
      description: 'תיאור',
      button1Text: 'כפתור 1',
      button2Text: 'כפתור 2'
    },
    pricing: {
      title: 'מחירים',
      plans: [],
      button1Text: 'כפתור 1',
      button2Text: 'כפתור 2'
    },
    faq: {
      title: 'שאלות',
      questions: [],
      button1Text: 'כפתור 1',
      button2Text: 'כפתור 2'
    },
    finalCta: {
      title: 'קריאה לפעולה',
      description: 'תיאור',
      button1Text: 'כפתור 1',
      button2Text: 'כפתור 2'
    },
    contact: {
      title: 'יצירת קשר',
      buttonText: 'שלח הודעה'
    },
    footer: {
      companyName: 'החברה שלי'
    },
    styles: {
      backgroundColor: '#ffffff',
      heroBackground: '#000000',
      emotionalBackground: '#f8f9fa',
      featuresBackground: '#ffffff',
      testimonialsBackground: '#f8f9fa',
      aboutBackground: '#ffffff',
      pricingBackground: '#f8f9fa',
      faqBackground: '#ffffff',
      finalCtaBackground: '#000000',
      contactBackground: '#f8f9fa',
      footerBackground: '#000000',
      textColor: '#000000',
      primaryColor: '#3b82f6',
      secondaryColor: '#6b7280',
      accentColor: '#f59e0b'
    },
    effects: {}
  };

  const currentTemplate = template || defaultTemplate;

  return (
    <>
      <Card className={`bg-gradient-to-br from-green-900/50 to-blue-900/50 border-green-700/50 ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-400" />
              פרסם את האתר באמת
            </CardTitle>
            <Badge className="bg-green-500 text-black font-bold">אמיתי!</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            קנה דומיין אמיתי ופרסם את האתר שלך לאוויר באופן מקצועי ואמיתי
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">רכישת דומיין אמיתי (.com/.co.il)</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">הוסטינג מקצועי + SSL</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">15+ אינטגרציות אמיתיות</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">תמיכה טכנית 24/7</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
              <div className="text-white font-medium text-sm">אקספרס</div>
              <div className="text-gray-400 text-xs">חינם + 60 שניות</div>
            </div>
            
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <CreditCard className="w-6 h-6 text-blue-400 mx-auto mb-1" />
              <div className="text-white font-medium text-sm">פרימיום</div>
              <div className="text-gray-400 text-xs">מ-₪35/שנה</div>
            </div>
          </div>

          <Button
            onClick={() => setIsWizardOpen(true)}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium"
          >
            <Rocket className="w-4 h-4 ml-2" />
            התחל פרסום אמיתי
            <ArrowRight className="w-4 h-4 mr-2" />
          </Button>

          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>דומיין אמיתי שלך לתמיד</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <RealPublishingWizard
        template={currentTemplate}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </>
  );
};
