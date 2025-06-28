
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { ChromeGrid } from "@/components/ui/chrome-grid";
import { AuroraHero } from "@/components/ui/futurastic-hero-section";
import { LavaLamp } from "@/components/ui/fluid-blob";
import { Scene } from "@/components/ui/rubik-s-cube";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { BeamsBackground } from "@/components/ui/beams-background";
import { GradientHero } from "@/components/ui/gradient-hero";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ArrowLeft, Play, Shield, Zap, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const designStyle = formData?.designStyle || 'basic';

  // Basic Design Style - Random selection from 5 different designs
  if (designStyle === 'basic') {
    const [selectedBasicDesign, setSelectedBasicDesign] = useState(0);

    useEffect(() => {
      // Randomly select one of the 5 basic designs
      setSelectedBasicDesign(Math.floor(Math.random() * 5));
    }, []);

    // Design 1: Enhanced Mockup Hero
    if (selectedBasicDesign === 0) {
      return (
        <HeroWithMockup
          title={content?.headline || formData?.businessName || 'העסק שלכם'}
          description={content?.subheadline || content?.description || `פתרונות מקצועיים ל${formData?.targetAudience || 'הלקוחות שלכם'}`}
          primaryCta={{
            text: content?.buttons?.[0]?.text || content?.cta || 'בואו נתחיל',
            onClick: () => {}
          }}
          secondaryCta={{
            text: content?.buttons?.[1]?.text || 'למד עוד',
            onClick: () => {}
          }}
        />
      );
    }

    // Design 2: Beams Background
    if (selectedBasicDesign === 1) {
      return (
        <BeamsBackground
          title={content?.headline || formData?.businessName || 'חלומות דיגיטליים'}
          description={content?.subheadline || content?.description || 'שם המחשבות מקבלות צורה והתודעה זורמת כמו כספית נוזלית'}
          primaryCta={{
            text: content?.buttons?.[0]?.text || content?.cta || 'היכנסו לזרימה',
            onClick: () => {}
          }}
          secondaryCta={{
            text: content?.buttons?.[1]?.text || 'חקרו עוד',
            onClick: () => {}
          }}
        />
      );
    }

    // Design 3: Gradient Hero with Lamp Effect
    if (selectedBasicDesign === 2) {
      return (
        <GradientHero
          title={content?.headline || formData?.businessName || 'העתיד כאן עכשיו'}
          subtitle={content?.subheadline || content?.description || 'חוויה דיגיטלית מתקדמת שמביאה את העסק שלכם לעידן החדש'}
          primaryCta={{
            text: content?.buttons?.[0]?.text || content?.cta || 'התחילו היום',
            onClick: () => {}
          }}
          secondaryCta={{
            text: content?.buttons?.[1]?.text || 'גלו עוד',
            onClick: () => {}
          }}
        />
      );
    }

    // Design 4: Animated Text Hero
    if (selectedBasicDesign === 3) {
      return (
        <AnimatedHero
          title={content?.headline || formData?.businessName || 'זה משהו'}
          subtitle={content?.subheadline || content?.description || `ניהול עסק קטן היום כבר מספיק קשה. הימנעו מסיבוכים נוספים על ידי נטישת שיטות מסחר מיושנות ומייגעות. המטרה שלנו היא לפשט את המסחר של עסקים קטנים ובינוניים.`}
          primaryCta={{
            text: content?.buttons?.[0]?.text || content?.cta || 'הירשמו כאן',
            onClick: () => {}
          }}
          secondaryCta={{
            text: content?.buttons?.[1]?.text || 'הצגת המוצר',
            onClick: () => {}
          }}
        />
      );
    }

    // Design 5: Geometric Shapes Hero
    if (selectedBasicDesign === 4) {
      return (
        <HeroGeometric
          badge={content?.badge || "עיצוב מתקדם"}
          title1={content?.headline || formData?.businessName || 'העלו את החזון הדיגיטלי'}
          title2={content?.subheadline || "יצירת אתרים יוצאי דופן"}
        />
      );
    }
  }

  // 3D Tech Design Style - Random selection from 5 different designs
  if (designStyle === '3d-tech') {
    const [selectedDesign, setSelectedDesign] = useState(0);

    useEffect(() => {
      // Randomly select one of the 5 3D designs
      setSelectedDesign(Math.floor(Math.random() * 5));
    }, []);

    // Design 1: Spline 3D Scene
    if (selectedDesign === 0) {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black/[0.96]">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-screen">
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <div className="max-w-2xl">
                {content?.badge && (
                  <Badge className="inline-flex items-center gap-2 backdrop-blur-md border px-4 py-2 rounded-full mb-6 text-neutral-300 border-neutral-600">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{content.badge}</span>
                  </Badge>
                )}
                
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                  {content?.headline || formData?.businessName || 'חוויה תלת-מימדית'}
                </h1>
                
                <p className="text-neutral-300 text-lg leading-relaxed mb-8 max-w-lg">
                  {content?.subheadline || content?.description || `הביאו את העסק שלכם למימד חדש עם טכנולוגיות מתקדמות ועיצוב חדשני`}
                </p>
                
                <div className="flex gap-4">
                  {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                    <button 
                      key={index}
                      className={`px-6 py-3 rounded-lg font-semibold transition ${
                        button.variant === 'primary' || index === 0 
                          ? 'bg-white text-black hover:bg-gray-200' 
                          : 'border border-neutral-600 text-white hover:bg-neutral-800'
                      }`}
                    >
                      {button.text}
                    </button>
                  )) || (
                    <>
                      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        {content?.cta || 'התחילו עכשיו'}
                      </button>
                      <button className="border border-neutral-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition">
                        גלו עוד
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      );
    }

    if (selectedDesign === 1) {
      return (
        <div className="h-screen w-screen relative">
          <ChromeGrid />
          <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white/70">
              <Shield className="w-4 h-4" />
              <span className="text-sm">מתכת אינטראקטיבית</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-widest text-white whitespace-nowrap">
              {content?.headline || formData?.businessName || 'עוצמה דיגיטלית'}
            </h1>
            
            <p className="text-sm md:text-lg text-white/70 font-mono tracking-wide mb-8 max-w-2xl">
              {content?.subheadline || 'מתכת שמגיבה למגע - טכנולוגיה שמשנה את הכללים'}
            </p>
            
            <div className="flex gap-4 pointer-events-auto">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition transform hover:scale-105">
                {content?.cta || 'חווה את החוויה'}
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition backdrop-blur-sm">
                למד עוד
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (selectedDesign === 2) {
      return (
        <section className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">
          <div className="absolute inset-0" style={{
            background: `radial-gradient(125% 125% at 50% 0%, #020617 50%, #13FFAA)`
          }} />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="mb-6 inline-block rounded-full bg-gray-600/50 px-4 py-2 text-sm border border-gray-500/30">
              <Award className="w-4 h-4 inline mr-2" />
              טכנולוגיה חדשנית
            </span>
            
            <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl md:text-7xl font-medium leading-tight text-transparent mb-6">
              {content?.headline || formData?.businessName || 'העתיד כאן עכשיו'}
            </h1>
            
            <p className="my-6 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
              {content?.subheadline || 'חוויה דיגיטלית מתקדמת שמביאה את העסק שלכם לעידן החדש עם טכנולוגיות מהפכניות'}
            </p>
            
            <button
              className="group relative flex w-fit items-center gap-2 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50 border border-gray-600/50 backdrop-blur-sm"
              style={{
                boxShadow: '0px 4px 24px rgba(19, 255, 170, 0.3)'
              }}
            >
              {content?.cta || 'התחילו היום'}
              <ArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </button>
          </div>

          <div className="absolute inset-0 z-0">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.5 + 0.2
                }}
              />
            ))}
          </div>
        </section>
      );
    }

    if (selectedDesign === 3) {
      return (
        <div className="h-screen w-screen flex flex-col justify-center items-center relative">
          <LavaLamp />
          <div className="absolute z-10 text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white mix-blend-exclusion">
              <Zap className="w-4 h-4" />
              <span className="text-sm">זרימה דיגיטלית</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mix-blend-exclusion text-white whitespace-nowrap mb-6">
              {content?.headline || formData?.businessName || 'חלומות דיגיטליים'}
            </h1>
            
            <p className="text-lg md:text-xl text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed mb-8 px-4">
              {content?.subheadline || 'שם המחשבות מקבלות צורה והתודעה זורמת כמו כספית נוזלית דרך מימדים אינסופיים'}
            </p>
            
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition mix-blend-exclusion">
                {content?.cta || 'היכנסו לזרימה'}
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition backdrop-blur-sm mix-blend-exclusion">
                חקרו עוד
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (selectedDesign === 4) {
      return (
        <div className="h-screen w-screen relative flex flex-col justify-center items-center">
          <div className="absolute inset-0">
            <Scene />
          </div>
          <div className="absolute z-10 text-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 text-white mix-blend-difference">
              <Award className="w-4 h-4" />
              <span className="text-sm">פתרון המורכבות</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight mix-blend-difference text-white">
              {content?.headline || formData?.businessName || 'פתרון המורכבות'}
            </h1>
            
            <p className="text-lg md:text-xl text-white mix-blend-exclusion max-w-2xl px-6 leading-relaxed mb-8">
              {content?.subheadline || 'פיסה אחת בכל פעם - אנחנו פותרים את האתגרים המורכבים ביותר'}
            </p>
            
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition mix-blend-exclusion">
                {content?.cta || 'פתרו איתנו'}
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition backdrop-blur-sm mix-blend-exclusion">
                גלו איך
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  // Fallback to basic design
  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ backgroundColor: currentColors.heroBackground }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {content?.badge && (
            <Badge className="mb-6" style={{ backgroundColor: currentColors.accent }}>
              {content.badge}
            </Badge>
          )}
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ color: currentColors.headlineColor }}
          >
            {content?.headline || formData?.businessName || 'העסק שלכם'}
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-12"
            style={{ color: currentColors.subheadlineColor }}
          >
            {content?.subheadline || content?.description || 'פתרונות מקצועיים'}
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
              <button 
                key={index}
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ 
                  backgroundColor: button.variant === 'primary' || index === 0 ? currentColors.primary : 'transparent',
                  color: button.variant === 'primary' || index === 0 ? '#ffffff' : currentColors.primary,
                  border: button.variant === 'outline' ? `2px solid ${currentColors.primary}` : 'none'
                }}
              >
                {button.text}
              </button>
            )) || (
              <button 
                className="px-8 py-4 rounded-xl font-semibold text-lg"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'בואו נתחיל'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
