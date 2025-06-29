
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
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              הפוך את האתר שלך ל
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent block">
                מדהים
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {content?.description || 'תבנית דף הנחיתה שלנו עובדת על כל המכשירים, כך שאתם צריכים רק להגדיר אותה פעם אחת, ולקבל תוצאות יפות לתמיד.'}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                {content?.buttons?.[0]?.text || 'התחל ניסיון חינם'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3">
                {content?.buttons?.[1]?.text || 'למד עוד'}
                <Play className="w-5 h-5" />
              </button>
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
          </div>
        </div>
      </div>
    </section>
  );
};
