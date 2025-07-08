
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Key, 
  TestTube, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle,
  Info,
  Settings
} from 'lucide-react';

interface NamecheapApiSetupProps {
  onConfigured: () => void;
}

export const NamecheapApiSetup = ({ onConfigured }: NamecheapApiSetupProps) => {
  const [apiUser, setApiUser] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [useSandbox, setUseSandbox] = useState(true);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    // בדוק אם כבר הוגדר
    const existingUser = localStorage.getItem('NAMECHEAP_API_USER');
    const existingKey = localStorage.getItem('NAMECHEAP_API_KEY');
    if (existingUser && existingKey) {
      setApiUser(existingUser);
      setApiKey(existingKey);
      setUseSandbox(localStorage.getItem('NAMECHEAP_SANDBOX') === 'true');
      setIsConfigured(true);
      setTestResult('✅ API מוגדר ומוכן לשימוש');
    }
  }, []);

  const testApiConnection = async () => {
    if (!apiUser || !apiKey) {
      setTestResult('❌ אנא הזן את כל הפרטים');
      return;
    }

    setIsTesting(true);
    setTestResult(null);

    try {
      const apiUrl = useSandbox 
        ? 'https://api.sandbox.namecheap.com/xml.response'
        : 'https://api.namecheap.com/xml.response';

      const params = new URLSearchParams({
        ApiUser: apiUser,
        ApiKey: apiKey,
        UserName: apiUser,
        Command: 'namecheap.users.getinfo',
        ClientIp: '127.0.0.1'
      });

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
      });

      const text = await response.text();
      console.log('Namecheap API Response:', text);
      
      if (text.includes('CommandResponse Type="OK"')) {
        setTestResult('✅ החיבור ל-Namecheap API מצליח!');
        setIsConfigured(true);
      } else if (text.includes('API key is invalid')) {
        setTestResult('❌ מפתח ה-API שגוי');
      } else if (text.includes('Access denied')) {
        setTestResult('❌ גישה נדחתה - בדוק הרשאות API');
      } else {
        setTestResult('❌ החיבור נכשל - בדוק את הפרטים');
      }
    } catch (error) {
      console.error('API Test Error:', error);
      setTestResult('❌ שגיאה בחיבור - בדוק את הפרטים');
    } finally {
      setIsTesting(false);
    }
  };

  const saveConfiguration = () => {
    localStorage.setItem('NAMECHEAP_API_USER', apiUser);
    localStorage.setItem('NAMECHEAP_API_KEY', apiKey);
    localStorage.setItem('NAMECHEAP_SANDBOX', useSandbox.toString());
    
    setTestResult('✅ ההגדרות נשמרו בהצלחה!');
    setIsConfigured(true);
    onConfigured();
  };

  const clearConfiguration = () => {
    localStorage.removeItem('NAMECHEAP_API_USER');
    localStorage.removeItem('NAMECHEAP_API_KEY');
    localStorage.removeItem('NAMECHEAP_SANDBOX');
    
    setApiUser('');
    setApiKey('');
    setUseSandbox(true);
    setIsConfigured(false);
    setTestResult(null);
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Key className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">הגדרת Namecheap API</h3>
        <p className="text-gray-400">חבר את חשבון Namecheap שלך לרכישת דומיינים אמיתיים</p>
      </div>

      {isConfigured && (
        <Alert className="border-green-600 bg-green-900/20">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <AlertDescription className="text-green-200">
            Namecheap API מוגדר ומוכן לשימוש! הכל מחובר בהצלחה.
          </AlertDescription>
        </Alert>
      )}

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Settings className="w-5 h-5" />
            פרטי API
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-white">שם משתמש API</Label>
            <Input
              value={apiUser}
              onChange={(e) => setApiUser(e.target.value)}
              placeholder="השם שלך ב-Namecheap"
              className="bg-gray-700 border-gray-600 text-white mt-1"
              disabled={isConfigured}
            />
          </div>
          
          <div>
            <Label className="text-white">מפתח API</Label>
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="המפתח מ-Namecheap Dashboard"
              className="bg-gray-700 border-gray-600 text-white mt-1"
              disabled={isConfigured}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">מצב בדיקות (Sandbox)</Label>
              <p className="text-xs text-gray-400 mt-1">
                הפעל למבחנים, כבה לרכישות אמיתיות
              </p>
            </div>
            <Switch
              checked={useSandbox}
              onCheckedChange={setUseSandbox}
              disabled={isConfigured}
            />
          </div>

          <div className="space-y-2">
            <Button
              onClick={testApiConnection}
              disabled={isTesting || !apiUser || !apiKey}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isTesting ? (
                <>
                  <TestTube className="w-4 h-4 ml-2 animate-pulse" />
                  בודק חיבור...
                </>
              ) : (
                <>
                  <TestTube className="w-4 h-4 ml-2" />
                  בדוק חיבור API
                </>
              )}
            </Button>

            {testResult && (
              <Alert className={`${
                testResult.includes('✅') 
                  ? 'border-green-600 bg-green-900/20' 
                  : 'border-red-600 bg-red-900/20'
              }`}>
                <AlertDescription className="text-white">
                  {testResult}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex gap-2">
            {!isConfigured ? (
              <Button
                onClick={saveConfiguration}
                disabled={!apiUser || !apiKey || !testResult?.includes('✅')}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="w-4 h-4 ml-2" />
                שמור הגדרות
              </Button>
            ) : (
              <Button
                onClick={clearConfiguration}
                variant="outline"
                className="flex-1 border-red-600 text-red-400 hover:bg-red-900/20"
              >
                נקה הגדרות
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-900/20 border-blue-600/50">
        <CardHeader>
          <CardTitle className="text-blue-300 flex items-center gap-2">
            <Info className="w-5 h-5" />
            איך להשיג API מ-Namecheap?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-blue-200 text-sm">
          <div className="space-y-2">
            <div>1. היכנס לחשבון Namecheap שלך</div>
            <div>2. לך ל-Profile → Tools → API Access</div>
            <div>3. הפעל את ה-API ובקש הלבנת IP (Whitelist)</div>
            <div>4. העתק את פרטי ה-API לכאן</div>
          </div>
          
          <div className="border-t border-blue-600/30 pt-3">
            <Badge className="bg-yellow-600 text-white mb-2">
              חשוב לדעת
            </Badge>
            <div className="space-y-1 text-xs">
              <div>• במצב Sandbox - רכישות דמו (ללא תשלום)</div>
              <div>• במצב Production - רכישות אמיתיות (עם תשלום)</div>
              <div>• נדרשת הלבנת IP לשימוש ב-API</div>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="mt-2 border-blue-500 text-blue-300 hover:bg-blue-800/50"
            onClick={() => window.open('https://ap.www.namecheap.com/settings/tools/apiaccess/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 ml-2" />
            פתח Namecheap API Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
