
import React from 'react';
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
  // Show loading or placeholder if formData is not ready
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

  // Always use the inline editor now - it handles both modes
  return (
    <EditModeProvider onSave={onContentUpdate}>
      <div className="w-full h-full">
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
};

export default LandingPagePreview;
