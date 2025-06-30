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
  Sparkles
} from 'lucide-react';
import { PublishingWizard } from './PublishingWizard';
import { TemplateData } from '@/types/template';

interface LaunchButtonProps {
  template?: TemplateData;
  className?: string;
}

export const LaunchButton = ({ template, className = '' }: LaunchButtonProps) => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Default template for demo purposes
  const defaultTemplate: TemplateData = {
    id: 'quick-launch',
    name: 'השקה מהירה',
    category: 'אקספרס',
    hero: {
      title: 'האתר שלך מוכן להשקה!',
      subtitle: 'תוך דקות ספורות',
      description: 'בואו נפרסם את האתר שלך לאוויר',
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
      <Card className={`bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50 ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Rocket className="w-6 h-6 text-blue-400" />
              פרסם את האתר שלך
            </CardTitle>
            <Badge className="bg-yellow-500 text-black">חדש!</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            הפוך את האתר שלך לחי ופעיל באינטרנט תוך מספר דקות
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">דומיין חינם או מותאם</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">SSL ואבטחה מלאה</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300">אנליטיקה ואינטגרציות</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => setIsWizardOpen(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-medium"
            >
              <Zap className="w-4 h-4 ml-1" />
              60 שניות
            </Button>
            
            <Button
              onClick={() => setIsWizardOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Sparkles className="w-4 h-4 ml-1" />
              מתקדם
            </Button>
          </div>

          <div className="pt-2 border-t border-gray-700">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>ממוצע 3-5 דקות להשקה מלאה</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <PublishingWizard
        template={currentTemplate}
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </>
  );
};
