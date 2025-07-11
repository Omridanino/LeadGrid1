
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit3, Eye, EyeOff } from 'lucide-react';
import { InlineLandingPageEditor } from './InlineLandingPageEditor';
import { EditModeProvider } from './EditModeProvider';
import { generatePageHTML } from "@/utils/pageGenerator";
import { ColorScheme } from "@/types/colors";

interface LandingPagePreviewProps {
  content: any;
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  elements: string[];
  onContentUpdate?: (newContent: any) => void;
}

const LandingPagePreview = ({ 
  content, 
  currentColors, 
  formData, 
  heroImage, 
  elements,
  onContentUpdate 
}: LandingPagePreviewProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

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

  // Generate the HTML content for preview
  let htmlContent = '';
  
  if (formData?.selectedTemplate) {
    try {
      htmlContent = generatePageHTML(formData.selectedTemplate);
    } catch (error) {
      console.error('Error generating HTML:', error);
      // Fallback content if generation fails
      htmlContent = `
        <html dir="rtl">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>דף נחיתה</title>
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body class="bg-gradient-to-b from-blue-600 to-blue-800 text-white min-h-screen">
            <div class="container mx-auto px-6 py-20 text-center">
              <h1 class="text-5xl font-bold mb-6">ברוכים הבאים לאתר שלנו</h1>
              <p class="text-xl mb-8">פתרונות מקצועיים ואמינים עבורכם</p>
              <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                צור קשר
              </button>
            </div>
          </body>
        </html>
      `;
    }
  } else {
    // Default content when no template
    htmlContent = `
      <html dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>דף נחיתה</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-b from-purple-600 to-blue-800 text-white min-h-screen">
          <div class="container mx-auto px-6 py-20 text-center">
            <h1 class="text-4xl font-bold mb-6">ברוכים הבאים</h1>
            <p class="text-lg mb-8">דף הנחיתה שלך כאן</p>
          </div>
        </body>
      </html>
    `;
  }
  return (
    <div className="w-full h-full relative">
      {/* Edit Mode Toggle Button - Always visible */}
      <div className="fixed top-4 right-4 z-50">
        <Card className="shadow-lg">
          <CardContent className="p-2 flex items-center gap-2">
            <Button
              size="sm"
              variant={isEditMode ? "default" : "outline"}
              onClick={() => setIsEditMode(!isEditMode)}
            >
              {isEditMode ? (
                <>
                  <EyeOff className="h-4 w-4 mr-1" />
                  סיום עריכה
                </>
              ) : (
                <>
                  <Edit3 className="h-4 w-4 mr-1" />
                  ערוך דף
                </>
              )}
            </Button>
            {isEditMode && (
              <Badge variant="secondary">
                <Edit3 className="h-3 w-3 mr-1" />
                מצב עריכה
              </Badge>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content - Always the same iframe, but with edit capabilities when needed */}
      <div className="w-full h-full">
        {isEditMode ? (
          <EditModeProvider onSave={onContentUpdate}>
            <InlineLandingPageEditor
              content={content}
              currentColors={currentColors}
              formData={formData}
              heroImage={heroImage}
              elements={elements}
              onContentUpdate={onContentUpdate}
            />
          </EditModeProvider>
        ) : (
          <iframe
            srcDoc={htmlContent}
            className="w-full h-full border-0"
            style={{ minHeight: '100vh' }}
            title="Landing Page Preview"
          />
        )}
      </div>
    </div>
  );
};

export default LandingPagePreview;
