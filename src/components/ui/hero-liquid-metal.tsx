
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroLiquidMetalProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroLiquidMetal = ({ formData, currentColors, content }: HeroLiquidMetalProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      background: 'linear-gradient(45deg, #c0c0c0, #ffffff, #808080)',
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
      background: 'linear-gradient(45deg, rgba(192, 192, 192, 0.3), rgba(255, 255, 255, 0.1))',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    };
  };

  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'נוזל מתכתי';
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
        background: 'linear-gradient(45deg, #c0c0c0, #ffffff, #808080)',
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
          boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drops: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 15; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.y += drop.speed;
        if (drop.y > canvas.height + drop.radius) {
          drop.y = -drop.radius;
          drop.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createRadialGradient(
          drop.x, drop.y, 0,
          drop.x, drop.y, drop.radius
        );
        gradient.addColorStop(0, `rgba(220, 220, 220, ${drop.opacity})`);
        gradient.addColorStop(0.5, `rgba(180, 180, 180, ${drop.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(140, 140, 140, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fill();

        // Metallic shine effect
        const shineGradient = ctx.createLinearGradient(
          drop.x - drop.radius, drop.y - drop.radius,
          drop.x + drop.radius, drop.y + drop.radius
        );
        shineGradient.addColorStop(0, `rgba(255, 255, 255, ${drop.opacity * 0.8})`);
        shineGradient.addColorStop(0.3, `rgba(255, 255, 255, 0)`);
        shineGradient.addColorStop(0.7, `rgba(255, 255, 255, 0)`);
        shineGradient.addColorStop(1, `rgba(255, 255, 255, ${drop.opacity * 0.4})`);

        ctx.fillStyle = shineGradient;
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius * 0.8, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
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
              filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3))',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'מתכת נוזלית'}
          </motion.h1>
          
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto text-gray-300"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'חוויה מתכתית נוזלית מהעתיד עם אפקטים זורמים שיוצרים תחושה של טכנולוגיה מתקדמת'}
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
                  background: 'linear-gradient(45deg, #c0c0c0, #ffffff, #808080)',
                  color: '#000000',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {content?.cta || 'נוזל מתכתי'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
