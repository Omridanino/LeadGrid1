
export interface FormData {
  businessName: string;
  businessType: string;
  businessStory: string;
  businessFoundation: string;
  businessValues: string;
  businessVision: string;
  mainServices: string;
  uniqueAdvantages: string;
  competitionDifference: string;
  targetAudience: string;
  clientProblems: string;
  mainGoal: string;
  keyFeatures: string;
  contactInfo: string;
  designStyle: string;
  navigationStyle: string;
  selectedElements: string[];
}

export const initialFormData: FormData = {
  businessName: "",
  businessType: "",
  businessStory: "",
  businessFoundation: "",
  businessValues: "",
  businessVision: "",
  mainServices: "",
  uniqueAdvantages: "",
  competitionDifference: "",
  targetAudience: "",
  clientProblems: "",
  mainGoal: "",
  keyFeatures: "",
  contactInfo: "",
  designStyle: "3d-tech",
  navigationStyle: "floating",
  selectedElements: []
};

export const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "פרטי העסק";
    case 2:
      return "שירותים ויתרונות";
    case 3:
      return "סגנון עיצוב";
    case 4:
      return "בחירת אלמנטים";
    default:
      return "";
  }
};

export const validateRequiredFields = (formData: FormData): boolean => {
  return !!(
    formData.businessName && 
    formData.businessType && 
    formData.businessStory &&
    formData.businessValues &&
    formData.mainServices &&
    formData.uniqueAdvantages &&
    formData.competitionDifference &&
    formData.targetAudience
  );
};

export const validateDesignStyle = (style: string): boolean => {
  const validStyles = ['3d-tech'];
  return validStyles.includes(style);
};

export const getDesignStyleDescription = (style: string): string => {
  return 'עיצוב טכנולוגי מתקדם עם אפקטים תלת-מימדיים מרשימים - מושלם לעסקים חדשניים ומתקדמים';
};
