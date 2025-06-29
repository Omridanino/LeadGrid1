
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorScheme } from "@/types/colors";
import { Palette, Type, Zap, Badge as BadgeIcon, Eye, Heart, Plus, Trash2 } from "lucide-react";
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

  // Emotional section handlers
  const handleEmotionalSectionUpdate = (updates: any) => {
    const updatedEmotionalSection = {
      ...localContent.emotionalSection,
      ...updates
    };
    handleContentUpdate({ emotionalSection: updatedEmotionalSection });
  };

  const handleEmotionalButtonsUpdate = (buttons: any[]) => {
    handleEmotionalSectionUpdate({ buttons });
  };

  const addEmotionalButton = () => {
    const currentButtons = localContent.emotionalSection?.buttons || [];
    const newButton = {
      id: Date.now().toString(),
      text: 'כפתור חדש',
      style: 'primary',
      visible: true
    };
    handleEmotionalButtonsUpdate([...currentButtons, newButton]);
  };

  const removeEmotionalButton = (buttonId: string) => {
    const currentButtons = localContent.emotionalSection?.buttons || [];
    const updatedButtons = currentButtons.filter((btn: any) => btn.id !== buttonId);
    handleEmotionalButtonsUpdate(updatedButtons);
  };

  const updateEmotionalButton = (buttonId: string, updates: any) => {
    const currentButtons = localContent.emotionalSection?.buttons || [];
    const updatedButtons = currentButtons.map((btn: any) => 
      btn.id === buttonId ? { ...btn, ...updates } : btn
    );
    handleEmotionalButtonsUpdate(updatedButtons);
  };

  // Working color palette
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

  // Emotional section data
  const emotionalSection = localContent.emotionalSection || {
    title: 'הגיע הזמן לפעול',
    subtitle: 'אל תחמיץ את ההזדמנות הזו',
    text: 'הצטרף אלינו עוד היום והתחל את המסע שלך להצלחה',
    badge: 'מוגבל בזמן',
    backgroundColor: '#1e1e2e',
    buttons: [{ id: '1', text: 'התחל עכשיו', style: 'primary', visible: true }]
  };

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
          {/* Hero Section Content */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Type className="w-5 h-5" />
                עריכת תוכן הירו
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

          {/* Emotional Section Content */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Heart className="w-5 h-5" />
                עריכת פסקת רגש
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="emotional-badge" className="text-white">תג עליון</Label>
                <Input
                  id="emotional-badge"
                  value={emotionalSection.badge || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ badge: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="תג עליון (אופציונלי)"
                />
              </div>

              <div>
                <Label htmlFor="emotional-title" className="text-white">כותרת</Label>
                <Input
                  id="emotional-title"
                  value={emotionalSection.title || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ title: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="כותרת פסקת הרגש"
                />
              </div>

              <div>
                <Label htmlFor="emotional-subtitle" className="text-white">תת כותרת</Label>
                <Input
                  id="emotional-subtitle"
                  value={emotionalSection.subtitle || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ subtitle: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="תת כותרת פסקת הרגש"
                />
              </div>

              <div>
                <Label htmlFor="emotional-text" className="text-white">טקסט</Label>
                <Textarea
                  id="emotional-text"
                  value={emotionalSection.text || ''}
                  onChange={(e) => handleEmotionalSectionUpdate({ text: e.target.value })}
                  className="bg-gray-700 text-white border-gray-600"
                  placeholder="הטקסט של פסקת הרגש"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="buttons" className="space-y-4">
          {/* Hero Buttons */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-5 h-5" />
                כפתורי הירו
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ButtonStyleEditor
                buttons={buttons}
                onButtonsChange={handleButtonsUpdate}
              />
            </CardContent>
          </Card>

          {/* Emotional Section Buttons */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Heart className="w-5 h-5" />
                כפתורי פסקת הרגש
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-white">כפתורים</Label>
                <Button
                  onClick={addEmotionalButton}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="w-4 h-4 ml-2" />
                  הוסף כפתור
                </Button>
              </div>
              
              <div className="space-y-3">
                {emotionalSection.buttons?.map((button: any) => (
                  <div key={button.id} className="flex gap-2 p-3 bg-gray-700 rounded">
                    <Input
                      value={button.text}
                      onChange={(e) => updateEmotionalButton(button.id, { text: e.target.value })}
                      className="bg-gray-600 text-white flex-1"
                      placeholder="טקסט הכפתור"
                    />
                    <select
                      value={button.style}
                      onChange={(e) => updateEmotionalButton(button.id, { style: e.target.value })}
                      className="bg-gray-600 text-white p-2 rounded"
                    >
                      <option value="primary">ראשי</option>
                      <option value="secondary">משני</option>
                      <option value="outline">מסגרת</option>
                    </select>
                    <Button
                      onClick={() => removeEmotionalButton(button.id)}
                      size="sm"
                      variant="destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
              {/* Hero Colors */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">צבעי הירו</h3>
                
                {/* Headline Color */}
                <div className="mb-4">
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
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subheadline Color */}
                <div className="mb-4">
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
                      </button>
                    ))}
                  </div>
                </div>

                {/* Badge Color */}
                <div className="mb-4">
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
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emotional Section Colors */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">צבעי פסקת הרגש</h3>
                
                {/* Emotional Background Color */}
                <div className="mb-4">
                  <Label className="text-white mb-3 block">צבע רקע פסקת הרגש</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {workingColorPalette.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleEmotionalSectionUpdate({ backgroundColor: color.value === 'default' ? '#1e1e2e' : color.value })}
                        className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all relative group"
                        style={{
                          background: color.value === 'default' ? '#1e1e2e' : color.value
                        }}
                        title={color.name}
                      >
                        {emotionalSection.backgroundColor === (color.value === 'default' ? '#1e1e2e' : color.value) && (
                          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Emotional Title Color */}
                <div className="mb-4">
                  <Label className="text-white mb-3 block">צבע כותרת פסקת הרגש</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {workingColorPalette.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorUpdate('emotionalTitle', color.value)}
                        className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all relative group"
                        style={{
                          background: color.value === 'default' ? '#374151' : color.value
                        }}
                        title={color.name}
                      >
                        {localContent.colors?.emotionalTitle === color.value && (
                          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Emotional Text Color */}
                <div className="mb-4">
                  <Label className="text-white mb-3 block">צבע טקסט פסקת הרגש</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {workingColorPalette.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorUpdate('emotionalText', color.value)}
                        className="w-12 h-12 rounded-lg border-2 border-gray-600 hover:border-white transition-all relative group"
                        style={{
                          background: color.value === 'default' ? '#374151' : color.value
                        }}
                        title={color.name}
                      >
                        {localContent.colors?.emotionalText === color.value && (
                          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg"></div>
                        )}
                      </button>
                    ))}
                  </div>
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
