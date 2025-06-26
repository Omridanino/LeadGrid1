
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { ArrowLeft, Play, CheckCircle, Star, Zap } from "lucide-react";

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

  const getHeroStyle = () => {
    if (formData.heroStyle === 'image') {
      const imageUrl = heroImage || getBusinessImage(formData.businessType);
      return {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
    return {};
  };

  const renderCTAButton = () => {
    const buttonText = content?.cta || 'בואו נתחיל לעבוד יחד';
    
    if (formData.heroStyle === 'glass') {
      return (
        <LiquidButton 
          size="xxl" 
          className="btn-primary text-lg px-12 py-6 rounded-2xl animate-fade-in-up"
          style={{ 
            backgroundColor: currentColors.primary,
            color: 'white',
            fontSize: '18px',
            fontWeight: '600',
            animationDelay: '0.6s'
          }}
        >
          <ArrowLeft className="w-5 h-5 ml-2" />
          {buttonText}
        </LiquidButton>
      );
    } else if (formData.heroStyle === 'metal') {
      return (
        <MetalButton 
          variant="primary"
          className="btn-primary text-lg px-12 py-6 animate-fade-in-up"
          style={{ fontSize: '18px', fontWeight: '600', animationDelay: '0.6s' }}
        >
          <ArrowLeft className="w-5 h-5 ml-2" />
          {buttonText}
        </MetalButton>
      );
    }

    return (
      <button 
        className="btn-primary text-lg px-12 py-6 rounded-2xl animate-fade-in-up inline-flex items-center gap-3"
        style={{ 
          backgroundColor: currentColors.primary,
          animationDelay: '0.6s',
          fontSize: '18px',
          fontWeight: '600'
        }}
      >
        <ArrowLeft className="w-5 h-5" />
        {buttonText}
      </button>
    );
  };

  // Geometric Hero Style
  if (formData.heroStyle === 'geometric') {
    return (
      <div className="hero-tech min-h-screen">
        <HeroGeometric
          badge={formData.businessType}
          title1={content?.headline || formData.businessName}
          title2={content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
        />
      </div>
    );
  }

  const getHeroBackgroundClass = () => {
    switch (formData.heroStyle) {
      case 'glass':
        return 'hero-tech';
      case 'metal':
        return 'hero-tech';
      case 'image':
        return '';
      default:
        return 'hero-gradient';
    }
  };

  // Main hero design
  return (
    <section 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${getHeroBackgroundClass()}`}
      style={getHeroStyle()}
    >
      {/* Background Effects */}
      {formData.heroStyle === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10 relative max-w-7xl">
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in-up">
          <div className="flex items-center gap-2 glass-card px-4 py-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-white">דירוג 5 כוכבים</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">מומחה מוסמך</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white">תוצאות מיידיות</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="typography-display text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up text-white"
            style={{ animationDelay: '0.2s' }}>
          {content?.headline || formData.businessName}
        </h1>

        {/* Subheadline */}
        <div className="typography-body text-xl md:text-3xl mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up glass-card-dark p-8 rounded-3xl"
             style={{ 
               color: currentColors.subheadlineColor,
               animationDelay: '0.4s'
             }}>
          {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {renderCTAButton()}
          
          <button className="btn-secondary text-lg px-8 py-4 rounded-2xl animate-fade-in-up inline-flex items-center gap-3"
                  style={{ animationDelay: '0.7s' }}>
            <Play className="w-5 h-5" />
            צפה בדוגמה
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.8s' }}>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="text-gray-300 font-medium">לקוחות מרוצים</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="text-gray-300 font-medium">שביעות רצון</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="text-gray-300 font-medium">שנות ניסיון</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="text-gray-300 font-medium">זמינות</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
