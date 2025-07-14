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
        body: { formData: dataToUse }
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

          {!generatedPage && !showQuickForm ? (
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
              <div className="w-full h-full overflow-y-auto">
                <div className="bg-white text-gray-900 min-h-full">
                  {/* Hero Section */}
                  <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                      <div className="inline-block bg-white/10 rounded-full px-4 py-2 mb-6">
                        <span className="text-sm">{generatedPage.hero?.badge}</span>
                      </div>
                      <h1 className="text-5xl font-bold mb-6">{generatedPage.hero?.title}</h1>
                      <h2 className="text-2xl mb-4">{generatedPage.hero?.subtitle}</h2>
                      <p className="text-xl mb-8 opacity-90">{generatedPage.hero?.description}</p>
                      <div className="flex gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                          {generatedPage.hero?.button1Text}
                        </button>
                        <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
                          {generatedPage.hero?.button2Text}
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* Emotional Section */}
                  {generatedPage.emotional && (
                    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
                      <div className="max-w-6xl mx-auto text-center">
                        {generatedPage.emotional.badge && (
                          <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6">
                            <span className="text-sm font-medium">{generatedPage.emotional.badge}</span>
                          </div>
                        )}
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">{generatedPage.emotional.title}</h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">{generatedPage.emotional.content}</p>
                        {generatedPage.emotional.quote && (
                          <div className="max-w-3xl mx-auto">
                            <blockquote className="text-2xl italic text-gray-600 mb-4">
                              "{generatedPage.emotional.quote}"
                            </blockquote>
                            {generatedPage.emotional.author && (
                              <cite className="text-lg text-gray-500">- {generatedPage.emotional.author}</cite>
                            )}
                          </div>
                        )}
                      </div>
                    </section>
                  )}

                  {/* About Section */}
                  {generatedPage.about && (
                    <section className="py-16 px-6">
                      <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                          <div>
                            <h2 className="text-3xl font-bold mb-4">{generatedPage.about.title}</h2>
                            <p className="text-xl text-blue-600 mb-6">{generatedPage.about.subtitle}</p>
                            <p className="text-gray-600 mb-8 leading-relaxed">{generatedPage.about.description}</p>
                            <div className="grid grid-cols-3 gap-6">
                              {generatedPage.about.stats?.map((stat: any, index: number) => (
                                <div key={index} className="text-center">
                                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                                  <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                            <span className="text-gray-500">📸 {generatedPage.about.image}</span>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                   {/* Services Section - השירותים שלנו */}
                   {generatedPage.whatWeGive && (
                     <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 text-white relative overflow-hidden">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
                         <div className="absolute top-40 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
                         <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
                       </div>
                       
                       <div className="max-w-6xl mx-auto text-center relative z-10">
                         {generatedPage.whatWeGive.badge && (
                           <div className="inline-block bg-white/10 text-white rounded-full px-6 py-2 mb-6 border border-white/20">
                             <span className="text-sm font-medium">{generatedPage.whatWeGive.badge}</span>
                           </div>
                         )}
                         <h2 className="text-4xl font-bold mb-6">{generatedPage.whatWeGive.title}</h2>
                         {generatedPage.whatWeGive.subtitle && (
                           <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">{generatedPage.whatWeGive.subtitle}</p>
                         )}
                         
                         <div className="grid md:grid-cols-3 gap-8">
                           {generatedPage.whatWeGive.services?.map((service: any, index: number) => {
                             const getServiceIcon = (iconName: string) => {
                               switch(iconName) {
                                 case 'tools': return '🔧';
                                 case 'briefcase-fill': return '💼';
                                 case 'lightbulb-fill': return '💡';
                                 case 'rocket': return '🚀';
                                 case 'shield': return '🛡️';
                                 case 'chart': return '📊';
                                 default: return '⚡';
                               }
                             };
                             
                             return (
                               <div key={index} className="group relative">
                                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                                 <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                                   <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                     <span className="text-2xl">{getServiceIcon(service.icon)}</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-300 transition-colors duration-300">{service.title}</h3>
                                   <p className="text-white/70 leading-relaxed">{service.description}</p>
                                 </div>
                               </div>
                             );
                           })}
                         </div>
                         
                         {generatedPage.whatWeGive.image && (
                           <div className="mt-16 text-center">
                             <div className="inline-block bg-white/5 rounded-2xl p-8 border border-white/10">
                               <span className="text-white/60 text-lg">🎯 {generatedPage.whatWeGive.image}</span>
                             </div>
                           </div>
                         )}
                       </div>
                     </section>
                   )}

                   {/* Why Choose Us Section */}
                   {generatedPage.whyUs && (
                     <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-20 left-20 w-40 h-40 border border-purple-400/30 rounded-full"></div>
                         <div className="absolute top-60 right-32 w-24 h-24 border border-indigo-400/20 rounded-full"></div>
                         <div className="absolute bottom-32 left-1/3 w-32 h-32 border border-purple-300/20 rounded-full"></div>
                       </div>
                       
                       <div className="max-w-6xl mx-auto text-center relative z-10">
                         {generatedPage.whyUs.badge && (
                           <div className="inline-block bg-purple-500/20 text-purple-300 rounded-full px-6 py-2 mb-6 border border-purple-400/30">
                             <span className="text-sm font-medium">{generatedPage.whyUs.badge}</span>
                           </div>
                         )}
                         <h2 className="text-4xl font-bold mb-6 text-white">{generatedPage.whyUs.title}</h2>
                         {generatedPage.whyUs.subtitle && (
                           <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">{generatedPage.whyUs.subtitle}</p>
                         )}
                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                           {generatedPage.whyUs.items?.map((item: any, index: number) => {
                             const getIcon = (iconName: string) => {
                               switch(iconName) {
                                 case 'award': return '🏆';
                                 case 'users': return '👥';
                                 case 'shield-check': return '🛡️';
                                 case 'dollar-sign': return '💰';
                                 case 'star': return '⭐';
                                 case 'heart': return '❤️';
                                 default: return '✨';
                               }
                             };
                             
                             return (
                               <div key={index} className="group relative">
                                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                                 <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                                   <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                     <span className="text-2xl text-white">{getIcon(item.icon)}</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
                                   <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                                   {item.stats && (
                                     <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
                                       📊 {item.stats}
                                     </div>
                                   )}
                                 </div>
                               </div>
                             );
                           })}
                         </div>
                       </div>
                     </section>
                   )}

                   {/* Testimonials Section */}
                   {generatedPage.testimonials && (
                     <section className="py-16 px-6">
                       <div className="max-w-4xl mx-auto text-center">
                         <h2 className="text-3xl font-bold mb-12">{generatedPage.testimonials.title}</h2>
                         <div className="grid md:grid-cols-2 gap-8">
                           {generatedPage.testimonials.testimonials?.map((testimonial: any, index: number) => (
                             <div key={index} className="bg-gray-50 p-6 rounded-lg">
                               <div className="flex text-yellow-400 mb-4">
                                 {[...Array(5)].map((_, i) => (
                                   <span key={i}>⭐</span>
                                 ))}
                               </div>
                               <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                               <div className="font-semibold">{testimonial.name}</div>
                               <div className="text-gray-600 text-sm">{testimonial.role}</div>
                             </div>
                           ))}
                         </div>
                       </div>
                     </section>
                   )}

                  {/* Pricing Section */}
                  {generatedPage.pricing && (
                    <section className="py-16 px-6 bg-gray-50">
                      <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">{generatedPage.pricing.title}</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                          {generatedPage.pricing.plans?.map((plan: any, index: number) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
                              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                              <div className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</div>
                              <ul className="space-y-3 mb-8">
                                {plan.features?.map((feature: string, featureIndex: number) => (
                                  <li key={featureIndex} className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                                בחר חבילה
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}


                  {/* Gallery Section */}
                  {generatedPage.gallery && (
                    <section className="py-20 px-6 bg-gray-50">
                      <div className="max-w-6xl mx-auto text-center">
                        {generatedPage.gallery.badge && (
                          <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6">
                            <span className="text-sm font-medium">{generatedPage.gallery.badge}</span>
                          </div>
                        )}
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">{generatedPage.gallery.title}</h2>
                        {generatedPage.gallery.subtitle && (
                          <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">{generatedPage.gallery.subtitle}</p>
                        )}
                        <div className={`grid gap-6 ${generatedPage.gallery.columns === 4 ? 'grid-cols-2 md:grid-cols-4' : generatedPage.gallery.columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                          {generatedPage.gallery.images?.map((image: any, index: number) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-md">
                              <img src={image.src} alt={image.alt || `תמונה ${index + 1}`} className="w-full h-64 object-cover" />
                              {image.caption && (
                                <div className="p-4 bg-white">
                                  <p className="text-gray-700">{image.caption}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}


                  {/* Text Section */}
                  {generatedPage.text && (
                    <section className="py-16 px-6">
                      <div className="max-w-4xl mx-auto">
                        {generatedPage.text.badge && (
                          <div className="text-center mb-6">
                            <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2">
                              <span className="text-sm font-medium">{generatedPage.text.badge}</span>
                            </div>
                          </div>
                        )}
                        {generatedPage.text.title && (
                          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">{generatedPage.text.title}</h2>
                        )}
                        <div className={`text-gray-700 leading-relaxed ${generatedPage.text.textSize === 'large' ? 'text-xl' : generatedPage.text.textSize === 'small' ? 'text-sm' : 'text-base'} ${generatedPage.text.alignment === 'center' ? 'text-center' : generatedPage.text.alignment === 'left' ? 'text-left' : 'text-right'}`}>
                          {generatedPage.text.content}
                        </div>
                      </div>
                    </section>
                  )}

                   {/* Benefits Section */}
                   {generatedPage.benefits && (
                     <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-teal-100">
                       <div className="max-w-6xl mx-auto text-center">
                         {generatedPage.benefits.badge && (
                           <div className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-6 py-2 mb-6">
                             <span className="text-sm font-medium">{generatedPage.benefits.badge}</span>
                           </div>
                         )}
                         <h2 className="text-4xl font-bold mb-6 text-gray-900">{generatedPage.benefits.title}</h2>
                         {generatedPage.benefits.subtitle && (
                           <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">{generatedPage.benefits.subtitle}</p>
                         )}
                         <div className="grid md:grid-cols-3 gap-8">
                           {generatedPage.benefits.items?.map((item: any, index: number) => {
                             const getIcon = (iconName: string) => {
                               switch(iconName) {
                                 case 'trending-up': return '📈';
                                 case 'shield': return '🛡️';
                                 case 'star': return '⭐';
                                 case 'target': return '🎯';
                                 case 'clock': return '⏰';
                                 case 'heart': return '❤️';
                                 default: return '✨';
                               }
                             };
                             
                             return (
                               <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-emerald-100 relative overflow-hidden">
                                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                 <div className="relative z-10">
                                   <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                     <span className="text-2xl">{getIcon(item.icon)}</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">{item.title}</h3>
                                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                 </div>
                               </div>
                             );
                           })}
                         </div>
                       </div>
                     </section>
                   )}

                   {/* FAQ Section */}
                   {generatedPage.faq && (
                     <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
                       <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-12">
                           {generatedPage.faq.badge && (
                             <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6">
                               <span className="text-sm font-medium">{generatedPage.faq.badge}</span>
                             </div>
                           )}
                           <h2 className="text-4xl font-bold mb-6 text-gray-900">{generatedPage.faq.title}</h2>
                           {generatedPage.faq.subtitle && (
                             <p className="text-xl text-gray-600 max-w-3xl mx-auto">{generatedPage.faq.subtitle}</p>
                           )}
                         </div>
                         <div className="space-y-6">
                           {generatedPage.faq.items?.map((item: any, index: number) => (
                             <div key={index} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                               <div className="flex items-start gap-4">
                                 <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                   {index + 1}
                                 </div>
                                 <div className="flex-1">
                                   <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                     {item.question}
                                   </h3>
                                   <p className="text-gray-600 leading-relaxed">
                                     {item.answer}
                                   </p>
                                 </div>
                               </div>
                             </div>
                           ))}
                         </div>
                       </div>
                     </section>
                   )}

                   {/* Social Bar Section */}
                   {generatedPage.socialBar && generatedPage.socialBar.platforms && (
                     <section className="py-16 px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
                       <div className="max-w-4xl mx-auto text-center">
                         <div className="flex justify-center gap-6 flex-wrap">
                           {generatedPage.socialBar.platforms.map((platform: any, index: number) => {
                             const getIcon = (name: string) => {
                               switch(name.toLowerCase()) {
                                 case 'facebook': return '📘';
                                 case 'instagram': return '📷';
                                 case 'linkedin': return '💼';
                                 case 'whatsapp': return '💬';
                                 case 'twitter': return '🐦';
                                 case 'youtube': return '📺';
                                 case 'tiktok': return '🎵';
                                 default: return '🔗';
                               }
                             };
                             
                             return (
                               <a 
                                 key={index} 
                                 href={platform.url || '#'} 
                                 className="group bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center gap-2"
                                 aria-label={platform.label}
                               >
                                 <span className="text-2xl">{getIcon(platform.name)}</span>
                                 <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                   {platform.name}
                                 </span>
                               </a>
                             );
                           })}
                         </div>
                         <div className="mt-8 text-white/80 text-sm">
                           <p>🚀 הצטרפו לקהילה שלנו ברשתות החברתיות לעדכונים ותכנים בלעדיים</p>
                         </div>
                       </div>
                     </section>
                   )}

                  {/* Contact Section */}
                  {generatedPage.contact && (
                    <section className="py-16 px-6 bg-blue-600 text-white">
                      <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold mb-4">{generatedPage.contact.title}</h2>
                          <p className="text-xl opacity-90 mb-2">{generatedPage.contact.subtitle}</p>
                          <p className="opacity-80">{generatedPage.contact.description}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                          {/* Contact Form */}
                          <div className="bg-white rounded-lg p-8 text-gray-900">
                            <form className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium mb-2">{generatedPage.contact.form?.nameLabel}</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">{generatedPage.contact.form?.emailLabel}</label>
                                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">{generatedPage.contact.form?.phoneLabel}</label>
                                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2">{generatedPage.contact.form?.messageLabel}</label>
                                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                              </div>
                              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                {generatedPage.contact.form?.submitText}
                              </button>
                            </form>
                          </div>
                          {/* Contact Info */}
                          <div className="space-y-6">
                            <div className="bg-white/10 rounded-lg p-6">
                              <h3 className="font-semibold mb-4">פרטי יצירת קשר</h3>
                              <div className="space-y-3">
                                <div className="flex items-center">
                                  <span className="mr-3">📍</span>
                                  <span>{generatedPage.contact.info?.address}</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="mr-3">📞</span>
                                  <span>{generatedPage.contact.info?.phone}</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="mr-3">✉️</span>
                                  <span>{generatedPage.contact.info?.email}</span>
                                </div>
                                <div className="flex items-center">
                                  <span className="mr-3">🕒</span>
                                  <span>{generatedPage.contact.info?.hours}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p>אין תוכן לתצוגה מקדימה</p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Visual Editor Modal */}
        <VisualLandingPageEditor
          isOpen={isEditorOpen}
          onClose={() => setIsEditorOpen(false)}
          generatedContent={generatedPage}
          formData={formData}
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