
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "איתי כהן",
      role: "מנכ״ל, TechStart",
      content: "LeadGrid שינה לי את המשחק לגמרי. תוך 15 דקות היה לי דף נחיתה מקצועי שהגדיל לי את ההמרות ב-300%! הלקוחות מתקשרים יותר ואני מוכר יותר.",
      rating: 5
    },
    {
      name: "רונית לוי",
      role: "מנהלת שיווק, GrowFast",
      content: "סוף סוף פלטפורמה שמבינה עברית ו-RTL! העיצובים מדהימים והתוצאות מדברות בעד עצמן. המערכת חסכה לי אלפי שקלים על מעצבים.",
      rating: 5
    },
    {
      name: "דני ברק",
      role: "יזם דיגיטלי",
      content: "המערכת הכי חכמה שראיתי. הצ'אטבוט עוזר בכל שלב והתמיכה ברמה הכי גבוהה. יצרתי 5 דפי נחיתה שונים לפרויקטים שלי והכל עובד מושלם.",
      rating: 5
    },
    {
      name: "מיכל אברהם", 
      role: "בעלת סלון יופי",
      content: "הדף שיצרתי עם LeadGrid הביא לי פי 4 יותר הזמנות. הלקוחות אומרים שהאתר נראה מקצועי ואמין. הכי שווה את ההשקעה!",
      rating: 5
    },
    {
      name: "עמית שמעון",
      role: "יועץ עסקי",
      content: "תוך שעה היו לי 3 דפי נחיתה מקצועיים ללקוחות שלי. החיסכון בזמן ובכסף הוא אדיר. הלקוחות שלי מרוצים מהתוצאות.",
      rating: 5
    },
    {
      name: "אלון דוד",
      role: "עורך דין",
      content: "הלקוחות מתקשרים יותר מאז שהחלפתי את האתר הישן בדף נחיתה חדש. הטופס יצירת קשר עובד מעולה ואני מקבל פניות איכותיות יותר.",
      rating: 5
    },
    {
      name: "נועה פרידמן",
      role: "מנכ״לית סטארטאפ",
      content: "בתור סטארטאפ, כל שקל חשוב. LeadGrid חסך לנו עשרות אלפי שקלים על מעצבים ומפתחים. התוצאה מקצועית וממירה מעולה.",
      rating: 5
    },
    {
      name: "טל גרינברג",
      role: "מייסד קורס אונלין",
      content: "הפלטפורמה הכי אינטואיטיבית שיש. אפילו אמא שלי הצליחה ליצור דף נחיתה יפה לעסק שלה. הכל פשוט וברור.",
      rating: 5
    },
    {
      name: "יוסי מלכא",
      role: "רופא שיניים",
      content: "קיבלתי 20 פניות חדשות בשבוע הראשון אחרי שהשקתי את הדף החדש. המערכת יצרה לי דף שמדבר בדיוק לקהל שלי.",
      rating: 5
    },
    {
      name: "רחל כהן",
      role: "פסיכולוגה קלינית",
      content: "הדף שיצרתי מקצועי ומרגיע בדיוק כמו שרציתי. מקבלת הרבה יותר פניות מלקוחות פוטנציאליים והם מגיעים יותר מוכנים לטיפול.",
      rating: 5
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">מה אומרים עלינו</h3>
          <p className="text-xl text-gray-300">יותר מ-10,000 לקוחות מרוצים ברחבי העולם</p>
        </div>
        
        <div className="relative">
          {/* כפתורי ניווט */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="lg"
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center space-x-2 px-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="lg"
              className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          {/* קלפי ביקורות */}
          <div className="grid md:grid-cols-3 gap-6 min-h-[300px]">
            {getCurrentTestimonials().map((testimonial, index) => (
              <Card 
                key={`${currentIndex}-${index}`}
                className="bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-reverse space-x-3 mt-auto">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
