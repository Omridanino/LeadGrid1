
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ExternalLink, Palette, FileText, Edit, Settings } from "lucide-react";
import ColorEditor, { ColorScheme } from "@/components/ColorEditor";
import WordPressIntegration from "@/components/WordPressIntegration";
import AdvancedEditor from "@/components/AdvancedEditor";

interface OptionsPanelProps {
  showDesignEditor: boolean;
  showWordPressGuide: boolean;
  showAdvancedEditor?: boolean;
  onColorChange: (colors: ColorScheme) => void;
  onDesignEdit: () => void;
  onWordPressIntegration: () => void;
  onAdvancedEdit?: () => void;
  generateHtmlFile: () => string;
  content?: any;
  onContentChange?: (newContent: any) => void;
  formData?: any;
  onFormDataChange?: (newFormData: any) => void;
}

const OptionsPanel = ({ 
  showDesignEditor, 
  showWordPressGuide, 
  showAdvancedEditor = false,
  onColorChange, 
  onDesignEdit, 
  onWordPressIntegration,
  onAdvancedEdit,
  generateHtmlFile,
  content,
  onContentChange,
  formData,
  onFormDataChange
}: OptionsPanelProps) => {
  return (
    <div className="space-y-6">
      {/* Advanced Content Editor */}
      {showAdvancedEditor && content && onContentChange && formData && onFormDataChange && (
        <AdvancedEditor 
          content={content}
          onContentChange={onContentChange}
          formData={formData}
          onFormDataChange={onFormDataChange}
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
            <Button 
              onClick={onWordPressIntegration}
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
            >
              <ExternalLink className="w-4 h-4 ml-2" />
              התחבר לוורדפרס
            </Button>
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
