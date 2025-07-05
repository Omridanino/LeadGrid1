
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LandingPageQuestionnaire from "@/components/LandingPageQuestionnaire";
import TemplateEditor from "@/components/TemplateEditor";
import TemplatePreview from "@/components/template-editor/TemplatePreview";
import { PublishingWizard } from "@/components/PublishingWizard";
import Header from "@/components/Header";
import { useGeneratedPageState } from "@/hooks/useGeneratedPageState";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Sparkles, Globe, Eye, Settings, ArrowLeft } from "lucide-react";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState("home");
  const { pageData, setPageData, template, setTemplate } = useGeneratedPageState();

  // Handle URL parameters for direct template editing
  useEffect(() => {
    const templateParam = searchParams.get('template');
    const editParam = searchParams.get('edit');
    
    if (templateParam && editParam === 'true' && !pageData) {
      // Load template data from localStorage or API
      const savedTemplate = localStorage.getItem(`template_${templateParam}`);
      if (savedTemplate) {
        try {
          const templateData = JSON.parse(savedTemplate);
          setTemplate(templateData);
          setPageData(templateData);
          setCurrentStep("editor");
        } catch (error) {
          console.error('Error loading template:', error);
        }
      }
    }
  }, [searchParams, pageData, setTemplate, setPageData]);

  const handleQuestionnaireComplete = (data: any) => {
    setPageData(data);
    setCurrentStep("editor");
  };

  const handleTemplateUpdate = (updatedTemplate: any) => {
    setTemplate(updatedTemplate);
    setPageData(updatedTemplate);
  };

  const handlePublish = () => {
    setCurrentStep("publish");
  };

  const handleBackToEditor = () => {
    setCurrentStep("editor");
  };

  const handleStartOver = () => {
    setPageData(null);
    setTemplate(null);
    setCurrentStep("home");
  };

  const handleCloseEditor = () => {
    setCurrentStep("home");
  };

  const handleStartCreating = () => {
    setCurrentStep("questionnaire");
  };

  const handleBackToHome = () => {
    setCurrentStep("home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {currentStep === "home" && (
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg mb-6">
                  <Sparkles className="w-5 h-5 ml-2" />
                  פלטפורמת יצירת אתרים מתקדמת
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  צור אתר מקצועי
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}תוך דקות
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  עם LeadGrid תוכל ליצור דפי נחיתה מקצועיים ואתרי WordPress אמיתיים בקלות.
                  בחר תבנית, התאם לעסק שלך ופרסם באינטרנט.
                </p>
              </div>

              <Button
                onClick={handleStartCreating}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-6 h-6 ml-3" />
                התחל ליצור עכשיו
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>יצירה מהירה</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    צור אתר מקצועי תוך דקות עם התבניות המתקדמות שלנו
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>עיצוב מותאם</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    עורך מתקדם לעיצוב מותאם אישית לפי הצרכים של העסק שלך
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>פרסום מיידי</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    פרסם את האתר שלך מיד ושתף עם לקוחות או קישור ב-WordPress
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">תבניות מקצועיות</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5 דקות</div>
                  <div className="text-blue-100">זמן יצירה ממוצע</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">זמינות אתרים</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "questionnaire" && (
          <div>
            <div className="mb-6">
              <Button
                onClick={handleBackToHome}
                variant="outline"
                className="mb-4"
              >
                <ArrowLeft className="w-4 h-4 ml-2" />
                חזור לדף הבית
              </Button>
            </div>
            <LandingPageQuestionnaire 
              isOpen={true}
              onClose={handleQuestionnaireComplete}
            />
          </div>
        )}

        {currentStep === "editor" && template && (
          <TemplateEditor
            template={template}
            onTemplateChange={handleTemplateUpdate}
            onClose={handleCloseEditor}
          />
        )}

        {currentStep === "publish" && (
          <PublishingWizard
            template={pageData}
            isOpen={true}
            onClose={handleBackToEditor}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
