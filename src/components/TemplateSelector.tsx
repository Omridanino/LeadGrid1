import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Rocket, 
  CheckCircle, 
  ExternalLink,
  ArrowRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { FormData, initialFormData } from '@/utils/questionnaireUtils';
import { TemplateData } from '@/types/template';
import { templates } from '@/data/templates';
import { generateContent } from '@/utils/contentGenerator';
import { RealPublishingService } from '@/services/realPublishingService';
import { PublishingProgress } from './publishing/PublishingProgress';

// קומפוננטים קיימים של השאלון
import BusinessInfoStep from './questionnaire/BusinessInfoStep';
import GoalsAndFeaturesStep from './questionnaire/GoalsAndFeaturesStep';
import DesignStyleStep from './questionnaire/DesignStyleStep';
import ElementsSelectionStep from './questionnaire/ElementsSelectionStep';

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const TemplateSelector = ({ isOpen, onClose }: TemplateSelectorProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishingProgress, setPublishingProgress] = useState(0);
  const [publishedUrl, setPublishedUrl] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prevState => {
      let selectedElements = [...prevState.selectedElements];
      if (checked) {
        selectedElements.push(name);
      } else {
        selectedElements = selectedElements.filter(item => item !== name);
      }
      return { ...prevState, selectedElements };
    });
  };

  const handleDesignStyleChange = (style: string) => {
    setFormData(prevState => ({
      ...prevState,
      designStyle: style
    }));
  };

  const handleNavigationStyleChange = (style: string) => {
    setFormData(prevState => ({
      ...prevState,
      navigationStyle: style
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setIsPublishing(true);
    setPublishingProgress(0);
    
    try {
      // שלב 1: יצירת תוכן
      setPublishingProgress(25);
      const selectedTemplate = templates.find(t => 
        t.category.toLowerCase().includes(formData.designStyle) ||
        t.name.toLowerCase().includes(formData.designStyle)
      ) || templates[0];

      // שלב 2: יצירת תוכן מותאם אישית
      setPublishingProgress(50);
      const generatedTemplate: TemplateData = {
        ...selectedTemplate,
        hero: generateContent('hero', formData, selectedTemplate.hero),
        about: generateContent('about', formData, selectedTemplate.about),
        features: generateContent('features', formData, selectedTemplate.features),
        testimonials: generateContent('testimonials', formData, selectedTemplate.testimonials),
        contact: generateContent('contact', formData, selectedTemplate.contact),
        pricing: generateContent('pricing', formData, selectedTemplate.pricing),
        faq: generateContent('faq', formData, selectedTemplate.faq),
        finalCta: generateContent('finalCta', formData, selectedTemplate.finalCta),
      };

      // שלב 3: פרסום האתר
      setPublishingProgress(75);
      const siteUrl = await RealPublishingService.publishSite(generatedTemplate);
      
      // שלב 4: סיום
      setPublishingProgress(100);
      await new Promise(resolve => setTimeout(resolve, 500));

      setPublishedUrl(siteUrl);
      setShowResult(true);
      setIsPublishing(false);
    } catch (error) {
      console.error('Generation failed:', error);
      setIsPublishing(false);
      alert('יצירת האתר נכשלה - נסה שוב');
    }
    
    setIsGenerating(false);
  };

  const openSite = () => {
    if (publishedUrl) {
      window.open(publishedUrl, '_blank');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center" dir="rtl">
      <div className="bg-gray-900 rounded-lg border border-gray-800 w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold">🚀 יצירת אתר נחיתה מקצועי</h2>
              <p className="text-green-400 text-sm mt-1">האתר שלך יהיה זמין לצפייה מיד!</p>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {showResult ? (
            <div className="h-full flex items-center justify-center p-6">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                
                <div>
                  <h3 className="text-white text-2xl font-bold mb-4">🎉 האתר שלך מוכן!</h3>
                  <p className="text-gray-400 mb-6">האתר שלך זמין לצפייה עכשיו</p>
                </div>

                <Card className="bg-gray-800 border-gray-700 max-w-lg mx-auto">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-white font-semibold mb-2">האתר שלך:</div>
                      <div className="text-blue-400 text-xs mb-4">לחץ על "פתח את האתר" לצפייה</div>
                      <Button
                        onClick={openSite}
                        className="bg-blue-600 hover:bg-blue-700 w-full"
                      >
                        <ExternalLink className="w-4 h-4 ml-2" />
                        פתח את האתר
                        <ArrowRight className="w-4 h-4 mr-2" />
                      </Button>
                      <div className="text-green-400 text-xs mt-2 font-medium">
                        ✅ זמין לצפייה עכשיו!
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  סיום
                </Button>
              </div>
            </div>
          ) : isPublishing ? (
            <div className="h-full flex items-center justify-center p-6">
              <PublishingProgress 
                progress={publishingProgress}
                isPublishing={isPublishing}
              />
            </div>
          ) : (
            <div className="p-6 h-full overflow-y-auto">
              {currentStep === 1 && (
                <BusinessInfoStep
                  formData={formData}
                  setFormData={setFormData}
                  onNext={() => setCurrentStep(2)}
                />
              )}
              
              {currentStep === 2 && (
                <GoalsAndFeaturesStep
                  formData={formData}
                  setFormData={setFormData}
                  onNext={() => setCurrentStep(3)}
                  onPrev={() => setCurrentStep(1)}
                />
              )}
              
              {currentStep === 3 && (
                <DesignStyleStep
                  formData={formData}
                  setFormData={setFormData}
                  onNext={() => setCurrentStep(4)}
                  onPrev={() => setCurrentStep(2)}
                />
              )}
              
              {currentStep === 4 && (
                <ElementsSelectionStep
                  formData={formData}
                  setFormData={setFormData}
                  onGenerate={handleGenerate}
                  onPrev={() => setCurrentStep(3)}
                  isGenerating={isGenerating}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
