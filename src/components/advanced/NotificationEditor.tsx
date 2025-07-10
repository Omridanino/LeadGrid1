
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bell, Mail, MessageSquare, Plus, Trash2 } from 'lucide-react';

interface NotificationEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const NotificationEditor = ({ onUpdate, currentData }: NotificationEditorProps) => {
  const [notifications, setNotifications] = useState(currentData?.notifications || []);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      type: 'social-proof',
      message: 'יוסי מתל אביב רכש עכשיו!',
      interval: 10000,
      enabled: true,
      position: 'bottom-left'
    };
    const updatedNotifications = [...notifications, newNotification];
    setNotifications(updatedNotifications);
    onUpdate({ notifications: updatedNotifications });
  };

  const updateNotification = (id: number, updates: any) => {
    const updatedNotifications = notifications.map((notification: any) => 
      notification.id === id ? { ...notification, ...updates } : notification
    );
    setNotifications(updatedNotifications);
    onUpdate({ notifications: updatedNotifications });
  };

  const removeNotification = (id: number) => {
    const updatedNotifications = notifications.filter((notification: any) => notification.id !== id);
    setNotifications(updatedNotifications);
    onUpdate({ notifications: updatedNotifications });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-yellow-500" />
            התראות וחוקי FOMO
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={addNotification} className="bg-yellow-600 hover:bg-yellow-700 w-full">
            <Plus className="w-4 h-4 mr-1" />
            הוסף התראה חדשה
          </Button>

          {notifications.map((notification: any) => (
            <Card key={notification.id} className="bg-gray-700 border-gray-600">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={notification.enabled}
                      onCheckedChange={(checked) => updateNotification(notification.id, { enabled: checked })}
                    />
                    <Label className="text-white">התראה פעילה</Label>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeNotification(notification.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div>
                  <Label className="text-white">סוג התראה</Label>
                  <Select 
                    value={notification.type} 
                    onValueChange={(value) => updateNotification(notification.id, { type: value })}
                  >
                    <SelectTrigger className="bg-gray-600 border-gray-500 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-600 border-gray-500">
                      <SelectItem value="social-proof" className="text-white">Social Proof</SelectItem>
                      <SelectItem value="stock-alert" className="text-white">התראת מלאי</SelectItem>
                      <SelectItem value="discount-timer" className="text-white">טיימר הנחה</SelectItem>
                      <SelectItem value="visitor-count" className="text-white">מספר מבקרים</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white">הודעה</Label>
                  <Input
                    value={notification.message}
                    onChange={(e) => updateNotification(notification.id, { message: e.target.value })}
                    className="bg-gray-600 border-gray-500 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white">מיקום</Label>
                  <Select 
                    value={notification.position} 
                    onValueChange={(value) => updateNotification(notification.id, { position: value })}
                  >
                    <SelectTrigger className="bg-gray-600 border-gray-500 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-600 border-gray-500">
                      <SelectItem value="top-left" className="text-white">למעלה שמאל</SelectItem>
                      <SelectItem value="top-right" className="text-white">למעלה ימין</SelectItem>
                      <SelectItem value="bottom-left" className="text-white">למטה שמאל</SelectItem>
                      <SelectItem value="bottom-right" className="text-white">למטה ימין</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white">מרווח זמן (אלפיות שנייה)</Label>
                  <Input
                    type="number"
                    value={notification.interval}
                    onChange={(e) => updateNotification(notification.id, { interval: parseInt(e.target.value) })}
                    className="bg-gray-600 border-gray-500 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
