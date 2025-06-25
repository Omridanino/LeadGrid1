
export interface FormData {
  businessName: string;
  businessType: string;
  targetAudience: string;
  businessAdvantages: string;
  mainGoal: string;
  keyFeatures: string;
  brandColors: string;
  contactInfo: string;
  heroStyle: string;
  selectedElements: string[];
}

export const initialFormData: FormData = {
  businessName: "",
  businessType: "",
  targetAudience: "",
  businessAdvantages: "",
  mainGoal: "",
  keyFeatures: "",
  brandColors: "",
  contactInfo: "",
  heroStyle: "gradient",
  selectedElements: []
};

export const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "פרטי העסק";
    case 2:
      return "יעדים ותכונות";
    case 3:
      return "מיתוג וצבעים";
    case 4:
      return "סגנון עיצוב";
    case 5:
      return "בחירת אלמנטים";
    default:
      return "";
  }
};

export const validateRequiredFields = (formData: FormData): boolean => {
  return !!(formData.businessName && formData.businessType);
};
