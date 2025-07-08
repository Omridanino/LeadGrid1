
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Rocket, 
  CheckCircle,
  ArrowLeft,
  Globe,
  Code,
  Download,
  Eye,
  Server,
  Zap,
  Link,
  ExternalLink,
  Shield
} from 'lucide-react';
import { CleanWordPressForm } from './domain/CleanWordPressForm';
import { SimpleDomainGuide } from './domain/SimpleDomainGuide';
import { NewPublishingWizard } from './publishing/NewPublishingWizard';
import { TemplateData } from '@/types/template';

interface LaunchSectionProps {
  template: TemplateData;
  onBack: () => void;
  className?: string;
}

export const LaunchSection = ({ template, onBack, className = '' }: LaunchSectionProps) => {
  const [showWordPressForm, setShowWordPressForm] = useState(false);
  const [showDomainGuide, setShowDomainGuide] = useState(false);
  const [showPublishingWizard, setShowPublishingWizard] = useState(false);
  const { toast } = useToast();

  // Save the template data to localStorage for later use
  const saveTemplateData = () => {
    const templateWithGeneratedContent = {
      formData: {
        businessName: template.hero.title,
        businessDescription: template.hero.subtitle,
        businessType: template.category,
        email: '',
        phone: ''
      },
      generatedContent: {
        hero: {
          title: template.hero.title,
          subtitle: template.hero.subtitle,
          button1Text: template.hero.button1Text,
          button2Text: template.hero.button2Text
        },
        features: template.features,
        testimonials: template.testimonials,
        about: template.about,
        contact: template.contact
      },
      styles: template.styles,
      heroImage: '',
      template: template,
      businessInfo: {
        companyName: template.hero.title
      }
    };
    
    localStorage.setItem('generatedPageData', JSON.stringify(templateWithGeneratedContent));
  };

  if (showWordPressForm) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50">
        <CleanWordPressForm onBack={() => setShowWordPressForm(false)} />
      </div>
    );
  }

  if (showDomainGuide) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50">
        <SimpleDomainGuide onBack={() => setShowDomainGuide(false)} />
      </div>
    );
  }

  if (showPublishingWizard) {
    return (
      <NewPublishingWizard
        template={template}
        isOpen={showPublishingWizard}
        onClose={() => setShowPublishingWizard(false)}
      />
    );
  }

  // Auto-open publishing wizard immediately
  useEffect(() => {
    saveTemplateData();
    setShowPublishingWizard(true);
  }, []);

  return (
    <div className={`space-y-8 ${className}`} dir="rtl">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/25">
          <Rocket className="w-12 h-12 text-white" />
        </div>
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            🎉 הדף שלך מוכן!
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            עכשיו בואו נרכוש דומיין ואחסון כדי להעלות את הדף לאוויר
          </p>
        </div>
      </div>

      {/* Main purchase option */}
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 border-emerald-500/60 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-2 left-2">
            <Badge className="bg-green-500 text-black font-bold text-xs">מומלץ!</Badge>
          </div>
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/40">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">רכישת דומיין ואחסון</h3>
              <p className="text-gray-300 text-sm mb-4">
                הכל במקום אחד - דומיין, אחסון ושירות LeadGrid
              </p>
              
              <div className="space-y-2 text-xs text-emerald-200">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>פרסום תוך 2 דקות</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>SSL מאובטח אוטומטי</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>דומיין מקצועי</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>שירות LeadGrid מלא</span>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => {
                saveTemplateData();
                setShowPublishingWizard(true);
              }}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold shadow-lg shadow-emerald-500/30"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              המשך לרכישה
            </Button>
            
            <div className="text-xs text-emerald-300 font-medium">
              ⚡ הכי פשוט וטוב - בלי סיבוכים!
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          חזור לעריכת הדף
        </Button>
      </div>

    </div>
  );
};
