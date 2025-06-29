
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroGlassPhoneProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroGlassPhone = ({ formData, currentColors, content }: HeroGlassPhoneProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-300 text-sm">חוסך שעות מדי יום</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.headline || formData?.businessName || (
                <>
                  בינה מלאכותית שמבינה<br />
                  את העסק שלך מבפנים<br />
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">ומבחוץ</span>
                </>
              )}
            </motion.h1>
            
            <motion.div 
              className="flex gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-blue-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap">
                {content?.cta || 'התחל ניסיון חינם'}
              </button>
            </motion.div>
          </div>

          {/* Right side - Glass Phone Mockup */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Phone frame */}
            <div className="relative">
              <motion.div
                className="w-64 h-96 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl"
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, -2, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(147, 51, 234, 0.1) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Screen content */}
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-1 space-y-4">
                    <div className="h-4 bg-white/20 rounded animate-pulse"></div>
                    <div className="h-3 bg-white/15 rounded w-3/4 animate-pulse"></div>
                    <div className="h-3 bg-white/15 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Light beam effect */}
              <motion.div
                className="absolute -top-20 -right-10 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                animate={{
                  rotate: [45, 60, 45],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  filter: 'blur(1px)',
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Bottom stats */}
        <motion.div 
          className="absolute bottom-8 right-8 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              <span className="text-white">4.9 מתוך 5</span>
            </div>
            <p className="text-gray-400 text-sm">מהימן על ידי למעלה ממיליוני משתמשים</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
