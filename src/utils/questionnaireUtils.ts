
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
  designStyle: "hero-section-modern",
  navigationStyle: "floating",
  selectedElements: []
};

export const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "פרטי העסק והסיפור שלו";
    case 2:
      return "שירותים, יתרונות וקהל יעד";
    case 3:
      return "סגנון עיצוב טכנולוגי מתקדם";
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

// Enhanced design style validation and mapping
export const validateDesignStyle = (style: string): boolean => {
  const validStyles = [
    'hero-section-modern',
    'hero-section-animated', 
    'hero-section-typewriter',
    'hero-section-rotating',
    'basic',
    '3d-tech'
  ];
  return validStyles.includes(style);
};

export const getDesignStyleDescription = (style: string): string => {
  switch (style) {
    case 'hero-section-modern':
      return 'עיצוב מודרני מתקדם עם אנימציות חלקות וטיפוגרפיה יפה - מתאים לעסקים מקצועיים';
    case 'hero-section-animated':
      return 'עיצוב עם אנימציות מתקדמות וקבוצות אנימציה - מושלם לעסקים יצירתיים';
    case 'hero-section-typewriter':
      return 'עיצוב עם אפקט מכונת כתיבה דינמי - מתאים לעסקים טכנולוגיים';
    case 'hero-section-rotating':
      return 'עיצוב עם טקסט מתחלף וחלק - מושלם לעסקים רב-תחומיים';
    case 'basic':
      return 'עיצוב נקי וקלאסי עם אפקטים בסיסיים - מתאים לכל סוג עסק ולכל קהל';
    case '3d-tech':
      return 'עיצוב טכנולוגי מתקדם עם אפקטים תלת-מימדיים מרשימים - מושלם לעסקים חדשניים ומתקדמים';
    default:
      return 'עיצוב טכנולוגי מתקדם מותאם אישית';
  }
};
