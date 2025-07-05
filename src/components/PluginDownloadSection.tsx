
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ExternalLink, Zap } from 'lucide-react';

const PluginDownloadSection = () => {
  const handleDownload = () => {
    // Create download link for the plugin
    const link = document.createElement('a');
    link.href = '/leadgrid-wordpress-plugin.zip';
    link.download = 'leadgrid-integration-pro.zip';
    link.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6" dir="rtl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🔌 תוסף WordPress ל-LeadGrid
        </h2>
        <p className="text-lg text-gray-600">
          ייבאו את הדפים שיצרתם ב-LeadGrid ישירות ל-WordPress שלכם
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="text-center">
            <div className="text-4xl mb-4">📦</div>
            <CardTitle className="text-xl text-blue-800">
              LeadGrid Integration Pro
            </CardTitle>
            <CardDescription className="text-blue-600">
              גרסה 2.0 - תוסף מתקדם לייבוא דפים
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <Button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full"
              >
                <Download className="ml-2 h-5 w-5" />
                הורדת התוסף
              </Button>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">✨ מה כלול:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ייבוא דפים בקליק אחד</li>
                <li>• עיצוב רספונסיבי מלא</li>
                <li>• טפסי יצירת קשר פעילים</li>
                <li>• אופטימיזציה ל-SEO</li>
                <li>• תמיכה מלאה בעברית</li>
                <li>• ממשק ניהול ידידותי</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <Zap className="ml-2 h-5 w-5" />
              הוראות התקנה מהירות
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ml-3 mt-0.5">1</span>
                <span>הורידו את קובץ התוסף</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ml-3 mt-0.5">2</span>
                <span>היכנסו לאזור הניהול של WordPress</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ml-3 mt-0.5">3</span>
                <span>עברו לתוספים ← הוסף חדש ← העלה תוסף</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ml-3 mt-0.5">4</span>
                <span>בחרו את הקובץ והעלו אותו</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ml-3 mt-0.5">5</span>
                <span>הפעילו את התוסף</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ml-3 mt-0.5">6</span>
                <span>עברו ל-LeadGrid בתפריט הניהול</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-orange-800 flex items-center">
            <ExternalLink className="ml-2 h-5 w-5" />
            קישורים שימושיים
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-semibold text-orange-700 mb-2">🌟 יצירת דף</h4>
              <p className="text-sm text-orange-600 mb-3">עדיין לא יצרתם דף?</p>
              <Button 
                variant="outline" 
                className="border-orange-300 text-orange-700 hover:bg-orange-100"
                onClick={() => window.open('https://leadgrid.co.il', '_blank')}
              >
                צרו דף חינם
              </Button>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-orange-700 mb-2">📚 מרכז עזרה</h4>
              <p className="text-sm text-orange-600 mb-3">מדריכים ותיעוד</p>
              <Button 
                variant="outline" 
                className="border-orange-300 text-orange-700 hover:bg-orange-100"
                onClick={() => window.open('https://leadgrid.co.il/help', '_blank')}
              >
                מרכז עזרה
              </Button>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-orange-700 mb-2">💬 תמיכה</h4>
              <p className="text-sm text-orange-600 mb-3">נתקלתם בבעיה?</p>
              <Button 
                variant="outline" 
                className="border-orange-300 text-orange-700 hover:bg-orange-100"
                onClick={() => window.open('https://leadgrid.co.il/support', '_blank')}
              >
                צרו קשר
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700 text-center">
          <strong>💡 זכרו:</strong> לאחר התקנת התוסף, תצטרכו להזין את פרטי ה-API (Site ID ו-API Key) 
          שקיבלתם מעמוד הפרסום ב-LeadGrid
        </p>
      </div>
    </div>
  );
};

export default PluginDownloadSection;
