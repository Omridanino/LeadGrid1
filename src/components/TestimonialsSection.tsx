
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
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

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">מה אומרים עלינו</h3>
          <p className="text-xl text-gray-300">לקוחות מרוצים שכבר חוו את הקסם של LeadGrid</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-reverse space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
