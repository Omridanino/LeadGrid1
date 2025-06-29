
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroGlassCubeProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroGlassCube = ({ formData, currentColors, content }: HeroGlassCubeProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Light beams */}
      <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent transform rotate-12"></div>
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent transform rotate-12"></div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white text-sm">IMPACT SUSTAINABILITY GROUP</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.headline || formData?.businessName || (
                <>
                  פישוט הדרך אל<br />
                  <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">רווחיות בת קיימא</span>
                </>
              )}
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {content?.description || `פישוט הדרך אל רווחיות בת קיימא הדרך הדרך אל רווחיות הדרך הדרך אל רווחיות`}
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-white">75%</p>
                <p className="text-sm text-gray-400">יעילות</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">OUR CLIENTS</p>
                <p className="text-sm text-gray-400">הלקוחות שלנו</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">WE ARE TRUSTED BY 50+ CLIENTS</p>
                <p className="text-sm text-gray-400">מהימנים על ידי 50+ לקוחות</p>
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D Glass Cube */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div
              className="relative w-64 h-64"
              animate={{
                rotateX: [0, 10, 0],
                rotateY: [0, 15, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              {/* Main cube */}
              <div 
                className="w-full h-full rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, rgba(99, 102, 241, 0.3) 50%, rgba(139, 92, 246, 0.2) 75%, rgba(168, 85, 247, 0.3) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.5),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 0 60px rgba(56, 189, 248, 0.3)
                  `,
                }}
              >
                {/* Inner reflections */}
                <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute top-2 left-2 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
              </div>
              
              {/* Floating particles around cube */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: `${-20 + Math.random() * 140}%`,
                    top: `${-20 + Math.random() * 140}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
