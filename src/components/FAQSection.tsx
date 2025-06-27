
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Zap, Shield, Cpu, Target, User, Clock } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

  const faqs = [
    {
      icon: Clock,
      question: "כמה זמן נדרש לראות תוצאות מדידות?",
      answer: "לקוחותינו מתחילים לראות שיפורים ראשונים תוך 7-14 יום. התוצאות המשמעותיות והמלאות מגיעות תוך 30-60 יום, כאשר המערכת לומדת ומתייעלת על פי נתוני הקהל והתנהגות המשתמשים.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      question: "מה רמת האבטחה והגנת המידע?",
      answer: "אנו מיישמים הצפנה ברמה בנקאית (256-bit SSL) ועומדים בתקני אבטחה בינלאומיים. כל הנתונים מאוחסנים בשרתים מאובטחים בישראל ואנו עומדים בדרישות GDPR ותקנות הגנת הפרטיות הישראליות.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Cpu,
      question: "איך פועלת טכנולוגיית הבינה המלאכותית?",
      answer: "המערכת מנתחת התנהגות משתמשים, מזהה דפוסים ומגמות, ומספקת תובנות אסטרטגיות מבוססות נתונים. האלגוריתמים שלנו מתייעלים באופן אוטומטי ומציעים המלצות לשיפור ביצועים מתמשך.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Target,
      question: "מה ההבדל מפלטפורמות דומות בשוק?",
      answer: "הפלטפורמה שלנו מתמחה בנתוני השוק הישראלי ומספקת ממשק בעברית עם תמיכה מקומית. אנו מציעים אלגוריתמים מותאמים לקהל הישראלי עם דוחות מקצועיים ותובנות עסקיות ממוקדות.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      question: "מה המחיר ומהו החזר ההשקעה הצפוי?",
      answer: "המחיר מותאם לגודל העסק ולהיקף השימוש. רוב הלקוחות רואים החזר השקעה חיובי תוך 3-6 חודשים. נשמח לבנות עבורכם הצעה מותאמת אישית לפי הצרכים העסקיים שלכם.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: User,
      question: "איך מתקיימת התמיכה הטכנית והמקצועית?",
      answer: "אנו מספקים תמיכה מקצועית בשפה העברית בשעות העסק, עם צוות מומחים זמין לכל שאלה טכנית או עסקית. כולל אימון התארגנות, הדרכות מקצועיות וליווי מתמשך להצלחה מיטבית.",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
            שאלות נפוצות ו
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              תשובות מקצועיות
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            מידע מקצועי ומפורט על הפלטפורמה, התהליכים והתוצאות
            <br />
            שתוכלו לצפות מהשירות שלנו
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.08), 
                    rgba(255, 255, 255, 0.02))`,
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    0 20px 40px rgba(0, 0, 0, 0.3)
                  `,
                }}
              >
                <motion.button
                  className="w-full p-8 text-right flex items-center justify-between group-hover:bg-white/5 transition-colors duration-300"
                  onClick={() => toggleItem(index)}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <LiquidGlassIcon IconComponent={faq.icon} gradient={faq.gradient} />
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300"
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openItems.includes(index) ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div 
                        className="px-8 pb-8 pt-0 border-t border-white/10"
                        style={{
                          background: `linear-gradient(135deg, 
                            rgba(255, 255, 255, 0.02), 
                            transparent)`
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 flex-shrink-0" /> {/* Spacer for alignment */}
                          <motion.p 
                            className="text-lg text-gray-300 leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              יש לכם שאלות נוספות?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-md">
              הצוות המקצועי שלנו זמין לכל שאלה או הבהרה נוספת
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
                <LiquidGlassIcon IconComponent={User} gradient="from-white to-white" />
                יצירת קשר מקצועי
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
