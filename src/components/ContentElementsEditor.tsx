import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Edit3, 
  Type, 
  Image as ImageIcon, 
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

  const handleSave = () => {
    onContentChange(localContent);
  };

  const handleTextChange = (field: string, value: string) => {
    setLocalContent({
      ...localContent,
      [field]: value
    });
  };

  const handleStyleChange = (field: string, value: string) => {
    setLocalContent({
      ...localContent,
      [`${field}Style`]: value
    });
  };

  const handleButtonChange = (index: number, field: string, value: string) => {
    const buttons = [...(localContent.buttons || [])];
    if (buttons[index]) {
      buttons[index] = { ...buttons[index], [field]: value };
    }
    setLocalContent({
      ...localContent,
      buttons
    });
  };

  const addButton = () => {
    const buttons = [...(localContent.buttons || [])];
    buttons.push({
      text: "כפתור חדש",
      variant: "primary",
      style: "black-on-white",
      visible: true
    });
    setLocalContent({
      ...localContent,
      buttons
    });
  };

  const removeButton = (index: number) => {
    const buttons = [...(localContent.buttons || [])];
    buttons.splice(index, 1);
    setLocalContent({
      ...localContent,
      buttons
    });
  };

  const toggleButtonVisibility = (index: number) => {
    const buttons = [...(localContent.buttons || [])];
    if (buttons[index]) {
      buttons[index].visible = !buttons[index].visible;
    }
    setLocalContent({
      ...localContent,
      buttons
    });
  };

  const addTextElement = () => {
    const elements = [...(localContent.elements || [])];
    elements.push({
      type: "text",
      content: "טקסט חדש",
      id: Date.now().toString()
    });
    setLocalContent({
      ...localContent,
      elements
    });
  };

  const addImageElement = () => {
    const elements = [...(localContent.elements || [])];
    elements.push({
      type: "image",
      src: "",
      alt: "תמונה חדשה",
      id: Date.now().toString()
    });
    setLocalContent({
      ...localContent,
      elements
    });
  };

  const addTagElement = () => {
    const elements = [...(localContent.elements || [])];
    elements.push({
      type: "tag",
      content: "תג חדש",
      id: Date.now().toString()
    });
    setLocalContent({
      ...localContent,
      elements
    });
  };

  // Fixed function for text styling - now returns text color classes only
  const getTextStyleClasses = (style: string) => {
    switch (style) {
      case "black-text":
        return "text-black";
      case "white-text":
        return "text-white";
      case "gold-text":
        return "text-yellow-400";
      case "gradient-gold-text":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent";
      case "gradient-purple-text":
        return "bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent";
      case "gradient-blue-text":
        return "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent";
      default:
        return "text-white";
    }
  };

  // Keep button styles as they were (for buttons we want backgrounds)
  const getButtonStyleClasses = (style: string) => {
    switch (style) {
      case "black-on-white":
        return "bg-white text-black border border-black";
      case "white-on-black":
        return "bg-black text-white border border-white";
      case "gradient-gold-black":
        return "bg-gradient-to-r from-yellow-400 to-black text-white border-0";
      case "gradient-gold-white":
        return "bg-gradient-to-r from-yellow-400 to-white text-black border-0";
      case "gradient-purple-tech":
        return "bg-gradient-to-r from-purple-600 to-white text-white border-0";
      default:
        return "bg-blue-600 text-white";
    }
  };

  const TextStyleSelector = ({ value, onChange, label }: { value: string, onChange: (value: string) => void, label: string }) => (
    <div className="space-y-2">
      <Label className="text-white text-xs">{label}</Label>
      <select
        value={value || 'white-text'}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-xs"
      >
        <option value="white-text">לבן</option>
        <option value="black-text">שחור</option>
        <option value="gold-text">זהב</option>
        <option value="gradient-gold-text">גרדיאנט זהב</option>
        <option value="gradient-purple-text">גרדיאנט סגול</option>
        <option value="gradient-blue-text">גרדיאנט כחול</option>
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
        value={value || 'black-on-white'}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-xs"
      >
        <option value="black-on-white">שחור על לבן</option>
        <option value="white-on-black">לבן על שחור</option>
        <option value="gradient-gold-black">גרדיאנט זהב-שחור</option>
        <option value="gradient-gold-white">גרדיאנט זהב-לבן</option>
        <option value="gradient-purple-tech">גרדיאנט סגול טכנולוגי</option>
      </select>
      <div className="mt-1">
        <div className={`px-3 py-1 rounded text-xs ${getButtonStyleClasses(value || 'black-on-white')}`}>
          תצוגה מקדימה
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700 w-full">
          <Save className="w-4 h-4 ml-1" />
          שמור שינויים
        </Button>
      </div>

      {/* Badge/Tag Editor */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Tag className="w-4 h-4 text-yellow-400" />
            תג עליון
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            value={localContent.badge || ''}
            onChange={(e) => handleTextChange('badge', e.target.value)}
            placeholder="טקסט התג העליון"
            className="bg-gray-700 border-gray-600 text-white text-right"
          />
          <ButtonStyleSelector 
            value={localContent.badgeStyle} 
            onChange={(value) => handleStyleChange('badge', value)} 
            label="סגנון תג"
          />
        </CardContent>
      </Card>

      {/* Main Title Editor */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Type className="w-4 h-4 text-blue-400" />
            כותרת ראשית
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Textarea
            value={localContent.headline || formData?.businessName || ''}
            onChange={(e) => handleTextChange('headline', e.target.value)}
            placeholder="הכותרת הראשית של הדף"
            className="bg-gray-700 border-gray-600 text-white text-right"
            rows={2}
          />
          <TextStyleSelector 
            value={localContent.headlineStyle} 
            onChange={(value) => handleStyleChange('headline', value)} 
            label="סגנון כותרת"
          />
        </CardContent>
      </Card>

      {/* Subtitle Editor */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Type className="w-4 h-4 text-green-400" />
            כותרת משנה
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Textarea
            value={localContent.subheadline || ''}
            onChange={(e) => handleTextChange('subheadline', e.target.value)}
            placeholder="כותרת המשנה או התיאור"
            className="bg-gray-700 border-gray-600 text-white text-right"
            rows={3}
          />
          <TextStyleSelector 
            value={localContent.subheadlineStyle} 
            onChange={(value) => handleStyleChange('subheadline', value)} 
            label="סגנון כותרת משנה"
          />
        </CardContent>
      </Card>

      {/* Buttons Editor */}
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
            <div key={index} className="p-3 bg-gray-700 rounded-lg border border-gray-600">
              <div className="flex items-center justify-between mb-2">
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
              
              <Input
                value={button.text || ''}
                onChange={(e) => handleButtonChange(index, 'text', e.target.value)}
                placeholder="טקסט הכפתור"
                className="bg-gray-600 border-gray-500 text-white text-right mb-2"
              />
              
              <select
                value={button.style || 'black-on-white'}
                onChange={(e) => handleButtonChange(index, 'style', e.target.value)}
                className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded mb-2"
              >
                <option value="black-on-white">שחור על לבן</option>
                <option value="white-on-black">לבן על שחור</option>
                <option value="gradient-gold-black">גרדיאנט זהב-שחור</option>
                <option value="gradient-gold-white">גרדיאנט זהב-לבן</option>
                <option value="gradient-purple-tech">גרדיאנט סגול טכנולוגי</option>
              </select>

              {/* Button Preview */}
              <div className="mt-2">
                <button className={`px-4 py-2 rounded text-sm ${getButtonStyleClasses(button.style || 'black-on-white')}`}>
                  {button.text || 'תצוגה מקדימה'}
                </button>
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

      {/* Elements Management */}
      <Separator className="bg-gray-600" />

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white text-sm flex items-center gap-2">
            <Plus className="w-4 h-4 text-cyan-400" />
            הוספת אלמנטים
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Button 
              onClick={addImageElement}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <ImageIcon className="w-4 h-4 ml-1" />
              הוסף תמונה
            </Button>
            <Button 
              onClick={addTextElement}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Type className="w-4 h-4 ml-1" />
              הוסף טקסט
            </Button>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Palette className="w-4 h-4 ml-1" />
              הוסף רקע
            </Button>
            <Button 
              onClick={addTagElement}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Tag className="w-4 h-4 ml-1" />
              הוסף תג
            </Button>
          </div>
          
          {/* Show current elements */}
          {(localContent.elements || []).length > 0 && (
            <div className="mt-4">
              <h4 className="text-white text-sm mb-2">אלמנטים נוכחיים:</h4>
              <div className="space-y-2">
                {(localContent.elements || []).map((element: any, index: number) => (
                  <div key={element.id || index} className="bg-gray-700 p-2 rounded flex items-center justify-between">
                    <span className="text-white text-xs">
                      {element.type === 'text' ? '📝 טקסט' : 
                       element.type === 'image' ? '🖼️ תמונה' : 
                       element.type === 'tag' ? '🏷️ תג' : element.type}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        const elements = [...(localContent.elements || [])];
                        elements.splice(index, 1);
                        setLocalContent({
                          ...localContent,
                          elements
                        });
                      }}
                      className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentElementsEditor;
