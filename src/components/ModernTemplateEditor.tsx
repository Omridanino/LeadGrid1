
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
  Shield 
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { TemplatePreview } from './template-editor/TemplatePreview';
import AdvancedEditor from './AdvancedEditor';
import { AdvancedTemplateEditor } from './advanced/AdvancedTemplateEditor';
import { SEOEditor } from './advanced/SEOEditor';
import { ResponsiveEditor } from './advanced/ResponsiveEditor';
import { AnalyticsEditor } from './advanced/AnalyticsEditor';
import { DynamicFormBuilder } from './advanced/DynamicFormBuilder';
import { PopupTimerEditor } from './advanced/PopupTimerEditor';
import { InteractivityEditor } from './advanced/InteractivityEditor';
import { NotificationEditor } from './advanced/NotificationEditor';
import { SecurityEditor } from './advanced/SecurityEditor';
import { DevicePreview } from './advanced/DevicePreview';

interface ModernTemplateEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
  onClose: () => void;
  onPublishSuccess?: (url: string) => void;
}

export const ModernTemplateEditor = ({ template, onTemplateChange, onClose, onPublishSuccess }: ModernTemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<TemplateData>(template);
  const [activeTab, setActiveTab] = useState('basic');
  const [showAdvancedPopup, setShowAdvancedPopup] = useState(false);
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
            <h1 className="text-2xl font-bold">עורך תבנית - {template.name}</h1>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => setShowAdvancedPopup(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Rocket className="w-4 h-4 mr-1" />
              עורך מתקדם
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

      {/* Advanced Editor Popup */}
      {showAdvancedPopup && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] overflow-y-auto">
          <div className="min-h-screen bg-gray-900 text-white">
            {/* Popup Header */}
            <div className="border-b border-gray-800 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => setShowAdvancedPopup(false)}
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-700"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    חזור לעורך הבסיסי
                  </Button>
                  <h1 className="text-2xl font-bold">עורך מתקדם - {template.name}</h1>
                </div>
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-1" />
                  שמור
                </Button>
              </div>
            </div>

            <div className="flex h-[calc(100vh-81px)]">
              {/* Advanced Settings Sidebar */}
              <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
                <div className="border-b border-gray-700 p-4">
                  <h3 className="text-lg font-semibold text-white mb-4">הגדרות מתקדמות</h3>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => setActiveTab('seo')}
                      className={`justify-start ${activeTab === 'seo' ? 'bg-green-600' : 'bg-gray-700'}`}
                    >
                      <Search className="w-4 h-4 mr-2" />
                      SEO ומטא תגים
                    </Button>
                    <Button
                      onClick={() => setActiveTab('responsive')}
                      className={`justify-start ${activeTab === 'responsive' ? 'bg-blue-600' : 'bg-gray-700'}`}
                    >
                      <Smartphone className="w-4 h-4 mr-2" />
                      עיצוב רספונסיבי
                    </Button>
                    <Button
                      onClick={() => setActiveTab('analytics')}
                      className={`justify-start ${activeTab === 'analytics' ? 'bg-purple-600' : 'bg-gray-700'}`}
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      אנליטיקס ופיקסלים
                    </Button>
                    <Button
                      onClick={() => setActiveTab('forms')}
                      className={`justify-start ${activeTab === 'forms' ? 'bg-orange-600' : 'bg-gray-700'}`}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      טפסים דינמיים
                    </Button>
                    <Button
                      onClick={() => setActiveTab('popups')}
                      className={`justify-start ${activeTab === 'popups' ? 'bg-red-600' : 'bg-gray-700'}`}
                    >
                      <Timer className="w-4 h-4 mr-2" />
                      פופ-אפים וטיימרים
                    </Button>
                    <Button
                      onClick={() => setActiveTab('interactivity')}
                      className={`justify-start ${activeTab === 'interactivity' ? 'bg-pink-600' : 'bg-gray-700'}`}
                    >
                      <MousePointer className="w-4 h-4 mr-2" />
                      אינטראקטיביות
                    </Button>
                    <Button
                      onClick={() => setActiveTab('notifications')}
                      className={`justify-start ${activeTab === 'notifications' ? 'bg-yellow-600' : 'bg-gray-700'}`}
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      התראות ו-FOMO
                    </Button>
                    <Button
                      onClick={() => setActiveTab('security')}
                      className={`justify-start ${activeTab === 'security' ? 'bg-gray-600' : 'bg-gray-700'}`}
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      אבטחה והגנה
                    </Button>
                  </div>
                </div>

                {/* Advanced Editor Content */}
                <div className="flex-1 overflow-hidden">
                  <ScrollArea className="h-full">
                    <div className="p-4">
                      {activeTab === 'seo' && (
                        <SEOEditor
                          onUpdate={(updates) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, seo: updates } })}
                          currentData={editedTemplate.advancedStyles?.seo || {}}
                        />
                      )}

                      {activeTab === 'responsive' && (
                        <ResponsiveEditor
                          onUpdate={(updates) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, responsive: updates } })}
                          currentData={editedTemplate.advancedStyles?.responsive || {}}
                        />
                      )}

                      {activeTab === 'analytics' && (
                        <AnalyticsEditor
                          onUpdate={(updates) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, analytics: updates } })}
                          currentData={editedTemplate.advancedStyles?.analytics || {}}
                        />
                      )}

                      {activeTab === 'forms' && (
                        <DynamicFormBuilder
                          onFormChange={(formData) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, forms: formData } })}
                          currentForm={editedTemplate.advancedStyles?.forms || {}}
                        />
                      )}

                      {activeTab === 'popups' && (
                        <PopupTimerEditor
                          onUpdate={(updates) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, popups: updates } })}
                          currentData={editedTemplate.advancedStyles?.popups || {}}
                        />
                      )}

                      {activeTab === 'interactivity' && (
                        <InteractivityEditor
                          onUpdate={(updates) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, interactivity: updates } })}
                          currentData={editedTemplate.advancedStyles?.interactivity || {}}
                        />
                      )}

                      {activeTab === 'notifications' && (
                        <NotificationEditor
                          onUpdate={(updates) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, notifications: updates } })}
                          currentData={editedTemplate.advancedStyles?.notifications || {}}
                        />
                      )}

                      {activeTab === 'security' && (
                        <SecurityEditor
                          onUpdate={(updates) => updateTemplate({ advancedStyles: { ...editedTemplate.advancedStyles, security: updates } })}
                          currentData={editedTemplate.advancedStyles?.security || {}}
                        />
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </div>

              {/* Preview for Advanced Editor */}
              <div className="flex-1 bg-white">
                <div className="h-full overflow-y-auto">
                  <TemplatePreview template={editedTemplate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplateEditor;
