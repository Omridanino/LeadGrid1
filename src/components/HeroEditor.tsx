
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import EditPopup from "./EditPopup";

interface HeroEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData?: any;
}

const HeroEditor = ({ content, onContentChange, formData }: HeroEditorProps) => {
  const [localContent, setLocalContent] = useState(content);

  const updateLocalContent = (field: string, value: string) => {
    setLocalContent({ ...localContent, [field]: value });
  };

  const updateStats = (key: string, value: string) => {
    setLocalContent({ 
      ...localContent, 
      stats: { ...localContent.stats, [key]: value } 
    });
  };

  const handleSave = () => {
    onContentChange(localContent);
  };

  return (
    <EditPopup
      title="עריכת סקשן ראשי"
      triggerText="סקשן ראשי (Hero)"
      icon={Star}
      onSave={handleSave}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-white font-semibold text-right block mb-2">כותרת ראשית</Label>
          <Input
            value={localContent.headline || ''}
            onChange={(e) => updateLocalContent('headline', e.target.value)}
            className="bg-gray-800 border-gray-600 text-white text-right"
            placeholder="הכנס כותרת ראשית..."
          />
        </div>

        <div>
          <Label className="text-white font-semibold text-right block mb-2">כותרת משנה</Label>
          <Textarea
            value={localContent.subheadline || ''}
            onChange={(e) => updateLocalContent('subheadline', e.target.value)}
            className="bg-gray-800 border-gray-600 text-white text-right"
            rows={3}
            placeholder="הכנס כותרת משנה..."
          />
        </div>

        <div>
          <Label className="text-white font-semibold text-right block mb-2">טקסט כפתור</Label>
          <Input
            value={localContent.cta || ''}
            onChange={(e) => updateLocalContent('cta', e.target.value)}
            className="bg-gray-800 border-gray-600 text-white text-right"
            placeholder="הכנס טקסט כפתור..."
          />
        </div>

        <div>
          <Label className="text-white font-semibold text-right block mb-2">תג מעל הכותרת</Label>
          <Input
            value={localContent.badge || ''}
            onChange={(e) => updateLocalContent('badge', e.target.value)}
            className="bg-gray-800 border-gray-600 text-white text-right"
            placeholder="הכנס תג..."
          />
        </div>

        <div>
          <Label className="text-white font-semibold text-right block mb-3">סטטיסטיקות</Label>
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(localContent.stats || {}).map(([key, value]) => (
              <div key={key}>
                <Label className="text-gray-300 text-sm text-right block mb-1">{key}</Label>
                <Input
                  value={value as string}
                  onChange={(e) => updateStats(key, e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white text-right text-sm"
                  placeholder={`הכנס ${key}...`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </EditPopup>
  );
};

export default HeroEditor;
