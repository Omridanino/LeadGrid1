import React, { useState } from 'react';
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
  Plus
} from 'lucide-react';
import { ColorPicker } from '@/components/ui/color-picker';

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
  const [editableContent, setEditableContent] = useState(generatedContent || {
    hero: { title: 'כותרת ראשית', subtitle: 'כותרת משנה', button1Text: 'התחל עכשיו', button2Text: 'למד עוד' },
    features: { 
      title: 'התכונות שלנו', 
      subtitle: 'גלה את היתרונות הייחודיים שלנו',
      items: [
        { title: 'תכונה 1', description: 'תיאור התכונה הראשונה', icon: 'star' },
        { title: 'תכונה 2', description: 'תיאור התכונה השנייה', icon: 'heart' },
        { title: 'תכונה 3', description: 'תיאור התכונה השלישית', icon: 'zap' }
      ]
    },
    about: { title: 'אודותינו', description: 'אנחנו חברה מובילה בתחום' },
    services: {
      title: 'השירותים שלנו',
      subtitle: 'פתרונות מקצועיים המותאמים לצרכים שלכם',
      items: [
        { title: 'שירות 1', description: 'תיאור השירות הראשון', icon: 'settings' },
        { title: 'שירות 2', description: 'תיאור השירות השני', icon: 'globe' }
      ]
    }
  });
  
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
      backgroundType: 'gradient',
      textAlign: 'center',
      padding: 'large'
    },
    features: {
      background: '#f8fafc',
      backgroundType: 'solid',
      layout: 'grid',
      columns: 3,
      cardBackground: '#ffffff',
      cardBorder: '#e2e8f0',
      cardText: '#1f2937'
    },
    about: {
      background: '#ffffff',
      backgroundType: 'solid',
      layout: 'split',
      alignment: 'left'
    },
    services: {
      background: '#f8fafc',
      backgroundType: 'solid',
      layout: 'grid',
      columns: 2,
      cardBackground: '#ffffff',
      cardBorder: '#e2e8f0',
      cardText: '#1f2937'
    },
    testimonials: {
      background: '#ffffff',
      backgroundType: 'solid',
      layout: 'carousel',
      style: 'cards'
    },
    faq: {
      background: '#f8fafc',
      backgroundType: 'solid',
      layout: 'accordion',
      style: 'clean'
    },
    pricing: {
      background: '#ffffff',
      backgroundType: 'solid',
      layout: 'grid',
      style: 'modern',
      cardBackground: '#ffffff',
      cardBorder: '#e2e8f0',
      cardText: '#1f2937'
    },
    contact: {
      background: '#3b82f6',
      backgroundType: 'solid',
      layout: 'split',
      style: 'modern'
    }
  });

  const backgroundOptions = [
    { id: 'solid', name: 'צבע אחיד', preview: 'bg-blue-500' },
    { id: 'gradient', name: 'גרדיאנט', preview: 'bg-gradient-to-r from-blue-500 to-purple-600' },
    { id: 'pattern', name: 'דוגמה', preview: 'bg-blue-500' },
    { id: 'image', name: 'תמונה', preview: 'bg-gray-200' }
  ];

  const gradientOptions = [
    { id: 'blue-purple', name: 'כחול-סגול', gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' },
    { id: 'pink-orange', name: 'ורוד-כתום', gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)' },
    { id: 'green-blue', name: 'ירוק-כחול', gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)' },
    { id: 'purple-pink', name: 'סגול-ורוד', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' },
    { id: 'dark-blue', name: 'כחול כהה', gradient: 'linear-gradient(135deg, #1e40af 0%, #0f172a 100%)' },
    { id: 'sunset', name: 'שקיעה', gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' }
  ];

  const effectOptions = [
    { id: 'floating-shapes', name: 'צורות צפות', icon: Circle },
    { id: 'particles', name: 'חלקיקים', icon: Sparkles },
    { id: 'waves', name: 'גלים', icon: Layers },
    { id: 'dots-pattern', name: 'דוגמת נקודות', icon: Settings },
    { id: 'geometric-shapes', name: 'צורות גיאומטריות', icon: Square },
    { id: 'gradient-overlay', name: 'שכבת גרדיאנט', icon: Palette },
    { id: 'light-rays', name: 'קרני אור', icon: Zap },
    { id: 'blur-circles', name: 'עיגולים מטושטשים', icon: Target },
    { id: 'grid-lines', name: 'קווי רשת', icon: Layout },
    { id: 'aurora', name: 'זוהר צפוני', icon: Star }
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

  const updateSectionStyle = (section: string, key: string, value: string) => {
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

  const addNewFeature = () => {
    const newFeature = { title: 'תכונה חדשה', description: 'תיאור התכונה', icon: 'star' };
    const newItems = [...(editableContent.features?.items || []), newFeature];
    updateContent('features', 'items', newItems);
  };

  const addNewService = () => {
    const newService = { title: 'שירות חדש', description: 'תיאור השירות', icon: 'settings' };
    const newItems = [...(editableContent.services?.items || []), newService];
    updateContent('services', 'items', newItems);
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
                            <Label className="text-xs">כותרת ראשית</Label>
                            <Input
                              value={editableContent?.hero?.title || ''}
                              onChange={(e) => updateContent('hero', 'title', e.target.value)}
                              placeholder="כותרת ראשית"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">כותרת משנה</Label>
                            <Textarea
                              value={editableContent?.hero?.subtitle || ''}
                              onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
                              placeholder="כותרת משנה"
                              rows={3}
                            />
                          </div>
                          <div>
                            <Label className="text-xs">טקסט כפתור 1</Label>
                            <Input
                              value={editableContent?.hero?.button1Text || ''}
                              onChange={(e) => updateContent('hero', 'button1Text', e.target.value)}
                              placeholder="טקסט כפתור ראשי"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">טקסט כפתור 2</Label>
                            <Input
                              value={editableContent?.hero?.button2Text || ''}
                              onChange={(e) => updateContent('hero', 'button2Text', e.target.value)}
                              placeholder="טקסט כפתור משני"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">אייקוני כפתורים</Label>
                            <div className="grid grid-cols-5 gap-1 mt-1">
                              {iconOptions.map((iconOpt) => (
                                <Button
                                  key={iconOpt.id}
                                  variant={editableContent?.hero?.buttonIcon === iconOpt.id ? "default" : "outline"}
                                  size="sm"
                                  className="p-2"
                                  onClick={() => updateContent('hero', 'buttonIcon', iconOpt.id)}
                                >
                                  <iconOpt.icon className="h-3 w-3" />
                                </Button>
                              ))}
                            </div>
                          </div>
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
                            <Label className="text-xs">תיאור</Label>
                            <Textarea
                              value={editableContent?.about?.description || ''}
                              onChange={(e) => updateContent('about', 'description', e.target.value)}
                              placeholder="תיאור מפורט"
                              rows={4}
                            />
                          </div>
                          <div>
                            <Label className="text-xs">טקסט כפתור</Label>
                            <Input
                              value={editableContent?.about?.buttonText || ''}
                              onChange={(e) => updateContent('about', 'buttonText', e.target.value)}
                              placeholder="קרא עוד"
                            />
                          </div>
                          <div>
                            <Label className="text-xs">אייקון כפתור</Label>
                            <div className="grid grid-cols-5 gap-1 mt-1">
                              {iconOptions.map((iconOpt) => (
                                <Button
                                  key={iconOpt.id}
                                  variant={editableContent?.about?.buttonIcon === iconOpt.id ? "default" : "outline"}
                                  size="sm"
                                  className="p-2"
                                  onClick={() => updateContent('about', 'buttonIcon', iconOpt.id)}
                                >
                                  <iconOpt.icon className="h-3 w-3" />
                                </Button>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {activeSection === 'features' && editableContent?.features?.items && (
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <Label className="text-xs">תכונות</Label>
                            <Button size="sm" variant="outline" onClick={addNewFeature}>
                              <Plus className="h-3 w-3 mr-1" />
                              הוסף תכונה
                            </Button>
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
                            </div>
                          ))}
                        </div>
                      )}

                      {activeSection === 'services' && (
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <Label className="text-xs">שירותים</Label>
                            <Button size="sm" variant="outline" onClick={addNewService}>
                              <Plus className="h-3 w-3 mr-1" />
                              הוסף שירות
                            </Button>
                          </div>
                          {(editableContent?.services?.items || []).map((item, index) => (
                            <div key={index} className="p-3 border rounded-lg space-y-2">
                              <Label className="text-xs">שירות {index + 1}</Label>
                              <Input
                                value={item.title || ''}
                                onChange={(e) => {
                                  const newItems = [...(editableContent.services?.items || [])];
                                  newItems[index] = { ...item, title: e.target.value };
                                  updateContent('services', 'items', newItems);
                                }}
                                placeholder="כותרת השירות"
                              />
                              <Textarea
                                value={item.description || ''}
                                onChange={(e) => {
                                  const newItems = [...(editableContent.services?.items || [])];
                                  newItems[index] = { ...item, description: e.target.value };
                                  updateContent('services', 'items', newItems);
                                }}
                                placeholder="תיאור השירות"
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
                                        const newItems = [...(editableContent.services?.items || [])];
                                        newItems[index] = { ...item, icon: iconOpt.id };
                                        updateContent('services', 'items', newItems);
                                      }}
                                    >
                                      <iconOpt.icon className="h-3 w-3" />
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {(activeSection === 'testimonials' || activeSection === 'faq' || activeSection === 'pricing' || activeSection === 'contact') && (
                        <div className="text-center py-8 text-muted-foreground">
                          <Type className="h-8 w-8 mx-auto mb-2" />
                          <p>עריכת תוכן עבור סקשן {sections.find(s => s.id === activeSection)?.name}</p>
                          <p className="text-xs">יתווסף בקרוב...</p>
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

                  {/* Section Background */}
                  {activeSection && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">רקע הסקשן</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                          {backgroundOptions.map((bg) => (
                            <div
                              key={bg.id}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                sectionStyles[activeSection]?.backgroundType === bg.id 
                                  ? 'ring-2 ring-primary' 
                                  : ''
                              }`}
                              onClick={() => {
                                if (bg.id === 'gradient') {
                                  updateSectionStyle(activeSection, 'background', 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)');
                                } else if (bg.id === 'solid') {
                                  updateSectionStyle(activeSection, 'background', '#ffffff');
                                } else if (bg.id === 'pattern') {
                                  updateSectionStyle(activeSection, 'background', 'repeating-linear-gradient(45deg, #f8fafc 0px, #f8fafc 10px, #e2e8f0 10px, #e2e8f0 20px)');
                                } else if (bg.id === 'image') {
                                  updateSectionStyle(activeSection, 'background', 'url("data:image/svg+xml,%3csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cg fill=\'none\' fill-rule=\'evenodd\'%3e%3cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3e%3ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e") #ffffff');
                                }
                                updateSectionStyle(activeSection, 'backgroundType', bg.id);
                              }}
                            >
                              <div className={`h-8 rounded ${bg.preview} mb-2`}></div>
                              <div className="text-xs text-center">{bg.name}</div>
                            </div>
                          ))}
                        </div>
                        
                        {sectionStyles[activeSection]?.backgroundType === 'solid' && (
                          <div>
                            <Label className="text-xs">צבע רקע</Label>
                            <ColorPicker
                              color={typeof sectionStyles[activeSection]?.background === 'string' ? sectionStyles[activeSection]?.background : '#ffffff'}
                              onChange={(color) => updateSectionStyle(activeSection, 'background', color)}
                            />
                          </div>
                        )}
                        
                        {sectionStyles[activeSection]?.backgroundType === 'gradient' && (
                          <div>
                            <Label className="text-xs">בחר גרדיאנט</Label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              {gradientOptions.map((grad) => (
                                <div
                                  key={grad.id}
                                  className="p-2 border rounded-lg cursor-pointer transition-all hover:scale-105"
                                  onClick={() => updateSectionStyle(activeSection, 'background', grad.gradient)}
                                >
                                  <div 
                                    className="h-6 rounded mb-1" 
                                    style={{ background: grad.gradient }}
                                  ></div>
                                  <div className="text-xs text-center">{grad.name}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {sectionStyles[activeSection]?.backgroundType === 'image' && (
                          <div>
                            <Label className="text-xs">העלה תמונת רקע</Label>
                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-sm text-muted-foreground">גרור תמונה או לחץ להעלאה</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Card Colors */}
                  {(activeSection === 'features' || activeSection === 'services' || activeSection === 'pricing') && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">צבעי כרטיסיות</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label className="text-xs">צבע רקע כרטיסיות</Label>
                          <ColorPicker
                            color={sectionStyles[activeSection]?.cardBackground || '#ffffff'}
                            onChange={(color) => updateSectionStyle(activeSection, 'cardBackground', color)}
                          />
                        </div>
                        <div>
                          <Label className="text-xs">צבע גבול כרטיסיות</Label>
                          <ColorPicker
                            color={sectionStyles[activeSection]?.cardBorder || '#e2e8f0'}
                            onChange={(color) => updateSectionStyle(activeSection, 'cardBorder', color)}
                          />
                        </div>
                        <div>
                          <Label className="text-xs">צבע טקסט כרטיסיות</Label>
                          <ColorPicker
                            color={sectionStyles[activeSection]?.cardText || '#1f2937'}
                            onChange={(color) => updateSectionStyle(activeSection, 'cardText', color)}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="layout" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">פריסת הסקשן</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
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

                      {activeSection === 'hero' && (
                        <div>
                          <Label className="text-xs">יישור טקסט</Label>
                          <Select 
                            value={sectionStyles.hero?.textAlign}
                            onValueChange={(value) => updateSectionStyle('hero', 'textAlign', value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="center">מרכז</SelectItem>
                              <SelectItem value="left">שמאל</SelectItem>
                              <SelectItem value="right">ימין</SelectItem>
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
                      <CardTitle className="text-sm">סגנון כפתורים</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {buttonStyles.map((style) => (
                          <div
                            key={style.id}
                            className={`p-3 rounded-lg border cursor-pointer transition-all ${
                              pageStyles.buttonStyle === style.id 
                                ? 'ring-2 ring-primary' 
                                : ''
                            }`}
                            onClick={() => updatePageStyle('buttonStyle', style.id)}
                          >
                            <div className={`h-8 bg-primary ${style.class} mb-2`}></div>
                            <div className="text-xs text-center">{style.name}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="effects" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">אפקטים ואלמנטים</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {effectOptions.map((effect) => (
                          <div
                            key={effect.id}
                            className={`p-3 border rounded-lg cursor-pointer transition-all hover:scale-105 ${
                              sectionStyles[activeSection]?.effect === effect.id 
                                ? 'ring-2 ring-primary bg-primary/5' 
                                : ''
                            }`}
                            onClick={() => {
                              if (sectionStyles[activeSection]?.effect === effect.id) {
                                updateSectionStyle(activeSection, 'effect', '');
                              } else {
                                updateSectionStyle(activeSection, 'effect', effect.id);
                              }
                            }}
                          >
                            <div className="flex flex-col items-center">
                              <effect.icon className="h-6 w-6 mb-2 text-primary" />
                              <div className="text-xs text-center">{effect.name}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground text-center">
                        ניתן לבחור אפקט אחד לכל סקשן
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div className="flex-1 flex flex-col">
            {/* Top Toolbar */}
            <div className="p-4 border-b bg-background flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  <Layers className="h-3 w-3 mr-1" />
                  {activeSection}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  עורך את הסקשן שבחרת
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handlePreview}>
                  <Eye className="h-4 w-4 mr-2" />
                  תצוגה מקדימה
                </Button>
                <Button variant="outline" size="sm" onClick={handleSave}>
                  <Save className="h-4 w-4 mr-2" />
                  שמור
                </Button>
                <Button size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-2" />
                  הורד HTML
                </Button>
              </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
              <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Dynamic Preview Based on Active Section */}
                {activeSection === 'hero' && (
                  <div 
                    className="min-h-[500px] flex items-center justify-center p-12"
                    style={{ 
                      background: sectionStyles.hero?.background,
                      textAlign: sectionStyles.hero?.textAlign as any
                    }}
                  >
                    <div className="space-y-6">
                      <Badge className="bg-white/20 text-white">
                        {editableContent?.hero?.badge || '✨ חדשנות ומצוינות'}
                      </Badge>
                      <h1 
                        className="text-5xl font-bold"
                        style={{ color: pageStyles.heroTitleColor }}
                      >
                        {editableContent?.hero?.title || `${formData?.businessName || 'העסק שלנו'} - המובילים בתחום`}
                      </h1>
                      <p 
                        className="text-xl max-w-2xl"
                        style={{ color: pageStyles.heroSubtitleColor }}
                      >
                        {editableContent?.hero?.subtitle || 'פתרונות מקצועיים ואמינים ברמה הגבוהה ביותר'}
                      </p>
                      <div 
                        className={`flex gap-4 ${
                          sectionStyles.hero?.textAlign === 'right' ? 'justify-end' :
                          sectionStyles.hero?.textAlign === 'left' ? 'justify-start' :
                          'justify-center'
                        }`}
                      >
                        <Button 
                          size="lg"
                          className={`${pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                                     pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                                     pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'}`}
                        >
                          {editableContent?.hero?.buttonIcon && iconOptions.find(i => i.id === editableContent.hero.buttonIcon) && (
                            <div className="mr-2">
                              {React.createElement(iconOptions.find(i => i.id === editableContent.hero.buttonIcon)!.icon, { className: "h-4 w-4" })}
                            </div>
                          )}
                          {editableContent?.hero?.button1Text || 'התחל עכשיו'}
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className={`border-white text-white hover:bg-white/10 ${
                            pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                            pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                            pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'
                          }`}
                        >
                          {editableContent?.hero?.button2Text || 'למד עוד'}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'features' && (
                  <div 
                    className="p-12"
                    style={{ background: sectionStyles.features?.background }}
                  >
                    <div className="text-center mb-12">
                      <h2 
                        className="text-4xl font-bold mb-4"
                        style={{ color: pageStyles.featuresTitleColor }}
                      >
                        {editableContent?.features?.title || 'התכונות שלנו'}
                      </h2>
                      <p 
                        className="text-xl max-w-2xl mx-auto"
                        style={{ color: pageStyles.featuresTextColor }}
                      >
                        {editableContent?.features?.subtitle || 'גלה את היתרונות הייחודיים שלנו'}
                      </p>
                    </div>
                    
                    <div className={`grid gap-8 ${
                      sectionStyles.features?.columns === 4 ? 'grid-cols-4' :
                      sectionStyles.features?.columns === 3 ? 'grid-cols-3' : 'grid-cols-2'
                    }`}>
                      {(editableContent?.features?.items || []).map((feature, index) => {
                        const IconComponent = iconOptions.find(icon => icon.id === feature.icon)?.icon || Star;
                        return (
                          <Card 
                            key={index} 
                            className="text-center p-6"
                            style={{ 
                              backgroundColor: sectionStyles.features?.cardBackground,
                              borderColor: sectionStyles.features?.cardBorder,
                              color: sectionStyles.features?.cardText
                            }}
                          >
                            <CardContent className="pt-4">
                              <div className="mb-4 flex justify-center">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                  <IconComponent className="h-8 w-8 text-primary" />
                                </div>
                              </div>
                              <h3 
                                className="font-semibold text-lg mb-2"
                                style={{ color: sectionStyles.features?.cardText }}
                              >
                                {feature.title}
                              </h3>
                              <p 
                                style={{ color: sectionStyles.features?.cardText }}
                              >
                                {feature.description}
                              </p>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeSection === 'about' && (
                  <div 
                    className="p-12"
                    style={{ background: sectionStyles.about?.background }}
                  >
                    <div className="max-w-4xl mx-auto">
                      <div className="grid grid-cols-2 gap-12 items-center">
                        <div>
                          <h2 
                            className="text-4xl font-bold mb-6"
                            style={{ color: pageStyles.aboutTitleColor }}
                          >
                            {editableContent?.about?.title || 'אודותינו'}
                          </h2>
                          <p 
                            className="text-lg leading-relaxed mb-6"
                            style={{ color: pageStyles.aboutTextColor }}
                          >
                            {editableContent?.about?.description || 'אנחנו חברה מובילה בתחום עם ניסיון של שנים רבות. אנו מתמחים במתן פתרונות מקצועיים ואמינים ללקוחותינו.'}
                          </p>
                          <Button 
                            className={`${
                              pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                              pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                              pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'
                            }`}
                          >
                            {editableContent?.about?.buttonIcon && iconOptions.find(i => i.id === editableContent.about.buttonIcon) && (
                              <div className="mr-2">
                                {React.createElement(iconOptions.find(i => i.id === editableContent.about.buttonIcon)!.icon, { className: "h-4 w-4" })}
                              </div>
                            )}
                            {editableContent?.about?.buttonText || 'קרא עוד'}
                          </Button>
                        </div>
                        <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
                          <ImageIcon className="h-16 w-16 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'services' && (
                  <div 
                    className="p-12"
                    style={{ background: sectionStyles.services?.background }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold mb-4">השירותים שלנו</h2>
                      <p className="text-xl text-muted-foreground">פתרונות מקצועיים המותאמים לצרכים שלכם</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8">
                      {(editableContent?.services?.items || []).map((service, index) => {
                        const IconComponent = iconOptions.find(icon => icon.id === service.icon)?.icon || Settings;
                        return (
                          <Card 
                            key={index} 
                            className="p-6"
                            style={{ 
                              backgroundColor: sectionStyles.services?.cardBackground,
                              borderColor: sectionStyles.services?.cardBorder
                            }}
                          >
                            <CardContent className="pt-4">
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                  <IconComponent className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                  <h3 
                                    className="font-semibold text-lg mb-2"
                                    style={{ color: sectionStyles.services?.cardText }}
                                  >
                                    {service.title || `שירות ${index + 1}`}
                                  </h3>
                                  <p 
                                    style={{ color: sectionStyles.services?.cardText }}
                                  >
                                    {service.description || 'תיאור מפורט של השירות ויתרונותיו עבור הלקוח.'}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Preview placeholders for other sections */}
                {(activeSection === 'testimonials' || activeSection === 'faq' || activeSection === 'pricing' || activeSection === 'contact') && (
                  <div 
                    className="p-12 min-h-[400px] flex items-center justify-center"
                    style={{ background: sectionStyles[activeSection]?.background }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">🚧</div>
                      <h2 className="text-2xl font-bold mb-2">
                        {sections.find(s => s.id === activeSection)?.name}
                      </h2>
                      <p className="text-muted-foreground">
                        תצוגה מקדימה תתווסף בקרוב
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisualLandingPageEditor;