import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  Save,
  Sparkles,
  Heart,
  Star,
  Users,
  DollarSign,
  HelpCircle,
  Zap,
  MessageSquare,
  Building,
  Eye,
  EyeOff,
  Minus,
  Plus,
  Palette,
  Rocket,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';
import { TemplateData } from '@/types/template';
import { TemplatePreview } from './template-editor/TemplatePreview';
import { HeroEditor } from './template-editor/HeroEditor';
import { EmotionalEditor } from './template-editor/EmotionalEditor';
import { FeaturesEditor } from './template-editor/FeaturesEditor';
import { TestimonialsEditor } from './template-editor/TestimonialsEditor';
import { AboutEditor } from './template-editor/AboutEditor';
import { PricingEditor } from './template-editor/PricingEditor';
import { FaqEditor } from './template-editor/FaqEditor';
import { FinalCtaEditor } from './template-editor/FinalCtaEditor';
import { ContactEditor } from './template-editor/ContactEditor';
import { EffectsEditor } from './template-editor/EffectsEditor';
import { LaunchSection } from './LaunchSection';
import { generatePageHTML } from '@/utils/pageGenerator';

interface TemplateEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
  onClose: () => void;
  onPublishSuccess?: (url: string) => void;
}

const TemplateEditor = ({ template, onTemplateChange, onClose, onPublishSuccess }: TemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<TemplateData>(template);
  const [activeTab, setActiveTab] = useState('hero');
  const [isEditorHidden, setIsEditorHidden] = useState(false);
  const [isTabsCollapsed, setIsTabsCollapsed] = useState(false);
  const [showLaunchSection, setShowLaunchSection] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    onTemplateChange(editedTemplate);
  }, [editedTemplate, onTemplateChange]);

  
  // Save current page and generate exact HTML
  const handleSave = () => {
    try {
      // Generate the exact HTML using the new simple generator
      const htmlContent = generatePageHTML(editedTemplate);
      
      // Save the HTML
      localStorage.setItem('generatedHTML', htmlContent);
      localStorage.setItem('generatedPageData', JSON.stringify({
        template: editedTemplate,
        timestamp: Date.now()
      }));
      
      setIsSaved(true);
      toast({
        title: "✅ הדף נשמר בהצלחה!",
        description: "הדף שלך נשמר וקוד ה-HTML מוכן להדבקה ב-WordPress",
      });
      
      // Reset saved status after 3 seconds
      setTimeout(() => setIsSaved(false), 3000);
      
    } catch (error) {
      console.error('Error saving page:', error);
      toast({
        title: "❌ שגיאה בשמירה",
        description: "אירעה שגיאה בשמירת הדף. אנא נסה שוב.",
        variant: "destructive"
      });
    }
  };

  const handleSaveAndPublish = () => {
    if (!isSaved) {
      toast({
        title: "⚠️ יש לשמור קודם!",
        description: "אנא שמור את הדף לפני הפרסום",
        variant: "destructive"
      });
      return;
    }
    setShowLaunchSection(true);
  };

  const handleBackToEditor = () => {
    setShowLaunchSection(false);
  };

  const updateSection = (section: keyof TemplateData, updates: any) => {
    setEditedTemplate(prev => {
      const currentSection = prev[section];
      if (typeof currentSection === 'object' && currentSection !== null && !Array.isArray(currentSection)) {
        return {
          ...prev,
          [section]: {
            ...currentSection,
            ...updates
          }
        };
      }
      return {
        ...prev,
        [section]: updates
      };
    });
  };

  const updateStyles = (styleUpdates: any) => {
    setEditedTemplate(prev => ({
      ...prev,
      styles: {
        ...prev.styles,
        ...styleUpdates
      }
    }));
  };

  const updateEffects = (section: string, effectType: string | null) => {
    setEditedTemplate(prev => ({
      ...prev,
      effects: {
        ...prev.effects,
        [section]: effectType
      }
    }));
  };

  if (showLaunchSection) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 overflow-y-auto">
        <LaunchSection 
          template={editedTemplate}
          onBack={handleBackToEditor}
          className="min-h-screen p-6"
        />
      </div>
    );
  }

  const sections = [
    { id: 'hero', name: 'הירו', icon: Sparkles },
    { id: 'emotional', name: 'רגש', icon: Heart },
    { id: 'features', name: 'תכונות', icon: Star },
    { id: 'testimonials', name: 'עדויות', icon: Users },
    { id: 'about', name: 'אודות', icon: Building },
    { id: 'pricing', name: 'מחירים', icon: DollarSign },
    { id: 'faq', name: 'שאלות', icon: HelpCircle },
    { id: 'finalCta', name: 'קריאה לפעולה', icon: Zap },
    { id: 'contact', name: 'יצירת קשר', icon: MessageSquare },
    { id: 'effects', name: 'אפקטים', icon: Palette }
  ];

  const renderEditor = () => {
    switch (activeTab) {
      case 'hero':
        return <HeroEditor template={editedTemplate} onUpdate={(updates) => updateSection('hero', updates)} onStyleUpdate={updateStyles} />;
      case 'emotional':
        return <EmotionalEditor template={editedTemplate} onUpdate={(updates) => updateSection('emotional', updates)} onStyleUpdate={updateStyles} />;
      case 'features':
        return <FeaturesEditor template={editedTemplate} onUpdate={(updates) => updateSection('features', updates)} onStyleUpdate={updateStyles} />;
      case 'testimonials':
        return <TestimonialsEditor template={editedTemplate} onUpdate={(updates) => updateSection('testimonials', updates)} onStyleUpdate={updateStyles} />;
      case 'about':
        return <AboutEditor template={editedTemplate} onUpdate={(updates) => updateSection('about', updates)} onStyleUpdate={updateStyles} />;
      case 'pricing':
        return <PricingEditor template={editedTemplate} onUpdate={(updates) => updateSection('pricing', updates)} onStyleUpdate={updateStyles} />;
      case 'faq':
        return <FaqEditor template={editedTemplate} onUpdate={(updates) => updateSection('faq', updates)} onStyleUpdate={updateStyles} />;
      case 'finalCta':
        return <FinalCtaEditor template={editedTemplate} onUpdate={(updates) => updateSection('finalCta', updates)} onStyleUpdate={updateStyles} />;
      case 'contact':
        return <ContactEditor template={editedTemplate} onUpdate={(updates) => updateSection('contact', updates)} onStyleUpdate={updateStyles} />;
      case 'effects':
        return <EffectsEditor template={editedTemplate} onUpdate={updateEffects} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex h-screen" dir="rtl">
      {/* Left Sidebar - Editor */}
      {!isEditorHidden && (
        <div className="w-80 bg-gray-900 border-r border-gray-800 flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-white text-lg font-bold">עריכת תבנית</h2>
                <p className="text-gray-400 text-sm">{editedTemplate.name}</p>
              </div>
              <Button
                onClick={onClose}
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white"
              >
                ✕
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button 
                size="sm" 
                className={`flex-1 ${isSaved ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                onClick={handleSave}
              >
                {isSaved ? (
                  <>
                    <CheckCircle className="w-4 h-4 ml-1" />
                    נשמר!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 ml-1" />
                    שמור
                  </>
                )}
              </Button>
              <Button 
                size="sm" 
                className={`text-white flex-1 ${
                  isSaved 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-gray-600 hover:bg-gray-700 cursor-not-allowed opacity-50'
                }`}
                onClick={handleSaveAndPublish}
                disabled={!isSaved}
              >
                <Rocket className="w-4 h-4 ml-1" />
                {isSaved ? 'פרסם עם LEADGRID' : 'שמור קודם כדי לפרסם'}
              </Button>
            </div>
          </div>

          {/* Tabs Navigation with Collapse/Expand */}
          <div className="border-b border-gray-800 flex-shrink-0">
            <div className="p-2 flex items-center justify-between">
              <Button
                onClick={() => setIsTabsCollapsed(!isTabsCollapsed)}
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white flex items-center gap-2"
              >
                {isTabsCollapsed ? <Plus className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                <span className="text-xs">
                  {isTabsCollapsed ? 'פתח את עריכת הסקשנים' : 'סגור את עריכת הסקשנים'}
                </span>
              </Button>
            </div>
            
            {!isTabsCollapsed && (
              <div className="p-2">
                <ScrollArea className="w-full">
                  <div className="grid grid-cols-2 gap-1 bg-gray-800 rounded p-1">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => setActiveTab(section.id)}
                          className={`flex items-center gap-1 px-2 py-2 text-xs rounded transition-colors ${
                            activeTab === section.id 
                              ? 'bg-blue-600 text-white' 
                              : 'text-gray-400 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          <Icon className="w-3 h-3" />
                          {section.name}
                        </button>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>

          {/* Editor Content */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="p-4">
                {renderEditor()}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}

      {/* Right Side - Preview */}
      <div className="flex-1 bg-white overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="bg-gray-100 p-2 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setIsEditorHidden(!isEditorHidden)}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isEditorHidden ? <Eye className="w-4 h-4 ml-1" /> : <EyeOff className="w-4 h-4 ml-1" />}
                {isEditorHidden ? 'הצג עורך תבנית' : 'הסתר עורך תבנית'}
              </Button>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">תצוגה מקדימה</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {editedTemplate.category}
              </Badge>
               <Button 
                 size="sm" 
                 className={`${
                   isSaved 
                     ? 'bg-green-600 hover:bg-green-700' 
                     : 'bg-gray-600 hover:bg-gray-700 cursor-not-allowed opacity-50'
                 } text-white`}
                 onClick={handleSaveAndPublish}
                 disabled={!isSaved}
               >
                 <Rocket className="w-4 h-4 mr-2" />
                 {isSaved ? 'פרסם עם LEADGRID' : 'שמור קודם כדי לפרסם'}
               </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto bg-white">
            <TemplatePreview template={editedTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
