import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Copy, Eye, EyeOff, Trash2, Plus, ExternalLink, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed?: string;
  status: 'active' | 'inactive';
}

const ApiSettings = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newKeyName, setNewKeyName] = useState('');
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({});
  const [wordpressUrl, setWordpressUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState<string>('');
  const { toast } = useToast();

  // Load existing API keys
  useEffect(() => {
    const savedKeys = localStorage.getItem('leadgrid_api_keys');
    if (savedKeys) {
      setApiKeys(JSON.parse(savedKeys));
    }
  }, []);

  // Save API keys to localStorage
  const saveApiKeys = (keys: ApiKey[]) => {
    setApiKeys(keys);
    localStorage.setItem('leadgrid_api_keys', JSON.stringify(keys));
  };

  // Generate new API key
  const generateApiKey = () => {
    if (!newKeyName.trim()) {
      toast({
        title: "שגיאה",
        description: "אנא הכנס שם עבור המפתח",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API key generation
    setTimeout(() => {
      const newKey: ApiKey = {
        id: Math.random().toString(36).substr(2, 9),
        name: newKeyName.trim(),
        key: `lg_${Math.random().toString(36).substr(2, 32)}`,
        created: new Date().toISOString(),
        status: 'active'
      };

      const updatedKeys = [...apiKeys, newKey];
      saveApiKeys(updatedKeys);
      setNewKeyName('');
      setIsGenerating(false);

      toast({
        title: "מפתח נוצר בהצלחה",
        description: "המפתח החדש מוכן לשימוש",
      });
    }, 1000);
  };

  // Copy API key to clipboard
  const copyToClipboard = async (key: string, keyId: string) => {
    try {
      await navigator.clipboard.writeText(key);
      setCopied(keyId);
      setTimeout(() => setCopied(''), 2000);
      
      toast({
        title: "הועתק בהצלחה",
        description: "המפתח הועתק ללוח",
      });
    } catch (err) {
      toast({
        title: "שגיאת העתקה",
        description: "לא ניתן להעתיק את המפתח",
        variant: "destructive"
      });
    }
  };

  // Toggle key visibility
  const toggleKeyVisibility = (keyId: string) => {
    setShowKeys(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  // Delete API key
  const deleteApiKey = (keyId: string) => {
    const updatedKeys = apiKeys.filter(key => key.id !== keyId);
    saveApiKeys(updatedKeys);
    
    toast({
      title: "מפתח נמחק",
      description: "המפתח הוסר בהצלחה",
    });
  };

  // Format API key for display
  const formatApiKey = (key: string, show: boolean) => {
    if (show) return key;
    return key.substring(0, 8) + '•'.repeat(24) + key.substring(key.length - 4);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6" dir="rtl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">הגדרות API</h1>
        <p className="text-gray-600">נהל את מפתחות ה-API שלך וחבר אתרי WordPress</p>
      </div>

      <Tabs defaultValue="api-keys" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="api-keys">מפתחות API</TabsTrigger>
          <TabsTrigger value="wordpress">WordPress Integration</TabsTrigger>
        </TabsList>

        <TabsContent value="api-keys" className="space-y-6">
          {/* Generate New API Key */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                יצירת מפתח API חדש
              </CardTitle>
              <CardDescription>
                צור מפתח API חדש לחיבור עם WordPress או יישומים אחרים
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <Label htmlFor="keyName">שם המפתח</Label>
                  <Input
                    id="keyName"
                    placeholder="לדוגמה: WordPress Site 1"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={generateApiKey}
                  disabled={isGenerating}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isGenerating ? 'יוצר...' : 'צור מפתח'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Existing API Keys */}
          <Card>
            <CardHeader>
              <CardTitle>מפתחות קיימים</CardTitle>
              <CardDescription>
                {apiKeys.length === 0 ? 'אין מפתחות API' : `יש לך ${apiKeys.length} מפתחות פעילים`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {apiKeys.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>אין מפתחות API עדיין</p>
                  <p className="text-sm">צור מפתח ראשון כדי להתחיל</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {apiKeys.map((apiKey) => (
                    <div key={apiKey.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{apiKey.name}</h3>
                          <p className="text-sm text-gray-500">
                            נוצר: {new Date(apiKey.created).toLocaleDateString('he-IL')}
                          </p>
                        </div>
                        <Badge variant={apiKey.status === 'active' ? 'default' : 'secondary'}>
                          {apiKey.status === 'active' ? 'פעיל' : 'לא פעיל'}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded">
                        <code className="flex-1 text-sm font-mono">
                          {formatApiKey(apiKey.key, showKeys[apiKey.id] || false)}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleKeyVisibility(apiKey.id)}
                        >
                          {showKeys[apiKey.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(apiKey.key, apiKey.id)}
                        >
                          {copied === apiKey.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deleteApiKey(apiKey.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wordpress" className="space-y-6">
          {/* WordPress Integration Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                חיבור WordPress
              </CardTitle>
              <CardDescription>
                הוראות להתקנה וחיבור התוסף ב-WordPress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertDescription>
                  <strong>שלב 1:</strong> וודא שהתקנת את התוסף "LeadGrid Integration Pro" באתר WordPress שלך
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h3 className="font-medium">שלב 2: הגדרת API Key</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>היכנס לאזור הניהול של WordPress</li>
                  <li>לך ל: <code className="bg-gray-100 px-2 py-1 rounded">LeadGrid → Settings</code></li>
                  <li>הכנס את ה-API Key שיצרת למעלה</li>
                  <li>שמור את ההגדרות</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">שלב 3: ייבוא דפים</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>לך ל: <code className="bg-gray-100 px-2 py-1 rounded">LeadGrid → Import Pages</code></li>
                  <li>בחר את הדפים שתרצה לייבא</li>
                  <li>הדפים יתורגמו אוטומטית לבלוקים של WordPress</li>
                </ol>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">תכונות התוסף:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• סנכרון אוטומטי של שינויים</li>
                  <li>• תמיכה מלאה בעורך הבלוקים של WordPress</li>
                  <li>• ממשק ניהול מתקדם</li>
                  <li>• אנליטיקס ומעקב ביצועים</li>
                  <li>• מטמון מתקדם לביצועים מיטביים</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Test Connection */}
          <Card>
            <CardHeader>
              <CardTitle>בדיקת חיבור</CardTitle>
              <CardDescription>
                בדוק את החיבור עם אתר WordPress שלך
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="wpUrl">כתובת אתר WordPress</Label>
                <Input
                  id="wpUrl"
                  placeholder="https://yoursite.com"
                  value={wordpressUrl}
                  onChange={(e) => setWordpressUrl(e.target.value)}
                />
              </div>
              <Button 
                className="w-full"
                onClick={() => {
                  if (!wordpressUrl) {
                    toast({
                      title: "שגיאה",
                      description: "אנא הכנס כתובת אתר",
                      variant: "destructive"
                    });
                    return;
                  }
                  
                  toast({
                    title: "בודק חיבור...",
                    description: "בדיקת החיבור עם האתר",
                  });
                  
                  // Simulate connection test
                  setTimeout(() => {
                    toast({
                      title: "חיבור בוצע בהצלחה",
                      description: "האתר מחובר ומוכן לשימוש",
                    });
                  }, 2000);
                }}
              >
                בדוק חיבור
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApiSettings;
