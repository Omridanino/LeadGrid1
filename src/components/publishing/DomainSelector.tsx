
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Search, 
  CheckCircle, 
  AlertCircle, 
  CreditCard,
  Shield,
  Zap
} from 'lucide-react';

interface DomainSelectorProps {
  onDomainSelect: (domain: string) => void;
  selectedDomain: string;
}

export const DomainSelector = ({ onDomainSelect, selectedDomain }: DomainSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [domainSuggestions, setDomainSuggestions] = useState([
    { name: 'yourbusiness.com', price: '₪45/שנה', available: true, popular: true },
    { name: 'yourbusiness.co.il', price: '₪35/שנה', available: true, popular: false },
    { name: 'yourbusiness.net', price: '₪40/שנה', available: true, popular: false },
    { name: 'yourbusiness.org', price: '₪38/שנה', available: false, popular: false },
    { name: 'yourbusiness.shop', price: '₪55/שנה', available: true, popular: false },
  ]);
  const [existingDomain, setExistingDomain] = useState('');

  const searchDomains = () => {
    // Simulate domain search
    const newSuggestions = [
      { name: `${searchTerm}.com`, price: '₪45/שנה', available: true, popular: true },
      { name: `${searchTerm}.co.il`, price: '₪35/שנה', available: true, popular: false },
      { name: `${searchTerm}.net`, price: '₪40/שנה', available: false, popular: false },
      { name: `${searchTerm}.shop`, price: '₪55/שנה', available: true, popular: false },
      { name: `${searchTerm}.online`, price: '₪30/שנה', available: true, popular: false },
    ];
    setDomainSuggestions(newSuggestions);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-white text-xl font-semibold mb-2">בחר דומיין לאתר שלך</h3>
        <p className="text-gray-400">הדומיין הוא הכתובת של האתר שלך באינטרנט</p>
      </div>

      <Tabs defaultValue="new" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800">
          <TabsTrigger value="new" className="text-white">דומיין חדש</TabsTrigger>
          <TabsTrigger value="existing" className="text-white">דומיין קיים</TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="space-y-6">
          {/* Domain Search */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Search className="w-5 h-5" />
                חפש דומיין זמין
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="הקלד את השם שלך..."
                  className="bg-gray-700 border-gray-600 text-white flex-1"
                />
                <Button onClick={searchDomains} className="bg-blue-600 hover:bg-blue-700">
                  חפש
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                לדוגמה: mystore, johnsmith, creativestudio
              </p>
            </CardContent>
          </Card>

          {/* Domain Suggestions */}
          <div className="space-y-3">
            <h4 className="text-white font-medium">דומיינים זמינים:</h4>
            {domainSuggestions.map((domain) => (
              <Card key={domain.name} className={`
                bg-gray-800 border-gray-700 cursor-pointer transition-all
                ${selectedDomain === domain.name ? 'ring-2 ring-blue-500 bg-blue-900/20' : ''}
                ${!domain.available ? 'opacity-50' : 'hover:bg-gray-700'}
              `}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {domain.available ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium">{domain.name}</span>
                          {domain.popular && <Badge className="bg-yellow-500 text-black text-xs">פופולרי</Badge>}
                        </div>
                        <span className="text-sm text-gray-400">
                          {domain.available ? 'זמין' : 'תפוס'}
                        </span>
                      </div>
                    </div>
                    
                    {domain.available && (
                      <div className="text-left">
                        <div className="text-white font-semibold">{domain.price}</div>
                        <Button
                          size="sm"
                          onClick={() => onDomainSelect(domain.name)}
                          className={
                            selectedDomain === domain.name 
                              ? "bg-green-600 hover:bg-green-700" 
                              : "bg-blue-600 hover:bg-blue-700"
                          }
                        >
                          {selectedDomain === domain.name ? 'נבחר' : 'בחר'}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium Domains */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                דומיינים פרמיום
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-300 text-sm">
                דומיינים קצרים ומזכירים במיוחד לעסק שלך
              </p>
              <div className="space-y-2">
                {['shop.co.il', 'store.com', 'best.shop'].map((domain) => (
                  <div key={domain} className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                    <span className="text-white">{domain}</span>
                    <span className="text-yellow-400 font-semibold">₪150/שנה</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="existing" className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="w-5 h-5" />
                חבר דומיין קיים
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white text-sm font-medium">הדומיין שלך</Label>
                <Input
                  value={existingDomain}
                  onChange={(e) => setExistingDomain(e.target.value)}
                  placeholder="mydomain.com"
                  className="bg-gray-700 border-gray-600 text-white mt-2"
                />
                <p className="text-xs text-gray-400 mt-1">
                  הקלד את הדומיין המלא שלך (כולל .com/.co.il וכו')
                </p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div className="text-sm">
                    <div className="text-blue-300 font-medium mb-1">הוראות חיבור:</div>
                    <div className="text-blue-200 space-y-1 text-xs">
                      <p>1. היכנס לחשבון הדומיין שלך אצל הספק</p>
                      <p>2. הוסף רשומת CNAME שמפנה ל: lovable.app</p>
                      <p>3. נאמת את החיבור אוטומטית</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => onDomainSelect(existingDomain)}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!existingDomain}
              >
                אמת וחבר דומיין
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Pricing Info */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-4 h-4" />
              <span>כלול: SSL, DNS, תמיכה 24/7</span>
            </div>
            <Badge variant="outline" className="border-green-500 text-green-400">
              ללא עמלות נוספות
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
