
import React, { useRef, useEffect } from 'react';

// === DYNAMIC GRADIENTS - Flowing liquid animations with geometric overlays ===
export const DynamicGradients = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Flowing gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
      
      {/* Animated gradient waves */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
            `,
            animation: 'gradientShift 12s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-60"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(${Math.random() * 360}deg, 
                rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.4))`,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0' : '20%',
              animation: `floatGeometric ${8 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/15" />
      
      <style>{`
        @keyframes gradientShift {
          0%, 100% { transform: translateX(0%) rotate(0deg); }
          33% { transform: translateX(-10%) rotate(120deg); }
          66% { transform: translateX(10%) rotate(240deg); }
        }
        @keyframes floatGeometric {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg) scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

// === ADVANCED SPARKLES - Interactive particle system with mouse tracking ===
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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Dark cosmic base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
      
      {/* Interactive mouse trail */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(168, 85, 247, 0.1) 40%, 
            transparent 80%)`
        }}
      />
      
      {/* Floating sparkle particles */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 4)],
              borderRadius: '50%',
              animation: `sparkleFloat ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 6px currentColor',
            }}
          />
        ))}
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="1"
            style={{
              animation: `constellationPulse ${10 + i * 2}s ease-in-out infinite ${i}s`
            }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes sparkleFloat {
          0%, 100% { 
            opacity: 0; 
            transform: translateY(0px) scale(0);
          }
          50% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1.5);
          }
        }
        @keyframes constellationPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

// === ANIMATED PATHS - Flowing energy streams with 3D depth ===
export const AnimatedPaths = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-950" />
      
      {/* 3D perspective container */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          style={{ transform: 'rotateX(10deg) rotateY(-5deg)' }}
        >
          <defs>
            <linearGradient id="energyFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
            </linearGradient>
            <linearGradient id="energyFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.8)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
            </linearGradient>
            <filter id="energyGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Flowing energy paths */}
          {[...Array(12)].map((_, i) => {
            const y = 100 + i * 60;
            const amplitude = 80 + Math.sin(i * 0.5) * 40;
            return (
              <path
                key={i}
                d={`M-100,${y} Q${200 + Math.sin(i) * 50},${y - amplitude} ${600},${y + amplitude * 0.5} T${1300},${y}`}
                stroke={i % 2 === 0 ? "url(#energyFlow1)" : "url(#energyFlow2)"}
                strokeWidth={4 - i * 0.2}
                fill="none"
                filter="url(#energyGlow)"
                style={{
                  animation: `energyFlow ${15 + i * 2}s linear infinite`,
                  strokeDasharray: `${60 + i * 10} ${120 + i * 20}`,
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Energy nodes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '12px',
              height: '12px',
              left: `${20 + i * 15}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              background: 'radial-gradient(circle, rgba(59, 130, 246, 1), rgba(59, 130, 246, 0))',
              borderRadius: '50%',
              animation: `nodeGlow ${8 + i}s ease-in-out infinite ${i * 2}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes energyFlow {
          0% { 
            stroke-dashoffset: 0;
            opacity: 0.7;
          }
          50% { 
            stroke-dashoffset: -200;
            opacity: 1;
          }
          100% { 
            stroke-dashoffset: -400;
            opacity: 0.7;
          }
        }
        @keyframes nodeGlow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

// === FLUID BLOBS - Multiple organic liquid forms ===
export const FluidBlob = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Liquid gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      
      {/* Multiple fluid blobs with different characteristics */}
      {[
        { size: 300, x: '15%', y: '20%', colors: ['#3b82f6', '#1d4ed8'], delay: 0, speed: 20 },
        { size: 250, x: '70%', y: '15%', colors: ['#8b5cf6', '#7c3aed'], delay: 3, speed: 25 },
        { size: 280, x: '20%', y: '70%', colors: ['#ec4899', '#db2777'], delay: 6, speed: 18 },
        { size: 200, x: '75%', y: '75%', colors: ['#06b6d4', '#0891b2'], delay: 9, speed: 22 },
        { size: 180, x: '50%', y: '30%', colors: ['#10b981', '#059669'], delay: 12, speed: 24 },
        { size: 160, x: '45%', y: '85%', colors: ['#f59e0b', '#d97706'], delay: 15, speed: 19 }
      ].map((blob, i) => (
        <div
          key={i}
          className="absolute opacity-70"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(circle at 30% 30%, ${blob.colors[0]}80, ${blob.colors[1]}40)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animation: `fluidMorph ${blob.speed}s ease-in-out infinite ${blob.delay}s`,
            filter: `blur(${1 + i * 0.5}px)`,
          }}
        />
      ))}

      {/* Liquid surface effects */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`ripple-${i}`}
            className="absolute rounded-full border-2 border-blue-400/20"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${30 + (i % 3) * 20}%`,
              top: `${25 + Math.floor(i / 3) * 25}%`,
              animation: `liquidRipple ${12 + i * 2}s ease-in-out infinite ${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Liquid particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, 
                ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 4)]}, 
                transparent)`,
              animation: `liquidFloat ${10 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fluidMorph {
          0%, 100% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(0deg) scale(1);
          }
          25% { 
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(90deg) scale(1.1);
          }
          50% { 
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
            transform: rotate(180deg) scale(0.9);
          }
          75% { 
            border-radius: 70% 30% 60% 40% / 40% 50% 60% 30%;
            transform: rotate(270deg) scale(1.05);
          }
        }
        @keyframes liquidRipple {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0.1;
          }
        }
        @keyframes liquidFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          33% { 
            transform: translateY(-25px) translateX(15px);
            opacity: 1;
          }
          66% { 
            transform: translateY(10px) translateX(-10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

// === PREMIUM 3D - Sophisticated 3D environment with depth ===
export const Premium3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Deep 3D space background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black" />
      
      {/* 3D floating architecture */}
      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        {/* Main 3D structures */}
        {[...Array(8)].map((_, i) => {
          const size = 80 + i * 20;
          const depth = 20 + i * 10;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${15 + (i % 3) * 25}%`,
                top: `${15 + Math.floor(i / 3) * 20}%`,
                transformStyle: 'preserve-3d',
                animation: `rotate3D ${12 + i * 2}s linear infinite`,
              }}
            >
              {/* 3D cube faces */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, 
                    ${['#1e40af', '#7c3aed', '#db2777', '#059669'][i % 4]}80, 
                    ${['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][i % 4]}40)`,
                  transform: `rotateY(0deg) translateZ(${depth}px)`,
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(2px)',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, 
                    ${['#1e40af', '#7c3aed', '#db2777', '#059669'][i % 4]}60, 
                    ${['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][i % 4]}20)`,
                  transform: `rotateY(90deg) translateZ(${depth}px)`,
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(2px)',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 3D particle system */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={`3d-particle-${i}`}
            className="absolute"
            style={{
              width: '6px',
              height: '6px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)',
              borderRadius: '50%',
              animation: `orbit3D ${15 + Math.random() * 10}s linear infinite`,
              transformStyle: 'preserve-3d',
            }}
          />
        ))}
      </div>

      {/* 3D grid lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${i * 10}%`}
                y1="0%"
                x2={`${i * 10}%`}
                y2="100%"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                style={{ animation: `gridPulse ${8 + i}s ease-in-out infinite` }}
              />
              <line
                x1="0%"
                y1={`${i * 10}%`}
                x2="100%"
                y2={`${i * 10}%`}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                style={{ animation: `gridPulse ${8 + i}s ease-in-out infinite ${i * 0.5}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      <style>{`
        @keyframes rotate3D {
          0% { 
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
          }
          25% { 
            transform: rotateX(90deg) rotateY(45deg) rotateZ(15deg) translateZ(30px);
          }
          50% { 
            transform: rotateX(180deg) rotateY(90deg) rotateZ(30deg) translateZ(60px);
          }
          75% { 
            transform: rotateX(270deg) rotateY(135deg) rotateZ(45deg) translateZ(30px);
          }
          100% { 
            transform: rotateX(360deg) rotateY(180deg) rotateZ(60deg) translateZ(0px);
          }
        }
        @keyframes orbit3D {
          0% { 
            transform: rotateY(0deg) translateX(60px) rotateY(0deg) translateZ(0px);
          }
          100% { 
            transform: rotateY(360deg) translateX(60px) rotateY(-360deg) translateZ(40px);
          }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};
