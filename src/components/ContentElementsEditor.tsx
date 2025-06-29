
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Eye, EyeOff, Plus, Trash2, Palette, Save } from "lucide-react";

interface ContentElementsEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  onColorsChange?: (colors: any) => void;
  formData?: any;
}

const ContentElementsEditor = ({ content, onContentChange, onColorsChange, formData }: ContentElementsEditorProps) => {
  const [localContent, setLocalContent] = useState(content || {});
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

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
    
    // Mark as having unsaved changes if it's a color change
    if (field === 'colors') {
      setHasUnsavedChanges(true);
    }
  };

  const updateButton = (index: number, field: string, value: any) => {
    const buttons = [...(localContent.buttons || [])];
    if (!buttons[index]) {
      buttons[index] = { text: "", visible: true, color: "#3b82f6" };
    }
    buttons[index] = { ...buttons[index], [field]: value };
    updateField('buttons', buttons);
    
    // Mark as having unsaved changes if it's a button color change
    if (field === 'color') {
      setHasUnsavedChanges(true);
    }
  };

  const addButton = () => {
    const buttons = [...(localContent.buttons || [])];
    buttons.push({ text: `כפתור ${buttons.length + 1}`, visible: true, color: "#3b82f6" });
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

  const saveDesign = () => {
    if (onColorsChange && localContent.colors) {
      // Convert content colors to the ColorScheme format expected by the parent
      const colorScheme = {
        primary: "#3b82f6",
        secondary: "#8b5cf6", 
        accent: "#06b6d4",
        background: "#000000",
        heroBackground: "#000000",
        text: "#ffffff",
        headlineColor: localContent.colors.headline || "#ffffff",
        subheadlineColor: localContent.colors.subheadline || "#e0f2fe",
        featuresColor: "#ffffff",
        featuresTextColor: "#e5e7eb",
        aboutColor: "#ffffff",
        aboutTextColor: "#d1d5db",
        contactColor: "#ffffff",
        contactTextColor: "#d1d5db"
      };
      
      onColorsChange(colorScheme);
      setHasUnsavedChanges(false);
    }
  };

  // Initialize content with default colors if they don't exist
  useEffect(() => {
    if (localContent && !localContent.colors) {
      const defaultColors = {
        badge: "#8b5cf6",
        headline: "#ffffff", 
        subheadline: "#e0f2fe",
        description: "#d1d5db"
      };
      updateField('colors', defaultColors);
    }
    
    if (!localContent.buttons || localContent.buttons.length === 0) {
      updateField('buttons', [
        { text: "התחל עכשיו", visible: true, color: "#3b82f6" }
      ]);
    }
  }, []);

  return (
    <div className="space-y-6 text-right" dir="rtl">
      {/* Save Design Button */}
      {hasUnsavedChanges && (
        <div className="sticky top-0 z-10 bg-gray-900 p-4 border border-gray-700 rounded-lg">
          <Button
            onClick={saveDesign}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            <Save className="w-4 h-4 ml-2" />
            שמור עיצוב
          </Button>
          <p className="text-xs text-gray-400 mt-2 text-center">
            יש לך שינויי צבעים שלא נשמרו
          </p>
        </div>
      )}

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
            <div className="space-y-2">
              <Input
                value={localContent.badge || ''}
                onChange={(e) => updateField('badge', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="הכנס תג..."
              />
              <div className="flex items-center gap-2">
                <Label className="text-gray-300 text-sm">צבע התג:</Label>
                <input
                  type="color"
                  value={localContent.colors?.badge || "#8b5cf6"}
                  onChange={(e) => updateField('colors', { ...localContent.colors, badge: e.target.value })}
                  className="w-10 h-8 rounded border border-gray-600 bg-gray-800"
                />
                <span className="text-xs text-gray-400">{localContent.colors?.badge || "#8b5cf6"}</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div>
            <Label className="text-white font-semibold mb-2 block">כותרת ראשית</Label>
            <div className="space-y-2">
              <Input
                value={localContent.headline || ''}
                onChange={(e) => updateField('headline', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="הכנס כותרת ראשית..."
              />
              <div className="flex items-center gap-2">
                <Label className="text-gray-300 text-sm">צבע הכותרת:</Label>
                <input
                  type="color"
                  value={localContent.colors?.headline || "#ffffff"}
                  onChange={(e) => updateField('colors', { ...localContent.colors, headline: e.target.value })}
                  className="w-10 h-8 rounded border border-gray-600 bg-gray-800"
                />
                <span className="text-xs text-gray-400">{localContent.colors?.headline || "#ffffff"}</span>
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <div>
            <Label className="text-white font-semibold mb-2 block">כותרת משנה</Label>
            <div className="space-y-2">
              <Textarea
                value={localContent.subheadline || ''}
                onChange={(e) => updateField('subheadline', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                rows={3}
                placeholder="הכנס כותרת משנה..."
              />
              <div className="flex items-center gap-2">
                <Label className="text-gray-300 text-sm">צבע כותרת המשנה:</Label>
                <input
                  type="color"
                  value={localContent.colors?.subheadline || "#e0f2fe"}
                  onChange={(e) => updateField('colors', { ...localContent.colors, subheadline: e.target.value })}
                  className="w-10 h-8 rounded border border-gray-600 bg-gray-800"
                />
                <span className="text-xs text-gray-400">{localContent.colors?.subheadline || "#e0f2fe"}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <Label className="text-white font-semibold mb-2 block">תיאור</Label>
            <div className="space-y-2">
              <Textarea
                value={localContent.description || ''}
                onChange={(e) => updateField('description', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                rows={3}
                placeholder="הכנס תיאור..."
              />
              <div className="flex items-center gap-2">
                <Label className="text-gray-300 text-sm">צבע התיאור:</Label>
                <input
                  type="color"
                  value={localContent.colors?.description || "#d1d5db"}
                  onChange={(e) => updateField('colors', { ...localContent.colors, description: e.target.value })}
                  className="w-10 h-8 rounded border border-gray-600 bg-gray-800"
                />
                <span className="text-xs text-gray-400">{localContent.colors?.description || "#d1d5db"}</span>
              </div>
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
                      
                      <div>
                        <Label className="text-gray-300 text-sm mb-1 block">צבע הכפתור</Label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={button.color || "#3b82f6"}
                            onChange={(e) => updateButton(index, 'color', e.target.value)}
                            className="w-10 h-8 rounded border border-gray-600 bg-gray-700"
                          />
                          <span className="text-xs text-gray-400">{button.color || "#3b82f6"}</span>
                        </div>
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
