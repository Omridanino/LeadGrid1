
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { 
  CreditCard, 
  Smartphone, 
  Wallet, 
  Building2, 
  Globe,
  CheckCircle,
  AlertCircle,
  Copy,
  X,
  ArrowLeft,
  ArrowRight,
  Loader2
} from 'lucide-react';

interface PaymentMethodsWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (paymentMethod: string, paymentData: any) => void;
  totalAmount: number;
  orderDetails: {
    domain: string;
    hosting: string;
    years: number;
  };
}

type PaymentMethod = 'bit' | 'paybox' | 'paypal' | 'bank_transfer' | 'credit_card';
type PaymentStep = 'select' | 'payment' | 'confirmation';

interface BankDetails {
  bank: string;
  branch: string;
  account: string;
  accountName: string;
  swift?: string;
}

const BANK_ACCOUNTS: BankDetails[] = [
  {
    bank: "בנק לאומי",
    branch: "123",
    account: "12-345-67890",
    accountName: "Leadgrid Solutions Ltd",
    swift: "LUMIILIT"
  },
  {
    bank: "בנק הפועלים",
    branch: "456",
    account: "12-345-67891",
    accountName: "Leadgrid Solutions Ltd",
    swift: "POALILIT"
  }
];

export const PaymentMethodsWizard = ({ 
  isOpen, 
  onClose, 
  onComplete, 
  totalAmount, 
  orderDetails 
}: PaymentMethodsWizardProps) => {
  const [currentStep, setCurrentStep] = useState<PaymentStep>('select');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState('');
  const [paymentData, setPaymentData] = useState<any>({});

  const paymentMethods = [
    {
      id: 'bit' as PaymentMethod,
      name: 'ביט',
      description: 'תשלום מיידי דרך אפליקציית ביט',
      icon: Smartphone,
      color: 'bg-blue-600',
      popular: true
    },
    {
      id: 'paybox' as PaymentMethod,
      name: 'PayBox',
      description: 'כרטיס אשראי דרך PayBox',
      icon: CreditCard,
      color: 'bg-green-600',
      popular: true
    },
    {
      id: 'paypal' as PaymentMethod,
      name: 'PayPal',
      description: 'תשלום בינלאומי דרך PayPal',
      icon: Globe,
      color: 'bg-blue-500',
      popular: false
    },
    {
      id: 'credit_card' as PaymentMethod,
      name: 'כרטיס אשראי',
      description: 'תשלום ישיר בכרטיס אשראי',
      icon: CreditCard,
      color: 'bg-purple-600',
      popular: false
    },
    {
      id: 'bank_transfer' as PaymentMethod,
      name: 'העברה בנקאית',
      description: 'העברה ישירה לחשבון הבנק',
      icon: Building2,
      color: 'bg-gray-600',
      popular: false
    }
  ];

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setCurrentStep('payment');
  };

  const handleBitPayment = async () => {
    setIsProcessing(true);
    setProcessingMessage('מכין קישור ביט...');
    
    try {
      // Simulate Bit payment link generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const bitLink = `bit://pay?amount=${totalAmount}&recipient=Leadgrid&reference=ORDER_${Date.now()}`;
      
      setPaymentData({
        bitLink,
        qrCode: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==`
      });
      
      setCurrentStep('confirmation');
    } catch (error) {
      console.error('Bit payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayBoxPayment = async () => {
    setIsProcessing(true);
    setProcessingMessage('מעביר ל-PayBox...');
    
    try {
      // Simulate PayBox integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const payboxUrl = `https://pay.payboxapp.com/checkout?amount=${totalAmount}&merchant=leadgrid&order=${Date.now()}`;
      window.open(payboxUrl, '_blank');
      
      setPaymentData({ payboxUrl });
      setCurrentStep('confirmation');
    } catch (error) {
      console.error('PayBox payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayPalPayment = async () => {
    setIsProcessing(true);
    setProcessingMessage('מעביר ל-PayPal...');
    
    try {
      // Simulate PayPal integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const paypalUrl = `https://www.paypal.com/checkout?amount=${totalAmount}&currency=ILS&item=Domain+Hosting`;
      window.open(paypalUrl, '_blank');
      
      setPaymentData({ paypalUrl });
      setCurrentStep('confirmation');
    } catch (error) {
      console.error('PayPal payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCreditCardPayment = async () => {
    setCurrentStep('confirmation');
    setPaymentData({ 
      requiresManualProcessing: true,
      message: 'נא המתן לקשר מצוות השירות לביצוע התשלום'
    });
  };

  const handleBankTransfer = () => {
    setCurrentStep('confirmation');
    setPaymentData({ 
      bankAccounts: BANK_ACCOUNTS,
      transferReference: `LEADGRID-${Date.now()}`
    });
  };

  const processPayment = async () => {
    if (!selectedMethod) return;

    switch (selectedMethod) {
      case 'bit':
        await handleBitPayment();
        break;
      case 'paybox':
        await handlePayBoxPayment();
        break;
      case 'paypal':
        await handlePayPalPayment();
        break;
      case 'credit_card':
        await handleCreditCardPayment();
        break;
      case 'bank_transfer':
        handleBankTransfer();
        break;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast notification here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">בחירת אמצעי תשלום</h2>
              <p className="text-gray-400">בחר את אמצעי התשלום המועדף עליך</p>
            </div>
            <Button onClick={onClose} size="sm" className="bg-gray-700 hover:bg-gray-600">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Order Summary */}
          <Card className="bg-gray-800 border-gray-700 mt-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-300">דומיין: {orderDetails.domain}</span>
                <span className="text-gray-300">אחסון: {orderDetails.hosting}</span>
                <span className="text-white font-bold">סה"כ: ₪{totalAmount}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6">
              {currentStep === 'select' && (
                <div className="space-y-4">
                  <h3 className="text-white text-lg font-semibold text-center mb-6">
                    בחר אמצעי תשלום
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <Card 
                          key={method.id}
                          className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700 transition-all"
                          onClick={() => handlePaymentMethodSelect(method.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className={`${method.color} p-3 rounded-lg`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-white font-semibold">{method.name}</h4>
                                  {method.popular && (
                                    <Badge className="bg-blue-600 text-white text-xs">פופולרי</Badge>
                                  )}
                                </div>
                                <p className="text-gray-400 text-sm">{method.description}</p>
                              </div>
                              <ArrowLeft className="w-5 h-5 text-gray-400" />
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {currentStep === 'payment' && selectedMethod && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {paymentMethods.find(m => m.id === selectedMethod)?.name}
                    </h3>
                    <p className="text-gray-400">סכום לתשלום: ₪{totalAmount}</p>
                  </div>

                  {isProcessing ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                      <p className="text-white">{processingMessage}</p>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <Button
                        onClick={processPayment}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                        size="lg"
                      >
                        המשך לתשלום
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {currentStep === 'confirmation' && selectedMethod && (
                <div className="space-y-6">
                  {selectedMethod === 'bit' && paymentData.bitLink && (
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white text-center">תשלום ביט</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-center">
                          <p className="text-gray-300 mb-4">לחץ על הקישור או סרוק את הקוד:</p>
                          <Button
                            onClick={() => window.open(paymentData.bitLink, '_blank')}
                            className="bg-blue-600 hover:bg-blue-700 mb-4"
                          >
                            פתח ביט לתשלום
                          </Button>
                        </div>
                        
                        <div className="border-t border-gray-700 pt-4">
                          <p className="text-gray-400 text-sm text-center">
                            לאחר ביצוע התשלום, נקבל אישור אוטומטי ונתחיל להגדיר את האתר שלך
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {selectedMethod === 'bank_transfer' && paymentData.bankAccounts && (
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">פרטי העברה בנקאית</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                          <div className="flex items-center gap-2 text-blue-300 mb-2">
                            <AlertCircle className="w-5 h-5" />
                            <span className="font-medium">חשוב לציין בהעברה:</span>
                          </div>
                          <p className="text-blue-200">
                            אסמכתא: {paymentData.transferReference}
                          </p>
                          <Button
                            onClick={() => copyToClipboard(paymentData.transferReference)}
                            size="sm"
                            className="mt-2 bg-blue-600 hover:bg-blue-700"
                          >
                            <Copy className="w-4 h-4 ml-2" />
                            העתק אסמכתא
                          </Button>
                        </div>

                        {paymentData.bankAccounts.map((bank: BankDetails, index: number) => (
                          <Card key={index} className="bg-gray-700 border-gray-600">
                            <CardContent className="p-4">
                              <h4 className="text-white font-semibold mb-2">{bank.bank}</h4>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-400">מספר חשבון:</span>
                                  <span className="text-white">{bank.account}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">שם המוטב:</span>
                                  <span className="text-white">{bank.accountName}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">מספר סניף:</span>
                                  <span className="text-white">{bank.branch}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
                          <p className="text-yellow-200 text-sm">
                            לאחר ביצוע ההעברה, אנא שלח אלינו צילום מסך של האישור ל-support@leadgrid.com
                            או דרך ווטסאפ: 050-1234567
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {(selectedMethod === 'paybox' || selectedMethod === 'paypal') && (
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6 text-center">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">העברה לתשלום</h3>
                        <p className="text-gray-300">
                          נפתח חלון חדש עם מערכת התשלום. אנא השלם את התשלום שם.
                        </p>
                        <p className="text-gray-400 text-sm mt-4">
                          לאחר ביצוע התשלום בהצלחה, תקבל מייל אישור ונתחיל להגדיר את האתר שלך.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {selectedMethod === 'credit_card' && paymentData.requiresManualProcessing && (
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6 text-center">
                        <CreditCard className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">תשלום בכרטיס אשראי</h3>
                        <p className="text-gray-300 mb-4">
                          נציג שירות יצור איתך קשר תוך 30 דקות לביצוע התשלום הבטוח
                        </p>
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30">
                          <p className="text-blue-200 text-sm">
                            📞 טלפון: 03-1234567<br/>
                            📧 אימייל: payments@leadgrid.com<br/>
                            💬 ווטסאפ: 050-1234567
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex justify-center pt-6">
                    <Button
                      onClick={() => onComplete(selectedMethod, paymentData)}
                      className="bg-green-600 hover:bg-green-700 px-8"
                    >
                      <CheckCircle className="w-4 h-4 ml-2" />
                      אישור והמשך
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Footer Navigation */}
        {currentStep !== 'confirmation' && (
          <div className="p-6 border-t border-gray-800 flex justify-between">
            <Button
              onClick={() => {
                if (currentStep === 'payment') {
                  setCurrentStep('select');
                  setSelectedMethod(null);
                }
              }}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
              disabled={currentStep === 'select'}
            >
              <ArrowRight className="w-4 h-4 ml-2" />
              חזור
            </Button>
            
            <div className="text-gray-400 text-sm">
              צעד {currentStep === 'select' ? '1' : currentStep === 'payment' ? '2' : '3'} מתוך 3
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
