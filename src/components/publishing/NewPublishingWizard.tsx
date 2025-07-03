import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Globe, 
  Rocket, 
  CheckCircle, 
  Clock, 
  Zap, 
  CreditCard, 
  Shield,
  ExternalLink,
  Copy,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  AlertCircle,
  Search,
  Server,
  Lock
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { PublishingProgress } from './PublishingProgress';
import { DomainService } from '@/services/domainService';
import { HostingService } from '@/services/hostingService';

interface NewPublishingWizardProps {
  template: TemplateData;
  isOpen: boolean;
  onClose: () => void;
}

type PublishingStep = 'overview' | 'domain' | 'payment' | 'publish' | 'complete';

export const NewPublishingWizard = ({ template, isOpen, onClose }: NewPublishingWizardProps) => {
  const [currentStep, setCurrentStep] = useState<PublishingStep>('overview');
  const [publishingProgress, setPublishingProgress] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [domainSearchTerm, setDomainSearchTerm] = useState('');
  const [existingDomain, setExistingDomain] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [domainSuggestions, setDomainSuggestions] = useState<any[]>([]);
  const [isCheckingDomain, setIsCheckingDomain] = useState(false);

  const steps = [
    { id: 'overview', name: 'סקירה', icon: Sparkles },
    { id: 'domain', name: 'דומיין', icon: Globe },
    { id: 'payment', name: 'תשלום', icon: CreditCard },
    { id: 'publish', name: 'פרסום', icon: Rocket },
    { id: 'complete', name: 'הושלם', icon: CheckCircle }
  ];

  const paymentMethods = [
    { id: 'stripe', name: 'תשלום בכרטיס אשראי (Stripe)', icon: CreditCard },
    { id: 'paypal', name: 'תשלום ב-PayPal', icon: CreditCard },
    { id: 'bit', name: 'תשלום באמצעות Bit', icon: CreditCard },
    { id: 'paybox', name: 'תשלום באמצעות PayBox', icon: CreditCard },
    { id: 'bank', name: 'העברה בנקאית', icon: CreditCard },
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

  const searchDomains = async () => {
    if (!domainSearchTerm) return;
    
    setIsCheckingDomain(true);
    try {
      const suggestions = DomainService.getDomainSuggestions(domainSearchTerm);
      setDomainSuggestions(suggestions);
    } catch (error) {
      console.error('Error searching domains:', error);
    } finally {
      setIsCheckingDomain(false);
    }
  };

  const startPublishing = async () => {
    setIsPublishing(true);
    setCurrentStep('publish');
    
    try {
      // Step 1: Process payment
      setPublishingProgress(25);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Step 2: Purchase/configure domain
      setPublishingProgress(50);
      if (selectedDomain && !selectedDomain.includes('temp')) {
        await DomainService.purchaseDomain(selectedDomain, 'namecheap');
      }
      
      // Step 3: Setup hosting and SSL
      setPublishingProgress(75);
      const finalDomain = selectedDomain || existingDomain || `${template.name.toLowerCase().replace(/\s+/g, '-')}.temp-domain.com`;
      await HostingService.setupHosting(finalDomain);
      await HostingService.provisionSSL(finalDomain);
      
      // Step 4: Deploy site
      setPublishingProgress(100);
      await new Promise(resolve => setTimeout(resolve, 2000));

      setPublishedUrl(`https://${finalDomain}`);
      setCurrentStep('complete');
      setIsPublishing(false);
    } catch (error) {
      console.error('Publishing failed:', error);
      setIsPublishing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">פרסום האתר שלך</h2>
              <p className="text-gray-400 text-sm mt-1">הופך את האתר שלך לחי עם דומיין מותאם ואחסון מקצועי</p>
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
                    <p className="text-gray-400">נתחיל עם בחירת דומיין ותוכנית אחסון מקצועית</p>
                  </div>

                  <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-400" />
                        תצוגה מקדימה - {template.name}
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
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700/30 max-w-2xl mx-auto">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h4 className="text-blue-300 font-medium mb-3 flex items-center justify-center gap-2">
                          <Server className="w-5 h-5" />
                          מה כלול בפרסום?
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-blue-200">
                            <CheckCircle className="w-4 h-4" />
                            <span>דומיין מותאם אישית</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200">
                            <Lock className="w-4 h-4" />
                            <span>SSL מאובטח</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200">
                            <Server className="w-4 h-4" />
                            <span>אחסון מהיר CDN</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200">
                            <Shield className="w-4 h-4" />
                            <span>גיבויים אוטומטיים</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center">
                    <Button 
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
                    >
                      <Rocket className="w-5 h-5 ml-2" />
                      בואו נתחיל!
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 'domain' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">בחר את הדומיין שלך</h3>
                    <p className="text-gray-400">בחר דומיין חדש או חבר דומיין שכבר בבעלותך</p>
                  </div>

                  <Tabs defaultValue="new" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                      <TabsTrigger value="new" className="text-white">רכוש דומיין חדש</TabsTrigger>
                      <TabsTrigger value="existing" className="text-white">חבר דומיין קיים</TabsTrigger>
                    </TabsList>

                    <TabsContent value="new" className="space-y-6">
                      {/* Domain Search */}
                      <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                          <CardTitle className="text-white flex items-center gap-2">
                            <Search className="w-5 h-5" />
                            חפש דומיין זמין
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex gap-2">
                            <Input
                              value={domainSearchTerm}
                              onChange={(e) => setDomainSearchTerm(e.target.value)}
                              placeholder="הקלד את השם שלך..."
                              className="bg-gray-700 border-gray-600 text-white flex-1"
                            />
                            <Button 
                              onClick={searchDomains}
                              className="bg-blue-600 hover:bg-blue-700"
                              disabled={isCheckingDomain || !domainSearchTerm}
                            >
                              {isCheckingDomain ? 'בודק...' : 'חפש'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Domain Suggestions */}
                      {domainSuggestions.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-white font-medium">דומיינים זמינים לרכישה:</h4>
                          {domainSuggestions.map((domain) => (
                            <Card key={domain.name} className={`
                              bg-gray-800 border-gray-700 cursor-pointer transition-all
                              ${selectedDomain === domain.name ? 'ring-2 ring-blue-500 bg-blue-900/20' : ''}
                              ${!domain.available ? 'opacity-50' : 'hover:bg-gray-700'}
                            `}>
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    {domain.available ? (
                                      <CheckCircle className="w-5 h-5 text-green-400" />
                                    ) : (
                                      <AlertCircle className="w-5 h-5 text-red-400" />
                                    )}
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-white font-medium">{domain.name}</span>
                                        {domain.popular && <Badge className="bg-yellow-500 text-black text-xs">פופולרי</Badge>}
                                      </div>
                                      <span className="text-sm text-gray-400">
                                        {domain.available ? 'זמין לרכישה' : 'תפוס'}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  {domain.available && (
                                    <div className="text-left">
                                      <div className="text-white font-semibold">{domain.price}</div>
                                      <Button
                                        size="sm"
                                        onClick={() => setSelectedDomain(domain.name)}
                                        className={
                                          selectedDomain === domain.name 
                                            ? "bg-green-600 hover:bg-green-700" 
                                            : "bg-blue-600 hover:bg-blue-700"
                                        }
                                      >
                                        {selectedDomain === domain.name ? 'נבחר לרכישה' : 'רכוש'}
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="existing" className="space-y-6">
                      <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                          <CardTitle className="text-white flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            חבר דומיין קיים
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <Label className="text-white text-sm font-medium">הדומיין שלך</Label>
                            <Input
                              value={existingDomain}
                              onChange={(e) => setExistingDomain(e.target.value)}
                              placeholder="mydomain.com או mydomain.co.il"
                              className="bg-gray-700 border-gray-600 text-white mt-2"
                            />
                            <p className="text-xs text-gray-400 mt-1">
                              הקלד את הדומיין המלא שלך (כולל .com/.co.il וכו')
                            </p>
                          </div>

                          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                            <div className="flex items-start gap-2">
                              <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                              <div className="text-sm">
                                <div className="text-blue-300 font-medium mb-1">הוראות חיבור ברורות:</div>
                                <div className="text-blue-200 space-y-1 text-xs">
                                  <p>1. היכנס לחשבון הדומיין שלך אצל הספק</p>
                                  <p>2. הוסף רשומת CNAME שמפנה ל: hosting.lovable.app</p>
                                  <p>3. נאמת את החיבור אוטומטית</p>
                                  <p>4. הגדרות DNS ו-SSL אוטומטיות לחלוטין</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button
                            onClick={() => setSelectedDomain(existingDomain)}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            disabled={!existingDomain}
                          >
                            אמת וחבר דומיין
                          </Button>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {currentStep === 'payment' && (
                <></>
              )}

              {currentStep === 'publish' && (
                <PublishingProgress 
                  progress={publishingProgress}
                  isPublishing={isPublishing}
                  isExpressMode={false}
                />
              )}

              {currentStep === 'complete' && (
                <></>
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
              onClick={currentStep === 'payment' ? startPublishing : nextStep}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={
                (currentStep === 'domain' && !selectedDomain && !existingDomain) ||
                (currentStep === 'payment' && !selectedPaymentMethod)
              }
            >
              {currentStep === 'payment' ? 'שלם והמשך' : 'הבא'}
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
