
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Edit, Type, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdvancedEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData: any;
  onFormDataChange: (newFormData: any) => void;
}

const AdvancedEditor = ({ content, onContentChange, formData, onFormDataChange }: AdvancedEditorProps) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        onContentChange({
          ...content,
          heroImage: imageUrl
        });
        toast({
          title: "🖼️ תמונה הועלתה!",
          description: "התמונה נוספה לדף בהצלחה"
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateContent = (field: string, value: string) => {
    onContentChange({
      ...content,
      [field]: value
    });
  };

  const updateFormData = (field: string, value: string) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  const addFeature = () => {
    const newFeature = "תכונה חדשה";
    onContentChange({
      ...content,
      features: [...content.features, newFeature]
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...content.features];
    newFeatures[index] = value;
    onContentChange({
      ...content,
      features: newFeatures
    });
  };

  const removeFeature = (index: number) => {
    const newFeatures = content.features.filter((_: string, i: number) => i !== index);
    onContentChange({
      ...content,
      features: newFeatures
    });
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Edit className="w-5 h-5 text-green-500" />
          עריכה מתקדמת
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Image Upload */}
        <div>
          <Label className="text-white font-semibold mb-2 block">
            <ImageIcon className="w-4 h-4 inline ml-1" />
            תמונת רקע לכותרת
          </Label>
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="bg-gray-700 border-gray-600 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded file:px-4 file:py-2"
            />
            <Button
              onClick={() => document.querySelector('input[type="file"]')?.click()}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Upload className="w-4 h-4 ml-2" />
              העלה תמונה
            </Button>
          </div>
        </div>

        {/* Text Editing */}
        <div className="space-y-4">
          <div>
            <Label className="text-white font-semibold">
              <Type className="w-4 h-4 inline ml-1" />
              כותרת ראשית
            </Label>
            <Input
              value={content.headline}
              onChange={(e) => updateContent('headline', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label className="text-white font-semibold">כותרת משנה</Label>
            <Textarea
              value={content.subheadline}
              onChange={(e) => updateContent('subheadline', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              rows={2}
            />
          </div>

          <div>
            <Label className="text-white font-semibold">טקסט קריאה לפעולה</Label>
            <Input
              value={content.cta}
              onChange={(e) => updateContent('cta', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>

          <div>
            <Label className="text-white font-semibold">טקסט אודות</Label>
            <Textarea
              value={content.aboutText}
              onChange={(e) => updateContent('aboutText', e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              rows={4}
            />
          </div>
        </div>

        {/* Features Editing */}
        <div>
          <Label className="text-white font-semibold mb-3 block">תכונות המוצר/שירות</Label>
          <div className="space-y-2">
            {content.features.map((feature: string, index: number) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white flex-1"
                />
                <Button
                  onClick={() => removeFeature(index)}
                  variant="destructive"
                  size="sm"
                >
                  ✕
                </Button>
              </div>
            ))}
            <Button
              onClick={addFeature}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              + הוסף תכונה
            </Button>
          </div>
        </div>

        {/* Contact Info Editing */}
        <div>
          <Label className="text-white font-semibold">פרטי יצירת קשר</Label>
          <Textarea
            value={formData.contactInfo}
            onChange={(e) => updateFormData('contactInfo', e.target.value)}
            className="bg-gray-700 border-gray-600 text-white"
            rows={3}
          />
        </div>

        {/* Business Name */}
        <div>
          <Label className="text-white font-semibold">שם העסק</Label>
          <Input
            value={formData.businessName}
            onChange={(e) => updateFormData('businessName', e.target.value)}
            className="bg-gray-700 border-gray-600 text-white"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvancedEditor;
