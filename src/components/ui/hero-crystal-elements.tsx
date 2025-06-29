
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroCrystalElementsProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroCrystalElements = ({ formData, currentColors, content }: HeroCrystalElementsProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated background geometric elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-6 h-6 bg-cyan-400/20 rounded-full"></div>
          </motion.div>
        ))}
        
        {/* Wavy lines */}
        <motion.svg
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 1200 800"
          style={{ filter: 'blur(1px)' }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,450 Q300,350 600,450 T1200,450"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="2"
            fill="none"
          />
        </motion.svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {content?.headline || formData?.businessName || (
                <>
                  פלטפורמה מהירה ומאובטחת<br />
                  עבור <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">מסחר קריפטו</span>
                </>
              )}
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.description || `קנה ומכור 100+ מטבעות קריפטו עם 25+ מטבעות פיאט. גישה, ניהול והוצאת הכספים שלך בכל זמן עם הפלטפורמה הזו.`}
            </motion.p>
            
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {content?.cta || 'התחל מסחר'} →
            </motion.button>
            
            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <p className="text-2xl font-bold text-yellow-400">5M+</p>
                <p className="text-sm text-gray-400">לקוחות</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">280M</p>
                <p className="text-sm text-gray-400">כיסוי</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">22%</p>
                <p className="text-sm text-gray-400">רווחים</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - Floating Crystal Elements */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Main crystal shapes */}
            <motion.div
              className="relative"
              animate={{
                rotateX: [0, 10, 0],
                rotateY: [0, 15, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-24 bg-gradient-to-br from-blue-500/40 to-purple-600/40 transform rotate-12"
                  style={{
                    left: `${i * 30 - 60}px`,
                    top: `${Math.sin(i) * 30}px`,
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
            
            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${-100 + Math.random() * 200}px`,
                  top: `${-100 + Math.random() * 200}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 flex items-center gap-2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
          <span className="text-sm">גלול למטה</span>
        </motion.div>
      </div>
    </section>
  );
};
