import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Badge } from './badge';

// Tech Consultant Pro - Glassmorphism with floating elements
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

export const TechConsultantHero = ({
  badge,
  title,
  subtitle,
  description,
  button1Text,
  button2Text,
  button1Icon,
  button2Icon
}: PremiumHeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Floating glass panels */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            rotateY: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2
          }}
          className="absolute backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl"
          style={{
            width: `${80 + i * 20}px`,
            height: `${60 + i * 15}px`,
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
            transform: `rotate(${i * 30}deg)`
          }}
        />
      ))}
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <Badge className="bg-white/10 backdrop-blur-lg text-white border-white/20 px-6 py-3 text-lg">
                {badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold mb-8 text-white leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 text-gray-300 font-light"
          >
            {subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button className="bg-white text-black hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all shadow-2xl">
              {button1Icon && <i className={`ri-${button1Icon} mr-2`}></i>}
              {button1Text}
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-lg px-10 py-4 text-lg rounded-xl">
              {button2Icon && <i className={`ri-${button2Icon} mr-2`}></i>}
              {button2Text}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Neon Academy Pro - Cyberpunk Neon
export const NeonAcademyHero = (props: PremiumHeroProps) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Neon city skyline */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-900/50 to-transparent">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              boxShadow: [
                "0 0 20px #ff00ff",
                "0 0 40px #00ffff", 
                "0 0 20px #ff00ff"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="absolute bottom-0 bg-gray-900"
            style={{
              left: `${i * 5}%`,
              width: '3%',
              height: `${50 + Math.random() * 100}px`,
              border: '1px solid #ff00ff'
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl text-center">
          {props.badge && (
            <motion.div
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              className="mb-8"
            >
              <Badge 
                className="bg-gradient-to-r from-pink-500 to-cyan-500 text-black px-6 py-3 text-lg font-bold"
                style={{
                  textShadow: "0 0 10px #fff",
                  boxShadow: "0 0 30px #ff00ff"
                }}
              >
                {props.badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
            style={{
              background: "linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px #ff00ff"
            }}
          >
            {props.title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 text-cyan-300 font-light"
            style={{ textShadow: "0 0 20px #00ffff" }}
          >
            {props.subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-12 text-pink-200 max-w-3xl mx-auto"
          >
            {props.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              className="bg-gradient-to-r from-pink-500 to-cyan-500 text-black hover:from-pink-600 hover:to-cyan-600 px-10 py-4 text-lg font-bold rounded-xl"
              style={{ boxShadow: "0 0 30px #ff00ff" }}
            >
              {props.button1Icon && <i className={`ri-${props.button1Icon} mr-2`}></i>}
              {props.button1Text}
            </Button>
            <Button 
              variant="outline" 
              className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/20 px-10 py-4 text-lg rounded-xl"
              style={{ 
                borderColor: "#00ffff",
                boxShadow: "0 0 20px #00ffff",
                color: "#00ffff"
              }}
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

// Blockchain Tech Pro - Particle Network
export const BlockchainTechHero = (props: PremiumHeroProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 overflow-hidden">
      {/* Animated particle network */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(100)].map((_, i) => (
          <g key={i}>
            <motion.circle
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r="2"
              fill="#60a5fa"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
            {i < 50 && (
              <motion.line
                x1={Math.random() * 1920}
                y1={Math.random() * 1080}
                x2={Math.random() * 1920}
                y2={Math.random() * 1080}
                stroke="#3b82f6"
                strokeWidth="1"
                opacity="0.3"
                animate={{
                  opacity: [0.1, 0.5, 0.1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            )}
          </g>
        ))}
      </svg>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl text-center">
          {props.badge && (
            <motion.div
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              className="mb-8"
            >
              <Badge className="bg-blue-500/20 backdrop-blur-lg text-blue-200 border-blue-400/50 px-6 py-3 text-lg">
                {props.badge}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {props.title}
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 text-blue-200 font-light"
          >
            {props.subtitle}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-12 text-indigo-200 max-w-3xl mx-auto"
          >
            {props.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-xl shadow-lg shadow-blue-500/25">
              {props.button1Icon && <i className={`ri-${props.button1Icon} mr-2`}></i>}
              {props.button1Text}
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-400/10 px-10 py-4 text-lg rounded-xl">
              {props.button2Icon && <i className={`ri-${props.button2Icon} mr-2`}></i>}
              {props.button2Text}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};