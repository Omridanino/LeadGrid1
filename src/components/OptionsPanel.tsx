
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ColorScheme } from "./ColorEditor";
import ColorEditor from "./ColorEditor";
import WordPressIntegration from "./WordPressIntegration";
import { Save, Palette, FileCode, Download, Type, Hash, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface OptionsPanelProps {
  showDesignEditor: boolean;
  showWordPressGuide: boolean;
  showAdvancedEditor: boolean;
  isSaved: boolean;
  onColorChange: (colors: ColorScheme) => void;
  onDesignEdit: () => void;
  onWordPressIntegration: () => void;
  onAdvancedEdit: () => void;
  onSave: () => void;
  generateHtmlFile: () => string;
  content: any;
  onContentChange: (content: any) => void;
  formData: any;
  onFormDataChange: (formData: any) => void;
  heroImage: string;
  onHeroImageChange: (image: string) => void;
}

// Icon options for enhanced content editing
const iconOptions = [
  { value: "🚀", label: "רקטה" },
  { value: "⭐", label: "כוכב" },
  { value: "💎", label: "יהלום" },
  { value: "🎯", label: "מטרה" },
  { value: "💡", label: "נורה" },
  { value: "🔥", label: "אש" },
  { value: "⚡", label: "ברק" },
  { value: "🏆", label: "גביע" },
  { value: "💰", label: "כסף" },
  { value: "🎨", label: "צבעים" },
  { value: "🛡️", label: "מגן" },
  { value: "📈", label: "גרף" },
  { value: "🎪", label: "בידור" },
  { value: "🔧", label: "כלים" },
  { value: "📱", label: "נייד" },
  { value: "💭", label: "מחשבה" },
  { value: "💬", label: "דיבור" },
  { value: "🤝", label: "לחיצת יד" },
  { value: "❤️", label: "לב" },
  { value: "💪", label: "כוח" }
];

const OptionsPanel = ({
  showDesignEditor,
  showWordPressGuide,
  showAdvancedEditor,
  isSaved,
  onColorChange,
  onDesignEdit,
  onWordPressIntegration,
  onAdvancedEdit,
  onSave,
  generateHtmlFile,
  content,
  onContentChange,
  formData,
  onFormDataChange,
  heroImage,
  onHeroImageChange
}: OptionsPanelProps) => {
  const [editingContent, setEditingContent] = useState(content);

  const updateContent = (path: string, value: any) => {
    const newContent = { ...editingContent };
    const keys = path.split('.');
    let current = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setEditingContent(newContent);
    onContentChange(newContent);
  };

  const addIcon = (path: string, icon: string) => {
    const currentValue = getNestedValue(editingContent, path) || "";
    updateContent(path, `${icon} ${currentValue}`.trim());
  };

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  return (
    <div className="h-full bg-gray-900 border-l border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">עריכת הדף</h2>
      </div>

      <div className="p-4 space-y-4 h-[calc(100%-80px)] overflow-y-auto">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="content" className="text-white">
              <Type className="w-4 h-4 ml-2" />
              תוכן
            </TabsTrigger>
            <TabsTrigger value="design" className="text-white">
              <Palette className="w-4 h-4 ml-2" />
              עיצוב
            </TabsTrigger>
            <TabsTrigger value="export" className="text-white">
              <Download className="w-4 h-4 ml-2" />
              ייצוא
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  עריכת תוכן מתקדמת
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Hero Section Editing */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">סקשן הירו</h3>
                  
                  <div>
                    <Label className="text-gray-300">כותרת ראשית</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        value={getNestedValue(editingContent, 'headline') || ''}
                        onChange={(e) => updateContent('headline', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="הכותרת הראשית שלכם"
                      />
                      <Select onValueChange={(icon) => addIcon('headline', icon)}>
                        <SelectTrigger className="w-16 bg-gray-700 border-gray-600">
                          <Plus className="w-4 h-4" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          {iconOptions.map(icon => (
                            <SelectItem key={icon.value} value={icon.value} className="text-white">
                              {icon.value} {icon.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-300">תת כותרת</Label>
                    <div className="flex gap-2 mt-1">
                      <Textarea
                        value={getNestedValue(editingContent, 'subheadline') || ''}
                        onChange={(e) => updateContent('subheadline', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        placeholder="תיאור קצר ומושך"
                        rows={3}
                      />
                      <Select onValueChange={(icon) => addIcon('subheadline', icon)}>
                        <SelectTrigger className="w-16 bg-gray-700 border-gray-600">
                          <Plus className="w-4 h-4" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          {iconOptions.map(icon => (
                            <SelectItem key={icon.value} value={icon.value} className="text-white">
                              {icon.value} {icon.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-gray-300">כפתור קריאה לפעולה</Label>
                    <Input
                      value={getNestedValue(editingContent, 'cta') || ''}
                      onChange={(e) => updateContent('cta', e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="טקסט הכפתור"
                    />
                  </div>
                </div>

                {/* Sections Editing */}
                {editingContent.sections && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white">סקשנים</h3>
                    
                    {/* Emotional Section */}
                    {editingContent.sections.emotionalSection && (
                      <div className="space-y-3 p-4 bg-gray-700 rounded-lg">
                        <h4 className="font-medium text-white">פסקת רגש</h4>
                        <div>
                          <Label className="text-gray-300">כותרת</Label>
                          <div className="flex gap-2 mt-1">
                            <Input
                              value={editingContent.sections.emotionalSection.title}
                              onChange={(e) => updateContent('sections.emotionalSection.title', e.target.value)}
                              className="bg-gray-600 border-gray-500 text-white"
                            />
                            <Select onValueChange={(icon) => updateContent('sections.emotionalSection.icon', icon)}>
                              <SelectTrigger className="w-16 bg-gray-600 border-gray-500">
                                <span>{editingContent.sections.emotionalSection.icon}</span>
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-600">
                                {iconOptions.map(icon => (
                                  <SelectItem key={icon.value} value={icon.value} className="text-white">
                                    {icon.value} {icon.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label className="text-gray-300">תוכן</Label>
                          <Textarea
                            value={editingContent.sections.emotionalSection.content}
                            onChange={(e) => updateContent('sections.emotionalSection.content', e.target.value)}
                            className="bg-gray-600 border-gray-500 text-white"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {/* Why Us Section */}
                    {editingContent.sections.whyUs && (
                      <div className="space-y-3 p-4 bg-gray-700 rounded-lg">
                        <h4 className="font-medium text-white">למה לבחור בנו</h4>
                        <div>
                          <Label className="text-gray-300">כותרת ראשית</Label>
                          <div className="flex gap-2 mt-1">
                            <Input
                              value={editingContent.sections.whyUs.title}
                              onChange={(e) => updateContent('sections.whyUs.title', e.target.value)}
                              className="bg-gray-600 border-gray-500 text-white"
                            />
                            <Select onValueChange={(icon) => addIcon('sections.whyUs.title', icon)}>
                              <SelectTrigger className="w-16 bg-gray-600 border-gray-500">
                                <Plus className="w-4 h-4" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-600">
                                {iconOptions.map(icon => (
                                  <SelectItem key={icon.value} value={icon.value} className="text-white">
                                    {icon.value} {icon.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        {editingContent.sections.whyUs.items?.map((item: any, idx: number) => (
                          <div key={idx} className="space-y-2 p-3 bg-gray-600 rounded">
                            <Label className="text-gray-300">פריט {idx + 1}</Label>
                            <div className="flex gap-2">
                              <Input
                                value={item.title}
                                onChange={(e) => updateContent(`sections.whyUs.items.${idx}.title`, e.target.value)}
                                className="bg-gray-500 border-gray-400 text-white"
                                placeholder="כותרת"
                              />
                              <Select onValueChange={(icon) => updateContent(`sections.whyUs.items.${idx}.icon`, icon)}>
                                <SelectTrigger className="w-16 bg-gray-500 border-gray-400">
                                  <span>{item.icon}</span>
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-gray-600">
                                  {iconOptions.map(icon => (
                                    <SelectItem key={icon.value} value={icon.value} className="text-white">
                                      {icon.value} {icon.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <Textarea
                              value={item.desc}
                              onChange={(e) => updateContent(`sections.whyUs.items.${idx}.desc`, e.target.value)}
                              className="bg-gray-500 border-gray-400 text-white"
                              placeholder="תיאור"
                              rows={2}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* What We Give Section */}
                    {editingContent.sections.whatWeGive && (
                      <div className="space-y-3 p-4 bg-gray-700 rounded-lg">
                        <h4 className="font-medium text-white">מה אתם מקבלים מאיתנו</h4>
                        <div>
                          <Label className="text-gray-300">כותרת ראשית</Label>
                          <div className="flex gap-2 mt-1">
                            <Input
                              value={editingContent.sections.whatWeGive.title}
                              onChange={(e) => updateContent('sections.whatWeGive.title', e.target.value)}
                              className="bg-gray-600 border-gray-500 text-white"
                            />
                            <Select onValueChange={(icon) => addIcon('sections.whatWeGive.title', icon)}>
                              <SelectTrigger className="w-16 bg-gray-600 border-gray-500">
                                <Plus className="w-4 h-4" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-600">
                                {iconOptions.map(icon => (
                                  <SelectItem key={icon.value} value={icon.value} className="text-white">
                                    {icon.value} {icon.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        {editingContent.sections.whatWeGive.items?.map((item: any, idx: number) => (
                          <div key={idx} className="space-y-2 p-3 bg-gray-600 rounded">
                            <Label className="text-gray-300">פריט {idx + 1}</Label>
                            <div className="flex gap-2">
                              <Input
                                value={item.title}
                                onChange={(e) => updateContent(`sections.whatWeGive.items.${idx}.title`, e.target.value)}
                                className="bg-gray-500 border-gray-400 text-white"
                                placeholder="כותרת"
                              />
                              <Select onValueChange={(icon) => updateContent(`sections.whatWeGive.items.${idx}.icon`, icon)}>
                                <SelectTrigger className="w-16 bg-gray-500 border-gray-400">
                                  <span>{item.icon}</span>
                                </SelectTrigger>
                                <SelectContent className="bg-gray-800 border-gray-600">
                                  {iconOptions.map(icon => (
                                    <SelectItem key={icon.value} value={icon.value} className="text-white">
                                      {icon.value} {icon.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <Textarea
                              value={item.desc}
                              onChange={(e) => updateContent(`sections.whatWeGive.items.${idx}.desc`, e.target.value)}
                              className="bg-gray-500 border-gray-400 text-white"
                              placeholder="תיאור"
                              rows={2}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Testimonials Section */}
                    <div className="space-y-3 p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-medium text-white">💭 מה אומרים עלינו</h4>
                      <div>
                        <Label className="text-gray-300">כותרת הסקשן</Label>
                        <Input
                          value={getNestedValue(editingContent, 'sections.testimonialsTitle') || '💭 מה אומרים עלינו'}
                          onChange={(e) => updateContent('sections.testimonialsTitle', e.target.value)}
                          className="bg-gray-600 border-gray-500 text-white"
                          placeholder="כותרת סקשן המלצות"
                        />
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-3 p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-medium text-white">בואו נתחיל לעבוד יחד</h4>
                      <div>
                        <Label className="text-gray-300">כותרת יצירת קשר</Label>
                        <Input
                          value={getNestedValue(editingContent, 'sections.contactTitle') || getNestedValue(editingContent, 'contactTitle') || 'בואו נתחיל לעבוד יחד'}
                          onChange={(e) => updateContent('sections.contactTitle', e.target.value)}
                          className="bg-gray-600 border-gray-500 text-white"
                          placeholder="כותרת סקשן יצירת קשר"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  onClick={onSave}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Save className="w-4 h-4 ml-2" />
                  שמור שינויים
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design" className="space-y-4">
            <ColorEditor onColorChange={onColorChange} />
          </TabsContent>

          <TabsContent value="export" className="space-y-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileCode className="w-5 h-5" />
                  ייצוא ואינטגרציה
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={onSave}
                  className={`w-full ${isSaved ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                >
                  <Save className="w-4 h-4 ml-2" />
                  {isSaved ? 'נשמר!' : 'שמור עיצוב'}
                </Button>

                <Button
                  onClick={onWordPressIntegration}
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                  disabled={!isSaved}
                >
                  <Download className="w-4 h-4 ml-2" />
                  חבר לוורדפרס
                </Button>

                {showWordPressGuide && (
                  <WordPressIntegration 
                    htmlCode={generateHtmlFile()}
                  />
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OptionsPanel;
