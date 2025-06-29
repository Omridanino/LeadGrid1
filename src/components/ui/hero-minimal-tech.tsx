
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Play, Zap } from 'lucide-react';

interface HeroMinimalTechProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroMinimalTech = ({ formData, currentColors, content }: HeroMinimalTechProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const buttonText = button?.text || content?.cta || 'התחל ניסיון חינם';
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
        transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.button>
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 300;

    // Dark interface simulation
    const drawInterface = () => {
      // Background
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Central blue circle
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 60);
      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#1e40af');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
      ctx.fill();
      
      // Small satellite circles
      const satellites = [
        { x: centerX + 80, y: centerY - 30, size: 15 },
        { x: centerX - 80, y: centerY + 40, size: 20 },
        { x: centerX + 60, y: centerY + 70, size: 12 }
      ];
      
      satellites.forEach(sat => {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(sat.x, sat.y, sat.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connection lines
        ctx.strokeStyle = '#374151';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(sat.x, sat.y);
        ctx.stroke();
      });
      
      // Interface labels
      ctx.fillStyle = '#9ca3af';
      ctx.font = '12px monospace';
      ctx.fillText('insert-circle', 20, 30);
      ctx.fillText('qa x qa', centerX + 50, canvas.height - 20);
      
      // Arrows
      ctx.strokeStyle = '#6b7280';
      ctx.lineWidth = 2;
      
      // Arrow 1
      ctx.beginPath();
      ctx.moveTo(centerX + 100, centerY - 40);
      ctx.lineTo(centerX + 120, centerY - 20);
      ctx.moveTo(centerX + 115, centerY - 25);
      ctx.lineTo(centerX + 120, centerY - 20);
      ctx.moveTo(centerX + 120, centerY - 20);
      ctx.lineTo(centerX + 115, centerY - 15);
      ctx.stroke();
      
      // Arrow 2
      ctx.beginPath();
      ctx.moveTo(centerX - 100, centerY + 50);
      ctx.lineTo(centerX - 120, centerY + 30);
      ctx.moveTo(centerX - 115, centerY + 35);
      ctx.lineTo(centerX - 120, centerY + 30);
      ctx.moveTo(centerX - 120, centerY + 30);
      ctx.lineTo(centerX - 115, centerY + 25);
      ctx.stroke();
    };

    drawInterface();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {content?.badge && (
              <motion.div
                className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium"
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
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
              style={getTextStyle('headline')}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {content?.headline || formData?.businessName || 'הפוך את האתר שלך למדהים'}
            </motion.h1>
            
            <motion.p
              className="text-xl mb-12 leading-relaxed"
              style={getTextStyle('subheadline')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.subheadline || content?.description || 'תבנית דף הנחיתה שלנו עובדת על כל המכשירים, כך שאתם צריכים רק להגדיר אותה פעם אחת, ולקבל תוצאות יפות לתמיד.'}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
                renderAdvancedButton(button, index)
              ) || (
                <>
                  <motion.button 
                    className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {content?.cta || 'התחל ניסיון חינם'}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                  
                  <motion.button 
                    className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    למד עוד
                    <Play className="w-5 h-5" />
                  </motion.button>
                </>
              )}
            </motion.div>
          </div>
          
          {/* Right Interface */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-3xl shadow-2xl">
              <canvas
                ref={canvasRef}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Floating elements around the interface */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Github className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
