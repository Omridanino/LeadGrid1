
import { Button } from "@/components/ui/button";
import { ColorScheme } from "@/components/ColorEditor";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

interface HeroSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const HeroSection = ({ content, currentColors, formData, heroImage }: HeroSectionProps) => {
  const getBusinessImage = (businessType: string) => {
    const businessImages = {
      'עורך דין': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop',
      'רופא': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop',
      'מעצב גרפי': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop',
      'יועץ עסקי': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      'מורה פרטי': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
      'מאמן כושר': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
      'צלם': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&h=1080&fit=crop',
      'נהג': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop',
      'מספר': 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1920&h=1080&fit=crop',
      'default': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop'
    };

    return businessImages[businessType as keyof typeof businessImages] || businessImages.default;
  };

  const getHeroStyle = (currentGradient: number, currentAnimation: number) => {
    const gradientBackgrounds = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
    ];

    const animatedBackgrounds = [
      'radial-gradient(circle at 20% 80%, #120078 0%, #9d0208 50%, #f48c06 100%)',
      'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      'conic-gradient(from 0deg at 50% 50%, #ff006e, #fb5607, #ffbe0b, #8338ec)',
      'radial-gradient(circle at 50% 50%, #667eea 0%, #764ba2 50%, #f2994a 100%)',
      'linear-gradient(45deg, #fa709a, #fee140, #43e97b, #38f9d7)',
      'linear-gradient(270deg, #8b5cf6, #06b6d4, #10b981, #f59e0b)',
      'radial-gradient(ellipse at top, #e11d48, #7c3aed, #2563eb)',
      'conic-gradient(from 90deg, #ef4444, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ef4444)'
    ];

    if (formData.heroStyle === 'image') {
      const imageUrl = heroImage || getBusinessImage(formData.businessType);
      return {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    } else if (formData.heroStyle === 'animated') {
      return {
        background: animatedBackgrounds[currentAnimation],
        backgroundSize: '400% 400%',
        animation: 'gradient 8s ease infinite'
      };
    } else {
      return {
        background: gradientBackgrounds[currentGradient],
        transition: 'background 2s ease-in-out'
      };
    }
  };

  const renderCTAButton = () => {
    const buttonText = content?.cta || 'בואו נתחיל לעבוד יחד';
    
    if (formData.heroStyle === 'glass') {
      return (
        <LiquidButton 
          size="xxl" 
          className="text-lg px-8 py-4 rounded-2xl floating-animation"
          style={{ 
            backgroundColor: currentColors.primary,
            color: 'white'
          }}
        >
          {buttonText}
        </LiquidButton>
      );
    } else if (formData.heroStyle === 'metal') {
      return (
        <MetalButton 
          variant="primary"
          className="text-lg px-8 py-4 floating-animation"
        >
          {buttonText}
        </MetalButton>
      );
    }

    return (
      <Button 
        size="lg" 
        className="text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 floating-animation tech-glow"
        style={{ 
          backgroundColor: currentColors.primary,
          color: 'white'
        }}
      >
        {buttonText}
      </Button>
    );
  };

  if (formData.heroStyle === 'geometric') {
    return (
      <HeroGeometric
        badge={formData.businessType}
        title1={content?.headline || formData.businessName}
        title2={content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
      />
    );
  }

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden matrix-bg"
      style={getHeroStyle(0, 0)}
    >
      <div className="container mx-auto text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tech-title">
          {content?.headline || formData.businessName}
        </h1>
        <p 
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed tech-glow"
          style={{ color: currentColors.subheadlineColor }}
        >
          {content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
        </p>
        {renderCTAButton()}
      </div>
    </section>
  );
};
