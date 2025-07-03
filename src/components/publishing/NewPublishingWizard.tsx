import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Globe, 
  Rocket, 
  CheckCircle, 
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

type PublishingStep = 'overview' | 'domain' | 'publish' | 'complete';

export const NewPublishingWizard = ({ template, isOpen, onClose }: NewPublishingWizardProps) => {
  const [currentStep, setCurrentStep] = useState<PublishingStep>('overview');
  const [publishingProgress, setPublishingProgress] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [domainSearchTerm, setDomainSearchTerm] = useState('');
  const [existingDomain, setExistingDomain] = useState('');
  const [domainSuggestions, setDomainSuggestions] = useState<any[]>([]);
  const [isCheckingDomain, setIsCheckingDomain] = useState(false);

  const steps = [
    { id: 'overview', name: 'סקירה', icon: Sparkles },
    { id: 'domain', name: 'דומיין', icon: Globe },
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
      // Step 1: Prepare files
      setPublishingProgress(25);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Step 2: Create clean Netlify subdomain (only letters, numbers, hyphens)
      setPublishingProgress(50);
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
      
      // Step 3: Setup SSL and domain
      setPublishingProgress(75);
      await HostingService.setupHosting(`${netlifySubdomain}.netlify.app`);
      await HostingService.provisionSSL(`${netlifySubdomain}.netlify.app`);
      
      // Step 4: Complete
      setPublishingProgress(100);
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Set the final published URL - ONLY standard Netlify format (no extra dots!)
      const finalUrl = `https://${netlifySubdomain}.netlify.app`;
      console.log('Final URL:', finalUrl);
      setPublishedUrl(finalUrl);
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
              <p className="text-gray-400 text-sm mt-1">הופך את האתר שלך לחי עם אחסון חינם ואיכותי</p>
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
                    <p className="text-gray-400">נפרסם את האתר שלך בחינם עם אחסון מקצועי</p>
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
                          מה כלול בפרסום החינמי?
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-blue-200">
                            <CheckCircle className="w-4 h-4" />
                            <span>אחסון חינם ב-Netlify</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200">
                            <Lock className="w-4 h-4" />
                            <span>SSL מאובטח</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200">
                            <Server className="w-4 h-4" />
                            <span>כתובת אתר קבועה</span>
                          </div>
                          <div className="flex items-center gap-2 text-blue-200">
                            <Shield className="w-4 h-4" />
                            <span>אמינות וזמינות גבוהה</span>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-600/30">
                          <p className="text-green-300 text-sm font-medium">
                            ✨ חינם לחלוטין - אחסון מקצועי ללא עלות!
                          </p>
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
                    <p className="text-gray-400">תקבל כתובת אתר חינמי או תוכל לחבר דומיין משלך מאוחר יותר</p>
                  </div>

                  <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-700/30 max-w-2xl mx-auto">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h4 className="text-green-300 font-medium mb-3 flex items-center justify-center gap-2">
                          <Globe className="w-5 h-5" />
                          אחסון חינם ב-Netlify
                        </h4>
                        <p className="text-green-200 text-sm mb-4">
                          האתר שלך יפורסם בכתובת חינמית מקצועית:
                        </p>
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 mb-4">
                          <code className="text-blue-400 font-mono">
                            {template.name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 20)}-[מזהה].netlify.app
                          </code>
                        </div>
                        <div className="text-xs text-green-300 space-y-1">
                          <p>✅ SSL מאובטח אוטומטית</p>
                          <p>✅ זמינות 99.9%</p>
                          <p>✅ מהירות טעינה מעולה</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
                    <CardHeader>
                      <CardTitle className="text-white text-center">רוצה דומיין מותאם אישית?</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-400 text-sm mb-4">
                        תוכל להוסיף דומיין משלך (כמו yourbusiness.com) אחרי הפרסום
                      </p>
                      <Badge className="bg-blue-600 text-white">
                        זמין בשלב הבא - רכישה ידנית במחיר עלות
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              )}

              {currentStep === 'publish' && (
                <PublishingProgress 
                  progress={publishingProgress}
                  isPublishing={isPublishing}
                />
              )}

              {currentStep === 'complete' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">🎉 האתר שלך באוויר!</h3>
                    <p className="text-gray-400 mb-6">האתר שלך פורסם בהצלחה ומוכן לקבלת מבקרים</p>
                    
                    <Card className="bg-gray-800 border-gray-700 max-w-lg mx-auto">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="text-right">
                            <div className="text-white font-semibold mb-1">כתובת האתר שלך:</div>
                            <div className="text-blue-400 font-mono text-sm">{publishedUrl}</div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => window.open(publishedUrl, '_blank')}
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              <ExternalLink className="w-4 h-4 ml-1" />
                              פתח
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => navigator.clipboard.writeText(publishedUrl)}
                              className="bg-gray-600 hover:bg-gray-700"
                            >
                              <Copy className="w-4 h-4 ml-1" />
                              העתק
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <Card className="bg-blue-900/30 border-blue-700/30">
                      <CardContent className="p-6">
                        <h4 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          מה הלאה?
                        </h4>
                        <div className="text-blue-200 text-sm space-y-2">
                          <p>• שתף את הקישור עם לקוחות ועמיתים</p>
                          <p>• צפה בנתוני הביקורים</p>
                          <p>• הוסף דומיין מותאם אישית</p>
                          <p>• עדכן תוכן לפי הצורך</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-900/30 border-green-700/30">
                      <CardContent className="p-6">
                        <h4 className="text-green-300 font-semibold mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          מה קיבלת?
                        </h4>
                        <div className="text-green-200 text-sm space-y-2">
                          <p>• אחסון מקצועי חינם ב-Netlify</p>
                          <p>• תעודת SSL מאובטחת</p>
                          <p>• זמינות גבוהה 24/7</p>
                          <p>• מהירות טעינה מעולה</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <Button
                      onClick={onClose}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
                    >
                      סגור והמשך לעבוד
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
              onClick={currentStep === 'domain' ? startPublishing : nextStep}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentStep === 'domain' ? 'פרסם עכשיו' : 'הבא'}
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
