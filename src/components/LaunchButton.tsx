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
  Shield,
  Server
} from 'lucide-react';
import { LeadgridDomainWizard } from './domain/LeadgridDomainWizard';
import { TemplateData } from '@/types/template';

interface LaunchButtonProps {
  template?: TemplateData;
  className?: string;
}

export const LaunchButton = ({ template, className = '' }: LaunchButtonProps) => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Default template for demo purposes
  const defaultTemplate: TemplateData = {
    id: 'leadgrid-launch',
    name: 'LEADGRID השקה מהירה',
    category: 'מקצועי',
    hero: {
      title: 'האתר שלך מוכן להשקה עם LEADGRID!',
      subtitle: 'פתרון מלא לפרסום מקצועי',
      description: 'בואו נפרסם את האתר שלך לאוויר עם דומיין מותאם ואחסון ישראלי',
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
      companyName: 'LEADGRID'
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
      <Card className={`bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50 ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              LEADGRID - פרסם את האתר שלך
            </CardTitle>
            <Badge className="bg-yellow-500 text-black font-medium">הפתרון הישראלי</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300 text-sm">
            הפתרון המלא לפרסום האתר שלך באינטרנט - דומיין ישראלי, אחסון מקומי, תמיכה בעברית
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Globe className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">דומיינים .co.il ו-.com במחירים הטובים בישראל</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Server className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">אחסון מקומי במרכזי נתונים בישראל</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">SSL פרימיום ותמיכה טכנית מלאה בעברית</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">תשלום בכל אמצעי התשלום הישראליים</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-700/30">
            <div className="text-center">
              <div className="text-blue-300 font-semibold mb-2">💝 מבצע השקה מיוחד</div>
              <div className="text-white text-sm">דומיין .co.il חינם + אחסון שנה ב-₪89 בלבד!</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <Button
              onClick={() => setIsWizardOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 text-base"
            >
              <Rocket className="w-5 h-5 ml-2" />
              פרסם את האתר שלי עכשיו
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </div>

          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>תהליך פשוט של 5 דקות - הכל בעברית ובשקיפות מלאה</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <LeadgridDomainWizard
        template={currentTemplate}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onComplete={(result) => {
          console.log('Domain purchase completed:', result);
          setIsWizardOpen(false);
        }}
      />
    </>
  );
};
