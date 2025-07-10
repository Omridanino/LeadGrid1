
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Shield, Lock, Eye, MousePointer } from 'lucide-react';

interface SecurityEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const SecurityEditor = ({ onUpdate, currentData }: SecurityEditorProps) => {
  const [securityData, setSecurityData] = useState({
    passwordProtection: currentData?.passwordProtection || false,
    password: currentData?.password || '',
    ipRestriction: currentData?.ipRestriction || false,
    allowedIps: currentData?.allowedIps || [],
    disableRightClick: currentData?.disableRightClick || false,
    disableTextSelection: currentData?.disableTextSelection || false,
    ...currentData
  });

  useEffect(() => {
    onUpdate(securityData);
  }, [securityData, onUpdate]);

  const handleInputChange = (field: string, value: any) => {
    setSecurityData(prev => ({ ...prev, [field]: value }));
  };

  const handleIpsChange = (value: string) => {
    const ips = value.split('\n').filter(ip => ip.trim());
    setSecurityData(prev => ({ ...prev, allowedIps: ips }));
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5" />
            אבטחה והגנה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="password-protection" className="text-white flex items-center gap-2">
                <Lock className="w-4 h-4" />
                הגנת סיסמה
              </Label>
              <p className="text-sm text-gray-400">דרוש סיסמה לגישה לאתר</p>
            </div>
            <Switch
              id="password-protection"
              checked={securityData.passwordProtection}
              onCheckedChange={(checked) => handleInputChange('passwordProtection', checked)}
            />
          </div>

          {securityData.passwordProtection && (
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">סיסמה</Label>
              <Input
                id="password"
                type="password"
                value={securityData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="הזן סיסמה"
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="ip-restriction" className="text-white">הגבלת IP</Label>
              <p className="text-sm text-gray-400">הגבל גישה לכתובות IP מסוימות</p>
            </div>
            <Switch
              id="ip-restriction"
              checked={securityData.ipRestriction}
              onCheckedChange={(checked) => handleInputChange('ipRestriction', checked)}
            />
          </div>

          {securityData.ipRestriction && (
            <div className="space-y-2">
              <Label htmlFor="allowed-ips" className="text-white">כתובות IP מותרות</Label>
              <Textarea
                id="allowed-ips"
                value={securityData.allowedIps.join('\n')}
                onChange={(e) => handleIpsChange(e.target.value)}
                placeholder="192.168.1.1&#10;10.0.0.1"
                className="bg-gray-700 border-gray-600 text-white"
                rows={3}
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="disable-right-click" className="text-white flex items-center gap-2">
                <MousePointer className="w-4 h-4" />
                השבת קליק ימין
              </Label>
              <p className="text-sm text-gray-400">מנע קליק ימין וכפתור F12</p>
            </div>
            <Switch
              id="disable-right-click"
              checked={securityData.disableRightClick}
              onCheckedChange={(checked) => handleInputChange('disableRightClick', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="disable-text-selection" className="text-white flex items-center gap-2">
                <Eye className="w-4 h-4" />
                השבת בחירת טקסט
              </Label>
              <p className="text-sm text-gray-400">מנע בחירה והעתקת טקסט</p>
            </div>
            <Switch
              id="disable-text-selection"
              checked={securityData.disableTextSelection}
              onCheckedChange={(checked) => handleInputChange('disableTextSelection', checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
