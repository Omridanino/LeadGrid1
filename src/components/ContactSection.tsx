
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Camera } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Camera,
      title: "צ'אט ישיר עם מומחה",
      description: "דברו עם הצוות שלנו בזמן אמת וקבלו תשובות מיידיות",
      action: "פתחו צ'אט",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.1
    },
    {
      icon: Camera,
      title: "מייל מהיר ואישי",
      description: "כתבו לנו ותקבלו תשובה מהירה ומפורטת",
      action: "info@leadgrid.co.il",
      gradient: "from-blue-500 to-cyan-600",
      delay: 0.2
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
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
            בואו 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}נתחיל
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            מוכנים לראות איך LEADGRID יכול לעזור לעסק שלכם?
            <br />
            בואו נדבר ונבין יחד מה הפתרון הכי מתאים לכם
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: method.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5
              }}
              style={{ perspective: "1000px" }}
            >
              <div 
                className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden h-full cursor-pointer"
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
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${method.gradient}`}
                />

                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${method.gradient} group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    boxShadow: `
                      0 0 30px rgba(107, 115, 255, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                  }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {method.title}
                </h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {method.description}
                </p>

                <div 
                  className={`inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${method.gradient} group-hover:scale-105 transition-transform duration-300`}
                  style={{
                    boxShadow: '0 0 20px rgba(107, 115, 255, 0.3)'
                  }}
                >
                  {method.action}
                </div>

                {/* 3D Effect Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-300" />
                
                {/* Glow Effects */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg bg-gradient-to-r from-blue-400 to-purple-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-block p-12 rounded-3xl backdrop-blur-xl border border-white/20 max-w-2xl"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.05))`,
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 30px 60px rgba(0, 0, 0, 0.5)
              `,
            }}
            whileHover={{ scale: 1.02, y: -10 }}
          >
            <h3 className="text-4xl font-black text-white mb-6">
              מוכנים לשינוי?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              בואו נדבר על איך LEADGRID יכול לשפר את התוצאות של העסק שלכם.
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                התחילו עם שיחת ייעוץ חינמית
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="px-12 py-5 rounded-xl font-bold text-xl text-white overflow-hidden relative group"
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
                  <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  בואו נתחיל עכשיו
                </span>
              </motion.button>

              <motion.button
                className="px-10 py-5 rounded-xl font-bold text-xl text-white border-2 border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  שלחו מייל
                </span>
              </motion.button>
            </div>

            {/* Office Info */}
            <motion.div
              className="mt-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>תל אביב, ישראל | זמינים בשעות העבודה</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
