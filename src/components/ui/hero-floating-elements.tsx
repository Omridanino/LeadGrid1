
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroFloatingElementsProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroFloatingElements = ({ formData, currentColors, content }: HeroFloatingElementsProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="flex h-screen">
        {/* Left side - Content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {content?.headline || formData?.businessName || (
                <>
                  בניית מוצרים דיגיטליים<br />
                  ו<span className="text-blue-400">מותגים</span>
                </>
              )}
            </h1>
            
            <motion.p 
              className="text-lg leading-relaxed mb-8 text-gray-300 max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.description || `כאן ב-FlowTech אנחנו מתמקדים בשווקים שבהם טכנולוgiה, חדשנות והון יכולים לפתוח ערך לטווח ארוך ולהניע צמיחה כלכלית`}
            </motion.p>
            
            <motion.div 
              className="flex gap-4 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <input 
                  type="email" 
                  placeholder="הכנס את המייל שלך" 
                  className="bg-transparent text-white placeholder-gray-400 outline-none"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                {content?.cta || 'נסה בחינם'}
              </button>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              הרשמה מיידית. לא נדרש כרטיס אשראי. <span className="text-blue-400">תנאי שירות</span> ו<span className="text-blue-400">מדיניות פרטיות</span>.
            </motion.p>
          </div>
        </div>

        {/* Right side - Floating 3D elements */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Main floating elements */}
          <motion.div
            className="absolute"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-12"></div>
          </motion.div>
          
          <motion.div
            className="absolute top-20 right-10"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-xl transform -rotate-12"></div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-32 left-10"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, 0],
            }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-2xl transform rotate-45"></div>
          </motion.div>
          
          {/* Additional small elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-blue-400/60 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          <div className="text-center text-blue-400 font-bold text-6xl">+</div>
        </div>
      </div>
    </section>
  );
};
