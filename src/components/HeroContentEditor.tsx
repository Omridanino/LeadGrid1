
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Type, 
  Palette, 
  Settings, 
  Eye, 
  Save,
  Trash2,
  Plus,
  Edit3,
  MousePointer
} from "lucide-react";

interface HeroContentEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  currentColors: any;
  onColorChange: (newColors: any) => void;
}

const HeroContentEditor = ({ 
  content, 
  onContentChange, 
  currentColors, 
  onColorChange 
}: HeroContentEditorProps) => {
  const [activeTab, setActiveTab] = useState<'content' | 'colors' | 'buttons'>('content');
  const [localContent, setLocalContent] = useState({
    headline: content?.headline || '',
    subheadline: content?.subheadline || '',
    badge: content?.badge || '',
    cta: content?.cta || 'בואו נתחיל',
    secondaryCta: content?.secondaryCta || 'למד עוד'
  });

  const [localColors, setLocalColors] = useState({
    heroBackground: currentColors?.heroBackground || '#000000',
    headlineColor: currentColors?.headlineColor || '#ffffff',
    subheadlineColor: currentColors?.subheadlineColor || '#e0f2fe',
    badgeColor: currentColors?.badge || '#3b82f6',
    primaryButtonBg: currentColors?.primary || '#3b82f6',
    primaryButtonText: '#ffffff',
    secondaryButtonBg: 'transparent',
    secondaryButtonText: currentColors?.headlineColor || '#ffffff',
    secondaryButtonBorder: currentColors?.primary || '#3b82f6'
  });

  // Sync with parent content changes
  useEffect(() => {
    if (content) {
      setLocalContent({
        headline: content.headline || '',
        subheadline: content.subheadline || '',
        badge: content.badge || '',
        cta: content.cta || 'בואו נתחיל',
        secondaryCta: content.secondaryCta || 'למד עוד'
      });
    }
  }, [content]);

  // Sync with parent color changes
  useEffect(() => {
    if (currentColors) {
      setLocalColors({
        heroBackground: currentColors.heroBackground || '#000000',
        headlineColor: currentColors.headlineColor || '#ffffff',
        subheadlineColor: currentColors.subheadlineColor || '#e0f2fe',
        badgeColor: currentColors.badge || '#3b82f6',
        primaryButtonBg: currentColors.primary || '#3b82f6',
        primaryButtonText: '#ffffff',
        secondaryButtonBg: 'transparent',
        secondaryButtonText: currentColors.headlineColor || '#ffffff',
        secondaryButtonBorder: currentColors.primary || '#3b82f6'
      });
    }
  }, [currentColors]);

  const handleContentSave = () => {
    console.log('Saving content:', localContent);
    onContentChange({
      ...content,
      ...localContent
    });
  };

  const handleColorsSave = () => {
    const newColors = {
      ...currentColors,
      heroBackground: localColors.heroBackground,
      headlineColor: localColors.headlineColor,
      subheadlineColor: localColors.subheadlineColor,
      badge: localColors.badgeColor,
      primary: localColors.primaryButtonBg
    };
    console.log('Saving colors:', newColors);
    onColorChange(newColors);
  };

  const removeElement = (elementType: string) => {
    const updatedContent = { ...localContent };
    if (elementType === 'badge') {
      updatedContent.badge = '';
    } else if (elementType === 'subheadline') {
      updatedContent.subheadline = '';
    }
    setLocalContent(updatedContent);
    // Apply changes immediately
    onContentChange({
      ...content,
      ...updatedContent
    });
  };

  // Check if we have buttons in the content
  const hasButtons = content?.cta || content?.secondaryCta || localContent.cta || localContent.secondaryCta;

  return (
    <div className="w-80 bg-gray-900 border-r border-gray-700 h-full overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-6">
          <Edit3 className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg font-semibold text-white">עריכת הירו</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
              activeTab === 'content' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Type className="w-4 h-4" />
            תוכן
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
              activeTab === 'colors' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            צבעים
          </button>
          {hasButtons && (
            <button
              onClick={() => setActiveTab('buttons')}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                activeTab === 'buttons' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <MousePointer className="w-4 h-4" />
              כפתורים
            </button>
          )}
        </div>

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm flex items-center justify-between">
                  כותרת ראשית
                  <Badge variant="outline" className="text-xs">נדרש</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  value={localContent.headline}
                  onChange={(e) => setLocalContent({ ...localContent, headline: e.target.value })}
                  onBlur={handleContentSave}
                  className="bg-gray-700 border-gray-600 text-white text-right"
                  placeholder="הכנס כותרת ראשית..."
                />
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm flex items-center justify-between">
                  כותרת משנה
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeElement('subheadline')}
                    className="text-red-400 hover:text-red-300 h-auto p-1"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea
                  value={localContent.subheadline}
                  onChange={(e) => setLocalContent({ ...localContent, subheadline: e.target.value })}
                  onBlur={handleContentSave}
                  className="bg-gray-700 border-gray-600 text-white text-right"
                  rows={3}
                  placeholder="הכנס כותרת משנה..."
                />
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm flex items-center justify-between">
                  תג עליון
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeElement('badge')}
                    className="text-red-400 hover:text-red-300 h-auto p-1"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  value={localContent.badge}
                  onChange={(e) => setLocalContent({ ...localContent, badge: e.target.value })}
                  onBlur={handleContentSave}
                  className="bg-gray-700 border-gray-600 text-white text-right"
                  placeholder="הכנס תג עליון..."
                />
              </CardContent>
            </Card>

            <Button 
              onClick={handleContentSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Save className="w-4 h-4 ml-2" />
              שמור שינויים
            </Button>
          </div>
        )}

        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm">צבעי רקע וטקסט</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300 text-sm">רקע הירו</Label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="color"
                      value={localColors.heroBackground}
                      onChange={(e) => {
                        const newColors = { ...localColors, heroBackground: e.target.value };
                        setLocalColors(newColors);
                        // Apply immediately
                        onColorChange({
                          ...currentColors,
                          heroBackground: e.target.value
                        });
                      }}
                      className="w-12 h-8 rounded border-gray-600"
                    />
                    <Input
                      value={localColors.heroBackground}
                      onChange={(e) => {
                        const newColors = { ...localColors, heroBackground: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          heroBackground: e.target.value
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300 text-sm">צבע כותרת ראשית</Label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="color"
                      value={localColors.headlineColor}
                      onChange={(e) => {
                        const newColors = { ...localColors, headlineColor: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          headlineColor: e.target.value
                        });
                      }}
                      className="w-12 h-8 rounded border-gray-600"
                    />
                    <Input
                      value={localColors.headlineColor}
                      onChange={(e) => {
                        const newColors = { ...localColors, headlineColor: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          headlineColor: e.target.value
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300 text-sm">צבע כותרת משנה</Label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="color"
                      value={localColors.subheadlineColor}
                      onChange={(e) => {
                        const newColors = { ...localColors, subheadlineColor: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          subheadlineColor: e.target.value
                        });
                      }}
                      className="w-12 h-8 rounded border-gray-600"
                    />
                    <Input
                      value={localColors.subheadlineColor}
                      onChange={(e) => {
                        const newColors = { ...localColors, subheadlineColor: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          subheadlineColor: e.target.value
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300 text-sm">צבע תג עליון</Label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="color"
                      value={localColors.badgeColor}
                      onChange={(e) => {
                        const newColors = { ...localColors, badgeColor: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          badge: e.target.value
                        });
                      }}
                      className="w-12 h-8 rounded border-gray-600"
                    />
                    <Input
                      value={localColors.badgeColor}
                      onChange={(e) => {
                        const newColors = { ...localColors, badgeColor: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          badge: e.target.value
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Buttons Tab - Only show if buttons exist */}
        {activeTab === 'buttons' && hasButtons && (
          <div className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm">כפתור ראשי</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300 text-sm">טקסט כפתור</Label>
                  <Input
                    value={localContent.cta}
                    onChange={(e) => setLocalContent({ ...localContent, cta: e.target.value })}
                    onBlur={handleContentSave}
                    className="bg-gray-700 border-gray-600 text-white text-right mt-1"
                    placeholder="טקסט כפתור ראשי..."
                  />
                </div>
                <div>
                  <Label className="text-gray-300 text-sm">צבע רקע כפתור</Label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="color"
                      value={localColors.primaryButtonBg}
                      onChange={(e) => {
                        const newColors = { ...localColors, primaryButtonBg: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          primary: e.target.value
                        });
                      }}
                      className="w-12 h-8 rounded border-gray-600"
                    />
                    <Input
                      value={localColors.primaryButtonBg}
                      onChange={(e) => {
                        const newColors = { ...localColors, primaryButtonBg: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          primary: e.target.value
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm">כפתור משני</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300 text-sm">טקסט כפתור</Label>
                  <Input
                    value={localContent.secondaryCta}
                    onChange={(e) => setLocalContent({ ...localContent, secondaryCta: e.target.value })}
                    onBlur={handleContentSave}
                    className="bg-gray-700 border-gray-600 text-white text-right mt-1"
                    placeholder="טקסט כפתור משני..."
                  />
                </div>
                <div>
                  <Label className="text-gray-300 text-sm">צבע מסגרת</Label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="color"
                      value={localColors.secondaryButtonBorder}
                      onChange={(e) => {
                        const newColors = { ...localColors, secondaryButtonBorder: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          secondary: e.target.value
                        });
                      }}
                      className="w-12 h-8 rounded border-gray-600"
                    />
                    <Input
                      value={localColors.secondaryButtonBorder}
                      onChange={(e) => {
                        const newColors = { ...localColors, secondaryButtonBorder: e.target.value };
                        setLocalColors(newColors);
                        onColorChange({
                          ...currentColors,
                          secondary: e.target.value
                        });
                      }}
                      className="bg-gray-700 border-gray-600 text-white text-sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroContentEditor;
