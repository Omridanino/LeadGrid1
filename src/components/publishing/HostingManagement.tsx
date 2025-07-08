
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Shield, 
  Server, 
  Database, 
  BarChart3,
  Settings,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap
} from 'lucide-react';
import { RealDomainService } from '@/services/realDomainService';

interface HostingManagementProps {
  domain: string;
  onClose: () => void;
}

export const HostingManagement = ({ domain, onClose }: HostingManagementProps) => {
  const [domainStatus, setDomainStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDomainStatus();
  }, [domain]);

  const loadDomainStatus = async () => {
    try {
      const status = await RealDomainService.getDomainStatus(domain);
      setDomainStatus(status);
    } catch (error) {
      console.error('Failed to load domain status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">טוען נתוני דומיין...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">ניהול אחסון</h2>
              <p className="text-gray-400 text-sm mt-1">
                דומיין: <span className="text-blue-400 font-medium">{domain}</span>
              </p>
            </div>
            <Button onClick={onClose} variant="outline" size="sm">
              סגור
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    domainStatus?.registered ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">דומיין</div>
                    <div className={`text-sm ${domainStatus?.registered ? 'text-green-400' : 'text-red-400'}`}>
                      {domainStatus?.registered ? 'פעיל' : 'לא פעיל'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    domainStatus?.sslActive ? 'bg-green-600' : 'bg-orange-600'
                  }`}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">SSL</div>
                    <div className={`text-sm ${domainStatus?.sslActive ? 'text-green-400' : 'text-orange-400'}`}>
                      {domainStatus?.sslActive ? 'מאובטח' : 'בהמתנה'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    domainStatus?.dnsConfigured ? 'bg-green-600' : 'bg-yellow-600'
                  }`}>
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">DNS</div>
                    <div className={`text-sm ${domainStatus?.dnsConfigured ? 'text-green-400' : 'text-yellow-400'}`}>
                      {domainStatus?.dnsConfigured ? 'מוגדר' : 'בתהליך'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    domainStatus?.siteActive ? 'bg-green-600' : 'bg-gray-600'
                  }`}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">אתר</div>
                    <div className={`text-sm ${domainStatus?.siteActive ? 'text-green-400' : 'text-gray-400'}`}>
                      {domainStatus?.siteActive ? 'חי' : 'לא פעיל'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Domain Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="w-5 h-5" />
                פרטי דומיין
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">דומיין:</span>
                    <span className="text-white font-medium">{domain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">סטטוס:</span>
                    <Badge className={domainStatus?.registered ? 'bg-green-600' : 'bg-red-600'}>
                      {domainStatus?.registered ? 'פעיל' : 'לא פעיל'}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">תפוגה:</span>
                    <span className="text-white">
                      {domainStatus?.expiresAt ? 
                        new Date(domainStatus.expiresAt).toLocaleDateString('he-IL') : 
                        'לא זמין'
                      }
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">שרתי DNS:</span>
                    <span className="text-white text-sm">ns1.yourdns.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">IP Address:</span>
                    <span className="text-white text-sm">1.2.3.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SSL:</span>
                    <span className={`text-sm ${domainStatus?.sslActive ? 'text-green-400' : 'text-orange-400'}`}>
                      {domainStatus?.sslActive ? 'Let\'s Encrypt' : 'בהתקנה'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hosting Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  שימוש במשאבים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">אחסון</span>
                    <span className="text-white">2.3GB / 10GB</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">רוחב פס</span>
                    <span className="text-white">15GB / 100GB</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">בקשות יומיות</span>
                    <span className="text-white">1,247</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  שירותים פעילים
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">CDN גלובלי</span>
                  </div>
                  <Badge className="bg-green-600 text-xs">פעיל</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">גיבוי יומי</span>
                  </div>
                  <Badge className="bg-green-600 text-xs">פעיל</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-300">ניטור זמינות</span>
                  </div>
                  <Badge className="bg-orange-600 text-xs">בהגדרה</Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300">הגנה מפני DDoS</span>
                  </div>
                  <Badge className="bg-green-600 text-xs">פעיל</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Settings className="w-5 h-5" />
                פעולות מהירות
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                  חדש SSL
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
                  נקה CDN
                </Button>
                <Button className="bg-green-600 hover:bg-green-700" size="sm">
                  גיבוי עכשיו
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700" size="sm">
                  הגדרות DNS
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
