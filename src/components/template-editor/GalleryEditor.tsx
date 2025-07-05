import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Image, Upload } from 'lucide-react';
import { TemplateData, GallerySection } from '@/types/template';

interface GalleryEditorProps {
  template: TemplateData;
  onUpdate: (updates: Partial<GallerySection>) => void;
  onStyleUpdate?: (updates: any) => void;
}

export const GalleryEditor = ({ template, onUpdate }: GalleryEditorProps) => {
  const galleryData = template.gallery || {
    title: 'גלריית התמונות שלנו',
    subtitle: 'תמונות מהפרויקטים והעבודות שלנו',
    images: [],
    layout: 'grid' as const,
    columns: 3
  };

  const [newImage, setNewImage] = useState({ src: '', alt: '', caption: '' });

  const handleAddImage = () => {
    if (newImage.src && newImage.alt) {
      onUpdate({
        ...galleryData,
        images: [...galleryData.images, newImage]
      });
      setNewImage({ src: '', alt: '', caption: '' });
    }
  };

  const handleRemoveImage = (index: number) => {
    onUpdate({
      ...galleryData,
      images: galleryData.images.filter((_, i) => i !== index)
    });
  };

  const handleUpdateImage = (index: number, field: string, value: string) => {
    const updatedImages = galleryData.images.map((img, i) => 
      i === index ? { ...img, [field]: value } : img
    );
    onUpdate({
      ...galleryData,
      images: updatedImages
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Image className="w-5 h-5" />
            הגדרות גלריה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">כותרת הגלריה</Label>
            <Input
              value={galleryData.title}
              onChange={(e) => onUpdate({ ...galleryData, title: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כותרת הגלריה"
            />
          </div>

          <div>
            <Label className="text-slate-200">תיאור</Label>
            <Textarea
              value={galleryData.subtitle || ''}
              onChange={(e) => onUpdate({ ...galleryData, subtitle: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תיאור הגלריה"
            />
          </div>

          <div>
            <Label className="text-slate-200">סוג תצוגה</Label>
            <Select 
              value={galleryData.layout} 
              onValueChange={(value) => onUpdate({ ...galleryData, layout: value as 'grid' | 'masonry' | 'carousel' })}
            >
              <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grid">רשת</SelectItem>
                <SelectItem value="masonry">מזונרי</SelectItem>
                <SelectItem value="carousel">קרוסלה</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {galleryData.layout === 'grid' && (
            <div>
              <Label className="text-slate-200">מספר עמודות</Label>
              <Select 
                value={galleryData.columns?.toString() || '3'} 
                onValueChange={(value) => onUpdate({ ...galleryData, columns: parseInt(value) })}
              >
                <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 עמודות</SelectItem>
                  <SelectItem value="3">3 עמודות</SelectItem>
                  <SelectItem value="4">4 עמודות</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-5 h-5" />
            הוספת תמונה חדשה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-200">קישור לתמונה</Label>
            <Input
              value={newImage.src}
              onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <Label className="text-slate-200">תיאור התמונה (Alt Text)</Label>
            <Input
              value={newImage.alt}
              onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="תיאור התמונה"
            />
          </div>

          <div>
            <Label className="text-slate-200">כיתוב (אופציונלי)</Label>
            <Input
              value={newImage.caption}
              onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-white"
              placeholder="כיתוב התמונה"
            />
          </div>

          <Button 
            onClick={handleAddImage}
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={!newImage.src || !newImage.alt}
          >
            <Plus className="w-4 h-4 mr-2" />
            הוסף תמונה
          </Button>
        </CardContent>
      </Card>

      {galleryData.images.length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">תמונות בגלריה ({galleryData.images.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {galleryData.images.map((image, index) => (
                <div key={index} className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {image.src ? (
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <Image className="w-6 h-6 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <Input
                        value={image.src}
                        onChange={(e) => handleUpdateImage(index, 'src', e.target.value)}
                        className="bg-slate-600/50 border-slate-500/50 text-white text-sm"
                        placeholder="קישור לתמונה"
                      />
                      <Input
                        value={image.alt}
                        onChange={(e) => handleUpdateImage(index, 'alt', e.target.value)}
                        className="bg-slate-600/50 border-slate-500/50 text-white text-sm"
                        placeholder="תיאור התמונה"
                      />
                      <Input
                        value={image.caption || ''}
                        onChange={(e) => handleUpdateImage(index, 'caption', e.target.value)}
                        className="bg-slate-600/50 border-slate-500/50 text-white text-sm"
                        placeholder="כיתוב"
                      />
                    </div>
                    <Button
                      onClick={() => handleRemoveImage(index)}
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};