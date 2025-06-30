
import { ColorScheme } from "@/types/colors";
import { cn } from "@/lib/utils";
import { EmotionalButtons } from "@/components/emotional/EmotionalButtons";

// Hero Design Components
import { HeroFuturistic } from "@/components/ui/hero-futuristic";
import { HeroNeonCyber } from "@/components/ui/hero-neon-cyber";
import { HeroHolographic } from "@/components/ui/hero-holographic";
import { HeroLiquidMetal } from "@/components/ui/hero-liquid-metal";
import { HeroGlassRefraction } from "@/components/ui/hero-glass-refraction";
import { HeroMinimalTech } from "@/components/ui/hero-minimal-tech";
import { GradientHero } from "@/components/ui/gradient-hero";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const selectedDesign = formData?.designStyle || 'hero-gradient';
  const heroContent = content?.heroSection || {};
  const emotionalContent = content?.emotionalSection || {};
  
  // Hero content
  const heroTitle = heroContent.title || formData?.businessName || 'ברוכים הבאים';
  const heroSubtitle = heroContent.subtitle || 'הפתרון המושלם עבורכם';
  const heroDescription = heroContent.description || 'טקסט תיאור כאן';
  const heroCta = heroContent.cta || 'התחל עכשיו';
  
  // Emotional section content
  const emotionalTitle = emotionalContent.title || 'הגיע הזמן לפעול';
  const emotionalSubtitle = emotionalContent.subtitle || 'אל תחמיץ את ההזדמנות הזו';
  const emotionalText = emotionalContent.text || 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה';
  const emotionalBadge = emotionalContent.badge || 'מוגבל בזמן';
  const emotionalButtons = emotionalContent.buttons || [{ id: '1', text: 'התחל עכשיו', style: 'primary', visible: true }];

  const renderHeroContent = () => (
    <div className="container mx-auto px-6 relative z-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-b from-white via-white/90 to-gray-300 bg-clip-text text-transparent">
            {heroTitle}
          </h1>
          
          {heroSubtitle && (
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
              {heroSubtitle}
            </h2>
          )}
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
            {heroDescription}
          </p>
          
          <div className="flex justify-center">
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl"
            >
              {heroCta}
            </button>
          </div>
        </div>
        
        {/* Emotional Section - Integrated */}
        <div className="border-t border-white/10 pt-16 space-y-8">
          {emotionalBadge && (
            <div className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20 bg-white/10 text-white">
              {emotionalBadge}
            </div>
          )}
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white via-white/90 to-gray-300 bg-clip-text text-transparent">
            {emotionalTitle}
          </h2>
          
          {emotionalSubtitle && (
            <h3 className="text-2xl md:text-3xl mb-8 text-gray-300">
              {emotionalSubtitle}
            </h3>
          )}
          
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-gray-300">
            {emotionalText}
          </p>
          
          <EmotionalButtons 
            buttons={emotionalButtons}
            currentColors={currentColors}
            content={content}
          />
        </div>
      </div>
    </div>
  );

  // Render based on selected design
  switch (selectedDesign) {
    case 'hero-futuristic':
      return <HeroFuturistic content={renderHeroContent()} />;
    case 'hero-neon-cyber':
      return <HeroNeonCyber content={renderHeroContent()} />;
    case 'hero-holographic':
      return <HeroHolographic content={renderHeroContent()} />;
    case 'hero-liquid-metal':
      return <HeroLiquidMetal content={renderHeroContent()} />;
    case 'hero-glass-refraction':
      return <HeroGlassRefraction content={renderHeroContent()} />;
    case 'hero-minimal-tech':
      return <HeroMinimalTech content={renderHeroContent()} />;
    default:
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-20">
          {renderHeroContent()}
        </div>
      );
  }
};
