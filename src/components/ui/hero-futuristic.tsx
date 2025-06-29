'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

extend(THREE as any);

// מערך של תמונות שונות לוריאציות - הרחבתי ל-5 וריאציות
const TEXTURE_VARIATIONS = [
  {
    texture: 'https://i.postimg.cc/XYwvXN8D/img-4.png',
    depth: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp'
  },
  {
    texture: 'https://i.postimg.cc/kg8yJtRB/tech-abstract-1.jpg',
    depth: 'https://i.postimg.cc/L6mK2vXd/tech-depth-1.jpg'
  },
  {
    texture: 'https://i.postimg.cc/9f8KzL2D/cyber-grid.jpg', 
    depth: 'https://i.postimg.cc/GtR5Y8hf/cyber-depth.jpg'
  },
  {
    texture: 'https://i.postimg.cc/d1PqXj8Y/neon-circuit.jpg',
    depth: 'https://i.postimg.cc/FzGkL7Wv/neon-depth.jpg'
  },
  {
    texture: 'https://i.postimg.cc/3x4Rj9Kp/hologram-tech.jpg',
    depth: 'https://i.postimg.cc/vTnMp8Qf/hologram-depth.jpg'
  }
];

const WIDTH = 300;
const HEIGHT = 300;

const Scene = ({ variation }: { variation: number }) => {
  const selectedTextures = TEXTURE_VARIATIONS[variation] || TEXTURE_VARIATIONS[0];
  const [rawMap, depthMap] = useTexture([selectedTextures.texture, selectedTextures.depth]);
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
  formData?: any;
  currentColors?: any;
  content?: any;
}

// Helper function to get text style classes
const getTextStyleClasses = (elementStyle: string) => {
  switch (elementStyle) {
    case "black-text":
      return "text-black";
    case "white-text":
      return "text-white";
    case "gold-text":
      return "text-yellow-400";
    case "gradient-gold-text":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
    case "gradient-purple-text":
      return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
    case "gradient-blue-text":
      return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
    case "gradient-neon-text":
      return "bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent";
    case "gradient-fire-text":
      return "bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent";
    default:
      return "text-white";
  }
};

// פונקציה לקבלת וריאציה רנדומלית - עודכנה ל-5 וריאציות
const getRandomVariation = () => {
  return Math.floor(Math.random() * 5); // 0, 1, 2, 3, או 4
};

// פונקציה לקבלת סגנון רקע רנדומלי - הרחבתי ל-5 סגנונות
const getRandomBackgroundStyle = (variation: number) => {
  const styles = [
    "bg-gradient-to-br from-black via-purple-900/30 to-black",
    "bg-gradient-to-br from-black via-blue-900/30 to-black", 
    "bg-gradient-to-br from-black via-cyan-900/30 to-black",
    "bg-gradient-to-br from-black via-pink-900/30 to-black",
    "bg-gradient-to-br from-black via-green-900/30 to-black"
  ];
  return styles[variation] || styles[0];
};

// פונקציה לקבלת צבע כפתור רנדומלי - הרחבתי ל-5 סגנונות
const getRandomButtonStyle = (variation: number) => {
  const styles = [
    "bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20",
    "bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 text-purple-100 hover:bg-purple-600/30",
    "bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-100 hover:bg-cyan-600/30",
    "bg-pink-600/20 backdrop-blur-sm border border-pink-400/30 text-pink-100 hover:bg-pink-600/30",
    "bg-green-600/20 backdrop-blur-sm border border-green-400/30 text-green-100 hover:bg-green-600/30"
  ];
  return styles[variation] || styles[0];
};

export const HeroFuturistic = ({
  formData,
  currentColors,
  content
}: HeroFuturisticProps) => {
  // קבלת וריאציה רנדומלית וקבועה לכל עמוד
  const [variation] = useState(() => getRandomVariation());
  
  // קבלת הטקסט מה-content או מה-formData
  const mainTitle = content?.headline || formData?.businessStory || "Build Your Dreams";
  const subtitle = content?.subheadline || formData?.mainServices || "AI-powered creativity for the next generation.";
  const buttonText = content?.buttons?.[0]?.text || "Scroll to explore";
  
  const titleWords = mainTitle.split(' ');
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

  const onButtonClick = () => {
    // גלילה לאלמנט הבא
    const nextSection = document.querySelector('[data-section="next"]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`h-screen relative overflow-hidden ${getRandomBackgroundStyle(variation)}`}>
      <div className="h-screen uppercase items-center w-full absolute z-60 pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden flex-wrap justify-center">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index < visibleWords ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${content?.headlineStyle ? getTextStyleClasses(content.headlineStyle) : 'text-white'}`}
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
            className={`transition-all duration-1000 ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            } ${content?.subheadlineStyle ? getTextStyleClasses(content.subheadlineStyle) : 'text-white'}`}
            style={{ 
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <button
        className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto ${getRandomButtonStyle(variation)} px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2`}
        style={{ animationDelay: '2.2s' }}
        onClick={onButtonClick}
      >
        {buttonText}
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
        <Scene variation={variation} />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;
