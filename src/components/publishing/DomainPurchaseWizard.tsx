
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Search, 
  CheckCircle, 
  CreditCard,
  Shield,
  Zap,
  Server,
  Clock,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { DomainRegistrationService, DomainPurchaseOptions } from '@/services/domainRegistrationService';

interface DomainPurchaseWizardProps {
  onDomainPurchased: (domain: string, hostingPlan: string) => void;
  onClose: () => void;
}

export const DomainPurchaseWizard = ({ onDomainPurchased, onClose }: DomainPurchaseWizardProps) => {
  const [currentStep, setCurrentStep] = useState<'search' | 'hosting' | 'payment' | 'processing' | 'complete'>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedHostingPlan, setSelectedHostingPlan] = useState('');
  const [domainAvailability, setDomainAvailability] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);

  // תוכניות אחסון עם מרווח של 45%
  const hostingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      originalPrice: 89,
      price: Math.round(89 * 1.45), // 45% מרווח
      features: ['דומיין חינם לשנה', 'SSL אוטומטי', 'גיבוי יומי', 'תמיכה 24/7'],
      storage: '10GB SSD',
      bandwidth: '100GB',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      originalPrice: 189,
      price: Math.round(189 * 1.45),
      features: ['דומיין חינם לשנה', 'SSL אוטומטי', 'CDN גלובלי', 'גיבוי יומי'],
      storage: '50GB SSD',
      bandwidth: '500GB',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      originalPrice: 399,
      price: Math.round(399 * 1.45),
      features: ['דומיין חינם לשנה', 'SSL אוטומטי', 'CDN גלובלי', 'תמיכה VIP'],
      storage: '200GB SSD',
      bandwidth: 'ללא הגבלה',
      popular: false
    }
  ];

  const searchDomain = async () => {
    setIsSearching(true);
    try {
      const result = await DomainRegistrationService.checkDomainAvailability(searchTerm);
      setDomainAvailability(result);
    } catch (error) {
      console.error('Domain search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const selectDomain = (domain: string) => {
    setSelectedDomain(domain);
    setCurrentStep('hosting');
  };

  const selectHostingPlan = (planId: string) => {
    setSelectedHostingPlan(planId);
    setCurrentStep('payment');
  };

  const processPurchase = async () => {
    setCurrentStep('processing');
    
    // סימולציה של תהליך הרכישה
    const steps = [
      { message: 'בודק זמינות דומיין...', progress: 20 },
      { message: 'רוכש דומיין...', progress: 40 },
      { message: 'מגדיר DNS...', progress: 60 },
      { message: 'מתקין SSL...', progress: 80 },
      { message: 'מפעיל אחסון...', progress: 100 }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProcessingProgress(step.progress);
    }

    setCurrentStep('complete');
    onDomainPurchased(selectedDomain, selectedHostingPlan);
  };

  const getSelectedPlan = () => hostingPlans.find(plan => plan.id === selectedHostingPlan);
  const getTotalPrice = () => {
    const plan = getSelectedPlan();
    if (!plan || !domainAvailability) return 0;
    
    // מחיר דומיין עם 45% מרווח
    const domainPrice = Math.round(parseInt(domainAvailability.price.replace(/[^\d]/g, '')) * 1.45);
    return plan.price + domainPrice;
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">רכישת דומיין ואחסון</h2>
              <p className="text-gray-400 text-sm mt-1">פתרון מלא לאתר שלך</p>
            </div>
            <Button onClick={onClose} variant="outline" size="sm">
              סגור
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {currentStep === 'search' && (
            <div className="space-y-6">
              <div className="text-center">
                <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">חפש את הדומיין המושלם</h3>
                <p className="text-gray-400">הזן את השם שתרצה לדומיין שלך</p>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">שם הדומיין</Label>
                      <div className="flex gap-2 mt-2">
                        <Input
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="השם שלך או העסק שלך"
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                        <Button 
                          onClick={searchDomain}
                          disabled={!searchTerm || isSearching}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                          {isSearching ? 'בודק...' : 'חפש'}
                        </Button>
                      </div>
                    </div>

                    {domainAvailability && (
                      <div className="space-y-3">
                        <h4 className="text-white font-medium">תוצאות חיפוש:</h4>
                        <Card className={`border ${domainAvailability.available ? 'border-green-600 bg-green-900/20' : 'border-red-600 bg-red-900/20'}`}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {domainAvailability.available ? (
                                  <CheckCircle className="w-5 h-5 text-green-400" />
                                ) : (
                                  <AlertCircle className="w-5 h-5 text-red-400" />
                                )}
                                <div>
                                  <span className="text-white font-medium">{domainAvailability.domain}</span>
                                  <div className="text-sm text-gray-400">
                                    {domainAvailability.available ? 'זמין לרכישה' : 'כבר תפוס'}
                                  </div>
                                </div>
                              </div>
                              
                              {domainAvailability.available && (
                                <div className="text-left">
                                  <div className="text-white font-semibold">
                                    ₪{Math.round(parseInt(domainAvailability.price.replace(/[^\d]/g, '')) * 1.45)}/שנה
                                  </div>
                                  <Button
                                    onClick={() => selectDomain(domainAvailability.domain)}
                                    className="bg-green-600 hover:bg-green-700 mt-2"
                                    size="sm"
                                  >
                                    בחר דומיין
                                  </Button>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        {domainAvailability.suggestions && (
                          <div className="space-y-2">
                            <h5 className="text-gray-300 text-sm">הצעות חלופיות:</h5>
                            {domainAvailability.suggestions.slice(0, 3).map((suggestion: string) => (
                              <Card key={suggestion} className="bg-gray-800 border-gray-700">
                                <CardContent className="p-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-white">{suggestion}</span>
                                    <Button
                                      onClick={() => selectDomain(suggestion)}
                                      size="sm"
                                      variant="outline"
                                      className="border-gray-600 text-white hover:bg-gray-700"
                                    >
                                      בחר
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 'hosting' && (
            <div className="space-y-6">
              <div className="text-center">
                <Server className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">בחר תוכנית אחסון</h3>
                <p className="text-gray-400">הדומיין שלך: <span className="text-blue-400 font-medium">{selectedDomain}</span></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hostingPlans.map((plan) => (
                  <Card key={plan.id} className={`
                    relative cursor-pointer transition-all
                    ${selectedHostingPlan === plan.id ? 'ring-2 ring-blue-500 bg-blue-900/20' : 'bg-gray-800 hover:bg-gray-750'}
                    ${plan.popular ? 'border-purple-500' : 'border-gray-700'}
                  `}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white">פופולרי</Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-white text-center">
                        {plan.name}
                      </CardTitle>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">₪{plan.price}</div>
                        <div className="text-sm text-gray-400">לחודש</div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="text-gray-300 text-sm">
                          <strong>אחסון:</strong> {plan.storage}
                        </div>
                        <div className="text-gray-300 text-sm">
                          <strong>רוחב פס:</strong> {plan.bandwidth}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        onClick={() => selectHostingPlan(plan.id)}
                        className={`w-full ${
                          selectedHostingPlan === plan.id 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : plan.popular 
                              ? 'bg-purple-600 hover:bg-purple-700'
                              : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        {selectedHostingPlan === plan.id ? 'נבחר' : 'בחר תוכנית'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 'payment' && (
            <div className="space-y-6">
              <div className="text-center">
                <CreditCard className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">סיכום הזמנה</h3>
                <p className="text-gray-400">בדוק את הפרטים לפני התשלום</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">פרטי ההזמנה</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">דומיין:</span>
                      <span className="text-white font-medium">{selectedDomain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">תוכנית אחסון:</span>
                      <span className="text-white font-medium">{getSelectedPlan()?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">אחסון:</span>
                      <span className="text-white">{getSelectedPlan()?.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">רוחב פס:</span>
                      <span className="text-white">{getSelectedPlan()?.bandwidth}</span>
                    </div>
                    
                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span className="text-white">סה״כ:</span>
                        <span className="text-green-400">₪{getTotalPrice()}/שנה</span>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        כולל דומיין + אחסון לשנה שלמה
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      מה אתה מקבל?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">דומיין רשום על שמך</div>
                        <div className="text-gray-400 text-sm">הדומיין יהיה רשום על שמך במלואו</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">SSL אוטומטי</div>
                        <div className="text-gray-400 text-sm">הצפנה מלאה ללא עלות נוספת</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">ניהול DNS מלא</div>
                        <div className="text-gray-400 text-sm">אנחנו מנהלים הכל בשבילך</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">תמיכה 24/7</div>
                        <div className="text-gray-400 text-sm">תמיכה טכנית מלאה</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={processPurchase}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 px-8"
                >
                  <CreditCard className="w-5 h-5 ml-2" />
                  רכוש עכשיו - ₪{getTotalPrice()}
                </Button>
              </div>
            </div>
          )}

          {currentStep === 'processing' && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Loader2 className="w-10 h-10 text-white animate-spin" />
              </div>
              
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">מעבד את הרכישה שלך</h3>
                <p className="text-gray-400">אנא המתן, זה לוקח כמה רגעים...</p>
              </div>

              <div className="max-w-md mx-auto">
                <Progress value={processingProgress} className="h-3" />
                <div className="text-sm text-gray-400 mt-2">{processingProgress}%</div>
              </div>
            </div>
          )}

          {currentStep === 'complete' && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">הרכישה הושלמה! 🎉</h3>
                <p className="text-gray-400">
                  הדומיין <span className="text-green-400 font-medium">{selectedDomain}</span> רכוש בהצלחה
                </p>
              </div>

              <Card className="bg-green-900/20 border-green-600/50 max-w-md mx-auto">
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-green-300">
                      <Clock className="w-4 h-4" />
                      <span>הדומיין יהיה פעיל תוך 15 דקות</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <Shield className="w-4 h-4" />
                      <span>SSL יהיה פעיל תוך שעה</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-300">
                      <Zap className="w-4 h-4" />
                      <span>האתר כבר חי בכתובת החדשה</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                סגור
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
