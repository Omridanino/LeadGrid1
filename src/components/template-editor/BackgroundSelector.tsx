
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, X, Palette, ImageIcon } from 'lucide-react';

interface BackgroundSelectorProps {
  label: string;
  colorValue: string;
  imageValue?: string;
  onColorChange: (value: string) => void;
  onImageChange: (value: string) => void;
}

const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=800&h=600&fit=crop'
];

export const BackgroundSelector = ({ label, colorValue, imageValue, onColorChange, onImageChange }: BackgroundSelectorProps) => {
  const [activeTab, setActiveTab] = useState<'color' | 'image'>(imageValue ? 'image' : 'color');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <Label className="text-white text-sm font-medium">{label}</Label>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'color' | 'image')}>
        <TabsList className="grid w-full grid-cols-2 bg-gray-800">
          <TabsTrigger value="color" className="text-white data-[state=active]:bg-blue-600">
            <Palette className="w-4 h-4 ml-1" />
            צבע
          </TabsTrigger>
          <TabsTrigger value="image" className="text-white data-[state=active]:bg-blue-600">
            <ImageIcon className="w-4 h-4 ml-1" />
            תמונה
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="color" className="space-y-2">
          <Input
            type="color"
            value={colorValue}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-full h-10 bg-gray-800 border-gray-700 cursor-pointer"
          />
        </TabsContent>
        
        <TabsContent value="image" className="space-y-3">
          {/* File Upload Section */}
          <div className="space-y-2">
            <Label className="text-white text-xs font-medium">העלה תמונה מהמחשב</Label>
            <div className="flex items-center gap-2">
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="bg-gray-800 border-gray-700 text-white file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>
          </div>

          {/* URL Input Section */}
          <div className="space-y-2">
            <Label className="text-white text-xs font-medium">או הדבק כתובת תמונה</Label>
            <Input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageValue && !imageValue.startsWith('data:') ? imageValue : ''}
              onChange={(e) => onImageChange(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white text-right"
            />
          </div>
          
          {imageValue && (
            <div className="relative">
              <img 
                src={imageValue} 
                alt="רקע נבחר" 
                className="w-full h-20 object-cover rounded border border-gray-700"
              />
              <Button
                size="sm"
                onClick={() => onImageChange('')}
                className="absolute top-1 left-1 bg-red-600 hover:bg-red-700 p-1 h-6 w-6"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          )}
          
          {/* Sample Images Section */}
          <div className="space-y-2">
            <Label className="text-white text-xs font-medium">או בחר מתמונות לדוגמה</Label>
            <div className="grid grid-cols-4 gap-2">
              {PLACEHOLDER_IMAGES.map((img, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                  onClick={() => onImageChange(img)}
                >
                  <CardContent className="p-1">
                    <img 
                      src={img} 
                      alt={`תמונת רקע ${index + 1}`}
                      className="w-full h-12 object-cover rounded"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
