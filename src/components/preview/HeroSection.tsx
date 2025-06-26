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
        <button className={`btn-base btn-liquid-glass animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
          <i className="ri-arrow-left-line text-lg"></i>
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

  // COMPLETELY REDESIGNED LIQUID GLASS HERO - Fluid and Dynamic
  if (formData.heroStyle === 'glass') {
    return (
      <section className="liquid-glass-hero section-hero">
        <div className="liquid-background">
          <div className="liquid-orb liquid-orb-hero-1"></div>
          <div className="liquid-orb liquid-orb-hero-2"></div>
          <div className="liquid-orb liquid-orb-hero-3"></div>
          <div className="liquid-orb liquid-orb-hero-4"></div>
        </div>
        
        <div className="liquid-waves">
          <div className="liquid-wave liquid-wave-1"></div>
          <div className="liquid-wave liquid-wave-2"></div>
          <div className="liquid-wave liquid-wave-3"></div>
        </div>
        
        <div className="container-hero relative z-10">
          <div className="liquid-hero-grid">
            <div className="liquid-content-flow">
              {/* Floating Status Badge */}
              <div className="liquid-status-orb animate-slide-up">
                <div className="liquid-pulse"></div>
                <i className="ri-wifi-line text-green-400 text-lg"></i>
                <span className="typography-liquid text-white font-semibold">זמין עכשיו</span>
              </div>

              {/* Liquid Hero Title */}
              <h1 className="typography-liquid text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 liquid-title-glow">
                {content?.headline || formData.businessName}
              </h1>

              {/* Flowing Subtitle Container */}
              <div className="liquid-subtitle-flow mb-12 animate-slide-up animate-delay-2">
                <div className="liquid-text-orb">
                  <p className="typography-liquid text-xl md:text-2xl text-white leading-relaxed liquid-text-glow">
                    {content?.subheadline || `חוויה נוזלית ייחודית ל${formData.targetAudience}`}
                  </p>
                </div>
              </div>

              {/* Liquid Action Buttons */}
              <div className="liquid-actions-flow mb-16">
                {renderCTAButton(true)}
                {renderCTAButton(false)}
              </div>

              {/* Floating Features Orbs */}
              <div className="liquid-features-constellation animate-scale-in animate-delay-4">
                {[
                  { icon: 'ri-flashlight-line', title: 'מהירות נוזלית' },
                  { icon: 'ri-shield-check-line', title: 'אמינות זורמת' },
                  { icon: 'ri-infinity-line', title: 'זמינות תמידית' }
                ].map((feature, index) => (
                  <div key={index} className="liquid-feature-orb">
                    <div className="liquid-feature-glow">
                      <i className={`${feature.icon} text-blue-300 text-xl`}></i>
                    </div>
                    <span className="typography-liquid text-white text-sm font-medium liquid-text-glow">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Liquid Visual Showcase */}
            <div className="liquid-visual-flow animate-scale-in animate-delay-3">
              <div className="liquid-showcase-orb">
                <div className="liquid-showcase-rings">
                  <div className="liquid-ring liquid-ring-1"></div>
                  <div className="liquid-ring liquid-ring-2"></div>
                  <div className="liquid-ring liquid-ring-3"></div>
                </div>
                <div className="liquid-center-orb">
                  <i className="ri-atom-line text-blue-300 text-5xl"></i>
                </div>
              </div>
              
              {/* Floating Stats Bubbles */}
              <div className="liquid-stats-bubbles">
                {[
                  { number: '500+', label: 'זרימות מוצלחות', position: 'top-left' },
                  { number: '99%', label: 'שביעות רצון', position: 'top-right' },
                  { number: '24/7', label: 'זרימה רציפה', position: 'bottom-left' },
                  { number: '10+', label: 'שנות זרימה', position: 'bottom-right' }
                ].map((stat, index) => (
                  <div key={index} className={`liquid-stat-bubble liquid-bubble-${stat.position}`}>
                    <div className="liquid-stat-glow">
                      <div className="typography-liquid text-2xl font-bold text-white liquid-text-glow">
                        {stat.number}
                      </div>
                      <div className="typography-liquid text-xs text-blue-200">
                        {stat.label}
                      </div>
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

  // Image with 3D Effects Style - Enhanced
  if (formData.heroStyle === 'image') {
    const imageUrl = heroImage || getBusinessImage(formData.businessType);
    
    return (
      <section 
        className="section-hero relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
        
        <div className="container-hero relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              {/* Image Hero Content */}
              <div className="glass-card p-2 inline-block rounded-full mb-6 animate-slide-up">
                <div className="flex items-center gap-2 px-4 py-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">מומלץ בחום</span>
                </div>
              </div>

              <h1 className="typography-hero text-6xl md:text-8xl mb-8 animate-slide-up animate-delay-1">
                {content?.headline || formData.businessName}
              </h1>

              <div className="glass-card p-6 mb-8 animate-slide-up animate-delay-2">
                <p className="typography-body text-xl text-white leading-relaxed">
                  {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
                {renderCTAButton(true)}
                {renderCTAButton(false)}
              </div>
            </div>

            <div className="hidden lg:block animate-scale-in animate-delay-4">
              <div className="glass-card p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Award className="w-8 h-8" />, title: 'איכות מובטחת' },
                    { icon: <Shield className="w-8 h-8" />, title: 'אמינות מוחלטת' },
                    { icon: <Zap className="w-8 h-8" />, title: 'ביצוע מהיר' },
                    { icon: <Clock className="w-8 h-8" />, title: 'זמינות תמידית' }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="icon-glass mx-auto mb-3 text-blue-400">
                        {item.icon}
                      </div>
                      <h3 className="typography-body text-white font-medium text-sm">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
