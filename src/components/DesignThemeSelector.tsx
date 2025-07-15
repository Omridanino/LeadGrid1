import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Palette } from 'lucide-react';
import { designThemes, DesignTheme, getDefaultTheme } from '@/types/designThemes';

interface DesignThemeSelectorProps {
  selectedTheme?: DesignTheme;
  onThemeSelect: (theme: DesignTheme) => void;
  className?: string;
}

const DesignThemeSelector = ({ 
  selectedTheme, 
  onThemeSelect, 
  className = "" 
}: DesignThemeSelectorProps) => {
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null);
  const currentTheme = selectedTheme || getDefaultTheme();

  const handleThemeSelect = (theme: DesignTheme) => {
    onThemeSelect(theme);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 mb-4">
          <Palette className="h-4 w-4 text-purple-500" />
          <span className="text-sm font-medium text-purple-600">בחירת עיצוב</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">בחר את העיצוב המושלם לדף שלך</h3>
        <p className="text-muted-foreground">
          כל עיצוב מותאם להעביר מסר שונה ולהתאים לקהל יעד אחר
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designThemes.map((theme) => {
          const isSelected = currentTheme.id === theme.id;
          const isHovered = hoveredTheme === theme.id;
          
          return (
            <Card 
              key={theme.id}
              className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                isSelected 
                  ? 'ring-2 ring-purple-500 ring-offset-2 shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onMouseEnter={() => setHoveredTheme(theme.id)}
              onMouseLeave={() => setHoveredTheme(null)}
              onClick={() => handleThemeSelect(theme)}
            >
              {/* Theme Preview */}
              <div 
                className="h-32 rounded-t-lg relative overflow-hidden"
                style={{ 
                  background: theme.styles.heroBackground || theme.styles.background 
                }}
              >
                {/* Mini preview elements */}
                <div className="absolute inset-0 p-3">
                  <div 
                    className="w-full h-3 rounded mb-2 opacity-80"
                    style={{ backgroundColor: theme.styles.text }}
                  />
                  <div 
                    className="w-3/4 h-2 rounded mb-1 opacity-60"
                    style={{ backgroundColor: theme.styles.text }}
                  />
                  <div 
                    className="w-1/2 h-2 rounded opacity-40"
                    style={{ backgroundColor: theme.styles.text }}
                  />
                  
                  {/* Mini button */}
                  <div 
                    className="absolute bottom-3 left-3 w-16 h-6 rounded"
                    style={{ backgroundColor: theme.styles.primary }}
                  />
                </div>

                {/* Selection indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-purple-500 text-white rounded-full p-1">
                      <Check className="h-3 w-3" />
                    </div>
                  </div>
                )}

                {/* Default badge */}
                {theme.isDefault && (
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      ברירת מחדל
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">{theme.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {theme.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {theme.description}
                </p>

                {/* Color palette preview */}
                <div className="flex gap-2 mb-4">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: theme.styles.primary }}
                    title="צבע ראשי"
                  />
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: theme.styles.secondary }}
                    title="צבע משני"
                  />
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: theme.styles.accent }}
                    title="צבע מבטא"
                  />
                </div>

                <Button
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleThemeSelect(theme);
                  }}
                >
                  {isSelected ? (
                    <>
                      <Check className="h-3 w-3 mr-2" />
                      נבחר
                    </>
                  ) : (
                    'בחר עיצוב זה'
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Current selection info */}
      {currentTheme && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: currentTheme.styles.primary }}
            />
            <div>
              <p className="font-medium">
                עיצוב נבחר: <span className="text-purple-600">{currentTheme.name}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                {currentTheme.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignThemeSelector;