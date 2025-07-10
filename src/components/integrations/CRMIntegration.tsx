
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Building, TestTube, CheckCircle, Users, Database } from 'lucide-react';

interface CRMIntegrationProps {
  onConfigChange: (config: any) => void;
  currentConfig: any;
}

export const CRMIntegration = ({ onConfigChange, currentConfig }: CRMIntegrationProps) => {
  const [selectedCRM, setSelectedCRM] = useState(currentConfig?.crm || 'hubspot');
  const [apiKey, setApiKey] = useState(currentConfig?.apiKey || '');
  const [isEnabled, setIsEnabled] = useState(currentConfig?.enabled || false);
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [leadSource, setLeadSource] = useState(currentConfig?.leadSource || 'דף נחיתה');
  const { toast } = useToast();

  const crmProviders = [
    {
      value: 'hubspot',
      label: 'HubSpot',
      description: 'CRM חינמי ומתקדם עם אוטומציות',
      fields: ['אימייל', 'שם', 'טלפון', 'חברה', 'תפקיד']
    },
    {
      value: 'salesforce',
      label: 'Salesforce',
      description: 'הפלטפורמה המובילה לניהול לקוחות',
      fields: ['אימייל', 'שם פרטי', 'שם משפחה', 'טלפון', 'חברה']
    },
    {
      value: 'pipedrive',
      label: 'Pipedrive',
      description: 'CRM פשוט ויעיל למכירות',
      fields: ['אימייל', 'שם', 'טלפון', 'ארגון', 'ערך עסקה']
    },
    {
      value: 'monday',
      label: 'Monday.com',
      description: 'פלטפורמת ניהול פרויקטים ולקוחות',
      fields: ['אימייל', 'שם', 'טלפון', 'סטטוס', 'תאריך']
    },
    {
      value: 'zoho',
      label: 'Zoho CRM',
      description: 'פתרון מקיף לניהול לקוחות',
      fields: ['אימייל', 'שם פרטי', 'שם משפחה', 'טלפון', 'חברה']
    },
    {
      value: 'appsflyer',
      label: 'AppsFlyer',
      description: 'פלטפורמה לאטריביושן ומדידה',
      fields: ['מזהה משתמש', 'אימייל', 'מקור תנועה', 'ערוץ']
    }
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
      // Mock API test
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "החיבור בוצע בהצלחה!",
        description: `החיבור ל-${crmProviders.find(p => p.value === selectedCRM)?.label} עובד תקין`
      });
      
    } catch (error) {
      toast({
        title: "שגיאה בחיבור",
        description: "לא ניתן להתחבר ל-CRM. ודא שה-API Key נכון.",
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
      crm: selectedCRM,
      apiKey,
      leadSource
    });
    
    toast({
      title: "הגדרות נשמרו",
      description: "אינטגרציית ה-CRM הוגדרה בהצלחה"
    });
  };

  const selectedProvider = crmProviders.find(p => p.value === selectedCRM);

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Building className="w-5 h-5 text-purple-400" />
            אינטגרציית CRM
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white text-base font-medium">הפעל אינטגרציית CRM</Label>
              <p className="text-gray-400 text-sm">שלח לידים ישירות למערכת ניהול הלקוחות שלך</p>
            </div>
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
            />
          </div>

          {isEnabled && (
            <>
              <div className="space-y-2">
                <Label className="text-white">בחר מערכת CRM</Label>
                <Select value={selectedCRM} onValueChange={setSelectedCRM}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {crmProviders.map((provider) => (
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
                <Label className="text-white">API Key / Token</Label>
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
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <TestTube className="w-4 h-4 mr-1" />
                    {isTestingConnection ? 'בודק...' : 'בדוק'}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">מקור הליד</Label>
                <Input
                  value={leadSource}
                  onChange={(e) => setLeadSource(e.target.value)}
                  placeholder="דף נחיתה, פרסום, אתר"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              {selectedProvider && (
                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-700/50">
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="text-purple-200 font-medium mb-2">שדות שיישלחו ל-{selectedProvider.label}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProvider.fields.map((field, index) => (
                          <div key={index} className="text-purple-300 text-sm flex items-center gap-2">
                            <CheckCircle className="w-3 h-3" />
                            {field}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                <h4 className="text-blue-200 font-medium mb-2">איך למצוא את ה-API Key?</h4>
                <div className="text-blue-300 text-sm space-y-1">
                  <p><strong>HubSpot:</strong> Settings → Integrations → API key</p>
                  <p><strong>Salesforce:</strong> Setup → Users → Reset Security Token</p>
                  <p><strong>Pipedrive:</strong> Settings → API</p>
                  <p><strong>Monday.com:</strong> Admin → API</p>
                </div>
              </div>

              <Button onClick={handleSave} className="w-full bg-green-600 hover:bg-green-700">
                <CheckCircle className="w-4 h-4 mr-1" />
                שמור הגדרות CRM
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
