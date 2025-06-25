
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Star } from "lucide-react";
import EditPopup from "./EditPopup";

interface FeaturesEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
}

const FeaturesEditor = ({ content, onContentChange }: FeaturesEditorProps) => {
  const [localContent, setLocalContent] = useState(content);

  const updateTitle = (value: string) => {
    setLocalContent({ ...localContent, featuresTitle: value });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...(localContent.features || [])];
    newFeatures[index] = value;
    setLocalContent({ ...localContent, features: newFeatures });
  };

  const addFeature = () => {
    const newFeatures = [...(localContent.features || []), "תכונה חדשה"];
    setLocalContent({ ...localContent, features: newFeatures });
  };

  const removeFeature = (index: number) => {
    const newFeatures = (localContent.features || []).filter((_: string, i: number) => i !== index);
    setLocalContent({ ...localContent, features: newFeatures });
  };

  const handleSave = () => {
    onContentChange(localContent);
  };

  return (
    <EditPopup
      title="עריכת תכונות ויתרונות"
      triggerText="תכונות ויתרונות"
      icon={Star}
      onSave={handleSave}
    >
      <div className="space-y-4">
        <div>
          <Label className="text-white font-semibold text-right block mb-2">כותרת הסקשן</Label>
          <Input
            value={localContent.featuresTitle || ''}
            onChange={(e) => updateTitle(e.target.value)}
            className="bg-gray-800 border-gray-600 text-white text-right"
            placeholder="הכנס כותרת לסקשן..."
          />
        </div>

        <div>
          <Label className="text-white font-semibold text-right block mb-3">רשימת תכונות</Label>
          <div className="space-y-3">
            {(localContent.features || []).map((feature: string, index: number) => (
              <div key={index} className="flex gap-2">
                <Button
                  onClick={() => removeFeature(index)}
                  variant="destructive"
                  size="sm"
                  className="shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Input
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                  placeholder="הכנס תכונה..."
                />
              </div>
            ))}
            <Button
              onClick={addFeature}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 rounded-xl"
            >
              <Plus className="w-4 h-4 ml-2" />
              הוסף תכונה חדשה
            </Button>
          </div>
        </div>
      </div>
    </EditPopup>
  );
};

export default FeaturesEditor;
