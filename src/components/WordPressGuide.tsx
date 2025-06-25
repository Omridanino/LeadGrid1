
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, AlertCircle, ExternalLink, Download, Image, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WordPressGuideProps {
  htmlCode: string;
}

const WordPressGuide = ({ htmlCode }: WordPressGuideProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "✅ הועתק בהצלחה!",
      description: "הקוד הועתק ללוח. כעת הדבק אותו בוורדפרס",
    });
  };

  const steps = [
    {
      title: "הכנת הקוד לוורדפרס",
      icon: <Code className="w-5 h-5" />,
      content: "נכין את הקוד המותאם לוורדפרס"
    },
    {
      title: "יצירת עמוד חדש",
      icon: <Image className="w-5 h-5" />,
      content: "ניצור עמוד חדש בוורדפרס"
    },
    {
      title: "הדבקת הקוד",
      icon: <Copy className="w-5 h-5" />,
      content: "נדביק את הקוד בעמוד"
    },
    {
      title: "פרסום והתאמות",
      icon: <CheckCircle className="w-5 h-5" />,
      content: "נפרסם ונבצע התאמות אחרונות"
    }
  ];

  // הקוד המותאם לוורדפרס
  const wordpressOptimizedCode = `<!-- LeadGrid Landing Page - Start -->
<div id="leadgrid-landing-page" style="width: 100%; margin: 0; padding: 0;">
<style>
/* סגנונות מותאמים לוורדפרס */
#leadgrid-landing-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

#leadgrid-landing-page * {
  box-sizing: border-box;
}

.leadgrid-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
  padding: 80px 20px;
  text-align: center;
  color: white;
  margin: 0;
}

.leadgrid-hero h1 {
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.leadgrid-hero p {
  font-size: 1.25rem;
  margin: 0 0 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.leadgrid-cta {
  background: #06b6d4;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  margin: 0 10px 10px 0;
}

.leadgrid-cta:hover {
  background: #0891b2;
  transform: translateY(-2px);
  color: white;
  text-decoration: none;
}

.leadgrid-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.leadgrid-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.leadgrid-feature {
  background: #f8fafc;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.leadgrid-feature:hover {
  transform: translateY(-5px);
  border-color: #3b82f6;
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
}

.leadgrid-feature h3 {
  color: #1e293b;
  margin: 0 0 15px 0;
  font-size: 1.3rem;
}

.leadgrid-contact {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin: 40px 0 0 0;
  border-radius: 15px;
}

.leadgrid-contact h2 {
  margin: 0 0 30px 0;
  font-size: 2.5rem;
}

@media (max-width: 768px) {
  .leadgrid-hero h1 {
    font-size: 2rem;
  }
  
  .leadgrid-hero p {
    font-size: 1rem;
  }
  
  .leadgrid-features {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="leadgrid-hero">
  <h1>הכותרת שלכם כאן</h1>
  <p>תיאור קצר ומושך על המוצר או השירות שלכם</p>
  <a href="#contact" class="leadgrid-cta">צור קשר עכשיו</a>
  <a href="#about" class="leadgrid-cta" style="background: transparent; border: 2px solid white;">למד עוד</a>
</div>

<div class="leadgrid-section">
  <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px; color: #1e293b;">למה לבחור בנו?</h2>
  
  <div class="leadgrid-features">
    <div class="leadgrid-feature">
      <h3>✨ איכות מעולה</h3>
      <p>אנחנו מתחייבים לאיכות הגבוהה ביותר בכל מה שאנחנו עושים</p>
    </div>
    
    <div class="leadgrid-feature">
      <h3>⚡ שירות מהיר</h3>
      <p>זמני התגובה שלנו הם הקצרים בשוק - אנחנו כאן בשבילכם</p>
    </div>
    
    <div class="leadgrid-feature">
      <h3>🎯 פתרונות מותאמים</h3>
      <p>כל פתרון מותאם בדיוק לצרכים הייחודיים שלכם</p>
    </div>
    
    <div class="leadgrid-feature">
      <h3>🏆 ניסיון מוכח</h3>
      <p>שנים של ניסיון ולקוחות מרוצים מדברים בעד עצמם</p>
    </div>
  </div>
</div>

<div class="leadgrid-contact" id="contact">
  <h2>מוכנים להתחיל?</h2>
  <p style="font-size: 1.2rem; margin-bottom: 30px;">צרו קשר היום וגלו איך אנחנו יכולים לעזור לכם</p>
  <p style="margin-bottom: 30px;">
    📞 050-1234567<br>
    ✉️ info@yourbusiness.co.il<br>
    📍 הכתובת שלכם כאן
  </p>
  <a href="tel:0501234567" class="leadgrid-cta">התקשרו עכשיו</a>
</div>

</div>
<!-- LeadGrid Landing Page - End -->`;

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-600/30">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                הקוד המותאם לוורדפרס מוכן!
              </h4>
              <p className="text-gray-300 mb-4">
                הכנתי עבורכם קוד מותאם במיוחד לוורדפרס שיעבוד מושלם עם כל ערכת נושא.
              </p>
              <div className="bg-gray-900 p-4 rounded-lg relative max-h-96 overflow-y-auto">
                <pre className="text-sm text-green-400 whitespace-pre-wrap">
                  {wordpressOptimizedCode}
                </pre>
                <Button
                  size="sm"
                  onClick={() => copyToClipboard(wordpressOptimizedCode)}
                  className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Copy className="w-4 h-4 ml-2" />
                  העתק קוד
                </Button>
              </div>
            </div>
            
            <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600/30">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-300 font-semibold">חשוב לזכור:</span>
              </div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• הקוד מותאם לעבוד עם כל ערכת נושא בוורדפרס</li>
                <li>• לא ישפיע על העיצוב הקיים של האתר</li>
                <li>• רספונסיבי למכשירים ניידים</li>
                <li>• מותאם למנועי חיפוש (SEO)</li>
              </ul>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-600/30">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Image className="w-5 h-5 text-green-400" />
                יצירת עמוד חדש בוורדפרס
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">1</Badge>
                  <div>
                    <h5 className="text-white font-medium">היכנסו לוורדפרס</h5>
                    <p className="text-gray-300 text-sm">היכנסו לאזור הניהול של האתר שלכם (yoursite.com/wp-admin)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">2</Badge>
                  <div>
                    <h5 className="text-white font-medium">לחצו על "עמודים" ← "הוסף חדש"</h5>
                    <p className="text-gray-300 text-sm">בתפריט הצד השמאלי, חפשו את האפשרות "עמודים" ולחצו על "הוסף חדש"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">3</Badge>
                  <div>
                    <h5 className="text-white font-medium">תנו שם לעמוד</h5>
                    <p className="text-gray-300 text-sm">לדוגמה: "דף נחיתה" או "מוצרים מיוחדים"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">4</Badge>
                  <div>
                    <h5 className="text-white font-medium">עברו למצב HTML</h5>
                    <p className="text-gray-300 text-sm">בעורך, לחצו על הטאב "טקסט" או "HTML" (לא "ויזואלי")</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-600/30">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Copy className="w-5 h-5 text-purple-400" />
                הדבקת הקוד בוורדפרס
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">1</Badge>
                  <div>
                    <h5 className="text-white font-medium">הדביקו את הקוד</h5>
                    <p className="text-gray-300 text-sm">הדביקו את כל הקוד שהעתקתם בשלב הראשון לתוך העמוד</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">2</Badge>
                  <div>
                    <h5 className="text-white font-medium">ערכו את התוכן</h5>
                    <p className="text-gray-300 text-sm">שנו את הטקסטים "הכותרת שלכם כאן" ו"תיאור קצר" לתוכן שלכם</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">3</Badge>
                  <div>
                    <h5 className="text-white font-medium">עדכנו פרטי קשר</h5>
                    <p className="text-gray-300 text-sm">החליפו את המספר והאימייל עם הפרטים האמיתיים שלכם</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">4</Badge>
                  <div>
                    <h5 className="text-white font-medium">תצוגה מקדימה</h5>
                    <p className="text-gray-300 text-sm">לחצו על "תצוגה מקדימה" כדי לראות איך הדף נראה</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <h5 className="text-white font-medium mb-2">💡 טיפ חשוב:</h5>
              <p className="text-gray-300 text-sm">
                אם הקוד לא נראה טוב, ודאו שאתם במצב "טקסט/HTML" ולא במצב "ויזואלי"
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-green-900/30 p-6 rounded-lg border border-green-600/30">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                פרסום והתאמות אחרונות
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">1</Badge>
                  <div>
                    <h5 className="text-white font-medium">פרסמו את הדף</h5>
                    <p className="text-gray-300 text-sm">לחצו על הכפתור "פרסם" כחול בצד ימין</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">2</Badge>
                  <div>
                    <h5 className="text-white font-medium">בדקו במכשירים שונים</h5>
                    <p className="text-gray-300 text-sm">פתחו את הדף בטלפון ובמחשב כדי לוודא שהוא נראה טוב</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">3</Badge>
                  <div>
                    <h5 className="text-white font-medium">הגדירו כדף בית (אופציונלי)</h5>
                    <p className="text-gray-300 text-sm">אם רוצים שזה יהיה דף הבית: הגדרות ← קריאה ← דף בית סטטי</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white font-bold min-w-[24px] h-6 flex items-center justify-center">4</Badge>
                  <div>
                    <h5 className="text-white font-medium">בדקו קישורים</h5>
                    <p className="text-gray-300 text-sm">ודאו שכפתור "התקשרו עכשיו" מפנה למספר הטלפון הנכון</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/30">
              <h5 className="text-white font-medium mb-2 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                שיתוף הדף:
              </h5>
              <p className="text-gray-300 text-sm mb-3">
                כעת תוכלו לשתף את הדף ברשתות החברתיות, בוואטסאפ או בכל מקום אחר!
              </p>
              <Badge className="bg-blue-600 text-white">
                yoursite.com/page-name
              </Badge>
            </div>
            
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-600/20">
              <h5 className="text-green-400 font-medium mb-2">🎉 מזל טוב!</h5>
              <p className="text-gray-300 text-sm">
                דף הנחיתה שלכם כעת פעל באתר ומוכן להביא לכם לקוחות חדשים!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl font-bold">מדריך WordPress צעד אחר צעד</h3>
        <Badge className="bg-blue-600 text-white">
          שלב {currentStep} מתוך {steps.length}
        </Badge>
      </div>
      
      <div className="flex gap-2 mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 h-2 rounded-full transition-colors ${
              index + 1 <= currentStep ? 'bg-green-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
      
      {/* Current Step */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep <= steps.length ? 'bg-blue-600' : 'bg-green-600'
            }`}>
              {steps[currentStep - 1]?.icon}
            </div>
            {steps[currentStep - 1]?.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderStep()}
        </CardContent>
      </Card>
      
      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          ← קודם
        </Button>
        
        <Button
          onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
          disabled={currentStep === steps.length}
          className="bg-blue-600 hover:bg-blue-700"
        >
          הבא →
        </Button>
      </div>
      
      {currentStep === steps.length && (
        <div className="text-center">
          <Button
            onClick={() => window.open('/wp-admin', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
          >
            <ExternalLink className="w-5 h-5 ml-2" />
            פתח וורדפרס כעת
          </Button>
        </div>
      )}
    </div>
  );
};

export default WordPressGuide;
