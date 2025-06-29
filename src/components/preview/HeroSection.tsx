import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/types/colors";
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
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { BackgroundCircles } from "@/components/ui/background-circles";
import { HorizonHeroSection } from "@/components/ui/horizon-hero-section";
import { HeroSectionClean } from "@/components/ui/hero-section-clean";
import { HeroSectionModern } from "@/components/ui/hero-section-modern";
import { HeroSectionLamp } from "@/components/ui/hero-section-lamp";
import { HeroSectionRetro } from "@/components/ui/hero-section-retro";
import { ArrowLeft, Play, Shield, Zap, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HeroDesignAli } from "@/components/ui/hero-designali";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const designStyle = formData?.designStyle || 'basic';

  // Helper function to get inline style for text colors with gradient support
  const getTextStyle = (colorKey: string) => {
    const colorValue = content?.colors?.[colorKey];
    if (colorValue) {
      // Check if it's a gradient
      if (colorValue.includes('gradient')) {
        return { 
          background: colorValue,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        };
      }
      return { color: colorValue };
    }
    return {};
  };

  // Helper function to get inline style for button colors with gradient support
  const getButtonStyle = (buttonColor?: string) => {
    if (buttonColor) {
      if (buttonColor.includes('gradient')) {
        return { 
          background: buttonColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        backgroundColor: buttonColor,
        color: '#ffffff',
        border: 'none'
      };
    }
    return {};
  };

  // Helper function to get inline style for badge colors with gradient support
  const getBadgeStyle = () => {
    const badgeColor = content?.colors?.badge;
    if (badgeColor) {
      if (badgeColor.includes('gradient')) {
        return { 
          background: badgeColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        backgroundColor: badgeColor,
        color: '#ffffff',
        border: 'none'
      };
    }
    return {};
  };

  // Helper function to create custom content props for components
  const getCustomContentProps = () => ({
    badge: content?.badge,
    headline: content?.headline || formData?.businessName,
    subheadline: content?.subheadline || content?.description,
    description: content?.description,
    buttons: content?.buttons,
    colors: content?.colors,
    cta: content?.cta
  });

  // Handle Basic Design Style variations
  if (designStyle === 'basic' || designStyle.startsWith('hero-section-')) {
    const [selectedBasicDesign, setSelectedBasicDesign] = useState<string>('');

    useEffect(() => {
      // Generate a truly random selection based on timestamp and random
      const randomSeed = Date.now() + Math.random() * 1000;
      const availableDesigns = [
        'hero-section-clean',
        'hero-section-minimal', 
        'hero-section-classic',
        'hero-section-elegant',
        'hero-section-modern',
        'hero-section-lamp',
        'hero-section-retro'
      ];
      
      const randomIndex = Math.floor(randomSeed % availableDesigns.length);
      const selectedDesign = availableDesigns[randomIndex];
      
      console.log('Selected random design:', selectedDesign, 'from index:', randomIndex);
      setSelectedBasicDesign(selectedDesign);
    }, [formData?.businessName, formData?.businessType]);

    // Enhanced Mockup Hero (minimal) with custom content
    if (selectedBasicDesign === 'hero-section-minimal') {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black/[0.96]">
          <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {content?.badge && (
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                  style={getBadgeStyle()}
                >
                  {content.badge}
                </div>
              )}
              
              <h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                style={getTextStyle('headline')}
              >
                {content?.headline || formData?.businessName || 'העסק שלכם'}
              </h1>
              
              <p 
                className="text-xl md:text-2xl mb-12"
                style={getTextStyle('subheadline')}
              >
                {content?.subheadline || content?.description || `פתרונות מקצועיים ל${formData?.targetAudience || 'הלקוחות שלכם'}`}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                  <button 
                    key={index}
                    className="px-8 py-4 rounded-xl font-semibold text-lg transition"
                    style={getButtonStyle(button.color)}
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
    }

    // All other basic designs - pass content as props
    const customContentProps = getCustomContentProps();

    if (selectedBasicDesign === 'hero-section-clean') {
      return (
        <HeroSectionClean
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-modern') {
      return (
        <HeroSectionModern
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-lamp') {
      return (
        <HeroSectionLamp
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    if (selectedBasicDesign === 'hero-section-retro') {
      return (
        <HeroSectionRetro
          formData={formData}
          currentColors={currentColors}
          content={customContentProps}
        />
      );
    }

    // Beams Background (classic) with custom content
    if (selectedBasicDesign === 'hero-section-classic') {
      return (
        <section className="relative overflow-hidden min-h-screen bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {content?.badge && (
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                  style={getBadgeStyle()}
                >
                  {content.badge}
                </div>
              )}
              
              <h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                style={getTextStyle('headline')}
              >
                {content?.headline || formData?.businessName || 'חלומות דיגיטליים'}
              </h1>
              
              <p 
                className="text-xl md:text-2xl mb-12"
                style={getTextStyle('subheadline')}
              >
                {content?.subheadline || content?.description || 'שם המחשבות מקבלות צורה והתודעה זורמת כמו כספית נוזלית'}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                  <button 
                    key={index}
                    className="px-8 py-4 rounded-xl font-semibold text-lg transition"
                    style={getButtonStyle(button.color)}
                  >
                    {button.text}
                  </button>
                )) || (
                  <button 
                    className="px-8 py-4 rounded-xl font-semibold text-lg"
                    style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                  >
                    {content?.cta || 'היכנסו לזרימה'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Gradient Hero (elegant) with custom content
    if (selectedBasicDesign === 'hero-section-elegant') {
      return (
        <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=%229C92AC&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              {content?.badge && (
                <div 
                  className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                  style={getBadgeStyle()}
                >
                  {content.badge}
                </div>
              )}
              
              <h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                style={getTextStyle('headline')}
              >
                {content?.headline || formData?.businessName || 'העתיד כאן עכשיו'}
              </h1>
              
              <p 
                className="text-xl md:text-2xl mb-12"
                style={getTextStyle('subheadline')}
              >
                {content?.subheadline || content?.description || 'חוויה דיגיטלית מתקדמת שמביאה את העסק שלכם לעידן החדש'}
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap">
                {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                  <button 
                    key={index}
                    className="px-8 py-4 rounded-xl font-semibold text-lg transition"
                    style={getButtonStyle(button.color)}
                  >
                    {button.text}
                  </button>
                )) || (
                  <button 
                    className="px-8 py-4 rounded-xl font-semibold text-lg"
                    style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                  >
                    {content?.cta || 'haledו היום'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Default fallback
    return (
      <section className="relative overflow-hidden min-h-screen bg-black">
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            {content?.badge && (
              <div 
                className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
                style={getBadgeStyle()}
              >
                {content.badge}
              </div>
            )}
            
            <h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              style={getTextStyle('headline')}
            >
              {content?.headline || formData?.businessName || 'העסק'}
            </h1>
            
            <p 
              className="text-xl md:text-2xl mb-12"
              style={getTextStyle('subheadline')}
            >
              {content?.subheadline || content?.description || 'פתרונות מקצועיים'}
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                <button 
                  key={index}
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition"
                  style={getButtonStyle(button.color)}
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
  }

  
  // 3D Tech Design Style - עם סגנונות מותאמים אישית
  if (designStyle === '3d-tech') {
    const [selectedDesign, setSelectedDesign] = useState(0);

    useEffect(() => {
      // Randomly select one of the 10 3D designs (removed ScrollExpandMedia)
      setSelectedDesign(Math.floor(Math.random() * 10));
    }, []);

    // Design 1: Spline 3D Scene with custom styles
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
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm"
                    style={getBadgeStyle()}
                  >
                    <Zap className="w-4 h-4" />
                    <span>{content.badge}</span>
                  </div>
                )}
                
                <h1 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  style={getTextStyle('headline')}
                >
                  {content?.headline || formData?.businessName || 'חוויה תלת מימדית'}
                </h1>
                
                <p 
                  className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={getTextStyle('subheadline')}
                >
                  {content?.subheadline || content?.description || `הביאו את העסק שלכם למימד חדש עם טכנולוגיות מתקדמות ועיצוב חדשני`}
                </p>
                
                <div className="flex gap-4">
                  {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                    <button 
                      key={index}
                      className="px-6 py-3 rounded-lg font-semibold transition"
                      style={getButtonStyle(button.color)}
                    >
                      {button.text}
                    </button>
                  )) || (
                    <button 
                      className="px-6 py-3 rounded-lg font-semibold transition"
                      style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                    >
                      {content?.cta || 'haledו עכשיו'}
                    </button>
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

    // Design 2: Chrome Grid with custom styles
    if (selectedDesign === 1) {
      return (
        <div className="h-screen w-screen relative">
          <ChromeGrid />
          <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center text-center">
            {content?.badge && (
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm pointer-events-auto"
                style={getBadgeStyle()}
              >
                <Shield className="w-4 h-4" />
                <span>{content.badge}</span>
              </div>
            )}
            
            <h1 
              className="text-5xl md:text-7xl font-light mb-4 tracking-widest whitespace-nowrap"
              style={getTextStyle('headline')}
            >
              {content?.headline || formData?.businessName || 'דיגיטל אמיץ'}
            </h1>
            
            <p 
              className="text-sm md:text-lg font-mono tracking-wide mb-8 max-w-2xl"
              style={getTextStyle('subheadline')}
            >
              {content?.subheadline || 'טכנולוגיה שמביאה חיים למגע - דרך חדשה לעשות דברים'}
            </p>
            
            <div className="flex gap-4 pointer-events-auto">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                <button 
                  key={index}
                  className="px-8 py-4 rounded-lg font-bold transition transform hover:scale-105"
                  style={getButtonStyle(button.color)}
                >
                  {button.text}
                </button>
              )) || (
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition transform hover:scale-105"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content?.cta || 'היכנסו'}
                </button>
              )}
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
            {content?.badge && (
              <div 
                className="mb-6 inline-block rounded-full px-4 py-2 text-sm"
                style={getBadgeStyle()}
              >
                <Award className="w-4 h-4 inline mr-2" />
                {content.badge}
              </div>
            )}
            
            <h1 
              className="max-w-4xl text-center text-4xl md:text-7xl font-medium leading-tight mb-6"
              style={getTextStyle('headline')}
            >
              {content?.headline || formData?.businessName || 'the future is now'}
            </h1>
            
            <p 
              className="my-6 max-w-2xl text-center text-lg leading-relaxed"
              style={getTextStyle('subheadline')}
            >
              {content?.subheadline || 'a digital experience that brings your business to the future with cutting-edge technologies'}
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                <button 
                  key={index}
                  className="group relative flex w-fit items-center gap-2 rounded-full px-6 py-3 transition-colors"
                  style={getButtonStyle(button.color)}
                >
                  {button.text}
                  <ArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </button>
              )) || (
                <button
                  className="group relative flex w-fit items-center gap-2 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50 border border-gray-600/50 backdrop-blur-sm"
                  style={{
                    boxShadow: '0px 4px 24px rgba(19, 255, 170, 0.3)'
                  }}
                >
                  {content?.cta || 'come in'}
                  <ArrowLeft className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </button>
              )}
            </div>
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
            {content?.badge && (
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm"
                style={getBadgeStyle()}
              >
                <Zap className="w-4 h-4" />
                <span>{content.badge}</span>
              </div>
            )}
            
            <h1 
              className="text-6xl md:text-8xl font-bold tracking-tight whitespace-nowrap mb-6"
              style={getTextStyle('headline')}
            >
              {content?.headline || formData?.businessName || 'dreams of the digital'}
            </h1>
            
            <p 
              className="text-lg md:text-xl text-center max-w-2xl leading-relaxed mb-8 px-4"
              style={getTextStyle('subheadline')}
            >
              {content?.subheadline || 'the computers receive a shape and the information flows like a coin of the realm'}
            </p>
            
            <div className="flex gap-4 justify-center">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                <button 
                  key={index}
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={getButtonStyle(button.color)}
                >
                  {button.text}
                </button>
              )) || (
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content?.cta || 'come in'}
                </button>
              )}
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
            {content?.badge && (
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm"
                style={getBadgeStyle()}
              >
                <Award className="w-4 h-4" />
                <span>{content.badge}</span>
              </div>
            )}
            
            <h1 
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
              style={getTextStyle('headline')}
            >
              {content?.headline || formData?.businessName || 'solution for complex problems'}
            </h1>
            
            <p 
              className="text-lg md:text-xl max-w-2xl px-6 leading-relaxed mb-8"
              style={getTextStyle('subheadline')}
            >
              {content?.subheadline || 'one piece at a time - we solve the most complex problems'}
            </p>
            
            <div className="flex gap-4 justify-center">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                <button 
                  key={index}
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={getButtonStyle(button.color)}
                >
                  {button.text}
                </button>
              )) || (
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content?.cta || 'solve with us'}
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (selectedDesign === 5) {
      const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";
      
      return (
        <div className="relative w-screen h-screen overflow-hidden">
          <InteractiveRobotSpline
            scene={ROBOT_SCENE_URL}
            className="absolute inset-0 z-0" 
          />

          <div className="absolute inset-0 z-10 pt-20 md:pt-32 lg:pt-40 px-4 md:px-8 pointer-events-none">
            <div className="text-center text-white drop-shadow-lg w-full max-w-2xl mx-auto pointer-events-auto">
              {content?.badge && (
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm`} style={getBadgeStyle()}>
                  <Zap className="w-4 h-4" />
                  <span>{content.badge}</span>
                </div>
              )}
              
              <h1 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6`} style={getTextStyle('headline')}>
                {content?.headline || formData?.businessName || 'interactive 3D robot'}
              </h1>
              
              <p className={`text-lg leading-relaxed mb-8 px-4`} style={getTextStyle('subheadline')}>
                {content?.subheadline || 'an advanced interactive experience with 3D technology'}
              </p>
              
              <div className="flex gap-4 justify-center pointer-events-auto">
                {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                  <button 
                    key={index}
                    className="px-8 py-4 rounded-lg font-bold transition"
                    style={getButtonStyle(button.color)}
                  >
                    {button.text}
                  </button>
                )) || (
                  <button 
                    className="px-8 py-4 rounded-lg font-bold transition"
                    style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                  >
                    {content?.cta || 'explore the robot'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (selectedDesign === 6) {
      return (
        <div className="relative w-screen h-screen overflow-hidden bg-black">
          <BackgroundCircles
            title={content?.headline || formData?.businessName || 'background circles'}
            description={content?.subheadline || content?.description || 'advanced geometric design with animated grids'}
            variant="primary"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            {content?.badge && (
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm`} style={getBadgeStyle()}>
                <Award className="w-4 h-4" />
                <span>{content.badge}</span>
              </div>
            )}
            
            <div className="flex gap-4 justify-center mt-8">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                <button 
                  key={index}
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={getButtonStyle(button.color)}
                >
                  {button.text}
                </button>
              )) || (
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content?.cta || 'experience'}
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (selectedDesign === 7) {
      return (
        <div className="relative w-screen h-screen overflow-hidden">
          <HorizonHeroSection
            title={content?.headline || formData?.businessName || 'HORIZON'}
            subtitle1={content?.subheadline || 'Where vision meets reality,'}
            subtitle2={content?.description || 'we shape the future of tomorrow'}
            className="absolute inset-0"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
            <div className="mt-96 flex gap-4 justify-center pointer-events-auto">
              {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
                <button 
                  key={index}
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={getButtonStyle(button.color)}
                >
                  {button.text}
                </button>
              )) || (
                <button 
                  className="px-8 py-4 rounded-lg font-bold transition"
                  style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
                >
                  {content?.cta || 'explore the horizon'}
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (selectedDesign === 8) {
      return (
        <div className="relative w-screen h-screen overflow-hidden">
          <HeroDesignAli
            title={content?.headline || formData?.businessName || 'Your complete platform for the Design.'}
            subtitle={content?.subheadline || 'Welcome to my creative playground! I\'m'}
            typewriterStrings={["Graphic Design", "Branding", "Web Design", "Web Develop", "Marketing", "UI UX", "Social Media"]}
            onStartClick={() => {}}
            onBookCallClick={() => {}}
          />
          
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex gap-4 justify-center">
            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
              <button 
                key={index}
                className="px-8 py-4 rounded-lg font-bold transition"
                style={getButtonStyle(button.color)}
              >
                {button.text}
              </button>
            )) || (
              <button 
                className="px-8 py-4 rounded-lg font-bold transition"
                style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
              >
                {content?.cta || 'start creating'}
              </button>
            )}
          </div>
        </div>
      );
    }

    if (selectedDesign === 9) {
      return (
        <div className="relative w-screen h-screen overflow-hidden">
          <HeroFuturistic
            title={content?.headline || formData?.businessName || 'Build Your Dreams'}
            subtitle={content?.subheadline || content?.description || 'AI-powered creativity for the next generation.'}
            buttonText="explore more"
            onButtonClick={() => {}}
          />
          
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-30 flex gap-4 justify-center">
            {content?.buttons?.filter((btn: any) => btn.visible !== false).slice(1).map((button: any, index: number) => (
              <button 
                key={index}
                className="px-8 py-4 rounded-lg font-bold transition"
                style={getButtonStyle(button.color)}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      );
    }
  }

  // Fallback to basic design with custom styles
  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{ backgroundColor: currentColors.heroBackground }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {content?.badge && (
            <div 
              className="inline-block mb-6 px-4 py-2 rounded-full text-sm"
              style={getBadgeStyle()}
            >
              {content.badge}
            </div>
          )}
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={getTextStyle('headline')}
          >
            {content?.headline || formData?.businessName || 'העסק'}
          </h1>
          
          <p 
            className="text-xl md:text-2xl mb-12"
            style={getTextStyle('subheadline')}
          >
            {content?.subheadline || content?.description || 'פתרונות מקצועיים'}
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            {content?.buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => (
              <button 
                key={index}
                className="px-8 py-4 rounded-xl font-semibold text-lg transition"
                style={getButtonStyle(button.color)}
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
