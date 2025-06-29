
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ColorScheme } from "@/types/colors";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  // Helper function to get text style based on color configuration
  const getTextStyle = (colorConfig: any, fallbackColor: string) => {
    if (!colorConfig) return { color: fallbackColor };
    
    if (typeof colorConfig === 'string') {
      return { color: colorConfig };
    }
    
    if (colorConfig.type === 'gradient') {
      return {
        background: `linear-gradient(${colorConfig.gradientDirection || 'to-r'}, ${colorConfig.gradientFrom || fallbackColor}, ${colorConfig.gradientTo || fallbackColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      };
    }
    
    return { color: colorConfig.color || fallbackColor };
  };

  // Helper function to get button style
  const getButtonStyle = (button: any) => {
    if (button.gradientType === 'gradient') {
      return {
        background: `linear-gradient(${button.gradientDirection || 'to-r'}, ${button.gradientFrom || '#3b82f6'}, ${button.gradientTo || '#8b5cf6'})`,
        border: 'none',
        color: 'white'
      };
    }
    
    return {
      backgroundColor: button.color || '#3b82f6',
      border: 'none',
      color: 'white'
    };
  };

  // Helper function to get badge style
  const getBadgeStyle = (colorConfig: any) => {
    if (!colorConfig) return {};
    
    if (typeof colorConfig === 'string') {
      return { backgroundColor: colorConfig };
    }
    
    if (colorConfig.type === 'gradient') {
      return {
        background: `linear-gradient(${colorConfig.gradientDirection || 'to-r'}, ${colorConfig.gradientFrom || '#8b5cf6'}, ${colorConfig.gradientTo || '#8b5cf6'})`,
        border: 'none'
      };
    }
    
    return { backgroundColor: colorConfig.color || '#8b5cf6' };
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with style */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Add background patterns or effects based on backgroundStyle */}
        {content?.backgroundStyle === 'gradient-blue' && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        )}
        {content?.backgroundStyle === 'gradient-purple' && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50" />
        )}
        {content?.backgroundStyle === 'gradient-green' && (
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-blue-900/50" />
        )}
        {content?.backgroundStyle === 'gradient-orange' && (
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-red-900/50" />
        )}
        {content?.backgroundStyle === 'gradient-pink' && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 to-purple-900/50" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        {content?.badge && (
          <div className="mb-6">
            <Badge 
              className="text-white border-0 px-4 py-2"
              style={getBadgeStyle(content.colors?.badge)}
            >
              {content.badge}
            </Badge>
          </div>
        )}

        {/* Main Headline */}
        {content?.headline && (
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={getTextStyle(content.colors?.headline, currentColors.headlineColor)}
          >
            {content.headline}
          </h1>
        )}

        {/* Subheadline */}
        {content?.subheadline && (
          <p 
            className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed"
            style={getTextStyle(content.colors?.subheadline, currentColors.subheadlineColor)}
          >
            {content.subheadline}
          </p>
        )}

        {/* Description */}
        {content?.description && (
          <p 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90"
            style={getTextStyle(content.colors?.description, '#d1d5db')}
          >
            {content.description}
          </p>
        )}

        {/* Buttons */}
        {content?.buttons && content.buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {content.buttons
              .filter((button: any) => button.visible !== false)
              .map((button: any, index: number) => (
                <Button
                  key={index}
                  size="lg"
                  className="text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={getButtonStyle(button)}
                >
                  {button.text}
                </Button>
              ))}
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/70 rounded-full animate-pulse" />
    </section>
  );
};
