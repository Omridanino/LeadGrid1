import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import LandingPagePreview from '@/components/LandingPagePreview';
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
  Wand2,
  X
} from 'lucide-react';
import { ColorPicker } from '@/components/ui/color-picker';
import ImageUpload from './ImageUpload';
import React from 'react';

interface VisualLandingPageEditorProps {
  isOpen: boolean;
  onClose: () => void;
  generatedContent: any;
  formData: any;
  onContentUpdate?: (content: any) => void;
}

const VisualLandingPageEditor = ({ 
  isOpen, 
  onClose, 
  generatedContent, 
  formData,
  onContentUpdate
}: VisualLandingPageEditorProps) => {
  const [activeSection, setActiveSection] = useState('hero');
  
  if (!isOpen) return null;
  
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
        } : {
          title: 'אודותינו',
          subtitle: 'כותרת משנה', 
          description: 'אנחנו חברה מובילה בתחום',
        },
        contact: generatedContent.contact || {
          title: 'נשמח לשמוע ממכם',
          subtitle: 'השאירו פרטים ונחזור אליכם במהרה',
        }
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
      },
      contact: { 
        title: 'נשמח לשמוע ממכם', 
        subtitle: 'השאירו פרטים ונחזור אליכם במהרה',
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
    contactTitleColor: '#ffffff',
    contactTextColor: '#ffffff',
    heroBackground: 'gradient',
  });

  const sections = [
    { id: 'hero', name: 'דף הבית', icon: Sparkles },
    { id: 'features', name: 'תכונות', icon: Star },
    { id: 'about', name: 'אודותינו', icon: Users },
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
  };

  const updateItemInArray = (section: string, arrayField: string, index: number, field: string, value: any) => {
    const currentSection = editableContent[section] || {};
    const currentArray = [...(currentSection[arrayField] || [])];
    if (currentArray[index]) {
      currentArray[index] = { ...currentArray[index], [field]: value };
      updateContent(section, arrayField, currentArray);
    }
  };

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

      <div>
        <Label>טקסט כפתור ראשי</Label>
        <Input
          value={editableContent?.hero?.button1Text || ''}
          onChange={(e) => updateContent('hero', 'button1Text', e.target.value)}
          placeholder="התחל עכשיו"
        />
      </div>

      <div>
        <Label>טקסט כפתור משני</Label>
        <Input
          value={editableContent?.hero?.button2Text || ''}
          onChange={(e) => updateContent('hero', 'button2Text', e.target.value)}
          placeholder="למד עוד"
        />
      </div>
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
        <Label>תכונות</Label>
        {(editableContent?.features?.items || []).map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <Label>תכונה {index + 1}</Label>
            
            <Input
              value={item.title || ''}
              onChange={(e) => updateItemInArray('features', 'items', index, 'title', e.target.value)}
              placeholder="כותרת התכונה"
            />
            
            <Textarea
              value={item.description || ''}
              onChange={(e) => updateItemInArray('features', 'items', index, 'description', e.target.value)}
              placeholder="תיאור התכונה"
              rows={2}
            />
          </div>
        ))}
      </div>
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
    </div>
  );

  const renderContactEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>כותרת</Label>
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
          placeholder="השאירו פרטים ונחזור אליכם במהרה"
        />
      </div>
    </div>
  );

  const renderStylesEditor = () => (
    <div className="space-y-4">
      <div>
        <Label>צבע ראשי</Label>
        <Input
          type="color"
          value={pageStyles.primaryColor}
          onChange={(e) => setPageStyles({...pageStyles, primaryColor: e.target.value})}
        />
      </div>
      
      <div>
        <Label>צבע משני</Label>
        <Input
          type="color"
          value={pageStyles.secondaryColor}
          onChange={(e) => setPageStyles({...pageStyles, secondaryColor: e.target.value})}
        />
      </div>
      
      <div>
        <Label>צבע הדגשה</Label>
        <Input
          type="color"
          value={pageStyles.accentColor}
          onChange={(e) => setPageStyles({...pageStyles, accentColor: e.target.value})}
        />
      </div>
      
      <div>
        <Label>צבע רקע</Label>
        <Input
          type="color"
          value={pageStyles.backgroundColor}
          onChange={(e) => setPageStyles({...pageStyles, backgroundColor: e.target.value})}
        />
      </div>
    </div>
  );

  const renderCurrentEditor = () => {
    switch (activeSection) {
      case 'hero':
        return renderHeroEditor();
      case 'features':
        return renderFeaturesEditor();
      case 'about':
        return renderAboutEditor();
      case 'contact':
        return renderContactEditor();
      case 'styles':
        return renderStylesEditor();
      default:
        return renderHeroEditor();
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between p-3 border-b bg-white">
        <div className="flex items-center gap-2">
          <Paintbrush className="h-4 w-4" />
          <h1 className="text-base font-semibold">עורך חזותי - {formData?.companyName || 'דף הנחיתה שלי'}</h1>
        </div>
        <Button variant="outline" size="sm" onClick={onClose}>
          <X className="h-4 w-4 mr-1" />
          סגור
        </Button>
      </div>
      
      {/* Main Content - Split View */}
      <div className="flex flex-1 h-full">
        {/* Left Panel - Editor */}
        <div className="w-1/3 border-r bg-gray-50 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Section Selector */}
            <div>
              <Label className="text-sm font-medium mb-2 block">בחר סקשן לעריכה</Label>
              <div className="grid grid-cols-1 gap-1">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveSection(section.id)}
                    className="justify-start text-xs h-8"
                  >
                    <section.icon className="h-3 w-3 mr-1" />
                    {section.name}
                  </Button>
                ))}
                <Button
                  variant={activeSection === 'styles' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveSection('styles')}
                  className="justify-start text-xs h-8"
                >
                  <Palette className="h-3 w-3 mr-1" />
                  צבעים ועיצוב
                </Button>
              </div>
            </div>

            {/* Editor Section */}
            <Card className="text-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">
                  {activeSection === 'styles' ? 'עיצוב הדף' : 
                   sections.find(s => s.id === activeSection)?.name || 'עריכה'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {renderCurrentEditor()}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Right Panel - Live Preview */}
        <div className="w-2/3 bg-white overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="w-full h-full">
              <LandingPagePreview 
                content={editableContent}
                currentColors={{
                  primary: pageStyles.primaryColor,
                  secondary: pageStyles.secondaryColor,
                  accent: pageStyles.accentColor,
                  background: pageStyles.backgroundColor,
                  text: pageStyles.textColor,
                  headlineColor: pageStyles.heroTitleColor,
                  subheadlineColor: pageStyles.heroSubtitleColor,
                  featuresColor: pageStyles.featuresTitleColor,
                  featuresTextColor: pageStyles.featuresTextColor,
                  aboutColor: pageStyles.aboutTitleColor,
                  aboutTextColor: pageStyles.aboutTextColor,
                  contactColor: pageStyles.contactTitleColor,
                  contactTextColor: pageStyles.contactTextColor,
                  heroBackground: pageStyles.heroBackground
                }}
                formData={{
                  ...formData,
                  selectedTemplate: {
                    ...editableContent,
                    styles: pageStyles
                  }
                }}
                heroImage=""
                elements={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualLandingPageEditor;