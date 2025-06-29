
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroBankingRibbonsProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroBankingRibbons = ({ formData, currentColors, content }: HeroBankingRibbonsProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
      {/* Floating ribbon elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-0 top-1/4 w-64 h-32 bg-gradient-to-r from-purple-600/30 to-pink-600/30 transform -rotate-12"
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
            filter: 'blur(20px)',
          }}
          animate={{
            x: [-100, 100, -100],
            rotate: [-12, -8, -12],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute right-0 top-3/4 w-64 h-32 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 transform rotate-12"
          style={{
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)',
            filter: 'blur(20px)',
          }}
          animate={{
            x: [100, -100, 100],
            rotate: [12, 8, 12],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white text-sm">מהימן על ידי למעלה מ-3 מיליון משתמשים</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || (
              <>
                בנקאות עבור<br />
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
                  המהפכה הדיגיטלית
                </span>
              </>
            )}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {content?.description || `חולל מהפכה בפיננסים העסקיים שלך עם אפליקציית הבנקאות הדיגיטלית הראשונה שלנו - מהירה, מאובטחת ובנויה עבור יזמים.`}
          </motion.p>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="bg-white rounded-full p-4 shadow-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ↓
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating 3D ribbon elements */}
        <motion.div
          className="absolute left-10 top-1/2 -translate-y-1/2"
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 15, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div 
            className="w-32 h-20 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-lg"
            style={{
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(147, 51, 234, 0.3)',
              transform: 'perspective(1000px) rotateX(20deg) rotateY(-15deg)',
            }}
          />
        </motion.div>
        
        <motion.div
          className="absolute right-10 top-1/3"
          animate={{
            y: [0, 25, 0],
            rotateY: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div 
            className="w-28 h-16 bg-gradient-to-r from-cyan-600/40 to-pink-600/40 rounded-lg"
            style={{
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 15px 35px rgba(56, 189, 248, 0.3)',
              transform: 'perspective(1000px) rotateX(-20deg) rotateY(15deg)',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
