import { ColorScheme } from "@/types/colors";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Save, X } from "lucide-react";

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
  const [editableContent, setEditableContent] = useState({
    businessName: formData?.businessName || 'עסק חדש',
    headline: formData?.headline || 'ברוכים הבאים לעסק שלנו',
    description: formData?.description || 'תיאור קצר על העסק שלנו ומה אנחנו מציעים ללקוחות',
    subheadline: formData?.subheadline || 'פתרונות מתקדמים ואיכותיים'
  });

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

  // Generate clean HTML for preview
  const generateCleanHTML = () => {
    const currentContent = isEditing ? editableContent : {
      businessName: formData?.businessName || editableContent.businessName,
      headline: formData?.headline || editableContent.headline,
      description: formData?.description || editableContent.description,
      subheadline: formData?.subheadline || editableContent.subheadline
    };

    return `
      <!DOCTYPE html>
      <html lang="he" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${currentContent.businessName}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          .hero-section {
            background: linear-gradient(135deg, ${currentColors.background || '#000000'}, ${currentColors.primary || '#3b82f6'});
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }
          .hero-content {
            text-align: center;
            max-width: 800px;
            padding: 2rem;
            z-index: 10;
          }
          .hero-title {
            font-size: 3.5rem;
            font-weight: bold;
            color: ${currentColors.text || '#ffffff'};
            margin-bottom: 1rem;
            line-height: 1.2;
          }
          .hero-subtitle {
            font-size: 1.25rem;
            color: ${currentColors.subheadlineColor || '#e0f2fe'};
            margin-bottom: 2rem;
            line-height: 1.6;
          }
          .hero-description {
            font-size: 1.125rem;
            color: ${currentColors.featuresTextColor || '#d1d5db'};
            margin-bottom: 3rem;
            line-height: 1.8;
          }
          .cta-button {
            background: ${currentColors.accent || '#06b6d4'};
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 0 0.5rem;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
          .cta-secondary {
            background: transparent;
            border: 2px solid ${currentColors.accent || '#06b6d4'};
            color: ${currentColors.accent || '#06b6d4'};
          }
          ${isEditing ? `
            .editable {
              outline: 2px dashed #3b82f6;
              outline-offset: 4px;
              cursor: text;
              padding: 8px;
              margin: 4px;
              border-radius: 4px;
              transition: all 0.2s ease;
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
            .hero-subtitle { font-size: 1.1rem; }
            .hero-description { font-size: 1rem; }
            .hero-content { padding: 1rem; }
          }
        </style>
      </head>
      <body>
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

  const handleSave = () => {
    setIsEditing(false);
    // Update formData with edited content
    const updatedFormData = {
      ...formData,
      ...editableContent
    };
    onFormDataUpdate?.(updatedFormData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original content
    setEditableContent({
      businessName: formData?.businessName || 'עסק חדש',
      headline: formData?.headline || 'ברוכים הבאים לעסק שלנו',
      description: formData?.description || 'תיאור קצר על העסק שלנו ומה אנחנו מציעים ללקוחות',
      subheadline: formData?.subheadline || 'פתרונות מתקדמים ואיכותיים'
    });
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

  return (
    <div className="relative w-full h-full" style={{ 
      maxHeight: '100vh', 
      overflowY: 'auto', 
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      {/* Edit Controls */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        {!isEditing ? (
          <Button onClick={handleEdit} variant="default" size="sm" className="shadow-lg">
            <Edit className="w-4 h-4 mr-2" />
            עריכת דף
          </Button>
        ) : (
          <>
            <Button onClick={handleSave} variant="default" size="sm" className="shadow-lg">
              <Save className="w-4 h-4 mr-2" />
              שמור
            </Button>
            <Button onClick={handleCancel} variant="outline" size="sm" className="shadow-lg">
              <X className="w-4 h-4 mr-2" />
              ביטול
            </Button>
          </>
        )}
      </div>

      {/* Instructions when in edit mode */}
      {isEditing && (
        <div className="absolute top-16 right-4 z-50 bg-black/90 text-white p-3 rounded-lg text-sm max-w-xs border border-blue-500/30">
          <p className="font-medium mb-1">מצב עריכה פעיל</p>
          <p className="text-xs opacity-90">לחץ על הטקסט בדף כדי לערוך אותו ישירות</p>
        </div>
      )}
      
      {/* Preview Iframe */}
      <iframe
        srcDoc={generateCleanHTML()}
        className="w-full h-full border-0"
        style={{ minHeight: '100vh' }}
        title="Landing Page Preview"
        key={`${isEditing}-${JSON.stringify(editableContent)}`}
      />
    </div>
  );
};

export default LandingPagePreview;