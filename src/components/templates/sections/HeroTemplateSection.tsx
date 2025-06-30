
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroTemplateSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  className?: string;
  designStyle?: string;
}

export const HeroTemplateSection = ({
  badge,
  title,
  subtitle,
  description,
  button1Text,
  button2Text,
  className = "",
  designStyle = "basic"
}: HeroTemplateSectionProps) => {
  return (
    <section className={`min-h-screen flex items-center justify-center p-8 ${className}`}>
      <div className="container mx-auto text-center max-w-4xl">
        {badge && (
          <Badge className="mb-6 text-sm px-4 py-2">
            {badge}
          </Badge>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-8 opacity-80">
          {subtitle}
        </h2>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="px-8 py-4 text-lg">
            {button1Text}
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            {button2Text}
          </Button>
        </div>
      </div>
    </section>
  );
};
