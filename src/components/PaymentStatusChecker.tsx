
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Clock, AlertCircle, X, RefreshCw, ExternalLink } from 'lucide-react';
import { RealDomainService, PurchaseStatus } from '@/services/realDomainService';

interface PaymentStatusCheckerProps {
  orderId: string;
  onStatusUpdate: (status: PurchaseStatus) => void;
  onClose: () => void;
}

export const PaymentStatusChecker = ({ orderId, onStatusUpdate, onClose }: PaymentStatusCheckerProps) => {
  const [status, setStatus] = useState<PurchaseStatus | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkPaymentStatus = async () => {
    setIsChecking(true);
    try {
      const paymentStatus = await RealDomainService.verifyPaymentStatus(orderId);
      setStatus(paymentStatus);
      setLastChecked(new Date());
      onStatusUpdate(paymentStatus);
    } catch (error) {
      console.error('שגיאה בבדיקת סטטוס תשלום:', error);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    checkPaymentStatus();
    
    // בדיקה אוטומטית כל 30 שניות אם הסטטוס עדיין ממתין
    const interval = setInterval(() => {
      if (status?.status === 'pending' || status?.status === 'processing') {
        checkPaymentStatus();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [orderId]);

  const getStatusIcon = () => {
    if (!status) return <Clock className="w-5 h-5 text-gray-400" />;
    
    switch (status.status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing': return <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'pending': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'failed': return <X className="w-5 h-5 text-red-500" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    if (!status) return 'secondary';
    
    switch (status.status) {
      case 'completed': return 'bg-green-500';
      case 'processing': return 'bg-blue-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'secondary';
    }
  };

  const getStatusText = () => {
    if (!status) return 'בודק סטטוס...';
    
    switch (status.status) {
      case 'completed': return 'הושלם בהצלחה';
      case 'processing': return 'בעיבוד';
      case 'pending': return 'ממתין לתשלום';
      case 'failed': return 'נכשל';
      default: return 'לא ידוע';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <Card className="bg-white w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {getStatusIcon()}
              סטטוס התשלום
            </CardTitle>
            <Button onClick={onClose} variant="outline" size="sm">
              ✕
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">מספר הזמנה: {orderId}</div>
            <Badge className={getStatusColor()}>
              {getStatusText()}
            </Badge>
          </div>

          {status && (
            <div className="space-y-3">
              {status.domain && (
                <div className="flex justify-between">
                  <span className="text-gray-600">דומיין:</span>
                  <span className="font-medium">{status.domain}</span>
                </div>
              )}
              
              {status.hostingPlan && (
                <div className="flex justify-between">
                  <span className="text-gray-600">אחסון:</span>
                  <span className="font-medium">{status.hostingPlan}</span>
                </div>
              )}
              
              {status.totalAmount && (
                <div className="flex justify-between">
                  <span className="text-gray-600">סכום:</span>
                  <span className="font-medium">₪{status.totalAmount}</span>
                </div>
              )}
              
              {status.paymentMethod && (
                <div className="flex justify-between">
                  <span className="text-gray-600">אמצעי תשלום:</span>
                  <span className="font-medium">{status.paymentMethod}</span>
                </div>
              )}
              
              {status.message && (
                <Alert>
                  <AlertDescription>{status.message}</AlertDescription>
                </Alert>
              )}
              
              {status.websiteUrl && status.status === 'completed' && (
                <div className="pt-4 border-t">
                  <Button
                    onClick={() => window.open(status.websiteUrl, '_blank')}
                    className="w-full"
                    variant="outline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    צפה באתר
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between items-center pt-4 border-t">
            <Button
              onClick={checkPaymentStatus}
              disabled={isChecking}
              variant="outline"
              size="sm"
            >
              {isChecking ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  בודק...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  בדוק שוב
                </>
              )}
            </Button>
            
            {lastChecked && (
              <div className="text-xs text-gray-500">
                עודכן: {lastChecked.toLocaleTimeString('he-IL')}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
