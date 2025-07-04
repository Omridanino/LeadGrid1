import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, Code, ExternalLink, FileText, Play, Monitor, Settings, Eye, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { generatePageHTML } from '@/utils/pageGenerator';

interface SimpleWordPressGuideProps {
  onBack: () => void;
}

export const SimpleWordPressGuide = ({ onBack }: SimpleWordPressGuideProps) => {
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  // Get the saved HTML from localStorage
  const getGeneratedHTML = () => {
    try {
      // First try to get the pre-generated HTML that was saved
      const savedHTML = localStorage.getItem('generatedHTML');
      if (savedHTML) {
        return savedHTML;
      }
      
      // Fallback: generate from template data if no saved HTML
      const savedData = JSON.parse(localStorage.getItem('generatedPageData') || '{}');
      if (savedData.template) {
        return generatePageHTML(savedData.template);
      }
      
      // If no saved data, return a default HTML
      return generatePageHTML({
        hero: {
          title: 'ברוכים הבאים לעסק שלנו',
          subtitle: 'פתרונות מתקדמים ומקצועיים עבורכם',
          button1Text: 'צור קשר',
          button2Text: 'למד עוד'
        },
        styles: {
          primaryColor: '#1e40af',
          secondaryColor: '#7c3aed',
          backgroundColor: '#ffffff',
          textColor: '#000000'
        }
      });
    } catch (error) {
      console.error('Error getting HTML:', error);
      return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>דף נחיתה</title>
    <style>
        body { 
            font-family: 'Arial', sans-serif; 
            margin: 0; 
            padding: 0; 
            line-height: 1.6; 
            background: #f8fafc;
        }
        .hero { 
            background: linear-gradient(135deg, #1e40af, #7c3aed); 
            color: white; 
            padding: 80px 20px; 
            text-align: center; 
        }
        .hero h1 { 
            font-size: 3rem; 
            margin-bottom: 1rem; 
            font-weight: bold; 
        }
        .hero p { 
            font-size: 1.25rem; 
            margin-bottom: 2rem; 
            opacity: 0.9; 
        }
        .btn { 
            background: rgba(255,255,255,0.2); 
            color: white; 
            padding: 16px 32px; 
            border: 2px solid white; 
            border-radius: 8px; 
            text-decoration: none; 
            display: inline-block; 
            margin: 0 10px; 
            font-weight: bold; 
            transition: all 0.3s; 
        }
        .btn:hover { 
            background: white; 
            color: #1e40af; 
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 0 20px; 
        }
        .contact { 
            padding: 60px 20px; 
            background: #f9fafb; 
            text-align: center; 
        }
        .contact h2 { 
            font-size: 2.5rem; 
            color: #1e40af; 
            margin-bottom: 2rem; 
        }
        footer { 
            background: #1f2937; 
            color: white; 
            padding: 40px 20px; 
            text-align: center; 
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="container">
            <h1>ברוכים הבאים לעסק שלנו</h1>
            <p>פתרונות מתקדמים ומקצועיים עבורכם</p>
            <div>
                <a href="#contact" class="btn">צור קשר</a>
                <a href="#about" class="btn">למד עוד</a>
            </div>
        </div>
    </section>
    
    <section id="contact" class="contact">
        <div class="container">
            <h2>צור קשר</h2>
            <p>נשמח לשמוע מכם ולעזור לכם</p>
            <p style="font-size: 1.1rem;">📧 info@example.com</p>
            <p style="font-size: 1.1rem;">📞 050-123-4567</p>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <p>© ${new Date().getFullYear()} העסק שלנו. כל הזכויות שמורות.</p>
            <p style="color: #6b7280; font-size: 0.9rem; margin-top: 10px;">נוצר עם LeadGrid</p>
        </div>
    </footer>
</body>
</html>`;
    }
  };

  const htmlCode = getGeneratedHTML();

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
      title: "קנה דומיין והירשם לוורדפרס",
      icon: <Monitor className="w-5 h-5" />,
      description: "רכוש דומיין והרשם לשירות אחסון WordPress",
      image: "/lovable-uploads/cace6f71-ada2-4b7e-91fc-365f03ced923.png"
    },
    {
      number: 2,
      title: "הורד את תוסף Elementor",
      icon: <Settings className="w-5 h-5" />,
      description: "התקן את Elementor (בחינם) מספריית התוספים",
      image: "/lovable-uploads/fc6b79e5-d0ae-4347-a64a-16726c82eee2.png"
    },
    {
      number: 3,
      title: "צור עמוד חדש בוורדפרס",
      icon: <FileText className="w-5 h-5" />,
      description: "כנס לוורדפרס → עמודים → הוסף עמוד חדש",
      image: "/lovable-uploads/e6318e7c-02de-4dc9-9fb1-45b6ea0230a6.png"
    },
    {
      number: 4,
      title: "ערוך באלמנטור",
      icon: <Code className="w-5 h-5" />,
      description: "לחץ על העמוד ובחר 'עריכה באמצעות אלמנטור'",
      image: "/lovable-uploads/36692fc6-fedf-48eb-a2f4-9b4394dea231.png"
    },
    {
      number: 5,
      title: "שנה פריסה לקנבס",
      icon: <Settings className="w-5 h-5" />,
      description: "לחץ על גלגל השיניים ושנה פריסה ל'אלמנטור קנבס'",
      image: "/lovable-uploads/355ad52c-63bd-4656-98c6-e68cb883501d.png"
    },
    {
      number: 6,
      title: "הוסף רכיב HTML",
      icon: <Copy className="w-5 h-5" />,
      description: "גרור רכיב HTML לאמצע המסך והדבק את הקוד",
      image: "/lovable-uploads/4df785c9-b78f-4c97-acbd-c2f06cd0ca01.png"
    },
    {
      number: 7,
      title: "כוונן הגדרות תצוגה",
      icon: <Settings className="w-5 h-5" />,
      description: "שנה רוחב ושוליים מ-PX ל-VW ושים 100",
      image: "/lovable-uploads/256cea30-a0fd-449d-b308-a0fe4767e2c4.png"
    },
    {
      number: 8,
      title: "פרסם את הדף",
      icon: <Eye className="w-5 h-5" />,
      description: "בדוק תצוגה מקדימה ולחץ פרסם"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8" dir="rtl">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          מדריך התקנה ב-WordPress
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          8 שלבים פשוטים להעלאת דף הנחיתה שלך לאתר WordPress עם Elementor
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                ${currentStep >= step.number 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                  : currentStep === step.number 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-gray-700 text-gray-400'
                }
              `}>
                {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : step.number}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 mx-2 transition-all ${
                  currentStep > step.number ? 'bg-green-500' : 'bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Current Step Card */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-xl shadow-lg shadow-blue-500/30">
              {steps[currentStep - 1].icon}
            </div>
            <div>
              <Badge variant="outline" className="mb-2 bg-blue-500/10 text-blue-400 border-blue-500/30">
                שלב {currentStep} מתוך {steps.length}
              </Badge>
              <CardTitle className="text-2xl text-white">
                {steps[currentStep - 1].title}
              </CardTitle>
              <p className="text-gray-400 mt-1">
                {steps[currentStep - 1].description}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          

          {/* Step Image */}
          {steps[currentStep - 1].image && (
            <div className="bg-slate-900 border border-slate-600 rounded-lg p-4">
              <img 
                src={steps[currentStep - 1].image} 
                alt={steps[currentStep - 1].title}
                className="w-full max-w-md mx-auto rounded-lg border border-slate-600"
              />
            </div>
          )}

          {/* Step 6 - Code Display */}
          {currentStep === 6 && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-600 rounded-lg">
                <div className="flex items-center justify-between p-4 border-b border-slate-600">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">קוד HTML מוכן להדבקה</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={downloadHtml}
                      variant="outline"
                      size="sm"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      הורד קובץ
                    </Button>
                    <Button
                      onClick={copyToClipboard}
                      size="sm"
                      className={`${
                        copied 
                          ? 'bg-green-500 hover:bg-green-600 border-green-500' 
                          : 'bg-blue-500 hover:bg-blue-600'
                      } text-white shadow-lg`}
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4 mr-2" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      {copied ? 'הועתק!' : 'העתק קוד'}
                    </Button>
                  </div>
                </div>
                <div className="p-4 max-h-96 overflow-y-auto">
                  <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap break-words">
                    {htmlCode}
                  </pre>
                </div>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  הקוד כולל את כל העיצוב והתוכן שיצרת - פשוט העתק והדבק!
                </p>
              </div>
            </div>
          )}

          {/* Important Tips for steps */}
          {currentStep !== 6 && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <h4 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                הוראות מפורטות
              </h4>
              <div className="text-amber-100 text-sm space-y-1">
                {currentStep === 1 && (
                  <>
                    <p>• קנה דומיין מכל ספק דומיינים (Godaddy, Namecheap וכו')</p>
                    <p>• הירשם לשירות אחסון WordPress (SiteGround, Bluehost וכו')</p>
                    <p>• וודא שהדומיין מחובר לאחסון</p>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <p>• היכנס לפאנל הניהול של WordPress</p>
                    <p>• לחץ על "תוספים" ← "הוסף תוסף חדש"</p>
                    <p>• חפש "Elementor Website Builder" והתקן (בחינם!)</p>
                    <Button 
                      onClick={() => window.open('https://wordpress.org/plugins/elementor/', '_blank')}
                      variant="outline"
                      size="sm"
                      className="mt-2 border-purple-600 text-purple-400 hover:bg-purple-600/10"
                    >
                      <ExternalLink className="w-4 h-4 ml-1" />
                      הורד Elementor
                    </Button>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <p>• במסך הראשי של WordPress, לחץ על "עמודים"</p>
                    <p>• לחץ על "הוסף עמוד חדש"</p>
                    <p>• תן שם לעמוד (למשל: "דף הבית")</p>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <p>• לחץ על העמוד שיצרת</p>
                    <p>• לחץ על "עריכה באמצעות אלמנטור"</p>
                    <p>• העמוד ייפתח בעורך האלמנטור</p>
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <p>• לחץ על גלגל השיניים (הגדרות עמוד)</p>
                    <p>• בחר "פריסת עמוד" ← "אלמנטור קנבס"</p>
                    <p>• זה ייתן לך שליטה מלאה על העמוד</p>
                  </>
                )}
                {currentStep === 7 && (
                  <>
                    <p>• לחץ על הכפתור האמצעי ברכיב HTML</p>
                    <p>• שנה את הרוחב מ-PX ל-VW ושים 100</p>
                    <p>• לחץ על "מתקדם" ושנה שוליים פנימיים וחיצוניים ל-VW עם 0</p>
                  </>
                )}
                {currentStep === 8 && (
                  <>
                    <p>• לחץ "תצוגה מקדימה" לבדיקה</p>
                    <p>• וודא שהדף נראה תקין</p>
                    <p>• לחץ "פרסם" או "עדכן"</p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-6">
            <Button
              onClick={onBack}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
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
                      description: "דף הנחיתה שלך מוכן ופעיל באתר WordPress",
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

      {/* Quick Reference */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            זכור - דברים חשובים
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="space-y-2">
              <p>• <span className="text-green-400">✓</span> שמור גיבוי לפני שינויים</p>
              <p>• <span className="text-green-400">✓</span> השתמש במצב HTML בלבד</p>
              <p>• <span className="text-green-400">✓</span> אל תשנה את הקוד</p>
            </div>
            <div className="space-y-2">
              <p>• <span className="text-green-400">✓</span> בדוק תצוגה מקדימה</p>
              <p>• <span className="text-green-400">✓</span> הדף מותאם לניידים</p>
              <p>• <span className="text-green-400">✓</span> רענן אם יש בעיות</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};