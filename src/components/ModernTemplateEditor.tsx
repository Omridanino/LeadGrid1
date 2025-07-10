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
  Minimize2,
  Wrench,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  TestTube,
  Timer,
  MousePointer,
  Bell,
  Shield
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
import { GalleryEditor } from './template-editor/GalleryEditor';
import { HeadingEditor } from './template-editor/HeadingEditor';
import { TextEditor } from './template-editor/TextEditor';
import { VideoEditor } from './template-editor/VideoEditor';
import { SliderEditor } from './template-editor/SliderEditor';
import { ListEditor } from './template-editor/ListEditor';
import { EmbedEditor } from './template-editor/EmbedEditor';
import { SocialBarEditor } from './template-editor/SocialBarEditor';
import { EffectsEditor } from './template-editor/EffectsEditor';
import { StylesEditor } from './template-editor/StylesEditor';
import { AdvancedTemplateEditor } from './advanced/AdvancedTemplateEditor';
import { generatePageHTML } from '@/utils/pageGenerator';
import { LaunchSection } from './LaunchSection';
import { SEOEditor } from './advanced/SEOEditor';
import { ResponsiveEditor } from './advanced/ResponsiveEditor';
import { AnalyticsEditor } from './advanced/AnalyticsEditor';

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
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    onTemplateChange(editedTemplate);
  }, [editedTemplate, onTemplateChange]);

  const handleSave = () => {
    try {
      localStorage.removeItem('generatedHTML');
      localStorage.removeItem('generatedPageData');
      
      const htmlContent = generatePageHTML(editedTemplate);
      
      const simplifiedTemplate = {
        ...editedTemplate,
        styles: editedTemplate.styles ? {
          primaryColor: editedTemplate.styles.primaryColor,
          backgroundColor: editedTemplate.styles.backgroundColor
        } : undefined
      };
      
      localStorage.setItem('generatedHTML', htmlContent);
      localStorage.setItem('generatedPageData', JSON.stringify({
        template: simplifiedTemplate,
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
      
      try {
        localStorage.clear();
        toast({
          title: "⚠️ נוקה מטמון",
          description: "המטמון נוקה בשל מחסור במקום. נסה לשמור שוב.",
          variant: "destructive"
        });
      } catch (clearError) {
        toast({
          title: "❌ שגיאה בשמירה",
          description: "אירעה שגיאה חמורה. אנא רענן את הדף.",
          variant: "destructive"
        });
      }
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

  const handleAdvancedEditor = () => {
    console.log("Opening Advanced Editor");
    setShowAdvancedEditor(true);
  };

  const handleBackFromAdvanced = () => {
    console.log("Closing Advanced Editor");
    setShowAdvancedEditor(false);
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

  const initializeSection = (sectionId: string) => {
    const defaultSections = {
      gallery: {
        title: 'גלריית תמונות',
        subtitle: 'תמונות מהעבודות שלנו',
        images: [],
        layout: 'grid' as const,
        columns: 3
      },
      heading: {
        title: 'כותרת חדשה',
        subtitle: 'תת כותרת',
        alignment: 'center' as const,
        size: 'large' as const
      },
      text: {
        title: 'כותרת הטקסט',
        content: 'הכנס כאן את התוכן שלך...',
        alignment: 'center' as const,
        textSize: 'medium' as const
      },
      video: {
        title: 'סרטון מדהים',
        subtitle: 'צפו בסרטון שלנו',
        videoUrl: '',
        videoType: 'youtube' as const,
        controls: true
      },
      slider: {
        title: 'הסליידר שלנו',
        subtitle: 'גלשו בין האפשרויות',
        slides: [
          {
            title: 'סליידר ראשון',
            description: 'תיאור הסליידר הראשון',
            buttonText: 'לחץ כאן'
          }
        ],
        autoplay: true,
        duration: 5000
      },
      list: {
        title: 'הרשימה שלנו',
        items: [
          {
            title: 'פריט ראשון',
            description: 'תיאור הפריט הראשון'
          }
        ],
        listType: 'unordered' as const
      },
      embed: {
        title: 'תוכן משובץ',
        htmlCode: '<p>הכנס כאן קוד HTML</p>',
        height: 400
      },
      socialBar: {
        title: 'עקבו אחרינו',
        socialLinks: [
          {
            platform: 'facebook' as const,
            url: 'https://facebook.com',
            label: 'Facebook'
          }
        ],
        alignment: 'center' as const,
        showLabels: true
      }
    };

    if (defaultSections[sectionId as keyof typeof defaultSections]) {
      updateSection(sectionId as keyof TemplateData, defaultSections[sectionId as keyof typeof defaultSections]);
    }
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

  const updateEffects = (effectUpdates: any) => {
    setEditedTemplate(prev => ({
      ...prev,
      effects: {
        ...prev.effects,
        ...effectUpdates
      }
    }));
  };

  // Organized categories
  const categories = [
    {
      id: 'sections',
      label: 'חלקי דף',
      items: [
        { id: 'hero', name: 'חלק פתיחה', icon: Zap, color: 'text-blue-400' },
        { id: 'emotional', name: 'חלק רגשי', icon: Heart, color: 'text-pink-400' },
        { id: 'features', name: 'תכונות', icon: Star, color: 'text-yellow-400' },
        { id: 'testimonials', name: 'המלצות', icon: Users, color: 'text-green-400' },
        { id: 'about', name: 'אודות', icon: Building, color: 'text-purple-400' },
        { id: 'pricing', name: 'מחירים', icon: DollarSign, color: 'text-emerald-400' },
        { id: 'faq', name: 'שאלות נפוצות', icon: HelpCircle, color: 'text-orange-400' },
        { id: 'finalCta', name: 'קריאה לפעולה', icon: Rocket, color: 'text-red-400' },
        { id: 'contact', name: 'יצירת קשר', icon: MessageSquare, color: 'text-cyan-400' },
      ]
    },
    {
      id: 'elements',
      label: 'אלמנטים',
      items: [
        { id: 'gallery', name: 'גלריית תמונות', icon: Image, color: 'text-indigo-400' },
        { id: 'heading', name: 'כותרת', icon: Type, color: 'text-slate-400' },
        { id: 'text', name: 'טקסט', icon: AlignLeft, color: 'text-slate-300' },
        { id: 'video', name: 'וידאו', icon: Video, color: 'text-red-400' },
        { id: 'slider', name: 'סליידר', icon: LayoutGrid, color: 'text-blue-300' },
        { id: 'list', name: 'רשימה', icon: List, color: 'text-green-300' },
        { id: 'embed', name: 'קוד HTML', icon: Code, color: 'text-orange-300' },
        { id: 'socialBar', name: 'רשתות חברתיות', icon: Share2, color: 'text-purple-300' },
      ]
    },
    {
      id: 'styles',
      label: 'עיצוב',
      items: [
        { id: 'styles', name: 'צבעים וגופנים', icon: Palette, color: 'text-pink-400' },
        { id: 'effects', name: 'אפקטים', icon: Sparkles, color: 'text-yellow-400' },
      ]
    },
    {
      id: 'advanced',
      label: 'מתקדם',
      items: [
        { id: 'seo', name: 'SEO ומטא תגים', icon: Globe, color: 'text-blue-400' },
        { id: 'responsive', name: 'רספונסיבי', icon: Smartphone, color: 'text-green-400' },
        { id: 'analytics', name: 'פיקסלים ואנליטיקס', icon: BarChart3, color: 'text-purple-400' },
        { id: 'forms', name: 'טפסים דינמיים', icon: Code, color: 'text-orange-400' },
        { id: 'abtesting', name: 'A/B Testing', icon: TestTube, color: 'text-cyan-400' },
        { id: 'popups', name: 'פופ-אפים וטיימרים', icon: Timer, color: 'text-red-400' },
        { id: 'interactions', name: 'אינטראקטיביות', icon: MousePointer, color: 'text-yellow-400' },
        { id: 'notifications', name: 'התראות', icon: Bell, color: 'text-indigo-400' },
        { id: 'security', name: 'אבטחה', icon: Shield, color: 'text-green-500' },
      ]
    }
  ];

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
      case 'styles':
        return <StylesEditor template={editedTemplate} onUpdate={updateStyles} />;
      case 'effects':
        return <EffectsEditor template={editedTemplate} onUpdate={updateEffects} />;
      // Advanced sections with real content
      case 'seo':
        return <SEOEditor template={editedTemplate} onUpdate={(updates) => updateSection('advancedStyles', updates.advancedStyles)} />;
      case 'responsive':
        return <ResponsiveEditor template={editedTemplate} onUpdate={(updates) => updateSection('advancedStyles', updates.advancedStyles)} />;
      case 'analytics':
        return <AnalyticsEditor template={editedTemplate} onUpdate={(updates) => updateSection('advancedStyles', updates.advancedStyles)} />;
      case 'forms':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-white text-lg font-bold">טפסים דינמיים</h3>
            <p className="text-gray-300">כלים ליצירת טפסים מותאמים אישית - בפיתוח</p>
          </div>
        );
      case 'abtesting':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-white text-lg font-bold">A/B Testing</h3>
            <p className="text-gray-300">בדיקות A/B מתקדמות - בפיתוח</p>
          </div>
        );
      case 'popups':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-white text-lg font-bold">פופ-אפים וטיימרים</h3>
            <p className="text-gray-300">הוספת פופ-אפים, טיימרים וחוויות אינטראקטיביות - בפיתוח</p>
          </div>
        );
      case 'interactions':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-white text-lg font-bold">אינטראקטיביות</h3>
            <p className="text-gray-300">הוספת אלמנטים אינטראקטיביים - בפיתוח</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-white text-lg font-bold">התראות</h3>
            <p className="text-gray-300">מערכת התראות מתקדמת - בפיתוח</p>
          </div>
        );
      case 'security':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-white text-lg font-bold">אבטחה</h3>
            <p className="text-gray-300">הגדרות אבטחה מתקדמות - בפיתוח</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (showAdvancedEditor) {
    return (
      <AdvancedTemplateEditor
        template={editedTemplate}
        onTemplateChange={setEditedTemplate}
        onSave={handleSave}
        onBack={handleBackFromAdvanced}
      />
    );
  }

  if (showLaunchSection) {
    return <LaunchSection template={editedTemplate} onBack={handleBackToEditor} />;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 z-50 flex h-screen" dir="rtl">
      
      {/* Compact Editor Sidebar */}
      {!isEditorMinimized && (
        <div className="w-64 bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 flex flex-col shadow-2xl">
          
          {/* Header - Compact */}
          <div className="p-3 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-slate-700/80 flex-shrink-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-white text-base font-bold">עורך תוכן</h2>
                  <p className="text-slate-300 text-xs truncate max-w-32">{editedTemplate.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => setIsEditorMinimized(true)}
                  size="sm"
                  className="bg-slate-700/50 hover:bg-slate-600/50 text-white w-7 h-7 p-0"
                >
                  <Minimize2 className="w-3 h-3" />
                </Button>
                <Button
                  onClick={onClose}
                  size="sm"
                  className="bg-slate-700/50 hover:bg-slate-600/50 text-white w-7 h-7 p-0"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
            
            {/* Action Buttons - Compact */}
            <div className="flex gap-1.5 mb-2">
              <Button 
                size="sm" 
                className={`flex-1 ${
                  isSaved 
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                } text-white shadow-lg text-xs px-2 py-1.5`}
                onClick={handleSave}
              >
                {isSaved ? (
                  <>
                    <CheckCircle className="w-3 h-3 ml-1" />
                    נשמר
                  </>
                ) : (
                  <>
                    <Save className="w-3 h-3 ml-1" />
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
                } text-white shadow-lg text-xs px-2 py-1.5`}
                onClick={handleSaveAndPublish}
                disabled={!isSaved}
              >
                <Rocket className="w-3 h-3 ml-1" />
                פרסם
              </Button>
            </div>

            {/* Advanced Editor Button */}
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg text-xs px-2 py-1.5"
              onClick={handleAdvancedEditor}
            >
              <Wrench className="w-3 h-3 ml-1" />
              עורך מתקדם
            </Button>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="flex-1 flex flex-col min-h-0">
            <div className="px-3 py-2 border-b border-slate-700/30 flex-shrink-0">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 p-0.5 rounded-md h-7">
                <TabsTrigger value="sections" className="text-xs data-[state=active]:bg-blue-600/80 data-[state=active]:text-white h-6">
                  <Settings className="w-3 h-3 mr-1" />
                  חלקים
                </TabsTrigger>
                <TabsTrigger value="elements" className="text-xs data-[state=active]:bg-blue-600/80 data-[state=active]:text-white h-6">
                  <Plus className="w-3 h-3 mr-1" />
                  אלמנטים
                </TabsTrigger>
                <TabsTrigger value="styles" className="text-xs data-[state=active]:bg-blue-600/80 data-[state=active]:text-white h-6">
                  <Palette className="w-3 h-3 mr-1" />
                  עיצוב
                </TabsTrigger>
                <TabsTrigger value="advanced" className="text-xs data-[state=active]:bg-blue-600/80 data-[state=active]:text-white h-6">
                  <Wrench className="w-3 h-3 mr-1" />
                  מתקדם
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content - Scrollable */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="flex-1 m-0 min-h-0">
                <ScrollArea className="h-full">
                   <div className="p-3 space-y-1.5">
                     {category.id === 'elements' && (
                       <div className="mb-4 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                         <p className="text-slate-300 text-xs mb-2">גרור אלמנטים לדף התצוגה ↙️</p>
                         <div className="text-xs text-slate-400">לחץ על אלמנט להוספה או גרור למקום רצוי</div>
                       </div>
                     )}
                     {category.id === 'advanced' && (
                       <div className="mb-4 p-3 bg-orange-600/20 rounded-lg border border-orange-500/30">
                         <p className="text-orange-300 text-xs mb-2">🚀 כלים מתקדמים</p>
                         <div className="text-xs text-orange-400">כל הפיצ'רים המתקדמים שהוספתי נמצאים כאן</div>
                       </div>
                     )}
                     {category.items.map((item) => {
                       const Icon = item.icon;
                       const isActive = activeSection === item.id;
                       return (
                         <Card 
                           key={item.id}
                           draggable={category.id === 'elements'}
                           onDragStart={(e) => {
                             if (category.id === 'elements') {
                               e.dataTransfer.setData('elementType', item.id);
                             }
                           }}
                           className={`cursor-pointer transition-all duration-200 border ${
                             isActive 
                               ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/50' 
                               : 'bg-slate-800/40 border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/50'
                           } backdrop-blur-sm ${category.id === 'elements' ? 'cursor-grab active:cursor-grabbing' : ''}`}
                           onClick={() => {
                             if (!editedTemplate[item.id as keyof TemplateData] && ['gallery', 'heading', 'text', 'video', 'slider', 'list', 'embed', 'socialBar'].includes(item.id)) {
                               initializeSection(item.id);
                             }
                             setActiveSection(item.id);
                           }}
                         >
                            <CardContent className="p-2.5">
                              <div className="flex items-center gap-2">
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                                  isActive ? 'bg-blue-500/20' : 'bg-slate-700/50'
                                }`}>
                                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : item.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className={`font-medium text-xs ${isActive ? 'text-white' : 'text-slate-200'} truncate`}>
                                    {item.name}
                                  </h3>
                                  <p className="text-xs text-slate-500 truncate">
                                    {category.id === 'elements' ? 'גרור או לחץ' : 
                                     category.id === 'advanced' ? 'כלים מתקדמים' :
                                     isActive ? 'פעיל' : 'לחץ לעריכה'}
                                  </p>
                                </div>
                                {/* Remove button for elements */}
                                {category.id === 'elements' && editedTemplate[item.id as keyof TemplateData] && (
                                  <Button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setEditedTemplate(prev => {
                                        const newTemplate = { ...prev };
                                        delete newTemplate[item.id as keyof TemplateData];
                                        return newTemplate;
                                      });
                                      toast({
                                        title: "🗑️ אלמנט הוסר",
                                        description: `${item.name} הוסר מהדף`,
                                      });
                                    }}
                                    size="sm"
                                    className="bg-red-600/80 hover:bg-red-700 text-white w-5 h-5 p-0"
                                  >
                                    <X className="w-2.5 h-2.5" />
                                  </Button>
                                )}
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
      <div className="flex-1 flex flex-col min-h-0">
        
        {/* Compact Top Bar */}
        <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl px-3 py-2 border-b border-slate-600/30 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            {isEditorMinimized && (
              <Button
                onClick={() => setIsEditorMinimized(false)}
                size="sm"
                className="bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/30 text-xs px-2 py-1.5"
              >
                <Maximize2 className="w-3 h-3 mr-1" />
                הצג עורך
              </Button>
            )}
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-xs text-slate-300">תצוגה מקדימה</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-slate-700/50 text-slate-200 border-slate-600/30 text-xs px-2 py-0.5">
              {editedTemplate.category}
            </Badge>
            {isEditorMinimized && (
              <>
                <Button
                  onClick={handleAdvancedEditor}
                  size="sm"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg text-xs px-2 py-1.5"
                >
                  <Wrench className="w-3 h-3 mr-1" />
                  עורך מתקדם
                </Button>
                <Button
                  onClick={handleSave}
                  size="sm"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg text-xs px-2 py-1.5"
                >
                  <Save className="w-3 h-3 mr-1" />
                  שמור
                </Button>
                <Button 
                  size="sm" 
                  className={`${
                    isSaved 
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' 
                      : 'bg-slate-600/50 cursor-not-allowed opacity-50'
                  } text-white shadow-lg text-xs px-2 py-1.5`}
                  onClick={handleSaveAndPublish}
                  disabled={!isSaved}
                >
                  <Rocket className="w-3 h-3 mr-1" />
                  פרסם
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex min-h-0">
          
          {/* Editor Panel - Right Side */}
          {!isEditorMinimized && (
            <div className="w-64 border-l border-slate-600/30 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm flex flex-col">
              <ScrollArea className="flex-1">
                <div className="p-3">
                  {renderEditor()}
                </div>
              </ScrollArea>
            </div>
          )}
          
          {/* Preview - Takes remaining space */}
          <div 
            className="flex-1 bg-white overflow-auto"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const elementType = e.dataTransfer.getData('elementType');
              if (elementType && ['gallery', 'heading', 'text', 'video', 'slider', 'list', 'embed', 'socialBar'].includes(elementType)) {
                initializeSection(elementType);
                setActiveSection(elementType);
                toast({
                  title: "✅ אלמנט נוסף בהצלחה!",
                  description: `${elementType} נוסף לדף`,
                });
              }
            }}
          >
            <TemplatePreview template={editedTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplateEditor;
