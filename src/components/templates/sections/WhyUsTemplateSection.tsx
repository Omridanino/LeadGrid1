
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Award, Shield, Zap, Heart } from "lucide-react";

interface WhyUsItem {
  title: string;
  description: string;
  icon: string;
}

interface WhyUsTemplateSectionProps {
  title: string;
  items: WhyUsItem[];
  button1Text: string;
  button2Text: string;
  className?: string;
}

const iconMap = {
  check: CheckCircle,
  star: Star,
  award: Award,
  shield: Shield,
  zap: Zap,
  heart: Heart
};

export const WhyUsTemplateSection = ({
  title,
  items,
  button1Text,
  button2Text,
  className = ""
}: WhyUsTemplateSectionProps) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || CheckCircle;
            
            return (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
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
