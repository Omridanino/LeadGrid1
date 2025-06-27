
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { BackgroundPaths } from "@/components/ui/background-paths";
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
      <button className={`btn-base btn-modern animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
        <ArrowLeft className="w-5 h-5" />
        {buttonText}
      </button>
    );
  };

  // Dynamic Gradients Hero Style (Default - most stable)
  if (!formData.designStyle || formData.designStyle === 'dynamic-gradients') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-slide-up`}>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-white">גרדיאנטים דינמיים מרהיבים</span>
            </div>

            <h1 className={`typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200`}>
              {content?.headline || formData.businessName}
            </h1>

            <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2`}>
              <p className="typography-body text-xl md:text-2xl text-blue-100 leading-relaxed">
                {content?.subheadline || `גרדיאנטים דינמיים ל${formData.targetAudience}`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {renderCTAButton(true)}
              {renderCTAButton(false)}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Sparkles Effects Hero Style
  if (formData.designStyle === 'sparkles-effects') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen bg-black">
        <div className="absolute inset-0">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-slide-up`}>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-white">אפקטי נוצץ מדהימים</span>
            </div>

            <h1 className={`typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 text-white`}>
              {content?.headline || formData.businessName}
            </h1>

            <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2`}>
              <p className="typography-body text-xl md:text-2xl text-gray-300 leading-relaxed">
                {content?.subheadline || `אפקטי נוצץ מדהימים ל${formData.targetAudience}`}
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

  // Animated Paths Hero Style
  if (formData.designStyle === 'animated-paths') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen bg-white dark:bg-neutral-950">
        <BackgroundPaths />
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-slide-up`}>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-800 dark:text-white">נתיבים מונפשים</span>
            </div>

            <h1 className={`typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80`}>
              {content?.headline || formData.businessName}
            </h1>

            <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2`}>
              <p className="typography-body text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {content?.subheadline || `נתיבים מונפשים ל${formData.targetAudience}`}
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

  // Fluid Blobs Hero Style - with error handling
  if (formData.designStyle === 'fluid-blobs') {
    try {
      return (
        <section className="section-hero relative overflow-hidden min-h-screen">
          <div className="absolute inset-0">
            <LavaLamp />
          </div>
          
          <div className="container-hero relative z-10">
            <div className="text-center">
              <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-slide-up`}>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-white">עיצוב בועות נוזל זורמות</span>
              </div>

              <h1 className={`typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 text-white mix-blend-difference`}>
                {content?.headline || formData.businessName}
              </h1>

              <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2`}>
                <p className="typography-body text-xl md:text-2xl text-white leading-relaxed">
                  {content?.subheadline || `השירותים החדשניים ביותר ל${formData.targetAudience}`}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                {renderCTAButton(true)}
                {renderCTAButton(false)}
              </div>
            </div>
          </div>
        </section>
      );
    } catch (error) {
      console.error('Error loading Fluid Blobs:', error);
      // Fallback to Dynamic Gradients
      return (
        <section className="section-hero relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          
          <div className="container-hero relative z-10">
            <div className="text-center">
              <h1 className={`typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200`}>
                {content?.headline || formData.businessName}
              </h1>

              <p className="typography-body text-xl md:text-2xl text-blue-100 leading-relaxed mb-12 max-w-4xl mx-auto animate-slide-up animate-delay-2">
                {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {renderCTAButton(true)}
                {renderCTAButton(false)}
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  // Spline 3D Hero Style - simplified fallback
  if (formData.designStyle === 'spline-3d') {
    return (
      <section className="section-hero relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-slide-up`}>
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-white">סצנות תלת מימד</span>
            </div>

            <h1 className={`typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-200`}>
              {content?.headline || formData.businessName}
            </h1>

            <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2`}>
              <p className="typography-body text-xl md:text-2xl text-pink-100 leading-relaxed">
                {content?.subheadline || `סצנות תלת מימד מרהיבות ל${formData.targetAudience}`}
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

  // Default fallback
  return (
    <section className="section-hero relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="container-hero relative z-10">
        <div className="text-center">
          <h1 className="typography-hero text-7xl md:text-9xl mb-8 text-white">
            {content?.headline || formData.businessName}
          </h1>
          <p className="typography-body text-xl md:text-2xl text-white leading-relaxed">
            {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
          </p>
        </div>
      </div>
    </section>
  );
};
