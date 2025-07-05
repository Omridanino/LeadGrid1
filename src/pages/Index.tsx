
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
  ArrowLeft,
  Star,
  Clock,
  Globe,
  Smartphone,
  Code,
  Palette,
  Play,
  TrendingUp
} from 'lucide-react';
import { templates } from "@/data/templates";

const Index = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);

  const handleOpenQuestionnaire = () => {
    setIsQuestionnaireOpen(true);
  };

  const handleCloseQuestionnaire = () => {
    setIsQuestionnaireOpen(false);
  };

  const features = [
    {
      icon: Zap,
      title: "יצירה מהירה",
      description: "צור דף נחיתה מקצועי תוך דקות ספורות עם הבינה המלאכותית שלנו"
    },
    {
      icon: Palette,
      title: "עיצוב מותאם אישית",
      description: "תבניות יפות ומותאמות לכל תחום עסקי עם אפשרויות התאמה אינסופיות"
    },
    {
      icon: Smartphone,
      title: "רספונסיבי לכל מכשיר",
      description: "הדפים שלך ייראו מושלמים על כל מכשיר - מחשב, טאבלט וסמארטפון"
    },
    {
      icon: Code,
      title: "ללא צורך בקוד",
      description: "אין צורך בידע טכני - הכל דרך ממשק פשוט וידידותי למשתמש"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "ענה על השאלון",
      description: "ספר לנו על העסק שלך והדרישות שלך"
    },
    {
      step: "02", 
      title: "בחר תבנית",
      description: "בחר מתוך התבניות המותאמות לתחום שלך"
    },
    {
      step: "03",
      title: "התאם אישית",
      description: "ערוך תוכן, צבעים ועיצוב לפי הצורך"
    },
    {
      step: "04",
      title: "פרסם לאויר",
      description: "קבל קישור לדף או הורד את הקוד"
    }
  ];

  const benefits = [
    "חיסכון של שעות עבודה",
    "עיצוב מקצועי ומודרני", 
    "SEO מותאם לגוגל",
    "מהירות טעינה מעולה",
    "תמיכה בעברית מלאה",
    "התאמה לכל התחומים"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white" dir="rtl">
      <Header onStartQuestionnaire={handleOpenQuestionnaire} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 text-sm font-medium">
            🚀 פלטפורמת יצירת דפי נחיתה מתקדמת
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lgx:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            צור דף נחיתה מקצועי
            <br />
            תוך <span className="text-blue-600">דקות ספורות</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            פלטפורמה מבוססת בינה מלאכותית ליצירת דפי נחיתה מקצועיים ויפים
            ללא צורך בידע טכני או עיצובי
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleOpenQuestionnaire}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 ml-2" />
              התחל עכשיו בחינם
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              <Play className="w-5 h-5 ml-2" />
              צפה בדמו
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              ללא כרטיס אשראי
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              התחל בחינם
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              תמיכה בעברית
            </div>
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-0">
              התבניות שלנו
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              תבניות מקצועיות לכל תחום
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              בחר מתוך מגוון רחב של תבניות מעוצבות ומותאמות לתחומי עסקים שונים
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.slice(0, 6).map((template) => (
              <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center text-white">
                      <h3 className="font-bold text-lg mb-2">{template.hero.title}</h3>
                      <p className="text-sm opacity-90">{template.category}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{template.name}</h4>
                  <p className="text-slate-600 text-sm mb-4">{template.hero.description}</p>
                  <Button 
                    onClick={handleOpenQuestionnaire}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    השתמש בתבנית
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-0">
              למה LEADGRID?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              הפלטפורמה המתקדמת ביותר ליצירת דפי נחיתה
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              אנחנו משלבים בינה מלאכותית מתקדמת עם עיצוב מודרני כדי לתת לך את הכלים הטובים ביותר
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-0">
              איך זה עובד?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              4 שלבים פשוטים לדף נחיתה מושלם
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              תהליך פשוט ומהיר שיביא אותך לתוצאה מקצועית תוך דקות
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-0">
            היתרונות שלנו
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            למה לבחור ב-LEADGRID?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            אנחנו מספקים פתרון מקצועי, מהיר ויעיל ליצירת דפי נחיתה מושלמים
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button 
              onClick={handleOpenQuestionnaire}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 ml-2" />
              צור דף נחיתה עכשיו
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            מוכן להתחיל?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            הצטרף לאלפי עסקים שכבר בחרו ב-LEADGRID כדי ליצור דפי נחיתה מקצועיים
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleOpenQuestionnaire}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 ml-2" />
              התחל עכשיו - חינם
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              דירוג 5 כוכבים
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              +10,000 משתמשים
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              שיפור המרות של 300%
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Questionnaire Modal */}
      <LandingPageQuestionnaire 
        isOpen={isQuestionnaireOpen} 
        onClose={handleCloseQuestionnaire} 
      />
    </div>
  );
};

export default Index;
