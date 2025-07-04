import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, Award, Star, AlertCircle } from "lucide-react";

interface ButtonStyleEditorProps {
  buttons: any[];
  onButtonsChange: (buttons: any[]) => void;
}

const ButtonStyleEditor = ({ buttons, onButtonsChange }: ButtonStyleEditorProps) => {
  const buttonStyleOptions = [
    { value: 'default', label: 'רגיל', preview: 'רגיל' },
    { value: 'liquid-glass', label: 'זכוכית נוזלית', preview: '✨ זכוכית נוזלית' },
    { value: 'metal-gold', label: 'מתכת זהב', preview: '🥇 זהב' },
    { value: 'metal-silver', label: 'מתכת כסף', preview: '🥈 כסף' },
    { value: 'metal-bronze', label: 'מתכת ברונזה', preview: '🥉 ברונזה' },
    { value: 'metal-primary', label: 'מתכת ראשי', preview: '💎 ראשי' },
    { value: 'metal-success', label: 'מתכת ירוק', preview: '✅ ירוק' },
    { value: 'metal-error', label: 'מתכת אדום', preview: '🔴 אדום' },
  ];

  const handleButtonChange = (buttonIndex: number, field: string, value: any) => {
    const updatedButtons = [...buttons];
    updatedButtons[buttonIndex] = {
      ...updatedButtons[buttonIndex],
      [field]: value
    };
    onButtonsChange(updatedButtons);
  };

  const addButton = () => {
    const newButton = {
      text: `כפתור ${buttons.length + 1}`,
      style: 'default',
      visible: true
    };
    onButtonsChange([...buttons, newButton]);
  };

  const removeButton = (index: number) => {
    const updatedButtons = buttons.filter((_, i) => i !== index);
    onButtonsChange(updatedButtons);
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Zap className="w-5 h-5" />
          עיצוב כפתורים
        </CardTitle>
        
        {/* הודעה על כפתורים שלא ניתנים לעריכה */}
        <div className="flex items-start gap-2 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-200">
            <span className="text-blue-300 font-medium">*</span> ישנם כפתורים בעיצובים מסוימים שלא ניתנים לעריכה והם מוגדרים מראש בתבנית העיצוב
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {buttons.map((button, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-white font-medium">כפתור {index + 1}</Label>
              {buttons.length > 1 && (
                <Button
                  onClick={() => removeButton(index)}
                  size="sm"
                  variant="destructive"
                  className="text-xs"
                >
                  הסר
                </Button>
              )}
            </div>
            
            <div className="grid gap-3">
              <div>
                <Label className="text-gray-300 text-sm">טקסט הכפתור</Label>
                <input
                  type="text"
                  value={button.text || ''}
                  onChange={(e) => handleButtonChange(index, 'text', e.target.value)}
                  className="w-full p-2 mt-1 bg-gray-600 text-white rounded border border-gray-500 focus:border-blue-500"
                  placeholder="הכנס טקסט לכפתור..."
                />
              </div>
              
              <div>
                <Label className="text-gray-300 text-sm">סגנון כפתור</Label>
                <Select
                  value={button.style || 'default'}
                  onValueChange={(value) => handleButtonChange(index, 'style', value)}
                >
                  <SelectTrigger className="w-full mt-1 bg-gray-600 text-white border-gray-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {buttonStyleOptions.map((style) => (
                      <SelectItem
                        key={style.value}
                        value={style.value}
                        className="text-white hover:bg-gray-600"
                      >
                        <span className="flex items-center gap-2">
                          {style.preview}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`visible-${index}`}
                  checked={button.visible !== false}
                  onChange={(e) => handleButtonChange(index, 'visible', e.target.checked)}
                  className="w-4 h-4"
                />
                <Label htmlFor={`visible-${index}`} className="text-gray-300 text-sm">
                  הצג כפתור
                </Label>
              </div>
            </div>
          </div>
        ))}
        
        <Button
          onClick={addButton}
          variant="default"
          className="w-full"
          size="sm"
        >
          <Star className="w-4 h-4 mr-2" />
          הוסף כפתור
        </Button>
      </CardContent>
    </Card>
  );
};

export default ButtonStyleEditor;
