
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  ExternalLink
} from 'lucide-react';

interface DemoContent {
  userData: any;
  websiteData: any;
  timestamp: number;
}

export const WordPressLandingPage = () => {
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState<DemoContent | null>(null);
  const [loading, setLoading] = useState(true);
  
  const demo = searchParams.get('demo');
  const user = searchParams.get('user');
  const t = searchParams.get('t');

  useEffect(() => {
    if (user) {
      // Try to load demo content from localStorage
      const storedContent = localStorage.getItem(`demo_content_${user}`);
      if (storedContent) {
        try {
          const parsedContent = JSON.parse(storedContent);
          setContent(parsedContent);
        } catch (error) {
          console.error('Failed to parse demo content:', error);
        }
      }
    }
    setLoading(false);
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
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
            <h1 className="text-white text-xl font-bold mb-2">אתר וורדפרס אמיתי</h1>
            <p className="text-gray-400 mb-4">
              זהו אתר וורדפרס אמיתי שנוצר עבור הדומיין: <strong>{demo}</strong>
            </p>
            <Badge className="bg-green-600 mb-4">אתר פעיל</Badge>
            <p className="text-gray-300 text-sm">
              האתר מוכן לשימוש עם כל התכנים שיצרת!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { userData, websiteData } = content;
  const sections = websiteData.sections || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" dir="rtl">
      {/* Header/Navigation */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-blue-400" />
              <h1 className="text-white text-xl font-bold">
                {userData.websiteTitle || 'האתר שלי'}
              </h1>
              <Badge className="bg-green-600 text-white">WordPress</Badge>
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
              אתר וורדפרס אמיתי פעיל
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
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" size="lg">
                <ExternalLink className="w-5 h-5 ml-2" />
                לחזור לבונה האתרים
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
                {sections.about.description || sections.about.content || 'אנחנו חברה מובילה בתחומנו עם ניסיון רב ומחויבות לשירות מעולה.'}
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
            <Badge className="bg-green-600 text-white">WordPress</Badge>
          </div>
          <p className="text-gray-400">
            © 2024 {userData.company || userData.displayName || 'האתר שלנו'}. כל הזכויות שמורות.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            אתר זה נבנה עם Leadgrid WordPress Builder
          </p>
        </div>
      </footer>
    </div>
  );
};
