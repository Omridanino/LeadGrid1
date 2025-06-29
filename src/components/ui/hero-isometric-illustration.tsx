
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Users, Target } from 'lucide-react';

interface HeroIsometricIllustrationProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroIsometricIllustration = ({ formData, currentColors, content }: HeroIsometricIllustrationProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400" />
      
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 200" className="w-full h-auto">
          <path
            d="M0,100 C300,150 500,50 800,100 C1000,150 1100,50 1200,100 L1200,200 L0,200 Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <motion.div
              className="inline-block mb-6 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {content?.badge || 'עסקים מתקדמים'}
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.headline || 'הודעה ראשית למכירת העסק שלך!'}
            </motion.h1>
            
            <motion.p
              className="text-xl mb-8 leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {content?.description || 'הודעה משנית, לא ארוכה מדי ולא קצרה מדי. תעשה את זה בדיוק כמו שצריך!'}
            </motion.p>
            
            <motion.button
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content?.buttons?.[0]?.text || 'הירשם'}
            </motion.button>
          </div>
          
          {/* Right Isometric Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full h-96">
              {/* Base Platform */}
              <div 
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-gradient-to-br from-white/20 to-white/10 rounded-lg"
                style={{ transform: 'translateX(-50%) perspective(400px) rotateX(60deg) rotateY(-15deg)' }}
              />
              
              {/* Computer Screen */}
              <motion.div
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-36 bg-gray-800 rounded-lg border-4 border-gray-700"
                style={{ transform: 'translateX(-50%) perspective(400px) rotateX(10deg) rotateY(-10deg)' }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded p-2">
                  <div className="w-full h-full bg-white/90 rounded flex items-center justify-center">
                    <div className="text-gray-800 text-xs text-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2" />
                      <div className="w-16 h-1 bg-gray-300 rounded mb-1" />
                      <div className="w-12 h-1 bg-gray-300 rounded" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white"
                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target className="w-8 h-8" />
              </motion.div>
              
              <motion.div
                className="absolute top-20 left-10 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white"
                animate={{ y: [5, -5, 5], x: [-2, 2, -2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-5 right-5 w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center text-white"
                animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Users className="w-7 h-7" />
              </motion.div>
              
              {/* Paper Airplane */}
              <motion.div
                className="absolute top-5 left-1/3 w-8 h-8 text-white"
                animate={{ 
                  x: [0, 50, 0],
                  y: [0, -20, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Play className="w-8 h-8 transform rotate-45" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Stats */}
      <motion.div
        className="absolute bottom-20 left-8 text-white text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        📈 42 השראות עיצוב חדשות נוספו השבוע
      </motion.div>
    </section>
  );
};
