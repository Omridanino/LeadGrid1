
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { ExternalLink, Key, TestTube } from 'lucide-react';

interface NamecheapApiConfigProps {
  onConfigSaved: () => void;
}

export const NamecheapApiConfig = ({ onConfigSaved }: NamecheapApiConfigProps) => {
  const [apiUser, setApiUser] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [useSandbox, setUseSandbox] = useState(true);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const testApiConnection = async () => {
    if (!apiUser || !apiKey) {
      setTestResult('אנא הזן את כל הפרטים');
      return;
    }

    setIsTesting(true);
    setTestResult(null);

    try {
      // Test API connection
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
      
      if (text.includes('CommandResponse Type="OK"')) {
        setTestResult('✅ החיבור ל-Namecheap API מצליח!');
      } else {
        setTestResult('❌ החיבור נכשל - בדוק את הפרטים');
      }
    } catch (error) {
      setTestResult('❌ שגיאה בחיבור - בדוק את הפרטים');
    } finally {
      setIsTesting(false);
    }
  };

  const saveConfiguration = () => {
    // Save to localStorage for now (in production would save to Supabase secrets)
    localStorage.setItem('NAMECHEAP_API_USER', apiUser);
    localStorage.setItem('NAMECHEAP_API_KEY', apiKey);
    localStorage.setItem('NAMECHEAP_SANDBOX', useSandbox.toString());
    
    onConfigSaved();
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="text-center">
        <Key className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">הגדרת Namecheap API</h3>
        <p className="text-gray-400">הזן את פרטי ה-API שלך מ-Namecheap</p>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">פרטי API</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-white">שם משתמש API</Label>
            <Input
              value={apiUser}
              onChange={(e) => setApiUser(e.target.value)}
              placeholder="השם שלך ב-Namecheap"
              className="bg-gray-700 border-gray-600 text-white mt-1"
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
            />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-white">מצב בדיקות (Sandbox)</Label>
            <Switch
              checked={useSandbox}
              onCheckedChange={setUseSandbox}
              className="bg-gray-600"
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
              <Alert className={`${testResult.includes('✅') ? 'border-green-600 bg-green-900/20' : 'border-red-600 bg-red-900/20'}`}>
                <AlertDescription className="text-white">
                  {testResult}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <Button
            onClick={saveConfiguration}
            disabled={!apiUser || !apiKey || !testResult?.includes('✅')}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            שמור הגדרות
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-blue-900/20 border-blue-600/50">
        <CardHeader>
          <CardTitle className="text-blue-300">איך להשיג API מ-Namecheap?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-blue-200 text-sm">
          <div>1. היכנס לחשבון Namecheap שלך</div>
          <div>2. לך ל-Profile → Tools → API Access</div>
          <div>3. הפעל את ה-API ובקש הלבנת IP</div>
          <div>4. העתק את פרטי ה-API לכאן</div>
          
          <Button
            variant="outline"
            size="sm"
            className="mt-2 border-blue-500 text-blue-300 hover:bg-blue-800"
            onClick={() => window.open('https://ap.www.namecheap.com/settings/tools/apiaccess/', '_blank')}
          >
            <ExternalLink className="w-4 h-4 ml-2" />
            פתח Namecheap API
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
