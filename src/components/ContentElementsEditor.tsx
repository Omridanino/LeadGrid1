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

const ContentElementsEditor = ({ content, onContentChange, formData }: ContentElementsEditorProps) => {
  const [localContent, setLocalContent] = useState(content || {});

  useEffect(() => {
    if (content) {
      setLocalContent(content);
    }
  }, [content]);

  // COMPLETE color options - ALL colors that are supported in the hero components
  const colorOptions = [
    { value: "default", label: "ברירת מחדל" },
    // Basic colors - Hebrew and English
    { value: "black-text", label: "שחור" },
    { value: "שחור", label: "שחור" },
    { value: "white-text", label: "לבן" },
    { value: "לבן", label: "לבן" },
    { value: "gold-text", label: "זהב" },
    { value: "זהב", label: "זהב" },
    { value: "silver-text", label: "כסף" },
    { value: "כסף", label: "כסף" },
    { value: "blue-text", label: "כחול" },
    { value: "כחול", label: "כחול" },
    { value: "green-text", label: "ירוק" },
    { value: "ירוק", label: "ירוק" },
    { value: "red-text", label: "אדום" },
    { value: "אדום", label: "אדום" },
    { value: "purple-text", label: "סגול" },
    { value: "סגול", label: "סגול" },
    { value: "pink-text", label: "ורוד" },
    { value: "ורוד", label: "ורוד" },
    { value: "cyan-text", label: "ציאן" },
    { value: "ציאן", label: "ציאן" },
    // Gradient colors - Hebrew and English
    { value: "gradient-gold-text", label: "גרדיאנט זהב" },
    { value: "גרדיאנט זהב", label: "גרדיאנט זהב" },
    { value: "gradient-purple-text", label: "גרדיאנט סגול" },
    { value: "גרדיאנט סגול", label: "גרדיאנט סגול" },
    { value: "gradient-blue-text", label: "גרדיאנט כחול" },
    { value: "גרדיאנט כחול", label: "גרדיאנט כחול" },
    { value: "gradient-green-text", label: "גרדיאנט ירוק" },
    { value: "גרדיאנט ירוק", label: "גרדיאנט ירוק" },
    { value: "gradient-red-text", label: "גרדיאנט אדום" },
    { value: "גרדיאנט אדום", label: "גרדיאנט אדום" },
    { value: "gradient-cyan-text", label: "גרדיאנט ציאן" },
    { value: "גרדיאנט ציאן", label: "גרדיאנט ציאן" },
    { value: "gradient-rainbow-text", label: "גרדיאנט קשת" },
    { value: "גרדיאנט קשת", label: "גרדיאנט קשת" },
    { value: "gradient-blue-ocean", label: "גרדיאנט כחול אוקיינוס" },
    { value: "גרדיאנט כחול אוקיינוס", label: "גרדיאנט כחול אוקיינוס" },
    { value: "gradient-green-nature", label: "גרדיאנט ירוק טבע" },
    { value: "גרדיאנט ירוק טבע", label: "גרדיאנט ירוק טבע" },
    { value: "gradient-red-fire", label: "גרדיאנט אדום אש" },
    { value: "גרדיאנט אדום אש", label: "גרדיאנט אדום אש" },
    { value: "gradient-pink-sunset", label: "גרדיאנט ורוד שקיעה" },
    { value: "גרדיאנט ורוד שקיעה", label: "גרדיאנט ורוד שקיעה" },
    { value: "gradient-gold-black", label: "גרדיאנט זהב-שחור" },
    { value: "גרדיאנט זהב-שחור", label: "גרדיאנט זהב-שחור" },
    { value: "gradient-gold-white", label: "גרדיאנט זהב-לבן" },
    { value: "גרדיאנט זהב-לבן", label: "גרדיאנט זהב-לבן" },
    { value: "gradient-purple-tech", label: "גרדיאנט סגול טכנולוגי" },
    { value: "גרדיאנט סגול טכנולוגי", label: "גרדיאנט סגול טכנולוגי" },
    // Neon colors - Hebrew and English
    { value: "neon-blue", label: "נאון כחול" },
    { value: "נאון כחול", label: "נאון כחול" },
    { value: "neon-green", label: "נאון ירוק" },
    { value: "נאון ירוק", label: "נאון ירוק" },
    { value: "neon-purple", label: "נאון סגול" },
    { value: "נאון סגול", label: "נאון סגול" },
    { value: "neon-pink", label: "נאון ורוד" },
    { value: "נאון ורוד", label: "נאון ורוד" },
  ];

  // COMPLETE button color options - ALL styles that are supported in the hero components
  const buttonColorOptions = [
    { value: "default", label: "ברירת מחדל" },
    // Basic button styles - Hebrew and English
    { value: "black-on-white", label: "שחור על לבן" },
    { value: "שחור על לבן", label: "שחור על לבן" },
    { value: "white-on-black", label: "לבן על שחור" },
    { value: "לבן על שחור", label: "לבן על שחור" },
    { value: "gradient-gold-black", label: "גרדיאנט זהב-שחור" },
    { value: "גרדיאנט זהב-שחור", label: "גרדיאנט זהב-שחור" },
    { value: "gradient-gold-white", label: "גרדיאנט זהב-לבן" },
    { value: "גרדיאנט זהב-לבן", label: "גרדיאנט זהב-לבן" },
    { value: "gradient-purple-tech", label: "גרדיאנט סגול טכנולוגי" },
    { value: "גרדיאנט סגול טכנולוגי", label: "גרדיאנט סגול טכנולוגי" },
    { value: "gradient-blue-ocean", label: "גרדיאנט כחול אוקיינוס" },
    { value: "גרדיאנט כחול אוקיינוס", label: "גרדיאנט כחול אוקיינוס" },
    { value: "gradient-green-nature", label: "גרדיאנט ירוק טבע" },
    { value: "גרדיאנט ירוק טבע", label: "גרדיאנט ירוק טבע" },
    { value: "gradient-red-fire", label: "גרדיאנט אדום אש" },
    { value: "גרדיאנט אדום אש", label: "גרדיאנט אדום אש" },
    { value: "gradient-pink-sunset", label: "גרדיאנט ורוד שקיעה" },
    { value: "גרדיאנט ורוד שקיעה", label: "גרדיאנט ורוד שקיעה" },
    { value: "neon-blue", label: "נאון כחול" },
    { value: "נאון כחול", label: "נאון כחול" },
    { value: "neon-green", label: "נאון ירוק" },
    { value: "נאון ירוק", label: "נאון ירוק" },
    { value: "neon-purple", label: "נאון סגול" },
    { value: "נאון סגול", label: "נאון סגול" },
    { value: "neon-pink", label: "נאון ורוד" },
    { value: "נאון ורוד", label: "נאון ורוד" },
    { value: "glass-dark", label: "זכוכית כהה" },
    { value: "זכוכית כהה", label: "זכוכית כהה" },
    { value: "glass-light", label: "זכוכית בהירה" },
    { value: "זכוכית בהירה", label: "זכוכית בהירה" },
  ];

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
              <div>
                <Label className="text-gray-300 text-sm mb-1 block">סגנון תג</Label>
                <Select value={localContent.badgeStyle || 'default'} onValueChange={(value) => updateField('badgeStyle', value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {buttonColorOptions.map(option => (
                      <SelectItem key={option.value} value={option.value} className="text-white">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-gray-300 text-sm mb-1 block">צבע טקסט תג</Label>
                <Select value={localContent.badgeTextStyle || 'default'} onValueChange={(value) => updateField('badgeTextStyle', value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {colorOptions.map(option => (
                      <SelectItem key={option.value} value={option.value} className="text-white">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
              <Label className="text-gray-300 text-sm mb-1 block">צבע כותרת ראשית</Label>
              <Select value={localContent.headlineStyle || 'default'} onValueChange={(value) => updateField('headlineStyle', value)}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {colorOptions.map(option => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              <Label className="text-gray-300 text-sm mb-1 block">צבע כותרת משנה</Label>
              <Select value={localContent.subheadlineStyle || 'default'} onValueChange={(value) => updateField('subheadlineStyle', value)}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {colorOptions.map(option => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              <Label className="text-gray-300 text-sm mb-1 block">צבע תיאור</Label>
              <Select value={localContent.descriptionStyle || 'default'} onValueChange={(value) => updateField('descriptionStyle', value)}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {colorOptions.map(option => (
                    <SelectItem key={option.value} value={option.value} className="text-white">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                        <div>
                          <Label className="text-gray-300 text-sm mb-1 block">סגנון כפתור</Label>
                          <Select value={button.style || 'default'} onValueChange={(value) => updateButton(index, 'style', value)}>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              {buttonColorOptions.map(option => (
                                <SelectItem key={option.value} value={option.value} className="text-white">
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-gray-300 text-sm mb-1 block">צבע טקסט כפתור</Label>
                          <Select value={button.textStyle || 'default'} onValueChange={(value) => updateButton(index, 'textStyle', value)}>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              {colorOptions.map(option => (
                                <SelectItem key={option.value} value={option.value} className="text-white">
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
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
