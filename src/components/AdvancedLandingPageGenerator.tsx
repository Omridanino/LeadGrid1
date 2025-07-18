import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Eye, Download, Save, Edit } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import LandingPagePreview from './LandingPagePreview';
import VisualLandingPageEditor from './VisualLandingPageEditor';
import DesignThemeSelector from './DesignThemeSelector';
import { DesignTheme, getDefaultTheme } from '@/types/designThemes';

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
  const [selectedDesignTheme, setSelectedDesignTheme] = useState<DesignTheme>(getDefaultTheme());
  const [showDesignSelector, setShowDesignSelector] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    businessName: '',
    industry: '',
    goals: '',
    targetAudience: '',
    businessDescription: '',
    whyChooseUs: '',
    workProcess: '',
    pastProjects: ''
  });

  const generateLandingPage = async () => {
    // בדיקה אם יש מידע בסיסי
    const dataToUse = formData?.businessName ? formData : quickFormData;
    
    if (!dataToUse.businessName || !dataToUse.industry) {
      setShowQuickForm(true);
      return;
    }

    setIsGenerating(true);
    try {
      console.log('Generating landing page with formData:', dataToUse);
      
      const { data, error } = await supabase.functions.invoke('generate-landing-content', {
        body: { 
          formData: dataToUse, 
          designTheme: selectedDesignTheme.id,
          designStyle: selectedDesignTheme.name 
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
    console.log('Opening visual editor with generatedPage:', generatedPage);
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

    // יצירת HTML מלא מהתוכן שנוצר
    const htmlContent = `
<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${generatedPage.hero?.title || 'דף נחיתה'}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .hero { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; text-align: center; padding: 80px 20px; }
        .hero .badge { background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 25px; display: inline-block; margin-bottom: 24px; font-size: 14px; }
        .hero h1 { font-size: 3rem; font-weight: bold; margin-bottom: 24px; }
        .hero h2 { font-size: 1.5rem; margin-bottom: 16px; }
        .hero p { font-size: 1.25rem; margin-bottom: 32px; opacity: 0.9; max-width: 800px; margin-left: auto; margin-right: auto; }
        .hero .buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .btn { padding: 12px 32px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-block; cursor: pointer; border: none; }
        .btn-primary { background: white; color: #3b82f6; }
        .btn-secondary { background: transparent; color: white; border: 2px solid white; }
        .section { padding: 64px 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        .bg-gray { background: #f8fafc; }
        .text-center { text-align: center; }
        .grid { display: grid; gap: 32px; }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .grid-2 { grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); }
        .card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .feature-icon { width: 48px; height: 48px; background: #dbeafe; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #3b82f6; font-size: 24px; }
        .testimonial-stars { color: #fbbf24; margin-bottom: 16px; }
        .pricing-price { font-size: 2rem; font-weight: bold; color: #3b82f6; margin-bottom: 24px; }
        .pricing-features { list-style: none; margin-bottom: 32px; }
        .pricing-features li { padding: 4px 0; }
        .pricing-features li::before { content: "✓"; color: #10b981; margin-left: 8px; }
        .pricing-btn { background: #3b82f6; color: white; width: 100%; }
        h2 { font-size: 2rem; font-weight: bold; margin-bottom: 16px; }
        h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 12px; }
        .subtitle { font-size: 1.25rem; color: #6b7280; margin-bottom: 48px; }
        @media (max-width: 768px) {
            .hero h1 { font-size: 2rem; }
            .hero .buttons { flex-direction: column; align-items: center; }
            .grid-3, .grid-2 { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="badge">${generatedPage.hero?.badge || ''}</div>
            <h1>${generatedPage.hero?.title || ''}</h1>
            <h2>${generatedPage.hero?.subtitle || ''}</h2>
            <p>${generatedPage.hero?.description || ''}</p>
            <div class="buttons">
                <a href="#" class="btn btn-primary">${generatedPage.hero?.button1Text || 'לחץ כאן'}</a>
                <a href="#" class="btn btn-secondary">${generatedPage.hero?.button2Text || 'מידע נוסף'}</a>
            </div>
        </div>
    </section>

    ${generatedPage.features ? `
    <!-- Features Section -->
    <section class="section bg-gray">
        <div class="container text-center">
            <h2>${generatedPage.features.title}</h2>
            <p class="subtitle">${generatedPage.features.subtitle}</p>
            <div class="grid grid-3">
                ${generatedPage.features.items?.map((item: any) => `
                    <div class="card">
                        <div class="feature-icon">⭐</div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `).join('') || ''}
            </div>
        </div>
    </section>
    ` : ''}

    ${generatedPage.testimonials ? `
    <!-- Testimonials Section -->
    <section class="section">
        <div class="container text-center">
            <h2>${generatedPage.testimonials.title}</h2>
            <div class="grid grid-2">
                ${generatedPage.testimonials.testimonials?.map((testimonial: any) => `
                    <div class="card">
                        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                        <p>"${testimonial.content}"</p>
                        <div style="margin-top: 16px;">
                            <div style="font-weight: 600;">${testimonial.name}</div>
                            <div style="color: #6b7280; font-size: 14px;">${testimonial.role}</div>
                        </div>
                    </div>
                `).join('') || ''}
            </div>
        </div>
    </section>
    ` : ''}

    ${generatedPage.pricing ? `
    <!-- Pricing Section -->
    <section class="section bg-gray">
        <div class="container text-center">
            <h2>${generatedPage.pricing.title}</h2>
            <div class="grid grid-2">
                ${generatedPage.pricing.plans?.map((plan: any) => `
                    <div class="card">
                        <h3>${plan.name}</h3>
                        <div class="pricing-price">${plan.price}</div>
                        <ul class="pricing-features">
                            ${plan.features?.map((feature: string) => `<li>${feature}</li>`).join('') || ''}
                        </ul>
                        <a href="#" class="btn pricing-btn">בחר חבילה</a>
                    </div>
                `).join('') || ''}
            </div>
        </div>
    </section>
    ` : ''}
</body>
</html>`;

    // יצירת קובץ להורדה
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${generatedPage.hero?.title?.replace(/[^a-zA-Z0-9]/g, '-') || 'landing-page'}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "הורדה הושלמה! 🎉",
      description: "קובץ ה-HTML נשמר למחשב שלך",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
        <div className="space-y-6 p-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              🚀 יוצר דפי נחיתה מתקדם
            </h2>
            <p className="text-muted-foreground">
              מערכת AI מתקדמת שיוצרת דף נחיתה מושלם עבור העסק שלך
            </p>
          </div>

          {!generatedPage && !showQuickForm && !showDesignSelector ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5" />
                  יצירת דף נחיתה
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">פרטי העסק שלך:</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><strong>שם העסק:</strong> {formData?.businessName || 'לא צוין'}</div>
                    <div><strong>תחום:</strong> {formData?.businessType || formData?.industry || 'לא צוין'}</div>
                    <div><strong>יעד:</strong> {formData?.goal || formData?.goals || 'לא צוין'}</div>
                    <div><strong>קהל יעד:</strong> {formData?.targetAudience || 'לא צוין'}</div>
                  </div>
                  
                  {(!formData?.businessName || !formData?.industry) && (
                    <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        ⚠️ חסרים פרטים בסיסיים לצורך יצירת הדף. אנא מלא את הפרטים הנדרשים.
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">מה המערכת תיצור עבורך:</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>✅ תוכן מותאם אישית באמצעות GPT-4</li>
                    <li>✅ עיצוב מקצועי ורספונסיבי</li>
                    <li>✅ כל הסקשנים הנדרשים (Hero, Features, Testimonials, וכו')</li>
                    <li>✅ עורך חזותי לעריכת כל רכיב</li>
                    <li>✅ אופציות התאמה אישית מלאות</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => setShowDesignSelector(true)}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    🎨 בחר עיצוב ({selectedDesignTheme.name})
                  </Button>
                  
                  <Button 
                    onClick={generateLandingPage} 
                    disabled={isGenerating}
                    className="w-full"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        יוצר דף נחיתה מושלם...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        צור דף נחיתה עכשיו
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : showQuickForm ? (
            <Card>
              <CardHeader>
                <CardTitle>מלא פרטים בסיסיים</CardTitle>
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
                      placeholder="לדוגמה: חברת טכנולוגיה"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-black">תחום פעילות *</label>
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
                
                <div>
                  <label className="text-sm font-medium text-black">למה לבחור בכם? (3-5 סיבות)</label>
                  <textarea
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    rows={3}
                    value={quickFormData.whyChooseUs}
                    onChange={(e) => setQuickFormData(prev => ({...prev, whyChooseUs: e.target.value}))}
                    placeholder="למשל:&#10;ניסיון של 10 שנים בתחום&#10;שירות אישי ומקצועי&#10;מחירים הוגנים ותוצאות מובטחות"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black">איך נראה התהליך של עבודה איתכם?</label>
                  <textarea
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    rows={3}
                    value={quickFormData.workProcess}
                    onChange={(e) => setQuickFormData(prev => ({...prev, workProcess: e.target.value}))}
                    placeholder="למשל:&#10;1. פגישת ייעוץ ראשונית&#10;2. תכנון מפורט ועיצוב&#10;3. ביצוע הפרויקט&#10;4. מסירה ותמיכה"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black">פרויקטים מוצלחים שעשיתם (לגלריה)</label>
                  <textarea
                    className="w-full mt-1 px-3 py-2 border rounded-lg bg-white text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    rows={3}
                    value={quickFormData.pastProjects}
                    onChange={(e) => setQuickFormData(prev => ({...prev, pastProjects: e.target.value}))}
                    placeholder="למשל:&#10;אתר לחברת הייטק - הגדיל מכירות ב-300%&#10;קמפיין שיווקי לרשת מסעדות&#10;מערכת ניהול לעסק קטן"
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
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
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
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">
                    ✨ דף הנחיתה שלך מוכן!
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
                      צפה בתצוגה מקדימה
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

              {/* Generated Content Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>תצוגה מקדימה של התוכן</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4 max-h-60 overflow-y-auto text-sm">
                    <pre className="whitespace-pre-wrap">
                      {JSON.stringify(generatedPage, null, 2)}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Preview Modal */}
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-w-7xl h-[90vh] overflow-hidden p-0">
            {generatedPage ? (
              <LandingPagePreview
                content={generatedPage}
                currentColors={{
                  primary: selectedDesignTheme.styles.primary,
                  secondary: selectedDesignTheme.styles.secondary,
                  accent: selectedDesignTheme.styles.accent,
                  background: selectedDesignTheme.styles.background,
                  text: selectedDesignTheme.styles.text,
                  heroBackground: selectedDesignTheme.styles.heroBackground,
                  headlineColor: selectedDesignTheme.styles.heroText,
                  subheadlineColor: selectedDesignTheme.styles.heroText,
                  featuresColor: selectedDesignTheme.styles.featuresText,
                  featuresTextColor: selectedDesignTheme.styles.featuresText,
                  aboutColor: selectedDesignTheme.styles.text,
                  aboutTextColor: selectedDesignTheme.styles.text,
                  contactColor: selectedDesignTheme.styles.text,
                  contactTextColor: selectedDesignTheme.styles.text
                }}
                formData={{
                  selectedTemplate: generatedPage,
                  businessName: formData?.businessName || quickFormData.businessName
                }}
                heroImage=""
                elements={[]}
                selectedDesignTheme={selectedDesignTheme}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p>אין תוכן לתצוגה מקדימה</p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Design Theme Selector Modal */}
        <Dialog open={showDesignSelector} onOpenChange={setShowDesignSelector}>
          <DialogContent className="max-w-6xl h-[90vh] overflow-y-auto">
            <DesignThemeSelector
              selectedTheme={selectedDesignTheme}
              onThemeSelect={(theme) => {
                setSelectedDesignTheme(theme);
                setShowDesignSelector(false);
                toast({
                  title: "עיצוב נבחר! 🎨",
                  description: `העיצוב "${theme.name}" נבחר בהצלחה`,
                });
              }}
            />
          </DialogContent>
        </Dialog>

        {/* Visual Editor Modal */}
        <VisualLandingPageEditor
          isOpen={isEditorOpen}
          onClose={() => setIsEditorOpen(false)}
          generatedContent={generatedPage}
          formData={formData}
          selectedDesignTheme={selectedDesignTheme}
          onContentUpdate={(updatedContent) => {
            console.log('Content updated in editor:', updatedContent);
            setGeneratedPage(updatedContent);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedLandingPageGenerator;