import { ColorScheme } from "@/types/colors";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Save, X, Palette } from "lucide-react";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
  onFormDataUpdate?: (updatedData: any) => void;
  onContentUpdate?: (updatedContent: any) => void;
}

const LandingPagePreview = ({ 
  content, 
  currentColors, 
  formData, 
  heroImage, 
  elements, 
  onFormDataUpdate, 
  onContentUpdate 
}: LandingPagePreviewProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isColorEditing, setIsColorEditing] = useState(false);
  const [editableContent, setEditableContent] = useState({
    businessName: formData?.businessName || 'עסק חדש',
    headline: formData?.headline || formData?.businessName || 'ברוכים הבאים לעסק שלנו',
    description: formData?.description || 'תיאור מקצועי של העסק שלנו ומה אנחנו מציעים ללקוחותינו',
    subheadline: formData?.subheadline || 'פתרונות מתקדמים ואיכותיים במחירים הוגנים'
  });

  const [localColors, setLocalColors] = useState(currentColors);

  // Update local content when formData changes
  useEffect(() => {
    if (formData) {
      setEditableContent({
        businessName: formData.businessName || 'עסק חדש',
        headline: formData.headline || formData.businessName || 'ברוכים הבאים לעסק שלנו',
        description: formData.description || 'תיאור מקצועי של העסק שלנו ומה אנחנו מציעים ללקוחותינו',
        subheadline: formData.subheadline || 'פתרונות מתקדמים ואיכותיים במחירים הוגנים'
      });
    }
  }, [formData]);

  // Update local colors when currentColors changes
  useEffect(() => {
    setLocalColors(currentColors);
  }, [currentColors]);

  // Show loading if no formData
  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  // Generate HTML with the actual user data and design
  const generateActualPageHTML = () => {
    const currentContent = isEditing ? editableContent : {
      businessName: formData?.businessName || editableContent.businessName,
      headline: formData?.headline || formData?.businessName || editableContent.headline,
      description: formData?.description || editableContent.description,
      subheadline: formData?.subheadline || editableContent.subheadline
    };

    const colors = isColorEditing ? localColors : currentColors;

    // Generate features section if elements exist
    const featuresSection = elements && elements.length > 0 ? `
      <section style="background: ${colors.background}; padding: 80px 0;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
          <div style="text-align: center; margin-bottom: 64px;">
            <h2 style="font-size: 2.5rem; font-weight: bold; color: ${colors.text}; margin-bottom: 16px;">השירותים שלנו</h2>
            <p style="font-size: 1.25rem; color: ${colors.featuresTextColor || '#d1d5db'};">מה אנחנו מציעים ללקוחותינו</p>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
            ${elements.slice(0, 6).map((element, index) => `
              <div style="background: linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}10); 
                          border: 1px solid ${colors.primary}30; 
                          border-radius: 16px; 
                          padding: 32px; 
                          text-align: center;
                          transition: all 0.3s ease;">
                <div style="width: 64px; height: 64px; background: ${colors.accent}; 
                           border-radius: 50%; margin: 0 auto 24px; 
                           display: flex; align-items: center; justify-content: center;
                           box-shadow: 0 0 20px ${colors.accent}40;">
                  <i style="font-size: 24px; color: white;">★</i>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 600; color: ${colors.text}; margin-bottom: 16px;">${element.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <p style="color: ${colors.featuresTextColor || '#d1d5db'}; line-height: 1.6;">תיאור מקצועי של השירות הזה</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    ` : '';

    // Generate about section
    const aboutSection = `
      <section style="background: linear-gradient(135deg, ${colors.background}, ${colors.primary}10); padding: 80px 0;">
        <div style="max-width: 800px; margin: 0 auto; padding: 0 24px; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: ${colors.aboutColor || colors.text}; margin-bottom: 24px;">אודותינו</h2>
          <p style="font-size: 1.25rem; color: ${colors.aboutTextColor || '#d1d5db'}; line-height: 1.8; margin-bottom: 32px;">
            ${currentContent.description}
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; margin-top: 48px;">
            <div style="text-align: center;">
              <div style="font-size: 2.5rem; font-weight: bold; color: ${colors.accent};">100+</div>
              <div style="color: ${colors.text}; margin-top: 8px;">לקוחות מרוצים</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 2.5rem; font-weight: bold; color: ${colors.accent};">5★</div>
              <div style="color: ${colors.text}; margin-top: 8px;">דירוג ממוצע</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 2.5rem; font-weight: bold; color: ${colors.accent};">24/7</div>
              <div style="color: ${colors.text}; margin-top: 8px;">תמיכה</div>
            </div>
          </div>
        </div>
      </section>
    `;

    // Generate contact section
    const contactSection = `
      <section style="background: ${colors.heroBackground || colors.background}; padding: 80px 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 0 24px; text-align: center;">
          <h2 style="font-size: 2.5rem; font-weight: bold; color: ${colors.contactColor || colors.text}; margin-bottom: 24px;">צור קשר</h2>
          <p style="font-size: 1.25rem; color: ${colors.contactTextColor || '#d1d5db'}; margin-bottom: 32px;">
            מוכנים להתחיל? בואו נדבר ונראה איך אנחנו יכולים לעזור לכם
          </p>
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <button style="background: ${colors.accent}; color: white; padding: 16px 32px; 
                           border: none; border-radius: 8px; font-size: 1.1rem; 
                           font-weight: 600; cursor: pointer; transition: all 0.3s ease;
                           box-shadow: 0 4px 12px ${colors.accent}40;">
              צור קשר עכשיו
            </button>
            <button style="background: transparent; border: 2px solid ${colors.accent}; 
                           color: ${colors.accent}; padding: 14px 32px; 
                           border-radius: 8px; font-size: 1.1rem; font-weight: 600; 
                           cursor: pointer; transition: all 0.3s ease;">
              קבל הצעת מחיר
            </button>
          </div>
        </div>
      </section>
    `;

    return `
      <!DOCTYPE html>
      <html lang="he" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${currentContent.businessName}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            direction: rtl;
            line-height: 1.6;
          }
          .hero-section {
            background: linear-gradient(135deg, ${colors.heroBackground || colors.background}, ${colors.primary});
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          .hero-content {
            text-align: center;
            max-width: 900px;
            padding: 2rem;
            z-index: 10;
          }
          .hero-title {
            font-size: 4rem;
            font-weight: bold;
            color: ${colors.headlineColor || colors.text};
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          .hero-subtitle {
            font-size: 1.5rem;
            color: ${colors.subheadlineColor || '#e0f2fe'};
            margin-bottom: 2rem;
            line-height: 1.6;
          }
          .hero-description {
            font-size: 1.25rem;
            color: ${colors.featuresTextColor || '#d1d5db'};
            margin-bottom: 3rem;
            line-height: 1.8;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          .cta-button {
            background: ${colors.accent};
            color: white;
            padding: 1.2rem 2.5rem;
            border: none;
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 0 0.5rem;
            box-shadow: 0 8px 25px ${colors.accent}40;
          }
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px ${colors.accent}50;
          }
          .cta-secondary {
            background: transparent;
            border: 2px solid ${colors.accent};
            color: ${colors.accent};
          }
          ${isEditing ? `
            .editable {
              outline: 2px dashed #3b82f6;
              outline-offset: 4px;
              cursor: text;
              padding: 8px;
              margin: 4px;
              border-radius: 8px;
              transition: all 0.2s ease;
              position: relative;
            }
            .editable:hover {
              outline-color: #10b981;
              background: rgba(59, 130, 246, 0.1);
            }
            .editable:focus {
              outline: 2px solid #10b981;
              background: rgba(16, 185, 129, 0.1);
            }
          ` : ''}
          
          @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 1.2rem; }
            .hero-description { font-size: 1rem; }
            .hero-content { padding: 1rem; }
            .cta-button { font-size: 1rem; padding: 1rem 2rem; margin: 0.5rem 0; display: block; width: 100%; }
          }
        </style>
      </head>
      <body>
        <!-- Hero Section -->
        <div class="hero-section">
          <div class="hero-content">
            <h1 class="hero-title ${isEditing ? 'editable' : ''}" 
                ${isEditing ? 'contenteditable="true" data-field="headline"' : ''}>
              ${currentContent.headline}
            </h1>
            <p class="hero-subtitle ${isEditing ? 'editable' : ''}" 
               ${isEditing ? 'contenteditable="true" data-field="subheadline"' : ''}>
              ${currentContent.subheadline}
            </p>
            <p class="hero-description ${isEditing ? 'editable' : ''}" 
               ${isEditing ? 'contenteditable="true" data-field="description"' : ''}>
              ${currentContent.description}
            </p>
            <div>
              <button class="cta-button">צור קשר</button>
              <button class="cta-button cta-secondary">קרא עוד</button>
            </div>
          </div>
        </div>
        
        <!-- Features Section -->
        ${featuresSection}
        
        <!-- About Section -->
        ${aboutSection}
        
        <!-- Contact Section -->
        ${contactSection}
        
        ${isEditing ? `
          <script>
            // Handle editing
            document.addEventListener('input', function(e) {
              if (e.target.dataset.field) {
                const field = e.target.dataset.field;
                const value = e.target.textContent;
                
                // Send update to parent
                window.parent.postMessage({
                  type: 'content-update',
                  field: field,
                  value: value
                }, '*');
              }
            });
            
            // Prevent line breaks in single line elements
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Enter' && (e.target.dataset.field === 'headline' || e.target.dataset.field === 'subheadline')) {
                e.preventDefault();
              }
            });
          </script>
        ` : ''}
      </body>
      </html>
    `;
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleColorEdit = () => {
    setIsColorEditing(!isColorEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    setIsColorEditing(false);
    
    // Update formData with edited content
    const updatedFormData = {
      ...formData,
      ...editableContent
    };
    onFormDataUpdate?.(updatedFormData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsColorEditing(false);
    
    // Reset to original content
    setEditableContent({
      businessName: formData?.businessName || 'עסק חדש',
      headline: formData?.headline || formData?.businessName || 'ברוכים הבאים לעסק שלנו',
      description: formData?.description || 'תיאור מקצועי של העסק שלנו ומה אנחנו מציעים ללקוחותינו',
      subheadline: formData?.subheadline || 'פתרונות מתקדמים ואיכותיים במחירים הוגנים'
    });
    
    setLocalColors(currentColors);
  };

  // Listen for updates from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'content-update') {
        setEditableContent(prev => ({
          ...prev,
          [event.data.field]: event.data.value
        }));
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleColorChange = (colorType: string, value: string) => {
    setLocalColors(prev => ({
      ...prev,
      [colorType]: value
    }));
  };

  return (
    <div className="relative w-full h-full" style={{ 
      maxHeight: '100vh', 
      overflowY: 'auto', 
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      {/* Edit Controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        {!isEditing && !isColorEditing ? (
          <>
            <Button onClick={handleEdit} variant="default" size="sm" className="shadow-lg">
              <Edit className="w-4 h-4 mr-2" />
              עריכת טקסט
            </Button>
            <Button onClick={handleColorEdit} variant="outline" size="sm" className="shadow-lg">
              <Palette className="w-4 h-4 mr-2" />
              עריכת צבעים
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleSave} variant="default" size="sm" className="shadow-lg">
              <Save className="w-4 h-4 mr-2" />
              שמור שינויים
            </Button>
            <Button onClick={handleCancel} variant="outline" size="sm" className="shadow-lg">
              <X className="w-4 h-4 mr-2" />
              ביטול
            </Button>
          </>
        )}
      </div>

      {/* Color Editing Panel */}
      {isColorEditing && (
        <div className="absolute top-16 right-4 z-50 bg-black/95 backdrop-blur-sm p-4 rounded-lg border border-gray-700 max-w-xs">
          <h3 className="text-white font-medium mb-3">עריכת צבעים</h3>
          <div className="space-y-3">
            <div>
              <label className="text-white text-sm">צבע ראשי</label>
              <input
                type="color"
                value={localColors.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                className="w-full h-8 rounded mt-1"
              />
            </div>
            <div>
              <label className="text-white text-sm">צבע רקע</label>
              <input
                type="color"
                value={localColors.background}
                onChange={(e) => handleColorChange('background', e.target.value)}
                className="w-full h-8 rounded mt-1"
              />
            </div>
            <div>
              <label className="text-white text-sm">צבע טקסט</label>
              <input
                type="color"
                value={localColors.text}
                onChange={(e) => handleColorChange('text', e.target.value)}
                className="w-full h-8 rounded mt-1"
              />
            </div>
            <div>
              <label className="text-white text-sm">צבע אקסנט</label>
              <input
                type="color"
                value={localColors.accent}
                onChange={(e) => handleColorChange('accent', e.target.value)}
                className="w-full h-8 rounded mt-1"
              />
            </div>
          </div>
        </div>
      )}

      {/* Instructions when in edit mode */}
      {isEditing && (
        <div className="absolute top-16 right-4 z-50 bg-black/90 text-white p-3 rounded-lg text-sm max-w-xs border border-blue-500/30">
          <p className="font-medium mb-1">מצב עריכת טקסט פעיל</p>
          <p className="text-xs opacity-90">לחץ על הטקסט בדף כדי לערוך אותו ישירות</p>
        </div>
      )}
      
      {/* Preview Iframe */}
      <iframe
        srcDoc={generateActualPageHTML()}
        className="w-full h-full border-0"
        style={{ minHeight: '100vh' }}
        title="Landing Page Preview"
        key={`${isEditing}-${isColorEditing}-${JSON.stringify(editableContent)}-${JSON.stringify(localColors)}`}
      />
    </div>
  );
};

export default LandingPagePreview;