import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Globe, ArrowRight, FileText, Download, Sparkles } from 'lucide-react';
import { SimpleWordPressGuide } from './SimpleWordPressGuide';

interface CleanWordPressFormProps {
  onBack: () => void;
}

export const CleanWordPressForm = ({ onBack }: CleanWordPressFormProps) => {
  const [showGuide, setShowGuide] = useState(false);

  if (showGuide) {
    return <SimpleWordPressGuide onBack={() => setShowGuide(false)} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8" dir="rtl">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WordPress Integration
          </h1>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          הוסף את דף הנחיתה שלך לאתר WordPress קיים בקלות ובמהירות
        </p>
      </div>

      {/* Main Integration Card */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl text-white">דרך פשוטה ומהירה</span>
            </div>
            <p className="text-gray-400 font-normal text-base">
              קוד HTML מוכן להדבקה + מדריך שלב אחר שלב
            </p>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-8">
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">עיצוב מושלם</h3>
              <p className="text-gray-400 text-sm">הדף ייראה בדיוק כמו בתצוגה המקדימה</p>
            </div>
            
            <div className="text-center p-6 bg-green-500/10 rounded-lg border border-green-500/30">
              <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-green-500/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">מהיר וקל</h3>
              <p className="text-gray-400 text-sm">5 דקות בלבד - פשוט העתק והדבק</p>
            </div>
            
            <div className="text-center p-6 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">מדריך מפורט</h3>
              <p className="text-gray-400 text-sm">הוראות ברורות עם תמונות</p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white text-lg font-semibold mb-4 text-center">איך זה עובד?</h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { icon: <Globe className="w-5 h-5" />, text: "כניסה ל-WordPress" },
                { icon: <FileText className="w-5 h-5" />, text: "יצירת עמוד חדש" },
                { icon: <Code className="w-5 h-5" />, text: "מעבר למצב HTML" },
                { icon: <Download className="w-5 h-5" />, text: "הדבקת הקוד" },
                { icon: <CheckCircle className="w-5 h-5" />, text: "פרסום הדף" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                    {step.icon}
                  </div>
                  <span className="text-xs text-gray-400">{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              onClick={() => setShowGuide(true)}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <Code className="w-5 h-5 mr-3" />
              קבל מדריך התקנה + קוד HTML
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <p className="text-gray-400 text-sm mt-3">
              התהליך לוקח 5 דקות בלבד וללא צורך בהתקנות
            </p>
          </div>

          {/* Alternative Option */}
          <div className="border-t border-slate-700 pt-6">
            <div className="text-center">
              <p className="text-gray-400 mb-4">אין לך עדיין אתר WordPress?</p>
              <Button 
                onClick={() => window.open('https://wordpress.com/start', '_blank')}
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500"
              >
                <Globe className="w-4 h-4 mr-2" />
                צור אתר WordPress חינם
              </Button>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="text-center">
        <Button
          onClick={onBack}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          חזור לאפשרויות הפרסום
        </Button>
      </div>

    </div>
  );
};