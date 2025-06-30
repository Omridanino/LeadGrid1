
import { Button } from "@/components/ui/button";

interface AboutTemplateSectionProps {
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  className?: string;
}

export const AboutTemplateSection = ({
  title,
  description,
  button1Text,
  button2Text,
  className = ""
}: AboutTemplateSectionProps) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="container mx-auto max-w-4xl text-center">
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
