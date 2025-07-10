
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

interface SecurityEditorProps {
  onUpdate: (updates: any) => void;
  currentData: any;
}

export const SecurityEditor = ({ onUpdate, currentData }: SecurityEditorProps) => {
  const [settings, setSettings] = useState({
    passwordProtection: currentData?.passwordProtection || false,
    password: currentData?.password || '',
    disableRightClick: currentData?.disableRightClick || false,
    disableTextSelection: currentData?.disableTextSelection || false,
    hideSourceCode: currentData?.hideSourceCode || false,
    geoBlocking: currentData?.geoBlocking || false,
    allowedCountries: currentData?.allowedCountries || '',
    rateLimiting: currentData?.rateLimiting || false
  });

  const updateSetting = (key: string, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onUpdate(newSettings);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            הגדרות אבטחה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">הגנה בסיסמה</Label>
              <p className="text-gray-400 text-sm">דרוש סיסמה לגישה לדף</p>
            </div>
            <Switch
              checked={settings.passwordProtection}
              onCheckedChange={(checked) => updateSetting('passwordProtection', checked)}
            />
          </div>

          {settings.passwordProtection && (
            <div>
              <Label className="text-white">סיסמה</Label>
              <Input
                type="password"
                value={settings.password}
                onChange={(e) => updateSetting('password', e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="הכנס סיסמה"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">השבת קליק ימני</Label>
              <p className="text-gray-400 text-sm">מונע פתיחת תפריט הקשר</p>
            </div>
            <Switch
              checked={settings.disableRightClick}
              onCheckedChange={(checked) => updateSetting('disableRightClick', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">השבת בחירת טקסט</Label>
              <p className="text-gray-400 text-sm">מונע העתקת תוכן</p>
            </div>
            <Switch
              checked={settings.disableTextSelection}
              onCheckedChange={(checked) => updateSetting('disableTextSelection', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">הסתר קוד מקור</Label>
              <p className="text-gray-400 text-sm">מקשה על צפייה בקוד</p>
            </div>
            <Switch
              checked={settings.hideSourceCode}
              onCheckedChange={(checked) => updateSetting('hideSourceCode', checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">חסימה גיאוגרפית</Label>
              <p className="text-gray-400 text-sm">הגבל גישה לפי מדינות</p>
            </div>
            <Switch
              checked={settings.geoBlocking}
              onCheckedChange={(checked) => updateSetting('geoBlocking', checked)}
            />
          </div>

          {settings.geoBlocking && (
            <div>
              <Label className="text-white">מדינות מורשות</Label>
              <Input
                value={settings.allowedCountries}
                onChange={(e) => updateSetting('allowedCountries', e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                placeholder="IL, US, GB (קודי מדינות)"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white">הגבלת קצב</Label>
              <p className="text-gray-400 text-sm">מונע ספאם ובוטים</p>
            </div>
            <Switch
              checked={settings.rateLimiting}
              onCheckedChange={(checked) => updateSetting('rateLimiting', checked)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
