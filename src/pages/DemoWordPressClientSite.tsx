import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

export const DemoWordPressClientSite = () => {
  const location = useLocation();
  const [websiteData, setWebsiteData] = useState<any>(null);

  useEffect(() => {
    // Get website data from URL params or localStorage
    const urlParams = new URLSearchParams(location.search);
    const clientData = urlParams.get('data');
    
    if (clientData) {
      try {
        setWebsiteData(JSON.parse(decodeURIComponent(clientData)));
      } catch (error) {
        console.error('Failed to parse client data:', error);
      }
    } else {
      // Fallback to localStorage
      const savedFormData = localStorage.getItem('formData');
      const savedContent = localStorage.getItem('generatedContent');
      
      if (savedFormData || savedContent) {
        setWebsiteData({
          formData: savedFormData ? JSON.parse(savedFormData) : null,
          generatedContent: savedContent ? JSON.parse(savedContent) : null
        });
      }
    }
  }, [location]);

  if (!websiteData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">טוען את האתר...</h1>
          <p className="text-gray-600">אנא המתן בזמן שהאתר נטען</p>
        </div>
      </div>
    );
  }

  const { formData, generatedContent } = websiteData;
  const hero = generatedContent?.hero || {};
  const features = generatedContent?.features || {};
  const about = generatedContent?.about || {};

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* WordPress Admin Bar Simulation */}
      <div className="bg-gray-800 text-white px-4 py-2 text-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>🔒 מנהל WordPress</span>
          <span>{formData?.businessName || 'האתר שלי'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>שלום, {formData?.firstName || 'משתמש'}</span>
          <Button size="sm" variant="outline" className="text-xs">
            ערוך דף
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {hero.title || formData?.businessName || 'ברוכים הבאים לעסק שלנו'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {hero.subtitle || formData?.businessDescription || 'אנחנו כאן כדי לעזור לכם להצליח'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              {hero.button1Text || 'צור קשר'}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              {hero.button2Text || 'למד עוד'}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features.items && features.items.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              {features.title || 'השירותים שלנו'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.items.map((feature: any, index: number) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{feature.icon || '⭐'}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {about.title && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              {about.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {about.description}
            </p>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">צור קשר</h2>
          <p className="text-xl mb-8 text-purple-100">נשמח לשמוע מכם ולעזור לכם</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {formData?.email && (
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{formData.email}</span>
              </div>
            )}
            
            {formData?.phone && (
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{formData.phone}</span>
              </div>
            )}
            
            {formData?.businessName && (
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{formData.businessName}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} {formData?.businessName || 'העסק שלי'}. כל הזכויות שמורות.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            נוצר באמצעות LeadGrid - אתר דמו פונקציונלי
          </p>
        </div>
      </footer>

      {/* WordPress Demo Notice */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">🎭</span>
          <strong>אתר דמו WordPress</strong>
        </div>
        <p className="text-sm text-blue-100">
          זהו דמו של האתר עם התוכן המותאם שיצרת. בסביבה אמיתית זה יהיה אתר WordPress מלא.
        </p>
        <Button 
          size="sm" 
          variant="outline" 
          className="mt-2 text-xs border-white text-white hover:bg-white hover:text-blue-600"
          onClick={() => window.close()}
        >
          <ExternalLink className="w-3 h-3 mr-1" />
          סגור תצוגה מקדימה
        </Button>
      </div>
    </div>
  );
};