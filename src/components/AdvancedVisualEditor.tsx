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
import { ColorPicker } from '@/components/ui/color-picker';
import { Plus, Trash2, Edit3, Star, Heart, Zap, Shield, Globe, Users, Trophy, Target, Sparkles, Settings, Palette } from 'lucide-react';
import LandingPagePreview from './LandingPagePreview';
import React from 'react';

interface AdvancedVisualEditorProps {
  isOpen: boolean;
  onClose: () => void;
  generatedContent: any;
  formData: any;
  onContentUpdate?: (content: any) => void;
  onColorUpdate?: (colors: any) => void;
  currentColors?: any;
}

const AdvancedVisualEditor = ({ 
  isOpen, 
  onClose, 
  generatedContent, 
  formData,
  onContentUpdate,
  onColorUpdate,
  currentColors
}: AdvancedVisualEditorProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [editableContent, setEditableContent] = useState<any>({});
  const [activeTab, setActiveTab] = useState('content');
  const [colors, setColors] = useState(currentColors || {
    primary: '#3b82f6',
    secondary: '#6b7280',
    accent: '#f59e0b',
    background: '#ffffff',
    heroBackground: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    text: '#1f2937',
    headlineColor: '#ffffff',
    subheadlineColor: '#ffffff',
    featuresColor: '#1f2937',
    featuresTextColor: '#6b7280',
    aboutColor: '#1f2937',
    aboutTextColor: '#6b7280',
    contactColor: '#ffffff',
    contactTextColor: '#ffffff'
  });
  
  // Initialize content
  useEffect(() => {
    if (generatedContent) {
      setEditableContent(generatedContent);
    }
  }, [generatedContent]);

  // Update colors when currentColors prop changes
  useEffect(() => {
    if (currentColors) {
      setColors(currentColors);
    }
  }, [currentColors]);

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
    { id: 'features', name: 'תכונות', icon: Star },
    { id: 'about', name: 'אודותינו', icon: Users },
    { id: 'services', name: 'שירותים', icon: Settings },
    { id: 'testimonials', name: 'המלצות', icon: Heart },
    { id: 'pricing', name: 'מחירים', icon: Trophy },
    { id: 'faq', name: 'שאלות נפוצות', icon: Target },
    { id: 'contact', name: 'יצירת קשר', icon: Globe }
  ];

  const updateContent = (section: string, field: string, value: any) => {
    console.log(`Updating ${section}.${field}:`, value);
    const newContent = {
      ...editableContent,
      [section]: { 
        ...editableContent[section], 
        [field]: value 
      }
    };
    setEditableContent(newContent);
    
    if (onContentUpdate) {
      onContentUpdate(newContent);
    }
    
    localStorage.setItem('editableContent', JSON.stringify(newContent));
  };

  const updateColor = (colorKey: string, value: string) => {
    const newColors = { ...colors, [colorKey]: value };
    setColors(newColors);
    
    if (onColorUpdate) {
      onColorUpdate(newColors);
    }
  };

  const addButton = (section: string) => {
    console.log(`Adding button to ${section}`);
    const currentSection = editableContent[section] || {};
    const buttonKeys = Object.keys(currentSection || {}).filter(key => key && key.includes && key.includes('button') && key.includes('Text'));
    const nextButtonIndex = buttonKeys.length + 1;
    
    updateContent(section, `button${nextButtonIndex}Text`, `כפתור ${nextButtonIndex}`);
    updateContent(section, `button${nextButtonIndex}Icon`, '');
  };

  const removeButton = (section: string, buttonIndex: number) => {
    const newContent = { ...editableContent };
    delete newContent[section][`button${buttonIndex}Text`];
    delete newContent[section][`button${buttonIndex}Icon`];
    setEditableContent(newContent);
    
    if (onContentUpdate) {
      onContentUpdate(newContent);
    }
  };

  const addItem = (section: string, itemType: string) => {
    console.log(`Adding ${itemType} to ${section}`);
    const currentSection = editableContent[section] || {};
    
    let newItem: any = {};
    let arrayField = '';
    
    switch (itemType) {
      case 'feature':
        arrayField = 'items';
        newItem = { title: 'תכונה חדשה', description: 'תיאור התכונה', icon: 'star' };
        break;
      case 'service':
        arrayField = 'items';
        newItem = { title: 'שירות חדש', description: 'תיאור השירות', price: '₪99', features: ['תכונה 1'] };
        break;
      case 'testimonial':
        arrayField = 'testimonials';
        newItem = { name: 'לקוח חדש', role: 'תפקיד', content: 'המלצה מצוינת', rating: 5 };
        break;
      case 'plan':
        arrayField = 'plans';
        newItem = { name: 'חבילה חדשה', price: '₪99', features: ['תכונה 1'], recommended: false };
        break;
      case 'question':
        arrayField = 'questions';
        newItem = { question: 'שאלה חדשה', answer: 'תשובה חדשה' };
        break;
      case 'stat':
        arrayField = 'stats';
        newItem = { number: '100+', label: 'סטטיסטיקה חדשה' };
        break;
    }
    
    const currentArray = currentSection[arrayField] || [];
    const newArray = [...currentArray, newItem];
    updateContent(section, arrayField, newArray);
  };

  const removeItem = (section: string, arrayField: string, index: number) => {
    const currentSection = editableContent[section] || {};
    const currentArray = currentSection[arrayField] || [];
    const newArray = currentArray.filter((_: any, i: number) => i !== index);
    updateContent(section, arrayField, newArray);
  };

  const updateItem = (section: string, arrayField: string, index: number, field: string, value: any) => {
    const currentSection = editableContent[section] || {};
    const currentArray = [...(currentSection[arrayField] || [])];
    if (currentArray[index]) {
      currentArray[index] = { ...currentArray[index], [field]: value };
      updateContent(section, arrayField, currentArray);
    }
  };

  const renderColorEditor = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">צבעים כלליים</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>צבע ראשי</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.primary}
                onChange={(value) => updateColor('primary', value)}
              />
              <Input
                value={colors.primary}
                onChange={(e) => updateColor('primary', e.target.value)}
                placeholder="#3b82f6"
              />
            </div>
          </div>
          
          <div>
            <Label>צבע משני</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.secondary}
                onChange={(value) => updateColor('secondary', value)}
              />
              <Input
                value={colors.secondary}
                onChange={(e) => updateColor('secondary', e.target.value)}
                placeholder="#6b7280"
              />
            </div>
          </div>
          
          <div>
            <Label>צבע הדגשה</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.accent}
                onChange={(value) => updateColor('accent', value)}
              />
              <Input
                value={colors.accent}
                onChange={(e) => updateColor('accent', e.target.value)}
                placeholder="#f59e0b"
              />
            </div>
          </div>
          
          <div>
            <Label>רקע כללי</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.background}
                onChange={(value) => updateColor('background', value)}
              />
              <Input
                value={colors.background}
                onChange={(e) => updateColor('background', e.target.value)}
                placeholder="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">צבעי Hero</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>כותרת ראשית</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.headlineColor}
                onChange={(value) => updateColor('headlineColor', value)}
              />
              <Input
                value={colors.headlineColor}
                onChange={(e) => updateColor('headlineColor', e.target.value)}
                placeholder="#ffffff"
              />
            </div>
          </div>
          
          <div>
            <Label>כותרת משנה</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.subheadlineColor}
                onChange={(value) => updateColor('subheadlineColor', value)}
              />
              <Input
                value={colors.subheadlineColor}
                onChange={(e) => updateColor('subheadlineColor', e.target.value)}
                placeholder="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">צבעי תכונות</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>כותרת סקשן</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.featuresColor}
                onChange={(value) => updateColor('featuresColor', value)}
              />
              <Input
                value={colors.featuresColor}
                onChange={(e) => updateColor('featuresColor', e.target.value)}
                placeholder="#1f2937"
              />
            </div>
          </div>
          
          <div>
            <Label>טקסט תכונות</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.featuresTextColor}
                onChange={(value) => updateColor('featuresTextColor', value)}
              />
              <Input
                value={colors.featuresTextColor}
                onChange={(e) => updateColor('featuresTextColor', e.target.value)}
                placeholder="#6b7280"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">צבעי אודות</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>כותרת אודות</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.aboutColor}
                onChange={(value) => updateColor('aboutColor', value)}
              />
              <Input
                value={colors.aboutColor}
                onChange={(e) => updateColor('aboutColor', e.target.value)}
                placeholder="#1f2937"
              />
            </div>
          </div>
          
          <div>
            <Label>טקסט אודות</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.aboutTextColor}
                onChange={(value) => updateColor('aboutTextColor', value)}
              />
              <Input
                value={colors.aboutTextColor}
                onChange={(e) => updateColor('aboutTextColor', e.target.value)}
                placeholder="#6b7280"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">צבעי יצירת קשר</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>כותרת יצירת קשר</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.contactColor}
                onChange={(value) => updateColor('contactColor', value)}
              />
              <Input
                value={colors.contactColor}
                onChange={(e) => updateColor('contactColor', e.target.value)}
                placeholder="#ffffff"
              />
            </div>
          </div>
          
          <div>
            <Label>טקסט יצירת קשר</Label>
            <div className="flex items-center gap-2">
              <ColorPicker
                color={colors.contactTextColor}
                onChange={(value) => updateColor('contactTextColor', value)}
              />
              <Input
                value={colors.contactTextColor}
                onChange={(e) => updateColor('contactTextColor', e.target.value)}
                placeholder="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">גרדיאנטים מוכנים</h3>
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            onClick={() => updateColor('heroBackground', 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)')}
            className="h-auto p-3"
          >
            <div className="w-full h-8 rounded bg-gradient-to-r from-blue-500 to-blue-700"></div>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => updateColor('heroBackground', 'linear-gradient(135deg, #8b5cf6 0%, #6b21a8 100%)')}
            className="h-auto p-3"
          >
            <div className="w-full h-8 rounded bg-gradient-to-r from-purple-500 to-purple-700"></div>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => updateColor('heroBackground', 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)')}
            className="h-auto p-3"
          >
            <div className="w-full h-8 rounded bg-gradient-to-r from-pink-500 to-pink-700"></div>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => updateColor('heroBackground', 'linear-gradient(135deg, #10b981 0%, #047857 100%)')}
            className="h-auto p-3"
          >
            <div className="w-full h-8 rounded bg-gradient-to-r from-green-500 to-green-700"></div>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderHeroEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת ראשית</Label>
        <Input
          value={editableContent?.hero?.title || ''}
          onChange={(e) => updateContent('hero', 'title', e.target.value)}
          placeholder="כותרת ראשית"
        />
      </div>
      
      <div>
        <Label>כותרת משנה</Label>
        <Input
          value={editableContent?.hero?.subtitle || ''}
          onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
          placeholder="כותרת משנה"
        />
      </div>
      
      <div>
        <Label>תיאור</Label>
        <Textarea
          value={editableContent?.hero?.description || ''}
          onChange={(e) => updateContent('hero', 'description', e.target.value)}
          placeholder="תיאור מפורט"
          rows={3}
        />
      </div>

      <div>
        <Label>תג</Label>
        <Input
          value={editableContent?.hero?.badge || ''}
          onChange={(e) => updateContent('hero', 'badge', e.target.value)}
          placeholder="חדש!"
        />
      </div>

      {/* Existing Buttons */}
      {editableContent?.hero && Object.keys(editableContent.hero || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('hero', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.hero[buttonKey] || ''}
                  onChange={(e) => updateContent('hero', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.hero[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('hero', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('hero')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  const renderFeaturesEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת הסקשן</Label>
        <Input
          value={editableContent?.features?.title || ''}
          onChange={(e) => updateContent('features', 'title', e.target.value)}
          placeholder="התכונות שלנו"
        />
      </div>
      
      <div>
        <Label>תת-כותרת</Label>
        <Input
          value={editableContent?.features?.subtitle || ''}
          onChange={(e) => updateContent('features', 'subtitle', e.target.value)}
          placeholder="גלה את היתרונות שלנו"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <Label>תכונות</Label>
          <Button onClick={() => addItem('features', 'feature')} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            הוסף תכונה
          </Button>
        </div>
        
        {(editableContent?.features?.items || []).map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <Label>תכונה {index + 1}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem('features', 'items', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Input
              value={item.title || ''}
              onChange={(e) => updateItem('features', 'items', index, 'title', e.target.value)}
              placeholder="כותרת התכונה"
            />
            
            <Textarea
              value={item.description || ''}
              onChange={(e) => updateItem('features', 'items', index, 'description', e.target.value)}
              placeholder="תיאור התכונה"
              rows={2}
            />
            
            <Select
              value={item.icon || 'star'}
              onValueChange={(value) => updateItem('features', 'items', index, 'icon', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="בחר אייקון" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg z-50">
                {iconOptions.map((icon) => (
                  <SelectItem key={icon.id} value={icon.id}>
                    <div className="flex items-center gap-2">
                      <icon.icon className="h-4 w-4" />
                      {icon.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {editableContent?.features && Object.keys(editableContent.features || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('features', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.features[buttonKey] || ''}
                  onChange={(e) => updateContent('features', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.features[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('features', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('features')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  const renderAboutEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת</Label>
        <Input
          value={editableContent?.about?.title || ''}
          onChange={(e) => updateContent('about', 'title', e.target.value)}
          placeholder="אודותינו"
        />
      </div>
      
      <div>
        <Label>תת-כותרת</Label>
        <Input
          value={editableContent?.about?.subtitle || ''}
          onChange={(e) => updateContent('about', 'subtitle', e.target.value)}
          placeholder="כותרת משנה"
        />
      </div>
      
      <div>
        <Label>תיאור</Label>
        <Textarea
          value={editableContent?.about?.description || ''}
          onChange={(e) => updateContent('about', 'description', e.target.value)}
          placeholder="תיאור מפורט"
          rows={4}
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <Label>סטטיסטיקות</Label>
          <Button onClick={() => addItem('about', 'stat')} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            הוסף סטטיסטיקה
          </Button>
        </div>
        
        {(editableContent?.about?.stats || []).map((stat: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <Label>סטטיסטיקה {index + 1}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem('about', 'stats', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Input
                value={stat.number || ''}
                onChange={(e) => updateItem('about', 'stats', index, 'number', e.target.value)}
                placeholder="מספר"
              />
              <Input
                value={stat.label || ''}
                onChange={(e) => updateItem('about', 'stats', index, 'label', e.target.value)}
                placeholder="תווית"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {editableContent?.about && Object.keys(editableContent.about || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('about', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.about[buttonKey] || ''}
                  onChange={(e) => updateContent('about', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.about[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('about', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('about')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  const renderServicesEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת הסקשן</Label>
        <Input
          value={editableContent?.services?.title || ''}
          onChange={(e) => updateContent('services', 'title', e.target.value)}
          placeholder="השירותים שלנו"
        />
      </div>
      
      <div>
        <Label>תת-כותרת</Label>
        <Input
          value={editableContent?.services?.subtitle || ''}
          onChange={(e) => updateContent('services', 'subtitle', e.target.value)}
          placeholder="פתרונות מקצועיים"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <Label>שירותים</Label>
          <Button onClick={() => addItem('services', 'service')} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            הוסף שירות
          </Button>
        </div>
        
        {(editableContent?.services?.items || []).map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <Label>שירות {index + 1}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem('services', 'items', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Input
              value={item.title || ''}
              onChange={(e) => updateItem('services', 'items', index, 'title', e.target.value)}
              placeholder="שם השירות"
            />
            
            <Textarea
              value={item.description || ''}
              onChange={(e) => updateItem('services', 'items', index, 'description', e.target.value)}
              placeholder="תיאור השירות"
              rows={2}
            />
            
            <Input
              value={item.price || ''}
              onChange={(e) => updateItem('services', 'items', index, 'price', e.target.value)}
              placeholder="מחיר"
            />
            
            <div>
              <Label>תכונות</Label>
              {(item.features || []).map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex gap-2 mt-2">
                  <Input
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...item.features];
                      newFeatures[featureIndex] = e.target.value;
                      updateItem('services', 'items', index, 'features', newFeatures);
                    }}
                    placeholder="תכונה"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newFeatures = item.features.filter((_: any, i: number) => i !== featureIndex);
                      updateItem('services', 'items', index, 'features', newFeatures);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newFeatures = [...(item.features || []), 'תכונה חדשה'];
                  updateItem('services', 'items', index, 'features', newFeatures);
                }}
                className="mt-2"
              >
                <Plus className="h-4 w-4 mr-2" />
                הוסף תכונה
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {editableContent?.services && Object.keys(editableContent.services || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('services', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.services[buttonKey] || ''}
                  onChange={(e) => updateContent('services', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.services[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('services', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('services')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  const renderTestimonialsEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת הסקשן</Label>
        <Input
          value={editableContent?.testimonials?.title || ''}
          onChange={(e) => updateContent('testimonials', 'title', e.target.value)}
          placeholder="המלצות מלקוחות"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <Label>המלצות</Label>
          <Button onClick={() => addItem('testimonials', 'testimonial')} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            הוסף המלצה
          </Button>
        </div>
        
        {(editableContent?.testimonials?.testimonials || []).map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <Label>המלצה {index + 1}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem('testimonials', 'testimonials', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Input
              value={item.name || ''}
              onChange={(e) => updateItem('testimonials', 'testimonials', index, 'name', e.target.value)}
              placeholder="שם הלקוח"
            />
            
            <Input
              value={item.role || ''}
              onChange={(e) => updateItem('testimonials', 'testimonials', index, 'role', e.target.value)}
              placeholder="תפקיד"
            />
            
            <Input
              value={item.company || ''}
              onChange={(e) => updateItem('testimonials', 'testimonials', index, 'company', e.target.value)}
              placeholder="חברה"
            />
            
            <Textarea
              value={item.content || ''}
              onChange={(e) => updateItem('testimonials', 'testimonials', index, 'content', e.target.value)}
              placeholder="תוכן ההמלצה"
              rows={3}
            />
            
            <Input
              type="number"
              min="1"
              max="5"
              value={item.rating || 5}
              onChange={(e) => updateItem('testimonials', 'testimonials', index, 'rating', parseInt(e.target.value))}
              placeholder="דירוג (1-5)"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      {editableContent?.testimonials && Object.keys(editableContent.testimonials || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('testimonials', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.testimonials[buttonKey] || ''}
                  onChange={(e) => updateContent('testimonials', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.testimonials[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('testimonials', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('testimonials')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  const renderPricingEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת הסקשן</Label>
        <Input
          value={editableContent?.pricing?.title || ''}
          onChange={(e) => updateContent('pricing', 'title', e.target.value)}
          placeholder="מחירים שקופים"
        />
      </div>
      
      <div>
        <Label>תת-כותרת</Label>
        <Input
          value={editableContent?.pricing?.subtitle || ''}
          onChange={(e) => updateContent('pricing', 'subtitle', e.target.value)}
          placeholder="בחר את החבילה המתאימה"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <Label>חבילות מחירים</Label>
          <Button onClick={() => addItem('pricing', 'plan')} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            הוסף חבילה
          </Button>
        </div>
        
        {(editableContent?.pricing?.plans || []).map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <Label>חבילה {index + 1}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem('pricing', 'plans', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Input
              value={item.name || ''}
              onChange={(e) => updateItem('pricing', 'plans', index, 'name', e.target.value)}
              placeholder="שם החבילה"
            />
            
            <Input
              value={item.price || ''}
              onChange={(e) => updateItem('pricing', 'plans', index, 'price', e.target.value)}
              placeholder="מחיר"
            />
            
            <Input
              value={item.period || ''}
              onChange={(e) => updateItem('pricing', 'plans', index, 'period', e.target.value)}
              placeholder="תקופה (לחודש/לשנה)"
            />
            
            <Input
              value={item.buttonText || ''}
              onChange={(e) => updateItem('pricing', 'plans', index, 'buttonText', e.target.value)}
              placeholder="טקסט כפתור"
            />
            
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.recommended || false}
                onChange={(e) => updateItem('pricing', 'plans', index, 'recommended', e.target.checked)}
              />
              <Label>מומלץ</Label>
            </div>
            
            <div>
              <Label>תכונות</Label>
              {(item.features || []).map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex gap-2 mt-2">
                  <Input
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...item.features];
                      newFeatures[featureIndex] = e.target.value;
                      updateItem('pricing', 'plans', index, 'features', newFeatures);
                    }}
                    placeholder="תכונה"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const newFeatures = item.features.filter((_: any, i: number) => i !== featureIndex);
                      updateItem('pricing', 'plans', index, 'features', newFeatures);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newFeatures = [...(item.features || []), 'תכונה חדשה'];
                  updateItem('pricing', 'plans', index, 'features', newFeatures);
                }}
                className="mt-2"
              >
                <Plus className="h-4 w-4 mr-2" />
                הוסף תכונה
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {editableContent?.pricing && Object.keys(editableContent.pricing || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('pricing', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.pricing[buttonKey] || ''}
                  onChange={(e) => updateContent('pricing', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.pricing[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('pricing', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('pricing')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  const renderFaqEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת הסקשן</Label>
        <Input
          value={editableContent?.faq?.title || ''}
          onChange={(e) => updateContent('faq', 'title', e.target.value)}
          placeholder="שאלות נפוצות"
        />
      </div>
      
      <div>
        <Label>תת-כותרת</Label>
        <Input
          value={editableContent?.faq?.subtitle || ''}
          onChange={(e) => updateContent('faq', 'subtitle', e.target.value)}
          placeholder="תשובות לשאלות הכי חשובות"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <Label>שאלות ותשובות</Label>
          <Button onClick={() => addItem('faq', 'question')} size="sm">
            <Plus className="h-4 w-4 mr-2" />
            הוסף שאלה
          </Button>
        </div>
        
        {(editableContent?.faq?.questions || []).map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <Label>שאלה {index + 1}</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem('faq', 'questions', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Input
              value={item.question || ''}
              onChange={(e) => updateItem('faq', 'questions', index, 'question', e.target.value)}
              placeholder="השאלה"
            />
            
            <Textarea
              value={item.answer || ''}
              onChange={(e) => updateItem('faq', 'questions', index, 'answer', e.target.value)}
              placeholder="התשובה"
              rows={3}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      {editableContent?.faq && Object.keys(editableContent.faq || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('faq', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.faq[buttonKey] || ''}
                  onChange={(e) => updateContent('faq', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.faq[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('faq', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('faq')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  const renderContactEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת הסקשן</Label>
        <Input
          value={editableContent?.contact?.title || ''}
          onChange={(e) => updateContent('contact', 'title', e.target.value)}
          placeholder="נשמח לשמוע ממכם"
        />
      </div>
      
      <div>
        <Label>תת-כותרת</Label>
        <Input
          value={editableContent?.contact?.subtitle || ''}
          onChange={(e) => updateContent('contact', 'subtitle', e.target.value)}
          placeholder="השאירו פרטים ונחזור אליכם"
        />
      </div>
      
      <div>
        <Label>תיאור</Label>
        <Input
          value={editableContent?.contact?.description || ''}
          onChange={(e) => updateContent('contact', 'description', e.target.value)}
          placeholder="תיאור נוסף"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>כתובת</Label>
          <Input
            value={editableContent?.contact?.info?.address || editableContent?.contact?.address || ''}
            onChange={(e) => {
              if (editableContent?.contact?.info) {
                updateContent('contact', 'info', { ...editableContent.contact.info, address: e.target.value });
              } else {
                updateContent('contact', 'address', e.target.value);
              }
            }}
            placeholder="כתובת"
          />
        </div>
        
        <div>
          <Label>טלפון</Label>
          <Input
            value={editableContent?.contact?.info?.phone || editableContent?.contact?.phone || ''}
            onChange={(e) => {
              if (editableContent?.contact?.info) {
                updateContent('contact', 'info', { ...editableContent.contact.info, phone: e.target.value });
              } else {
                updateContent('contact', 'phone', e.target.value);
              }
            }}
            placeholder="טלפון"
          />
        </div>
        
        <div>
          <Label>אימייל</Label>
          <Input
            value={editableContent?.contact?.info?.email || editableContent?.contact?.email || ''}
            onChange={(e) => {
              if (editableContent?.contact?.info) {
                updateContent('contact', 'info', { ...editableContent.contact.info, email: e.target.value });
              } else {
                updateContent('contact', 'email', e.target.value);
              }
            }}
            placeholder="אימייל"
          />
        </div>
        
        <div>
          <Label>שעות פעילות</Label>
          <Input
            value={editableContent?.contact?.info?.hours || editableContent?.contact?.hours || ''}
            onChange={(e) => {
              if (editableContent?.contact?.info) {
                updateContent('contact', 'info', { ...editableContent.contact.info, hours: e.target.value });
              } else {
                updateContent('contact', 'hours', e.target.value);
              }
            }}
            placeholder="שעות פעילות"
          />
        </div>
      </div>

      {/* Form Labels */}
      <div>
        <Label>תוויות טופס</Label>
        <div className="space-y-2 mt-2">
          <Input
            value={editableContent?.contact?.form?.nameLabel || ''}
            onChange={(e) => {
              const form = editableContent?.contact?.form || {};
              updateContent('contact', 'form', { ...form, nameLabel: e.target.value });
            }}
            placeholder="תווית שם מלא"
          />
          
          <Input
            value={editableContent?.contact?.form?.emailLabel || ''}
            onChange={(e) => {
              const form = editableContent?.contact?.form || {};
              updateContent('contact', 'form', { ...form, emailLabel: e.target.value });
            }}
            placeholder="תווית אימייל"
          />
          
          <Input
            value={editableContent?.contact?.form?.phoneLabel || ''}
            onChange={(e) => {
              const form = editableContent?.contact?.form || {};
              updateContent('contact', 'form', { ...form, phoneLabel: e.target.value });
            }}
            placeholder="תווית טלפון"
          />
          
          <Input
            value={editableContent?.contact?.form?.messageLabel || ''}
            onChange={(e) => {
              const form = editableContent?.contact?.form || {};
              updateContent('contact', 'form', { ...form, messageLabel: e.target.value });
            }}
            placeholder="תווית הודעה"
          />
          
          <Input
            value={editableContent?.contact?.form?.submitText || ''}
            onChange={(e) => {
              const form = editableContent?.contact?.form || {};
              updateContent('contact', 'form', { ...form, submitText: e.target.value });
            }}
            placeholder="טקסט כפתור שליחה"
          />
        </div>
      </div>

      {/* Buttons */}
      {editableContent?.contact && Object.keys(editableContent.contact || {})
        .filter(key => key && key.includes && key.includes('button') && key.includes('Text'))
        .map((buttonKey, index) => {
          const buttonNumber = buttonKey.replace('buttonText', '').replace('button', '');
          const iconKey = `button${buttonNumber}Icon`;
          
          return (
            <div key={buttonKey} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <Label>כפתור {buttonNumber}</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeButton('contact', parseInt(buttonNumber))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Input
                  value={editableContent.contact[buttonKey] || ''}
                  onChange={(e) => updateContent('contact', buttonKey, e.target.value)}
                  placeholder="טקסט כפתור"
                />
                
                <Select
                  value={editableContent.contact[iconKey] || 'none'}
                  onValueChange={(value) => updateContent('contact', iconKey, value === 'none' ? '' : value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר אייקון" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="none">ללא אייקון</SelectItem>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.id} value={icon.id}>
                        <div className="flex items-center gap-2">
                          <icon.icon className="h-4 w-4" />
                          {icon.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          );
        })}

      <Button onClick={() => addButton('contact')} className="w-full">
        <Plus className="h-4 w-4 mr-2" />
        הוסף כפתור
      </Button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[90vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Editor Panel */}
          <div className="space-y-4 overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 pb-4">
              <h2 className="text-2xl font-bold mb-4">עורך חזותי מתקדם</h2>
              
              {/* Main Tabs - Content vs Colors */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 w-full mb-4">
                  <TabsTrigger value="content">
                    <Edit3 className="h-4 w-4 mr-2" />
                    תוכן
                  </TabsTrigger>
                  <TabsTrigger value="colors">
                    <Palette className="h-4 w-4 mr-2" />
                    צבעים ועיצוב
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="content">
                  {/* Section Tabs */}
                  <Tabs value={activeSection} onValueChange={setActiveSection}>
                    <TabsList className="grid grid-cols-4 w-full mb-4">
                      {sections.slice(0, 4).map((section) => (
                        <TabsTrigger 
                          key={section.id} 
                          value={section.id}
                          className="text-xs"
                        >
                          <section.icon className="h-4 w-4 mr-1" />
                          {section.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    <TabsList className="grid grid-cols-4 w-full">
                      {sections.slice(4).map((section) => (
                        <TabsTrigger 
                          key={section.id} 
                          value={section.id}
                          className="text-xs"
                        >
                          <section.icon className="h-4 w-4 mr-1" />
                          {section.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </TabsContent>

                <TabsContent value="colors">
                  {renderColorEditor()}
                </TabsContent>
              </Tabs>
            </div>

            {/* Content based on active tab and section */}
            <div className="space-y-4">
              {activeTab === 'content' && (
                <>
                  {activeSection === 'hero' && renderHeroEditor()}
                  {activeSection === 'features' && renderFeaturesEditor()}
                  {activeSection === 'about' && renderAboutEditor()}
                  {activeSection === 'services' && renderServicesEditor()}
                  {activeSection === 'testimonials' && renderTestimonialsEditor()}
                  {activeSection === 'pricing' && renderPricingEditor()}
                  {activeSection === 'faq' && renderFaqEditor()}
                  {activeSection === 'contact' && renderContactEditor()}
                </>
              )}
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="bg-white border-b px-4 py-2">
              <h3 className="font-semibold">תצוגה מקדימה בזמן אמת</h3>
            </div>
            <div className="h-full overflow-y-auto bg-white">
              <LandingPagePreview 
                content={editableContent}
                currentColors={colors}
                formData={{
                  selectedTemplate: {
                    ...editableContent,
                    styles: {
                      primaryColor: colors.primary,
                      secondaryColor: colors.secondary,
                      accentColor: colors.accent,
                      backgroundColor: colors.background,
                      textColor: colors.text,
                      heroTitleColor: colors.headlineColor,
                      heroSubtitleColor: colors.subheadlineColor,
                      featuresColor: colors.featuresColor,
                      featuresTextColor: colors.featuresTextColor,
                      aboutColor: colors.aboutColor,
                      aboutTextColor: colors.aboutTextColor,
                      contactColor: colors.contactColor,
                      contactTextColor: colors.contactTextColor
                    }
                  }
                }}
                heroImage=""
                elements={[]}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedVisualEditor;
