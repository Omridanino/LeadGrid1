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
                  <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white py-20 px-6 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-32 h-32 border border-purple-400/30 rounded-full"></div>
                      <div className="absolute top-40 right-20 w-20 h-20 border border-indigo-400/20 rounded-full"></div>
                      <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-purple-300/20 rounded-full"></div>
                    </div>
                    <div className="max-w-4xl mx-auto relative z-10">
                      <div className="inline-block bg-purple-500/20 rounded-full px-4 py-2 mb-6 border border-purple-400/30">
                        <span className="text-sm text-purple-300">{generatedPage.hero?.badge}</span>
                      </div>
                      <h1 className="text-5xl font-bold mb-6">{generatedPage.hero?.title}</h1>
                      <h2 className="text-2xl mb-4 text-gray-300">{generatedPage.hero?.subtitle}</h2>
                      <p className="text-xl mb-8 text-gray-300">{generatedPage.hero?.description}</p>
                      <div className="flex gap-4 justify-center">
                        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                          {generatedPage.hero?.button1Text}
                        </button>
                        <button className="border border-purple-400/50 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                          {generatedPage.hero?.button2Text}
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* Emotional Section */}
                  {generatedPage.emotional && (
                    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 right-10 w-40 h-40 border border-purple-400/30 rounded-full"></div>
                        <div className="absolute bottom-20 left-10 w-32 h-32 border border-indigo-400/20 rounded-full"></div>
                      </div>
                      <div className="max-w-6xl mx-auto text-center relative z-10">
                        {generatedPage.emotional.badge && (
                          <div className="inline-block bg-purple-500/20 text-purple-300 rounded-full px-4 py-2 mb-6 border border-purple-400/30">
                            <span className="text-sm font-medium">{generatedPage.emotional.badge}</span>
                          </div>
                        )}
                        <h2 className="text-4xl font-bold mb-6">{generatedPage.emotional.title}</h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">{generatedPage.emotional.content}</p>
                        {generatedPage.emotional.quote && (
                          <div className="max-w-3xl mx-auto">
                            <blockquote className="text-2xl italic text-purple-300 mb-4">
                              "{generatedPage.emotional.quote}"
                            </blockquote>
                            {generatedPage.emotional.author && (
                              <cite className="text-lg text-gray-400">- {generatedPage.emotional.author}</cite>
                            )}
                          </div>
                        )}
                      </div>
                    </section>
                  )}

                   {/* About Section */}
                   {generatedPage.about && (
                     <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-10 left-20 w-24 h-24 border border-purple-400/30 rounded-full"></div>
                         <div className="absolute bottom-10 right-20 w-32 h-32 border border-indigo-400/20 rounded-full"></div>
                       </div>
                       <div className="max-w-6xl mx-auto relative z-10">
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                           <div>
                             <h2 className="text-3xl font-bold mb-4">{generatedPage.about.title}</h2>
                             <p className="text-xl text-purple-300 mb-6">{generatedPage.about.subtitle}</p>
                             <p className="text-gray-300 mb-8 leading-relaxed">{generatedPage.about.description}</p>
                             <div className="grid grid-cols-3 gap-6">
                               {generatedPage.about.stats?.map((stat: any, index: number) => (
                                 <div key={index} className="text-center bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                                   <div className="text-2xl font-bold text-purple-300">{stat.number}</div>
                                   <div className="text-sm text-gray-400">{stat.label}</div>
                                 </div>
                               ))}
                             </div>
                           </div>
                           <div className="bg-white/5 backdrop-blur-sm rounded-lg h-64 flex items-center justify-center border border-white/10">
                             <span className="text-purple-300">📸 {generatedPage.about.image}</span>
                           </div>
                         </div>
                       </div>
                     </section>
                   )}

                   {/* Work Process Section - תהליך העבודה */}
                   {generatedPage.process && (
                     <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-10 left-10 w-32 h-32 border border-purple-400/30 rounded-full"></div>
                         <div className="absolute top-40 right-20 w-20 h-20 border border-indigo-400/20 rounded-full"></div>
                         <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-purple-300/20 rounded-full"></div>
                       </div>
                       
                       <div className="max-w-6xl mx-auto text-center relative z-10">
                         {generatedPage.process.badge && (
                           <div className="inline-block bg-purple-500/20 text-purple-300 rounded-full px-6 py-2 mb-6 border border-purple-400/30">
                             <span className="text-sm font-medium">{generatedPage.process.badge}</span>
                           </div>
                         )}
                         <h2 className="text-4xl font-bold mb-6">{generatedPage.process.title}</h2>
                         {generatedPage.process.subtitle && (
                           <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">{generatedPage.process.subtitle}</p>
                         )}
                         
                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                           {generatedPage.process.steps?.map((step: any, index: number) => (
                             <div key={index} className="group relative">
                               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                               <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                                 <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                   <span className="text-2xl font-bold text-white">{index + 1}</span>
                                 </div>
                                 <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">{step.title}</h3>
                                 <p className="text-gray-300 leading-relaxed mb-4">{step.description}</p>
                                 {step.duration && (
                                   <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
                                     📅 {step.duration}
                                   </div>
                                 )}
                               </div>
                               {/* Connection line for desktop */}
                               {index < generatedPage.process.steps.length - 1 && (
                                 <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                               )}
                             </div>
                           ))}
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
                    <section className="py-16 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400/30 rounded-full"></div>
                        <div className="absolute bottom-10 right-20 w-24 h-24 border border-indigo-400/20 rounded-full"></div>
                      </div>
                      <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl font-bold mb-12">{generatedPage.testimonials.title}</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                          {generatedPage.testimonials.testimonials?.map((testimonial: any, index: number) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                              <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i}>⭐</span>
                                ))}
                              </div>
                              <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                              <div className="font-semibold text-purple-300">{testimonial.name}</div>
                              <div className="text-gray-400 text-sm">{testimonial.role}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Pricing Section */}
                  {generatedPage.pricing && (
                    <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-10 w-28 h-28 border border-purple-400/30 rounded-full"></div>
                        <div className="absolute bottom-20 left-10 w-36 h-36 border border-indigo-400/20 rounded-full"></div>
                      </div>
                      <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl font-bold mb-12">{generatedPage.pricing.title}</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                          {generatedPage.pricing.plans?.map((plan: any, index: number) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                              <h3 className="text-xl font-bold mb-4 text-purple-300">{plan.name}</h3>
                              <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                              <ul className="space-y-3 mb-8">
                                {plan.features?.map((feature: string, featureIndex: number) => (
                                  <li key={featureIndex} className="flex items-center text-gray-300">
                                    <span className="text-green-400 mr-2">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
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
                    <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-20 w-40 h-40 border border-purple-400/30 rounded-full"></div>
                        <div className="absolute bottom-20 right-10 w-32 h-32 border border-indigo-400/20 rounded-full"></div>
                      </div>
                      <div className="max-w-6xl mx-auto text-center relative z-10">
                        {generatedPage.gallery.badge && (
                          <div className="inline-block bg-purple-500/20 text-purple-300 rounded-full px-4 py-2 mb-6 border border-purple-400/30">
                            <span className="text-sm font-medium">{generatedPage.gallery.badge}</span>
                          </div>
                        )}
                        <h2 className="text-4xl font-bold mb-6">{generatedPage.gallery.title}</h2>
                        {generatedPage.gallery.subtitle && (
                          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">{generatedPage.gallery.subtitle}</p>
                        )}
                        <div className={`grid gap-6 ${generatedPage.gallery.columns === 4 ? 'grid-cols-2 md:grid-cols-4' : generatedPage.gallery.columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                          {generatedPage.gallery.images?.map((image: any, index: number) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-md border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:-translate-y-2">
                              <img src={image.src} alt={image.alt || `תמונה ${index + 1}`} className="w-full h-64 object-cover" />
                              {image.caption && (
                                <div className="p-4 bg-white/5 backdrop-blur-sm">
                                  <p className="text-gray-300">{image.caption}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}



                   {/* Benefits Section */}
                   {generatedPage.benefits && (
                     <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-20 left-20 w-40 h-40 border border-purple-400/30 rounded-full"></div>
                         <div className="absolute top-60 right-32 w-24 h-24 border border-indigo-400/20 rounded-full"></div>
                         <div className="absolute bottom-32 left-1/3 w-32 h-32 border border-purple-300/20 rounded-full"></div>
                       </div>
                       
                       <div className="max-w-6xl mx-auto text-center relative z-10">
                         {generatedPage.benefits.badge && (
                           <div className="inline-block bg-purple-500/20 text-purple-300 rounded-full px-6 py-2 mb-6 border border-purple-400/30">
                             <span className="text-sm font-medium">{generatedPage.benefits.badge}</span>
                           </div>
                         )}
                         <h2 className="text-4xl font-bold mb-6 text-white">{generatedPage.benefits.title}</h2>
                         {generatedPage.benefits.subtitle && (
                           <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">{generatedPage.benefits.subtitle}</p>
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
                               <div key={index} className="group relative">
                                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                                 <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                                   <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                     <span className="text-2xl text-white">{getIcon(item.icon)}</span>
                                   </div>
                                   <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
                                   <p className="text-gray-300 leading-relaxed">{item.description}</p>
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
                     <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-10 left-10 w-32 h-32 border border-purple-400/30 rounded-full"></div>
                         <div className="absolute bottom-20 right-20 w-40 h-40 border border-indigo-400/20 rounded-full"></div>
                         <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-purple-300/20 rounded-full"></div>
                       </div>
                       
                       <div className="max-w-4xl mx-auto relative z-10">
                         <div className="text-center mb-12">
                           {generatedPage.faq.badge && (
                             <div className="inline-block bg-purple-500/20 text-purple-300 rounded-full px-6 py-2 mb-6 border border-purple-400/30">
                               <span className="text-sm font-medium">{generatedPage.faq.badge}</span>
                             </div>
                           )}
                           <h2 className="text-4xl font-bold mb-6 text-white">{generatedPage.faq.title}</h2>
                           {generatedPage.faq.subtitle && (
                             <p className="text-xl text-gray-300 max-w-3xl mx-auto">{generatedPage.faq.subtitle}</p>
                           )}
                         </div>
                         <div className="space-y-6">
                           {generatedPage.faq.items?.map((item: any, index: number) => (
                             <div key={index} className="group relative">
                               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                               <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                                 <div className="flex items-start gap-4">
                                   <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                     {index + 1}
                                   </div>
                                   <div className="flex-1">
                                     <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                                       {item.question}
                                     </h3>
                                     <p className="text-gray-300 leading-relaxed">
                                       {item.answer}
                                     </p>
                                   </div>
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
                     <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 text-white relative overflow-hidden">
                       {/* Background Pattern */}
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-10 left-10 w-32 h-32 border border-purple-400/30 rounded-full"></div>
                         <div className="absolute bottom-10 right-10 w-24 h-24 border border-indigo-400/20 rounded-full"></div>
                       </div>
                       <div className="max-w-4xl mx-auto text-center relative z-10">
                         <div className="flex justify-center gap-6 flex-wrap">
                           {generatedPage.socialBar.platforms.map((platform: any, index: number) => {
                             const getIcon = (name: string) => {
                               switch(name.toLowerCase()) {
                                 case 'facebook': return (
                                   <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                   </svg>
                                 );
                                 case 'instagram': return (
                                   <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.388a5.564 5.564 0 0 0-2.019 1.313A5.564 5.564 0 0 0 1.688 3.72c-.184.5-.306 1.074-.34 2.021C1.313 6.689 1.3 7.096 1.3 10.717s.013 4.028.048 4.976c.034.947.156 1.521.34 2.021a5.564 5.564 0 0 0 1.313 2.019 5.564 5.564 0 0 0 2.019 1.313c.5.184 1.074.306 2.021.34.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.021-.34a5.564 5.564 0 0 0 2.019-1.313 5.564 5.564 0 0 0 1.313-2.019c.184-.5.306-1.074.34-2.021.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.34-2.021a5.564 5.564 0 0 0-1.313-2.019A5.564 5.564 0 0 0 16.037 1.688c-.5-.184-1.074-.306-2.021-.34C13.068.013 12.661 0 12.017 0zm0 1.982c3.573 0 4.002.014 5.42.048.874.04 1.35.187 1.666.31.419.163.717.358 1.031.672.315.315.51.613.672 1.031.123.317.27.793.31 1.666.034 1.418.048 1.847.048 5.42s-.014 4.002-.048 5.42c-.04.874-.187 1.35-.31 1.666-.163.419-.358.717-.672 1.031a2.78 2.78 0 0 1-1.031.672c-.317.123-.793.27-1.666.31-1.418.034-1.847.048-5.42.048s-4.002-.014-5.42-.048c-.874-.04-1.35-.187-1.666-.31a2.78 2.78 0 0 1-1.031-.672 2.78 2.78 0 0 1-.672-1.031c-.123-.317-.27-.793-.31-1.666-.034-1.418-.048-1.847-.048-5.42s.014-4.002.048-5.42c.04-.874.187-1.35.31-1.666.163-.419.358-.717.672-1.031a2.78 2.78 0 0 1 1.031-.672c.317-.123.793-.27 1.666-.31 1.418-.034 1.847-.048 5.42-.048z"/>
                                     <path d="M12.017 15.33a4.313 4.313 0 1 1 0-8.627 4.313 4.313 0 0 1 0 8.627zm0-6.944a2.631 2.631 0 1 0 0 5.262 2.631 2.631 0 0 0 0-5.262zm5.169-.623a1.008 1.008 0 1 1-2.016 0 1.008 1.008 0 0 1 2.016 0z"/>
                                   </svg>
                                 );
                                 case 'linkedin': return (
                                   <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                   </svg>
                                 );
                                 case 'whatsapp': return (
                                   <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                                   </svg>
                                 );
                                 case 'twitter': return (
                                   <svg className="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                   </svg>
                                 );
                                 case 'youtube': return (
                                   <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                   </svg>
                                 );
                                 case 'tiktok': return (
                                   <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                   </svg>
                                 );
                                 default: return (
                                   <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                     <path d="M13.372 2.094a10.003 10.003 0 0 0-6.744 0C4.72 2.522 3.5 4.617 3.5 7v10c0 2.383 1.22 4.478 3.128 4.906a10.003 10.003 0 0 0 6.744 0C15.28 21.478 16.5 19.383 16.5 17V7c0-2.383-1.22-4.478-3.128-4.906ZM12 4a8 8 0 0 1 2.92.547C15.54 4.773 16 5.8 16 7v10c0 1.2-.46 2.227-1.08 2.453a8.001 8.001 0 0 1-5.84 0C8.46 19.227 8 18.2 8 17V7c0-1.2.46-2.227 1.08-2.453A8 8 0 0 1 12 4Z"/>
                                   </svg>
                                 );
                               }
                             };
                             
                             return (
                               <a 
                                 key={index} 
                                 href={platform.url || '#'} 
                                 className="group bg-white/5 hover:bg-white/10 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center gap-2 border border-white/10 backdrop-blur-sm"
                                 aria-label={platform.label}
                               >
                                 <div className="text-white">{getIcon(platform.name)}</div>
                                 <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                   {platform.name}
                                 </span>
                               </a>
                             );
                           })}
                         </div>
                         <div className="mt-8 text-gray-300 text-sm">
                           <p>🚀 הצטרפו לקהילה שלנו ברשתות החברתיות לעדכונים ותכנים בלעדיים</p>
                         </div>
                       </div>
                     </section>
                   )}

                  {/* Contact Section */}
                  {generatedPage.contact && (
                    <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-40 h-40 border border-purple-400/30 rounded-full"></div>
                        <div className="absolute bottom-20 right-20 w-32 h-32 border border-indigo-400/20 rounded-full"></div>
                      </div>
                      <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold mb-4">{generatedPage.contact.title}</h2>
                          <p className="text-xl text-gray-300 mb-2">{generatedPage.contact.subtitle}</p>
                          <p className="text-gray-400">{generatedPage.contact.description}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                          {/* Contact Form */}
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                            <form className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">{generatedPage.contact.form?.nameLabel}</label>
                                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">{generatedPage.contact.form?.emailLabel}</label>
                                <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">{generatedPage.contact.form?.phoneLabel}</label>
                                <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">{generatedPage.contact.form?.messageLabel}</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"></textarea>
                              </div>
                              <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                                {generatedPage.contact.form?.submitText}
                              </button>
                            </form>
                          </div>
                          {/* Contact Info */}
                          <div className="space-y-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                              <h3 className="font-semibold mb-4 text-purple-300">פרטי יצירת קשר</h3>
                              <div className="space-y-3">
                                <div className="flex items-center text-gray-300">
                                  <span className="mr-3 text-purple-400">📍</span>
                                  <span>{generatedPage.contact.info?.address}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <span className="mr-3 text-purple-400">📞</span>
                                  <span>{generatedPage.contact.info?.phone}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <span className="mr-3 text-purple-400">✉️</span>
                                  <span>{generatedPage.contact.info?.email}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                  <span className="mr-3 text-purple-400">🕒</span>
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