
import GeneratedPageHeader from "@/components/GeneratedPageHeader";
import LandingPagePreview from "@/components/LandingPagePreview";
import FullScreenPreview from "@/components/FullScreenPreview";
import { Button } from "@/components/ui/button";
import { Save, CheckCircle } from "lucide-react";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { generateHtmlFile } from "@/utils/htmlGenerator";
import { getHeroImageUrl } from "@/utils/heroImageUtils";

const GeneratedLandingPage = () => {
  const [showFullScreenPreview, setShowFullScreenPreview] = useState(false);
  const state = useGeneratedPageState();
  const location = useLocation();
  const { toast } = useToast();
  
  // Initialize content generation
  const { generateCreativeContent, setGeneratedContent } = useContentGeneration(state.formData);
  
  // Get formData from navigation state or use existing formData
  useEffect(() => {
    if (location.state?.formData && !state.formData) {
      console.log("Setting formData from navigation:", location.state.formData);
      state.setFormData(location.state.formData);
    }
  }, [location.state, state.formData]);

  // Generate content when formData is available
  useEffect(() => {
    if (state.formData && !state.content) {
      console.log("Generating content for formData:", state.formData);
      const newContent = generateCreativeContent();
      console.log("Generated content:", newContent);
      state.setContent(newContent);
      setGeneratedContent(newContent);
    }
  }, [state.formData, state.content, generateCreativeContent, setGeneratedContent]);

  const handleSaveDesign = () => {
    // יצירת HTML שזהה בדיוק לתצוגה באמצעות אותה פונקציה
    const heroUrl = getHeroImageUrl(state.content, state.heroImage, state.formData);
    const updatedHtmlContent = generateHtmlFile(state.content, state.currentColors, state.formData, heroUrl);
    
    // שמירת ה-HTML המעודכן להורדה
    localStorage.setItem('latestHtmlContent', updatedHtmlContent);
    localStorage.setItem('latestFormData', JSON.stringify(state.formData));
    localStorage.setItem('latestColors', JSON.stringify(state.currentColors));
    localStorage.setItem('latestContent', JSON.stringify(state.content));
    
    state.setIsSaved(true);
    toast({
      title: "💾 העיצוב נשמר בהצלחה!",
      description: "קוד HTML מעודכן נוצר - זהה 100% לתצוגה המקדימה",
    });
  };

  const handleDownloadCode = () => {
    if (!state.isSaved) {
      toast({
        title: "⚠️ יש לשמור קודם",
        description: "אנא שמור את העיצוב לפני הורדת הקוד",
        variant: "destructive"
      });
      return;
    }
    
    // שימוש ב-HTML המעודכן שנוצר בעת השמירה - זהה לחלוטין לתצוגה
    const savedHtmlContent = localStorage.getItem('latestHtmlContent');
    let htmlContent;
    
    if (savedHtmlContent) {
      htmlContent = savedHtmlContent;
    } else {
      // גיבוי - יצירת HTML מחדש אם לא קיים בזיכרון
      const heroUrl = getHeroImageUrl(state.content, state.heroImage, state.formData);
      htmlContent = generateHtmlFile(state.content, state.currentColors, state.formData, heroUrl);
    }
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${state.formData.businessName?.replace(/\s+/g, '_') || 'landing_page'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "💻 קוד המקור הורד!",
      description: "קובץ HTML מלא הורד בהצלחה - זהה לחלוטין לתצוגה המקדימה",
    });
  };

  // Convert PageElement[] to string[] for elements prop
  const elementsAsStrings = state.elements?.map(element => 
    typeof element === 'string' ? element : element.type || ''
  ).filter(Boolean) || [];

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <GeneratedPageHeader 
        onNavigateBack={() => window.location.href = '/'}
        onDownloadCode={handleDownloadCode}
        onPreviewFullScreen={() => setShowFullScreenPreview(true)}
      />

      {/* Full Screen Preview */}
      <FullScreenPreview
        content={state.content}
        currentColors={state.currentColors}
        formData={state.formData}
        heroImage={state.heroImage}
        isOpen={showFullScreenPreview}
        onClose={() => setShowFullScreenPreview(false)}
      />

      {/* Save Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={handleSaveDesign}
          className={`${state.isSaved ? 'bg-green-600 hover:bg-green-700' : 'bg-purple-600 hover:bg-purple-700'} rounded-full p-3`}
          size="sm"
        >
          {state.isSaved ? <CheckCircle className="w-5 h-5" /> : <Save className="w-5 h-5" />}
        </Button>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="w-full">
          {/* Main Content - Full Width */}
          <LandingPagePreview 
            content={state.content}
            currentColors={state.currentColors}
            formData={state.formData}
            heroImage={state.heroImage}
            elements={elementsAsStrings}
          />
        </div>
      </main>
    </div>
  );
};

export default GeneratedLandingPage;
