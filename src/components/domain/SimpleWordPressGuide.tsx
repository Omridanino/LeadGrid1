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
            <p style="font-size: 1.1rem;">📧 info.Leadgrid@gmail.com</p>
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
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page-wordpress.html';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "📁 קובץ HTML הורד!",
      description: "הקובץ הורד בהצלחה למחשב שלכם",
    });
  };

  const steps = [
    {
      number: 1,
      title: "קנה דומיין והירשם לוורדפרס",
      icon: <Monitor className="w-5 h-5" />,
      description: "רכוש דומיין והרשם לשירות אחסון WordPress",
      image: null
    },
    {
      number: 2,
      title: "התקן את תוסף Elementor",
      icon: <Settings className="w-5 h-5" />,
      description: "עברו לתוספים בצד ימין של האתר והתקינו את Elementor (בחינם)",
      image: "/lovable-uploads/305190b1-b45a-4d69-8f47-0d71f9dbbd5a.png"
    },
    {
      number: 3,
      title: "צרו עמוד חדש",
      icon: <FileText className="w-5 h-5" />,
      description: "לחצו על עמודים ובחרו Add Page להוספת עמוד חדש",
      image: "/lovable-uploads/6b211bbc-a2b8-49f0-a525-60d79611a4c5.png"
    },
    {
      number: 4,
      title: "ערכו באלמנטור",
      icon: <Code className="w-5 h-5" />,
      description: "היכנסו לעמוד שיצרתם, תנו לו כותרת ולחצו 'עריכה באמצעות אלמנטור'",
      image: "/lovable-uploads/6daad2c0-7e59-4299-b5c3-bbdf4c3b3d6d.png"
    },
    {
      number: 5,
      title: "שנו פריסה לקנבס",
      icon: <Settings className="w-5 h-5" />,
      description: "לחצו על גלגל השיניים במרכז הדף, עברו להגדרות ובחרו 'אלמנטור קנבס'",
      image: "/lovable-uploads/4d61cea5-72ca-4793-8f47-83cdff361c2d.png"
    },
    {
      number: 6,
      title: "הוסיפו רכיב HTML",
      icon: <Copy className="w-5 h-5" />,
      description: "רשמו HTML באיזור הווידג'טים, גררו את האלמנט HTML לאמצע והדביקו את הקוד",
      image: "/lovable-uploads/86dc32f3-db4c-45f2-9b31-14c0c0970e0c.png"
    },
    {
      number: 7,
      title: "כווננו הגדרות תצוגה",
      icon: <Settings className="w-5 h-5" />,
      description: "לחצו על הכפתור האמצעי ברכיב HTML ושנו הגדרות פריסה ושוליים",
      image: "/lovable-uploads/16b3b839-8703-45dc-a95d-04712f349cab.png",
      additionalImage: "/lovable-uploads/bae5cc76-4270-4295-8d31-6b0ad094ad58.png"
    },
    {
      number: 8,
      title: "פרסמו את הדף",
      icon: <Eye className="w-5 h-5" />,
      description: "בדקו תצוגה מקדימה ולחצו פרסם"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-5xl mx-auto p-6 space-y-8" dir="rtl">
        
        {/* Header */}
        <div className="text-center space-y-6 py-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl shadow-blue-500/25 mb-4">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            מדריך התקנה ב-WordPress
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            8 שלבים פשוטים להעלאת דף הנחיתה שלך לאתר WordPress עם Elementor
          </p>
          <div className="flex justify-center">
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-4 py-2 text-sm">
              🚀 מדריך מפורט עם תמונות
            </Badge>
          </div>
        </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-2xl min-w-fit max-w-6xl">
          <div className="flex items-center justify-between min-w-max">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 hover:scale-110
                  ${currentStep >= step.number 
                    ? 'bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 text-white shadow-xl shadow-cyan-500/40' 
                    : currentStep === step.number 
                      ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white shadow-xl shadow-blue-500/40 ring-4 ring-blue-500/30 bg-size-200 animate-gradient-xy' 
                      : 'bg-gradient-to-br from-slate-700 to-slate-600 text-gray-400 hover:bg-gradient-to-br hover:from-slate-600 hover:to-slate-500'
                  }
                `}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-bold text-lg">{step.number}</span>
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
      <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 shadow-2xl backdrop-blur-sm animate-fade-in">
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-b border-slate-700/50">
          <div className="flex items-center gap-6">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-4 rounded-2xl shadow-xl shadow-blue-500/30 animate-fade-in">
              {steps[currentStep - 1].icon}
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="mb-3 bg-blue-500/20 text-blue-300 border-blue-500/40 px-3 py-1">
                שלב {currentStep} מתוך {steps.length}
              </Badge>
              <CardTitle className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                {steps[currentStep - 1].title}
              </CardTitle>
              <p className="text-gray-300 text-lg leading-relaxed">
                {steps[currentStep - 1].description}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          

          {/* Step Image */}
          {steps[currentStep - 1].image && (
            <div className="bg-slate-900 border border-slate-600 rounded-xl p-6 shadow-lg space-y-4">
              {/* For step 7, show images side by side */}
              {currentStep === 7 && steps[currentStep - 1].additionalImage ? (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-lg border border-slate-600 bg-slate-800">
                      <img 
                        src={steps[currentStep - 1].image} 
                        alt={steps[currentStep - 1].title}
                        className="w-full h-64 object-contain mx-auto bg-slate-800 rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-gray-400 text-sm font-medium">
                      📸 הגדרות פריסה - רוחב
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-lg border border-slate-600 bg-slate-800">
                      <img 
                        src={steps[currentStep - 1].additionalImage} 
                        alt={`${steps[currentStep - 1].title} - חלק 2`}
                        className="w-full h-64 object-contain mx-auto bg-slate-800 rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-gray-400 text-sm font-medium">
                      📸 הגדרות מתקדמות - שוליים
                    </p>
                  </div>
                </div>
              ) : (
                /* Single image for other steps */
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-lg border border-slate-600 bg-slate-800">
                    <img 
                      src={steps[currentStep - 1].image} 
                      alt={steps[currentStep - 1].title}
                      className="w-full h-64 object-contain mx-auto bg-slate-800 rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center text-gray-400 text-sm font-medium">
                    📸 {steps[currentStep - 1].title}
                  </p>
                </div>
              )}
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
                      {copied ? 'הועתק!' : 'העתקו קוד'}
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
                    <p>• רכשו דומיין מכל ספק דומיינים (Godaddy, Namecheap וכו')</p>
                    <p>• הירשמו לשירות אחסון WordPress (SiteGround, Bluehost וכו')</p>
                    <p>• וודאו שהדומיין מחובר לאחסון</p>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <p>• היכנסו לפאנל הניהול של WordPress</p>
                    <p>• לחצו על "תוספים" ← "הוסיפו תוסף חדש"</p>
                    <p>• חפשו "Elementor Website Builder" והתקינו (בחינם!)</p>
                    <Button 
                      onClick={() => window.open('https://wordpress.org/plugins/elementor/', '_blank')}
                      variant="outline"
                      size="sm"
                      className="mt-2 border-purple-600 text-purple-400 hover:bg-purple-600/10"
                    >
                      <ExternalLink className="w-4 h-4 ml-1" />
                      הורידו Elementor
                    </Button>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <p>• במסך הראשי של WordPress, לחצו על "עמודים"</p>
                    <p>• לחצו על "הוסיפו עמוד חדש"</p>
                    <p>• תנו שם לעמוד (למשל: "דף הבית")</p>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <p>• לחצו על העמוד שיצרתם</p>
                    <p>• לחצו על "עריכה באמצעות אלמנטור"</p>
                    <p>• העמוד ייפתח בעורך האלמנטור</p>
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <p>• לחצו על גלגל השיניים (הגדרות עמוד)</p>
                    <p>• בחרו "פריסת עמוד" ← "אלמנטור קנבס"</p>
                    <p>• זה ייתן לכם שליטה מלאה על העמוד</p>
                  </>
                )}
                 {currentStep === 6 && (
                   <>
                     <p>• רשמו "HTML" באיזור הווידג'טים הימני</p>
                     <p>• גררו את האלמנט HTML לאמצע האתר</p>
                     <p>• הדביקו את הקוד HTML שקיבלתם מ-LeadGrid</p>
                   </>
                 )}
                 {currentStep === 7 && (
                   <>
                     <p>• לחצו על הכפתור האמצעי ברכיב HTML (נראה כמו שלוש נקודות בצבע אפור)</p>
                     <p>• לחצו על "פריסה" ושנו רוחב מ-PX ל-VW ושימו 100</p>
                     <p>• עברו ל"מתקדם" ושנו שוליים פנימיים וחיצוניים ל-VW ושימו 100</p>
                   </>
                 )}
                {currentStep === 8 && (
                  <>
                    <p>• לחצו "תצוגה מקדימה" לבדיקה</p>
                    <p>• וודאו שהדף נראה תקין</p>
                    <p>• לחצו "פרסמו" או "עדכנו"</p>
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
    </div>
  );
};