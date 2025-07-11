import { useState } from 'react';
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
  Upload
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
  const [editableContent, setEditableContent] = useState(generatedContent || {});
  const [pageStyles, setPageStyles] = useState({
    primaryColor: '#3b82f6',
    secondaryColor: '#6b7280',
    accentColor: '#f59e0b',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
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
      padding: 'large'
    },
    features: {
      background: '#f8fafc',
      layout: 'grid',
      columns: 3
    },
    about: {
      background: '#ffffff',
      layout: 'split',
      alignment: 'left'
    },
    services: {
      background: '#f8fafc',
      layout: 'grid',
      columns: 2
    },
    testimonials: {
      background: '#ffffff',
      layout: 'carousel',
      style: 'cards'
    },
    faq: {
      background: '#f8fafc',
      layout: 'accordion',
      style: 'clean'
    },
    pricing: {
      background: '#ffffff',
      layout: 'grid',
      style: 'modern'
    },
    contact: {
      background: '#3b82f6',
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

  const handleSave = () => {
    // TODO: Save to database/local storage
    console.log('Saving page with styles:', { pageStyles, sectionStyles });
  };

  const handleDownload = () => {
    // TODO: Generate and download HTML
    console.log('Downloading page...');
  };

  const handlePreview = () => {
    // TODO: Open preview modal
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
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="content">תוכן</TabsTrigger>
                  <TabsTrigger value="colors">צבעים</TabsTrigger>
                  <TabsTrigger value="layout">פריסה</TabsTrigger>
                  <TabsTrigger value="style">סגנון</TabsTrigger>
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
                        </>
                      )}

                      {activeSection === 'features' && editableContent?.features?.items && (
                        <div className="space-y-3">
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

                      {(activeSection === 'services' || activeSection === 'testimonials' || activeSection === 'faq' || activeSection === 'pricing' || activeSection === 'contact') && (
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

                  {/* Section Background */}
                  {activeSection && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm">רקע הסקשן</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-2">
                          {backgroundOptions.map((bg) => (
                            <div
                              key={bg.id}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                sectionStyles[activeSection]?.background?.includes(bg.id) 
                                  ? 'ring-2 ring-primary' 
                                  : ''
                              }`}
                              onClick={() => updateSectionStyle(activeSection, 'background', bg.id)}
                            >
                              <div className={`h-8 rounded ${bg.preview} mb-2`}></div>
                              <div className="text-xs text-center">{bg.name}</div>
                            </div>
                          ))}
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
                              <SelectItem value="right">ימין</SelectItem>
                              <SelectItem value="left">שמאל</SelectItem>
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
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {buttonStyles.map((style) => (
                          <div
                            key={style.id}
                            className={`p-3 border rounded-lg cursor-pointer transition-all ${
                              pageStyles.buttonStyle === style.id ? 'ring-2 ring-primary' : ''
                            }`}
                            onClick={() => updatePageStyle('buttonStyle', style.id)}
                          >
                            <div className={`h-8 bg-primary text-primary-foreground flex items-center justify-center text-xs ${style.class}`}>
                              כפתור
                            </div>
                            <div className="text-xs text-center mt-2">{style.name}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">פונט</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                          <SelectItem value="bold">נועז</SelectItem>
                        </SelectContent>
                      </Select>
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
                    <div className="space-y-6 text-white">
                      <Badge className="bg-white/20 text-white">
                        {editableContent?.hero?.badge || '✨ חדשנות ומצוינות'}
                      </Badge>
                      <h1 className="text-5xl font-bold">
                        {editableContent?.hero?.title || `${formData.businessName} - המובילים בתחום`}
                      </h1>
                      <p className="text-xl text-white/90 max-w-2xl">
                        {editableContent?.hero?.subtitle || 'פתרונות מקצועיים ואמינים ברמה הגבוהה ביותר'}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button 
                          size="lg"
                          className={`${pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                                     pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                                     pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'}`}
                        >
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
                      <h2 className="text-4xl font-bold mb-4">
                        {editableContent?.features?.title || 'התכונות שלנו'}
                      </h2>
                      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {editableContent?.features?.subtitle || 'גלה את היתרונות הייחודיים שלנו'}
                      </p>
                    </div>
                    
                    <div className={`grid gap-8 ${
                      sectionStyles.features?.columns === 4 ? 'grid-cols-4' :
                      sectionStyles.features?.columns === 3 ? 'grid-cols-3' : 'grid-cols-2'
                    }`}>
                      {editableContent?.features?.items?.map((feature, index) => {
                        const IconComponent = iconOptions.find(icon => icon.id === feature.icon)?.icon || Star;
                        return (
                          <Card key={index} className="text-center p-6">
                            <CardContent className="pt-4">
                              <div className="mb-4 flex justify-center">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                  <IconComponent className="h-8 w-8 text-primary" />
                                </div>
                              </div>
                              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                              <p className="text-muted-foreground">{feature.description}</p>
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
                          <h2 className="text-4xl font-bold mb-6">
                            {editableContent?.about?.title || 'אודותינו'}
                          </h2>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {editableContent?.about?.description || 'אנחנו חברה מובילה בתחום עם ניסיון של שנים רבות. אנו מתמחים במתן פתרונות מקצועיים ואמינים ללקוחותינו.'}
                          </p>
                          <Button 
                            className={`mt-6 ${
                              pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                              pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                              pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'
                            }`}
                          >
                            קרא עוד
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
                      {[1,2,3,4].map((service) => (
                        <Card key={service} className="p-6">
                          <CardContent className="pt-4">
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                <Settings className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-2">שירות {service}</h3>
                                <p className="text-muted-foreground">תיאור מפורט של השירות ויתרונותיו עבור הלקוח.</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'testimonials' && (
                  <div 
                    className="p-12"
                    style={{ background: sectionStyles.testimonials?.background }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold mb-4">מה הלקוחות אומרים</h2>
                      <p className="text-xl text-muted-foreground">המלצות מלקוחות מרוצים</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-8">
                      {[1,2,3].map((testimonial) => (
                        <Card key={testimonial} className="p-6">
                          <CardContent className="pt-4">
                            <div className="text-center">
                              <div className="mb-4">
                                <div className="w-16 h-16 bg-muted rounded-full mx-auto flex items-center justify-center">
                                  <Users className="h-8 w-8 text-muted-foreground" />
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-4">"שירות מעולה ומקצועי. ממליץ בחום!"</p>
                              <div>
                                <p className="font-semibold">לקוח {testimonial}</p>
                                <p className="text-sm text-muted-foreground">חברה {testimonial}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'faq' && (
                  <div 
                    className="p-12"
                    style={{ background: sectionStyles.faq?.background }}
                  >
                    <div className="max-w-3xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">שאלות נפוצות</h2>
                        <p className="text-xl text-muted-foreground">תשובות לשאלות הנפוצות ביותר</p>
                      </div>
                      
                      <div className="space-y-4">
                        {[1,2,3,4].map((faq) => (
                          <Card key={faq}>
                            <CardContent className="p-6">
                              <h3 className="font-semibold text-lg mb-2">שאלה נפוצה {faq}?</h3>
                              <p className="text-muted-foreground">תשובה מפורטת לשאלה הנפוצה עם כל המידע הרלוונטי.</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'pricing' && (
                  <div 
                    className="p-12"
                    style={{ background: sectionStyles.pricing?.background }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold mb-4">מחירים</h2>
                      <p className="text-xl text-muted-foreground">בחר את החבילה המתאימה לך</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                      {['בסיסי', 'מקצועי', 'עסקי'].map((plan, index) => (
                        <Card key={plan} className={`p-6 relative ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                          {index === 1 && (
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              הכי פופולרי
                            </Badge>
                          )}
                          <CardContent className="pt-4 text-center">
                            <h3 className="font-semibold text-xl mb-4">{plan}</h3>
                            <div className="mb-6">
                              <span className="text-4xl font-bold">₪{(index + 1) * 99}</span>
                              <span className="text-muted-foreground">/חודש</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                              {[1,2,3].map((feature) => (
                                <li key={feature} className="flex items-center justify-center">
                                  <Star className="h-4 w-4 text-primary mr-2" />
                                  תכונה {feature}
                                </li>
                              ))}
                            </ul>
                            <Button 
                              className={`w-full ${
                                pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                                pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                                pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'
                              }`}
                              variant={index === 1 ? "default" : "outline"}
                            >
                              בחר חבילה
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'contact' && (
                  <div 
                    className="p-12"
                    style={{ background: sectionStyles.contact?.background }}
                  >
                    <div className="max-w-4xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-white">צור קשר</h2>
                        <p className="text-xl text-white/90">נשמח לשמוע ממך ולסייע בכל שאלה</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4 text-white">
                            <div className="p-3 bg-white/20 rounded-lg">
                              <MousePointer className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold">כתובת</h3>
                              <p className="text-white/80">רחוב הדוגמה 123, תל אביב</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-white">
                            <div className="p-3 bg-white/20 rounded-lg">
                              <Circle className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold">טלפון</h3>
                              <p className="text-white/80">03-1234567</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-white">
                            <div className="p-3 bg-white/20 rounded-lg">
                              <Square className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="font-semibold">אימייל</h3>
                              <p className="text-white/80">info@example.com</p>
                            </div>
                          </div>
                        </div>
                        
                        <Card className="p-6">
                          <CardContent className="pt-4 space-y-4">
                            <Input placeholder="שם מלא" />
                            <Input placeholder="אימייל" />
                            <Input placeholder="נושא" />
                            <Textarea placeholder="הודעה" rows={4} />
                            <Button 
                              className={`w-full ${
                                pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                                pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                                pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'
                              }`}
                            >
                              שלח הודעה
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
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