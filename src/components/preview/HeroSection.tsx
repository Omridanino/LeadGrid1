
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { ArrowLeft, Play, CheckCircle, Star, Zap, Award, Shield, Clock } from "lucide-react";
import { getRandomVariation, DesignVariation } from "@/utils/designVariations";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const [currentVariation, setCurrentVariation] = useState<DesignVariation | null>(null);

  useEffect(() => {
    if (formData.heroStyle) {
      const variation = getRandomVariation(formData.heroStyle);
      setCurrentVariation(variation);
      console.log(`Selected ${formData.heroStyle} variation:`, variation);
    }
  }, [formData.heroStyle]);

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
        <button className={`btn-base btn-liquid-glass ${currentVariation?.className} animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
          <img src="https://cdn.iconscout.com/3d-pack/left-arrow/thumb-400-2.png" alt="arrow" style={{width: '20px', height: '20px'}} />
          {buttonText}
        </button>
      );
    } else if (formData.heroStyle === 'metal') {
      return (
        <button className={`btn-base btn-metal ${currentVariation?.className} animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
          <ArrowLeft className="w-5 h-5" />
          {buttonText}
        </button>
      );
    } else if (formData.heroStyle === 'geometric') {
      return (
        <button className={`btn-base btn-geometric ${currentVariation?.className} animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
          <ArrowLeft className="w-5 h-5" />
          {buttonText}
        </button>
      );
    }

    return (
      <button className={`btn-base btn-primary ${currentVariation?.className} animate-slide-up ${isPrimary ? 'animate-delay-3' : 'animate-delay-4'}`}>
        <ArrowLeft className="w-5 h-5" />
        {buttonText}
      </button>
    );
  };

  // Liquid Glass Hero - Enhanced with Variations
  if (formData.heroStyle === 'glass' && currentVariation) {
    return (
      <section className={`liquid-glass-hero section-hero ${currentVariation.className}`}>
        <div className="liquid-background">
          {currentVariation.backgroundElements.map((element, index) => (
            <div key={index} className={`liquid-orb ${element} liquid-orb-hero-${index + 1}`}></div>
          ))}
        </div>
        
        <div className="liquid-waves">
          <div className={`liquid-wave liquid-wave-1 ${currentVariation.animationStyle}`}></div>
          <div className={`liquid-wave liquid-wave-2 ${currentVariation.animationStyle}`}></div>
          <div className={`liquid-wave liquid-wave-3 ${currentVariation.animationStyle}`}></div>
        </div>
        
        <div className="container-hero relative z-10">
          <div className="liquid-hero-grid">
            <div className="liquid-content-flow">
              <div className={`liquid-status-orb animate-slide-up ${currentVariation.className}`}>
                <div className="liquid-pulse"></div>
                <img src="https://cdn.iconscout.com/3d-pack/online/thumb-400-2.png" alt="online" style={{width: '20px', height: '20px'}} />
                <span className="typography-liquid text-white font-semibold">זמין עכשיו - {currentVariation.name}</span>
              </div>

              <h1 className={`typography-liquid text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 liquid-title-glow ${currentVariation.colorScheme}`}>
                {content?.headline || formData.businessName}
              </h1>

              <div className="liquid-subtitle-flow mb-12 animate-slide-up animate-delay-2">
                <div className={`liquid-text-orb ${currentVariation.className}`}>
                  <p className="typography-liquid text-xl md:text-2xl text-white leading-relaxed liquid-text-glow">
                    {content?.subheadline || `חוויה ${currentVariation.name} ייחודית ל${formData.targetAudience}`}
                  </p>
                </div>
              </div>

              <div className="liquid-actions-flow mb-16">
                {renderCTAButton(true)}
                {renderCTAButton(false)}
              </div>

              <div className="liquid-features-constellation animate-scale-in animate-delay-4">
                {currentVariation.uniqueFeatures.map((feature, index) => (
                  <div key={index} className={`liquid-feature-orb ${currentVariation.className}`}>
                    <div className="liquid-feature-glow">
                      <img src={`https://cdn.iconscout.com/3d-pack/${feature.split('-')[0]}/thumb-400-2.png`} alt={feature} style={{width: '24px', height: '24px'}} />
                    </div>
                    <span className="typography-liquid text-white text-sm font-medium liquid-text-glow">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`liquid-visual-flow animate-scale-in animate-delay-3 ${currentVariation.className}`}>
              <div className="liquid-showcase-orb">
                <div className="liquid-showcase-rings">
                  <div className={`liquid-ring liquid-ring-1 ${currentVariation.animationStyle}`}></div>
                  <div className={`liquid-ring liquid-ring-2 ${currentVariation.animationStyle}`}></div>
                  <div className={`liquid-ring liquid-ring-3 ${currentVariation.animationStyle}`}></div>
                </div>
                <div className={`liquid-center-orb ${currentVariation.colorScheme}`}>
                  <img src="https://cdn.iconscout.com/3d-pack/atom/thumb-400-2.png" alt="core" style={{width: '80px', height: '80px'}} />
                </div>
              </div>
              
              <div className="liquid-stats-bubbles">
                {[
                  { number: '500+', label: `זרימות ${currentVariation.name}`, position: 'top-left' },
                  { number: '99%', label: 'שביעות רצון', position: 'top-right' },
                  { number: '24/7', label: 'זרימה רציפה', position: 'bottom-left' },
                  { number: '10+', label: 'שנות זרימה', position: 'bottom-right' }
                ].map((stat, index) => (
                  <div key={index} className={`liquid-stat-bubble liquid-bubble-${stat.position} ${currentVariation.className}`}>
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

  // Geometric Hero Style - Enhanced with Variations
  if (formData.heroStyle === 'geometric' && currentVariation) {
    return (
      <section className={`geometric-hero section-hero ${currentVariation.className}`}>
        {currentVariation.backgroundElements.map((element, index) => (
          <div key={index} className={`geometric-shape ${element} ${currentVariation.animationStyle}`}></div>
        ))}
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8 animate-slide-up">
              <div className={`glass-card px-4 py-2 ${currentVariation.className}`}>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">דירוג 5 כוכבים - {currentVariation.name}</span>
                </div>
              </div>
              <div className={`glass-card px-4 py-2 ${currentVariation.className}`}>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-white">מומחה מוסמך</span>
                </div>
              </div>
            </div>

            <h1 className={`typography-modern text-6xl md:text-8xl text-white mb-8 animate-slide-up animate-delay-1 ${currentVariation.colorScheme}`}>
              {content?.headline || formData.businessName}
            </h1>

            <div className={`typography-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2 ${currentVariation.className}`}>
              {content?.subheadline || `השירותים ה${currentVariation.name} ביותר ל${formData.targetAudience}`}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {renderCTAButton(true)}
              {renderCTAButton(false)}
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-scale-in animate-delay-4 ${currentVariation.className}`}>
              {[
                { number: '500+', label: `לקוחות ${currentVariation.name}` },
                { number: '98%', label: 'שביעות רצון' },
                { number: '10+', label: 'שנות ניסיון' },
                { number: '24/7', label: 'זמינות' }
              ].map((stat, index) => (
                <div key={index} className={`geometric-card text-center ${currentVariation.colorScheme}`}>
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

  // Metal Hero Style - Enhanced with Variations
  if (formData.heroStyle === 'metal' && currentVariation) {
    return (
      <section className={`section-hero bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden ${currentVariation.className}`}>
        <div className={`absolute inset-0 ${currentVariation.colorScheme}`}></div>
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 metal-card px-6 py-3 rounded-full mb-8 animate-slide-up ${currentVariation.className}`}>
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="typography-luxury text-gray-800 font-semibold">פרימיום {currentVariation.name}</span>
            </div>

            <h1 className={`typography-luxury text-7xl md:text-9xl metal-text mb-8 animate-slide-up animate-delay-1 ${currentVariation.colorScheme}`}>
              {content?.headline || formData.businessName}
            </h1>

            <div className={`metal-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2 ${currentVariation.className}`}>
              <p className="typography-luxury text-xl md:text-2xl text-gray-800 leading-relaxed">
                {content?.subheadline || `השירותים ה${currentVariation.name} ביותר ל${formData.targetAudience}`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {renderCTAButton(true)}
              {renderCTAButton(false)}
            </div>

            <div className={`grid md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4 ${currentVariation.className}`}>
              {[
                { number: '500+', label: `לקוחות ${currentVariation.name}` },
                { number: '98%', label: 'שביעות רצון' },
                { number: '10+', label: 'שנות מצוינות' },
                { number: '24/7', label: 'שירות פרמיום' }
              ].map((stat, index) => (
                <div key={index} className={`metal-card p-6 text-center ${currentVariation.colorScheme}`}>
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

  // Image with 3D Effects Style - Enhanced with Variations
  if (formData.heroStyle === 'image' && currentVariation) {
    const imageUrl = heroImage || getBusinessImage(formData.businessType);
    
    return (
      <section 
        className={`section-hero relative overflow-hidden ${currentVariation.className}`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 ${currentVariation.colorScheme}`}></div>
        
        {currentVariation.backgroundElements.map((element, index) => (
          <div key={index} className={`${element} ${currentVariation.animationStyle}`}></div>
        ))}
        
        <div className="container-hero relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <div className={`glass-card p-2 inline-block rounded-full mb-6 animate-slide-up ${currentVariation.className}`}>
                <div className="flex items-center gap-2 px-4 py-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">מומלץ בחום - {currentVariation.name}</span>
                </div>
              </div>

              <h1 className={`typography-hero text-6xl md:text-8xl mb-8 animate-slide-up animate-delay-1 ${currentVariation.colorScheme}`}>
                {content?.headline || formData.businessName}
              </h1>

              <div className={`glass-card p-6 mb-8 animate-slide-up animate-delay-2 ${currentVariation.className}`}>
                <p className="typography-body text-xl text-white leading-relaxed">
                  {content?.subheadline || `השירותים ה${currentVariation.name} ביותר ל${formData.targetAudience}`}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
                {renderCTAButton(true)}
                {renderCTAButton(false)}
              </div>
            </div>

            <div className="hidden lg:block animate-scale-in animate-delay-4">
              <div className={`glass-card p-8 ${currentVariation.className}`}>
                <div className="grid grid-cols-2 gap-4">
                  {currentVariation.uniqueFeatures.map((feature, index) => (
                    <div key={index} className="text-center p-4">
                      <div className={`icon-glass mx-auto mb-3 text-blue-400 ${currentVariation.colorScheme}`}>
                        <Award className="w-8 h-8" />
                      </div>
                      <h3 className="typography-body text-white font-medium text-sm">
                        {feature}
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

  // Default 3D Background Style - Enhanced with Variations
  if (currentVariation) {
    return (
      <section className={`hero-3d section-hero ${currentVariation.className}`}>
        {currentVariation.backgroundElements.map((element, index) => (
          <div key={index} className={`floating-element ${element} ${currentVariation.animationStyle}`}></div>
        ))}
        
        <div className="container-hero relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-8 animate-slide-up">
              <div className={`glass-card px-4 py-2 ${currentVariation.className}`}>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                </div>
              </div>
              <div className={`glass-card px-4 py-2 ${currentVariation.className}`}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-white">מומחה {currentVariation.name}</span>
                </div>
              </div>
            </div>

            <h1 className={`typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 ${currentVariation.colorScheme}`}>
              {content?.headline || formData.businessName}
            </h1>

            <div className={`glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2 ${currentVariation.className}`}>
              <p className="typography-body text-xl md:text-2xl text-white leading-relaxed">
                {content?.subheadline || `השירותים ה${currentVariation.name} ביותר ל${formData.targetAudience}`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              {renderCTAButton(true)}
              {renderCTAButton(false)}
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4 ${currentVariation.className}`}>
              {[
                { number: '500+', label: `לקוחות ${currentVariation.name}` },
                { number: '98%', label: 'שביעות רצון' },
                { number: '10+', label: 'שנות ניסיון' },
                { number: '24/7', label: 'זמינות' }
              ].map((stat, index) => (
                <div key={index} className={`glass-card p-6 text-center ${currentVariation.colorScheme}`}>
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

  // Fallback if no variation is loaded yet
  return (
    <section className="hero-3d section-hero">
      <div className="container-hero relative z-10">
        <div className="text-center">
          <h1 className="typography-hero text-7xl md:text-9xl mb-8">
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
