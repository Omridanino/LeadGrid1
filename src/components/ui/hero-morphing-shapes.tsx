
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroMorphingShapesProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroMorphingShapes = ({ formData, currentColors, content }: HeroMorphingShapesProps) => {
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
    return { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' };
  };

  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'התמרפף איתנו';
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
        background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
        color: '#ffffff',
        border: 'none'
      };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 flex items-center gap-3"
        style={getButtonStyle()}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
        whileHover={{ 
          scale: 1.05,
          borderRadius: "50px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
      <div className="absolute inset-0">
        {/* Morphing Shape 1 */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40"
          animate={{
            borderRadius: [
              "20% 80% 30% 70%",
              "70% 30% 80% 20%",
              "40% 60% 50% 50%",
              "80% 20% 70% 30%",
              "20% 80% 30% 70%"
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            filter: 'blur(2px)',
          }}
        />
        
        {/* Morphing Shape 2 */}
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32"
          animate={{
            borderRadius: [
              "60% 40% 30% 70%",
              "30% 70% 60% 40%",
              "50% 50% 50% 50%",
              "70% 30% 40% 60%",
              "60% 40% 30% 70%"
            ],
            rotate: [360, 180, 0],
            scale: [0.8, 1.3, 1, 0.9, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            background: 'linear-gradient(45deg, #a8edea, #fed6e3)',
            filter: 'blur(1px)',
          }}
        />
        
        {/* Morphing Shape 3 */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24"
          animate={{
            borderRadius: [
              "80% 20% 55% 45%",
              "45% 55% 80% 20%",
              "20% 80% 45% 55%",
              "55% 45% 20% 80%",
              "80% 20% 55% 45%"
            ],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
            scale: [1, 0.7, 1.4, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            background: 'linear-gradient(45deg, #ffecd2, #fcb69f)',
            filter: 'blur(1.5px)',
          }}
        />
        
        {/* Additional smaller morphing shapes */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              background: `linear-gradient(45deg, 
                hsl(${Math.random() * 360}, 70%, 70%), 
                hsl(${Math.random() * 360}, 80%, 80%))`,
              filter: 'blur(2px)',
            }}
            animate={{
              borderRadius: [
                `${Math.random() * 50 + 20}% ${Math.random() * 50 + 30}% ${Math.random() * 50 + 40}% ${Math.random() * 50 + 50}%`,
                `${Math.random() * 50 + 60}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 30}% ${Math.random() * 50 + 70}%`,
                `${Math.random() * 50 + 40}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 60}% ${Math.random() * 50 + 20}%`,
              ],
              scale: [0.5, 1.2, 0.8, 1, 0.5],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.7, 0.4, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
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
            {content?.headline || formData?.businessName || 'צורות משתנות'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'עולם של צורות גיאומטריות משתנות שיוצרות חוויה ויזואלית מהפנטת ודינמית'}
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
                className="group px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 flex items-center gap-3"
                style={{ 
                  background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
                  color: '#ffffff',
                  border: 'none'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  borderRadius: "50px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {content?.cta || 'התמרפף איתנו'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
