
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Palette, X } from "lucide-react";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const ColorPicker = ({ value, onChange, label }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<'solid' | 'gradient'>('solid');
  const [solidColor, setSolidColor] = useState('#3b82f6');
  const [gradientFrom, setGradientFrom] = useState('#3b82f6');
  const [gradientTo, setGradientTo] = useState('#1d4ed8');

  const solidPresets = [
    { name: 'שחור', color: '#000000' },
    { name: 'לבן', color: '#ffffff' },
    { name: 'אפור', color: '#6b7280' },
    { name: 'כחול', color: '#3b82f6' },
    { name: 'ירוק', color: '#10b981' },
    { name: 'אדום', color: '#ef4444' },
    { name: 'סגול', color: '#a855f7' },
    { name: 'ורוד', color: '#ec4899' },
    { name: 'צהוב', color: '#eab308' },
    { name: 'כתום', color: '#f97316' },
  ];

  const gradientPresets = [
    { name: 'כחול-סגול', from: '#3b82f6', to: '#a855f7' },
    { name: 'ירוק-כחול', from: '#10b981', to: '#3b82f6' },
    { name: 'אדום-ורוד', from: '#ef4444', to: '#ec4899' },
    { name: 'זהב-כתום', from: '#eab308', to: '#f97316' },
    { name: 'סגול-ורוד', from: '#a855f7', to: '#ec4899' },
    { name: 'ציאן-כחול', from: '#06b6d4', to: '#3b82f6' },
  ];

  const handleSolidColorSelect = (color: string) => {
    setSolidColor(color);
    onChange(`solid:${color}`);
  };

  const handleGradientSelect = (from: string, to: string) => {
    setGradientFrom(from);
    setGradientTo(to);
    onChange(`gradient:${from}-${to}`);
  };

  const handleCustomSolidChange = (color: string) => {
    setSolidColor(color);
    onChange(`solid:${color}`);
  };

  const handleCustomGradientApply = () => {
    onChange(`gradient:${gradientFrom}-${gradientTo}`);
  };

  const getDisplayStyle = () => {
    if (value.startsWith('solid:')) {
      const color = value.replace('solid:', '');
      return { backgroundColor: color };
    } else if (value.startsWith('gradient:')) {
      const colors = value.replace('gradient:', '').split('-');
      return { background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` };
    }
    return { backgroundColor: '#3b82f6' };
  };

  return (
    <div className="space-y-2">
      <Label className="text-gray-300 text-sm">{label}</Label>
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="w-full bg-gray-800 border-gray-600 text-white justify-start h-10"
        >
          <div
            className="w-4 h-4 rounded border border-gray-400 ml-2"
            style={getDisplayStyle()}
          />
          <Palette className="w-4 h-4 ml-2" />
          בחר צבע
        </Button>
        
        {isOpen && (
          <div className="absolute top-12 left-0 right-0 bg-gray-800 border border-gray-600 rounded-lg p-4 z-50 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">בחירת צבע</h3>
              <Button
                onClick={() => setIsOpen(false)}
                size="sm"
                variant="ghost"
                className="p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Type Selection */}
            <div className="flex gap-2 mb-4">
              <Button
                size="sm"
                variant={selectedType === 'solid' ? 'default' : 'outline'}
                onClick={() => setSelectedType('solid')}
                className="flex-1"
              >
                צבע אחיד
              </Button>
              <Button
                size="sm"
                variant={selectedType === 'gradient' ? 'default' : 'outline'}
                onClick={() => setSelectedType('gradient')}
                className="flex-1"
              >
                גרדיאנט
              </Button>
            </div>

            {selectedType === 'solid' && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white text-sm mb-2 block">צבעים מוכנים</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {solidPresets.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => handleSolidColorSelect(preset.color)}
                        className="w-8 h-8 rounded border border-gray-600 hover:scale-110 transition-transform"
                        style={{ backgroundColor: preset.color }}
                        title={preset.name}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white text-sm mb-2 block">צבע מותאם אישית</Label>
                  <input
                    type="color"
                    value={solidColor}
                    onChange={(e) => handleCustomSolidChange(e.target.value)}
                    className="w-full h-10 rounded border border-gray-600 bg-gray-700"
                  />
                </div>
              </div>
            )}

            {selectedType === 'gradient' && (
              <div className="space-y-4">
                <div>
                  <Label className="text-white text-sm mb-2 block">גרדיאנטים מוכנים</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {gradientPresets.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => handleGradientSelect(preset.from, preset.to)}
                        className="h-8 rounded border border-gray-600 hover:scale-105 transition-transform text-xs text-white"
                        style={{
                          background: `linear-gradient(135deg, ${preset.from}, ${preset.to})`
                        }}
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white text-sm mb-2 block">גרדיאנט מותאם אישית</Label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label className="text-gray-300 text-xs block mb-1">מ</Label>
                        <input
                          type="color"
                          value={gradientFrom}
                          onChange={(e) => setGradientFrom(e.target.value)}
                          className="w-full h-8 rounded border border-gray-600 bg-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <Label className="text-gray-300 text-xs block mb-1">עד</Label>
                        <input
                          type="color"
                          value={gradientTo}
                          onChange={(e) => setGradientTo(e.target.value)}
                          className="w-full h-8 rounded border border-gray-600 bg-gray-700"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={handleCustomGradientApply}
                      size="sm"
                      className="w-full"
                      style={{
                        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                      }}
                    >
                      החל גרדיאנט
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
