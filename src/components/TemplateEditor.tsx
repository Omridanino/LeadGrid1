
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Palette, 
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
  Plus,
  Trash2
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

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex h-screen" dir="rtl">
      {/* Left Sidebar - Editor */}
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

        {/* Tabs Navigation and Content */}
        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            {/* Tabs List */}
            <div className="p-2 border-b border-gray-800 flex-shrink-0">
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

            {/* Tabs Content */}
            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-4">
                  {/* Hero Section */}
                  {activeTab === 'hero' && (
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
                    </div>
                  )}

                  {/* Emotional Section */}
                  {activeTab === 'emotional' && (
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
                  )}

                  {/* Features Section */}
                  {activeTab === 'features' && (
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
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      const newItems = editedTemplate.features.items.filter((_, i) => i !== index);
                                      updateSection('features', { items: newItems });
                                    }}
                                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
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
                          <Button
                            onClick={() => {
                              const newItems = [...editedTemplate.features.items, {
                                title: 'תכונה חדשה',
                                description: 'תיאור התכונה',
                                icon: '⭐'
                              }];
                              updateSection('features', { items: newItems });
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4 ml-1" />
                            הוסף תכונה
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Testimonials Section */}
                  {activeTab === 'testimonials' && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.testimonials.badge || ''}
                          onChange={(e) => updateSection('testimonials', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.testimonials.title}
                          onChange={(e) => updateSection('testimonials', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת עדויות..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">עדויות</Label>
                        <div className="space-y-3">
                          {editedTemplate.testimonials.testimonials.map((testimonial, index) => (
                            <Card key={index} className="bg-gray-800 border-gray-700">
                              <CardContent className="p-3 space-y-2">
                                <div className="flex items-center gap-2">
                                  <Input
                                    value={testimonial.name}
                                    onChange={(e) => {
                                      const newTestimonials = [...editedTemplate.testimonials.testimonials];
                                      newTestimonials[index] = { ...testimonial, name: e.target.value };
                                      updateSection('testimonials', { testimonials: newTestimonials });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                                    placeholder="שם הלקוח"
                                  />
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      const newTestimonials = editedTemplate.testimonials.testimonials.filter((_, i) => i !== index);
                                      updateSection('testimonials', { testimonials: newTestimonials });
                                    }}
                                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                                <Input
                                  value={testimonial.role}
                                  onChange={(e) => {
                                    const newTestimonials = [...editedTemplate.testimonials.testimonials];
                                    newTestimonials[index] = { ...testimonial, role: e.target.value };
                                    updateSection('testimonials', { testimonials: newTestimonials });
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white text-right"
                                  placeholder="תפקיד"
                                />
                                <Textarea
                                  value={testimonial.content}
                                  onChange={(e) => {
                                    const newTestimonials = [...editedTemplate.testimonials.testimonials];
                                    newTestimonials[index] = { ...testimonial, content: e.target.value };
                                    updateSection('testimonials', { testimonials: newTestimonials });
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white text-right"
                                  rows={3}
                                  placeholder="תוכן העדות"
                                />
                                <Input
                                  type="number"
                                  min="1"
                                  max="5"
                                  value={testimonial.rating}
                                  onChange={(e) => {
                                    const newTestimonials = [...editedTemplate.testimonials.testimonials];
                                    newTestimonials[index] = { ...testimonial, rating: parseInt(e.target.value) || 5 };
                                    updateSection('testimonials', { testimonials: newTestimonials });
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white w-20"
                                  placeholder="דירוג"
                                />
                              </CardContent>
                            </Card>
                          ))}
                          <Button
                            onClick={() => {
                              const newTestimonials = [...editedTemplate.testimonials.testimonials, {
                                name: 'לקוח חדש',
                                role: 'תפקיד',
                                content: 'עדות מעולה על השירות',
                                rating: 5,
                                image: ''
                              }];
                              updateSection('testimonials', { testimonials: newTestimonials });
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4 ml-1" />
                            הוסף עדות
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* About Section */}
                  {activeTab === 'about' && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.about.badge || ''}
                          onChange={(e) => updateSection('about', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.about.title}
                          onChange={(e) => updateSection('about', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת אודות..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תיאור</Label>
                        <Textarea
                          value={editedTemplate.about.description}
                          onChange={(e) => updateSection('about', { description: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          rows={4}
                          placeholder="תיאור מפורט על החברה..."
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 1</Label>
                          <Input
                            value={editedTemplate.about.button1Text}
                            onChange={(e) => updateSection('about', { button1Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 2</Label>
                          <Input
                            value={editedTemplate.about.button2Text}
                            onChange={(e) => updateSection('about', { button2Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div>
                        <Label className="text-white text-sm font-medium">סטטיסטיקות</Label>
                        <div className="space-y-3">
                          {editedTemplate.about.stats?.map((stat, index) => (
                            <Card key={index} className="bg-gray-800 border-gray-700">
                              <CardContent className="p-3 space-y-2">
                                <div className="flex items-center gap-2">
                                  <Input
                                    value={stat.number}
                                    onChange={(e) => {
                                      const newStats = [...(editedTemplate.about.stats || [])];
                                      newStats[index] = { ...stat, number: e.target.value };
                                      updateSection('about', { stats: newStats });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-center w-24"
                                    placeholder="100+"
                                  />
                                  <Input
                                    value={stat.label}
                                    onChange={(e) => {
                                      const newStats = [...(editedTemplate.about.stats || [])];
                                      newStats[index] = { ...stat, label: e.target.value };
                                      updateSection('about', { stats: newStats });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                                    placeholder="לקוחות מרוצים"
                                  />
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      const newStats = editedTemplate.about.stats?.filter((_, i) => i !== index) || [];
                                      updateSection('about', { stats: newStats });
                                    }}
                                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          )) || []}
                          <Button
                            onClick={() => {
                              const newStats = [...(editedTemplate.about.stats || []), {
                                number: '100+',
                                label: 'לקוחות מרוצים'
                              }];
                              updateSection('about', { stats: newStats });
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4 ml-1" />
                            הוסף סטטיסטיקה
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pricing Section */}
                  {activeTab === 'pricing' && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.pricing.badge || ''}
                          onChange={(e) => updateSection('pricing', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.pricing.title}
                          onChange={(e) => updateSection('pricing', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת מחירים..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תת כותרת</Label>
                        <Input
                          value={editedTemplate.pricing.subtitle || ''}
                          onChange={(e) => updateSection('pricing', { subtitle: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תת כותרת..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">חבילות מחירים</Label>
                        <div className="space-y-3">
                          {editedTemplate.pricing.plans.map((plan, index) => (
                            <Card key={index} className="bg-gray-800 border-gray-700">
                              <CardContent className="p-3 space-y-2">
                                <div className="flex items-center gap-2">
                                  <Input
                                    value={plan.name}
                                    onChange={(e) => {
                                      const newPlans = [...editedTemplate.pricing.plans];
                                      newPlans[index] = { ...plan, name: e.target.value };
                                      updateSection('pricing', { plans: newPlans });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                                    placeholder="שם החבילה"
                                  />
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      const newPlans = editedTemplate.pricing.plans.filter((_, i) => i !== index);
                                      updateSection('pricing', { plans: newPlans });
                                    }}
                                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <Input
                                    value={plan.price}
                                    onChange={(e) => {
                                      const newPlans = [...editedTemplate.pricing.plans];
                                      newPlans[index] = { ...plan, price: e.target.value };
                                      updateSection('pricing', { plans: newPlans });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-center"
                                    placeholder="₪299"
                                  />
                                  <Input
                                    value={plan.period}
                                    onChange={(e) => {
                                      const newPlans = [...editedTemplate.pricing.plans];
                                      newPlans[index] = { ...plan, period: e.target.value };
                                      updateSection('pricing', { plans: newPlans });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-center"
                                    placeholder="לחודש"
                                  />
                                </div>
                                <Input
                                  value={plan.buttonText}
                                  onChange={(e) => {
                                    const newPlans = [...editedTemplate.pricing.plans];
                                    newPlans[index] = { ...plan, buttonText: e.target.value };
                                    updateSection('pricing', { plans: newPlans });
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white text-right"
                                  placeholder="טקסט כפתור"
                                />
                                <Textarea
                                  value={plan.features.join('\n')}
                                  onChange={(e) => {
                                    const newPlans = [...editedTemplate.pricing.plans];
                                    newPlans[index] = { ...plan, features: e.target.value.split('\n').filter(f => f.trim()) };
                                    updateSection('pricing', { plans: newPlans });
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white text-right"
                                  rows={3}
                                  placeholder="תכונה 1&#10;תכונה 2&#10;תכונה 3"
                                />
                              </CardContent>
                            </Card>
                          ))}
                          <Button
                            onClick={() => {
                              const newPlans = [...editedTemplate.pricing.plans, {
                                name: 'חבילה חדשה',
                                price: '₪199',
                                period: 'לחודש',
                                features: ['תכונה 1', 'תכונה 2'],
                                recommended: false,
                                buttonText: 'בחר חבילה'
                              }];
                              updateSection('pricing', { plans: newPlans });
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4 ml-1" />
                            הוסף חבילה
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FAQ Section */}
                  {activeTab === 'faq' && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.faq.badge || ''}
                          onChange={(e) => updateSection('faq', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.faq.title}
                          onChange={(e) => updateSection('faq', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת שאלות..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">שאלות ותשובות</Label>
                        <div className="space-y-3">
                          {editedTemplate.faq.questions.map((qa, index) => (
                            <Card key={index} className="bg-gray-800 border-gray-700">
                              <CardContent className="p-3 space-y-2">
                                <div className="flex items-center gap-2">
                                  <Input
                                    value={qa.question}
                                    onChange={(e) => {
                                      const newQuestions = [...editedTemplate.faq.questions];
                                      newQuestions[index] = { ...qa, question: e.target.value };
                                      updateSection('faq', { questions: newQuestions });
                                    }}
                                    className="bg-gray-700 border-gray-600 text-white text-right flex-1"
                                    placeholder="שאלה"
                                  />
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      const newQuestions = editedTemplate.faq.questions.filter((_, i) => i !== index);
                                      updateSection('faq', { questions: newQuestions });
                                    }}
                                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                                <Textarea
                                  value={qa.answer}
                                  onChange={(e) => {
                                    const newQuestions = [...editedTemplate.faq.questions];
                                    newQuestions[index] = { ...qa, answer: e.target.value };
                                    updateSection('faq', { questions: newQuestions });
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white text-right"
                                  rows={3}
                                  placeholder="תשובה"
                                />
                              </CardContent>
                            </Card>
                          ))}
                          <Button
                            onClick={() => {
                              const newQuestions = [...editedTemplate.faq.questions, {
                                question: 'שאלה חדשה?',
                                answer: 'תשובה מפורטת...'
                              }];
                              updateSection('faq', { questions: newQuestions });
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4 ml-1" />
                            הוסף שאלה
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Final CTA Section */}
                  {activeTab === 'finalCta' && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">תג</Label>
                        <Input
                          value={editedTemplate.finalCta.badge || ''}
                          onChange={(e) => updateSection('finalCta', { badge: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תג..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.finalCta.title}
                          onChange={(e) => updateSection('finalCta', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת קריאה לפעולה..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תיאור</Label>
                        <Textarea
                          value={editedTemplate.finalCta.description}
                          onChange={(e) => updateSection('finalCta', { description: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          rows={3}
                          placeholder="תיאור קריאה לפעולה..."
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 1</Label>
                          <Input
                            value={editedTemplate.finalCta.button1Text}
                            onChange={(e) => updateSection('finalCta', { button1Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                        <div>
                          <Label className="text-white text-sm font-medium">כפתור 2</Label>
                          <Input
                            value={editedTemplate.finalCta.button2Text}
                            onChange={(e) => updateSection('finalCta', { button2Text: e.target.value })}
                            className="bg-gray-800 border-gray-700 text-white text-right"
                            placeholder="טקסט כפתור..."
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contact Section */}
                  {activeTab === 'contact' && (
                    <div className="space-y-4">
                      <div>
                        <Label className="text-white text-sm font-medium">כותרת</Label>
                        <Input
                          value={editedTemplate.contact.title}
                          onChange={(e) => updateSection('contact', { title: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="כותרת יצירת קשר..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">תת כותרת</Label>
                        <Input
                          value={editedTemplate.contact.subtitle || ''}
                          onChange={(e) => updateSection('contact', { subtitle: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="תת כותרת..."
                        />
                      </div>
                      
                      <div>
                        <Label className="text-white text-sm font-medium">טקסט כפתור</Label>
                        <Input
                          value={editedTemplate.contact.buttonText}
                          onChange={(e) => updateSection('contact', { buttonText: e.target.value })}
                          className="bg-gray-800 border-gray-700 text-white text-right"
                          placeholder="שלח הודעה"
                        />
                      </div>
                    </div>
                  )}

                  {/* Styles Section */}
                  {activeTab === 'styles' && (
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
                  )}
                </div>
              </ScrollArea>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Right Side - Preview */}
      <div className="flex-1 bg-white overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="bg-gray-100 p-2 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">תצוגה מקדימה</span>
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

// Template Preview Component with smooth transitions
const TemplatePreview = ({ template }: { template: TemplateData }) => {
  return (
    <div className="min-h-full" style={{ backgroundColor: template.styles.backgroundColor, color: template.styles.textColor }}>
      {/* Hero Section */}
      <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${template.styles.primaryColor}dd, ${template.styles.secondaryColor}dd)` }}>
        <div className="max-w-6xl mx-auto text-center">
          {template.hero.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {template.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-white/90">
            {template.hero.subtitle}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/80">
            {template.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.hero.button1Text}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              {template.hero.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-4xl mx-auto text-center">
          {template.emotional.badge && (
            <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
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
      <section className="py-16 px-4" style={{ backgroundColor: `${template.styles.primaryColor}05` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.features.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
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
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.testimonials.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
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
      <section className="py-16 px-4" style={{ backgroundColor: `${template.styles.secondaryColor}05` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.about.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.secondaryColor, color: template.styles.secondaryColor }}>
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
          
          {template.about.stats && template.about.stats.length > 0 && (
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

      {/* Pricing Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {template.pricing.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.pricing.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {template.pricing.title}
            </h2>
            {template.pricing.subtitle && (
              <p className="text-xl opacity-80">
                {template.pricing.subtitle}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {template.pricing.plans.map((plan, index) => (
              <Card key={index} className={`p-6 text-center ${plan.recommended ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6 text-right">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" style={{ backgroundColor: template.styles.primaryColor }}>
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4" style={{ backgroundColor: `${template.styles.primaryColor}05` }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {template.faq.badge && (
              <Badge className="mb-4" variant="outline" style={{ borderColor: template.styles.primaryColor, color: template.styles.primaryColor }}>
                {template.faq.badge}
              </Badge>
            )}
            <h2 className="text-3xl md:text-4xl font-bold">
              {template.faq.title}
            </h2>
          </div>
          
          <div className="space-y-4">
            {template.faq.questions.map((qa, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-2 text-right">{qa.question}</h3>
                <p className="opacity-80 text-right">{qa.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4" style={{ background: `linear-gradient(135deg, ${template.styles.primaryColor}dd, ${template.styles.accentColor}dd)` }}>
        <div className="max-w-4xl mx-auto text-center">
          {template.finalCta.badge && (
            <Badge className="mb-4 text-white" style={{ backgroundColor: template.styles.secondaryColor }}>
              {template.finalCta.badge}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {template.finalCta.title}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {template.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white" style={{ backgroundColor: template.styles.accentColor }}>
              {template.finalCta.button1Text}
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              {template.finalCta.button2Text}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4" style={{ backgroundColor: template.styles.backgroundColor }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {template.contact.title}
          </h2>
          {template.contact.subtitle && (
            <p className="text-xl mb-8 opacity-80">
              {template.contact.subtitle}
            </p>
          )}
          <Card className="p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <Input placeholder="שם מלא" className="text-right" />
              <Input placeholder="אימייל" className="text-right" />
              <Input placeholder="טלפון" className="text-right" />
              <Textarea placeholder="הודעה" rows={4} className="text-right" />
              <Button className="w-full" style={{ backgroundColor: template.styles.primaryColor }}>
                {template.contact.buttonText}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="py-8 px-4 text-center" style={{ backgroundColor: template.styles.primaryColor, color: '#ffffff' }}>
        <p>&copy; 2024 {template.footer.companyName}. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
};

export default TemplateEditor;
