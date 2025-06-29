
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface AuroraHeroProps {
  formData?: any;
  currentColors?: any;
  content?: any;
}

export const AuroraHero = ({ formData, currentColors, content }: AuroraHeroProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  // Use content values first, then formData, then defaults
  const businessName = content?.headline || formData?.businessName || "Decrease your SaaS churn by over 90%";
  const description = content?.description || formData?.businessStory || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et, distinctio eum impedit nihil ipsum modi.";
  const badgeText = content?.badge || "Beta Now Live!";
  const buttonText = content?.buttons?.[0]?.text || "Start free trial";

  // Enhanced styling functions with ALL colors working
  const getTextStyleClasses = (style: string) => {
    console.log('AuroraHero - getTextStyleClasses called with:', style);
    
    if (!style || style === 'default') return "text-transparent";
    
    switch (style) {
      // Basic colors - English and Hebrew
      case "black-text":
      case "שחור":
        return "text-black";
      case "white-text":
      case "לבן":
        return "text-white";
      case "gold-text":
      case "זהב":
        return "text-yellow-400";
      case "silver-text":
      case "כסף":
        return "text-gray-300";
      case "blue-text":
      case "כחול":
        return "text-blue-400";
      case "green-text":
      case "ירוק":
        return "text-green-400";
      case "red-text":
      case "אדום":
        return "text-red-400";
      case "purple-text":
      case "סגול":
        return "text-purple-400";
      case "pink-text":
      case "ורוד":
        return "text-pink-400";
      case "cyan-text":
      case "ציאן":
        return "text-cyan-400";
      
      // Gradient colors - English and Hebrew
      case "gradient-gold-text":
      case "גרדיאנט זהב":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
      case "gradient-purple-text":
      case "גרדיאנט סגול":
        return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
      case "gradient-blue-text":
      case "גרדיאנט כחול":
        return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
      case "gradient-green-text":
      case "גרדיאנט ירוק":
        return "bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent";
      case "gradient-red-text":
      case "גרדיאנט אדום":
        return "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent";
      case "gradient-cyan-text":
      case "גרדיאנט ציאן":
        return "bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent";
      case "gradient-rainbow-text":
      case "גרדיאנט קשת":
        return "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent";
      case "gradient-blue-ocean":
      case "גרדיאנט כחול אוקיינוס":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent";
      case "gradient-green-nature":
      case "גרדיאנט ירוק טבע":
        return "bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent";
      case "gradient-red-fire":
      case "גרדיאנט אדום אש":
        return "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent";
      case "gradient-pink-sunset":
      case "גרדיאנט ורוד שקיעה":
        return "bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent";
      case "gradient-gold-black":
      case "גרדיאנט זהב שחור":
        return "bg-gradient-to-r from-yellow-400 to-black bg-clip-text text-transparent";
      case "gradient-gold-white":
      case "גרדיאנט זהב לבן":
        return "bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent";
      case "gradient-purple-tech":
      case "גרדיאנט סגול טכנולוגי":
        return "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent";
      
      // Neon colors - English and Hebrew
      case "neon-blue":
      case "נאון כחול":
        return "text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]";
      case "neon-green":
      case "נאון ירוק":
        return "text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]";
      case "neon-purple":
      case "נאון סגול":
        return "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]";
      case "neon-pink":
      case "נאון ורוד":
        return "text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]";
      
      default: 
        console.log('AuroraHero - Unknown text style, using default:', style);
        return "text-transparent";
    }
  };

  const getBadgeStyleClasses = (style: string) => {
    console.log('AuroraHero - getBadgeStyleClasses called with:', style);
    
    if (!style || style === 'default') return "bg-gray-600/50";
    
    switch (style) {
      case "black-on-white":
      case "שחור על לבן":
        return "bg-white text-black border border-black";
      case "white-on-black":
      case "לבן על שחור":
        return "bg-black text-white border border-white";
      case "gradient-gold-black":
      case "גרדיאנט זהב-שחור":
        return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
      case "gradient-gold-white":
      case "גרדיאנט זהב-לבן":
        return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
      case "gradient-purple-tech":
      case "גרדיאנט סגול טכנולוגי":
        return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0";
      case "gradient-blue-ocean":
      case "גרדיאנט כחול אוקיינוס":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
      case "gradient-green-nature":
      case "גרדיאנט ירוק טבע":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
      case "gradient-red-fire":
      case "גרדיאנט אדום אש":
        return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0";
      case "gradient-pink-sunset":
      case "גרדיאנט ורוד שקיעה":
        return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0";
      case "neon-blue":
      case "נאון כחול":
        return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50";
      case "neon-green":
      case "נאון ירוק":
        return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50";
      case "neon-purple":
      case "נאון סגול":
        return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50";
      case "neon-pink":
      case "נאון ורוד":
        return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50";
      case "glass-dark":
      case "זכוכית כהה":
        return "bg-black/20 text-white border border-white/30 backdrop-blur-sm";
      case "glass-light":
      case "זכוכית בהירה":
        return "bg-white/20 text-black border border-black/30 backdrop-blur-sm";
      default: 
        console.log('AuroraHero - Unknown badge style, using default:', style);
        return "bg-gray-600/50";
    }
  };

  const getButtonStyleClasses = (style: string) => {
    console.log('AuroraHero - getButtonStyleClasses called with:', style);
    
    if (!style || style === 'default') return "bg-gray-950/10 hover:bg-gray-950/50";
    
    switch (style) {
      case "black-on-white":
      case "שחור על לבן":
        return "bg-white text-black border border-black hover:bg-gray-100";
      case "white-on-black":
      case "לבן על שחור":
        return "bg-black text-white border border-white hover:bg-gray-900";
      case "gradient-gold-black":
      case "גרדיאנט זהב-שחור":
        return "bg-gradient-to-r from-yellow-400 to-black text-white border-0 hover:from-yellow-500 hover:to-gray-900";
      case "gradient-gold-white":
      case "גרדיאנט זהב-לבן":
        return "bg-gradient-to-r from-yellow-400 to-white text-black border-0 hover:from-yellow-500 hover:to-gray-100";
      case "gradient-purple-tech":
      case "גרדיאנט סגול טכנולוגי":
        return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0 hover:from-purple-700 hover:to-blue-600";
      case "gradient-blue-ocean":
      case "גרדיאנט כחול אוקיינוס":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600";
      case "gradient-green-nature":
      case "גרדיאנט ירוק טבע":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 hover:from-green-600 hover:to-emerald-600";
      case "gradient-red-fire":
      case "גרדיאנט אדום אש":
        return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 hover:from-red-600 hover:to-orange-600";
      case "gradient-pink-sunset":
      case "גרדיאנט ורוד שקיעה":
        return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 hover:from-pink-600 hover:to-rose-600";
      case "neon-blue":
      case "נאון כחול":
        return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50 hover:bg-blue-700";
      case "neon-green":
      case "נאון ירוק":
        return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50 hover:bg-green-700";
      case "neon-purple":
      case "נאון סגול":
        return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50 hover:bg-purple-700";
      case "neon-pink":
      case "נאון ורוד":
        return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50 hover:bg-pink-700";
      case "glass-dark":
      case "זכוכית כהה":
        return "bg-black/20 text-white border border-white/30 backdrop-blur-sm hover:bg-black/30";
      case "glass-light":
      case "זכוכית בהירה":
        return "bg-white/20 text-black border border-black/30 backdrop-blur-sm hover:bg-white/30";
      default: 
        console.log('AuroraHero - Unknown button style, using default:', style);
        return "bg-gray-950/10 hover:bg-gray-950/50";
    }
  };

  const getBackgroundClasses = (style: string) => {
    console.log('AuroraHero - getBackgroundClasses called with:', style);
    
    if (!style || style === 'default') return "bg-gray-950";
    
    switch (style) {
      case "dark":
        return "bg-gray-950";
      case "light":
        return "bg-gray-100";
      case "gradient-blue":
        return "bg-gradient-to-br from-blue-950 to-blue-900";
      case "gradient-purple":
        return "bg-gradient-to-br from-purple-950 to-purple-900";
      case "gradient-green":
        return "bg-gradient-to-br from-green-950 to-green-900";
      case "gradient-orange":
        return "bg-gradient-to-br from-orange-950 to-orange-900";
      case "gradient-pink":
        return "bg-gradient-to-br from-pink-950 to-pink-900";
      case "tech-dark":
        return "bg-black";
      case "minimal-light":
        return "bg-white";
      default: 
        console.log('AuroraHero - Unknown background style, using default:', style);
        return "bg-gray-950";
    }
  };

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className={`relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200 ${getBackgroundClasses(content?.backgroundStyle)}`}
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className={`mb-1.5 inline-block rounded-full px-3 py-1.5 text-sm ${getBadgeStyleClasses(content?.badgeStyle)} ${getTextStyleClasses(content?.badgeTextStyle)}`}>
          {badgeText}
        </span>
        <h1 className={`max-w-3xl text-center text-3xl font-medium leading-tight sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight ${getTextStyleClasses(content?.headlineStyle) || 'bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent'}`}>
          {businessName}
        </h1>
        <p className={`my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed ${getTextStyleClasses(content?.descriptionStyle)}`}>
          {description}
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className={`group relative flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-gray-50 transition-colors ${getButtonStyleClasses(content?.buttons?.[0]?.style)} ${content?.buttons?.[0]?.textStyle && content.buttons[0].textStyle !== 'default' ? getTextStyleClasses(content.buttons[0].textStyle) : ''}`}
        >
          {buttonText}
          <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
