
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  CreditCard, 
  Building2, 
  Smartphone,
  CheckCircle,
  ArrowLeft,
  Shield,
  Info,
  Sparkles
} from 'lucide-react';

interface PaymentMethodsWizardProps {
  onPaymentComplete: (paymentMethod: string, paymentData: any) => void;
  onClose: () => void;
  totalAmount: number;
  orderDetails: {
    service?: string;
    servicePrice?: number;
    domain?: string;
    hosting?: string;
    domainHostingPrice?: number;
    orderId: string;
  };
}

export const PaymentMethodsWizard = ({ 
  onPaymentComplete, 
  onClose, 
  totalAmount, 
  orderDetails 
}: PaymentMethodsWizardProps) => {
  const [selectedMethod, setSelectedMethod] = useState<'credit' | 'bank' | 'bit'>('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    holderName: '',
    email: '',
    phone: ''
  });

  const paymentMethods = [
    {
      id: 'credit' as const,
      name: 'כרטיס אשראי',
      icon: CreditCard,
      description: 'תשלום מאובטח ומיידי',
      popular: true
    },
    {
      id: 'bank' as const,
      name: 'העברה בנקאית',
      icon: Building2,
      description: 'תשלום דרך הבנק שלך',
      popular: false
    },
    {
      id: 'bit' as const,
      name: 'Bit',
      icon: Smartphone,
      description: 'תשלום מהיר עם Bit',
      popular: false
    }
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // סימולציה של עיבוד תשלום
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const paymentData = {
      method: selectedMethod,
      amount: totalAmount,
      orderId: orderDetails.orderId,
      ...formData
    };
    
    onPaymentComplete(selectedMethod, paymentData);
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">תשלום מאובטח</h2>
              <p className="text-gray-400 text-sm mt-1">
                מספר הזמנה: {orderDetails.orderId}
              </p>
            </div>
            <Button onClick={onClose} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזור
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">בחר אמצעי תשלום</h3>
                
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <Card 
                        key={method.id}
                        className={`
                          cursor-pointer transition-all
                          ${selectedMethod === method.id 
                            ? 'ring-2 ring-blue-500 bg-blue-900/20' 
                            : 'bg-gray-800 hover:bg-gray-700'
                          }
                        `}
                        onClick={() => setSelectedMethod(method.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Icon className="w-6 h-6 text-blue-400" />
                              <div>
                                <div className="text-white font-medium flex items-center gap-2">
                                  {method.name}
                                  {method.popular && (
                                    <Badge className="bg-green-600 text-white text-xs">מומלץ</Badge>
                                  )}
                                </div>
                                <div className="text-gray-400 text-sm">{method.description}</div>
                              </div>
                            </div>
                            
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              selectedMethod === method.id 
                                ? 'bg-blue-500 border-blue-500' 
                                : 'border-gray-600'
                            }`}>
                              {selectedMethod === method.id && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Payment Form */}
              {selectedMethod === 'credit' && (
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">פרטי כרטיס האשראי</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">מספר כרטיס</Label>
                      <Input
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                        placeholder="1234 5678 9012 3456"
                        className="bg-gray-700 border-gray-600 text-white mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">תוקף</Label>
                        <Input
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                          placeholder="MM/YY"
                          className="bg-gray-700 border-gray-600 text-white mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-white">CVV</Label>
                        <Input
                          value={formData.cvv}
                          onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                          placeholder="123"
                          className="bg-gray-700 border-gray-600 text-white mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-white">שם בעל הכרטיס</Label>
                      <Input
                        value={formData.holderName}
                        onChange={(e) => setFormData({...formData, holderName: e.target.value})}
                        placeholder="שם מלא כפי שמופיע על הכרטיס"
                        className="bg-gray-700 border-gray-600 text-white mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {selectedMethod === 'bank' && (
                <Card className="bg-blue-900/20 border-blue-600/50">
                  <CardContent className="p-4">
                    <div className="space-y-3 text-blue-200">
                      <div className="font-medium">פרטי העברה בנקאית:</div>
                      <div className="space-y-1 text-sm">
                        <div>בנק: בנק הפועלים (12)</div>
                        <div>סניף: 001</div>
                        <div>חשבון: 12345-678-90123</div>
                        <div>על שם: LeadGrid Solutions Ltd</div>
                      </div>
                      <div className="text-xs text-blue-300">
                        אנא שלח אישור העברה לאימייל: payments@leadgrid.co.il
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {selectedMethod === 'bit' && (
                <Card className="bg-purple-900/20 border-purple-600/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-purple-200">
                      <div className="text-lg font-medium mb-2">תשלום דרך Bit</div>
                      <div className="text-sm">
                        סרוק את הקוד או שלח ל: 050-123-4567
                      </div>
                      <div className="w-32 h-32 bg-white rounded-lg mx-auto mt-4 flex items-center justify-center">
                        <span className="text-black text-xs">QR CODE</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Details */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">פרטי יצירת קשר</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">אימייל</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="bg-gray-700 border-gray-600 text-white mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-white">טלפון</Label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="050-123-4567"
                      className="bg-gray-700 border-gray-600 text-white mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">סיכום הזמנה</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderDetails.service && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">{orderDetails.service}:</span>
                      <span className="text-white">₪{orderDetails.servicePrice}</span>
                    </div>
                  )}
                  
                  {orderDetails.domain && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">דומיין {orderDetails.domain}:</span>
                      <span className="text-white">כלול במחיר</span>
                    </div>
                  )}
                  
                  {orderDetails.hosting && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">אחסון {orderDetails.hosting}:</span>
                      <span className="text-white">כלול במחיר</span>
                    </div>
                  )}
                  
                  {orderDetails.domainHostingPrice && orderDetails.domainHostingPrice > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-300">דומיין ואחסון:</span>
                      <span className="text-white">₪{orderDetails.domainHostingPrice}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-white">סה״כ לתשלום:</span>
                      <span className="text-green-400">₪{totalAmount}</span>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div className="text-yellow-200 text-sm">
                        <div className="font-medium">מבצע מיוחד!</div>
                        <div>החודש הראשון של LeadGrid חינם</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-600/50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5" />
                    <div className="text-green-200 text-sm">
                      <div className="font-medium mb-1">תשלום מאובטח 100%</div>
                      <div>• הצפנת SSL 256-bit</div>
                      <div>• לא נשמור פרטי כרטיס</div>
                      <div>• זכות ביטול תוך 14 יום</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                    מעבד תשלום...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 ml-2" />
                    שלם עכשיו - ₪{totalAmount}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
