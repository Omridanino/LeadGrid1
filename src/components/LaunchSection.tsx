
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Rocket, 
  CheckCircle,
  ArrowLeft,
  Globe,
  Code,
  Download,
  Eye,
  Server,
  Zap,
  Link,
  ExternalLink,
  Shield
 } from 'lucide-react';
import { ServicesFlow } from './services/ServicesFlow';
import { TemplateData } from '@/types/template';

interface LaunchSectionProps {
  template: TemplateData;
  onBack: () => void;
  className?: string;
}

export const LaunchSection = ({ template, onBack, className = '' }: LaunchSectionProps) => {
  const [showServicesFlow, setShowServicesFlow] = useState(false);
  const { toast } = useToast();

  const handleStartPurchase = () => {
    console.log('Starting purchase flow...');
    setShowServicesFlow(true);
  };

  // Save the template data to localStorage for later use
  const saveTemplateData = () => {
    const templateWithGeneratedContent = {
      formData: {
        businessName: template.hero.title,
        businessDescription: template.hero.subtitle,
        businessType: template.category,
        email: '',
        phone: ''
      },
      generatedContent: {
        hero: {
          title: template.hero.title,
          subtitle: template.hero.subtitle,
          button1Text: template.hero.button1Text,
          button2Text: template.hero.button2Text
        },
        features: template.features,
        testimonials: template.testimonials,
        about: template.about,
        contact: template.contact
      },
      styles: template.styles,
      heroImage: '',
      template: template,
      businessInfo: {
        companyName: template.hero.title
      }
    };
    
    localStorage.setItem('generatedPageData', JSON.stringify(templateWithGeneratedContent));
  };

  if (showServicesFlow) {
    return (
      <ServicesFlow
        onComplete={() => setShowServicesFlow(false)}
        onBack={() => setShowServicesFlow(false)}
      />
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white relative overflow-hidden ${className}`} dir="rtl">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/25">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🎉 הדף שלך מוכן!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              בחר איך תרצה לפרסם את הדף שלך לאוויר
            </p>
          </div>
        </div>

        {/* Integration Options */}
        <div className="max-w-6xl mx-auto space-y-6">
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">איך תרצה לפרסם את הדף?</h2>
            <p className="text-gray-400">בחר את הדרך הכי נוחה עבורך</p>
          </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* One-Click Deploy - NEW MAIN OPTION */}
          <Card className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 border-emerald-500/60 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-2 left-2">
              <Badge className="bg-green-500 text-black font-bold text-xs">מומלץ!</Badge>
            </div>
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/40">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">פרסום מיידי - לחיצה אחת</h3>
                <p className="text-gray-300 text-sm mb-4">
                  פרסם את האתר תוך דקות - ללא צורך בידע טכני
                </p>
                
                <div className="space-y-2 text-xs text-emerald-200">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>פרסום תוך 2 דקות</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>SSL מאובטח אוטומטי</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>כתובת קבועה חינם</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>אפס הגדרות - הכל אוטומטי</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => {
                  saveTemplateData();
                  handleStartPurchase();
                }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold shadow-lg shadow-emerald-500/30"
                size="lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                המשך לרכישה
              </Button>
              
              <div className="text-xs text-emerald-300 font-medium">
                ⚡ הכי פשוט וטוב - בלי סיבוכים!
              </div>
            </CardContent>
          </Card>

          {/* WordPress Integration */}
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/50 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">הוסף לאתר WordPress</h3>
                <p className="text-gray-300 text-sm mb-4">
                  קוד HTML מוכן + מדריך שלב אחר שלב
                </p>
                
                <div className="space-y-2 text-xs text-blue-200">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>מהיר וקל - 5 דקות בלבד</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>שומר על כל העיצוב והתוכן</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>מדריך מפורט עם תמונות</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => {
                  saveTemplateData();
                  handleStartPurchase();
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Code className="w-4 h-4 mr-2" />
                קבל מדריך + קוד HTML
              </Button>
            </CardContent>
          </Card>

          {/* Manual Domain Guide */}
          <Card className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 border-orange-500/50 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-xl mx-auto flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Server className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">מדריך רכישת דומיין</h3>
                <p className="text-gray-300 text-sm mb-4">
                  שלבים מפורטים לרכישה עצמית ב-GoDaddy
                </p>
                
                <div className="space-y-2 text-xs text-orange-200">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>מדריך ברור וקל לביצוע</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>דומיין ואחסון במקום אחד</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>תמיכה בעברית 24/7</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => {
                  saveTemplateData();
                  handleStartPurchase();
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Server className="w-4 h-4 mr-2" />
                מדריך רכישת דומיין
              </Button>
            </CardContent>
          </Card>

        </div>

        {/* Download Option - Moved to bottom as secondary */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/50">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Download className="w-6 h-6 text-white" />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">או הורד קובץ HTML</h4>
                <p className="text-gray-400 text-sm mb-4">
                  האתר שלך כקובץ מוכן להעלאה בכל מקום
                </p>
              </div>
              
              <Button 
                onClick={() => {
                  try {
                    // Get the saved HTML from localStorage (if exists) or generate new one
                    let htmlContent = localStorage.getItem('generatedHTML');
                    
                    if (!htmlContent) {
                      // Fallback: generate from template if no saved HTML
                      const { generatePageHTML } = require('@/utils/pageGenerator');
                      htmlContent = generatePageHTML(template);
                    }
                    
                    if (!htmlContent) {
                      toast({
                        title: "❌ שגיאה",
                        description: "לא ניתן היה ליצור את קובץ ה-HTML. אנא נסה שוב.",
                        variant: "destructive"
                      });
                      return;
                    }
                    
                    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${template.hero.title.replace(/\s+/g, '-')}-landing-page.html`;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    
                    toast({
                      title: "📁 קובץ HTML הורד!",
                      description: "הקובץ הורד בהצלחה - זהו דף הנחיתה המדויק שיצרת",
                    });
                  } catch (error) {
                    console.error('Error downloading HTML:', error);
                    toast({
                      title: "❌ שגיאה בהורדה",
                      description: "אירעה שגיאה בהורדת הקובץ. אנא נסה שוב.",
                      variant: "destructive"
                    });
                  }
                }}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                הורד קובץ HTML
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          חזור לעריכת הדף
        </Button>
      </div>

      </div>
    </div>
  );
};
