
import React from 'react';
import { motion } from 'framer-motion';

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GlassBadge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: GlassBadgeProps) => {
  const variants = {
    primary: 'from-purple-500/80 to-pink-500/80 border-purple-400/30',
    secondary: 'from-gray-500/80 to-gray-600/80 border-gray-400/30',
    success: 'from-green-500/80 to-emerald-500/80 border-green-400/30',
    warning: 'from-orange-500/80 to-yellow-500/80 border-orange-400/30',
    info: 'from-blue-500/80 to-cyan-500/80 border-blue-400/30'
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs rounded-lg',
    md: 'px-4 py-2 text-sm rounded-xl',
    lg: 'px-6 py-3 text-base rounded-2xl'
  };

  return (
    <motion.div
      className={`
        inline-flex items-center justify-center font-bold text-white
        backdrop-blur-xl border border-white/20 relative overflow-hidden
        ${sizes[size]} ${className}
      `}
      style={{
        background: `linear-gradient(135deg, 
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%)`,
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          0 8px 25px rgba(0, 0, 0, 0.3),
          0 0 20px rgba(107, 115, 255, 0.2)
        `,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gradient overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${variants[variant]} opacity-80`}
        style={{
          borderRadius: 'inherit'
        }}
      />
      
      {/* Reflection effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.3) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 255, 255, 0.1) 100%)`,
          borderRadius: 'inherit'
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );
};

export default GlassBadge;
