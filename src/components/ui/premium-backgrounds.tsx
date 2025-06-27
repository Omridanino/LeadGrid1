
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Dynamic Gradients with Particle Effects
export const DynamicGradients = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// Advanced Sparkles with Interactive Effects
export const AdvancedSparkles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.3) 0%, rgba(168, 85, 247, 0.2) 30%, transparent 70%)`
      }} />
      
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `sparkle ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg); 
            box-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
        }
      `}</style>
    </div>
  );
};

// 3D Geometric Shapes
const GeometricShader = {
  vertex: `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    
    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 pos = position;
      pos.z += sin(pos.x * 2.0 + time) * 0.1;
      pos.z += cos(pos.y * 2.0 + time) * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragment: `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    
    void main() {
      vec2 uv = vUv;
      
      float pattern = sin(uv.x * 10.0 + time) * cos(uv.y * 10.0 + time);
      vec3 color = mix(
        vec3(0.2, 0.4, 1.0),
        vec3(1.0, 0.3, 0.8),
        pattern * 0.5 + 0.5
      );
      
      gl_FragColor = vec4(color, 0.8);
    }
  `
};

function GeometricMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    time: { value: 0 }
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={GeometricShader.vertex}
        fragmentShader={GeometricShader.fragment}
        transparent
      />
    </mesh>
  );
}

export const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GeometricMesh />
      </Canvas>
    </div>
  );
};

// Animated Paths with Smooth Curves
export const AnimatedPaths = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-neutral-950 dark:to-neutral-900">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
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
        </defs>
        
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M${100 + i * 120},${200 + Math.sin(i) * 100} Q${300 + i * 80},${100 + Math.cos(i) * 150} ${500 + i * 60},${400 + Math.sin(i * 2) * 200} T${800 + i * 40},${600 + Math.cos(i * 1.5) * 100}`}
            stroke={i % 2 === 0 ? "url(#pathGradient1)" : "url(#pathGradient2)"}
            strokeWidth={3 - i * 0.2}
            fill="none"
            opacity={0.7 - i * 0.05}
            style={{
              animation: `pathFlow ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </svg>
      
      <style jsx>{`
        @keyframes pathFlow {
          0%, 100% { 
            stroke-dasharray: 0 1000;
            opacity: 0.3;
          }
          50% { 
            stroke-dasharray: 200 1000;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

// Premium Spline 3D Alternative
export const Premium3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              background: `conic-gradient(from ${i * 60}deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)`,
              animation: `float3D ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `perspective(1000px) rotateX(${i * 15}deg) rotateY(${i * 20}deg)`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      {/* Particle System */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `orbit ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes orbit {
          0% { 
            transform: rotate(0deg) translateX(50px) rotate(0deg); 
          }
          100% { 
            transform: rotate(360deg) translateX(50px) rotate(-360deg); 
          }
        }
        
        @keyframes float3D {
          0%, 100% { 
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px); 
          }
          50% { 
            transform: perspective(1000px) rotateX(15deg) rotateY(15deg) translateZ(50px); 
          }
        }
      `}</style>
    </div>
  );
};
