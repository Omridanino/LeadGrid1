
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Star } from "lucide-react";
import EditPopup from "./EditPopup";

interface TestimonialsEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
}

const TestimonialsEditor = ({ content, onContentChange }: TestimonialsEditorProps) => {
  // Initialize with default structure if content is undefined or missing testimonials
  const [localContent, setLocalContent] = useState(() => {
    const defaultTestimonials = [
      {
        name: "יוסי כהן",
        role: "מנכ\"ל חברת טכנולוגיה",
        content: "השירות מעולה ומקצועי. המליץ בחום!",
        rating: 5
      },
      {
        name: "שרה לוי", 
        role: "יזמת",
        content: "קיבלתי בדיוק מה שחיפשתי. תוצאות מדהימות!",
        rating: 5
      },
      {
        name: "דני רוזן",
        role: "בעל עסק", 
        content: "גישה מקצועית ותוצאות מעבר לציפיות.",
        rating: 5
      }
    ];
    
    return {
      ...content,
      testimonials: {
        title: content?.testimonials?.title || "המלצות לקוחות",
        subtitle: content?.testimonials?.subtitle || "מה הלקוחות שלנו אומרים עלינו",
        items: Array.isArray(content?.testimonials?.items) 
          ? content.testimonials.items 
          : defaultTestimonials
      }
    };
  });

  const updateTestimonial = (index: number, field: string, value: any) => {
    const newTestimonials = [...(localContent.testimonials?.items || [])];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    setLocalContent({ 
      ...localContent, 
      testimonials: { 
        ...localContent.testimonials, 
        items: newTestimonials 
      } 
    });
  };

  const addTestimonial = () => {
    const newTestimonial = {
      name: "שם הלקוח",
      role: "תפקיד הלקוח",
      content: "ביקורת מעולה על השירות!",
      rating: 5
    };
    const newTestimonials = [...(localContent.testimonials?.items || []), newTestimonial];
    setLocalContent({ 
      ...localContent, 
      testimonials: { 
        ...localContent.testimonials, 
        items: newTestimonials 
      } 
    });
  };

  const removeTestimonial = (index: number) => {
    const newTestimonials = (localContent.testimonials?.items || []).filter((_: any, i: number) => i !== index);
    setLocalContent({ 
      ...localContent, 
      testimonials: { 
        ...localContent.testimonials, 
        items: newTestimonials 
      } 
    });
  };

  const handleSave = () => {
    onContentChange(localContent);
  };

  return (
    <EditPopup
      title="עריכת ביקורות לקוחות"
      triggerText="ביקורות לקוחות"
      icon={Star}
      onSave={handleSave}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-white font-semibold text-right block mb-3">רשימת ביקורות</Label>
          <div className="space-y-4">
            {(localContent.testimonials?.items || []).map((testimonial: any, index: number) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-3">
                  <Button
                    onClick={() => removeTestimonial(index)}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <h4 className="text-white font-medium">ביקורת #{index + 1}</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <Label className="text-gray-300 text-sm text-right block mb-1">שם הלקוח</Label>
                    <Input
                      value={testimonial.name || ''}
                      onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white text-right"
                      placeholder="שם הלקוח..."
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300 text-sm text-right block mb-1">תפקיד</Label>
                    <Input
                      value={testimonial.role || ''}
                      onChange={(e) => updateTestimonial(index, 'role', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white text-right"
                      placeholder="תפקיד הלקוח..."
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <Label className="text-gray-300 text-sm text-right block mb-1">תוכן הביקורת</Label>
                  <Textarea
                    value={testimonial.content || ''}
                    onChange={(e) => updateTestimonial(index, 'content', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white text-right"
                    rows={3}
                    placeholder="תוכן הביקורת..."
                  />
                </div>
                
                <div>
                  <Label className="text-gray-300 text-sm text-right block mb-1">דירוג (כוכבים)</Label>
                  <select
                    value={testimonial.rating || 5}
                    onChange={(e) => updateTestimonial(index, 'rating', parseInt(e.target.value))}
                    className="bg-gray-700 text-white p-2 rounded w-full border border-gray-600 text-right"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} כוכבים</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            
            <Button
              onClick={addTestimonial}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 rounded-xl"
            >
              <Plus className="w-4 h-4 ml-2" />
              הוסף ביקורת חדשה
            </Button>
          </div>
        </div>
      </div>
    </EditPopup>
  );
};

export default TestimonialsEditor;
