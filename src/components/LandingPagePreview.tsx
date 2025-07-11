
import { generatePageHTML } from "@/utils/pageGenerator";
import { ColorScheme } from "@/types/colors";
import InlineEditor from "./InlineEditor";
import { useState } from "react";


interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
  onFormDataUpdate?: (updatedData: any) => void;
  onContentUpdate?: (updatedContent: any) => void;
}

const LandingPagePreview = ({ content, currentColors, formData, heroImage, elements, onFormDataUpdate, onContentUpdate }: LandingPagePreviewProps) => {
  const [localFormData, setLocalFormData] = useState(formData);
  const [localContent, setLocalContent] = useState(content);

  // Handle updates from inline editor
  const handleFormDataUpdate = (updatedData: any) => {
    setLocalFormData(updatedData);
    onFormDataUpdate?.(updatedData);
  };

  const handleContentUpdate = (updatedContent: any) => {
    setLocalContent(updatedContent);
    onContentUpdate?.(updatedContent);
  };
  // Use local state for real-time updates
  const currentFormData = localFormData || formData;
  const currentContent = localContent || content;

  // Show loading or placeholder if formData is not ready
  if (!currentFormData) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg">טוען את הדף שלך...</p>
        </div>
      </div>
    );
  }

  // Create a proper template object for the page generator
  const createTemplateFromFormData = () => {
    return {
      id: currentFormData.selectedTemplate?.id || 'default-template',
      title: currentFormData.businessName || 'עסק חדש',
      category: currentFormData.designStyle || 'מודרני',
      description: currentFormData.description || 'תיאור העסק',
      tags: currentFormData.tags || [],
      heroData: {
        title: currentFormData.headline || currentFormData.businessName || 'ברוכים הבאים',
        subtitle: currentFormData.subheadline || currentFormData.description || 'תיאור קצר על העסק',
        backgroundImage: heroImage || currentFormData.heroImage || '',
        primaryButton: { text: 'צור קשר', action: '#contact' },
        secondaryButton: { text: 'קרא עוד', action: '#about' }
      },
      sections: currentFormData.sections || currentContent?.sections || [],
      styles: {
        backgroundColor: currentColors.background,
        primaryColor: currentColors.primary,
        secondaryColor: currentColors.secondary,
        textColor: currentColors.text
      }
    };
  };

  // Generate HTML content with error handling
  let htmlContent = '';
  try {
    const templateData = currentFormData?.selectedTemplate || createTemplateFromFormData();
    htmlContent = generatePageHTML(templateData);
  } catch (error) {
    console.error('Error generating HTML content:', error);
    // Fallback to basic HTML
    htmlContent = `
      <!DOCTYPE html>
      <html lang="he" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${currentFormData.businessName || 'דף נחיתה'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-900 text-white">
        <div class="min-h-screen flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold mb-4 hero-title">${currentFormData.businessName || 'ברוכים הבאים'}</h1>
            <p class="text-xl text-gray-300 hero-subtitle">${currentFormData.description || 'תיאור העסק שלך'}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
  
  return (
    <div className="relative w-full h-full" style={{ 
      maxHeight: '100vh', 
      overflowY: 'auto', 
      overflowX: 'hidden',
      scrollBehavior: 'smooth'
    }}>
      {/* Inline Editor Overlay */}
      <InlineEditor
        formData={currentFormData}
        onUpdate={handleFormDataUpdate}
        content={currentContent}
        onContentUpdate={handleContentUpdate}
      />
      
      {/* Preview Iframe */}
      <iframe
        srcDoc={htmlContent}
        className="w-full h-full border-0"
        style={{ minHeight: '100vh' }}
        title="Landing Page Preview"
        key={JSON.stringify(currentFormData)} // Force re-render when data changes
      />
    </div>
  );
};

export default LandingPagePreview;
