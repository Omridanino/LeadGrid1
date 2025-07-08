
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Building, Check, CreditCard, Loader2, Wallet } from 'lucide-react';
import { BANK_ACCOUNTS, COMPANY_DETAILS } from '@/services/realDomainService';

interface PaymentMethodsWizardProps {
  onPaymentComplete: (paymentMethod: string, paymentData: any) => void;
  onClose: () => void;
  totalAmount: number;
  orderDetails: any;
}

export const PaymentMethodsWizard = ({ onPaymentComplete, onClose, totalAmount, orderDetails }: PaymentMethodsWizardProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'bit' | 'paypal' | 'bank'>('credit');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const [creditCardCVC, setCreditCardCVC] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentSubmit = async (method: string) => {
    if (!termsAccepted) {
      alert('אנא אשר את תנאי השימוש');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    onPaymentComplete(method, {
      cardNumber: creditCardNumber,
      expiry: creditCardExpiry,
      cvc: creditCardCVC
    });
    onClose();
  };

  const getBankAccount = () => BANK_ACCOUNTS[0];

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">אמצעי תשלום</h2>
              <p className="text-gray-400 text-sm mt-1">בחרו את אמצעי התשלום המועדף עליכם</p>
            </div>
            <Button onClick={onClose} variant="outline" size="sm">
              סגור
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          {/* Payment Method Selection */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">בחרו אמצעי תשלום:</h3>
            <RadioGroup defaultValue="credit" className="flex flex-col gap-2" onValueChange={(value) => setPaymentMethod(value as typeof paymentMethod)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit" id="credit" className="bg-gray-700 border-gray-600 rounded-full text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Label htmlFor="credit" className="text-white">
                  <CreditCard className="w-4 h-4 ml-2 inline-block" />
                  כרטיס אשראי
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" className="bg-gray-700 border-gray-600 rounded-full text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Label htmlFor="bank" className="text-white">
                  <Building className="w-4 h-4 ml-2 inline-block" />
                  העברה בנקאית
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bit" id="bit" className="bg-gray-700 border-gray-600 rounded-full text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Label htmlFor="bit" className="text-white">
                  <Wallet className="w-4 h-4 ml-2 inline-block" />
                  Bit
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" className="bg-gray-700 border-gray-600 rounded-full text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Label htmlFor="paypal" className="text-white">PayPal</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Credit Card Section */}
          {paymentMethod === 'credit' && (
            <div className="space-y-6">
              <div className="text-center">
                <CreditCard className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">תשלום באמצעות כרטיס אשראי</h3>
                <p className="text-gray-400">הזינו את פרטי האשראי שלכם</p>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">פרטי כרטיס אשראי</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">מספר כרטיס</Label>
                    <Input
                      type="text"
                      placeholder="0000-0000-0000-0000"
                      className="bg-gray-700 border-gray-600 text-white mt-1"
                      value={creditCardNumber}
                      onChange={(e) => setCreditCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">תוקף</Label>
                      <Input
                        type="text"
                        placeholder="MM/YY"
                        className="bg-gray-700 border-gray-600 text-white mt-1"
                        value={creditCardExpiry}
                        onChange={(e) => setCreditCardExpiry(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label className="text-white">CVC</Label>
                      <Input
                        type="text"
                        placeholder="123"
                        className="bg-gray-700 border-gray-600 text-white mt-1"
                        value={creditCardCVC}
                        onChange={(e) => setCreditCardCVC(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  className="bg-gray-700 border-gray-600 rounded-sm text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                />
                <Label htmlFor="terms" className="text-white">אני מאשר את <a href="#" className="text-blue-500 underline">תנאי השימוש</a></Label>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={() => handlePaymentSubmit('credit')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isProcessing}
                >
                  {isProcessing ? <Loader2 className="w-5 h-5 animate-spin ml-2" /> : <Check className="w-5 h-5 ml-2" />}
                  {isProcessing ? 'מעבד...' : 'שלם עכשיו'}
                </Button>
              </div>
            </div>
          )}

          {/* Bank Transfer Section */}
          {paymentMethod === 'bank' && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">העברה בנקאית</h3>
                <p className="text-gray-400">העבר את התשלום לחשבון הבנק שלנו</p>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">פרטי החשבון לעברה</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">שם הבנק:</span>
                        <span className="text-white font-medium">{getBankAccount().bankName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">מספר חשבון:</span>
                        <span className="text-white font-medium">{getBankAccount().accountNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">מספר סניף:</span>
                        <span className="text-white font-medium">{getBankAccount().branch}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">בעל החשבון:</span>
                        <span className="text-white font-medium">{getBankAccount().accountName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">SWIFT:</span>
                        <span className="text-white font-medium">{getBankAccount().swift}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">סכום לתשלום:</span>
                        <span className="text-white font-bold text-lg">₪{totalAmount}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <div className="text-yellow-300 font-medium">חשוב!</div>
                        <div className="text-yellow-200 text-sm mt-1">
                          אנא ציין בהעברה את מספר ההזמנה: <strong>{orderDetails?.orderId}</strong>
                          <br />
                          ואת כתובת המייל שלך לזיהוי התשלום
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button
                  onClick={() => handlePaymentSubmit('bank')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isProcessing}
                >
                  {isProcessing ? <Loader2 className="w-5 h-5 animate-spin ml-2" /> : <Check className="w-5 h-5 ml-2" />}
                  {isProcessing ? 'מעבד...' : 'אישור העברה בנקאית'}
                </Button>
              </div>
            </div>
          )}

          {/* Bit Section */}
          {paymentMethod === 'bit' && (
            <div className="space-y-6">
              <div className="text-center">
                <Wallet className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">תשלום באמצעות Bit</h3>
                <p className="text-gray-400">העבירו את התשלום לאפליקציית Bit שלנו</p>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">העברה באמצעות Bit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">שם העסק:</span>
                      <span className="text-white font-medium">{COMPANY_DETAILS.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">מספר טלפון:</span>
                      <span className="text-white font-medium">{COMPANY_DETAILS.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">סכום לתשלום:</span>
                      <span className="text-white font-bold text-lg">₪{totalAmount}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <div className="text-yellow-300 font-medium">חשוב!</div>
                        <div className="text-yellow-200 text-sm mt-1">
                          אנא ציין בהערות התשלום את מספר ההזמנה: <strong>{orderDetails?.orderId}</strong>
                          <br />
                          ואת כתובת המייל שלך לזיהוי התשלום
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button
                  onClick={() => handlePaymentSubmit('bit')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isProcessing}
                >
                  {isProcessing ? <Loader2 className="w-5 h-5 animate-spin ml-2" /> : <Check className="w-5 h-5 ml-2" />}
                  {isProcessing ? 'מעבד...' : 'אישור תשלום ב-Bit'}
                </Button>
              </div>
            </div>
          )}

          {/* PayPal Section */}
          {paymentMethod === 'paypal' && (
            <div className="space-y-6">
              <div className="text-center">
                {/* PayPal Icon */}
                <h3 className="text-xl font-semibold text-white mb-2">תשלום באמצעות PayPal</h3>
                <p className="text-gray-400">תועברו לאתר PayPal להשלמת התשלום</p>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">העברה באמצעות PayPal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">סכום לתשלום:</span>
                      <span className="text-white font-bold text-lg">₪{totalAmount}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <div className="text-yellow-300 font-medium">חשוב!</div>
                        <div className="text-yellow-200 text-sm mt-1">
                          לאחר התשלום, אנא חזרו לאתר שלנו לאישור סופי
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button
                  onClick={() => handlePaymentSubmit('paypal')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isProcessing}
                >
                  {isProcessing ? <Loader2 className="w-5 h-5 animate-spin ml-2" /> : <Check className="w-5 h-5 ml-2" />}
                  {isProcessing ? 'מעבד...' : 'מעבר לתשלום ב-PayPal'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
