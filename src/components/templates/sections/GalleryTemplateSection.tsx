
import { Button } from "@/components/ui/button";

interface GalleryTemplateSectionProps {
  title: string;
  images: string[];
  button1Text: string;
  button2Text: string;
  className?: string;
}

export const GalleryTemplateSection = ({
  title,
  images,
  button1Text,
  button2Text,
  className = ""
}: GalleryTemplateSectionProps) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
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
