import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GlassIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gold' | 'silver' | 'platinum' | 'rainbow';
  className?: string;
}

const GlassIcon = ({ 
  icon: Icon, 
  size = 'md', 
  variant = 'gold',
  className = '' 
}: GlassIconProps) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10', 
    xl: 'w-12 h-12'
  };

  const variants = {
    gold: {
      background: 'rgba(255, 215, 0, 0.15)',
      border: 'rgba(255, 215, 0, 0.4)',
      iconColor: 'text-yellow-400',
      shadowColor: 'rgba(255, 215, 0, 0.6)',
      glowColor: 'rgba(255, 215, 0, 0.8)'
    },
    silver: {
      background: 'rgba(192, 192, 192, 0.15)',
      border: 'rgba(192, 192, 192, 0.4)',
      iconColor: 'text-gray-300',
      shadowColor: 'rgba(192, 192, 192, 0.6)',
      glowColor: 'rgba(192, 192, 192, 0.8)'
    },
    platinum: {
      background: 'rgba(229, 228, 226, 0.15)',
      border: 'rgba(229, 228, 226, 0.4)',
      iconColor: 'text-gray-200',
      shadowColor: 'rgba(229, 228, 226, 0.6)',
      glowColor: 'rgba(229, 228, 226, 0.8)'
    },
    rainbow: {
      background: 'rgba(255, 105, 180, 0.1)',
      border: 'rgba(255, 255, 255, 0.3)',
      iconColor: 'text-white',
      shadowColor: 'rgba(255, 105, 180, 0.5)',
      glowColor: 'rgba(255, 105, 180, 0.9)'
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      className={`
        ${sizes[size]} ${className}
        rounded-2xl relative overflow-hidden
        backdrop-blur-xl border-2 group cursor-pointer
        transition-all duration-300
      `}
      style={{
        background: currentVariant.background,
        borderColor: currentVariant.border,
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          0 8px 25px rgba(0, 0, 0, 0.15),
          0 0 20px ${currentVariant.shadowColor},
          0 0 40px ${currentVariant.glowColor}
        `,
      }}
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: 5,
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.4),
          0 12px 35px rgba(0, 0, 0, 0.2),
          0 0 30px ${currentVariant.shadowColor},
          0 0 60px ${currentVariant.glowColor}
        `
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Glass reflection */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.4) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 255, 255, 0.2) 100%)`,
          borderRadius: 'inherit'
        }}
      />
      
      {/* Animated sparkle effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 2px, transparent 2px)',
            'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 2px, transparent 2px)',
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 2px, transparent 2px)',
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon 
            className={`${iconSizes[size]} ${currentVariant.iconColor}`}
            style={{
              filter: `drop-shadow(0 0 8px ${currentVariant.shadowColor})`,
            }}
          />
        </motion.div>
      </div>
      
      {/* Enhanced glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${currentVariant.glowColor} 0%, ${currentVariant.shadowColor} 40%, transparent 70%)`,
          filter: 'blur(8px)',
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Additional outer glow */}
      <motion.div
        className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-60"
        style={{
          background: `radial-gradient(circle, transparent 60%, ${currentVariant.glowColor} 70%, transparent 85%)`,
          filter: 'blur(15px)',
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default GlassIcon;