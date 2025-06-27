
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Enhanced Dynamic Gradients with AI-like particle system
export const DynamicGradients = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Multi-layered gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/30 to-pink-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 via-transparent to-violet-500/10" />
      
      {/* Advanced particle system */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-70"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `linear-gradient(${Math.random() * 360}deg, 
                ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'][Math.floor(Math.random() * 5)]}, 
                ${['#1e40af', '#7c3aed', '#db2777', '#0891b2', '#059669'][Math.floor(Math.random() * 5)]})`,
              animation: `aiFloat ${3 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 2}s, 
                         aiGlow ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Neural network-like connections */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
            stroke="url(#neuralGradient)"
            strokeWidth="0.5"
            opacity="0.4"
            style={{
              animation: `neuralPulse ${4 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      <style>{`
        @keyframes aiFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
            opacity: 0.7; 
          }
          33% { 
            transform: translateY(-30px) scale(1.2) rotate(120deg); 
            opacity: 1; 
          }
          66% { 
            transform: translateY(15px) scale(0.8) rotate(240deg); 
            opacity: 0.8; 
          }
        }
        @keyframes aiGlow {
          0% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); 
          }
          100% { 
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(236, 72, 153, 0.3); 
          }
        }
        @keyframes neuralPulse {
          0%, 100% { opacity: 0.2; stroke-width: 0.5; }
          50% { opacity: 0.8; stroke-width: 1.5; }
        }
      `}</style>
    </div>
  );
};

// Interactive Sparkles with mouse response
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
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
            rgba(59, 130, 246, 0.4) 0%, 
            rgba(168, 85, 247, 0.3) 30%, 
            rgba(236, 72, 153, 0.2) 60%, 
            transparent 80%)`
        }} 
      />
      
      {/* Multiple layers of interactive sparkles */}
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `radial-gradient(circle, 
              ${['#ffffff', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 5)]}, 
              transparent)`,
            animation: `interactiveSparkle ${2 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Floating orbs with depth */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-60"
          style={{
            width: Math.random() * 100 + 50 + 'px',
            height: Math.random() * 100 + 50 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: `conic-gradient(from ${Math.random() * 360}deg, 
              #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)`,
            animation: `orbFloat ${8 + Math.random() * 8}s ease-in-out infinite ${Math.random() * 4}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}
      
      <style>{`
        @keyframes interactiveSparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(2) rotate(180deg); 
            box-shadow: 0 0 30px currentColor;
          }
        }
        @keyframes orbFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.6; 
          }
          33% { 
            transform: translateY(-50px) translateX(30px) scale(1.1); 
            opacity: 0.8; 
          }
          66% { 
            transform: translateY(20px) translateX(-20px) scale(0.9); 
            opacity: 0.7; 
          }
        }
      `}</style>
    </div>
  );
};

// Premium Animated Paths with smooth SVG curves
export const AnimatedPaths = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-black">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.6)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
          </linearGradient>
          <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Premium curved paths */}
        {[...Array(12)].map((_, i) => {
          const baseY = 100 + i * 60;
          const amplitude = 80 + Math.sin(i) * 40;
          const frequency = 0.01 + i * 0.002;
          
          return (
            <path
              key={i}
              d={`M-100,${baseY} Q200,${baseY - amplitude} 400,${baseY} T800,${baseY + amplitude * 0.5} T1200,${baseY} T1500,${baseY - amplitude * 0.3}`}
              stroke={i % 3 === 0 ? "url(#pathGradient1)" : "url(#pathGradient2)"}
              strokeWidth={4 - i * 0.2}
              fill="none"
              opacity={0.8 - i * 0.04}
              filter="url(#glow)"
              style={{
                animation: `premiumPathFlow ${12 + i * 3}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          );
        })}

        {/* Floating geometric elements */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`circle-${i}`}
            cx={200 + i * 180}
            cy={150 + Math.sin(i) * 100}
            r={3 + i * 0.5}
            fill="url(#pathGradient1)"
            opacity={0.6}
            style={{
              animation: `geometricFloat ${6 + i * 2}s ease-in-out infinite ${i * 0.5}s`
            }}
          />
        ))}
      </svg>
      
      <style>{`
        @keyframes premiumPathFlow {
          0%, 100% { 
            stroke-dasharray: 0 2000;
            opacity: 0.3;
            transform: translateX(0px);
          }
          50% { 
            stroke-dasharray: 400 2000;
            opacity: 0.9;
            transform: translateX(20px);
          }
        }
        @keyframes geometricFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-30px) scale(1.3);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

// Multi-colored Fluid Blobs with natural animation
export const FluidBlob = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Multiple fluid blobs */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-80"
          style={{
            width: `${300 + i * 100}px`,
            height: `${300 + i * 100}px`,
            left: `${10 + i * 20}%`,
            top: `${10 + i * 15}%`,
            background: `conic-gradient(from ${i * 90}deg, 
              ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][i]}, 
              ${['#1e40af', '#7c3aed', '#db2777', '#0891b2'][i]}, 
              ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'][i]})`,
            animation: `fluidBlob ${15 + i * 5}s ease-in-out infinite ${i * 2}s`,
            filter: `blur(${2 + i}px)`,
          }}
        />
      ))}

      {/* Liquid overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20" />
      
      <style>{`
        @keyframes fluidBlob {
          0%, 100% { 
            transform: scale(1) rotate(0deg) translateY(0px);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% { 
            transform: scale(1.1) rotate(90deg) translateY(-20px);
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% { 
            transform: scale(0.9) rotate(180deg) translateY(10px);
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% { 
            transform: scale(1.05) rotate(270deg) translateY(-10px);
            border-radius: 60% 40% 60% 30% / 70% 30% 60% 40%;
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced Premium 3D with impressive movement
export const Premium3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      
      {/* 3D floating elements with depth */}
      <div className="absolute inset-0 perspective-1000">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${15 + (i % 4) * 20}%`,
              top: `${10 + Math.floor(i / 4) * 25}%`,
              background: `conic-gradient(from ${i * 30}deg, 
                ${['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'][i % 6]}, 
                ${['#1e40af', '#7c3aed', '#db2777', '#0891b2', '#059669', '#d97706'][i % 6]})`,
              borderRadius: '20%',
              animation: `premium3D ${8 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
              transformStyle: 'preserve-3d',
              opacity: 0.8 - i * 0.03,
              filter: `blur(${Math.max(0, i - 8) * 0.5}px)`,
            }}
          />
        ))}
      </div>
      
      {/* Particle orbit system */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70"
            style={{
              left: '50%',
              top: '50%',
              animation: `orbit3D ${15 + Math.random() * 15}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
              transform: `rotate(${i * 7.2}deg) translateX(${100 + i * 8}px) rotate(-${i * 7.2}deg)`,
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
            transform: perspective(1000px) rotateX(15deg) rotateY(90deg) rotateZ(15deg) translateZ(50px) scale(1.1);
          }
          50% { 
            transform: perspective(1000px) rotateX(30deg) rotateY(180deg) rotateZ(30deg) translateZ(100px) scale(0.9);
          }
          75% { 
            transform: perspective(1000px) rotateX(15deg) rotateY(270deg) rotateZ(15deg) translateZ(50px) scale(1.05);
          }
        }
        @keyframes orbit3D {
          0% { 
            transform: rotate(0deg) translateX(100px) rotate(0deg) translateZ(0px); 
          }
          100% { 
            transform: rotate(360deg) translateX(100px) rotate(-360deg) translateZ(50px); 
          }
        }
      `}</style>
    </div>
  );
};
