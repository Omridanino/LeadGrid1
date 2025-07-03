
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { RealWordPressService } from '@/services/realWordPressService';

export const WordPressAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('מעבד את האימות...');

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');

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
        
        // Handle the OAuth callback
        const success = await RealWordPressService.handleOAuthCallback(code);
        
        if (success) {
          setStatus('success');
          setMessage('האימות הושלם בהצלחה! סוגר חלון...');
          
          // If opened in popup, close it and notify parent
          if (window.opener) {
            // Notify parent window and close popup
            setTimeout(() => {
              window.close();
            }, 1000);
          } else {
            // If not in popup, redirect back
            setTimeout(() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                navigate('/');
              }
            }, 1500);
          }
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
                <Button 
                  onClick={() => RealWordPressService.initiateWordPressAuth()}
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-700"
                >
                  נסה אימות שוב
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
