
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

  // If edit mode is active, show the inline editor
  if (isEditMode) {
    return (
      <EditModeProvider onSave={onContentUpdate}>
        <div className="w-full h-full relative">
          {/* Exit Edit Mode Button */}
          <div className="fixed top-4 right-4 z-50">
            <Card className="shadow-lg">
              <CardContent className="p-2 flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditMode(false)}
                >
                  <EyeOff className="h-4 w-4 mr-1" />
                  סיום עריכה
                </Button>
                <Badge variant="secondary">
                  <Edit3 className="h-3 w-3 mr-1" />
                  מצב עריכה
                </Badge>
              </CardContent>
            </Card>
          </div>
          
          <InlineLandingPageEditor
            content={content}
            currentColors={currentColors}
            formData={formData}
            heroImage={heroImage}
            elements={elements}
            onContentUpdate={onContentUpdate}
          />
        </div>
      </EditModeProvider>
    );
  }
  // Regular preview mode - show the actual generated content
  let htmlContent = '';
  
  // If we have a selected template, generate the HTML
  if (formData?.selectedTemplate) {
    try {
      htmlContent = generatePageHTML(formData.selectedTemplate);
    } catch (error) {
      console.error('Error generating HTML:', error);
      // Show error message in preview
      return (
        <div className="w-full h-full relative">
          {/* Edit Mode Toggle */}
          <div className="fixed top-4 right-4 z-50">
            <Card className="shadow-lg">
              <CardContent className="p-2 flex items-center gap-2">
                <Button
                  size="sm"
                  variant="default"
                  onClick={() => setIsEditMode(true)}
                >
                  <Edit3 className="h-4 w-4 mr-1" />
                  ערוך דף
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full h-full flex items-center justify-center bg-background text-foreground">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">שגיאה בטעינת הדף</h2>
              <p className="text-muted-foreground mb-6">אירעה שגיאה בטעינת תוכן הדף</p>
              <Button onClick={() => setIsEditMode(true)}>
                <Edit3 className="h-4 w-4 mr-2" />
                פתח עורך
              </Button>
            </div>
          </div>
        </div>
      );
    }
  } else if (content) {
    // If we have content but no template, show content-based preview
    htmlContent = `
      <html dir="rtl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${content.hero?.title || 'דף נחיתה'}</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gradient-to-b from-blue-600 to-blue-800 text-white min-h-screen">
          <div class="container mx-auto px-6 py-20 text-center">
            <h1 class="text-5xl font-bold mb-6">${content.hero?.title || 'ברוכים הבאים'}</h1>
            <p class="text-xl mb-8">${content.hero?.subtitle || 'פתרונות מקצועיים ואמינים עבורכם'}</p>
            <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              ${content.hero?.button1Text || 'צור קשר'}
            </button>
          </div>
        </body>
      </html>
    `;
  } else {
    // No content at all - show placeholder
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
            <h1 class="text-4xl font-bold mb-6">צור את דף הנחיתה שלך</h1>
            <p class="text-lg mb-8">התחל ביצירת דף נחיתה מקצועי וייחודי</p>
            <div class="space-y-4">
              <p class="text-sm opacity-75">לחץ על כפתור העריכה כדי להתחיל לערוך את הדף</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  return (
    <div className="w-full h-full relative">
      {/* Edit Mode Toggle - Only show when not in edit mode */}
      <div className="fixed top-4 right-4 z-50">
        <Card className="shadow-lg">
          <CardContent className="p-2 flex items-center gap-2">
            <Button
              size="sm"
              variant="default"
              onClick={() => setIsEditMode(true)}
            >
              <Edit3 className="h-4 w-4 mr-1" />
              ערוך דף
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Preview Content */}
      <div className="w-full h-full">
        <iframe
          srcDoc={htmlContent}
          className="w-full h-full border-0"
          style={{ minHeight: '100vh' }}
          title="Landing Page Preview"
        />
      </div>
    </div>
  );
};

export default LandingPagePreview;
