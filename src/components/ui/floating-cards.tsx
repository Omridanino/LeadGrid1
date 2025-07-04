import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

export const FloatingCard = ({ title, description, icon: Icon, delay = 0, className = '' }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      className={`relative group perspective-1000 ${className}`}
    >
      <div className="relative transform-gpu transition-all duration-300 preserve-3d group-hover:rotateY-5">
        {/* Floating background with glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        
        {/* Content */}
        <div className="relative z-10 p-8 space-y-4">
          {/* Floating icon */}
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              rotateY: [0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-blue-100/80 leading-relaxed">
            {description}
          </p>
          
          {/* Floating particles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-500" />
        </div>
      </div>
    </motion.div>
  );
};

interface FloatingCardsGridProps {
  cards: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  className?: string;
}

export const FloatingCardsGrid = ({ cards, className = '' }: FloatingCardsGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {cards.map((card, index) => (
        <FloatingCard
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};