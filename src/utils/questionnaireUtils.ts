
export interface FormData {
  businessName: string;
  businessType: string;
  businessStory: string;
  businessValues: string;
  mainServices: string;
  uniqueAdvantages: string;
  targetAudience: string;
  mainGoal: string;
  contactInfo: string;
  designStyle: string;
  navigationStyle: string;
  selectedElements: string[];
}

export const initialFormData: FormData = {
  businessName: "",
  businessType: "",
  businessStory: "",
  businessValues: "",
  mainServices: "",
  uniqueAdvantages: "",
  targetAudience: "",
  mainGoal: "",
  contactInfo: "",
  designStyle: "simple-dark",
  navigationStyle: "floating",
  selectedElements: ["hero", "emotional", "whyUs", "whatWeGive", "testimonials", "contact"]
};

export const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "פרטי העסק";
    case 2:
      return "שירותים ומטרות";
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
    formData.targetAudience
  );
};

export const validateDesignStyle = (style: string): boolean => {
  const validStyles = ['simple-dark', 'floating-elements', 'glass-phone', 'glass-cube', 'space-particles', 'liquid-design', 'tech-gradient', 'crystal-elements', 'banking-ribbons'];
  return validStyles.includes(style);
};

export const getDesignStyleDescription = (style: string): string => {
  switch (style) {
    case 'simple-dark':
      return 'עיצוב כהה ונקי עם אנימציות עדינות';
    case 'floating-elements':
      return 'אלמנטים מרחפים עם אפקטים גיאומטריים';
    case 'glass-phone':
      return 'עיצוב זכוכית עם מוקאפ טלפון';
    case 'glass-cube':
      return 'קוביות זכוכית תלת-מימדיות';
    case 'space-particles':
      return 'חלקיקי חלל עם אפקטי אורורה';
    case 'liquid-design':
      return 'עיצוב נוזלי עם צורות אורגניות';
    case 'tech-gradient':
      return 'גרדיאנטים טכנולוגיים מתקדמים';
    case 'crystal-elements':
      return 'אלמנטים קריסטליים מרהיבים';
    case 'banking-ribbons':
      return 'סרטים אלגנטיים בסגנון בנקאי';
    default:
      return 'עיצוב טכנולוגי מתקדם';
  }
};
