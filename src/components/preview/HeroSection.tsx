
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { ArrowLeft, Play, CheckCircle, Star, Zap, Award, Shield, Clock } from "lucide-react";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const getBusinessImage = (businessType: string) => {
    const businessImages = {
      'עורך דין': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop',
      'רופא': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop',
      'מעצב גרפי': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop',
      'יועץ עסקי': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      'מורה פרטי': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
      'מאמן כושר': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
      'צלם': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&h=1080&fit=crop',
      'נהג': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop',
      'מספר': 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1920&h=1080&fit=crop',
      'default': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop'
    };

    return businessImages[businessType as keyof typeof businessImages] || businessImages.default;
  };

  const renderCTAButton = (isPrimary = true) => {
    const buttonText = isPrimary ? (content?.cta || 'בואו נתחיל לעבוד יחד') : 'למד עוד';
    
    if (formData.heroStyle === 'glass') {
      return (
        <button className={`btn-base btn-glassmorphism animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
          <ArrowLeft className="w-5 h-5" />
          {buttonText}
        </button>
      );
    } else if (formData.heroStyle === 'metal') {
      return (
        <button className={`btn-base btn-metal animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
          <ArrowLeft className="w-5 h-5" />
          {buttonText}
        </button>
      );
    } else if (formData.heroStyle === 'geometric') {
      return (
        <button className={`btn-base btn-geometric animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
          <ArrowLeft className="w-5 h-5" />
          {buttonText}
        </button>
      );
    }

    return (
      <button className={`btn-base btn-primary animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
        <ArrowLeft className="w-5 h-5" />
        {buttonText}
      </button>
    );
  };

  // TRUE GLASSMORPHISM HERO - Apple-style Glass UI
  if (formData.heroStyle === 'glass') {
    return (
      <section className="glassmorphism-hero section-hero">
        {/* Gradient Background */}
        <div className="glassmorphism-background">
          <div className="glass-gradient-orb glass-orb-1"></div>
          <div className="glass-gradient-orb glass-orb-2"></div>
          <div className="glass-gradient-orb glass-orb-3"></div>
        </div>
        
        <div className="container-hero relative z-10">
          {/* Top Glass Panel - Status */}
          <div className="glass-status-panel animate-slide-up">
            <div className="glass-status-indicator">
              <div className="glass-pulse-dot"></div>
              <span className="typography-modern text-sm font-medium text-white">זמין עכשיו</span>
            </div>
          </div>

          <div className="glassmorphism-grid">
            <div className="glassmorphism-content">
              {/* Main Glass Panel with Content */}
              <div className="glass-main-panel animate-slide-up animate-delay-1">
                <h1 className="typography-modern text-6xl md:text-8xl font-bold text-white mb-6 glass-text-glow">
                  {content?.headline || formData.businessName}
                </h1>
                
                <div className="glass-subtitle-panel mb-8">
                  <p className="typography-body text-xl text-white/90 leading-relaxed">
                    {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
                  </p>
                </div>

                {/* Glass Action Buttons */}
                <div className="glass-actions-panel mb-12">
                  {renderCTAButton(true)}
                  {renderCTAButton(false)}
                </div>

                {/* Glass Feature Cards */}
                <div className="glass-features-grid">
                  {[
                    { icon: <Zap className="w-6 h-6" />, title: 'ביצוע מהיר', desc: 'תוצאות מיידיות' },
                    { icon: <Shield className="w-6 h-6" />, title: 'אמינות מלאה', desc: 'שירות מהימן' },
                    { icon: <Award className="w-6 h-6" />, title: 'איכות מובטחת', desc: 'מקצועיות ברמה הגבוהה' }
                  ].map((feature, index) => (
                    <div key={index} className="glass-feature-card animate-scale-in" style={{animationDelay: `${1.2 + index * 0.2}s`}}>
                      <div className="glass-icon-wrapper">
                        {feature.icon}
                      </div>
                      <h3 className="typography-modern font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="typography-body text-sm text-white/70">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Glass Stats */}
            <div className="glassmorphism-stats animate-scale-in animate-delay-3">
              <div className="glass-stats-grid">
                {[
                  { number: '500+', label: 'לקוחות מרוצים' },
                  { number: '98%', label: 'שביעות רצון' },
                  { number: '10+', label: 'שנות ניסיון' },
                  { number: '24/7', label: 'זמינות מלאה' }
                ].map((stat, index) => (
                  <div key={index} className="glass-stat-card">
                    <div className="typography-modern text-3xl font-bold text-white glass-text-glow">
                      {stat.number}
                    </div>
                    <div className="typography-body text-sm text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Geometric Hero Style - Enhanced
  if (formData.heroStyle === 'geometric') {
    return (
      <section className="geometric-hero section-hero">
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up">
              <div className="glass-card px-4 py-2">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                </div>
              </div>
              <div className="glass-card px-4 py-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-white">מומחה מוסמך</span>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="typography-modern text-6xl md:text-8xl text-white mb-8 animate-slide-up animate-delay-1">
              {content?.headline || formData.businessName}
            </h1>

            {/* Subheadline */}
            <div className="typography-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2">
              {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {renderCTAButton(true)}
              {renderCTAButton(false)}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-scale-in animate-delay-4">
              {[
                { number: '500+', label: 'לקוחות מרוצים' },
                { number: '98%', label: 'שביעות רצון' },
                { number: '10+', label: 'שנות ניסיון' },
                { number: '24/7', label: 'זמינות' }
              ].map((stat, index) => (
                <div key={index} className="geometric-card text-center">
                  <div className="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="typography-body text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Metallic Luxury Style - Enhanced
  if (formData.heroStyle === 'metal') {
    return (
      <section className="section-hero bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-800/20"></div>
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2 metal-card px-6 py-3 rounded-full mb-8 animate-slide-up">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="typography-luxury text-gray-800 font-semibold">פרימיום</span>
            </div>

            {/* Luxury Title */}
            <h1 className="typography-luxury text-7xl md:text-9xl metal-text mb-8 animate-slide-up animate-delay-1">
              {content?.headline || formData.businessName}
            </h1>

            {/* Elegant Subtitle */}
            <div className="metal-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
              <p className="typography-luxury text-xl md:text-2xl text-gray-800 leading-relaxed">
                {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
              </p>
            </div>

            {/* Premium Actions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {renderCTAButton(true)}
              {renderCTAButton(false)}
            </div>

            {/* Luxury Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4">
              {[
                { number: '500+', label: 'לקוחות VIP' },
                { number: '98%', label: 'שביעות רצון' },
                { number: '10+', label: 'שנות מצוינות' },
                { number: '24/7', label: 'שירות פרמיום' }
              ].map((stat, index) => (
                <div key={index} className="metal-card p-6 text-center">
                  <div className="typography-luxury text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="typography-body text-gray-700 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // CINEMATIC 3D HERO - True 3D depth and layering
  if (formData.heroStyle === 'image') {
    const imageUrl = heroImage || getBusinessImage(formData.businessType);
    
    return (
      <section className="cinematic-3d-hero section-hero">
        {/* 3D Background Layers */}
        <div className="cinematic-bg-layer-1" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="cinematic-bg-layer-2"></div>
        <div className="cinematic-bg-layer-3"></div>
        
        {/* Floating 3D Elements */}
        <div className="cinematic-3d-elements">
          <div className="floating-3d-cube floating-cube-1"></div>
          <div className="floating-3d-cube floating-cube-2"></div>
          <div className="floating-3d-sphere floating-sphere-1"></div>
          <div className="floating-3d-sphere floating-sphere-2"></div>
        </div>

        {/* Depth Layers with Parallax */}
        <div className="cinematic-depth-layers">
          <div className="depth-layer depth-layer-back"></div>
          <div className="depth-layer depth-layer-mid"></div>
          <div className="depth-layer depth-layer-front"></div>
        </div>
        
        <div className="container-hero relative z-20">
          <div className="cinematic-3d-grid">
            <div className="cinematic-content-panel">
              {/* 3D Status Badge */}
              <div className="cinematic-3d-badge animate-slide-up">
                <div className="badge-3d-inner">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="typography-cinematic text-white font-semibold">מומלץ בחום</span>
                </div>
              </div>

              {/* Cinematic Title with 3D Text */}
              <h1 className="cinematic-3d-title animate-slide-up animate-delay-1">
                {content?.headline || formData.businessName}
              </h1>

              {/* 3D Content Panel */}
              <div className="cinematic-content-3d-panel animate-slide-up animate-delay-2">
                <p className="typography-cinematic text-xl text-white leading-relaxed">
                  {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
                </p>
              </div>

              {/* 3D Action Buttons */}
              <div className="cinematic-3d-actions animate-slide-up animate-delay-3">
                {renderCTAButton(true)}
                {renderCTAButton(false)}
              </div>
            </div>

            {/* 3D Statistics Cube */}
            <div className="cinematic-3d-stats-cube animate-scale-in animate-delay-4">
              <div className="stats-cube-face stats-face-1">
                <div className="stat-3d-item">
                  <div className="typography-cinematic text-4xl font-bold text-amber-400">500+</div>
                  <div className="typography-body text-white text-sm">לקוחות מרוצים</div>
                </div>
              </div>
              <div className="stats-cube-face stats-face-2">
                <div className="stat-3d-item">
                  <div className="typography-cinematic text-4xl font-bold text-amber-400">98%</div>
                  <div className="typography-body text-white text-sm">שביעות רצון</div>
                </div>
              </div>
              <div className="stats-cube-face stats-face-3">
                <div className="stat-3d-item">
                  <div className="typography-cinematic text-4xl font-bold text-amber-400">10+</div>
                  <div className="typography-body text-white text-sm">שנות ניסיון</div>
                </div>
              </div>
              <div className="stats-cube-face stats-face-4">
                <div className="stat-3d-item">
                  <div className="typography-cinematic text-4xl font-bold text-amber-400">24/7</div>
                  <div className="typography-body text-white text-sm">זמינות מלאה</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Feature Pyramids */}
          <div className="cinematic-3d-features animate-scale-in animate-delay-5">
            {[
              { icon: <Award className="w-8 h-8" />, title: 'איכות מובטחת' },
              { icon: <Shield className="w-8 h-8" />, title: 'אמינות מוחלטת' },
              { icon: <Zap className="w-8 h-8" />, title: 'ביצוع מהיר' },
              { icon: <Clock className="w-8 h-8" />, title: 'זמינות תמידית' }
            ].map((item, index) => (
              <div key={index} className="feature-3d-pyramid">
                <div className="pyramid-top">
                  <div className="pyramid-icon text-amber-400">
                    {item.icon}
                  </div>
                </div>
                <div className="pyramid-base">
                  <h3 className="typography-cinematic text-white font-medium text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default 3D Background Style - Enhanced
  return (
    <section className="hero-3d section-hero">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <div className="container-hero relative z-10">
        <div className="text-center">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mb-8 animate-slide-up">
            <div className="glass-card px-4 py-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-white">דירוג 5 כוכבים</span>
              </div>
            </div>
            <div className="glass-card px-4 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">מומחה מוסמך</span>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <h1 className="typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
            {content?.headline || formData.businessName}
          </h1>

          <div className="glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
            <p className="typography-body text-xl md:text-2xl text-white leading-relaxed">
              {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {renderCTAButton(true)}
            {renderCTAButton(false)}
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4">
            {[
              { number: '500+', label: 'לקוחות מרוצים' },
              { number: '98%', label: 'שביעות רצון' },
              { number: '10+', label: 'שנות ניסיון' },
              { number: '24/7', label: 'זמינות' }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="typography-body text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
