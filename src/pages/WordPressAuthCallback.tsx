
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Loader2, Settings } from 'lucide-react';
import { RealWordPressService } from '@/services/realWordPressService';

export const WordPressAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'config-error'>('loading');
  const [message, setMessage] = useState('מעבד את האימות...');

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');

      // Check if WordPress.com is configured
      if (!RealWordPressService.isConfigured()) {
        setStatus('config-error');
        setMessage('WordPress.com לא מוגדר. נדרש Client ID ו-Client Secret.');
        return;
      }

      if (error) {
        setStatus('error');
        setMessage(`האימות נכשל: ${error}. אנא נסה שוב.`);
        return;
      }

      if (!code) {
        setStatus('error');
        setMessage('לא התקבל קוד אימות מ-WordPress.com');
        return;
      }

      try {
        console.log('🔄 Processing WordPress.com OAuth callback with code:', code);
        
        // Store the code temporarily and close popup if this is in a popup
        if (window.opener) {
          // This is a popup window
          localStorage.setItem('wp_auth_code', code);
          
          // Handle the OAuth callback
          const success = await RealWordPressService.handleOAuthCallback(code);
          
          if (success) {
            window.opener.postMessage({ type: 'WORDPRESS_AUTH_SUCCESS', code }, '*');
            window.close();
          } else {
            window.opener.postMessage({ type: 'WORDPRESS_AUTH_ERROR', error: 'Authentication failed' }, '*');
            window.close();
          }
          return;
        }
        
        // Handle OAuth callback directly
        const success = await RealWordPressService.handleOAuthCallback(code);
        
        if (success) {
          setStatus('success');
          setMessage('האימות הושלם בהצלחה! כעת תוכל ליצור אתרי WordPress.com אמיתיים.');
          
          // Redirect back to the main app after 3 seconds
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          setStatus('error');
          setMessage('שגיאה בעיבוד האימות. אנא נסה שוב.');
        }
        
      } catch (error) {
        console.error('Callback handling failed:', error);
        setStatus('error');
        setMessage(`שגיאה בעיבוד האימות: ${error.message}`);
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  // Listen for popup messages
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'WORDPRESS_AUTH_SUCCESS') {
        setStatus('success');
        setMessage('האימות הושלם בהצלחה! כעת תוכל ליצור אתרי WordPress.com אמיתיים.');
        
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else if (event.data.type === 'WORDPRESS_AUTH_ERROR') {
        setStatus('error');
        setMessage(`שגיאה באימות: ${event.data.error}`);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center" dir="rtl">
      <Card className="bg-gray-800 border-gray-700 max-w-md mx-4">
        <CardContent className="p-6 text-center">
          {status === 'loading' && (
            <>
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
              <h2 className="text-white text-xl font-semibold mb-2">מעבד אימות WordPress.com</h2>
              <p className="text-gray-300">{message}</p>
            </>
          )}
          
          {status === 'config-error' && (
            <>
              <Settings className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-white text-xl font-semibold mb-2">נדרשת הגדרה</h2>
              <p className="text-gray-300 mb-4">{message}</p>
              <div className="bg-yellow-900/30 border border-yellow-600/30 p-4 rounded-lg mb-4">
                <p className="text-yellow-200 text-sm">
                  כדי ליצור אתרי WordPress.com אמיתיים, נדרש:
                </p>
                <ul className="text-yellow-300 text-xs mt-2 list-disc list-inside text-right">
                  <li>הרשמה ב-WordPress.com Developer Program</li>
                  <li>יצירת Application עם Client ID ו-Secret</li>
                  <li>הגדרת הסודות במערכת</li>
                </ul>
              </div>
              <Button 
                onClick={() => navigate('/')}
                className="bg-yellow-600 hover:bg-yellow-700"
              >
                חזור לדף הראשי
              </Button>
            </>
          )}
          
          {status === 'success' && (
            <>
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-white text-xl font-semibold mb-2">אימות הושלם!</h2>
              <p className="text-gray-300 mb-4">{message}</p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-green-600 hover:bg-green-700"
              >
                חזור לדף הראשי
              </Button>
            </>
          )}
          
          {status === 'error' && (
            <>
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-white text-xl font-semibold mb-2">שגיאה באימות</h2>
              <p className="text-gray-300 mb-4">{message}</p>
              <div className="space-y-2">
                <Button 
                  onClick={() => navigate('/')}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  חזור לדף הראשי
                </Button>
                {RealWordPressService.isConfigured() && (
                  <Button 
                    onClick={() => RealWordPressService.initiateWordPressAuth()}
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700"
                  >
                    נסה אימות שוב
                  </Button>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
