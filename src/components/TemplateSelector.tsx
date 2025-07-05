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
import GlassIcon from "@/components/ui/glass-icon";

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const TemplateSelector = ({ isOpen, onClose, initialCategory }: TemplateSelectorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<TemplateData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || '');

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
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
        <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-2xl p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">🎉 האתר שלך מוכן!</h3>
              <p className="text-gray-400">האתר שלך זמין לצפייה עכשיו</p>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-right flex-1">
                    <div className="text-white font-semibold mb-1">האתר שלך:</div>
                    <div className="text-blue-400 text-sm break-all">{publishedUrl}</div>
                    <div className="text-green-400 text-xs mt-1 font-medium">✅ זמין לצפייה עכשיו!</div>
                  </div>
                  <div className="flex gap-2 mr-4">
                    <Button
                      size="sm"
                      onClick={copyUrl}
                      className="bg-gray-700 hover:bg-gray-600"
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
              <Card className="bg-blue-900/30 border-blue-700/30">
                <CardContent className="p-4">
                  <h4 className="text-blue-300 font-semibold mb-2 flex items-center gap-2">
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

              <Card className="bg-green-900/30 border-green-700/30">
                <CardContent className="p-4">
                  <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
            >
              סיום
            </Button>
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
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-8 border-b border-gray-700/50 flex-shrink-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-4 mb-4">
                <GlassIcon 
                  icon={Sparkles} 
                  size="lg" 
                  variant="gold"
                />
                <h2 className="text-white text-3xl font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                  בחר תבנית לאתר שלך
                </h2>
                <GlassIcon 
                  icon={Sparkles} 
                  size="lg" 
                  variant="gold"
                />
              </div>
              <p className="text-green-400 text-lg font-semibold">תבניות מקצועיות מוכנות לעריכה!</p>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-yellow-400/10 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20 rounded-xl"
            >
              <GlassIcon 
                icon={X} 
                size="sm" 
                variant="gold"
              />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <div className="p-6 h-full overflow-y-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-8 mb-8">
                <Badge className="bg-yellow-400/15 backdrop-blur-xl border border-yellow-400/40 text-yellow-400 px-6 py-3 text-lg font-bold rounded-xl shadow-2xl">
                  <GlassIcon 
                    icon={Sparkles} 
                    size="sm" 
                    variant="gold"
                  />
                  <span className="mr-3">{templates.length} תבניות זמינות</span>
                </Badge>
                <Badge className="bg-green-400/15 backdrop-blur-xl border border-green-400/40 text-green-400 px-6 py-3 text-lg font-bold rounded-xl shadow-2xl">
                  <GlassIcon 
                    icon={Globe} 
                    size="sm" 
                    variant="gold"
                  />
                  <span className="mr-3">מוכן לעריכה</span>
                </Badge>
              </div>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                בחר תבנית שמתאימה לעסק שלך ותוכל לערוך אותה לפי הצרכים שלך
              </p>
            </div>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {templates
                .filter(template => !selectedCategory || template.category === selectedCategory)
                .map((template) => (
                <Card 
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedTemplate?.id === template.id 
                      ? 'ring-2 ring-blue-500 bg-blue-900/20 border-blue-500' 
                      : 'bg-gray-800 border-gray-700 hover:border-blue-500/50'
                  }`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge className="mb-4 bg-purple-600 text-white">
                        {template.category}
                      </Badge>
                      
                      <h3 className="text-white font-bold text-lg mb-2">
                        {template.name}
                      </h3>
                      
                      <div className="bg-gray-900 p-4 rounded-lg mb-4 border border-gray-700">
                        <h4 className="text-blue-400 font-semibold text-sm mb-2">
                          {template.hero.title}
                        </h4>
                        <p className="text-gray-400 text-xs mb-3">
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
                        <div className="text-blue-400 text-sm font-medium">
                          ✓ נבחר
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Button */}
            {selectedTemplate && (
              <div className="text-center space-y-4">
                <Button
                  onClick={handleEditTemplate}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 text-lg font-bold"
                >
                  <Edit className="w-5 h-5 ml-2" />
                  התחל לערוך את התבנית
                </Button>
                <p className="text-gray-500 text-sm">
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
