
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  X
} from 'lucide-react';
import { RealDomainService, RealDomainAvailabilityResult, RealHostingPlan, PurchaseRequest } from '@/services/realDomainService';
import { TemplateData } from '@/types/template';

interface RealDomainPurchaseWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (result: any) => void;
  template: TemplateData;
}

type WizardStep = 'search' | 'hosting' | 'details' | 'payment' | 'processing';

export const RealDomainPurchaseWizard = ({ isOpen, onClose, onComplete, template }: RealDomainPurchaseWizardProps) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<RealDomainAvailabilityResult[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<RealHostingPlan | null>(null);
  
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    country: 'ישראל',
    zipCode: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    years: 1,
    autoRenew: true
  });

  const hostingPlans = RealDomainService.getHostingPlans();

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

  const handlePurchase = async () => {
    if (!selectedDomain || !selectedPlan) return;

    setCurrentStep('processing');

    const purchaseRequest: PurchaseRequest = {
      domain: selectedDomain,
      hostingPlan: selectedPlan,
      customerInfo,
      payment: {
        stripeToken: '', // Will be handled by Stripe checkout
        years: paymentInfo.years,
        autoRenew: paymentInfo.autoRenew
      },
      websiteData: template
    };

    try {
      const result = await RealDomainService.purchaseDomainAndHosting(purchaseRequest);
      
      if (result.success) {
        onComplete(result);
      } else {
        alert(`רכישה נכשלה: ${result.error}`);
        setCurrentStep('payment');
      }
    } catch (error) {
      console.error('Purchase failed:', error);
      alert('הרכישה נכשלה. אנא נסה שוב.');
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
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">רכישת דומיין ואחסון</h2>
              <p className="text-gray-400">הפתרון המלא לפרסום האתר שלך</p>
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

              {/* Additional steps would be similar to the original wizard but with real integrations */}
              
              {currentStep === 'processing' && (
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Loader2 className="w-10 h-10 text-white animate-spin" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">מעבד רכישה</h3>
                    <p className="text-gray-400">מעביר לתשלום מאובטח...</p>
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
                if (currentStep === 'hosting') setCurrentStep('search');
                else if (currentStep === 'details') setCurrentStep('hosting');
                else if (currentStep === 'payment') setCurrentStep('details');
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
                if (currentStep === 'search' && selectedDomain) setCurrentStep('hosting');
                else if (currentStep === 'hosting' && selectedPlan) setCurrentStep('details');
                else if (currentStep === 'details') setCurrentStep('payment');
                else if (currentStep === 'payment') handlePurchase();
              }}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={
                (currentStep === 'search' && !selectedDomain) ||
                (currentStep === 'hosting' && !selectedPlan)
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
        )}
      </div>
    </div>
  );
};
