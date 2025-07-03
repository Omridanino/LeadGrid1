
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Eye, Palette } from 'lucide-react';
import { templates } from '@/data/templates';
import { TemplateData } from '@/types/template';
import TemplateEditor from './TemplateEditor';

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStyle?: string;
}

const TemplateSelector = ({ isOpen, onClose, selectedStyle }: TemplateSelectorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleTemplateSelect = (template: TemplateData) => {
    setSelectedTemplate(template);
    setShowEditor(true);
  };

  const handleTemplateChange = (updatedTemplate: TemplateData) => {
    setSelectedTemplate(updatedTemplate);
  };

  const handleCloseEditor = () => {
    setShowEditor(false);
    setSelectedTemplate(null);
  };

  // נציג את כל התבניות
  const templatesToShow = templates;

  if (!isOpen) return null;

  if (showEditor && selectedTemplate) {
    return (
      <TemplateEditor
        template={selectedTemplate}
        onTemplateChange={handleTemplateChange}
        onClose={handleCloseEditor}
      />
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] bg-gray-900 border-gray-800 text-white">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-white">
                בחר תבנית
              </DialogTitle>
              <DialogDescription className="text-gray-400 mt-1">
                בחר את התבנית שהכי מתאימה לעסק שלך
              </DialogDescription>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templatesToShow.map((template) => (
                  <Card
                    key={template.id}
                    className="cursor-pointer transition-all bg-gray-800 border-gray-700 hover:bg-gray-700 hover:scale-105"
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-lg">{template.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-600 text-white text-xs">{template.category}</Badge>
                        </div>
                      </div>
                      
                      {/* Color Palette Display */}
                      <div className="flex items-center gap-2 mt-2">
                        <Palette className="w-4 h-4 text-gray-400" />
                        <div className="flex items-center gap-1">
                          <div 
                            className="w-6 h-6 rounded-full border-2 border-white/20 shadow-sm"
                            style={{ backgroundColor: template.styles.primaryColor }}
                            title={`צבע ראשי: ${template.styles.primaryColor}`}
                          ></div>
                          <div 
                            className="w-6 h-6 rounded-full border-2 border-white/20 shadow-sm"
                            style={{ backgroundColor: template.styles.secondaryColor }}
                            title={`צבע משני: ${template.styles.secondaryColor}`}
                          ></div>
                          <span className="text-xs text-gray-400 mr-2">צבעי התבנית</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 p-4 rounded-lg mb-4">
                        <h4 className="text-white font-medium mb-2">{template.hero.title}</h4>
                        <p className="text-gray-400 text-sm mb-3">{template.hero.subtitle}</p>
                        <div className="flex gap-2">
                          <div 
                            className="px-2 py-1 text-white text-xs rounded"
                            style={{ backgroundColor: template.styles.primaryColor }}
                          >
                            {template.hero.button1Text}
                          </div>
                          <div className="px-2 py-1 bg-gray-600 text-white text-xs rounded">
                            {template.hero.button2Text}
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Eye className="w-4 h-4 ml-2" />
                        בחר ועצב תבנית זו
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateSelector;
