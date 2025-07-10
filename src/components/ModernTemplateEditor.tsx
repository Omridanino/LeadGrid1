
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  Save, 
  ArrowLeft, 
  Rocket, 
  Edit, 
  Settings, 
  Monitor, 
  Search, 
  Smartphone, 
  BarChart3, 
  FileText, 
  Timer, 
  MousePointer, 
  Bell, 
  Shield,
  Palette,
  Zap,
  Gauge
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { TemplatePreview } from './template-editor/TemplatePreview';
import AdvancedEditor from './AdvancedEditor';
import { SEOEditor } from './advanced/SEOEditor';
import { ResponsiveEditor } from './advanced/ResponsiveEditor';
import { AnalyticsEditor } from './advanced/AnalyticsEditor';
import { DynamicFormBuilder } from './advanced/DynamicFormBuilder';
import { PopupTimerEditor } from './advanced/PopupTimerEditor';
import { InteractivityEditor } from './advanced/InteractivityEditor';
import { NotificationEditor } from './advanced/NotificationEditor';
import { SecurityEditor } from './advanced/SecurityEditor';
import { DevicePreview } from './advanced/DevicePreview';
import { SEOOptimizer } from './advanced/SEOOptimizer';
import { PerformanceOptimizer } from './advanced/PerformanceOptimizer';
import { ABTestManager } from './advanced/ABTestManager';
import { AdvancedDesignSelector } from './advanced/AdvancedDesignSelector';
import { IntegrationsManager } from './advanced/IntegrationsManager';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ModernTemplateEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
  onClose: () => void;
  onPublishSuccess?: (url: string) => void;
}

const ModernTemplateEditor = ({ template, onTemplateChange, onClose, onPublishSuccess }: ModernTemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<TemplateData>(template);
  const [activeTab, setActiveTab] = useState('basic');
  const [showAdvancedDialog, setShowAdvancedDialog] = useState(false);
  const [advancedTab, setAdvancedTab] = useState('seo');
  const { toast } = useToast();

  const updateTemplate = (updates: any) => {
    setEditedTemplate(prev => ({
      ...prev,
      ...updates
    }));
    onTemplateChange({
      ...editedTemplate,
      ...updates
    });
  };

  const handleSave = () => {
    onTemplateChange(editedTemplate);
    toast({
      title: "✅ התבנית נשמרה!",
      description: "השינויים שלך נשמרו בהצלחה"
    });
  };

  const handleAdvancedUpdate = (key: string, updates: any) => {
    const newAdvancedStyles = {
      ...editedTemplate.advancedStyles,
      [key]: updates
    };
    
    updateTemplate({
      advancedStyles: newAdvancedStyles
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              onClick={onClose}
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              חזור
            </Button>
            <h1 className="text-2xl font-bold">עורך תבנית מתקדם - {template.name}</h1>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => setShowAdvancedDialog(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Rocket className="w-4 h-4 mr-1" />
              כלים מתקדמים
            </Button>
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-1" />
              שמור
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-81px)]">
        {/* Left Sidebar - Editor */}
        <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
          {/* Tab Navigation */}
          <div className="border-b border-gray-700 p-4">
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => setActiveTab('basic')}
                className={`justify-start ${activeTab === 'basic' ? 'bg-blue-600' : 'bg-gray-700'}`}
              >
                <Edit className="w-4 h-4 mr-2" />
                עריכה בסיסית
              </Button>
              <Button
                onClick={() => setActiveTab('preview')}
                className={`justify-start ${activeTab === 'preview' ? 'bg-blue-600' : 'bg-gray-700'}`}
              >
                <Monitor className="w-4 h-4 mr-2" />
                תצוגת מכשירים
              </Button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-4">
                {activeTab === 'basic' && (
                  <AdvancedEditor
                    content={editedTemplate}
                    onContentChange={updateTemplate}
                    formData={editedTemplate}
                    onFormDataChange={updateTemplate}
                    heroImage={editedTemplate.hero?.backgroundImage || ''}
                    onHeroImageChange={(image) => updateTemplate({ hero: { ...editedTemplate.hero, backgroundImage: image } })}
                  />
                )}

                {activeTab === 'preview' && (
                  <DevicePreview template={editedTemplate} />
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Right Side - Preview */}
        <div className="flex-1 bg-white">
          <div className="h-full overflow-y-auto">
            <TemplatePreview template={editedTemplate} />
          </div>
        </div>
      </div>

      {/* Advanced Tools Dialog */}
      <Dialog open={showAdvancedDialog} onOpenChange={setShowAdvancedDialog}>
        <DialogContent className="max-w-7xl max-h-[90vh] bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white text-xl flex items-center gap-2">
              <Rocket className="w-6 h-6 text-purple-400" />
              כלים מתקדמים לדף נחיתה
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex h-[75vh]">
            {/* Advanced Settings Sidebar */}
            <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto">
              <div className="space-y-2">
                <Button
                  onClick={() => setAdvancedTab('seo')}
                  className={`w-full justify-start text-sm ${advancedTab === 'seo' ? 'bg-green-600' : 'bg-gray-700'}`}
                >
                  <Search className="w-4 h-4 mr-2" />
                  SEO ומטא תגים
                </Button>
                <Button
                  onClick={() => setAdvancedTab('performance')}
                  className={`w-full justify-start text-sm ${advancedTab === 'performance' ? 'bg-orange-600' : 'bg-gray-700'}`}
                >
                  <Gauge className="w-4 h-4 mr-2" />
                  ביצועים ומהירות
                </Button>
                <Button
                  onClick={() => setAdvancedTab('design')}
                  className={`w-full justify-start text-sm ${advancedTab === 'design' ? 'bg-pink-600' : 'bg-gray-700'}`}
                >
                  <Palette className="w-4 h-4 mr-2" />
                  בוחר עיצובים מתקדם
                </Button>
                <Button
                  onClick={() => setAdvancedTab('integrations')}
                  className={`w-full justify-start text-sm ${advancedTab === 'integrations' ? 'bg-cyan-600' : 'bg-gray-700'}`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  אינטגרציות
                </Button>
                <Button
                  onClick={() => setAdvancedTab('abtesting')}
                  className={`w-full justify-start text-sm ${advancedTab === 'abtesting' ? 'bg-indigo-600' : 'bg-gray-700'}`}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  A/B Testing
                </Button>
                <Button
                  onClick={() => setAdvancedTab('responsive')}
                  className={`w-full justify-start text-sm ${advancedTab === 'responsive' ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  עיצוב רספונסיבי
                </Button>
                <Button
                  onClick={() => setAdvancedTab('analytics')}
                  className={`w-full justify-start text-sm ${advancedTab === 'analytics' ? 'bg-purple-600' : 'bg-gray-700'}`}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  אנליטיקס ופיקסלים
                </Button>
                <Button
                  onClick={() => setAdvancedTab('forms')}
                  className={`w-full justify-start text-sm ${advancedTab === 'forms' ? 'bg-orange-600' : 'bg-gray-700'}`}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  טפסים דינמיים
                </Button>
                <Button
                  onClick={() => setAdvancedTab('popups')}
                  className={`w-full justify-start text-sm ${advancedTab === 'popups' ? 'bg-red-600' : 'bg-gray-700'}`}
                >
                  <Timer className="w-4 h-4 mr-2" />
                  פופ-אפים וטיימרים
                </Button>
                <Button
                  onClick={() => setAdvancedTab('interactivity')}
                  className={`w-full justify-start text-sm ${advancedTab === 'interactivity' ? 'bg-pink-600' : 'bg-gray-700'}`}
                >
                  <MousePointer className="w-4 h-4 mr-2" />
                  אינטראקטיביות
                </Button>
                <Button
                  onClick={() => setAdvancedTab('notifications')}
                  className={`w-full justify-start text-sm ${advancedTab === 'notifications' ? 'bg-yellow-600' : 'bg-gray-700'}`}
                >
                  <Bell className="w-4 h-4 mr-2" />
                  התראות ו-FOMO
                </Button>
                <Button
                  onClick={() => setAdvancedTab('security')}
                  className={`w-full justify-start text-sm ${advancedTab === 'security' ? 'bg-gray-600' : 'bg-gray-700'}`}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  אבטחה והגנה
                </Button>
              </div>
            </div>

            {/* Advanced Settings Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {advancedTab === 'seo' && (
                <SEOOptimizer
                  template={editedTemplate}
                  onUpdate={(updates) => handleAdvancedUpdate('seo', updates)}
                />
              )}

              {advancedTab === 'performance' && (
                <PerformanceOptimizer
                  template={editedTemplate}
                  onUpdate={(updates) => handleAdvancedUpdate('performance', updates)}
                />
              )}

              {advancedTab === 'design' && (
                <AdvancedDesignSelector
                  onUpdate={(updates) => handleAdvancedUpdate('design', updates)}
                  currentData={editedTemplate.advancedStyles?.design || {}}
                />
              )}

              {advancedTab === 'integrations' && (
                <IntegrationsManager
                  onUpdate={(updates) => handleAdvancedUpdate('integrations', updates)}
                  currentData={editedTemplate.advancedStyles?.integrations || {}}
                />
              )}

              {advancedTab === 'abtesting' && (
                <ABTestManager
                  template={editedTemplate}
                  onUpdate={(updates) => handleAdvancedUpdate('abtesting', updates)}
                />
              )}

              {advancedTab === 'responsive' && (
                <ResponsiveEditor
                  template={editedTemplate}
                  onUpdate={(updates) => handleAdvancedUpdate('responsive', updates)}
                />
              )}

              {advancedTab === 'analytics' && (
                <AnalyticsEditor
                  template={editedTemplate}
                  onUpdate={(updates) => handleAdvancedUpdate('analytics', updates)}
                />
              )}

              {advancedTab === 'forms' && (
                <DynamicFormBuilder
                  onFormChange={(formData) => handleAdvancedUpdate('forms', formData)}
                  currentForm={editedTemplate.advancedStyles?.forms || {}}
                />
              )}

              {advancedTab === 'popups' && (
                <PopupTimerEditor
                  onUpdate={(updates) => handleAdvancedUpdate('popups', updates)}
                  currentData={editedTemplate.advancedStyles?.popups || {}}
                />
              )}

              {advancedTab === 'interactivity' && (
                <InteractivityEditor
                  onUpdate={(updates) => handleAdvancedUpdate('interactivity', updates)}
                  currentData={editedTemplate.advancedStyles?.interactivity || {}}
                />
              )}

              {advancedTab === 'notifications' && (
                <NotificationEditor
                  onUpdate={(updates) => handleAdvancedUpdate('notifications', updates)}
                  currentData={editedTemplate.advancedStyles?.notifications || {}}
                />
              )}

              {advancedTab === 'security' && (
                <SecurityEditor
                  onUpdate={(updates) => handleAdvancedUpdate('security', updates)}
                  currentData={editedTemplate.advancedStyles?.security || {}}
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModernTemplateEditor;
