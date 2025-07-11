import { useState } from "react";
import { ColorScheme } from "@/types/colors";
import { Button } from "@/components/ui/button";
import { Edit3, Palette, Type, Image } from "lucide-react";
import { cn } from "@/lib/utils";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements }: LandingPagePreviewProps) => {
  const [editMode, setEditMode] = useState(false);
  const [editingElement, setEditingElement] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState(content);
  const [tempColors, setTempColors] = useState(currentColors);

  // Show loading if formData is not ready
  if (!formData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  const generateSimpleHTML = () => {
    const businessName = formData.businessName || "העסק שלי";
    const headline = tempContent?.headline || formData.headline || "הכותרת שלכם כאן";
    const subheadline = tempContent?.subheadline || formData.subheadline || "תת כותרת מסבירה על השירות";
    const ctaText = tempContent?.ctaText || formData.ctaText || "צור קשר";

    return `
    <!DOCTYPE html>
    <html dir="rtl" lang="he">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${businessName}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .hero { 
          min-height: 100vh; 
          background: linear-gradient(135deg, ${tempColors.primary} 0%, ${tempColors.secondary} 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          position: relative;
        }
        .hero-content { max-width: 800px; }
        .hero h1 { 
          font-size: 3.5rem; 
          font-weight: bold; 
          margin-bottom: 1rem;
          color: ${tempColors.headlineColor};
        }
        .hero p { 
          font-size: 1.25rem; 
          margin-bottom: 2rem; 
          opacity: 0.9;
          color: ${tempColors.subheadlineColor};
        }
        .cta-button { 
          background: ${tempColors.accent}; 
          color: white; 
          padding: 1rem 2rem; 
          border: none; 
          border-radius: 8px; 
          font-size: 1.1rem; 
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-button:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        .features { 
          padding: 4rem 2rem; 
          background: ${tempColors.featuresColor};
        }
        .features-container { 
          max-width: 1200px; 
          margin: 0 auto; 
          text-align: center;
        }
        .features h2 { 
          font-size: 2.5rem; 
          margin-bottom: 3rem; 
          color: ${tempColors.featuresTextColor};
        }
        .features-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: 2rem;
        }
        .feature-card { 
          padding: 2rem; 
          background: white; 
          border-radius: 12px; 
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .feature-card:hover { 
          transform: translateY(-5px);
        }
        .about { 
          padding: 4rem 2rem; 
          background: ${tempColors.aboutColor};
        }
        .about-container { 
          max-width: 800px; 
          margin: 0 auto; 
          text-align: center;
        }
        .about h2 { 
          font-size: 2.5rem; 
          margin-bottom: 2rem; 
          color: ${tempColors.aboutTextColor};
        }
        .about p { 
          font-size: 1.1rem; 
          color: ${tempColors.aboutTextColor}; 
          opacity: 0.8;
        }
        .contact { 
          padding: 4rem 2rem; 
          background: ${tempColors.contactColor};
        }
        .contact-container { 
          max-width: 600px; 
          margin: 0 auto; 
          text-align: center;
        }
        .contact h2 { 
          font-size: 2.5rem; 
          margin-bottom: 2rem; 
          color: ${tempColors.contactTextColor};
        }
        .editable {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .editable:hover {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .edit-overlay {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          font-size: 12px;
          cursor: pointer;
          display: none;
        }
        .editable:hover .edit-overlay {
          display: block;
        }
      </style>
    </head>
    <body>
      <section class="hero">
        <div class="hero-content">
          <h1 class="editable" data-element="headline">
            ${headline}
            <button class="edit-overlay">✏️</button>
          </h1>
          <p class="editable" data-element="subheadline">
            ${subheadline}
            <button class="edit-overlay">✏️</button>
          </p>
          <button class="cta-button editable" data-element="cta">
            ${ctaText}
            <button class="edit-overlay">✏️</button>
          </button>
        </div>
      </section>

      ${elements.includes('features') ? `
      <section class="features">
        <div class="features-container">
          <h2 class="editable" data-element="features-title">
            השירותים שלנו
            <button class="edit-overlay">✏️</button>
          </h2>
          <div class="features-grid">
            <div class="feature-card">
              <h3>שירות ראשון</h3>
              <p>תיאור השירות הראשון שלכם</p>
            </div>
            <div class="feature-card">
              <h3>שירות שני</h3>
              <p>תיאור השירות השני שלכם</p>
            </div>
            <div class="feature-card">
              <h3>שירות שלישי</h3>
              <p>תיאור השירות השלישי שלכם</p>
            </div>
          </div>
        </div>
      </section>
      ` : ''}

      ${elements.includes('about') ? `
      <section class="about">
        <div class="about-container">
          <h2 class="editable" data-element="about-title">
            אודותינו
            <button class="edit-overlay">✏️</button>
          </h2>
          <p class="editable" data-element="about-text">
            כאן תוכלו לכתוב על העסק שלכם, הניסיון שלכם והערכים שלכם. ספרו ללקוחות למה כדאי להם לבחור בכם.
            <button class="edit-overlay">✏️</button>
          </p>
        </div>
      </section>
      ` : ''}

      ${elements.includes('contact') ? `
      <section class="contact">
        <div class="contact-container">
          <h2 class="editable" data-element="contact-title">
            צור קשר
            <button class="edit-overlay">✏️</button>
          </h2>
          <p class="editable" data-element="contact-text">
            נשמח לשמוע מכם! צרו איתנו קשר לקבלת ייעוץ או הצעת מחיר.
            <button class="edit-overlay">✏️</button>
          </p>
          <button class="cta-button">שלחו הודעה</button>
        </div>
      </section>
      ` : ''}

      <script>
        document.addEventListener('click', function(e) {
          if (e.target.classList.contains('edit-overlay')) {
            e.preventDefault();
            e.stopPropagation();
            const elementType = e.target.parentElement.dataset.element;
            window.parent.postMessage({ type: 'edit-element', element: elementType }, '*');
          }
        });
      </script>
    </body>
    </html>
    `;
  };

  const handleElementEdit = (elementType: string, newValue: string) => {
    setTempContent(prev => ({
      ...prev,
      [elementType.replace('-', '')]: newValue
    }));
  };

  return (
    <div className="w-full h-full relative">
      {/* Editing Toolbar */}
      {editMode && (
        <div className="absolute top-4 left-4 z-50 bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Edit3 className="w-4 h-4" />
            <span className="text-sm font-medium">מצב עריכה</span>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingElement('colors')}
              className="justify-start"
            >
              <Palette className="w-3 h-3 mr-2" />
              עריכת צבעים
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingElement('text')}
              className="justify-start"
            >
              <Type className="w-3 h-3 mr-2" />
              עריכת טקסט
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditingElement('images')}
              className="justify-start"
            >
              <Image className="w-3 h-3 mr-2" />
              עריכת תמונות
            </Button>
          </div>
        </div>
      )}

      {/* Toggle Edit Mode Button */}
      <div className="absolute top-4 right-4 z-50">
        <Button
          size="sm"
          onClick={() => setEditMode(!editMode)}
          className={cn(
            "transition-all duration-300",
            editMode ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"
          )}
        >
          <Edit3 className="w-4 h-4 mr-2" />
          {editMode ? "סיום עריכה" : "עריכת הדף"}
        </Button>
      </div>

      {/* Color Editor */}
      {editingElement === 'colors' && (
        <div className="absolute top-20 left-4 z-50 bg-background border rounded-lg p-4 shadow-lg w-80">
          <h3 className="font-medium mb-3">עריכת צבעים</h3>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-muted-foreground">צבע ראשי</label>
              <input
                type="color"
                value={tempColors.primary}
                onChange={(e) => setTempColors(prev => ({ ...prev, primary: e.target.value }))}
                className="w-full h-8 rounded border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">צבע משני</label>
              <input
                type="color"
                value={tempColors.secondary}
                onChange={(e) => setTempColors(prev => ({ ...prev, secondary: e.target.value }))}
                className="w-full h-8 rounded border"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">צבע הדגשה</label>
              <input
                type="color"
                value={tempColors.accent}
                onChange={(e) => setTempColors(prev => ({ ...prev, accent: e.target.value }))}
                className="w-full h-8 rounded border"
              />
            </div>
            <Button size="sm" onClick={() => setEditingElement(null)}>
              סגור
            </Button>
          </div>
        </div>
      )}

      {/* Preview Frame */}
      <div className="w-full h-full" style={{ 
        maxHeight: '100vh', 
        overflowY: 'auto', 
        overflowX: 'hidden',
        scrollBehavior: 'smooth'
      }}>
        <iframe
          srcDoc={generateSimpleHTML()}
          className="w-full h-full border-0"
          style={{ minHeight: '100vh' }}
          title="Landing Page Preview"
          onLoad={(e) => {
            // Listen for edit messages from iframe
            window.addEventListener('message', (event) => {
              if (event.data.type === 'edit-element') {
                setEditingElement(event.data.element);
              }
            });
          }}
        />
      </div>

      {/* Text Editor Modal */}
      {editingElement && editingElement !== 'colors' && editingElement !== 'images' && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 w-96 max-w-[90vw]">
            <h3 className="font-medium mb-3">עריכת {editingElement}</h3>
            <textarea
              className="w-full h-32 p-3 border rounded-lg resize-none"
              placeholder="הכנס טקסט חדש..."
              defaultValue={tempContent?.[editingElement.replace('-', '')] || ''}
              onChange={(e) => handleElementEdit(editingElement, e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setEditingElement(null)}>
                ביטול
              </Button>
              <Button onClick={() => setEditingElement(null)}>
                שמור
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPagePreview;