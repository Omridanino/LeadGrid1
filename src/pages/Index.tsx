
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Target, Users, MessageCircle, ArrowLeft, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "bot", message: "שלום! אני LeadGrid Bot, כאן כדי לעזור לך ליצור דף נחיתה מושלם. איך אוכל לעזור?" }
  ]);
  const { toast } = useToast();

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    const newHistory = [
      ...chatHistory,
      { type: "user", message: chatMessage },
      { type: "bot", message: "תודה על ההודעה! אני כאן כדי לעזור לך עם יצירת דף הנחיתה. האם תרצה שאתחיל בניתוח העסק שלך?" }
    ];
    setChatHistory(newHistory);
    setChatMessage("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ההודעה נשלחה בהצלחה!",
      description: "נחזור אליך בהקדם האפשרי.",
    });
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "יצירה אוטומטית מבוססת AI",
      description: "פשוט עונים על מספר שאלות, והדף נבנה לבד תוך דקות"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "אופטימיזציה להמרות",
      description: "כל אלמנט מותאם להגדלת המרות ומכירות"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "ממשק משתמש אינטואיטיבי",
      description: "קל לשימוש, ללא צורך בידע טכני"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "צ'אטבוט AI אינטראקטיבי",
      description: "LeadGrid Bot זמין 24/7 לעזרה וייעוץ"
    }
  ];

  const testimonials = [
    {
      name: "איתי כהן",
      role: "מנכ״ל, TechStart",
      content: "LeadGrid שינה לי את המשחק לגמרי. תוך 15 דקות היה לי דף נחיתה מקצועי שהגדיל לי את ההמרות ב-300%!"
    },
    {
      name: "רונית לוי",
      role: "מנהלת שיווק, GrowFast",
      content: "סוף סוף פלטפורמה שמבינה עברית ו-RTL! העיצובים מדהימים והתוצאות מדברות בעד עצמן."
    },
    {
      name: "דני ברק",
      role: "יזם דיגיטלי",
      content: "המערכת הכי חכמה שראיתי. הצ'אטבוט עוזר בכל שלב והתמיכה ברמה הכי גבוהה."
    }
  ];

  const faqItems = [
    {
      question: "כמה זמן לוקח ליצור דף נחיתה?",
      answer: "עם LeadGrid, אתה יכול ליצור דף נחיתה מקצועי תוך 5-15 דקות בלבד!"
    },
    {
      question: "האם אני צריך ידע טכני?",
      answer: "בכלל לא! המערכת מתוכננת להיות פשוטה וידידותית למשתמש. פשוט עוני על כמה שאלות והמערכת תעשה את השאר."
    },
    {
      question: "איך מתחברים ל-WordPress?",
      answer: "החיבור ל-WordPress קל ומהיר. פשוט תלחץ על כפתור החיבור, תזין את פרטי האתר שלך, והכל יסונכרן אוטומטית."
    },
    {
      question: "מה כלול במחיר?",
      answer: "המחיר כולל את כל הכלים: יצירת דפים אוטומטית, צ'אטבוט AI, תבניות ללא הגבלה, ותמיכה 24/7."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LeadGrid
              </h1>
            </div>
            <nav className="hidden md:flex space-x-reverse space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">יתרונות</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">המלצות</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">שאלות נפוצות</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">צור קשר</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              התחל עכשיו
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🚀 העתיד של דפי הנחיתה כבר כאן
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            ברוכים הבאים
            <br />
            ל־LeadGrid
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            הפלטפורמה המתקדמת ביותר בעולם ליצירת דפי נחיתה חכמים, מהירים וממירי לקוחות — 
            הרבה מעבר למה ש־WIX או כל מערכת אחרת מציעה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4">
              <Zap className="w-5 h-5 ml-2" />
              צור דף נחיתה בדקות
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              צפה בדמו חי
            </Button>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 text-lg">דמו אינטראקטיבי - LeadGrid בפעולה</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-800">למה LeadGrid?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              המערכת הכי מתקדמת ליצירת דפי נחיתה עם תוצאות מוכחות
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-8 text-gray-800">
                המערכת כוללת את כל מה שאתה צריך
              </h3>
              <div className="space-y-6">
                {[
                  "יתרונות ברורים לכל משתמש – קלות שימוש, חיבור מהיר ל־WordPress",
                  "מערכת חכמה ליצירת דפים אוטומטיים – פשוט עונים על מספר שאלות",
                  "צ'אטבוט AI אינטראקטיבי – LeadGrid Bot – זמין בכל רגע",
                  "כל הכפתורים והפונקציות באתר עובדים בפועל – לא דמו",
                  "סקשנים מובנים: המלצות, שאלות נפוצות, מדריכי שימוש"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-700 text-xl font-semibold">מערכת מתקדמת ומלאה</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-800">מה אומרים עלינו</h3>
            <p className="text-xl text-gray-600">לקוחות מרוצים שכבר חוו את הקסם של LeadGrid</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-reverse space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-800">שאלות נפוצות</h3>
            <p className="text-xl text-gray-600">כל מה שרציתם לדעת על LeadGrid</p>
          </div>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-right text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-right">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">מוכנים להתחיל?</h3>
            <p className="text-xl text-blue-100">צרו קשר איתנו עכשיו ותקבלו דף נחיתה מושלם תוך דקות</p>
          </div>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">שם מלא</label>
                    <Input className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="השם שלך" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">אימייל</label>
                    <Input type="email" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">על איזה עסק מדובר?</label>
                  <Input className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="תיאור קצר של העסק" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ספר לנו על המטרות שלך</label>
                  <Textarea className="bg-white/20 border-white/30 text-white placeholder:text-white/70" placeholder="מה אתה רוצה להשיג עם דף הנחיתה?" rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  <Send className="w-5 h-5 ml-2" />
                  שלח בקשה ותקבל דף נחיתה מותאם
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-reverse space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-2xl font-bold">LeadGrid</h4>
            </div>
            <p className="text-gray-400 mb-6">העתיד של דפי הנחיתה - מותאם, חכם ויעיל</p>
            <p className="text-gray-500 text-sm">© 2024 LeadGrid. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isChatOpen ? <ArrowLeft className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-blue-100 z-50 flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-lg">
            <h4 className="font-semibold">LeadGrid Bot</h4>
            <p className="text-sm text-blue-100">כאן כדי לעזור לך!</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3" dir="rtl">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`p-3 rounded-lg ${msg.type === 'bot' ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-800 mr-8'}`}>
                <p className="text-sm">{msg.message}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200">
            <div className="flex space-x-reverse space-x-2">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="הקלד הודעה..."
                className="flex-1"
                dir="rtl"
              />
              <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Index;
