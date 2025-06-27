
import React, { useRef, useEffect } from 'react';

// Enhanced Dynamic Gradients - reduced particle count for better performance
export const DynamicGradients = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base controlled by user colors - no fixed background */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/40 to-pink-600/30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/20 via-transparent to-violet-500/20" />
      </div>
      
      {/* Optimized particle system - reduced from 150 to 30 */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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

// FIXED: Stable Sparkles - NO MORE FLICKERING
export const AdvancedSparkles = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* REMOVED: Fixed background color - now controlled by user */}
      
      {/* Static sparkles - no rapid animation changes */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, 
              ${['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)]}, 
              transparent)`,
            animation: `stableSparkle ${8 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Stable floating orbs - slower animation */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-30"
          style={{
            width: Math.random() * 60 + 40 + 'px',
            height: Math.random() * 60 + 40 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `conic-gradient(from ${Math.random() * 360}deg, 
              #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)`,
            animation: `stableOrbFloat ${15 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}
      
      <style>{`
        @keyframes stableSparkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(0.8) rotate(0deg); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.1) rotate(180deg); 
          }
        }
        @keyframes stableOrbFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-15px) translateX(10px) scale(1.02); 
            opacity: 0.5; 
          }
        }
      `}</style>
    </div>
  );
};

// COMPLETELY REDESIGNED: Premium 3D Animated Paths
export const AnimatedPaths = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ perspective: '1000px' }}>
      {/* REMOVED: Fixed background - now user controlled */}
      
      {/* 3D Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute"
            style={{
              width: `${60 + i * 8}px`,
              height: `${60 + i * 8}px`,
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              background: `conic-gradient(from ${i * 45}deg, 
                ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'][i % 5]}, 
                ${['#1e40af', '#7c3aed', '#db2777', '#0891b2', '#059669'][i % 5]})`,
              borderRadius: '20%',
              animation: `premium3DFloat ${12 + i * 2}s ease-in-out infinite ${i * 0.8}s`,
              transformStyle: 'preserve-3d',
              opacity: 0.7,
              filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.3))',
              boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)',
            }}
          />
        ))}
      </div>

      {/* Premium SVG Path System */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="premium3DPath1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.6)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
          </linearGradient>
          <linearGradient id="premium3DPath2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.6)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
          </linearGradient>
          
          <filter id="premium3DGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* 3D Premium flowing paths */}
        {[...Array(6)].map((_, i) => {
          const baseY = 150 + i * 80;
          const waveHeight = 100 + Math.sin(i * 0.7) * 50;
          
          const pathData = `M-100,${baseY} 
            Q${300 + Math.sin(i) * 80},${baseY - waveHeight} 
            ${600 + Math.cos(i) * 60},${baseY + waveHeight * 0.4} 
            T${1000 + Math.sin(i * 1.1) * 40},${baseY - waveHeight * 0.6} 
            Q${1300 + Math.cos(i * 0.9) * 80},${baseY + waveHeight * 0.3} 
            ${1500},${baseY}`;
          
          return (
            <path
              key={i}
              d={pathData}
              stroke={`url(#premium3DPath${(i % 2) + 1})`}
              strokeWidth={8 - i * 0.8}
              fill="none"
              opacity={0.8 - i * 0.1}
              filter="url(#premium3DGlow)"
              style={{
                animation: `premium3DPathFlow ${20 + i * 3}s ease-in-out infinite`,
                animationDelay: `${i * 1.2}s`,
                strokeDasharray: `${120 + i * 30} ${240 + i * 40}`,
                transform: `rotateX(${i * 5}deg) rotateY(${i * 3}deg)`,
                transformOrigin: 'center',
              }}
            />
          );
        })}

        {/* 3D Floating particles with depth */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={`3d-particle-${i}`}
            cx={200 + i * 80 + Math.sin(i) * 150}
            cy={300 + Math.cos(i * 0.8) * 200}
            r={3 + Math.random() * 2}
            fill={`url(#premium3DPath${(i % 2) + 1})`}
            opacity={0.9}
            filter="url(#premium3DGlow)"
            style={{
              animation: `premium3DParticle ${10 + i * 0.8}s ease-in-out infinite ${i * 0.5}s`,
              transform: `translateZ(${i * 5}px)`,
            }}
          />
        ))}
      </svg>
      
      <style>{`
        @keyframes premium3DFloat {
          0%, 100% { 
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) scale(1);
            filter: drop-shadow(0 15px 35px rgba(0,0,0,0.3)) brightness(1);
          }
          25% { 
            transform: perspective(1000px) rotateX(15deg) rotateY(90deg) rotateZ(10deg) translateZ(30px) scale(1.05);
            filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.2);
          }
          50% { 
            transform: perspective(1000px) rotateX(30deg) rotateY(180deg) rotateZ(20deg) translateZ(60px) scale(0.95);
            filter: drop-shadow(0 35px 70px rgba(0,0,0,0.5)) brightness(1.4);
          }
          75% { 
            transform: perspective(1000px) rotateX(15deg) rotateY(270deg) rotateZ(10deg) translateZ(30px) scale(1.02);
            filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.1);
          }
        }
        @keyframes premium3DPathFlow {
          0%, 100% { 
            stroke-dashoffset: 0;
            opacity: 0.7;
            transform: rotateX(0deg) rotateY(0deg) scale(1);
          }
          33% { 
            stroke-dashoffset: -150;
            opacity: 1;
            transform: rotateX(10deg) rotateY(5deg) scale(1.1);
          }
          66% { 
            stroke-dashoffset: -300;
            opacity: 0.9;
            transform: rotateX(-5deg) rotateY(-3deg) scale(0.95);
          }
        }
        @keyframes premium3DParticle {
          0%, 100% { 
            transform: translateY(0px) translateZ(0px) scale(1) rotate(0deg);
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-30px) translateZ(20px) scale(1.3) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

// FIXED: Multiple Fluid Blobs - 6 different blobs
export const FluidBlob = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* REMOVED: Fixed background - now user controlled */}
      
      {/* 6 Main Fluid blobs in different colors, sizes and positions */}
      {[
        { color: ['#3b82f6', '#1e40af'], size: 320, x: '10%', y: '15%', delay: 0 },
        { color: ['#8b5cf6', '#7c3aed'], size: 280, x: '70%', y: '10%', delay: 1.5 },
        { color: ['#ec4899', '#db2777'], size: 350, x: '15%', y: '65%', delay: 3 },
        { color: ['#06b6d4', '#0891b2'], size: 240, x: '75%', y: '70%', delay: 4.5 },
        { color: ['#10b981', '#059669'], size: 200, x: '45%', y: '25%', delay: 6 },
        { color: ['#f59e0b', '#d97706'], size: 180, x: '55%', y: '45%', delay: 7.5 }
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
            animation: `multiFluidBlob ${16 + i * 2}s ease-in-out infinite ${blob.delay}s`,
            filter: `blur(${1.5 + i * 0.3}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Additional smaller accent blobs for more complexity */}
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
              ${['#f59e0b', '#ef4444', '#10b981', '#6366f1'][i]}, 
              ${['#d97706', '#dc2626', '#059669', '#4f46e5'][i]})`,
            animation: `accentFluidBlob ${10 + i * 1.5}s ease-in-out infinite ${i * 1.2}s`,
            filter: 'blur(1.5px)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Liquid overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />
      
      <style>{`
        @keyframes multiFluidBlob {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            opacity: 0.6;
          }
          20% { 
            transform: translate(-50%, -50%) scale(1.2) rotate(72deg);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            opacity: 0.8;
          }
          40% { 
            transform: translate(-50%, -50%) scale(0.8) rotate(144deg);
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
            opacity: 0.4;
          }
          60% { 
            transform: translate(-50%, -50%) scale(1.1) rotate(216deg);
            border-radius: 70% 30% 60% 40% / 40% 50% 60% 30%;
            opacity: 0.7;
          }
          80% { 
            transform: translate(-50%, -50%) scale(0.9) rotate(288deg);
            border-radius: 40% 70% 50% 30% / 60% 40% 30% 70%;
            opacity: 0.5;
          }
        }
        @keyframes accentFluidBlob {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          33% { 
            transform: translate(-50%, -50%) scale(1.4) rotate(120deg);
            opacity: 0.6;
          }
          66% { 
            transform: translate(-50%, -50%) scale(0.7) rotate(240deg);
            opacity: 0.3;
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
      {/* REMOVED: Fixed background - now user controlled */}
      
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
