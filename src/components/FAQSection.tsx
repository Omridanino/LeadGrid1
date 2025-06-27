
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Zap, Shield, Cpu, Target, Camera } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      icon: Camera,
      question: "כמה זמן לוקח לראות תוצאות?",
      answer: "בדרך כלל לקוחות מתחילים לראות שינויים ראשונים תוך שבוע-שבועיים. התוצאות המלאות מגיעות תוך חודש עד חודשיים, כשהמערכת לומדת את הקהל שלכם. התהליך לוקח זמן - זה לא קסם, אבל כשזה עובד, התוצאות מדברות בעד עצמן.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Camera,
      question: "עד כמה המערכת מאובטחת?",
      answer: "אנחנו משתמשים בהצפנה ברמה בנקאית ועובדים לפי תקנים מקובלים בתחום. כל הנתונים שלכם מאוחסנים בבטחה ואנחנו עומדים בתקנות הפרטיות הנדרשות. האבטחה חשובה לנו כמו שחשובה לכם.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Camera,
      question: "איך הבינה המלאכותית עובדת?",
      answer: "המערכת מנתחת את התנהגות המשתמשים באתר שלכם - מה עובד, מה לא, איפה אנשים יוצאים מהאתר. על סמך הנתונים האלה היא מציעה שיפורים ובודקת איזה שינויים משפרים את התוצאות. זה כמו יועץ שיווק שעובד ללא הפסקה, אבל יותר מהיר.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Camera,
      question: "מה ההבדל מפלטפורמות אחרות?",
      answer: "רוב הכלים בשוק נותנים לכם דשבורד עם המון נתונים וזה הכל. אנחנו הולכים צעד קדימה ומציעים המלצות קונקרטיות לשיפור, בודקים אותן, ומראים מה באמת עובד. זה יותר מסתם כלי - זה שותף שעוזר לכם להבין מה לעשות עם כל הדאטה הזה.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Camera,
      question: "כמה זה עולה ומה ההחזר על ההשקעה?",
      answer: "המחיר תלוי בגודל העסק ובהיקף השימוש. רוב הלקוחות שלנו רואים החזר על ההשקעה תוך מספר חודשים, אבל זה תלוי בהרבה גורמים. בואו נדבר ונבין יחד מה מתאים לכם ואיך נוכל לעזור לכם להגיע לתוצאות שאתם מחפשים.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Camera,
      question: "יש תמיכה ושירות לקוחות?",
      answer: "כן, יש לנו צוות תמיכה זמין בשעות העבודה וגם תמיכה טכנית כשצריך. אנחנו לא זמינים 24/7 (גם לנו יש חיים), אבל אנחנו כאן כשאתם צריכים עזרה. המטרה שלנו היא שתצליחו עם המערכת, אז אנחנו עושים כל מה שצריך בשביל זה.",
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
            שאלות 
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}נפוצות
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            התשובות לשאלות שהכי הרבה אנשים שואלים אותנו
            <br />
            על המערכת, התהליך והתוצאות שאפשר לצפות
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
                    <div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.gradient} flex items-center justify-center`}
                      style={{
                        boxShadow: '0 0 20px rgba(107, 115, 255, 0.3)'
                      }}
                    >
                      <faq.icon className="w-6 h-6 text-white" />
                    </div>
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
              עדיין יש שאלות?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-md">
              הצוות שלנו כאן בשבילכם לכל שאלה או הבהרה
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
                <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                בואו נדבר
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
