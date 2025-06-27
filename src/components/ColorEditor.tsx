
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Palette, Zap, Sparkles } from "lucide-react";

interface ColorEditorProps {
  onColorChange: (colors: ColorScheme) => void;
}

interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  heroBackground?: string;
  headlineColor?: string;
  subheadlineColor?: string;
  featuresColor?: string;
  featuresTextColor?: string;
  aboutColor?: string;
  aboutTextColor?: string;
  contactColor?: string;
  contactTextColor?: string;
}

const ColorEditor = ({ onColorChange }: ColorEditorProps) => {
  const [colors, setColors] = useState<ColorScheme>({
    primary: "#3b82f6",
    secondary: "#8b5cf6", 
    accent: "#06b6d4",
    background: "#000000",
    heroBackground: "#000000",
    text: "#ffffff",
    headlineColor: "#ffffff",
    subheadlineColor: "#e0f2fe",
    featuresColor: "#ffffff",
    featuresTextColor: "#e5e7eb",
    aboutColor: "#ffffff",
    aboutTextColor: "#d1d5db",
    contactColor: "#ffffff",
    contactTextColor: "#d1d5db"
  });

  // Apply colors immediately when changed - without notifications
  useEffect(() => {
    onColorChange(colors);
    
    // Apply CSS variables for real-time preview
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
  }, [colors, onColorChange]);

  const presetSchemes = [
    { 
      name: "שחור לבן קלאסי", 
      icon: <Sparkles className="w-4 h-4" />,
      colors: { 
        primary: "#3b82f6", secondary: "#1e40af", accent: "#06b6d4", 
        background: "#000000", heroBackground: "#000000", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#e0f2fe", 
        featuresColor: "#ffffff", featuresTextColor: "#e5e7eb",
        aboutColor: "#ffffff", aboutTextColor: "#d1d5db", 
        contactColor: "#ffffff", contactTextColor: "#d1d5db"
      }
    },
    { 
      name: "לבן שחור מודרני", 
      icon: <Zap className="w-4 h-4" />,
      colors: { 
        primary: "#1f2937", secondary: "#374151", accent: "#6b7280", 
        background: "#ffffff", heroBackground: "#ffffff", text: "#000000",
        headlineColor: "#000000", subheadlineColor: "#374151", 
        featuresColor: "#1f2937", featuresTextColor: "#374151",
        aboutColor: "#1f2937", aboutTextColor: "#4b5563", 
        contactColor: "#1f2937", contactTextColor: "#4b5563"
      }
    },
    { 
      name: "כחול מקצועי", 
      icon: <Palette className="w-4 h-4" />,
      colors: { 
        primary: "#3b82f6", secondary: "#1e40af", accent: "#06b6d4", 
        background: "#0f172a", heroBackground: "#0f172a", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#dbeafe", 
        featuresColor: "#3b82f6", featuresTextColor: "#e5e7eb",
        aboutColor: "#3b82f6", aboutTextColor: "#d1d5db", 
        contactColor: "#3b82f6", contactTextColor: "#d1d5db"
      }
    },
    { 
      name: "סגול יוקרתי", 
      icon: <Sparkles className="w-4 h-4" />,
      colors: { 
        primary: "#8b5cf6", secondary: "#7c3aed", accent: "#a855f7", 
        background: "#1a0b2e", heroBackground: "#1a0b2e", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#f3e8ff", 
        featuresColor: "#8b5cf6", featuresTextColor: "#e5e7eb",
        aboutColor: "#8b5cf6", aboutTextColor: "#d1d5db", 
        contactColor: "#8b5cf6", contactTextColor: "#d1d5db"
      }
    }
  ];

  const updateColor = (colorKey: keyof ColorScheme, value: string) => {
    const newColors = { ...colors, [colorKey]: value };
    setColors(newColors);
  };

  const applyPreset = (preset: ColorScheme) => {
    setColors(preset);
  };

  const colorLabels = {
    background: 'רקע עיקרי',
    heroBackground: 'רקע הירו סקשן',
    text: 'טקסט עיקרי',
    primary: 'צבע כפתורים',
    secondary: 'צבע משני', 
    accent: 'צבע הדגשה',
    headlineColor: 'כותרת ראשית',
    subheadlineColor: 'כותרת משנה',
    featuresColor: 'כותרות חלקים',
    featuresTextColor: 'טקסט חלקים',
    aboutColor: 'כותרת אודות',
    aboutTextColor: 'טקסט אודות',
    contactColor: 'כותרת יצירת קשר',
    contactTextColor: 'טקסט יצירת קשר'
  };

  return (
    <Card className="bg-gray-900/95 border-purple-500/30 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-white flex items-center gap-3 text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <Palette className="w-4 h-4 text-white" />
          </div>
          עורך צבעים - עובד בזמן אמת
        </CardTitle>
        <p className="text-purple-200 text-sm">שינויים מוחלים מיידית</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick preset schemes */}
        <div className="space-y-3">
          <h4 className="text-white font-bold">ערכות צבעים מהירות</h4>
          <div className="grid grid-cols-1 gap-2">
            {presetSchemes.map((scheme, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => applyPreset(scheme.colors)}
                className="bg-gray-800/80 border-purple-500/30 text-white hover:bg-purple-700/50 justify-start p-3 transition-all duration-300"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="flex gap-1">
                    <div 
                      className="w-4 h-4 rounded border border-white/20" 
                      style={{ backgroundColor: scheme.colors.background }}
                    />
                    <div 
                      className="w-4 h-4 rounded border border-white/20" 
                      style={{ backgroundColor: scheme.colors.primary }}
                    />
                    <div 
                      className="w-4 h-4 rounded border border-white/20" 
                      style={{ backgroundColor: scheme.colors.accent }}
                    />
                  </div>
                  <span className="font-medium">{scheme.name}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Main colors */}
        <div className="space-y-4">
          <h4 className="text-white font-bold">צבעים עיקריים</h4>
          <div className="grid grid-cols-1 gap-3">
            {['background', 'heroBackground', 'text', 'primary', 'secondary', 'accent'].map((key) => (
              <div key={key} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                <input
                  type="color"
                  value={colors[key as keyof ColorScheme] || '#ffffff'}
                  onChange={(e) => updateColor(key as keyof ColorScheme, e.target.value)}
                  className="w-10 h-10 rounded border-2 border-white/20 cursor-pointer"
                />
                <div className="flex-1">
                  <Label className="text-white font-medium">
                    {colorLabels[key as keyof typeof colorLabels]}
                  </Label>
                  <div className="text-gray-400 text-xs font-mono">
                    {colors[key as keyof ColorScheme] || '#ffffff'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section colors */}
        <div className="space-y-4">
          <h4 className="text-white font-bold">צבעי חלקים</h4>
          <div className="grid grid-cols-1 gap-2">
            {['headlineColor', 'subheadlineColor', 'featuresColor', 'featuresTextColor', 'aboutColor', 'aboutTextColor', 'contactColor', 'contactTextColor'].map((key) => (
              <div key={key} className="flex items-center gap-2 p-2 bg-black/20 rounded">
                <input
                  type="color"
                  value={colors[key as keyof ColorScheme] || '#ffffff'}
                  onChange={(e) => updateColor(key as keyof ColorScheme, e.target.value)}
                  className="w-6 h-6 rounded border border-white/20 cursor-pointer"
                />
                <Label className="text-white text-sm flex-1">
                  {colorLabels[key as keyof typeof colorLabels]}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-3 rounded-xl">
          <p className="text-purple-100 text-sm text-center">
            ✨ כל השינויים מוחלים בזמן אמת
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorEditor;
export type { ColorScheme };
