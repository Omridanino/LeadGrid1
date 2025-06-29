
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroGlassRefractionProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroGlassRefraction = ({ formData, currentColors, content }: HeroGlassRefractionProps) => {
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
    return { color: '#ffffff' };
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
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)'
    };
  };

  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'עבר דרך הזכוכית';
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
        background: 'rgba(255, 255, 255, 0.15)',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)'
      };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
        style={getButtonStyle()}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        {buttonText}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0">
        {/* Glass panels with refraction effects */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 300 + 150}px`,
              background: `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(255, 255, 255, 0.05) 50%, 
                rgba(255, 255, 255, 0.15) 100%)`,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
            }}
            animate={{
              rotateZ: [
                Math.random() * 45 - 22.5,
                Math.random() * 45 - 22.5 + 10,
                Math.random() * 45 - 22.5
              ],
              y: [0, -20, 0],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {/* Inner light refraction */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(45deg, 
                  transparent 0%, 
                  rgba(255, 255, 255, 0.1) 25%, 
                  transparent 50%, 
                  rgba(255, 255, 255, 0.15) 75%, 
                  transparent 100%)`,
              }}
            />
            
            {/* Edge highlights */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(to right, 
                  rgba(255, 255, 255, 0.3) 0%, 
                  transparent 5%, 
                  transparent 95%, 
                  rgba(255, 255, 255, 0.3) 100%)`,
              }}
            />
          </motion.div>
        ))}
        
        {/* Floating light orbs */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, 
                rgba(255, 255, 255, 0.8) 0%, 
                transparent 70%)`,
              filter: 'blur(1px)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-8 py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {content?.badge && (
            <motion.div
              className="inline-block mb-8 px-4 py-2 rounded-full text-sm font-medium"
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
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'שבירת זכוכית'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'חוויה של זכוכית ושבירת אור שיוצרת אפקטים ויזואליים מרהיבים ומתקדמים'}
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
                className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {content?.cta || 'עבר דרך הזכוכית'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
