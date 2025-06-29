
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
        // Create gradient
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'transparent');

        // Draw blob
        ctx.fillStyle = gradient;
        ctx.filter = 'blur(2px)';
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.filter = 'none';

        // Move blob
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
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
              className="inline-block mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {content.badge}
            </motion.div>
          )}
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">
              {content?.headline?.split(' ').slice(0, 2).join(' ') || 'עיצוב ללא'}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {content?.headline?.split(' ').slice(2).join(' ') || 'גבולות'}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content?.description || 'חוויה דיגיטלית מתקדמת עם עיצוב נוזלי ואינטראקטיבי שמביא את העסק שלכם לעידן החדש'}
          </motion.p>
          
          <motion.button
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content?.buttons?.[0]?.text || 'התחל לחקור'}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
