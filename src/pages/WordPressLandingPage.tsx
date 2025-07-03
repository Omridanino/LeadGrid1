
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  Shield
} from 'lucide-react';
import { RealWordPressService, WordPressUserData, WordPressCreationResult } from '@/services/realWordPressService';

export const WordPressLandingPage = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [wordpressData, setWordpressData] = useState<WordPressCreationResult | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const demo = searchParams.get('demo');
  const user = searchParams.get('user');
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
              siteUrl: window.location.href,
              adminUrl: `${window.location.origin}/wordpress-admin?demo=${demo}&user=${user}`,
              loginUrl: `${window.location.origin}/wordpress-login?demo=${demo}&user=${user}`,
              username: content.userData.username,
              password: content.userData.password,
              isDemo: true,
              installationDetails: {
                wpVersion: '6.4.2 (Demo)',
                theme: 'leadgrid-demo',
                plugins: ['demo-plugins'],
                siteId: `demo_${content.timestamp}`
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
  }, [demo, user, isDemo]);

  const createRealWordPressSite = async () => {
    if (!isDemo || !user) return;
    
    setIsCreating(true);
    setError(null);
    
    try {
      const demoContent = localStorage.getItem(`demo_content_${user}`);
      if (!demoContent) {
        throw new Error('Demo content not found');
      }
      
      const content = JSON.parse(demoContent);
      const userData: WordPressUserData = content.userData;
      const websiteData = content.websiteData;
      
      console.log('🚀 Creating REAL WordPress site for user:', userData.username);
      
      const result = await RealWordPressService.createRealWordPressSite(
        `${userData.username}.leadgrid.co.il`,
        userData,
        websiteData
      );
      
      if (result.success) {
        setWordpressData(result);
        console.log('✅ Real WordPress site created successfully!');
        
        if (!result.isDemo) {
          alert('🎉 אתר וורדפרס אמיתי נוצר בהצלחה! תוכל כעת להיכנס למנהל האתר עם הפרטים המוצגים.');
        }
      } else {
        throw new Error(result.error || 'Failed to create WordPress site');
      }
      
    } catch (error) {
      console.error('Failed to create real WordPress site:', error);
      setError(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('הועתק ללוח!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <h2 className="text-white text-xl font-semibold">טוען את האתר שלך...</h2>
          <p className="text-gray-300 mt-2">מכין את פרטי האתר ומנהל הוורדפרס</p>
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
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              wordpressData.isDemo ? 'bg-blue-600' : 'bg-green-600'
            }`}>
              {wordpressData.isDemo ? <Code className="w-6 h-6 text-white" /> : <Server className="w-6 h-6 text-white" />}
            </div>
            <div>
              <h1 className="text-white text-3xl font-bold">
                {wordpressData.isDemo ? 'אתר דמו - וורדפרס' : 'אתר וורדפרס אמיתי'}
              </h1>
              <Badge className={wordpressData.isDemo ? "bg-blue-600" : "bg-green-600"}>
                {wordpressData.isDemo ? 'מצב דמו' : 'אתר אמיתי'}
              </Badge>
            </div>
          </div>
          <p className="text-gray-300">
            {wordpressData.isDemo 
              ? 'זהו אתר דמו המדמה פונקציונליות וורדפרס. תוכל ליצור אתר אמיתי בלחיצה על הכפתור למטה.'
              : 'אתר וורדפרס אמיתי עם התקנה מלאה ובסיס נתונים. תוכל להיכנס ולנהל את האתר.'
            }
          </p>
        </div>

        {/* Site Details */}
        <Card className={`mb-6 ${
          wordpressData.isDemo 
            ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-700/50'
            : 'bg-gradient-to-br from-green-900/50 to-blue-900/50 border-green-700/50'
        }`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-6 h-6" />
              פרטי האתר שלך
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Site URL */}
            <div className="bg-gray-800/50 p-4 rounded-lg">
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
                <Button
                  size="sm"
                  onClick={() => window.open(wordpressData.siteUrl, '_blank')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* WordPress Admin Access */}
            <div className={`p-4 rounded-lg border ${
              wordpressData.isDemo 
                ? 'bg-blue-900/30 border-blue-700/30'
                : 'bg-purple-900/30 border-purple-700/30'
            }`}>
              <h4 className="text-purple-200 font-semibold mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                {wordpressData.isDemo ? 'ניהול דמו (מדמה wp-admin)' : 'ניהול וורדפרס אמיתי'}
              </h4>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-gray-300 text-sm">
                    📱 {wordpressData.isDemo ? 'פאנל ניהול דמו:' : 'wp-admin אמיתי:'}
                  </Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input
                      value={wordpressData.adminUrl}
                      readOnly
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard(wordpressData.adminUrl)}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(wordpressData.adminUrl, '_blank')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

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

        {/* Create Real WordPress Button (only for demo sites) */}
        {wordpressData.isDemo && (
          <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-700/50 mb-6">
            <CardContent className="p-6 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">רוצה אתר וורדפרס אמיתי?</h3>
              <p className="text-gray-300 mb-4">
                צור אתר וורדפרס אמיתי עם התקנה מלאה, בסיס נתונים ופאנל ניהול אמיתי
              </p>
              <Button
                onClick={createRealWordPressSite}
                disabled={isCreating}
                className="bg-green-600 hover:bg-green-700 px-8 py-3"
                size="lg"
              >
                {isCreating ? (
                  <>
                    <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                    יוצר אתר אמיתי...
                  </>
                ) : (
                  <>
                    <Server className="w-5 h-5 ml-2" />
                    צור אתר וורדפרס אמיתי
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              הוראות שימוש
            </h3>
            <div className="text-gray-300 space-y-2">
              {wordpressData.isDemo ? (
                <>
                  <p>• זהו אתר דמו המדמה פונקציונליות וורדפרס</p>
                  <p>• לחץ על "צפה באתר" כדי לראות את האתר שלך</p>
                  <p>• כדי לקבל אתר וורדפרס אמיתי, לחץ על הכפתור הירוק למעלה</p>
                  <p>• האתר האמיתי יכלול את כל התכנים והעיצובים שיצרת</p>
                </>
              ) : (
                <>
                  <p>• זהו אתר וורדפרס אמיתי עם התקנה מלאה</p>
                  <p>• השתמש בפרטי ההתחברות למעלה כדי להיכנס לממשק הניהול</p>
                  <p>• תוכל לערוך תכנים, להוסיף עמודים ולנהל את האתר במלואו</p>
                  <p>• האתר זמין באינטרנט וניתן לגישה מכל מקום</p>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
