
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Palette } from "lucide-react";

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
    background: "#1f2937",
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

  const presetSchemes = [
    { 
      name: "כחול מקצועי", 
      colors: { 
        primary: "#3b82f6", secondary: "#1e40af", accent: "#06b6d4", background: "#1f2937", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#e0f2fe", featuresColor: "#3b82f6", featuresTextColor: "#e5e7eb",
        aboutColor: "#3b82f6", aboutTextColor: "#d1d5db", contactColor: "#3b82f6", contactTextColor: "#d1d5db"
      }
    },
    { 
      name: "סגול יוקרתי", 
      colors: { 
        primary: "#8b5cf6", secondary: "#7c3aed", accent: "#a855f7", background: "#1f2937", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#f3e8ff", featuresColor: "#8b5cf6", featuresTextColor: "#e5e7eb",
        aboutColor: "#8b5cf6", aboutTextColor: "#d1d5db", contactColor: "#8b5cf6", contactTextColor: "#d1d5db"
      }
    },
    { 
      name: "ירוק טבעי", 
      colors: { 
        primary: "#10b981", secondary: "#059669", accent: "#34d399", background: "#1f2937", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#ecfdf5", featuresColor: "#10b981", featuresTextColor: "#e5e7eb",
        aboutColor: "#10b981", aboutTextColor: "#d1d5db", contactColor: "#10b981", contactTextColor: "#d1d5db"
      }
    },
    { 
      name: "כתום אנרגטי", 
      colors: { 
        primary: "#f59e0b", secondary: "#d97706", accent: "#fbbf24", background: "#1f2937", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#fef3c7", featuresColor: "#f59e0b", featuresTextColor: "#e5e7eb",
        aboutColor: "#f59e0b", aboutTextColor: "#d1d5db", contactColor: "#f59e0b", contactTextColor: "#d1d5db"
      }
    },
    { 
      name: "ורוד מודרני", 
      colors: { 
        primary: "#ec4899", secondary: "#db2777", accent: "#f472b6", background: "#1f2937", text: "#ffffff",
        headlineColor: "#ffffff", subheadlineColor: "#fce7f3", featuresColor: "#ec4899", featuresTextColor: "#e5e7eb",
        aboutColor: "#ec4899", aboutTextColor: "#d1d5db", contactColor: "#ec4899", contactTextColor: "#d1d5db"
      }
    }
  ];

  useEffect(() => {
    onColorChange(colors);
  }, [colors, onColorChange]);

  const updateColor = (colorKey: keyof ColorScheme, value: string) => {
    setColors(prev => ({ ...prev, [colorKey]: value }));
  };

  const applyPreset = (preset: ColorScheme) => {
    setColors(preset);
  };

  const colorLabels = {
    primary: 'עיקרי',
    secondary: 'משני', 
    accent: 'הדגשה',
    background: 'רקע',
    text: 'טקסט',
    headlineColor: 'כותרת ראשית',
    subheadlineColor: 'כותרת משנה',
    featuresColor: 'כותרת תכונות',
    featuresTextColor: 'טקסט תכונות',
    aboutColor: 'כותרת אודות',
    aboutTextColor: 'טקסט אודות',
    contactColor: 'כותרת יצירת קשר',
    contactTextColor: 'טקסט יצירת קשר'
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Palette className="w-5 h-5" />
          עורך צבעים מתקדם
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* ערכות צבעים מוכנות */}
        <div>
          <h4 className="text-white font-semibold mb-3">ערכות צבעים מוכנות</h4>
          <div className="grid grid-cols-1 gap-2">
            {presetSchemes.map((scheme, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => applyPreset(scheme.colors)}
                className="bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 justify-start"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-500" 
                      style={{ backgroundColor: scheme.colors.primary }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-500" 
                      style={{ backgroundColor: scheme.colors.secondary }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-500" 
                      style={{ backgroundColor: scheme.colors.accent }}
                    ></div>
                  </div>
                  {scheme.name}
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* עריכה ידנית - צבעים בסיסיים */}
        <div>
          <h4 className="text-white font-semibold mb-3">צבעים בסיסיים</h4>
          <div className="grid grid-cols-2 gap-3">
            {['primary', 'secondary', 'accent', 'background', 'text'].map((key) => (
              <div key={key} className="flex items-center gap-2">
                <Label className="text-gray-300 text-sm flex-1">
                  {colorLabels[key as keyof typeof colorLabels]}
                </Label>
                <input
                  type="color"
                  value={colors[key as keyof ColorScheme] || '#ffffff'}
                  onChange={(e) => updateColor(key as keyof ColorScheme, e.target.value)}
                  className="w-10 h-8 rounded border border-gray-600 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* עריכה ידנית - צבעי טקסט */}
        <div>
          <h4 className="text-white font-semibold mb-3">צבעי כותרות וטקסטים</h4>
          <div className="grid grid-cols-1 gap-3">
            {['headlineColor', 'subheadlineColor', 'featuresColor', 'featuresTextColor', 'aboutColor', 'aboutTextColor', 'contactColor', 'contactTextColor'].map((key) => (
              <div key={key} className="flex items-center gap-2">
                <Label className="text-gray-300 text-sm flex-1">
                  {colorLabels[key as keyof typeof colorLabels]}
                </Label>
                <input
                  type="color"
                  value={colors[key as keyof ColorScheme] || '#ffffff'}
                  onChange={(e) => updateColor(key as keyof ColorScheme, e.target.value)}
                  className="w-10 h-8 rounded border border-gray-600 cursor-pointer"
                />
                <span className="text-gray-400 text-xs font-mono w-16">
                  {colors[key as keyof ColorScheme]?.substring(1) || 'ffffff'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorEditor;
export type { ColorScheme };
