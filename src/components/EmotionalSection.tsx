
import { ColorScheme } from "@/types/colors";
import { cn } from "@/lib/utils";
import { EmotionalButtons } from "./emotional/EmotionalButtons";
import { EmotionalBackground } from "./emotional/EmotionalBackground";
import { EmotionalContent } from "./emotional/EmotionalContent";

interface EmotionalSectionProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  selectedHeroDesign?: string;
  heroBackgroundStyle?: any;
}

export const EmotionalSection = ({ 
  content, 
  currentColors, 
  formData, 
  selectedHeroDesign, 
  heroBackgroundStyle 
}: EmotionalSectionProps) => {
  const emotionalContent = content?.emotionalSection || {};
  
  const title = emotionalContent.title || 'הגיע הזמן לפעול';
  const subtitle = emotionalContent.subtitle || 'אל תחמיץ את ההזדמנות הזו';
  const text = emotionalContent.text || 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה';
  const badge = emotionalContent.badge || 'מוגבל בזמן';
  const backgroundColor = emotionalContent.backgroundColor || '#1e1e2e';
  const buttons = emotionalContent.buttons || [{ id: '1', text: 'התחל עכשיו', style: 'primary', visible: true }];
  const useHeroDesign = emotionalContent.useHeroDesign || false;

  const getTextStyle = (colorKey: string) => {
    if (!useHeroDesign) {
      const colorValue = emotionalContent?.colors?.[colorKey];
      if (colorValue) {
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
    }
    return {};
  };

  const getBadgeStyle = () => {
    if (!useHeroDesign) {
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
    }
    return {};
  };

  const getHeroDesignClasses = () => {
    if (!useHeroDesign) return '';
    
    switch (selectedHeroDesign) {
      case 'hero-futuristic':
      case 'hero-neon-cyber':
      case 'hero-holographic':
      case 'hero-liquid-metal':
        return 'relative overflow-hidden';
      case 'hero-glass-refraction':
        return 'relative overflow-hidden backdrop-blur-sm';
      default:
        return 'relative overflow-hidden';
    }
  };

  const backgroundConfig = EmotionalBackground({ 
    useHeroDesign, 
    selectedHeroDesign, 
    heroBackgroundStyle, 
    backgroundColor 
  });

  return (
    <section 
      className={cn("py-20 px-8", getHeroDesignClasses())}
      style={backgroundConfig.backgroundStyle}
    >
      {backgroundConfig.effects}
      
      <EmotionalContent
        title={title}
        subtitle={subtitle}
        text={text}
        badge={badge}
        useHeroDesign={useHeroDesign}
        emotionalContent={emotionalContent}
        getTextStyle={getTextStyle}
        getBadgeStyle={getBadgeStyle}
      >
        <EmotionalButtons 
          buttons={buttons}
          currentColors={currentColors}
          content={content}
        />
      </EmotionalContent>
    </section>
  );
};
