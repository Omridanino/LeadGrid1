
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { advancedDesignTemplates } from '@/data/advancedDesignTemplates';
import { Palette, Check, Eye } from 'lucide-react';

interface AdvancedDesignSelectorProps {
  onUpdate: (design: any) => void;
  currentData: any;
}

export const AdvancedDesignSelector = ({ onUpdate, currentData }: AdvancedDesignSelectorProps) => {
  const [selectedDesign, setSelectedDesign] = useState(currentData?.selectedDesign || null);
  const [previewDesign, setPreviewDesign] = useState(null);
  const { toast } = useToast();

  const handleDesignSelect = (design: any) => {
    setSelectedDesign(design.id);
    onUpdate({
      ...currentData,
      selectedDesign: design.id,
      designStyles: design.styles
    });
    
    toast({
      title: "עיצוב נבחר!",
      description: `עיצוב "${design.name}" הוחל בהצלחה`
    });
  };

  const categories = [
    { id: 'all', name: 'הכל', designs: advancedDesignTemplates },
    { 
      id: 'modern', 
      name: 'מודרני', 
      designs: advancedDesignTemplates.filter(d => 
        ['minimal-tech', 'vibrant-gradient', 'modern-pink', 'fresh-cyan', 'sky-blue'].includes(d.id)
      ) 
    },
    { 
      id: 'dark', 
      name: 'כהה', 
      designs: advancedDesignTemplates.filter(d => 
        ['dark-professional', 'luxury-gold', 'forest-dark', 'royal-purple', 'neon-cyber', 'cosmic-deep'].includes(d.id)
      ) 
    },
    { 
      id: 'business', 
      name: 'עסקי', 
      designs: advancedDesignTemplates.filter(d => 
        ['corporate-blue', 'elegant-navy', 'steel-gray', 'minimal-tech'].includes(d.id)
      ) 
    },
    { 
      id: 'creative', 
      name: 'יצירתי', 
      designs: advancedDesignTemplates.filter(d => 
        ['creative-purple', 'magenta-energy', 'neon-cyber', 'retro-vintage'].includes(d.id)
      ) 
    },
    { 
      id: 'nature', 
      name: 'טבע', 
      designs: advancedDesignTemplates.filter(d => 
        ['nature-green', 'warm-organic', 'earth-brown', 'autumn-warm', 'ocean-teal'].includes(d.id)
      ) 
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-white text-xl font-semibold mb-2 flex items-center justify-center gap-2">
          <Palette className="w-6 h-6" />
          בוחר עיצובים מתקדם
        </h3>
        <p className="text-gray-400">25 תבניות עיצוב מקצועיות ומודרניות</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`${
              activeCategory === category.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category.name} ({category.designs.length})
          </Button>
        ))}
      </div>

      {/* Design Grid */}
      <ScrollArea className="h-[60vh]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1">
          {categories.find(c => c.id === activeCategory)?.designs.map((design) => (
            <Card 
              key={design.id} 
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedDesign === design.id 
                  ? 'ring-2 ring-blue-500 bg-blue-900/20' 
                  : 'bg-gray-800 hover:bg-gray-750'
              } border-gray-700`}
              onClick={() => handleDesignSelect(design)}
            >
              <CardContent className="p-3">
                {/* Preview */}
                <div 
                  className="w-full h-24 rounded-lg mb-3 relative overflow-hidden"
                  style={{
                    background: design.styles.heroBackground || design.styles.backgroundColor
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: design.styles.primaryColor }}
                    ></div>
                    <div 
                      className="w-6 h-6 rounded-full ml-2"
                      style={{ backgroundColor: design.styles.accentColor }}
                    ></div>
                  </div>
                  {selectedDesign === design.id && (
                    <div className="absolute top-1 right-1">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                  )}
                </div>

                {/* Design Info */}
                <h4 className="text-white text-sm font-medium mb-1">{design.name}</h4>
                <div className="flex items-center gap-1 mb-2">
                  <div 
                    className="w-3 h-3 rounded-full border border-gray-600"
                    style={{ backgroundColor: design.styles.primaryColor }}
                  ></div>
                  <div 
                    className="w-3 h-3 rounded-full border border-gray-600"
                    style={{ backgroundColor: design.styles.accentColor }}
                  ></div>
                  <span className="text-xs text-gray-400 ml-1">
                    {design.styles.fontFamily?.split(',')[0] || 'Sans-serif'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1">
                  <Button 
                    size="sm" 
                    className="flex-1 text-xs bg-blue-600 hover:bg-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDesignSelect(design);
                    }}
                  >
                    {selectedDesign === design.id ? 'נבחר' : 'בחר'}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-xs border-gray-600 text-gray-300 hover:bg-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewDesign(design);
                    }}
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {/* Selected Design Info */}
      {selectedDesign && (
        <Card className="bg-green-900/30 border-green-700/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-green-200 font-medium">
                עיצוב נבחר: {advancedDesignTemplates.find(d => d.id === selectedDesign)?.name}
              </span>
            </div>
            <p className="text-green-300 text-sm mt-1">
              העיצוב יוחל על כל הדף כולל צבעים, פונטים ורקעים
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
