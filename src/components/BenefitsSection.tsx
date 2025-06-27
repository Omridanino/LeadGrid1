
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target, Cpu, Rocket } from "lucide-react";

const BenefitsSection = () => {
  // Liquid Glass Icon Component
  const LiquidGlassIcon = ({ IconComponent, gradient }: { IconComponent: any, gradient: string }) => (
    <div className="relative group">
      <div 
        className={`w-16 h-16 rounded-xl flex items-center justify-center relative overflow-hidden`}
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
          className="w-8 h-8 text-white relative z-10"
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "עלייה מדידה בהמרות של 400%",
      description: "שיפור דרמטי בשיעורי ההמרה תוך 30 יום הראשונים על בסיס נתונים מוכחים",
      stats: "+400%",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Users,
      title: "גישה למיליון לקוחות פוטנציאליים",
      description: "מערכת זיהוי וטרגוט אוטומטית המגיעה למיליוני לקוחות פוטנציאליים מדי חודש",
      stats: "1M+",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: Zap,
      title: "זמן תגובה מהיר של 0.3 שניות",
      description: "מהירות עיבוד וטעינה המובילה בשוק הישראלי והאזורי עם תקן גלובלי",
      stats: "0.3s",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Target,
      title: "דיוק טרגוט מתקדם של 96%",
      description: "מיקוד מדויק לקהל היעד הנכון עם טכנולוגיית בינה מלאכותית מתקדמת",
      stats: "96%",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: Cpu,
      title: "למידה וייעול אוטונומיים",
      description: "מערכת בינה מלאכותית הלומדת ומתייעלת בצורה עצמאית ורציפה",
      stats: "24/7",
      color: "from-indigo-400 to-blue-600"
    },
    {
      icon: Rocket,
      title: "החזר השקעה מוכח של 1,200%",
      description: "החזר השקעה מדיד ומוכח הגורם לשינוי משמעותי בתוצאות העסקיות",
      stats: "1,200%",
      color: "from-red-400 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-4"
            style={{
              textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
              letterSpacing: '-0.02em'
            }}
          >
            ביצועים מוכחים ו
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              תוצאות מדידות
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            נתונים מוכחים ואמיתיים מלקוחות שחווים טרנספורמציה דיגיטלית משמעותית
            <br className="hidden sm:block" />
            עם תוצאות עסקיות מדידות וברורות
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5
              }}
              style={{ perspective: "1000px" }}
            >
              <div 
                className="relative p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden h-full"
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
                {/* Animated Background */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${benefit.color}`}
                />

                {/* Stats Display */}
                <div className="text-center sm:text-right mb-4">
                  <div 
                    className={`inline-block px-3 sm:px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${benefit.color} text-white`}
                    style={{
                      boxShadow: '0 0 20px rgba(107, 115, 255, 0.3)'
                    }}
                  >
                    {benefit.stats}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
                  <LiquidGlassIcon IconComponent={benefit.icon} gradient={benefit.color} />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 text-center sm:text-right">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-center sm:text-right">
                  {benefit.description}
                </p>

                {/* 3D Effect Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-300" />
                
                {/* Glow Effects */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg bg-gradient-to-r from-blue-400 to-purple-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-block p-6 sm:p-8 rounded-2xl backdrop-blur-xl border border-white/20 max-w-lg mx-auto"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05))`,
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 20px 40px rgba(0, 0, 0, 0.4)
              `,
            }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              מוכנים לשיפור ביצועים?
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">
              הצטרפו לעסקים המובילים החווים צמיחה משמעותית ומדידה
            </p>
            <motion.button
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white overflow-hidden relative group w-full sm:w-auto"
              style={{
                background: `linear-gradient(135deg, 
                  #6B73FF 0%, 
                  #9C40FF 50%, 
                  #FF6B9D 100%)`,
                boxShadow: `
                  0 0 30px rgba(107, 115, 255, 0.4),
                  0 15px 35px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const heroSection = document.getElementById('hero');
                heroSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                <LiquidGlassIcon IconComponent={Rocket} gradient="from-white to-white" />
                התחל היום
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
