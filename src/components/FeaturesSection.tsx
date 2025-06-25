
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Users, MessageCircle } from "lucide-react";

const FeaturesSection = () => {
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

  return (
    <section id="features" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">למה LeadGrid?</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            המערכת הכי מתקדמת ליצירת דפי נחיתה עם תוצאות מוכחות
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
