
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, X, Sparkles, Palette, Layout, Zap, Eye } from 'lucide-react';
import { templates } from '@/data/templates';
import { TemplateData } from '@/types/template';
import { TemplateEditor } from './template-editor/TemplateEditor';
import { LaunchSection } from './LaunchSection';

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStyle?: string;
}

type Step = 'template' | 'customize' | 'launch';

const TemplateSelector = ({ isOpen, onClose, selectedStyle }: TemplateSelectorProps) => {
  const [currentStep, setCurrentStep] = useState<Step>('template');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<TemplateData | null>(null);
  
  const steps = [
    { id: 'template', name: 'תבנית', icon: Palette },
    { id: 'customize', name: 'עיצוב', icon: Sparkles },
    { id: 'launch', name: 'פרסום', icon: Zap }
  ];

  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  const nextStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      const nextStepId = steps[currentIndex + 1].id as Step;
      
      if (nextStepId === 'customize' && selectedTemplate) {
        setEditingTemplate({ ...selectedTemplate });
      }
      
      setCurrentStep(nextStepId);
    }
  };

  const prevStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as Step);
    }
  };

  const handleTemplateSelect = (template: TemplateData) => {
    setSelectedTemplate(template);
    nextStep();
  };

  const handleCustomizationComplete = (customizedTemplate: TemplateData) => {
    setEditingTemplate(customizedTemplate);
    setSelectedTemplate(customizedTemplate);
    nextStep();
  };

  // נציג את כל התבניות
  const templatesToShow = templates;

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] bg-gray-900 border-gray-800 text-white">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-white">
                {currentStep === 'template' && 'בחר תבנית'}
                {currentStep === 'customize' && 'עצב את האתר שלך'}
                {currentStep === 'launch' && 'פרסם את האתר שלך'}
              </DialogTitle>
              <DialogDescription className="text-gray-400 mt-1">
                {currentStep === 'template' && 'בחר את התבנית שהכי מתאימה לעסק שלך'}
                {currentStep === 'customize' && 'התאם את התוכן והעיצוב לפי הצרכים שלך'}
                {currentStep === 'launch' && 'האתר שלך מוכן לפרסום!'}
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

          {/* Progress Steps */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = getCurrentStepIndex() > index;
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className={`
                      flex items-center justify-center w-10 h-10 rounded-full border-2
                      ${isActive ? 'bg-blue-600 border-blue-600 text-white' : 
                        isCompleted ? 'bg-green-600 border-green-600 text-white' : 
                        'border-gray-600 text-gray-400'}
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="mr-3">
                      <div className={`text-sm font-medium ${isActive ? 'text-white' : isCompleted ? 'text-green-400' : 'text-gray-400'}`}>
                        {step.name}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-0.5 mx-4 ${isCompleted ? 'bg-green-600' : 'bg-gray-600'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6">
              {currentStep === 'template' && (
                <div className="space-y-6">
                  {selectedStyle && (
                    <div className="text-center mb-6">
                      <Badge className="bg-blue-600 text-white px-4 py-2">
                        {selectedStyle === 'minimal' && 'סגנון מינימלי'}
                        {selectedStyle === 'colorful' && 'סגנון צבעוני'}
                        {selectedStyle === 'artistic' && 'סגנון אמנותי'}
                        {selectedStyle === 'corporate' && 'סגנון עסקי'}
                        {selectedStyle === 'organic' && 'סגנון אורגני'}
                        {selectedStyle === 'tech' && 'סגנון טכנולוגי'}
                      </Badge>
                    </div>
                  )}
                  
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
                            <Badge className="bg-blue-600 text-white text-xs">{template.category}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-gray-900 p-4 rounded-lg mb-4">
                            <h4 className="text-white font-medium mb-2">{template.hero.title}</h4>
                            <p className="text-gray-400 text-sm mb-3">{template.hero.subtitle}</p>
                            <div className="flex gap-2">
                              <div className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                                {template.hero.button1Text}
                              </div>
                              <div className="px-2 py-1 bg-gray-600 text-white text-xs rounded">
                                {template.hero.button2Text}
                              </div>
                            </div>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">
                            <Eye className="w-4 h-4 ml-2" />
                            בחר תבנית זו
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 'customize' && editingTemplate && (
                <TemplateEditor
                  template={editingTemplate}
                  onSave={handleCustomizationComplete}
                />
              )}

              {currentStep === 'launch' && selectedTemplate && (
                <LaunchSection
                  template={selectedTemplate}
                  onBack={prevStep}
                />
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Footer Navigation */}
        {currentStep !== 'launch' && (
          <div className="border-t border-gray-800 p-6 flex justify-between">
            <Button
              onClick={prevStep}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
              disabled={getCurrentStepIndex() === 0}
            >
              <ArrowLeft className="w-4 h-4 ml-2" />
              קודם
            </Button>
            
            <Button
              onClick={nextStep}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={
                (currentStep === 'template' && !selectedTemplate) ||
                (currentStep === 'customize' && !editingTemplate)
              }
            >
              {currentStep === 'customize' ? 'המשך לפרסום' : 'הבא'}
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TemplateSelector;
