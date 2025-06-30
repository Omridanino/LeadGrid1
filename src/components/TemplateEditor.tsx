import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorPicker } from "@/components/ui/color-picker";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Palette, 
  Type, 
  Image, 
  Mouse, 
  Settings,
  Eye,
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
  Building
} from 'lucide-react';
import { TemplateData } from '@/types/template';

interface TemplateEditorProps {
  template: TemplateData;
  onTemplateChange: (template: TemplateData) => void;
  onClose: () => void;
}

const TemplateEditor = ({ template, onTemplateChange, onClose }: TemplateEditorProps) => {
  const [editedTemplate, setEditedTemplate] = useState<TemplateData>(template);
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    onTemplateChange(editedTemplate);
  }, [editedTemplate, onTemplateChange]);

  const updateSection = (section: keyof TemplateData, updates: any) => {
    setEditedTemplate(prev => {
      const currentSection = prev[section];
      if (typeof currentSection === 'object' && currentSection !== null) {
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

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex" dir="rtl">
      {/* Left Sidebar - Editor */}
      <div className="w-80 bg-gray-900 border-r border-gray-800 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800">
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

        {/* Tabs Navigation */}
        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="p-2 border-b border-gray-800">
              <ScrollArea className="w-full">
                <div className="flex flex-wrap gap-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <TabsTrigger
                        key={section.id}
                        value={section.id}
                        className="flex items-center gap-2 px-3 py-2 text-xs data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-400"
                      >
                        <Icon className="w-3 h-3" />
                        {section.name}
                      </TabsTrigger>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>

            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-4">
                  {/* Hero Section */}
                  <TabsContent value="hero" className="space-y-4 mt-0">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.hero.badge || ''}
                          onChange={(e) => updateSection('hero', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג בסקשן הירו..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת ראשית</Label>
                        <Input
                          value={editedTemplate.hero.title}
                          onChange={(e) => updateSection('hero', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת ראשית..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תת כותרת</Label>
                        <Input
                          value={editedTemplate.hero.subtitle}
                          onChange={(e) => updateSection('hero', { subtitle: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תת כותרת..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תיאור</Label>
                        <Textarea
                          value={editedTemplate.hero.description}
                          onChange={(e) => updateSection('hero', { description: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          rows={3}
                          placeholder="תיאור מפורט..."
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 1</Label>
                          <Input
                            value={editedTemplate.hero.button1Text}
                            onChange={(e) => updateSection('hero', { button1Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 2</Label>
                          <Input
                            value={editedTemplate.hero.button2Text}
                            onChange={(e) => updateSection('hero', { button2Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תמונה</Label>
                        <Input
                          value={editedTemplate.hero.image || ''}
                          onChange={(e) => updateSection('hero', { image: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="URL או ID של תמונה..."
                        />
                      </div>
                    </div>
                  </TabsContent>

                  {/* Emotional Section */}
                  <TabsContent value="emotional" className="space-y-4 mt-0">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.emotional.badge || ''}
                          onChange={(e) => updateSection('emotional', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.emotional.title}
                          onChange={(e) => updateSection('emotional', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת רגשית..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תוכן</Label>
                        <Textarea
                          value={editedTemplate.emotional.description}
                          onChange={(e) => updateSection('emotional', { description: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          rows={4}
                          placeholder="תוכן רגשי..."
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 1</Label>
                          <Input
                            value={editedTemplate.emotional.button1Text}
                            onChange={(e) => updateSection('emotional', { button1Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 2</Label>
                          <Input
                            value={editedTemplate.emotional.button2Text}
                            onChange={(e) => updateSection('emotional', { button2Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Features Section */}
                  <TabsContent value="features" className="space-y-4 mt-0">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.features.badge || ''}
                          onChange={(e) => updateSection('features', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.features.title}
                          onChange={(e) => updateSection('features', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת התכונות..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תת כותרת</Label>
                        <Input
                          value={editedTemplate.features.subtitle || ''}
                          onChange={(e) => updateSection('features', { subtitle: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תת כותרת..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תכונות</Label>
                        <div className="space-y-3">
                          {editedTemplate.features.items.map((item, index) => (
                            <Card key={index} className="bg-gray-800 border-gray-700">
                              <CardContent className="p-3 space-y-2">
                                <div className="flex items-center gap-2">
                                  <Input
                                    value={item.icon}
                                    onChange={(e) => {
                                      const newItems = [...editedTemplate.features.items];
                                      newItems[index] = { ...item, icon: e.target.value };
                                      updateSection('features', { items: newItems });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white w-16 text-center"
                                    placeholder="🎯"
                                  />
                                  <Input
                                    value={item.title}
                                    onChange={(e) => {
                                      const newItems = [...editedTemplate.features.items];
                                      newItems[index] = { ...item, title: e.target.value };
                                      updateSection('features', { items: newItems });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                                    placeholder="שם התכונה"
                                  />
                                </div>
                                <Input
                                  value={item.description}
                                  onChange={(e) => {
                                    const newItems = [...editedTemplate.features.items];
                                    newItems[index] = { ...item, description: e.target.value };
                                    updateSection('features', { items: newItems });
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white text-right"
                                  placeholder="תיאור התכונה"
                                />
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Styles Section */}
                  <TabsContent value="styles" className="space-y-4 mt-0">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">צבע ראשי</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            value={editedTemplate.styles.primaryColor}
                            onChange={(e) => updateStyles({ primaryColor: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
                            placeholder="#3b82f6"
                          />
                          <div 
                            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
                            style={{ backgroundColor: editedTemplate.styles.primaryColor }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">צבע משני</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            value={editedTemplate.styles.secondaryColor}
                            onChange={(e) => updateStyles({ secondaryColor: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
                            placeholder="#8b5cf6"
                          />
                          <div 
                            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
                            style={{ backgroundColor: editedTemplate.styles.secondaryColor }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">צבע הדגשה</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            value={editedTemplate.styles.accentColor}
                            onChange={(e) => updateStyles({ accentColor: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
                            placeholder="#06b6d4"
                          />
                          <div 
                            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
                            style={{ backgroundColor: editedTemplate.styles.accentColor }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">צבע רקע</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            value={editedTemplate.styles.backgroundColor}
                            onChange={(e) => updateStyles({ backgroundColor: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
                            placeholder="#ffffff"
                          />
                          <div 
                            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
                            style={{ backgroundColor: editedTemplate.styles.backgroundColor }}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">צבע טקסט</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            value={editedTemplate.styles.textColor}
                            onChange={(e) => updateStyles({ textColor: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right flex-1"
                            placeholder="#333333"
                          />
                          <div 
                            className="w-8 h-8 rounded border border-gray-600 cursor-pointer"
                            style={{ backgroundColor: editedTemplate.styles.textColor }}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Add more sections as needed */}
                </div>
              </ScrollArea>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Right Side - Preview */}
      <div className="flex-1 bg-white overflow-hidden">
        <div className="h-full">
          <div className="bg-gray-100 p-2 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">תצוגה מקדימה</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {editedTemplate.category}
            </Badge>
          </div>
          
          <div className="h-full overflow-y-auto bg-white">
            <TemplatePreview template={editedTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Template Preview Component
const TemplatePreview = ({ template }: { template: TemplateData }) => {
  return (
    <div className="min-h-full" style={{ backgroundColor: template.styles.backgroundColor, color: template.styles.textColor }}>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ background: template.styles.heroBackground }}>
        <div className="max-w-6xl mx-auto text-center">
          {template.hero.badge && (
            <Badge className="mb-4" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.hero.badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: template.styles.textColor }}>
            {template.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 opacity-80">
            {template.hero.subtitle}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            {template.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: template.styles.primaryColor }}>
              {template.hero.button1Text}
            </Button>
            <Button size="lg" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
              {template.hero.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-16 px-4" style={{ background: template.styles.emotionalBackground }}>
        <div className="max-w-4xl mx-auto text-center">
          {template.emotional.badge && (
            <Badge className="mb-4" variant="outline">
              {template.emotional.badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {template.emotional.title}
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            {template.emotional.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" style={{ background: template.styles.featuresBackground }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.features.badge && (
              <Badge className="mb-4" variant="outline">
                {template.features.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {template.features.title}
            </h2>
            {template.features.subtitle && (
              <p className="text-xl opacity-80">
                {template.features.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {template.features.items.map((item, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4" style={{ background: template.styles.testimonialsBackground }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.testimonials.badge && (
              <Badge className="mb-4" variant="outline">
                {template.testimonials.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold">
              {template.testimonials.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {template.testimonials.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4" style={{ background: template.styles.aboutBackground }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.about.badge && (
              <Badge className="mb-4" variant="outline">
                {template.about.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {template.about.title}
            </h2>
            <p className="text-lg max-w-4xl mx-auto opacity-90">
              {template.about.description}
            </p>
          </div>
          
          {template.about.stats && (
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {template.about.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2" style={{ color: template.styles.primaryColor }}>
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="py-8 px-4 text-center" style={{ background: template.styles.footerBackground, color: '#ffffff' }}>
        <p>&copy; 2024 {template.footer.companyName}. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
};

export default TemplateEditor;
