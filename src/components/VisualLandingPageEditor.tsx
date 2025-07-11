import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Type, 
  Layout, 
  Image as ImageIcon, 
  Sparkles,
  Save,
  Download,
  Eye,
  Settings,
  Paintbrush,
  Layers,
  Square,
  Circle,
  MousePointer,
  Star,
  Heart,
  Zap,
  Shield,
  Globe,
  Users,
  Trophy,
  Target,
  Edit3,
  Upload,
  Plus,
  Wand2
} from 'lucide-react';
import { ColorPicker } from '@/components/ui/color-picker';
import ImageUpload from './ImageUpload';
import React from 'react';

interface VisualLandingPageEditorProps {
  isOpen: boolean;
  onClose: () => void;
  generatedContent: any;
  formData: any;
}

const VisualLandingPageEditor = ({ 
  isOpen, 
  onClose, 
  generatedContent, 
  formData 
}: VisualLandingPageEditorProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Debug logs to see what data we're receiving
  console.log('VisualLandingPageEditor - generatedContent:', generatedContent);
  console.log('VisualLandingPageEditor - formData:', formData);
  
  // Initialize content with generated data or defaults
  const initializeContent = () => {
    console.log('Initializing content with generatedContent:', generatedContent);
    
    if (generatedContent) {
      return {
        hero: {
          title: generatedContent.hero?.title || 'כותרת ראשית',
          subtitle: generatedContent.hero?.subtitle || 'כותרת משנה', 
          button1Text: generatedContent.hero?.button1Text || 'התחל עכשיו',
          button2Text: generatedContent.hero?.button2Text || 'למד עוד',
          badge: generatedContent.hero?.badge || 'חדש!',
          description: generatedContent.hero?.description || 'תיאור מפורט של השירות או המוצר שלכם',
          button1Icon: '',
          button2Icon: ''
        },
        features: generatedContent.features ? {
          title: generatedContent.features.title || 'התכונות שלנו',
          subtitle: generatedContent.features.subtitle || 'גלה את היתרונות הייחודיים שלנו',
          items: generatedContent.features.items || [
            { title: 'תכונה 1', description: 'תיאור התכונה הראשונה', icon: 'star' },
            { title: 'תכונה 2', description: 'תיאור התכונה השנייה', icon: 'heart' },
            { title: 'תכונה 3', description: 'תיאור התכונה השלישית', icon: 'zap' }
          ]
        } : {
          title: 'התכונות שלנו',
          subtitle: 'גלה את היתרונות הייחודיים שלנו',
          items: [
            { title: 'תכונה 1', description: 'תיאור התכונה הראשונה', icon: 'star' },
            { title: 'תכונה 2', description: 'תיאור התכונה השנייה', icon: 'heart' },
            { title: 'תכונה 3', description: 'תיאור התכונה השלישית', icon: 'zap' }
          ]
        },
        about: generatedContent.about ? {
          title: generatedContent.about.title || 'אודותינו',
          subtitle: generatedContent.about.subtitle || 'כותרת משנה',
          description: generatedContent.about.description || 'אנחנו חברה מובילה בתחום',
          stats: generatedContent.about.stats || [
            { number: '24/7', label: 'תמיכה' },
            { number: '+5', label: 'שנות ניסיון' },
            { number: '+100', label: 'לקוחות מרוצים' }
          ],
          image: generatedContent.about.image || 'תמונה'
        } : {
          title: 'אודותינו',
          subtitle: 'כותרת משנה', 
          description: 'אנחנו חברה מובילה בתחום',
          stats: [
            { number: '24/7', label: 'תמיכה' },
            { number: '+5', label: 'שנות ניסיון' },
            { number: '+100', label: 'לקוחות מרוצים' }
          ],
          image: 'תמונה'
        },
        services: generatedContent.services ? {
          title: generatedContent.services.title || 'השירותים שלנו',
          subtitle: generatedContent.services.subtitle || 'פתרונות מקצועיים עבור העסק שלך',
          items: generatedContent.services.items || [
            { 
              title: 'שירות 1', 
              description: 'תיאור השירות הראשון',
              price: '₪999',
              features: ['תכונה 1', 'תכונה 2', 'תכונה 3']
            },
            { 
              title: 'שירות 2', 
              description: 'תיאור השירות השני',
              price: '₪1,999',
              features: ['תכונה 1', 'תכונה 2', 'תכונה 3', 'תכונה 4']
            }
          ]
        } : {
          title: 'השירותים שלנו',
          subtitle: 'פתרונות מקצועיים עבור העסק שלך',
          items: [
            { 
              title: 'שירות 1', 
              description: 'תיאור השירות הראשון',
              price: '₪999',
              features: ['תכונה 1', 'תכונה 2', 'תכונה 3']
            },
            { 
              title: 'שירות 2', 
              description: 'תיאור השירות השני', 
              price: '₪1,999',
              features: ['תכונה 1', 'תכונה 2', 'תכונה 3', 'תכונה 4']
            }
          ]
        },
        testimonials: generatedContent.testimonials || null,
        pricing: generatedContent.pricing || null,
        contact: generatedContent.contact || null
      };
    }
    
    // Default content if no generated content
    return {
      hero: { 
        title: 'כותרת ראשית', 
        subtitle: 'כותרת משנה', 
        button1Text: 'התחל עכשיו', 
        button2Text: 'למד עוד',
        badge: 'חדש!',
        description: 'תיאור מפורט של השירות או המוצר שלכם',
        button1Icon: '',
        button2Icon: ''
      },
      features: { 
        title: 'התכונות שלנו', 
        subtitle: 'גלה את היתרונות הייחודיים שלנו',
        items: [
          { title: 'תכונה 1', description: 'תיאור התכונה הראשונה', icon: 'star' },
          { title: 'תכונה 2', description: 'תיאור התכונה השנייה', icon: 'heart' },
          { title: 'תכונה 3', description: 'תיאור התכונה השלישית', icon: 'zap' }
        ]
      },
      about: { 
        title: 'אודותינו', 
        subtitle: 'כותרת משנה',
        description: 'אנחנו חברה מובילה בתחום',
        stats: [
          { number: '24/7', label: 'תמיכה' },
          { number: '+5', label: 'שנות ניסיון' },
          { number: '+100', label: 'לקוחות מרוצים' }
        ],
        image: 'תמונה'
      }
    };
  };

  // Use the actual generated content if available, otherwise use defaults  
  const [editableContent, setEditableContent] = useState(initializeContent);

  // Update content when generatedContent changes
  useEffect(() => {
    if (generatedContent) {
      console.log('useEffect - updating content with new generatedContent:', generatedContent);
      setEditableContent(initializeContent());
    }
  }, [generatedContent]);
  
  const [pageStyles, setPageStyles] = useState({
    primaryColor: '#3b82f6',
    secondaryColor: '#6b7280',
    accentColor: '#f59e0b',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    heroTitleColor: '#ffffff',
    heroSubtitleColor: '#ffffff',
    featuresTitleColor: '#1f2937',
    featuresTextColor: '#6b7280',
    aboutTitleColor: '#1f2937',
    aboutTextColor: '#6b7280',
    heroBackground: 'gradient',
    heroBackgroundImage: '',
    buttonStyle: 'rounded',
    fontFamily: 'modern',
    sectionSpacing: 'normal'
  });

  const [sectionStyles, setSectionStyles] = useState({
    hero: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
      textAlign: 'center',
      padding: 'large',
      backgroundType: 'gradient',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
      backgroundColor: '#3b82f6',
      effects: [] as string[]
    },
    features: {
      background: '#f8fafc',
      layout: 'grid',
      columns: 3,
      backgroundType: 'solid',
      gradient: '',
      backgroundColor: '#f8fafc',
      effects: [] as string[]
    },
    about: {
      background: '#ffffff',
      layout: 'split',
      alignment: 'left',
      backgroundType: 'solid',
      effects: []
    },
    services: {
      background: '#f8fafc',
      layout: 'grid',
      columns: 2,
      backgroundType: 'solid',
      effects: []
    },
    testimonials: {
      background: '#ffffff',
      layout: 'carousel',
      style: 'cards',
      backgroundType: 'solid',
      effects: []
    },
    faq: {
      background: '#f8fafc',
      layout: 'accordion',
      style: 'clean',
      backgroundType: 'solid',
      effects: []
    },
    pricing: {
      background: '#ffffff',
      layout: 'grid',
      style: 'modern',
      backgroundType: 'solid',
      effects: []
    },
    contact: {
      background: '#3b82f6',
      layout: 'split',
      style: 'modern',
      backgroundType: 'solid',
      effects: []
    }
  });

  const backgroundOptions = [
    { id: 'solid', name: 'צבע אחיד', preview: 'bg-blue-500' },
    { id: 'gradient', name: 'גרדיאנט', preview: 'bg-gradient-to-r from-blue-500 to-purple-600' },
    { id: 'pattern', name: 'דוגמה', preview: 'bg-blue-500 opacity-20' },
    { id: 'image', name: 'תמונה', preview: 'bg-gray-200' }
  ];

  const gradientOptions = [
    { id: 'blue-purple', name: 'כחול-סגול', value: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' },
    { id: 'pink-orange', name: 'ורוד-כתום', value: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)' },
    { id: 'green-blue', name: 'ירוק-כחול', value: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)' },
    { id: 'purple-pink', name: 'סגול-ורוד', value: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' },
    { id: 'orange-red', name: 'כתום-אדום', value: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)' },
    { id: 'teal-blue', name: 'ירוק ים-כחול', value: 'linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)' },
    { id: 'indigo-purple', name: 'אינדיגו-סגול', value: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' },
    { id: 'yellow-orange', name: 'צהוב-כתום', value: 'linear-gradient(135deg, #eab308 0%, #f97316 100%)' }
  ];

  const buttonStyles = [
    { id: 'rounded', name: 'מעוגל', class: 'rounded-lg' },
    { id: 'square', name: 'מרובע', class: 'rounded-none' },
    { id: 'pill', name: 'כדור', class: 'rounded-full' },
    { id: 'modern', name: 'מודרני', class: 'rounded-xl' }
  ];

  const iconOptions = [
    { id: 'star', icon: Star, name: 'כוכב' },
    { id: 'heart', icon: Heart, name: 'לב' },
    { id: 'zap', icon: Zap, name: 'ברק' },
    { id: 'shield', icon: Shield, name: 'מגן' },
    { id: 'globe', icon: Globe, name: 'כדור הארץ' },
    { id: 'users', icon: Users, name: 'משתמשים' },
    { id: 'trophy', icon: Trophy, name: 'גביע' },
    { id: 'target', icon: Target, name: 'מטרה' },
    { id: 'sparkles', icon: Sparkles, name: 'ניצוצות' },
    { id: 'settings', icon: Settings, name: 'הגדרות' }
  ];

  const effectOptions = [
    { id: 'glow', name: 'זוהר', description: 'אפקט זוהר סביב האלמנט' },
    { id: 'shadow', name: 'צל', description: 'צל מתחת לאלמנט' },
    { id: 'blur', name: 'טשטוש רקע', description: 'טשטוש ברקע' },
    { id: 'float', name: 'ריחוף', description: 'אנימציית ריחוף' },
    { id: 'pulse', name: 'פעימה', description: 'אנימציית פעימה' },
    { id: 'gradient-text', name: 'טקסט גרדיאנט', description: 'צבע גרדיאנט לטקסט' },
    { id: 'glass', name: 'זכוכית', description: 'אפקט זכוכית שקופה' },
    { id: 'neon', name: 'נאון', description: 'אפקט נאון זוהר' },
    { id: 'particle', name: 'חלקיקים', description: 'חלקיקים מרחפים' },
    { id: 'wave', name: 'גלים', description: 'אנימציית גלים' }
  ];

  const sections = [
    { id: 'hero', name: 'דף הבית', icon: Sparkles },
    { id: 'features', name: 'תכונות', icon: Layout },
    { id: 'about', name: 'אודותינו', icon: Circle },
    { id: 'services', name: 'שירותים', icon: Settings },
    { id: 'testimonials', name: 'המלצות', icon: Type },
    { id: 'faq', name: 'שאלות נפוצות', icon: Eye },
    { id: 'pricing', name: 'מחירים', icon: Square },
    { id: 'contact', name: 'יצירת קשר', icon: MousePointer }
  ];

  const updatePageStyle = (key: string, value: string) => {
    setPageStyles(prev => ({ ...prev, [key]: value }));
  };

  const updateSectionStyle = (section: string, key: string, value: string | string[]) => {
    setSectionStyles(prev => ({
      ...prev,
      [section]: { ...prev[section], [key]: value }
    }));
  };

  const updateContent = (section: string, field: string, value: any) => {
    setEditableContent(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const addButton = (section: string) => {
    const currentContent = editableContent[section] || {};
    const buttonCount = Object.keys(currentContent).filter(key => key.startsWith('button')).length;
    const newButtonIndex = buttonCount + 1;
    
    updateContent(section, `button${newButtonIndex}Text`, `כפתור ${newButtonIndex}`);
    updateContent(section, `button${newButtonIndex}Icon`, '');
  };

  const addEffect = (section: string, effectId: string) => {
    const currentEffects = sectionStyles[section]?.effects || [];
    if (!currentEffects.includes(effectId)) {
      updateSectionStyle(section, 'effects', [...currentEffects, effectId]);
    }
  };

  const removeEffect = (section: string, effectId: string) => {
    const currentEffects = sectionStyles[section]?.effects || [];
    updateSectionStyle(section, 'effects', currentEffects.filter(e => e !== effectId));
  };

  const getAlignmentClass = (align: string) => {
    switch (align) {
      case 'right': return 'text-right items-end justify-end';
      case 'left': return 'text-left items-start justify-start';
      default: return 'text-center items-center justify-center';
    }
  };

  const getBackgroundStyle = (section: any) => {
    if (section.backgroundType === 'gradient' && section.gradient) {
      return { background: section.gradient };
    }
    if (section.backgroundType === 'pattern') {
      return { 
        background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundColor: '#f8fafc'
      };
    }
    return { background: section.background };
  };

  const handleSave = () => {
    console.log('Saving page with styles:', { pageStyles, sectionStyles });
  };

  const handleDownload = () => {
    console.log('Downloading page...');
  };

  const handlePreview = () => {
    console.log('Opening preview...');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[95vh] overflow-hidden p-0 flex flex-col">
        <div className="flex h-full overflow-hidden">
          {/* Left Sidebar - Controls */}
          <div className="w-80 border-r bg-muted/30 overflow-y-auto flex-shrink-0">
            <DialogHeader className="p-6 border-b">
              <DialogTitle className="flex items-center gap-2">
                <Paintbrush className="h-5 w-5" />
                עורך חזותי מתקדם
              </DialogTitle>
            </DialogHeader>

            <div className="p-4 space-y-6">
              {/* Section Selector */}
              <div>
                <Label className="text-sm font-medium mb-3 block">בחר סקשן לעריכה</Label>
                <div className="grid grid-cols-2 gap-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveSection(section.id)}
                      className="justify-start"
                    >
                      <section.icon className="h-4 w-4 mr-2" />
                      {section.name}
                    </Button>
                  ))}
                </div>
              </div>

              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="content">תוכן</TabsTrigger>
                  <TabsTrigger value="colors">צבעים</TabsTrigger>
                  <TabsTrigger value="layout">פריסה</TabsTrigger>
                  <TabsTrigger value="style">סגנון</TabsTrigger>
                  <TabsTrigger value="effects">אפקטים</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Edit3 className="h-4 w-4" />
                        עריכת תוכן
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {activeSection === 'hero' && (
                        <>
                          <div>
                            <Label className="text-xs">תג</Label>
                            <Input
                              value={editableContent?.hero?.badge || ''}
                              onChange={(e) => updateContent('hero', 'badge', e.target.value)}
                              placeholder="תג"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">כותרת ראשית</Label>
                            <Input
                              value={editableContent?.hero?.title || ''}
                              onChange={(e) => updateContent('hero', 'title', e.target.value)}
                              placeholder="כותרת ראשית"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">כותרת משנה</Label>
                            <Input
                              value={editableContent?.hero?.subtitle || ''}
                              onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
                              placeholder="כותרת משנה"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">תיאור</Label>
                            <Textarea
                              value={editableContent?.hero?.description || ''}
                              onChange={(e) => updateContent('hero', 'description', e.target.value)}
                              placeholder="תיאור מפורט"
                              rows={3}
                            />
                          </div>
                          <div>
                            <Label className="text-xs">טקסט כפתור 1</Label>
                            <div className="flex gap-2">
                              <Input
                                value={editableContent?.hero?.button1Text || ''}
                                onChange={(e) => updateContent('hero', 'button1Text', e.target.value)}
                                placeholder="טקסט כפתור ראשי"
                              />
                              <Select
                                value={editableContent?.hero?.button1Icon || 'none'}
                                onValueChange={(value) => updateContent('hero', 'button1Icon', value === 'none' ? '' : value)}
                              >
                                <SelectTrigger className="w-20">
                                  <SelectValue placeholder="🔽" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="none">ללא</SelectItem>
                                  {iconOptions.map((icon) => (
                                    <SelectItem key={icon.id} value={icon.id}>
                                      <icon.icon className="h-4 w-4" />
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div>
                            <Label className="text-xs">טקסט כפתור 2</Label>
                            <div className="flex gap-2">
                              <Input
                                value={editableContent?.hero?.button2Text || ''}
                                onChange={(e) => updateContent('hero', 'button2Text', e.target.value)}
                                placeholder="טקסט כפתור משני"
                              />
                              <Select
                                value={editableContent?.hero?.button2Icon || 'none'}
                                onValueChange={(value) => updateContent('hero', 'button2Icon', value === 'none' ? '' : value)}
                              >
                                <SelectTrigger className="w-20">
                                  <SelectValue placeholder="🔽" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="none">ללא</SelectItem>
                                  {iconOptions.map((icon) => (
                                    <SelectItem key={icon.id} value={icon.id}>
                                      <icon.icon className="h-4 w-4" />
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => addButton('hero')}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            הוסף כפתור
                          </Button>
                        </>
                      )}

                      {activeSection === 'about' && (
                        <>
                          <div>
                            <Label className="text-xs">כותרת</Label>
                            <Input
                              value={editableContent?.about?.title || ''}
                              onChange={(e) => updateContent('about', 'title', e.target.value)}
                              placeholder="כותרת הסקשן"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">כותרת משנה</Label>
                            <Input
                              value={(editableContent?.about as any)?.subtitle || ''}
                              onChange={(e) => updateContent('about', 'subtitle', e.target.value)}
                              placeholder="כותרת משנה"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">תיאור</Label>
                            <Textarea
                              value={editableContent?.about?.description || ''}
                              onChange={(e) => updateContent('about', 'description', e.target.value)}
                              placeholder="תיאור מפורט"
                              rows={4}
                            />
                          </div>
                          
                          <div>
                            <Label className="text-xs">סטטיסטיקות</Label>
                            <div className="space-y-2">
                              {((editableContent?.about as any)?.stats || []).map((stat: any, index: number) => (
                                <div key={index} className="grid grid-cols-2 gap-2">
                                  <Input
                                    value={stat.number || ''}
                                    onChange={(e) => {
                                      const newStats = [...((editableContent?.about as any)?.stats || [])];
                                      newStats[index] = { ...stat, number: e.target.value };
                                      updateContent('about', 'stats', newStats);
                                    }}
                                    placeholder="מספר"
                                  />
                                  <Input
                                    value={stat.label || ''}
                                    onChange={(e) => {
                                      const newStats = [...((editableContent?.about as any)?.stats || [])];
                                      newStats[index] = { ...stat, label: e.target.value };
                                      updateContent('about', 'stats', newStats);
                                    }}
                                    placeholder="תווית"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <Label className="text-xs">תמונה</Label>
                            <ImageUpload
                              currentImageUrl={(editableContent?.about as any)?.image || ''}
                              onImageChange={(imageUrl) => updateContent('about', 'image', imageUrl)}
                              bucket="about-images"
                            />
                          </div>
                          
                          <Button
                            variant="outline" 
                            size="sm" 
                            onClick={() => addButton('about')}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            הוסף כפתור
                          </Button>
                        </>
                      )}

                      {activeSection === 'features' && editableContent?.features?.items && (
                        <div className="space-y-3">
                          <div>
                            <Label className="text-xs">כותרת הסקשן</Label>
                            <Input
                              value={editableContent?.features?.title || ''}
                              onChange={(e) => updateContent('features', 'title', e.target.value)}
                              placeholder="כותרת הסקשן"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">תת כותרת</Label>
                            <Input
                              value={editableContent?.features?.subtitle || ''}
                              onChange={(e) => updateContent('features', 'subtitle', e.target.value)}
                              placeholder="תת כותרת"
                            />
                          </div>
                          
                          {editableContent.features.items.map((item, index) => (
                            <div key={index} className="p-3 border rounded-lg space-y-2">
                              <Label className="text-xs">תכונה {index + 1}</Label>
                              <Input
                                value={item.title || ''}
                                onChange={(e) => {
                                  const newItems = [...editableContent.features.items];
                                  newItems[index] = { ...item, title: e.target.value };
                                  updateContent('features', 'items', newItems);
                                }}
                                placeholder="כותרת התכונה"
                              />
                              <Textarea
                                value={item.description || ''}
                                onChange={(e) => {
                                  const newItems = [...editableContent.features.items];
                                  newItems[index] = { ...item, description: e.target.value };
                                  updateContent('features', 'items', newItems);
                                }}
                                placeholder="תיאור התכונה"
                                rows={2}
                              />
                              <div>
                                <Label className="text-xs">אייקון</Label>
                                <div className="grid grid-cols-5 gap-1 mt-1">
                                  {iconOptions.map((iconOpt) => (
                                    <Button
                                      key={iconOpt.id}
                                      variant={item.icon === iconOpt.id ? "default" : "outline"}
                                      size="sm"
                                      className="p-2"
                                      onClick={() => {
                                        const newItems = [...editableContent.features.items];
                                        newItems[index] = { ...item, icon: iconOpt.id };
                                        updateContent('features', 'items', newItems);
                                      }}
                                    >
                                      <iconOpt.icon className="h-3 w-3" />
                                    </Button>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <Label className="text-xs">צבע כרטיסיה</Label>
                                <ColorPicker
                                  color={item.cardColor || '#ffffff'}
                                  onChange={(color) => {
                                    const newItems = [...editableContent.features.items];
                                    newItems[index] = { ...item, cardColor: color };
                                    updateContent('features', 'items', newItems);
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => addButton('features')}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            הוסף כפתור
                          </Button>
                        </div>
                      )}

                      {activeSection === 'services' && (
                        <>
                          <div>
                            <Label className="text-xs">כותרת</Label>
                            <Input
                              value={(editableContent?.services as any)?.title || ''}
                              onChange={(e) => updateContent('services', 'title', e.target.value)}
                              placeholder="כותרת הסקשן"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">כותרת משנה</Label>
                            <Input
                              value={(editableContent?.services as any)?.subtitle || ''}
                              onChange={(e) => updateContent('services', 'subtitle', e.target.value)}
                              placeholder="כותרת משנה"
                            />
                          </div>
                          
                          <div>
                            <Label className="text-xs">שירותים</Label>
                            <div className="space-y-3">
                              {((editableContent?.services as any)?.items || []).map((service: any, index: number) => (
                                <div key={index} className="p-3 border rounded-lg space-y-2">
                                  <Label className="text-xs">שירות {index + 1}</Label>
                                  <Input
                                    value={service.title || ''}
                                    onChange={(e) => {
                                      const newItems = [...((editableContent?.services as any)?.items || [])];
                                      newItems[index] = { ...service, title: e.target.value };
                                      updateContent('services', 'items', newItems);
                                    }}
                                    placeholder="שם השירות"
                                  />
                                  <Textarea
                                    value={service.description || ''}
                                    onChange={(e) => {
                                      const newItems = [...((editableContent?.services as any)?.items || [])];
                                      newItems[index] = { ...service, description: e.target.value };
                                      updateContent('services', 'items', newItems);
                                    }}
                                    placeholder="תיאור השירות"
                                    rows={2}
                                  />
                                  <Input
                                    value={service.price || ''}
                                    onChange={(e) => {
                                      const newItems = [...((editableContent?.services as any)?.items || [])];
                                      newItems[index] = { ...service, price: e.target.value };
                                      updateContent('services', 'items', newItems);
                                    }}
                                    placeholder="מחיר (לדוגמה: ₪999)"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => addButton('services')}
                            className="w-full"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            הוסף כפתור
                          </Button>
                        </>
                      )}

                      {(activeSection === 'testimonials' || activeSection === 'faq' || activeSection === 'pricing' || activeSection === 'contact') && (
                        <div className="text-center py-8 text-muted-foreground">
                          <Type className="h-8 w-8 mx-auto mb-2" />
                          <p>עריכת תוכן עבור סקשן {sections.find(s => s.id === activeSection)?.name}</p>
                          <p className="text-xs">יתווסף בקרוב...</p>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => addButton(activeSection)}
                            className="w-full mt-4"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            הוסף כפתור
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="colors" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">צבעי הדף</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-xs">צבע ראשי</Label>
                        <ColorPicker
                          color={pageStyles.primaryColor}
                          onChange={(color) => updatePageStyle('primaryColor', color)}
                        />
                      </div>
                      
                      <div>
                        <Label className="text-xs">צבע משני</Label>
                        <ColorPicker
                          color={pageStyles.secondaryColor}
                          onChange={(color) => updatePageStyle('secondaryColor', color)}
                        />
                      </div>
                      
                      <div>
                        <Label className="text-xs">צבע דגש</Label>
                        <ColorPicker
                          color={pageStyles.accentColor}
                          onChange={(color) => updatePageStyle('accentColor', color)}
                        />
                      </div>
                      
                      <div>
                        <Label className="text-xs">צבע רקע</Label>
                        <ColorPicker
                          color={pageStyles.backgroundColor}
                          onChange={(color) => updatePageStyle('backgroundColor', color)}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Section Text Colors */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">צבעי טקסט - {sections.find(s => s.id === activeSection)?.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {activeSection === 'hero' && (
                        <>
                          <div>
                            <Label className="text-xs">צבע כותרת ראשית</Label>
                            <ColorPicker
                              color={pageStyles.heroTitleColor}
                              onChange={(color) => updatePageStyle('heroTitleColor', color)}
                            />
                          </div>
                          <div>
                            <Label className="text-xs">צבע כותרת משנה</Label>
                            <ColorPicker
                              color={pageStyles.heroSubtitleColor}
                              onChange={(color) => updatePageStyle('heroSubtitleColor', color)}
                            />
                          </div>
                        </>
                      )}
                      
                      {activeSection === 'features' && (
                        <>
                          <div>
                            <Label className="text-xs">צבע כותרת</Label>
                            <ColorPicker
                              color={pageStyles.featuresTitleColor}
                              onChange={(color) => updatePageStyle('featuresTitleColor', color)}
                            />
                          </div>
                          <div>
                            <Label className="text-xs">צבע טקסט</Label>
                            <ColorPicker
                              color={pageStyles.featuresTextColor}
                              onChange={(color) => updatePageStyle('featuresTextColor', color)}
                            />
                          </div>
                        </>
                      )}
                      
                      {activeSection === 'about' && (
                        <>
                          <div>
                            <Label className="text-xs">צבע כותרת</Label>
                            <ColorPicker
                              color={pageStyles.aboutTitleColor}
                              onChange={(color) => updatePageStyle('aboutTitleColor', color)}
                            />
                          </div>
                          <div>
                            <Label className="text-xs">צבע טקסט</Label>
                            <ColorPicker
                              color={pageStyles.aboutTextColor}
                              onChange={(color) => updatePageStyle('aboutTextColor', color)}
                            />
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="layout" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">פריסה - {sections.find(s => s.id === activeSection)?.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {activeSection === 'hero' && (
                        <>
                          <div>
                            <Label className="text-xs">יישור טקסט וכפתורים</Label>
                            <Select
                              value={sectionStyles[activeSection]?.textAlign || 'center'}
                              onValueChange={(value) => updateSectionStyle(activeSection, 'textAlign', value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="right">ימין</SelectItem>
                                <SelectItem value="center">מרכז</SelectItem>
                                <SelectItem value="left">שמאל</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label className="text-xs">רקע</Label>
                            <div className="grid grid-cols-2 gap-2 mt-1">
                              {backgroundOptions.map((bg) => (
                                <Button
                                  key={bg.id}
                                  variant={sectionStyles[activeSection]?.backgroundType === bg.id ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => updateSectionStyle(activeSection, 'backgroundType', bg.id)}
                                  className="h-12"
                                >
                                  <div className={`w-6 h-6 rounded ${bg.preview} mr-2`}></div>
                                  {bg.name}
                                </Button>
                              ))}
                            </div>
                          </div>

                          {sectionStyles[activeSection]?.backgroundType === 'gradient' && (
                            <div>
                              <Label className="text-xs">בחר גרדיאנט</Label>
                              <div className="grid grid-cols-2 gap-2 mt-1">
                                {gradientOptions.map((gradient) => (
                                  <Button
                                    key={gradient.id}
                                    variant={sectionStyles[activeSection]?.gradient === gradient.value ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => updateSectionStyle(activeSection, 'gradient', gradient.value)}
                                    className="h-12 p-0"
                                  >
                                    <div 
                                      className="w-full h-full rounded"
                                      style={{ background: gradient.value }}
                                    ></div>
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}

                          {sectionStyles[activeSection]?.backgroundType === 'solid' && (
                            <div>
                              <Label className="text-xs">צבע רקע</Label>
                              <ColorPicker
                                color={sectionStyles[activeSection]?.backgroundColor || '#3b82f6'}
                                onChange={(color) => updateSectionStyle(activeSection, 'backgroundColor', color)}
                              />
                            </div>
                          )}

                          {sectionStyles[activeSection]?.backgroundType === 'image' && (
                            <div>
                              <Label className="text-xs">תמונת רקע</Label>
                              <div className="mt-1">
                                <Button variant="outline" className="w-full">
                                  <Upload className="h-4 w-4 mr-2" />
                                  העלה תמונה
                                </Button>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {activeSection === 'features' && (
                        <div>
                          <Label className="text-xs">מספר עמודות</Label>
                          <Select 
                            value={sectionStyles.features?.columns?.toString()}
                            onValueChange={(value) => updateSectionStyle('features', 'columns', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2">2 עמודות</SelectItem>
                              <SelectItem value="3">3 עמודות</SelectItem>
                              <SelectItem value="4">4 עמודות</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {(activeSection === 'about' || activeSection === 'services' || activeSection === 'testimonials' || activeSection === 'contact') && (
                        <div>
                          <Label className="text-xs">פריסה</Label>
                          <Select 
                            value={sectionStyles[activeSection]?.layout || 'split'}
                            onValueChange={(value) => updateSectionStyle(activeSection, 'layout', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="split">מפוצל</SelectItem>
                              <SelectItem value="centered">מרכז</SelectItem>
                              <SelectItem value="grid">רשת</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="style" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">עיצוב כפתורים</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-xs">סגנון כפתורים</Label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {buttonStyles.map((style) => (
                            <Button
                              key={style.id}
                              variant={pageStyles.buttonStyle === style.id ? "default" : "outline"}
                              size="sm"
                              onClick={() => updatePageStyle('buttonStyle', style.id)}
                              className={style.class}
                            >
                              {style.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">טיפוגרפיה</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-xs">גופן</Label>
                        <Select
                          value={pageStyles.fontFamily}
                          onValueChange={(value) => updatePageStyle('fontFamily', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="modern">מודרני</SelectItem>
                            <SelectItem value="classic">קלאסי</SelectItem>
                            <SelectItem value="elegant">אלגנטי</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="effects" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">אפקטים - {sections.find(s => s.id === activeSection)?.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-xs">אפקטים פעילים</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {(sectionStyles[activeSection]?.effects || []).map((effectId) => {
                            const effect = effectOptions.find(e => e.id === effectId);
                            return effect ? (
                              <Badge 
                                key={effectId} 
                                variant="secondary" 
                                className="cursor-pointer"
                                onClick={() => removeEffect(activeSection, effectId)}
                              >
                                {effect.name} ✕
                              </Badge>
                            ) : null;
                          })}
                          {(sectionStyles[activeSection]?.effects || []).length === 0 && (
                            <span className="text-xs text-muted-foreground">אין אפקטים פעילים</span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-xs">הוסף אפקט (מקסימום 1 לסקשן)</Label>
                        <div className="grid grid-cols-1 gap-2 mt-1">
                          {effectOptions.map((effect) => {
                            const isActive = (sectionStyles[activeSection]?.effects || []).includes(effect.id);
                            const canAdd = (sectionStyles[activeSection]?.effects || []).length === 0;
                            
                            return (
                              <Button
                                key={effect.id}
                                variant={isActive ? "default" : "outline"}
                                size="sm"
                                onClick={() => isActive ? removeEffect(activeSection, effect.id) : addEffect(activeSection, effect.id)}
                                disabled={!isActive && !canAdd}
                                className="justify-start text-right h-auto p-3"
                              >
                                <div>
                                  <div className="font-medium">{effect.name}</div>
                                  <div className="text-xs text-muted-foreground">{effect.description}</div>
                                </div>
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t">
                <Button onClick={handleSave} className="w-full" size="sm">
                  <Save className="h-4 w-4 mr-2" />
                  שמור שינויים
                </Button>
                <Button onClick={handlePreview} variant="outline" className="w-full" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  תצוגה מקדימה
                </Button>
                <Button onClick={handleDownload} variant="outline" className="w-full" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  הורד כ-HTML
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="flex-1 bg-white overflow-y-auto">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">תצוגה מקדימה</h3>
                <Badge variant="secondary">
                  עריכה: {sections.find(s => s.id === activeSection)?.name}
                </Badge>
              </div>

              {/* Hero Section Preview */}
              {activeSection === 'hero' && (
                <div 
                  className={`min-h-[500px] p-8 rounded-lg ${getAlignmentClass(sectionStyles.hero?.textAlign || 'center')} flex flex-col`}
                  style={getBackgroundStyle(sectionStyles.hero)}
                >
                  {editableContent?.hero?.badge && (
                    <Badge 
                      variant="secondary" 
                      className="mb-4 bg-white/10 text-white border-white/20"
                      style={{ alignSelf: sectionStyles.hero?.textAlign === 'right' ? 'flex-end' : sectionStyles.hero?.textAlign === 'left' ? 'flex-start' : 'center' }}
                    >
                      {editableContent.hero.badge}
                    </Badge>
                  )}
                  
                  <h1 
                    className="text-4xl font-bold mb-4"
                    style={{ color: pageStyles.heroTitleColor }}
                  >
                    {editableContent?.hero?.title || 'כותרת ראשית'}
                  </h1>
                  
                  <h2 
                    className="text-xl mb-4"
                    style={{ color: pageStyles.heroSubtitleColor }}
                  >
                    {editableContent?.hero?.subtitle || 'כותרת משנה'}
                  </h2>
                  
                  <p 
                    className="text-lg mb-8 max-w-2xl opacity-90"
                    style={{ color: pageStyles.heroSubtitleColor }}
                  >
                    {editableContent?.hero?.description || 'תיאור מפורט של השירות או המוצר שלכם'}
                  </p>
                  
                  <div 
                    className={`flex gap-4 flex-wrap ${
                      sectionStyles.hero?.textAlign === 'right' ? 'justify-end' : 
                      sectionStyles.hero?.textAlign === 'left' ? 'justify-start' : 
                      'justify-center'
                    }`}
                  >
                    {editableContent?.hero?.button1Text && (
                      <Button 
                        className={`${buttonStyles.find(s => s.id === pageStyles.buttonStyle)?.class || 'rounded-lg'} bg-white text-blue-600 hover:bg-gray-100`}
                      >
                        {editableContent?.hero?.button1Icon && iconOptions.find(i => i.id === editableContent.hero.button1Icon) && (
                          (() => {
                            const IconComponent = iconOptions.find(i => i.id === editableContent.hero.button1Icon)?.icon;
                            return IconComponent ? <IconComponent className="h-4 w-4 mr-2" /> : null;
                          })()
                        )}
                        {editableContent.hero.button1Text}
                      </Button>
                    )}
                    
                    {editableContent?.hero?.button2Text && (
                      <Button 
                        variant="outline" 
                        className={`${buttonStyles.find(s => s.id === pageStyles.buttonStyle)?.class || 'rounded-lg'} border-white text-white hover:bg-white/10`}
                      >
                        {editableContent?.hero?.button2Icon && iconOptions.find(i => i.id === editableContent.hero.button2Icon) && (
                          (() => {
                            const IconComponent = iconOptions.find(i => i.id === editableContent.hero.button2Icon)?.icon;
                            return IconComponent ? <IconComponent className="h-4 w-4 mr-2" /> : null;
                          })()
                        )}
                        {editableContent.hero.button2Text}
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Features Section Preview */}
              {activeSection === 'features' && (
                <div className="p-8 rounded-lg" style={{ background: sectionStyles.features?.background }}>
                  <div className="text-center mb-12">
                    <h2 
                      className="text-3xl font-bold mb-4"
                      style={{ color: pageStyles.featuresTitleColor }}
                    >
                      {editableContent?.features?.title || 'התכונות שלנו'}
                    </h2>
                    <p 
                      className="text-lg"
                      style={{ color: pageStyles.featuresTextColor }}
                    >
                      {editableContent?.features?.subtitle || 'גלה את היתרונות הייחודיים שלנו'}
                    </p>
                  </div>
                  
                  <div 
                    className={`grid gap-6`}
                    style={{ gridTemplateColumns: `repeat(${sectionStyles.features?.columns || 3}, 1fr)` }}
                  >
                    {editableContent?.features?.items?.map((item, index) => (
                      <Card 
                        key={index} 
                        className="p-6 text-center"
                        style={{ backgroundColor: item.cardColor || '#ffffff' }}
                      >
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                          {iconOptions.find(i => i.id === item.icon) && 
                            React.createElement(iconOptions.find(i => i.id === item.icon)!.icon, { 
                              className: "h-6 w-6 text-blue-600" 
                            })
                          }
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </Card>
                    )) || []}
                  </div>
                </div>
              )}

              {/* About Section Preview */}
              {activeSection === 'about' && (
                <div className="p-8 rounded-lg" style={{ background: sectionStyles.about?.background }}>
                  <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 
                          className="text-3xl font-bold mb-4"
                          style={{ color: pageStyles.aboutTitleColor }}
                        >
                          {editableContent?.about?.title || 'אודותינו'}
                        </h2>
                        <p className="text-xl text-blue-600 mb-6">
                          {(editableContent?.about as any)?.subtitle || 'כותרת משנה'}
                        </p>
                        <p 
                          className="mb-8 leading-relaxed"
                          style={{ color: pageStyles.aboutTextColor }}
                        >
                          {editableContent?.about?.description || 'אנחנו חברה מובילה בתחום עם ניסיון רב שנים בפיתוח פתרונות חדשניים ומתקדמים עבור לקוחותינו.'}
                        </p>
                        {(editableContent?.about as any)?.stats && (
                          <div className="grid grid-cols-3 gap-6">
                            {(editableContent.about as any).stats.map((stat: any, index: number) => (
                              <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                        {(editableContent?.about as any)?.image && (editableContent?.about as any)?.image !== 'תמונה' ? (
                          <img 
                            src={(editableContent?.about as any)?.image} 
                            alt="תמונת אודות" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-500">📸 העלה תמונה</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Services Section Preview */}
              {activeSection === 'services' && (
                <div className="p-8 rounded-lg bg-gray-50">
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                      {(editableContent?.services as any)?.title || 'השירותים שלנו'}
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                      {(editableContent?.services as any)?.subtitle || 'פתרונות מקצועיים עבור העסק שלך'}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      {((editableContent?.services as any)?.items || []).map((service: any, index: number) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                          <ul className="space-y-2 mb-6">
                            {(service.features || []).map((feature: string, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-center text-sm">
                                <span className="text-green-500 mr-2">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full">
                            בחר שירות
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Other Sections Preview */}
              {(activeSection === 'testimonials' || activeSection === 'faq' || activeSection === 'pricing' || activeSection === 'contact') && (
                <div className="p-8 rounded-lg bg-gray-50 text-center">
                  <div className="text-gray-500 mb-4">
                    <Type className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">
                      תצוגה מקדימה של {sections.find(s => s.id === activeSection)?.name}
                    </h3>
                    <p className="text-sm mt-2">התצוגה המקדימה תתווסף בקרוב...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisualLandingPageEditor;
