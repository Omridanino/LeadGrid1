
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
      <button className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
        isPrimary 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
          : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
      } animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'} group`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          {buttonText}
        </div>
      </button>
    );
  };

  const renderHeroContent = () => (
    <div className="text-center relative z-10 max-w-6xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8 animate-slide-up group hover:scale-105 transition-transform duration-300">
        <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
        <span className="text-sm font-medium text-white">עיצוב פרימיום ברמה עולמית</span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 animate-slide-up animate-delay-1 font-black tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200 drop-shadow-2xl">
          {content?.headline || formData?.businessName || 'העסק שלכם'}
        </span>
      </h1>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 max-w-4xl mx-auto mb-12 animate-slide-up animate-delay-2 rounded-2xl">
        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
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

  // Dynamic Gradients - Default Premium Style
  if (currentDesignStyle === 'dynamic-gradients') {
    return (
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <DynamicGradients />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Advanced Sparkles Effects
  if (currentDesignStyle === 'sparkles-effects') {
    return (
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
        <AdvancedSparkles />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Animated Paths - Premium Version
  if (currentDesignStyle === 'animated-paths') {
    return (
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <AnimatedPaths />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 px-6 py-3 rounded-full mb-8 animate-slide-up shadow-lg">
              <Star className="w-5 h-5 text-blue-600 fill-current" />
              <span className="text-sm font-medium text-gray-800">נתיבים מונפשים פרימיום</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 animate-slide-up animate-delay-1 font-black leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                {content?.headline || formData?.businessName || 'העסק שלכם'}
              </span>
            </h1>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 max-w-4xl mx-auto mb-12 animate-slide-up animate-delay-2 rounded-2xl shadow-lg">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {content?.subheadline || `נתיבים מונפשים מדהימים ל${formData?.targetAudience || 'הלקוחות שלכם'}`}
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
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
        <FluidBlob />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Premium 3D - Spline Alternative
  if (currentDesignStyle === 'spline-3d') {
    return (
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <Premium3D />
        <div className="container mx-auto px-4 relative z-10">
          {renderHeroContent()}
        </div>
      </section>
    );
  }

  // Default Fallback
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DynamicGradients />
      <div className="container mx-auto px-4 relative z-10">
        {renderHeroContent()}
      </div>
    </section>
  );
};
