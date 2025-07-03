
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Globe, 
  Rocket, 
  CheckCircle, 
  Clock, 
  Zap, 
  Settings, 
  BarChart3, 
  Mail, 
  CreditCard,
  Shield,
  ExternalLink,
  Copy,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { DomainSelector } from './publishing/DomainSelector';
import { IntegrationOptions } from './publishing/IntegrationOptions';
import { PublishingProgress } from './publishing/PublishingProgress';

interface PublishingWizardProps {
  template: TemplateData;
  isOpen: boolean;
  onClose: () => void;
}

type PublishingStep = 'overview' | 'domain' | 'integrations' | 'publish' | 'complete';

export const PublishingWizard = ({ template, isOpen, onClose }: PublishingWizardProps) => {
  const [currentStep, setCurrentStep] = useState<PublishingStep>('overview');
  const [publishingProgress, setPublishingProgress] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);

  const steps = [
    { id: 'overview', name: 'סקירה', icon: Sparkles },
    { id: 'domain', name: 'דומיין', icon: Globe },
    { id: 'integrations', name: 'אינטגרציות', icon: Settings },
    { id: 'publish', name: 'פרסום', icon: Rocket },
    { id: 'complete', name: 'הושלם', icon: CheckCircle }
  ];

  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  const nextStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as PublishingStep);
    }
  };

  const prevStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as PublishingStep);
    }
  };

  const startRegularPublishing = async () => {
    setIsPublishing(true);
    setCurrentStep('publish');
    
    const steps = [
      { message: 'בונה את האתר...', progress: 25 },
      { message: 'מגדיר דומיין...', progress: 50 },
      { message: 'מתקין אינטגרציות...', progress: 75 },
      { message: 'פורס לאוויר...', progress: 100 }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPublishingProgress(step.progress);
    }

    // Create clean Netlify subdomain (only letters, numbers, hyphens)
    const timestamp = Date.now();
    
    // Clean the template name more thoroughly - remove ALL special chars and dots
    const templateSlug = template.name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove ALL special characters including dots
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      .substring(0, 20); // Limit length
    
    // Ensure we have a valid subdomain name
    const cleanSlug = templateSlug || 'site';
    const netlifySubdomain = `${cleanSlug}-${timestamp}`;
    
    console.log('Generated subdomain:', netlifySubdomain);
    
    // Set the final published URL - ONLY standard Netlify format (no extra dots!)
    const finalUrl = `https://${netlifySubdomain}.netlify.app`;
    console.log('Final URL:', finalUrl);
    setPublishedUrl(finalUrl);
    setCurrentStep('complete');
    setIsPublishing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">פרסום האתר</h2>
              <p className="text-gray-400 text-sm mt-1">הפוך את האתר שלך לחי ופעיל באינטרנט</p>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress Steps */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = getCurrentStepIndex() > index;
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className={`
                      flex items-center justify-center w-10 h-10 rounded-full border-2
                      ${isActive ? 'bg-blue-600 border-blue-600 text-white' : 
                        isCompleted ? 'bg-green-600 border-green-600 text-white' : 
                        'border-gray-600 text-gray-400'}
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="mr-3">
                      <div className={`text-sm font-medium ${isActive ? 'text-white' : isCompleted ? 'text-green-400' : 'text-gray-400'}`}>
                        {step.name}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-0.5 mx-4 ${isCompleted ? 'bg-green-600' : 'bg-gray-600'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6">
              {currentStep === 'overview' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-4">מוכן לפרסם את האתר שלך?</h3>
                    <p className="text-gray-400">נפרסם את האתר שלך עם אחסון מקצועי חינם ב-Netlify</p>
                  </div>

                  <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50 max-w-2xl mx-auto">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-blue-400" />
                        <CardTitle className="text-white">פרסום מקצועי</CardTitle>
                        <Badge className="bg-green-500 text-black">חינם</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300 text-sm">
                        האתר שלך יפורסם עם אחסון מקצועי, SSL מאובטח וכתובת קבועה
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>אחסון חינם ב-Netlify</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>SSL אוטומטי</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>כתובת קבועה (.netlify.app)</span>
                        </div>
                      </div>
                      <Button 
                        onClick={nextStep}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <Rocket className="w-4 h-4 ml-2" />
                        בואו נתחיל!
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentStep === 'domain' && (
                <DomainSelector 
                  onDomainSelect={setSelectedDomain}
                  selectedDomain={selectedDomain}
                />
              )}

              {currentStep === 'integrations' && (
                <IntegrationOptions 
                  onIntegrationsChange={setSelectedIntegrations}
                  selectedIntegrations={selectedIntegrations}
                />
              )}

              {currentStep === 'publish' && (
                <PublishingProgress 
                  progress={publishingProgress}
                  isPublishing={isPublishing}
                />
              )}

              {currentStep === 'complete' && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">האתר שלך חי! 🎉</h3>
                    <p className="text-gray-400">האתר שלך פורסם בהצלחה ומוכן לקבל מבקרים</p>
                  </div>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-medium">{publishedUrl}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => navigator.clipboard.writeText(publishedUrl)}
                            className="bg-gray-700 hover:bg-gray-600"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => window.open(publishedUrl, '_blank')}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={onClose}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      סיום
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-700"
                    >
                      הגדרות נוספות
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Footer Navigation */}
        {currentStep !== 'overview' && currentStep !== 'complete' && currentStep !== 'publish' && (
          <div className="p-6 border-t border-gray-800 flex justify-between">
            <Button
              onClick={prevStep}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              קודם
            </Button>
            
            <Button
              onClick={currentStep === 'integrations' ? startRegularPublishing : nextStep}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentStep === 'integrations' ? 'פרסם עכשיו' : 'הבא'}
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
