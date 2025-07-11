import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Eye, Download, Save, Edit } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import LandingPagePreview from './LandingPagePreview';
import VisualLandingPageEditor from './VisualLandingPageEditor';

interface AdvancedLandingPageGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  formData: any;
}

const AdvancedLandingPageGenerator = ({ 
  isOpen, 
  onClose, 
  formData 
}: AdvancedLandingPageGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPage, setGeneratedPage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    businessName: '',
    industry: '',
    goals: '',
    targetAudience: '',
    businessDescription: ''
  });

  const generateLandingPage = async () => {
    if (!quickFormData.businessName || !quickFormData.industry) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-landing-content', {
        body: {
          ...formData,
          ...quickFormData,
          elements: ['hero', 'about', 'services', 'testimonials', 'pricing', 'faq', 'contact']
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Generated content:', data);
      setGeneratedPage(data.content);
      setShowQuickForm(false);

      toast({
        title: "הצלחה! 🎉",
        description: "דף הנחיתה נוצר בהצלחה",
      });

    } catch (error) {
      console.error('Error generating landing page:', error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה ביצירת דף הנחיתה. אנא נסה שוב.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleEdit = () => {
    setIsEditorOpen(true);
  };

  const handleSave = () => {
    toast({
      title: "נשמר בהצלחה",
      description: "דף הנחיתה נשמר לחשבון שלך",
    });
  };

  const handleDownload = () => {
    if (!generatedPage) {
      toast({
        title: "שגיאה",
        description: "אין דף להורדה. אנא צור דף נחיתה תחילה.",
        variant: "destructive",
      });
      return;
    }

    // Create HTML content for download
    const htmlContent = `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${formData?.businessName || 'דף נחיתה'}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .hero { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 4rem 2rem; text-align: center; min-height: 100vh; display: flex; align-items: center; justify-content: center; }
    .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
    .hero p { font-size: 1.25rem; margin-bottom: 2rem; }
    .cta-button { background: #dc2626; color: white; padding: 1rem 2rem; border: none; border-radius: 8px; font-size: 1.1rem; cursor: pointer; }
  </style>
</head>
<body>
  <div class="hero">
    <div>
      <h1>${formData?.headline || 'ברוכים הבאים לעסק שלנו'}</h1>
      <p>${formData?.subheadline || 'אנחנו מספקים שירותים איכותיים ומקצועיים'}</p>
      <button class="cta-button">${formData?.ctaText || 'צור קשר עכשיו'}</button>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData?.businessName || 'landing-page'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "הורדה החלה",
      description: "הקובץ מתחיל להתקבל למחשב שלך",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">יצירת דף נחיתה מתקדם</h2>
            <p className="text-muted-foreground">
              השתמש ב-AI המתקדם שלנו כדי ליצור דף נחיתה מקצועי ומותאם אישית
            </p>
          </div>

          {!generatedPage && !showQuickForm && (
            <div className="text-center space-y-4">
              <Button 
                onClick={() => setShowQuickForm(true)}
                size="lg"
                className="w-full max-w-md"
              >
                <Wand2 className="h-5 w-5 mr-2" />
                התחל ליצור דף נחיתה
              </Button>
            </div>
          )}

          {showQuickForm && !generatedPage && (
            <Card>
              <CardHeader>
                <CardTitle>פרטי העסק</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-black">שם העסק *</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={quickFormData.businessName}
                      onChange={(e) => setQuickFormData(prev => ({...prev, businessName: e.target.value}))}
                      placeholder="שם העסק שלך"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-black">תחום עיסוק *</label>
                    <select
                      className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={quickFormData.industry}
                      onChange={(e) => setQuickFormData(prev => ({...prev, industry: e.target.value}))}
                    >
                      <option value="">בחר תחום</option>
                      <option value="טכנולוגיה">טכנולוגיה</option>
                      <option value="שירותים עסקיים">שירותים עסקיים</option>
                      <option value="רפואה ובריאות">רפואה ובריאות</option>
                      <option value="חינוך">חינוך</option>
                      <option value="מסחר ומכירות">מסחר ומכירות</option>
                      <option value="נדלן">נדל&quot;ן</option>
                      <option value="מזון ומסעדנות">מזון ומסעדנות</option>
                      <option value="אחר">אחר</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-black">קהל יעד</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={quickFormData.targetAudience}
                      onChange={(e) => setQuickFormData(prev => ({...prev, targetAudience: e.target.value}))}
                      placeholder="לדוגמה: עסקים קטנים"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-black">מטרת הדף</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={quickFormData.goals}
                      onChange={(e) => setQuickFormData(prev => ({...prev, goals: e.target.value}))}
                      placeholder="לדוגמה: קבלת לידים"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-black">תיאור קצר של העסק</label>
                  <textarea
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    rows={3}
                    value={quickFormData.businessDescription}
                    onChange={(e) => setQuickFormData(prev => ({...prev, businessDescription: e.target.value}))}
                    placeholder="תאר בקצרה מה העסק שלך עושה..."
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={generateLandingPage}
                    disabled={!quickFormData.businessName || !quickFormData.industry || isGenerating}
                    className="flex-1"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        יוצר דף נחיתה...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        צור דף נחיתה
                      </>
                    )}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowQuickForm(false)}
                  >
                    ביטול
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {generatedPage && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    ✨ דף הנחיתה נוצר בהצלחה!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    המערכת יצרה עבורך דף נחיתה מקצועי עם תוכן מותאם אישית. 
                    כעת תוכל לצפות, לערוך ולהתאים אישית כל רכיב.
                  </p>
                  
                  <div className="flex gap-4">
                    <Button onClick={handlePreview} variant="default">
                      <Eye className="h-4 w-4 mr-2" />
                      דף הנחיתה שלכם כאן
                    </Button>
                    <Button onClick={handleEdit} variant="default">
                      <Edit className="h-4 w-4 mr-2" />
                      עורך חזותי
                    </Button>
                    <Button onClick={handleSave} variant="outline">
                      <Save className="h-4 w-4 mr-2" />
                      שמור פרויקט
                    </Button>
                    <Button onClick={handleDownload} variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      הורד HTML
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Preview Modal */}
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-w-7xl h-[90vh] overflow-hidden p-0">
            <LandingPagePreview
              content={generatedPage}
              currentColors={{
                primary: '#2563eb',
                secondary: '#1d4ed8',
                accent: '#dc2626',
                background: '#ffffff',
                heroBackground: '#2563eb',
                text: '#1e293b',
                featuresColor: '#f8fafc',
                featuresTextColor: '#1e293b',
                aboutColor: '#ffffff',
                aboutTextColor: '#374151',
                contactColor: '#f8fafc',
                contactTextColor: '#1e293b',
                headlineColor: '#ffffff',
                subheadlineColor: '#f1f5f9'
              }}
              formData={{
                ...formData,
                ...quickFormData
              }}
              heroImage=""
              elements={['features', 'about', 'contact']}
            />
          </DialogContent>
        </Dialog>

        {/* Visual Editor Modal */}
        <VisualLandingPageEditor
          isOpen={isEditorOpen}
          onClose={() => setIsEditorOpen(false)}
          generatedContent={generatedPage}
          formData={formData}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedLandingPageGenerator;