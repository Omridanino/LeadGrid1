// מחולל 60 עיצובים שונים - 35 בסיסיים + 25 פרימיום

interface DesignTemplate {
  id: string;
  name: string;
  category: 'basic' | 'premium';
  styles: {
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
    textColor: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  effects: {
    hero: string;
    emotional: string;
    features: string;
    testimonials: string;
    about: string;
    pricing: string;
    faq: string;
    finalCta: string;
    contact: string;
  };
}

// 35 עיצובים בסיסיים
const basicDesigns: DesignTemplate[] = [
  // כחול מקצועי #1
  {
    id: 'basic-blue-1',
    name: 'כחול מקצועי קלאסי',
    category: 'basic',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      emotionalBackground: '#2563eb',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '217 91% 60%',
      secondaryColor: '224 76% 48%',
      accentColor: '213 94% 68%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // ירוק טבע #2
  {
    id: 'basic-green-1',
    name: 'ירוק טבע מרגיע',
    category: 'basic',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      emotionalBackground: '#059669',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '158 64% 52%',
      secondaryColor: '160 84% 39%',
      accentColor: '142 76% 73%'
    },
    effects: {
      hero: 'clean',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'glass-refraction',
      contact: 'clean'
    }
  },
  // סגול יצירתי #3
  {
    id: 'basic-purple-1',
    name: 'סגול יצירתי אלגנטי',
    category: 'basic',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      emotionalBackground: '#8b5cf6',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '262 83% 58%',
      secondaryColor: '263 70% 50%',
      accentColor: '270 81% 71%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'clean',
      contact: 'minimal-tech'
    }
  }
  // ... עוד 32 עיצובים בסיסיים ייווספו
];

// 25 עיצובים פרימיום
const premiumDesigns: DesignTemplate[] = [
  // נאון קיברנטי #1
  {
    id: 'premium-cyber-1',
    name: 'נאון קיברנטי פוטוריסטי',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #00d4ff 0%, #ff0080 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '194 100% 50%',
      secondaryColor: '195 100% 40%',
      accentColor: '195 100% 70%'
    },
    effects: {
      hero: 'neon-grid-portal',
      emotional: 'digital-waves',
      features: 'holographic',
      testimonials: 'quantum-bubbles',
      about: 'crystal-matrix',
      pricing: 'cosmic-geometry',
      faq: 'particle-storm',
      finalCta: 'liquid-metal',
      contact: 'morphing-shapes'
    }
  },
  // ורוד נאון #2
  {
    id: 'premium-neon-pink-1',
    name: 'ורוד נאון אנרגטי',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #1a0d1a 0%, #2d1b2e 50%, #4a1a4a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ff0080 0%, #ff8c00 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ff0080 0%, #8000ff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '320 100% 50%',
      secondaryColor: '280 100% 50%',
      accentColor: '300 100% 70%'
    },
    effects: {
      hero: 'holographic',
      emotional: 'liquid-metal',
      features: 'neon-grid-portal',
      testimonials: 'morphing-shapes',
      about: 'digital-waves',
      pricing: 'quantum-bubbles',
      faq: 'crystal-matrix',
      finalCta: 'particle-storm',
      contact: 'cosmic-geometry'
    }
  }
  // ... עוד 23 עיצובים פרימיום ייווספו
];

// פונקציה לקבלת עיצוב רנדומלי
export const getRandomDesign = (packageType: 'basic' | 'premium'): DesignTemplate => {
  const designs = packageType === 'basic' ? basicDesigns : premiumDesigns;
  const randomIndex = Math.floor(Math.random() * designs.length);
  return designs[randomIndex];
};

// פונקציה לקבלת כל העיצובים
export const getAllDesigns = (): DesignTemplate[] => {
  return [...basicDesigns, ...premiumDesigns];
};

export { basicDesigns, premiumDesigns };
export type { DesignTemplate };