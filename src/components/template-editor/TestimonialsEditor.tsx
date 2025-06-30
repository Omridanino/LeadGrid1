import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { TemplateData } from '@/types/template';
import { BackgroundSelector } from './BackgroundSelector';
import { ColorPicker } from './ColorPicker';

interface TestimonialsEditorProps {
  template: TemplateData;
  onUpdate: (updates: any) => void;
  onStyleUpdate: (styleUpdates: any) => void;
}

export const TestimonialsEditor = ({ template, onUpdate, onStyleUpdate }: TestimonialsEditorProps) => {
  const updateTestimonials = (newTestimonials: any[]) => {
    onUpdate({ testimonials: newTestimonials });
  };

  return (
    <div className="space-y-6">
      {/* Content Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">תוכן</h3>
        
        <div>
          <Label className="text-white text-sm font-medium">תג</Label>
          <Input
            value={template.testimonials.badge || ''}
            onChange={(e) => onUpdate({ badge: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="תג..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">כותרת</Label>
          <Input
            value={template.testimonials.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white text-right"
            placeholder="כותרת עדויות..."
          />
        </div>
        
        <div>
          <Label className="text-white text-sm font-medium">עדויות</Label>
          <div className="space-y-3">
            {template.testimonials.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      value={testimonial.name}
                      onChange={(e) => {
                        const newTestimonials = [...template.testimonials.testimonials];
                        newTestimonials[index] = { ...testimonial, name: e.target.value };
                        updateTestimonials(newTestimonials);
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                      placeholder="שם הלקוח"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const newTestimonials = template.testimonials.testimonials.filter((_, i) => i !== index);
                        updateTestimonials(newTestimonials);
                      }}
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    value={testimonial.role}
                    onChange={(e) => {
                      const newTestimonials = [...template.testimonials.testimonials];
                      newTestimonials[index] = { ...testimonial, role: e.target.value };
                      updateTestimonials(newTestimonials);
                    }}
                    className="bg-gray-700 border-gray-600 text-white text-right"
                    placeholder="תפקיד"
                  />
                  <Textarea
                    value={testimonial.content}
                    onChange={(e) => {
                      const newTestimonials = [...template.testimonials.testimonials];
                      newTestimonials[index] = { ...testimonial, content: e.target.value };
                      updateTestimonials(newTestimonials);
                    }}
                    className="bg-gray-700 border-gray-600 text-white text-right"
                    rows={3}
                    placeholder="תוכן העדות"
                  />
                  <Input
                    type="number"
                    min="1"
                    max="5"
                    value={testimonial.rating}
                    onChange={(e) => {
                      const newTestimonials = [...template.testimonials.testimonials];
                      newTestimonials[index] = { ...testimonial, rating: parseInt(e.target.value) || 5 };
                      updateTestimonials(newTestimonials);
                    }}
                    className="bg-gray-700 border-gray-600 text-white w-20"
                    placeholder="דירוג"
                  />
                </CardContent>
              </Card>
            ))}
            <Button
              onClick={() => {
                const newTestimonials = [...template.testimonials.testimonials, {
                  name: 'לקוח חדש',
                  role: 'תפקיד',
                  content: 'עדות מעולה על השירות',
                  rating: 5,
                  image: ''
                }];
                updateTestimonials(newTestimonials);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 ml-1" />
              הוסף עדות
            </Button>
          </div>
        </div>
      </div>

      {/* Colors and Background Section */}
      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold border-b border-gray-700 pb-2">עיצוב רקע</h3>
        
        <BackgroundSelector
          label="רקע הסקשן"
          colorValue={template.styles.testimonialsBackground}
          imageValue={template.styles.testimonialsBackgroundImage}
          onColorChange={(value) => onStyleUpdate({ testimonialsBackground: value })}
          onImageChange={(value) => onStyleUpdate({ testimonialsBackgroundImage: value })}
        />
        
        <ColorPicker
          label="צבע כותרת"
          value={template.styles.textColor}
          onChange={(value) => onStyleUpdate({ textColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור ראשי"
          value={template.styles.primaryColor}
          onChange={(value) => onStyleUpdate({ primaryColor: value })}
        />
        
        <ColorPicker
          label="צבע כפתור משני"
          value={template.styles.secondaryColor}
          onChange={(value) => onStyleUpdate({ secondaryColor: value })}
        />
      </div>
    </div>
  );
};
