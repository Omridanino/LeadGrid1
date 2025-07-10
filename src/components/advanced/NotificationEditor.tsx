
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Users, ShoppingCart, Timer, TrendingUp } from 'lucide-react';

interface NotificationEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const NotificationEditor = ({ onUpdate, currentData }: NotificationEditorProps) => {
  const [notificationData, setNotificationData] = useState({
    socialProof: currentData?.socialProof || false,
    recentActivity: currentData?.recentActivity || false,
    stockAlerts: currentData?.stockAlerts || false,
    discountTimers: currentData?.discountTimers || false,
    visitorCount: currentData?.visitorCount || false,
    ...currentData
  });

  useEffect(() => {
    onUpdate(notificationData);
  }, [notificationData, onUpdate]);

  const handleInputChange = (field: string, value: boolean) => {
    setNotificationData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Bell className="w-5 h-5" />
            התראות ו-FOMO
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="social-proof" className="text-white flex items-center gap-2">
                <Users className="w-4 h-4" />
                הוכחה חברתית
              </Label>
              <p className="text-sm text-gray-400">הצג הודעות על קניות של אחרים</p>
            </div>
            <Switch
              id="social-proof"
              checked={notificationData.socialProof}
              onCheckedChange={(checked) => handleInputChange('socialProof', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="recent-activity" className="text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                פעילות אחרונה
              </Label>
              <p className="text-sm text-gray-400">"מישהו רכש את המוצר לפני דקה"</p>
            </div>
            <Switch
              id="recent-activity"
              checked={notificationData.recentActivity}
              onCheckedChange={(checked) => handleInputChange('recentActivity', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="stock-alerts" className="text-white flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                התראות מלאי
              </Label>
              <p className="text-sm text-gray-400">"נשארו רק 3 יחידות במלאי"</p>
            </div>
            <Switch
              id="stock-alerts"
              checked={notificationData.stockAlerts}
              onCheckedChange={(checked) => handleInputChange('stockAlerts', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="discount-timers" className="text-white flex items-center gap-2">
                <Timer className="w-4 h-4" />
                טיימרי הנחה
              </Label>
              <p className="text-sm text-gray-400">ספירה לאחור למבצע מוגבל</p>
            </div>
            <Switch
              id="discount-timers"
              checked={notificationData.discountTimers}
              onCheckedChange={(checked) => handleInputChange('discountTimers', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="visitor-count" className="text-white flex items-center gap-2">
                <Users className="w-4 h-4" />
                מונה מבקרים
              </Label>
              <p className="text-sm text-gray-400">"127 אנשים צופים בעמוד עכשיו"</p>
            </div>
            <Switch
              id="visitor-count"
              checked={notificationData.visitorCount}
              onCheckedChange={(checked) => handleInputChange('visitorCount', checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
