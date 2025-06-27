
import React, { useRef, useEffect } from 'react';

// Elite Dynamic Gradients - Professional level with perfect contrast
export const DynamicGradients = () => {
  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      {/* Multi-layered premium gradient system */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-purple-900/30 to-pink-900/40" />
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-800/20 via-transparent to-violet-800/20" />
      
      {/* Elite particle system - optimized for performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-80"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `linear-gradient(${Math.random() * 360}deg, 
                ${['rgba(59, 130, 246, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(236, 72, 153, 0.8)', 'rgba(6, 182, 212, 0.8)'][Math.floor(Math.random() * 4)]}, 
                ${['rgba(30, 64, 175, 0.6)', 'rgba(124, 58, 237, 0.6)', 'rgba(219, 39, 119, 0.6)', 'rgba(8, 145, 178, 0.6)'][Math.floor(Math.random() * 4)]})`,
              animation: `eliteFloat ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)',
            }}
          />
        ))}
      </div>

      {/* Premium geometric overlay */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute border border-blue-400/40 rounded-full"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${15 + (i % 3) * 25}%`,
              top: `${10 + Math.floor(i / 3) * 15}%`,
              animation: `eliteGeoFloat ${10 + i * 2}s linear infinite`,
              boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.3)',
            }}
          />
        ))}
      </div>

      {/* Text visibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
      
      <style>{`
        @keyframes eliteFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
            opacity: 0.8; 
          }
          33% { 
            transform: translateY(-30px) scale(1.2) rotate(120deg); 
            opacity: 1; 
          }
          66% { 
            transform: translateY(15px) scale(0.9) rotate(240deg); 
            opacity: 0.9; 
          }
        }
        @keyframes eliteGeoFloat {
          0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.05); opacity: 0.5; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

// Elite Sparkles - Stable and mesmerizing
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
    <div ref={containerRef} className="relative inset-0 w-full h-full overflow-hidden">
      {/* Stable premium gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950" />
      
      {/* Smooth interactive gradient - no jumping */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
            rgba(59, 130, 246, 0.5) 0%, 
            rgba(168, 85, 247, 0.4) 25%, 
            rgba(236, 72, 153, 0.3) 50%, 
            transparent 70%)`
        }} 
      />
      
      {/* Elite sparkle system - reduced for stability */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, 
              ${['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)]}, 
              transparent)`,
            animation: `eliteSparkle ${4 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Premium floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-50"
          style={{
            width: Math.random() * 80 + 40 + 'px',
            height: Math.random() * 80 + 40 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `conic-gradient(from ${Math.random() * 360}deg, 
              #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)`,
            animation: `eliteOrbFloat ${10 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 3}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Text contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15" />
      
      <style>{`
        @keyframes eliteSparkle {
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
        @keyframes eliteOrbFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.5; 
          }
          50% { 
            transform: translateY(-25px) translateX(20px) scale(1.1); 
            opacity: 0.7; 
          }
        }
      `}</style>
    </div>
  );
};

// Revolutionary Animated Paths - True premium experience
export const AnimatedPaths = () => {
  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      {/* Elite gradient foundation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-purple-800/20 to-pink-900/30" />
      
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Elite gradient definitions */}
          <linearGradient id="elitePath1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.9)" />
            <stop offset="30%" stopColor="rgba(139, 92, 246, 0.7)" />
            <stop offset="60%" stopColor="rgba(236, 72, 153, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
          </linearGradient>
          <linearGradient id="elitePath2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.9)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.7)" />
            <stop offset="100%" stopColor="rgba(244, 63, 94, 0.5)" />
          </linearGradient>
          <linearGradient id="elitePath3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.8)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.7)" />
          </linearGradient>
          
          {/* Elite glow filter */}
          <filter id="eliteGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Elite flowing curves - optimized */}
        {[...Array(15)].map((_, i) => {
          const layer = i % 3;
          const baseY = 100 + i * 45;
          const waveHeight = 100 + Math.sin(i * 0.4) * 50;
          
          const pathData = `M-200,${baseY} 
            Q${150 + Math.sin(i) * 80},${baseY - waveHeight} 
            ${350 + Math.cos(i) * 60},${baseY + waveHeight * 0.4} 
            T${700 + Math.sin(i * 1.1) * 50},${baseY - waveHeight * 0.6} 
            Q${1100 + Math.cos(i * 0.9) * 80},${baseY + waveHeight * 0.3} 
            ${1600},${baseY}`;
          
          return (
            <path
              key={i}
              d={pathData}
              stroke={`url(#elitePath${layer + 1})`}
              strokeWidth={5 - i * 0.2}
              fill="none"
              opacity={0.8 - i * 0.03}
              filter="url(#eliteGlow)"
              style={{
                animation: `eliteFlow ${18 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                strokeDasharray: `${80 + i * 15} ${150 + i * 25}`,
              }}
            />
          );
        })}

        {/* Elite floating particles */}
        {[...Array(20)].map((_, i) => {
          const size = 3 + Math.random() * 5;
          return (
            <circle
              key={`particle-${i}`}
              cx={80 + i * 60 + Math.sin(i) * 150}
              cy={150 + Math.cos(i * 0.8) * 250}
              r={size}
              fill={`url(#elitePath${(i % 3) + 1})`}
              opacity={0.9}
              filter="url(#eliteGlow)"
              style={{
                animation: `eliteParticle ${10 + i * 0.8}s ease-in-out infinite ${i * 0.5}s`
              }}
            />
          );
        })}
      </svg>

      {/* Text visibility enhancement */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/8 to-black/20" />
      
      <style>{`
        @keyframes eliteFlow {
          0%, 100% { 
            stroke-dashoffset: 0;
            opacity: 0.7;
            filter: brightness(1);
          }
          25% { 
            stroke-dashoffset: -80;
            opacity: 0.9;
            filter: brightness(1.3);
          }
          50% { 
            stroke-dashoffset: -160;
            opacity: 1;
            filter: brightness(1.5);
          }
          75% { 
            stroke-dashoffset: -240;
            opacity: 0.8;
            filter: brightness(1.2);
          }
        }
        @keyframes eliteParticle {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 0.9;
          }
          33% { 
            transform: translateY(-35px) scale(1.4) rotate(120deg);
            opacity: 1;
          }
          66% { 
            transform: translateY(20px) scale(0.7) rotate(240deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

// Elite Multiple Fluid Blobs - Multiple stunning blobs
export const FluidBlob = () => {
  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      {/* Premium gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950" />
      
      {/* 6 Main Elite fluid blobs - different colors and sizes */}
      {[
        { color: ['#3b82f6', '#1e40af'], size: 280, x: '10%', y: '15%', delay: 0 },
        { color: ['#8b5cf6', '#7c3aed'], size: 240, x: '70%', y: '10%', delay: 1.5 },
        { color: ['#ec4899', '#db2777'], size: 260, x: '15%', y: '65%', delay: 3 },
        { color: ['#06b6d4', '#0891b2'], size: 200, x: '75%', y: '70%', delay: 4.5 },
        { color: ['#10b981', '#059669'], size: 180, x: '45%', y: '20%', delay: 6 },
        { color: ['#f59e0b', '#d97706'], size: 160, x: '50%', y: '80%', delay: 7.5 }
      ].map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: blob.x,
            top: blob.y,
            background: `conic-gradient(from ${i * 60}deg, 
              ${blob.color[0]}, ${blob.color[1]}, ${blob.color[0]})`,
            animation: `eliteBlob ${20 + i * 2}s ease-in-out infinite ${blob.delay}s`,
            filter: `blur(${1 + i * 0.3}px)`,
          }}
        />
      ))}

      {/* 4 Additional accent blobs */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`accent-${i}`}
          className="absolute rounded-full opacity-40"
          style={{
            width: `${60 + i * 15}px`,
            height: `${60 + i * 15}px`,
            left: `${25 + i * 15}%`,
            top: `${35 + i * 8}%`,
            background: `radial-gradient(circle, 
              ${['#f59e0b', '#ef4444', '#10b981', '#8b5cf6'][i]}, 
              ${['#d97706', '#dc2626', '#059669', '#7c3aed'][i]})`,
            animation: `eliteAccentBlob ${14 + i * 1.5}s ease-in-out infinite ${i * 2}s`,
            filter: 'blur(1.5px)',
          }}
        />
      ))}

      {/* Premium liquid overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/8 to-pink-900/5" />
      
      {/* Text visibility enhancement */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15" />
      
      <style>{`
        @keyframes eliteBlob {
          0%, 100% { 
            transform: scale(1) rotate(0deg) translateY(0px) translateX(0px);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: scale(1.1) rotate(90deg) translateY(-25px) translateX(15px);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% { 
            transform: scale(0.9) rotate(180deg) translateY(20px) translateX(-10px);
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% { 
            transform: scale(1.05) rotate(270deg) translateY(-5px) translateX(20px);
            border-radius: 70% 30% 60% 40% / 40% 50% 60% 30%;
          }
        }
        @keyframes eliteAccentBlob {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.4;
          }
          50% { 
            transform: scale(1.2) rotate(180deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

// Elite Premium 3D - Most impressive 3D effects
export const Premium3D = () => {
  return (
    <div className="relative inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950" />
      
      {/* Elite 3D floating elements */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${70 + i * 12}px`,
              height: `${70 + i * 12}px`,
              left: `${12 + (i % 4) * 20}%`,
              top: `${12 + Math.floor(i / 4) * 18}%`,
              background: `conic-gradient(from ${i * 36}deg, 
                ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'][i % 5]}, 
                ${['#1e40af', '#7c3aed', '#db2777', '#0891b2', '#059669'][i % 5]})`,
              borderRadius: '25%',
              animation: `elite3D ${8 + i * 1.2}s ease-in-out infinite ${i * 0.5}s`,
              transformStyle: 'preserve-3d',
              opacity: 0.85,
              filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.4))',
            }}
          />
        ))}
      </div>
      
      {/* Elite particle orbit system */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: '50%',
              top: '50%',
              animation: `eliteOrbit3D ${12 + Math.random() * 8}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 18}deg) translateX(${70 + i * 4}px) rotate(-${i * 18}deg)`,
            }}
          />
        ))}
      </div>

      {/* Text visibility enhancement */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/8 to-black/20" />
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes elite3D {
          0%, 100% { 
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) scale(1);
          }
          25% { 
            transform: perspective(1000px) rotateX(25deg) rotateY(90deg) rotateZ(15deg) translateZ(50px) scale(1.15);
          }
          50% { 
            transform: perspective(1000px) rotateX(45deg) rotateY(180deg) rotateZ(30deg) translateZ(100px) scale(0.85);
          }
          75% { 
            transform: perspective(1000px) rotateX(25deg) rotateY(270deg) rotateZ(15deg) translateZ(50px) scale(1.08);
          }
        }
        @keyframes eliteOrbit3D {
          0% { 
            transform: rotate(0deg) translateX(70px) rotate(0deg) translateZ(0px); 
          }
          100% { 
            transform: rotate(360deg) translateX(70px) rotate(-360deg) translateZ(40px); 
          }
        }
      `}</style>
    </div>
  );
};
