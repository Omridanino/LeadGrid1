import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Card } from './card';
import { LucideIcon } from 'lucide-react';

// NFT Future Pro - 3D Floating Cards
interface NFTFutureCardsProps {
  cards: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
}

export const NFTFutureCards = ({ cards }: NFTFutureCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateY: -90, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            whileHover={{ 
              rotateY: 15,
              rotateX: 10,
              scale: 1.05,
              z: 50
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="perspective-1000"
          >
            <Card className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-500/30 p-8 h-full preserve-3d">
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              {/* 3D Icon */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                {card.title}
              </h3>
              
              <p className="text-purple-100/80 leading-relaxed">
                {card.description}
              </p>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-500" />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

// Creative 3D Pro - Morphing Cards
export const Creative3DCards = ({ cards }: NFTFutureCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotateZ: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            whileHover={{ 
              scale: 1.1,
              rotateZ: 5,
              y: -20
            }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1
            }}
            className="group"
          >
            <Card className="relative bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm border border-orange-500/30 p-6 h-full overflow-hidden">
              {/* Morphing background shape */}
              <motion.div
                animate={{
                  borderRadius: [
                    "20% 80% 60% 40%",
                    "80% 20% 40% 60%",
                    "40% 60% 80% 20%",
                    "20% 80% 60% 40%"
                  ],
                  scale: [1, 1.2, 0.8, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-50"
              />
              
              {/* Icon with liquid effect */}
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 shadow-lg preserve-3d"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="text-lg font-bold mb-3 text-orange-200 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              
              <p className="text-orange-100/70 text-sm leading-relaxed group-hover:text-orange-100/90 transition-colors">
                {card.description}
              </p>
              
              {/* Liquid drops */}
              <motion.div
                animate={{
                  y: [0, 100],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="absolute top-0 right-4 w-1 h-1 bg-orange-400 rounded-full"
              />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

// AuthKit Tech Pro - Matrix Style Cards
export const AuthKitCards = ({ cards }: NFTFutureCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1
            }}
            className="group"
          >
            <Card className="relative bg-gradient-to-br from-slate-900/50 to-blue-900/50 backdrop-blur-xl border border-blue-500/30 p-6 h-full overflow-hidden">
              {/* Matrix rain effect */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, 400],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
                    style={{ left: `${i * 10}%` }}
                  />
                ))}
              </div>
              
              {/* Glowing icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg"
                style={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className="text-lg font-bold mb-3 text-blue-200 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              
              <p className="text-blue-100/70 text-sm leading-relaxed group-hover:text-blue-100/90 transition-colors">
                {card.description}
              </p>
              
              {/* Digital particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border border-blue-400 rotate-45 animate-pulse" />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};