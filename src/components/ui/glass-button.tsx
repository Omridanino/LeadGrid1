
import React from 'react';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GlassButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  disabled = false
}: GlassButtonProps) => {
  const variants = {
    primary: {
      background: `linear-gradient(135deg, 
        #6B73FF 0%, 
        #9C40FF 50%, 
        #FF6B9D 100%)`,
      border: 'border-white/20'
    },
    secondary: {
      background: `linear-gradient(135deg, 
        rgba(255, 255, 255, 0.08) 0%,
        rgba(255, 255, 255, 0.02) 100%)`,
      border: 'border-white/20'
    },
    outline: {
      background: 'transparent',
      border: 'border-white/30'
    }
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-4 text-xl rounded-2xl'
  };

  return (
    <motion.button
      className={`
        relative group font-bold text-white overflow-hidden
        backdrop-blur-xl border transition-all duration-300
        ${sizes[size]} ${variants[variant].border} ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={{
        background: variants[variant].background,
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          0 8px 25px rgba(0, 0, 0, 0.3),
          0 0 20px rgba(107, 115, 255, 0.2)
        `,
      }}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {/* Reflection effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.2) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 255, 255, 0.1) 100%)`,
          borderRadius: 'inherit'
        }}
      />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default GlassButton;
