
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Save,
  Download,
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
  Palette,
  EyeOff,
  Minus,
  Plus
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
import { StylesEditor } from './template-editor/StylesEditor';

interface TemplateEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
  onClose: () => void;
}

const TemplateEditor = ({ template, onTemplateChange, onClose }: TemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<TemplateData>(template);
  const [activeTab, setActiveTab] = useState('hero');
  const [isEditorHidden, setIsEditorHidden] = useState(false);
  const [isTabsCollapsed, setIsTabsCollapsed] = useState(false);

  useEffect(() => {
    onTemplateChange(editedTemplate);
  }, [editedTemplate, onTemplateChange]);

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
    { id: 'styles', name: 'עיצוב', icon: Palette }
  ];

  const renderEditor = () => {
    switch (activeTab) {
      case 'hero':
        return <HeroEditor template={editedTemplate} onUpdate={(updates) => updateSection('hero', updates)} />;
      case 'emotional':
        return <EmotionalEditor template={editedTemplate} onUpdate={(updates) => updateSection('emotional', updates)} />;
      case 'features':
        return <FeaturesEditor template={editedTemplate} onUpdate={(updates) => updateSection('features', updates)} />;
      case 'testimonials':
        return <TestimonialsEditor template={editedTemplate} onUpdate={(updates) => updateSection('testimonials', updates)} />;
      case 'about':
        return <AboutEditor template={editedTemplate} onUpdate={(updates) => updateSection('about', updates)} />;
      case 'pricing':
        return <PricingEditor template={editedTemplate} onUpdate={(updates) => updateSection('pricing', updates)} />;
      case 'faq':
        return <FaqEditor template={editedTemplate} onUpdate={(updates) => updateSection('faq', updates)} />;
      case 'finalCta':
        return <FinalCtaEditor template={editedTemplate} onUpdate={(updates) => updateSection('finalCta', updates)} />;
      case 'contact':
        return <ContactEditor template={editedTemplate} onUpdate={(updates) => updateSection('contact', updates)} />;
      case 'styles':
        return <StylesEditor template={editedTemplate} onUpdate={updateStyles} />;
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
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                <Save className="w-4 h-4 ml-1" />
                שמור
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                <Download className="w-4 h-4 ml-1" />
                ייצא
              </Button>
            </div>
          </div>

          {/* Tabs Navigation with Collapse/Expand */}
          <div className="border-b border-gray-800 flex-shrink-0">
            <div className="p-2 flex items-center justify-between">
              <Button
                onClick={() => setIsTabsCollapsed(!isTabsCollapsed)}
                size="sm"
                className="bg-gray-700 hover:bg-gray-600 text-white"
              >
                {isTabsCollapsed ? <Plus className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
              </Button>
              {!isTabsCollapsed && (
                <span className="text-gray-400 text-sm">סקשנים</span>
              )}
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
            <Badge variant="secondary" className="text-xs">
              {editedTemplate.category}
            </Badge>
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
