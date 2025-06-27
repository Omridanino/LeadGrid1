
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target, Brain, Rocket } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "400% עלייה בהמרות",
      description: "שיפור דרמטי בשיעורי ההמרה תוך 30 יום ראשונים",
      stats: "+400%",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Users,
      title: "מיליון לקוחות פוטנציאליים",
      description: "מערכת שמזהה ומטרגטת מיליוני לקוחות פוטנציאליים",
      stats: "1M+",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: Zap,
      title: "זמן תגובה 0.3 שניות",
      description: "מהירות עיבוד וטעינה שמובילה בשוק העולמי",
      stats: "0.3s",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Target,
      title: "דיוק טרגוט 96%",
      description: "מיקוד מדויק ללקוחות הנכונים עם AI מתקדם",
      stats: "96%",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: Brain,
      title: "למידה אוטונומית",
      description: "מערכת שלומדת ומשתפרת כל שנייה ללא התערבות",
      stats: "24/7",
      color: "from-indigo-400 to-blue-600"
    },
    {
      icon: Rocket,
      title: "ROI של 1,200%",
      description: "החזר השקעה שמשנה כללי משחק בתעשייה",
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
            ביצועים 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}שובבים
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            נתונים אמיתיים מלקוחות שכבר חוו את הטרנספורמציה הדיגיטלית
            <br />
            וזוכים בתוצאות שמדברות בעד עצמן
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                {/* Animated Background */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${benefit.color}`}
                />

                {/* Stats Display */}
                <div className="text-right mb-4">
                  <div 
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${benefit.color} text-white`}
                    style={{
                      boxShadow: '0 0 20px rgba(107, 115, 255, 0.3)'
                    }}
                  >
                    {benefit.stats}
                  </div>
                </div>

                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${benefit.color} relative group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    boxShadow: `
                      0 0 30px rgba(107, 115, 255, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                  }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-block p-8 rounded-2xl backdrop-blur-xl border border-white/20"
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
            <h3 className="text-3xl font-bold text-white mb-4">
              מוכנים לשינוי?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-md">
              הצטרפו לאלפי עסקים שכבר חווים את המהפכה הדיגיטלית
            </p>
            <motion.button
              className="px-10 py-4 rounded-xl font-bold text-lg text-white overflow-hidden relative group"
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
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                בואו נתחיל
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
