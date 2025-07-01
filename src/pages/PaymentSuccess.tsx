
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Globe, 
  ArrowRight, 
  Copy,
  ExternalLink,
  Loader2
} from 'lucide-react';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const domain = searchParams.get('domain');
  const [isProcessing, setIsProcessing] = useState(true);
  const [siteUrl, setSiteUrl] = useState('');

  useEffect(() => {
    // Simulate processing domain setup
    setTimeout(() => {
      setSiteUrl(`https://${domain}`);
      setIsProcessing(false);
    }, 3000);
  }, [domain]);

  const copyDomain = () => {
    if (domain) {
      navigator.clipboard.writeText(domain);
    }
  };

  const visitSite = () => {
    if (siteUrl) {
      window.open(siteUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4" dir="rtl">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Header */}
        <div className="text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            🎉 התשלום הושלם בהצלחה!
          </h1>
          <p className="text-gray-400 text-lg">
            הדומיין שלך נרכש והאתר בתהליך הגדרה
          </p>
        </div>

        {/* Domain Info */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-400" />
              הדומיין שלך
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <span className="text-white font-medium text-lg">{domain}</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={copyDomain}
                  className="bg-gray-600 hover:bg-gray-500"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                {!isProcessing && (
                  <Button
                    size="sm"
                    onClick={visitSite}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
            
            {isProcessing ? (
              <div className="flex items-center justify-center p-6">
                <Loader2 className="w-8 h-8 animate-spin text-blue-400 ml-3" />
                <span className="text-white">מגדיר את הדומיין והאתר...</span>
              </div>
            ) : (
              <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-700/30">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-green-300 font-medium">האתר שלך חי ופעיל!</p>
                <p className="text-green-200 text-sm">SSL מותקן, DNS מוגדר, הכל מוכן</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* What's Included */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">מה כלול ברכישה?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">דומיין לשנה מלאה</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">הוסטינג מהיר וזמין</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">SSL תעודה חינם</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">ניהול DNS אוטומטי</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">תמיכה טכנית 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">גיבוי אוטומטי יומי</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50">
          <CardHeader>
            <CardTitle className="text-white">מה הלאה?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-sm text-gray-300">
              <p>• קיבלת מייל עם פרטי הרכישה ומידע על הדומיין</p>
              <p>• האתר שלך זמין עכשיו בכתובת החדשה</p>
              <p>• תוכל לעדכן תוכן ועיצוב דרך הפאנל שלנו</p>
              <p>• יש לך גישה לאנליטיקה ולכלי ניהול מתקדמים</p>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button 
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700"
              >
                חזרה לבית
              </Button>
              <Button 
                onClick={visitSite}
                disabled={isProcessing}
                className="bg-blue-600 hover:bg-blue-700"
              >
                בקר באתר שלך
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
