
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "איתי כהן",
      role: "מנכ״ל, TechStart",
      content: "LeadGrid שינה לי את המשחק לגמרי. תוך 15 דקות היה לי דף נחיתה מקצועי שהגדיל לי את ההמרות ב-300%!",
      rating: 5
    },
    {
      name: "רונית לוי",
      role: "מנהלת שיווק, GrowFast",
      content: "סוף סוף פלטפורמה שמבינה עברית ו-RTL! העיצובים מדהימים והתוצאות מדברות בעד עצמן.",
      rating: 5
    },
    {
      name: "דני ברק",
      role: "יזם דיגיטלי",
      content: "המערכת הכי חכמה שראיתי. הצ'אטבוט עוזר בכל שלב והתמיכה ברמה הכי גבוהה.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, TechCorp",
      content: "Amazing platform! Created a professional landing page in minutes. The conversion rate increased by 250%.",
      rating: 5
    },
    {
      name: "מיכל אברהם",
      role: "בעלת עסק, BeautyLab",
      content: "הדף שיצרתי עם LeadGrid הביא לי פי 4 יותר לקוחות חדשים. פשוט מדהים!",
      rating: 5
    },
    {
      name: "John Smith",
      role: "CEO, StartupX",
      content: "Best landing page builder I've used. The AI creates exactly what I need every time.",
      rating: 5
    },
    {
      name: "עמית שמעון",
      role: "מנהל פרויקטים, DevCo",
      content: "תוך שעה היו לי 3 דפי נחיתה מקצועיים. החיסכון בזמן ובכסף הוא אדיר.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Digital Marketer, EcomPlus",
      content: "The analytics and tracking features are incredible. I can see exactly how my pages perform.",
      rating: 5
    },
    {
      name: "אלון דוד",
      role: "יועץ עסקי",
      content: "הלקוחות שלי מרוצים מהדפים שאני יוצר להם. זה נותן לי יתרון עצום בשוק.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Freelance Designer",
      content: "Perfect for creating client pages quickly. The quality is always professional.",
      rating: 5
    },
    {
      name: "נועה פרידמן",
      role: "מנכ״לית, FashionTech",
      content: "המערכת חסכה לי אלפי שקלים על מעצבים. התוצאות טובות יותר ממה שציפיתי.",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "Sales Manager, B2B Solutions",
      content: "Our lead generation increased by 400% after using LeadGrid. Simply incredible results.",
      rating: 5
    },
    {
      name: "טל גרינברג",
      role: "מייסד, EduTech",
      content: "הפלטפורמה הכי אינטואיטיבית שיש. אפילו הסבא שלי יכול ליצור דף נחיתה.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "E-commerce Owner",
      content: "The mobile optimization is perfect. My customers love how fast and smooth everything loads.",
      rating: 5
    },
    {
      name: "יוסי מלכא",
      role: "בעל משרד עורכי דין",
      content: "קיבלתי 20 פניות חדשות בשבוע הראשון. זה שינה לי את העסק.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "App Developer",
      content: "Great for launching new products. The landing pages convert really well.",
      rating: 5
    },
    {
      name: "רחל כהן",
      role: "פסיכולוגה קלינית",
      content: "הדף שיצרתי מקצועי ומרגיע. מקבלת הרבה יותר פניות מלקוחות.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Consultant",
      content: "The WordPress integration is seamless. Everything just works perfectly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 text-white">מה אומרים עלינו</h3>
          <p className="text-xl text-gray-300">יותר מ-10,000 לקוחות מרוצים ברחבי העולם</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-reverse space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
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
