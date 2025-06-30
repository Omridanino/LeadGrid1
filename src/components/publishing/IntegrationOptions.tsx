
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Mail, 
  CreditCard, 
  MessageSquare, 
  Phone, 
  Facebook, 
  Instagram,
  Settings,
  CheckCircle,
  ExternalLink,
  Zap
} from 'lucide-react';

interface IntegrationOptionsProps {
  onIntegrationsChange: (integrations: string[]) => void;
  selectedIntegrations: string[];
}

export const IntegrationOptions = ({ onIntegrationsChange, selectedIntegrations }: IntegrationOptionsProps) => {
  const [analyticsConfig, setAnalyticsConfig] = useState({
    googleAnalytics: '',
    facebookPixel: '',
    googleTagManager: ''
  });

  const [emailConfig, setEmailConfig] = useState({
    mailchimp: '',
    klaviyo: '',
    activeTrail: ''
  });

  const [paymentConfig, setPaymentConfig] = useState({
    paypal: false,
    stripe: false,
    bit: false,
    paybox: false
  });

  const [communicationConfig, setCommunicationConfig] = useState({
    whatsapp: '',
    telegram: '',
    phone: '',
    email: ''
  });

  const toggleIntegration = (integration: string) => {
    const newIntegrations = selectedIntegrations.includes(integration)
      ? selectedIntegrations.filter(i => i !== integration)
      : [...selectedIntegrations, integration];
    onIntegrationsChange(newIntegrations);
  };

  const integrationCategories = [
    {
      id: 'analytics',
      name: 'אנליטיקה ומדידה',
      icon: BarChart3,
      color: 'blue',
      integrations: [
        { 
          id: 'google-analytics', 
          name: 'Google Analytics', 
          description: 'מעקב אחר מבקרים והתנהגות באתר',
          setup: 'הכנס מזהה GA4',
          required: 'מזהה מדידה (G-XXXXXXXXXX)'
        },
        { 
          id: 'facebook-pixel', 
          name: 'Facebook Pixel', 
          description: 'מדידה וייעול פרסומות בפייסבוק',
          setup: 'הכנס Pixel ID',
          required: 'מזהה פיקסל'
        },
        { 
          id: 'google-tag-manager', 
          name: 'Google Tag Manager', 
          description: 'ניהול תגיות ומדידות מתקדם',
          setup: 'הכנס GTM ID',
          required: 'מזהה GTM (GTM-XXXXXXX)'
        }
      ]
    },
    {
      id: 'email',
      name: 'שיווק במייל',
      icon: Mail,
      color: 'green',
      integrations: [
        { 
          id: 'mailchimp', 
          name: 'Mailchimp', 
          description: 'רשימות תפוצה ואוטומציות מייל',
          setup: 'חיבור API',
          required: 'API Key'
        },
        { 
          id: 'klaviyo', 
          name: 'Klaviyo', 
          description: 'שיווק מייל מתקדם לאי-קומרס',
          setup: 'חיבור API',
          required: 'Public API Key'
        },
        { 
          id: 'active-trail', 
          name: 'ActiveTrail', 
          description: 'פלטפורמת שיווק ישראלית',
          setup: 'חיבור API',
          required: 'API Token'
        }
      ]
    },
    {
      id: 'payment',
      name: 'אמצעי תשלום',
      icon: CreditCard,
      color: 'purple',
      integrations: [
        { 
          id: 'paybox', 
          name: 'PayBox', 
          description: 'פתרון תשלומים ישראלי מוביל',
          setup: 'חיבור מסוף עסקים',
          required: 'מזהה עסק'
        },
        { 
          id: 'bit', 
          name: 'Bit', 
          description: 'תשלומים מהירים בביט',
          setup: 'חיבור קישור ביט',
          required: 'קישור ביט'
        },
        { 
          id: 'stripe', 
          name: 'Stripe', 
          description: 'פלטפורמת תשלומים עולמית',
          setup: 'חיבור API',
          required: 'Publishable Key'
        },
        { 
          id: 'paypal', 
          name: 'PayPal', 
          description: 'תשלומים עם פייפאל',
          setup: 'חיבור חשבון עסקים',
          required: 'Client ID'
        }
      ]
    },
    {
      id: 'communication',
      name: 'תקשורת ושירות',
      icon: MessageSquare,
      color: 'orange',
      integrations: [
        { 
          id: 'whatsapp', 
          name: 'WhatsApp Business', 
          description: 'צ\'אט ישיר עם לקוחות בוואטסאפ',
          setup: 'הכנס מספר טלפון',
          required: 'מספר וואטסאפ עסקי'
        },
        { 
          id: 'telegram', 
          name: 'Telegram', 
          description: 'צ\'אט דרך טלגרם',
          setup: 'הכנס שם משתמש',
          required: 'שם משתמש טלגרם'
        },
        { 
          id: 'live-chat', 
          name: 'צ\'אט חי', 
          description: 'צ\'אט חי באתר',
          setup: 'הפעלה אוטומטית',
          required: 'ללא'
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-white text-xl font-semibold mb-2">הוסף אינטגרציות לאתר</h3>
        <p className="text-gray-400">בחר את הכלים שתרצה לחבר לאתר שלך</p>
      </div>

      {/* Quick Setup */}
      <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            הגדרה מהירה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            בחר חבילת אינטגרציות מוכנה לסוג העסק שלך
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { name: 'עסק קטן', integrations: ['google-analytics', 'whatsapp', 'live-chat'] },
              { name: 'חנות אונליין', integrations: ['google-analytics', 'facebook-pixel', 'paybox', 'mailchimp'] },
              { name: 'שירותים מקצועיים', integrations: ['google-analytics', 'whatsapp', 'telegram', 'mailchimp'] }
            ].map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-700 h-auto p-3"
                onClick={() => onIntegrationsChange(preset.integrations)}
              >
                <div className="text-center">
                  <div className="font-medium">{preset.name}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {preset.integrations.length} אינטגרציות
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          {integrationCategories.map((category) => {
            const Icon = category.icon;
            return (
              <TabsTrigger key={category.id} value={category.id} className="text-white text-xs">
                <Icon className="w-4 h-4 ml-1" />
                {category.name}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {integrationCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-4">
            <div className="grid gap-4">
              {category.integrations.map((integration) => {
                const isSelected = selectedIntegrations.includes(integration.id);
                
                return (
                  <Card key={integration.id} className={`
                    bg-gray-800 border-gray-700 cursor-pointer transition-all
                    ${isSelected ? 'ring-2 ring-blue-500 bg-blue-900/20' : 'hover:bg-gray-750'}
                  `}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                              <ExternalLink className="w-4 h-4 text-gray-400" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium">{integration.name}</h4>
                              <p className="text-xs text-gray-400">{integration.description}</p>
                            </div>
                          </div>
                          
                          {isSelected && (
                            <div className="mt-3 p-3 bg-gray-700/50 rounded-lg">
                              <Label className="text-white text-sm font-medium">{integration.setup}</Label>
                              <Input
                                placeholder={integration.required}
                                className="bg-gray-700 border-gray-600 text-white mt-2"
                              />
                              <p className="text-xs text-gray-400 mt-1">
                                {integration.required}
                              </p>
                            </div>
                          )}
                        </div>
                        
                        <Switch
                          checked={isSelected}
                          onCheckedChange={() => toggleIntegration(integration.id)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Summary */}
      {selectedIntegrations.length > 0 && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              אינטגרציות נבחרות ({selectedIntegrations.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedIntegrations.map((integrationId) => {
                const integration = integrationCategories
                  .flatMap(cat => cat.integrations)
                  .find(int => int.id === integrationId);
                
                return (
                  <Badge key={integrationId} className="bg-blue-600 text-white">
                    {integration?.name}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
