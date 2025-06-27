
import React, { useRef, useEffect } from 'react';

// Optimized Dynamic Gradients - reduced particle count for better performance
export const DynamicGradients = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Enhanced gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/40 to-pink-600/30 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 via-transparent to-violet-500/20" />
      
      {/* Optimized particle system - reduced from 150 to 60 */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-70"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `linear-gradient(${Math.random() * 360}deg, 
                ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 4)]}, 
                ${['#1e40af', '#7c3aed', '#db2777', '#0891b2'][Math.floor(Math.random() * 4)]})`,
              animation: `aiFloat ${4 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
            }}
          />
        ))}
      </div>

      {/* Enhanced geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute rounded-full border border-blue-400/30"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 10}%`,
              top: `${10 + i * 8}%`,
              animation: `geoFloat ${8 + i * 2}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes aiFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-25px) scale(1.1) rotate(180deg); 
            opacity: 1; 
          }
        }
        @keyframes geoFloat {
          0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.6; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

// Enhanced Interactive Sparkles - reduced particle count
export const AdvancedSparkles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Interactive gradient that follows mouse */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
            rgba(59, 130, 246, 0.5) 0%, 
            rgba(168, 85, 247, 0.4) 25%, 
            rgba(236, 72, 153, 0.3) 50%, 
            transparent 70%)`
        }} 
      />
      
      {/* Reduced sparkles from 200 to 80 */}
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, 
              ${['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)]}, 
              transparent)`,
            animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Enhanced floating orbs - reduced from 15 to 8 */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-60"
          style={{
            width: Math.random() * 80 + 40 + 'px',
            height: Math.random() * 80 + 40 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `conic-gradient(from ${Math.random() * 360}deg, 
              #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)`,
            animation: `orbFloat ${6 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 3}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
      
      <style>{`
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg); 
            box-shadow: 0 0 20px currentColor;
          }
        }
        @keyframes orbFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-30px) translateX(20px) scale(1.1); 
            opacity: 0.8; 
          }
        }
      `}</style>
    </div>
  );
};

// Completely redesigned Animated Paths - elegant and smooth
export const AnimatedPaths = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-black">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.6)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
          </linearGradient>
          <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.7)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Elegant curved paths - reduced from 12 to 6 */}
        {[...Array(6)].map((_, i) => {
          const baseY = 150 + i * 100;
          const amplitude = 60 + Math.sin(i) * 30;
          
          return (
            <path
              key={i}
              d={`M0,${baseY} Q300,${baseY - amplitude} 600,${baseY} T1200,${baseY + amplitude * 0.3}`}
              stroke={i % 2 === 0 ? "url(#pathGradient1)" : "url(#pathGradient2)"}
              strokeWidth={3 - i * 0.3}
              fill="none"
              opacity={0.7 - i * 0.08}
              filter="url(#glow)"
              style={{
                animation: `pathFlow ${10 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          );
        })}

        {/* Elegant floating dots - reduced count */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={100 + i * 100}
            cy={200 + Math.sin(i) * 80}
            r={2 + Math.sin(i) * 1}
            fill="url(#pathGradient1)"
            opacity={0.6}
            style={{
              animation: `dotFloat ${4 + i}s ease-in-out infinite ${i * 0.3}s`
            }}
          />
        ))}
      </svg>
      
      <style>{`
        @keyframes pathFlow {
          0%, 100% { 
            stroke-dasharray: 0 1000;
            opacity: 0.4;
          }
          50% { 
            stroke-dasharray: 200 1000;
            opacity: 0.8;
          }
        }
        @keyframes dotFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced Multi-colored Fluid Blobs - multiple blobs as requested
export const FluidBlob = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Multiple fluid blobs in different colors */}
      {[
        { color: ['#3b82f6', '#1e40af'], size: 400, x: '10%', y: '20%' },
        { color: ['#8b5cf6', '#7c3aed'], size: 350, x: '60%', y: '10%' },
        { color: ['#ec4899', '#db2777'], size: 300, x: '20%', y: '60%' },
        { color: ['#06b6d4', '#0891b2'], size: 250, x: '70%', y: '70%' },
        { color: ['#10b981', '#059669'], size: 200, x: '45%', y: '40%' }
      ].map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-70"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: blob.x,
            top: blob.y,
            background: `conic-gradient(from ${i * 72}deg, 
              ${blob.color[0]}, ${blob.color[1]}, ${blob.color[0]})`,
            animation: `fluidBlob ${12 + i * 3}s ease-in-out infinite ${i * 1.5}s`,
            filter: `blur(${1 + i * 0.5}px)`,
          }}
        />
      ))}

      {/* Liquid overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/20 to-pink-900/10" />
      
      <style>{`
        @keyframes fluidBlob {
          0%, 100% { 
            transform: scale(1) rotate(0deg) translateY(0px);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          33% { 
            transform: scale(1.1) rotate(120deg) translateY(-15px);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          66% { 
            transform: scale(0.9) rotate(240deg) translateY(10px);
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced Premium 3D - more impressive movement
export const Premium3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      
      {/* Enhanced 3D floating elements */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${80 + i * 15}px`,
              height: `${80 + i * 15}px`,
              left: `${15 + (i % 3) * 25}%`,
              top: `${15 + Math.floor(i / 3) * 20}%`,
              background: `conic-gradient(from ${i * 45}deg, 
                ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'][i % 5]}, 
                ${['#1e40af', '#7c3aed', '#db2777', '#0891b2', '#059669'][i % 5]})`,
              borderRadius: '30%',
              animation: `premium3D ${6 + i * 1.5}s ease-in-out infinite ${i * 0.4}s`,
              transformStyle: 'preserve-3d',
              opacity: 0.8,
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
            }}
          />
        ))}
      </div>
      
      {/* Enhanced particle orbit system */}
      <div className="absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: '50%',
              top: '50%',
              animation: `orbit3D ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${i * 0.4}s`,
              transform: `rotate(${i * 15}deg) translateX(${80 + i * 6}px) rotate(-${i * 15}deg)`,
            }}
          />
        ))}
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes premium3D {
          0%, 100% { 
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) scale(1);
          }
          25% { 
            transform: perspective(1000px) rotateX(20deg) rotateY(90deg) rotateZ(20deg) translateZ(40px) scale(1.1);
          }
          50% { 
            transform: perspective(1000px) rotateX(40deg) rotateY(180deg) rotateZ(40deg) translateZ(80px) scale(0.9);
          }
          75% { 
            transform: perspective(1000px) rotateX(20deg) rotateY(270deg) rotateZ(20deg) translateZ(40px) scale(1.05);
          }
        }
        @keyframes orbit3D {
          0% { 
            transform: rotate(0deg) translateX(80px) rotate(0deg) translateZ(0px); 
          }
          100% { 
            transform: rotate(360deg) translateX(80px) rotate(-360deg) translateZ(30px); 
          }
        }
      `}</style>
    </div>
  );
};
