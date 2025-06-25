
export interface FormData {
  businessName: string;
  businessType: string;
  targetAudience: string;
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
  mainGoal: "",
  keyFeatures: "",
  brandColors: "",
  contactInfo: "",
  heroStyle: "gradient",
  selectedElements: []
};

export const getStepTitle = (step: number): string => {
  const titles = {
    1: "פרטים בסיסיים על העסק",
    2: "מטרות ותכונות",
    3: "עיצוב ויצירת קשר",
    4: "סגנון תצוגה",
    5: "אלמנטים לדף"
  };
  return titles[step as keyof typeof titles] || "";
};

export const validateRequiredFields = (formData: FormData): boolean => {
  return !!(formData.businessName && formData.businessType);
};
