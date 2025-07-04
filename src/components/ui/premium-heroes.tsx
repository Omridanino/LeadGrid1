import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Card } from './card';
import { Badge } from './badge';
import { LucideIcon } from 'lucide-react';

// Tech Consultant Pro - Dark Tech Style
interface TechConsultantHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
}

export const TechConsultantHero = ({
  badge,
  title,
  subtitle,
  description,
  button1Text,
  button2Text
}: TechConsultantHeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black overflow-hidden">
      {/* Circuit board background */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern"></div>
      </div>
      
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute w-4 h-4 border border-red-500/30"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 4) * 20}%`,
            transform: `rotate(${i * 45}deg)`
          }}
        />
      ))}
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Badge className="bg-red-500/20 text-red-200 border-red-500/30 px-4 py-2">
                {badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-6 text-gray-300"
          >
            {subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
              {button1Text}
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg">
              {button2Text}
            </Button>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .circuit-pattern {
          background-image: 
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

// Neon Academy Pro - Futuristic Neon Style
export const NeonAcademyHero = ({
  badge,
  title,
  subtitle,
  description,
  button1Text,
  button2Text
}: TechConsultantHeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-900 to-cyan-900 overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0">
        <div className="neon-grid"></div>
      </div>
      
      {/* Glowing orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 1.2
          }}
          className="absolute w-32 h-32 rounded-full blur-lg"
          style={{
            background: `radial-gradient(circle, ${['#00f5ff', '#0080ff', '#4040ff', '#8000ff', '#ff00ff', '#ff0080'][i]} 0%, transparent 70%)`,
            left: `${15 + i * 12}%`,
            top: `${25 + (i % 3) * 25}%`
          }}
        />
      ))}
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6"
            >
              <Badge className="bg-cyan-500/20 text-cyan-200 border-cyan-400/50 px-4 py-2 neon-glow">
                {badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight neon-text"
          >
            {title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-6 text-cyan-200"
          >
            {subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-black font-bold px-8 py-3 rounded-lg neon-button">
              {button1Text}
            </Button>
            <Button variant="outline" className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 px-8 py-3 rounded-lg neon-border">
              {button2Text}
            </Button>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .neon-grid {
          background-image: 
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          width: 100%;
          height: 100%;
          animation: grid-glow 4s ease-in-out infinite alternate;
        }
        
        .neon-text {
          text-shadow: 0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff;
        }
        
        .neon-glow {
          box-shadow: 0 0 10px #00f5ff;
        }
        
        .neon-button {
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
        }
        
        .neon-border {
          box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
        }
        
        @keyframes grid-glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

// Blockchain Tech Pro - Particle Network Style
export const BlockchainTechHero = ({
  badge,
  title,
  subtitle,
  description,
  button1Text,
  button2Text
}: TechConsultantHeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 overflow-hidden">
      {/* Particle network background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {[...Array(50)].map((_, i) => (
            <g key={i}>
              <motion.circle
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="2"
                fill="#60a5fa"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
              {i < 25 && (
                <motion.line
                  x1={Math.random() * 1000}
                  y1={Math.random() * 1000}
                  x2={Math.random() * 1000}
                  y2={Math.random() * 1000}
                  stroke="#60a5fa"
                  strokeWidth="0.5"
                  opacity="0.3"
                  animate={{
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              )}
            </g>
          ))}
        </svg>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              className="mb-6"
            >
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/50 px-4 py-2">
                {badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-6 text-blue-200"
          >
            {subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg mb-8 text-indigo-200 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
              {button1Text}
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-400/10 px-8 py-3 rounded-lg">
              {button2Text}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};