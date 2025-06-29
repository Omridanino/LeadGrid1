
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroTechGradientProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroTechGradient = ({ formData, currentColors, content }: HeroTechGradientProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Tech icons floating */}
      <div className="absolute inset-0">
        {[
          { icon: '💬', delay: 0 },
          { icon: '🎨', delay: 1 },
          { icon: '📊', delay: 2 },
          { icon: '🎯', delay: 0.5 },
          { icon: '⚡', delay: 1.5 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.headline || formData?.businessName || (
                <>
                  הדרך הפשוטה<br />
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">להצפין את הנתונים שלך</span>
                </>
              )}
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {content?.description || `שירות הצפנת נתונים מנוהל במלואו ופלטפורמת הערות לצוותים מכל התעשיות.`}
            </motion.p>
            
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {content?.cta || 'התחל'}
            </button>
          </div>

          {/* Right side - Floating rounded rectangle */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div
              className="w-80 h-48 rounded-3xl border border-white/20 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(147, 51, 234, 0.2) 100%)',
                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
              animate={{
                rotateX: [0, 5, 0],
                rotateY: [0, 10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              {/* Inner elements */}
              <div className="p-8 h-full flex flex-col justify-center items-center space-y-4">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-purple-500/60 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-500/60 rounded-full"></div>
                  <div className="w-8 h-8 bg-cyan-500/60 rounded-full"></div>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    style={{ width: '75%' }}
                    animate={{ width: ['0%', '75%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
