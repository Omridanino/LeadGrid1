
export interface FormData {
  businessName: string;
  businessType: string;
  targetAudience: string;
  businessAdvantages: string;
  mainGoal: string;
  keyFeatures: string;
  contactInfo: string;
  heroStyle: string;
  designStyle: string;
  navigationStyle: string;
  selectedElements: string[];
}

export const initialFormData: FormData = {
  businessName: "",
  businessType: "",
  targetAudience: "",
  businessAdvantages: "",
  mainGoal: "",
  keyFeatures: "",
  contactInfo: "",
  heroStyle: "gradient-waves",
  designStyle: "dynamic-gradients", // This is the main style selector - fixed default
  navigationStyle: "floating",
  selectedElements: []
};

export const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "פרטי העסק";
    case 2:
      return "יעדים ותכונות";
    case 3:
      return "סגנון עיצוב פרימיום";
    case 4:
      return "בחירת אלמנטים";
    default:
      return "";
  }
};

export const validateRequiredFields = (formData: FormData): boolean => {
  return !!(formData.businessName && formData.businessType);
};

// Design style validation and mapping
export const validateDesignStyle = (style: string): boolean => {
  const validStyles = [
    'dynamic-gradients',
    'sparkles-effects', 
    'animated-paths',
    'fluid-blobs',
    'spline-3d'
  ];
  return validStyles.includes(style);
};

export const getDesignStyleDescription = (style: string): string => {
  switch (style) {
    case 'dynamic-gradients':
      return 'גרדיאנטים דינמיים עם אפקטי חלקיקים מרהיבים - הבחירה הבטוחה ביותר';
    case 'sparkles-effects':
      return 'אפקטי נוצץ אינטראקטיביים עם תאורה דינמית';
    case 'animated-paths':
      return 'נתיבים מונפשים עם עקומות חלקות ואלגנטיות';
    case 'fluid-blobs':
      return 'בועות נוזל תלת מימדיות עם אפקטים מתקדמים - מותאם לביצועים';
    case 'spline-3d':
      return 'סצנות תלת מימד פרימיום עם אובייקטים מרחפים';
    default:
      return 'עיצוב פרימיום מותאם אישית';
  }
};
