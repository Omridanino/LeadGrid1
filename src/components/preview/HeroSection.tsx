
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroWithMockup } from "@/components/ui/hero-with-mockup";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Hero } from "@/components/ui/gradient-hero";
import { Hero as AnimatedHero } from "@/components/ui/animated-hero";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

interface HeroSectionProps {
  content: any;
  currentColors: any;
  formData: any;
  heroImage: string;
}

const heroDesigns = [
  'heroWithMockup',
  'beamsBackground', 
  'gradientHero',
  'animatedHero',
  'heroGeometric'
];

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const [selectedDesign, setSelectedDesign] = useState<string>('');

  useEffect(() => {
    // Generate random design only once when component mounts
    const randomIndex = Math.floor(Math.random() * heroDesigns.length);
    setSelectedDesign(heroDesigns[randomIndex]);
  }, []);

  // Don't render until we have a selected design
  if (!selectedDesign || !content || !formData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  // Apply colors to the container
  const containerStyle = {
    backgroundColor: currentColors?.heroBackground || '#000000',
    color: currentColors?.headlineColor || '#ffffff',
    minHeight: '100vh'
  };

  const titleStyle = {
    color: currentColors?.headlineColor || '#ffffff'
  };

  const subtitleStyle = {
    color: currentColors?.subheadlineColor || '#e0f2fe'
  };

  const badgeStyle = {
    backgroundColor: currentColors?.badge || '#3b82f6',
    color: '#ffffff'
  };

  const primaryButtonStyle = {
    backgroundColor: currentColors?.primary || '#3b82f6',
    color: '#ffffff',
    border: 'none'
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: currentColors?.headlineColor || '#ffffff',
    border: `2px solid ${currentColors?.primary || '#3b82f6'}`
  };

  // Common props for all hero components
  const commonProps = {
    title: content?.headline || formData?.businessName || 'ברוכים הבאים',
    subtitle: content?.subheadline || `${formData?.businessType} מקצועי ואמין`,
    badge: content?.badge || 'חדש',
    primaryCta: content?.cta || 'בואו נתחיל',
    secondaryCta: content?.secondaryCta || 'למד עוד'
  };

  console.log('HeroSection rendering with:', { selectedDesign, content, currentColors });

  const renderHeroDesign = () => {
    switch (selectedDesign) {
      case 'heroWithMockup':
        return (
          <div style={containerStyle} className="min-h-screen">
            <div className="container mx-auto px-4 py-20 text-center">
              {/* Badge */}
              {commonProps.badge && (
                <div className="mb-6">
                  <Badge style={badgeStyle} className="px-4 py-2 text-sm font-medium rounded-full">
                    {commonProps.badge}
                  </Badge>
                </div>
              )}

              {/* Title */}
              <h1 
                style={titleStyle}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {commonProps.title}
              </h1>

              {/* Subtitle */}
              {commonProps.subtitle && (
                <p 
                  style={subtitleStyle}
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  {commonProps.subtitle}
                </p>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {commonProps.primaryCta && (
                  <Button 
                    size="lg" 
                    style={primaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.primaryCta}
                  </Button>
                )}
                {commonProps.secondaryCta && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    style={secondaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.secondaryCta}
                  </Button>
                )}
              </div>
            </div>
          </div>
        );

      case 'beamsBackground':
        return (
          <div style={containerStyle} className="min-h-screen relative overflow-hidden">
            {/* Animated background beams effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(29,78,216,0.15),transparent_50%)] animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.15),transparent_50%)] animate-pulse [animation-delay:1s]"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center">
              {/* Badge */}
              {commonProps.badge && (
                <div className="mb-6">
                  <Badge style={badgeStyle} className="px-4 py-2 text-sm font-medium rounded-full">
                    {commonProps.badge}
                  </Badge>
                </div>
              )}

              {/* Title */}
              <h1 
                style={titleStyle}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {commonProps.title}
              </h1>

              {/* Subtitle */}
              {commonProps.subtitle && (
                <p 
                  style={subtitleStyle}
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  {commonProps.subtitle}
                </p>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {commonProps.primaryCta && (
                  <Button 
                    size="lg" 
                    style={primaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.primaryCta}
                  </Button>
                )}
                {commonProps.secondaryCta && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    style={secondaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.secondaryCta}
                  </Button>
                )}
              </div>
            </div>
          </div>
        );

      case 'gradientHero':
        return (
          <div style={containerStyle} className="min-h-screen relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
            
            <div className="relative z-10 container mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center">
              {/* Badge */}
              {commonProps.badge && (
                <div className="mb-6">
                  <Badge style={badgeStyle} className="px-4 py-2 text-sm font-medium rounded-full">
                    {commonProps.badge}
                  </Badge>
                </div>
              )}

              {/* Title */}
              <h1 
                style={titleStyle}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent"
              >
                {commonProps.title}
              </h1>

              {/* Subtitle */}
              {commonProps.subtitle && (
                <p 
                  style={subtitleStyle}
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  {commonProps.subtitle}
                </p>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {commonProps.primaryCta && (
                  <Button 
                    size="lg" 
                    style={primaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.primaryCta}
                  </Button>
                )}
                {commonProps.secondaryCta && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    style={secondaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.secondaryCta}
                  </Button>
                )}
              </div>
            </div>
          </div>
        );

      case 'animatedHero':
        return (
          <div style={containerStyle} className="min-h-screen">
            <div className="container mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center">
              {/* Badge */}
              {commonProps.badge && (
                <div className="mb-6">
                  <Badge style={badgeStyle} className="px-4 py-2 text-sm font-medium rounded-full animate-pulse">
                    {commonProps.badge}
                  </Badge>
                </div>
              )}

              {/* Title with animation */}
              <h1 
                style={titleStyle}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in"
              >
                {commonProps.title}
              </h1>

              {/* Subtitle */}
              {commonProps.subtitle && (
                <p 
                  style={subtitleStyle}
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s]"
                >
                  {commonProps.subtitle}
                </p>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s]">
                {commonProps.primaryCta && (
                  <Button 
                    size="lg" 
                    style={primaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {commonProps.primaryCta}
                  </Button>
                )}
                {commonProps.secondaryCta && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    style={secondaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {commonProps.secondaryCta}
                  </Button>
                )}
              </div>
            </div>
          </div>
        );

      case 'heroGeometric':
        return (
          <div style={containerStyle} className="min-h-screen relative overflow-hidden">
            {/* Geometric shapes background */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse [animation-delay:1s]"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500/10 rounded-full animate-pulse [animation-delay:2s]"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-4 py-20 text-center min-h-screen flex flex-col justify-center">
              {/* Badge */}
              {commonProps.badge && (
                <div className="mb-6">
                  <Badge style={badgeStyle} className="px-4 py-2 text-sm font-medium rounded-full">
                    {commonProps.badge}
                  </Badge>
                </div>
              )}

              {/* Title */}
              <h1 
                style={titleStyle}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {commonProps.title}
              </h1>

              {/* Subtitle */}
              {commonProps.subtitle && (
                <p 
                  style={subtitleStyle}
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                  {commonProps.subtitle}
                </p>
              )}

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {commonProps.primaryCta && (
                  <Button 
                    size="lg" 
                    style={primaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.primaryCta}
                  </Button>
                )}
                {commonProps.secondaryCta && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    style={secondaryButtonStyle}
                    className="px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {commonProps.secondaryCta}
                  </Button>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div style={containerStyle} className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 style={titleStyle} className="text-4xl font-bold mb-4">
                {commonProps.title}
              </h1>
              {commonProps.subtitle && (
                <p style={subtitleStyle} className="text-xl mb-8">
                  {commonProps.subtitle}
                </p>
              )}
            </div>
          </div>
        );
    }
  };

  return renderHeroDesign();
};
