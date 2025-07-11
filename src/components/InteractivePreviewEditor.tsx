import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  Edit3, 
  Save, 
  Download, 
  Palette, 
  Type,
  Settings,
  Eye,
  EyeOff,
  X
} from 'lucide-react';
import { ColorPicker } from '@/components/ui/color-picker';
import { generatePageHTML } from "@/utils/pageGenerator";
import { useToast } from "@/hooks/use-toast";

interface InteractivePreviewEditorProps {
  isOpen: boolean;
  onClose: () => void;
  formData: any;
  generatedContent: any;
  onSave?: (updatedContent: any) => void;
  onDownload?: () => void;
}

const InteractivePreviewEditor = ({ 
  isOpen, 
  onClose, 
  formData, 
  generatedContent,
  onSave,
  onDownload
}: InteractivePreviewEditorProps) => {
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  const [editingElement, setEditingElement] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [showStylePanel, setShowStylePanel] = useState(false);
  const [pageContent, setPageContent] = useState<any>({
    hero: { title: 'כותרת ראשית', subtitle: 'כותרת משנה' }
  });

  // Update pageContent when formData changes
  useEffect(() => {
    console.log("InteractivePreviewEditor - formData changed:", formData);
    if (formData?.selectedTemplate) {
      console.log("Setting pageContent from selectedTemplate:", formData.selectedTemplate);
      setPageContent(formData.selectedTemplate);
    } else if (generatedContent) {
      console.log("Setting pageContent from generatedContent:", generatedContent);
      setPageContent(generatedContent);
    } else {
      console.log("Using default content");
      setPageContent({
        hero: { 
          title: 'כותרת ראשית', 
          subtitle: 'כותרת משנה',
          description: 'תיאור הדף',
          button1Text: 'התחל עכשיו',
          button2Text: 'למד עוד'
        }
      });
    }
  }, [formData, generatedContent]);

  const [pageStyles, setPageStyles] = useState({
    primaryColor: '#3b82f6',
    secondaryColor: '#6b7280',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    heroTitleColor: '#ffffff',
    heroSubtitleColor: '#ffffff'
  });

  const startEditing = (elementId: string, currentText: string) => {
    if (!editMode) return;
    setEditingElement(elementId);
    setEditingText(currentText);
  };

  const saveEdit = () => {
    if (!editingElement) return;

    const [section, field, subfield] = editingElement.split('.');
    const newContent = { ...pageContent };

    if (subfield) {
      // עבור נתונים מקוננים כמו hero.button.text
      if (!newContent[section]) newContent[section] = {};
      if (!newContent[section][field]) newContent[section][field] = {};
      newContent[section][field][subfield] = editingText;
    } else if (field) {
      // עבור נתונים פשוטים כמו hero.title
      if (!newContent[section]) newContent[section] = {};
      newContent[section][field] = editingText;
    }

    setPageContent(newContent);
    setEditingElement(null);
    setEditingText('');

    // עדכון גם ב-formData אם יש תבנית
    if (formData?.selectedTemplate) {
      const updatedFormData = {
        ...formData,
        selectedTemplate: newContent
      };
      localStorage.setItem('formData', JSON.stringify(updatedFormData));
    }
  };

  const cancelEdit = () => {
    setEditingElement(null);
    setEditingText('');
  };

  const handleSave = () => {
    if (onSave) {
      onSave(pageContent);
    }
    toast({
      title: "נשמר בהצלחה! ✅",
      description: "השינויים נשמרו",
    });
  };

  const handleDownload = () => {
    if (formData?.selectedTemplate) {
      const htmlContent = generatePageHTML(pageContent);
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${pageContent.hero?.title?.replace(/[^a-zA-Z0-9\u0590-\u05FF]/g, '-') || 'landing-page'}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "הורדה הושלמה! 🎉",
        description: "קובץ ה-HTML המלא נשמר למחשב שלך",
      });
    } else if (onDownload) {
      onDownload();
    }
  };

  const renderEditableText = (
    text: string,
    elementId: string,
    className: string = '',
    tag: 'h1' | 'h2' | 'h3' | 'p' | 'span' = 'p'
  ) => {
    const isEditing = editingElement === elementId;
    const Component = tag;

    if (isEditing) {
      return (
        <div className="relative">
          {tag === 'p' || tag === 'span' ? (
            <Textarea
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="w-full resize-none"
              rows={3}
              autoFocus
            />
          ) : (
            <Input
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="w-full"
              autoFocus
            />
          )}
          <div className="flex gap-2 mt-2">
            <Button size="sm" onClick={saveEdit}>
              <Save className="h-3 w-3 mr-1" />
              שמור
            </Button>
            <Button size="sm" variant="outline" onClick={cancelEdit}>
              <X className="h-3 w-3 mr-1" />
              בטל
            </Button>
          </div>
        </div>
      );
    }

    return (
      <Component
        className={`${className} ${editMode ? 'cursor-pointer hover:bg-yellow-100/20 hover:outline hover:outline-2 hover:outline-yellow-400 rounded p-1 transition-all' : ''}`}
        onClick={() => startEditing(elementId, text)}
      >
        {text}
        {editMode && (
          <Edit3 className="inline h-4 w-4 ml-2 text-yellow-400" />
        )}
      </Component>
    );
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] h-[95vh] p-0 flex">
        <DialogHeader className="sr-only">
          <DialogTitle>תצוגה מקדימה + עריכה</DialogTitle>
        </DialogHeader>
        {/* Main Preview Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Toolbar */}
          <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">תצוגה מקדימה + עריכה</h2>
              <Badge variant="secondary" className="bg-blue-600 text-white">
                {editMode ? 'מצב עריכה פעיל' : 'מצב צפייה'}
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={editMode ? "default" : "outline"}
                size="sm"
                onClick={() => setEditMode(!editMode)}
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                {editMode ? <EyeOff className="h-4 w-4 mr-2" /> : <Edit3 className="h-4 w-4 mr-2" />}
                {editMode ? 'צפייה' : 'עריכה'}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowStylePanel(!showStylePanel)}
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                <Palette className="h-4 w-4 mr-2" />
                צבעים
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                <Save className="h-4 w-4 mr-2" />
                שמור
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                <Download className="h-4 w-4 mr-2" />
                הורד
              </Button>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 overflow-y-auto bg-gray-100">
            <div className="max-w-6xl mx-auto bg-white shadow-lg">
              
              {/* Hero Section */}
              <section 
                className="text-white text-center py-20 px-6 relative"
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                  color: pageStyles.heroTitleColor
                }}
              >
                <div className="max-w-4xl mx-auto space-y-6">
                  {pageContent?.hero?.badge && (
                    <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-4">
                      {renderEditableText(
                        pageContent.hero.badge,
                        'hero.badge',
                        '',
                        'span'
                      )}
                    </div>
                  )}
                  
                  {renderEditableText(
                    pageContent?.hero?.title || 'כותרת ראשית',
                    'hero.title',
                    'text-5xl font-bold mb-6',
                    'h1'
                  )}
                  
                  {renderEditableText(
                    pageContent?.hero?.subtitle || 'כותרת משנה',
                    'hero.subtitle',
                    'text-xl mb-6',
                    'h2'
                  )}
                  
                  {pageContent?.hero?.description && renderEditableText(
                    pageContent.hero.description,
                    'hero.description',
                    'text-lg mb-8 opacity-90',
                    'p'
                  )}
                  
                  <div className="flex gap-4 justify-center flex-wrap">
                    <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      {renderEditableText(
                        pageContent?.hero?.button1Text || 'התחל עכשיו',
                        'hero.button1Text',
                        '',
                        'span'
                      )}
                    </button>
                    <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                      {renderEditableText(
                        pageContent?.hero?.button2Text || 'למד עוד',
                        'hero.button2Text',
                        '',
                        'span'
                      )}
                    </button>
                  </div>
                </div>
              </section>

              {/* About Section */}
              {pageContent?.about && (
                <section className="py-20 px-6 bg-white">
                  <div className="max-w-4xl mx-auto text-center">
                    {renderEditableText(
                      pageContent.about.title || 'אודותינו',
                      'about.title',
                      'text-4xl font-bold mb-6',
                      'h2'
                    )}
                    {renderEditableText(
                      pageContent.about.description || '',
                      'about.description',
                      'text-lg text-gray-600 leading-relaxed',
                      'p'
                    )}
                  </div>
                </section>
              )}

              {/* Features Section */}
              {pageContent?.features && (
                <section className="py-20 px-6 bg-gray-50">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      {renderEditableText(
                        pageContent.features.title || 'התכונות שלנו',
                        'features.title',
                        'text-4xl font-bold mb-4',
                        'h2'
                      )}
                      {pageContent.features.subtitle && renderEditableText(
                        pageContent.features.subtitle,
                        'features.subtitle',
                        'text-lg text-gray-600',
                        'p'
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {pageContent.features.items?.map((item: any, index: number) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">⭐</span>
                          </div>
                          {renderEditableText(
                            item.title || '',
                            `features.items.${index}.title`,
                            'text-xl font-semibold mb-3',
                            'h3'
                          )}
                          {renderEditableText(
                            item.description || '',
                            `features.items.${index}.description`,
                            'text-gray-600',
                            'p'
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Services Section */}
              {pageContent?.services && (
                <section className="py-20 px-6 bg-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      {renderEditableText(
                        pageContent.services.title || 'השירותים שלנו',
                        'services.title',
                        'text-4xl font-bold mb-4',
                        'h2'
                      )}
                      {pageContent.services.subtitle && renderEditableText(
                        pageContent.services.subtitle,
                        'services.subtitle',
                        'text-lg text-gray-600',
                        'p'
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {pageContent.services.items?.map((service: any, index: number) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                          {renderEditableText(
                            service.title || '',
                            `services.items.${index}.title`,
                            'text-xl font-semibold mb-3',
                            'h3'
                          )}
                          {renderEditableText(
                            service.description || '',
                            `services.items.${index}.description`,
                            'text-gray-600 mb-4',
                            'p'
                          )}
                          {service.price && (
                            <div className="text-2xl font-bold text-blue-600">
                              {renderEditableText(
                                service.price,
                                `services.items.${index}.price`,
                                '',
                                'span'
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Emotional Section */}
              {pageContent?.emotional && (
                <section 
                  className="py-20 px-6 text-white text-center"
                  style={{ 
                    background: 'linear-gradient(135deg, #1e40af 0%, #3730a3 100%)'
                  }}
                >
                  <div className="max-w-4xl mx-auto">
                    {renderEditableText(
                      pageContent.emotional.title || '',
                      'emotional.title',
                      'text-4xl font-bold mb-6',
                      'h2'
                    )}
                    {pageContent.emotional.subtitle && renderEditableText(
                      pageContent.emotional.subtitle,
                      'emotional.subtitle',
                      'text-xl mb-6',
                      'h3'
                    )}
                    {pageContent.emotional.description && renderEditableText(
                      pageContent.emotional.description,
                      'emotional.description',
                      'text-lg mb-8 opacity-90',
                      'p'
                    )}
                    {pageContent.emotional.button && (
                      <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        {renderEditableText(
                          pageContent.emotional.button.text || 'לחץ כאן',
                          'emotional.button.text',
                          '',
                          'span'
                        )}
                      </button>
                    )}
                  </div>
                </section>
              )}

              {/* Testimonials Section */}
              {pageContent?.testimonials && (
                <section className="py-20 px-6 bg-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      {renderEditableText(
                        pageContent.testimonials.title || 'מה הלקוחות אומרים',
                        'testimonials.title',
                        'text-4xl font-bold mb-4',
                        'h2'
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {pageContent.testimonials.testimonials?.map((testimonial: any, index: number) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                          <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                          {renderEditableText(
                            testimonial.content || '',
                            `testimonials.testimonials.${index}.content`,
                            'text-lg mb-4 italic',
                            'p'
                          )}
                          <div className="border-t pt-4">
                            {renderEditableText(
                              testimonial.name || '',
                              `testimonials.testimonials.${index}.name`,
                              'font-semibold text-lg',
                              'p'
                            )}
                            {renderEditableText(
                              testimonial.role || '',
                              `testimonials.testimonials.${index}.role`,
                              'text-gray-600',
                              'p'
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Pricing Section */}
              {pageContent?.pricing && (
                <section className="py-20 px-6 bg-gray-50">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      {renderEditableText(
                        pageContent.pricing.title || 'מחירים',
                        'pricing.title',
                        'text-4xl font-bold mb-4',
                        'h2'
                      )}
                      {pageContent.pricing.subtitle && renderEditableText(
                        pageContent.pricing.subtitle,
                        'pricing.subtitle',
                        'text-lg text-gray-600',
                        'p'
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {pageContent.pricing.plans?.map((plan: any, index: number) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
                          {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                הכי פופולרי
                              </span>
                            </div>
                          )}
                          
                          {renderEditableText(
                            plan.name || '',
                            `pricing.plans.${index}.name`,
                            'text-2xl font-bold mb-4',
                            'h3'
                          )}
                          
                          <div className="mb-6">
                            {renderEditableText(
                              plan.price || '',
                              `pricing.plans.${index}.price`,
                              'text-4xl font-bold text-blue-600',
                              'p'
                            )}
                            {plan.period && (
                              <span className="text-gray-600">/{plan.period}</span>
                            )}
                          </div>
                          
                          <ul className="space-y-3 mb-8">
                            {plan.features?.map((feature: string, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-center">
                                <span className="text-green-500 mr-3">✓</span>
                                {renderEditableText(
                                  feature,
                                  `pricing.plans.${index}.features.${featureIndex}`,
                                  '',
                                  'span'
                                )}
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            {renderEditableText(
                              plan.buttonText || 'בחר חבילה',
                              `pricing.plans.${index}.buttonText`,
                              '',
                              'span'
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* FAQ Section */}
              {pageContent?.faq && (
                <section className="py-20 px-6 bg-white">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                      {renderEditableText(
                        pageContent.faq.title || 'שאלות נפוצות',
                        'faq.title',
                        'text-4xl font-bold mb-4',
                        'h2'
                      )}
                      {pageContent.faq.subtitle && renderEditableText(
                        pageContent.faq.subtitle,
                        'faq.subtitle',
                        'text-lg text-gray-600',
                        'p'
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      {pageContent.faq.items?.map((item: any, index: number) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6">
                          {renderEditableText(
                            item.question || '',
                            `faq.items.${index}.question`,
                            'text-xl font-semibold mb-3',
                            'h3'
                          )}
                          {renderEditableText(
                            item.answer || '',
                            `faq.items.${index}.answer`,
                            'text-gray-700 leading-relaxed',
                            'p'
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Final CTA Section */}
              {pageContent?.finalCta && (
                <section 
                  className="py-20 px-6 text-white text-center"
                  style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
                  }}
                >
                  <div className="max-w-4xl mx-auto">
                    {renderEditableText(
                      pageContent.finalCta.title || '',
                      'finalCta.title',
                      'text-4xl font-bold mb-6',
                      'h2'
                    )}
                    {pageContent.finalCta.subtitle && renderEditableText(
                      pageContent.finalCta.subtitle,
                      'finalCta.subtitle',
                      'text-xl mb-8',
                      'p'
                    )}
                    
                    <div className="flex gap-4 justify-center flex-wrap">
                      {pageContent.finalCta.primaryButton && (
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                          {renderEditableText(
                            pageContent.finalCta.primaryButton.text || 'התחל עכשיו',
                            'finalCta.primaryButton.text',
                            '',
                            'span'
                          )}
                        </button>
                      )}
                      {pageContent.finalCta.secondaryButton && (
                        <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                          {renderEditableText(
                            pageContent.finalCta.secondaryButton.text || 'למד עוד',
                            'finalCta.secondaryButton.text',
                            '',
                            'span'
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </section>
              )}
              {/* Contact Section */}
              {pageContent?.contact && (
                <section className="py-20 px-6 bg-gray-50">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      {renderEditableText(
                        pageContent.contact.title || 'צור קשר',
                        'contact.title',
                        'text-4xl font-bold mb-6',
                        'h2'
                      )}
                      {pageContent.contact.subtitle && renderEditableText(
                        pageContent.contact.subtitle,
                        'contact.subtitle',
                        'text-xl mb-8 text-gray-600',
                        'p'
                      )}
                      {pageContent.contact.description && renderEditableText(
                        pageContent.contact.description,
                        'contact.description',
                        'text-lg mb-12 text-gray-600',
                        'p'
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Contact Information */}
                      <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
                        
                        {pageContent.contact.info && (
                          <div className="space-y-6">
                            {pageContent.contact.info.address && (
                              <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <span className="text-blue-600">📍</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">כתובת</h4>
                                  {renderEditableText(
                                    pageContent.contact.info.address,
                                    'contact.info.address',
                                    'text-gray-600',
                                    'p'
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {pageContent.contact.info.phone && (
                              <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <span className="text-blue-600">📞</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">טלפון</h4>
                                  {renderEditableText(
                                    pageContent.contact.info.phone,
                                    'contact.info.phone',
                                    'text-gray-600',
                                    'p'
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {pageContent.contact.info.email && (
                              <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <span className="text-blue-600">✉️</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">אימייל</h4>
                                  {renderEditableText(
                                    pageContent.contact.info.email,
                                    'contact.info.email',
                                    'text-gray-600',
                                    'p'
                                  )}
                                </div>
                              </div>
                            )}
                            
                            {pageContent.contact.info.hours && (
                              <div className="flex items-start space-x-4 space-x-reverse">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <span className="text-blue-600">🕒</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-1">שעות פעילות</h4>
                                  {renderEditableText(
                                    pageContent.contact.info.hours,
                                    'contact.info.hours',
                                    'text-gray-600',
                                    'p'
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Contact Form */}
                      <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">שלח הודעה</h3>
                        <form className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {pageContent.contact.form?.nameLabel || 'שם מלא'}
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="הכנס את שמך המלא"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {pageContent.contact.form?.emailLabel || 'כתובת אימייל'}
                            </label>
                            <input
                              type="email"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="הכנס את כתובת האימייל שלך"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {pageContent.contact.form?.phoneLabel || 'מספר טלפון'}
                            </label>
                            <input
                              type="tel"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="הכנס את מספר הטלפון שלך"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              {pageContent.contact.form?.messageLabel || 'הודעה'}
                            </label>
                            <textarea
                              rows={5}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="כתב את ההודעה שלך כאן..."
                            ></textarea>
                          </div>
                          
                          <button
                            type="submit"
                            className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                          >
                            {pageContent.contact.form?.submitText || 'שלח הודעה'}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Footer */}
              {pageContent?.footer && (
                <footer className="bg-gray-900 text-white py-12 px-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {/* Company Info */}
                      <div className="md:col-span-2">
                        {renderEditableText(
                          pageContent.footer.companyName || pageContent.hero?.title || 'שם החברה',
                          'footer.companyName',
                          'text-2xl font-bold mb-4',
                          'h3'
                        )}
                        {pageContent.footer.description && renderEditableText(
                          pageContent.footer.description,
                          'footer.description',
                          'text-gray-400 mb-4',
                          'p'
                        )}
                        
                        {/* Social Links */}
                        {pageContent.footer.socialLinks && (
                          <div className="flex space-x-4 space-x-reverse">
                            {pageContent.footer.socialLinks.map((link: any, index: number) => (
                              <a
                                key={index}
                                href={link.url || '#'}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                              >
                                <span className="text-xl">{link.icon || '📱'}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Quick Links */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
                        {pageContent.footer.quickLinks && (
                          <ul className="space-y-2">
                            {pageContent.footer.quickLinks.map((link: any, index: number) => (
                              <li key={index}>
                                <a href={link.url || '#'} className="text-gray-400 hover:text-white transition-colors">
                                  {renderEditableText(
                                    link.text || '',
                                    `footer.quickLinks.${index}.text`,
                                    '',
                                    'span'
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      {/* Contact Info */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">יצירת קשר</h4>
                        <div className="space-y-2 text-gray-400">
                          {pageContent.contact?.info?.address && (
                            <p>{pageContent.contact.info.address}</p>
                          )}
                          {pageContent.contact?.info?.phone && (
                            <p>{pageContent.contact.info.phone}</p>
                          )}
                          {pageContent.contact?.info?.email && (
                            <p>{pageContent.contact.info.email}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Copyright */}
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                      {renderEditableText(
                        pageContent.footer.copyright || `© ${new Date().getFullYear()} ${pageContent.hero?.title || 'שם החברה'}. כל הזכויות שמורות.`,
                        'footer.copyright',
                        '',
                        'p'
                      )}
                    </div>
                  </div>
                </footer>
              )}
            </div>
          </div>
        </div>

        {/* Side Style Panel */}
        {showStylePanel && (
          <div className="w-80 bg-white border-l flex-shrink-0 overflow-y-auto">
            <div className="p-4 border-b">
              <h3 className="font-bold text-lg">עיצוב וצבעים</h3>
            </div>
            <div className="p-4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">צבעי דף</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-xs">צבע ראשי</Label>
                    <ColorPicker
                      color={pageStyles.primaryColor}
                      onChange={(color) => setPageStyles(prev => ({ ...prev, primaryColor: color }))}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-xs">צבע רקע</Label>
                    <ColorPicker
                      color={pageStyles.backgroundColor}
                      onChange={(color) => setPageStyles(prev => ({ ...prev, backgroundColor: color }))}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-xs">צבע טקסט</Label>
                    <ColorPicker
                      color={pageStyles.textColor}
                      onChange={(color) => setPageStyles(prev => ({ ...prev, textColor: color }))}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button onClick={handleSave} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  שמור שינויים
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InteractivePreviewEditor;