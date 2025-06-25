
import { CheckCircle, Target } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "יתרונות ברורים לכל משתמש – קלות שימוש, חיבור מהיר ל־WordPress",
    "מערכת חכמה ליצירת דפים אוטומטיים – פשוט עונים על מספר שאלות",
    "צ'אטבוט AI אינטראקטיבי – LeadGrid Bot – זמין בכל רגע",
    "כל הכפתורים והפונקציות באתר עובדים בפועל – לא דמו",
    "סקשנים מובנים: המלצות, שאלות נפוצות, מדריכי שימוש"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-8 text-white">
              המערכת כוללת את כל מה שאתה צריך
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-reverse space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-12 h-12 text-white" />
              </div>
              <p className="text-gray-300 text-xl font-semibold">מערכת מתקדמת ומלאה</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
