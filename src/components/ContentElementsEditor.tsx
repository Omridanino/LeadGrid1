import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Plus, Trash2, Palette } from "lucide-react";

// טיפוסים
interface ContentElementsEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData?: any;
}

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

// קומפוננטת בחירת צבעים
const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<'solid' | 'gradient'>('solid');
  const [gradientColors, setGradientColors] = useState({ from: '#3b82f6', to: '#1d4ed8' });
  const [solidColor, setSolidColor] = useState('#3b82f6');

  const gradientPresets = [
    { name: 'זהב', from: '#fbbf24', to: '#f59e0b', value: 'gradient-gold-text' },
    { name: 'סגול', from: '#a855f7', to: '#7c3aed', value: 'gradient-purple-text' },
    { name: 'כחול', from: '#3b82f6', to: '#1d4ed8', value: 'gradient-blue-text' },
    { name: 'ירוק', from: '#10b981', to: '#059669', value: 'gradient-green-text' },
    { name: 'אדום', from: '#ef4444', to: '#dc2626', value: 'gradient-red-text' },
    { name: 'ציאן', from: '#06b6d4', to: '#0891b2', value: 'gradient-cyan-text' },
    { name: 'קשת', from: '#ef4444', to: '#a855f7', value: 'gradient-rainbow-text' },
    { name: 'כחול אוקיינוס', from: '#3b82f6', to: '#06b6d4', value: 'gradient-blue-ocean' },
    { name: 'ירוק טבע', from: '#10b981', to: '#34d399', value: 'gradient-green-nature' },
    { name: 'אדום אש', from: '#ef4444', to: '#fb923c', value: 'gradient-red-fire' },
    { name: 'ורוד שקיעה', from: '#ec4899', to: '#f43f5e', value: 'gradient-pink-sunset' },
    { name: 'זהב-שחור', from: '#fbbf24', to: '#000000', value: 'gradient-gold-black' },
    { name: 'זהב-לבן', from: '#fbbf24', to: '#ffffff', value: 'gradient-gold-white' },
  ];

  const handleTypeChange = (type: 'solid' | 'gradient') => {
    setSelectedType(type);
    if (type === 'solid') {
      onChange(solidColor);
    } else {
      onChange(`linear-gradient(90deg, ${gradientColors.from}, ${gradientColors.to})`);
    }
  };

  return (
    <div className="mb-4">
      <Label>{label}</Label>
      <div className="flex gap-2 items-center">
        <Button type="button" size="sm" onClick={() => setIsOpen((v) => !v)}>
          <Palette className="w-4 h-4 mr-1" />
          {selectedType === 'solid' ? "צבע אחיד" : "גרדיאנט"}
        </Button>
        {isOpen && (
          <div className="bg-white shadow-lg rounded p-4 z-50 absolute">
            <div className="flex gap-2 mb-2">
              <Button
                variant={selectedType === "solid" ? "default" : "outline"}
                onClick={() => handleTypeChange("solid")}
                size="sm"
              >
                צבע אחיד
              </Button>
              <Button
                variant={selectedType === "gradient" ? "default" : "outline"}
                onClick={() => handleTypeChange("gradient")}
                size="sm"
              >
                גרדיאנט
              </Button>
            </div>
            {selectedType === "solid" ? (
              <input
                type="color"
                value={solidColor}
                onChange={e => {
                  setSolidColor(e.target.value);
                  onChange(e.target.value);
                }}
                className="w-10 h-10 rounded"
              />
            ) : (
              <div>
                <div className="flex gap-2 items-center mb-2">
                  <input
                    type="color"
                    value={gradientColors.from}
                    onChange={e => {
                      setGradientColors({ ...gradientColors, from: e.target.value });
                      onChange(`linear-gradient(90deg, ${e.target.value}, ${gradientColors.to})`);
                    }}
                  />
                  <span>אל</span>
                  <input
                    type="color"
                    value={gradientColors.to}
                    onChange={e => {
                      setGradientColors({ ...gradientColors, to: e.target.value });
                      onChange(`linear-gradient(90deg, ${gradientColors.from}, ${e.target.value})`);
                    }}
                  />
                </div>
                <div>
                  <Label>גרדיאנטים מוכנים</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {gradientPresets.map(preset => (
                      <Button
                        key={preset.value}
                        type="button"
                        size="sm"
                        style={{
                          background: `linear-gradient(90deg, ${preset.from}, ${preset.to})`,
                          color: "#fff",
                          border: value === preset.value ? "2px solid #333" : undefined,
                        }}
                        onClick={() => onChange(preset.value)}
                      >
                        {preset.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="w-6 h-6 rounded-full border ml-2" style={{ background: value }} />
      </div>
    </div>
  );
};

const ContentElementsEditor: React.FC<ContentElementsEditorProps> = ({
  content,
  onContentChange,
  formData,
}) => {
  // דוגמה לעריכה של כותרת+צבע
  const handleHeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onContentChange({ ...content, headline: e.target.value });
  };
  const handleHeadlineColorChange = (color: string) => {
    onContentChange({ ...content, headlineColor: color });
  };

  // ניתן להרחיב לכל האלמנטים הנדרשים

  return (
    <Card className="w-full bg-white/90 shadow-lg p-4">
      <CardHeader>
        <CardTitle>עריכת תוכן</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Label>כותרת ראשית</Label>
          <Input
            value={content.headline || ""}
            onChange={handleHeadlineChange}
            placeholder="לדוג' העסק המוביל בישראל"
          />
          <ColorPicker
            value={content.headlineColor || "#3b82f6"}
            onChange={handleHeadlineColorChange}
            label="צבע כותרת ראשית"
          />
        </div>
        {/* המשך עריכה לשדות נוספים */}
      </CardContent>
    </Card>
  );
};

export default ContentElementsEditor;