
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Settings,
  Edit,
  Eye,
  Loader2
} from 'lucide-react';
import { WordPressApiService } from '@/services/wordpressApiService';
import { useToast } from "@/hooks/use-toast";

interface DemoContent {
  userData: any;
  websiteData: any;
  timestamp: number;
}

export const WordPressLandingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [content, setContent] = useState<DemoContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [wpSiteData, setWpSiteData] = useState<any>(null);
  const [isCreatingWordPress, setIsCreatingWordPress] = useState(false);
  
  const demo = searchParams.get('demo');
  const user = searchParams.get('user');
  const t = searchParams.get('t');

  useEffect(() => {
    const loadDemoContent = () => {
      if (user) {
        // Try to load demo content from localStorage
        const storedContent = localStorage.getItem(`demo_content_${user}`);
        if (storedContent) {
          try {
            const parsedContent = JSON.parse(storedContent);
            setContent(parsedContent);
            
            // Check if we have WordPress site data
            const wpData = localStorage.getItem(`wp_site_${user}`);
            if (wpData) {
              setWpSiteData(JSON.parse(wpData));
            }
          } catch (error) {
            console.error('Failed to parse demo content:', error);
          }
        }
      }
      setLoading(false);
    };

    loadDemoContent();
  }, [user]);

  const createRealWordPressSite = async () => {
    if (!content || !user) return;
    
    setIsCreatingWordPress(true);
    
    try {
      console.log('🚀 Creating real WordPress site for user:', user);
      
      const wpConfig = {
        domain: demo || `site-${user}`,
        siteTitle: content.userData.websiteTitle || content.userData.businessName || 'האתר שלי',
        adminUser: 'admin',
        adminPassword: 'SecurePass123!',
        adminEmail: content.userData.email || 'admin@example.com',
        language: 'he_IL'
      };

      const result = await WordPressApiService.createWordPressSite(wpConfig);
      
      if (result.success) {
        // Save WordPress site data
        localStorage.setItem(`wp_site_${user}`, JSON.stringify(result));
        setWpSiteData(result);
        
        toast({
          title: "🎉 אתר וורדפרס נוצר!",
          description: "האתר שלך מוכן לשימוש עם וורדפרס אמיתי",
        });

        // Deploy template content to WordPress
        if (result.siteUrl) {
          await WordPressApiService.deployTemplateContent(
            result.siteUrl,
            result.wpConfig,
            content
          );
        }
      } else {
        throw new Error(result.error || 'Failed to create WordPress site');
      }
    } catch (error) {
      console.error('WordPress creation failed:', error);
      toast({
        title: "❌ שגיאה ביצירת האתר",
        description: "לא הצלחנו ליצור את אתר הוורדפרס. אנא נסה שוב.",
      });
    } finally {
      setIsCreatingWordPress(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-white">טוען את האתר שלך...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center" dir="rtl">
        <Card className="bg-gray-800 border-gray-700 max-w-md">
          <CardContent className="p-8 text-center">
            <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h1 className="text-white text-xl font-bold mb-2">לא נמצא תוכן</h1>
            <p className="text-gray-400 mb-4">
              לא נמצא תוכן עבור האתר הזה
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              חזור לעמוד הבית
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { userData, websiteData } = content;
  const sections = websiteData.sections || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" dir="rtl">
      {/* WordPress Management Bar */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">ניהול אתר וורדפרס</span>
            </div>
            {wpSiteData ? (
              <Badge className="bg-green-600 text-white">אתר פעיל</Badge>
            ) : (
              <Badge className="bg-orange-600 text-white">דמו</Badge>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {wpSiteData ? (
              <>
                <Button
                  onClick={() => window.open(wpSiteData.siteUrl, '_blank')}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Eye className="w-4 h-4 ml-2" />
                  צפה באתר
                </Button>
                <Button
                  onClick={() => window.open(wpSiteData.adminUrl, '_blank')}
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Settings className="w-4 h-4 ml-2" />
                  ניהול וורדפרס
                </Button>
              </>
            ) : (
              <Button
                onClick={createRealWordPressSite}
                disabled={isCreatingWordPress}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                {isCreatingWordPress ? (
                  <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4 ml-2" />
                )}
                {isCreatingWordPress ? 'יוצר אתר...' : 'צור אתר וורדפרס אמיתי'}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Site Information */}
      {wpSiteData && (
        <div className="bg-green-900/20 border-b border-green-500/20 p-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-green-400 font-semibold">כתובת האתר:</span>
                <p className="text-white">{wpSiteData.siteUrl}</p>
              </div>
              <div>
                <span className="text-green-400 font-semibold">משתמש ניהול:</span>
                <p className="text-white">{wpSiteData.wpConfig?.username}</p>
              </div>
              <div>
                <span className="text-green-400 font-semibold">סיסמה:</span>
                <p className="text-white font-mono">{wpSiteData.wpConfig?.password}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header/Navigation */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-blue-400" />
              <h1 className="text-white text-xl font-bold">
                {userData.websiteTitle || 'האתר שלי'}
              </h1>
              <Badge className="bg-blue-600 text-white">
                {wpSiteData ? 'WordPress אמיתי' : 'דמו WordPress'}
              </Badge>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#hero" className="text-white hover:text-blue-400 transition-colors">בית</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">אודות</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">שירותים</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">צור קשר</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-600 text-white mb-6 inline-flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              {wpSiteData ? 'אתר וורדפרס אמיתי פעיל' : 'אתר דמו - יכול להפוך לאמיתי'}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {sections.hero?.title || userData.websiteTitle || 'ברוכים הבאים לאתר שלנו'}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {sections.hero?.description || userData.websiteDescription || 'זהו האתר הרשמי שלנו, נבנה עם וורדפרס ומותאם במיוחד עבורכם'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" size="lg">
                <ArrowRight className="w-5 h-5 ml-2" />
                {sections.hero?.ctaText || 'בואו נתחיל'}
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10" 
                size="lg"
                onClick={() => navigate('/')}
              >
                <ExternalLink className="w-5 h-5 ml-2" />
                חזור לבונה האתרים
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Section */}
      {sections.features && (
        <section id="services" className="py-16 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {sections.features.title || 'השירותים שלנו'}
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {sections.features.description || 'אנחנו מספקים מגוון רחב של שירותים איכותיים'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.features.items?.map((feature: any, index: number) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Star className="w-5 h-5 text-blue-400" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {sections.about && (
        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                {sections.about.title || 'אודותינו'}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {sections.about.description || sections.about.content || 'אנחנו חברה מובילה בתחומنו עם ניסיון רב ומחויבות לשירות מעולה.'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">צור קשר</h2>
              <p className="text-gray-300">נשמח לשמוע מכם ולענות על כל שאלה</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">אימיל</h3>
                  <p className="text-gray-300">{userData.email}</p>
                </CardContent>
              </Card>
              
              {userData.phone && (
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">טלפון</h3>
                    <p className="text-gray-300">{userData.phone}</p>
                  </CardContent>
                </Card>
              )}
              
              {userData.address && userData.city && (
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">כתובת</h3>
                    <p className="text-gray-300">{userData.address}, {userData.city}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold">{userData.websiteTitle}</span>
            <Badge className="bg-blue-600 text-white">
              {wpSiteData ? 'WordPress' : 'דמו'}
            </Badge>
          </div>
          <p className="text-gray-400">
            © 2024 {userData.company || userData.displayName || 'האתר שלנו'}. כל הזכויות שמורות.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {wpSiteData ? 'אתר וורדפרס אמיתי' : 'אתר דמו'} - נבנה עם Leadgrid WordPress Builder
          </p>
        </div>
      </footer>
    </div>
  );
};
