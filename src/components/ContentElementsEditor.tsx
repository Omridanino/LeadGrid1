
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Eye, EyeOff, Plus, Trash2, Palette } from "lucide-react";

interface ContentElementsEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData?: any;
}

// Color Picker Component
const ColorPicker = ({ value, onChange, label }: { value: string; onChange: (value: string) => void; label: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<'solid' | 'gradient'>('solid');
  const [gradientColors, setGradientColors] = useState({ from: '#3b82f6', to: '#1d4ed8' });
  const [solidColor, setSolidColor] = useState('#3b82f6');

  // Predefined gradient options
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
    { name: 'סגול טכנולוגי', from: '#7c3aed', to: '#3b82f6', value: 'gradient-purple-tech' },
  ];

  // Solid color presets
  const solidPresets = [
    { name: 'שחור', color: '#000000', value: 'black-text' },
    { name: 'לבן', color: '#ffffff', value: 'white-text' },
    { name: 'זהב', color: '#fbbf24', value: 'gold-text' },
    { name: 'כסף', color: '#d1d5db', value: 'silver-text' },
    { name: 'כחול', color: '#3b82f6', value: 'blue-text' },
    { name: 'ירוק', color: '#10b981', value: 'green-text' },
    { name: 'אדום', color: '#ef4444', value: 'red-text' },
    { name: 'סגול', color: '#a855f7', value: 'purple-text' },
    { name: 'ורוד', color: '#ec4899', value: 'pink-text' },
    { name: 'ציאן', color: '#06b6d4', value: 'cyan-text' },
  ];

  // Neon color presets
  const neonPresets = [
    { name: 'נאון כחול', color: '#3b82f6', value: 'neon-blue' },
    { name: 'נאון ירוק', color: '#10b981', value: 'neon-green' },
    { name: 'נאון סגול', color: '#a855f7', value: 'neon-purple' },
    { name: 'נאון ורוד', color: '#ec4899', value: 'neon-pink' },
  ];

  const handleSolidColorChange = (color: string, colorValue: string) => {
    setSolidColor(color);
    onChange(colorValue);
  };

  const handleGradientChange = (gradientValue: string) => {
    onChange(gradientValue);
  };

  const handleCustomSolidChange = (color: string) => {
    setSolidColor(color);
    onChange(`custom-${color}`);
  };

  const handleCustomGradientChange = () => {
    const customGradient = `custom-gradient-${gradientColors.from}-${gradientColors.to}`;
    onChange(customGradient);
  };

  return (
    <div className="space-y-2">
      <Label className="text-gray-300 text-sm mb-1 block">{label}</Label>
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="w-full bg-gray-800 border-gray-600 text-white justify-start"
        >
          <Palette className="w-4 h-4 ml-2" />
          בחר צבע
        </Button>
        
        {isOpen && (
          <div className="absolute top-12 left-0 right-0 bg-gray-800 border border-gray-600 rounded-lg p-4 z-50 max-h-96 overflow-y-auto">
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
                {/* Solid Color Presets */}
                <div>
                  <Label className="text-white text-sm mb-2 block">צבעים בסיסיים</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {solidPresets.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => handleSolidColorChange(preset.color, preset.value)}
                        className="w-8 h-8 rounded border border-gray-600 hover:scale-110 transition-transform"
                        style={{ backgroundColor: preset.color }}
                        title={preset.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Neon Colors */}
                <div>
                  <Label className="text-white text-sm mb-2 block">צבעי נאון</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {neonPresets.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => handleSolidColorChange(preset.color, preset.value)}
                        className="w-8 h-8 rounded border-2 border-white/30 hover:scale-110 transition-transform shadow-lg"
                        style={{ 
                          backgroundColor: preset.color,
                          boxShadow: `0 0 10px ${preset.color}80`
                        }}
                        title={preset.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Custom Color Picker */}
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
                {/* Gradient Presets */}
                <div>
                  <Label className="text-white text-sm mb-2 block">גרדיאנטים מוכנים</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {gradientPresets.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => handleGradientChange(preset.value)}
                        className="h-8 rounded border border-gray-600 hover:scale-105 transition-transform text-xs text-white"
                        style={{
                          background: `linear-gradient(to right, ${preset.from}, ${preset.to})`
                        }}
                        title={preset.name}
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Gradient */}
                <div>
                  <Label className="text-white text-sm mb-2 block">גרדיאנט מותאם אישית</Label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label className="text-gray-300 text-xs block mb-1">צבע התחלה</Label>
                        <input
                          type="color"
                          value={gradientColors.from}
                          onChange={(e) => setGradientColors(prev => ({ ...prev, from: e.target.value }))}
                          className="w-full h-8 rounded border border-gray-600 bg-gray-700"
                        />
                      </div>
                      <div className="flex-1">
                        <Label className="text-gray-300 text-xs block mb-1">צבע סיום</Label>
                        <input
                          type="color"
                          value={gradientColors.to}
                          onChange={(e) => setGradientColors(prev => ({ ...prev, to: e.target.value }))}
                          className="w-full h-8 rounded border border-gray-600 bg-gray-700"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={handleCustomGradientChange}
                      size="sm"
                      className="w-full"
                      style={{
                        background: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`
                      }}
                    >
                      החל גרדיאנט
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={() => setIsOpen(false)}
              size="sm"
              variant="outline"
              className="w-full mt-4"
            >
              סגור
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const ContentElementsEditor = ({ content, onContentChange, formData }: ContentElementsEditorProps) => {
  const [localContent, setLocalContent] = useState(content || {});

  useEffect(() => {
    if (content) {
      setLocalContent(content);
    }
  }, [content]);

  const backgroundOptions = [
    { value: "default", label: "ברירת מחדל" },
    { value: "dark", label: "כהה" },
    { value: "light", label: "בהיר" },
    { value: "gradient-blue", label: "גרדיאנט כחול" },
    { value: "gradient-purple", label: "גרדיאנט סגול" },
    { value: "gradient-green", label: "גרדיאנט ירוק" },
    { value: "gradient-orange", label: "גרדיאנט כתום" },
    { value: "gradient-pink", label: "גרדיאנט ורוד" },
    { value: "tech-dark", label: "טכנולוגי כהה" },
    { value: "minimal-light", label: "מינימליסטי בהיר" },
  ];

  const updateField = (field: string, value: any) => {
    const newContent = { ...localContent, [field]: value };
    setLocalContent(newContent);
    onContentChange(newContent);
  };

  const updateButton = (index: number, field: string, value: any) => {
    const buttons = [...(localContent.buttons || [])];
    if (!buttons[index]) {
      buttons[index] = { text: "", style: "default", textStyle: "default", visible: true };
    }
    buttons[index] = { ...buttons[index], [field]: value };
    updateField('buttons', buttons);
  };

  const addButton = () => {
    const buttons = [...(localContent.buttons || [])];
    buttons.push({ text: `כפתור ${buttons.length + 1}`, style: "default", textStyle: "default", visible: true });
    updateField('buttons', buttons);
  };

  const removeButton = (index: number) => {
    const buttons = [...(localContent.buttons || [])];
    buttons.splice(index, 1);
    updateField('buttons', buttons);
  };

  const toggleButtonVisibility = (index: number) => {
    const buttons = [...(localContent.buttons || [])];
    if (buttons[index]) {
      buttons[index].visible = !buttons[index].visible;
      updateField('buttons', buttons);
    }
  };

  // Initialize buttons if they don't exist
  if (!localContent.buttons || localContent.buttons.length === 0) {
    updateField('buttons', [
      { text: "התחל עכשיו", style: "default", textStyle: "default", visible: true }
    ]);
  }

  return (
    <div className="space-y-6 text-right" dir="rtl">
      {/* Hero Section */}
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Badge className="w-5 h-5" />
            סקשן ראשי (Hero)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Badge */}
          <div>
            <Label className="text-white font-semibold mb-2 block">תג מעל הכותרת</Label>
            <Input
              value={localContent.badge || ''}
              onChange={(e) => updateField('badge', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="הכנס תג..."
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <ColorPicker
                value={localContent.badgeStyle || 'default'}
                onChange={(value) => updateField('badgeStyle', value)}
                label="סגנון תג"
              />
              <ColorPicker
                value={localContent.badgeTextStyle || 'default'}
                onChange={(value) => updateField('badgeTextStyle', value)}
                label="צבע טקסט תג"
              />
            </div>
          </div>

          {/* Main Headline */}
          <div>
            <Label className="text-white font-semibold mb-2 block">כותרת ראשית</Label>
            <Input
              value={localContent.headline || ''}
              onChange={(e) => updateField('headline', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              placeholder="הכנס כותרת ראשית..."
            />
            <div className="mt-2">
              <ColorPicker
                value={localContent.headlineStyle || 'default'}
                onChange={(value) => updateField('headlineStyle', value)}
                label="צבע כותרת ראשית"
              />
            </div>
          </div>

          {/* Subheadline */}
          <div>
            <Label className="text-white font-semibold mb-2 block">כותרת משנה</Label>
            <Textarea
              value={localContent.subheadline || ''}
              onChange={(e) => updateField('subheadline', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              rows={3}
              placeholder="הכנס כותרת משנה..."
            />
            <div className="mt-2">
              <ColorPicker
                value={localContent.subheadlineStyle || 'default'}
                onChange={(value) => updateField('subheadlineStyle', value)}
                label="צבע כותרת משנה"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label className="text-white font-semibold mb-2 block">תיאור</Label>
            <Textarea
              value={localContent.description || ''}
              onChange={(e) => updateField('description', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
              rows={3}
              placeholder="הכנס תיאור..."
            />
            <div className="mt-2">
              <ColorPicker
                value={localContent.descriptionStyle || 'default'}
                onChange={(value) => updateField('descriptionStyle', value)}
                label="צבע תיאור"
              />
            </div>
          </div>

          {/* Background Style */}
          <div>
            <Label className="text-white font-semibold mb-2 block">סגנון רקע</Label>
            <Select value={localContent.backgroundStyle || 'default'} onValueChange={(value) => updateField('backgroundStyle', value)}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {backgroundOptions.map(option => (
                  <SelectItem key={option.value} value={option.value} className="text-white">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Buttons */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <Label className="text-white font-semibold">כפתורים</Label>
              <Button
                onClick={addButton}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 ml-1" />
                הוסף כפתור
              </Button>
            </div>
            
            <div className="space-y-3">
              {(localContent.buttons || []).map((button: any, index: number) => (
                <Card key={index} className="bg-gray-800 border-gray-600">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Label className="text-white text-sm">כפתור {index + 1}</Label>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => toggleButtonVisibility(index)}
                          size="sm"
                          variant={button.visible !== false ? "default" : "outline"}
                          className="p-2"
                        >
                          {button.visible !== false ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </Button>
                        <Button
                          onClick={() => removeButton(index)}
                          size="sm"
                          variant="destructive"
                          className="p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <Label className="text-gray-300 text-sm mb-1 block">טקסט כפתור</Label>
                        <Input
                          value={button.text || ''}
                          onChange={(e) => updateButton(index, 'text', e.target.value)}
                          className="bg-gray-700 border-gray-600 text-white"
                          placeholder="הכנס טקסט כפתור..."
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <ColorPicker
                          value={button.style || 'default'}
                          onChange={(value) => updateButton(index, 'style', value)}
                          label="סגנון כפתור"
                        />
                        <ColorPicker
                          value={button.textStyle || 'default'}
                          onChange={(value) => updateButton(index, 'textStyle', value)}
                          label="צבע טקסט כפתור"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentElementsEditor;
