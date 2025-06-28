
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

  const getStyleClasses = (style: string) => {
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
        return "bg-gradient-to-r from-purple-600 to-blue-400 text-white border-0";
      default:
        return "bg-blue-600 text-white";
    }
  };

  const getButtonStyleClasses = (style: string) => {
    switch (style) {
      case "black-on-white":
        return "bg-white text-black border border-black hover:bg-gray-100";
      case "white-on-black":
        return "bg-black text-white border border-white hover:bg-gray-800";
      case "gradient-gold-black":
        return "bg-gradient-to-r from-yellow-400 to-black text-white border-0 hover:from-yellow-500 hover:to-gray-900";
      case "gradient-gold-white":
        return "bg-gradient-to-r from-yellow-400 to-white text-black border-0 hover:from-yellow-500 hover:to-gray-100";
      case "gradient-purple-tech":
        return "bg-gradient-to-r from-purple-600 to-blue-400 text-white border-0 hover:from-purple-700 hover:to-blue-500";
      default:
        return "bg-blue-600 text-white hover:bg-blue-700";
    }
  };

  const styleOptions = [
    { value: "black-on-white", label: "שחור על לבן" },
    { value: "white-on-black", label: "לבן על שחור" },
    { value: "gradient-gold-black", label: "גרדיאנט זהב-שחור" },
    { value: "gradient-gold-white", label: "גרדיאנט זהב-לבן" },
    { value: "gradient-purple-tech", label: "גרדיאנט סגול טכנולוגי" }
  ];

  return (
    <div className="w-80 bg-gray-900 border-l border-gray-700 h-full overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-bold">עורך תוכן</h2>
          <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
            <Save className="w-4 h-4 ml-1" />
            שמור
          </Button>
        </div>

        <div className="space-y-4">
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
              
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-gray-400" />
                <select
                  value={localContent.badgeStyle || 'black-on-white'}
                  onChange={(e) => handleStyleChange('badge', e.target.value)}
                  className="flex-1 bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-sm"
                >
                  {styleOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* Badge Preview */}
              {localContent.badge && (
                <div className="mt-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStyleClasses(localContent.badgeStyle || 'black-on-white')}`}>
                    {localContent.badge}
                  </span>
                </div>
              )}
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
              
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-gray-400" />
                <select
                  value={localContent.headlineStyle || 'white-on-black'}
                  onChange={(e) => handleStyleChange('headline', e.target.value)}
                  className="flex-1 bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-sm"
                >
                  {styleOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* Headline Preview */}
              {localContent.headline && (
                <div className="mt-2">
                  <h3 className={`text-lg font-bold ${getStyleClasses(localContent.headlineStyle || 'white-on-black').replace('border border-black', '').replace('border border-white', '')}`}>
                    {localContent.headline}
                  </h3>
                </div>
              )}
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
              
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-gray-400" />
                <select
                  value={localContent.subheadlineStyle || 'white-on-black'}
                  onChange={(e) => handleStyleChange('subheadline', e.target.value)}
                  className="flex-1 bg-gray-600 border border-gray-500 text-white text-right p-2 rounded text-sm"
                >
                  {styleOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* Subheadline Preview */}
              {localContent.subheadline && (
                <div className="mt-2">
                  <p className={`text-sm ${getStyleClasses(localContent.subheadlineStyle || 'white-on-black').replace('border border-black', '').replace('border border-white', '')}`}>
                    {localContent.subheadline}
                  </p>
                </div>
              )}
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
                    {styleOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
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
      </div>
    </div>
  );
};

export default ContentElementsEditor;
