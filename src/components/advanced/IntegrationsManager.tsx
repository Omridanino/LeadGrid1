
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ZapierIntegration } from '../integrations/ZapierIntegration';
import { EmailIntegration } from '../integrations/EmailIntegration';
import { CRMIntegration } from '../integrations/CRMIntegration';
import { Zap, Mail, Building, BarChart3, CreditCard, MessageSquare } from 'lucide-react';

interface IntegrationsManagerProps {
  onUpdate: (integrations: any) => void;
  currentData: any;
}

export const IntegrationsManager = ({ onUpdate, currentData }: IntegrationsManagerProps) => {
  const [zapierConfig, setZapierConfig] = useState(currentData?.zapier || {});
  const [emailConfig, setEmailConfig] = useState(currentData?.email || {});
  const [crmConfig, setCrmConfig] = useState(currentData?.crm || {});

  const handleZapierChange = (config: any) => {
    setZapierConfig(config);
    onUpdate({
      ...currentData,
      zapier: config
    });
  };

  const handleEmailChange = (config: any) => {
    setEmailConfig(config);
    onUpdate({
      ...currentData,
      email: config
    });
  };

  const handleCrmChange = (config: any) => {
    setCrmConfig(config);
    onUpdate({
      ...currentData,
      crm: config
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-white text-xl font-semibold mb-2">ניהול אינטגרציות</h3>
        <p className="text-gray-400">חבר את הדף שלך למערכות חיצוניות ואפליקציות</p>
      </div>

      <Tabs defaultValue="zapier" className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-gray-800">
          <TabsTrigger value="zapier" className="text-white flex items-center gap-1">
            <Zap className="w-4 h-4" />
            Zapier
          </TabsTrigger>
          <TabsTrigger value="email" className="text-white flex items-center gap-1">
            <Mail className="w-4 h-4" />
            דיוור
          </TabsTrigger>
          <TabsTrigger value="crm" className="text-white flex items-center gap-1">
            <Building className="w-4 h-4" />
            CRM
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-white flex items-center gap-1">
            <BarChart3 className="w-4 h-4" />
            אנליטיקס
          </TabsTrigger>
          <TabsTrigger value="payments" className="text-white flex items-center gap-1">
            <CreditCard className="w-4 h-4" />
            תשלומים
          </TabsTrigger>
          <TabsTrigger value="communication" className="text-white flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            תקשורת
          </TabsTrigger>
        </TabsList>

        <TabsContent value="zapier">
          <ZapierIntegration 
            onConfigChange={handleZapierChange}
            currentConfig={zapierConfig}
          />
        </TabsContent>

        <TabsContent value="email">
          <EmailIntegration 
            onConfigChange={handleEmailChange}
            currentConfig={emailConfig}
          />
        </TabsContent>

        <TabsContent value="crm">
          <CRMIntegration 
            onConfigChange={handleCrmChange}
            currentConfig={crmConfig}
          />
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-400" />
                אינטגרציות אנליטיקס
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                אינטגרציות אנליטיקס
              </h3>
              <p className="text-gray-400">
                Google Analytics, Facebook Pixel, TikTok Pixel ועוד - בפיתוח
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-yellow-400" />
                אינטגרציות תשלום
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                מערכות תשלום
              </h3>
              <p className="text-gray-400">
                PayPal, Stripe, Bit, PayBox ועוד - בפיתוח
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communication">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                כלי תקשורת
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                כלי תקשורת ושירות
              </h3>
              <p className="text-gray-400">
                WhatsApp Business, צ'אט חי, SMS ועוד - בפיתוח
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
