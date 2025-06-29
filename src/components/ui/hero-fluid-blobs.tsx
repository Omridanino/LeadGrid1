
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroFluidBlobsProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const HeroFluidBlobs = ({ formData, currentColors, content }: HeroFluidBlobsProps) => {
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
    return { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' };
  };

  // Helper function to render advanced buttons
  const renderAdvancedButton = (button: any, index: number) => {
    const buttonText = button?.text || content?.cta || 'התחל לחקור';
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
      return { background: 'linear-gradient(to right, #2563eb, #7c3aed)', color: '#ffffff' };
    };

    return (
      <motion.button
        key={index}
        className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3"
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs = [
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.3,
        radius: 150,
        color: 'rgba(255, 100, 150, 0.8)',
        vx: 0.5,
        vy: 0.3
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.5,
        radius: 120,
        color: 'rgba(150, 100, 255, 0.7)',
        vx: -0.3,
        vy: 0.4
      },
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.6,
        radius: 100,
        color: 'rgba(255, 200, 100, 0.6)',
        vx: 0.4,
        vy: -0.2
      }
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach(blob => {
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.filter = 'blur(2px)';
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = 'none';

        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x <= blob.radius || blob.x >= canvas.width - blob.radius) {
          blob.vx *= -1;
        }
        if (blob.y <= blob.radius || blob.y >= canvas.height - blob.radius) {
          blob.vy *= -1;
        }
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
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 container mx-auto px-8">
        <div className="max-w-2xl">
          {content?.badge && (
            <motion.div 
              className="inline-block mb-8 px-4 py-2 rounded-full text-sm"
              style={getBadgeStyle()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {content.badge}
            </motion.div>
          )}
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-none"
            style={getTextStyle('headline')}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content?.headline || formData?.businessName || 'עיצוב ללא גבולות'}
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-12 leading-relaxed max-w-lg"
            style={getTextStyle('subheadline')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.subheadline || content?.description || 'חוויה דיגיטלית מתקדמת עם עיצוב נוזלי ואינטראקטיבי שמביא את העסק שלכם לעידן החדש'}
          </motion.p>
          
          <div className="flex gap-4">
            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
              renderAdvancedButton(button, index)
            ) || (
              <motion.button
                className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3"
                style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)', color: '#ffffff' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content?.cta || 'התחל לחקור'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
