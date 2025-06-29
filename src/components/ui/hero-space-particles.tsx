
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroSpaceParticlesProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroSpaceParticles = ({ formData, currentColors, content }: HeroSpaceParticlesProps) => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950">
      {/* Space particles background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Blue wave/aurora effect */}
      <div className="absolute bottom-0 left-0 right-0 h-96">
        <motion.div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(to top, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)',
            filter: 'blur(40px)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {content?.headline || formData?.businessName || (
              <>
                אוטומציות בינה מלאכותית<br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                  שעובדות בשבילך
                </span>
              </>
            )}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {content?.description || `החלטות חכמות יותר, אוטומציה חלקה, ויעילות ללא מאמץ - מופעל על ידי בינה מלאכותית מתקדמת`}
          </motion.p>
          
          <motion.div 
            className="flex gap-6 justify-center flex-wrap mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
              ראה איך זה עובד
            </button>
            <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              {content?.cta || 'התחל בחינם'} →
            </button>
          </motion.div>
          
          {/* Floating planet/orb */}
          <motion.div
            className="absolute right-10 top-1/2 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};
