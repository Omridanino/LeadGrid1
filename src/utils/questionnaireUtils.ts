
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
  heroStyle: "fluid-morphing",
  designStyle: "fluid-blobs", // Default to new fluid blobs design
  navigationStyle: "floating", // Default to floating navigation
  selectedElements: []
};

export const getStepTitle = (step: number): string => {
  switch (step) {
    case 1:
      return "פרטי העסק";
    case 2:
      return "יעדים ותכונות";
    case 3:
      return "סגנון עיצוב חדש";
    case 4:
      return "בחירת אלמנטים";
    default:
      return "";
  }
};

export const validateRequiredFields = (formData: FormData): boolean => {
  return !!(formData.businessName && formData.businessType);
};
