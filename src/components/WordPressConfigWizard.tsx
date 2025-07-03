
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ExternalLink, 
  Key, 
  CheckCircle, 
  AlertTriangle,
  Copy,
  Eye,
  EyeOff
} from 'lucide-react';

interface WordPressConfigWizardProps {
  onComplete: () => void;
  onSkip: () => void;
}

export const WordPressConfigWizard = ({ onComplete, onSkip }: WordPressConfigWizardProps) => {
  const [step, setStep] = useState(1);
  const [credentials, setCredentials] = useState({
    clientId: '',
    clientSecret: ''
  });
  const [showSecret, setShowSecret] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const redirectUri = `${window.location.origin}/auth/wordpress/callback`;

  const handleSaveCredentials = async () => {
    if (!credentials.clientId || !credentials.clientSecret) {
      alert('נא למלא את כל השדות');
      return;
    }

    setIsVerifying(true);
    
    try {
      // Store credentials in environment variables (for this demo, we'll use localStorage)
      // In production, these should be stored securely on the server
      localStorage.setItem('WORDPRESS_CLIENT_ID', credentials.clientId);
      localStorage.setItem('WORDPRESS_CLIENT_SECRET', credentials.clientSecret);
      
      // Set them in process.env for the session
      (window as any).process = { env: {} };
      (window as any).process.env.WORDPRESS_CLIENT_ID = credentials.clientId;
      (window as any).process.env.WORDPRESS_CLIENT_SECRET = credentials.clientSecret;
      
      console.log('✅ WordPress.com credentials configured');
      
      setTimeout(() => {
        setIsVerifying(false);
        onComplete();
      }, 2000);
      
    } catch (error) {
      console.error('Failed to save credentials:', error);
      setIsVerifying(false);
      alert('שגיאה בשמירת הפרטים');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('הועתק ללוח!');
  };

  return (
    <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-white text-2xl flex items-center gap-2">
          <Key className="w-6 h-6 text-yellow-400" />
          הגדרת WordPress.com API
        </CardTitle>
        <div className="flex gap-2">
          <Badge variant={step >= 1 ? "default" : "secondary"}>הרשמה</Badge>
          <Badge variant={step >= 2 ? "default" : "secondary"}>הגדרת Application</Badge>
          <Badge variant={step >= 3 ? "default" : "secondary"}>הזנת פרטים</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        
        {step === 1 && (
          <div className="space-y-6">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-right">
                כדי ליצור אתרי WordPress.com אמיתיים, נדרש להירשם כמפתח ב-WordPress.com
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <h3 className="text-white text-lg font-semibold">שלב 1: הרשמה ל-WordPress.com Developer</h3>
              
              <div className="bg-blue-900/30 border border-blue-700/30 p-4 rounded-lg">
                <ol className="text-blue-200 space-y-3 list-decimal list-inside text-right">
                  <li>לך לאתר WordPress.com Developer Portal</li>
                  <li>התחבר עם חשבון WordPress.com שלך (או צור חדש)</li>
                  <li>לחץ על "Create New Application"</li>
                  <li>מלא את פרטי האפליקציה שלך</li>
                </ol>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => window.open('https://developer.wordpress.com/apps/', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  פתח WordPress.com Developer Portal
                </Button>
                
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                >
                  המשך לשלב הבא
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">שלב 2: הגדרת האפליקציה</h3>
            
            <div className="space-y-4">
              <div className="bg-purple-900/30 border border-purple-700/30 p-4 rounded-lg">
                <h4 className="text-purple-200 font-medium mb-3">פרטים למילוי באפליקציה:</h4>
                
                <div className="space-y-3">
                  <div>
                    <Label className="text-gray-300 text-sm">Application Name:</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Input
                        value="LeadGrid WordPress Integration"
                        readOnly
                        className="bg-gray-700 border-gray-600 text-white text-sm"
                      />
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard('LeadGrid WordPress Integration')}
                        className="bg-gray-600 hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-300 text-sm">Description:</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Input
                        value="Landing page builder with WordPress.com integration"
                        readOnly
                        className="bg-gray-700 border-gray-600 text-white text-sm"
                      />
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard('Landing page builder with WordPress.com integration')}
                        className="bg-gray-600 hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-300 text-sm">Website URL:</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Input
                        value={window.location.origin}
                        readOnly
                        className="bg-gray-700 border-gray-600 text-white text-sm"
                      />
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(window.location.origin)}
                        className="bg-gray-600 hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-300 text-sm">Redirect URI (חשוב מאוד!):</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Input
                        value={redirectUri}
                        readOnly
                        className="bg-gray-700 border-gray-600 text-white text-sm"
                      />
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(redirectUri)}
                        className="bg-gray-600 hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription className="text-right">
                  <strong>חשוב:</strong> ודא שה-Redirect URI הועתק בדיוק כפי שמוצג למעלה
                </AlertDescription>
              </Alert>

              <div className="flex gap-4">
                <Button
                  onClick={() => setStep(3)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  השלמתי את ההגדרה - המשך
                </Button>
                
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                >
                  חזור לשלב הקודם
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">שלב 3: הזנת פרטי ה-API</h3>
            
            <div className="space-y-4">
              <Alert>
                <Key className="h-4 w-4" />
                <AlertDescription className="text-right">
                  אחרי יצירת האפליקציה, תקבל Client ID ו-Client Secret. הזן אותם כאן:
                </AlertDescription>
              </Alert>

              <div>
                <Label htmlFor="clientId" className="text-gray-300">Client ID</Label>
                <Input
                  id="clientId"
                  type="text"
                  value={credentials.clientId}
                  onChange={(e) => setCredentials(prev => ({ ...prev, clientId: e.target.value }))}
                  placeholder="הזן את Client ID מ-WordPress.com"
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                />
              </div>

              <div>
                <Label htmlFor="clientSecret" className="text-gray-300">Client Secret</Label>
                <div className="relative mt-1">
                  <Input
                    id="clientSecret"
                    type={showSecret ? "text" : "password"}
                    value={credentials.clientSecret}
                    onChange={(e) => setCredentials(prev => ({ ...prev, clientSecret: e.target.value }))}
                    placeholder="הזן את Client Secret מ-WordPress.com"
                    className="bg-gray-700 border-gray-600 text-white pr-12"
                  />
                  <Button
                    type="button"
                    onClick={() => setShowSecret(!showSecret)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-transparent hover:bg-gray-600"
                  >
                    {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleSaveCredentials}
                  disabled={!credentials.clientId || !credentials.clientSecret || isVerifying}
                  className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                >
                  {isVerifying ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      מאמת...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      שמור והתחל
                    </>
                  )}
                </Button>
                
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700"
                  disabled={isVerifying}
                >
                  חזור לשלב הקודם
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-gray-700 pt-6">
          <Button
            onClick={onSkip}
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            דלג לעת עתה (ישתמש במצב דמו)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
