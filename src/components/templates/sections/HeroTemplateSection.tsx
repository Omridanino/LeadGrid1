
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroTemplateSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  className?: string;
  designStyle?: string;
}

export const HeroTemplateSection = ({
  badge,
  title,
  subtitle,
  description,
  button1Text,
  button2Text,
  className = "",
  designStyle = "basic"
}: HeroTemplateSectionProps) => {
  const getDesignClasses = () => {
    switch (designStyle) {
      case '3d':
        return 'effect-3d-float';
      case 'glass':
        return 'spectacular-glass';
      case 'geometric':
        return 'cosmic-space';
      case 'creative':
        return 'artistic-paint';
      default:
        return 'fade-in-up';
    }
  };

  const getButtonClasses = () => {
    switch (designStyle) {
      case '3d':
        return 'btn-3d';
      case 'glass':
        return 'btn-glass';
      case 'geometric':
        return 'btn-cosmic';
      case 'creative':
        return 'btn-artistic';
      default:
        return 'hover:scale-105 transition-transform duration-300';
    }
  };

  const renderDesignElements = () => {
    switch (designStyle) {
      case '3d':
        return (
          <>
            <div className="floating-cubes"></div>
          </>
        );
      case 'glass':
        return (
          <div className="glass-bubbles">
            <div className="glass-bubble"></div>
            <div className="glass-bubble"></div>
            <div className="glass-bubble"></div>
          </div>
        );
      case 'geometric':
        return (
          <>
            <div className="cosmic-planet"></div>
            <div className="cosmic-rings"></div>
          </>
        );
      case 'creative':
        return (
          <>
            <div className="paint-splash"></div>
            <div className="paint-splash"></div>
            <div className="paint-splash"></div>
            <div className="brush-stroke"></div>
            <div className="creative-particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center p-8 relative ${className}`}>
      <div className={`container mx-auto text-center max-w-4xl relative z-10 ${getDesignClasses()}`}>
        {badge && (
          <Badge className="mb-6 text-sm px-6 py-3 font-semibold tracking-wide backdrop-blur-sm">
            {badge}
          </Badge>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative z-20">
          {title}
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 font-medium relative z-20">
          {subtitle}
        </h2>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-80 relative z-20">
          {description}
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap relative z-20">
          <Button size="lg" className={`px-8 py-4 text-lg font-semibold ${getButtonClasses()}`}>
            {button1Text}
          </Button>
          <Button variant="outline" size="lg" className={`px-8 py-4 text-lg font-semibold ${getButtonClasses()}`}>
            {button2Text}
          </Button>
        </div>
      </div>
      {renderDesignElements()}
    </section>
  );
};
