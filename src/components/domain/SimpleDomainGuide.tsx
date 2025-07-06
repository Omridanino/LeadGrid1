
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Server, 
  CheckCircle,
  ArrowLeft,
  ExternalLink,
  FileText,
  Shield,
  Headphones,
  Zap,
  ArrowRight,
  Monitor,
  Upload,
  Eye
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SimpleDomainGuideProps {
  onBack: () => void;
}

export const SimpleDomainGuide = ({ onBack }: SimpleDomainGuideProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const handleGoDaddyClick = () => {
    window.open('https://il.godaddy.com/', '_blank');
    toast({
      title: "🚀 נפתח GoDaddy",
      description: "עקוב אחר המדריך הפשוט למטה",
    });
  };

  const steps = [
    {
      number: 1,
      title: "רכישת דומיין ואחסון ב-GoDaddy",
      icon: <Globe className="w-6 h-6" />,
      description: "נכנס לאתר GoDaddy וקונים דומיין + אחסון במקום אחד",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "היכנס לאתר il.godaddy.com",
        "חפש את הדומיין שלך (לדוגמה: mycompany.com)",
        "הוסף Web Hosting (אחסון) לעגלה", 
        "השלם את הרכישה"
      ]
    },
    {
      number: 2,
      title: "כניסה לפאנל הניהול",
      icon: <Monitor className="w-6 h-6" />,
      description: "נכנס לחשבון GoDaddy ומוצא את פאנל הניהול",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "התחבר לחשבון GoDaddy שלך",
        "לחץ על 'My Products' (המוצרים שלי)",
        "מצא את האחסון שלך ולחץ 'Manage'",
        "חפש 'File Manager' (מנהל קבצים)"
      ]
    },
    {
      number: 3,
      title: "העלאת קובץ ה-HTML",
      icon: <Upload className="w-6 h-6" />,
      description: "מעלים את קובץ HTML לתיקיית public_html",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "פתח את File Manager",
        "נווט לתיקיית public_html",
        "העלה את קובץ ה-HTML שקיבלת מאיתנו",
        "שנה את שם הקובץ ל-index.html"
      ]
    },
    {
      number: 4,
      title: "זהו! האתר באוויר! 🎉",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "האתר שלכם מוכן וזמין לציבור",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "הדומיין והאחסון מתחברים אוטומטית (עד 24 שעות)",
        "האתר יהיה זמין בכתובת: www.yoursite.com",
        "SSL מאובטח כלול (המנעול הירוק)",
        "בדקו שהאתר נטען כמו שצריך"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50" dir="rtl">
      <div className="h-screen overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 space-y-8 pb-20">
          
          {/* Header */}
          <div className="text-center space-y-6 py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full shadow-2xl shadow-green-500/25 mb-4">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              🎯 מדריך פשוט לרכישת דומיין ואחסון
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              4 שלבים פשוטים עם תמונות הדרכה להעלאת האתר שלך לאוויר
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className={`
                      relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                      ${currentStep >= step.number 
                        ? 'bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 text-white shadow-xl shadow-cyan-500/40' 
                        : currentStep === step.number 
                          ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white shadow-xl shadow-blue-500/40 ring-4 ring-blue-500/30' 
                          : 'bg-gradient-to-br from-slate-700 to-slate-600 text-gray-400'
                      }
                    `}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span className="font-bold">{step.number}</span>
                      )}
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-2 mx-3 rounded-full transition-all duration-500 ${
                        currentStep > step.number 
                          ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30' 
                          : 'bg-gradient-to-r from-slate-700 to-slate-600'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Current Step Card */}
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 shadow-2xl backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-slate-700/50">
              <div className="flex items-center gap-6 text-right">
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-4 rounded-2xl shadow-xl shadow-blue-500/30">
                  {steps[currentStep - 1].icon}
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-3 bg-blue-500/20 text-blue-300 border-blue-500/40">
                    שלב {currentStep} מתוך {steps.length}
                  </Badge>
                  <CardTitle className="text-3xl font-bold text-white mb-2">
                    {steps[currentStep - 1].title}
                  </CardTitle>
                  <p className="text-gray-300 text-lg">
                    {steps[currentStep - 1].description}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 p-8">
              
              {/* Step Image */}
              <div className="bg-slate-900 border border-slate-600 rounded-xl p-4 shadow-lg">
                <img 
                  src={steps[currentStep - 1].image} 
                  alt={steps[currentStep - 1].title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <p className="text-center text-gray-400 text-sm mt-3 font-medium">
                  📸 {steps[currentStep - 1].title}
                </p>
              </div>

              {/* Instructions */}
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-blue-300 font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  מה לעשות:
                </h4>
                <div className="space-y-3">
                  {steps[currentStep - 1].instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start gap-3 text-blue-100">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="leading-relaxed">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Actions for Each Step */}
              {currentStep === 1 && (
                <div className="text-center">
                  <Button
                    onClick={handleGoDaddyClick}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg shadow-lg shadow-green-500/30"
                  >
                    <ExternalLink className="w-5 h-5 ml-2" />
                    פתח את GoDaddy עכשיו
                  </Button>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-700">
                <Button
                  onClick={onBack}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  חזור אחורה
                </Button>
                
                <div className="flex gap-3">
                  {currentStep > 1 && (
                    <Button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      variant="outline"
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500"
                    >
                      שלב קודם
                    </Button>
                  )}
                  
                  {currentStep < steps.length ? (
                    <Button
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    >
                      שלב הבא
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        toast({
                          title: "🎉 מזל טוב!",
                          description: "דף הנחיתה שלך מוכן ופעיל!",
                        });
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      סיימתי בהצלחה!
                    </Button>
                  )}
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                <Headphones className="w-6 h-6" />
                זקוק לעזרה?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-orange-200">
                אם משהו לא ברור או שאתה נתקל בבעיה - אנחנו כאן בשבילך!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-300 hover:bg-orange-500/20"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  מדריך מפורט
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-300 hover:bg-orange-500/20"
                >
                  <Headphones className="w-4 h-4 mr-2" />
                  צור קשר לעזרה
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};
