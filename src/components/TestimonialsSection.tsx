
import { motion } from "framer-motion";
import { Star, Quote, Zap, TrendingUp, Users, Camera } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "דן כהן",
      role: "מנכ'ל, TechFlow",
      company: "סטארטאפ B2B",
      content: "אחרי שבועיים עם LEADGRID ראיתי שיפור משמעותי בהמרות. המערכת באמת עוזרת לזהות את הלקוחות הפוטנציאליים הטובים יותר.",
      rating: 5,
      results: "שיפור בהמרות",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "שרה לוי",
      role: "מנהלת שיווק",
      company: "E-commerce Enterprise",
      content: "התחלתי עם ספקות, אבל התוצאות מדברות בעד עצמן. המערכת חסכה לי הרבה זמן בניתוח נתונים ועזרה לי להבין טוב יותר את הלקוחות.",
      rating: 5,
      results: "חסכון בזמן",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "מיכאל אברמוב",
      role: "מייסד",
      company: "Digital Agency",
      content: "כלי מקצועי שעוזר לי להציג ללקוחות שלי תוצאות ברורות ומדידות. הממשק נוח לעבודה והתמיכה מהירה ואמינה.",
      rating: 4,
      results: "תוצאות מדידות",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "נועה ברקוביץ'",
      role: "יזמת דיגיטלית",
      company: "SaaS Startup",
      content: "המערכת עזרה לי להבין איך להגיע טוב יותר לקהל שלי. יש עוד מה לשפר אבל בהחלט רואה התקדמות בביצועים של הקמפיינים.",
      rating: 4,
      results: "שיפור בקמפיינים",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
              letterSpacing: '-0.02em'
            }}
          >
            מה אומרים 
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              {" "}הלקוחות
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            חוות דעת אמיתיות מלקוחות שעובדים איתנו
            <br />
            ורואים שיפור מדיד בתוצאות העסקיות שלהם
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateX: 2,
                rotateY: 2
              }}
              style={{ perspective: "1000px" }}
            >
              <div 
                className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden h-full"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.08), 
                    rgba(255, 255, 255, 0.02))`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    0 25px 50px rgba(0, 0, 0, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.05)
                  `,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Gradient Overlay */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${testimonial.gradient}`}
                />

                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote 
                    className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" 
                  />
                  <div 
                    className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${testimonial.gradient}`}
                    style={{
                      boxShadow: '0 0 20px rgba(107, 115, 255, 0.3)'
                    }}
                  >
                    {testimonial.results}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mr-4`}
                    style={{
                      boxShadow: '0 0 20px rgba(107, 115, 255, 0.3)'
                    }}
                  >
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-300" />
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg bg-gradient-to-r from-blue-400 to-purple-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { icon: TrendingUp, number: "120+", label: "לקוחות פעילים", color: "from-green-400 to-emerald-600" },
            { icon: Zap, number: "87%", label: "שיעור שביעות רצון", color: "from-blue-400 to-cyan-600" },
            { icon: Users, number: "2.5K", label: "לידים חודשיים", color: "from-purple-400 to-pink-600" },
            { icon: Star, number: "4.3", label: "דירוג ממוצע", color: "from-yellow-400 to-orange-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div 
                className="p-6 rounded-xl backdrop-blur-xl border border-white/10"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.05), 
                    rgba(255, 255, 255, 0.02))`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    0 15px 30px rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                <div 
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    boxShadow: '0 0 20px rgba(107, 115, 255, 0.3)'
                  }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
