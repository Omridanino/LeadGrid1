
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ExternalLink, Palette, FileText, Edit, Settings, Save, CheckCircle, Lock, Upload, Image as ImageIcon } from "lucide-react";
import ColorEditor, { ColorScheme } from "@/components/ColorEditor";
import WordPressIntegration from "@/components/WordPressIntegration";
import AdvancedEditor from "@/components/AdvancedEditor";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface OptionsPanelProps {
  showDesignEditor: boolean;
  showWordPressGuide: boolean;
  showAdvancedEditor?: boolean;
  isSaved?: boolean;
  onColorChange: (colors: ColorScheme) => void;
  onDesignEdit: () => void;
  onWordPressIntegration: () => void;
  onAdvancedEdit?: () => void;
  onSave?: () => void;
  generateHtmlFile: () => string;
  content?: any;
  onContentChange?: (newContent: any) => void;
  formData?: any;
  onFormDataChange?: (newFormData: any) => void;
  heroImage?: string;
  onHeroImageChange?: (imageUrl: string) => void;
}

const OptionsPanel = ({ 
  showDesignEditor, 
  showWordPressGuide, 
  showAdvancedEditor = false,
  isSaved = false,
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
  const [isGeneratingCode, setIsGeneratingCode] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onHeroImageChange) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        onHeroImageChange(imageUrl);
        toast({
          title: "🖼️ תמונה הועלתה!",
          description: "התמונה החדשה הוחלה על הדף",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWordPressIntegrationWithEffect = async () => {
    if (!isSaved) {
      toast({
        title: "⚠️ יש לשמור קודם",
        description: "אנא שמור את העיצוב לפני החיבור לוורדפרס",
        variant: "destructive"
      });
      return;
    }

    setIsGeneratingCode(true);
    
    // Cool code generation effect
    toast({
      title: "🚀 מתחיל יצירת קוד...",
      description: "מנתח את העיצוב ויוצר קוד HTML מותאם אישית",
    });

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "⚡ מעבד תוכן...",
      description: "מייצר סקשנים, צבעים ותכונות מתקדמות",
    });

    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast({
      title: "🎨 מיישם עיצוב...",
      description: "מטמיע צבעים, גופנים ואלמנטים ויזואליים",
    });

    await new Promise(resolve => setTimeout(resolve, 600));
    
    toast({
      title: "✨ מסיים אופטימיזציה...",
      description: "מבטיח תואמות לכל הדפדפנים ומכשירים",
    });

    await new Promise(resolve => setTimeout(resolve, 400));

    setIsGeneratingCode(false);
    
    toast({
      title: "🎉 קוד HTML מוכן!",
      description: "הקוד נוצר בהצלחה ומוכן לחיבור לוורדפרס",
    });

    onWordPressIntegration();
  };

  return (
    <div className="space-y-6">
      {/* Save Design Card */}
      <Card className={`bg-gradient-to-br ${isSaved ? 'from-green-800 to-gray-900 border-green-700' : 'from-purple-800 to-gray-900 border-purple-700'}`}>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            {isSaved ? <CheckCircle className="w-5 h-5 ml-2 text-green-500" /> : <Save className="w-5 h-5 ml-2 text-purple-500" />}
            {isSaved ? 'העיצוב נשמר!' : 'שמירת עיצוב'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            {isSaved ? 'העיצוב שלך נשמר בהצלחה! כעת תוכל להוריד את הקוד או לחבר לוורדפרס.' : 'שמור את העיצוב הנוכחי לפני הורדת קוד או חיבור לוורדפרס'}
          </p>
          {!isSaved && onSave && (
            <Button 
              onClick={onSave}
              className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl"
            >
              <Save className="w-4 h-4 ml-2" />
              שמור עיצוב
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Hero Image Upload */}
      {formData?.heroStyle === 'image' && (
        <Card className="bg-gradient-to-br from-blue-800 to-gray-900 border-blue-700">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <ImageIcon className="w-5 h-5 ml-2 text-blue-500" />
              תמונת רקע מותאמת
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 text-sm">
              העלה תמונה משלך לרקע הדף במקום התמונה האוטומטית
            </p>
            {heroImage && heroImage.startsWith('data:') && (
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="תצוגה מקדימה" 
                  className="w-full h-20 object-cover rounded-lg border border-blue-600"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-medium">תמונה מותאמת אישית</span>
                </div>
              </div>
            )}
            <label htmlFor="hero-image-upload">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl cursor-pointer"
                asChild
              >
                <span>
                  <Upload className="w-4 h-4 ml-2" />
                  {heroImage && heroImage.startsWith('data:') ? 'החלף תמונה' : 'העלה תמונה'}
                </span>
              </Button>
            </label>
            <input
              id="hero-image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </CardContent>
        </Card>
      )}

      {/* Advanced Content Editor */}
      {showAdvancedEditor && content && onContentChange && formData && onFormDataChange && (
        <AdvancedEditor 
          content={content}
          onContentChange={onContentChange}
          formData={formData}
          onFormDataChange={onFormDataChange}
          heroImage={heroImage}
          onHeroImageChange={onHeroImageChange}
        />
      )}

      {/* Advanced Editor Toggle */}
      <Card className="bg-gradient-to-br from-green-800 to-gray-900 border-green-700">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Settings className="w-5 h-5 ml-2 text-green-500" />
            עריכת תוכן מתקדמת
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            ערוך טקסטים, הוסף תמונות ושנה תוכן באופן מתקדם
          </p>
          <Button 
            onClick={onAdvancedEdit}
            className="w-full bg-green-600 hover:bg-green-700 rounded-xl"
          >
            <Edit className="w-4 h-4 ml-2" />
            {showAdvancedEditor ? 'סגור עורך תוכן' : 'פתח עורך תוכן'}
          </Button>
        </CardContent>
      </Card>

      {/* Color Editor */}
      {showDesignEditor && (
        <ColorEditor onColorChange={onColorChange} />
      )}

      {/* Design Editor */}
      <Card className="bg-gradient-to-br from-purple-800 to-gray-900 border-purple-700">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Edit className="w-5 h-5 ml-2 text-purple-500" />
            עריכת עיצוב
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-sm">
            ערוך את העיצוב של הדף, שנה צבעים, גופנים ועיצוב
          </p>
          <Button 
            onClick={onDesignEdit}
            className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl"
          >
            <Palette className="w-4 h-4 ml-2" />
            {showDesignEditor ? 'סגור עורך עיצוב' : 'פתח עורך עיצוב'}
          </Button>
        </CardContent>
      </Card>

      {/* WordPress Integration */}
      {showWordPressGuide && (
        <WordPressIntegration htmlCode={generateHtmlFile()} />
      )}

      {!showWordPressGuide && (
        <Card className="bg-gradient-to-br from-blue-800 to-gray-900 border-blue-700">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Code className="w-5 h-5 ml-2 text-blue-500" />
              חיבור לוורדפרס
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 text-sm">
              חבר את הדף שלך לאתר וורדפרס קיים
            </p>
            {isGeneratingCode ? (
              <Button 
                disabled
                className="w-full bg-blue-400 rounded-xl"
              >
                <Code className="w-4 h-4 ml-2 animate-spin" />
                יוצר קוד HTML מותאם...
              </Button>
            ) : (
              <Button 
                onClick={handleWordPressIntegrationWithEffect}
                disabled={!isSaved}
                className={`w-full rounded-xl ${isSaved 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-600 cursor-not-allowed'
                }`}
              >
                {isSaved ? (
                  <>
                    <ExternalLink className="w-4 h-4 ml-2" />
                    התחבר לוורדפרס
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 ml-2" />
                    שמור עיצוב לפני חיבור
                  </>
                )}
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Additional Actions */}
      <Card className="bg-gradient-to-br from-purple-900/30 to-gray-900 border-purple-700">
        <CardHeader>
          <CardTitle className="text-lg">פעולות נוספות</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start border-purple-600 hover:bg-purple-600/10 rounded-xl"
          >
            <ExternalLink className="w-4 h-4 ml-2" />
            שיתוף הדף
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start border-purple-600 hover:bg-purple-600/10 rounded-xl"
          >
            <FileText className="w-4 h-4 ml-2" />
            ייצוא ל-PDF
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OptionsPanel;
