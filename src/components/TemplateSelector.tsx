
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  CheckCircle, 
  ExternalLink,
  Globe,
  Sparkles,
  Edit,
  Eye,
  Copy
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { templates } from '@/data/templates';
import TemplateEditor from './ModernTemplateEditor';

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const TemplateSelector = ({ isOpen, onClose }: TemplateSelectorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<TemplateData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTemplateSelect = (template: TemplateData) => {
    setSelectedTemplate(template);
    setEditingTemplate(template);
  };

  const handleEditTemplate = () => {
    if (selectedTemplate) {
      setIsEditing(true);
    }
  };

  const handleTemplateChange = (updatedTemplate: TemplateData) => {
    setEditingTemplate(updatedTemplate);
  };

  const handlePublishSuccess = (url: string) => {
    setPublishedUrl(url);
    setShowSuccess(true);
    setIsEditing(false);
  };

  const openSite = () => {
    if (publishedUrl) {
      window.open(publishedUrl, '_blank');
    }
  };

  const copyUrl = () => {
    if (publishedUrl) {
      navigator.clipboard.writeText(publishedUrl);
      alert('הכתובת הועתקה!');
    }
  };

  if (!isOpen) return null;

  // Show success screen
  if (showSuccess && publishedUrl) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
        <div className="h-full overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-gray-900 text-2xl font-bold mb-2">🎉 האתר שלך מוכן!</h3>
                  <p className="text-gray-600">האתר שלך זמין לצפייה עכשיו</p>
                </div>

                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-right flex-1">
                        <div className="text-gray-900 font-semibold mb-1">האתר שלך:</div>
                        <div className="text-blue-600 text-sm break-all">{publishedUrl}</div>
                        <div className="text-green-600 text-xs mt-1 font-medium">✅ זמין לצפייה עכשיו!</div>
                      </div>
                      <div className="flex gap-2 mr-4">
                        <Button
                          size="sm"
                          onClick={copyUrl}
                          variant="outline"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={openSite}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <ExternalLink className="w-4 h-4 ml-1" />
                          פתח
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <h4 className="text-blue-800 font-semibold mb-2 flex items-center gap-2 justify-center">
                        <Globe className="w-4 h-4" />
                        מה עכשיו?
                      </h4>
                      <div className="text-blue-700 text-sm space-y-1">
                        <p>• שתף את הקישור עם חברים</p>
                        <p>• הוסף לכרטיס ביקור</p>
                        <p>• שתף ברשתות החברתיות</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <h4 className="text-green-800 font-semibold mb-2 flex items-center gap-2 justify-center">
                        <CheckCircle className="w-4 h-4" />
                        מה קיבלת?
                      </h4>
                      <div className="text-green-700 text-sm space-y-1">
                        <p>• אתר מקצועי וזמין 24/7</p>
                        <p>• מהירות טעינה מעולה</p>
                        <p>• זמינות גבוהה ואמינה</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button
                  onClick={onClose}
                  className="bg-gray-900 hover:bg-gray-800 px-8 py-3"
                >
                  סיום
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show template editor
  if (isEditing && editingTemplate) {
    return (
      <TemplateEditor
        template={editingTemplate}
        onTemplateChange={handleTemplateChange}
        onClose={() => setIsEditing(false)}
        onPublishSuccess={handlePublishSuccess}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm" dir="rtl">
      <div className="h-full overflow-y-auto">
        <div className="min-h-full">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div>
                  <h2 className="text-gray-900 text-2xl font-bold flex items-center gap-2">
                    🚀 בחר תבנית לאתר שלך
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">תבניות מקצועיות מוכנות לעריכה!</p>
                </div>
                <Button
                  onClick={onClose}
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-w-6xl mx-auto bg-white min-h-full">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-6 mb-6">
                <Badge className="bg-blue-600 text-white px-4 py-2">
                  <Sparkles className="w-4 h-4 ml-2" />
                  {templates.length} תבניות זמינות
                </Badge>
                <Badge className="bg-green-600 text-white px-4 py-2">
                  <Globe className="w-4 h-4 ml-2" />
                  מוכן לעריכה
                </Badge>
              </div>
              <p className="text-gray-600">בחר תבנית שמתאימה לעסק שלך ותוכל לערוך אותה לפי הצרכים שלך</p>
            </div>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {templates.map((template) => (
                <Card 
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedTemplate?.id === template.id 
                      ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-500' 
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge className="mb-4 bg-purple-600 text-white">
                        {template.category}
                      </Badge>
                      
                      <h3 className="text-gray-900 font-bold text-lg mb-2">
                        {template.name}
                      </h3>
                      
                      <div className="bg-gray-100 p-4 rounded-lg mb-4 border">
                        <h4 className="text-blue-600 font-semibold text-sm mb-2">
                          {template.hero.title}
                        </h4>
                        <p className="text-gray-600 text-xs mb-3">
                          {template.hero.subtitle}
                        </p>
                        <div className="flex gap-2 justify-center">
                          <div className="px-3 py-1 bg-blue-600 text-white text-xs rounded">
                            {template.hero.button1Text}
                          </div>
                          <div className="px-3 py-1 bg-gray-600 text-white text-xs rounded">
                            {template.hero.button2Text}
                          </div>
                        </div>
                      </div>

                      {selectedTemplate?.id === template.id && (
                        <div className="text-blue-600 text-sm font-medium flex items-center justify-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          נבחר
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Button */}
            {selectedTemplate && (
              <div className="text-center space-y-4 pb-8">
                <Button
                  onClick={handleEditTemplate}
                  className="bg-blue-600 hover:bg-blue-700 px-12 py-4 text-lg font-bold"
                >
                  <Edit className="w-5 h-5 ml-2" />
                  התחל לערוך את התבנית
                </Button>
                <p className="text-gray-600 text-sm">
                  תוכל לערוך את התבנית ולהתאים אותה לצרכים שלך לפני הפרסום
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
