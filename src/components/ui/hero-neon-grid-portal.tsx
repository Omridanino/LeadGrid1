
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroNeonGridPortalProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroNeonGridPortal = ({ formData, currentColors, content }: HeroNeonGridPortalProps) => {
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
      background: 'linear-gradient(45deg, #ff0080, #00ffff, #8000ff)',
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
      background: 'rgba(255, 0, 128, 0.2)',
      color: '#ff0080',
      border: '1px solid rgba(255, 0, 128, 0.3)'
    };
  };

  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'עבור דרך הפורטל';
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
        background: 'linear-gradient(45deg, #ff0080, #00ffff)',
        color: '#000000',
        border: 'none'
      };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
        style={{
          ...getButtonStyle(),
          boxShadow: '0 0 30px rgba(255, 0, 128, 0.6), 0 0 60px rgba(0, 255, 255, 0.4)'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {buttonText}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated neon grid background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(255, 0, 128, 0.8) 100%),
              linear-gradient(180deg, transparent 98%, rgba(0, 255, 255, 0.8) 100%)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Central portal */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative w-80 h-80"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Portal rings */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: i % 2 === 0 ? '#ff0080' : '#00ffff',
                  transform: `scale(${1 - i * 0.15})`,
                  filter: `blur(${i}px)`,
                }}
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  rotate: {
                    duration: 15 - i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  },
                }}
              />
            ))}
            
            {/* Portal center */}
            <motion.div
              className="absolute inset-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 0, 128, 0.2) 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        
        {/* Floating grid elements */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`grid-${i}`}
            className="absolute w-4 h-4 border border-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Energy beams */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.line
              key={`beam-${i}`}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos(i * Math.PI / 4) * 40}%`}
              y2={`${50 + Math.sin(i * Math.PI / 4) * 40}%`}
              stroke={i % 2 === 0 ? '#ff0080' : '#00ffff'}
              strokeWidth="2"
              filter="blur(1px)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
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
              filter: 'drop-shadow(0 0 30px rgba(255, 0, 128, 0.8))',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'פורטל רשת ניאון'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto text-cyan-100"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'פורטל אנרגטי עם רשת ניאון דיגיטלית שפותח שער לעולמות חדשים של טכנולוגיה ויצירתיות'}
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
                className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, #ff0080, #00ffff)',
                  color: '#000000',
                  border: 'none',
                  boxShadow: '0 0 30px rgba(255, 0, 128, 0.6), 0 0 60px rgba(0, 255, 255, 0.4)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {content?.cta || 'עבור דרך הפורטל'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
