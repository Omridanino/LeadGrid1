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
  User
} from 'lucide-react';
import { RealDomainService, RealDomainAvailabilityResult, RealHostingPlan, PurchaseRequest, WordPressUserData } from '@/services/realDomainService';
import { TemplateData } from '@/types/template';
import { PaymentMethodsWizard } from '@/components/payment/PaymentMethodsWizard';
import { WordPressRegistrationForm } from './WordPressRegistrationForm';

interface RealDomainPurchaseWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (result: any) => void;
  template: TemplateData;
}

type WizardStep = 'search' | 'website-type' | 'hosting' | 'wordpress-registration' | 'payment' | 'processing';

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
  
  const [paymentInfo, setPaymentInfo] = useState({
    years: 1,
    autoRenew: true
  });

  const hostingPlans = RealDomainService.getHostingPlans();

  const websiteTypeOptions = [
    {
      id: 'wordpress' as const,
      name: 'אתר WordPress מלא',
      description: 'אתר וורדפרס אמיתי עם הרשמה והתחברות אמיתית',
      features: [
        'ממשק ניהול מתקדם',
        'תוספים ועיצובים',
        'בלוג וחנות מובנים',
        'גמישות מקסימלית',
        'הרשמה אמיתית ללקוח'
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

  const handleWordPressRegistration = async (userData: WordPressUserData) => {
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
        name: wordpressUserData?.displayName || 'לקוח דמו',
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
        wordpressUserData
      }
    };

    try {
      console.log('🚀 Starting WordPress site creation process...');
      
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
        // Now create the actual WordPress site
        console.log('🔨 Creating WordPress site...');
        const result = await RealDomainService.purchaseDomainAndHosting(purchaseRequest);
        
        if (result.success && result.wordpressDetails) {
          console.log('✅ WordPress site created successfully!');
          console.log('🌐 Site details:', result.wordpressDetails);
          
          onComplete({
            success: true,
            orderId,
            domain: selectedDomain,
            paymentMethod,
            paymentData,
            wordpressDetails: result.wordpressDetails,
            status: 'completed',
            message: 'אתר וורדפרס נוצר בהצלחה! האתר שלך מוכן.'
          });
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

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
        <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-2xl font-bold">רכישת דומיין ויצירת אתר וורדפרס</h2>
                <p className="text-gray-400">יצירת אתר וורדפרס אמיתי עם הרשמה ללקוח</p>
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
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Loader2 className="w-10 h-10 text-white animate-spin" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold mb-2">יוצר אתר וורדפרס אמיתי</h3>
                      <p className="text-gray-400">מגדיר את הדומיין, האחסון ויוצר את המשתמש שלך...</p>
                      <p className="text-green-300 text-sm mt-2">
                        🚀 האתר יהיה זמין תוך דקות ספורות!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Footer Navigation */}
          {currentStep !== 'processing' && (
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
                  <>ממתין לבחירת תשלום</>
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
