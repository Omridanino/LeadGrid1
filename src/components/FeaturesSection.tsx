
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎨",
      title: "דף נחיתה מקצועי מותאם",
      description: "קבל דף נחיתה יפה ומקצועי שמותאם בדיוק לעסק שלך ולקהל שלך"
    },
    {
      icon: "⚡",
      title: "יצירה מהירה תוך דקות",
      description: "השלם שאלון קצר וקבל דף מוכן תוך פחות מ-60 שניות"
    },
    {
      icon: "💻",
      title: "קוד HTML מוכן להורדה",
      description: "הורד את קוד המקור המלא והטמע בכל פלטפורמה שתרצה"
    },
    {
      icon: "🔧",
      title: "עורך עיצוב בזמן אמת",
      description: "ערוך צבעים, גופנים ועיצוב ישירות בדפדפן - ללא צורך בידע טכני"
    },
    {
      icon: "🌐",
      title: "רכישת דומיין וחיבור",
      description: "קנה דומיין מתאים ותחבר את הדף שלך תוך דקות"
    },
    {
      icon: "🔗",
      title: "אינטגרציה עם וורדפרס",
      description: "קבל קוד מוכן להטמעה באתר וורדפרס קיים עם הוראות פשוטות"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* תלת מימדי רקע איורים */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl rotate-12 animate-ping" style={{animationDuration: '4s'}}></div>
        
        {/* איור דף נחיתה תלת מימדי */}
        <div className="absolute top-1/4 right-1/4 hidden lg:block">
          <div className="relative w-40 h-56 transform rotate-12 hover:rotate-6 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl">
              <div className="p-4 space-y-3">
                <div className="w-full h-3 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded"></div>
                <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                <div className="w-1/2 h-2 bg-white/20 rounded"></div>
                <div className="w-full h-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg mt-4"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-4 bg-white/10 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">מה אתה מקבל איתנו</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            פתרון שלם ליצירת דף נחיתה מקצועי שמייצר תוצאות אמיתיות
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
