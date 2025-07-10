
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

interface SecurityEditorProps {
  onUpdate: (updates: any) => void;
  currentSettings: any;
}

export const SecurityEditor = ({ onUpdate, currentSettings }: SecurityEditorProps) => {
  const [settings, setSettings] = useState(currentSettings?.security || {
    passwordProtection: false,
    password: '',
    ipBlocking: false,
    blockedIPs: '',
    countriesBlocking: false,
    blockedCountries: '',
    captchaProtection: false,
    captchaSiteKey: '',
    adultContent: false,
    antiBot: false,
    rateLimiting: false
  });

  const updateSetting = (key: string, value: any) => {
    const updatedSettings = { ...settings, [key]: value };
    setSettings(updatedSettings);
    onUpdate({ security: updatedSettings });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-500" />
            אבטחה והגנה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Password Protection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white font-medium">הגנה בסיסמה</Label>
                <p className="text-gray-400 text-sm">הגן על הדף עם סיסמה</p>
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
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                  placeholder="הכנס סיסמה"
                />
              </div>
            )}
          </div>

          {/* IP Blocking */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white font-medium">חסימת IP</Label>
                <p className="text-gray-400 text-sm">חסום כתובות IP ספציפיות</p>
              </div>
              <Switch
                checked={settings.ipBlocking}
                onCheckedChange={(checked) => updateSetting('ipBlocking', checked)}
              />
            </div>
            
            {settings.ipBlocking && (
              <div>
                <Label className="text-white">כתובות IP חסומות</Label>
                <Textarea
                  value={settings.blockedIPs}
                  onChange={(e) => updateSetting('blockedIPs', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                  placeholder="192.168.1.1, 10.0.0.1"
                  rows={3}
                />
              </div>
            )}
          </div>

          {/* Countries Blocking */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white font-medium">חסימת מדינות</Label>
                <p className="text-gray-400 text-sm">חסום גישה ממדינות ספציפיות</p>
              </div>
              <Switch
                checked={settings.countriesBlocking}
                onCheckedChange={(checked) => updateSetting('countriesBlocking', checked)}
              />
            </div>
            
            {settings.countriesBlocking && (
              <div>
                <Label className="text-white">מדינות חסומות</Label>
                <Input
                  value={settings.blockedCountries}
                  onChange={(e) => updateSetting('blockedCountries', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                  placeholder="CN, RU, US (קודי מדינות)"
                />
              </div>
            )}
          </div>

          {/* CAPTCHA Protection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-white font-medium">הגנת CAPTCHA</Label>
                <p className="text-gray-400 text-sm">הגן מפני בוטים עם reCAPTCHA</p>
              </div>
              <Switch
                checked={settings.captchaProtection}
                onCheckedChange={(checked) => updateSetting('captchaProtection', checked)}
              />
            </div>
            
            {settings.captchaProtection && (
              <div>
                <Label className="text-white">reCAPTCHA Site Key</Label>
                <Input
                  value={settings.captchaSiteKey}
                  onChange={(e) => updateSetting('captchaSiteKey', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                  placeholder="6Lc..."
                />
              </div>
            )}
          </div>

          {/* Adult Content Warning */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">אזהרת תוכן למבוגרים</Label>
              <p className="text-gray-400 text-sm">הצג אזהרה לפני כניסה לאתר</p>
            </div>
            <Switch
              checked={settings.adultContent}
              onCheckedChange={(checked) => updateSetting('adultContent', checked)}
            />
          </div>

          {/* Anti-Bot Protection */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">הגנה מפני בוטים</Label>
              <p className="text-gray-400 text-sm">הגנה מתקדמת מפני בוטים וספאם</p>
            </div>
            <Switch
              checked={settings.antiBot}
              onCheckedChange={(checked) => updateSetting('antiBot', checked)}
            />
          </div>

          {/* Rate Limiting */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-white font-medium">הגבלת קצב</Label>
              <p className="text-gray-400 text-sm">הגבל מספר בקשות למשתמש</p>
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
