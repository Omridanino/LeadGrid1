
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Code, ExternalLink, Check, Palette, FileText, Zap, Star, Users, TrendingUp, RefreshCw, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ColorEditor, { ColorScheme } from "@/components/ColorEditor";
import WordPressIntegration from "@/components/WordPressIntegration";

const GeneratedLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  const [showDesignEditor, setShowDesignEditor] = useState(false);
  const [currentColors, setCurrentColors] = useState<ColorScheme>({
    primary: "#3b82f6",
    secondary: "#8b5cf6", 
    accent: "#06b6d4",
    background: "#1f2937",
    text: "#ffffff"
  });
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  
  const formData = location.state?.formData || {
    businessName: "העסק שלי",
    businessType: "שירותים עסקיים",
    targetAudience: "לקוחות פוטנציאליים",
    mainGoal: "הגדלת מכירות",
    keyFeatures: "שירות מקצועי, מהירות, אמינות",
    brandColors: "כחול וכסף",
    contactInfo: "טלפון: 050-1234567\nאימייל: info@business.co.il"
  };

  // Enhanced AI content generation with creativity and brand color recognition
  const generateCreativeContent = () => {
    // Parse brand colors from user input
    const colorMapping: { [key: string]: string } = {
      'כחול': '#2563eb', 'חום': '#92400e', 'אדום': '#dc2626', 'ירוק': '#16a34a',
      'סגול': '#7c3aed', 'כתום': '#ea580c', 'ורוד': '#ec4899', 'צהוב': '#eab308',
      'שחור': '#1f2937', 'לבן': '#f8fafc', 'כסף': '#64748b', 'זהב': '#f59e0b'
    };

    let primaryColor = '#3b82f6';
    let secondaryColor = '#8b5cf6';

    // Extract colors from user input
    const colorText = formData.brandColors.toLowerCase();
    Object.keys(colorMapping).forEach(color => {
      if (colorText.includes(color)) {
        if (!primaryColor || primaryColor === '#3b82f6') {
          primaryColor = colorMapping[color];
        } else if (!secondaryColor || secondaryColor === '#8b5cf6') {
          secondaryColor = colorMapping[color];
        }
      }
    });

    // Creative features generation based on business type
    const creativeFeatures = {
      'שירותים עסקיים': ['פתרונות מותאמים אישית', 'צוות מומחים ברמה גבוהה', 'תהליכים מהירים ויעילים', 'תוצאות מדידות ומוכחות'],
      'טכנולוגיה': ['טכנולוגיה מתקדמת ביותר', 'אבטחה ברמה צבאית', 'ממשק אינטואיטיבי וידידותי', 'עדכונים רציפים וחדשנות'],
      'חינוך': ['מתודולוגיה ייחודית ומוכחת', 'ליווי צמוד ואישי', 'תוצאות מרשימות ומדידות', 'ניסיון רב שנים בתחום'],
      'בריאות': ['טיפול מקצועי ומתקדם', 'ציוד רפואי חדיש', 'צוות רפואי מומחה', 'גישה אישית לכל מטופל'],
      'default': ['איכות ללא פשרות', 'שירות מהיר ואמין', 'מחירים הוגנים ותחרותיים', 'ניסיון מוכח ורב שנים']
    };

    const businessFeatures = creativeFeatures[formData.businessType as keyof typeof creativeFeatures] || creativeFeatures.default;

    // Creative about text generation
    const creativeBusiness = {
      'שירותים עסקיים': `${formData.businessName} הוקמה מתוך חזון ברור - לספק פתרונות עסקיים מתקדמים שמניבים תוצאות מדידות. אנו מתמחים בהובלת ארגונים לשיפור ביצועים דרך אסטרטגיות חכמות וטכנולוגיות מתקדמות.`,
      'טכנולוגיה': `${formData.businessName} נמצאת בחזית החדשנות הטכנולוגית. אנו פיתחנו פלטפורמות מתקדמות המשלבות בינה מלאכותית וטכנולוגיות ענן לפתרונות עתידניים.`,
      'חינוך': `${formData.businessName} מובילה בתחום החינוך המתקדם. המתודולוגיה הייחודית שלנו משלבת טכניקות למידה מודרניות עם גישה אישית לכל תלמיד.`,
      'בריאות': `${formData.businessName} מציעה רפואה מתקדמת ואישית. המרפאה שלנו משלבת ציוד רפואי חדיש עם גישה הוליסטית לבריאות המטופל.`,
      'default': `${formData.businessName} הוקמה מתוך אהבה וחשק לספק שירות מעולה. אנו מאמינים שכל לקוח ראוי לקבל יחס אישי ופתרונות מותאמים בדיוק לצרכיו.`
    };

    const aboutText = creativeBusiness[formData.businessType as keyof typeof creativeBusiness] || creativeBusiness.default;

    return {
      headline: `גלו את העתיד עם ${formData.businessName}`,
      subheadline: `הפתרון המתקדם והמקצועי ביותר עבור ${formData.targetAudience} בתחום ${formData.businessType}`,
      features: businessFeatures,
      cta: `הצטרפו אלינו עוד היום`,
      aboutText,
      colors: { primary: primaryColor, secondary: secondaryColor }
    };
  };

  // Initialize content
  useState(() => {
    if (!generatedContent) {
      setGeneratedContent(generateCreativeContent());
    }
  });

  const content = generatedContent || generateCreativeContent();

  const handleColorChange = (newColors: ColorScheme) => {
    setCurrentColors(newColors);
    // Apply colors to the preview immediately
    const preview = document.querySelector('.landing-preview');
    if (preview) {
      const style = preview as HTMLElement;
      style.style.setProperty('--primary-color', newColors.primary);
      style.style.setProperty('--secondary-color', newColors.secondary);
      style.style.setProperty('--accent-color', newColors.accent);
      style.style.setProperty('--bg-color', newColors.background);
      style.style.setProperty('--text-color', newColors.text);
    }
  };

  const handleWordPressIntegration = () => {
    setShowWordPressGuide(true);
    toast({
      title: "🔗 אינטגרציה עם WordPress",
      description: "מדריך החיבור נפתח",
    });
  };

  const handleDownloadCode = () => {
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
      title: "💻 קוד המקור הורד!",
      description: "קובץ HTML מלא עם כל הקוד הורד בהצלחה",
    });
  };

  const handleRegenerate = () => {
    toast({
      title: "🔄 יוצר דף חדש...",
      description: "יוצר גרסה חדשה עם תוכן משופר",
    });
    
    // Regenerate content with new creativity
    const newContent = generateCreativeContent();
    setGeneratedContent(newContent);
    
    toast({
      title: "✨ דף חדש נוצר!",
      description: "הדף עודכן בהצלחה עם תוכן חדש ויצירתי",
    });
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
        :root {
            --primary-color: ${currentColors.primary};
            --secondary-color: ${currentColors.secondary};
            --accent-color: ${currentColors.accent};
            --bg-color: ${currentColors.background};
            --text-color: ${currentColors.text};
        }
        .custom-gradient { 
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%); 
        }
        .card-hover { 
            transition: all 0.3s ease; 
            backdrop-filter: blur(10px);
        }
        .card-hover:hover { 
            transform: translateY(-10px) scale(1.02); 
        }
    </style>
</head>
<body style="background: var(--bg-color); color: var(--text-color);">
    <header class="custom-gradient py-20 text-center">
        <div class="container mx-auto px-4">
            <h1 class="text-6xl font-bold mb-6">${content.headline}</h1>
            <p class="text-xl mb-8">${content.subheadline}</p>
            <button class="px-8 py-4 rounded-xl text-lg font-semibold" style="background: var(--accent-color); color: white;">
                ${content.cta}
            </button>
        </div>
    </header>
    
    <section class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-16 text-center">למה לבחור בנו?</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${content.features.map((feature: string, index: number) => `
                <div class="card-hover p-8 rounded-2xl border" style="background: rgba(255,255,255,0.1); border-color: var(--primary-color);">
                    <h3 class="text-xl font-semibold mb-4">${feature}</h3>
                    <p style="color: var(--text-color); opacity: 0.8;">פתרון מקצועי ומתקדם המותאם בדיוק לצרכים שלכם.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <section class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-8">אודותינו</h2>
            <p class="text-lg leading-relaxed">${content.aboutText}</p>
        </div>
    </section>
    
    <section class="py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-8">צור קשר</h2>
            <div class="whitespace-pre-line mb-6">${formData.contactInfo}</div>
            <button class="px-8 py-4 rounded-xl text-lg font-semibold" style="background: var(--primary-color); color: white;">
                צור קשר עכשיו
            </button>
        </div>
    </section>
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
              <Button 
                onClick={handleRegenerate}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <RefreshCw className="w-4 h-4 ml-2" />
                צור מחדש
              </Button>
              <Button 
                onClick={handleDownloadCode}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Download className="w-4 h-4 ml-2" />
                הורד קוד
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
                <div 
                  className="landing-preview p-12 text-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%)`
                  }}
                >
                  <div className="relative z-10">
                    <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                      🚀 הפתרון המתקדם ביותר בשוק
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">{content.headline}</h2>
                    <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">{content.subheadline}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                      <Button 
                        size="lg" 
                        className="text-xl px-10 py-4 shadow-2xl rounded-xl"
                        style={{ backgroundColor: currentColors.accent, color: 'white' }}
                      >
                        {content.cta}
                      </Button>
                      <Button 
                        size="lg" 
                        className="border-white/30 text-white hover:bg-white/10 text-xl px-10 py-4 rounded-xl"
                        style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                      >
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
                        {content.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl hover:from-gray-600/50 hover:to-gray-700/50 transition-all duration-300 border border-gray-600/30">
                            <div 
                              className="w-8 h-8 rounded-full flex items-center justify-center ml-4 flex-shrink-0"
                              style={{ backgroundColor: currentColors.primary }}
                            >
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
                        <p className="text-gray-300 leading-relaxed mb-6">{content.aboutText}</p>
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
                      <Button 
                        className="text-xl px-8 py-4 rounded-xl"
                        style={{ backgroundColor: currentColors.primary, color: 'white' }}
                      >
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
            {/* Color Editor */}
            {showDesignEditor && (
              <ColorEditor onColorChange={handleColorChange} />
            )}

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
                  className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl"
                >
                  <Palette className="w-4 h-4 ml-2" />
                  {showDesignEditor ? 'סגור עורך עיצוב' : 'פתח עורך עיצוב'}
                </Button>
              </CardContent>
            </Card>

            {/* WordPress Integration */}
            <WordPressIntegration 
              isOpen={showWordPressGuide}
              onClose={() => setShowWordPressGuide(false)}
              onOpen={handleWordPressIntegration}
              landingPageHtml={generateHtmlFile()}
            />

            {/* Additional Actions */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-gray-900 border-purple-700">
              <CardHeader>
                <CardTitle className="text-lg">פעולות נוספות</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-purple-600 hover:bg-purple-600/10 rounded-xl"
                >
                  <ExternalLink className="w-4 h-4 ml-2" />
                  שיתוף הדף
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-purple-600 hover:bg-purple-600/10 rounded-xl"
                >
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
