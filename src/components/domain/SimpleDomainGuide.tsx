
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
  Eye,
  Clock,
  AlertCircle,
  Lock,
  Search,
  CreditCard,
  FolderOpen,
  Settings,
  Wifi
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

  const handleDNSCheckerClick = () => {
    window.open('https://whatsmydns.net/', '_blank');
    toast({
      title: "🔍 כלי בדיקת DNS נפתח",
      description: "השתמש בכלי הזה לבדיקת הפצת DNS",
    });
  };

  const steps = [
    {
      number: 1,
      title: "רכישת דומיין ואחסון ב-GoDaddy",
      icon: <CreditCard className="w-6 h-6" />,
      description: "חיפוש ורכישת דומיין + אחסון באתר GoDaddy הישראלי",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "היכנס לאתר il.godaddy.com (האתר הישראלי)",
        "בחר 'דומיינים' מהתפריט העליון",
        "הקלד את השם הרצוי (לדוגמה: mycompany)",
        "בחר סיומת (.com, .co.il, .net) ולחץ 'חפש'",
        "אם הדומיין זמין - הוסף לעגלה",
        "הוסף 'Web Hosting' לעגלה (בחר Basic או Deluxe)",
        "השלם את הרכישה עם פרטי תשלום"
      ],
      tips: [
        "💡 מומלץ לבחור סיומת .com עבור עסקים",
        "💡 שמור את פרטי ההתחברות במקום בטוח",
        "⏰ הרכישה יכולה לקחת עד 15 דקות"
      ]
    },
    {
      number: 2,
      title: "כניסה לחשבון וגישה לאחסון",
      icon: <Monitor className="w-6 h-6" />,
      description: "התחברות לחשבון GoDaddy ואיתור פאנל הניהול",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "התחבר לחשבון GoDaddy שלך",
        "לחץ על 'My Products' (המוצרים שלי) בתפריט העליון",
        "מצא את חבילת האחסון שלך ברשימה",
        "לחץ על 'Manage' (נהל) ליד חבילת האחסון",
        "אתה תועבר לפאנל הניהול (cPanel או דומה)"
      ],
      tips: [
        "🔑 אם שכחת סיסמה - השתמש ב'שחזר סיסמה'",
        "📧 בדוק את המייל לפרטי הפעלת החשבון",
        "🕐 הפעלת האחסון יכולה לקחת עד שעה"
      ]
    },
    {
      number: 3,
      title: "העלאת קובץ HTML באמצעות File Manager",
      icon: <Upload className="w-6 h-6" />,
      description: "העלאת דף הנחיתה לשרת האחסון",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "בפאנל הניהול, חפש 'File Manager' או 'מנהל קבצים'",
        "לחץ עליו כדי לפתוח את מנהל הקבצים",
        "נווט לתיקיית 'public_html' (זו התיקייה הראשית)",
        "לחץ על 'Upload' או 'העלה קבצים'",
        "בחר את קובץ ה-HTML שקיבלת מאיתנו",
        "אם יש תמונות או קבצי CSS - העלה גם אותם",
        "שנה את שם הקובץ הראשי ל-'index.html' (חשוב מאוד!)"
      ],
      tips: [
        "📁 אם יש תיקיות נוספות - העלה את כל התיקייה",
        "🖼️ ודא שכל התמונות והקבצים מועלים",
        "✅ הקובץ הראשי חייב להיקרא 'index.html'",
        "🔗 בדוק שכל הקישורים בקובץ עובדים"
      ]
    },
    {
      number: 4,
      title: "חיבור הדומיין לאחסון",
      icon: <Link className="w-6 h-6" />,
      description: "וידוא שהדומיין מחובר נכון לאחסון",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "ברוב המקרים GoDaddy מחבר את הדומיין אוטומטית",
        "אם הדומיין לא עובד - חזור ל-'My Products'",
        "לחץ על הדומיין שלך ובחר 'Manage DNS'",
        "ודא שיש רשומת 'A Record' שמפנה לשרת האחסון",
        "ודא שיש רשומת 'CNAME' עבור 'www'",
        "אם חסר - פנה לתמיכה של GoDaddy"
      ],
      tips: [
        "⏰ הפצת DNS יכולה לקחת 24-48 שעות",
        "🔍 השתמש ב-whatsmydns.net לבדיקה",
        "🌍 הדומיין יעבוד בהדרגה ברחבי העולם",
        "☎️ תמיכת GoDaddy זמינה 24/7"
      ]
    },
    {
      number: 5,
      title: "הפעלת תעודת SSL (אבטחה)",
      icon: <Lock className="w-6 h-6" />,
      description: "הפעלת הצפנה ואבטחה לאתר",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "בפאנל הניהול, חפש 'SSL/TLS' או 'Let's Encrypt'",
        "לחץ על 'Enable SSL' או 'הפעל SSL'",
        "בחר את הדומיין שלך מהרשימה",
        "לחץ 'Install' או 'התקן'",
        "חכה 2-4 שעות להפעלה מלאה",
        "בדוק שמופיע מנעול בכתובת האתר"
      ],
      tips: [
        "🔒 SSL חובה לכל אתר מודרני",
        "✅ GoDaddy נותן SSL חינם עם האחסון",
        "⏱️ הפעלה יכולה לקחת עד 4 שעות",
        "🔍 מנעול ירוק = האתר מאובטח"
      ]
    },
    {
      number: 6,
      title: "בדיקה סופית וסיום",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "וידוא שהאתר עובד בצורה מושלמת",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      instructions: [
        "פתח דפדפן חדש והיכנס לאתר: www.yoursite.com",
        "בדוק שהדף נטען מהר וללא שגיאות",
        "ודא שכל התמונות מוצגות נכון",
        "בדוק שהכפתורים עובדים",
        "בדוק שיש מנעול SSL ליד הכתובת",
        "בדוק את האתר גם מהטלפון הנייד"
      ],
      tips: [
        "📱 בדוק גם מהטלפון - האתר מותאם לניידים",
        "🔄 אם משהו לא עובד - נקה cache בדפדפן",
        "⏰ תן זמן להפצה מלאה של שינויים",
        "📞 אנחנו כאן לעזור אם משהו לא תקין"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50" dir="rtl">
      <div className="h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto p-6 space-y-8 pb-20">
          
          {/* Header */}
          <div className="text-center space-y-6 py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full shadow-2xl shadow-green-500/25 mb-4">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              🎯 מדריך מפורט - דומיין ואחסון עם GoDaddy
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              6 שלבים מפורטים עם הסברים וטיפים להעלאת דף הנחיתה שלך לאוויר
            </p>
            <div className="flex justify-center">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 px-4 py-2">
                ⭐ מדריך מקצועי עם תמיכה מלאה
              </Badge>
            </div>
          </div>

          {/* Important Notice */}
          <Card className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-amber-500/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-amber-200 font-semibold mb-2">⏰ חשוב לדעת לפני שמתחילים:</h3>
                  <div className="text-amber-100 space-y-1 text-sm">
                    <p>• הפצת DNS יכולה לקחת עד 48 שעות (בדרך כלל 2-6 שעות)</p>
                    <p>• הפעלת SSL יכולה לקחת עד 4 שעות</p>
                    <p>• שמור את כל פרטי ההתחברות במקום בטוח</p>
                    <p>• אם יש בעיה - פנה אלינו מיד לעזרה!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between gap-4 max-w-4xl">
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
                      <div className={`w-8 h-2 mx-3 rounded-full transition-all duration-500 ${
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
                  הוראות שלב אחר שלב:
                </h4>
                <div className="space-y-3">
                  {steps[currentStep - 1].instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start gap-3 text-blue-100">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="leading-relaxed">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
                <h4 className="text-emerald-300 font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  טיפים חשובים:
                </h4>
                <div className="space-y-2">
                  {steps[currentStep - 1].tips.map((tip, index) => (
                    <div key={index} className="text-emerald-100 text-sm leading-relaxed">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Actions for Each Step */}
              {currentStep === 1 && (
                <div className="text-center space-y-4">
                  <Button
                    onClick={handleGoDaddyClick}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg shadow-lg shadow-green-500/30"
                  >
                    <ExternalLink className="w-5 h-5 ml-2" />
                    פתח את GoDaddy הישראלי עכשיו
                  </Button>
                  <p className="text-gray-400 text-sm">
                    הקישור יפתח בכרטיסייה חדשה - חזור לכאן אחרי הרכישה
                  </p>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center space-y-4">
                  <Button
                    onClick={handleDNSCheckerClick}
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  >
                    <Search className="w-5 h-5 ml-2" />
                    בדוק הפצת DNS
                  </Button>
                  <p className="text-gray-400 text-sm">
                    כלי לבדיקת זמינות הדומיין ברחבי העולם
                  </p>
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

          {/* DNS Propagation Info */}
          <Card className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                <Wifi className="w-6 h-6" />
                מה זה הפצת DNS?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-purple-200 text-sm leading-relaxed">
                הפצת DNS זה התהליך שבו השרתים ברחבי העולם לומדים איפה נמצא האתר שלך. 
                זה יכול לקחת בין 2 שעות ל-48 שעות. במהלך הזמן הזה האתר עשוי לעבוד באזורים מסוימים ולא באחרים.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs text-purple-100">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <div className="font-semibold mb-1">⚡ מהיר (2-6 שעות)</div>
                  <div>רוב האזורים בישראל</div>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <div className="font-semibold mb-1">🕐 רגיל (6-24 שעות)</div>
                  <div>רוב המדינות בעולם</div>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <div className="font-semibold mb-1">🐌 איטי (24-48 שעות)</div>
                  <div>אזורים מרוחקים</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SSL Certificate Info */}
          <Card className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                <Shield className="w-6 h-6" />
                למה SSL חשוב?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-200 text-sm text-center leading-relaxed">
                תעודת SSL מצפינה את המידע בין הגולש לאתר שלך ונותנת אמון. בלי SSL האתר יופיע כ"לא מאובטח"
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-green-100">
                <div className="space-y-2">
                  <div className="font-semibold text-green-300">✅ עם SSL:</div>
                  <div>🔒 מנעול ירוק בדפדפן</div>
                  <div>🔐 המידע מוצפן</div>
                  <div>⭐ Google מעדיף אתרים עם SSL</div>
                  <div>👍 הגולשים סומכים יותר</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-red-300">❌ בלי SSL:</div>
                  <div>⚠️ אזהרת "לא מאובטח"</div>
                  <div>📉 הגולשים עוזבים את האתר</div>
                  <div>🔍 Google מוריד בדירוג</div>
                  <div>💔 נראה לא מקצועי</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                <Headphones className="w-6 h-6" />
                זקוק לעזרה? אנחנו כאן בשבילך!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-orange-200 leading-relaxed">
                אם משהו לא ברור, נתקלת בבעיה, או שהאתר לא עובד כמו שצריך - אל תהסס לפנות אלינו!
                <br />
                התמיכה שלנו זמינה ואנחנו נעזור לך עד שהכל יעבוד מושלם.
              </p>
              
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <h4 className="text-orange-300 font-semibold mb-3">📞 דרכי יצירת קשר:</h4>
                <div className="space-y-2 text-orange-100 text-sm">
                  <div>📧 <strong>מייל:</strong> info.Leadgrid@gmail.com</div>
                  <div>💬 <strong>הודעה בווטסאפ</strong> (הכי מהיר)</div>
                  <div>📱 <strong>טלפון:</strong> נענה תמיד</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-300 hover:bg-orange-500/20"
                  size="sm"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  שאלות נפוצות
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-300 hover:bg-orange-500/20"
                  size="sm"
                >
                  <Headphones className="w-4 h-4 mr-2" />
                  צור קשר מהיר
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-300 hover:bg-orange-500/20"
                  size="sm"
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  בדיקת אתר
                </Button>
              </div>

              <div className="text-orange-100 text-xs">
                💡 <strong>טיפ:</strong> שלח לנו צילום מסך של הבעיה - זה יעזור לנו לעזור לך מהר יותר!
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};
