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
      : `background: linear-gradient(135deg, ${currentColors.primary} 0%, ${currentColors.secondary} 50%, ${currentColors.accent} 100%);`;

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
            --headline-color: ${currentColors.headlineColor || '#ffffff'};
            --subheadline-color: ${currentColors.subheadlineColor || '#e0f2fe'};
            --features-color: ${currentColors.featuresColor || '#ffffff'};
            --about-color: ${currentColors.aboutColor || '#ffffff'};
            --contact-color: ${currentColors.contactColor || '#ffffff'};
        }
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
        .cta-button {
            background: var(--accent-color);
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            margin: 0 10px 10px 0;
        }
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            color: white;
        }
        .feature-card {
            background: rgba(255,255,255,0.1);
            border: 1px solid var(--primary-color);
            padding: 2rem;
            border-radius: 15px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
            .grid-responsive {
                grid-template-columns: 1fr !important;
            }
            .text-responsive {
                font-size: 2rem !important;
            }
        }
    </style>
</head>
<body style="background: var(--bg-color); color: var(--text-color);">
    <header class="custom-gradient py-20 text-center">
        <div class="container mx-auto px-4">
            <div class="bg-white bg-opacity-20 text-white border border-white border-opacity-30 text-lg px-4 py-2 rounded-full inline-block mb-6">
                🚀 הפתרון המתקדם ביותר בשוק
            </div>
            <h1 class="text-6xl text-responsive font-bold mb-6" style="color: var(--headline-color);">${content.headline}</h1>
            <p class="text-xl mb-8 max-w-2xl mx-auto" style="color: var(--subheadline-color);">${content.subheadline}</p>
            <div class="mb-8">
                <a href="#contact" class="cta-button">${content.cta}</a>
                <a href="#about" class="cta-button" style="background: transparent; border: 2px solid white;">צפה בדמו</a>
            </div>
            
            <!-- Stats Section -->
            <div class="grid grid-cols-3 gap-6 mt-8 max-w-2xl mx-auto">
                <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl">
                    <div class="text-2xl font-bold text-white mb-1">10,000+</div>
                    <div class="text-blue-200 text-sm">לקוחות מרוצים</div>
                </div>
                <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl">
                    <div class="text-2xl font-bold text-white mb-1">99.9%</div>
                    <div class="text-blue-200 text-sm">זמינות השירות</div>
                </div>
                <div class="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-xl">
                    <div class="text-2xl font-bold text-white mb-1">24/7</div>
                    <div class="text-blue-200 text-sm">תמיכה טכנית</div>
                </div>
            </div>
        </div>
    </header>
    
    <section class="py-20" id="about">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold mb-16 text-center" style="color: var(--features-color);">למה לבחור בנו?</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 grid-responsive">
                ${content.features.map((feature: string, index: number) => `
                <div class="feature-card">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style="background: var(--primary-color);">
                        <span class="text-white font-bold">${index + 1}</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-4 text-center">${feature}</h3>
                    <p style="color: var(--text-color); opacity: 0.8; text-align: center;">פתרון מקצועי ומתקדם המותאם בדיוק לצרכים שלכם.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <section class="py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-8" style="color: var(--about-color);">אודותינו</h2>
            <div class="max-w-4xl mx-auto bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-sm">
                <p class="text-lg leading-relaxed mb-8">${content.aboutText}</p>
                <div class="grid grid-cols-3 gap-8">
                    <div>
                        <div class="text-3xl font-bold text-white mb-2">150+</div>
                        <div class="text-blue-300">פרויקטים</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-white mb-2">98%</div>
                        <div class="text-blue-300">שביעות רצון</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-white mb-2">5★</div>
                        <div class="text-blue-300">דירוג ממוצע</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="py-20" id="contact">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-8" style="color: var(--contact-color);">צור קשר ותתחיל עוד היום</h2>
            <div class="max-w-2xl mx-auto bg-white bg-opacity-5 p-8 rounded-2xl backdrop-blur-sm mb-8">
                <div class="whitespace-pre-line mb-6 text-lg">${formData.contactInfo}</div>
            </div>
            <a href="tel:${formData.contactInfo.match(/\d{2,3}-?\d{7,8}/)?.[0] || ''}" class="cta-button text-xl px-8 py-4">
                צור קשר עכשיו
            </a>
        </div>
    </section>
    
    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe all feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    </script>
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
