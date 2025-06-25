
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Globe, Wordpress, ExternalLink, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GeneratedLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showDomainPurchase, setShowDomainPurchase] = useState(false);
  
  const formData = location.state?.formData || {
    businessName: "העסק שלי",
    businessType: "שירותים עסקיים",
    targetAudience: "לקוחות פוטנציאליים",
    mainGoal: "הגדלת מכירות",
    keyFeatures: "שירות מקצועי, מהירות, אמינות",
    brandColors: "כחול וכסף",
    contactInfo: "טלפון: 050-1234567\nאימייל: info@business.co.il"
  };

  const generatedContent = {
    headline: `ברוכים הבאים ל${formData.businessName}`,
    subheadline: `הפתרון המושלם ל${formData.targetAudience} בתחום ${formData.businessType}`,
    features: formData.keyFeatures.split(',').map(f => f.trim()),
    cta: `התחל עם ${formData.businessName} עוד היום`,
    aboutText: `${formData.businessName} מתמחה ב${formData.businessType} ומספקת שירותים איכותיים ל${formData.targetAudience}. המטרה שלנו היא ${formData.mainGoal} תוך מתן שירות מעולה.`
  };

  const handleWordPressIntegration = () => {
    toast({
      title: "🔗 הדרכה לחיבור WordPress",
      description: "נפתח מדריך מפורט לחיבור הדף שלך לוורדפרס",
    });
    // כאן נוכל להוסיף לוגיקה לפתיחת מדריך או חיבור אמיתי
  };

  const handleDomainPurchase = () => {
    setShowDomainPurchase(true);
  };

  const handleDownload = () => {
    toast({
      title: "⬇️ הורדת הדף",
      description: "הדף שלך מוכן להורדה כקובץ HTML",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Navigation Bar */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              חזרה לדף הבית
            </Button>
            <h1 className="text-xl font-bold">הדף שלך מוכן!</h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleDownload}>
                <Download className="w-4 h-4 ml-2" />
                הורד
              </Button>
              <Button onClick={handleDomainPurchase} className="bg-green-600 hover:bg-green-700">
                <Globe className="w-4 h-4 ml-2" />
                רכוש דומיין
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Generated Landing Page Preview */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Landing Page Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-0">
                {/* Preview Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-center">
                  <Badge className="mb-2 bg-white/20">תצוגה מקדימה</Badge>
                  <h2 className="text-2xl font-bold">{generatedContent.headline}</h2>
                  <p className="text-blue-100 mt-2">{generatedContent.subheadline}</p>
                </div>
                
                {/* Preview Content */}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      {generatedContent.cta}
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">היתרונות שלנו</h3>
                      <ul className="space-y-2">
                        {generatedContent.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 ml-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">אודותינו</h3>
                      <p className="text-gray-300">{generatedContent.aboutText}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">צור קשר</h3>
                    <div className="whitespace-pre-line text-gray-300">
                      {formData.contactInfo}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Options Panel */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wordpress className="w-5 h-5 ml-2" />
                  חיבור לוורדפרס
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  חבר את הדף שלך לאתר וורדפרס קיים או צור אתר חדש
                </p>
                <Button 
                  onClick={handleWordPressIntegration}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <ExternalLink className="w-4 h-4 ml-2" />
                  מדריך חיבור לוורדפרס
                </Button>
              </CardContent>
            </Card>

            {showDomainPurchase && (
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 ml-2" />
                    רכישת דומיין
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                      <span>{formData.businessName.toLowerCase().replace(/\s+/g, '')}.co.il</span>
                      <Badge className="bg-green-600">זמין</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                      <span>{formData.businessName.toLowerCase().replace(/\s+/g, '')}.com</span>
                      <Badge className="bg-green-600">זמין</Badge>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    רכוש דומיין - ₪99/שנה
                  </Button>
                  <p className="text-xs text-gray-400">
                    כולל הפניית DNS אוטומטית ותמיכה טכנית
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle>פעולות נוספות</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  עריכת התוכן
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  שיתוף הדף
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  ייצוא ל-PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneratedLandingPage;
