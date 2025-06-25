
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Edit, Type, Image as ImageIcon, Layout, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageElementsEditor from "@/components/PageElementsEditor";
import SectionEditor from "@/components/SectionEditor";

interface AdvancedEditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
  formData: any;
  onFormDataChange: (newFormData: any) => void;
  heroImage: string;
  onHeroImageChange: (image: string) => void;
}

const AdvancedEditor = ({ 
  content, 
  onContentChange, 
  formData, 
  onFormDataChange,
  heroImage,
  onHeroImageChange 
}: AdvancedEditorProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'basic' | 'sections' | 'elements'>('basic');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        onHeroImageChange(imageUrl);
        toast({
          title: "🖼️ תמונה הועלתה!",
          description: "התמונה נוספה לדף בהצלחה ומעודכנת בתצוגה המקדימה"
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

  const handleElementsChange = (elements: any[]) => {
    onContentChange({
      ...content,
      customElements: elements
    });
  };

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="flex bg-gray-700 rounded-lg p-1">
        <Button
          onClick={() => setActiveTab('basic')}
          className={`flex-1 ${activeTab === 'basic' ? 'bg-gray-600' : 'bg-transparent'}`}
          variant="ghost"
          size="sm"
        >
          <Edit className="w-4 h-4 ml-1" />
          עריכה בסיסית
        </Button>
        <Button
          onClick={() => setActiveTab('sections')}
          className={`flex-1 ${activeTab === 'sections' ? 'bg-gray-600' : 'bg-transparent'}`}
          variant="ghost"
          size="sm"
        >
          <Settings className="w-4 h-4 ml-1" />
          עריכת סקשנים
        </Button>
        <Button
          onClick={() => setActiveTab('elements')}
          className={`flex-1 ${activeTab === 'elements' ? 'bg-gray-600' : 'bg-transparent'}`}
          variant="ghost"
          size="sm"
        >
          <Layout className="w-4 h-4 ml-1" />
          אלמנטים מתקדמים
        </Button>
      </div>

      {activeTab === 'basic' && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Edit className="w-5 h-5 text-green-500" />
              עריכה בסיסית
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload */}
            <div>
              <Label className="text-white font-semibold mb-2 block">
                <ImageIcon className="w-4 h-4 inline ml-1" />
                תמונת רקע לכותרת הראשית
              </Label>
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="bg-gray-700 border-gray-600 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded file:px-4 file:py-2"
                />
                <Button
                  onClick={() => {
                    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                    fileInput?.click();
                  }}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Upload className="w-4 h-4 ml-2" />
                  העלה תמונה
                </Button>
              </div>
              {heroImage && (
                <div className="mt-2">
                  <img 
                    src={heroImage} 
                    alt="תצוגה מקדימה" 
                    className="w-32 h-20 object-cover rounded border"
                  />
                </div>
              )}
            </div>

            {/* Basic Text Editing */}
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
                <Label className="text-white font-semibold">טקסט כפתור קריאה לפעולה</Label>
                <Input
                  value={content.cta}
                  onChange={(e) => updateContent('cta', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            {/* Contact Info and Business Info */}
            <div className="space-y-4">
              <div>
                <Label className="text-white font-semibold">פרטי יצירת קשר</Label>
                <Textarea
                  value={formData.contactInfo}
                  onChange={(e) => updateFormData('contactInfo', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  rows={3}
                />
              </div>

              <div>
                <Label className="text-white font-semibold">שם העסק</Label>
                <Input
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'sections' && (
        <SectionEditor
          content={content}
          onContentChange={onContentChange}
          formData={formData}
          onFormDataChange={onFormDataChange}
        />
      )}

      {activeTab === 'elements' && (
        <PageElementsEditor
          elements={content.customElements || []}
          onElementsChange={handleElementsChange}
          content={content}
          onContentChange={onContentChange}
        />
      )}
    </div>
  );
};

export default AdvancedEditor;
