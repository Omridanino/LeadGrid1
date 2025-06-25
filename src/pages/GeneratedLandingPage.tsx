import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { ColorScheme } from "@/components/ColorEditor";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import GeneratedPageHeader from "@/components/GeneratedPageHeader";
import LandingPagePreview from "@/components/LandingPagePreview";
import OptionsPanel from "@/components/OptionsPanel";
import { Button } from "@/components/ui/button";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

const GeneratedLandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showSidePanel, setShowSidePanel] = useState(true);
  const [showWordPressGuide, setShowWordPressGuide] = useState(false);
  const [showDesignEditor, setShowDesignEditor] = useState(false);
  const [showAdvancedEditor, setShowAdvancedEditor] = useState(false);
  const [currentColors, setCurrentColors] = useState<ColorScheme>({
    primary: "#3b82f6",
    secondary: "#8b5cf6", 
    accent: "#06b6d4",
    background: "#1f2937",
    text: "#ffffff",
    headlineColor: "#ffffff",
    subheadlineColor: "#e0f2fe",
    featuresColor: "#ffffff",
    featuresTextColor: "#e5e7eb",
    aboutColor: "#ffffff",
    aboutTextColor: "#d1d5db",
    contactColor: "#ffffff",
    contactTextColor: "#d1d5db"
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
    toast({
      title: "🎨 צבעים עודכנו!",
      description: "הצבעים החדשים הוחלו על הדף",
    });
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
    
    // Apply questionnaire preferences to generation
    const newContent = generateCreativeContent();
    setGeneratedContent(newContent);
    
    toast({
      title: "✨ דף חדש נוצר!",
      description: "הדף עודכן בהצלחה עם תוכן חדש ויצירתי המבוסס על השאלון",
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
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: ${currentColors.background};
            color: ${currentColors.text};
        }
        .hero-section { 
            ${heroImageStyle}
            min-height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 3rem;
            text-align: center;
            position: relative;
        }
        .card-hover { 
            transition: all 0.3s ease; 
            backdrop-filter: blur(10px);
        }
        .card-hover:hover { 
            transform: translateY(-5px) scale(1.02); 
        }
        .cta-button {
            background: ${currentColors.accent || currentColors.primary};
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
            background: rgba(255,255,255,0.05);
            border: 1px solid ${currentColors.primary}66;
            padding: 1.5rem;
            border-radius: 12px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }
        .feature-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .feature-icon {
            width: 32px;
            height: 32px;
            background: ${currentColors.primary};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 1rem;
            flex-shrink: 0;
        }
        .badge {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 8px 16px;
            border-radius: 50px;
            display: inline-block;
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            max-width: 600px;
            margin: 2rem auto 0;
        }
        .stat-card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
        }
        .stat-card:hover {
            background: rgba(255,255,255,0.2);
        }
        .content-section {
            padding: 4rem 2rem;
        }
        .section-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
        }
        .contact-section {
            background: rgba(255,255,255,0.05);
            border: 1px solid ${currentColors.primary}66;
            padding: 2rem;
            border-radius: 16px;
            text-align: center;
        }
        .contact-info {
            background: rgba(0,0,0,0.2);
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) {
            .hero-section { padding: 2rem 1rem; }
            .content-section { padding: 2rem 1rem; }
            .section-grid { grid-template-columns: 1fr; gap: 2rem; }
            .stats-grid { grid-template-columns: 1fr; }
            h1 { font-size: 2rem !important; }
            h2 { font-size: 1.5rem !important; }
        }
    </style>
</head>
<body>
    <section class="hero-section">
        <div class="badge">🚀 ${content.badge || 'הפתרון המתקדם ביותר בשוק'}</div>
        <h1 style="color: ${currentColors.headlineColor}; font-size: 3.5rem; font-weight: bold; margin-bottom: 1.5rem; line-height: 1.2;">${content.headline}</h1>
        <p style="color: ${currentColors.subheadlineColor}; font-size: 1.25rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6;">${content.subheadline}</p>
        <div style="margin-bottom: 2rem;">
            <a href="#contact" class="cta-button">${content.cta}</a>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div style="font-size: 1.5rem; font-weight: bold; color: white; margin-bottom: 0.5rem;">${content.stats?.customers || '10,000+'}</div>
                <div style="color: ${currentColors.subheadlineColor}; font-size: 0.875rem;">לקוחות מרוצים</div>
            </div>
            <div class="stat-card">
                <div style="font-size: 1.5rem; font-weight: bold; color: white; margin-bottom: 0.5rem;">${content.stats?.uptime || '99.9%'}</div>
                <div style="color: ${currentColors.subheadlineColor}; font-size: 0.875rem;">זמינות השירות</div>
            </div>
            <div class="stat-card">
                <div style="font-size: 1.5rem; font-weight: bold; color: white; margin-bottom: 0.5rem;">${content.stats?.support || '24/7'}</div>
                <div style="color: ${currentColors.subheadlineColor}; font-size: 0.875rem;">תמיכה טכנית</div>
            </div>
        </div>
    </section>
    
    <section class="content-section">
        <div class="section-grid">
            <div>
                <h2 style="color: ${currentColors.featuresColor}; font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem; display: flex; align-items: center;">
                    <span style="width: 32px; height: 32px; background: ${currentColors.accent}; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-left: 0.75rem;">⭐</span>
                    ${content.featuresTitle || 'היתרונות שלנו'}
                </h2>
                <div>
                    ${content.features.map((feature: string, index: number) => `
                    <div class="feature-card">
                        <div class="feature-icon">
                            <span style="color: white; font-size: 0.875rem; font-weight: bold;">✓</span>
                        </div>
                        <span style="color: ${currentColors.featuresTextColor}; line-height: 1.5;">${feature}</span>
                    </div>
                    `).join('')}
                </div>
            </div>
            
            <div>
                <h2 style="color: ${currentColors.aboutColor}; font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem; display: flex; align-items: center;">
                    <span style="width: 32px; height: 32px; background: ${currentColors.secondary}; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-left: 0.75rem;">👥</span>
                    ${content.aboutTitle || 'אודותינו'}
                </h2>
                <div style="background: rgba(255,255,255,0.05); border: 1px solid ${currentColors.secondary}66; padding: 1.5rem; border-radius: 12px;">
                    <p style="color: ${currentColors.aboutTextColor}; line-height: 1.6; margin-bottom: 1.5rem;">${content.aboutText}</p>
                    <div style="display: flex; justify-content: center; gap: 2rem; text-align: center;">
                        <div>
                            <div style="color: ${currentColors.text}; font-size: 1.5rem; font-weight: bold;">150+</div>
                            <div style="color: ${currentColors.aboutTextColor}; font-size: 0.875rem; opacity: 0.8;">פרויקטים</div>
                        </div>
                        <div>
                            <div style="color: ${currentColors.text}; font-size: 1.5rem; font-weight: bold;">98%</div>
                            <div style="color: ${currentColors.aboutTextColor}; font-size: 0.875rem; opacity: 0.8;">שביעות רצון</div>
                        </div>
                        <div>
                            <div style="color: ${currentColors.text}; font-size: 1.5rem; font-weight: bold;">5★</div>
                            <div style="color: ${currentColors.aboutTextColor}; font-size: 0.875rem; opacity: 0.8;">דירוג ממוצע</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="contact-section" id="contact">
            <h2 style="color: ${currentColors.contactColor}; font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;">
                <span style="width: 24px; height: 24px; background: ${currentColors.accent}; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-left: 0.75rem;">📈</span>
                ${content.contactTitle || 'צור קשר ותתחיל עוד היום'}
            </h2>
            <div class="contact-info">
                <div style="color: ${currentColors.contactTextColor}; line-height: 1.6; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                    <span style="color: ${currentColors.accent};">📞</span>
                    <span>${formData.contactInfo}</span>
                </div>
            </div>
            <a href="tel:${formData.contactInfo.match(/\d{2,3}-?\d{7,8}/)?.[0] || ''}" class="cta-button" style="font-size: 1.25rem; padding: 12px 32px;">
                צור קשר עכשיו
            </a>
        </div>
    </section>
    
    <script>
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        
        // Animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        document.querySelectorAll('.feature-card, .stat-card').forEach(card => {
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
        <div className="flex gap-4 relative">
          {/* Toggle Button */}
          <Button
            onClick={() => setShowSidePanel(!showSidePanel)}
            className="fixed top-20 left-4 z-50 bg-purple-600 hover:bg-purple-700 rounded-full p-3"
            size="sm"
          >
            {showSidePanel ? <PanelRightClose className="w-5 h-5" /> : <PanelRightOpen className="w-5 h-5" />}
          </Button>

          {/* Main Content */}
          <div className={`transition-all duration-300 ${showSidePanel ? 'w-2/3' : 'w-full'}`}>
            <LandingPagePreview 
              content={content}
              currentColors={currentColors}
              formData={formData}
            />
          </div>

          {/* Side Panel */}
          {showSidePanel && (
            <div className="w-1/3 transition-all duration-300">
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
          )}
        </div>
      </main>
    </div>
  );
};

export default GeneratedLandingPage;
