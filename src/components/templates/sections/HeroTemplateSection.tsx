
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
  const getButtonStyle = () => {
    // Different button styles based on template ID
    const buttonStyles = [
      // Basic styles
      'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-slate-800 to-gray-900 hover:from-slate-900 hover:to-black text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      // 3D styles
      'btn-3d-crystal bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-neon bg-gradient-to-r from-green-400 to-cyan-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-hologram bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-quantum bg-gradient-to-r from-indigo-400 to-blue-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-plasma bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-cosmic bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-matrix bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-cyber bg-gradient-to-r from-cyan-400 to-teal-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-future bg-gradient-to-r from-violet-400 to-purple-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-dimension bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-portal bg-gradient-to-r from-red-400 to-pink-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-infinity bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      'btn-3d-galaxy bg-gradient-to-r from-purple-400 to-violet-500 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500',
      // Glass styles
      'btn-glass-frost backdrop-blur-xl bg-white/20 border border-white/30 text-white hover:bg-white/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-crystal backdrop-blur-xl bg-blue-500/20 border border-blue-300/30 text-white hover:bg-blue-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-aurora backdrop-blur-xl bg-purple-500/20 border border-purple-300/30 text-white hover:bg-purple-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-ocean backdrop-blur-xl bg-cyan-500/20 border border-cyan-300/30 text-white hover:bg-cyan-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-emerald backdrop-blur-xl bg-emerald-500/20 border border-emerald-300/30 text-white hover:bg-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-rose backdrop-blur-xl bg-rose-500/20 border border-rose-300/30 text-white hover:bg-rose-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-amber backdrop-blur-xl bg-amber-500/20 border border-amber-300/30 text-white hover:bg-amber-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-violet backdrop-blur-xl bg-violet-500/20 border border-violet-300/30 text-white hover:bg-violet-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-teal backdrop-blur-xl bg-teal-500/20 border border-teal-300/30 text-white hover:bg-teal-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-indigo backdrop-blur-xl bg-indigo-500/20 border border-indigo-300/30 text-white hover:bg-indigo-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-pink backdrop-blur-xl bg-pink-500/20 border border-pink-300/30 text-white hover:bg-pink-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-lime backdrop-blur-xl bg-lime-500/20 border border-lime-300/30 text-white hover:bg-lime-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      'btn-glass-sky backdrop-blur-xl bg-sky-500/20 border border-sky-300/30 text-white hover:bg-sky-500/30 shadow-xl hover:shadow-2xl transition-all duration-400',
      // Geometric styles
      'btn-geometric-hex clip-polygon-hex bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-diamond clip-polygon-diamond bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-arrow clip-polygon-arrow bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-triangle clip-polygon-triangle bg-gradient-to-r from-orange-600 to-yellow-600 text-white hover:from-orange-700 hover:to-yellow-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-star clip-polygon-star bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-octagon clip-polygon-octagon bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-parallelogram clip-polygon-parallelogram bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:from-cyan-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-pentagon clip-polygon-pentagon bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-chevron clip-polygon-chevron bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-kite clip-polygon-kite bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-trapezoid clip-polygon-trapezoid bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-rhombus clip-polygon-rhombus bg-gradient-to-r from-lime-600 to-green-600 text-white hover:from-lime-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300',
      'btn-geometric-cross clip-polygon-cross bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300',
      // Creative styles
      'btn-creative-paint bg-gradient-to-r from-pink-500 to-purple-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-brush-effect',
      'btn-creative-splash bg-gradient-to-r from-blue-500 to-cyan-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-splash-effect',
      'btn-creative-watercolor bg-gradient-to-r from-green-500 to-teal-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-watercolor-effect',
      'btn-creative-graffiti bg-gradient-to-r from-red-500 to-orange-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-graffiti-effect',
      'btn-creative-sketch bg-gradient-to-r from-indigo-500 to-purple-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-sketch-effect',
      'btn-creative-marble bg-gradient-to-r from-gray-700 to-gray-900 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-marble-effect',
      'btn-creative-oil bg-gradient-to-r from-amber-500 to-orange-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-oil-effect',
      'btn-creative-pastel bg-gradient-to-r from-rose-400 to-pink-500 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-pastel-effect',
      'btn-creative-neon bg-gradient-to-r from-purple-500 to-pink-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-neon-effect',
      'btn-creative-vintage bg-gradient-to-r from-yellow-600 to-orange-700 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-vintage-effect',
      'btn-creative-abstract bg-gradient-to-r from-cyan-500 to-blue-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-abstract-effect',
      'btn-creative-pop bg-gradient-to-r from-pink-500 to-red-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-pop-effect',
      'btn-creative-digital bg-gradient-to-r from-violet-500 to-purple-600 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 creative-digital-effect'
    ];
    
    return buttonStyles[(templateId - 1) % buttonStyles.length];
  };

  const getOutlineButtonStyle = () => {
    const outlineStyles = [
      // Basic outlines
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
      'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
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
            <div className="quantum-particles"></div>
          </>
        );
      case 'glass':
        return (
          <>
            <div className="glass-morphism-bg"></div>
            <div className="glass-orbs"></div>
            <div className="frosted-layers"></div>
          </>
        );
      case 'geometric':
        return (
          <>
            <div className="cosmic-geometry"></div>
            <div className="space-nebula"></div>
            <div className="stellar-particles"></div>
          </>
        );
      case 'creative':
        return (
          <>
            <div className="artistic-splashes"></div>
            <div className="creative-brushes"></div>
            <div className="paint-drops"></div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center p-8 relative overflow-hidden ${className}`}>
      <div className="container mx-auto relative z-10">
        {image ? (
          // Layout with image
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                {title}
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 font-medium text-white/90">
                {subtitle}
              </h2>
              
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-80 text-white/80">
                {description}
              </p>
              
              <div className="flex gap-6 justify-center lg:justify-start flex-wrap">
                <Button size="lg" className={`px-8 py-4 text-lg font-semibold ${getButtonStyle()}`}>
                  {button1Text}
                </Button>
                <Button variant="outline" size="lg" className={`px-8 py-4 text-lg font-semibold bg-transparent ${getOutlineButtonStyle()}`}>
                  {button2Text}
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  style={{ aspectRatio: '4/3' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        ) : (
          // Original centered layout without image
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              {title}
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 font-medium text-white/90">
              {subtitle}
            </h2>
            
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-80 text-white/80">
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
        )}
      </div>
      {renderDesignElements()}
    </section>
  );
};
