import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Badge } from './badge';

// Creative 3D Pro - Claymorphism Design
interface PremiumHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export const Creative3DHero = (props: PremiumHeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 overflow-hidden">
      {/* 3D clay shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute rounded-full opacity-80"
          style={{
            width: `${60 + i * 10}px`,
            height: `${60 + i * 10}px`,
            background: `linear-gradient(135deg, ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#f38ba8', '#a8e6cf'][i]}, ${['#ff8e8e', '#6eddd6', '#67c3d7', '#a8d4ba', '#fed85d', '#ffb3f5', '#f5a3c7', '#b8ebd5'][i]})`,
            left: `${5 + i * 11}%`,
            top: `${10 + (i % 4) * 20}%`,
            boxShadow: `0 ${10 + i * 2}px ${20 + i * 3}px rgba(0,0,0,0.1)`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl text-center">
          {props.badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              className="mb-8"
            >
              <Badge 
                className="bg-white/80 backdrop-blur-sm text-orange-600 border-none px-8 py-4 text-xl font-bold shadow-lg"
                style={{
                  borderRadius: '30px',
                  boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)'
                }}
              >
                {props.badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight text-gray-800"
          >
            {props.title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 text-gray-600 font-medium"
          >
            {props.subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-12 text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            {props.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-12 py-5 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all"
              style={{
                borderRadius: '25px',
                boxShadow: '0 15px 35px rgba(255, 107, 107, 0.4)'
              }}
            >
              {props.button1Icon && <i className={`ri-${props.button1Icon} mr-3`}></i>}
              {props.button1Text}
            </Button>
            <Button 
              variant="outline" 
              className="border-3 border-gray-600 text-gray-700 hover:bg-gray-100 px-12 py-5 text-xl font-semibold backdrop-blur-sm"
              style={{
                borderRadius: '25px',
                borderWidth: '3px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}
            >
              {props.button2Icon && <i className={`ri-${props.button2Icon} mr-3`}></i>}
              {props.button2Text}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// AuthKit Tech Pro - Minimalist Matrix
export const AuthKitHero = (props: PremiumHeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 1200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100px'
            }}
          />
        ))}
      </div>
      
      {/* Floating code blocks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            rotateY: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 1.5
          }}
          className="absolute bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-3 font-mono text-xs text-blue-300"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`
          }}
        >
          {['{', 'auth:', 'true', '}'][i % 4]}
        </motion.div>
      ))}
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl text-center">
          {props.badge && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Badge 
                className="bg-blue-500/10 backdrop-blur-lg text-blue-300 border border-blue-400/30 px-6 py-3 text-lg font-mono"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
                }}
              >
                {props.badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight font-mono"
            style={{
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
            }}
          >
            {props.title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 text-blue-200 font-light"
          >
            {props.subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-12 text-slate-300 max-w-3xl mx-auto"
          >
            {props.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 text-lg font-mono rounded-lg"
              style={{
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)'
              }}
            >
              {props.button1Icon && <i className={`ri-${props.button1Icon} mr-2`}></i>}
              {props.button1Text}
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-400/50 text-blue-300 hover:bg-blue-500/10 px-10 py-4 text-lg font-mono rounded-lg backdrop-blur-sm"
            >
              {props.button2Icon && <i className={`ri-${props.button2Icon} mr-2`}></i>}
              {props.button2Text}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};