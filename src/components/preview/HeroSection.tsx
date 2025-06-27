
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { FluidBlob } from "@/components/ui/fluid-blob";
import { DynamicGradients, AdvancedSparkles, AnimatedPaths, Premium3D } from "@/components/ui/premium-backgrounds";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowLeft, Play, CheckCircle, Star, Zap, Award, Shield, Clock } from "lucide-react";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const renderCTAButton = (isPrimary = true) => {
    const buttonText = isPrimary ? (content?.cta || 'בואו נתחיל לעבוד יחד') : 'למד עוד';
    
    return (
      <button 
        className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
          isPrimary 
            ? 'text-white shadow-lg hover:shadow-xl animate-slide-up animate-delay-3 group' 
            : 'backdrop-blur-sm border-2 hover:backdrop-blur-md animate-slide-up animate-delay-4 group'
        }`}
        style={{
          backgroundColor: isPrimary ? currentColors.primary : 'transparent',
          borderColor: isPrimary ? 'transparent' : currentColors.primary,
          color: isPrimary ? '#ffffff' : currentColors.text
        }}
      >
        <div className="relative z-10 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          {buttonText}
        </div>
      </button>
    );
  };

  const renderHeroContent = () => (
    <div className="text-center relative z-10 max-w-6xl mx-auto">
      <div 
        className="inline-flex items-center gap-2 backdrop-blur-sm border-2 px-6 py-3 rounded-full mb-8 animate-slide-up group hover:scale-105 transition-transform duration-300"
        style={{
          backgroundColor: `${currentColors.primary}20`,
          borderColor: `${currentColors.primary}40`,
          color: currentColors.text
        }}
      >
        <Star className="w-5 h-5 fill-current animate-pulse" style={{ color: currentColors.accent }} />
        <span className="text-sm font-medium">עיצוב פרימיום ברמה עולמית</span>
      </div>

      <h1 
        className="text-5xl md:text-7xl lg:text-8xl mb-8 animate-slide-up animate-delay-1 font-black tracking-tight leading-tight drop-shadow-2xl"
        style={{ color: currentColors.headlineColor }}
      >
        {content?.headline || formData?.businessName || 'העסק שלכם'}
      </h1>

      <div 
        className="backdrop-blur-sm border-2 p-8 max-w-4xl mx-auto mb-12 animate-slide-up animate-delay-2 rounded-2xl"
        style={{
          backgroundColor: `${currentColors.background}40`,
          borderColor: `${currentColors.primary}30`,
          color: currentColors.subheadlineColor
        }}
      >
        <p className="text-xl md:text-2xl leading-relaxed font-light">
          {content?.subheadline || `עיצוב מהפנט וחדשני ל${formData?.targetAudience || 'הלקוחות שלכם'}`}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        {renderCTAButton(true)}
        {renderCTAButton(false)}
      </div>
    </div>
  );

  const currentDesignStyle = formData?.designStyle || 'dynamic-gradients';

  // Dynamic Gradients - Enhanced
  if (currentDesignStyle === 'dynamic-gradients') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <DynamicGradients />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // FIXED: Advanced Sparkles Effects - No more flickering
  if (currentDesignStyle === 'sparkles-effects') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <AdvancedSparkles />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // UPGRADED: Animated Paths - Premium 3D design
  if (currentDesignStyle === 'animated-paths') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <AnimatedPaths />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // FIXED: Fluid Blobs - Now with 6 different blobs
  if (currentDesignStyle === 'fluid-blobs') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <FluidBlob />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Premium 3D - Enhanced
  if (currentDesignStyle === 'spline-3d') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <Premium3D />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Default Fallback
  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ backgroundColor: currentColors.heroBackground }}
    >
      <DynamicGradients />
      <div className="container mx-auto px-4 relative z-10">
        {renderHeroContent()}
      </div>
    </section>
  );
};
