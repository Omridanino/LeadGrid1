import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
  Palette,
  Rocket,
  ArrowLeft,
  CheckCircle,
  X,
  Image,
  Type,
  AlignLeft,
  Video,
  LayoutGrid,
  List,
  Code,
  Share2,
  Settings,
  Plus,
  Maximize2,
  Minimize2
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
import { GalleryEditor } from './template-editor/GalleryEditor';
import { HeadingEditor } from './template-editor/HeadingEditor';
import { TextEditor } from './template-editor/TextEditor';
import { VideoEditor } from './template-editor/VideoEditor';
import { SliderEditor } from './template-editor/SliderEditor';
import { ListEditor } from './template-editor/ListEditor';
import { EmbedEditor } from './template-editor/EmbedEditor';
import { SocialBarEditor } from './template-editor/SocialBarEditor';
import { LaunchSection } from './LaunchSection';
import { generatePageHTML } from '@/utils/pageGenerator';

interface ModernTemplateEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
  onClose: () => void;
  onPublishSuccess?: (url: string) => void;
}

const ModernTemplateEditor = ({ template, onTemplateChange, onClose, onPublishSuccess }: ModernTemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<TemplateData>(template);
  const [activeCategory, setActiveCategory] = useState('sections');
  const [activeSection, setActiveSection] = useState('hero');
  const [isEditorMinimized, setIsEditorMinimized] = useState(false);
  const [showLaunchSection, setShowLaunchSection] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    onTemplateChange(editedTemplate);
  }, [editedTemplate, onTemplateChange]);

  const handleSave = () => {
    try {
      const htmlContent = generatePageHTML(editedTemplate);
      
      localStorage.setItem('generatedHTML', htmlContent);
      localStorage.setItem('generatedPageData', JSON.stringify({
        template: editedTemplate,
        timestamp: Date.now()
      }));
      
      setIsSaved(true);
      toast({
        title: "✅ הדף נשמר בהצלחה!",
        description: "הדף שלך נשמר וקוד ה-HTML מוכן להדבקה",
      });
      
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
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 backdrop-blur-sm z-50 overflow-y-auto">
        <LaunchSection 
          template={editedTemplate}
          onBack={handleBackToEditor}
          className="min-h-screen p-6"
        />
      </div>
    );
  }

  const sectionCategories = {
    sections: {
      label: 'סקשנים',
      icon: LayoutGrid,
      items: [
        { id: 'hero', name: 'דף הבית', icon: Sparkles, color: 'text-purple-400' },
        { id: 'emotional', name: 'רגש', icon: Heart, color: 'text-pink-400' },
        { id: 'features', name: 'תכונות', icon: Star, color: 'text-yellow-400' },
        { id: 'testimonials', name: 'עדויות', icon: Users, color: 'text-green-400' },
        { id: 'about', name: 'אודות', icon: Building, color: 'text-blue-400' },
        { id: 'pricing', name: 'מחירים', icon: DollarSign, color: 'text-emerald-400' },
        { id: 'faq', name: 'שאלות נפוצות', icon: HelpCircle, color: 'text-orange-400' },
        { id: 'finalCta', name: 'קריאה לפעולה', icon: Zap, color: 'text-red-400' },
        { id: 'contact', name: 'יצירת קשר', icon: MessageSquare, color: 'text-cyan-400' }
      ]
    },
    content: {
      label: 'אלמנטי תוכן',
      icon: Type,
      items: [
        { id: 'gallery', name: 'גלריית תמונות', icon: Image, color: 'text-violet-400' },
        { id: 'heading', name: 'כותרת', icon: Type, color: 'text-indigo-400' },
        { id: 'text', name: 'טקסט', icon: AlignLeft, color: 'text-slate-400' },
        { id: 'video', name: 'וידאו', icon: Video, color: 'text-rose-400' },
        { id: 'slider', name: 'סליידר', icon: LayoutGrid, color: 'text-teal-400' },
        { id: 'list', name: 'רשימה', icon: List, color: 'text-amber-400' },
        { id: 'embed', name: 'קוד HTML', icon: Code, color: 'text-lime-400' },
        { id: 'socialBar', name: 'רשתות חברתיות', icon: Share2, color: 'text-sky-400' }
      ]
    },
    styling: {
      label: 'עיצוב ואפקטים',
      icon: Palette,
      items: [
        { id: 'effects', name: 'אפקטים חזותיים', icon: Palette, color: 'text-fuchsia-400' }
      ]
    }
  };

  const renderEditor = () => {
    switch (activeSection) {
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
      case 'gallery':
        return <GalleryEditor template={editedTemplate} onUpdate={(updates) => updateSection('gallery', updates)} onStyleUpdate={updateStyles} />;
      case 'heading':
        return <HeadingEditor template={editedTemplate} onUpdate={(updates) => updateSection('heading', updates)} onStyleUpdate={updateStyles} />;
      case 'text':
        return <TextEditor template={editedTemplate} onUpdate={(updates) => updateSection('text', updates)} onStyleUpdate={updateStyles} />;
      case 'video':
        return <VideoEditor template={editedTemplate} onUpdate={(updates) => updateSection('video', updates)} onStyleUpdate={updateStyles} />;
      case 'slider':
        return <SliderEditor template={editedTemplate} onUpdate={(updates) => updateSection('slider', updates)} onStyleUpdate={updateStyles} />;
      case 'list':
        return <ListEditor template={editedTemplate} onUpdate={(updates) => updateSection('list', updates)} onStyleUpdate={updateStyles} />;
      case 'embed':
        return <EmbedEditor template={editedTemplate} onUpdate={(updates) => updateSection('embed', updates)} onStyleUpdate={updateStyles} />;
      case 'socialBar':
        return <SocialBarEditor template={editedTemplate} onUpdate={(updates) => updateSection('socialBar', updates)} onStyleUpdate={updateStyles} />;
      case 'effects':
        return <EffectsEditor template={editedTemplate} onUpdate={updateEffects} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 backdrop-blur-sm z-50 flex h-screen" dir="rtl">
      
      {/* Modern Sidebar */}
      {!isEditorMinimized && (
        <div className="w-96 bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 flex flex-col h-full shadow-2xl">
          
          {/* Header with Glass Effect */}
          <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-bold">עורך תוכן מודרני</h2>
                  <p className="text-slate-300 text-sm">{editedTemplate.name}</p>
                </div>
              </div>
              <Button
                onClick={onClose}
                size="sm"
                className="bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/50 backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                size="sm" 
                className={`flex-1 ${
                  isSaved 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                } text-white shadow-lg`}
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
                className={`flex-1 ${
                  isSaved 
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' 
                    : 'bg-slate-600/50 cursor-not-allowed opacity-50'
                } text-white shadow-lg`}
                onClick={handleSaveAndPublish}
                disabled={!isSaved}
              >
                <Rocket className="w-4 h-4 ml-1" />
                פרסם
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-3 bg-slate-700/30 border-b border-slate-600/30 rounded-none p-1 m-4 mb-0">
              {Object.entries(sectionCategories).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center gap-2 text-xs data-[state=active]:bg-slate-600/60 data-[state=active]:text-white text-slate-300"
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(sectionCategories).map(([categoryKey, category]) => (
              <TabsContent key={categoryKey} value={categoryKey} className="flex-1 m-0 p-4">
                <ScrollArea className="h-full">
                  <div className="space-y-2">
                    {category.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeSection === item.id;
                      return (
                        <Card 
                          key={item.id}
                          className={`cursor-pointer transition-all duration-200 border ${
                            isActive 
                              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50 shadow-lg shadow-blue-500/20' 
                              : 'bg-slate-800/40 border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/50'
                          } backdrop-blur-sm`}
                          onClick={() => setActiveSection(item.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isActive ? 'bg-blue-500/20' : 'bg-slate-700/50'
                              }`}>
                                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : item.color}`} />
                              </div>
                              <div>
                                <h3 className={`font-medium ${isActive ? 'text-white' : 'text-slate-200'}`}>
                                  {item.name}
                                </h3>
                                <p className="text-xs text-slate-400">
                                  {isActive ? 'פעיל כעת' : 'לחץ לעריכה'}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl p-4 border-b border-slate-600/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsEditorMinimized(!isEditorMinimized)}
              size="sm"
              className="bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/30"
            >
              {isEditorMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              {isEditorMinimized ? 'הצג עורך' : 'הסתר עורך'}
            </Button>
            <Separator orientation="vertical" className="h-6 bg-slate-600/30" />
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-slate-300" />
              <span className="text-sm text-slate-300">תצוגה מקדימה</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-slate-700/50 text-slate-200 border-slate-600/30">
              {editedTemplate.category}
            </Badge>
            <Button 
              size="sm" 
              className={`${
                isSaved 
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' 
                  : 'bg-slate-600/50 cursor-not-allowed opacity-50'
              } text-white shadow-lg`}
              onClick={handleSaveAndPublish}
              disabled={!isSaved}
            >
              <Rocket className="w-4 h-4 mr-2" />
              פרסם עם LEADGRID
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex">
          
          {/* Editor Panel */}
          {!isEditorMinimized && (
            <div className="w-96 border-l border-slate-600/30 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
              <ScrollArea className="h-full">
                <div className="p-6">
                  {renderEditor()}
                </div>
              </ScrollArea>
            </div>
          )}
          
          {/* Preview */}
          <div className="flex-1 bg-white overflow-hidden">
            <TemplatePreview template={editedTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplateEditor;