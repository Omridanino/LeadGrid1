
import { useState, useEffect } from 'react';
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
  EyeOff,
  Key,
  Copy,
  ExternalLink
} from 'lucide-react';
import { CleanWordPressForm } from './domain/CleanWordPressForm';
import { TemplateData } from '@/types/template';
import { ApiKeyService } from '@/services/apiKeyService';

interface LaunchSectionProps {
  template: TemplateData;
  onBack: () => void;
  className?: string;
}

export const LaunchSection = ({ template, onBack, className = '' }: LaunchSectionProps) => {
  const [showWordPressForm, setShowWordPressForm] = useState(false);
  const [apiCredentials, setApiCredentials] = useState<any>(null);
  const [showCredentials, setShowCredentials] = useState(false);
  const { toast } = useToast();

  // Generate API credentials when component loads
  useEffect(() => {
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
    
    // Auto-generate API credentials for this page
    const credentials = ApiKeyService.createCredentials(templateWithGeneratedContent);
    setApiCredentials(credentials);
  }, [template]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "✅ הועתק!",
      description: `${label} הועתק ללוח`,
    });
  };

  if (showWordPressForm) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto">
        <div className="min-h-screen">
          <CleanWordPressForm 
            onBack={() => setShowWordPressForm(false)} 
            apiCredentials={apiCredentials}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen overflow-y-auto bg-gradient-to-br from-slate-900 via-black to-slate-900 ${className}`} dir="rtl">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/25">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🎉 הדף שלך מוכן!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              יצרנו עבורך פרטי API אוטומטיים - עכשיו תוכל להוסיף את הדף לאתר WordPress שלך
            </p>
          </div>
        </div>

        {/* API Credentials Display */}
        {apiCredentials && (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                  <Key className="w-6 h-6 text-green-400" />
                  פרטי ה-API שלך נוצרו אוטומטיס!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Site ID:</label>
                    <div className="flex items-center gap-2">
                      <input
                        value={apiCredentials.siteId}
                        readOnly
                        className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm font-mono"
                      />
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(apiCredentials.siteId, 'Site ID')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">API Key:</label>
                    <div className="flex items-center gap-2">
                      <input
                        value={showCredentials ? apiCredentials.apiKey : '••••••••••••••••••••••••••••••••••••'}
                        readOnly
                        className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm font-mono"
                      />
                      <Button
                        size="sm"
                        onClick={() => setShowCredentials(!showCredentials)}
                        variant="outline"
                        className="border-gray-600 text-white hover:bg-gray-700"
                      >
                        {showCredentials ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(apiCredentials.apiKey, 'API Key')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    נוצר ב-{new Date(apiCredentials.created).toLocaleString('he-IL')}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Integration Options */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">איך תרצה להשתמש בדף?</h2>
            <p className="text-gray-400">הפרטים שלמעלה יועברו אוטומטית</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* WordPress Integration */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/50 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Code className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">הוסף לאתר WordPress</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    מדריך מפורט + התוסף + הפרטים מוכנים
                  </p>
                  
                  <div className="space-y-2 text-xs text-blue-200">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>פרטי API יועברו אוטומטית</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>תוסף WordPress מוכן להורדה</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>מדריך התקנה מפורט</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => setShowWordPressForm(true)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Code className="w-4 h-4 mr-2" />
                  התחל התקנה ב-WordPress
                </Button>
              </CardContent>
            </Card>

            {/* Direct Download */}
            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/50 cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/25">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-xl mx-auto flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Download className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">הורד קובץ HTML</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    קובץ מוכן להעלאה לכל שרת אחסון
                  </p>
                  
                  <div className="space-y-2 text-xs text-green-200">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>קובץ HTML מלא ומוכן</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>עובד בכל אתר או שרת</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>ללא תלות בפלטפורמה</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => {
                    try {
                      let htmlContent = localStorage.getItem('generatedHTML');
                      
                      if (!htmlContent) {
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
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  הורד קובץ HTML
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Back Button */}
        <div className="text-center pb-8">
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
