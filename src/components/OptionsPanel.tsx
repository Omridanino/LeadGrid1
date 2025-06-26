
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorEditor, ColorScheme } from "./ColorEditor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Palette, 
  Code, 
  Download, 
  Save, 
  Wordpress,
  Edit,
  Image,
  Users,
  Star,
  MessageSquare,
  Phone,
  Target,
  Award
} from "lucide-react";

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
  generateHtmlFile: () => void;
  content: any;
  onContentChange: (newContent: any) => void;
  formData: any;
  onFormDataChange: (newFormData: any) => void;
  heroImage: string;
  onHeroImageChange: (imageUrl: string) => void;
}

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
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const updateContent = (section: string, field: string, value: any) => {
    const newContent = { ...content };
    if (section === 'root') {
      newContent[field] = value;
    } else if (newContent.sections && newContent.sections[section]) {
      newContent.sections[section][field] = value;
    }
    onContentChange(newContent);
  };

  const updateTestimonial = (index: number, field: string, value: string) => {
    const newContent = { ...content };
    if (!newContent.sections.testimonials) {
      newContent.sections.testimonials = [];
    }
    newContent.sections.testimonials[index] = {
      ...newContent.sections.testimonials[index],
      [field]: value
    };
    onContentChange(newContent);
  };

  const selectedElements = formData?.selectedElements || [];

  return (
    <Card className="w-full bg-gray-800 border-gray-700 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Edit className="w-5 h-5" />
          עריכה מתקדמת
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-700">
            <TabsTrigger value="design" className="text-xs">
              <Palette className="w-4 h-4 mr-1" />
              עיצוב
            </TabsTrigger>
            <TabsTrigger value="content" className="text-xs">
              <Edit className="w-4 h-4 mr-1" />
              תוכן
            </TabsTrigger>
            <TabsTrigger value="elements" className="text-xs">
              <Target className="w-4 h-4 mr-1" />
              אלמנטים
            </TabsTrigger>
            <TabsTrigger value="export" className="text-xs">
              <Download className="w-4 h-4 mr-1" />
              ייצוא
            </TabsTrigger>
          </TabsList>

          <TabsContent value="design" className="space-y-4">
            <ColorEditor onColorChange={onColorChange} />
            
            <div className="space-y-3">
              <Label className="text-white font-medium">תמונת רקע להירו</Label>
              <Input
                type="url"
                placeholder="הכנס קישור לתמונה"
                value={heroImage}
                onChange={(e) => onHeroImageChange(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            {/* Hero Section Editing */}
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-400 flex items-center gap-2">
                <Star className="w-4 h-4" />
                עריכת סקשן הירו
              </h3>
              <div className="space-y-2">
                <Label>כותרת ראשית</Label>
                <Input
                  value={content?.headline || ''}
                  onChange={(e) => updateContent('root', 'headline', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label>תת-כותרת</Label>
                <Textarea
                  value={content?.subheadline || ''}
                  onChange={(e) => updateContent('root', 'subheadline', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>טקסט הכפתור</Label>
                <Input
                  value={content?.cta || ''}
                  onChange={(e) => updateContent('root', 'cta', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>

            {/* Emotional Section */}
            {content?.sections?.emotionalSection && (
              <div className="space-y-3">
                <h3 className="font-semibold text-purple-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  פסקת רגש
                </h3>
                <div className="space-y-2">
                  <Label>כותרת</Label>
                  <Input
                    value={content.sections.emotionalSection.title || ''}
                    onChange={(e) => updateContent('emotionalSection', 'title', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>תוכן</Label>
                  <Textarea
                    value={content.sections.emotionalSection.content || ''}
                    onChange={(e) => updateContent('emotionalSection', 'content', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Why Us Section */}
            {content?.sections?.whyUs && (
              <div className="space-y-3">
                <h3 className="font-semibold text-green-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  למה לבחור בנו
                </h3>
                <div className="space-y-2">
                  <Label>כותרת ראשית</Label>
                  <Input
                    value={content.sections.whyUs.title || ''}
                    onChange={(e) => updateContent('whyUs', 'title', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            )}

            {/* What We Give Section */}
            {content?.sections?.whatWeGive && (
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-400 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  מה אנחנו נותנים
                </h3>
                <div className="space-y-2">
                  <Label>כותרת ראשית</Label>
                  <Input
                    value={content.sections.whatWeGive.title || ''}
                    onChange={(e) => updateContent('whatWeGive', 'title', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            )}

            {/* Testimonials Section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-yellow-400 flex items-center gap-2">
                <Users className="w-4 h-4" />
                ביקורות לקוחות
              </h3>
              {[0, 1, 2].map((index) => (
                <div key={index} className="border border-gray-600 rounded-lg p-3 space-y-2">
                  <Label>לקוח {index + 1}</Label>
                  <Input
                    placeholder="שם הלקוח"
                    value={content?.sections?.testimonials?.[index]?.name || ''}
                    onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <Input
                    placeholder="תפקיד"
                    value={content?.sections?.testimonials?.[index]?.role || ''}
                    onChange={(e) => updateTestimonial(index, 'role', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <Textarea
                    placeholder="המלצה"
                    value={content?.sections?.testimonials?.[index]?.content || ''}
                    onChange={(e) => updateTestimonial(index, 'content', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={2}
                  />
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="space-y-3">
              <h3 className="font-semibold text-red-400 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                בואו נתחיל לעבוד יחד
              </h3>
              <div className="space-y-2">
                <Label>כותרת יצירת קשר</Label>
                <Input
                  value={content?.contactTitle || content?.sections?.contactTitle || ''}
                  onChange={(e) => updateContent('root', 'contactTitle', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="elements" className="space-y-4">
            <h3 className="font-semibold text-white">אלמנטים נבחרים</h3>
            
            {/* Gallery Element */}
            {selectedElements.includes('gallery') && (
              <div className="border border-gray-600 rounded-lg p-4 space-y-3">
                <h4 className="font-medium text-blue-400 flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  גלריית תמונות
                </h4>
                <p className="text-sm text-gray-400">
                  הגלריה מציגה תמונות מתאימות לתחום העסק שלכם באופן אוטומטי
                </p>
              </div>
            )}

            {/* Process Element */}
            {selectedElements.includes('process') && (
              <div className="border border-gray-600 rounded-lg p-4 space-y-3">
                <h4 className="font-medium text-green-400 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  תהליך השירות
                </h4>
                <p className="text-sm text-gray-400">
                  מציג את שלבי העבודה שלכם בצורה מקצועית
                </p>
              </div>
            )}

            {/* About Element */}
            {selectedElements.includes('about') && (
              <div className="border border-gray-600 rounded-lg p-4 space-y-3">
                <h4 className="font-medium text-purple-400 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  קצת עלינו
                </h4>
                <p className="text-sm text-gray-400">
                  מציג מידע על הצוות והחזון שלכם
                </p>
              </div>
            )}

            {selectedElements.length === 0 && (
              <p className="text-gray-400 text-center py-8">
                לא נבחרו אלמנטים נוספים
              </p>
            )}
          </TabsContent>

          <TabsContent value="export" className="space-y-4">
            <div className="space-y-3">
              <Button
                onClick={onSave}
                className={`w-full ${isSaved ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaved ? 'נשמר בהצלחה' : 'שמור עיצוב'}
              </Button>
              
              <Button
                onClick={generateHtmlFile}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Download className="w-4 h-4 mr-2" />
                הורד קובץ HTML
              </Button>
              
              <Button
                onClick={onWordPressIntegration}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Wordpress className="w-4 h-4 mr-2" />
                ייצוא ל-WordPress
              </Button>
              
              <Button
                onClick={onAdvancedEdit}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                <Code className="w-4 h-4 mr-2" />
                עריכה מתקדמת
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default OptionsPanel;
