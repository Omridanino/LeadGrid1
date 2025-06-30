
import { Button } from "@/components/ui/button";

interface EmotionalTemplateSectionProps {
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  className?: string;
  designStyle?: string;
  templateId?: number;
}

export const EmotionalTemplateSection = ({
  title,
  description,
  button1Text,
  button2Text,
  className = "",
  designStyle = "basic",
  templateId = 1
}: EmotionalTemplateSectionProps) => {
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
    <section className={`template-section py-20 px-8 relative overflow-hidden ${className}`}>
      {renderDesignElements()}
      
      <div className="container mx-auto text-center max-w-4xl template-content">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          {title}
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
          {description}
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
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
    </section>
  );
};
