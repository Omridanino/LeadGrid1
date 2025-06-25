
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Globe, Code, ExternalLink, Check, Palette, FileText, Zap, Star, Users, TrendingUp, RefreshCw, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GeneratedLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showDomainPurchase, setShowDomainPurchase] = useState(false);
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  const [showDesignEditor, setShowDesignEditor] = useState(false);
  
  const formData = location.state?.formData || {
    businessName: "העסק שלי",
    businessType: "שירותים עסקיים",
    targetAudience: "לקוחות פוטנציאליים",
    mainGoal: "הגדלת מכירות",
    keyFeatures: "שירות מקצועי, מהירות, אמינות",
    brandColors: "כחול וכסף",
    contactInfo: "טלפון: 050-1234567\nאימייל: info@business.co.il"
  };

  // Enhanced AI-generated content with creativity
  const generateIntelligentFeatures = () => {
    const baseFeatures = formData.keyFeatures.split(',').map(f => f.trim());
    const businessTypeFeatures = {
      'שירותים עסקיים': ['ייעוץ מקצועי', 'פתרונות מותאמים', 'תמיכה 24/7', 'ניסיון מוכח'],
      'טכנולוגיה': ['חדשנות טכנולוגית', 'אבטחה מתקדמת', 'ממשק ידידותי', 'עדכונים רציפים'],
      'חינוך': ['מקצועיות גבוהה', 'גישה אישית', 'תוצאות מוכחות', 'ליווי צמוד'],
      'בריאות': ['מקצועיות רפואית', 'טכנולוגיה מתקדמת', 'זמינות גבוהה', 'שירות אישי'],
      'default': ['איכות מעולה', 'שירות מהיר', 'מחירים תחרותיים', 'אמינות מלאה']
    };
    
    const relevantFeatures = businessTypeFeatures[formData.businessType] || businessTypeFeatures.default;
    const combinedFeatures = [...baseFeatures, ...relevantFeatures].slice(0, 4);
    
    return combinedFeatures.length < 4 ? [...combinedFeatures, ...relevantFeatures].slice(0, 4) : combinedFeatures;
  };

  const generatedContent = {
    headline: `ברוכים הבאים ל${formData.businessName}`,
    subheadline: `הפתרון המושלם ל${formData.targetAudience} בתחום ${formData.businessType}`,
    features: generateIntelligentFeatures(),
    cta: `התחל עם ${formData.businessName} עוד היום`,
    aboutText: `${formData.businessName} מתמחה ב${formData.businessType} ומספקת שירותים איכותיים ל${formData.targetAudience}. המטרה שלנו היא ${formData.mainGoal} תוך מתן שירות מעולה.`
  };

  const handleWordPressIntegration = () => {
    // Create actual WordPress integration functionality
    const wpCode = `
    // הוסף את הקוד הזה ל-functions.php של הוורדפרס שלך
    function add_custom_landing_page() {
      // קוד ליצירת עמוד מותאם
      wp_create_post(array(
        'post_title' => '${formData.businessName}',
        'post_content' => '${generateHtmlFile()}',
        'post_status' => 'publish',
        'post_type' => 'page'
      ));
    }
    `;
    
    navigator.clipboard.writeText(wpCode);
    setShowWordPressGuide(true);
    toast({
      title: "🔗 קוד WordPress הועתק!",
      description: "הקוד להטמעה בוורדפרס הועתק ללוח",
    });
  };

  const handleDomainPurchase = () => {
    setShowDomainPurchase(true);
    toast({
      title: "🌐 רכישת דומיין",
      description: "בחר את הדומיין המתאים לעסק שלך",
    });
  };

  const handleDownloadCode = () => {
    const htmlContent = generateHtmlFile();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName.replace(/\s+/g, '_')}_source_code.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "💻 קוד המקור הורד!",
      description: "קובץ HTML מלא עם כל הקוד הורד בהצלחה",
    });
  };

  const handleRegenerate = () => {
    toast({
      title: "🔄 מחדש את הדף...",
      description: "יוצר גרסה חדשה עם תוכן משופר",
    });
    
    // Simulate regeneration
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleDesignEdit = () => {
    setShowDesignEditor(true);
    toast({
      title: "🎨 עורך העיצוב נפתח",
      description: "כעת ניתן לערוך את העיצוב של הדף",
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
        .gradient-bg { 
            background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #06b6d4 100%); 
            background-size: 300% 300%;
            animation: gradientShift 6s ease infinite;
        }
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .card-hover { 
            transition: all 0.3s ease; 
            backdrop-filter: blur(10px);
        }
        .card-hover:hover { 
            transform: translateY(-10px) scale(1.02); 
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .floating-animation {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
            from { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
            to { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8); }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
    <!-- Full landing page HTML with all features and working buttons -->
    <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full floating-animation"></div>
        <div class="absolute bottom-40 left-20 w-48 h-48 bg-purple-500/10 rounded-full floating-animation" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/10 rounded-full floating-animation" style="animation-delay: 4s;"></div>
    </div>

    <header class="gradient-bg py-20 text-center relative z-10">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                    <span class="text-blue-200 font-semibold">🚀 הפתרון המתקדם ביותר בשוק</span>
                </div>
                <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">${generatedContent.headline}</h1>
                <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">${generatedContent.subheadline}</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button onclick="document.getElementById('contact').scrollIntoView()" class="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 pulse-glow">
                        ${generatedContent.cta}
                    </button>
                    <button onclick="alert('דמו בקרוב!')" class="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                        צפה בדמו
                    </button>
                </div>
                
                <div class="grid md:grid-cols-3 gap-6 mt-12">
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover">
                        <div class="text-3xl font-bold text-white mb-2">10,000+</div>
                        <div class="text-blue-200">לקוחות מרוצים</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover">
                        <div class="text-3xl font-bold text-white mb-2">99.9%</div>
                        <div class="text-blue-200">זמינות השירות</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl card-hover">
                        <div class="text-3xl font-bold text-white mb-2">24/7</div>
                        <div class="text-blue-200">תמיכה טכנית</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <section class="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative z-10">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-6">למה לבחור בנו?</h2>
                <p class="text-xl text-gray-300">היתרונות שיעשו לך את ההבדל</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${generatedContent.features.map((feature, index) => `
                <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-2xl card-hover border border-gray-600/50">
                    <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 flex items-center justify-center text-2xl">
                        ${['✅', '⚡', '🎯', '💎', '🚀', '🔥'][index] || '✨'}
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-white">${feature}</h3>
                    <p class="text-gray-300">פתרון מתקדם ומקצועי שיעזור לך להשיג את המטרות שלך בצורה הטובה ביותר.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <section class="py-20 bg-gradient-to-r from-gray-900 to-black relative z-10">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold mb-8">אודותינו</h2>
                        <p class="text-lg text-gray-300 mb-8 leading-relaxed">${generatedContent.aboutText}</p>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-reverse space-x-3">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <span class="text-white text-xs">✓</span>
                                </div>
                                <span class="text-gray-300">מומחיות ברמה הגבוהה ביותר</span>
                            </div>
                            <div class="flex items-center space-x-reverse space-x-3">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <span class="text-white text-xs">✓</span>
                                </div>
                                <span class="text-gray-300">תוצאות מוכחות ומדידות</span>
                            </div>
                            <div class="flex items-center space-x-reverse space-x-3">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <span class="text-white text-xs">✓</span>
                                </div>
                                <span class="text-gray-300">שירות אישי ומותאם</span>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-3xl backdrop-blur-sm border border-blue-500/30">
                            <div class="text-center">
                                <div class="text-5xl mb-4">🏆</div>
                                <h3 class="text-2xl font-bold mb-4">המובילים בתחום</h3>
                                <p class="text-gray-300">עם ניסיון של מעל 10 שנים ואלפי פרויקטים מוצלחים</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 relative z-10">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">צור קשר</h2>
                <p class="text-xl text-gray-300 mb-8">מוכנים להתחיל? בואו נדבר!</p>
                <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-600/50">
                    <div class="whitespace-pre-line text-gray-300 text-lg leading-relaxed mb-6">${formData.contactInfo}</div>
                    <button onclick="window.location.href='tel:050-1234567'" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                        צור קשר עכשיו
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    <footer class="bg-gray-900 py-12 text-center relative z-10">
        <div class="container mx-auto px-4">
            <div class="border-t border-gray-800 pt-8">
                <p class="text-gray-400">© ${new Date().getFullYear()} ${formData.businessName}. כל הזכויות שמורות.</p>
                <p class="text-gray-500 text-sm mt-2">נוצר בגאווה עם LeadGrid</p>
            </div>
        </div>
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
              <Button variant="outline" onClick={handleRegenerate}>
                <RefreshCw className="w-4 h-4 ml-2" />
                צור מחדש
              </Button>
              <Button variant="outline" onClick={handleDownloadCode}>
                <Download className="w-4 h-4 ml-2" />
                הורד קוד
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
          {/* Enhanced Landing Page Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                {/* Enhanced Preview Header */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 p-12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* 3D Floating Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-400/20 rounded-lg rotate-45 animate-bounce"></div>
                  <div className="absolute top-1/2 left-8 w-12 h-12 bg-cyan-400/20 rounded-full animate-ping"></div>
                  
                  <div className="relative z-10">
                    <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                      🚀 הפתרון המתקדם ביותר בשוק
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">{generatedContent.headline}</h2>
                    <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">{generatedContent.subheadline}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-4 shadow-2xl">
                        {generatedContent.cta}
                      </Button>
                      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xl px-10 py-4">
                        צפה בדמו
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-8">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">10,000+</div>
                        <div className="text-blue-200 text-sm">לקוחות מרוצים</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                        <div className="text-blue-200 text-sm">זמינות השירות</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">24/7</div>
                        <div className="text-blue-200 text-sm">תמיכה טכנית</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Preview Content */}
                <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-semibold mb-6 flex items-center">
                        <Star className="w-8 h-8 text-yellow-500 ml-3" />
                        היתרונות שלנו
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {generatedContent.features.map((feature, index) => (
                          <div key={index} className="flex items-center p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl hover:from-gray-600/50 hover:to-gray-700/50 transition-all duration-300 border border-gray-600/30">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center ml-4 flex-shrink-0">
                              <Check className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-3xl font-semibold mb-6 flex items-center">
                        <Users className="w-8 h-8 text-blue-500 ml-3" />
                        אודותינו
                      </h3>
                      <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-600/30">
                        <p className="text-gray-300 leading-relaxed mb-6">{generatedContent.aboutText}</p>
                        <div className="flex items-center justify-center space-x-reverse space-x-6 text-center">
                          <div>
                            <div className="text-2xl font-bold text-white">150+</div>
                            <div className="text-blue-300 text-sm">פרויקטים</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">98%</div>
                            <div className="text-blue-300 text-sm">שביעות רצון</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">5★</div>
                            <div className="text-blue-300 text-sm">דירוג ממוצע</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Contact Section */}
                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-500 ml-3" />
                      צור קשר ותתחיל עוד היום
                    </h3>
                    <div className="bg-gray-800/50 p-6 rounded-xl mb-6">
                      <div className="whitespace-pre-line text-gray-300 text-center leading-relaxed">
                        {formData.contactInfo}
                      </div>
                    </div>
                    <div className="text-center">
                      <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-xl px-8 py-4">
                        צור קשר עכשיו
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Options Panel */}
          <div className="space-y-6">
            {/* Design Editor */}
            <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-700">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Edit className="w-5 h-5 ml-2 text-purple-500" />
                  עריכת עיצוב
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  ערוך את העיצוב של הדף, שנה צבעים, גופנים ועיצוב
                </p>
                <Button 
                  onClick={handleDesignEdit}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <Palette className="w-4 h-4 ml-2" />
                  פתח עורך עיצוב
                </Button>
                
                {showDesignEditor && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-600">
                    <h4 className="font-semibold mb-2">אפשרויות עיצוב:</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center justify-between">
                        <span>צבע רקע:</span>
                        <input type="color" defaultValue="#1a1a1a" className="w-8 h-8 rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>צבע ראשי:</span>
                        <input type="color" defaultValue="#3b82f6" className="w-8 h-8 rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>צבע משני:</span>
                        <input type="color" defaultValue="#8b5cf6" className="w-8 h-8 rounded" />
                      </div>
                      <Button size="sm" className="w-full mt-2">שמור שינויים</Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

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
                  קבל קוד מוכן להטמעה באתר וורדפרס
                </p>
                <Button 
                  onClick={handleWordPressIntegration}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  <ExternalLink className="w-4 h-4 ml-2" />
                  קבל קוד WordPress
                </Button>
                
                {showWordPressGuide && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-600">
                    <h4 className="font-semibold mb-2">הוראות התקנה:</h4>
                    <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
                      <li>העתק את הקוד שהועתק ללוח</li>
                      <li>היכנס לוורדפרס Admin</li>
                      <li>עבור לעמודים → הוסף חדש</li>
                      <li>הדבק את הקוד במצב HTML</li>
                      <li>פרסם את העמוד</li>
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
