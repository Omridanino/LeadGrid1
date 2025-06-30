
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface TestimonialsTemplateSectionProps {
  badge?: string;
  title: string;
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    rating: number;
  }>;
  button1Text: string;
  button2Text: string;
  className?: string;
}

export const TestimonialsTemplateSection = ({
  badge,
  title,
  testimonials,
  button1Text,
  button2Text,
  className = ""
}: TestimonialsTemplateSectionProps) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          {badge && (
            <Badge className="mb-6 text-sm px-4 py-2">
              {badge}
            </Badge>
          )}
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            {title}
          </h2>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto mb-12">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mb-4 text-sm leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
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
