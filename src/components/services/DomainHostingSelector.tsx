
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Globe, 
  Server, 
  Search, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Info,
  ArrowLeft,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { NamecheapService, NamecheapDomainResult, NamecheapHostingPlan } from '@/services/namecheapService';

interface DomainHostingSelectorProps {
  onContinue: (selections: {
    domain?: string;
    hosting?: NamecheapHostingPlan;
    totalPrice: number;
  }) => void;
  onGoBack: () => void;
}

export const DomainHostingSelector = ({ onContinue, onGoBack }: DomainHostingSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [domainResults, setDomainResults] = useState<NamecheapDomainResult[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedHosting, setSelectedHosting] = useState<NamecheapHostingPlan | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showOptional, setShowOptional] = useState(false);

  const hostingPlans = NamecheapService.getHostingPlans();

  const searchDomains = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    try {
      const results = await NamecheapService.checkDomainAvailability(searchTerm);
      setDomainResults(results);
    } catch (error) {
      console.error('חיפוש דומיין נכשל:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    
    if (selectedDomain) {
      const domainData = domainResults.find(d => d.domain === selectedDomain);
      if (domainData) total += domainData.price;
    }
    
    if (selectedHosting) {
      total += selectedHosting.price * 12; // שנה של אחסון
    }
    
    return total;
  };

  const handleContinue = () => {
    onContinue({
      domain: selectedDomain || undefined,
      hosting: selectedHosting || undefined,
      totalPrice: calculateTotalPrice()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">דומיין ואחסון (אופציונלי)</h2>
          <p className="text-gray-300">
            רוצה דומיין מקצועי ואחסון? נוכל לדאוג לכל זה בשבילך
          </p>
        </div>

        {/* Skip Option */}
        <div className="max-w-4xl mx-auto mb-6">
          <Card className="bg-blue-900/20 border-blue-600/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200">
                    יש לך כבר דומיין ואחסון? אין בעיה - אתה יכול לדלג על השלב הזה
                  </span>
                </div>
                <Button
                  onClick={() => onContinue({ totalPrice: 0 })}
                  variant="outline"
                  className="border-blue-500 text-blue-300 hover:bg-blue-800/50"
                >
                  דלג על השלב
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Domain Search */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="w-6 h-6" />
                חיפוש דומיין
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label className="text-white">שם הדומיין</Label>
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="לדוגמה: העסק-שלי"
                    className="bg-gray-700 border-gray-600 text-white mt-1"
                    onKeyPress={(e) => e.key === 'Enter' && searchDomains()}
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={searchDomains}
                    disabled={!searchTerm || isSearching}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                    {isSearching ? 'בודק...' : 'חפש'}
                  </Button>
                </div>
              </div>

              {domainResults.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-white font-medium">תוצאות מ-Namecheap:</h4>
                  {domainResults.map((result) => (
                    <Card 
                      key={result.domain} 
                      className={`
                        cursor-pointer transition-all
                        ${result.available 
                          ? selectedDomain === result.domain 
                            ? 'border-green-500 bg-green-900/20' 
                            : 'border-green-600/50 bg-green-900/10 hover:bg-green-900/20'
                          : 'border-red-600/50 bg-red-900/10 opacity-50'
                        }
                      `}
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
                              <span className="text-white font-medium">{result.domain}</span>
                              <p className="text-sm text-gray-400">
                                {result.available ? 'זמין דרך Namecheap' : 'כבר תפוס'}
                                {result.registrar === 'demo' && ' (דמו)'}
                              </p>
                            </div>
                          </div>
                          
                          {result.available && (
                            <div className="text-left">
                              <div className="text-white font-semibold">
                                ₪{result.price}/שנה
                              </div>
                              <Badge className={
                                selectedDomain === result.domain 
                                  ? "bg-green-600" 
                                  : "bg-blue-600"
                              }>
                                {selectedDomain === result.domain ? 'נבחר ✓' : 'בחר'}
                              </Badge>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Hosting Plans */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Server className="w-6 h-6" />
                תוכניות אחסון
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hostingPlans.map((plan) => (
                  <Card 
                    key={plan.id}
                    className={`
                      relative cursor-pointer transition-all
                      ${selectedHosting?.id === plan.id 
                        ? 'ring-2 ring-blue-500 bg-blue-900/20' 
                        : 'bg-gray-800 hover:bg-gray-750'
                      }
                      ${plan.popular ? 'border-purple-500' : 'border-gray-700'}
                    `}
                    onClick={() => setSelectedHosting(plan)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white">
                          <Sparkles className="w-4 h-4 mr-1" />
                          מומלץ
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-white text-center">
                        {plan.name}
                      </CardTitle>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">₪{plan.price}</div>
                        <div className="text-sm text-gray-400">לחודש</div>
                        <div className="text-xs text-gray-500">
                          Namecheap: ${plan.originalPrice}/חודש
                        </div>
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
                      
                      <Badge className={`w-full justify-center ${
                        selectedHosting?.id === plan.id 
                          ? 'bg-green-600' 
                          : plan.popular 
                            ? 'bg-purple-600'
                            : 'bg-blue-600'
                      }`}>
                        {selectedHosting?.id === plan.id ? 'נבחר ✓' : 'בחר תוכנית'}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price Summary */}
          {(selectedDomain || selectedHosting) && (
            <Card className="bg-green-900/20 border-green-600/50">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-lg">סיכום בחירות:</h4>
                  
                  {selectedDomain && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">דומיין {selectedDomain}:</span>
                      <span className="text-white font-medium">
                        ₪{domainResults.find(d => d.domain === selectedDomain)?.price}/שנה
                      </span>
                    </div>
                  )}
                  
                  {selectedHosting && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">אחסון {selectedHosting.name}:</span>
                      <span className="text-white font-medium">
                        ₪{selectedHosting.price * 12}/שנה
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-600 pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-white">סה״כ נוסף:</span>
                      <span className="text-green-400">₪{calculateTotalPrice()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <Button
              onClick={onGoBack}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזור
            </Button>
            
            <Button
              onClick={handleContinue}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
              size="lg"
            >
              המשך לתשלום
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
