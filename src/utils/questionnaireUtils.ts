
export interface FormData {
  businessName: string;
  businessType: string;
  targetAudience: string;
  businessAdvantages: string;
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
  targetAudience: "",
  businessAdvantages: "",
  mainGoal: "",
  keyFeatures: "",
  contactInfo: "",
  designStyle: "dynamic-gradients", // Default to the enhanced dynamic gradients
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
      return "סגנון עיצוב טכנולוגי מתקדם";
    case 4:
      return "בחירת אלמנטים";
    default:
      return "";
  }
};

export const validateRequiredFields = (formData: FormData): boolean => {
  return !!(formData.businessName && formData.businessType);
};

// Enhanced design style validation and mapping
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
      return 'גרדיאנטים דינמיים AI עם אפקטי חלקיקים מתקדמים - טכנולוגיה מהפנטת ברמה בינלאומית';
    case 'sparkles-effects':
      return 'מערכת חלקיקים אינטראקטיבית עם תגובה לעכבר - אפקטי נוצץ מרהיבים ומתקדמים';
    case 'animated-paths':
      return 'נתיבים מונפשים פרימיום עם עקומות SVG איכותיות - עיצוב מינימליסטי ואלגנטי';
    case 'fluid-blobs':
      return 'בועות נוזל מרובות צבעים עם אנימציה טבעית ואורגנית - מושלם לעסקים יצירתיים';
    case 'spline-3d':
      return 'סצנות תלת מימד מתקדמות עם תנועה מרשימה - ברמת Three.js ואמנות דיגיטלית';
    default:
      return 'עיצוב טכנולוגי מתקדם מותאם אישית';
  }
};
