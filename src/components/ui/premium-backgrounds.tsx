import React, { useRef, useEffect } from 'react';

// Optimized Dynamic Gradients - reduced particle count for better performance
export const DynamicGradients = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Enhanced gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/40 to-pink-600/30" />
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 via-transparent to-violet-500/20" />
      
      {/* Optimized particle system - reduced from 150 to 40 */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
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
        {[...Array(6)].map((_, i) => (
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

// Fixed Sparkles - stable background, no flickering
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
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Stable base gradient - no flickering */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900" />
      
      {/* Smooth interactive gradient */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
            rgba(59, 130, 246, 0.4) 0%, 
            rgba(168, 85, 247, 0.3) 25%, 
            rgba(236, 72, 153, 0.2) 50%, 
            transparent 70%)`
        }} 
      />
      
      {/* Reduced sparkles for better performance */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, 
              ${['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)]}, 
              transparent)`,
            animation: `sparkle ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-40"
          style={{
            width: Math.random() * 60 + 30 + 'px',
            height: Math.random() * 60 + 30 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `conic-gradient(from ${Math.random() * 360}deg, 
              #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)`,
            animation: `orbFloat ${8 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
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
            transform: scale(1.2) rotate(180deg); 
            box-shadow: 0 0 15px currentColor;
          }
        }
        @keyframes orbFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.4; 
          }
          50% { 
            transform: translateY(-20px) translateX(15px) scale(1.05); 
            opacity: 0.6; 
          }
        }
      `}</style>
    </div>
  );
};

// Completely new Premium Animated Paths - elegant and impressive
export const AnimatedPaths = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Premium gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-purple-800/20 to-pink-900/30" />
      
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Premium gradient definitions */}
          <linearGradient id="premiumPath1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.8)" />
            <stop offset="30%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="60%" stopColor="rgba(236, 72, 153, 0.7)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
          </linearGradient>
          <linearGradient id="premiumPath2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.6)" />
            <stop offset="100%" stopColor="rgba(244, 63, 94, 0.4)" />
          </linearGradient>
          <linearGradient id="premiumPath3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.7)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
          </linearGradient>
          
          {/* Enhanced glow filter */}
          <filter id="premiumGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Motion blur effect */}
          <filter id="motionBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0,2"/>
          </filter>
        </defs>
        
        {/* Premium flowing curves */}
        {[...Array(12)].map((_, i) => {
          const layer = i % 3;
          const baseY = 150 + i * 50;
          const waveHeight = 120 + Math.sin(i * 0.5) * 60;
          const frequency = 0.003 + i * 0.0005;
          
          const pathData = `M-200,${baseY} 
            Q${200 + Math.sin(i) * 100},${baseY - waveHeight} 
            ${400 + Math.cos(i) * 80},${baseY + waveHeight * 0.3} 
            T${800 + Math.sin(i * 1.2) * 60},${baseY - waveHeight * 0.7} 
            Q${1200 + Math.cos(i * 0.8) * 100},${baseY + waveHeight * 0.5} 
            ${1600},${baseY}`;
          
          return (
            <path
              key={i}
              d={pathData}
              stroke={`url(#premiumPath${layer + 1})`}
              strokeWidth={6 - i * 0.3}
              fill="none"
              opacity={0.9 - i * 0.05}
              filter="url(#premiumGlow)"
              style={{
                animation: `premiumFlow ${15 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                strokeDasharray: `${100 + i * 20} ${200 + i * 30}`,
              }}
            />
          );
        })}

        {/* Floating premium particles */}
        {[...Array(25)].map((_, i) => {
          const size = 2 + Math.random() * 4;
          return (
            <circle
              key={`particle-${i}`}
              cx={100 + i * 50 + Math.sin(i) * 200}
              cy={200 + Math.cos(i * 0.7) * 300}
              r={size}
              fill={`url(#premiumPath${(i % 3) + 1})`}
              opacity={0.8}
              filter="url(#premiumGlow)"
              style={{
                animation: `premiumParticle ${8 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`
              }}
            />
          );
        })}

        {/* Premium geometric accent lines */}
        {[...Array(6)].map((_, i) => (
          <line
            key={`accent-${i}`}
            x1={100 + i * 200}
            y1={100}
            x2={200 + i * 200}
            y2={800}
            stroke={`url(#premiumPath${(i % 3) + 1})`}
            strokeWidth="1"
            opacity={0.3}
            style={{
              animation: `accentLine ${12 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </svg>
      
      <style>{`
        @keyframes premiumFlow {
          0%, 100% { 
            stroke-dashoffset: 0;
            opacity: 0.6;
            filter: brightness(1);
          }
          25% { 
            stroke-dashoffset: -100;
            opacity: 0.9;
            filter: brightness(1.2);
          }
          50% { 
            stroke-dashoffset: -200;
            opacity: 1;
            filter: brightness(1.4);
          }
          75% { 
            stroke-dashoffset: -300;
            opacity: 0.8;
            filter: brightness(1.1);
          }
        }
        @keyframes premiumParticle {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.8;
          }
          33% { 
            transform: translateY(-40px) scale(1.3) rotate(120deg);
            opacity: 1;
          }
          66% { 
            transform: translateY(20px) scale(0.8) rotate(240deg);
            opacity: 0.9;
          }
        }
        @keyframes accentLine {
          0% { 
            stroke-dasharray: 0 400;
            opacity: 0.3;
          }
          50% { 
            stroke-dasharray: 200 400;
            opacity: 0.6;
          }
          100% { 
            stroke-dasharray: 0 400;
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced Multiple Fluid Blobs - 5 different colored blobs
export const FluidBlob = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950" />
      
      {/* 5 Fluid blobs in different colors and sizes */}
      {[
        { color: ['#3b82f6', '#1e40af'], size: 380, x: '10%', y: '20%', delay: 0 },
        { color: ['#8b5cf6', '#7c3aed'], size: 320, x: '70%', y: '10%', delay: 2 },
        { color: ['#ec4899', '#db2777'], size: 280, x: '20%', y: '70%', delay: 4 },
        { color: ['#06b6d4', '#0891b2'], size: 240, x: '80%', y: '75%', delay: 6 },
        { color: ['#10b981', '#059669'], size: 200, x: '50%', y: '50%', delay: 8 }
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
            animation: `multiBlob ${18 + i * 3}s ease-in-out infinite ${blob.delay}s`,
            filter: `blur(${1.5 + i * 0.5}px)`,
          }}
        />
      ))}

      {/* Additional smaller accent blobs */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute rounded-full opacity-50"
          style={{
            width: `${60 + i * 15}px`,
            height: `${60 + i * 15}px`,
            left: `${25 + i * 20}%`,
            top: `${30 + i * 15}%`,
            background: `radial-gradient(circle, 
              ${['#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'][i]}, 
              ${['#d97706', '#dc2626', '#7c3aed', '#0891b2'][i]})`,
            animation: `accentBlob ${12 + i * 2}s ease-in-out infinite ${i * 1.5}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}

      {/* Liquid overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/10 to-pink-900/5" />
      
      <style>{`
        @keyframes multiBlob {
          0%, 100% { 
            transform: scale(1) rotate(0deg) translateY(0px) translateX(0px);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: scale(1.15) rotate(90deg) translateY(-30px) translateX(20px);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% { 
            transform: scale(0.85) rotate(180deg) translateY(25px) translateX(-15px);
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% { 
            transform: scale(1.05) rotate(270deg) translateY(-10px) translateX(25px);
            border-radius: 70% 30% 60% 40% / 40% 50% 60% 30%;
          }
        }
        @keyframes accentBlob {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.3) rotate(180deg);
            opacity: 0.7;
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
        {[...Array(16)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: '50%',
              top: '50%',
              animation: `orbit3D ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${i * 0.6}s`,
              transform: `rotate(${i * 22.5}deg) translateX(${80 + i * 6}px) rotate(-${i * 22.5}deg)`,
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
