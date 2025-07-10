
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdvancedStyleEditor } from './AdvancedStyleEditor';
import { DynamicFormBuilder } from './DynamicFormBuilder';
import { ABTestingManager } from './ABTestingManager';
import { TemplateData } from '@/types/template';
import { Save, Eye, Code, Settings, Zap, BarChart3 } from 'lucide-react';

interface AdvancedTemplateEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
  onSave: () => void;
}

export const AdvancedTemplateEditor = ({ 
  template, 
  onTemplateChange, 
  onSave 
}: AdvancedTemplateEditorProps) => {
  const [advancedStyles, setAdvancedStyles] = useState(template.advancedStyles || {});
  const [customForms, setCustomForms] = useState(template.customForms || []);
  const [abTests, setAbTests] = useState(template.abTests || []);

  const handleStyleChange = (styles: any) => {
    setAdvancedStyles(styles);
    onTemplateChange({
      ...template,
      advancedStyles: styles
    });
  };

  const handleFormChange = (formData: any) => {
    setCustomForms([formData]);
    onTemplateChange({
      ...template,
      customForms: [formData]
    });
  };

  const handleABTestChange = (tests: any[]) => {
    setAbTests(tests);
    onTemplateChange({
      ...template,
      abTests: tests
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">עורך מתקדם - {template.name}</h1>
          <div className="flex gap-2">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
              <Eye className="w-4 h-4 mr-1" />
              תצוגה מקדימה
            </Button>
            <Button onClick={onSave} className="bg-blue-600 hover:bg-blue-700">
              <Save className="w-4 h-4 mr-1" />
              שמור שינויים
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="styles" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 mb-6">
            <TabsTrigger value="styles" className="text-white data-[state=active]:bg-blue-600">
              <Settings className="w-4 h-4 mr-1" />
              סגנונות מתקדמים
            </TabsTrigger>
            <TabsTrigger value="forms" className="text-white data-[state=active]:bg-blue-600">
              <Code className="w-4 h-4 mr-1" />
              טפסים דינמיים
            </TabsTrigger>
            <TabsTrigger value="abtesting" className="text-white data-[state=active]:bg-blue-600">
              <BarChart3 className="w-4 h-4 mr-1" />
              A/B Testing
            </TabsTrigger>
            <TabsTrigger value="performance" className="text-white data-[state=active]:bg-blue-600">
              <Zap className="w-4 h-4 mr-1" />
              ביצועים ואנליטיקס
            </TabsTrigger>
          </TabsList>

          <TabsContent value="styles">
            <AdvancedStyleEditor
              onStyleChange={handleStyleChange}
              currentStyles={advancedStyles}
            />
          </TabsContent>

          <TabsContent value="forms">
            <DynamicFormBuilder
              onFormChange={handleFormChange}
              currentForm={customForms[0]}
            />
          </TabsContent>

          <TabsContent value="abtesting">
            <ABTestingManager
              onTestChange={handleABTestChange}
              currentTests={abTests}
            />
          </TabsContent>

          <TabsContent value="performance">
            <div className="space-y-6">
              <div className="text-center py-12">
                <Zap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  ביצועים ואנליטיקס
                </h3>
                <p className="text-gray-400">
                  כלים מתקדמים לניטור ואופטימיזציה - בפיתוח
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
