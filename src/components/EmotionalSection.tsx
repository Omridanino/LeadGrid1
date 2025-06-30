
import { ColorScheme } from "@/types/colors";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";

interface EmotionalSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
}

export const EmotionalSection = ({ content, currentColors, formData }: EmotionalSectionProps) => {
  // Helper function to render advanced buttons with proper functionality
  const renderAdvancedButton = (button: any, index: number) => {
    const buttonStyle = button?.style || 'default';
    const buttonText = button?.text || content?.cta || 'לחץ כאן';
    
    switch (buttonStyle) {
      case 'liquid-glass':
      case 'זכוכית נוזלית':
        return (
          <LiquidButton key={index} size="xxl" className="text-white">
            {buttonText}
          </LiquidButton>
        );
      case 'metal-gold':
      case 'מתכת זהב':
        return (
          <MetalButton key={index} variant="gold" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-silver':
      case 'מתכת כסף':
        return (
          <MetalButton key={index} variant="default" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-bronze':
      case 'מתכת ברונזה':
        return (
          <MetalButton key={index} variant="bronze" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-primary':
      case 'מתכת ראשי':
        return (
          <MetalButton key={index} variant="primary" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-success':
      case 'מתכת ירוק':
        return (
          <MetalButton key={index} variant="success" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      case 'metal-error':
      case 'מתכת אדום':
        return (
          <MetalButton key={index} variant="error" className="px-8 py-4">
            {buttonText}
          </MetalButton>
        );
      default:
        return (
          <button 
            key={index}
            className="px-8 py-4 rounded-xl font-semibold text-lg transition hover:scale-105"
            style={{ backgroundColor: currentColors.primary, color: '#ffffff' }}
          >
            {buttonText}
          </button>
        );
    }
  };

  const emotionalContent = content?.emotionalSection || {};
  const title = emotionalContent.title || 'הגיע הזמן לפעול';
  const subtitle = emotionalContent.subtitle || 'אל תחמיץ את ההזדמנות הזו';
  const text = emotionalContent.text || 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה';
  const badge = emotionalContent.badge || 'מוגבל בזמן';
  const backgroundColor = emotionalContent.backgroundColor || '#1e1e2e';
  const buttons = emotionalContent.buttons || [{ id: '1', text: 'התחל עכשיו', style: 'primary', visible: true }];

  // Helper function to get inline style for text colors with gradient support
  const getTextStyle = (colorKey: string) => {
    const colorValue = emotionalContent?.colors?.[colorKey];
    if (colorValue) {
      // Check if it's a gradient
      if (colorValue.includes('gradient')) {
        return { 
          background: colorValue,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        };
      }
      return { color: colorValue };
    }
    return {};
  };

  // Helper function to get inline style for badge colors with gradient support
  const getBadgeStyle = () => {
    const badgeColor = emotionalContent?.colors?.badge;
    if (badgeColor) {
      if (badgeColor.includes('gradient')) {
        return { 
          background: badgeColor,
          color: '#ffffff',
          border: 'none'
        };
      }
      return { 
        backgroundColor: badgeColor,
        color: '#ffffff',
        border: 'none'
      };
    }
    return {};
  };

  // Fix background color handling to support all color types
  const getBackgroundStyle = () => {
    if (backgroundColor === 'default') {
      return { backgroundColor: '#1e1e2e' };
    }
    
    // Check if it's a gradient
    if (backgroundColor && backgroundColor.includes('gradient')) {
      return { background: backgroundColor };
    }
    
    // Handle solid colors including hex values
    return { backgroundColor: backgroundColor };
  };

  return (
    <section 
      className="py-20 px-8 relative"
      style={getBackgroundStyle()}
    >
      <div className="container mx-auto max-w-4xl text-center">
        {badge && (
          <div 
            className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold"
            style={getBadgeStyle() || { background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', color: '#ffffff' }}
          >
            {badge}
          </div>
        )}
        
        <h2 
          className="text-4xl md:text-6xl font-bold mb-6"
          style={getTextStyle('title') || { color: '#ffffff' }}
        >
          {title}
        </h2>
        
        {subtitle && (
          <h3 
            className="text-2xl md:text-3xl mb-8"
            style={getTextStyle('subtitle') || { color: '#d1d5db' }}
          >
            {subtitle}
          </h3>
        )}
        
        <p 
          className="text-xl md:text-2xl leading-relaxed mb-12"
          style={getTextStyle('text') || { color: '#d1d5db' }}
        >
          {text}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          {buttons?.filter((btn: any) => btn.visible !== false).map((button: any, index: number) => 
            renderAdvancedButton(button, index)
          )}
        </div>
      </div>
    </section>
  );
};
