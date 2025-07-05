
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
      <div className="fixed inset-0 z-[9999] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900/20 backdrop-blur-lg"></div>
        <div 
          className="relative z-10 h-full overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d97706 transparent'
          }}
        >
          <div className="min-h-full flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-900/95 via-black/95 to-amber-900/20 backdrop-blur-xl rounded-2xl border-2 border-amber-500/30 w-full max-w-2xl p-8 shadow-2xl shadow-amber-500/20">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/50">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">🎉 האתר שלך מוכן!</h3>
                  <p className="text-amber-200">האתר שלך זמין לצפייה עכשיו</p>
                </div>

                <Card className="bg-gradient-to-r from-gray-800/80 to-amber-900/20 border-amber-500/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-right flex-1">
                        <div className="text-white font-semibold mb-1">האתר שלך:</div>
                        <div className="text-amber-400 text-sm break-all">{publishedUrl}</div>
                        <div className="text-green-400 text-xs mt-1 font-medium">✅ זמין לצפייה עכשיו!</div>
                      </div>
                      <div className="flex gap-2 mr-4">
                        <Button
                          size="sm"
                          onClick={copyUrl}
                          className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 border border-amber-500/30"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={openSite}
                          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600"
                        >
                          <ExternalLink className="w-4 h-4 ml-1" />
                          פתח
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-blue-900/30 to-amber-900/20 border-blue-500/30 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2 justify-center">
                        <Globe className="w-4 h-4" />
                        מה עכשיו?
                      </h4>
                      <div className="text-blue-200 text-sm space-y-1">
                        <p>• שתף את הקישור עם חברים</p>
                        <p>• הוסף לכרטיס ביקור</p>
                        <p>• שתף ברשתות החברתיות</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-900/30 to-amber-900/20 border-green-500/30 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2 justify-center">
                        <CheckCircle className="w-4 h-4" />
                        מה קיבלת?
                      </h4>
                      <div className="text-green-200 text-sm space-y-1">
                        <p>• אתר מקצועי וזמין 24/7</p>
                        <p>• מהירות טעינה מעולה</p>
                        <p>• זמינות גבוהה ואמינה</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-8 py-3 shadow-xl shadow-amber-500/30"
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
    <div className="fixed inset-0 z-[9999] overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900/20 backdrop-blur-lg"></div>
      <div 
        className="relative z-10 h-full overflow-y-auto"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#d97706 transparent'
        }}
      >
        <div className="min-h-full">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-gradient-to-r from-black/95 via-gray-900/95 to-amber-900/20 backdrop-blur-xl border-b border-amber-500/30 shadow-xl shadow-amber-500/10">
            <div className="p-6">
              <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div>
                  <h2 className="text-white text-2xl font-bold drop-shadow-lg flex items-center gap-2">
                    🚀 בחר תבנית לאתר שלך
                  </h2>
                  <p className="text-amber-400 text-sm mt-1">תבניות מקצועיות מוכנות לעריכה!</p>
                </div>
                <Button
                  onClick={onClose}
                  size="sm"
                  className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white border border-amber-500/30 shadow-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-6 mb-6">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 shadow-lg shadow-blue-500/30 border border-blue-400/30">
                  <Sparkles className="w-4 h-4 ml-2" />
                  {templates.length} תבניות זמינות
                </Badge>
                <Badge className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 shadow-lg shadow-amber-500/30 border border-amber-400/30">
                  <Globe className="w-4 h-4 ml-2" />
                  מוכן לעריכה
                </Badge>
              </div>
              <p className="text-amber-200">בחר תבנית שמתאימה לעסק שלך ותוכל לערוך אותה לפי הצרכים שלך</p>
            </div>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {templates.map((template) => (
                <Card 
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-xl ${
                    selectedTemplate?.id === template.id 
                      ? 'ring-2 ring-amber-500 bg-gradient-to-br from-amber-900/30 via-gray-800/80 to-amber-900/20 border-amber-500 shadow-amber-500/30' 
                      : 'bg-gradient-to-br from-gray-800/80 via-black/80 to-amber-900/10 border-amber-500/20 hover:border-amber-500/50 shadow-gray-900/50'
                  }`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30 border border-purple-400/30">
                        {template.category}
                      </Badge>
                      
                      <h3 className="text-white font-bold text-lg mb-2 drop-shadow-lg">
                        {template.name}
                      </h3>
                      
                      <div className="bg-gradient-to-br from-gray-900/90 to-black/90 p-4 rounded-lg mb-4 border border-amber-500/20 backdrop-blur-sm shadow-inner">
                        <h4 className="text-amber-400 font-semibold text-sm mb-2">
                          {template.hero.title}
                        </h4>
                        <p className="text-amber-200 text-xs mb-3">
                          {template.hero.subtitle}
                        </p>
                        <div className="flex gap-2 justify-center">
                          <div className="px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs rounded shadow-lg">
                            {template.hero.button1Text}
                          </div>
                          <div className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs rounded shadow-lg border border-amber-500/20">
                            {template.hero.button2Text}
                          </div>
                        </div>
                      </div>

                      {selectedTemplate?.id === template.id && (
                        <div className="text-amber-400 text-sm font-medium drop-shadow-lg flex items-center justify-center gap-1">
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
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 px-12 py-4 text-lg font-bold shadow-2xl shadow-amber-500/40 border border-amber-400/30"
                >
                  <Edit className="w-5 h-5 ml-2" />
                  התחל לערוך את התבנית
                </Button>
                <p className="text-amber-300 text-sm">
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
