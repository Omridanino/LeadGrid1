
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  RefreshCw,
  ExternalLink,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import { RealDomainService, PurchaseStatus, COMPANY_DETAILS } from '@/services/realDomainService';

interface PaymentStatusCheckerProps {
  orderId: string;
  onStatusUpdate?: (status: PurchaseStatus) => void;
}

export const PaymentStatusChecker = ({ orderId, onStatusUpdate }: PaymentStatusCheckerProps) => {
  const [status, setStatus] = useState<PurchaseStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkPaymentStatus = async () => {
    setIsLoading(true);
    try {
      const purchaseStatus = await RealDomainService.verifyPaymentStatus(orderId);
      setStatus(purchaseStatus);
      setLastChecked(new Date());
      
      if (purchaseStatus && onStatusUpdate) {
        onStatusUpdate(purchaseStatus);
      }
    } catch (error) {
      console.error('Failed to check payment status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkPaymentStatus();
    
    // Check status every 30 seconds
    const interval = setInterval(checkPaymentStatus, 30000);
    return () => clearInterval(interval);
  }, [orderId]);

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          color: 'bg-yellow-600',
          icon: Clock,
          text: 'ממתין',
          description: 'ההזמנה נוצרה ומחכה לתשלום'
        };
      case 'awaiting_payment':
        return {
          color: 'bg-orange-600',
          icon: Clock,
          text: 'ממתין לתשלום',
          description: 'התשלום נשלח ומחכה לאישור'
        };
      case 'payment_verified':
        return {
          color: 'bg-blue-600',
          icon: CheckCircle,
          text: 'תשלום אושר',
          description: 'התשלום אושר והאתר בהכנה'
        };
      case 'completed':
        return {
          color: 'bg-green-600',
          icon: CheckCircle,
          text: 'הושלם',
          description: 'האתר מוכן ופעיל!'
        };
      case 'failed':
        return {
          color: 'bg-red-600',
          icon: AlertCircle,
          text: 'נכשל',
          description: 'יש בעיה עם ההזמנה'
        };
      default:
        return {
          color: 'bg-gray-600',
          icon: AlertCircle,
          text: 'לא ידוע',
          description: 'סטטוס לא ידוע'
        };
    }
  };

  if (!status) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center">
          <div className="text-gray-400">בודק סטטוס הזמנה...</div>
        </CardContent>
      </Card>
    );
  }

  const statusInfo = getStatusInfo(status.status);
  const StatusIcon = statusInfo.icon;

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <StatusIcon className="w-5 h-5" />
          סטטוס הזמנה #{status.orderId}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">סטטוס:</span>
          <Badge className={statusInfo.color}>
            {statusInfo.text}
          </Badge>
        </div>
        
        <p className="text-gray-400 text-sm">{statusInfo.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">דומיין:</span>
            <span className="text-white">{status.domain}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">חבילה:</span>
            <span className="text-white">{status.hostingPlan}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">סכום:</span>
            <span className="text-white">₪{status.totalAmount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">אמצעי תשלום:</span>
            <span className="text-white">{status.paymentMethod}</span>
          </div>
        </div>

        {status.websiteUrl && status.status === 'completed' && (
          <div className="bg-green-900/20 p-3 rounded-lg border border-green-700/30">
            <div className="text-green-200 text-sm font-medium mb-2">
              🎉 האתר שלך מוכן!
            </div>
            <Button
              onClick={() => window.open(status.websiteUrl, '_blank')}
              className="bg-green-600 hover:bg-green-700 w-full"
            >
              <ExternalLink className="w-4 h-4 ml-2" />
              בקר באתר שלך
            </Button>
          </div>
        )}

        {(status.status === 'awaiting_payment' || status.status === 'pending') && (
          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-700/30">
            <div className="text-blue-200 text-sm font-medium mb-2">
              זקוק לעזרה או יש שאלות?
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-300 text-xs">
                <Phone className="w-3 h-3" />
                <span>{COMPANY_DETAILS.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300 text-xs">
                <Mail className="w-3 h-3" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
              <Button
                onClick={() => window.open(`https://wa.me/972${COMPANY_DETAILS.whatsapp.substring(1)}?text=שלום, אני רוצה לבדוק את סטטוס ההזמנה ${status.orderId}`, '_blank')}
                size="sm"
                className="bg-green-600 hover:bg-green-700 w-full mt-2"
              >
                <MessageCircle className="w-3 h-3 ml-2" />
                שלח הודעה בווטסאפ
              </Button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
          <span>עדכון אחרון: {lastChecked?.toLocaleTimeString('he-IL')}</span>
          <Button
            onClick={checkPaymentStatus}
            size="sm"
            variant="ghost"
            disabled={isLoading}
            className="text-gray-400 hover:text-white"
          >
            <RefreshCw className={`w-3 h-3 ml-1 ${isLoading ? 'animate-spin' : ''}`} />
            רענן
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
