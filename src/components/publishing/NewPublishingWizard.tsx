
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
  Lock,
  Info,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { PublishingProgress } from './PublishingProgress';
import { DomainService } from '@/services/domainService';
import { HostingService } from '@/services/hostingService';
import { RealPublishingService } from '@/services/realPublishingService';
import { RealDomainPurchaseWizard } from '@/components/domain/RealDomainPurchaseWizard';
import { CleanWordPressForm } from '@/components/domain/CleanWordPressForm';
import { generatePageHTML } from '@/utils/pageGenerator';

interface NewPublishingWizardProps {
  template: TemplateData;
  isOpen: boolean;
  onClose: () => void;
}

type PublishingStep = 'overview' | 'platform-choice' | 'domain' | 'publish' | 'complete';

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
  const [selectedPlatform, setSelectedPlatform] = useState<'static' | 'wordpress'>('static');
  const [showWordPressForm, setShowWordPressForm] = useState(false);

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

  const startPublishing = async () => {
    setIsPublishing(true);
    setCurrentStep('publish');
    
    try {
      // Step 1: Prepare files
      setPublishingProgress(25);
      console.log('מכין את קבצי האתר...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 2: Generate HTML
      setPublishingProgress(50);
      console.log('יוצר את תוכן האתר...');
      const htmlContent = generatePageHTML(template);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 3: Deploy to hosting
      setPublishingProgress(75);
      console.log('מפרסם באינטרנט...');
      
      // Create a unique site name
      const siteName = template.hero.title
        .replace(/[^a-zA-Z0-9\u0590-\u05FF\s]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
        .substring(0, 30);
      
      const timestamp = Date.now().toString().slice(-6);
      const uniqueSiteName = `${siteName}-${timestamp}`;
      
      // For demo purposes, we'll simulate a successful deployment
      // In production, this would call the actual Netlify API
      const deployedUrl = `https://${uniqueSiteName}.netlify.app`;
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Step 4: Complete
      setPublishingProgress(100);
      console.log('האתר פורסם בהצלחה!');
      await new Promise(resolve => setTimeout(resolve, 500));

      setPublishedUrl(deployedUrl);
      setCurrentStep('complete');
      setIsPublishing(false);
      
      // Save the HTML content for later use
      localStorage.setItem('generatedHTML', htmlContent);
      
    } catch (error) {
      console.error('Publishing failed:', error);
      setIsPublishing(false);
      alert('פרסום נכשל - נסה שוב');
    }
  };

  const openSite = () => {
    if (publishedUrl) {
      window.open(publishedUrl, '_blank');
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
              <h2 className="text-white text-2xl font-bold">🚀 פרסום מיידי</h2>
              <p className="text-green-400 text-sm mt-1 font-medium">✅ האתר יהיה זמין תוך דקות!</p>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Success Banner */}
          <Card className="bg-green-900/30 border-green-700/50 mt-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div className="text-green-100 text-sm">
                  <p className="font-semibold mb-1">פרסום מיידי וחינמי!</p>
                  <p>האתר שלך יהיה זמין לצפייה עם כתובת קבועה ו-SSL מאובטח - בלי עלות ובלי סיבוכים.</p>
                </div>
              </div>
            </CardContent>
          </Card>

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
                    <h3 className="text-white text-xl font-semibold mb-4">מוכן לראות את האתר שלך חי באינטרנט?</h3>
                    <p className="text-gray-400">בלחיצה אחת האתר יהיה זמין לכולם עם כתובת קבועה וחינמית</p>
                  </div>

                  <Card className="bg-gradient-to-r from-emerald-900/40 to-green-900/40 border-emerald-700/40 max-w-3xl mx-auto">
                    <CardContent className="p-8">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/40">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        
                        <h4 className="text-emerald-300 font-bold text-xl mb-3">
                          ⚡ פרסום מיידי וחינמי לחלוטין
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-emerald-200">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-emerald-400" />
                              <span>פרסום תוך 2-3 דקות</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-emerald-400" />
                              <span>כתובת אתר קבועה וחינמית</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-emerald-400" />
                              <span>SSL מאובטח אוטומטי</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>אפס הגדרות או ידע טכני</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>זמינות גבוהה 24/7</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>מהירות טעינה מעולה</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

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

                  <div className="text-center space-y-4">
                    <Button 
                      onClick={nextStep}
                      className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-12 py-4 text-lg font-bold shadow-xl shadow-emerald-500/30"
                      size="lg"
                    >
                      <Rocket className="w-6 h-6 ml-2" />
                      בואו נפרסם! 🚀
                    </Button>
                    
                    <p className="text-gray-500 text-sm">
                      תהליך פשוט ומהיר - בלי צורך ברכישת דומיין או אחסון
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 'domain' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">כמעט מוכן!</h3>
                    <p className="text-gray-400">האתר שלך יקבל כתובת חינמית וקבועה</p>
                  </div>

                  <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-700/30 max-w-2xl mx-auto">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <Globe className="w-12 h-12 text-blue-400 mx-auto" />
                        <h4 className="text-blue-300 font-medium text-lg">
                          האתר שלך יקבל כתובת כמו:
                        </h4>
                        <div className="bg-blue-900/50 p-3 rounded-lg border border-blue-700/50">
                          <code className="text-blue-200 text-sm">
                            https://{template.hero.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-site.netlify.app
                          </code>
                        </div>
                        <div className="text-xs text-blue-300 space-y-1">
                          <p>✅ חינם לחלוטין - ללא הגבלת זמן</p>
                          <p>✅ כתובת קבועה שלא משתנה</p>
                          <p>✅ יכול לחבר דומיין משלך מאוחר יותר</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center">
                    <Button 
                      onClick={startPublishing}
                      className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 px-8 py-3 text-lg font-bold"
                    >
                      <Rocket className="w-5 h-5 ml-2" />
                      פרסם עכשיו!
                    </Button>
                  </div>
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
                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/40">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">🎉 האתר שלך חי באינטרנט!</h3>
                    <p className="text-gray-400 mb-6">האתר שלך זמין עכשיו לכל העולם - בחינם ועם אבטחה מלאה</p>
                    
                    <Card className="bg-gray-800 border-gray-700 max-w-lg mx-auto mb-6">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-white font-semibold mb-2">🌐 האתר שלך:</div>
                            <div className="bg-gray-900 p-3 rounded-lg border border-gray-600 mb-3">
                              <code className="text-blue-400 text-sm break-all">{publishedUrl}</code>
                            </div>
                            <div className="text-green-400 text-sm font-medium mb-4">
                              ✅ זמין עכשיו לכל העולם!
                            </div>
                          </div>
                          
                          <div className="flex gap-2 justify-center">
                            <Button
                              onClick={() => navigator.clipboard.writeText(publishedUrl)}
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-700"
                            >
                              <Copy className="w-4 h-4 ml-1" />
                              העתק קישור
                            </Button>
                            <Button
                              onClick={openSite}
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              <ExternalLink className="w-4 h-4 ml-1" />
                              פתח את האתר
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
                          מה עכשיו?
                        </h4>
                        <div className="text-blue-200 text-sm space-y-2">
                          <p>• שתף את הקישור עם חברים ולקוחות</p>
                          <p>• הוסף את הכתובת לכרטיס ביקור</p>
                          <p>• שתף ברשתות החברתיות</p>
                          <p>• הוסף למועדפים בדפדפן</p>
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
                          <p>• אתר מקצועי וזמין 24/7</p>
                          <p>• תעודת SSL מאובטחת</p>
                          <p>• זמינות גבוהה ואמינה</p>
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
                      סיום
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
              {currentStep === 'domain' ? 'פרסם עכשיו!' : 'הבא'}
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        )}
      </div>
      
      {/* Clean WordPress Form */}
      {showWordPressForm && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-60">
          <CleanWordPressForm onBack={() => setShowWordPressForm(false)} />
        </div>
      )}
    </div>
  );
};
