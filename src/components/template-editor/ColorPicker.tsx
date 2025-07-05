
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Palette, RotateCcw } from 'lucide-react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  presetColors?: string[];
}

export const ColorPicker = ({ label, value, onChange, presetColors }: ColorPickerProps) => {
  const defaultPresets = [
    '#1e40af', '#dc2626', '#059669', '#7c3aed', '#ea580c', 
    '#0891b2', '#be123c', '#4338ca', '#059669', '#c2410c'
  ];

  const colors = presetColors || defaultPresets;

  return (
    <div className="space-y-3">
      <Label className="text-white text-sm font-medium">{label}</Label>
      
      {/* Current color display and input */}
      <div className="flex items-center gap-2">
        <div 
          className="w-8 h-8 rounded border border-gray-600 cursor-pointer shadow-inner"
          style={{ backgroundColor: value }}
          onClick={() => document.getElementById(`color-input-${label}`)?.click()}
        />
        <Input
          id={`color-input-${label}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white flex-1 text-xs"
          placeholder="#000000"
          dir="ltr"
        />
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="sr-only"
          id={`color-picker-${label}`}
        />
        <Button
          size="sm"
          variant="outline"
          className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 px-2"
          onClick={() => document.getElementById(`color-picker-${label}`)?.click()}
        >
          <Palette className="w-3 h-3" />
        </Button>
      </div>

      {/* Preset colors */}
      <div className="grid grid-cols-5 gap-1">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded border-2 transition-all hover:scale-110 ${
              value === color ? 'border-white ring-2 ring-blue-500' : 'border-gray-600'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onChange(color)}
            title={color}
          />
        ))}
      </div>
    </div>
  );
};
