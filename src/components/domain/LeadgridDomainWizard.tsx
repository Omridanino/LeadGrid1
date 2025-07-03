
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Globe, 
  Search, 
  CheckCircle, 
  AlertCircle, 
  CreditCard,
  Server,
  Shield,
  Zap,
  ArrowRight,
  ArrowLeft,
  X,
  Loader2,
  Star,
  Phone,
  Mail,
  MapPin,
  Building,
  Calendar,
  Lock
} from 'lucide-react';
import { LeadgridDomainService, DomainAvailabilityResult, HostingPlan, DomainPurchaseRequest } from '@/services/leadgridDomainService';
import { TemplateData } from '@/types/template';

interface LeadgridDomainWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (result: any) => void;
  template?: TemplateData;
}

type WizardStep = 'search' | 'hosting' | 'details' | 'payment' | 'processing' | 'complete';

export const LeadgridDomainWizard = ({ isOpen, onClose, onComplete, template }: LeadgridDomainWizardProps) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<DomainAvailabilityResult[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<HostingPlan | null>(null);
  const [processingStep, setProcessingStep] = useState('');
  const [purchaseResult, setPurchaseResult] = useState<any>(null);
  
  // Customer details
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    country: 'ישראל',
    zipCode: ''
  });
  
  // Payment details
  const [paymentDetails, setPaymentDetails] = useState({
    method: 'credit_card' as const,
    years: 1,
    autoRenew: true,
    whoisPrivacy: true
  });
  
  const hostingPlans = LeadgridDomainService.getHostingPlans();
  
  const steps = [
    { id: 'search', name: 'חיפוש דומיין', icon: Search },
    { id: 'hosting', name: 'תוכנית אחסון', icon: Server },
    { id: 'details', name: 'פרטים אישיים', icon: Building },
    { id: 'payment', name: 'תשלום', icon: CreditCard },
    { id: 'processing', name: 'עיבוד', icon: Loader2 },
    { id: 'complete', name: 'הושלם', icon: CheckCircle }
  ];

  const searchDomains = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    try {
      const results = await LeadgridDomainService.checkDomainAvailability(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching domains:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handlePurchase = async () => {
    if (!selectedDomain || !selectedPlan) return;
    
    setCurrentStep('processing');
    
    const purchaseRequest: DomainPurchaseRequest = {
      domain: selectedDomain,
      plan: selectedPlan,
      customer: customerDetails,
      billing: {
        address: customerDetails.address,
        city: customerDetails.city,
        country: customerDetails.country,
        zipCode: customerDetails.zipCode
      },
      payment: paymentDetails
    };
    
    try {
      setProcessingStep('מאמת פרטי תשלום...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setProcessingStep('רוכש דומיין...');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setProcessingStep('מגדיר אחסון...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setProcessingStep('מפרסם אתר...');
      const result = await LeadgridDomainService.purchaseDomainAndHosting(purchaseRequest);
      
      setPurchaseResult(result);
      setCurrentStep('complete');
      onComplete(result);
      
    } catch (error) {
      console.error('Purchase failed:', error);
      setPurchaseResult({
        success: false,
        error: 'שגיאה בעיבוד ההזמנה. אנא נסה שוב.'
      });
      setCurrentStep('complete');
    }
  };

  const getTotalPrice = () => {
    const domainPrice = searchResults.find(r => r.domain === selectedDomain)?.price || 0;
    const hostingPrice = selectedPlan?.price || 0;
    const privacyPrice = paymentDetails.whoisPrivacy ? 15 : 0;
    const yearlyMultiplier = paymentDetails.years;
    
    return (domainPrice + hostingPrice + privacyPrice) * yearlyMultiplier;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-5xl h-[95vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-white text-2xl font-bold">LEADGRID - רכישת דומיין ואחסון</h2>
              </div>
              <p className="text-gray-400 text-sm">הפתרון המלא לפרסום האתר שלך באינטרנט - מקצועי, מהיר ובעברית</p>
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
                const isCompleted = steps.findIndex(s => s.id === currentStep) > index;
                
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
              {currentStep === 'search' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">בואו נמצא את הדומיין המושלם</h3>
                    <p className="text-gray-400">הקלד את השם שלך או שם העסק וחפש דומיינים זמינים</p>
                  </div>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex gap-3">
                        <Input
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="שם העסק או הפרויקט שלך..."
                          className="bg-gray-700 border-gray-600 text-white flex-1 text-lg"
                          onKeyPress={(e) => e.key === 'Enter' && searchDomains()}
                        />
                        <Button 
                          onClick={searchDomains}
                          className="bg-blue-600 hover:bg-blue-700 px-8"
                          disabled={isSearching || !searchTerm.trim()}
                        >
                          {isSearching ? <Loader2 className="w-4 h-4 animate-spin ml-2" /> : <Search className="w-4 h-4 ml-2" />}
                          {isSearching ? 'מחפש...' : 'חפש דומיינים'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {searchResults.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-white font-medium flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-400" />
                        דומיינים זמינים לרכישה:
                      </h4>
                      {searchResults.map((result) => (
                        <Card key={result.domain} className={`
                          bg-gray-800 border-gray-700 cursor-pointer transition-all
                          ${selectedDomain === result.domain ? 'ring-2 ring-blue-500 bg-blue-900/20' : ''}
                          ${!result.available ? 'opacity-50' : 'hover:bg-gray-700'}
                        `}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {result.available ? (
                                  <CheckCircle className="w-5 h-5 text-green-400" />
                                ) : (
                                  <AlertCircle className="w-5 h-5 text-red-400" />
                                )}
                                <div>
                                  <div className="text-white font-medium text-lg">{result.domain}</div>
                                  <span className="text-sm text-gray-400">
                                    {result.available ? 'זמין לרכישה מיידית' : 'דומיין תפוס'}
                                  </span>
                                </div>
                              </div>
                              
                              {result.available && (
                                <div className="text-left">
                                  <div className="text-white font-semibold text-lg">₪{result.price}/שנה</div>
                                  <Button
                                    size="sm"
                                    onClick={() => setSelectedDomain(result.domain)}
                                    className={
                                      selectedDomain === result.domain 
                                        ? "bg-green-600 hover:bg-green-700" 
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }
                                  >
                                    {selectedDomain === result.domain ? '✓ נבחר' : 'בחר דומיין'}
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
              )}

              {currentStep === 'hosting' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">בחר תוכנית אחסון מתאימה</h3>
                    <p className="text-gray-400">אחסון מהיר, מאובטח ומותאם לעסק הישראלי</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {hostingPlans.map((plan) => (
                      <Card 
                        key={plan.id} 
                        className={`
                          bg-gray-800 border-gray-700 cursor-pointer transition-all relative
                          ${selectedPlan?.id === plan.id ? 'ring-2 ring-blue-500 bg-blue-900/20' : 'hover:bg-gray-700'}
                          ${plan.recommended ? 'border-yellow-500' : ''}
                        `}
                        onClick={() => setSelectedPlan(plan)}
                      >
                        {plan.recommended && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-yellow-500 text-black font-medium px-3">
                              <Star className="w-3 h-3 ml-1" />
                              מומלץ
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader className="text-center">
                          <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-white">₪{plan.price}</div>
                            <div className="text-gray-400">לשנה</div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Server className="w-4 h-4 text-blue-400" />
                              <span className="text-sm">{plan.storage} אחסון</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Zap className="w-4 h-4 text-yellow-400" />
                              <span className="text-sm">{plan.bandwidth} תעבורה</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Mail className="w-4 h-4 text-green-400" />
                              <span className="text-sm">
                                {plan.email === -1 ? 'אימיילים ללא הגבלה' : `${plan.email} תיבות אימיל`}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Shield className="w-4 h-4 text-purple-400" />
                              <span className="text-sm">{plan.support}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {plan.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button 
                            className={`w-full ${
                              selectedPlan?.id === plan.id 
                                ? 'bg-green-600 hover:bg-green-700' 
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                          >
                            {selectedPlan?.id === plan.id ? '✓ תוכנית נבחרה' : 'בחר תוכנית'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 'details' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">פרטים אישיים ולחיוב</h3>
                    <p className="text-gray-400">נדרשים לרישום הדומיין ויצירת החשבון</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Building className="w-5 h-5" />
                          פרטים אישיים
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label className="text-white">שם מלא *</Label>
                          <Input
                            value={customerDetails.name}
                            onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="השם המלא שלך"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-white">אימיל *</Label>
                          <Input
                            type="email"
                            value={customerDetails.email}
                            onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="your@email.com"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-white">טלפון *</Label>
                          <Input
                            value={customerDetails.phone}
                            onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="050-1234567"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-white">חברה (אופציונלי)</Label>
                          <Input
                            value={customerDetails.company}
                            onChange={(e) => setCustomerDetails({...customerDetails, company: e.target.value})}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="שם החברה"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          כתובת לחיוב
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label className="text-white">כתובת *</Label>
                          <Input
                            value={customerDetails.address}
                            onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="רחוב ומספר בית"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-white">עיר *</Label>
                          <Input
                            value={customerDetails.city}
                            onChange={(e) => setCustomerDetails({...customerDetails, city: e.target.value})}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="עיר מגורים"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-white">מדינה</Label>
                          <Select value={customerDetails.country} onValueChange={(value) => setCustomerDetails({...customerDetails, country: value})}>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              <SelectItem value="ישראל">ישראל</SelectItem>
                              <SelectItem value="ארצות הברית">ארצות הברית</SelectItem>
                              <SelectItem value="גרמניה">גרמניה</SelectItem>
                              <SelectItem value="צרפת">צרפת</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-white">מיקוד</Label>
                          <Input
                            value={customerDetails.zipCode}
                            onChange={(e) => setCustomerDetails({...customerDetails, zipCode: e.target.value})}
                            className="bg-gray-700 border-gray-600 text-white"
                            placeholder="12345"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {currentStep === 'payment' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">פרטי תשלום והזמנה</h3>
                    <p className="text-gray-400">סיכום ההזמנה ואישור התשלום</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Order Summary */}
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">סיכום הזמנה</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">דומיין: {selectedDomain}</span>
                            <span className="text-white font-semibold">
                              ₪{searchResults.find(r => r.domain === selectedDomain)?.price || 0}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">תוכנית: {selectedPlan?.name}</span>
                            <span className="text-white font-semibold">₪{selectedPlan?.price || 0}</span>
                          </div>
                          
                          {paymentDetails.whoisPrivacy && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-300">הגנת פרטיות</span>
                              <span className="text-white font-semibold">₪15</span>
                            </div>
                          )}
                          
                          <div className="border-t border-gray-600 pt-3">
                            <div className="flex justify-between items-center text-lg">
                              <span className="text-white font-bold">סה"כ לתשלום:</span>
                              <span className="text-blue-400 font-bold text-xl">₪{getTotalPrice()}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Payment Options */}
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">אפשרויות תשלום</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label className="text-white">תקופת רישום</Label>
                          <Select 
                            value={paymentDetails.years.toString()} 
                            onValueChange={(value) => setPaymentDetails({...paymentDetails, years: parseInt(value)})}
                          >
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              <SelectItem value="1">שנה אחת</SelectItem>
                              <SelectItem value="2">שנתיים (חסכון 10%)</SelectItem>
                              <SelectItem value="3">3 שנים (חסכון 20%)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="autoRenew"
                              checked={paymentDetails.autoRenew}
                              onCheckedChange={(checked) => setPaymentDetails({...paymentDetails, autoRenew: checked as boolean})}
                            />
                            <Label htmlFor="autoRenew" className="text-white text-sm">
                              חידוש אוטומטי (מומלץ)
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="whoisPrivacy"
                              checked={paymentDetails.whoisPrivacy}
                              onCheckedChange={(checked) => setPaymentDetails({...paymentDetails, whoisPrivacy: checked as boolean})}
                            />
                            <Label htmlFor="whoisPrivacy" className="text-white text-sm">
                              הגנת פרטיות (+₪15)
                            </Label>
                          </div>
                        </div>

                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                          <div className="flex items-start gap-2">
                            <Lock className="w-5 h-5 text-blue-400 mt-0.5" />
                            <div className="text-sm">
                              <div className="text-blue-300 font-medium mb-1">תשלום מאובטח:</div>
                              <div className="text-blue-200 space-y-1 text-xs">
                                <p>• כל התשלומים מוצפנים ומאובטחים</p>
                                <p>• תמיכה בכרטיסי אשראי ישראלים</p>
                                <p>• אפשרות לתשלום דרך PayPal או Bit</p>
                                <p>• קבלה וחשבונית עסקית</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {currentStep === 'processing' && (
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Loader2 className="w-10 h-10 text-white animate-spin" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">מעבד את ההזמנה שלך</h3>
                    <p className="text-gray-400 mb-4">{processingStep}</p>
                    <div className="text-sm text-gray-500">
                      זה יכול לקחת מספר דקות, אנא המתן...
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 'complete' && (
                <div className="space-y-6">
                  {purchaseResult?.success ? (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">🎉 מזל טוב! האתר שלך פעיל!</h3>
                      <p className="text-gray-400 text-lg mb-6">
                        ההזמנה הושלמה בהצלחה. האתר שלך כבר חי באינטרנט!
                      </p>

                      <Card className="bg-green-900/20 border-green-700/30 max-w-2xl mx-auto">
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-green-300 font-semibold text-lg">כתובת האתר שלך:</div>
                              <div className="text-white text-xl font-bold">{purchaseResult.siteUrl}</div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-green-300 font-semibold">מספר הזמנה:</div>
                              <div className="text-white font-mono">{purchaseResult.orderId}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {purchaseResult.nextSteps && (
                        <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
                          <CardHeader>
                            <CardTitle className="text-white">השלבים הבאים:</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {purchaseResult.nextSteps.map((step: string, index: number) => (
                                <div key={index} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{step}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-4">אופס! משהו השתבש</h3>
                      <p className="text-gray-400 mb-6">{purchaseResult?.error}</p>
                      
                      <Button 
                        onClick={() => setCurrentStep('payment')}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        נסה שוב
                      </Button>
                    </div>
                  )}
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
                const currentIndex = steps.findIndex(s => s.id === currentStep);
                if (currentIndex > 0) {
                  setCurrentStep(steps[currentIndex - 1].id as WizardStep);
                }
              }}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
              disabled={currentStep === 'search'}
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              קודם
            </Button>
            
            <div className="flex items-center gap-4">
              {selectedDomain && selectedPlan && (
                <div className="text-white font-semibold">
                  סה"כ: ₪{getTotalPrice()}
                </div>
              )}
              
              <Button
                onClick={() => {
                  if (currentStep === 'search' && selectedDomain) {
                    setCurrentStep('hosting');
                  } else if (currentStep === 'hosting' && selectedPlan) {
                    setCurrentStep('details');
                  } else if (currentStep === 'details') {
                    setCurrentStep('payment');
                  } else if (currentStep === 'payment') {
                    handlePurchase();
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 px-8"
                disabled={
                  (currentStep === 'search' && !selectedDomain) ||
                  (currentStep === 'hosting' && !selectedPlan) ||
                  (currentStep === 'details' && (!customerDetails.name || !customerDetails.email || !customerDetails.phone)) ||
                  (currentStep === 'payment' && !paymentDetails.method)
                }
              >
                {currentStep === 'payment' ? (
                  <>
                    <CreditCard className="w-4 h-4 ml-2" />
                    רכוש עכשיו - ₪{getTotalPrice()}
                  </>
                ) : (
                  <>
                    הבא
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
