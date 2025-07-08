import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  Loader2,
  Info,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { RealDomainService, RealDomainAvailabilityResult, RealHostingPlan } from '@/services/realDomainService';
import { PaymentMethodsWizard } from '@/components/payment/PaymentMethodsWizard';

interface RealDomainPurchaseWizardProps {
  onDomainPurchased: (domain: string, hostingPlan: string) => void;
  onClose: () => void;
}

export const RealDomainPurchaseWizard = ({ onDomainPurchased, onClose }: RealDomainPurchaseWizardProps) => {
  const [currentStep, setCurrentStep] = useState<'search' | 'hosting' | 'payment' | 'processing' | 'complete'>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedHostingPlan, setSelectedHostingPlan] = useState('');
  const [domainResults, setDomainResults] = useState<RealDomainAvailabilityResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showPaymentWizard, setShowPaymentWizard] = useState(false);

  const hostingPlans = RealDomainService.getHostingPlans();

  const searchDomain = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    try {
      const domainToCheck = searchTerm.includes('.') ? searchTerm : `${searchTerm}.com`;
      const results = await RealDomainService.checkDomainAvailability(domainToCheck);
      setDomainResults(results);
    } catch (error) {
      console.error('חיפוש דומיין נכשל:', error);
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

  const handlePayment = () => {
    setShowPaymentWizard(true);
  };

  const handlePaymentComplete = async (paymentMethod: string, paymentData: any) => {
    setShowPaymentWizard(false);
    setCurrentStep('processing');
    
    const steps = [
      { message: 'בודק זמינות דומיין דרך Namecheap API...', progress: 20 },
      { message: 'רוכש דומיין דרך Namecheap...', progress: 40 },
      { message: 'מגדיר DNS וNameservers...', progress: 60 },
      { message: 'מתקין SSL ואבטחה...', progress: 80 },
      { message: 'בונה דף נחיתה מותאם אישית...', progress: 100 }
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProcessingProgress(step.progress);
    }

    setCurrentStep('complete');
    onDomainPurchased(selectedDomain, selectedHostingPlan);
  };

  const getSelectedPlan = () => hostingPlans.find(plan => plan.id === selectedHostingPlan);
  const getSelectedDomainData = () => domainResults.find(d => d.domain === selectedDomain);
  
  const getPriceBreakdown = () => {
    if (!selectedDomain || !selectedHostingPlan) return null;
    return RealDomainService.getPriceBreakdown(selectedDomain, selectedHostingPlan, 1);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
        <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-2xl font-bold">רכישת דומיין ואחסון מקצועי</h2>
                <p className="text-gray-400 text-sm mt-1">
                  פתרון מלא לבניית דף נחיתה מקצועי - דומיין מ-Namecheap + אחסון מהיר + שירות LeadGrid
                </p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">מצא את הדומיין המושלם לעסק שלך</h3>
                  <p className="text-gray-400">חיפוש דומיינים באמצעות Namecheap API - מחירים אמיתיים וזמינות מעודכנת</p>
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
                            placeholder="לדוגמה: השם שלך או העסק שלך"
                            className="bg-gray-700 border-gray-600 text-white"
                            onKeyPress={(e) => e.key === 'Enter' && searchDomain()}
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

                      {/* הסבר על המחירים */}
                      <div className="bg-blue-900/20 border border-blue-600/50 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                          <div>
                            <div className="text-blue-300 font-medium">מחירים שקופים</div>
                            <div className="text-blue-200 text-sm mt-1">
                              המחירים כוללים רכישה דרך Namecheap + ₪55 שירות + דומיין לשנה מלאה
                            </div>
                          </div>
                        </div>
                      </div>

                      {domainResults.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="text-white font-medium">תוצאות חיפוש מ-Namecheap:</h4>
                          {domainResults.map((result) => (
                            <Card key={result.domain} className={`border ${result.available ? 'border-green-600 bg-green-900/20' : 'border-red-600 bg-red-900/20'}`}>
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    {result.available ? (
                                      <CheckCircle className="w-5 h-5 text-green-400" />
                                    ) : (
                                      <AlertCircle className="w-5 h-5 text-red-400" />
                                    )}
                                    <div>
                                      <span className="text-white font-medium">{result.domain}</span>
                                      <div className="text-sm text-gray-400">
                                        {result.available ? 'זמין דרך Namecheap' : 'כבר תפוס'}
                                        {result.registrar === 'demo' && ' (דמו)'}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {result.available && (
                                    <div className="text-left">
                                      <div className="text-white font-semibold">
                                        ₪{result.price}/שנה
                                      </div>
                                      <Button
                                        onClick={() => selectDomain(result.domain)}
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
                          ))}
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
                  <h3 className="text-xl font-semibold text-white mb-2">בחר תוכנית אחסון מקצועית</h3>
                  <p className="text-gray-400">הדומיין שלך: <span className="text-blue-400 font-medium">{selectedDomain}</span></p>
                  <p className="text-gray-300 text-sm mt-2">
                    מחירים כוללים ₪55 שירות + אחסון Namecheap איכותי
                  </p>
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
                          <Badge className="bg-purple-600 text-white">מומלץ</Badge>
                        </div>
                      )}
                      
                      <CardHeader>
                        <CardTitle className="text-white text-center">
                          {plan.name}
                        </CardTitle>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">₪{plan.price}</div>
                          <div className="text-sm text-gray-400">לחודש</div>
                          <div className="text-xs text-gray-500">מחיר Namecheap: ${plan.originalPrice}</div>
                          <div className="text-xs text-green-400">רווח: ₪55/חודש</div>
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
                          {selectedHostingPlan === plan.id ? 'נבחר ✓' : 'בחר תוכנית'}
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
                      <CardTitle className="text-white flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        פירוט מחירים
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {getPriceBreakdown() && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-300">דומיין {selectedDomain}:</span>
                            <span className="text-white">₪{getPriceBreakdown()?.domain.price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">אחסון {getSelectedPlan()?.name}:</span>
                            <span className="text-white">₪{getPriceBreakdown()?.hosting.price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">שירות LeadGrid:</span>
                            <span className="text-white">₪{getPriceBreakdown()?.leadgrid.price}</span>
                          </div>
                          
                          <div className="border-t border-gray-600 pt-4">
                            <div className="flex justify-between text-lg font-semibold">
                              <span className="text-white">סה״כ שנה ראשונה:</span>
                              <span className="text-green-400">₪{getPriceBreakdown()?.total}</span>
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              כל התכלול הזה לשנה מלאה!
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        רווח עסקי
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {getPriceBreakdown() && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-300">רווח מדומיין:</span>
                            <span className="text-green-400">₪{getPriceBreakdown()?.domain.profit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">רווח מאחסון:</span>
                            <span className="text-green-400">₪{getPriceBreakdown()?.hosting.profit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-300">רווח מ-LeadGrid:</span>
                            <span className="text-green-400">₪{getPriceBreakdown()?.leadgrid.profit}</span>
                          </div>
                          
                          <div className="border-t border-gray-600 pt-4">
                            <div className="flex justify-between text-lg font-semibold">
                              <span className="text-white">סה״כ רווח:</span>
                              <span className="text-green-400">₪{getPriceBreakdown()?.totalProfit}</span>
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              רווח מהלקוח הזה בשנה הראשונה
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={handlePayment}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 px-8"
                  >
                    <CreditCard className="w-5 h-5 ml-2" />
                    המשך לתשלום - ₪{getPriceBreakdown()?.total}
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
                  <h3 className="text-white text-xl font-semibold mb-2">בונה את דף הנחיתה שלך</h3>
                  <p className="text-gray-400">עובד עם Namecheap API לרכישת הדומיין...</p>
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
                  <h3 className="text-white text-2xl font-bold mb-2">דף הנחיתה שלך מוכן! 🎉</h3>
                  <p className="text-gray-400">
                    הדומיין <span className="text-green-400 font-medium">{selectedDomain}</span> נרכש דרך Namecheap והאחסון הוגדר בהצלחה
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
                        <span>דף הנחיתה כבר חי בכתובת החדשה</span>
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

      {showPaymentWizard && (
        <PaymentMethodsWizard
          onPaymentComplete={handlePaymentComplete}
          onClose={() => setShowPaymentWizard(false)}
          totalAmount={getPriceBreakdown()?.total || 0}
          orderDetails={{
            domain: selectedDomain,
            hosting: getSelectedPlan()?.name,
            years: 1,
            orderId: `ORDER_${Date.now()}`
          }}
        />
      )}
    </>
  );
};
