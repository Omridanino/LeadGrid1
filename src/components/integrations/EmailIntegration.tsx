
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Mail, TestTube, CheckCircle, Settings, Users, Send } from 'lucide-react';

interface EmailIntegrationProps {
  onConfigChange: (config: any) => void;
  currentConfig: any;
}

export const EmailIntegration = ({ onConfigChange, currentConfig }: EmailIntegrationProps) => {
  const [selectedProvider, setSelectedProvider] = useState(currentConfig?.provider || 'mailchimp');
  const [apiKey, setApiKey] = useState(currentConfig?.apiKey || '');
  const [listId, setListId] = useState(currentConfig?.listId || '');
  const [isEnabled, setIsEnabled] = useState(currentConfig?.enabled || false);
  const [autoResponder, setAutoResponder] = useState(currentConfig?.autoResponder || {});
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const { toast } = useToast();

  const emailProviders = [
    { value: 'mailchimp', label: 'Mailchimp', description: 'הפלטפורמה הפופולרית ביותר לניהול רשימות תפוצה' },
    { value: 'activecampaign', label: 'ActiveCampaign', description: 'מערכת שיווק אוטומטי מתקדמת' },
    { value: 'getresponse', label: 'GetResponse', description: 'פתרון שיווק דיגיטלי מקיף' },
    { value: 'convertkit', label: 'ConvertKit', description: 'מותאם ליוצרי תוכן ובלוגרים' },
    { value: 'aweber', label: 'AWeber', description: 'פלטפורמה ותיקה ואמינה לשיווק במייל' },
    { value: 'moosend', label: 'Moosend', description: 'פתרון חסכוני ויעיל' },
    { value: 'rabmaser', label: 'רב מסר', description: 'הפלטפורמה הישראלית המובילה' },
    { value: 'activetrail', label: 'ActiveTrail', description: 'מערכת ישראלית מתקדמת לשיווק דיגיטלי' }
  ];

  const testConnection = async () => {
    if (!apiKey) {
      toast({
        title: "שגיאה",
        description: "יש להזין API Key תחילה",
        variant: "destructive"
      });
      return;
    }

    setIsTestingConnection(true);
    
    try {
      // Mock API test - in real implementation, this would test the actual API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "החיבור בוצע בהצלחה!",
        description: `החיבור ל-${emailProviders.find(p => p.value === selectedProvider)?.label} עובד תקין`
      });
      
    } catch (error) {
      toast({
        title: "שגיאה בחיבור",
        description: "לא ניתן להתחבר למערכת. ודא שה-API Key נכון.",
        variant: "destructive"
      });
    } finally {
      setIsTestingConnection(false);
    }
  };

  const updateConfig = (updates: any) => {
    const newConfig = {
      ...currentConfig,
      ...updates
    };
    onConfigChange(newConfig);
  };

  const handleSave = () => {
    updateConfig({
      enabled: isEnabled,
      provider: selectedProvider,
      apiKey,
      listId,
      autoResponder
    });
    
    toast({
      title: "הגדרות נשמרו",
      description: "אינטגרציית המייל הוגדרה בהצלחה"
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" />
            אינטגרציית מערכות דיוור
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div>
              <Label className="text-white text-base font-medium">הפעל אינטגרציית מייל</Label>
              <p className="text-gray-400 text-sm">חבר טפסים ישירות לרשימת התפוצה שלך</p>
            </div>
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
            />
          </div>

          {isEnabled && (
            <Tabs defaultValue="setup" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                <TabsTrigger value="setup" className="text-white">
                  <Settings className="w-4 h-4 mr-1" />
                  הגדרות בסיסיות
                </TabsTrigger>
                <TabsTrigger value="autoresponder" className="text-white">
                  <Send className="w-4 h-4 mr-1" />
                  מענה אוטומטי
                </TabsTrigger>
                <TabsTrigger value="lists" className="text-white">
                  <Users className="w-4 h-4 mr-1" />
                  רשימות ותגים
                </TabsTrigger>
              </TabsList>

              <TabsContent value="setup" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label className="text-white">בחר ספק שירות</Label>
                  <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      {emailProviders.map((provider) => (
                        <SelectItem key={provider.value} value={provider.value} className="text-white">
                          <div>
                            <div className="font-medium">{provider.label}</div>
                            <div className="text-xs text-gray-400">{provider.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">API Key</Label>
                  <div className="flex gap-2">
                    <Input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="הזן את ה-API Key שלך"
                      className="bg-gray-700 border-gray-600 text-white flex-1"
                    />
                    <Button
                      onClick={testConnection}
                      disabled={!apiKey || isTestingConnection}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <TestTube className="w-4 h-4 mr-1" />
                      {isTestingConnection ? 'בודק...' : 'בדוק'}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">מזהה רשימה (List ID)</Label>
                  <Input
                    value={listId}
                    onChange={(e) => setListId(e.target.value)}
                    placeholder="מזהה הרשימה שאליה יתווספו הלידים"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                  <h4 className="text-blue-200 font-medium mb-2">איך למצוא את ה-API Key?</h4>
                  <div className="text-blue-300 text-sm space-y-1">
                    <p><strong>Mailchimp:</strong> Account → Extras → API keys</p>
                    <p><strong>ActiveCampaign:</strong> Settings → Developer</p>
                    <p><strong>רב מסר:</strong> הגדרות → API</p>
                    <p><strong>ActiveTrail:</strong> הגדרות חשבון → API</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="autoresponder" className="space-y-4 mt-6">
                <div className="flex items-center justify-between">
                  <Label className="text-white">הפעל מענה אוטומטי</Label>
                  <Switch
                    checked={autoResponder.enabled || false}
                    onCheckedChange={(checked) => setAutoResponder({...autoResponder, enabled: checked})}
                  />
                </div>

                {autoResponder.enabled && (
                  <>
                    <div className="space-y-2">
                      <Label className="text-white">נושא ההודעה</Label>
                      <Input
                        value={autoResponder.subject || ''}
                        onChange={(e) => setAutoResponder({...autoResponder, subject: e.target.value})}
                        placeholder="תודה על ההרשמה!"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">תוכן ההודעה</Label>
                      <Textarea
                        value={autoResponder.message || ''}
                        onChange={(e) => setAutoResponder({...autoResponder, message: e.target.value})}
                        placeholder="היי [שם], תודה על ההרשמה לרשימת התפוצה שלנו!"
                        className="bg-gray-700 border-gray-600 text-white"
                        rows={6}
                      />
                      <p className="text-gray-400 text-xs">
                        אפשר להשתמש במשתנים: [שם], [אימייל], [תאריך]
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">דחיית שליחה (דקות)</Label>
                      <Input
                        type="number"
                        value={autoResponder.delay || '0'}
                        onChange={(e) => setAutoResponder({...autoResponder, delay: e.target.value})}
                        placeholder="0"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  </>
                )}
              </TabsContent>

              <TabsContent value="lists" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label className="text-white">תגים לליד חדש</Label>
                  <Input
                    value={currentConfig?.tags || ''}
                    onChange={(e) => updateConfig({tags: e.target.value})}
                    placeholder="ליד חדש, דף נחיתה, פרוספקט"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <p className="text-gray-400 text-xs">
                    הפרד תגים בפסיקים
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">שלח ללידים קיימים</Label>
                    <p className="text-gray-400 text-xs">האם לעדכן גם לידים שכבר קיימים ברשימה</p>
                  </div>
                  <Switch
                    checked={currentConfig?.updateExisting || false}
                    onCheckedChange={(checked) => updateConfig({updateExisting: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">אישור כפול (Double Opt-in)</Label>
                    <p className="text-gray-400 text-xs">נדרש אישור במייל לפני הוספה לרשימה</p>
                  </div>
                  <Switch
                    checked={currentConfig?.doubleOptin || false}
                    onCheckedChange={(checked) => updateConfig({doubleOptin: checked})}
                  />
                </div>
              </TabsContent>
            </Tabs>
          )}

          {isEnabled && (
            <Button onClick={handleSave} className="w-full mt-6 bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-4 h-4 mr-1" />
              שמור הגדרות דיוור
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
