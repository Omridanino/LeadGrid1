
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Settings,
  CheckCircle,
  Copy,
  ExternalLink,
  Key,
  Eye,
  EyeOff
} from 'lucide-react';

interface CleanWordPressFormProps {
  onBack: () => void;
  apiCredentials?: {
    apiKey: string;
    siteId: string;
    created: string;
  };
}

export const CleanWordPressForm = ({ onBack, apiCredentials }: CleanWordPressFormProps) => {
  const [showApiKey, setShowApiKey] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "✅ הועתק!",
      description: `${label} הועתק ללוח`,
    });
  };

  const downloadPlugin = () => {
    // Create download link for the plugin
    const link = document.createElement('a');
    link.href = '/leadgrid-wordpress-plugin.zip';
    link.download = 'leadgrid-wordpress-plugin.zip';
    link.click();
    
    toast({
      title: "📁 התוסף הורד!",
      description: "קובץ התוסף הורד בהצלחה למחשב שלך",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 p-4" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            חזור
          </Button>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            הוספת הדף ל-WordPress
          </h1>
          <p className="text-gray-300 text-lg">
            מדריך שלב אחר שלב להוספת דף הנחיתה שלך לאתר WordPress
          </p>
        </div>

        {/* API Credentials */}
        {apiCredentials && (
          <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-green-400" />
                פרטי ה-API שלך
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Site ID:</label>
                  <div className="flex items-center gap-2">
                    <input
                      value={apiCredentials.siteId}
                      readOnly
                      className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm font-mono"
                    />
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard(apiCredentials.siteId, 'Site ID')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-2">API Key:</label>
                  <div className="flex items-center gap-2">
                    <input
                      value={showApiKey ? apiCredentials.apiKey : '••••••••••••••••••••••••••••••••••••'}
                      readOnly
                      className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm font-mono"
                    />
                    <Button
                      size="sm"
                      onClick={() => setShowApiKey(!showApiKey)}
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-700"
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard(apiCredentials.apiKey, 'API Key')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 1: Download Plugin */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Badge className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</Badge>
              הורדת התוסף
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              התוסף LeadGrid מאפשר לך לייבא ולנהל דפי נחיתה ישירות בתוך WordPress.
            </p>
            
            <div className="bg-blue-900/30 border border-blue-700/30 p-4 rounded-lg">
              <h4 className="text-blue-200 font-medium mb-2">מה כולל התוסף:</h4>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• ייבוא אוטומטי של דפי נחיתה</li>
                <li>• עורך מתקדם עם תצוגה מקדימה</li>
                <li>• ניהול תבניות וסגנונות</li>
                <li>• טפסי יצירת קשר מתקדמים</li>
                <li>• אנליטיקס ומעקב ביצועים</li>
              </ul>
            </div>
            
            <Button
              onClick={downloadPlugin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              הורד תוסף LeadGrid לחינם
            </Button>
          </CardContent>
        </Card>

        {/* Step 2: Install Plugin */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Badge className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</Badge>
              התקנת התוסף ב-WordPress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">1</div>
                <div>
                  <p className="text-white font-medium">היכנס לאדמין של WordPress</p>
                  <p className="text-gray-400 text-sm">עבור אל: התוספים ← הוסף חדש</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">2</div>
                <div>
                  <p className="text-white font-medium">העלה את קובץ התוסף</p>
                  <p className="text-gray-400 text-sm">לחץ על "העלה תוסף" ובחר את הקובץ שהורדת</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">3</div>
                <div>
                  <p className="text-white font-medium">הפעל את התוסף</p>
                  <p className="text-gray-400 text-sm">לחץ על "הפעל" אחרי ההתקנה</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Configure Plugin */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Badge className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</Badge>
              הגדרת התוסף
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">1</div>
                <div>
                  <p className="text-white font-medium">עבור אל הגדרות LeadGrid</p>
                  <p className="text-gray-400 text-sm">בתפריט הצד תמצא "LeadGrid" ← "Settings"</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">2</div>
                <div>
                  <p className="text-white font-medium">הזן את פרטי ה-API</p>
                  <p className="text-gray-400 text-sm">העתק את הפרטים מלמעלה ושמור</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">3</div>
                <div>
                  <p className="text-white font-medium">בדוק חיבור</p>
                  <p className="text-gray-400 text-sm">לחץ על "Test Connection" כדי לוודא שהכל עובד</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Import Page */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Badge className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</Badge>
              ייבוא הדף שלך
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">1</div>
                <div>
                  <p className="text-white font-medium">עבור אל "Import Pages"</p>
                  <p className="text-gray-400 text-sm">בתפריט LeadGrid לחץ על "Import Pages"</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">2</div>
                <div>
                  <p className="text-white font-medium">טען דפים זמינים</p>
                  <p className="text-gray-400 text-sm">לחץ על "Load Available Pages" לטעינת הדפים</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">3</div>
                <div>
                  <p className="text-white font-medium">ייבא את הדף</p>
                  <p className="text-gray-400 text-sm">לחץ על "Import" ליד הדף שיצרת</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-900/30 border border-green-700/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h4 className="text-green-200 font-medium">זהו! הדף מוכן</h4>
              </div>
              <p className="text-green-200 text-sm">
                הדף שלך יועתק כדף WordPress חדש ותוכל לערוך אותו ישירות במעבד התוסף
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">צריך עזרה?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              אם נתקלת בבעיות או צריך תמיכה טכנית, אנחנו כאן לעזור!
            </p>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700"
                onClick={() => window.open('mailto:support@leadgrid.co.il', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                שלח מייל לתמיכה
              </Button>
              
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700"
                onClick={() => window.open('https://wa.me/972123456789', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                צור קשר בוואטסאפ
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};
