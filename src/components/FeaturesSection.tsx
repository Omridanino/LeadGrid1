
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "כלי שיווק מתקדמים",
      description: "פיקסל פייסבוק, גוגל אנליטיקס, צ'אטבוט חכם ועוד"
    },
    {
      icon: "🔒",
      title: "אבטחה ואמינות",
      description: "SSL מובנה, גיבויים אוטומטיים ואחסון מאובטח"
    },
    {
      icon: "💡",
      title: "בינה מלאכותית",
      description: "תוכן חכם שמותאם לקהל שלך ומייצר המרות גבוהות"
    },
    {
      icon: "🌍",
      title: "תמיכה ב-RTL",
      description: "מותאם מושלם לעברית וערבית עם עיצוב מקצועי"
    },
    {
      icon: "📱",
      title: "רספונסיבי מושלם",
      description: "נראה מעולה בכל מכשיר - מובייל, טאבלט ומחשב"
    },
    {
      icon: "⚡",
      title: "יצירה מהירה",
      description: "דף נחיתה מקצועי מוכן תוך פחות מ-5 דקות"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">מערכת כוללת עם כל מה שצריך</h3>
          <p className="text-xl text-gray-300">הפתרון השלם ליצירת דפי נחיתה מקצועיים</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
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
