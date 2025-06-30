
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EmotionalTemplateSectionProps {
  badge?: string;
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  className?: string;
}

export const EmotionalTemplateSection = ({
  badge,
  title,
  description,
  button1Text,
  button2Text,
  className = ""
}: EmotionalTemplateSectionProps) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="container mx-auto text-center max-w-4xl">
        {badge && (
          <Badge className="mb-6 text-sm px-6 py-3 font-semibold tracking-wide glass-card">
            {badge}
          </Badge>
        )}
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight fade-in-up">
          {title}
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto fade-in-up">
          {description}
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap fade-in-up">
          <Button size="lg" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
            {button1Text}
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
            {button2Text}
          </Button>
        </div>
      </div>
    </section>
  );
};
