import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorScheme } from "@/types/colors";
import { Palette, Type, Zap, Badge as BadgeIcon, Eye, Heart } from "lucide-react";
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

  const handleEmotionalSectionUpdate = (emotionalData: any) => {
    handleContentUpdate({ emotional: emotionalData });
  };

  // Working color palette that actually changes colors
  const workingColorPalette = [
    { name: 'ברירת מחדל', value: 'default' },
    { name: 'שחור', value: '#000000' },
    { name: 'לבן', value: '#ffffff' },
    { name: 'אדום', value: '#ef4444' },
    { name: 'כחול', value: '#3b82f6' },
    { name: 'ירוק', value: '#10b981' },
    { name: 'סגול', value: '#8b5cf6' },
    { name: 'ורוד', value: '#ec4899' },
    { name: 'צהוב', value: '#f59e0b' },
    { name: 'ציאן', value: '#06b6d4' },
    { name: 'זהב', value: '#d4af37' },
    { name: 'כסף', value: '#c0c0c0' },
    { name: 'גרדיאנט זהב', value: 'linear-gradient(45deg, #ffd700, #ffed4a)' },
    { name: 'גרדיאנט סגול', value: 'linear-gradient(45deg, #8b5cf6, #a855f7)' },
    { name: 'גרדיאנט כחול', value: 'linear-gradient(45deg, #3b82f6, #1d4ed8)' },
    { name: 'גרדיאנט ירוק', value: 'linear-gradient(45deg, #10b981, #059669)' },
    { name: 'גרדיאנט אדום', value: 'linear-gradient(45deg, #ef4444, #dc2626)' },
    { name: 'גרדיאנט ציאן', value: 'linear-gradient(45deg, #06b6d4, #0891b2)' },
    { name: 'גרדיאנט קשת', value: 'linear-gradient(45deg, #ef4444, #f59e0b, #10b981, #3b82f6, #8b5cf6)' },
  ];

  // Ensure buttons array exists
  const buttons = localContent.buttons || [{ text: localContent.cta || 'לחץ כאן', style: 'default', visible: true }];

  // Initialize emotional section data
  const emotionalSection = localContent.emotional || {
    title: 'הכרויות שמובילות לתוצאות',
    subtitle: 'אנחנו כאן כדי להפוך את החלומות שלכם למציאות',
    text: 'עם ניסיון של שנים רבות ואלפי לקוחות מרוצים, אנחנו יודעים איך להביא לכם בדיוק את מה שחיפשתם.',
    buttons: [
      { text: 'בואו נכיר', style: 'primary', visible: true },
      { text: 'עוד פרטים', style: 'secondary', visible: true }
    ],
    badge: 'הטובים ביותר',
    backgroundColor: '#1a1a2e'
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-700">
          <TabsTrigger value="content" className="text-white data-[state=active]:bg-blue-600">
            <Type className="w-4 h-4 mr-2" />
            תוכן
          </TabsTrigger>
          <TabsTrigger value="emotional" className="text-white data-[state=active]:bg-purple-600">
            <Heart className="w-4 h-4 mr-2" />
            פסקת רגש
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

        <TabsContent value="emotional" className="space-y-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-purple-500" />
                עריכת פסקת רגש
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="emotional-badge" className="text-white">תג עליון</Label>
                <Input
                  id="emotional-badge"
                  value={emotionalSection.badge || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ ...emotionalSection, badge: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="תג עליון לפסקת הרגש"
                />
              </div>

              <div>
                <Label htmlFor="emotional-title" className="text-white">כותרת ראשית</Label>
                <Input
                  id="emotional-title"
                  value={emotionalSection.title || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ ...emotionalSection, title: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="כותרת ראשית לפסקת הרגש"
                />
              </div>

              <div>
                <Label htmlFor="emotional-subtitle" className="text-white">תת כותרת</Label>
                <Input
                  id="emotional-subtitle"
                  value={emotionalSection.subtitle || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ ...emotionalSection, subtitle: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="תת כותרת לפסקת הרגש"
                />
              </div>

              <div>
                <Label htmlFor="emotional-text" className="text-white">טקסט מפורט</Label>
                <Textarea
                  id="emotional-text"
                  value={emotionalSection.text || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ ...emotionalSection, text: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="הטקסט הרגשי המפורט"
                  rows={4}
                />
              </div>

              <div>
                <Label className="text-white mb-3 block">צבע רקע פסקת הרגש</Label>
                <div className="grid grid-cols-4 gap-2">
                  {workingColorPalette.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleEmotionalSectionUpdate({ ...emotionalSection, backgroundColor: color.value })}
                      className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all relative group"
                      style={{
                        background: color.value === 'default' ? '#374151' : color.value
                      }}
                      title={color.name}
                    >
                      {emotionalSection.backgroundColor === color.value && (
                        <div className="absolute inset-0 border-2 border-purple-500 rounded-lg"></div>
                      )}
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-white mb-3 block">כפתורי פסקת הרגש</Label>
                <ButtonStyleEditor
                  buttons={emotionalSection.buttons || []}
                  onButtonsChange={(buttons) => handleEmotionalSectionUpdate({ ...emotionalSection, buttons })}
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
            <CardContent className="space-y-6">
              {/* Headline Color */}
              <div>
                <Label className="text-white mb-3 block">צבע כותרת ראשית</Label>
                <div className="grid grid-cols-4 gap-2">
                  {workingColorPalette.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorUpdate('headline', color.value)}
                      className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all relative group"
                      style={{
                        background: color.value === 'default' ? '#374151' : color.value
                      }}
                      title={color.name}
                    >
                      {localContent.colors?.headline === color.value && (
                        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg"></div>
                      )}
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subheadline Color */}
              <div>
                <Label className="text-white mb-3 block">צבע תת כותרת</Label>
                <div className="grid grid-cols-4 gap-2">
                  {workingColorPalette.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorUpdate('subheadline', color.value)}
                      className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all relative group"
                      style={{
                        background: color.value === 'default' ? '#374151' : color.value
                      }}
                      title={color.name}
                    >
                      {localContent.colors?.subheadline === color.value && (
                        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg"></div>
                      )}
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Badge Color */}
              <div>
                <Label className="text-white mb-3 block">צבע תג עליון</Label>
                <div className="grid grid-cols-4 gap-2">
                  {workingColorPalette.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorUpdate('badge', color.value)}
                      className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all relative group"
                      style={{
                        background: color.value === 'default' ? '#374151' : color.value
                      }}
                      title={color.name}
                    >
                      {localContent.colors?.badge === color.value && (
                        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg"></div>
                      )}
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentElementsEditor;
