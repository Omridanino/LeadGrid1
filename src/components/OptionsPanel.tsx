
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ExternalLink, Palette, FileText, Edit } from "lucide-react";
import ColorEditor, { ColorScheme } from "@/components/ColorEditor";
import WordPressIntegration from "@/components/WordPressIntegration";

interface OptionsPanelProps {
  showDesignEditor: boolean;
  showWordPressGuide: boolean;
  onColorChange: (colors: ColorScheme) => void;
  onDesignEdit: () => void;
  onWordPressIntegration: () => void;
  generateHtmlFile: () => string;
}

const OptionsPanel = ({ 
  showDesignEditor, 
  showWordPressGuide, 
  onColorChange, 
  onDesignEdit, 
  onWordPressIntegration,
  generateHtmlFile 
}: OptionsPanelProps) => {
  return (
    <div className="space-y-6">
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
