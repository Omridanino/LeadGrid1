
export interface TemplateData {
  id: number;
  name: string;
  category: 'basic' | '3d' | 'glass' | 'geometric' | 'creative';
  hero: {
    badge?: string;
    title: string;
    subtitle: string;
    description: string;
    button1Text: string;
    button2Text: string;
  };
  emotional: {
    badge?: string;
    title: string;
    description: string;
    button1Text: string;
    button2Text: string;
  };
  testimonials: {
    badge?: string;
    title: string;
    testimonials: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
    }>;
    button1Text: string;
    button2Text: string;
  };
  about: {
    title: string;
    description: string;
    button1Text: string;
    button2Text: string;
  };
  gallery: {
    title: string;
    images: string[];
    button1Text: string;
    button2Text: string;
  };
  process?: {
    title?: string;
    steps: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
    button1Text: string;
    button2Text: string;
  };
  whyUs: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
    button1Text: string;
    button2Text: string;
  };
  contact: {
    title: string;
    subtitle?: string;
  };
  styles: {
    backgroundColor: string;
    textColor: string;
    primaryColor: string;
    secondaryColor: string;
    heroBackground: string;
    emotionalBackground: string;
    testimonialsBackground: string;
    aboutBackground: string;
    galleryBackground: string;
    processBackground: string;
    whyUsBackground: string;
    contactBackground: string;
  };
}
