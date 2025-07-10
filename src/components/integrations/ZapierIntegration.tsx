
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Zap, TestTube, CheckCircle, AlertCircle } from 'lucide-react';

interface ZapierIntegrationProps {
  onConfigChange: (config: any) => void;
  currentConfig: any;
}

export const ZapierIntegration = ({ onConfigChange, currentConfig }: ZapierIntegrationProps) => {
  const [webhookUrl, setWebhookUrl] = useState(currentConfig?.webhookUrl || '');
  const [triggerEvents, setTriggerEvents] = useState(currentConfig?.triggerEvents || []);
  const [isEnabled, setIsEnabled] = useState(currentConfig?.enabled || false);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const { toast } = useToast();

  const eventTypes = [
    { value: 'form_submit', label: 'שליחת טופס' },
    { value: 'page_view', label: 'צפייה בעמוד' },
    { value: 'button_click', label: 'לחיצה על כפתור' },
    { value: 'email_signup', label: 'הרשמה לניוזלטר' },
    { value: 'purchase', label: 'רכישה' },
    { value: 'video_play', label: 'השמעת וידאו' },
    { value: 'popup_open', label: 'פתיחת פופ-אפ' },
    { value: 'scroll_percentage', label: 'גלילה באחוזים' }
  ];

  const handleEventToggle = (eventType: string) => {
    const newEvents = triggerEvents.includes(eventType)
      ? triggerEvents.filter((e: string) => e !== eventType)
      : [...triggerEvents, eventType];
    
    setTriggerEvents(newEvents);
    updateConfig({ triggerEvents: newEvents });
  };

  const updateConfig = (updates: any) => {
    const newConfig = {
      ...currentConfig,
      ...updates,
      enabled: isEnabled,
      webhookUrl,
      triggerEvents
    };
    onConfigChange(newConfig);
  };

  const testWebhook = async () => {
    if (!webhookUrl) {
      toast({
        title: "שגיאה",
        description: "יש להזין כתובת Webhook תחילה",
        variant: "destructive"
      });
      return;
    }

    setIsTestingConnection(true);
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          test: true,
          timestamp: new Date().toISOString(),
          event_type: 'test_connection',
          page_url: window.location.href,
          user_agent: navigator.userAgent
        })
      });

      toast({
        title: "בדיקת חיבור נשלחה",
        description: "הבקשה נשלחה ל-Zapier. בדוק בהיסטוריית ה-Zap שלך אם הוא התעורר."
      });
      
    } catch (error) {
      console.error('Error testing webhook:', error);
      toast({
        title: "שגיאה בבדיקה",
        description: "לא ניתן לשלוח בקשת בדיקה. ודא שכתובת ה-Webhook נכונה.",
        variant: "destructive"
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  const handleSave = () => {
    updateConfig({
      enabled: isEnabled,
      webhookUrl,
      triggerEvents
    });
    
    toast({
      title: "הגדרות נשמרו",
      description: "אינטגרציית Zapier הוגדרה בהצלחה"
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-400" />
            אינטגרציית Zapier
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white text-base font-medium">הפעל אינטגרציית Zapier</Label>
              <p className="text-gray-400 text-sm">חבר את הדף שלך לאלפי אפליקציות דרך Zapier</p>
            </div>
            <Switch
              checked={isEnabled}
              onCheckedChange={(checked) => {
                setIsEnabled(checked);
                updateConfig({ enabled: checked });
              }}
            />
          </div>

          {isEnabled && (
            <>
              <div className="space-y-2">
                <Label className="text-white">כתובת Webhook URL</Label>
                <div className="flex gap-2">
                  <Input
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    className="bg-gray-700 border-gray-600 text-white flex-1"
                  />
                  <Button
                    onClick={testWebhook}
                    disabled={!webhookUrl || isTestingConnection}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    <TestTube className="w-4 h-4 mr-1" />
                    {isTestingConnection ? 'בודק...' : 'בדוק'}
                  </Button>
                </div>
                <p className="text-gray-400 text-xs">
                  העתק את כתובת ה-Webhook מה-Zap שלך ב-Zapier
                </p>
              </div>

              <div className="space-y-4">
                <Label className="text-white text-base">אירועים שמעוררים את ה-Zap</Label>
                <div className="grid grid-cols-2 gap-3">
                  {eventTypes.map((event) => (
                    <div key={event.value} className="flex items-center space-x-2 space-x-reverse">
                      <Switch
                        checked={triggerEvents.includes(event.value)}
                        onCheckedChange={() => handleEventToggle(event.value)}
                        id={event.value}
                      />
                      <Label htmlFor={event.value} className="text-white text-sm">
                        {event.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="text-blue-200 font-medium mb-1">איך להגדיר Zapier</h4>
                    <ol className="text-blue-300 text-sm space-y-1 list-decimal list-inside">
                      <li>צור Zap חדש ב-Zapier</li>
                      <li>בחר "Webhooks by Zapier" כ-Trigger</li>
                      <li>בחר "Catch Hook" כ-Trigger Event</li>
                      <li>העתק את כתובת ה-Webhook לכאן</li>
                      <li>לחץ על "בדוק" כדי לוודא שהחיבור עובד</li>
                      <li>בחר את האפליקציה שתרצה לחבר כ-Action</li>
                    </ol>
                  </div>
                </div>
              </div>

              <Button onClick={handleSave} className="w-full bg-green-600 hover:bg-green-700">
                <CheckCircle className="w-4 h-4 mr-1" />
                שמור הגדרות Zapier
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
