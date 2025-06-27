
import { Zap, Eye, BarChart, Smartphone, Globe, Shield } from "lucide-react";

const ModernFeaturesSection = () => {
  const features = [
    {
      icon: Eye,
      title: "עיצוב שקורע עיניים",
      description: "תבניות עיצוב מתקדמות שגורמות للقוחות להישאר ולקנות - לא רק להסתכל",
      gradient: "from-blue-500 to-cyan-400",
      delay: "0s"
    },
    {
      icon: Zap,
      title: "מהירות אור",
      description: "דפים שנטענים כל כך מהר שגוגל יתאהב בהם (וגם הלקוחות שלכם)",
      gradient: "from-purple-500 to-pink-400",
      delay: "0.2s"
    },
    {
      icon: BarChart,
      title: "המרות שמשגעות",
      description: "נתונים בזמן אמת שמראים בדיוק איך הדף שלכם הופך לכסף",
      gradient: "from-green-500 to-emerald-400",
      delay: "0.4s"
    },
    {
      icon: Smartphone,
      title: "רספונסיביות מושלמת",
      description: "נראה מדהים בכל מכשיר - מהטלפון הקטן ביותר ועד למסך הגדול ביותר",
      gradient: "from-orange-500 to-red-400",
      delay: "0.6s"
    },
    {
      icon: Globe,
      title: "נוכחות עולמית",
      description: "אתרים שנטענים מהר בכל מקום בעולם עם CDN מתקדם",
      gradient: "from-indigo-500 to-blue-400",
      delay: "0.8s"
    },
    {
      icon: Shield,
      title: "אבטחה מקסימלית",
      description: "הגנה מתקדמת על הנתונים שלכם ושל הלקוחות - אפס פשרות",
      gradient: "from-teal-500 to-cyan-400",
      delay: "1s"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* רקע מינימליסטי */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        {/* נקודות דקורטיביות */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* כותרת מרכזית */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 backdrop-blur-md border px-4 py-2 rounded-full mb-8 animate-slideUp"
               style={{
                 backgroundColor: 'rgba(59, 130, 246, 0.1)',
                 borderColor: 'rgba(59, 130, 246, 0.3)'
               }}>
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-200 font-medium text-sm">התכונות המתקדמות שלנו</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-slideUp animate-delay-300 text-white">
            כל מה שאתם צריכים
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              ועוד הרבה יותר
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp animate-delay-600">
            טכנולוגיה מתקדמת שמאפשרת לכם ליצור דפי נחיתה ברמה מקצועית
            <br />
            תוך דקות ספורות, ללא ידע טכני מוקדם
          </p>
        </div>

        {/* רשת תכונות נקייה */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slideUp hover:scale-105 transition-all duration-500"
              style={{ 
                animationDelay: feature.delay
              }}
            >
              {/* כרטיס תכונה נקי */}
              <div 
                className="backdrop-blur-xl border p-8 rounded-2xl h-full shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* הדגשה עדינה */}
                <div 
                  className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} 
                />
                
                {/* זוהר עדין */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />

                {/* אייקון נקי */}
                <div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* תוכן */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* קריאה לפעולה תחתונה */}
        <div className="text-center mt-20 animate-slideUp animate-delay-1200">
          <div className="backdrop-blur-xl border p-8 rounded-2xl inline-block shadow-xl max-w-2xl"
               style={{
                 backgroundColor: 'rgba(59, 130, 246, 0.1)',
                 borderColor: 'rgba(59, 130, 246, 0.3)'
               }}>
            <h3 className="text-2xl font-bold text-white mb-4">
              מוכנים לראות את הקסם בפעולה?
            </h3>
            <p className="text-blue-200 mb-6">
              בואו נתחיל לבנות את הדף המושלם שלכם עכשיו
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                התחילו עכשיו בחינם
              </button>
              <button className="px-8 py-3 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:backdrop-blur-lg transition-all duration-300">
                ראו דוגמאות
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-1200 { animation-delay: 1.2s; }
        @media (max-width: 768px) {
          h2 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ModernFeaturesSection;
