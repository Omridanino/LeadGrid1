
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
}

const ColorEditor = ({ onColorChange }: ColorEditorProps) => {
  const [colors, setColors] = useState<ColorScheme>({
    primary: "#3b82f6",
    secondary: "#8b5cf6", 
    accent: "#06b6d4",
    background: "#1f2937",
    text: "#ffffff"
  });

  const presetSchemes = [
    { name: "כחול מקצועי", colors: { primary: "#3b82f6", secondary: "#1e40af", accent: "#06b6d4", background: "#1f2937", text: "#ffffff" }},
    { name: "סגול יוקרתי", colors: { primary: "#8b5cf6", secondary: "#7c3aed", accent: "#a855f7", background: "#1f2937", text: "#ffffff" }},
    { name: "ירוק טבעי", colors: { primary: "#10b981", secondary: "#059669", accent: "#34d399", background: "#1f2937", text: "#ffffff" }},
    { name: "כתום אנרגטי", colors: { primary: "#f59e0b", secondary: "#d97706", accent: "#fbbf24", background: "#1f2937", text: "#ffffff" }},
    { name: "ורוד מודרני", colors: { primary: "#ec4899", secondary: "#db2777", accent: "#f472b6", background: "#1f2937", text: "#ffffff" }}
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

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Palette className="w-5 h-5" />
          עורך צבעים
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

        {/* עריכה ידנית */}
        <div>
          <h4 className="text-white font-semibold mb-3">התאמה ידנית</h4>
          <div className="space-y-3">
            {Object.entries(colors).map(([key, value]) => (
              <div key={key} className="flex items-center gap-3">
                <label className="text-gray-300 w-20 text-sm">
                  {key === 'primary' && 'עיקרי'}
                  {key === 'secondary' && 'משני'}
                  {key === 'accent' && 'הדגשה'}
                  {key === 'background' && 'רקע'}
                  {key === 'text' && 'טקסט'}
                </label>
                <input
                  type="color"
                  value={value}
                  onChange={(e) => updateColor(key as keyof ColorScheme, e.target.value)}
                  className="w-12 h-8 rounded border border-gray-600 cursor-pointer"
                />
                <span className="text-gray-400 text-xs font-mono">{value}</span>
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
