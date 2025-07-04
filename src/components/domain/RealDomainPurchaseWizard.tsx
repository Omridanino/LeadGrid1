
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Globe, 
  Search, 
  CheckCircle, 
  AlertCircle, 
  CreditCard,
  Server,
  Shield,
  Loader2,
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Star,
  Zap,
  Code,
  User,
  ExternalLink,
  Copy,
  Eye,
  Lock
} from 'lucide-react';
import { RealDomainService, RealDomainAvailabilityResult, RealHostingPlan, PurchaseRequest, WordPressUserData } from '@/services/realDomainService';
import { TemplateData } from '@/types/template';
import { PaymentMethodsWizard } from '@/components/payment/PaymentMethodsWizard';
import { WordPressRegistrationForm } from './WordPressRegistrationForm';
import { WordPressStepByStepGuide } from '../WordPressStepByStepGuide';

interface RealDomainPurchaseWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (result: any) => void;
  template: TemplateData;
}

type WizardStep = 'search' | 'website-type' | 'hosting' | 'wordpress-registration' | 'wordpress-guide' | 'payment' | 'processing' | 'complete';

export const RealDomainPurchaseWizard = ({ isOpen, onClose, onComplete, template }: RealDomainPurchaseWizardProps) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<RealDomainAvailabilityResult[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [websiteType, setWebsiteType] = useState<'static' | 'wordpress'>('wordpress');
  const [selectedPlan, setSelectedPlan] = useState<RealHostingPlan | null>(null);
  const [wordpressUserData, setWordpressUserData] = useState<WordPressUserData | null>(null);
  const [showPaymentWizard, setShowPaymentWizard] = useState(false);
  const [isCreatingWordPress, setIsCreatingWordPress] = useState(false);
  const [orderId] = useState(`ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [completionResult, setCompletionResult] = useState<any>(null);
  
  const [paymentInfo, setPaymentInfo] = useState({
    years: 1,
    autoRenew: true
  });

  const hostingPlans = RealDomainService.getHostingPlans();

  const websiteTypeOptions = [
    {
      id: 'wordpress' as const,
      name: 'אתר WordPress אמיתי',
      description: 'אתר וורדפרס אמיתי עם התקנה מלאה וגישה אמיתית',
      features: [
        'התקנת וורדפרס אמיתית',
        'בסיס נתונים אמיתי',
        'ממשק ניהול מלא',
        'תוספים ועיצובים',
        'גיבוי אוטומטי',
        'תמיכה מלאה'
      ],
      icon: Code,
      color: 'bg-purple-600',
      recommended: true
    },
    {
      id: 'static' as const,
      name: 'אתר סטטי מהיר',
      description: 'האתר שיצרת - מהיר וקל לניהול',
      features: [
        'טעינה מהירה במיוחד',
        'אבטחה גבוהה',
        'קל לעדכון',
        'מתאים לאתרי תדמית'
      ],
      icon: Zap,
      color: 'bg-blue-600',
      recommended: false
    }
  ];

  const searchDomains = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    try {
      const results = await RealDomainService.checkDomainAvailability(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Domain search failed:', error);
      alert('חיפוש הדומיינים נכשל. אנא נסה שוב.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleWordPressRegistration = async (userData: any) => {
    // Check if this is the HTML guide method
    if (userData.method === 'html-export' && userData.showGuide) {
      setCurrentStep('wordpress-guide');
      return;
    }
    
    // Regular WordPress registration
    setIsCreatingWordPress(true);
    setWordpressUserData(userData);
    
    // Move to payment step
    setTimeout(() => {
      setIsCreatingWordPress(false);
      setCurrentStep('payment');
    }, 2000);
  };

  const handlePaymentComplete = async (paymentMethod: string, paymentData: any) => {
    setShowPaymentWizard(false);
    setCurrentStep('processing');

    const purchaseRequest: PurchaseRequest = {
      domain: selectedDomain,
      hostingPlan: selectedPlan!,
      orderId: orderId,
      customerInfo: {
        name: wordpressUserData?.displayName || 'לקוח',
        email: wordpressUserData?.email || 'demo@example.com',
        phone: wordpressUserData?.phone || '050-0000000',
        company: wordpressUserData?.company,
        address: wordpressUserData?.address || '',
        city: wordpressUserData?.city || '',
        country: wordpressUserData?.country || 'ישראל',
        zipCode: wordpressUserData?.zipCode || ''
      },
      payment: {
        stripeToken: '',
        years: paymentInfo.years,
        autoRenew: paymentInfo.autoRenew,
        method: paymentMethod,
        data: paymentData
      },
      websiteData: {
        ...template,
        websiteType,
        wordpressUserData,
        // Add website data from localStorage (from the questionnaire)
        formData: (() => {
          const savedFormData = localStorage.getItem('formData');
          return savedFormData ? JSON.parse(savedFormData) : null;
        })(),
        generatedContent: (() => {
          const savedContent = localStorage.getItem('generatedContent');
          return savedContent ? JSON.parse(savedContent) : null;
        })()
      }
    };

    try {
      console.log('🚀 Starting REAL WordPress site creation process...');
      
      // Process payment first (DEMO mode - always succeeds)
      const paymentResult = await RealDomainService.processPayment(
        getTotalPrice(),
        paymentMethod,
        paymentData,
        orderId,
        purchaseRequest.customerInfo
      );
      
      console.log('💳 Payment processed:', paymentResult);
      
      if (paymentResult.status === 'payment_verified') {
        // Now create the REAL WordPress site
        console.log('🔨 Creating REAL WordPress site...');
        const result = await RealDomainService.purchaseDomainAndHosting(purchaseRequest);
        
        if (result.success && result.wordpressDetails) {
          console.log('✅ WordPress site created successfully!');
          console.log('🌐 Site details:', result.wordpressDetails);
          
          const completionData = {
            success: true,
            orderId,
            domain: selectedDomain,
            paymentMethod,
            paymentData,
            wordpressDetails: result.wordpressDetails,
            status: 'completed',
            message: result.wordpressDetails.isDemo 
              ? 'אתר דמו נוצר בהצלחה! (כ fallback)'
              : 'אתר וורדפרס אמיתי נוצר בהצלחה!',
            customerInfo: purchaseRequest.customerInfo
          };
          
          setCompletionResult(completionData);
          setCurrentStep('complete');
          
        } else {
          throw new Error(result.error || 'יצירת אתר וורדפרס נכשלה');
        }
      } else {
        throw new Error('התשלום לא אושר');
      }
      
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('הרכישה נכשלה: ' + error.message);
      setCurrentStep('payment');
    }
  };

  const getTotalPrice = () => {
    const domainPrice = searchResults.find(r => r.domain === selectedDomain)?.price || 0;
    const hostingPrice = selectedPlan?.price || 0;
    return (domainPrice + hostingPrice) * paymentInfo.years;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('הועתק ללוח!');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
        <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-2xl font-bold">רכישת דומיין ויצירת אתר וורדפרס אמיתי</h2>
                <p className="text-gray-400">יצירת אתר וורדפרס אמיתי עם התוכן שלך</p>
              </div>
              <Button onClick={onClose} size="sm" className="bg-gray-700 hover:bg-gray-600">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-6">
                {currentStep === 'search' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">חיפוש דומיין</h3>
                      <p className="text-gray-400">הקלד את השם הרצוי לאתר שלך</p>
                    </div>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex gap-3">
                          <Input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="שם האתר שלך..."
                            className="bg-gray-700 border-gray-600 text-white flex-1"
                            onKeyPress={(e) => e.key === 'Enter' && searchDomains()}
                          />
                          <Button 
                            onClick={searchDomains}
                            className="bg-blue-600 hover:bg-blue-700"
                            disabled={isSearching || !searchTerm.trim()}
                          >
                            {isSearching ? <Loader2 className="w-4 h-4 animate-spin ml-2" /> : <Search className="w-4 h-4 ml-2" />}
                            חפש
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {searchResults.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-white font-medium">דומיינים זמינים:</h4>
                        {searchResults.map((result) => (
                          <Card 
                            key={result.domain} 
                            className={`bg-gray-800 border-gray-700 cursor-pointer transition-all ${
                              selectedDomain === result.domain ? 'ring-2 ring-blue-500' : 'hover:bg-gray-700'
                            } ${!result.available ? 'opacity-50' : ''}`}
                            onClick={() => result.available && setSelectedDomain(result.domain)}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {result.available ? (
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                  ) : (
                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                  )}
                                  <div>
                                    <div className="text-white font-medium">{result.domain}</div>
                                    <span className="text-sm text-gray-400">
                                      {result.available ? 'זמין' : 'תפוס'}
                                    </span>
                                  </div>
                                </div>
                                
                                {result.available && (
                                  <div className="text-left">
                                    <div className="text-white font-semibold">₪{result.price}/שנה</div>
                                    <Badge className={
                                      selectedDomain === result.domain 
                                        ? "bg-green-600" 
                                        : "bg-blue-600"
                                    }>
                                      {selectedDomain === result.domain ? '✓ נבחר' : 'בחר'}
                                    </Badge>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {currentStep === 'website-type' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">בחירת סוג האתר</h3>
                      <p className="text-gray-400">בחר את הפלטפורמה המתאימה לך</p>
                    </div>

                    <RadioGroup value={websiteType} onValueChange={(value) => setWebsiteType(value as 'static' | 'wordpress')}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {websiteTypeOptions.map((option) => {
                          const Icon = option.icon;
                          return (
                            <Card 
                              key={option.id}
                              className={`bg-gray-800 border-gray-700 cursor-pointer transition-all relative ${
                                websiteType === option.id ? 'ring-2 ring-blue-500' : 'hover:bg-gray-700'
                              }`}
                              onClick={() => setWebsiteType(option.id)}
                            >
                              {option.recommended && (
                                <div className="absolute -top-2 right-4">
                                  <Badge className="bg-green-600 text-white flex items-center gap-1">
                                    <Star className="w-3 h-3" />
                                    מומלץ
                                  </Badge>
                                </div>
                              )}
                              <CardHeader>
                                <div className="flex items-center gap-3">
                                  <div className={`${option.color} p-3 rounded-lg`}>
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <CardTitle className="text-white flex items-center gap-2">
                                      <RadioGroupItem value={option.id} />
                                      {option.name}
                                    </CardTitle>
                                    <p className="text-gray-400 text-sm">{option.description}</p>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="space-y-2">
                                {option.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2 text-gray-300">
                                    <Check className="w-4 h-4 text-green-400" />
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {currentStep === 'hosting' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">בחירת חבילת אחסון</h3>
                      <p className="text-gray-400">בחר את החבילה המתאימה לך</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {hostingPlans.map((plan) => (
                        <Card 
                          key={plan.id}
                          className={`bg-gray-800 border-gray-700 cursor-pointer transition-all ${
                            selectedPlan?.id === plan.id ? 'ring-2 ring-blue-500' : 'hover:bg-gray-700'
                          }`}
                          onClick={() => setSelectedPlan(plan)}
                        >
                          <CardHeader>
                            <CardTitle className="text-white flex items-center justify-between">
                              <span>{plan.name}</span>
                              {selectedPlan?.id === plan.id && (
                                <Badge className="bg-green-600">נבחר</Badge>
                              )}
                            </CardTitle>
                            <div className="text-2xl font-bold text-blue-400">
                              ₪{plan.price}/חודש
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {plan.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-gray-300">
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 'wordpress-registration' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                        <User className="w-6 h-6" />
                        הרשמה לאתר וורדפרס
                      </h3>
                      <p className="text-gray-400">מלא את הפרטים שלך ליצירת אתר וורדפרס אמיתי</p>
                    </div>

                    <WordPressRegistrationForm
                      onSubmit={handleWordPressRegistration}
                      onCancel={() => setCurrentStep('hosting')}
                      isLoading={isCreatingWordPress}
                      selectedDomain={selectedDomain}
                    />

                    {isCreatingWordPress && (
                      <Card className="bg-blue-900/20 border-blue-700/30">
                        <CardContent className="p-6 text-center">
                          <Loader2 className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
                          <h4 className="text-blue-200 font-semibold mb-2">מכין את פרטי הרשמה...</h4>
                          <p className="text-blue-300 text-sm">
                            המערכת מכינה את האתר שלך עם הפרטים שמילאת
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {currentStep === 'wordpress-guide' && (
                  <WordPressStepByStepGuide
                    htmlCode={(() => {
                      // Generate HTML from localStorage data
                      const landingPageData = JSON.parse(localStorage.getItem('generatedPageData') || '{}');
                      return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${landingPageData?.formData?.businessName || 'דף נחיתה'}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        .hero { background: linear-gradient(135deg, #1e40af, #7c3aed); color: white; padding: 60px 20px; text-align: center; }
        .hero h1 { font-size: 2.5rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .btn { background: rgba(255,255,255,0.2); color: white; padding: 12px 24px; border: 2px solid white; border-radius: 6px; text-decoration: none; display: inline-block; margin: 0 10px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    </style>
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>${landingPageData?.generatedContent?.hero?.title || landingPageData?.formData?.businessName || 'ברוכים הבאים'}</h1>
            <p>${landingPageData?.generatedContent?.hero?.subtitle || landingPageData?.formData?.businessDescription || 'פתרונות מתקדמים לעסק שלך'}</p>
            <a href="#contact" class="btn">${landingPageData?.generatedContent?.hero?.button1Text || 'צור קשר'}</a>
            <a href="#about" class="btn">${landingPageData?.generatedContent?.hero?.button2Text || 'למד עוד'}</a>
        </div>
    </section>
    
    <section id="contact" style="padding: 60px 20px; background: #f9fafb; text-align: center;">
        <div class="container">
            <h2>צור קשר</h2>
            <p>נשמח לשמוע מכם ולעזור לכם</p>
            ${landingPageData?.formData?.email ? `<p>📧 ${landingPageData.formData.email}</p>` : ''}
            ${landingPageData?.formData?.phone ? `<p>📞 ${landingPageData.formData.phone}</p>` : ''}
        </div>
    </section>
    
    <footer style="background: #1f2937; color: white; padding: 40px 20px; text-align: center;">
        <p>© ${new Date().getFullYear()} ${landingPageData?.formData?.businessName || 'העסק שלנו'}. כל הזכויות שמורות.</p>
        <p style="color: #6b7280; font-size: 0.9rem;">נוצר עם LeadGrid</p>
    </footer>
</body>
</html>`;
                    })()}
                     onBack={() => setCurrentStep('wordpress-registration')}
                   />
                 )}

                {currentStep === 'payment' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">סיכום הזמנה</h3>
                      <p className="text-gray-400">בדוק את הפרטים לפני המעבר לתשלום</p>
                    </div>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">פירוט הזמנה</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-300">דומיין: {selectedDomain}</span>
                          <span className="text-white">₪{searchResults.find(r => r.domain === selectedDomain)?.price || 0}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-300">אחסון: {selectedPlan?.name}</span>
                          <span className="text-white">₪{selectedPlan?.price || 0}/חודש</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-300">אתר וורדפרס: {wordpressUserData?.websiteTitle}</span>
                          <span className="text-green-400">כלול</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-300">משתמש וורדפרס: {wordpressUserData?.username}</span>
                          <span className="text-green-400">✓</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                          <span className="text-gray-300">תקופה: {paymentInfo.years} שנה</span>
                          <span className="text-white">x{paymentInfo.years}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 text-xl font-bold">
                          <span className="text-white">סה"כ לתשלום:</span>
                          <span className="text-green-400">₪{getTotalPrice()}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex justify-center">
                      <Button
                        onClick={() => setShowPaymentWizard(true)}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                        size="lg"
                      >
                        <CreditCard className="w-5 h-5 ml-2" />
                        בחר אמצעי תשלום
                      </Button>
                    </div>
                  </div>
                )}
                
                {currentStep === 'processing' && (
                  <div className="flex flex-col items-center justify-center py-12 space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <Loader2 className="w-10 h-10 text-white animate-spin" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">יוצר אתר וורדפרס אמיתי</h3>
                      <p className="text-gray-400">מתקין וורדפרס, מגדיר בסיס נתונים ויוצר את המשתמש שלך...</p>
                      <p className="text-green-300 text-sm mt-2">
                        🚀 זהו אתר וורדפרס אמיתי - יהיה זמין תוך דקות ספורות!
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 'complete' && completionResult && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {completionResult.wordpressDetails.isDemo 
                          ? 'אתר דמו נוצר בהצלחה! 🎭' 
                          : 'אתר וורדפרס אמיתי נוצר! 🎉'
                        }
                      </h3>
                      <p className="text-gray-400">
                        {completionResult.wordpressDetails.isDemo 
                          ? 'אתר דמו עובד נוצר עם התוכן שלך (הפעלת fallback)'
                          : 'אתר וורדפרס אמיתי עם התקנה מלאה ובסיס נתונים'
                        }
                      </p>
                    </div>

                    {/* Site Details */}
                    <Card className={`bg-gradient-to-br ${
                      completionResult.wordpressDetails.isDemo 
                        ? 'from-blue-900/50 to-purple-900/50 border-blue-700/50'
                        : 'from-green-900/50 to-blue-900/50 border-green-700/50'
                    }`}>
                      <CardHeader>
                        <CardTitle className="text-white flex items-center justify-center gap-2">
                          <Globe className="w-6 h-6" />
                          {completionResult.wordpressDetails.isDemo 
                            ? 'פרטי האתר הדמו שלך'
                            : 'פרטי האתר האמיתי שלך'
                          }
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Live Site URL */}
                        <div className="bg-gray-800/50 p-4 rounded-lg">
                          <Label className="text-gray-300 text-sm">
                            🌐 {completionResult.wordpressDetails.isDemo ? 'האתר הדמו שלך:' : 'האתר האמיתי שלך:'}
                          </Label>
                          <div className="flex items-center gap-2 mt-2">
                            <Input
                              value={completionResult.wordpressDetails.actualSiteUrl}
                              readOnly
                              className="bg-gray-700 border-gray-600 text-white text-sm"
                            />
                            <Button
                              size="sm"
                              onClick={() => copyToClipboard(completionResult.wordpressDetails.actualSiteUrl)}
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => window.open(completionResult.wordpressDetails.actualSiteUrl, '_blank')}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                           </div>
                         </div>

                         {/* WordPress Login Instructions */}
                         <div className="bg-yellow-900/30 border-yellow-700/30 p-4 rounded-lg">
                           <h4 className="text-yellow-200 font-semibold mb-2">🔑 כיצד להתחבר לאתר החדש</h4>
                           <div className="text-sm text-gray-300 space-y-2">
                             <p><strong>1.</strong> לך לכתובת: <code>{completionResult.wordpressDetails.actualSiteUrl}/wp-login.php</code></p>
                             <p><strong>2.</strong> השתמש בפרטי הכניסה הבאים:</p>
                             <div className="bg-gray-800/50 p-2 rounded text-xs">
                               <p>שם משתמש: <strong>{completionResult.wordpressDetails.username}</strong></p>
                               <p>סיסמה: <strong>{completionResult.wordpressDetails.password}</strong></p>
                             </div>
                             <p><strong>3.</strong> אחרי ההתחברות תוכל לעדכן את התוכן ולנהל את האתר</p>
                           </div>
                         </div>

                        {/* WordPress Admin Access */}
                        <div className={`p-4 rounded-lg border ${
                          completionResult.wordpressDetails.isDemo 
                            ? 'bg-blue-900/30 border-blue-700/30'
                            : 'bg-purple-900/30 border-purple-700/30'
                        }`}>
                          <h4 className="text-purple-200 font-semibold mb-3 flex items-center gap-2">
                            <Lock className="w-5 h-5" />
                            {completionResult.wordpressDetails.isDemo 
                              ? 'ניהול אתר דמו (מדמה וורדפרס)'
                              : 'ניהול וורדפרס אמיתי'
                            }
                          </h4>
                          
                          <div className="space-y-3">
                            <div>
                              <Label className="text-gray-300 text-sm">
                                📱 {completionResult.wordpressDetails.isDemo ? 'פאנל ניהול דמו:' : 'wp-admin אמיתי:'}
                              </Label>
                              <div className="flex items-center gap-2 mt-1">
                                <Input
                                  value={completionResult.wordpressDetails.wpAdminUrl}
                                  readOnly
                                  className="bg-gray-700 border-gray-600 text-white text-sm"
                                />
                                <Button
                                  size="sm"
                                  onClick={() => copyToClipboard(completionResult.wordpressDetails.wpAdminUrl)}
                                  className="bg-purple-600 hover:bg-purple-700"
                                >
                                  <Copy className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  onClick={() => window.open(completionResult.wordpressDetails.wpAdminUrl, '_blank')}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <Label className="text-gray-300 text-sm">👤 שם משתמש:</Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Input
                                    value={completionResult.wordpressDetails.wpUsername}
                                    readOnly
                                    className="bg-gray-700 border-gray-600 text-white text-sm"
                                  />
                                  <Button
                                    size="sm"
                                    onClick={() => copyToClipboard(completionResult.wordpressDetails.wpUsername)}
                                    className="bg-gray-600 hover:bg-gray-700"
                                  >
                                    <Copy className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <Label className="text-gray-300 text-sm">🔑 סיסמה:</Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Input
                                    value={completionResult.wordpressDetails.wpPassword}
                                    readOnly
                                    className="bg-gray-700 border-gray-600 text-white text-sm"
                                  />
                                  <Button
                                    size="sm"
                                    onClick={() => copyToClipboard(completionResult.wordpressDetails.wpPassword)}
                                    className="bg-gray-600 hover:bg-gray-700"
                                  >
                                    <Copy className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Instructions */}
                        <div className={`p-4 rounded-lg border ${
                          completionResult.wordpressDetails.isDemo 
                            ? 'bg-blue-900/20 border-blue-700/30'
                            : 'bg-green-900/20 border-green-700/30'
                        }`}>
                          <h4 className="text-blue-200 font-semibold mb-2">📋 הוראות שימוש:</h4>
                          <div className="text-blue-300 text-sm space-y-1">
                            {completionResult.wordpressDetails.isDemo ? (
                              <>
                                <p>1. לחץ על "צפה באתר" כדי לראות את האתר הדמו שלך</p>
                                <p>2. האתר כולל את כל התוכן שיצרת בשאלון</p>
                                <p>3. זהו אתר דמו עובד המדמה פונקציונליות וורדפרס</p>
                                <p>4. בגרסה האמיתית תקבל אתר וורדפרס מלא!</p>
                              </>
                            ) : (
                              <>
                                <p>1. לחץ על "צפה באתר" כדי לראות את האתר האמיתי שלך</p>
                                <p>2. השתמש בפרטי ההתחברות לכניסה לממשק הניהול</p>
                                <p>3. זהו אתר וורדפרס אמיתי עם כל הפונקציות</p>
                                <p>4. תוכל לערוך, להוסיף תכנים ולנהל את האתר</p>
                              </>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        onClick={() => {
                          onComplete(completionResult);
                          onClose();
                        }}
                        className="bg-green-600 hover:bg-green-700"
                        size="lg"
                      >
                        <CheckCircle className="w-5 h-5 ml-2" />
                        סיום ושמירה
                      </Button>
                      <Button
                        onClick={() => window.open(completionResult.wordpressDetails.actualSiteUrl, '_blank')}
                        variant="outline"
                        className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                        size="lg"
                      >
                        <Globe className="w-5 h-5 ml-2" />
                        צפה באתר
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Footer Navigation */}
          {currentStep !== 'processing' && currentStep !== 'complete' && (
            <div className="p-6 border-t border-gray-800 flex justify-between">
              <Button
                onClick={() => {
                  if (currentStep === 'website-type') setCurrentStep('search');
                  else if (currentStep === 'hosting') setCurrentStep('website-type');
                  else if (currentStep === 'wordpress-registration') setCurrentStep('hosting');
                  else if (currentStep === 'payment') setCurrentStep('wordpress-registration');
                }}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700"
                disabled={currentStep === 'search'}
              >
                <ArrowLeft className="w-4 h-4 ml-2" />
                קודם
              </Button>
              
              <Button
                onClick={() => {
                  if (currentStep === 'search' && selectedDomain) setCurrentStep('website-type');
                  else if (currentStep === 'website-type') setCurrentStep('hosting');
                  else if (currentStep === 'hosting' && selectedPlan) {
                    if (websiteType === 'wordpress') {
                      setCurrentStep('wordpress-registration');
                    } else {
                      setCurrentStep('payment');
                    }
                  }
                  else if (currentStep === 'wordpress-registration' && wordpressUserData) setCurrentStep('payment');
                }}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={
                  (currentStep === 'search' && !selectedDomain) ||
                  (currentStep === 'hosting' && !selectedPlan) ||
                  (currentStep === 'wordpress-registration' && !wordpressUserData)
                }
              >
                {currentStep === 'payment' ? (
                  <>ממתין לبחירת תשלום</>
                ) : (
                  <>
                    הבא
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Payment Methods Wizard */}
      <PaymentMethodsWizard
        isOpen={showPaymentWizard}
        onClose={() => setShowPaymentWizard(false)}
        onComplete={handlePaymentComplete}
        totalAmount={getTotalPrice()}
        orderDetails={{
          domain: selectedDomain,
          hosting: selectedPlan?.name || '',
          years: paymentInfo.years
        }}
      />
    </>
  );
};
