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
  MousePointer
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
    testimonials: {
      background: '#ffffff',
      layout: 'carousel',
      style: 'cards'
    },
    pricing: {
      background: '#f8fafc',
      layout: 'grid',
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

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: Sparkles },
    { id: 'features', name: 'תכונות', icon: Layout },
    { id: 'testimonials', name: 'המלצות', icon: Type },
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
      <DialogContent className="max-w-7xl h-[95vh] p-0">
        <div className="flex h-full">
          {/* Left Sidebar - Controls */}
          <div className="w-80 border-r bg-muted/30 overflow-y-auto">
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

              <Tabs defaultValue="colors" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="colors">צבעים</TabsTrigger>
                  <TabsTrigger value="layout">פריסה</TabsTrigger>
                  <TabsTrigger value="style">סגנון</TabsTrigger>
                </TabsList>

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
                        {generatedContent?.hero?.badge || '✨ חדשנות ומצוינות'}
                      </Badge>
                      <h1 className="text-5xl font-bold">
                        {generatedContent?.hero?.title || `${formData.businessName} - המובילים בתחום`}
                      </h1>
                      <p className="text-xl text-white/90 max-w-2xl">
                        {generatedContent?.hero?.subtitle || 'פתרונות מקצועיים ואמינים ברמה הגבוהה ביותר'}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button 
                          size="lg"
                          className={`${pageStyles.buttonStyle === 'pill' ? 'rounded-full' : 
                                     pageStyles.buttonStyle === 'square' ? 'rounded-none' :
                                     pageStyles.buttonStyle === 'modern' ? 'rounded-xl' : 'rounded-lg'}`}
                        >
                          {generatedContent?.hero?.button1Text || 'התחל עכשיו'}
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
                          {generatedContent?.hero?.button2Text || 'למד עוד'}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'features' && (
                  <div 
                    className="py-20 px-12"
                    style={{ background: sectionStyles.features?.background }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold mb-4">מה מייחד אותנו</h2>
                      <p className="text-xl text-muted-foreground">הסיבות שלקוחות בוחרים בנו</p>
                    </div>
                    <div className={`grid gap-8 ${
                      sectionStyles.features?.columns === 2 ? 'grid-cols-2' :
                      sectionStyles.features?.columns === 4 ? 'grid-cols-4' : 'grid-cols-3'
                    }`}>
                      {[1,2,3,4,5,6].slice(0, sectionStyles.features?.columns || 3).map((i) => (
                        <Card key={i} className="text-center p-6">
                          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">תכונה {i}</h3>
                          <p className="text-muted-foreground">תיאור מפורט של התכונה המיוחדת הזו</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add more sections as needed */}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisualLandingPageEditor;