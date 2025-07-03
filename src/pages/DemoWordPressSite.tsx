
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Settings, 
  Edit, 
  Users, 
  BarChart3, 
  FileText, 
  Image,
  MessageSquare,
  Shield,
  Palette,
  CheckCircle,
  ExternalLink,
  Monitor,
  Smartphone
} from 'lucide-react';
import { DemoWordPressService } from '@/services/demoWordPressService';

export const DemoWordPressSite = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const siteId = searchParams.get('siteId');
  const [siteData, setSiteData] = useState<any>(null);
  const [currentView, setCurrentView] = useState<'site' | 'admin'>('site');

  useEffect(() => {
    if (siteId) {
      const data = DemoWordPressService.getDemoSiteData(siteId);
      setSiteData(data);
    }
  }, [siteId]);

  if (!siteData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center" dir="rtl">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">לא נמצא אתר דמו</h2>
            <Button onClick={() => navigate('/')}>חזור לדף הראשי</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderSiteView = () => (
    <div className="min-h-screen bg-white">
      {/* Demo Site Header */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{siteData.websiteData?.websiteTitle || 'האתר שלי'}</h1>
          <p className="text-xl mb-8">{siteData.websiteData?.websiteDescription || 'תיאור האתר שלי'}</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              צור קשר
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              למד עוד
            </Button>
          </div>
        </div>
      </header>

      {/* Demo Content Sections */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">אמינות מקסימלית</h3>
                <p className="text-gray-600">פתרונות מתקדמים לעסק שלך</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">תוצאות מוכחות</h3>
                <p className="text-gray-600">עלייה משמעותית במכירות</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">שירות מקצועי</h3>
                <p className="text-gray-600">תמיכה 24/7 בעברית</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">למה לבחור בנו?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              אנחנו מספקים פתרונות מתקדמים ומותאמים אישית לכל עסק. 
              הצוות המקצועי שלנו כאן כדי לוודא שתקבלו את השירות הטוב ביותר.
            </p>
          </div>
        </div>
      </main>

      {/* Demo Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {siteData.websiteData?.websiteTitle || 'האתר שלי'}. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );

  const renderAdminView = () => (
    <div className="min-h-screen bg-gray-100">
      {/* WordPress Admin Bar */}
      <div className="bg-gray-900 text-white px-4 py-2 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {siteData.websiteData?.websiteTitle || 'האתר שלי'}
            </span>
            <span>גרסה 6.4.2</span>
          </div>
          <div className="flex items-center gap-4">
            <span>שלום, {siteData.userData.username}</span>
            <Button size="sm" variant="outline" className="text-xs">
              התנתק
            </Button>
          </div>
        </div>
      </div>

      {/* Admin Dashboard */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen">
          <div className="p-4">
            <h2 className="font-bold text-lg mb-4">לוח בקרה</h2>
            <nav className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded text-blue-600">
                <BarChart3 className="w-4 h-4" />
                <span>סקירה כללית</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <FileText className="w-4 h-4" />
                <span>פוסטים</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <Image className="w-4 h-4" />
                <span>מדיה</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <MessageSquare className="w-4 h-4" />
                <span>תגובות</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <Palette className="w-4 h-4" />
                <span>מראה</span>
              </div>
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>הגדרות</span>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">לוח בקרה</h1>
            <p className="text-gray-600">ברוך הבא לאתר וורדפרס שלך!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">פוסטים</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">תגובות</p>
                    <p className="text-2xl font-bold">47</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">צפיות היום</p>
                    <p className="text-2xl font-bold">234</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>פעילות אחרונה</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">האתר נוצר בהצלחה</p>
                    <p className="text-sm text-gray-600">לפני דקה</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded">
                  <Palette className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">ערכת העיצוב הותקנה</p>
                    <p className="text-sm text-gray-600">לפני 2 דקות</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium">SSL הותקן בהצלחה</p>
                    <p className="text-sm text-gray-600">לפני 3 דקות</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div dir="rtl">
      {/* Demo Notice Bar */}
      <div className="bg-yellow-500 text-black py-2 px-4 text-center font-medium">
        🎭 זהו אתר דמו פונקציונלי - מדמה את כל פונקציות וורדפרס באופן מלא
        <Badge className="mr-2 bg-black text-yellow-500">DEMO MODE</Badge>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-b shadow-sm py-3 px-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold">
              {siteData.websiteData?.websiteTitle || 'האתר שלי'}
            </h1>
            <Badge variant="outline">Demo Site</Badge>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                size="sm"
                variant={currentView === 'site' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('site')}
                className="gap-2"
              >
                <Monitor className="w-4 h-4" />
                צפה באתר
              </Button>
              <Button
                size="sm"
                variant={currentView === 'admin' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('admin')}
                className="gap-2"
              >
                <Settings className="w-4 h-4" />
                מנהל האתר
              </Button>
            </div>
            
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              size="sm"
            >
              חזור לדף הראשי
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      {currentView === 'site' ? renderSiteView() : renderAdminView()}
    </div>
  );
};
