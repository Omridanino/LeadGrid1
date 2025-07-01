
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Globe, 
  Rocket, 
  CheckCircle, 
  Zap, 
  Settings, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  CreditCard
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { RealDomainSelector } from './publishing/RealDomainSelector';
import { IntegrationOptions } from './publishing/IntegrationOptions';
import { RealPublishingProgress } from './publishing/RealPublishingProgress';
import { PaymentFlow } from './publishing/PaymentFlow';

interface RealPublishingWizardProps {
  template: TemplateData;
  isOpen: boolean;
  onClose: () => void;
}

type PublishingStep = 'overview' | 'domain' | 'payment' | 'integrations' | 'publish' | 'complete';

export const RealPublishingWizard = ({ template, isOpen, onClose }: RealPublishingWizardProps) => {
  const [currentStep, setCurrentStep] = useState<PublishingStep>('overview');
  const [isExpressMode, setIsExpressMode] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [domainPrice, setDomainPrice] = useState(0);
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [publishedUrl, setPublishedUrl] = useState('');

  const steps = [
    { id: 'overview', name: 'סקירה', icon: Sparkles },
    { id: 'domain', name: 'דומיין', icon: Globe },
    { id: 'payment', name: 'תשלום', icon: CreditCard },
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

  const startExpressPublishing = async () => {
    setIsExpressMode(true);
    setSelectedDomain(`${template.name.toLowerCase().replace(/\s+/g, '-')}.lovable.app`);
    setSelectedIntegrations(['google-analytics', 'whatsapp']);
    setCurrentStep('publish');
  };

  const handleDomainSelect = (domain: string, price?: number) => {
    setSelectedDomain(domain);
    if (price) {
      setDomainPrice(price);
    }
  };

  const handlePaymentComplete = () => {
    nextStep(); // Move to integrations
  };

  const startRegularPublishing = () => {
    setCurrentStep('publish');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">פרסום אמיתי של האתר</h2>
              <p className="text-gray-400 text-sm mt-1">קנה דומיין אמיתי ופרסם את האתר לאוויר</p>
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
                    <h3 className="text-white text-xl font-semibold mb-4">בחר איך להפוך את האתר לחי</h3>
                    <p className="text-gray-400">פרסום אמיתי עם דומיין אמיתי והוסטינג מקצועי</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Express Mode */}
                    <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Zap className="w-6 h-6 text-yellow-400" />
                          <CardTitle className="text-white">מצב אקספרס</CardTitle>
                          <Badge className="bg-yellow-500 text-black">מומלץ</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-300 text-sm">
                          האתר שלך יהיה חי תוך 60 שניות עם דומיין .lovable.app חינם
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>דומיין חינם (.lovable.app)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>SSL אוטומטי</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>אנליטיקה + וואטסאפ</span>
                          </div>
                        </div>
                        <Button 
                          onClick={startExpressPublishing}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Zap className="w-4 h-4 ml-2" />
                          פרסם חינם תוך 60 שניות
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Premium Mode */}
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Settings className="w-6 h-6 text-blue-400" />
                          <CardTitle className="text-white">מצב פרימיום</CardTitle>
                          <Badge className="bg-green-600 text-white">דומיין אמיתי</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-300 text-sm">
                          קנה דומיין אמיתי, הוסף אינטגרציות מתקדמות, ופרסם באופן מקצועי
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-400" />
                            <span>דומיין אמיתי (.com/.co.il)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Settings className="w-4 h-4 text-blue-400" />
                            <span>15+ אינטגרציות</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400" />
                            <span>תמיכה מלאה</span>
                          </div>
                        </div>
                        <div className="text-center text-sm text-gray-400 mb-2">
                          החל מ-₪35/שנה
                        </div>
                        <Button 
                          onClick={nextStep}
                          variant="outline"
                          className="w-full border-gray-600 text-white hover:bg-gray-700"
                        >
                          <Settings className="w-4 h-4 ml-2" />
                          התחל פרסום פרימיום
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {currentStep === 'domain' && (
                <RealDomainSelector 
                  onDomainSelect={handleDomainSelect}
                  selectedDomain={selectedDomain}
                />
              )}

              {currentStep === 'payment' && selectedDomain && domainPrice > 0 && (
                <PaymentFlow
                  domain={selectedDomain}
                  price={domainPrice}
                  onPaymentComplete={handlePaymentComplete}
                  onCancel={prevStep}
                />
              )}

              {currentStep === 'integrations' && (
                <IntegrationOptions 
                  onIntegrationsChange={setSelectedIntegrations}
                  selectedIntegrations={selectedIntegrations}
                />
              )}

              {currentStep === 'publish' && (
                <RealPublishingProgress 
                  domain={selectedDomain}
                  template={template}
                  integrations={selectedIntegrations}
                  isExpressMode={isExpressMode}
                  onComplete={setPublishedUrl}
                />
              )}

              {currentStep === 'complete' && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">האתר שלך חי באינטרנט! 🎉</h3>
                    <p className="text-gray-400">האתר פורסם בהצלחה עם דומיין אמיתי</p>
                  </div>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-white font-medium text-lg mb-2">{publishedUrl}</div>
                        <Button
                          onClick={() => window.open(publishedUrl, '_blank')}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          בקר באתר שלך
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
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
              disabled={currentStep === 'domain' && !selectedDomain}
            >
              {currentStep === 'integrations' ? 'פרסם עכשיו' : 
               currentStep === 'domain' && domainPrice > 0 ? 'המשך לתשלום' : 'הבא'}
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
