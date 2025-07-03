
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Globe, 
  Server, 
  Mail, 
  Lock,
  ExternalLink,
  Copy,
  Download
} from 'lucide-react';

interface PurchaseSuccessPageProps {
  orderId?: string;
  domain?: string;
  hostingDetails?: {
    username: string;
    password: string;
    cpanelUrl: string;
    nameservers: string[];
  };
  siteUrl?: string;
}

export const PurchaseSuccessPage = ({ 
  orderId, 
  domain, 
  hostingDetails, 
  siteUrl 
}: PurchaseSuccessPageProps) => {
  const [copied, setCopied] = useState<string>('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Success Header */}
        <div className="text-center">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            🎉 מזל טוב! הרכישה הושלמה בהצלחה
          </h1>
          <p className="text-xl text-gray-400">
            האתר שלך כבר חי באינטרנט וזמין לכולם!
          </p>
        </div>

        {/* Order Details */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-5 h-5" />
              פרטי ההזמנה
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-gray-300">מספר הזמנה</Label>
                <div className="flex items-center gap-2">
                  <span className="text-white font-mono">{orderId}</span>
                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(orderId || '', 'order')}
                    className="bg-gray-700 hover:bg-gray-600 p-1"
                  >
                    {copied === 'order' ? '✓' : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label className="text-gray-300">דומיין</Label>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{domain}</span>
                  <Badge className="bg-green-600">פעיל</Badge>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30">
              <div className="text-center">
                <div className="text-green-300 font-semibold mb-2">כתובת האתר שלך:</div>
                <div className="flex items-center justify-center gap-2">
                  <a 
                    href={siteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-xl font-bold hover:text-blue-400 transition-colors"
                  >
                    {siteUrl}
                  </a>
                  <Button
                    size="sm"
                    onClick={() => window.open(siteUrl, '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 p-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hosting Details */}
        {hostingDetails && (
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Server className="w-5 h-5" />
                פרטי האחסון שלך
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30 mb-4">
                <div className="flex items-start gap-2">
                  <Lock className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div className="text-sm">
                    <div className="text-yellow-300 font-medium mb-1">שמור את הפרטים האלה!</div>
                    <div className="text-yellow-200">תצטרך אותם כדי לנהל את האתר ואת חשבון האחסון שלך</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">שם משתמש</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono">{hostingDetails.username}</span>
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard(hostingDetails.username, 'username')}
                      className="bg-gray-700 hover:bg-gray-600 p-1"
                    >
                      {copied === 'username' ? '✓' : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label className="text-gray-300">סיסמה</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono">{hostingDetails.password}</span>
                    <Button
                      size="sm"
                      onClick={() => copyToClipboard(hostingDetails.password, 'password')}
                      className="bg-gray-700 hover:bg-gray-600 p-1"
                    >
                      {copied === 'password' ? '✓' : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-gray-300">פאנל ניהול (cPanel)</Label>
                <div className="flex items-center gap-2">
                  <a 
                    href={hostingDetails.cpanelUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {hostingDetails.cpanelUrl}
                  </a>
                  <Button
                    size="sm"
                    onClick={() => window.open(hostingDetails.cpanelUrl, '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 p-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-gray-300">שרתי שמות</Label>
                <div className="space-y-1">
                  {hostingDetails.nameservers.map((ns, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-white font-mono text-sm">{ns}</span>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(ns, `ns${index}`)}
                        className="bg-gray-700 hover:bg-gray-600 p-1"
                      >
                        {copied === `ns${index}` ? '✓' : <Copy className="w-3 h-3" />}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Steps */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">השלבים הבאים</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <div className="text-white font-medium">האתר שלך פעיל</div>
                  <div className="text-gray-400 text-sm">המבקרים יכולים לגשת אליו עכשיו</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <div className="text-white font-medium">פרטי הגישה נשלחו באימיל</div>
                  <div className="text-gray-400 text-sm">בדוק את תיבת הדואר שלך</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Server className="w-5 h-5 text-purple-400 mt-0.5" />
                <div>
                  <div className="text-white font-medium">ניתן לערוך את האתר</div>
                  <div className="text-gray-400 text-sm">דרך פאנל הניהול או העלאת קבצים</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <div className="flex gap-3">
                <Button
                  onClick={() => window.open(siteUrl, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 flex-1"
                >
                  <Globe className="w-4 h-4 ml-2" />
                  צפה באתר
                </Button>
                
                <Button
                  onClick={() => window.open(hostingDetails?.cpanelUrl, '_blank')}
                  className="bg-purple-600 hover:bg-purple-700 flex-1"
                >
                  <Server className="w-4 h-4 ml-2" />
                  פאנל ניהול
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">צריך עזרה? אנחנו כאן בשבילך</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              📞 התקשר לתמיכה
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              💬 צ'אט תמיכה
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Label = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`text-sm font-medium mb-1 ${className}`}>{children}</div>
);
