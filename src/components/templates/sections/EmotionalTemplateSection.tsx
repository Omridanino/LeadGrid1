
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
          <Badge className="mb-6 text-sm px-4 py-2">
            {badge}
          </Badge>
        )}
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          {title}
        </h2>
        
        <p className="text-xl mb-12 leading-relaxed">
          {description}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="px-8 py-4">
            {button1Text}
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4">
            {button2Text}
          </Button>
        </div>
      </div>
    </section>
  );
};
