
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorEditor, { ColorScheme } from "./ColorEditor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import WordPressGuide from "./WordPressGuide";
import { 
  Palette, 
  Code, 
  Download, 
  Save, 
  Globe,
  Edit,
  Image,
  Users,
  Star,
  MessageSquare,
  Phone,
  Target,
  Award,
  Upload,
  X,
  FileText
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
  generateHtmlFile: () => string;
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
  const [showWordPressModal, setShowWordPressModal] = useState(false);

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
    if (!newContent.sections.testimonials[index]) {
      newContent.sections.testimonials[index] = {};
    }
    newContent.sections.testimonials[index] = {
      ...newContent.sections.testimonials[index],
      [field]: value
    };
    onContentChange(newContent);
  };

  const updateGalleryImage = (index: number, field: string, value: string) => {
    const newContent = { ...content };
    if (!newContent.sections.gallery) {
      newContent.sections.gallery = { title: "גלריית העבודות שלנו", images: [] };
    }
    if (!newContent.sections.gallery.images[index]) {
      newContent.sections.gallery.images[index] = {};
    }
    newContent.sections.gallery.images[index] = {
      ...newContent.sections.gallery.images[index],
      [field]: value
    };
    onContentChange(newContent);
  };

  const removeGalleryImage = (index: number) => {
    const newContent = { ...content };
    if (newContent.sections.gallery && newContent.sections.gallery.images) {
      newContent.sections.gallery.images.splice(index, 1);
      onContentChange(newContent);
    }
  };

  const addGalleryImage = () => {
    const newContent = { ...content };
    if (!newContent.sections.gallery) {
      newContent.sections.gallery = { title: "גלריית העבודות שלנו", images: [] };
    }
    newContent.sections.gallery.images.push({ url: '', description: '' });
    onContentChange(newContent);
  };

  const updateAboutSection = (field: string, value: string) => {
    const newContent = { ...content };
    if (!newContent.sections.about) {
      newContent.sections.about = {};
    }
    newContent.sections.about[field] = value;
    onContentChange(newContent);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === 'string') {
          callback(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const selectedElements = formData?.selectedElements || [];

  if (showWordPressGuide) {
    return (
      <Card className="w-full bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Globe className="w-5 h-5" />
            מדריך WordPress מלא
            <Button
              onClick={() => setShowWordPressModal(false)}
              className="mr-auto bg-red-600 hover:bg-red-700 p-2"
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WordPressGuide htmlCode={generateHtmlFile()} />
        </CardContent>
      </Card>
    );
  }

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
              <div className="flex gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, onHeroImageChange)}
                  className="hidden"
                  id="hero-upload"
                />
                <Button
                  onClick={() => document.getElementById('hero-upload')?.click()}
                  className="bg-blue-600 hover:bg-blue-700 text-xs"
                  size="sm"
                >
                  <Upload className="w-3 h-3 mr-1" />
                  העלה תמונה
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                רלוונטי רק כשנבחר "תמונת רקע" בסגנון ההירו
              </p>
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

            {/* Gallery Section Editing */}
            {selectedElements.includes('gallery') && (
              <div className="space-y-3">
                <h3 className="font-semibold text-orange-400 flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  עריכת גלריה
                </h3>
                <div className="space-y-2">
                  <Label>כותרת הגלריה</Label>
                  <Input
                    value={content?.sections?.gallery?.title || 'גלריית העבודות שלנו'}
                    onChange={(e) => updateContent('gallery', 'title', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>תמונות</Label>
                    <Button
                      onClick={addGalleryImage}
                      className="bg-green-600 hover:bg-green-700 text-xs"
                      size="sm"
                    >
                      <Upload className="w-3 h-3 mr-1" />
                      הוסף תמונה
                    </Button>
                  </div>
                  {content?.sections?.gallery?.images?.map((image: any, index: number) => (
                    <div key={index} className="border border-gray-600 rounded-lg p-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>תמונה {index + 1}</Label>
                        <Button
                          onClick={() => removeGalleryImage(index)}
                          className="bg-red-600 hover:bg-red-700 p-1"
                          size="sm"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                      <Input
                        placeholder="קישור לתמונה"
                        value={image.url || ''}
                        onChange={(e) => updateGalleryImage(index, 'url', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                      <div className="flex gap-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, (url) => updateGalleryImage(index, 'url', url))}
                          className="hidden"
                          id={`gallery-upload-${index}`}
                        />
                        <Button
                          onClick={() => document.getElementById(`gallery-upload-${index}`)?.click()}
                          className="bg-blue-600 hover:bg-blue-700 text-xs"
                          size="sm"
                        >
                          <Upload className="w-3 h-3 mr-1" />
                          העלה
                        </Button>
                      </div>
                      <Input
                        placeholder="תיאור התמונה"
                        value={image.description || ''}
                        onChange={(e) => updateGalleryImage(index, 'description', e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                  )) || []}
                </div>
              </div>
            )}

            {/* About Section Editing */}
            {selectedElements.includes('about') && (
              <div className="space-y-3">
                <h3 className="font-semibold text-purple-400 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  עריכת "קצת עלינו"
                </h3>
                <div className="space-y-2">
                  <Label>כותרת</Label>
                  <Input
                    value={content?.sections?.about?.title || 'קצת עלינו'}
                    onChange={(e) => updateAboutSection('title', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>פסקה ראשונה</Label>
                  <Textarea
                    value={content?.sections?.about?.paragraph1 || 'אנחנו צוות מקצועי עם ניסיון של מעל 10 שנים בתחום.'}
                    onChange={(e) => updateAboutSection('paragraph1', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>פסקה שנייה</Label>
                  <Textarea
                    value={content?.sections?.about?.paragraph2 || 'המטרה שלנו היא לספק שירות ברמה הגבוהה ביותר.'}
                    onChange={(e) => updateAboutSection('paragraph2', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>תמונת הצוות</Label>
                  <Input
                    placeholder="קישור לתמונה"
                    value={content?.sections?.about?.image || ''}
                    onChange={(e) => updateAboutSection('image', e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <div className="flex gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, (url) => updateAboutSection('image', url))}
                      className="hidden"
                      id="about-upload"
                    />
                    <Button
                      onClick={() => document.getElementById('about-upload')?.click()}
                      className="bg-blue-600 hover:bg-blue-700 text-xs"
                      size="sm"
                    >
                      <Upload className="w-3 h-3 mr-1" />
                      העלה תמונה
                    </Button>
                  </div>
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
                יצירת קשר
              </h3>
              <div className="space-y-2">
                <Label>כותרת יצירת קשר</Label>
                <Input
                  value={content?.contactTitle || ''}
                  onChange={(e) => updateContent('root', 'contactTitle', e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="elements" className="space-y-4">
            <h3 className="font-semibold text-white">אלמנטים נבחרים</h3>
            
            {selectedElements.includes('gallery') && (
              <div className="border border-gray-600 rounded-lg p-4 space-y-3">
                <h4 className="font-medium text-blue-400 flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  גלריית תמונות
                </h4>
                <p className="text-sm text-gray-400">
                  ✅ הגלריה מוצגת בדף - ניתן לערוך בלשונית התוכן
                </p>
              </div>
            )}

            {selectedElements.includes('process') && (
              <div className="border border-gray-600 rounded-lg p-4 space-y-3">
                <h4 className="font-medium text-green-400 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  תהליך השירות הטכנולוגי
                </h4>
                <p className="text-sm text-gray-400">
                  ✅ תהליך השירות מוצג בדף עם עיצוב טכנולוגי מתקדם
                </p>
              </div>
            )}

            {selectedElements.includes('about') && (
              <div className="border border-gray-600 rounded-lg p-4 space-y-3">
                <h4 className="font-medium text-purple-400 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  קצת עלינו
                </h4>
                <p className="text-sm text-gray-400">
                  ✅ סקשן "קצת עלינו" מוצג בדף - ניתן לערוך בלשונית התוכן
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
                onClick={() => {
                  const htmlContent = generateHtmlFile();
                  const blob = new Blob([htmlContent], { type: 'text/html' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${formData.businessName?.replace(/\s+/g, '_') || 'landing_page'}.html`;
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Download className="w-4 h-4 mr-2" />
                הורד קובץ HTML
              </Button>
              
              <Button
                onClick={() => setShowWordPressModal(true)}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Globe className="w-4 h-4 mr-2" />
                מדריך WordPress מלא
              </Button>
              
              <Button
                onClick={onAdvancedEdit}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                <Code className="w-4 h-4 mr-2" />
                עריכה מתקדמת
              </Button>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/30">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                מידע חשוב:
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• קובץ ה-HTML כולל את כל הקוד הדרוש</li>
                <li>• המדריך כולל הסברים מפורטים על WordPress</li>
                <li>• הסבר על אלמנטור ואחסון</li>
                <li>• הוראות ליצירת משתמש חדש</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        {showWordPressModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <WordPressGuide htmlCode={generateHtmlFile()} />
              <div className="p-4 border-t border-gray-700">
                <Button
                  onClick={() => setShowWordPressModal(false)}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  סגור
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OptionsPanel;
