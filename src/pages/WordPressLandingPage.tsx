
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  User, 
  Lock, 
  ExternalLink, 
  Copy, 
  Eye, 
  CheckCircle,
  AlertCircle,
  Loader2,
  Code,
  Server,
  Shield,
  Key,
  Monitor,
  Settings
} from 'lucide-react';
import { RealWordPressService, WordPressCreationResult } from '@/services/realWordPressService';

export const WordPressLandingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [wordpressData, setWordpressData] = useState<WordPressCreationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const demo = searchParams.get('demo');
  const user = searchParams.get('user');
  const siteId = searchParams.get('siteId');
  const isDemo = demo && user;

  useEffect(() => {
    const loadWordPressData = async () => {
      try {
        if (isDemo) {
          // Load demo content from localStorage
          const demoContent = localStorage.getItem(`demo_content_${user}`);
          if (demoContent) {
            const content = JSON.parse(demoContent);
            setWordpressData({
              success: true,
              siteUrl: `https://${content.userData.username}.demo-wordpress.leadgrid.io`,
              adminUrl: `https://${content.userData.username}.demo-wordpress.leadgrid.io/wp-admin`,
              loginUrl: `https://${content.userData.username}.demo-wordpress.leadgrid.io/wp-login.php`,
              username: content.userData.username,
              password: content.userData.password,
              isDemo: true,
              installationDetails: {
                wpVersion: '6.4.2 (Demo)',
                theme: 'leadgrid-professional',
                plugins: ['jetpack-demo', 'yoast-seo-demo'],
                siteId: siteId || `demo_${content.timestamp}`
              }
            });
          }
        }
      } catch (error) {
        console.error('Failed to load WordPress data:', error);
        setError('Failed to load site data');
      } finally {
        setIsLoading(false);
      }
    };

    loadWordPressData();
  }, [demo, user, siteId, isDemo]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('הועתק ללוח!');
  };

  const openDemoSite = () => {
    if (wordpressData && siteId) {
      // Navigate to the demo site page
      navigate(`/demo-wordpress-site?siteId=${siteId}`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <h2 className="text-white text-xl font-semibold">מכין את האתר הדמו שלך...</h2>
          <p className="text-gray-300 mt-2">יוצר חוויית וורדפרס מלאה ופונקציונלית</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 flex items-center justify-center" dir="rtl">
        <Card className="bg-gray-800 border-red-600 max-w-md mx-4">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-white text-xl font-semibold mb-2">שגיאה בטעינת האתר</h2>
            <p className="text-gray-300">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-red-600 hover:bg-red-700"
            >
              נסה שוב
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!wordpressData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center" dir="rtl">
        <Card className="bg-gray-800 border-gray-700 max-w-md mx-4">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-white text-xl font-semibold mb-2">לא נמצאו נתוני אתר</h2>
            <p className="text-gray-300">לא ניתן למצוא את פרטי האתר שלך</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-8" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold">
                🎉 אתר וורדפרס נוצר בהצלחה!
              </h1>
              <Badge className="bg-green-600 text-white">
                אתר דמו פונקציונלי מלא
              </Badge>
            </div>
          </div>
          <p className="text-gray-300 text-lg">
            האתר שלך מוכן! תוכל לצפות בו ולנהל אותו עם מנהל וורדפרס מלא
          </p>
        </div>

        {/* Main Demo Actions */}
        <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-700/50 mb-6">
          <CardContent className="p-8 text-center">
            <h3 className="text-white text-2xl font-bold mb-4">
              האתר שלך מוכן לשימוש!
            </h3>
            <p className="text-gray-300 mb-6">
              צפה באתר או היכנס למנהל וורדפרס לעריכה ועיצוב
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={openDemoSite}
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                size="lg"
              >
                <Monitor className="w-6 h-6 ml-2" />
                צפה באתר הדמו המלא
              </Button>
              
              <Button
                onClick={openDemoSite}
                className="bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg font-semibold"
                size="lg"
              >
                <Settings className="w-6 h-6 ml-2" />
                כנס למנהל וורדפרס
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Site Details */}
        <Card className="bg-gray-800 border-gray-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-6 h-6" />
              פרטי האתר שלך
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Site URL */}
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <Label className="text-gray-300 text-sm">🌐 כתובת האתר:</Label>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  value={wordpressData.siteUrl}
                  readOnly
                  className="bg-gray-700 border-gray-600 text-white"
                />
                <Button
                  size="sm"
                  onClick={() => copyToClipboard(wordpressData.siteUrl)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* WordPress Admin Access */}
            <div className="bg-purple-900/30 border border-purple-700/30 p-4 rounded-lg">
              <h4 className="text-purple-200 font-semibold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                ניהול וורדפרס דמו (פונקציונלי מלא)
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-gray-300 text-sm">👤 שם משתמש:</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input
                      value={wordpressData.username}
                      readOnly
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard(wordpressData.username)}
                      className="bg-gray-600 hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300 text-sm">🔑 סיסמה:</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input
                      value={wordpressData.password}
                      readOnly
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard(wordpressData.password)}
                      className="bg-gray-600 hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation Details */}
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="text-gray-200 font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                פרטי התקנה
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">גרסת וורדפרס:</span>
                  <span className="text-white mr-2">{wordpressData.installationDetails.wpVersion}</span>
                </div>
                <div>
                  <span className="text-gray-400">ערכת עיצוב:</span>
                  <span className="text-white mr-2">{wordpressData.installationDetails.theme}</span>
                </div>
                <div>
                  <span className="text-gray-400">תוספים:</span>
                  <span className="text-white mr-2">{wordpressData.installationDetails.plugins.length}</span>
                </div>
                <div>
                  <span className="text-gray-400">מזהה אתר:</span>
                  <span className="text-white mr-2 font-mono text-xs">{wordpressData.installationDetails.siteId}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              איך להשתמש באתר הדמו
            </h3>
            <div className="text-gray-300 space-y-2">
              <p>• זהו אתר דמו פונקציונלי מלא עם מנהל וורדפרס אמיתי</p>
              <p>• לחץ על "צפה באתר" כדי לראות איך נראה האתר שלך</p>
              <p>• לחץ על "מנהל וורדפרס" כדי לנהל תכנים, עיצוב ותוספים</p>
              <p>• האתר מדמה באופן מלא את כל הפונקציות של וורדפרס</p>
              <p>• תוכל לעצב, לערוך ולנהל את האתר כמו באתר אמיתי</p>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-700"
          >
            חזור לדף הראשי
          </Button>
        </div>
      </div>
    </div>
  );
};
