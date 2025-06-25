
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "דנה כהן",
      role: "מנהלת שיווק",
      company: "חברת טכנולוגיה מתקדמת",
      content: "LeadGrid פשוט הפך את העסק שלי! תוך שבוע יצרתי דף נחיתה שהגדיל את ההמרות ב-340%. הכלים החכמים והעיצוב המקצועי עזרו לי להגיע ללקוחות שלא חלמתי עליהם.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
      revenue: "₪47,000",
      metric: "הכנסה חודשית"
    },
    {
      name: "אמיר לוי", 
      role: "בעל סטודיו עיצוב",
      company: "עיצוב ואמנות בע״מ",
      content: "בתור מעצב מקצועי, אני מאוד בררן. LeadGrid הצליח להפתיע אותי עם תבניות מדהימות וגמישות שלא ראיתי בשום מקום. הלקוחות שלי פשוט מתפעלים מהדפים שאני יוצר עבורהם.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      revenue: "85%",
      metric: "עלייה בלקוחות"
    },
    {
      name: "רחל אברהם",
      role: "יועצת עסקית",
      company: "ייעוץ אסטרטגי",
      content: "לפני LeadGrid בזבזתי אלפי שקלים על מפתחים ועדיין לא קיבלתי מה שרציתי. עכשיו אני יוצרת דפי נחיתה מקצועיים בעצמי תוך דקות ומחסכת זמן וכסף בטירוף.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      revenue: "₪25,000",
      metric: "חיסכון שנתי"
    },
    {
      name: "יוסי כהן",
      role: "מנכ״ל",
      company: "חברת ייעוץ עסקי",
      content: "התוצאות מדברות בעד עצמן - פי 5 יותר לידים תוך חודש! הדפים נטענים מהר, נראים מדהימים ומובילים להמרות גבוהות. זה בדיוק מה שחיפשתי כל השנים.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      revenue: "500%",
      metric: "עלייה בלידים"
    },
    {
      name: "מיכל רוזן",
      role: "מנהלת פרויקטים",
      company: "חברת פינטק",
      content: "הממשק של LeadGrid כל כך אינטואיטיבי שגם הצוות הלא-טכני שלנו יכול ליצור דפים מרהיבים. זה שינה לחלוטין את איך שאנחנו עובדים עם דפי נחיתה בחברה.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      revenue: "90%",
      metric: "חיסכון בזמן"
    },
    {
      name: "עידן שמואלי",
      role: "מפתח ואנטרפרנר",
      company: "סטארטאפ טכנולוגי",
      content: "כמפתח, אני מעריך את איכות הקוד שLeadGrid מייצר. זה נקי, מהיר, ומותאם לSEO. זה חוסך לי שעות עבודה ונותן תוצאות שפשוט מטורפות.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      revenue: "₪65K",
      metric: "הכנסה חודשית"
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
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-6 py-3 rounded-full border border-blue-500/20 mb-6">
            <Quote className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">מה הלקוחות שלנו אומרים</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              סיפורי הצלחה
            </span>
            <br />
            <span className="text-white">שמדברים בעד עצמם</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            אלפי עסקים כבר משתמשים ב-LeadGrid ומגדילים את הרווחים שלהם פי כמה
          </p>
        </div>

        <div className="relative">
          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
              disabled={currentIndex === 0}
            >
              <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </Button>
            
            {/* Enhanced Pagination */}
            <div className="flex gap-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerPage)}
                  className={`transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === index
                      ? 'w-12 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                      : 'w-4 h-4 bg-gray-600 hover:bg-gray-500 rounded-full'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
              disabled={currentIndex + itemsPerPage >= testimonials.length}
            >
              <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 transition-all duration-500">
            {currentTestimonials.map((testimonial, index) => (
              <Card key={currentIndex + index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/30 group-hover:border-blue-400 transition-all duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-blue-400 font-medium text-sm">{testimonial.role}</p>
                        <p className="text-gray-400 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-blue-400/30 mb-3" />
                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Metrics */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-xl border border-blue-600/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white mb-1">{testimonial.revenue}</div>
                        <div className="text-blue-300 text-xs">{testimonial.metric}</div>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">רוצה להצטרף אליהם?</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              התחל עכשיו בחינם
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
