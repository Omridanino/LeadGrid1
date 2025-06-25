
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Globe, Code, ExternalLink, Check, Palette, FileText, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GeneratedLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showDomainPurchase, setShowDomainPurchase] = useState(false);
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  
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
    setShowWordPressGuide(true);
    toast({
      title: "🔗 מדריך חיבור WordPress",
      description: "מדריך מפורט נפתח עבורך",
    });
  };

  const handleDomainPurchase = () => {
    setShowDomainPurchase(true);
    toast({
      title: "🌐 רכישת דומיין",
      description: "בחר את הדומיין המתאים לעסק שלך",
    });
  };

  const handleDownload = () => {
    const htmlContent = generateHtmlFile();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName.replace(/\s+/g, '_')}_landing_page.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "⬇️ הורדת הדף הושלמה!",
      description: "הדף שלך הורד בהצלחה כקובץ HTML",
    });
  };

  const generateHtmlFile = () => {
    return `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.businessName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .gradient-bg { background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%); }
        .card-hover { transition: transform 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <!-- Header -->
    <header class="gradient-bg py-16 text-center">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">${generatedContent.headline}</h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-8">${generatedContent.subheadline}</p>
            <button class="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                ${generatedContent.cta}
            </button>
        </div>
    </header>
    
    <!-- Features -->
    <section class="py-16 bg-gray-800">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">היתרונות שלנו</h2>
            <div class="grid md:grid-cols-3 gap-8">
                ${generatedContent.features.map(feature => `
                <div class="bg-gray-700 p-6 rounded-lg card-hover">
                    <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                        <span class="text-white text-xl">✓</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">${feature}</h3>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <!-- About -->
    <section class="py-16 bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-8">אודותינו</h2>
                <p class="text-lg text-gray-300 mb-8">${generatedContent.aboutText}</p>
            </div>
        </div>
    </section>
    
    <!-- Contact -->
    <section class="py-16 bg-gray-800">
        <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-8">צור קשר</h2>
                <div class="bg-gray-700 p-8 rounded-lg">
                    <pre class="text-gray-300 whitespace-pre-line">${formData.contactInfo}</pre>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-gray-900 py-8 text-center">
        <p class="text-gray-400">© ${new Date().getFullYear()} ${formData.businessName}. כל הזכויות שמורות.</p>
    </footer>
</body>
</html>`;
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
            <h1 className="text-xl font-bold flex items-center">
              <Zap className="w-5 h-5 ml-2 text-blue-400" />
              הדף שלך מוכן!
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleDownload}>
                <Download className="w-4 h-4 ml-2" />
                הורד HTML
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
            <Card className="bg-gray-900 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                {/* Preview Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <Badge className="mb-4 bg-white/20 text-white border-white/30">תצוגה מקדימה - דף נחיתה מותאם</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{generatedContent.headline}</h2>
                    <p className="text-blue-100 text-lg mb-6">{generatedContent.subheadline}</p>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                      {generatedContent.cta}
                    </Button>
                  </div>
                  {/* 3D Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-400/20 rounded-lg rotate-45 animate-bounce"></div>
                </div>
                
                {/* Preview Content */}
                <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <Check className="w-6 h-6 text-green-500 ml-2" />
                        היתרונות שלנו
                      </h3>
                      <div className="space-y-3">
                        {generatedContent.features.map((feature, index) => (
                          <div key={index} className="flex items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                            <Check className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <FileText className="w-6 h-6 text-blue-500 ml-2" />
                        אודותינו
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{generatedContent.aboutText}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg border border-gray-600">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Palette className="w-5 h-5 text-purple-500 ml-2" />
                      צור קשר
                    </h3>
                    <div className="whitespace-pre-line text-gray-300 bg-gray-800/50 p-4 rounded">
                      {formData.contactInfo}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Options Panel */}
          <div className="space-y-6">
            {/* WordPress Integration */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Code className="w-5 h-5 ml-2 text-orange-500" />
                  חיבור לוורדפרס
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  חבר את הדף שלך לאתר וורדפרס קיים או צור אתר חדש
                </p>
                <Button 
                  onClick={handleWordPressIntegration}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  <ExternalLink className="w-4 h-4 ml-2" />
                  מדריך חיבור לוורדפרס
                </Button>
                
                {showWordPressGuide && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-600">
                    <h4 className="font-semibold mb-2">מדריך חיבור מהיר:</h4>
                    <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                      <li>הורד את קובץ ה-HTML</li>
                      <li>התחבר לוורדפרס שלך</li>
                      <li>צור עמוד חדש ועבור למצב HTML</li>
                      <li>העתק את התוכן ושמור</li>
                      <li>פרסם את העמוד כדף הבית</li>
                    </ol>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Domain Purchase */}
            {showDomainPurchase && (
              <Card className="bg-gradient-to-br from-green-900/30 to-gray-900 border-green-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Globe className="w-5 h-5 ml-2 text-green-500" />
                    רכישת דומיין
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded border border-green-600/30">
                      <span className="font-mono text-sm">{formData.businessName.toLowerCase().replace(/\s+/g, '')}.co.il</span>
                      <Badge className="bg-green-600 text-white">זמין</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded border border-green-600/30">
                      <span className="font-mono text-sm">{formData.businessName.toLowerCase().replace(/\s+/g, '')}.com</span>
                      <Badge className="bg-green-600 text-white">זמין</Badge>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    <Globe className="w-4 h-4 ml-2" />
                    רכוש דומיין - ₪99/שנה
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    כולל הפניית DNS אוטומטית ותמיכה טכנית 24/7
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Additional Actions */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-gray-900 border-purple-700">
              <CardHeader>
                <CardTitle className="text-lg">פעולות נוספות</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-purple-600 hover:bg-purple-600/10">
                  <Palette className="w-4 h-4 ml-2" />
                  עריכת עיצוב
                </Button>
                <Button variant="outline" className="w-full justify-start border-purple-600 hover:bg-purple-600/10">
                  <ExternalLink className="w-4 h-4 ml-2" />
                  שיתוף הדף
                </Button>
                <Button variant="outline" className="w-full justify-start border-purple-600 hover:bg-purple-600/10">
                  <FileText className="w-4 h-4 ml-2" />
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
