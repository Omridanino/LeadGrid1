
import { Button } from "@/components/ui/button";

interface HeroTemplateSectionProps {
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  image?: string;
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
  image,
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
    <section className={`template-section py-20 px-8 min-h-screen flex items-center relative overflow-hidden ${className}`}>
      {renderDesignElements()}
      
      <div className="container mx-auto max-w-7xl template-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {title}
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90">
              {subtitle}
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
              {description}
            </p>
            
            <div className="flex gap-6 pt-4 flex-wrap">
              <Button size="lg" className={`px-8 py-4 text-lg font-semibold ${getButtonClass()}`}>
                {button1Text}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold border-2 bg-transparent backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {button2Text}
              </Button>
            </div>
          </div>
          
          {image && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={image} 
                  alt="Hero"
                  className="max-w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ maxHeight: '500px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 rounded-2xl"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
