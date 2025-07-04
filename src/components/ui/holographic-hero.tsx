import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

interface HolographicHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  onButton1Click?: () => void;
  onButton2Click?: () => void;
  className?: string;
}

export const HolographicHero = ({
  badge,
  title,
  subtitle,
  description,
  button1Text,
  button2Text,
  onButton1Click,
  onButton2Click,
  className = ''
}: HolographicHeroProps) => {
  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-background"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ 
          rotateY: [0, 360],
          rotateX: [0, 15, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-400/30 transform rotate-45"
      />
      
      <motion.div
        animate={{ 
          rotateZ: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full border-2 border-purple-400/30"
      />
      
      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 text-blue-200 text-sm font-medium">
              {badge}
            </div>
          </motion.div>
        )}
        
        {/* Title with holographic effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
        >
          {title}
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-light mb-6 text-blue-100/90"
        >
          {subtitle}
        </motion.h2>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-blue-100/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
        
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={onButton1Click}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-xl shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
          >
            {button1Text}
          </Button>
          
          <Button
            onClick={onButton2Click}
            variant="outline"
            className="px-8 py-4 border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-medium rounded-xl transform hover:scale-105 transition-all duration-300"
          >
            {button2Text}
          </Button>
        </motion.div>
      </div>
      
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className={`absolute w-${4 + i * 2} h-${4 + i * 2} bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`
          }}
        />
      ))}
      
      <style>{`
        .grid-background {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};