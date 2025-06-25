
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "דנה כהן",
      role: "מנהלת שיווק, חברת טכנולוגיה",
      content: "LeadGrid שינה לנו את המשחק! תוך שבוע יצרנו דף נחיתה שהגדיל את ההמרות ב-340%. הכלים החכמים והעיצוב המקצועי עזרו לנו להגיע ללקוחות חדשים שלא חלמנו עליהם.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "אמיר לוי", 
      role: "בעל עסק, סטודיו עיצוב",
      content: "בתור מעצב, אני מאוד בררן בנושא עיצוב. LeadGrid הצליח להפתיע אותי עם תבניות מרהיבות וגמישות מדהימה. הלקוחות שלי מתפעלים מהדפים שאני יוצר עבורם.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "רחל אברהם",
      role: "יועצת עסקית, פרילנסר",
      content: "לפני LeadGrid בזבזתי אלפי שקלים על מפתחים ועדיין לא קיבלתי מה שרציתי. עכשיו אני יוצרת דפי נחיתה מקצועיים בעצמי תוך דקות ומחסכת המון זמן וכסף.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "יוסי כהן",
      role: "מנכ״ל, חברת ייעוץ",
      content: "התוצאות מדברות בעד עצמן - 500% עלייה בלידים תוך חודש. הדפים נטענים מהר, נראים מדהימים ומובילים להמרות גבוהות. זה בדיוק מה שחיפשתי.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "מיכל רוזן",
      role: "מנהלת פרויקטים, חברת פינטק",
      content: "הממשק של LeadGrid כל כך אינטואיטיבי שגם הצוות הלא-טכני שלנו יכול ליצור דפים מרהיבים. זה שינה את איך שאנחנו עובדים עם דפי נחיתה בחברה.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "עידן שמואלי",
      role: "מפתח, סטארטאפ",
      content: "כמפתח, אני מעריך את איכות הקוד שLeadGrid מייצר. זה נקי, מהיר, ומותאם לSEO. זה חוסך לי שעות עבודה ונותן תוצאות מדהימות.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - itemsPerPage) : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            אלפי עסקים כבר משתמשים ב-LeadGrid ומגדילים את המכירות שלהם
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-reverse space-x-4 mb-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-gray-600 hover:border-blue-500 hover:bg-blue-500/10"
              disabled={currentIndex === 0}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            
            {/* Pagination Dots */}
            <div className="flex space-x-reverse space-x-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? 'bg-blue-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="rounded-full border-gray-600 hover:border-blue-500 hover:bg-blue-500/10"
              disabled={currentIndex + itemsPerPage >= testimonials.length}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 transition-all duration-500">
            {currentTestimonials.map((testimonial, index) => (
              <Card key={currentIndex + index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full ml-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
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
