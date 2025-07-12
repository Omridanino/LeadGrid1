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
  brandColors: string;
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
  brandColors: "",
  designStyle: "gradient",
  navigationStyle: "floating",
  selectedElements: []
};

export const validateDesignStyle = (style: string): boolean => {
  const validStyles = ['3d-tech', 'gradient', 'glass', 'geometric', 'metal', 'image'];
  return validStyles.includes(style);
};

export const getDesignStyleDescription = (style: string): string => {
  switch (style) {
    case '3d-tech':
      return 'עיצוב טכנולוגי מתקדם עם אפקטים תלת-מימדיים מרשימים - מושלם לעסקים חדשניים ומתקדמים';
    case 'gradient':
      return 'עיצובים גרדיאנט מתקדמים עם אפקטים תלת-מימדיים צבעוניים ומרהיבים';
    case 'glass':
      return 'עיצובים נוזליים וזכוכית עם אפקטים שקופים ומרהיבים';
    case 'geometric':
      return 'עיצובים גיאומטריים עם צורות מתמטיות ואפקטים גיאומטריים';
    case 'metal':
      return 'עיצובים מתכתיים עם מראה מלוטש ואלגנטי';
    case 'image':
      return 'עיצובים עם תמונות תלת-מימדיות ואפקטים חזותיים מרהיבים';
    default:
      return 'עיצוב מתקדם ומרהיב';
  }
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
    case 5:
      return "מיתוג וצבעים";
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
