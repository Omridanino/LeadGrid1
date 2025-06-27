import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Shield, Cpu, Rocket } from "lucide-react";

const ModernFeaturesSection = () => {
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

  const features = [
    {
      icon: Cpu,
      title: "בינה מלאכותית מתקדמת",
      description: "אלגוריתמים חכמים לאופטימיזציה אוטומטית של ביצועים והמרות",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: Target,
      title: "טיקטיקס שיווקי מדויק",
      description: "ניתוח התנהגות משתמשים וזיהוי הזדמנויות המרה מיטביות",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "אופטימיזציה רציפה",
      description: "שיפור ביצועים מתמשך מבוסס נתונים ולמידת מכונה",
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: Shield,
      title: "אבטחה ברמה אנטרפרייז",
      description: "הגנה מקיפה עם פרוטוקולי אבטחה מתקדמים ושמירת נתונים",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Zap,
      title: "ביצועים מעולים",
      description: "זמני טעינה מהירים ותגובתיות מיידית בכל מכשיר",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: Rocket,
      title: "סקילביליות מתקדמת",
      description: "פתרון שגדל עם העסק מ-1K ל-10M משתמשים",
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            פתרונות טכנולוגיים
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {" "}מתקדמים
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            פלטפורמה מבוססת בינה מלאכותית עם יכולות ייחודיות 
            המותאמות לעסקים המחפשים מצוינות דיגיטלית
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div 
                className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.05), 
                    rgba(255, 255, 255, 0.02))`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    0 20px 40px rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                />

                {/* Liquid Glass Icon */}
                <div className="mb-6">
                  <LiquidGlassIcon IconComponent={feature.icon} gradient={feature.gradient} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-colors duration-300" />
                
                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="relative group px-12 py-4 rounded-xl font-bold text-xl text-white overflow-hidden"
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
              <LiquidGlassIcon IconComponent={Rocket} gradient="from-white to-white" />
              קבל גישה מתקדמת
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
