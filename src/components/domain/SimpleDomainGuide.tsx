
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
  Zap
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

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50" dir="rtl">
      <div className="h-screen overflow-y-auto">
        <div className="max-w-4xl mx-auto p-6 space-y-8 pb-20">
          
          {/* Header */}
          <div className="text-center space-y-6 py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full shadow-2xl shadow-green-500/25 mb-4">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              🎯 מדריך פשוט לרכישת דומיין ואחסון
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              3 שלבים פשוטים להעלאת האתר שלך לאוויר עם GoDaddy
            </p>
          </div>

          {/* Why GoDaddy */}
          <Card className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                <Shield className="w-6 h-6" />
                למה אנחנו ממליצים על GoDaddy?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-green-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>חברה מובילה ואמינה בעולם</span>
                </div>
                <div className="flex items-center gap-3 text-green-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>תמיכה בעברית 24/7</span>
                </div>
                <div className="flex items-center gap-3 text-green-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>דומיין ואחסון במקום אחד</span>
                </div>
                <div className="flex items-center gap-3 text-green-200">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>מחירים תחרותיים</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step by Step Guide */}
          <div className="space-y-6">
            
            {/* Step 1 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  רכישת דומיין ואחסון ב-GoDaddy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-3">מה לעשות:</h4>
                  <div className="space-y-2 text-green-100">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>היכנס לאתר <strong>il.godaddy.com</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>חפש את הדומיין שלך (לדוגמה: mycompany.com)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>הוסף <strong>Web Hosting</strong> (אחסון) לעגלה</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>השלם את הרכישה</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button
                    onClick={handleGoDaddyClick}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                  >
                    <ExternalLink className="w-5 h-5 ml-2" />
                    פתח את GoDaddy עכשיו
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  העלאת קובץ ה-HTML לאחסון
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-300 font-semibold mb-3">מה לעשות:</h4>
                  <div className="space-y-2 text-blue-100">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>התחבר לחשבון GoDaddy שלך</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>לחץ על "My Products" ומצא את האחסון שלך</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>פתח "File Manager" (מנהל קבצים)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>העלה את קובץ ה-HTML לתיקיית <strong>public_html</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span><strong>חשוב!</strong> שנה את שם הקובץ ל-<strong>index.html</strong></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  זהו! האתר שלך באוויר! 🎉
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-3">מה קורה עכשיו:</h4>
                  <div className="space-y-2 text-purple-100">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>הדומיין והאחסון מתחברים אוטומטית (עד 24 שעות)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>האתר שלך יהיה זמין בכתובת: <strong>www.yoursite.com</strong></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>SSL מאובטח כלול (המנעול הירוק)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

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

          {/* Back Button */}
          <div className="text-center pt-8">
            <Button
              onClick={onBack}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              חזור למסך הקודם
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};
