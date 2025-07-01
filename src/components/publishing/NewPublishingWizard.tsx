
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
  Search
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { PublishingProgress } from './PublishingProgress';

interface NewPublishingWizardProps {
  template: TemplateData;
  isOpen: boolean;
  onClose: () => void;
}

type PublishingStep = 'overview' | 'domain' | 'payment' | 'publish' | 'complete';

export const NewPublishingWizard = ({ template, isOpen, onClose }: NewPublishingWizardProps) => {
  const [currentStep, setCurrentStep] = useState<PublishingStep>('overview');
  const [isExpressMode, setIsExpressMode] = useState(false);
  const [publishingProgress, setPublishingProgress] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [domainSearchTerm, setDomainSearchTerm] = useState('');
  const [existingDomain, setExistingDomain] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const steps = [
    { id: 'overview', name: 'סקירה', icon: Sparkles },
    { id: 'domain', name: 'דומיין', icon: Globe },
    { id: 'payment', name: 'תשלום', icon: CreditCard },
    { id: 'publish', name: 'פרסום', icon: Rocket },
    { id: 'complete', name: 'הושלם', icon: CheckCircle }
  ];

  const domainSuggestions = [
    { name: `${domainSearchTerm || 'yourbusiness'}.com`, price: '₪89/שנה', available: true, popular: true },
    { name: `${domainSearchTerm || 'yourbusiness'}.co.il`, price: '₪65/שנה', available: true, popular: true },
    { name: `${domainSearchTerm || 'yourbusiness'}.net`, price: '₪75/שנה', available: true, popular: false },
    { name: `${domainSearchTerm || 'yourbusiness'}.org`, price: '₪70/שנה', available: false, popular: false },
    { name: `${domainSearchTerm || 'yourbusiness'}.shop`, price: '₪95/שנה', available: true, popular: false },
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

  const startExpressPublishing = async () => {
    setIsExpressMode(true);
    setIsPublishing(true);
    setCurrentStep('publish');
    
    const steps = [
      { message: 'מכין את האתר...', progress: 20 },
      { message: 'מגדיר דומיין זמני...', progress: 40 },
      { message: 'מפרסם לאוויר...', progress: 60 },
      { message: 'בודקים את כל החיבורים והאבטחה... עוד רגע וזה מוכן!', progress: 80 },
      { message: 'האתר שלך באוויר!', progress: 100 }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPublishingProgress(step.progress);
    }

    setPublishedUrl(`https://${template.name.toLowerCase().replace(/\s+/g, '-')}.lovable.app`);
    setCurrentStep('complete');
    setIsPublishing(false);
  };

  const startRegularPublishing = async () => {
    setIsPublishing(true);
    
    const steps = [
      { message: 'מעבד את התשלום... זה ייקח מספר שניות.', progress: 25 },
      { message: 'מגדיר את הדומיין...', progress: 50 },
      { message: 'מפרסם את האתר שלך... זה יכול להימשך עד 60 שניות.', progress: 75 },
      { message: 'בודקים את כל החיבורים והאבטחה... עוד רגע וזה מוכן!', progress: 100 }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setPublishingProgress(step.progress);
    }

    setPublishedUrl(`https://${selectedDomain || domainSearchTerm || template.name.toLowerCase().replace(/\s+/g, '-')}.com`);
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
              <h2 className="text-white text-2xl font-bold">פרסום האתר שלך</h2>
              <p className="text-gray-400 text-sm mt-1">ברגע שתפרסם, האתר שלך יהיה זמין אונליין עם הדומיין שבחרת. תוכל לערוך ולפרסם מחדש בכל שלב.</p>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Express Mode */}
                    <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Zap className="w-6 h-6 text-yellow-400" />
                          <CardTitle className="text-white">התחל עם דומיין זמני חינם</CardTitle>
                          <Badge className="bg-yellow-500 text-black">מומלץ</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-300 text-sm">
                          האתר שלך יהיה חי תוך 60 שניות עם דומיין חינמי זמני. תוכל לשדרג מאוחר יותר.
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>דומיין חינמי (.lovable.app)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>SSL אוטומטי ומאובטח ✅</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>אחסון בענן</span>
                          </div>
                        </div>
                        <Button 
                          onClick={startExpressPublishing}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Zap className="w-4 h-4 ml-2" />
                          התחל תוך 60 שניות
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Premium Mode */}
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Globe className="w-6 h-6 text-blue-400" />
                          <CardTitle className="text-white">דומיין מותאם אישית</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-300 text-sm">
                          בחר דומיין חדש או חבר דומיין שכבר בבעלותך. כולל תמיכה מלאה ב-.co.il
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-400" />
                            <span>דומיין מותאם (.com, .co.il, .net)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-blue-400" />
                            <span>SSL פרימיום ואבטחה מתקדמת</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-blue-400" />
                            <span>תמיכה בכל אמצעי התשלום</span>
                          </div>
                        </div>
                        <Button 
                          onClick={nextStep}
                          variant="outline"
                          className="w-full border-gray-600 text-white hover:bg-gray-700"
                        >
                          <Globe className="w-4 h-4 ml-2" />
                          בחר דומיין מותאם
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {currentStep === 'domain' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">בחר את הדומיין שלך</h3>
                    <p className="text-gray-400">בחר דומיין חדש או חבר דומיין שכבר בבעלותך. תוכל גם לבחור דומיין חינמי זמני ולהתחיל מיד.</p>
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
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              חפש
                            </Button>
                          </div>
                          <p className="text-xs text-gray-400">
                            לדוגמה: mystore, johnsmith, creativestudio
                          </p>
                        </CardContent>
                      </Card>

                      {/* Domain Suggestions */}
                      <div className="space-y-3">
                        <h4 className="text-white font-medium">דומיינים זמינים:</h4>
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
                                      {domain.available ? 'זמין' : 'תפוס'}
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
                                      {selectedDomain === domain.name ? 'נבחר' : 'בחר'}
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
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
                                  <p>2. הוסף רשומת CNAME שמפנה ל: lovable.app</p>
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
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">בחר אמצעי תשלום</h3>
                    <p className="text-gray-400">בחר את אמצעי התשלום הנוח לך. התהליך מאובטח לחלוטין.</p>
                  </div>

                  <div className="space-y-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <Card key={method.id} className={`
                          bg-gray-800 border-gray-700 cursor-pointer transition-all
                          ${selectedPaymentMethod === method.id ? 'ring-2 ring-blue-500 bg-blue-900/20' : 'hover:bg-gray-700'}
                        `}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Icon className="w-5 h-5 text-blue-400" />
                                <span className="text-white font-medium">{method.name}</span>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => setSelectedPaymentMethod(method.id)}
                                className={
                                  selectedPaymentMethod === method.id 
                                    ? "bg-green-600 hover:bg-green-700" 
                                    : "bg-blue-600 hover:bg-blue-700"
                                }
                              >
                                {selectedPaymentMethod === method.id ? 'נבחר' : 'בחר'}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Security Notice */}
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-green-400 mb-2">
                        <Shield className="w-5 h-5" />
                        <span className="font-medium">אבטחת מידע מתקדמת</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        אבטחת המידע שלך חשובה לנו. כל התשלומים עוברים הצפנה מלאה ותקני אבטחה בינלאומיים (PCI Compliance).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentStep === 'publish' && (
                <PublishingProgress 
                  progress={publishingProgress}
                  isPublishing={isPublishing}
                  isExpressMode={isExpressMode}
                />
              )}

              {currentStep === 'complete' && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">האתר שלך באוויר! 🎉</h3>
                    <p className="text-gray-400">מעולה! הדומיין שלך חובר בהצלחה והאתר מוכן לקבל מבקרים</p>
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
                            לחץ כאן לצפייה
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
              onClick={currentStep === 'payment' ? startRegularPublishing : nextStep}
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
