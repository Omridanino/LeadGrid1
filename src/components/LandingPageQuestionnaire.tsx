
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { BusinessInfoStep } from './questionnaire/BusinessInfoStep';
import { DesignStyleStep } from './questionnaire/DesignStyleStep';
import { ElementsSelectionStep } from './questionnaire/ElementsSelectionStep';
import { GoalsAndFeaturesStep } from './questionnaire/GoalsAndFeaturesStep';
import { BrandingStep } from './questionnaire/BrandingStep';
import { DomainAndHostingStep } from './questionnaire/DomainAndHostingStep';

export interface QuestionnaireData {
  businessInfo: {
    businessName: string;
    businessType: string;
    targetAudience: string;
    description: string;
  };
  designStyle: string;
  navigationStyle?: string;
  elements: string[];
  goals: string[];
  features: string[];
  branding: {
    logo?: File;
    primaryColor: string;
    secondaryColor: string;
    brandingStyle: string;
    contactInfo?: string;
  };
  domain: {
    wantDomain: boolean;
    domainName?: string;
    hostingPlan?: string;
  };
}

interface LandingPageQuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void;
  onBack: () => void;
}

export const LandingPageQuestionnaire = ({ onComplete, onBack }: LandingPageQuestionnaireProps) => {
  console.log('LandingPageQuestionnaire rendering...');
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuestionnaireData>({
    businessInfo: {
      businessName: '',
      businessType: '',
      targetAudience: '',
      description: ''
    },
    designStyle: '',
    navigationStyle: 'floating',
    elements: [],
    goals: [],
    features: [],
    branding: {
      primaryColor: '#3b82f6',
      secondaryColor: '#6b7280',
      brandingStyle: 'modern'
    },
    domain: {
      wantDomain: false
    }
  });

  console.log('Current step:', currentStep);
  console.log('Form data:', formData);

  const steps = [
    { title: 'פרטי העסק', component: BusinessInfoStep },
    { title: 'סגנון עיצוב', component: DesignStyleStep },
    { title: 'רכיבי הדף', component: ElementsSelectionStep },
    { title: 'מטרות ותכונות', component: GoalsAndFeaturesStep },
    { title: 'מיתוג וצבעים', component: BrandingStep },
    { title: 'דומיין ואחסון', component: DomainAndHostingStep }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const updateFormData = (section: keyof QuestionnaireData, data: any) => {
    console.log('Updating form data:', section, data);
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.businessInfo.businessName && formData.businessInfo.businessType;
      case 2:
        return formData.designStyle;
      case 3:
        return formData.elements.length > 0;
      case 4:
        return formData.goals.length > 0;
      case 5:
        return true; // Branding step is optional
      case 6:
        return true; // Domain step is optional
      default:
        return true;
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  console.log('About to render LandingPageQuestionnaire UI');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-white text-2xl font-bold">יצירת דף נחיתה מקצועי</h1>
            <div className="text-white text-sm">
              שלב {currentStep} מתוך {steps.length}
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">
              {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CurrentStepComponent 
              data={formData}
              onUpdate={updateFormData}
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={handlePrevious}
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            {currentStep === 1 ? 'חזור' : 'קודם'}
          </Button>

          <Button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={!isStepValid()}
          >
            {currentStep === steps.length ? 'צור דף נחיתה' : 'הבא'}
            <ArrowRight className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
