
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { FluidBlob } from "@/components/ui/fluid-blob";
import { DynamicGradients, AdvancedSparkles, GeometricShapes, AnimatedPaths, Premium3D } from "@/components/ui/premium-backgrounds";
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
      <button className={`btn-base btn-modern animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'} group relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          {buttonText}
        </div>
      </button>
    );
  };

  const renderHeroContent = () => (
    <div className="text-center relative z-10">
      <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-slide-up group hover:scale-105 transition-transform duration-300`}>
        <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
        <span className="text-sm font-medium text-white">עיצוב פרימיום ברמה עולמית</span>
      </div>

      <h1 className={`typography-hero text-6xl md:text-8xl lg:text-9xl mb-8 animate-slide-up animate-delay-1 font-black tracking-tight`}>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 drop-shadow-2xl">
          {content?.headline || formData.businessName}
        </span>
      </h1>

      <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2 backdrop-blur-2xl border border-white/10`}>
        <p className="typography-body text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
          {content?.subheadline || `עיצוב מהפנט וחדשני ל${formData.targetAudience}`}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        {renderCTAButton(true)}
        {renderCTAButton(false)}
      </div>
    </div>
  );

  // Fix the design style selection logic - use designStyle instead of heroStyle
  const currentDesignStyle = formData.designStyle || 'dynamic-gradients';

  // Dynamic Gradients - Default Premium Style
  if (currentDesignStyle === 'dynamic-gradients') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen">
        <DynamicGradients />
        <div className="container-hero relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Advanced Sparkles Effects
  if (currentDesignStyle === 'sparkles-effects') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen">
        <AdvancedSparkles />
        <div className="container-hero relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Animated Paths - Premium Version
  if (currentDesignStyle === 'animated-paths') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen">
        <AnimatedPaths />
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-slide-up border border-gray-200/20`}>
              <Star className="w-5 h-5 text-blue-600 fill-current" />
              <span className="text-sm font-medium text-gray-800 dark:text-white">נתיבים מונפשים פרימיום</span>
            </div>

            <h1 className={`typography-hero text-6xl md:text-8xl lg:text-9xl mb-8 animate-slide-up animate-delay-1 font-black`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                {content?.headline || formData.businessName}
              </span>
            </h1>

            <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2 backdrop-blur-xl`}>
              <p className="typography-body text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {content?.subheadline || `נתיבים מונפשים מדהימים ל${formData.targetAudience}`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {renderCTAButton(true)}
              {renderCTAButton(false)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Fluid Blobs - Performance Optimized
  if (currentDesignStyle === 'fluid-blobs') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen bg-black">
        <FluidBlob />
        <div className="container-hero relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Premium 3D - Spline Alternative
  if (currentDesignStyle === 'spline-3d') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen">
        <Premium3D />
        <div className="container-hero relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Default Fallback
  return (
    <section className="section-hero relative overflow-hidden min-h-screen">
      <DynamicGradients />
      <div className="container-hero relative z-10">
        {renderHeroContent()}
      </div>
    </section>
  );
};
