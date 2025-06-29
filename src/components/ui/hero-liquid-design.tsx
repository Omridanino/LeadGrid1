
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroLiquidDesignProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroLiquidDesign = ({ formData, currentColors, content }: HeroLiquidDesignProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 to-purple-950">
      {/* Liquid background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/40 to-pink-600/40 rounded-full"
          style={{ filter: 'blur(60px)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-600/40 to-cyan-600/40 rounded-full"
          style={{ filter: 'blur(40px)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-300 text-sm">העוזר העיצוב המופעל בבינה מלאכותית שלך</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">העוזר העיצוב</span><br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">המופעל בבינה מלאכותית</span><br />
            <span className="text-white">שלך</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {content?.description || `שחרר את הפוטנציאל היצירתי שלך. צור, שפר וקבל השראה לעיצובים שלך עם בינה מלאכותית מתקדמת`}
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              {content?.cta || 'התחל'}
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
              צפה בתבניות
            </button>
          </motion.div>
          
          {/* Floating liquid orb */}
          <motion.div
            className="absolute right-10 top-1/2 -translate-y-1/2 w-40 h-40"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
                filter: 'blur(2px)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
