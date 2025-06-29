
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroHolographicProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroHolographic = ({ formData, currentColors, content }: HeroHolographicProps) => {
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
      background: 'linear-gradient(45deg, #ff0080, #00ff80, #0080ff)',
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
      background: 'linear-gradient(45deg, rgba(255, 0, 128, 0.3), rgba(0, 255, 128, 0.3))',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    };
  };

  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'היכנס לעולם';
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
        background: 'linear-gradient(45deg, #ff0080, #00ff80)',
        color: '#ffffff',
        border: 'none'
      };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
        style={{
          ...getButtonStyle(),
          boxShadow: '0 0 30px rgba(255, 0, 128, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)'
        }}
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
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30" />
        
        {/* Holographic Grid */}
        <motion.div
          className="absolute inset-0 opacity-30"
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
              linear-gradient(45deg, transparent 49%, rgba(0, 255, 255, 0.3) 49%, rgba(0, 255, 255, 0.3) 51%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, rgba(255, 0, 255, 0.3) 49%, rgba(255, 0, 255, 0.3) 51%, transparent 51%)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating Holographic Elements */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <div
              className="w-full h-full rounded-lg"
              style={{
                background: `linear-gradient(45deg, 
                  hsla(${Math.random() * 360}, 100%, 50%, 0.3), 
                  hsla(${Math.random() * 360}, 100%, 70%, 0.5))`,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                filter: 'blur(1px)',
                boxShadow: `0 0 20px hsla(${Math.random() * 360}, 100%, 50%, 0.5)`,
              }}
            />
          </motion.div>
        ))}
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
              filter: 'drop-shadow(0 0 20px rgba(255, 0, 128, 0.8))',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'הולוגרמה דיגיטלית'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto text-white/90"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'חוויה הולוגרפית מהעתיד עם אפקטים דיגיטליים מתקדמים שמביאים אותך לממד חדש של מציאות'}
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
                  background: 'linear-gradient(45deg, #ff0080, #00ff80)',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '0 0 30px rgba(255, 0, 128, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {content?.cta || 'היכנס לעולם'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
