
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
            ? 'text-white shadow-xl hover:shadow-2xl animate-slide-up animate-delay-3 group backdrop-blur-sm' 
            : 'backdrop-blur-md border-2 hover:backdrop-blur-lg animate-slide-up animate-delay-4 group shadow-lg hover:shadow-xl'
        }`}
        style={{
          backgroundColor: isPrimary ? currentColors.primary : 'rgba(255, 255, 255, 0.1)',
          borderColor: isPrimary ? 'transparent' : currentColors.primary,
          color: isPrimary ? '#ffffff' : currentColors.text,
          boxShadow: isPrimary 
            ? `0 10px 25px ${currentColors.primary}40, 0 0 0 1px ${currentColors.primary}20` 
            : `0 8px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px ${currentColors.primary}40`
        }}
      >
        <div className="relative z-10 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          {buttonText}
        </div>
        {isPrimary && (
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
            }}
          />
        )}
      </button>
    );
  };

  const renderHeroContent = () => (
    <div className="text-center relative z-20 max-w-6xl mx-auto">
      {/* Elite badge */}
      <div 
        className="inline-flex items-center gap-2 backdrop-blur-md border-2 px-6 py-3 rounded-full mb-8 animate-slide-up group hover:scale-105 transition-all duration-300 shadow-lg"
        style={{
          backgroundColor: `${currentColors.primary}15`,
          borderColor: `${currentColors.primary}50`,
          color: currentColors.text,
          boxShadow: `0 8px 25px ${currentColors.primary}20`
        }}
      >
        <Star className="w-5 h-5 fill-current animate-pulse" style={{ color: currentColors.accent }} />
        <span className="text-sm font-medium">עיצוב פרימיום ברמה עולמית</span>
      </div>

      {/* Elite headline with perfect contrast */}
      <h1 
        className="text-5xl md:text-7xl lg:text-8xl mb-8 animate-slide-up animate-delay-1 font-black tracking-tight leading-tight"
        style={{ 
          color: currentColors.headlineColor,
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)',
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))'
        }}
      >
        {content?.headline || formData?.businessName || 'העסק שלכם'}
      </h1>

      {/* Elite subheadline container */}
      <div 
        className="backdrop-blur-md border-2 p-8 max-w-4xl mx-auto mb-12 animate-slide-up animate-delay-2 rounded-2xl shadow-xl"
        style={{
          backgroundColor: `rgba(255, 255, 255, 0.08)`,
          borderColor: `${currentColors.primary}40`,
          color: currentColors.subheadlineColor,
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
        }}
      >
        <p 
          className="text-xl md:text-2xl leading-relaxed font-light"
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
          }}
        >
          {content?.subheadline || `עיצוב מהפנט וחדשני ל${formData?.targetAudience || 'הלקוחות שלכם'}`}
        </p>
      </div>

      {/* Elite CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        {renderCTAButton(true)}
        {renderCTAButton(false)}
      </div>
    </div>
  );

  const currentDesignStyle = formData?.designStyle || 'dynamic-gradients';

  // Elite Dynamic Gradients
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

  // Elite Sparkles Effects
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

  // Elite Animated Paths
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

  // Elite Fluid Blobs
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

  // Elite Premium 3D
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

  // Default Elite Fallback
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
