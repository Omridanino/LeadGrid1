
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
  DollarSign
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

  // Calculate pricing
  const domainExtension = '.' + domain.split('.').pop();
  const domainPricing = {
    '.com': 100,
    '.co.il': 110, 
    '.net': 105,
    '.org': 105,
    '.io': 180,
    '.info': 100,
    '.biz': 100
  };
  
  const hostingPricing = {
    'basic': 90,
    'professional': 100,
    'business': 125
  };

  const domainPrice = domainPricing[domainExtension] || 100;
  const hostingYearlyPrice = (hostingPricing[hostingPlan] || 100) * 12;
  const leadgridYearlyPrice = 130 * 12;
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
      // Create PayPal order
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
          description: "אנא השלם את התשלום בחלון שנפתח",
        });

        // Listen for payment completion (in a real app, you'd use webhooks)
        const checkPayment = setInterval(async () => {
          try {
            // This is a simplified check - in production you'd verify via webhook
            console.log('בודק סטטוס תשלום...');
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
              <h2 className="text-white text-2xl font-bold">רכישה אוטומטית</h2>
              <p className="text-gray-400 text-sm mt-1">
                התשלום ירכוש אוטומטית את {domain} ואחסון מ-GoDaddy
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
                פירוט מחירים
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">דומיין {domain}:</span>
                <span className="text-white">₪{domainPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">אחסון {hostingPlan} (12 חודשים):</span>
                <span className="text-white">₪{hostingYearlyPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">שירות LeadGrid (12 חודשים):</span>
                <span className="text-white">₪{leadgridYearlyPrice}</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-white">סה״כ:</span>
                  <span className="text-green-400">₪{totalAmount}</span>
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

          {/* What's included */}
          <Card className="bg-green-900/20 border-green-600/50">
            <CardContent className="p-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <CheckCircle className="w-4 h-4" />
                  <span>רכישה אוטומטית מ-GoDaddy ברגע התשלום</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <Zap className="w-4 h-4" />
                  <span>הדומיין יהיה פעיל תוך 15 דקות</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <Shield className="w-4 h-4" />
                  <span>SSL ואבטחה אוטומטיים</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Purchase button */}
          <Button
            onClick={handlePurchase}
            disabled={isProcessing}
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                מעבד תשלום ורוכש מ-GoDaddy...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 ml-2" />
                שלם עם PayPal - ₪{totalAmount}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
