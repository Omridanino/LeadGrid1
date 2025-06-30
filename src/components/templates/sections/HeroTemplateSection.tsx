
import { Button } from "@/components/ui/button";

interface HeroTemplateSectionProps {
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  className?: string;
  designStyle?: string;
  templateId?: number;
}

export const HeroTemplateSection = ({
  title,
  subtitle,
  description,
  button1Text,
  button2Text,
  className = "",
  designStyle = "basic",
  templateId = 1
}: HeroTemplateSectionProps) => {
  const getButtonClass = () => {
    return `btn-style-${templateId}`;
  };

  const renderDesignElements = () => {
    switch (designStyle) {
      case '3d':
        return (
          <>
            <div className="floating-3d-elements"></div>
            <div className="holographic-grid"></div>
          </>
        );
      case 'glass':
        return (
          <>
            <div className="glass-morphism-bg"></div>
            <div className="glass-orbs"></div>
          </>
        );
      case 'cosmic':
        return (
          <>
            <div className="cosmic-geometry"></div>
            <div className="space-particles"></div>
          </>
        );
      case 'creative':
        return (
          <>
            <div className="artistic-splashes"></div>
            <div className="creative-brushes"></div>
          </>
        );
      default:
        return <div className="basic-floating-elements"></div>;
    }
  };

  return (
    <section className={`template-section py-32 px-8 min-h-screen flex items-center relative overflow-hidden ${className}`}>
      {renderDesignElements()}
      
      <div className="container mx-auto max-w-6xl template-content">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium opacity-90">
            {subtitle}
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed opacity-80 max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex gap-6 pt-8 justify-center flex-wrap">
            <Button size="lg" className={`px-10 py-5 text-xl font-semibold ${getButtonClass()}`}>
              {button1Text}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-5 text-xl font-semibold border-2 bg-transparent backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              {button2Text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
