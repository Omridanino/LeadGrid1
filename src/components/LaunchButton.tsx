
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Shield,
  Server,
  Zap
} from 'lucide-react';
import { NewPublishingWizard } from './publishing/NewPublishingWizard';
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
    name: 'LEADGRID פרסום מקצועי',
    category: 'מקצועי',
    hero: {
      title: 'האתר שלך מוכן לפרסום עם LEADGRID!',
      subtitle: 'פתרון מלא לפרסום מיידי וחינמי',
      description: 'בואו נפרסם את האתר שלך לאוויר עם פרסום מיידי וחינמי',
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
      <Card className={`bg-gradient-to-br from-emerald-900/50 to-green-900/50 border-emerald-700/50 ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              פרסום מיידי - לחיצה אחת
            </CardTitle>
            <Badge className="bg-green-500 text-black font-bold">חינם!</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300 text-sm">
            הדרך הכי פשוטה לפרסם את האתר שלך - בלחיצה אחת, תוך דקות, בחינם לחלוטין
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">פרסום תוך 2-3 דקות בלבד</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Globe className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">כתובת אתר קבועה וחינמית</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">SSL מאובטח + זמינות גבוהה</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">אפס ידע טכני נדרש</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/40 to-green-900/40 p-4 rounded-lg border border-emerald-700/40">
            <div className="text-center">
              <div className="text-emerald-300 font-bold mb-2">⚡ פרסום מיידי</div>
              <div className="text-white text-sm">בלחיצה אחת האתר שלך יהיה חי באינטרנט!</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <Button
              onClick={() => setIsWizardOpen(true)}
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-4 text-base shadow-xl shadow-emerald-500/30"
            >
              <Zap className="w-5 h-5 ml-2" />
              פרסם עכשיו - לחיצה אחת! 🚀
              <ArrowRight className="w-5 h-5 mr-2" />
            </Button>
          </div>

          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Sparkles className="w-3 h-3" />
              <span>הכי פשוט, הכי מהיר, הכי טוב - ובחינם!</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <NewPublishingWizard
        template={currentTemplate}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </>
  );
};
