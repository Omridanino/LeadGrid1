
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
            </CardContent>
          </Card>

          {/* Description Editor */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-sm flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-purple-400" />
                תיאור מפורט
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                value={localContent.description || ''}
                onChange={(e) => handleTextChange('description', e.target.value)}
                placeholder="תיאור מפורט נוסף"
                className="bg-gray-700 border-gray-600 text-white text-right"
                rows={4}
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
                    value={button.variant || 'primary'}
                    onChange={(e) => handleButtonChange(index, 'variant', e.target.value)}
                    className="w-full bg-gray-600 border border-gray-500 text-white text-right p-2 rounded"
                  >
                    <option value="primary">ראשי</option>
                    <option value="secondary">משני</option>
                    <option value="outline">מסגרת</option>
                  </select>
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

          {/* Elements Management - Now integrated into content */}
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
                  variant="outline" 
                  className="border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600 hover:text-white"
                >
                  <ImageIcon className="w-4 h-4 ml-1" />
                  הוסף תמונה
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600 hover:text-white"
                >
                  <Type className="w-4 h-4 ml-1" />
                  הוסף טקסט
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600 hover:text-white"
                >
                  <Palette className="w-4 h-4 ml-1" />
                  הוסף רקע
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600 hover:text-white"
                >
                  <Tag className="w-4 h-4 ml-1" />
                  הוסף תג
                </Button>
              </div>
              
              <div className="text-center text-gray-400 text-sm">
                אלמנטים נוספים יתווספו בעתיד
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentElementsEditor;
