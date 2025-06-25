
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, ExternalLink, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WordPressIntegrationProps {
  htmlCode: string;
}

const WordPressIntegration = ({ htmlCode }: WordPressIntegrationProps) => {
  const [wpUrl, setWpUrl] = useState("");
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "הועתק!",
      description: "הקוד הועתק ללוח",
    });
  };

  const wpIntegrationCode = `<?php
// הוסף את הקוד הזה לקובץ functions.php של הערכת שלך
function add_leadgrid_landing_page() {
    $leadgrid_html = '${htmlCode.replace(/'/g, "\\'")}';
    return $leadgrid_html;
}

// שורטקוד לחיבור הדף
add_shortcode('leadgrid_page', 'add_leadgrid_landing_page');

// אפשרות להציג כדף נפרד
function leadgrid_custom_page() {
    if (is_page('landing')) {
        echo add_leadgrid_landing_page();
        exit;
    }
}
add_action('template_redirect', 'leadgrid_custom_page');
?>`;

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            🔗 חיבור לוורדפרס
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600' : 'bg-gray-600'}`}>
              {step > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
            </div>
            <span className="text-white">הזן כתובת האתר שלך</span>
          </div>
          
          <Input
            placeholder="https://yoursite.com"
            value={wpUrl}
            onChange={(e) => setWpUrl(e.target.value)}
            className="bg-gray-700 border-gray-600 text-white"
            dir="ltr"
          />
          
          {wpUrl && (
            <Button 
              onClick={() => setStep(2)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              בדוק חיבור
            </Button>
          )}
        </CardContent>
      </Card>

      {step >= 2 && (
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              העתק את הקוד לוורדפרס
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300">
              העתק את הקוד הבא לקובץ functions.php של הערכת שלך:
            </p>
            
            <div className="bg-gray-900 p-4 rounded-lg relative">
              <pre className="text-sm text-green-400 overflow-x-auto whitespace-pre-wrap">
                {wpIntegrationCode}
              </pre>
              <Button
                size="sm"
                onClick={() => copyToClipboard(wpIntegrationCode)}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/20">
              <h4 className="text-white font-semibold mb-2">שתי דרכים להציג:</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• <strong>שורטקוד:</strong> [leadgrid_page] - בכל עמוד או פוסט</li>
                <li>• <strong>עמוד נפרד:</strong> yoursite.com/landing/</li>
              </ul>
            </div>
            
            <Button 
              onClick={() => window.open(`${wpUrl}/wp-admin/theme-editor.php`, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              פתח את עורך הקבצים בוורדפרס
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WordPressIntegration;
