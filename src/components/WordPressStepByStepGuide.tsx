import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, Code, ExternalLink, FileText, Play, Monitor, Settings, Eye, Save } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface WordPressStepByStepGuideProps {
  htmlCode: string;
  onBack: () => void;
}

export const WordPressStepByStepGuide = ({ htmlCode, onBack }: WordPressStepByStepGuideProps) => {
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      toast({
        title: "✅ הקוד הועתק!",
        description: "הקוד HTML הועתק ללוח - כעת תוכל להדביק אותו בוורדפרס",
      });
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      toast({
        title: "❌ שגיאה בהעתקה",
        description: "אנא בחר את הטקסט והעתק ידנית",
        variant: "destructive"
      });
    }
  };

  const downloadHtml = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page-wordpress.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "📁 קובץ HTML הורד!",
      description: "הקובץ הורד בהצלחה למחשב שלך",
    });
  };

  const steps = [
    {
      number: 1,
      title: "היכנס לפאנל הניהול של WordPress",
      icon: <Monitor className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-300">
            פתח את הדפדפן וגש לכתובת האתר שלך עם תוספת /wp-admin
          </p>
          <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-3">
            <code className="text-blue-300">yoursite.com/wp-admin</code>
          </div>
          <p className="text-sm text-gray-400">
            הכנס את שם המשתמש והסיסמה שלך כדי להיכנס לפאנל הניהול
          </p>
        </div>
      )
    },
    {
      number: 2,
      title: "צור עמוד חדש או ערוך עמוד קיים",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-300">
            בתפריט הצדדי, לחץ על "עמודים" ⟵ "הוסף עמוד חדש"
          </p>
          <div className="bg-green-900/30 border border-green-600 rounded-lg p-3">
            <p className="text-green-300 text-sm">
              💡 טיפ: אם אתה רוצה להחליף עמוד קיים, לחץ על "עמודים" ⟵ "כל העמודים" ובחר את העמוד לעריכה
            </p>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "התקן את תוסף Elementor (אופציונלי)",
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-300">
            Elementor יאפשר לך לערוך את הדף בקלות בעתיד
          </p>
          <div className="space-y-2">
            <p className="text-sm">1. בתפריט הצדדי: תוספים ⟵ הוסף תוסף חדש</p>
            <p className="text-sm">2. חפש "Elementor Website Builder"</p>
            <p className="text-sm">3. לחץ "התקן כעת" ואז "הפעל"</p>
          </div>
          <Button 
            onClick={() => window.open('https://wordpress.org/plugins/elementor/', '_blank')}
            variant="outline"
            size="sm"
            className="border-purple-600 text-purple-400 hover:bg-purple-600/10"
          >
            <ExternalLink className="w-4 h-4 ml-1" />
            Elementor בעמוד התוספים
          </Button>
        </div>
      )
    },
    {
      number: 4,
      title: "עבור למצב HTML",
      icon: <Code className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-300">
            בעורך העמוד, וודא שאתה במצב HTML ולא במצב Visual
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-red-900/30 border border-red-600 rounded-lg p-3">
              <p className="text-red-300 font-semibold mb-1">❌ לא נכון:</p>
              <p className="text-sm">מצב Visual - יציג תוכן מעוצב</p>
            </div>
            <div className="bg-green-900/30 border border-green-600 rounded-lg p-3">
              <p className="text-green-300 font-semibold mb-1">✅ נכון:</p>
              <p className="text-sm">מצב Text/HTML - יציג קוד</p>
            </div>
          </div>
          <p className="text-amber-300 text-sm">
            ⚠️ חשוב: אם תהיה במצב Visual, הקוד יתקלקל!
          </p>
        </div>
      )
    },
    {
      number: 5,
      title: "העתק והדבק את הקוד",
      icon: <Copy className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            העתק את הקוד למטה והדבק אותו בעורך WordPress
          </p>
          
          {/* HTML Code Display */}
          <div className="bg-gray-900 border border-gray-600 rounded-lg">
            <div className="flex items-center justify-between p-3 border-b border-gray-600">
              <span className="text-sm text-gray-400">קוד HTML מוכן להדבקה</span>
              <div className="flex gap-2">
                <Button
                  onClick={downloadHtml}
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-400 hover:bg-green-600/10"
                >
                  <ExternalLink className="w-3 h-3 ml-1" />
                  הורד
                </Button>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className={`${copied ? 'border-green-600 text-green-400' : 'border-blue-600 text-blue-400'} hover:bg-blue-600/10`}
                >
                  {copied ? <CheckCircle className="w-3 h-3 ml-1" /> : <Copy className="w-3 h-3 ml-1" />}
                  {copied ? 'הועתק!' : 'העתק'}
                </Button>
              </div>
            </div>
            <div className="p-3">
              <Textarea
                value={htmlCode}
                readOnly
                className="min-h-[200px] bg-transparent border-none text-xs font-mono text-gray-300 resize-none focus:ring-0"
                style={{ direction: 'ltr' }}
              />
            </div>
          </div>
          
          <div className="bg-blue-900/30 border border-blue-600 rounded-lg p-3">
            <p className="text-blue-300 text-sm">
              💡 לאחר ההדבקה, תוכל לראות את הקוד באזור העריכה. אל תשנה שום דבר!
            </p>
          </div>
        </div>
      )
    },
    {
      number: 6,
      title: "תצוגה מקדימה ושמירה",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-300">
            לחץ על "תצוגה מקדימה" כדי לראות איך הדף יראה
          </p>
          <div className="space-y-2">
            <p className="text-sm">1. לחץ על כפתור "תצוגה מקדימה" 👁️</p>
            <p className="text-sm">2. בדוק שהדף נראה תקין ומעוצב כמו שצריך</p>
            <p className="text-sm">3. אם הכל נראה טוב, חזור לעריכה</p>
            <p className="text-sm">4. לחץ "פרסם" או "עדכן" כדי לשמור</p>
          </div>
          <div className="bg-green-900/30 border border-green-600 rounded-lg p-3">
            <p className="text-green-300 text-sm">
              🎉 מזל טוב! דף הנחיתה שלך פעיל ומוכן לקבל מבקרים
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6" dir="rtl">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <CardTitle className="text-white text-2xl flex items-center justify-center gap-2">
            <Code className="w-6 h-6" />
            מדריך התקנה ב-WordPress - שלב אחר שלב
          </CardTitle>
          <p className="text-gray-300">
            פעל לפי השלבים הבאים להתקנה מושלמת של דף הנחיתה שלך
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${currentStep >= step.number 
                    ? 'bg-green-600 text-white' 
                    : currentStep === step.number 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-600 text-gray-300'
                  }
                `}>
                  {currentStep > step.number ? <CheckCircle className="w-4 h-4" /> : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-1 mx-1 ${currentStep > step.number ? 'bg-green-600' : 'bg-gray-600'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Current Step */}
          <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-700/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="bg-blue-600 p-2 rounded-lg">
                  {steps[currentStep - 1].icon}
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    שלב {currentStep} מתוך {steps.length}
                  </Badge>
                  <h3 className="text-white">{steps[currentStep - 1].title}</h3>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {steps[currentStep - 1].content}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6">
            <Button
              onClick={onBack}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              חזור לבחירת שיטה
            </Button>
            
            <div className="flex gap-3">
              {currentStep > 1 && (
                <Button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-600/10"
                >
                  שלב קודם
                </Button>
              )}
              
              {currentStep < steps.length ? (
                <Button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  שלב הבא
                  <Play className="w-4 h-4 mr-2" />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    toast({
                      title: "🎉 סיימת בהצלחה!",
                      description: "דף הנחיתה שלך מוכן ופעיל",
                    });
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  סיימתי!
                </Button>
              )}
            </div>
          </div>

          {/* Quick Tips */}
          <Card className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border-amber-700/50">
            <CardContent className="p-4">
              <h4 className="text-amber-300 font-semibold mb-2">💡 טיפים חשובים:</h4>
              <ul className="space-y-1 text-sm text-amber-100">
                <li>• שמור גיבוי של העמוד הקיים לפני השינוי</li>
                <li>• וודא שאתה במצב HTML ולא Visual</li>
                <li>• אל תשנה שום דבר בקוד לאחר ההדבקה</li>
                <li>• הדף מותאם אוטומטית לניידים ולכל הדפדפנים</li>
                <li>• אם יש בעיות, נסה לרענן את הדף</li>
              </ul>
            </CardContent>
          </Card>

        </CardContent>
      </Card>
    </div>
  );
};