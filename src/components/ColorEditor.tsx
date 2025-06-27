
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
    background: "#000000", // Default black background
    text: "#ffffff", // Default white text
    headlineColor: "#ffffff",
    subheadlineColor: "#e0f2fe",
    featuresColor: "#ffffff",
    featuresTextColor: "#e5e7eb",
    aboutColor: "#ffffff",
    aboutTextColor: "#d1d5db",
    contactColor: "#ffffff",
    contactTextColor: "#d1d5db"
  });

  // Real-time color updates
  useEffect(() => {
    onColorChange(colors);
    
    // Apply global CSS variables for immediate visual feedback
    const root = document.documentElement;
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--background-color', colors.background);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--headline-color', colors.headlineColor || '#ffffff');
    root.style.setProperty('--subheadline-color', colors.subheadlineColor || '#e0f2fe');
    
    // Update page background immediately
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
    
  }, [colors, onColorChange]);

  const presetSchemes = [
    { 
      name: "שחור לבן קלאסי", 
      icon: <Sparkles className="w-4 h-4" />,
      colors: { 
        primary: "#3b82f6", secondary: "#1e40af", accent: "#06b6d4", 
        background: "#000000", text: "#ffffff",
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
        background: "#ffffff", text: "#000000",
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
        background: "#0f172a", text: "#ffffff",
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
        background: "#1a0b2e", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#f3e8ff", 
        featuresColor: "#8b5cf6", featuresTextColor: "#e5e7eb",
        aboutColor: "#8b5cf6", aboutTextColor: "#d1d5db", 
        contactColor: "#8b5cf6", contactTextColor: "#d1d5db"
      }
    },
    { 
      name: "ירוק טבעי", 
      icon: <Zap className="w-4 h-4" />,
      colors: { 
        primary: "#10b981", secondary: "#059669", accent: "#34d399", 
        background: "#064e3b", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#ecfdf5", 
        featuresColor: "#10b981", featuresTextColor: "#e5e7eb",
        aboutColor: "#10b981", aboutTextColor: "#d1d5db", 
        contactColor: "#10b981", contactTextColor: "#d1d5db"
      }
    }
  ];

  const updateColor = (colorKey: keyof ColorScheme, value: string) => {
    setColors(prev => ({ ...prev, [colorKey]: value }));
  };

  const applyPreset = (preset: ColorScheme) => {
    setColors(preset);
  };

  const colorLabels = {
    primary: 'צבע עיקרי',
    secondary: 'צבע משני', 
    accent: 'צבע הדגשה',
    background: 'רקע כללי',
    text: 'טקסט כללי',
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
          עורך צבעים חכם - עדכון בזמן אמת
        </CardTitle>
        <p className="text-purple-200 text-sm">שינויים יוחלו מיידית על הדף</p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Quick preset schemes */}
        <div className="bg-black/30 p-6 rounded-2xl border border-purple-500/20">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            ערכות צבעים מוכנות
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {presetSchemes.map((scheme, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => applyPreset(scheme.colors)}
                className="bg-gray-800/80 border-purple-500/30 text-white hover:bg-purple-700/50 justify-start h-auto p-4 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex gap-1">
                    <div 
                      className="w-6 h-6 rounded-lg border border-white/20 shadow-lg" 
                      style={{ backgroundColor: scheme.colors.primary }}
                    ></div>
                    <div 
                      className="w-6 h-6 rounded-lg border border-white/20 shadow-lg" 
                      style={{ backgroundColor: scheme.colors.background }}
                    ></div>
                    <div 
                      className="w-6 h-6 rounded-lg border border-white/20 shadow-lg" 
                      style={{ backgroundColor: scheme.colors.accent }}
                    ></div>
                  </div>
                  <div className="flex items-center gap-2">
                    {scheme.icon}
                    <span className="font-semibold">{scheme.name}</span>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Main colors section */}
        <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/20">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Palette className="w-4 h-4 text-blue-400" />
            צבעים בסיסיים
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {['background', 'text', 'primary', 'secondary', 'accent'].map((key) => (
              <div key={key} className="flex items-center gap-4 p-3 bg-black/30 rounded-xl">
                <input
                  type="color"
                  value={colors[key as keyof ColorScheme] || '#ffffff'}
                  onChange={(e) => updateColor(key as keyof ColorScheme, e.target.value)}
                  className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer shadow-lg"
                />
                <div className="flex-1">
                  <Label className="text-white font-semibold block">
                    {colorLabels[key as keyof typeof colorLabels]}
                  </Label>
                  <span className="text-gray-400 text-sm font-mono">
                    {colors[key as keyof ColorScheme] || '#ffffff'}
                  </span>
                </div>
                <div 
                  className="w-8 h-8 rounded-lg border border-white/20"
                  style={{ backgroundColor: colors[key as keyof ColorScheme] || '#ffffff' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section-specific colors */}
        <div className="bg-green-900/20 p-6 rounded-2xl border border-green-500/20">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-green-400" />
            צבעי חלקים ספציפיים
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {['headlineColor', 'subheadlineColor', 'featuresColor', 'featuresTextColor', 'aboutColor', 'aboutTextColor', 'contactColor', 'contactTextColor'].map((key) => (
              <div key={key} className="flex items-center gap-3 p-2 bg-black/20 rounded-lg">
                <input
                  type="color"
                  value={colors[key as keyof ColorScheme] || '#ffffff'}
                  onChange={(e) => updateColor(key as keyof ColorScheme, e.target.value)}
                  className="w-8 h-8 rounded border border-white/20 cursor-pointer"
                />
                <Label className="text-white text-sm flex-1">
                  {colorLabels[key as keyof typeof colorLabels]}
                </Label>
                <span className="text-gray-400 text-xs font-mono w-16">
                  {colors[key as keyof ColorScheme]?.substring(1) || 'ffffff'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-xl border border-purple-500/20">
          <p className="text-purple-100 text-sm text-center">
            💡 <strong>טיפ מקצועי:</strong> שינויי צבעים מוחלים מיידית על כל החלקים בדף
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorEditor;
export type { ColorScheme };
