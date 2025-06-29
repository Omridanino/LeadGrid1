
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroFloatingElementsProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroFloatingElements = ({ formData, currentColors, content }: HeroFloatingElementsProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-purple-400/30 rounded-lg"
          animate={{ rotate: [0, 360], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content?.headline || formData?.businessName || (
              <>
                פתרונות דיגיטליים<br />
                <span className="text-purple-400">חדשניים</span>
              </>
            )}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.description || `נציג פתרונות טכנולוגיים מתקדמים המותאמים לעסק שלך`}
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              {content?.cta || 'התחל עכשיו'}
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              למד עוד
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
