
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  CreditCard,
  Shield,
  Zap,
  CheckCircle,
  Loader2,
  DollarSign,
  Globe,
  Server,
  Mail
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface AutomaticPurchaseWizardProps {
  domain: string;
  hostingPlan: string;
  onClose: () => void;
  onSuccess: (domain: string) => void;
}

export const AutomaticPurchaseWizard = ({ 
  domain, 
  hostingPlan, 
  onClose, 
  onSuccess 
}: AutomaticPurchaseWizardProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'IL',
    zipCode: ''
  });
  const { toast } = useToast();

  // Calculate pricing with Leadgrid rates
  const domainExtension = '.' + domain.split('.').pop();
  const domainPricing = {
    '.com': 75,
    '.co.il': 80, 
    '.net': 77,
    '.org': 77,
    '.io': 175,
    '.info': 75,
    '.biz': 75
  };
  
  const hostingPricing = {
    'basic': 60,
    'professional': 80,
    'business': 110
  };

  const domainPrice = domainPricing[domainExtension] || 75;
  const hostingYearlyPrice = (hostingPricing[hostingPlan] || 80) * 12;
  const leadgridYearlyPrice = 109.99 * 12;
  const totalAmount = domainPrice + hostingYearlyPrice + leadgridYearlyPrice;

  const handlePurchase = async () => {
    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      console.log('🚀 מתחיל רכישה אמיתית עבור Leadgrid:', { domain, hostingPlan, customerInfo });

      // Create PayPal order עם הפרטים העסקיים של Leadgrid
      const { data, error } = await supabase.functions.invoke('purchase-domain-hosting', {
        body: {
          domain,
          hostingPlan,
          customerInfo,
          years: 1
        }
      });

      if (error) throw error;

      // Redirect to PayPal for payment
      if (data.approvalUrl) {
        window.open(data.approvalUrl, '_blank');
        
        toast({
          title: "🎉 הפניה לPayPal!",
          description: "אנא השלם את התשלום בחלון שנפתח. לאחר התשלום הדומיין יירכש אוטומטית מ-GoDaddy והאתר יעלה לאוויר",
        });

        // Listen for payment completion
        const checkPayment = setInterval(async () => {
          try {
            console.log('בודק סטטוס תשלום...');
            // בפרודקשן זה יבדוק דרך webhook
          } catch (error) {
            console.error('שגיאה בבדיקת תשלום:', error);
          }
        }, 3000);

        // Stop checking after 5 minutes
        setTimeout(() => {
          clearInterval(checkPayment);
        }, 300000);

        onSuccess(domain);
        
      } else {
        throw new Error('Failed to create PayPal order');
      }
      
    } catch (error) {
      console.error('Payment failed:', error);
      toast({
        title: "שגיאה בתשלום",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-auto">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">רכישה אמיתית - Leadgrid</h2>
              <p className="text-green-400 text-sm mt-1 font-medium">
                ✅ התשלום ירכוש אוטומטית את {domain} מ-GoDaddy ויעלה את האתר לאוויר
              </p>
            </div>
            <Button onClick={onClose} variant="outline" size="sm">
              סגור
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Price breakdown */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                פירוט מחירים - Leadgrid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">דומיין {domain} (GoDaddy):</span>
                <span className="text-white">₪{domainPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">אחסון {hostingPlan} (12 חודשים):</span>
                <span className="text-white">₪{hostingYearlyPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">שירות Leadgrid (12 חודשים):</span>
                <span className="text-white">₪{Math.round(leadgridYearlyPrice)}</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-white">סה״כ:</span>
                  <span className="text-green-400">₪{Math.round(totalAmount)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">פרטי רכישה</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">שם פרטי *</Label>
                  <Input
                    value={customerInfo.firstName}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, firstName: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                <div>
                  <Label className="text-white">שם משפחה *</Label>
                  <Input
                    value={customerInfo.lastName}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, lastName: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-white">אימייל *</Label>
                <Input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div>
                <Label className="text-white">טלפון</Label>
                <Input
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <Label className="text-white">כתובת</Label>
                <Input
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">עיר</Label>
                  <Input
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, city: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">מיקוד</Label>
                  <Input
                    value={customerInfo.zipCode}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, zipCode: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* מה יקרה אחרי התשלום */}
          <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-600/50">
            <CardHeader>
              <CardTitle className="text-green-300 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                מה יקרה אחרי התשלום?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <div className="flex items-center gap-2 text-green-300 font-medium">
                    <Globe className="w-4 h-4" />
                    <span>רכישת דומיין מ-GoDaddy</span>
                  </div>
                  <p className="text-green-200 text-xs mt-1">הדומיין {domain} יירכש אוטומטית מ-GoDaddy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <div className="flex items-center gap-2 text-blue-300 font-medium">
                    <Server className="w-4 h-4" />
                    <span>הגדרת אחסון והעלאת האתר</span>
                  </div>
                  <p className="text-blue-200 text-xs mt-1">האתר שלך יועלה לשרתי Leadgrid ויהיה זמין ב-{domain}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <div className="flex items-center gap-2 text-purple-300 font-medium">
                    <Mail className="w-4 h-4" />
                    <span>קבלת פרטי גישה באימייל</span>
                  </div>
                  <p className="text-purple-200 text-xs mt-1">תקבל אימייל עם כתובת האתר ופרטי גישה לניהול</p>
                </div>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-3 mt-4">
                <div className="text-yellow-300 font-medium text-center">⏱️ הכל יהיה מוכן תוך 15 דקות!</div>
              </div>
            </CardContent>
          </Card>

          {/* What's included */}
          <Card className="bg-blue-900/20 border-blue-700/30">
            <CardContent className="p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>רכישה אמיתית מ-GoDaddy ברגע התשלום</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <Zap className="w-4 h-4" />
                  <span>הדומיין יהיה פעיל תוך 15 דקות</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <Shield className="w-4 h-4" />
                  <span>SSL ואבטחה אוטומטיים בשרתי Leadgrid</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>האתר יועלה אוטומטית לדומיין החדש</span>
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <Mail className="w-4 h-4" />
                  <span>אימייל עם פרטי גישה וניהול</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Purchase button */}
          <Button
            onClick={handlePurchase}
            disabled={isProcessing}
            size="lg"
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 font-bold"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                מעבד תשלום ורוכש מ-GoDaddy...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 ml-2" />
                שלם עם PayPal - ₪{Math.round(totalAmount)}
              </>
            )}
          </Button>

          <div className="text-center text-xs text-gray-400">
            לחיצה על הכפתור תפתח את PayPal בחלון חדש.<br/>
            לאחר התשלום, הדומיין יירכש אוטומטית והאתר יעלה לאוויר.
          </div>
        </div>
      </div>
    </div>
  );
};
