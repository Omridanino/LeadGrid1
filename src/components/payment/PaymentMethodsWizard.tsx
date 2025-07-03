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
  Loader2,
  ExternalLink,
  Phone,
  Mail,
  MessageCircle,
  Shield
} from 'lucide-react';
import { RealDomainService, COMPANY_DETAILS, BANK_ACCOUNTS } from '@/services/realDomainService';

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

type PaymentMethod = 'paybox' | 'tranzila' | 'paypal' | 'bank_transfer' | 'credit_card';
type PaymentStep = 'select' | 'payment' | 'confirmation';

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
  const [orderId] = useState(`ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  const paymentMethods = [
    {
      id: 'paybox' as PaymentMethod,
      name: 'PayBox',
      description: 'כרטיס אשראי מאובטח - אימות אוטומטי',
      icon: CreditCard,
      color: 'bg-green-600',
      popular: true,
      secure: true
    },
    {
      id: 'tranzila' as PaymentMethod,
      name: 'Tranzila',
      description: 'תשלום מאובטח - אימות מיידי',
      icon: Shield,
      color: 'bg-blue-600',
      popular: true,
      secure: true
    },
    {
      id: 'paypal' as PaymentMethod,
      name: 'PayPal',
      description: `תשלום לחשבון ${COMPANY_DETAILS.email}`,
      icon: Globe,
      color: 'bg-blue-500',
      popular: false,
      secure: false
    },
    {
      id: 'credit_card' as PaymentMethod,
      name: 'כרטיס אשראי',
      description: 'תשלום טלפוני בכרטיס אשראי',
      icon: CreditCard,
      color: 'bg-purple-600',
      popular: false,
      secure: false
    },
    {
      id: 'bank_transfer' as PaymentMethod,
      name: 'העברה בנקאית',
      description: 'העברה ישירה לחשבון הבנק',
      icon: Building2,
      color: 'bg-gray-600',
      popular: false,
      secure: false
    }
  ];

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setCurrentStep('payment');
  };

  const customerInfo = {
    name: 'לקוח לדוגמה',
    email: 'customer@example.com',
    phone: '050-1234567'
  };

  const processPayment = async () => {
    if (!selectedMethod) return;
    
    setIsProcessing(true);
    setProcessingMessage('מעבד תשלום מאובטח...');

    try {
      const result = await RealDomainService.processPayment(
        totalAmount, 
        selectedMethod, 
        {}, 
        orderId, 
        customerInfo
      );

      setPaymentData(result.paymentData || {});
      
      // Handle different payment methods
      if ((selectedMethod === 'paybox' || selectedMethod === 'tranzila' || selectedMethod === 'paypal') && result.paymentUrl) {
        window.open(result.paymentUrl, '_blank');
      }
      
      setCurrentStep('confirmation');
    } catch (error) {
      console.error('Payment processing failed:', error);
      alert(`תשלום נכשל: ${error.message}`);
    } finally {
      setIsProcessing(false);
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
              <h2 className="text-white text-2xl font-bold">בחירת אמצעי תשלום מאובטח</h2>
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

          {/* Secure Payment Notice */}
          <Card className="bg-green-900/20 border-green-700/30 mt-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-green-200">
                <Shield className="w-5 h-5" />
                <div className="text-sm">
                  <div className="font-medium">תשלום מאובטח עם אימות מיידי</div>
                  <div>PayBox ו-Tranzila מאמתים את התשלום אוטומטית - האתר יהיה זמין מיד!</div>
                </div>
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
                    בחר אמצעי תשלום מאובטח
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <Card 
                          key={method.id}
                          className={`
                            bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700 transition-all relative
                            ${method.secure ? 'ring-2 ring-green-500/30' : ''}
                          `}
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
                                  {method.secure && (
                                    <Badge className="bg-green-600 text-white text-xs">מאובטח</Badge>
                                  )}
                                </div>
                                <p className="text-gray-400 text-sm">{method.description}</p>
                              </div>
                              <ArrowLeft className="w-5 h-5 text-gray-400" />
                            </div>
                            {method.secure && (
                              <div className="mt-3 text-xs text-green-300 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                אימות אוטומטי - האתר יהיה זמין מיד
                              </div>
                            )}
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
                        המשך לתשלום מאובטח
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {currentStep === 'confirmation' && selectedMethod && (
                <div className="space-y-6">
                  {(selectedMethod === 'paybox' || selectedMethod === 'tranzila') && (
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white text-center">
                          תשלום מאובטח - {selectedMethod === 'paybox' ? 'PayBox' : 'Tranzila'}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/30 text-center">
                          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                          <h3 className="text-green-200 text-xl font-semibold mb-2">
                            תשלום מאובטח נפתח!
                          </h3>
                          <p className="text-green-300 mb-4">
                            נפתח חלון חדש עם מערכת התשלום המאובטחת של {selectedMethod === 'paybox' ? 'PayBox' : 'Tranzila'}.
                          </p>
                          
                          {paymentData.url && (
                            <Button
                              onClick={() => window.open(paymentData.url, '_blank')}
                              className="bg-green-600 hover:bg-green-700 mb-4"
                            >
                              <ExternalLink className="w-4 h-4 ml-2" />
                              פתח חלון תשלום
                            </Button>
                          )}
                          
                          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-700/30">
                            <p className="text-blue-200 text-sm">
                              🔒 התשלום יאומת אוטומטית והאתר שלך יהיה זמין מיד לאחר התשלום!
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {selectedMethod === 'paypal' && (
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6 text-center">
                        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">תשלום PayPal</h3>
                        <p className="text-gray-300 mb-4">
                          נפתח חלון חדש עם מערכת התשלום המאובטחת.
                        </p>
                        
                        <div className="bg-blue-900/20 p-3 rounded-lg mb-4">
                          <p className="text-blue-200 text-sm">
                            תשלום לחשבון PayPal: {paymentData.merchantEmail}
                          </p>
                        </div>

                        {paymentData.url && (
                          <Button
                            onClick={() => window.open(paymentData.url, '_blank')}
                            className="bg-green-600 hover:bg-green-700 mb-4"
                          >
                            <ExternalLink className="w-4 h-4 ml-2" />
                            פתח חלון תשלום
                          </Button>
                        )}
                        <p className="text-gray-400 text-sm">
                          לאחר ביצוע התשלום בהצלחה, תקבל מייל אישור ונתחיל להגדיר את האתר שלך.
                        </p>
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
                          <p className="text-blue-200 font-mono text-lg">
                            אסמכתא: {paymentData.transferReference}
                          </p>
                          <p className="text-blue-200 text-sm mt-1">
                            סכום: ₪{paymentData.amount}
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

                        {BANK_ACCOUNTS.map((bank, index) => (
                          <Card key={index} className="bg-gray-700 border-gray-600">
                            <CardContent className="p-4">
                              <h4 className="text-white font-semibold mb-3 text-lg">{bank.bank}</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-400">מספר חשבון:</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-white font-mono">{bank.account}</span>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => copyToClipboard(bank.account)}
                                      className="h-6 w-6 p-0"
                                    >
                                      <Copy className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">שם המוטב:</span>
                                  <span className="text-white">{bank.accountName}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-400">מספר סניף:</span>
                                  <span className="text-white">{bank.branch}</span>
                                </div>
                                {bank.iban && (
                                  <div className="flex justify-between items-center">
                                    <span className="text-gray-400">IBAN:</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-white font-mono text-xs">{bank.iban}</span>
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => copyToClipboard(bank.iban)}
                                        className="h-6 w-6 p-0"
                                      >
                                        <Copy className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/30">
                          <div className="space-y-2">
                            <p className="text-yellow-200 text-sm font-medium">
                              לאחר ביצוע ההעברה, אנא שלח אישור לאחד מהכתובות הבאות:
                            </p>
                            <div className="space-y-1 text-yellow-200 text-sm">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>{COMPANY_DETAILS.supportEmail}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                <span>ווטסאפ: {COMPANY_DETAILS.whatsapp}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {selectedMethod === 'credit_card' && paymentData.contactInfo && (
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6 text-center">
                        <CreditCard className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                        <h3 className="text-white text-xl font-semibold mb-2">תשלום בכרטיס אשראי</h3>
                        <p className="text-gray-300 mb-4">
                          {paymentData.message}
                        </p>
                        <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/30 space-y-3">
                          <div className="text-blue-200 text-sm space-y-2">
                            <div className="flex items-center justify-center gap-2">
                              <Phone className="w-4 h-4" />
                              <span>טלפון: {COMPANY_DETAILS.phone}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                              <Mail className="w-4 h-4" />
                              <span>אימייל: {COMPANY_DETAILS.email}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                              <MessageCircle className="w-4 h-4" />
                              <span>ווטסאפ: {COMPANY_DETAILS.whatsapp}</span>
                            </div>
                          </div>
                          
                          {paymentData.whatsappLink && (
                            <Button
                              onClick={() => window.open(paymentData.whatsappLink, '_blank')}
                              className="bg-green-600 hover:bg-green-700 w-full"
                            >
                              <MessageCircle className="w-4 h-4 ml-2" />
                              שלח הודעה בווטסאפ
                            </Button>
                          )}
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
