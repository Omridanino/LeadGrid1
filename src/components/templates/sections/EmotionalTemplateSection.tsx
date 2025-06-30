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
  const getButtonStyle = () => {
    const buttonStyles = [
      'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
    ];
    return buttonStyles[(templateId - 1) % buttonStyles.length];
  };

  const getOutlineButtonStyle = () => {
    const outlineStyles = [
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
    ];
    return outlineStyles[(templateId - 1) % outlineStyles.length];
  };

  const renderDesignElements = () => {
    switch (designStyle) {
      case '3d':
        return (
          <>
            <div className="floating-elements-3d"></div>
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
      case 'geometric':
        return (
          <>
            <div className="cosmic-geometry"></div>
            <div className="space-nebula"></div>
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
        return null;
    }
  };

  return (
    <section className={`py-20 px-8 relative overflow-hidden ${className}`}>
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
          {title}
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto text-white/90">
          {description}
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <Button size="lg" className={`px-8 py-4 text-lg font-semibold ${getButtonStyle()}`}>
            {button1Text}
          </Button>
          <Button variant="outline" size="lg" className={`px-8 py-4 text-lg font-semibold bg-transparent ${getOutlineButtonStyle()}`}>
            {button2Text}
          </Button>
        </div>
      </div>
      {renderDesignElements()}
    </section>
  );
};
