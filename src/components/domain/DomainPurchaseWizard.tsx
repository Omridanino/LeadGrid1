
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
  Loader2
} from 'lucide-react';
import { DomainRegistrationService, HostingPlan } from '@/services/domainRegistrationService';

interface DomainPurchaseWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (domain: string, hosting: HostingPlan) => void;
}

type WizardStep = 'search' | 'hosting' | 'payment' | 'processing' | 'complete';

export const DomainPurchaseWizard = ({ isOpen, onClose, onComplete }: DomainPurchaseWizardProps) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedHosting, setSelectedHosting] = useState<HostingPlan | null>(null);
  const [whoisPrivacy, setWhoisPrivacy] = useState(true);
  const [autoRenew, setAutoRenew] = useState(true);
  const [domainYears, setDomainYears] = useState(1);
  const [processingStep, setProcessingStep] = useState('');
  
  const hostingPlans = DomainRegistrationService.getHostingPlans();
  
  const steps = [
    { id: 'search', name: 'חיפוש דומיין', icon: Search },
    { id: 'hosting', name: 'אחסון', icon: Server },
    { id: 'payment', name: 'תשלום', icon: CreditCard },
    { id: 'processing', name: 'עיבוד', icon: Loader2 },
    { id: 'complete', name: 'הושלם', icon: CheckCircle }
  ];

  const searchDomains = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    try {
      const tlds = ['.com', '.co.il', '.net', '.org', '.io'];
      const results = [];
      
      for (const tld of tlds) {
        const domain = searchTerm.toLowerCase().replace(/\s+/g, '') + tld;
        const result = await DomainRegistrationService.checkDomainAvailability(domain);
        results.push({
          domain,
          ...result
        });
      }
      
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching domains:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handlePurchase = async () => {
    if (!selectedDomain || !selectedHosting) return;
    
    setCurrentStep('processing');
    
    try {
      // Step 1: Purchase domain
      setProcessingStep('רוכש דומיין...');
      const domainResult = await DomainRegistrationService.purchaseDomain({
        domain: selectedDomain,
        registrar: 'namecheap',
        years: domainYears,
        whoisPrivacy,
        autoRenew
      });
      
      if (!domainResult.success) {
        throw new Error(domainResult.error);
      }
      
      // Step 2: Setup hosting
      setProcessingStep('מגדיר אחסון...');
      const hostingResult = await DomainRegistrationService.setupHosting(
        selectedDomain, 
        selectedHosting.id
      );
      
      if (!hostingResult.success) {
        throw new Error(hostingResult.error);
      }
      
      // Step 3: Deploy site
      setProcessingStep('מפרסם אתר...');
      const deployResult = await DomainRegistrationService.deploySite(
        selectedDomain,
        'template-id',  // Will be passed from parent
        {}
      );
      
      if (!deployResult.success) {
        throw new Error(deployResult.error);
      }
      
      setCurrentStep('complete');
      onComplete(selectedDomain, selectedHosting);
      
    } catch (error) {
      console.error('Purchase failed:', error);
      // Handle error state
    }
  };

  const getTotalPrice = () => {
    const domainPrice = searchResults.find(r => r.domain === selectedDomain)?.price || 0;
    const hostingPrice = selectedHosting?.price || 0;
    const privacyPrice = whoisPrivacy ? 15 : 0;
    return (domainPrice * domainYears) + hostingPrice + privacyPrice;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">רכישת דומיין ואחסון</h2>
              <p className="text-gray-400 text-sm mt-1">הפוך את האתר שלך לאמיתי עם דומיין מקצועי ואחסון מתקדם</p>
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
                    <h3 className="text-white text-xl font-semibold mb-2">מצא את הדומיין המושלם</h3>
                    <p className="text-gray-400">חפש והשווה דומיינים זמינים</p>
                  </div>

                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex gap-3">
                        <Input
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="הקלד את השם הרצוי..."
                          className="bg-gray-700 border-gray-600 text-white flex-1"
                          onKeyPress={(e) => e.key === 'Enter' && searchDomains()}
                        />
                        <Button 
                          onClick={searchDomains}
                          className="bg-blue-600 hover:bg-blue-700"
                          disabled={isSearching || !searchTerm.trim()}
                        >
                          {isSearching ? <Loader2 className="w-4 h-4 animate-spin ml-2" /> : <Search className="w-4 h-4 ml-2" />}
                          {isSearching ? 'מחפש...' : 'חפש'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {searchResults.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-white font-medium">תוצאות חיפוש:</h4>
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
                                  <div className="text-white font-medium">{result.domain}</div>
                                  <span className="text-sm text-gray-400">
                                    {result.available ? 'זמין לרכישה' : 'תפוס'}
                                  </span>
                                </div>
                              </div>
                              
                              {result.available && (
                                <div className="text-left">
                                  <div className="text-white font-semibold">₪{result.price}/שנה</div>
                                  <Button
                                    size="sm"
                                    onClick={() => setSelectedDomain(result.domain)}
                                    className={
                                      selectedDomain === result.domain 
                                        ? "bg-green-600 hover:bg-green-700" 
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }
                                  >
                                    {selectedDomain === result.domain ? 'נבחר' : 'בחר'}
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
                    <h3 className="text-white text-xl font-semibold mb-2">בחר תוכנית אחסון</h3>
                    <p className="text-gray-400">אחסון מהיר ואמין לאתר שלך</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {hostingPlans.map((plan) => (
                      <Card 
                        key={plan.id} 
                        className={`
                          bg-gray-800 border-gray-700 cursor-pointer transition-all
                          ${selectedHosting?.id === plan.id ? 'ring-2 ring-blue-500 bg-blue-900/20' : 'hover:bg-gray-700'}
                        `}
                        onClick={() => setSelectedHosting(plan)}
                      >
                        <CardHeader>
                          <CardTitle className="text-white text-center">
                            {plan.name}
                            {plan.id === 'professional' && (
                              <Badge className="bg-blue-600 text-white text-xs mr-2">מומלץ</Badge>
                            )}
                          </CardTitle>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white">₪{plan.price}</div>
                            <div className="text-gray-400 text-sm">/שנה</div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Server className="w-4 h-4" />
                              <span className="text-sm">{plan.storage}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Zap className="w-4 h-4" />
                              <span className="text-sm">{plan.bandwidth}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Shield className="w-4 h-4" />
                              <span className="text-sm">{plan.email}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            {plan.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <Button 
                            className={`w-full ${
                              selectedHosting?.id === plan.id 
                                ? 'bg-green-600 hover:bg-green-700' 
                                : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                          >
                            {selectedHosting?.id === plan.id ? 'נבחר' : 'בחר תוכנית'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 'payment' && (
                <></>
              )}

              {currentStep === 'processing' && (
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                  <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">מעבד את ההזמנה</h3>
                    <p className="text-gray-400">{processingStep}</p>
                  </div>
                </div>
              )}

              {currentStep === 'complete' && (
                <></>
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
              {selectedDomain && selectedHosting && (
                <div className="text-white text-sm">
                  סה"כ: ₪{getTotalPrice()}
                </div>
              )}
              
              <Button
                onClick={() => {
                  if (currentStep === 'search' && selectedDomain) {
                    setCurrentStep('hosting');
                  } else if (currentStep === 'hosting' && selectedHosting) {
                    setCurrentStep('payment');
                  } else if (currentStep === 'payment') {
                    handlePurchase();
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={
                  (currentStep === 'search' && !selectedDomain) ||
                  (currentStep === 'hosting' && !selectedHosting)
                }
              >
                {currentStep === 'payment' ? 'רכוש עכשיו' : 'הבא'}
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
