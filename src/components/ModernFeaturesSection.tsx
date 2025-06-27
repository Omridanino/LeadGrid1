
import { Zap, Eye, BarChart, Smartphone, Globe, Shield } from "lucide-react";

const ModernFeaturesSection = () => {
  const features = [
    {
      icon: Eye,
      title: "עיצוב שקורע עיניים",
      description: "תבניות עיצוב מתקדמות שגורמות ללקוחות להישאר ולקנות - לא רק להסתכל",
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
    <section id="features" className="py-24 px-4 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* רקע תלת-ממדי */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        {/* גריד תלת-ממדי */}
        <div className="absolute inset-0 opacity-20" style={{ perspective: '1000px' }}>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: 'rotateX(60deg) translateZ(-100px)'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* כותרת מרכזית */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 backdrop-blur-md border px-6 py-3 rounded-full mb-8 animate-slideUp"
               style={{
                 backgroundColor: 'rgba(59, 130, 246, 0.1)',
                 borderColor: 'rgba(59, 130, 246, 0.3)'
               }}>
            <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-blue-200 font-medium">התכונות המתקדמות שלנו</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 animate-slideUp animate-delay-300"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
            כל מה שאתם צריכים
            <br />
            <span className="text-blue-400">ועוד הרבה יותר</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-slideUp animate-delay-600">
            טכנולוגיה מתקדמת שמאפשרת לכם ליצור דפי נחיתה ברמה מקצועית
            <br />
            תוך דקות ספורות, ללא ידע טכני מוקדם
          </p>
        </div>

        {/* רשת תכונות תלת-ממדית */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slideUp hover:scale-105 transition-all duration-500"
              style={{ 
                animationDelay: feature.delay,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* כרטיס תכונה */}
              <div 
                className="backdrop-blur-xl border-2 p-8 rounded-3xl h-full shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateZ(20px)'
                }}
              >
                {/* הדגשה מתקדמת */}
                <div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} 
                />
                
                {/* אפקט זוהר פנימי */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                />

                {/* אייקון תלת-ממדי */}
                <div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* תוכן */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* אפקטי זוהר */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-white to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-tl from-white to-transparent rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* קריאה לפעולה תחתונה */}
        <div className="text-center mt-20 animate-slideUp animate-delay-1200">
          <div className="backdrop-blur-xl border-2 p-8 rounded-3xl inline-block shadow-2xl"
               style={{
                 backgroundColor: 'rgba(59, 130, 246, 0.1)',
                 borderColor: 'rgba(59, 130, 246, 0.3)'
               }}>
            <h3 className="text-3xl font-bold text-white mb-4">
              מוכנים לראות את הקסם בפעולה?
            </h3>
            <p className="text-blue-200 text-lg mb-6">
              בואו נתחיל לבנות את הדף המושלם שלכם עכשיו
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                התחילו עכשיו בחינם
              </button>
              <button className="px-8 py-4 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:backdrop-blur-lg transition-all duration-300">
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
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-600 { animation-delay: 0.6s; }
        .animate-delay-1200 { animation-delay: 1.2s; }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
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
