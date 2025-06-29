
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Heart, Plus, Trash2, Palette } from "lucide-react";
import EditPopup from "./EditPopup";

interface EmotionalSectionEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
}

const EmotionalSectionEditor = ({ content, onContentChange }: EmotionalSectionEditorProps) => {
  const safeContent = content || {};
  const safeEmotional = safeContent.emotional || {
    badge: 'הסיפור שלנו',
    headline: 'הרגש שמניע אותנו קדימה',
    description: 'כל מה שאנחנו עושים נובע מהלב - מהרצון העמוק לעזור, ליצור ולהשפיע.',
    buttons: [],
    colors: {
      badge: '',
      headline: '',
      subheadline: ''
    }
  };

  const [localEmotional, setLocalEmotional] = useState(safeEmotional);

  const updateEmotionalField = (field: string, value: string) => {
    const updated = { ...localEmotional, [field]: value };
    setLocalEmotional(updated);
  };

  const updateColor = (colorType: string, value: string) => {
    const updated = { 
      ...localEmotional, 
      colors: { ...localEmotional.colors, [colorType]: value } 
    };
    setLocalEmotional(updated);
  };

  const addButton = () => {
    const newButton = {
      id: Date.now(),
      text: 'כפתור חדש',
      color: '',
      visible: true
    };
    const updated = { 
      ...localEmotional, 
      buttons: [...(localEmotional.buttons || []), newButton] 
    };
    setLocalEmotional(updated);
  };

  const updateButton = (buttonId: number, field: string, value: any) => {
    const updated = {
      ...localEmotional,
      buttons: localEmotional.buttons?.map((btn: any) => 
        btn.id === buttonId ? { ...btn, [field]: value } : btn
      ) || []
    };
    setLocalEmotional(updated);
  };

  const removeButton = (buttonId: number) => {
    const updated = {
      ...localEmotional,
      buttons: localEmotional.buttons?.filter((btn: any) => btn.id !== buttonId) || []
    };
    setLocalEmotional(updated);
  };

  const handleSave = () => {
    const updatedContent = {
      ...safeContent,
      emotional: localEmotional
    };
    onContentChange(updatedContent);
  };

  const colorOptions = [
    { label: 'כחול', value: '#3b82f6' },
    { label: 'סגול', value: '#8b5cf6' },
    { label: 'ירוק', value: '#10b981' },
    { label: 'אדום', value: '#ef4444' },
    { label: 'כתום', value: '#f97316' },
    { label: 'צהוב', value: '#eab308' },
    { label: 'ורוד', value: '#ec4899' },
    { label: 'טורקיז', value: '#06b6d4' },
    { label: 'גרדיינט כחול-סגול', value: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' },
    { label: 'גרדיינט ירוק-כחול', value: 'linear-gradient(45deg, #10b981, #06b6d4)' },
    { label: 'גרדיינט ורוד-כתום', value: 'linear-gradient(45deg, #ec4899, #f97316)' },
    { label: 'גרדיינט זהב', value: 'linear-gradient(45deg, #fbbf24, #f59e0b)' }
  ];

  return (
    <EditPopup
      title="עריכת פסקת רגש"
      triggerText="פסקת רגש"
      icon={Heart}
      onSave={handleSave}
    >
      <div className="space-y-6">
        {/* תוכן בסיסי */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg mb-4">תוכן</h3>
          
          <div>
            <Label className="text-white font-semibold text-right block mb-2">תג</Label>
            <Input
              value={localEmotional.badge || ''}
              onChange={(e) => updateEmotionalField('badge', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white text-right"
              placeholder="הכנס תג..."
            />
          </div>

          <div>
            <Label className="text-white font-semibold text-right block mb-2">כותרת</Label>
            <Input
              value={localEmotional.headline || ''}
              onChange={(e) => updateEmotionalField('headline', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white text-right"
              placeholder="הכנס כותרת..."
            />
          </div>

          <div>
            <Label className="text-white font-semibold text-right block mb-2">תיאור</Label>
            <Textarea
              value={localEmotional.description || ''}
              onChange={(e) => updateEmotionalField('description', e.target.value)}
              className="bg-gray-800 border-gray-600 text-white text-right"
              rows={4}
              placeholder="הכנס תיאור..."
            />
          </div>
        </div>

        {/* עריכת צבעים */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5" />
            צבעים
          </h3>

          <div>
            <Label className="text-white font-medium text-right block mb-2">צבע תג</Label>
            <div className="grid grid-cols-2 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateColor('badge', color.value)}
                  className={`p-2 rounded text-xs border ${
                    localEmotional.colors?.badge === color.value 
                      ? 'border-blue-400 bg-blue-900/30' 
                      : 'border-gray-600 bg-gray-800'
                  } text-white hover:border-gray-400 transition-colors`}
                  style={{
                    background: color.value.includes('gradient') 
                      ? color.value 
                      : `${color.value}20`
                  }}
                >
                  {color.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-white font-medium text-right block mb-2">צבע כותרת</Label>
            <div className="grid grid-cols-2 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateColor('headline', color.value)}
                  className={`p-2 rounded text-xs border ${
                    localEmotional.colors?.headline === color.value 
                      ? 'border-blue-400 bg-blue-900/30' 
                      : 'border-gray-600 bg-gray-800'
                  } text-white hover:border-gray-400 transition-colors`}
                  style={{
                    background: color.value.includes('gradient') 
                      ? color.value 
                      : `${color.value}20`
                  }}
                >
                  {color.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-white font-medium text-right block mb-2">צבע תת-כותרת</Label>
            <div className="grid grid-cols-2 gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateColor('subheadline', color.value)}
                  className={`p-2 rounded text-xs border ${
                    localEmotional.colors?.subheadline === color.value 
                      ? 'border-blue-400 bg-blue-900/30' 
                      : 'border-gray-600 bg-gray-800'
                  } text-white hover:border-gray-400 transition-colors`}
                  style={{
                    background: color.value.includes('gradient') 
                      ? color.value 
                      : `${color.value}20`
                  }}
                >
                  {color.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* כפתורים */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">כפתורים</h3>
            <Button
              onClick={addButton}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Plus className="w-4 h-4 ml-1" />
              הוסף כפתור
            </Button>
          </div>

          {localEmotional.buttons?.map((button: any) => (
            <div key={button.id} className="bg-gray-800 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-white font-medium">כפתור #{button.id}</Label>
                <Button
                  onClick={() => removeButton(button.id)}
                  size="sm"
                  variant="destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div>
                <Label className="text-gray-300 text-sm text-right block mb-1">טקסט</Label>
                <Input
                  value={button.text || ''}
                  onChange={(e) => updateButton(button.id, 'text', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white text-right"
                  placeholder="טקסט הכפתור..."
                />
              </div>

              <div>
                <Label className="text-gray-300 text-sm text-right block mb-2">צבע כפתור</Label>
                <div className="grid grid-cols-2 gap-1">
                  {colorOptions.slice(0, 8).map((color) => (
                    <button
                      key={color.value}
                      onClick={() => updateButton(button.id, 'color', color.value)}
                      className={`p-1 rounded text-xs border ${
                        button.color === color.value 
                          ? 'border-blue-400' 
                          : 'border-gray-600'
                      } text-white hover:border-gray-400 transition-colors`}
                      style={{
                        background: color.value.includes('gradient') 
                          ? color.value 
                          : `${color.value}40`
                      }}
                    >
                      {color.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EditPopup>
  );
};

export default EmotionalSectionEditor;
