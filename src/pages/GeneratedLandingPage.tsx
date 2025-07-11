
import { InlineLandingPageEditor } from "@/components/InlineLandingPageEditor";
import { EditModeProvider } from "@/components/EditModeProvider";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { useContentGeneration } from "@/hooks/useContentGeneration";
import { generatePageHTML } from "@/utils/pageGenerator";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Edit3, Eye, Save, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const GeneratedLandingPage = () => {
  const state = useGeneratedPageState();
  const location = useLocation();
  const [isInlineEditor, setIsInlineEditor] = useState(false);
  
  // Initialize content generation
  const { generateCreativeContent, setGeneratedContent } = useContentGeneration(state.formData);
  
  // Get formData from navigation state or use existing formData
  useEffect(() => {
    if (location.state?.formData && !state.formData) {
      console.log("Setting formData from navigation:", location.state.formData);
      state.setFormData(location.state.formData);
    }
    if (location.state?.selectedTemplate && location.state.formData) {
      const updatedFormData = {
        ...location.state.formData,
        selectedTemplate: location.state.selectedTemplate
      };
      console.log("Setting formData with selected template:", updatedFormData);
      state.setFormData(updatedFormData);
    }
  }, [location.state, state.formData]);

  // Generate content when formData is available and no template is selected
  useEffect(() => {
    if (state.formData && !state.content && !state.formData.selectedTemplate) {
      console.log("Generating content for formData:", state.formData);
      const newContent = generateCreativeContent();
      console.log("Generated content:", newContent);
      state.setContent(newContent);
      setGeneratedContent(newContent);
    }
  }, [state.formData, state.content, generateCreativeContent, setGeneratedContent]);

  // Convert PageElement[] to string[] for elements prop
  const elementsAsStrings = state.elements?.map(element => 
    typeof element === 'string' ? element : element.type || ''
  ).filter(Boolean) || [];

  // Handle content updates from inline editor
  const handleContentUpdate = (newContent: any) => {
    state.setContentWithHistory(newContent);
    setGeneratedContent(newContent);
    toast.success('השינויים נשמרו');
  };

  // Handle element updates from edit mode
  const handleElementUpdates = (updates: Record<string, any>) => {
    const newContent = { ...state.content, elementUpdates: updates };
    handleContentUpdate(newContent);
  };

  return (
    <EditModeProvider onSave={handleElementUpdates}>
      <div className="min-h-screen bg-background text-foreground relative" dir="rtl">
        {/* Control Panel - Fixed Position */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          <Card className="shadow-lg">
            <CardContent className="p-2 flex items-center gap-2">
              <Button
                size="sm"
                variant={isInlineEditor ? "default" : "outline"}
                onClick={() => setIsInlineEditor(!isInlineEditor)}
              >
                {isInlineEditor ? (
                  <>
                    <Eye className="h-4 w-4 mr-1" />
                    תצוגה רגילה
                  </>
                ) : (
                  <>
                    <Edit3 className="h-4 w-4 mr-1" />
                    עורך מתקדם
                  </>
                )}
              </Button>
              
              {state.content && (
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      state.saveToHistory(state.content);
                      toast.success('הדף נשמר');
                    }}
                  >
                    <Save className="h-4 w-4 mr-1" />
                    שמור
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      if (state.formData?.selectedTemplate) {
                        const htmlContent = generatePageHTML(state.formData.selectedTemplate);
                        const blob = new Blob([htmlContent], { type: 'text/html' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${state.formData.businessName || 'landing-page'}.html`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                        toast.success('הדף הורד בהצלחה');
                      }
                    }}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    הורד
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {isInlineEditor && (
            <Card className="shadow-lg">
              <CardContent className="p-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Edit3 className="h-3 w-3" />
                  מצב עריכה מתקדם
                </Badge>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Main Content */}
        <div className="w-full min-h-screen">
          <InlineLandingPageEditor
            content={state.content}
            currentColors={state.currentColors}
            formData={state.formData}
            heroImage={state.heroImage}
            elements={elementsAsStrings}
            onContentUpdate={handleContentUpdate}
          />
        </div>
      </div>
    </EditModeProvider>
  );
};

export default GeneratedLandingPage;
