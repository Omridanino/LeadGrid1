
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, 
  Search, 
  CheckCircle, 
  AlertCircle, 
  CreditCard,
  Shield,
  Zap,
  Loader2,
  Star
} from 'lucide-react';
import { domainService, DomainSearchResult } from '@/services/domainService';

interface RealDomainSelectorProps {
  onDomainSelect: (domain: string, price?: number) => void;
  selectedDomain: string;
}

export const RealDomainSelector = ({ onDomainSelect, selectedDomain }: RealDomainSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [domainResults, setDomainResults] = useState<DomainSearchResult[]>([]);
  const [existingDomain, setExistingDomain] = useState('');
  const [lastSearchTerm, setLastSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm && searchTerm !== lastSearchTerm) {
      const timer = setTimeout(() => {
        searchDomains();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchTerm]);

  const searchDomains = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    setLastSearchTerm(searchTerm);
    
    try {
      const results = await domainService.searchDomains(searchTerm.trim());
      setDomainResults(results);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleDomainSelect = (domain: DomainSearchResult) => {
    onDomainSelect(domain.name, domain.price);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-white text-xl font-semibold mb-2">בחר דומיין אמיתי לאתר שלך</h3>
        <p className="text-gray-400">חפש וקנה דומיין אמיתי שיהיה שלך לתמיד</p>
      </div>

      <Tabs defaultValue="new" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800">
          <TabsTrigger value="new" className="text-white">דומיין חדש - קנייה</TabsTrigger>
          <TabsTrigger value="existing" className="text-white">דומיين קיים - חיבור</TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="space-y-6">
          {/* Real Domain Search */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Search className="w-5 h-5" />
                חפש דומיין זמין לקנייה
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
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
                  {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['mystore', 'studiocreative', 'bestservices', 'newbusiness'].map(suggestion => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchTerm(suggestion)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real Domain Results */}
          {domainResults.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-medium">תוצאות חיפוש:</h4>
                <Badge className="bg-green-600 text-white">
                  נמצאו {domainResults.filter(d => d.available).length} דומיינים זמינים
                </Badge>
              </div>
              
              {domainResults.map((domain) => (
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
                            {domain.premium && <Badge className="bg-yellow-500 text-black text-xs">פרימיום</Badge>}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>{domain.available ? 'זמין לקנייה' : 'תפוס'}</span>
                            <span>•</span>
                            <span>{domain.registrar}</span>
                          </div>
                        </div>
                      </div>
                      
                      {domain.available && (
                        <div className="text-left">
                          <div className="text-white font-semibold">
                            ₪{domain.price}/שנה
                          </div>
                          <Button
                            size="sm"
                            onClick={() => handleDomainSelect(domain)}
                            className={
                              selectedDomain === domain.name 
                                ? "bg-green-600 hover:bg-green-700" 
                                : "bg-blue-600 hover:bg-blue-700"
                            }
                          >
                            {selectedDomain === domain.name ? 'נבחר' : 'בחר וקנה'}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Premium Domains */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                דומיינים פרימיום - מוכנים לקנייה
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-300 text-sm">
                דומיינים קצרים ומזכירים במיוחד - זמינים לקנייה מיידית
              </p>
              <div className="space-y-2">
                {[
                  { name: 'shop.co.il', price: 299, description: 'מושלם לחנויות' },
                  { name: 'store.com', price: 899, description: 'דומיין אמריקאי יוקרתי' },
                  { name: 'best.shop', price: 199, description: 'חדש ומיוחד' }
                ].map((domain) => (
                  <div key={domain.name} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <span className="text-white font-medium">{domain.name}</span>
                      <p className="text-xs text-gray-400">{domain.description}</p>
                    </div>
                    <div className="text-left">
                      <span className="text-yellow-400 font-semibold">₪{domain.price}/שנה</span>
                      <Button 
                        size="sm" 
                        className="mr-2 bg-yellow-600 hover:bg-yellow-700"
                        onClick={() => onDomainSelect(domain.name, domain.price)}
                      >
                        קנה עכשיו
                      </Button>
                    </div>
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
                חבר דומיין קיים שלך
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white text-sm font-medium">הדומיין הקיים שלך</Label>
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
                    <div className="text-blue-300 font-medium mb-2">הוראות חיבור אוטומטי:</div>
                    <div className="text-blue-200 space-y-1 text-xs">
                      <p>1. נבדוק שהדומיין שייך לך</p>
                      <p>2. נגדיר DNS רשומות אוטומטית</p>
                      <p>3. נתקין SSL חינם</p>
                      <p>4. האתר יהיה חי תוך 5 דקות</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => onDomainSelect(existingDomain)}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!existingDomain}
              >
                אמת וחבר את הדומיין
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Real Payment Info */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <CreditCard className="w-4 h-4" />
              <span>תשלום מאובטח דרך Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-green-500 text-green-400">
                SSL חינם
              </Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-400">
                DNS ניהול חינם
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
