import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Globe, CheckCircle, AlertTriangle, Loader2, ExternalLink } from 'lucide-react';
import { WordPressIntegrationService } from '@/services/wordpressIntegrationService';
import { toast } from '@/components/ui/use-toast';

interface WordPressRegistrationFormProps {
  onSubmit: (userData: any) => void;
  onCancel: () => void;
  selectedDomain: string;
  isLoading?: boolean;
}

export const WordPressRegistrationForm = ({ onSubmit, onCancel, selectedDomain, isLoading }: WordPressRegistrationFormProps) => {
  const [wpConnection, setWpConnection] = useState({
    siteUrl: '',
    username: '',
    password: ''
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleWpInputChange = (field: string, value: string) => {
    setWpConnection(prev => ({
      ...prev,
      [field]: value
    }));
    // Reset status when user changes input
    if (connectionStatus !== 'idle') {
      setConnectionStatus('idle');
      setStatusMessage('');
    }
  };

  const testWordPressConnection = async () => {
    if (!wpConnection.siteUrl || !wpConnection.username || !wpConnection.password) {
      toast({
        title: "שדות חסרים",
        description: "אנא מלא את כל השדות",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    setConnectionStatus('testing');
    setStatusMessage('בודק חיבור לאתר WordPress...');

    try {
      // Format the URL properly
      const formattedUrl = WordPressIntegrationService.formatWordPressUrl(wpConnection.siteUrl);
      
      const result = await WordPressIntegrationService.testConnection({
        ...wpConnection,
        siteUrl: formattedUrl
      });

      if (result.success) {
        setConnectionStatus('success');
        setStatusMessage(result.message);
        toast({
          title: "חיבור הצליח!",
          description: result.message,
        });
      } else {
        setConnectionStatus('error');
        setStatusMessage(result.error || 'שגיאה בחיבור');
        toast({
          title: "שגיאה בחיבור",
          description: result.error,
          variant: "destructive"
        });
      }
    } catch (error) {
      setConnectionStatus('error');
      setStatusMessage('שגיאה בחיבור לאתר');
      toast({
        title: "שגיאה",
        description: "שגיאה בחיבור לאתר WordPress",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const addLandingPageToWordPress = async () => {
    if (connectionStatus !== 'success') {
      toast({
        title: "נדרש חיבור תקין",
        description: "אנא בדוק תחילה את החיבור לאתר WordPress",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    setStatusMessage('מוסיף את דף הנחיתה לאתר...');

    try {
      // Get the landing page data from localStorage or props
      const landingPageData = JSON.parse(localStorage.getItem('generatedPageData') || '{}');
      
      const formattedUrl = WordPressIntegrationService.formatWordPressUrl(wpConnection.siteUrl);
      
      const result = await WordPressIntegrationService.addLandingPage({
        ...wpConnection,
        siteUrl: formattedUrl
      }, landingPageData);

      if (result.success) {
        toast({
          title: "דף הנחיתה נוסף בהצלחה!",
          description: "הדף זמין עכשיו באתר שלך",
        });
        
        // Show success with links
        setStatusMessage(`דף הנחיתה נוסף בהצלחה!`);
        
        // Optionally call onSubmit with the result
        onSubmit({
          success: true,
          pageUrl: result.pageUrl,
          editUrl: result.editUrl,
          wordpressConnection: wpConnection
        });
        
      } else {
        toast({
          title: "שגיאה בהוספת הדף",
          description: result.error,
          variant: "destructive"
        });
        setStatusMessage(result.error || 'שגיאה בהוספת דף הנחיתה');
      }
    } catch (error) {
      toast({
        title: "שגיאה",
        description: "שגיאה בהוספת דף הנחיתה",
        variant: "destructive"
      });
      setStatusMessage('שגיאה בהוספת דף הנחיתה');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6" dir="rtl">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-white text-2xl flex items-center justify-center gap-2">
            <Globe className="w-6 h-6" />
            הוספת דף נחיתה לאתר WordPress קיים
          </CardTitle>
          <p className="text-gray-300">
            חבר את האתר שלך והוסף את דף הנחיתה אוטומטית
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* WordPress Connection Form */}
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700/50">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  חיבור לאתר WordPress קיים
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="wpUrl" className="text-gray-300">כתובת האתר שלך</Label>
                    <Input
                      id="wpUrl"
                      value={wpConnection.siteUrl}
                      onChange={(e) => handleWpInputChange('siteUrl', e.target.value)}
                      placeholder="https://yoursite.com"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="wpUsername" className="text-gray-300">שם משתמש WordPress</Label>
                      <Input
                        id="wpUsername"
                        value={wpConnection.username}
                        onChange={(e) => handleWpInputChange('username', e.target.value)}
                        placeholder="admin"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="wpPassword" className="text-gray-300">סיסמת WordPress</Label>
                      <Input
                        id="wpPassword"
                        type="password"
                        value={wpConnection.password}
                        onChange={(e) => handleWpInputChange('password', e.target.value)}
                        placeholder="סיסמת הניהול שלך"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </div>
                  
                  {/* Connection Status */}
                  {statusMessage && (
                    <Alert className={`${
                      connectionStatus === 'success' ? 'bg-green-900/30 border-green-700/50' : 
                      connectionStatus === 'error' ? 'bg-red-900/30 border-red-700/50' : 
                      'bg-blue-900/30 border-blue-700/50'
                    }`}>
                      <AlertDescription className="text-white">
                        {statusMessage}
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={testWordPressConnection}
                      disabled={isConnecting || !wpConnection.siteUrl || !wpConnection.username || !wpConnection.password}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      {isConnecting && connectionStatus === 'testing' ? (
                        <>
                          <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                          בודק חיבור...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 ml-2" />
                          בדוק חיבור
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      onClick={addLandingPageToWordPress}
                      disabled={isConnecting || connectionStatus !== 'success'}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      {isConnecting && connectionStatus === 'success' ? (
                        <>
                          <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                          מוסיף דף...
                        </>
                      ) : (
                        <>
                          <Globe className="w-4 h-4 ml-2" />
                          הוסף דף נחיתה
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 mt-4">
                  <h5 className="text-blue-400 font-medium mb-2">💡 מה יקרה:</h5>
                  <ul className="text-blue-300 text-sm space-y-1">
                    <li>• נתחבר לאתר WordPress שלך בבטחה</li>
                    <li>• ניצור דף חדש עם התוכן שיצרת ב-LeadGrid</li>
                    <li>• נגדיר את העיצוב והסגנון שבחרת</li>
                    <li>• הדף יהיה זמין מיד באתר שלך</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Simple HTML Export Option */}
          <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-700/50">
            <CardContent className="p-6">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                דרך פשוטה - העתקה והדבקה
              </h4>
              
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  הדרך הכי מהירה ומקצועית - קוד HTML מוכן להדבקה בעורך WordPress
                </p>
                
                <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4">
                  <h5 className="text-green-400 font-medium mb-2">✨ איך זה עובד:</h5>
                  <ul className="text-green-300 text-sm space-y-1">
                    <li>• נכין עבורך קוד HTML מוכן להדבקה</li>
                    <li>• תעתיק ותדביק בעורך WordPress</li>
                    <li>• הדף יראה בדיוק כמו בתצוגה המקדימה</li>
                    <li>• אין צורך בהתקנות או הגדרות מורכבות</li>
                  </ul>
                </div>
                
                <Button 
                  onClick={() => {
                    const landingPageData = JSON.parse(localStorage.getItem('generatedPageData') || '{}');
                    onSubmit({
                      method: 'html-export',
                      landingPageData
                    });
                  }}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="w-4 h-4 ml-2" />
                  קבל קוד HTML מוכן להדבקה
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Options */}
          <Card className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 border-purple-700/50">
            <CardContent className="p-6">
              <h4 className="text-white font-semibold text-lg mb-4">
                אין לך עדיין אתר WordPress?
              </h4>
              
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  אם אין לך עדיין אתר WordPress, תוכל ליצור אחד חינם:
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={() => window.open('https://wordpress.com/start', '_blank')}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <ExternalLink className="w-4 h-4 ml-2" />
                    צור אתר WordPress חינם
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      const demoSiteUrl = `${window.location.origin}/demo-wordpress-site?siteId=demo_${Date.now()}`;
                      window.open(demoSiteUrl, '_blank');
                    }}
                    variant="outline"
                    className="flex-1 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                  >
                    <CheckCircle className="w-4 h-4 ml-2" />
                    ראה דמו
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          <Button
            onClick={onCancel}
            variant="outline"
            className="w-full border-gray-600 text-white hover:bg-gray-700"
          >
            חזור
          </Button>

        </CardContent>
      </Card>
    </div>
  );
};