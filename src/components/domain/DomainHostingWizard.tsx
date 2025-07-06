import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Server, 
  Search, 
  CheckCircle, 
  CreditCard,
  Shield,
  Zap,
  ExternalLink,
  ArrowLeft,
  Star,
  Clock,
  Mail,
  HardDrive
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DomainHostingWizardProps {
  onBack: () => void;
}

export const DomainHostingWizard = ({ onBack }: DomainHostingWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedHosting, setSelectedHosting] = useState('');
  const [domainResults, setDomainResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const hostingPlans = [
    {
      id: 'upress-starter',
      provider: 'UPRESS',
      name: 'Starter',
      price: 89,
      originalPrice: 129,
      popular: false,
      features: [
        'דומיין חינם לשנה',
        '10GB אחסון SSD',
        'SSL בחינם',
        'גיבוי יומי',
        '5 תיבות דואר',
        'תמיכה 24/7'
      ],
      link: 'https://www.upress.co.il/wordpress-hosting/'
    },
    {
      id: 'upress-pro',
      provider: 'UPRESS',
      name: 'Professional',
      price: 189,
      originalPrice: 249,
      popular: true,
      features: [
        'דומיין חינם לשנה',
        '50GB אחסון SSD',
        'SSL בחינם',
        'גיבוי יומי',
        '25 תיבות דואר',
        'CDN גלובלי',
        'אנליטיקס מתקדם',
        'תמיכה VIP'
      ],
      link: 'https://www.upress.co.il/wordpress-hosting/'
    },
    {
      id: 'godaddy-basic',
      provider: 'GODADDY',
      name: 'Basic',
      price: 99,
      originalPrice: 149,
      popular: false,
      features: [
        'דומיין חינם לשנה',
        '10GB אחסון',
        'SSL בחינם',
        'גיבוי שבועי',
        '1 תיבת דואר',
        'תמיכה 24/7'
      ],
      link: 'https://il.godaddy.com/hosting/wordpress-hosting'
    },
    {
      id: 'godaddy-deluxe',
      provider: 'GODADDY',
      name: 'Deluxe',
      price: 199,
      originalPrice: 299,
      popular: false,
      features: [
        'דומיין חינם לשנה',
        '25GB אחסון',
        'SSL בחינם',
        'גיבוי יומי',
        '10 תיבות דואר',
        'מהירות משופרת',
        'תמיכה מועדפת'
      ],
      link: 'https://il.godaddy.com/hosting/wordpress-hosting'
    }
  ];

  const searchDomains = async () => {
    if (!searchTerm) return;
    
    setIsSearching(true);
    
    // Simulate domain search
    setTimeout(() => {
      const extensions = ['.com', '.co.il', '.net', '.org', '.shop', '.online'];
      const results = extensions.map(ext => ({
        domain: `${searchTerm}${ext}`,
        available: Math.random() > 0.3,
        price: ext === '.co.il' ? 35 : ext === '.com' ? 65 : Math.floor(Math.random() * 50) + 30,
        provider: ext === '.co.il' ? 'UPRESS' : 'GODADDY'
      }));
      
      setDomainResults(results);
      setIsSearching(false);
    }, 2000);
  };

  const handleDomainSelect = (domain: string) => {
    setSelectedDomain(domain);
    toast({
      title: "✅ דומיין נבחר",
      description: `בחרת בדומיין: ${domain}`,
    });
  };

  const handleHostingSelect = (planId: string) => {
    setSelectedHosting(planId);
    const plan = hostingPlans.find(p => p.id === planId);
    toast({
      title: "📦 חבילת אחסון נבחרה",
      description: `בחרת בחבילה: ${plan?.name} מ-${plan?.provider}`,
    });
  };

  const proceedToPurchase = () => {
    if (!selectedDomain || !selectedHosting) {
      toast({
        title: "❌ חסרים פרטים",
        description: "אנא בחר דומיין וחבילת אחסון",
        variant: "destructive"
      });
      return;
    }
    
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto" dir="rtl">
      <div className="max-w-6xl mx-auto p-6 space-y-8 pb-20">
        
        {/* Header */}
        <div className="text-center space-y-6 py-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl shadow-blue-500/25 mb-4">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            רכוש דומיין ואחסון
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            קבל דומיין ואחסון מקצועי לאתר שלך מספקי האחסון המובילים בישראל
          </p>
        </div>

        {currentStep === 1 && (
          <div className="space-y-8">
            {/* Domain Search */}
            <Card className="bg-slate-800/50 border-slate-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Search className="w-6 h-6" />
                  חפש דומיין זמין
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="הקלד את השם שלך..."
                    className="bg-slate-700 border-slate-600 text-white flex-1 text-lg p-4"
                    onKeyPress={(e) => e.key === 'Enter' && searchDomains()}
                  />
                  <Button 
                    onClick={searchDomains} 
                    disabled={isSearching}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  >
                    {isSearching ? <Clock className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                    חפש
                  </Button>
                </div>
                
                {domainResults.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold text-lg">תוצאות חיפוש:</h3>
                    <div className="grid gap-3">
                      {domainResults.map((result) => (
                        <Card key={result.domain} className={`
                          bg-slate-700/50 border-slate-600 cursor-pointer transition-all hover:scale-[1.02]
                          ${selectedDomain === result.domain ? 'ring-2 ring-blue-500 bg-blue-900/20' : ''}
                          ${!result.available ? 'opacity-50' : ''}
                        `}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {result.available ? (
                                  <CheckCircle className="w-5 h-5 text-green-400" />
                                ) : (
                                  <CheckCircle className="w-5 h-5 text-red-400" />
                                )}
                                <div>
                                  <span className="text-white font-medium text-lg">{result.domain}</span>
                                  <div className="text-sm text-gray-400">
                                    {result.available ? 'זמין' : 'תפוס'} • {result.provider}
                                  </div>
                                </div>
                              </div>
                              
                              {result.available && (
                                <div className="text-left">
                                  <div className="text-white font-bold text-lg">₪{result.price}/שנה</div>
                                  <Button
                                    size="sm"
                                    onClick={() => handleDomainSelect(result.domain)}
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
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Next Step Button */}
            {selectedDomain && (
              <div className="text-center">
                <Button
                  onClick={() => setCurrentStep(2)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                >
                  המשך לבחירת אחסון
                  <Zap className="w-5 h-5 mr-2" />
                </Button>
              </div>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">בחר חבילת אחסון</h2>
              <p className="text-gray-400">חבילות אחסון מקצועיות מספקי האחסון המובילים</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hostingPlans.map((plan) => (
                <Card key={plan.id} className={`
                  relative cursor-pointer transition-all duration-300 hover:scale-105
                  ${selectedHosting === plan.id ? 'ring-2 ring-blue-500 bg-blue-900/20' : 'bg-slate-800/50'}
                  ${plan.popular ? 'border-yellow-500 shadow-2xl shadow-yellow-500/20' : 'border-slate-700'}
                `}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 right-4 bg-yellow-500 text-black font-bold">
                      <Star className="w-3 h-3 mr-1" />
                      הכי פופולרי
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="text-sm text-gray-400 font-medium">{plan.provider}</div>
                    <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-white">
                        ₪{plan.price}
                        <span className="text-sm text-gray-400 font-normal">/שנה</span>
                      </div>
                      <div className="text-sm text-gray-400 line-through">₪{plan.originalPrice}</div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => handleHostingSelect(plan.id)}
                      className={`w-full ${
                        selectedHosting === plan.id
                          ? 'bg-green-600 hover:bg-green-700'
                          : plan.popular
                            ? 'bg-yellow-600 hover:bg-yellow-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {selectedHosting === plan.id ? 'נבחר' : 'בחר חבילה'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                onClick={() => setCurrentStep(1)}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                חזור לדומיין
              </Button>
              
              {selectedHosting && (
                <Button
                  onClick={proceedToPurchase}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4"
                >
                  המשך לרכישה
                  <CreditCard className="w-5 h-5 mr-2" />
                </Button>
              )}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">מוכן לרכישה! 🎉</h2>
              <p className="text-gray-400">עכשיו תועבר לרכישת הדומיין והאחסון</p>
            </div>

            {/* Purchase Summary */}
            <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-center">סיכום הזמנה</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded">
                  <span className="text-gray-300">דומיין:</span>
                  <span className="text-white font-medium">{selectedDomain}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-slate-700/50 rounded">
                  <span className="text-gray-300">חבילת אחסון:</span>
                  <span className="text-white font-medium">
                    {hostingPlans.find(p => p.id === selectedHosting)?.name} - {hostingPlans.find(p => p.id === selectedHosting)?.provider}
                  </span>
                </div>

                <div className="border-t border-slate-600 pt-4 space-y-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">מה קורה עכשיו?</h4>
                    <div className="text-blue-200 text-sm space-y-1">
                      <p>1. תועבר לאתר הספק לרכישת הדומיין והאחסון</p>
                      <p>2. לאחר הרכישה, תקבל הוראות התקנה מפורטות</p>
                      <p>3. נעזור לך להעלות את האתר לאחסון החדש</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      onClick={() => {
                        const plan = hostingPlans.find(p => p.id === selectedHosting);
                        window.open(plan?.link, '_blank');
                        toast({
                          title: "🚀 נפתח באתר הספק",
                          description: "השלם את הרכישה ואנחנו נעזור לך עם ההתקנה",
                        });
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      רכוש עכשיו
                    </Button>
                    
                    <Button
                      onClick={() => setCurrentStep(2)}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      שנה בחירה
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center pt-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            חזור למסך הקודם
          </Button>
        </div>

      </div>
    </div>
  );
};
