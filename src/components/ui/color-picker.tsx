
import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Card, CardContent } from './card';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  className?: string;
}

const presetColors = [
  '#000000', '#ffffff', '#ef4444', '#f97316', '#f59e0b', '#eab308',
  '#84cc16', '#22c55e', '#10b981', '#06b6d4', '#0ea5e9', '#3b82f6',
  '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e'
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customColor, setCustomColor] = useState(color);

  const handlePresetClick = (presetColor: string) => {
    onChange(presetColor);
    setCustomColor(presetColor);
    setIsOpen(false);
  };

  const handleCustomColorChange = (newColor: string) => {
    setCustomColor(newColor);
    onChange(newColor);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-full h-8 p-1 justify-start ${className}`}
        >
          <div 
            className="w-6 h-6 rounded border border-gray-300 mr-2"
            style={{ backgroundColor: color }}
          />
          <span className="text-xs font-mono">{color}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="start">
        <Card>
          <CardContent className="p-3 space-y-3">
            {/* Color Input */}
            <div className="space-y-2">
              <label className="text-xs font-medium">צבע מותאם אישית</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => handleCustomColorChange(e.target.value)}
                  className="w-8 h-8 rounded border cursor-pointer"
                />
                <Input
                  value={customColor}
                  onChange={(e) => handleCustomColorChange(e.target.value)}
                  placeholder="#000000"
                  className="flex-1 text-xs"
                />
              </div>
            </div>

            {/* Preset Colors */}
            <div className="space-y-2">
              <label className="text-xs font-medium">צבעים מוגדרים מראש</label>
              <div className="grid grid-cols-6 gap-1">
                {presetColors.map((presetColor) => (
                  <button
                    key={presetColor}
                    className={`w-8 h-8 rounded border-2 cursor-pointer transition-all hover:scale-110 ${
                      color === presetColor ? 'border-primary ring-2 ring-primary/20' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: presetColor }}
                    onClick={() => handlePresetClick(presetColor)}
                    title={presetColor}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

