import { motion } from "framer-motion";
import { Star, Quote, Zap, TrendingUp, Users, User } from "lucide-react";
import GlassBadge from "./ui/glass-badge";

const TestimonialsSection = () => {
  // Liquid Glass Icon Component
  const LiquidGlassIcon = ({ IconComponent, gradient }: { IconComponent: any, gradient: string }) => (
    <div className="relative group">
      <div 
        className={`w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            rgba(255, 255, 255, 0.25) 100%)`,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1),
            0 10px 30px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(107, 115, 255, 0.2)
          `,
        }}
      >
        {/* Reflection effect */}
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.4) 0%,
              transparent 30%,
              transparent 70%,
              rgba(255, 255, 255, 0.1) 100%)`,
          }}
        />
        
        {/* Animated shine effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shine-animation"
          style={{
            background: `linear-gradient(45deg, 
              transparent 30%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 70%)`,
            transform: 'translateX(-100%)',
          }}
        />
        
        <IconComponent 
          className="w-6 h-6 text-white relative z-10"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(107, 115, 255, 0.5))',
          }}
        />
        
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <style>{`
        .shine-animation {
          animation: shine 2s ease-in-out infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );

  const testimonials = [
    {
      name: "דן כהן",
      role: "מנכ'ל ומייסד",
      company: "TechFlow Solutions",
      content: "תוך שבועיים ראיתי שיפור משמעותי במדדי ההמרה. המערכת מספקת תובנות עסקיות ברורות ומסייעת לזהות הזדמנויות בצורה מדויקת.",
      rating: 5,
      results: "שיפור מדיד בהמרות",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "שרה לוי",
      role: "סמנכ'לית שיווק",
      company: "E-commerce Enterprise",
      content: "הכלי חסך זמן רב בניתוח נתונים ומספק המלצות אסטרטגיות מבוססות נתונים. התוצאות מדידות והתמיכה מצוינת.",
      rating: 5,
      results: "יעילות תפעולית מוגברת",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "מיכאל אברמוב",
      role: "מייסד ובעלים",
      company: "Digital Marketing Agency",
      content: "פלטפורמה מקצועית המאפשרת להציג ללקוחות תוצאות ברורות ומדידות. הממשק אינטואיטיבי והתמיכה הטכנית מהירה.",
      rating: 4,
      results: "דוחות מקצועיים ומדידים",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "נועה ברקוביץ'",
      role: "יזמת דיגיטלית",
      company: "SaaS Innovation Hub",
      content: "המערכת סייעה להבין טוב יותר את קהל היעד ולשפר את האסטרטגיה השיווקית. הביצועים השתפרו והתהליכים התייעלו משמעותית.",
      rating: 4,
      results: "אופטימיזציה אסטרטגית",
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
            המלצות מ
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              לקוחות מובילים
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            עדויות מקצועיות מעסקים מובילים החווים שיפור משמעותי בביצועים
            <br />
            עם תוצאות מדידות וערך עסקי ברור
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

                {/* Quote Icon and Results Badge */}
                <div className="flex justify-between items-start mb-6">
                  <Quote 
                    className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" 
                  />
                  <GlassBadge variant="info" size="sm">
                    {testimonial.results}
                  </GlassBadge>
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
                  <LiquidGlassIcon IconComponent={User} gradient={testimonial.gradient} />
                  <div className="mr-4">
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
            { icon: TrendingUp, number: "120+", label: "לקוחות פעילים", color: "success" },
            { icon: Zap, number: "96%", label: "שביעות רצון", color: "info" },
            { icon: Users, number: "2.5K", label: "לידים חודשיים", color: "primary" },
            { icon: Star, number: "4.8", label: "דירוג ממוצע", color: "warning" }
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
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <LiquidGlassIcon IconComponent={stat.icon} gradient={`from-${stat.color === 'success' ? 'green' : stat.color === 'info' ? 'blue' : stat.color === 'warning' ? 'yellow' : 'purple'}-400 to-${stat.color === 'success' ? 'emerald' : stat.color === 'info' ? 'cyan' : stat.color === 'warning' ? 'orange' : 'pink'}-600`} />
                </div>
                <GlassBadge variant={stat.color as any} size="lg" className="mb-2">
                  {stat.number}
                </GlassBadge>
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
