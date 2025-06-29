
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ColorScheme } from "@/types/colors";
import { Palette, Type, Zap, Badge as BadgeIcon, Eye } from "lucide-react";
import ButtonStyleEditor from "./ButtonStyleEditor";

interface ContentElementsEditorProps {
  content: any;
  onContentChange: (content: any) => void;
  onColorsChange: (colors: ColorScheme) => void;
  formData: any;
}

const ContentElementsEditor = ({ content, onContentChange, onColorsChange, formData }: ContentElementsEditorProps) => {
  const [localContent, setLocalContent] = useState(content || {});

  // Sync with parent content changes
  useEffect(() => {
    setLocalContent(content || {});
  }, [content]);

  const handleContentUpdate = (updates: any) => {
    const updatedContent = { ...localContent, ...updates };
    setLocalContent(updatedContent);
    onContentChange(updatedContent);
  };

  const handleColorUpdate = (colorKey: string, colorValue: string) => {
    const updatedColors = {
      ...localContent.colors,
      [colorKey]: colorValue
    };
    handleContentUpdate({ colors: updatedColors });
  };

  const handleButtonsUpdate = (buttons: any[]) => {
    handleContentUpdate({ buttons });
  };

  // Color options for text styling
  const colorOptions = [
    { value: 'default', label: 'ברירת מחדל' },
    { value: 'black-text', label: 'שחור' },
    { value: 'white-text', label: 'לבן' },
    { value: 'gold-text', label: 'זהב' },
    { value: 'silver-text', label: 'כסף' },
    { value: 'blue-text', label: 'כחול' },
    { value: 'green-text', label: 'ירוק' },
    { value: 'red-text', label: 'אדום' },
    { value: 'purple-text', label: 'סגול' },
    { value: 'pink-text', label: 'ורוד' },
    { value: 'cyan-text', label: 'ציאן' },
    { value: 'gradient-gold-text', label: 'גרדיאנט זהב' },
    { value: 'gradient-purple-text', label: 'גרדיאנט סגול' },
    { value: 'gradient-blue-text', label: 'גרדיאנט כחול' },
    { value: 'gradient-green-text', label: 'גרדיאנט ירוק' },
    { value: 'gradient-red-text', label: 'גרדיאנט אדום' },
    { value: 'gradient-cyan-text', label: 'גרדיאנט ציאן' },
    { value: 'gradient-rainbow-text', label: 'גרדיאנט קשת' },
    { value: 'neon-blue', label: 'נאון כחול' },
    { value: 'neon-green', label: 'נאון ירוק' },
    { value: 'neon-purple', label: 'נאון סגול' },
    { value: 'neon-pink', label: 'נאון ורוד' },
  ];

  // Ensure buttons array exists
  const buttons = localContent.buttons || [{ text: localContent.cta || 'לחץ כאן', style: 'default', visible: true }];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-700">
          <TabsTrigger value="content" className="text-white data-[state=active]:bg-blue-600">
            <Type className="w-4 h-4 mr-2" />
            תוכן
          </TabsTrigger>
          <TabsTrigger value="buttons" className="text-white data-[state=active]:bg-blue-600">
            <Zap className="w-4 h-4 mr-2" />
            כפתורים
          </TabsTrigger>
          <TabsTrigger value="colors" className="text-white data-[state=active]:bg-blue-600">
            <Palette className="w-4 h-4 mr-2" />
            צבעים
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Type className="w-5 h-5" />
                עריכת תוכן
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="badge" className="text-white">תג עליון</Label>
                <Input
                  id="badge"
                  value={localContent.badge || ''}
                  onChange={(e) => handleContentUpdate({ badge: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="תג עליון (אופציונלי)"
                />
              </div>

              <div>
                <Label htmlFor="headline" className="text-white">כותרת ראשית</Label>
                <Input
                  id="headline"
                  value={localContent.headline || formData?.businessName || ''}
                  onChange={(e) => handleContentUpdate({ headline: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="הכותרת הראשית שלכם"
                />
              </div>

              <div>
                <Label htmlFor="subheadline" className="text-white">תת כותרת</Label>
                <Textarea
                  id="subheadline"
                  value={localContent.subheadline || localContent.description || ''}
                  onChange={(e) => handleContentUpdate({ subheadline: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="תיאור קצר על העסק או השירות"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-white">תיאור מפורט</Label>
                <Textarea
                  id="description"
                  value={localContent.description || ''}
                  onChange={(e) => handleContentUpdate({ description: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="תיאור מפורט יותר (אופציונלי)"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="buttons" className="space-y-4">
          <ButtonStyleEditor
            buttons={buttons}
            onButtonsChange={handleButtonsUpdate}
          />
        </TabsContent>

        <TabsContent value="colors" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Palette className="w-5 h-5" />
                עיצוב צבעים
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">צבע כותרת ראשית</Label>
                <Select
                  value={localContent.colors?.headline || 'default'}
                  onValueChange={(value) => handleColorUpdate('headline', value)}
                >
                  <SelectTrigger className="w-full bg-gray-700 text-white border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {colorOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-white hover:bg-gray-600"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-white">צבע תת כותרת</Label>
                <Select
                  value={localContent.colors?.subheadline || 'default'}
                  onValueChange={(value) => handleColorUpdate('subheadline', value)}
                >
                  <SelectTrigger className="w-full bg-gray-700 text-white border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {colorOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-white hover:bg-gray-600"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-white">צבע תג עליון</Label>
                <Select
                  value={localContent.colors?.badge || 'default'}
                  onValueChange={(value) => handleColorUpdate('badge', value)}
                >
                  <SelectTrigger className="w-full bg-gray-700 text-white border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {colorOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-white hover:bg-gray-600"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentElementsEditor;
