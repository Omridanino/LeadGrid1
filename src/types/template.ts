export interface TemplateStyles {
  // Background colors for each section
  backgroundColor: string;
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
  
  // Background images for each section (optional)
  heroBackgroundImage?: string;
  emotionalBackgroundImage?: string;
  featuresBackgroundImage?: string;
  testimonialsBackgroundImage?: string;
  aboutBackgroundImage?: string;
  pricingBackgroundImage?: string;
  faqBackgroundImage?: string;
  finalCtaBackgroundImage?: string;
  contactBackgroundImage?: string;
  footerBackgroundImage?: string;
  
  // Text and accent colors
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  
  // Premium section-specific colors (optional)
  emotionalTitleColor?: string;
  emotionalTextColor?: string;
  emotionalBadgeColor?: string;
  featuresTitleColor?: string;
  featuresTextColor?: string;
  featuresBadgeColor?: string;
  testimonialsTitleColor?: string;
  testimonialsTextColor?: string;
  testimonialsBadgeColor?: string;
  aboutTitleColor?: string;
  aboutTextColor?: string;
  aboutBadgeColor?: string;
  pricingTitleColor?: string;
  pricingTextColor?: string;
  pricingBadgeColor?: string;
  faqTitleColor?: string;
  faqTextColor?: string;
  faqBadgeColor?: string;
  finalCtaTitleColor?: string;
  finalCtaTextColor?: string;
  finalCtaBadgeColor?: string;
  contactTitleColor?: string;
  contactTextColor?: string;
  contactBadgeColor?: string;
}

export interface HeroSection {
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
  image?: string;
}

export interface EmotionalSection {
  badge?: string;
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export interface FinalCtaSection {
  badge?: string;
  title: string;
  description: string;
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export interface FeaturesSection {
  badge?: string;
  title: string;
  subtitle?: string;
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export interface TestimonialsSection {
  badge?: string;
  title: string;
  testimonials: {
    name: string;
    role: string;
    content: string;
    rating: number;
    image?: string;
  }[];
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export interface AboutSection {
  badge?: string;
  title: string;
  description: string;
  image?: string;
  stats?: {
    number: string;
    label: string;
  }[];
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export interface PricingSection {
  badge?: string;
  title: string;
  subtitle?: string;
  plans: {
    name: string;
    price: string;
    period: string;
    features: string[];
    recommended?: boolean;
    buttonText: string;
  }[];
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export interface FaqSection {
  badge?: string;
  title: string;
  subtitle?: string;
  questions: {
    question: string;
    answer: string;
  }[];
  button1Text: string;
  button2Text: string;
  button1Icon?: string;
  button2Icon?: string;
}

export interface ContactSection {
  title: string;
  subtitle?: string;
  buttonText: string;
  fields?: {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
  }[];
}

export interface GallerySection {
  badge?: string;
  title: string;
  subtitle?: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  layout: 'grid' | 'masonry' | 'carousel';
  columns?: number;
}

export interface HeadingSection {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment: 'left' | 'center' | 'right';
  size: 'small' | 'medium' | 'large' | 'xl';
}

export interface TextSection {
  badge?: string;
  title?: string;
  content: string;
  alignment: 'left' | 'center' | 'right';
  textSize: 'small' | 'medium' | 'large';
}

export interface VideoSection {
  badge?: string;
  title?: string;
  subtitle?: string;
  videoUrl: string;
  videoType: 'youtube' | 'vimeo' | 'direct';
  thumbnail?: string;
  autoplay?: boolean;
  controls?: boolean;
}

export interface SliderSection {
  badge?: string;
  title?: string;
  subtitle?: string;
  slides: {
    title: string;
    description: string;
    image?: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
  autoplay?: boolean;
  duration?: number;
}

export interface ListSection {
  badge?: string;
  title?: string;
  subtitle?: string;
  items: {
    title: string;
    description?: string;
    icon?: string;
    link?: string;
  }[];
  listType: 'ordered' | 'unordered' | 'icon';
}

export interface EmbedSection {
  badge?: string;
  title?: string;
  subtitle?: string;
  htmlCode: string;
  height?: number;
}

export interface SocialBarSection {
  badge?: string;
  title?: string;
  subtitle?: string;
  socialLinks: {
    platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok' | 'whatsapp' | 'telegram';
    url: string;
    label?: string;
  }[];
  alignment: 'left' | 'center' | 'right';
  showLabels?: boolean;
}

export interface FooterSection {
  companyName: string;
  description?: string;
  links?: {
    category: string;
    items: {
      name: string;
      href: string;
    }[];
  }[];
  socialMedia?: {
    name: string;
    href: string;
    icon: string;
  }[];
  contactInfo?: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface TemplateEffects {
  hero?: string | null;
  emotional?: string | null;
  features?: string | null;
  testimonials?: string | null;
  about?: string | null;
  pricing?: string | null;
  faq?: string | null;
  finalCta?: string | null;
  contact?: string | null;
}

export interface TemplateData {
  id: string;
  name: string;
  category: string;
  hero: HeroSection;
  emotional: EmotionalSection;
  features: FeaturesSection;
  testimonials: TestimonialsSection;
  about: AboutSection;
  pricing: PricingSection;
  faq: FaqSection;
  finalCta: FinalCtaSection;
  contact: ContactSection;
  footer: FooterSection;
  // New content sections
  gallery?: GallerySection;
  heading?: HeadingSection;
  text?: TextSection;
  video?: VideoSection;
  slider?: SliderSection;
  list?: ListSection;
  embed?: EmbedSection;
  socialBar?: SocialBarSection;
  // Array of custom sections order
  sectionsOrder?: string[];
  styles: TemplateStyles;
  effects?: TemplateEffects;
}
