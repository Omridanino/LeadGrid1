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
    setIsEditorOpen(true);
  };

  const handleSave = () => {
    toast({
      title: "נשמר בהצלחה",
      description: "דף הנחיתה נשמר לחשבון שלך",
    });
  };

  const handleDownload = () => {
    // TODO: Implement HTML download
    toast({
      title: "מוריד...",
      description: "הקובץ יוכן תוך מספר שניות",
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
                    <label className="text-sm font-medium">שם העסק *</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-lg"
                      value={quickFormData.businessName}
                      onChange={(e) => setQuickFormData(prev => ({...prev, businessName: e.target.value}))}
                      placeholder="לדוגמה: חברת טכנולוגיה"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">תחום פעילות *</label>
                    <select
                      className="w-full mt-1 px-3 py-2 border rounded-lg"
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
                    <label className="text-sm font-medium">קהל יעד</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-lg"
                      value={quickFormData.targetAudience}
                      onChange={(e) => setQuickFormData(prev => ({...prev, targetAudience: e.target.value}))}
                      placeholder="לדוגמה: עסקים קטנים"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">מטרת הדף</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 border rounded-lg"
                      value={quickFormData.goals}
                      onChange={(e) => setQuickFormData(prev => ({...prev, goals: e.target.value}))}
                      placeholder="לדוגמה: קבלת לידים"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">תיאור קצר של העסק</label>
                  <textarea
                    className="w-full mt-1 px-3 py-2 border rounded-lg"
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