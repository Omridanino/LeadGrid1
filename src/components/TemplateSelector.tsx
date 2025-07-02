
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

type Step = 'category' | 'template' | 'customize' | 'launch';

const TemplateSelector = ({ isOpen, onClose, selectedStyle }: TemplateSelectorProps) => {
  const [currentStep, setCurrentStep] = useState<Step>('category');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateData | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<TemplateData | null>(null);
  
  const categories = [
    { id: 'business', name: 'עסקים ושירותים', icon: '💼', description: 'מתאים לעסקים, משרדים ונותני שירותים' },
    { id: 'creative', name: 'יצירתי ועיצוב', icon: '🎨', description: 'לאמנים, מעצבים ויוצרי תוכן' },
    { id: 'tech', name: 'טכנולוגיה וחדשנות', icon: '💻', description: 'חברות טכנולוגיה וסטארטאפים' },
    { id: 'health', name: 'בריאות ורפואה', icon: '🏥', description: 'רופאים, מטפלים ומוסדות בריאות' },
    { id: 'education', name: 'חינוך והכשרה', icon: '📚', description: 'מוסדות חינוך ומרכזי הכשרה' },
    { id: 'ecommerce', name: 'מסחר אלקטרוני', icon: '🛒', description: 'חנויות ומכירות אונליין' }
  ];

  const steps = [
    { id: 'category', name: 'קטגוריה', icon: Layout },
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

  // תיקון הסינון - הצגת כל התבניות
  const filteredTemplates = templates.filter(template => 
    !selectedCategory || template.category === selectedCategory
  );

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] bg-gray-900 border-gray-800 text-white">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-white">
                {currentStep === 'category' && 'בחר קטגוריה'}
                {currentStep === 'template' && 'בחר תבנית'}
                {currentStep === 'customize' && 'עצב את האתר שלך'}
                {currentStep === 'launch' && 'פרסם את האתר שלך'}
              </DialogTitle>
              <DialogDescription className="text-gray-400 mt-1">
                {currentStep === 'category' && 'בחר את הקטגוריה המתאימה לעסק שלך'}
                {currentStep === 'template' && 'בחר את התבנית שהכי מתאימה לך'}
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
              {currentStep === 'category' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className={`
                        cursor-pointer transition-all bg-gray-800 border-gray-700 hover:bg-gray-700
                        ${selectedCategory === category.id ? 'ring-2 ring-blue-500 bg-blue-900/20' : ''}
                      `}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        nextStep();
                      }}
                    >
                      <CardHeader className="text-center">
                        <div className="text-4xl mb-2">{category.icon}</div>
                        <CardTitle className="text-white">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 text-sm text-center">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {currentStep === 'template' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTemplates.map((template) => (
                    <Card
                      key={template.id}
                      className="cursor-pointer transition-all bg-gray-800 border-gray-700 hover:bg-gray-700"
                      onClick={() => handleTemplateSelect(template)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">{template.name}</CardTitle>
                          <Badge className="bg-blue-600 text-white">{template.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-900 p-4 rounded-lg mb-4">
                          <h4 className="text-white font-medium mb-2">{template.hero.title}</h4>
                          <p className="text-gray-400 text-sm">{template.hero.subtitle}</p>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Eye className="w-4 h-4 ml-2" />
                          בחר תבנית זו
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
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
                (currentStep === 'category' && !selectedCategory) ||
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
