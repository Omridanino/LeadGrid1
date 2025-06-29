
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Edit3, 
  Type, 
  MousePointer, 
  Tag, 
  Plus, 
  Trash2,
  Eye,
  EyeOff,
  Save,
  Palette
} from "lucide-react";

interface ContentElementsEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData: any;
}

const ContentElementsEditor = ({ content, onContentChange, formData }: ContentElementsEditorProps) => {
  const [localContent, setLocalContent] = useState(content || {});

  // Update local content when prop changes
  useEffect(() => {
    if (content) {
      setLocalContent(content);
    }
  }, [content]);

  const handleContentUpdate = (newContent: any) => {
    console.log('Updating content:', newContent);
    setLocalContent(newContent);
    // עדכון מיידי בתצוגה המקדימה
    onContentChange(newContent);
    // שמירה אוטומטית בlocalStorage
    localStorage.setItem('generatedContent', JSON.stringify(newContent));
  };

  const handleTextChange = (field: string, value: string) => {
    const newContent = {
      ...localContent,
      [field]: value
    };
    handleContentUpdate(newContent);
  };

  const handleStyleChange = (field: string, value: string) => {
    const newContent = {
      ...localContent,
      [`${field}Style`]: value
    };
    handleContentUpdate(newContent);
  };

  const handleBackgroundChange = (value: string) => {
    const newContent = {
      ...localContent,
      backgroundStyle: value
    };
    handleContentUpdate(newContent);
  };

  const handleAccentColorChange = (value: string) => {
    const newContent = {
      ...localContent,
      accentColor: value
    };
    console.log('Accent color changed to:', value);
    handleContentUpdate(newContent);
  };

  const handleButtonChange = (index: number, field: string, value: string) => {
    const buttons = [...(localContent.buttons || [])];
    if (buttons[index]) {
      buttons[index] = { ...buttons[index], [field]: value };
    }
    const newContent = {
      ...localContent,
      buttons
    };
    handleContentUpdate(newContent);
  };

  const addButton = () => {
    const buttons = [...(localContent.buttons || [])];
    buttons.push({
      text: "כפתור חדש",
      variant: "primary",
      style: "default",
      textStyle: "default",
      visible: true
    });
    const newContent = {
      ...localContent,
      buttons
    };
    handleContentUpdate(newContent);
  };

  const removeButton = (index: number) => {
    const buttons = [...(localContent.buttons || [])];
    buttons.splice(index, 1);
    const newContent = {
      ...localContent,
      buttons
    };
    handleContentUpdate(newContent);
  };

  const toggleButtonVisibility = (index: number) => {
    const buttons = [...(localContent.buttons || [])];
    if (buttons[index]) {
      buttons[index].visible = !buttons[index].visible;
    }
    const newContent = {
      ...localContent,
      buttons
    };
    handleContentUpdate(newContent);
  };

  // Enhanced text styling options for all elements
  const getTextStyleClasses = (style: string) => {
    switch (style) {
      case "black-text": return "text-black";
      case "white-text": return "text-white";
      case "gold-text": return "text-yellow-400";
      case "silver-text": return "text-gray-300";
      case "blue-text": return "text-blue-400";
      case "green-text": return "text-green-400";
      case "red-text": return "text-red-400";
      case "purple-text": return "text-purple-400";
      case "pink-text": return "text-pink-400";
      case "cyan-text": return "text-cyan-400";
      case "gradient-gold-text": return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
      case "gradient-purple-text": return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
      case "gradient-blue-text": return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
      case "gradient-green-text": return "bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent";
      case "gradient-red-text": return "bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent";
      case "gradient-cyan-text": return "bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent";
      case "gradient-rainbow-text": return "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent";
      default: return "text-white";
    }
  };

  // Enhanced button and tag styling options
  const getButtonStyleClasses = (style: string) => {
    switch (style) {
      case "black-on-white": return "bg-white text-black border border-black";
      case "white-on-black": return "bg-black text-white border border-white";
      case "gradient-gold-black": return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
      case "gradient-gold-white": return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
      case "gradient-purple-tech": return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-0";
      case "gradient-blue-ocean": return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
      case "gradient-green-nature": return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
      case "gradient-red-fire": return "bg-gradient-to-r from-red-500 to-orange-500 text-white border-0";
      case "gradient-pink-sunset": return "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0";
      case "neon-blue": return "bg-blue-600 text-white border-2 border-blue-400 shadow-lg shadow-blue-400/50";
      case "neon-green": return "bg-green-600 text-white border-2 border-green-400 shadow-lg shadow-green-400/50";
      case "neon-purple": return "bg-purple-600 text-white border-2 border-purple-400 shadow-lg shadow-purple-400/50";
      case "neon-pink": return "bg-pink-600 text-white border-2 border-pink-400 shadow-lg shadow-pink-400/50";
      case "glass-dark": return "bg-black/20 text-white border border-white/30 backdrop-blur-sm";
      case "glass-light": return "bg-white/20 text-black border border-black/30 backdrop-blur-sm";
      default: return "bg-blue-600 text-white";
    }
  };

  const TextStyleSelector = ({ value, onChange, label }: { value: string, onChange: (value: string) => void, label: string }) => (
    <div className="space-y-2">
      <Label className="text-white text-xs">{label}</Label>
      <select
        value={value || 'white-text'}
        onChange={(e) => {
          console.log(`${label} color changed to:`, e.target.value);
          onChange(e.target.value);
        }}
        className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-xs"
      >
        <option value="white-text">לבן</option>
        <option value="black-text">שחור</option>
        <option value="gold-text">זהב</option>
        <option value="silver-text">כסף</option>
        <option value="blue-text">כחול</option>
        <option value="green-text">ירוק</option>
        <option value="red-text">אדום</option>
        <option value="purple-text">סגול</option>
        <option value="pink-text">ורוד</option>
        <option value="cyan-text">ציאן</option>
        <option value="gradient-gold-text">גרדיאנט זהב</option>
        <option value="gradient-purple-text">גרדיאנט סגול</option>
        <option value="gradient-blue-text">גרדיאנט כחול</option>
        <option value="gradient-green-text">גרדיאנט ירוק</option>
        <option value="gradient-red-text">גרדיאנט אדום</option>
        <option value="gradient-cyan-text">גרדיאנט ציאן</option>
        <option value="gradient-rainbow-text">גרדיאנט קשת</option>
      </select>
      <div className="mt-1 bg-gray-800 p-2 rounded">
        <div className={`text-sm ${getTextStyleClasses(value || 'white-text')}`}>
          תצוגה מקדימה
        </div>
      </div>
    </div>
  );

  const ButtonStyleSelector = ({ value, onChange, label }: { value: string, onChange: (value: string) => void, label: string }) => (
    <div className="space-y-2">
      <Label className="text-white text-xs">{label}</Label>
      <select
        value={value || 'default'}
        onChange={(e) => {
          console.log(`${label} style changed to:`, e.target.value);
          onChange(e.target.value);
        }}
        className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-xs"
      >
        <option value="default">ברירת מחדל</option>
        <option value="black-on-white">שחור על לבן</option>
        <option value="white-on-black">לבן על שחור</option>
        <option value="gradient-gold-black">גרדיאנט זהב-שחור</option>
        <option value="gradient-gold-white">גרדיאנט זהב-לבן</option>
        <option value="gradient-purple-tech">גרדיאנט סגול טכנולוגי</option>
        <option value="gradient-blue-ocean">גרדיאנט כחול אוקיינוס</option>
        <option value="gradient-green-nature">גרדיאנט ירוק טבע</option>
        <option value="gradient-red-fire">גרדיאנט אדום אש</option>
        <option value="gradient-pink-sunset">גרדיאנט ורוד שקיעה</option>
        <option value="neon-blue">נאון כחול</option>
        <option value="neon-green">נאון ירוק</option>
        <option value="neon-purple">נאון סגול</option>
        <option value="neon-pink">נאון ורוד</option>
        <option value="glass-dark">זכוכית כהה</option>
        <option value="glass-light">זכוכית בהירה</option>
      </select>
      <div className="mt-1">
        <div className={`px-3 py-1 rounded text-xs ${getButtonStyleClasses(value || 'default')}`}>
          תצוגה מקדימה
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Badge/Tag Editor - Enhanced */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Tag className="w-4 h-4 text-yellow-400" />
            תג עליון
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-white text-xs mb-2 block">טקסט התג</Label>
            <Input
              value={localContent.badge || ''}
              onChange={(e) => handleTextChange('badge', e.target.value)}
              placeholder="טקסט התג העליון"
              className="bg-gray-700 border-gray-600 text-white text-right"
            />
          </div>
          <ButtonStyleSelector 
            value={localContent.badgeStyle} 
            onChange={(value) => handleStyleChange('badge', value)} 
            label="סגנון תג"
          />
          <TextStyleSelector 
            value={localContent.badgeTextStyle} 
            onChange={(value) => handleStyleChange('badgeText', value)} 
            label="צבע טקסט התג"
          />
        </CardContent>
      </Card>

      {/* Main Title Editor - Enhanced */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Type className="w-4 h-4 text-blue-400" />
            כותרת ראשית
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-white text-xs mb-2 block">טקסט הכותרת</Label>
            <Textarea
              value={localContent.headline || formData?.businessName || ''}
              onChange={(e) => handleTextChange('headline', e.target.value)}
              placeholder="הכותרת הראשית של הדף"
              className="bg-gray-700 border-gray-600 text-white text-right"
              rows={2}
            />
          </div>
          <TextStyleSelector 
            value={localContent.headlineStyle} 
            onChange={(value) => handleStyleChange('headline', value)} 
            label="סגנון כותרת"
          />
        </CardContent>
      </Card>

      {/* Subtitle Editor - Enhanced */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Type className="w-4 h-4 text-green-400" />
            כותרת משנה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-white text-xs mb-2 block">טקסט כותרת המשנה</Label>
            <Textarea
              value={localContent.subheadline || ''}
              onChange={(e) => handleTextChange('subheadline', e.target.value)}
              placeholder="כותרת המשנה או התיאור"
              className="bg-gray-700 border-gray-600 text-white text-right"
              rows={3}
            />
          </div>
          <TextStyleSelector 
            value={localContent.subheadlineStyle} 
            onChange={(value) => handleStyleChange('subheadline', value)} 
            label="סגנון כותרת משנה"
          />
        </CardContent>
      </Card>

      {/* Description Editor - New */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Type className="w-4 h-4 text-purple-400" />
            תיאור נוסף
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-white text-xs mb-2 block">טקסט התיאור</Label>
            <Textarea
              value={localContent.description || ''}
              onChange={(e) => handleTextChange('description', e.target.value)}
              placeholder="תיאור נוסף או מידע משלים"
              className="bg-gray-700 border-gray-600 text-white text-right"
              rows={3}
            />
          </div>
          <TextStyleSelector 
            value={localContent.descriptionStyle} 
            onChange={(value) => handleStyleChange('description', value)} 
            label="סגנון תיאור"
          />
        </CardContent>
      </Card>

      {/* Buttons Editor - Enhanced */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <MousePointer className="w-4 h-4 text-red-400" />
            כפתורים
            <Badge variant="secondary" className="mr-auto">
              {(localContent.buttons || []).length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {(localContent.buttons || []).map((button: any, index: number) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg border border-gray-600">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-medium">כפתור {index + 1}</span>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => toggleButtonVisibility(index)}
                    className="h-6 w-6 p-0 text-gray-400 hover:text-white"
                  >
                    {button.visible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeButton(index)}
                    className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-white text-xs mb-1 block">טקסט הכפתור</Label>
                  <Input
                    value={button.text || ''}
                    onChange={(e) => handleButtonChange(index, 'text', e.target.value)}
                    placeholder="טקסט הכפתור"
                    className="bg-gray-600 border-gray-500 text-white text-right"
                  />
                </div>
                
                <ButtonStyleSelector 
                  value={button.style} 
                  onChange={(value) => handleButtonChange(index, 'style', value)} 
                  label="סגנון הכפתור"
                />

                <div>
                  <Label className="text-white text-xs mb-1 block">צבע טקסט הכפתור</Label>
                  <select
                    value={button.textStyle || 'default'}
                    onChange={(e) => handleButtonChange(index, 'textStyle', e.target.value)}
                    className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-xs"
                  >
                    <option value="default">ברירת מחדל</option>
                    <option value="white-text">לבן</option>
                    <option value="black-text">שחור</option>
                    <option value="gold-text">זהב</option>
                    <option value="silver-text">כסף</option>
                    <option value="blue-text">כחול</option>
                    <option value="green-text">ירוק</option>
                    <option value="red-text">אדום</option>
                    <option value="purple-text">סגול</option>
                  </select>
                </div>

                {/* Button Preview */}
                <div className="mt-3">
                  <Label className="text-white text-xs mb-1 block">תצוגה מקדימה:</Label>
                  <button className={`px-4 py-2 rounded text-sm ${getButtonStyleClasses(button.style || 'default')} ${button.textStyle && button.textStyle !== 'default' ? getTextStyleClasses(button.textStyle) : ''}`}>
                    {button.text || 'תצוגה מקדימה'}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <Button
            onClick={addButton}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-4 h-4 ml-1" />
            הוסף כפתור
          </Button>
        </CardContent>
      </Card>

      {/* Background & Theme Colors - Enhanced */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Palette className="w-4 h-4 text-cyan-400" />
            רקע וצבעי נושא
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label className="text-white text-xs mb-2 block">צבע רקע ראשי</Label>
            <select
              value={localContent.backgroundStyle || 'default'}
              onChange={(e) => {
                console.log('Background style changed to:', e.target.value);
                handleBackgroundChange(e.target.value);
              }}
              className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-xs"
            >
              <option value="default">ברירת מחדל</option>
              <option value="dark">כהה</option>
              <option value="light">בהיר</option>
              <option value="gradient-blue">גרדיאנט כחול</option>
              <option value="gradient-purple">גרדיאנט סגול</option>
              <option value="gradient-green">גרדיאנט ירוק</option>
              <option value="gradient-orange">גרדיאנט כתום</option>
              <option value="gradient-pink">גרדיאנט ורוד</option>
              <option value="tech-dark">טכנולוגי כהה</option>
              <option value="minimal-light">מינימלי בהיר</option>
            </select>
          </div>
          
          <div>
            <Label className="text-white text-xs mb-2 block">צבע אקסנט ראשי</Label>
            <select
              value={localContent.accentColor || 'blue'}
              onChange={(e) => {
                console.log('Main accent color changed to:', e.target.value);
                handleAccentColorChange(e.target.value);
              }}
              className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-xs"
            >
              <option value="blue">כחול</option>
              <option value="purple">סגול</option>
              <option value="green">ירוק</option>
              <option value="red">אדום</option>
              <option value="orange">כתום</option>
              <option value="pink">ורוד</option>
              <option value="cyan">ציאן</option>
              <option value="yellow">צהוב</option>
              <option value="gold">זהב</option>
              <option value="silver">כסף</option>
            </select>
            <div className="mt-2">
              <div className="text-xs text-gray-400 mb-1">תצוגה מקדימה של צבע האקסנט:</div>
              <div className="flex gap-2">
                <div className={`w-6 h-6 rounded ${localContent.accentColor === 'blue' ? 'bg-blue-400' : localContent.accentColor === 'purple' ? 'bg-purple-400' : localContent.accentColor === 'green' ? 'bg-green-400' : localContent.accentColor === 'red' ? 'bg-red-400' : localContent.accentColor === 'orange' ? 'bg-orange-400' : localContent.accentColor === 'pink' ? 'bg-pink-400' : localContent.accentColor === 'cyan' ? 'bg-cyan-400' : localContent.accentColor === 'yellow' ? 'bg-yellow-400' : localContent.accentColor === 'gold' ? 'bg-yellow-400' : localContent.accentColor === 'silver' ? 'bg-gray-300' : 'bg-blue-400'}`}></div>
                <span className="text-xs text-gray-300">צבע {localContent.accentColor || 'כחול'}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentElementsEditor;
