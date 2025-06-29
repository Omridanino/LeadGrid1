
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroCrystalMatrixProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroCrystalMatrix = ({ formData, currentColors, content }: HeroCrystalMatrixProps) => {
  const getTextStyle = (colorKey: string) => {
    const colorValue = content?.colors?.[colorKey];
    if (colorValue) {
      if (colorValue.includes('gradient')) {
        return { 
          background: colorValue,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        };
      }
      return { color: colorValue };
    }
    return { 
      background: 'linear-gradient(45deg, #e0c3fc, #9bb5ff, #c3e0fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    };
  };

  const getBadgeStyle = () => {
    const badgeColor = content?.colors?.badge;
    if (badgeColor) {
      if (badgeColor.includes('gradient')) {
        return { 
          background: badgeColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        backgroundColor: badgeColor,
        color: '#ffffff',
        border: 'none'
      };
    }
    return { 
      background: 'rgba(224, 195, 252, 0.2)',
      color: '#e0c3fc',
      border: '1px solid rgba(224, 195, 252, 0.3)'
    };
  };

  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'היכנס למטריצה';
    const buttonColor = button?.color;
    
    const getButtonStyle = () => {
      if (buttonColor) {
        if (buttonColor.includes('gradient')) {
          return { 
            background: buttonColor,
            color: '#ffffff',
            border: 'none'
          };
        }
        return { 
          backgroundColor: buttonColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        background: 'linear-gradient(45deg, #e0c3fc, #9bb5ff)',
        color: '#1a1a2e',
        border: 'none'
      };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
        style={{
          ...getButtonStyle(),
          boxShadow: '0 8px 32px rgba(224, 195, 252, 0.4)'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  const crystals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 3
  }));

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900">
      <div className="absolute inset-0">
        {/* Crystal matrix background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }, (_, i) => (
              <motion.div
                key={i}
                className="border border-purple-300/20 flex items-center justify-center"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  borderColor: [
                    'rgba(196, 181, 253, 0.1)',
                    'rgba(196, 181, 253, 0.3)',
                    'rgba(196, 181, 253, 0.1)'
                  ]
                }}
                transition={{
                  duration: Math.random() * 4 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                <div className="w-1 h-1 bg-purple-300/30 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Floating crystals */}
        {crystals.map((crystal) => (
          <motion.div
            key={crystal.id}
            className="absolute"
            style={{
              left: `${crystal.x}%`,
              top: `${crystal.y}%`,
              width: `${crystal.size}px`,
              height: `${crystal.size}px`,
            }}
            animate={{
              rotateZ: [crystal.rotation, crystal.rotation + 360],
              y: [-15, 15, -15],
              opacity: [0.4, 0.8, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: crystal.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: crystal.delay,
            }}
          >
            <div
              className="w-full h-full relative"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(224, 195, 252, 0.3) 0%, 
                  rgba(155, 181, 255, 0.2) 50%, 
                  rgba(195, 224, 252, 0.4) 100%)`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: `drop-shadow(0 0 ${crystal.size / 4}px rgba(224, 195, 252, 0.6))`,
              }}
            >
              {/* Inner crystal facets */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(45deg, 
                    transparent 0%, 
                    rgba(255, 255, 255, 0.2) 25%, 
                    transparent 50%, 
                    rgba(255, 255, 255, 0.3) 75%, 
                    transparent 100%)`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                }}
              />
            </div>
          </motion.div>
        ))}
        
        {/* Energy connections between crystals */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {crystals.slice(0, 8).map((crystal, i) => {
            const nextCrystal = crystals[(i + 1) % crystals.length];
            return (
              <motion.line
                key={`connection-${i}`}
                x1={`${crystal.x}%`}
                y1={`${crystal.y}%`}
                x2={`${nextCrystal.x}%`}
                y2={`${nextCrystal.y}%`}
                stroke="rgba(224, 195, 252, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            );
          })}
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {content?.badge && (
            <motion.div
              className="inline-block mb-8 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
              style={getBadgeStyle()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-4 h-4 inline mr-2" />
              {content.badge}
            </motion.div>
          )}
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            style={{
              ...getTextStyle('headline'),
              filter: 'drop-shadow(0 0 30px rgba(224, 195, 252, 0.8))',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'מטריצת קריסטלים'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto text-purple-100"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'עולם קריסטלי מסתורי עם מטריצה אנרגטית שמחברת בין מימדים ויוצרת חוויה קוסמית'}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
              renderAdvancedButton(button, index)
            ) || (
              <motion.button
                className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
                style={{
                  background: 'linear-gradient(45deg, #e0c3fc, #9bb5ff)',
                  color: '#1a1a2e',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(224, 195, 252, 0.4)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content?.cta || 'היכנס למטריצה'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
