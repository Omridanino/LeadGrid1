
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Github,
  Shuffle,
  Play,
  MousePointer
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { PublishingProgress } from './PublishingProgress';
import { RealPublishingService } from '@/services/realPublishingService';
import { GitHubTokenForm } from './GitHubTokenForm';
import { generatePageHTML } from '@/utils/pageGenerator';

interface NewPublishingWizardProps {
  template: TemplateData;
  isOpen: boolean;
  onClose: () => void;
}

type PublishingStep = 'overview' | 'github-setup' | 'domain-choice' | 'publish' | 'complete';

export const NewPublishingWizard = ({ template, isOpen, onClose }: NewPublishingWizardProps) => {
  const [currentStep, setCurrentStep] = useState<PublishingStep>('overview');
  const [publishingProgress, setPublishingProgress] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [selectedTempDomain, setSelectedTempDomain] = useState('');
  const [customSubdomain, setCustomSubdomain] = useState('');
  const [hasGitHubToken, setHasGitHubToken] = useState(false);
  const [publishingError, setPublishingError] = useState('');
  const [repoName, setRepoName] = useState('');

  // Check for existing GitHub token on mount
  useEffect(() => {
    setHasGitHubToken(RealPublishingService.hasGitHubToken());
  }, []);

  // Temporary domain options
  const tempDomainOptions = [
    'mysite-demo',
    'quick-site',
    'instant-web',
    'temp-site',
    'my-landing'
  ];

  const steps = [
    { id: 'overview', name: 'סקירה', icon: Sparkles },
    { id: 'github-setup', name: 'GitHub', icon: Github },
    { id: 'domain-choice', name: 'דומיין זמני', icon: Globe },
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

  const generateRandomSubdomain = () => {
    const adjectives = ['amazing', 'awesome', 'brilliant', 'creative', 'elegant', 'fantastic', 'gorgeous', 'incredible'];
    const nouns = ['site', 'web', 'page', 'studio', 'hub', 'space', 'zone', 'app'];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNum = Math.floor(Math.random() * 999) + 1;
    return `${randomAdj}-${randomNoun}-${randomNum}`;
  };

  const startPublishing = async () => {
    if (!selectedTempDomain && !customSubdomain) {
      alert('אנא בחר דומיין זמני או הזן כתובת משלך');
      return;
    }

    setIsPublishing(true);
    setCurrentStep('publish');
    setPublishingError('');
    
    try {
      // Step 1: Prepare files
      setPublishingProgress(20);
      console.log('מכין את קבצי האתר...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 2: Generate HTML
      setPublishingProgress(40);
      console.log('יוצר את תוכן האתר...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Step 3: Create GitHub repository
      setPublishingProgress(60);
      console.log('יוצר repository ב-GitHub...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Step 4: Deploy to GitHub Pages
      setPublishingProgress(80);
      console.log('מפרסם ב-GitHub Pages...');
      
      const finalDomain = customSubdomain || selectedTempDomain;
      
      // Use the real publishing service
      const deployedUrl = await RealPublishingService.publishSite(template, finalDomain);
      
      // Save repo name for instructions
      const timestamp = Date.now().toString().slice(-6);
      const siteName = finalDomain 
        ? finalDomain.replace(/\./g, '-')
        : template.hero.title
            .replace(/[^a-zA-Z0-9\u0590-\u05FF\s]/g, '')
            .replace(/\s+/g, '-')
            .toLowerCase()
            .substring(0, 30);
      
      setRepoName(`${siteName}-${timestamp}`);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Step 5: Complete
      setPublishingProgress(100);
      console.log('האתר פורסם בהצלחה!');

      setPublishedUrl(deployedUrl);
      setCurrentStep('complete');
      setIsPublishing(false);
      
    } catch (error) {
      console.error('Publishing failed:', error);
      setIsPublishing(false);
      setPublishingError(error instanceof Error ? error.message : 'פרסום נכשל - נסה שוב');
      
      // If it's a GitHub Pages manual setup error, show special handling
      if (error instanceof Error && error.message.includes('הפעלה ידנית')) {
        setCurrentStep('complete');
        setPublishedUrl('manual-setup-needed');
      }
    }
  };

  const openSite = () => {
    if (publishedUrl && publishedUrl !== 'manual-setup-needed') {
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
              <h2 className="text-white text-2xl font-bold">🚀 פרסום אמיתי</h2>
              <p className="text-green-400 text-sm mt-1 font-medium">✅ האתר יהיה זמין באמת עם GitHub Pages!</p>
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
                    <h3 className="text-white text-xl font-semibold mb-4">מוכן לראות את האתר שלך חי באינטרנט?</h3>
                    <p className="text-gray-400">האתר יתפרסם באמת עם GitHub Pages ויהיה זמין לכולם</p>
                  </div>

                  <Card className="bg-gradient-to-r from-emerald-900/40 to-green-900/40 border-emerald-700/40 max-w-3xl mx-auto">
                    <CardContent className="p-8">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/40">
                          <Github className="w-8 h-8 text-white" />
                        </div>
                        
                        <h4 className="text-emerald-300 font-bold text-xl mb-3">
                          🌐 פרסום אמיתי עם GitHub Pages
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-emerald-200">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Rocket className="w-4 h-4 text-emerald-400" />
                              <span>פרסום אמיתי ב-GitHub Pages</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-emerald-400" />
                              <span>הדומיין הזמני יופיע ב-URL</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-emerald-400" />
                              <span>SSL מאובטח אוטומטי</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>זמין 24/7 לכל העולם</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>מהירות טעינה מעולה</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>חינם לחלוטין</span>
                            </div>
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
                      <Github className="w-6 h-6 ml-2" />
                      בואו נתחיל! 🚀
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 'github-setup' && (
                <GitHubTokenForm
                  onTokenSaved={() => {
                    setHasGitHubToken(true);
                    nextStep();
                  }}
                  onSkip={nextStep}
                />
              )}

              {currentStep === 'domain-choice' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">בחר דומיין זמני לאתר שלך</h3>
                    <p className="text-gray-400">הדומיין הזמני יופיע בכתובת האתר עד שתרכוש דומיין קבוע</p>
                  </div>

                  <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-400" />
                        אפשרויות דומיין זמני
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <Label className="text-white">בחר דומיין זמני:</Label>
                        <div className="grid grid-cols-1 gap-2">
                          {tempDomainOptions.map((domain) => (
                            <div key={domain} className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id={domain}
                                name="tempDomain"
                                value={domain}
                                checked={selectedTempDomain === domain}
                                onChange={(e) => {
                                  setSelectedTempDomain(e.target.value);
                                  setCustomSubdomain('');
                                }}
                                className="text-blue-600"
                              />
                              <label htmlFor={domain} className="text-gray-300 cursor-pointer">
                                {domain}.github.io
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-600 pt-4">
                        <Label className="text-white mb-2 block">או הזן דומיין משלך:</Label>
                        <div className="flex gap-2">
                          <Input
                            placeholder="השם-שלך"
                            value={customSubdomain}
                            onChange={(e) => {
                              setCustomSubdomain(e.target.value);
                              setSelectedTempDomain('');
                            }}
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                          <Button
                            onClick={() => setCustomSubdomain(generateRandomSubdomain())}
                            variant="outline"
                            className="border-gray-600 text-gray-300"
                          >
                            <Shuffle className="w-4 h-4" />
                          </Button>
                        </div>
                        {customSubdomain && (
                          <p className="text-sm text-gray-400 mt-2">
                            האתר יהיה זמין ב: <span className="text-blue-400">{customSubdomain}.github.io</span>
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-900/30 border-blue-700/30 max-w-2xl mx-auto">
                    <CardContent className="p-4">
                      <div className="text-center text-blue-200 text-sm">
                        <p className="font-medium mb-2">💡 דברים חשובים לדעת:</p>
                        <div className="space-y-1">
                          <p>• הדומיין הזמני יופיע בכתובת האתר</p>
                          <p>• ניתן לשנות לדומיין אמיתי בעתיד</p>
                          <p>• האתר יהיה זמין לכל העולם</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="text-center">
                    <Button 
                      onClick={startPublishing}
                      disabled={!selectedTempDomain && !customSubdomain}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 text-lg font-bold disabled:opacity-50"
                    >
                      <Rocket className="w-5 h-5 ml-2" />
                      פרסם באמת עכשיו! 🚀
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 'publish' && (
                <div>
                  <PublishingProgress 
                    progress={publishingProgress}
                    isPublishing={isPublishing}
                  />
                  
                  {publishingError && (
                    <Card className="bg-red-900/20 border-red-700/50 mt-6">
                      <CardContent className="p-4">
                        <div className="text-red-300 text-sm">
                          <strong>שגיאה:</strong> {publishingError}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {currentStep === 'complete' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/40">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    
                    {publishedUrl === 'manual-setup-needed' ? (
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-4">🎉 Repository נוצר בהצלחה!</h3>
                        <p className="text-yellow-400 mb-6">עכשיו צריך להפעיל את האתר בצעדים פשוטים</p>
                        
                        <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-700/50 max-w-3xl mx-auto mb-6">
                          <CardContent className="p-8 text-right">
                            <h4 className="text-yellow-300 font-bold text-xl mb-6 flex items-center gap-2 justify-center">
                              <Play className="w-6 h-6" />
                              איך להיכנס לאתר שלך - 3 צעדים קלים
                            </h4>
                            
                            <div className="space-y-8">
                              <div className="bg-green-900/30 p-6 rounded-lg border-2 border-green-600/50">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg">1</div>
                                  <h5 className="text-green-200 font-bold text-lg">היכנס ל-GitHub שלך</h5>
                                </div>
                                <div className="mr-13 space-y-3">
                                  <p className="text-green-100 text-base">
                                    פתח את GitHub.com והתחבר לחשבון שלך
                                  </p>
                                  <p className="text-green-100 text-base">
                                    מצא את הפרויקט החדש: <span className="font-mono bg-black/30 px-3 py-1 rounded text-green-300 font-bold">{repoName}</span>
                                  </p>
                                  <Button
                                    onClick={() => window.open('https://github.com', '_blank')}
                                    className="bg-green-600 hover:bg-green-700 mt-3"
                                    size="sm"
                                  >
                                    <ExternalLink className="w-4 h-4 ml-1" />
                                    פתח GitHub עכשיו
                                  </Button>
                                </div>
                              </div>

                              <div className="bg-blue-900/30 p-6 rounded-lg border-2 border-blue-600/50">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-black font-bold text-lg">2</div>
                                  <h5 className="text-blue-200 font-bold text-lg">היכנס להגדרות הפרויקט</h5>
                                </div>
                                <div className="mr-13 space-y-3">
                                  <div className="flex items-center gap-2 text-blue-100">
                                    <MousePointer className="w-4 h-4 text-blue-400" />
                                    <span>לחץ על <span className="font-bold bg-blue-900/50 px-2 py-1 rounded">Settings</span> בתפריט הפרויקט</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-blue-100">
                                    <ArrowRight className="w-4 h-4 text-blue-400" />
                                    <span>גלול למטה ומצא <span className="font-bold bg-blue-900/50 px-2 py-1 rounded">Pages</span></span>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-purple-900/30 p-6 rounded-lg border-2 border-purple-600/50">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-black font-bold text-lg">3</div>
                                  <h5 className="text-purple-200 font-bold text-lg">הפעל את האתר</h5>
                                </div>
                                <div className="mr-13 space-y-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-purple-100">
                                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                      <span>תחת <span className="font-bold">Source</span> בחר: <span className="font-bold bg-purple-900/50 px-2 py-1 rounded">Deploy from a branch</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-100">
                                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                      <span>תחת <span className="font-bold">Branch</span> בחר: <span className="font-bold bg-purple-900/50 px-2 py-1 rounded">main</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-100">
                                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                      <span>לחץ <span className="font-bold bg-green-700 px-3 py-1 rounded text-white">Save</span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 p-6 rounded-lg mt-8 border border-green-600/30">
                              <div className="text-center">
                                <h5 className="text-green-200 font-bold text-xl mb-3">🎉 זהו! האתר שלך יהיה מוכן</h5>
                                <p className="text-green-300 mb-2">
                                  GitHub ישלח לך הודעה כשהאתר מוכן (בדרך כלל תוך 2-5 דקות)
                                </p>
                                <div className="bg-black/30 p-3 rounded-lg mt-4">
                                  <p className="text-yellow-300 font-mono text-sm">
                                    כתובת האתר שלך תהיה:<br />
                                    <span className="text-green-400 font-bold">https://שם-המשתמש-שלך.github.io/{repoName}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-blue-900/20 border-blue-700/30 max-w-2xl mx-auto">
                          <CardContent className="p-6">
                            <div className="text-center space-y-3">
                              <h5 className="text-blue-200 font-medium text-lg">💡 עזרה נוספת</h5>
                              <p className="text-blue-300 text-sm">
                                אם אתה לא מוצא את הפרויקט או נתקע, GitHub ישלח לך מייל עם הקישור המדויק לאתר שלך
                              </p>
                              <p className="text-blue-300 text-sm">
                                החיפוש ב-GitHub: <span className="font-mono bg-blue-900/30 px-2 py-1 rounded">{repoName}</span>
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-4">🎉 האתר שלך חי באינטרנט!</h3>
                        <p className="text-gray-400 mb-6">האתר שלך זמין עכשיו באמת לכל העולם עם הדומיין הזמני שבחרת</p>
                        
                        <Card className="bg-gray-800 border-gray-700 max-w-lg mx-auto mb-6">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div className="text-center">
                                <div className="text-white font-semibold mb-2">🌐 כתובת האתר שלך:</div>
                                <div className="bg-gray-900 p-3 rounded-lg border border-gray-600 mb-3">
                                  <code className="text-blue-400 text-sm break-all">{publishedUrl}</code>
                                </div>
                                <div className="text-green-400 text-sm font-medium mb-4">
                                  ✅ זמין עכשיו באמת עם הדומיין הזמני שבחרת!
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
                    )}
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
              onClick={currentStep === 'domain-choice' ? startPublishing : nextStep}
              disabled={currentStep === 'domain-choice' && !selectedTempDomain && !customSubdomain}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {currentStep === 'domain-choice' ? 'פרסם עכשיו!' : 'הבא'}
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
