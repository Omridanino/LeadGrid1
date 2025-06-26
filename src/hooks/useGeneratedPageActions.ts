import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ColorScheme } from "@/components/ColorEditor";
import { generateHtmlFile } from "@/utils/htmlGenerator";
import { getHeroImageUrl } from "@/utils/heroImageUtils";

interface UseGeneratedPageActionsProps {
  isSaved: boolean;
  setIsSaved: (saved: boolean) => void;
  setShowAdvancedEditor: (show: boolean) => void;
  showAdvancedEditor: boolean;
  setShowDesignEditor: (show: boolean) => void;
  showDesignEditor: boolean;
  setShowWordPressGuide: (show: boolean) => void;
  setGeneratedContent: (content: any) => void;
  generateCreativeContent: () => any;
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
}

export const useGeneratedPageActions = ({
  isSaved,
  setIsSaved,
  setShowAdvancedEditor,
  showAdvancedEditor,
  setShowDesignEditor,
  showDesignEditor,
  setShowWordPressGuide,
  setGeneratedContent,
  generateCreativeContent,
  content,
  currentColors,
  formData,
  heroImage
}: UseGeneratedPageActionsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleColorChange = (newColors: ColorScheme) => {
    setIsSaved(false);
    toast({
      title: "🎨 צבעים עודכנו!",
      description: "הצבעים החדשים הוחלו על הדף",
    });
  };

  const handleSaveDesign = () => {
    // Auto-generate clean HTML that matches the preview exactly
    const heroUrl = getHeroImageUrl(content, heroImage, formData);
    const updatedHtmlContent = generateHtmlFile(content, currentColors, formData, heroUrl);
    
    // Store the generated HTML for download
    localStorage.setItem('latestHtmlContent', updatedHtmlContent);
    localStorage.setItem('latestFormData', JSON.stringify(formData));
    localStorage.setItem('latestColors', JSON.stringify(currentColors));
    localStorage.setItem('latestContent', JSON.stringify(content));
    
    setIsSaved(true);
    toast({
      title: "💾 העיצוב נשמר בהצלחה!",
      description: "קוד HTML מעודכן נוצר אוטומטית - כעת תוכל להוריד או לחבר לוורדפרס",
    });
  };

  const handleAdvancedEdit = () => {
    setShowAdvancedEditor(!showAdvancedEditor);
    setIsSaved(false);
    toast({
      title: "📝 עורך התוכן",
      description: showAdvancedEditor ? "עורך התוכן נסגר" : "עורך התוכן נפתח - עכשיו תוכל לערוך טקסטים ולהוסיף תמונות!",
    });
  };

  const handleWordPressIntegration = () => {
    if (!isSaved) {
      toast({
        title: "⚠️ יש לשמור קודם",
        description: "אנא שמור את העיצוב לפני החיבור לוורדפרס",
        variant: "destructive"
      });
      return;
    }
    setShowWordPressGuide(true);
    toast({
      title: "🔗 אינטגרציה עם WordPress",
      description: "מדריך החיבור נפתח",
    });
  };

  const handleDownloadCode = () => {
    if (!isSaved) {
      toast({
        title: "⚠️ יש לשמור קודם",
        description: "אנא שמור את העיצוב לפני הורדת הקוד",
        variant: "destructive"
      });
      return;
    }
    
    // Use the auto-generated HTML that matches the preview exactly
    const savedHtmlContent = localStorage.getItem('latestHtmlContent');
    let htmlContent;
    
    if (savedHtmlContent) {
      htmlContent = savedHtmlContent;
    } else {
      const heroUrl = getHeroImageUrl(content, heroImage, formData);
      htmlContent = generateHtmlFile(content, currentColors, formData, heroUrl);
    }
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName?.replace(/\s+/g, '_') || 'landing_page'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "💻 קוד המקור הורד!",
      description: "קובץ HTML מלא עם העיצוב המעודכן הורד בהצלחה - זהה לחלוטין לתצוגה המקדימה",
    });
  };

  const handleRegenerate = () => {
    toast({
      title: "🔄 יוצר דף חדש...",
      description: "יוצר גרסה חדשה עם תוכן משופר",
    });
    
    const newContent = generateCreativeContent();
    setGeneratedContent(newContent);
    setIsSaved(false);
    
    toast({
      title: "✨ דף חדש נוצר!",
      description: "הדף עודכן בהצלחה עם תוכן חדש ויצירתי המבוסס על השאלון",
    });
  };

  const handleDesignEdit = () => {
    setShowDesignEditor(!showDesignEditor);
    setIsSaved(false);
    toast({
      title: "🎨 עורך העיצוב",
      description: showDesignEditor ? "עורך העיצוב נסגר" : "עורך העיצוב נפתח",
    });
  };

  const generateHtmlFileWrapper = () => {
    // שימוש בקוד המעודכן אם קיים
    const savedHtmlContent = localStorage.getItem('latestHtmlContent');
    if (savedHtmlContent && isSaved) {
      return savedHtmlContent;
    }
    
    const heroUrl = getHeroImageUrl(content, heroImage, formData);
    return generateHtmlFile(content, currentColors, formData, heroUrl);
  };

  return {
    handleColorChange,
    handleSaveDesign,
    handleAdvancedEdit,
    handleWordPressIntegration,
    handleDownloadCode,
    handleRegenerate,
    handleDesignEdit,
    generateHtmlFile: generateHtmlFileWrapper,
    onNavigateBack: () => navigate('/')
  };
};
