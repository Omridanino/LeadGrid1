
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard,
  Shield,
  CheckCircle,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface PaymentFlowProps {
  domain: string;
  price: number;
  onPaymentComplete: () => void;
  onCancel: () => void;
}

export const PaymentFlow = ({ domain, price, onPaymentComplete, onCancel }: PaymentFlowProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentData, setPaymentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'IL',
    postalCode: ''
  });

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Create Stripe payment session
      const { data, error } = await supabase.functions.invoke('create-domain-payment', {
        body: {
          domain,
          price,
          customerInfo: paymentData
        }
      });

      if (error) throw error;

      // Redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      }
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('תשלום נכשל. אנא נסה שוב.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-white text-xl font-semibold mb-2">השלם רכישת דומיין</h3>
        <p className="text-gray-400">מלא פרטים ושלם בצורה מאובטחת</p>
      </div>

      {/* Order Summary */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">סיכום הזמנה</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">דומיין:</span>
            <span className="text-white font-medium">{domain}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">תקופה:</span>
            <span className="text-white">שנה אחת</span>
          </div>
          <Separator className="bg-gray-600" />
          <div className="flex justify-between items-center text-lg">
            <span className="text-white font-semibold">סך הכל:</span>
            <span className="text-white font-bold">₪{price}</span>
          </div>
          
          <div className="bg-green-900/20 p-3 rounded-lg border border-green-700/30">
            <div className="flex items-center gap-2 text-green-300 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>כלול: SSL חינם, DNS ניהול, תמיכה 24/7</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Information */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">פרטי רכישה</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-white">שם פרטי</Label>
              <Input
                value={paymentData.firstName}
                onChange={(e) => setPaymentData(prev => ({ ...prev, firstName: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <Label className="text-white">שם משפחה</Label>
              <Input
                value={paymentData.lastName}
                onChange={(e) => setPaymentData(prev => ({ ...prev, lastName: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
          </div>
          
          <div>
            <Label className="text-white">אימייל</Label>
            <Input
              type="email"
              value={paymentData.email}
              onChange={(e) => setPaymentData(prev => ({ ...prev, email: e.target.value }))}
              className="bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>
          
          <div>
            <Label className="text-white">טלפון</Label>
            <Input
              value={paymentData.phone}
              onChange={(e) => setPaymentData(prev => ({ ...prev, phone: e.target.value }))}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="050-1234567"
              required
            />
          </div>
          
          <div>
            <Label className="text-white">כתובת</Label>
            <Input
              value={paymentData.address}
              onChange={(e) => setPaymentData(prev => ({ ...prev, address: e.target.value }))}
              className="bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-white">עיר</Label>
              <Input
                value={paymentData.city}
                onChange={(e) => setPaymentData(prev => ({ ...prev, city: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <Label className="text-white">מיקוד</Label>
              <Input
                value={paymentData.postalCode}
                onChange={(e) => setPaymentData(prev => ({ ...prev, postalCode: e.target.value }))}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Security */}
      <Card className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border-blue-700/30">
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span>תשלום מאובטח SSL</span>
            </div>
            <div className="flex items-center gap-2 text-green-300">
              <CreditCard className="w-4 h-4" />
              <span>Stripe Certified</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-300">
              <CheckCircle className="w-4 h-4" />
              <span>PCI Compliant</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={onCancel}
          variant="outline"
          className="flex-1 border-gray-600 text-white hover:bg-gray-700"
        >
          ביטול
        </Button>
        <Button
          onClick={handlePayment}
          disabled={isProcessing || !paymentData.firstName || !paymentData.email}
          className="flex-1 bg-green-600 hover:bg-green-700"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-4 h-4 ml-2 animate-spin" />
              מעבד תשלום...
            </>
          ) : (
            <>
              <CreditCard className="w-4 h-4 ml-2" />
              שלם ₪{price}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
