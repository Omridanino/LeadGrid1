
'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

extend(THREE as any);

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: rawMap,
      transparent: true,
      opacity: 0,
    });
  }, [rawMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(() => {
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = THREE.MathUtils.lerp(
        mat.opacity,
        visible ? 1 : 0,
        0.07
      );
    }
  });

  const scaleFactor = 0.40;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

interface HeroFuturisticProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  formData?: any;
  content?: any;
}

export const HeroFuturistic = ({
  title = "Build Your Dreams",
  subtitle = "AI-powered creativity for the next generation.",
  buttonText = "Scroll to explore",
  onButtonClick,
  formData,
  content
}: HeroFuturisticProps) => {
  // Use content values first, then formData, then defaults
  const displayTitle = content?.headline || formData?.businessName || title || "Build Your Dreams";
  const displaySubtitle = content?.subheadline || formData?.businessStory || subtitle || "AI-powered creativity for the next generation.";
  const displayDescription = content?.description || formData?.mainServices || "";
  const displayButtonText = content?.buttons?.[0]?.text || buttonText || "Scroll to explore";
  const badgeText = content?.badge || "";
  
  const titleWords = displayTitle.split(' ');
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  // Enhanced styling functions with comprehensive color support
  const getTextStyleClasses = (style: string) => {
    console.log('HeroFuturistic - getTextStyleClasses called with:', style);
    
    if (!style || style === 'default') return "text-white";
    
    switch (style) {
      case "black-text": return "text-black";
      case "white-text": return "text-white"; 
      case "gold-text": return "text-yellow-400";
      case "silver-text": return "text-gray-300";
      case "blue-text": return "text-blue-400";
      case "green-text": return "text-green-400";
      case "red-text": return "text-red-400";
      case "purple-text": return "text-purple-400";
      case "pink-text": return "text-pink-400";
      case "cyan-text": return "text-cyan-400";
      case "gradient-gold-text": return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
      case "gradient-purple-text": return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
      case "gradient-blue-text": return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
      case "gradient-green-text": return "bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent";
      case "gradient-red-text": return "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent";
      case "gradient-cyan-text": return "bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent";
      case "gradient-rainbow-text": return "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent";
      default: 
        console.log('HeroFuturistic - Unknown text style, using default:', style);
        return "text-white";
    }
  };

  const getBadgeStyleClasses = (style: string) => {
    console.log('HeroFuturistic - getBadgeStyleClasses called with:', style);
    
    if (!style || style === 'default') return "bg-white/10 text-white border border-white/30 backdrop-blur-sm";
    
    switch (style) {
      case "black-on-white": return "bg-white text-black border border-black";
      case "white-on-black": return "bg-black text-white border border-white";
      case "gradient-gold-black": return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
      case "gradient-gold-white": return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
      case "gradient-purple-tech": return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0";
      case "gradient-blue-ocean": return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
      case "gradient-green-nature": return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
      case "gradient-red-fire": return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0";
      case "gradient-pink-sunset": return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0";
      case "neon-blue": return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50";
      case "neon-green": return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50";
      case "neon-purple": return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50";
      case "neon-pink": return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50";
      case "glass-dark": return "bg-black/20 text-white border border-white/30 backdrop-blur-sm";
      case "glass-light": return "bg-white/20 text-black border border-black/30 backdrop-blur-sm";
      default: 
        console.log('HeroFuturistic - Unknown badge style, using default:', style);
        return "bg-white/10 text-white border border-white/30 backdrop-blur-sm";
    }
  };

  const getButtonStyleClasses = (style: string) => {
    console.log('HeroFuturistic - getButtonStyleClasses called with:', style);
    
    if (!style || style === 'default') return "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20";
    
    switch (style) {
      case "black-on-white": return "bg-white text-black border border-black hover:bg-gray-100";
      case "white-on-black": return "bg-black text-white border border-white hover:bg-gray-900";
      case "gradient-gold-black": return "bg-gradient-to-r from-yellow-400 to-black text-white border-0 hover:from-yellow-500 hover:to-gray-900";
      case "gradient-gold-white": return "bg-gradient-to-r from-yellow-400 to-white text-black border-0 hover:from-yellow-500 hover:to-gray-100";
      case "gradient-purple-tech": return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0 hover:from-purple-700 hover:to-blue-600";
      case "gradient-blue-ocean": return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600";
      case "gradient-green-nature": return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 hover:from-green-600 hover:to-emerald-600";
      case "gradient-red-fire": return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 hover:from-red-600 hover:to-orange-600";
      case "gradient-pink-sunset": return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 hover:from-pink-600 hover:to-rose-600";
      case "neon-blue": return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50 hover:bg-blue-700";
      case "neon-green": return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50 hover:bg-green-700";
      case "neon-purple": return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50 hover:bg-purple-700";
      case "neon-pink": return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50 hover:bg-pink-700";
      case "glass-dark": return "bg-black/20 text-white border border-white/30 backdrop-blur-sm hover:bg-black/30";
      case "glass-light": return "bg-white/20 text-black border border-black/30 backdrop-blur-sm hover:bg-white/30";
      default: 
        console.log('HeroFuturistic - Unknown button style, using default:', style);
        return "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20";
    }
  };

  const getBackgroundClasses = (style: string) => {
    console.log('HeroFuturistic - getBackgroundClasses called with:', style);
    
    if (!style || style === 'default') return "bg-black";
    
    switch (style) {
      case "dark": return "bg-gray-950";
      case "light": return "bg-white";
      case "gradient-blue": return "bg-gradient-to-br from-blue-950 to-blue-900";
      case "gradient-purple": return "bg-gradient-to-br from-purple-950 to-purple-900";
      case "gradient-green": return "bg-gradient-to-br from-green-950 to-green-900";
      case "gradient-orange": return "bg-gradient-to-br from-orange-950 to-orange-900";
      case "gradient-pink": return "bg-gradient-to-br from-pink-950 to-pink-900";
      case "tech-dark": return "bg-black";
      case "minimal-light": return "bg-gray-100";
      default: 
        console.log('HeroFuturistic - Unknown background style, using default:', style);
        return "bg-black";
    }
  };

  return (
    <div className={`h-screen relative overflow-hidden ${getBackgroundClasses(content?.backgroundStyle)}`}>
      <div className="h-screen uppercase items-center w-full absolute z-60 pointer-events-none px-10 flex justify-center flex-col">
        {badgeText && (
          <div className="mb-6 flex justify-center">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getBadgeStyleClasses(content?.badgeStyle)} ${getTextStyleClasses(content?.badgeTextStyle)}`}>
              {badgeText}
            </span>
          </div>
        )}
        
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${index < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${getTextStyleClasses(content?.headlineStyle)}`}
                style={{ 
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden font-bold">
          <div
            className={`transition-all duration-1000 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${getTextStyleClasses(content?.subheadlineStyle)}`}
            style={{ 
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`
            }}
          >
            {displaySubtitle}
          </div>
        </div>
        
        {displayDescription && (
          <div className="text-sm md:text-lg xl:text-xl 2xl:text-2xl mt-4 overflow-hidden">
            <div className={`transition-all duration-1000 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${getTextStyleClasses(content?.descriptionStyle)}`}>
              {displayDescription}
            </div>
          </div>
        )}
      </div>

      <button
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${getButtonStyleClasses(content?.buttons?.[0]?.style)} ${content?.buttons?.[0]?.textStyle && content.buttons[0].textStyle !== 'default' ? getTextStyleClasses(content.buttons[0].textStyle) : ''}`}
        style={{ animationDelay: '2.2s' }}
        onClick={onButtonClick}
      >
        {displayButtonText}
        <span className="animate-bounce">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 12L11 17L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <Canvas
        flat
        className="absolute inset-0"
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;
