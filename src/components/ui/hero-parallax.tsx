
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroParallaxProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroParallax = ({ formData, currentColors, content }: HeroParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Helper function to get inline style for text colors with gradient support
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

  // Helper function to get inline style for badge colors with gradient support
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
    return { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)' };
  };

  // Helper function to render advanced buttons
  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'גלה עוד';
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
        backgroundColor: '#ffffff',
        color: '#1f2937',
        border: 'none'
      };
    };

    return (
      <motion.button
        key={index}
        className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
        style={getButtonStyle()}
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

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        style={{ y, opacity }}
      />
      
      {/* Parallax layers */}
      <motion.div
        className="absolute inset-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400/20 rounded-full blur-lg" />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-purple-400/15 rounded-full blur-2xl" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
      >
        <div className="absolute top-60 right-20 w-16 h-16 bg-pink-400/20 rounded-full blur-lg" />
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-indigo-400/15 rounded-full blur-xl" />
      </motion.div>

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
            style={getTextStyle('headline')}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'חוויה פרלקסית מדהימה'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'עיצוב מתקדם עם אפקטי פרלקסה שיוצרים חוויה ויזואלית בלתי נשכחת'}
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
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: '#ffffff',
                  color: '#1f2937',
                  border: 'none'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content?.cta || 'גלה עוד'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
