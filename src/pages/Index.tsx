import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Zap, 
  Users, 
  Rocket,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Smartphone,
  Code,
  Palette,
  ArrowRight,
  TrendingUp,
  Shield,
  Layers,
  Cpu
} from 'lucide-react';

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  const handleOpenQuestionnaire = () => {
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    setIsQuestionnaireOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800" dir="rtl">
      <Header onStartQuestionnaire={handleOpenQuestionnaire} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 backdrop-blur-sm px-6 py-3 text-lg">
            <Cpu className="w-5 h-5 ml-2" />
            פלטפורמת ה-AI המתקדמת ביותר
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              LeadGrid
            </span>
            <br />
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              דפי נחיתה חכמים
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            יצירת דפי נחיתה מקצועיים בעזרת בינה מלאכותית מתקדמת
            <br />
            <span className="text-blue-400 font-semibold">תוך 60 שניות בלבד</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={handleOpenQuestionnaire}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Rocket className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
              התחל ליצור עכשיו
              <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <CheckCircle className="w-5 h-5 text-green-400" />
              ללא כרטיס אשראי
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Zap className="w-5 h-5 text-yellow-400" />
              60 שניות ליצירה
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Shield className="w-5 h-5 text-green-400" />
              בטחון מירבי
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 text-green-300 backdrop-blur-sm px-4 py-2">
              תמחור פשוט ושקוף
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              בחר את החבילה שלך
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <Card className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">תבניות בסיסיות</h3>
                <div className="text-4xl font-black text-blue-400 mb-6">
                  ₪89.99
                  <span className="text-lg text-slate-400 font-normal">/חודש</span>
                </div>
                <ul className="space-y-3 mb-8 text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    תבניות בסיסיות
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    עיצוב רספונסיבי
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    תמיכה טכנית
                  </li>
                </ul>
                <Button 
                  onClick={handleOpenQuestionnaire}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-xl"
                >
                  התחל עכשיו
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="group bg-gradient-to-b from-purple-800/50 to-purple-900/50 border border-purple-500/50 backdrop-blur-sm hover:border-purple-400/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 font-bold">
                  הכי פופולרי
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">פרימיום</h3>
                <div className="text-4xl font-black text-purple-400 mb-6">
                  ₪119.99
                  <span className="text-lg text-slate-400 font-normal">/חודש</span>
                </div>
                <ul className="space-y-3 mb-8 text-slate-300">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    כל התבניות
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    אפקטים מתקדמים
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    עדכונים ראשוניים
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    תמיכה פרימיום
                  </li>
                </ul>
                <Button 
                  onClick={handleOpenQuestionnaire}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-3 rounded-xl"
                >
                  התחל עכשיו
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 text-yellow-300 backdrop-blur-sm px-4 py-2">
              התהליך שלנו
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              איך זה עובד?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "ענה על השאלון", desc: "ספר לנו על העסק שלך", num: "01" },
              { icon: Palette, title: "בחר עיצוב", desc: "AI יציע תבניות מתאימות", num: "02" },
              { icon: Rocket, title: "פרסם לאויר", desc: "הדף שלך מוכן תוך דקות", num: "03" }
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="group text-center relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 transform group-hover:scale-110">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 backdrop-blur-sm px-4 py-2">
              למה LeadGrid?
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              טכנולוגיה מתקדמת
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "מהירות חסרת תקדים", desc: "יצירה ב-60 שניות" },
              { icon: Cpu, title: "AI חכם", desc: "בינה מלאכותית מתקדמת" },
              { icon: Globe, title: "SEO מובנה", desc: "מותאם לגוגל מראש" }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={i} className="group bg-gradient-to-b from-slate-800/30 to-slate-900/30 border border-slate-700/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-8">
            מוכן להתחיל?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            הצטרף לעסקים מובילים שכבר בחרו ב-LeadGrid
          </p>
          
          <Button 
            onClick={handleOpenQuestionnaire}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Rocket className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
            צור דף נחיתה עכשיו
          </Button>
        </div>
      </section>

      <Footer />
      
      <LandingPageQuestionnaire 
        isOpen={isQuestionnaireOpen} 
        onClose={handleCloseQuestionnaire} 
      />
    </div>
  );
};

export default Index;