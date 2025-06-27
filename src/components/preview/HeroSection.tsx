import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { FluidBlob } from "@/components/ui/fluid-blob";
import { DynamicGradients, AdvancedSparkles, AnimatedPaths, Premium3D } from "@/components/ui/premium-backgrounds";
import { ArrowLeft, Play, CheckCircle, Star, Zap, Award, Shield, Clock } from "lucide-react";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const currentDesignStyle = formData?.designStyle || 'dynamic-gradients';

  // === DYNAMIC GRADIENTS STYLE - Flowing geometric luxury ===
  if (currentDesignStyle === 'dynamic-gradients') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <DynamicGradients />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium status badge */}
            <div 
              className="inline-flex items-center gap-3 backdrop-blur-xl border-2 px-8 py-4 rounded-full mb-10 animate-slide-up group hover:scale-105 transition-all duration-300 shadow-2xl"
              style={{
                backgroundColor: `${currentColors.primary}20`,
                borderColor: `${currentColors.primary}60`,
                color: currentColors.text,
                boxShadow: `0 15px 35px ${currentColors.primary}30`
              }}
            >
              <Award className="w-6 h-6 animate-pulse" style={{ color: currentColors.accent }} />
              <span className="text-lg font-semibold">פתרון מהפכני ברמה עולמית</span>
            </div>

            {/* Dynamic headline with flowing effects */}
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl mb-10 animate-slide-up animate-delay-1 font-black tracking-tight leading-none"
              style={{ 
                color: currentColors.headlineColor,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)',
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.15))'
              }}
            >
              {content?.headline || formData?.businessName || 'העתיד כאן'}
            </h1>

            {/* Floating description panel */}
            <div 
              className="backdrop-blur-2xl border-2 p-10 max-w-5xl mx-auto mb-16 animate-slide-up animate-delay-2 rounded-3xl shadow-2xl relative overflow-hidden"
              style={{
                backgroundColor: `rgba(255, 255, 255, 0.12)`,
                borderColor: `${currentColors.primary}50`,
                color: currentColors.subheadlineColor,
                boxShadow: `0 20px 50px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.15)`
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <p 
                className="text-2xl md:text-3xl leading-relaxed font-light"
                style={{
                  textShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
                }}
              >
                {content?.subheadline || `חדשנות מתקדמת ל${formData?.targetAudience || 'העסק שלכם'}`}
              </p>
            </div>

            {/* Action buttons with geometric styling */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <button 
                className="relative overflow-hidden px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-110 group backdrop-blur-lg shadow-2xl"
                style={{
                  backgroundColor: currentColors.primary,
                  color: '#ffffff',
                  boxShadow: `0 15px 35px ${currentColors.primary}50, 0 0 0 2px ${currentColors.primary}30`
                }}
              >
                <div className="relative z-10 flex items-center gap-3">
                  <Zap className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  {content?.cta || 'התחילו עכשיו'}
                </div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
                  }}
                />
              </button>
              
              <button 
                className="backdrop-blur-xl border-3 px-12 py-6 rounded-2xl font-bold text-xl hover:backdrop-blur-2xl transition-all duration-300 group shadow-xl hover:shadow-2xl transform hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: `${currentColors.primary}60`,
                  color: currentColors.text,
                  boxShadow: `0 12px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px ${currentColors.primary}40`
                }}
              >
                <div className="flex items-center gap-3">
                  <Play className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                  גלו איך זה עובד
                </div>
              </button>
            </div>

            {/* Geometric feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: 'אמינות מלאה', desc: 'טכנולוגיה מובילה' },
                { icon: Zap, title: 'ביצועים מהירים', desc: 'תוצאות מיידיות' },
                { icon: Award, title: 'איכות פרימיום', desc: 'רמה מקצועית' }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="backdrop-blur-lg border-2 p-8 rounded-2xl hover:backdrop-blur-xl transition-all duration-300 group hover:scale-105 shadow-xl"
                  style={{
                    backgroundColor: `rgba(255, 255, 255, 0.08)`,
                    borderColor: `${currentColors.primary}30`,
                    color: currentColors.text
                  }}
                >
                  <feature.icon 
                    className="w-12 h-12 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: currentColors.accent }} 
                  />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // === SPARKLES EFFECTS STYLE - Interactive cosmic experience ===
  if (currentDesignStyle === 'sparkles-effects') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <AdvancedSparkles />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left content column */}
            <div className="space-y-8">
              {/* Cosmic status indicator */}
              <div 
                className="inline-flex items-center gap-3 backdrop-blur-md border px-6 py-3 rounded-full animate-slide-up shadow-lg"
                style={{
                  backgroundColor: `${currentColors.primary}25`,
                  borderColor: `${currentColors.primary}50`,
                  color: currentColors.text
                }}
              >
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-medium">מערכת פעילה וחיה</span>
              </div>

              {/* Interactive headline */}
              <h1 
                className="text-5xl md:text-7xl font-black leading-tight animate-slide-up animate-delay-1"
                style={{ 
                  color: currentColors.headlineColor,
                  textShadow: '0 6px 24px rgba(0, 0, 0, 0.5)'
                }}
              >
                {content?.headline || formData?.businessName || 'חוויה אינטראקטיבית'}
              </h1>

              {/* Floating description */}
              <div 
                className="backdrop-blur-md border p-8 rounded-2xl animate-slide-up animate-delay-2 shadow-xl"
                style={{
                  backgroundColor: `rgba(255, 255, 255, 0.1)`,
                  borderColor: `${currentColors.primary}40`,
                  color: currentColors.subheadlineColor
                }}
              >
                <p className="text-xl leading-relaxed">
                  {content?.subheadline || `טכנולוגיה מתקדמת שמגיבה ל${formData?.targetAudience || 'הצרכים שלכם'}`}
                </p>
              </div>

              {/* Interactive action buttons */}
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-up animate-delay-3">
                <button 
                  className="relative px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 group shadow-xl"
                  style={{
                    backgroundColor: currentColors.primary,
                    color: '#ffffff',
                    boxShadow: `0 12px 24px ${currentColors.primary}40`
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {content?.cta || 'התחברו אלינו'}
                  </span>
                </button>
                
                <button 
                  className="backdrop-blur-md border-2 px-10 py-5 rounded-xl font-bold text-lg hover:backdrop-blur-lg transition-all duration-300 shadow-lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: `${currentColors.primary}50`,
                    color: currentColors.text
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    חקרו הפלטפורמה
                  </span>
                </button>
              </div>
            </div>

            {/* Right visual column */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Central interactive orb */}
                <div 
                  className="absolute inset-0 rounded-full backdrop-blur-xl border-2 animate-pulse"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${currentColors.primary}40, ${currentColors.accent}20)`,
                    borderColor: `${currentColors.primary}60`,
                    boxShadow: `0 0 60px ${currentColors.primary}30`
                  }}
                />
                
                {/* Orbiting elements */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-12 rounded-full backdrop-blur-md border"
                    style={{
                      backgroundColor: `${currentColors.accent}30`,
                      borderColor: `${currentColors.accent}60`,
                      animation: `orbit ${12 + i * 2}s linear infinite`,
                      animationDelay: `${i * 2}s`,
                      left: '50%',
                      top: '50%',
                      transformOrigin: `0 ${100 + i * 20}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(-100px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(-100px) rotate(-360deg); }
          }
        `}</style>
      </section>
    );
  }

  // === ANIMATED PATHS STYLE - Energy flow design ===
  if (currentDesignStyle === 'animated-paths') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <AnimatedPaths />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center max-w-6xl mx-auto">
            {/* Energy status */}
            <div 
              className="inline-flex items-center gap-4 backdrop-blur-lg border px-8 py-4 rounded-2xl mb-12 shadow-xl animate-slide-up"
              style={{
                backgroundColor: `${currentColors.primary}15`,
                borderColor: `${currentColors.primary}40`,
                color: currentColors.text
              }}
            >
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-8 rounded-full"
                    style={{
                      backgroundColor: currentColors.accent,
                      animation: `energyBar 1.5s ease-in-out infinite ${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold">זרימת אנרגיה פעילה</span>
            </div>

            {/* Powerful headline */}
            <h1 
              className="text-6xl md:text-8xl font-black mb-8 leading-none animate-slide-up animate-delay-1"
              style={{ 
                color: currentColors.headlineColor,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
                background: `linear-gradient(135deg, ${currentColors.headlineColor}, ${currentColors.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {content?.headline || formData?.businessName || 'כוח מניע'}
            </h1>

            {/* Energy description */}
            <div 
              className="backdrop-blur-xl border-2 p-12 max-w-4xl mx-auto mb-16 rounded-3xl shadow-2xl animate-slide-up animate-delay-2 relative overflow-hidden"
              style={{
                backgroundColor: `rgba(255, 255, 255, 0.08)`,
                borderColor: `${currentColors.primary}30`,
                color: currentColors.subheadlineColor
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
              <p className="text-2xl md:text-3xl leading-relaxed">
                {content?.subheadline || `טכנולוגיה מתקדמת שמניעה את ${formData?.targetAudience || 'העתיד'}`}
              </p>
            </div>

            {/* Power buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16 animate-slide-up animate-delay-3">
              <button 
                className="relative px-16 py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-110 group overflow-hidden shadow-2xl"
                style={{
                  background: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`,
                  color: '#ffffff',
                  boxShadow: `0 15px 40px ${currentColors.primary}50`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  {content?.cta || 'הפעילו עכשיו'}
                </span>
              </button>
              
              <button 
                className="backdrop-blur-xl border-3 px-16 py-6 rounded-2xl font-black text-xl hover:backdrop-blur-2xl transition-all duration-300 shadow-xl group"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: `${currentColors.primary}50`,
                  color: currentColors.text
                }}
              >
                <span className="flex items-center gap-3">
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                  ראו בפעולה
                </span>
              </button>
            </div>

            {/* Energy indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '99.9%', label: 'זמינות' },
                { value: '<0.1s', label: 'זמן תגובה' },
                { value: '24/7', label: 'תמיכה' },
                { value: '∞', label: 'אפשרויות' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="backdrop-blur-lg border p-6 rounded-xl text-center shadow-lg animate-slide-up hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundColor: `rgba(255, 255, 255, 0.05)`,
                    borderColor: `${currentColors.primary}30`,
                    color: currentColors.text,
                    animationDelay: `${0.4 + i * 0.1}s`
                  }}
                >
                  <div 
                    className="text-3xl font-black mb-2"
                    style={{ color: currentColors.accent }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes energyBar {
            0%, 100% { height: 8px; opacity: 0.4; }
            50% { height: 32px; opacity: 1; }
          }
        `}</style>
      </section>
    );
  }

  // === FLUID BLOBS STYLE - Organic liquid design ===
  if (currentDesignStyle === 'fluid-blobs') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground }}
      >
        <FluidBlob />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
            {/* Content spans 7 columns */}
            <div className="lg:col-span-7 space-y-10">
              {/* Organic status */}
              <div 
                className="inline-flex items-center gap-4 backdrop-blur-2xl border-2 px-8 py-4 rounded-full shadow-xl animate-slide-up"
                style={{
                  backgroundColor: `${currentColors.primary}20`,
                  borderColor: `${currentColors.primary}50`,
                  color: currentColors.text
                }}
              >
                <div 
                  className="w-4 h-4 rounded-full animate-ping"
                  style={{ backgroundColor: currentColors.accent }}
                />
                <span className="text-lg font-semibold">זרימה טבעית ואורגנית</span>
              </div>

              {/* Flowing headline */}
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-slide-up animate-delay-1"
                style={{ 
                  color: currentColors.headlineColor,
                  textShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
                }}
              >
                {content?.headline || formData?.businessName || 'זרימה טבעית'}
              </h1>

              {/* Liquid description */}
              <div 
                className="backdrop-blur-2xl border-2 p-10 rounded-3xl shadow-2xl animate-slide-up animate-delay-2 relative overflow-hidden"
                style={{
                  backgroundColor: `rgba(255, 255, 255, 0.12)`,
                  borderColor: `${currentColors.primary}40`,
                  color: currentColors.subheadlineColor
                }}
              >
                <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                <p className="text-xl md:text-2xl leading-relaxed">
                  {content?.subheadline || `חוויה נוזלית ומתאימה ל${formData?.targetAudience || 'כל סביבה'}`}
                </p>
              </div>

              {/* Fluid action buttons */}
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-up animate-delay-3">
                <button 
                  className="relative px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 group overflow-hidden shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.accent})`,
                    color: '#ffffff',
                    boxShadow: `0 20px 40px ${currentColors.primary}30`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <span className="relative z-10 flex items-center gap-3">
                    <ArrowLeft className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {content?.cta || 'צאו לדרך'}
                  </span>
                </button>
                
                <button 
                  className="backdrop-blur-2xl border-2 px-12 py-6 rounded-2xl font-bold text-xl hover:backdrop-blur-3xl transition-all duration-300 shadow-xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: `${currentColors.primary}60`,
                    color: currentColors.text
                  }}
                >
                  <span className="flex items-center gap-3">
                    <Play className="w-6 h-6" />
                    חוו את הזרימה
                  </span>
                </button>
              </div>
            </div>

            {/* Visual spans 5 columns */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-96 h-96">
                {/* Central liquid orb */}
                <div 
                  className="absolute inset-8 rounded-full backdrop-blur-xl border-2 shadow-2xl"
                  style={{
                    background: `radial-gradient(circle at 40% 30%, ${currentColors.primary}50, ${currentColors.accent}30, transparent)`,
                    borderColor: `${currentColors.primary}40`,
                    animation: 'liquidPulse 8s ease-in-out infinite'
                  }}
                />
                
                {/* Floating liquid drops */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full backdrop-blur-md"
                    style={{
                      width: `${20 + Math.random() * 30}px`,
                      height: `${20 + Math.random() * 30}px`,
                      left: `${Math.random() * 80}%`,
                      top: `${Math.random() * 80}%`,
                      background: `radial-gradient(circle, ${currentColors.accent}60, transparent)`,
                      animation: `liquidDrop ${8 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes liquidPulse {
            0%, 100% { 
              transform: scale(1) rotate(0deg);
              border-radius: 50%;
            }
            33% { 
              transform: scale(1.1) rotate(120deg);
              border-radius: 60% 40% 40% 60%;
            }
            66% { 
              transform: scale(0.9) rotate(240deg);
              border-radius: 40% 60% 60% 40%;
            }
          }
          @keyframes liquidDrop {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              opacity: 0.6;
            }
            50% { 
              transform: translateY(-20px) scale(1.2);
              opacity: 1;
            }
          }
        `}</style>
      </section>
    );
  }

  // === PREMIUM 3D STYLE - Sophisticated 3D environment ===
  if (currentDesignStyle === 'spline-3d') {
    return (
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundColor: currentColors.heroBackground, perspective: '1200px' }}
      >
        <Premium3D />
        
        <div className="container mx-auto px-6 relative z-20" style={{ transformStyle: 'preserve-3d' }}>
          <div className="max-w-6xl mx-auto text-center">
            {/* 3D status indicator */}
            <div 
              className="inline-flex items-center gap-4 backdrop-blur-xl border-2 px-10 py-5 rounded-2xl mb-12 shadow-2xl animate-slide-up"
              style={{
                backgroundColor: `${currentColors.primary}25`,
                borderColor: `${currentColors.primary}60`,
                color: currentColors.text,
                transform: 'translateZ(50px)',
                boxShadow: `0 25px 50px rgba(0,0,0,0.3), 0 0 0 1px ${currentColors.primary}30`
              }}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full animate-spin"
                  style={{
                    background: `conic-gradient(from 0deg, ${currentColors.accent}, ${currentColors.primary}, ${currentColors.accent})`
                  }}
                />
                <div 
                  className="w-4 h-4 rounded-full animate-spin"
                  style={{
                    background: `conic-gradient(from 120deg, ${currentColors.primary}, ${currentColors.accent}, ${currentColors.primary})`,
                    animationDirection: 'reverse',
                    animationDuration: '3s'
                  }}
                />
              </div>
              <span className="text-xl font-bold">מרחב תלת-מימדי פעיל</span>
            </div>

            {/* 3D headline */}
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-none animate-slide-up animate-delay-1"
              style={{ 
                color: currentColors.headlineColor,
                textShadow: '0 10px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(59, 130, 246, 0.3)',
                transform: 'translateZ(100px) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {content?.headline || formData?.businessName || 'מימד חדש'}
            </h1>

            {/* 3D description panel */}
            <div 
              className="backdrop-blur-2xl border-2 p-12 max-w-5xl mx-auto mb-20 rounded-3xl shadow-2xl animate-slide-up animate-delay-2 relative"
              style={{
                backgroundColor: `rgba(255, 255, 255, 0.1)`,
                borderColor: `${currentColors.primary}50`,
                color: currentColors.subheadlineColor,
                transform: 'translateZ(75px) rotateX(2deg)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.1)'
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <p className="text-2xl md:text-3xl leading-relaxed font-light relative z-10">
                {content?.subheadline || `חוויה תלת-מימדית מתקדמת ל${formData?.targetAudience || 'העתיד'}`}
              </p>
            </div>

            {/* 3D action buttons */}
            <div className="flex flex-col sm:flex-row gap-10 justify-center mb-24 animate-slide-up animate-delay-3">
              <button 
                className="relative px-16 py-8 rounded-2xl font-black text-2xl transition-all duration-500 transform hover:scale-110 group overflow-hidden shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${currentColors.primary}, ${currentColors.accent})`,
                  color: '#ffffff',
                  transform: 'translateZ(50px) rotateX(5deg)',
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(59, 130, 246, 0.3)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-4">
                  <Shield className="w-8 h-8 transform group-hover:rotateY-12 transition-transform duration-300" style={{ transformStyle: 'preserve-3d' }} />
                  {content?.cta || 'היכנסו למימד'}
                </span>
              </button>
              
              <button 
                className="backdrop-blur-2xl border-3 px-16 py-8 rounded-2xl font-black text-2xl hover:backdrop-blur-3xl transition-all duration-500 shadow-2xl group"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  borderColor: `${currentColors.primary}60`,
                  color: currentColors.text,
                  transform: 'translateZ(25px) rotateX(3deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <span className="flex items-center gap-4">
                  <Award className="w-8 h-8 group-hover:rotateY-12 transition-transform duration-300" style={{ transformStyle: 'preserve-3d' }} />
                  חקרו את המרחב
                </span>
              </button>
            </div>

            {/* 3D feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: 'מהירות אור', desc: 'ביצועים מושלמים', depth: 40 },
                { icon: Shield, title: 'אבטחה מלאה', desc: 'הגנה מתקדמת', depth: 30 },
                { icon: Award, title: 'איכות פרימיום', desc: 'מעולה ברמה', depth: 20 },
                { icon: Clock, title: 'זמינות 24/7', desc: 'תמיד פעיל', depth: 10 }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="backdrop-blur-xl border-2 p-8 rounded-2xl hover:backdrop-blur-2xl transition-all duration-500 group shadow-xl hover:shadow-2xl"
                  style={{
                    backgroundColor: `rgba(255, 255, 255, 0.08)`,
                    borderColor: `${currentColors.primary}40`,
                    color: currentColors.text,
                    transform: `translateZ(${feature.depth}px) rotateX(2deg)`,
                    transformStyle: 'preserve-3d',
                    animationDelay: `${0.5 + i * 0.1}s`
                  }}
                >
                  <feature.icon 
                    className="w-12 h-12 mb-4 mx-auto group-hover:scale-110 transition-all duration-300" 
                    style={{ 
                      color: currentColors.accent,
                      transform: 'translateZ(20px)',
                      transformStyle: 'preserve-3d'
                    }} 
                  />
                  <h3 className="text-xl font-bold mb-2" style={{ transform: 'translateZ(10px)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300" style={{ transform: 'translateZ(5px)' }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default fallback with Dynamic Gradients
  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ backgroundColor: currentColors.heroBackground }}
    >
      <DynamicGradients />
      <div className="container mx-auto px-4 relative z-10">
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
            <button 
              className={`relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                'text-white shadow-xl hover:shadow-2xl animate-slide-up animate-delay-3 group backdrop-blur-sm'
              }`}
              style={{
                backgroundColor: currentColors.primary,
                borderColor: 'transparent',
                color: '#ffffff',
                boxShadow: `0 10px 25px ${currentColors.primary}40, 0 0 0 1px ${currentColors.primary}20`
              }}
            >
              <div className="relative z-10 flex items-center gap-2">
                <ArrowLeft className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                {content?.cta || 'בואו נתחיל לעבוד יחד'}
              </div>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${currentColors.primary}, ${currentColors.accent})`
                }}
              />
            </button>
            <button 
              className={`backdrop-blur-md border-2 hover:backdrop-blur-lg animate-slide-up animate-delay-4 group shadow-lg hover:shadow-xl px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: currentColors.primary,
                color: currentColors.text,
                boxShadow: `0 8px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px ${currentColors.primary}40`
              }}
            >
              למד עוד
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
