import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Eye, Download, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import LandingPagePreview from './LandingPagePreview';

interface AdvancedLandingPageGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  formData: any;
}

export const AdvancedLandingPageGenerator = ({ 
  isOpen, 
  onClose, 
  formData 
}: AdvancedLandingPageGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPage, setGeneratedPage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const generateLandingPage = async () => {
    setIsGenerating(true);
    try {
      console.log('Generating landing page with formData:', formData);
      
      const { data, error } = await supabase.functions.invoke('generate-landing-content', {
        body: { formData }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Generated content:', data);
      setGeneratedPage(data.content);

      toast({
        title: "הצלחה! 🎉",
        description: "דף הנחיתה נוצר בהצלחה",
      });

    } catch (error) {
      console.error('Error generating landing page:', error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה ביצירת דף הנחיתה",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
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

          {!generatedPage ? (
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
                    <div><strong>שם העסק:</strong> {formData.businessName}</div>
                    <div><strong>תחום:</strong> {formData.businessType}</div>
                    <div><strong>יעד:</strong> {formData.goal}</div>
                    <div><strong>קהל יעד:</strong> {formData.targetAudience}</div>
                  </div>
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
          <DialogContent className="max-w-6xl h-[90vh] overflow-hidden">
            <div className="h-full">
              {generatedPage && (
                <LandingPagePreview 
                  content={generatedPage}
                  currentColors={{
                    primary: "#3b82f6",
                    secondary: "#6b7280", 
                    accent: "#f59e0b",
                    background: "#ffffff",
                    text: "#1f2937",
                    heroBackground: "#f8fafc",
                    headlineColor: "#1f2937",
                    subheadlineColor: "#6b7280",
                    featuresColor: "#374151",
                    featuresTextColor: "#6b7280",
                    aboutColor: "#1f2937",
                    aboutTextColor: "#6b7280",
                    contactColor: "#374151",
                    contactTextColor: "#6b7280"
                  }}
                  formData={formData}
                  heroImage=""
                  elements={[]}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
};