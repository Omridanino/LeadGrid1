import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Edit3, Eye, Save, Download, Palette } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import LandingPagePreview from './LandingPagePreview';
import { ColorScheme } from '@/types/colors';

interface LiveContentEditorProps {
  initialContent?: any;
  onSave?: (content: any) => void;
  onClose?: () => void;
}

const LiveContentEditor = ({ initialContent, onSave, onClose }: LiveContentEditorProps) => {
  // State for content that updates in real-time
  const [content, setContent] = useState(() => ({
    hero: {
      title: initialContent?.hero?.title || 'הכותרת הראשית שלכם',
      subtitle: initialContent?.hero?.subtitle || 'כותרת משנה מעניינת',
      description: initialContent?.hero?.description || 'תיאור קצר ומשכנע של מה שאתם מציעים',
      button1Text: initialContent?.hero?.button1Text || 'התחילו עכשיו',
      button2Text: initialContent?.hero?.button2Text || 'למידע נוסף',
      badge: initialContent?.hero?.badge || 'חדש!'
    },
    features: {
      title: initialContent?.features?.title || 'למה לבחור בנו?',
      subtitle: initialContent?.features?.subtitle || 'היתרונות שיגרמו לכם להתאהב',
      items: initialContent?.features?.items || [
        { title: 'יתרון ראשון', description: 'הסבר קצר על היתרון הזה', icon: 'star' },
        { title: 'יתרון שני', description: 'הסבר קצר על היתרון הזה', icon: 'heart' },
        { title: 'יתרון שלישי', description: 'הסבר קצר על היתרון הזה', icon: 'zap' }
      ]
    },
    about: {
      title: initialContent?.about?.title || 'הסיפור שלנו',
      subtitle: initialContent?.about?.subtitle || 'מי אנחנו ואיך התחלנו',
      description: initialContent?.about?.description || 'אנחנו חברה שמתמחה בפתרונות חכמים ומותאמים אישית',
      stats: initialContent?.about?.stats || [
        { number: '100+', label: 'לקוחות מרוצים' },
        { number: '5+', label: 'שנות ניסיון' },
        { number: '24/7', label: 'תמיכה' }
      ]
    },
    contact: {
      title: initialContent?.contact?.title || 'בואו נתחבר',
      subtitle: initialContent?.contact?.subtitle || 'אנחנו כאן בשבילכם',
      phone: initialContent?.contact?.phone || '03-1234567',
      email: initialContent?.contact?.email || 'info@company.com',
      address: initialContent?.contact?.address || 'תל אביב, ישראל'
    }
  }));

  const [colors, setColors] = useState<ColorScheme>({
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

  const [activeTab, setActiveTab] = useState('hero');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Update content function that triggers preview update
  const updateContent = (section: string, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Update feature item
  const updateFeatureItem = (index: number, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      features: {
        ...prev.features,
        items: prev.features.items.map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  // Update stats
  const updateStat = (index: number, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      about: {
        ...prev.about,
        stats: prev.about.stats.map((stat, i) => 
          i === index ? { ...stat, [field]: value } : stat
        )
      }
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave({ content, colors });
    }
    
    // Save to localStorage
    localStorage.setItem('editedContent', JSON.stringify({ content, colors }));
    
    toast({
      title: "נשמר בהצלחה! ✅",
      description: "השינויים שלכם נשמרו",
    });
  };

  const handleDownload = () => {
    const dataStr = JSON.stringify({ content, colors }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'landing-page-content.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "הורדה הושלמה! 📥",
      description: "הקובץ נשמר למחשב שלכם",
    });
  };

  if (isPreviewMode) {
    return (
      <div className="flex flex-col h-screen bg-gray-50">
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">תצוגה מקדימה</h2>
          <div className="flex gap-2">
            <Button onClick={() => setIsPreviewMode(false)} variant="outline">
              <Edit3 className="h-4 w-4 mr-2" />
              חזור לעריכה
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              שמור
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <LandingPagePreview 
            content={content}
            currentColors={colors}
            formData={{ selectedTemplate: content }}
            heroImage=""
            elements={['hero', 'features', 'about', 'contact']}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50" dir="rtl">
      {/* Editor Panel */}
      <div className="w-1/2 bg-white border-l overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">עורך התוכן</h2>
            <div className="flex gap-2">
              <Button onClick={() => setIsPreviewMode(true)} variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                תצוגה מלאה
              </Button>
              <Button onClick={handleSave} size="sm">
                <Save className="h-4 w-4 mr-2" />
                שמור
              </Button>
              <Button onClick={handleDownload} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                הורד
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hero">Hero</TabsTrigger>
              <TabsTrigger value="features">יתרונות</TabsTrigger>
              <TabsTrigger value="about">אודות</TabsTrigger>
              <TabsTrigger value="contact">יצירת קשר</TabsTrigger>
            </TabsList>

            <TabsContent value="hero" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit3 className="h-5 w-5" />
                    עריכת Hero Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>תג עליון (Badge)</Label>
                    <Input
                      value={content.hero.badge}
                      onChange={(e) => updateContent('hero', 'badge', e.target.value)}
                      placeholder="חדש!"
                    />
                  </div>
                  
                  <div>
                    <Label>כותרת ראשית</Label>
                    <Input
                      value={content.hero.title}
                      onChange={(e) => updateContent('hero', 'title', e.target.value)}
                      placeholder="הכותרת הראשית שלכם"
                      className="text-lg font-bold"
                    />
                  </div>
                  
                  <div>
                    <Label>כותרת משנה</Label>
                    <Input
                      value={content.hero.subtitle}
                      onChange={(e) => updateContent('hero', 'subtitle', e.target.value)}
                      placeholder="כותרת משנה מעניינת"
                    />
                  </div>
                  
                  <div>
                    <Label>תיאור</Label>
                    <Textarea
                      value={content.hero.description}
                      onChange={(e) => updateContent('hero', 'description', e.target.value)}
                      placeholder="תיאור קצר ומשכנע"
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>כפתור ראשי</Label>
                      <Input
                        value={content.hero.button1Text}
                        onChange={(e) => updateContent('hero', 'button1Text', e.target.value)}
                        placeholder="התחילו עכשיו"
                      />
                    </div>
                    <div>
                      <Label>כפתור משני</Label>
                      <Input
                        value={content.hero.button2Text}
                        onChange={(e) => updateContent('hero', 'button2Text', e.target.value)}
                        placeholder="למידע נוסף"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>עריכת יתרונות</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>כותרת הסקשן</Label>
                    <Input
                      value={content.features.title}
                      onChange={(e) => updateContent('features', 'title', e.target.value)}
                      placeholder="למה לבחור בנו?"
                    />
                  </div>
                  
                  <div>
                    <Label>כותרת משנה</Label>
                    <Input
                      value={content.features.subtitle}
                      onChange={(e) => updateContent('features', 'subtitle', e.target.value)}
                      placeholder="היתרונות שיגרמו לכם להתאהב"
                    />
                  </div>

                  {content.features.items.map((item, index) => (
                    <Card key={index} className="p-4">
                      <h4 className="font-semibold mb-2">יתרון {index + 1}</h4>
                      <div className="space-y-2">
                        <Input
                          value={item.title}
                          onChange={(e) => updateFeatureItem(index, 'title', e.target.value)}
                          placeholder="כותרת היתרון"
                        />
                        <Textarea
                          value={item.description}
                          onChange={(e) => updateFeatureItem(index, 'description', e.target.value)}
                          placeholder="הסבר על היתרון"
                          rows={2}
                        />
                      </div>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="about" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>עריכת אודות</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>כותרת</Label>
                    <Input
                      value={content.about.title}
                      onChange={(e) => updateContent('about', 'title', e.target.value)}
                      placeholder="הסיפור שלנו"
                    />
                  </div>
                  
                  <div>
                    <Label>כותרת משנה</Label>
                    <Input
                      value={content.about.subtitle}
                      onChange={(e) => updateContent('about', 'subtitle', e.target.value)}
                      placeholder="מי אנחנו ואיך התחלנו"
                    />
                  </div>
                  
                  <div>
                    <Label>תיאור</Label>
                    <Textarea
                      value={content.about.description}
                      onChange={(e) => updateContent('about', 'description', e.target.value)}
                      placeholder="אנחנו חברה שמתמחה ב..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block">נתונים ומספרים</Label>
                    {content.about.stats.map((stat, index) => (
                      <div key={index} className="grid grid-cols-2 gap-2 mb-2">
                        <Input
                          value={stat.number}
                          onChange={(e) => updateStat(index, 'number', e.target.value)}
                          placeholder="100+"
                        />
                        <Input
                          value={stat.label}
                          onChange={(e) => updateStat(index, 'label', e.target.value)}
                          placeholder="לקוחות מרוצים"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>עריכת יצירת קשר</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>כותרת</Label>
                    <Input
                      value={content.contact.title}
                      onChange={(e) => updateContent('contact', 'title', e.target.value)}
                      placeholder="בואו נתחבר"
                    />
                  </div>
                  
                  <div>
                    <Label>כותרת משנה</Label>
                    <Input
                      value={content.contact.subtitle}
                      onChange={(e) => updateContent('contact', 'subtitle', e.target.value)}
                      placeholder="אנחנו כאן בשבילכם"
                    />
                  </div>
                  
                  <div>
                    <Label>טלפון</Label>
                    <Input
                      value={content.contact.phone}
                      onChange={(e) => updateContent('contact', 'phone', e.target.value)}
                      placeholder="03-1234567"
                    />
                  </div>
                  
                  <div>
                    <Label>אימייל</Label>
                    <Input
                      value={content.contact.email}
                      onChange={(e) => updateContent('contact', 'email', e.target.value)}
                      placeholder="info@company.com"
                      type="email"
                    />
                  </div>
                  
                  <div>
                    <Label>כתובת</Label>
                    <Input
                      value={content.contact.address}
                      onChange={(e) => updateContent('contact', 'address', e.target.value)}
                      placeholder="תל אביב, ישראל"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Live Preview Panel */}
      <div className="w-1/2 bg-gray-100">
        <div className="h-full">
          <div className="bg-white border-b p-3 flex justify-between items-center">
            <Badge variant="secondary">תצוגה מקדימה חיה</Badge>
            <div className="text-xs text-gray-500">השינויים מתעדכנים באופן אוטומטי</div>
          </div>
          <div className="h-[calc(100%-60px)] overflow-y-auto">
            <LandingPagePreview 
              content={content}
              currentColors={colors}
              formData={{ selectedTemplate: content }}
              heroImage=""
              elements={['hero', 'features', 'about', 'contact']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveContentEditor;