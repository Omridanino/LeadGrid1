
import { Zap, Eye, BarChart, Smartphone, Globe, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ModernFeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  const features = [
    {
      icon: Eye,
      title: "עיצוב שקורע עיניים",
      description: "תבניות עיצוב מתקדמות שגורמות ללקוחות להישאר ולקנות - לא רק להסתכל",
      gradient: "from-blue-400/20 to-cyan-400/20",
      glowColor: "rgba(14, 165, 233, 0.4)",
    },
    {
      icon: Zap,
      title: "מהירות אור",
      description: "דפים שנטענים כל כך מהר שגוגל יתאהב בהם (וגם הלקוחות שלכם)",
      gradient: "from-emerald-400/20 to-teal-400/20",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      icon: BarChart,
      title: "המרות שמשגעות",
      description: "נתונים בזמן אמת שמראים בדיוק איך הדף שלכם הופך לכסף",
      gradient: "from-purple-400/20 to-violet-400/20",
      glowColor: "rgba(139, 92, 246, 0.4)",
    },
    {
      icon: Smartphone,
      title: "רספונסיביות מושלמת",
      description: "נראה מדהים בכל מכשיר - מהטלפון הקטן ביותר ועד למסך הגדול ביותר",
      gradient: "from-rose-400/20 to-pink-400/20",
      glowColor: "rgba(244, 63, 94, 0.4)",
    },
    {
      icon: Globe,
      title: "נוכחות עולמית",
      description: "אתרים שנטענים מהר בכל מקום בעולם עם CDN מתקדם",
      gradient: "from-amber-400/20 to-orange-400/20",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
    {
      icon: Shield,
      title: "אבטחה מקסימלית",
      description: "הגנה מתקדמת על הנתונים שלכם ושל הלקוחות - אפס פשרות",
      gradient: "from-indigo-400/20 to-blue-400/20",
      glowColor: "rgba(99, 102, 241, 0.4)",
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-32 px-4 bg-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent" />
        
        {/* Floating Glass Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute backdrop-blur-md border border-white/5 rounded-full"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.05), 
                rgba(255, 255, 255, 0.02))`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full mb-8 shadow-xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05))`,
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 8px 25px rgba(0, 0, 0, 0.3)
              `,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 font-medium text-sm">התכונות המתקדמות שלנו</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-8 text-white"
            style={{
              textShadow: `
                0 0 20px rgba(14, 165, 233, 0.3),
                0 0 40px rgba(14, 165, 233, 0.2)
              `,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            כל מה שאתם צריכות
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              ועוד הרבה יותר
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            טכנולוגיה מתקדמת שמאפשרת לכם ליצור דפי נחיתה ברמה מקצועית
            <br />
            תוך דקות ספורות, ללא ידע טכני מוקדם
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ y: cardsY }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/30 transition-all duration-500 shadow-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.08), 
                  rgba(255, 255, 255, 0.03))`,
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.15),
                  0 8px 32px rgba(0, 0, 0, 0.4)
                `,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(circle at center, ${feature.glowColor} 0%, transparent 70%)`,
                }}
              />
              
              {/* Top Gradient Line */}
              <div 
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`}
              />

              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-2xl p-4 mb-6 backdrop-blur-md border border-white/20 shadow-xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient})`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 4px 16px rgba(0, 0, 0, 0.3)
                  `,
                }}
                whileHover={{ scale: 1.1, rotateY: 15 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-full h-full text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div 
            className="backdrop-blur-xl border border-white/20 p-12 rounded-3xl inline-block shadow-2xl max-w-3xl relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05))`,
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 20px 40px rgba(0, 0, 0, 0.4)
              `,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
            <h3 className="text-3xl font-bold text-white mb-6">
              מוכנות לראות את הקסם בפעולה?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              בואו נתחיל לבנות את הדף המושלם שלכם עכשיו
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-2xl shadow-2xl relative overflow-hidden group"
                style={{
                  boxShadow: `
                    0 0 20px rgba(14, 165, 233, 0.4),
                    0 8px 32px rgba(0, 0, 0, 0.3)
                  `,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">התחילו עכשיו בחינם</span>
              </motion.button>
              <motion.button 
                className="px-10 py-4 backdrop-blur-xl border border-white/30 text-white font-semibold rounded-2xl hover:border-white/50 transition-all duration-300 shadow-xl"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.1), 
                    rgba(255, 255, 255, 0.05))`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 8px 25px rgba(0, 0, 0, 0.3)
                  `,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                ראו דוגמאות
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
