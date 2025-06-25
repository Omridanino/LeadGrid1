
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, CheckCircle, Code, ExternalLink, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WordPressIntegrationProps {
  htmlCode: string;
}

const WordPressIntegration = ({ htmlCode }: WordPressIntegrationProps) => {
  const [copied, setCopied] = useState(false);
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

  return (
    <div className="space-y-6">
      {/* Integration Guide */}
      <Card className="bg-gradient-to-br from-blue-800 to-gray-900 border-blue-700">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Code className="w-6 h-6 ml-3 text-blue-400" />
            מדריך חיבור לוורדפרס
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600">
            <h3 className="font-semibold text-blue-300 mb-2">שלבים לחיבור:</h3>
            <ol className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ml-2 mt-0.5">1</span>
                היכנס לפאנל הניהול של וורדפרס שלך
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ml-2 mt-0.5">2</span>
                צור עמוד חדש או ערוך עמוד קיים
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ml-2 mt-0.5">3</span>
                עבור למצב HTML (Text/HTML במקום Visual)
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ml-2 mt-0.5">4</span>
                העתק והדבק את הקוד המוכן למטה
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs ml-2 mt-0.5">5</span>
                שמור ופרסם את העמוד
              </li>
            </ol>
          </div>
          
          <div className="bg-amber-900/30 p-4 rounded-lg border border-amber-600">
            <h3 className="font-semibold text-amber-300 mb-2">💡 טיפים חשובים:</h3>
            <ul className="space-y-1 text-sm text-amber-100">
              <li>• וודא שאתה במצב HTML ולא במצב Visual</li>
              <li>• שמור גיבוי של העמוד הקיים לפני השינוי</li>
              <li>• בדוק שהעמוד נראה תקין לפני הפרסום</li>
              <li>• הקוד מותאם לניידים ולכל הדפדפנים</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* HTML Code Display */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <FileText className="w-5 h-5 ml-2 text-green-500" />
              קוד HTML מוכן לוורדפרס
            </span>
            <div className="flex gap-2">
              <Button
                onClick={downloadHtml}
                variant="outline"
                size="sm"
                className="border-green-600 text-green-400 hover:bg-green-600/10"
              >
                <ExternalLink className="w-4 h-4 ml-1" />
                הורד קובץ
              </Button>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className={`${copied ? 'border-green-600 text-green-400' : 'border-blue-600 text-blue-400'} hover:bg-blue-600/10`}
              >
                {copied ? <CheckCircle className="w-4 h-4 ml-1" /> : <Copy className="w-4 h-4 ml-1" />}
                {copied ? 'הועתק!' : 'העתק קוד'}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-600">
            <Textarea
              value={htmlCode}
              readOnly
              className="min-h-[400px] bg-transparent border-none text-xs font-mono text-gray-300 resize-none focus:ring-0"
              style={{ direction: 'ltr' }}
            />
          </div>
          
          <div className="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-600">
            <p className="text-green-300 text-sm">
              ✅ הקוד מוכן! הוא כולל את כל העיצובים, הצבעים והתוכן שיצרת בדיוק כפי שהם מופיעים בתצוגה המקדימה.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-700">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ExternalLink className="w-5 h-5 ml-2 text-purple-400" />
            משאבים נוספים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-purple-900/30 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-300 mb-2">צריך עזרה?</h3>
            <p className="text-sm text-purple-100 mb-3">
              אם אתה נתקל בבעיות או צריך עזרה נוספת, אנחנו כאן בשבילך!
            </p>
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full border-purple-600 text-purple-300 hover:bg-purple-600/10"
                onClick={() => window.open('https://wordpress.org/support/', '_blank')}
              >
                מרכז התמיכה של וורדפרס
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordPressIntegration;
