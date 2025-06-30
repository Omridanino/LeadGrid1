
import { cn } from "@/lib/utils";

interface EmotionalContentProps {
  title: string;
  subtitle?: string;
  text: string;
  badge?: string;
  useHeroDesign: boolean;
  emotionalContent: any;
  getTextStyle: (colorKey: string) => any;
  getBadgeStyle: () => any;
  children: React.ReactNode;
}

export const EmotionalContent = ({
  title,
  subtitle,
  text,
  badge,
  useHeroDesign,
  emotionalContent,
  getTextStyle,
  getBadgeStyle,
  children
}: EmotionalContentProps) => {
  return (
    <div className="container mx-auto max-w-4xl text-center relative z-10">
      {badge && (
        <div 
          className={cn(
            "inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold",
            useHeroDesign && "backdrop-blur-sm border border-white/20"
          )}
          style={getBadgeStyle() || (useHeroDesign ? 
            { background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' } :
            { background: 'linear-gradient(45deg, #8b5cf6, #ec4899)', color: '#ffffff' }
          )}
        >
          {badge}
        </div>
      )}
      
      <h2 
        className={cn(
          "text-4xl md:text-6xl font-bold mb-6",
          useHeroDesign && "bg-gradient-to-b from-white via-white/90 to-gray-300 bg-clip-text text-transparent"
        )}
        style={useHeroDesign ? {} : (getTextStyle('title') || { color: '#ffffff' })}
      >
        {title}
      </h2>
      
      {subtitle && (
        <h3 
          className={cn(
            "text-2xl md:text-3xl mb-8",
            useHeroDesign && "text-gray-300"
          )}
          style={useHeroDesign ? {} : (getTextStyle('subtitle') || { color: '#d1d5db' })}
        >
          {subtitle}
        </h3>
      )}
      
      <p 
        className={cn(
          "text-xl md:text-2xl leading-relaxed mb-12",
          useHeroDesign && "text-gray-300"
        )}
        style={useHeroDesign ? {} : (getTextStyle('text') || { color: '#d1d5db' })}
      >
        {text}
      </p>
      
      {children}
    </div>
  );
};
