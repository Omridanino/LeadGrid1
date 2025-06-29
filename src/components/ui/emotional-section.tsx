
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

interface EmotionalSectionProps {
  formData?: any;
  currentColors?: any;
  content?: any;
  designStyle?: string;
}

export const EmotionalSection = ({ formData, currentColors, content, designStyle }: EmotionalSectionProps) => {
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
    return { color: designStyle === 'geometric' ? '#1f2937' : '#ffffff' };
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
    
    switch (designStyle) {
      case 'geometric':
        return { backgroundColor: '#dbeafe', color: '#1d4ed8' };
      case 'futuristic':
      case 'neon':
        return { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#00ffff', border: '1px solid #00ffff' };
      default:
        return { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' };
    }
  };

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
      
      switch (designStyle) {
        case 'geometric':
          return { backgroundColor: '#2563eb', color: '#ffffff' };
        case 'futuristic':
          return { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#ffffff' };
        case 'neon':
          return { background: 'linear-gradient(45deg, #00ffff, #ff00ff)', color: '#000000' };
        case 'holographic':
          return { background: 'linear-gradient(45deg, #ff0080, #00ff80)', color: '#ffffff' };
        default:
          return { background: 'linear-gradient(to right, #2563eb, #7c3aed)', color: '#ffffff' };
      }
    };

    return (
      <motion.button
        key={index}
        className="group px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 flex items-center gap-2"
        style={getButtonStyle()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  const getBackgroundStyle = () => {
    switch (designStyle) {
      case 'geometric':
        return 'bg-gradient-to-r from-blue-50 to-indigo-50';
      case 'futuristic':
        return 'bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900';
      case 'neon':
        return 'bg-black';
      case 'holographic':
        return 'bg-black';
      case 'digital-waves':
        return 'bg-gradient-to-r from-slate-900 to-blue-900';
      case 'particle-storm':
        return 'bg-gradient-to-r from-purple-900 to-pink-900';
      case 'floating-cubes':
        return 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-800';
      case 'parallax':
        return 'bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900';
      default:
        return 'bg-gradient-to-r from-slate-800 to-slate-900';
    }
  };

  return (
    <section className={`py-16 px-4 ${getBackgroundStyle()}`}>
      <div className="container mx-auto max-w-4xl text-center">
        {content?.badge && (
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
            style={getBadgeStyle()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-4 h-4 inline mr-2" />
            {content.badge}
          </motion.div>
        )}
        
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          style={getTextStyle('headline')}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {content?.headline || 'הרגש שמניע אותנו קדימה'}
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
          style={getTextStyle('subheadline')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content?.description || 'כל מה שאנחנו עושים נובע מהלב - מהרצון העמוק לעזור, ליצור ולהשפיע. זה מה שמבדיל אותנו ומה שמניע אותנו להיות הטובים ביותר.'}
        </motion.p>
        
        {content?.buttons && content.buttons.length > 0 && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {content.buttons.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
              renderAdvancedButton(button, index)
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
