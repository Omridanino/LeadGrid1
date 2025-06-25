import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ColorScheme } from "@/components/ColorEditor";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import GeneratedPageHeader from "@/components/GeneratedPageHeader";
import LandingPagePreview from "@/components/LandingPagePreview";
import OptionsPanel from "@/components/OptionsPanel";

const GeneratedLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  const [showDesignEditor, setShowDesignEditor] = useState(false);
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false);
  const [currentColors, setCurrentColors] = useState<ColorScheme>({
    primary: "#3b82f6",
    secondary: "#8b5cf6", 
    accent: "#06b6d4",
    background: "#1f2937",
    text: "#ffffff"
  });
  
  const [formData, setFormData] = useState(location.state?.formData || {
    businessName: "העסק שלי",
    businessType: "שירותים עסקיים",
    targetAudience: "לקוחות פוטנציאליים",
    mainGoal: "הגדלת מכירות",
    keyFeatures: "שירות מקצועי, מהירות, אמינות",
    brandColors: "כחול וכסף",
    contactInfo: "טלפון: 050-1234567\nאימייל: info@business.co.il"
  });

  const { generatedContent, setGeneratedContent, generateCreativeContent } = useContentGeneration(formData);

  // Initialize content
  useState(() => {
    if (!generatedContent) {
      setGeneratedContent(generateCreativeContent());
    }
  });

  const content = generatedContent || generateCreativeContent();

  const handleColorChange = (newColors: ColorScheme) => {
    setCurrentColors(newColors);
    // Apply colors to the preview immediately
    const preview = document.querySelector('.landing-preview');
    if (preview) {
      const style = preview as HTMLElement;
      style.style.setProperty('--primary-color', newColors.primary);
      style.style.setProperty('--secondary-color', newColors.secondary);
      style.style.setProperty('--accent-color', newColors.accent);
      style.style.setProperty('--bg-color', newColors.background);
      style.style.setProperty('--text-color', newColors.text);
    }
  };

  const handleAdvancedEdit = () => {
    setShowAdvancedEditor(!showAdvancedEditor);
    toast({
      title: "📝 עורך התוכן",
      description: showAdvancedEditor ? "עורך התוכן נסגר" : "עורך התוכן נפתח - עכשיו תוכל לערוך טקסטים ולהוסיף תמונות!",
    });
  };

  const handleWordPressIntegration = () => {
    setShowWordPressGuide(true);
    toast({
      title: "🔗 אינטגרציה עם WordPress",
      description: "מדריך החיבור נפתח",
    });
  };

  const handleDownloadCode = () => {
    const htmlContent = generateHtmlFile();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.businessName.replace(/\s+/g, '_')}_landing_page.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "💻 קוד המקור הורד!",
      description: "קובץ HTML מלא עם כל הקוד הורד בהצלחה",
    });
  };

  const handleRegenerate = () => {
    toast({
      title: "🔄 יוצר דף חדש...",
      description: "יוצר גרסה חדשה עם תוכן משופר",
    });
    
    // Regenerate content with new creativity
    const newContent = generateCreativeContent();
    setGeneratedContent(newContent);
    
    toast({
      title: "✨ דף חדש נוצר!",
      description: "הדף עודכן בהצלחה עם תוכן חדש ויצירתי",
    });
  };

  const handleDesignEdit = () => {
    setShowDesignEditor(!showDesignEditor);
    toast({
      title: "🎨 עורך העיצוב",
      description: showDesignEditor ? "עורך העיצוב נסגר" : "עורך העיצוב נפתח",
    });
  };

  const generateHtmlFile = () => {
    const heroImageStyle = content.heroImage 
      ? `background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${content.heroImage}') center/cover;`
      : `background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);`;

    return `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.businessName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --primary-color: ${currentColors.primary};
            --secondary-color: ${currentColors.secondary};
            --accent-color: ${currentColors.accent};
            --bg-color: ${currentColors.background};
            --text-color: ${currentColors.text};
        }
        .custom-gradient { 
            ${heroImageStyle}
        }
        .card-hover { 
            transition: all 0.3s ease; 
            backdrop-filter: blur(10px);
        }
        .card-hover:hover { 
            transform: translateY(-10px) scale(1.02); 
        }
    </style>
</head>
<body style="background: var(--bg-color); color: var(--text-color);">
    <header class="custom-gradient py-20 text-center">
        <div class="container mx-auto px-4">
            <h1 class="text-6xl font-bold mb-6">${content.headline}</h1>
            <p class="text-xl mb-8">${content.subheadline}</p>
            <button class="px-8 py-4 rounded-xl text-lg font-semibold" style="background: var(--accent-color); color: white;">
                ${content.cta}
            </button>
        </div>
    </header>
    
    <section class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-16 text-center">למה לבחור בנו?</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${content.features.map((feature: string, index: number) => `
                <div class="card-hover p-8 rounded-2xl border" style="background: rgba(255,255,255,0.1); border-color: var(--primary-color);">
                    <h3 class="text-xl font-semibold mb-4">${feature}</h3>
                    <p style="color: var(--text-color); opacity: 0.8;">פתרון מקצועי ומתקדם המותאם בדיוק לצרכים שלכם.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <section class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-8">אודותינו</h2>
            <p class="text-lg leading-relaxed">${content.aboutText}</p>
        </div>
    </section>
    
    <section class="py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-8">צור קשר</h2>
            <div class="whitespace-pre-line mb-6">${formData.contactInfo}</div>
            <button class="px-8 py-4 rounded-xl text-lg font-semibold" style="background: var(--primary-color); color: white;">
                צור קשר עכשיו
            </button>
        </div>
    </section>
</body>
</html>`;
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <GeneratedPageHeader 
        onNavigateBack={() => navigate('/')}
        onRegenerate={handleRegenerate}
        onDownloadCode={handleDownloadCode}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LandingPagePreview 
              content={content}
              currentColors={currentColors}
              formData={formData}
            />
          </div>

          <OptionsPanel 
            showDesignEditor={showDesignEditor}
            showWordPressGuide={showWordPressGuide}
            showAdvancedEditor={showAdvancedEditor}
            onColorChange={handleColorChange}
            onDesignEdit={handleDesignEdit}
            onWordPressIntegration={handleWordPressIntegration}
            onAdvancedEdit={handleAdvancedEdit}
            generateHtmlFile={generateHtmlFile}
            content={content}
            onContentChange={setGeneratedContent}
            formData={formData}
            onFormDataChange={setFormData}
          />
        </div>
      </main>
    </div>
  );
};

export default GeneratedLandingPage;
