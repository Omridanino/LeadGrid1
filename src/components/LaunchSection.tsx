import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  CheckCircle,
  ArrowLeft,
  Globe,
  Code,
  Download,
  Eye
} from 'lucide-react';
import { CleanWordPressForm } from './domain/CleanWordPressForm';
import { TemplateData } from '@/types/template';

interface LaunchSectionProps {
  template: TemplateData;
  onBack: () => void;
  className?: string;
}

export const LaunchSection = ({ template, onBack, className = '' }: LaunchSectionProps) => {
  const [showWordPressForm, setShowWordPressForm] = useState(false);

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

  if (showWordPressForm) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50">
        <CleanWordPressForm onBack={() => setShowWordPressForm(false)} />
      </div>
    );
  }

  return (
    <div className={`space-y-8 ${className}`} dir="rtl">
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
            עכשיו תוכל להוסיף אותו לאתר WordPress שלך בקלות ובמהירות
          </p>
        </div>
      </div>


      {/* Integration Options */}
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">איך תרצה להשתמש בדף?</h2>
          <p className="text-gray-400">בחר את הדרך הכי נוחה עבורך</p>
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
                  setShowWordPressForm(true);
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Code className="w-4 h-4 mr-2" />
                קבל מדריך + קוד HTML
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
                  saveTemplateData();
                  // Generate and download HTML file using new generator
                  const { generatePageHTML } = require('@/utils/pageGenerator');
                  const savedData = JSON.parse(localStorage.getItem('generatedPageData') || '{}');
                  const htmlContent = generatePageHTML(savedData.template || template);
                  
                  const blob = new Blob([htmlContent], { type: 'text/html' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${template.hero.title.replace(/\s+/g, '-')}-landing-page.html`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
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
  );
};