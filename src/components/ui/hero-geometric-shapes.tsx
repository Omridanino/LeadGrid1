
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Star } from 'lucide-react';

interface HeroGeometricShapesProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroGeometricShapes = ({ formData, currentColors, content }: HeroGeometricShapesProps) => {
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
    return { color: '#1f2937' };
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
    return { backgroundColor: '#dbeafe', color: '#1d4ed8' };
  };

  // Helper function to render advanced buttons
  const renderAdvancedButton = (button: any, index: number) => {
    const buttonStyle = button?.style || 'default';
    const buttonText = button?.text || content?.cta || 'בואו נתחיל';
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
      return { backgroundColor: '#2563eb', color: '#ffffff' };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
        style={getButtonStyle()}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Triangle */}
        <motion.div
          className="absolute top-20 right-10"
          animate={{ 
            rotate: [0, 360],
            y: [-10, 10, -10]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div 
            className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
        </motion.div>
        
        {/* Medium Cube */}
        <motion.div
          className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 opacity-25 transform rotate-12"
          animate={{ 
            rotate: [12, 45, 12],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Small Circles */}
        <motion.div
          className="absolute top-60 right-20 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30"
          animate={{ 
            x: [-5, 15, -5],
            y: [0, -20, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional shapes */}
        <motion.div
          className="absolute bottom-40 right-16 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 opacity-20"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Large background shape */}
        <div className="absolute -top-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="max-w-2xl">
          {content?.badge && (
            <motion.div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium"
              style={getBadgeStyle()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-4 h-4" />
              {content.badge}
            </motion.div>
          )}
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={getTextStyle('headline')}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'תבנית נחיתה לסטארטאפים'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'תבנית דף הנחיתה שלנו עובדת על כל המכשירים, כך שאתם צריכים רק להגדיר אותה פעם אחת, ולקבל תוצאות יפות לתמיד.'}
          </motion.p>
          
          <div className="flex gap-4">
            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
              renderAdvancedButton(button, index)
            ) || (
              <motion.button
                className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content?.cta || 'בואו נתחיל'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Features */}
      <motion.div
        className="absolute bottom-20 left-8 right-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="grid grid-cols-3 gap-8 max-w-2xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">אמינות</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">איכות</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">מהירות</h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
