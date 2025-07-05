import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { TemplateData, SliderSection } from '@/types/template';

interface SliderEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<SliderSection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const SliderEditor = ({ template, onUpdate }: SliderEditorProps) => {
  const sliderData = template.slider || {
    title: 'הסליידר שלנו',
    subtitle: 'גלה את התכנים המיוחדים שלנו',
    slides: [],
    autoplay: true,
    duration: 5000
  };

  const [newSlide, setNewSlide] = useState({
    title: '',
    description: '',
    image: '',
    buttonText: '',
    buttonLink: ''
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAddSlide = () => {
    if (newSlide.title && newSlide.description) {
      onUpdate({
        ...sliderData,
        slides: [...sliderData.slides, newSlide]
      });
      setNewSlide({
        title: '',
        description: '',
        image: '',
        buttonText: '',
        buttonLink: ''
      });
    }
  };

  const handleRemoveSlide = (index: number) => {
    onUpdate({
      ...sliderData,
      slides: sliderData.slides.filter((_, i) => i !== index)
    });
    if (currentSlide >= sliderData.slides.length - 1) {
      setCurrentSlide(0);
    }
  };

  const handleUpdateSlide = (index: number, field: string, value: string) => {
    const updatedSlides = sliderData.slides.map((slide, i) => 
      i === index ? { ...slide, [field]: value } : slide
    );
    onUpdate({
      ...sliderData,
      slides: updatedSlides
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <LayoutGrid className="w-5 h-5" />
            הגדרות סליידר
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">תווית (Badge)</Label>
            <Input
              value={sliderData.badge || ''}
              onChange={(e) => onUpdate({ ...sliderData, badge: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תווית קטנה מעל הכותרת"
            />
          </div>

          <div>
            <Label className="text-slate-200">כותרת הסליידר</Label>
            <Input
              value={sliderData.title || ''}
              onChange={(e) => onUpdate({ ...sliderData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת הסליידר"
            />
          </div>

          <div>
            <Label className="text-slate-200">תיאור</Label>
            <Textarea
              value={sliderData.subtitle || ''}
              onChange={(e) => onUpdate({ ...sliderData, subtitle: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תיאור הסליידר"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="autoplay"
                checked={sliderData.autoplay || false}
                onCheckedChange={(checked) => onUpdate({ ...sliderData, autoplay: !!checked })}
              />
              <Label htmlFor="autoplay" className="text-slate-200">
                ניגון אוטומטי
              </Label>
            </div>

            <div>
              <Label className="text-slate-200">משך זמן (מילי-שניות)</Label>
              <Input
                type="number"
                value={sliderData.duration || 5000}
                onChange={(e) => onUpdate({ ...sliderData, duration: parseInt(e.target.value) || 5000 })}
                className="bg-slate-700/50 border-slate-600/50 text-white"
                min="1000"
                max="10000"
                step="500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-5 h-5" />
            הוספת סליידר חדש
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">כותרת הסליידר</Label>
            <Input
              value={newSlide.title}
              onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת הסליידר"
            />
          </div>

          <div>
            <Label className="text-slate-200">תיאור</Label>
            <Textarea
              value={newSlide.description}
              onChange={(e) => setNewSlide({ ...newSlide, description: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תיאור הסליידר"
            />
          </div>

          <div>
            <Label className="text-slate-200">תמונת רקע (אופציונלי)</Label>
            <Input
              value={newSlide.image}
              onChange={(e) => setNewSlide({ ...newSlide, image: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-slate-200">טקסט כפתור (אופציונלי)</Label>
              <Input
                value={newSlide.buttonText}
                onChange={(e) => setNewSlide({ ...newSlide, buttonText: e.target.value })}
                className="bg-slate-700/50 border-slate-600/50 text-white"
                placeholder="לחץ כאן"
              />
            </div>

            <div>
              <Label className="text-slate-200">קישור כפתור (אופציונלי)</Label>
              <Input
                value={newSlide.buttonLink}
                onChange={(e) => setNewSlide({ ...newSlide, buttonLink: e.target.value })}
                className="bg-slate-700/50 border-slate-600/50 text-white"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <Button 
            onClick={handleAddSlide}
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={!newSlide.title || !newSlide.description}
          >
            <Plus className="w-4 h-4 mr-2" />
            הוסף סליידר
          </Button>
        </CardContent>
      </Card>

      {sliderData.slides.length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">סליידרים ({sliderData.slides.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sliderData.slides.map((slide, index) => (
                <div key={index} className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-white font-medium">סליידר {index + 1}</h4>
                    <Button
                      onClick={() => handleRemoveSlide(index)}
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <Input
                      value={slide.title}
                      onChange={(e) => handleUpdateSlide(index, 'title', e.target.value)}
                      className="bg-slate-600/50 border-slate-500/50 text-white"
                      placeholder="כותרת הסליידר"
                    />
                    <Textarea
                      value={slide.description}
                      onChange={(e) => handleUpdateSlide(index, 'description', e.target.value)}
                      className="bg-slate-600/50 border-slate-500/50 text-white"
                      placeholder="תיאור הסליידר"
                    />
                    <Input
                      value={slide.image || ''}
                      onChange={(e) => handleUpdateSlide(index, 'image', e.target.value)}
                      className="bg-slate-600/50 border-slate-500/50 text-white"
                      placeholder="קישור לתמונה"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        value={slide.buttonText || ''}
                        onChange={(e) => handleUpdateSlide(index, 'buttonText', e.target.value)}
                        className="bg-slate-600/50 border-slate-500/50 text-white"
                        placeholder="טקסט כפתור"
                      />
                      <Input
                        value={slide.buttonLink || ''}
                        onChange={(e) => handleUpdateSlide(index, 'buttonLink', e.target.value)}
                        className="bg-slate-600/50 border-slate-500/50 text-white"
                        placeholder="קישור כפתור"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Preview */}
      {sliderData.slides.length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">תצוגה מקדימה</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              {sliderData.badge && (
                <div className="inline-block px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                  {sliderData.badge}
                </div>
              )}
              {sliderData.title && (
                <h3 className="text-2xl font-bold text-white">
                  {sliderData.title}
                </h3>
              )}
              {sliderData.subtitle && (
                <p className="text-slate-300">
                  {sliderData.subtitle}
                </p>
              )}
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden aspect-video">
                {sliderData.slides[currentSlide]?.image && (
                  <img 
                    src={sliderData.slides[currentSlide].image} 
                    alt={sliderData.slides[currentSlide].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                  />
                )}
                <div className="relative z-10 flex items-center justify-center h-full p-8 text-center">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white">
                      {sliderData.slides[currentSlide]?.title}
                    </h4>
                    <p className="text-slate-200">
                      {sliderData.slides[currentSlide]?.description}
                    </p>
                    {sliderData.slides[currentSlide]?.buttonText && (
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        {sliderData.slides[currentSlide].buttonText}
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Navigation */}
                {sliderData.slides.length > 1 && (
                  <>
                    <Button
                      onClick={() => setCurrentSlide(prev => prev === 0 ? sliderData.slides.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2"
                      size="sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => setCurrentSlide(prev => prev === sliderData.slides.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2"
                      size="sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {sliderData.slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};