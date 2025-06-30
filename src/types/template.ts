
export interface TemplateData {
  id: number;
  name: string;
  category: 'minimal' | 'colorful' | 'artistic' | 'corporate' | 'organic' | 'tech';
  hero: {
    badge?: string;
    title: string;
    subtitle: string;
    description: string;
    button1Text: string;
    button2Text: string;
    image?: string;
  };
  emotional: {
    badge?: string;
    title: string;
    description: string;
    button1Text: string;
    button2Text: string;
  };
  features: {
    badge?: string;
    title: string;
    subtitle?: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
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
      image?: string;
    }>;
    button1Text: string;
    button2Text: string;
  };
  about: {
    badge?: string;
    title: string;
    description: string;
    image?: string;
    stats?: Array<{
      number: string;
      label: string;
    }>;
    button1Text: string;
    button2Text: string;
  };
  pricing: {
    badge?: string;
    title: string;
    subtitle?: string;
    plans: Array<{
      name: string;
      price: string;
      period: string;
      features: string[];
      recommended?: boolean;
      buttonText: string;
    }>;
    button1Text: string;
    button2Text: string;
  };
  faq: {
    badge?: string;
    title: string;
    subtitle?: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
    button1Text: string;
    button2Text: string;
  };
  finalCta: {
    badge?: string;
    title: string;
    description: string;
    button1Text: string;
    button2Text: string;
  };
  contact: {
    title: string;
    subtitle?: string;
    fields: Array<{
      name: string;
      type: string;
      placeholder: string;
      required: boolean;
    }>;
    buttonText: string;
  };
  footer: {
    companyName: string;
    description: string;
    links: Array<{
      category: string;
      items: Array<{
        name: string;
        href: string;
      }>;
    }>;
    socialMedia: Array<{
      name: string;
      href: string;
      icon: string;
    }>;
    contactInfo: {
      address: string;
      phone: string;
      email: string;
    };
  };
  styles: {
    backgroundColor: string;
    textColor: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    heroBackground: string;
    emotionalBackground: string;
    featuresBackground: string;
    testimonialsBackground: string;
    aboutBackground: string;
    pricingBackground: string;
    faqBackground: string;
    finalCtaBackground: string;
    contactBackground: string;
    footerBackground: string;
  };
}
