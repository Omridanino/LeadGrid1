
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Rocket, 
  CheckCircle, 
  ExternalLink,
  ArrowRight,
  Globe,
  Sparkles,
  Edit,
  Eye
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { templates } from '@/data/templates';
import TemplateEditor from './TemplateEditor';
import { NewPublishingWizard } from './publishing/NewPublishingWizard';

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const TemplateSelector = ({ isOpen, onClose }: TemplateSelectorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<TemplateData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showPublishingWizard, setShowPublishingWizard] = useState(false);

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

  const handlePublishNow = () => {
    if (editingTemplate) {
      setShowPublishingWizard(true);
    }
  };

  if (!isOpen) return null;

  // Show publishing wizard
  if (showPublishingWizard && editingTemplate) {
    return (
      <NewPublishingWizard
        template={editingTemplate}
        isOpen={showPublishingWizard}
        onClose={() => {
          setShowPublishingWizard(false);
          onClose(); // Close the entire template selector when publishing is done
        }}
      />
    );
  }

  // Show template editor
  if (isEditing && editingTemplate) {
    return (
      <TemplateEditor
        template={editingTemplate}
        onTemplateChange={handleTemplateChange}
        onClose={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">🚀 בחר תבנית לאתר שלך</h2>
              <p className="text-green-400 text-sm mt-1">תבניות מקצועיות מוכנות לפרסום מיידי!</p>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <div className="p-6 h-full overflow-y-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-6 mb-6">
                <Badge className="bg-blue-600 text-white px-4 py-2">
                  <Sparkles className="w-4 h-4 ml-2" />
                  {templates.length} תבניות זמינות
                </Badge>
                <Badge className="bg-green-600 text-white px-4 py-2">
                  <Globe className="w-4 h-4 ml-2" />
                  פרסום מיידי
                </Badge>
              </div>
              <p className="text-gray-400">בחר תבנית שמתאימה לעסק שלך ונפרסם אותה מיד</p>
            </div>

            {/* Templates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {templates.map((template) => (
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

            {/* Action Buttons */}
            {selectedTemplate && (
              <div className="text-center space-y-4">
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={handleEditTemplate}
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-bold"
                  >
                    <Edit className="w-5 h-5 ml-2" />
                    ערוך את התבנית
                  </Button>
                  <Button
                    onClick={handlePublishNow}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 text-lg font-bold"
                  >
                    פרסם מיד
                    <Rocket className="w-5 h-5 mr-2" />
                  </Button>
                </div>
                <p className="text-gray-500 text-sm">
                  תוכל לערוך את התבנית לפני הפרסום או לפרסם מיד כמו שהיא
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
