
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
}

interface ProcessTemplateSectionProps {
  title?: string;
  steps: ProcessStep[];
  button1Text: string;
  button2Text: string;
  className?: string;
}

export const ProcessTemplateSection = ({
  title,
  steps,
  button1Text,
  button2Text,
  className = ""
}: ProcessTemplateSectionProps) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              {title}
            </h2>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
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
