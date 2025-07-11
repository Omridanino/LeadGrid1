// מחולל 60 עיצובים שונים לחלוטין - 35 בסיסיים + 25 פרימיום

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
  // #1 כחול אוקיינוס
  {
    id: 'basic-ocean-blue',
    name: 'כחול אוקיינוס רגוע',
    category: 'basic',
    styles: {
      backgroundColor: '220 14% 96%',
      heroBackground: 'linear-gradient(135deg, #0369a1 0%, #0284c7 100%)',
      emotionalBackground: '#0ea5e9',
      featuresBackground: '220 13% 91%',
      testimonialsBackground: '220 14% 96%',
      aboutBackground: '220 13% 91%',
      pricingBackground: '220 13% 91%',
      faqBackground: '220 14% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #0369a1 0%, #0284c7 100%)',
      contactBackground: '220 13% 91%',
      footerBackground: '220 9% 46%',
      textColor: '220 9% 46%',
      primaryColor: '199 89% 48%',
      secondaryColor: '200 98% 39%',
      accentColor: '198 93% 60%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #2 ירוק יער
  {
    id: 'basic-forest-green',
    name: 'ירוק יער טבעי',
    category: 'basic',
    styles: {
      backgroundColor: '142 76% 36%',
      heroBackground: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)',
      emotionalBackground: '#22c55e',
      featuresBackground: '142 69% 58%',
      testimonialsBackground: '142 76% 36%',
      aboutBackground: '142 69% 58%',
      pricingBackground: '142 69% 58%',
      faqBackground: '142 76% 36%',
      finalCtaBackground: 'linear-gradient(135deg, #15803d 0%, #16a34a 100%)',
      contactBackground: '142 69% 58%',
      footerBackground: '142 72% 29%',
      textColor: '#ffffff',
      primaryColor: '142 76% 36%',
      secondaryColor: '142 71% 45%',
      accentColor: '141 84% 57%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #3 סגול אלגנטי
  {
    id: 'basic-elegant-purple',
    name: 'סגול אלגנטי מלכותי',
    category: 'basic',
    styles: {
      backgroundColor: '250 100% 97%',
      heroBackground: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      emotionalBackground: '#8b5cf6',
      featuresBackground: '250 100% 92%',
      testimonialsBackground: '250 100% 97%',
      aboutBackground: '250 100% 92%',
      pricingBackground: '250 100% 92%',
      faqBackground: '250 100% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
      contactBackground: '250 100% 92%',
      footerBackground: '263 70% 50%',
      textColor: '262 90% 17%',
      primaryColor: '262 83% 58%',
      secondaryColor: '263 70% 50%',
      accentColor: '270 81% 71%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #4 כתום אנרגטי
  {
    id: 'basic-energetic-orange',
    name: 'כתום אנרגטי חם',
    category: 'basic',
    styles: {
      backgroundColor: '48 100% 96%',
      heroBackground: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
      emotionalBackground: '#fb923c',
      featuresBackground: '48 96% 89%',
      testimonialsBackground: '48 100% 96%',
      aboutBackground: '48 96% 89%',
      pricingBackground: '48 96% 89%',
      faqBackground: '48 100% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
      contactBackground: '48 96% 89%',
      footerBackground: '24 95% 53%',
      textColor: '24 45% 20%',
      primaryColor: '20.5 90.2% 48.2%',
      secondaryColor: '24 95% 53%',
      accentColor: '22 93% 64%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #5 אדום עוצמתי
  {
    id: 'basic-powerful-red',
    name: 'אדום עוצמתי דינמי',
    category: 'basic',
    styles: {
      backgroundColor: '0 85% 97%',
      heroBackground: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
      emotionalBackground: '#f87171',
      featuresBackground: '0 84% 92%',
      testimonialsBackground: '0 85% 97%',
      aboutBackground: '0 84% 92%',
      pricingBackground: '0 84% 92%',
      faqBackground: '0 85% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
      contactBackground: '0 84% 92%',
      footerBackground: '0 84% 60%',
      textColor: '0 74% 42%',
      primaryColor: '0 84% 60%',
      secondaryColor: '0 74% 42%',
      accentColor: '0 93% 94%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #6 ורוד עדין
  {
    id: 'basic-soft-pink',
    name: 'ורוד עדין נשי',
    category: 'basic',
    styles: {
      backgroundColor: '327 73% 97%',
      heroBackground: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      emotionalBackground: '#f9a8d4',
      featuresBackground: '327 73% 94%',
      testimonialsBackground: '327 73% 97%',
      aboutBackground: '327 73% 94%',
      pricingBackground: '327 73% 94%',
      faqBackground: '327 73% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      contactBackground: '327 73% 94%',
      footerBackground: '327 73% 84%',
      textColor: '327 90% 18%',
      primaryColor: '322 81% 57%',
      secondaryColor: '327 73% 84%',
      accentColor: '325 78% 86%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #7 תכלת טרופי
  {
    id: 'basic-tropical-cyan',
    name: 'תכלת טרופי רענן',
    category: 'basic',
    styles: {
      backgroundColor: '188 100% 96%',
      heroBackground: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
      emotionalBackground: '#22d3ee',
      featuresBackground: '188 100% 91%',
      testimonialsBackground: '188 100% 96%',
      aboutBackground: '188 100% 91%',
      pricingBackground: '188 100% 91%',
      faqBackground: '188 100% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
      contactBackground: '188 100% 91%',
      footerBackground: '188 95% 37%',
      textColor: '188 81% 19%',
      primaryColor: '187 85% 53%',
      secondaryColor: '188 95% 37%',
      accentColor: '185 96% 78%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #8 אפור מודרני
  {
    id: 'basic-modern-gray',
    name: 'אפור מודרני מינימליסטי',
    category: 'basic',
    styles: {
      backgroundColor: '210 20% 98%',
      heroBackground: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
      emotionalBackground: '#6b7280',
      featuresBackground: '210 20% 95%',
      testimonialsBackground: '210 20% 98%',
      aboutBackground: '210 20% 95%',
      pricingBackground: '210 20% 95%',
      faqBackground: '210 20% 98%',
      finalCtaBackground: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
      contactBackground: '210 20% 95%',
      footerBackground: '215 25% 27%',
      textColor: '215 25% 27%',
      primaryColor: '215 28% 17%',
      secondaryColor: '215 25% 27%',
      accentColor: '214 32% 91%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #9 חום טבעי
  {
    id: 'basic-natural-brown',
    name: 'חום טבעי חם',
    category: 'basic',
    styles: {
      backgroundColor: '30 67% 94%',
      heroBackground: 'linear-gradient(135deg, #92400e 0%, #b45309 100%)',
      emotionalBackground: '#d97706',
      featuresBackground: '30 67% 88%',
      testimonialsBackground: '30 67% 94%',
      aboutBackground: '30 67% 88%',
      pricingBackground: '30 67% 88%',
      faqBackground: '30 67% 94%',
      finalCtaBackground: 'linear-gradient(135deg, #92400e 0%, #b45309 100%)',
      contactBackground: '30 67% 88%',
      footerBackground: '30 67% 70%',
      textColor: '30 67% 20%',
      primaryColor: '32 95% 44%',
      secondaryColor: '30 67% 70%',
      accentColor: '30 67% 88%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #10 כחול כהה מקצועי
  {
    id: 'basic-professional-navy',
    name: 'כחול כהה מקצועי',
    category: 'basic',
    styles: {
      backgroundColor: '217 91% 60%',
      heroBackground: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
      emotionalBackground: '#3b82f6',
      featuresBackground: '217 91% 70%',
      testimonialsBackground: '217 91% 60%',
      aboutBackground: '217 91% 70%',
      pricingBackground: '217 91% 70%',
      faqBackground: '217 91% 60%',
      finalCtaBackground: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)',
      contactBackground: '217 91% 70%',
      footerBackground: '224 76% 48%',
      textColor: '#ffffff',
      primaryColor: '217 91% 60%',
      secondaryColor: '224 76% 48%',
      accentColor: '213 94% 68%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #11 ירוק זית
  {
    id: 'basic-olive-green',
    name: 'ירוק זית אלגנטי',
    category: 'basic',
    styles: {
      backgroundColor: '84 65% 93%',
      heroBackground: 'linear-gradient(135deg, #65a30d 0%, #84cc16 100%)',
      emotionalBackground: '#a3e635',
      featuresBackground: '84 65% 87%',
      testimonialsBackground: '84 65% 93%',
      aboutBackground: '84 65% 87%',
      pricingBackground: '84 65% 87%',
      faqBackground: '84 65% 93%',
      finalCtaBackground: 'linear-gradient(135deg, #65a30d 0%, #84cc16 100%)',
      contactBackground: '84 65% 87%',
      footerBackground: '82 84% 55%',
      textColor: '84 33% 15%',
      primaryColor: '82 84% 55%',
      secondaryColor: '84 33% 15%',
      accentColor: '84 65% 87%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #12 צהוב שמח
  {
    id: 'basic-happy-yellow',
    name: 'צהוב שמח אופטימי',
    category: 'basic',
    styles: {
      backgroundColor: '54 91% 95%',
      heroBackground: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
      emotionalBackground: '#fbbf24',
      featuresBackground: '54 91% 88%',
      testimonialsBackground: '54 91% 95%',
      aboutBackground: '54 91% 88%',
      pricingBackground: '54 91% 88%',
      faqBackground: '54 91% 95%',
      finalCtaBackground: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
      contactBackground: '54 91% 88%',
      footerBackground: '43 96% 56%',
      textColor: '45 29% 27%',
      primaryColor: '43 96% 56%',
      secondaryColor: '45 29% 27%',
      accentColor: '54 91% 88%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #13 אינדיגו עמוק
  {
    id: 'basic-deep-indigo',
    name: 'אינדיגו עמוק מסתורי',
    category: 'basic',
    styles: {
      backgroundColor: '231 48% 95%',
      heroBackground: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
      emotionalBackground: '#818cf8',
      featuresBackground: '231 48% 88%',
      testimonialsBackground: '231 48% 95%',
      aboutBackground: '231 48% 88%',
      pricingBackground: '231 48% 88%',
      faqBackground: '231 48% 95%',
      finalCtaBackground: 'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
      contactBackground: '231 48% 88%',
      footerBackground: '239 84% 67%',
      textColor: '239 84% 18%',
      primaryColor: '239 84% 67%',
      secondaryColor: '239 84% 18%',
      accentColor: '231 48% 88%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #14 ורוד מאגנטה
  {
    id: 'basic-magenta-pink',
    name: 'ורוד מאגנטה נועז',
    category: 'basic',
    styles: {
      backgroundColor: '300 100% 97%',
      heroBackground: 'linear-gradient(135deg, #c026d3 0%, #d946ef 100%)',
      emotionalBackground: '#e879f9',
      featuresBackground: '300 100% 92%',
      testimonialsBackground: '300 100% 97%',
      aboutBackground: '300 100% 92%',
      pricingBackground: '300 100% 92%',
      faqBackground: '300 100% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #c026d3 0%, #d946ef 100%)',
      contactBackground: '300 100% 92%',
      footerBackground: '300 81% 69%',
      textColor: '300 81% 19%',
      primaryColor: '300 81% 69%',
      secondaryColor: '300 81% 19%',
      accentColor: '300 100% 92%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #15 תכלת ים
  {
    id: 'basic-sea-teal',
    name: 'תכלת ים רגוע',
    category: 'basic',
    styles: {
      backgroundColor: '173 80% 94%',
      heroBackground: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      emotionalBackground: '#2dd4bf',
      featuresBackground: '173 80% 86%',
      testimonialsBackground: '173 80% 94%',
      aboutBackground: '173 80% 86%',
      pricingBackground: '173 80% 86%',
      faqBackground: '173 80% 94%',
      finalCtaBackground: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      contactBackground: '173 80% 86%',
      footerBackground: '173 80% 76%',
      textColor: '173 80% 16%',
      primaryColor: '173 80% 40%',
      secondaryColor: '173 80% 76%',
      accentColor: '173 80% 86%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #16 לבנדר עדין
  {
    id: 'basic-gentle-lavender',
    name: 'לבנדר עדין מרגיע',
    category: 'basic',
    styles: {
      backgroundColor: '270 100% 98%',
      heroBackground: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
      emotionalBackground: '#a78bfa',
      featuresBackground: '270 100% 94%',
      testimonialsBackground: '270 100% 98%',
      aboutBackground: '270 100% 94%',
      pricingBackground: '270 100% 94%',
      faqBackground: '270 100% 98%',
      finalCtaBackground: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
      contactBackground: '270 100% 94%',
      footerBackground: '270 81% 71%',
      textColor: '270 81% 21%',
      primaryColor: '270 81% 71%',
      secondaryColor: '270 81% 21%',
      accentColor: '270 100% 94%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #17 שחור אלגנטי
  {
    id: 'basic-elegant-black',
    name: 'שחור אלגנטי יוקרתי',
    category: 'basic',
    styles: {
      backgroundColor: '0 0% 100%',
      heroBackground: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
      emotionalBackground: '#374151',
      featuresBackground: '220 13% 91%',
      testimonialsBackground: '0 0% 100%',
      aboutBackground: '220 13% 91%',
      pricingBackground: '220 13% 91%',
      faqBackground: '0 0% 100%',
      finalCtaBackground: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
      contactBackground: '220 13% 91%',
      footerBackground: '0 0% 0%',
      textColor: '0 0% 13%',
      primaryColor: '0 0% 0%',
      secondaryColor: '215 28% 17%',
      accentColor: '220 13% 91%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #18 לבן נקי
  {
    id: 'basic-clean-white',
    name: 'לבן נקי מינימליסטי',
    category: 'basic',
    styles: {
      backgroundColor: '0 0% 100%',
      heroBackground: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      emotionalBackground: '#cbd5e1',
      featuresBackground: '210 40% 98%',
      testimonialsBackground: '0 0% 100%',
      aboutBackground: '210 40% 98%',
      pricingBackground: '210 40% 98%',
      faqBackground: '0 0% 100%',
      finalCtaBackground: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      contactBackground: '210 40% 98%',
      footerBackground: '215 16% 47%',
      textColor: '215 28% 17%',
      primaryColor: '215 16% 47%',
      secondaryColor: '215 28% 17%',
      accentColor: '210 40% 98%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #19 ורוד אפרסק
  {
    id: 'basic-peach-pink',
    name: 'ורוד אפרסק חם',
    category: 'basic',
    styles: {
      backgroundColor: '24 100% 97%',
      heroBackground: 'linear-gradient(135deg, #fb7185 0%, #fda4af 100%)',
      emotionalBackground: '#fecaca',
      featuresBackground: '24 100% 92%',
      testimonialsBackground: '24 100% 97%',
      aboutBackground: '24 100% 92%',
      pricingBackground: '24 100% 92%',
      faqBackground: '24 100% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #fb7185 0%, #fda4af 100%)',
      contactBackground: '24 100% 92%',
      footerBackground: '347 77% 50%',
      textColor: '347 77% 20%',
      primaryColor: '347 77% 50%',
      secondaryColor: '347 77% 20%',
      accentColor: '24 100% 92%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #20 כחול רויאל
  {
    id: 'basic-royal-blue',
    name: 'כחול רויאל מלכותי',
    category: 'basic',
    styles: {
      backgroundColor: '224 100% 98%',
      heroBackground: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
      emotionalBackground: '#60a5fa',
      featuresBackground: '224 100% 94%',
      testimonialsBackground: '224 100% 98%',
      aboutBackground: '224 100% 94%',
      pricingBackground: '224 100% 94%',
      faqBackground: '224 100% 98%',
      finalCtaBackground: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
      contactBackground: '224 100% 94%',
      footerBackground: '213 94% 68%',
      textColor: '213 94% 18%',
      primaryColor: '213 94% 68%',
      secondaryColor: '213 94% 18%',
      accentColor: '224 100% 94%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #21 ירוק מנטה
  {
    id: 'basic-mint-green',
    name: 'ירוק מנטה רענן',
    category: 'basic',
    styles: {
      backgroundColor: '152 81% 96%',
      heroBackground: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      emotionalBackground: '#34d399',
      featuresBackground: '152 81% 88%',
      testimonialsBackground: '152 81% 96%',
      aboutBackground: '152 81% 88%',
      pricingBackground: '152 81% 88%',
      faqBackground: '152 81% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
      contactBackground: '152 81% 88%',
      footerBackground: '158 64% 52%',
      textColor: '158 64% 22%',
      primaryColor: '158 64% 52%',
      secondaryColor: '158 64% 22%',
      accentColor: '152 81% 88%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #22 כתום דלעת
  {
    id: 'basic-pumpkin-orange',
    name: 'כתום דלעת עשיר',
    category: 'basic',
    styles: {
      backgroundColor: '33 100% 96%',
      heroBackground: 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)',
      emotionalBackground: '#fb923c',
      featuresBackground: '33 100% 90%',
      testimonialsBackground: '33 100% 96%',
      aboutBackground: '33 100% 90%',
      pricingBackground: '33 100% 90%',
      faqBackground: '33 100% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)',
      contactBackground: '33 100% 90%',
      footerBackground: '20.5 90.2% 48.2%',
      textColor: '20.5 90.2% 18.2%',
      primaryColor: '20.5 90.2% 48.2%',
      secondaryColor: '20.5 90.2% 18.2%',
      accentColor: '33 100% 90%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #23 בורדו יוקרתי
  {
    id: 'basic-luxurious-burgundy',
    name: 'בורדו יוקרתי אלגנטי',
    category: 'basic',
    styles: {
      backgroundColor: '350 89% 96%',
      heroBackground: 'linear-gradient(135deg, #881337 0%, #be123c 100%)',
      emotionalBackground: '#e11d48',
      featuresBackground: '350 89% 90%',
      testimonialsBackground: '350 89% 96%',
      aboutBackground: '350 89% 90%',
      pricingBackground: '350 89% 90%',
      faqBackground: '350 89% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #881337 0%, #be123c 100%)',
      contactBackground: '350 89% 90%',
      footerBackground: '348 83% 47%',
      textColor: '348 83% 17%',
      primaryColor: '348 83% 47%',
      secondaryColor: '348 83% 17%',
      accentColor: '350 89% 90%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #24 צהוב לימון
  {
    id: 'basic-lemon-yellow',
    name: 'צהוב לימון חיוני',
    category: 'basic',
    styles: {
      backgroundColor: '60 100% 97%',
      heroBackground: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)',
      emotionalBackground: '#facc15',
      featuresBackground: '60 100% 92%',
      testimonialsBackground: '60 100% 97%',
      aboutBackground: '60 100% 92%',
      pricingBackground: '60 100% 92%',
      faqBackground: '60 100% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #ca8a04 0%, #eab308 100%)',
      contactBackground: '60 100% 92%',
      footerBackground: '47 96% 89%',
      textColor: '45 29% 27%',
      primaryColor: '47 96% 89%',
      secondaryColor: '45 29% 27%',
      accentColor: '60 100% 92%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #25 כחול קרח
  {
    id: 'basic-ice-blue',
    name: 'כחול קרח קריר',
    category: 'basic',
    styles: {
      backgroundColor: '200 100% 97%',
      heroBackground: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
      emotionalBackground: '#38bdf8',
      featuresBackground: '200 100% 91%',
      testimonialsBackground: '200 100% 97%',
      aboutBackground: '200 100% 91%',
      pricingBackground: '200 100% 91%',
      faqBackground: '200 100% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)',
      contactBackground: '200 100% 91%',
      footerBackground: '198 93% 60%',
      textColor: '198 93% 20%',
      primaryColor: '198 93% 60%',
      secondaryColor: '198 93% 20%',
      accentColor: '200 100% 91%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #26 סגול זה
  {
    id: 'basic-violet-purple',
    name: 'סגול זה יצירתי',
    category: 'basic',
    styles: {
      backgroundColor: '258 90% 97%',
      heroBackground: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
      emotionalBackground: '#a78bfa',
      featuresBackground: '258 90% 92%',
      testimonialsBackground: '258 90% 97%',
      aboutBackground: '258 90% 92%',
      pricingBackground: '258 90% 92%',
      faqBackground: '258 90% 97%',
      finalCtaBackground: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
      contactBackground: '258 90% 92%',
      footerBackground: '262 83% 58%',
      textColor: '262 83% 18%',
      primaryColor: '262 83% 58%',
      secondaryColor: '262 83% 18%',
      accentColor: '258 90% 92%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #27 ירוק עמרלד
  {
    id: 'basic-emerald-green',
    name: 'ירוק עמרלד יקר',
    category: 'basic',
    styles: {
      backgroundColor: '160 84% 96%',
      heroBackground: 'linear-gradient(135deg, #047857 0%, #059669 100%)',
      emotionalBackground: '#10b981',
      featuresBackground: '160 84% 88%',
      testimonialsBackground: '160 84% 96%',
      aboutBackground: '160 84% 88%',
      pricingBackground: '160 84% 88%',
      faqBackground: '160 84% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #047857 0%, #059669 100%)',
      contactBackground: '160 84% 88%',
      footerBackground: '158 64% 52%',
      textColor: '158 64% 22%',
      primaryColor: '158 64% 52%',
      secondaryColor: '158 64% 22%',
      accentColor: '160 84% 88%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #28 ורוד פלמינגו
  {
    id: 'basic-flamingo-pink',
    name: 'ורוד פלמינגו טרופי',
    category: 'basic',
    styles: {
      backgroundColor: '330 81% 96%',
      heroBackground: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      emotionalBackground: '#f9a8d4',
      featuresBackground: '330 81% 90%',
      testimonialsBackground: '330 81% 96%',
      aboutBackground: '330 81% 90%',
      pricingBackground: '330 81% 90%',
      faqBackground: '330 81% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      contactBackground: '330 81% 90%',
      footerBackground: '322 81% 57%',
      textColor: '322 81% 17%',
      primaryColor: '322 81% 57%',
      secondaryColor: '322 81% 17%',
      accentColor: '330 81% 90%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #29 כתום שקיעה
  {
    id: 'basic-sunset-orange',
    name: 'כתום שקיעה רומנטי',
    category: 'basic',
    styles: {
      backgroundColor: '39 100% 96%',
      heroBackground: 'linear-gradient(135deg, #dc2626 0%, #f97316 100%)',
      emotionalBackground: '#fb923c',
      featuresBackground: '39 100% 90%',
      testimonialsBackground: '39 100% 96%',
      aboutBackground: '39 100% 90%',
      pricingBackground: '39 100% 90%',
      faqBackground: '39 100% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #dc2626 0%, #f97316 100%)',
      contactBackground: '39 100% 90%',
      footerBackground: '0 84% 60%',
      textColor: '0 84% 20%',
      primaryColor: '0 84% 60%',
      secondaryColor: '0 84% 20%',
      accentColor: '39 100% 90%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #30 כחול טורקיז
  {
    id: 'basic-turquoise-blue',
    name: 'כחול טורקיז אקזוטי',
    category: 'basic',
    styles: {
      backgroundColor: '180 100% 96%',
      heroBackground: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
      emotionalBackground: '#22d3ee',
      featuresBackground: '180 100% 89%',
      testimonialsBackground: '180 100% 96%',
      aboutBackground: '180 100% 89%',
      pricingBackground: '180 100% 89%',
      faqBackground: '180 100% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
      contactBackground: '180 100% 89%',
      footerBackground: '187 85% 53%',
      textColor: '187 85% 23%',
      primaryColor: '187 85% 53%',
      secondaryColor: '187 85% 23%',
      accentColor: '180 100% 89%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #31 אדום דובדבן
  {
    id: 'basic-cherry-red',
    name: 'אדום דובדבן עסיסי',
    category: 'basic',
    styles: {
      backgroundColor: '348 100% 96%',
      heroBackground: 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)',
      emotionalBackground: '#f43f5e',
      featuresBackground: '348 100% 90%',
      testimonialsBackground: '348 100% 96%',
      aboutBackground: '348 100% 90%',
      pricingBackground: '348 100% 90%',
      faqBackground: '348 100% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #be123c 0%, #e11d48 100%)',
      contactBackground: '348 100% 90%',
      footerBackground: '348 83% 47%',
      textColor: '348 83% 17%',
      primaryColor: '348 83% 47%',
      secondaryColor: '348 83% 17%',
      accentColor: '348 100% 90%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #32 ירוק ליים
  {
    id: 'basic-lime-green',
    name: 'ירוק ליים חדש',
    category: 'basic',
    styles: {
      backgroundColor: '78 92% 95%',
      heroBackground: 'linear-gradient(135deg, #65a30d 0%, #84cc16 100%)',
      emotionalBackground: '#a3e635',
      featuresBackground: '78 92% 87%',
      testimonialsBackground: '78 92% 95%',
      aboutBackground: '78 92% 87%',
      pricingBackground: '78 92% 87%',
      faqBackground: '78 92% 95%',
      finalCtaBackground: 'linear-gradient(135deg, #65a30d 0%, #84cc16 100%)',
      contactBackground: '78 92% 87%',
      footerBackground: '82 84% 55%',
      textColor: '82 84% 15%',
      primaryColor: '82 84% 55%',
      secondaryColor: '82 84% 15%',
      accentColor: '78 92% 87%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  },
  // #33 סגול אמטיסט
  {
    id: 'basic-amethyst-purple',
    name: 'סגול אמטיסט קסום',
    category: 'basic',
    styles: {
      backgroundColor: '280 87% 96%',
      heroBackground: 'linear-gradient(135deg, #7c2d12 0%, #a855f7 100%)',
      emotionalBackground: '#c084fc',
      featuresBackground: '280 87% 89%',
      testimonialsBackground: '280 87% 96%',
      aboutBackground: '280 87% 89%',
      pricingBackground: '280 87% 89%',
      faqBackground: '280 87% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #7c2d12 0%, #a855f7 100%)',
      contactBackground: '280 87% 89%',
      footerBackground: '270 81% 71%',
      textColor: '270 81% 21%',
      primaryColor: '270 81% 71%',
      secondaryColor: '270 81% 21%',
      accentColor: '280 87% 89%'
    },
    effects: {
      hero: 'minimal-tech',
      emotional: 'glass-refraction',
      features: 'minimal-tech',
      testimonials: 'glass-refraction',
      about: 'minimal-tech',
      pricing: 'glass-refraction',
      faq: 'minimal-tech',
      finalCta: 'glass-refraction',
      contact: 'minimal-tech'
    }
  },
  // #34 כחול רוייה
  {
    id: 'basic-royal-navy',
    name: 'כחול רויאל עמוק',
    category: 'basic',
    styles: {
      backgroundColor: '210 100% 96%',
      heroBackground: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      emotionalBackground: '#3b82f6',
      featuresBackground: '210 100% 90%',
      testimonialsBackground: '210 100% 96%',
      aboutBackground: '210 100% 90%',
      pricingBackground: '210 100% 90%',
      faqBackground: '210 100% 96%',
      finalCtaBackground: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
      contactBackground: '210 100% 90%',
      footerBackground: '224 76% 48%',
      textColor: '224 76% 18%',
      primaryColor: '224 76% 48%',
      secondaryColor: '224 76% 18%',
      accentColor: '210 100% 90%'
    },
    effects: {
      hero: 'clean',
      emotional: 'minimal-tech',
      features: 'clean',
      testimonials: 'minimal-tech',
      about: 'clean',
      pricing: 'minimal-tech',
      faq: 'clean',
      finalCta: 'minimal-tech',
      contact: 'clean'
    }
  },
  // #35 ברונזה זהובה
  {
    id: 'basic-golden-bronze',
    name: 'ברונזה זהובה יוקרתית',
    category: 'basic',
    styles: {
      backgroundColor: '45 93% 95%',
      heroBackground: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
      emotionalBackground: '#f59e0b',
      featuresBackground: '45 93% 87%',
      testimonialsBackground: '45 93% 95%',
      aboutBackground: '45 93% 87%',
      pricingBackground: '45 93% 87%',
      faqBackground: '45 93% 95%',
      finalCtaBackground: 'linear-gradient(135deg, #92400e 0%, #d97706 100%)',
      contactBackground: '45 93% 87%',
      footerBackground: '32 95% 44%',
      textColor: '32 95% 14%',
      primaryColor: '32 95% 44%',
      secondaryColor: '32 95% 14%',
      accentColor: '45 93% 87%'
    },
    effects: {
      hero: 'glass-refraction',
      emotional: 'clean',
      features: 'glass-refraction',
      testimonials: 'clean',
      about: 'glass-refraction',
      pricing: 'clean',
      faq: 'glass-refraction',
      finalCta: 'clean',
      contact: 'glass-refraction'
    }
  }
];

// 25 עיצובים פרימיום
const premiumDesigns: DesignTemplate[] = [
  // #1 קיברנטי נאון
  {
    id: 'premium-cyber-neon',
    name: 'קיברנטי נאון פוטוריסטי',
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
  // #2 הולוגרמה מתקדמת
  {
    id: 'premium-advanced-hologram',
    name: 'הולוגרמה מתקדמת מדעית',
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
  },
  // #3 גלקטי קוסמי
  {
    id: 'premium-galactic-cosmic',
    name: 'גלקטי קוסמי אינטרגלקטי',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #2d1b5e 100%)',
      emotionalBackground: 'linear-gradient(135deg, #8000ff 0%, #4000ff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #8000ff 0%, #ff0080 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '270 100% 50%',
      secondaryColor: '280 100% 40%',
      accentColor: '260 100% 70%'
    },
    effects: {
      hero: 'cosmic-geometry',
      emotional: 'quantum-bubbles',
      features: 'particle-storm',
      testimonials: 'holographic',
      about: 'neon-grid-portal',
      pricing: 'liquid-metal',
      faq: 'digital-waves',
      finalCta: 'crystal-matrix',
      contact: 'morphing-shapes'
    }
  },
  // #4 מטריקס דיגיטלי
  {
    id: 'premium-digital-matrix',
    name: 'מטריקס דיגיטלי מתקדם',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #000a00 0%, #001a00 50%, #002a00 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00ff00 0%, #00cc00 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #00ff00 0%, #00aa00 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '120 100% 50%',
      secondaryColor: '120 100% 35%',
      accentColor: '120 100% 70%'
    },
    effects: {
      hero: 'digital-waves',
      emotional: 'crystal-matrix',
      features: 'quantum-bubbles',
      testimonials: 'neon-grid-portal',
      about: 'holographic',
      pricing: 'particle-storm',
      faq: 'liquid-metal',
      finalCta: 'cosmic-geometry',
      contact: 'morphing-shapes'
    }
  },
  // #5 פלזמה חשמלית
  {
    id: 'premium-electric-plasma',
    name: 'פלזמה חשמלית אנרגטית',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b5e 50%, #4a2a8e 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ffff00 0%, #ff8000 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ffff00 0%, #ff4000 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '60 100% 50%',
      secondaryColor: '30 100% 50%',
      accentColor: '45 100% 70%'
    },
    effects: {
      hero: 'particle-storm',
      emotional: 'liquid-metal',
      features: 'cosmic-geometry',
      testimonials: 'digital-waves',
      about: 'quantum-bubbles',
      pricing: 'holographic',
      faq: 'neon-grid-portal',
      finalCta: 'crystal-matrix',
      contact: 'morphing-shapes'
    }
  },
  // #6 קריסטל מתמורף
  {
    id: 'premium-morphing-crystal',
    name: 'קריסטל מתמורף קסום',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0f1a2e 0%, #1a2e4a 50%, #2e4a7a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00ffcc 0%, #0080ff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #00ffcc 0%, #8000ff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '180 100% 50%',
      secondaryColor: '240 100% 50%',
      accentColor: '210 100% 70%'
    },
    effects: {
      hero: 'crystal-matrix',
      emotional: 'morphing-shapes',
      features: 'holographic',
      testimonials: 'liquid-metal',
      about: 'particle-storm',
      pricing: 'digital-waves',
      faq: 'quantum-bubbles',
      finalCta: 'neon-grid-portal',
      contact: 'cosmic-geometry'
    }
  },
  // #7 נאון רטרו
  {
    id: 'premium-retro-neon',
    name: 'נאון רטרו שנות השמונים',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #2a0845 0%, #441a66 50%, #663388 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ff00ff 0%, #ffff00 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '300 100% 50%',
      secondaryColor: '180 100% 50%',
      accentColor: '60 100% 50%'
    },
    effects: {
      hero: 'neon-grid-portal',
      emotional: 'holographic',
      features: 'digital-waves',
      testimonials: 'particle-storm',
      about: 'liquid-metal',
      pricing: 'crystal-matrix',
      faq: 'morphing-shapes',
      finalCta: 'quantum-bubbles',
      contact: 'cosmic-geometry'
    }
  },
  // #8 אור קוסמי
  {
    id: 'premium-cosmic-light',
    name: 'אור קוסמי אינסופי',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #1a1a3a 0%, #2d2d5a 50%, #4a4a7a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ffffff 0%, #ccccff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ffffff 0%, #aaaaff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '0 0% 100%',
      secondaryColor: '240 100% 80%',
      accentColor: '240 100% 90%'
    },
    effects: {
      hero: 'quantum-bubbles',
      emotional: 'cosmic-geometry',
      features: 'particle-storm',
      testimonials: 'holographic',
      about: 'crystal-matrix',
      pricing: 'liquid-metal',
      faq: 'digital-waves',
      finalCta: 'neon-grid-portal',
      contact: 'morphing-shapes'
    }
  },
  // #9 גלקסיה ספירלית
  {
    id: 'premium-spiral-galaxy',
    name: 'גלקסיה ספירלית מסתחררת',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0a0a2a 0%, #1a1a4a 50%, #2a2a6a 100%)',
      emotionalBackground: 'radial-gradient(circle, #ff4080 0%, #8040ff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'radial-gradient(circle, #ff4080 0%, #4080ff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '320 100% 60%',
      secondaryColor: '220 100% 60%',
      accentColor: '270 100% 70%'
    },
    effects: {
      hero: 'cosmic-geometry',
      emotional: 'morphing-shapes',
      features: 'quantum-bubbles',
      testimonials: 'particle-storm',
      about: 'holographic',
      pricing: 'digital-waves',
      faq: 'crystal-matrix',
      finalCta: 'liquid-metal',
      contact: 'neon-grid-portal'
    }
  },
  // #10 אנרגיה קוונטית
  {
    id: 'premium-quantum-energy',
    name: 'אנרגיה קוונטית מתמרת',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #2a1a0a 0%, #4a3a1a 50%, #6a5a2a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ffcc00 0%, #ff6600 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ffcc00 0%, #cc3300 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '48 100% 50%',
      secondaryColor: '12 100% 40%',
      accentColor: '30 100% 60%'
    },
    effects: {
      hero: 'quantum-bubbles',
      emotional: 'particle-storm',
      features: 'liquid-metal',
      testimonials: 'cosmic-geometry',
      about: 'morphing-shapes',
      pricing: 'holographic',
      faq: 'digital-waves',
      finalCta: 'crystal-matrix',
      contact: 'neon-grid-portal'
    }
  },
  // #11 פוטוני אור
  {
    id: 'premium-photonic-light',
    name: 'פוטוני אור מקורין',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0a2a2a 0%, #1a4a4a 50%, #2a6a6a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00ffff 0%, #ffffff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #00ffff 0%, #00cccc 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '180 100% 50%',
      secondaryColor: '180 100% 40%',
      accentColor: '180 100% 75%'
    },
    effects: {
      hero: 'holographic',
      emotional: 'crystal-matrix',
      features: 'neon-grid-portal',
      testimonials: 'quantum-bubbles',
      about: 'digital-waves',
      pricing: 'particle-storm',
      faq: 'liquid-metal',
      finalCta: 'morphing-shapes',
      contact: 'cosmic-geometry'
    }
  },
  // #12 אש קסמים
  {
    id: 'premium-magic-fire',
    name: 'אש קסמים בוערת',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #2a0a0a 0%, #4a1a1a 50%, #6a2a2a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ff0000 0%, #ffaa00 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ff0000 0%, #ff6600 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '0 100% 50%',
      secondaryColor: '30 100% 50%',
      accentColor: '15 100% 60%'
    },
    effects: {
      hero: 'particle-storm',
      emotional: 'liquid-metal',
      features: 'morphing-shapes',
      testimonials: 'holographic',
      about: 'quantum-bubbles',
      pricing: 'crystal-matrix',
      faq: 'cosmic-geometry',
      finalCta: 'digital-waves',
      contact: 'neon-grid-portal'
    }
  },
  // #13 קרח אלקטרוני
  {
    id: 'premium-electronic-ice',
    name: 'קרח אלקטרוני קופא',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0a2a3a 0%, #1a4a6a 50%, #2a6a9a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #aaeeff 0%, #ffffff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #aaeeff 0%, #77ccff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '200 100% 85%',
      secondaryColor: '210 100% 60%',
      accentColor: '200 100% 75%'
    },
    effects: {
      hero: 'crystal-matrix',
      emotional: 'digital-waves',
      features: 'quantum-bubbles',
      testimonials: 'holographic',
      about: 'particle-storm',
      pricing: 'neon-grid-portal',
      faq: 'liquid-metal',
      finalCta: 'cosmic-geometry',
      contact: 'morphing-shapes'
    }
  },
  // #14 בועות זמן
  {
    id: 'premium-time-bubbles',
    name: 'בועות זמן מתרחבות',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #3a1a3a 0%, #6a3a6a 50%, #9a5a9a 100%)',
      emotionalBackground: 'radial-gradient(circle, #ff80ff 0%, #8080ff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'radial-gradient(circle, #ff80ff 0%, #ff80cc 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '300 100% 75%',
      secondaryColor: '240 100% 75%',
      accentColor: '270 100% 80%'
    },
    effects: {
      hero: 'quantum-bubbles',
      emotional: 'morphing-shapes',
      features: 'cosmic-geometry',
      testimonials: 'particle-storm',
      about: 'holographic',
      pricing: 'crystal-matrix',
      faq: 'digital-waves',
      finalCta: 'liquid-metal',
      contact: 'neon-grid-portal'
    }
  },
  // #15 רשת אינפינית
  {
    id: 'premium-infinite-grid',
    name: 'רשת אינפינית מתרחבת',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #1a3a1a 0%, #3a6a3a 50%, #5a9a5a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00ff88 0%, #88ff00 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #00ff88 0%, #44ff44 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '150 100% 50%',
      secondaryColor: '90 100% 50%',
      accentColor: '120 100% 65%'
    },
    effects: {
      hero: 'neon-grid-portal',
      emotional: 'digital-waves',
      features: 'particle-storm',
      testimonials: 'crystal-matrix',
      about: 'quantum-bubbles',
      pricing: 'holographic',
      faq: 'morphing-shapes',
      finalCta: 'cosmic-geometry',
      contact: 'liquid-metal'
    }
  },
  // #16 מגמה אסטרונומית
  {
    id: 'premium-astronomical-trend',
    name: 'מגמה אסטרונומית חלל',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0a0a3a 0%, #1a1a6a 50%, #2a2a9a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #4080ff 0%, #8040ff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #4080ff 0%, #ff4080 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '220 100% 60%',
      secondaryColor: '280 100% 60%',
      accentColor: '250 100% 70%'
    },
    effects: {
      hero: 'cosmic-geometry',
      emotional: 'particle-storm',
      features: 'holographic',
      testimonials: 'quantum-bubbles',
      about: 'liquid-metal',
      pricing: 'digital-waves',
      faq: 'crystal-matrix',
      finalCta: 'neon-grid-portal',
      contact: 'morphing-shapes'
    }
  },
  // #17 מולקולות פלואורסנטיות
  {
    id: 'premium-fluorescent-molecules',
    name: 'מולקולות פלואורסנטיות זורחות',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #2a2a0a 0%, #5a5a1a 50%, #8a8a2a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ccff00 0%, #ffcc00 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ccff00 0%, #99ff00 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '75 100% 50%',
      secondaryColor: '48 100% 50%',
      accentColor: '60 100% 60%'
    },
    effects: {
      hero: 'morphing-shapes',
      emotional: 'liquid-metal',
      features: 'quantum-bubbles',
      testimonials: 'particle-storm',
      about: 'holographic',
      pricing: 'cosmic-geometry',
      faq: 'digital-waves',
      finalCta: 'crystal-matrix',
      contact: 'neon-grid-portal'
    }
  },
  // #18 טורבינת זמן
  {
    id: 'premium-time-turbine',
    name: 'טורבינת זמן מסתובבת',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #3a3a2a 0%, #6a6a4a 50%, #9a9a6a 100%)',
      emotionalBackground: 'conic-gradient(from 0deg, #ff8000 0%, #ff0080 25%, #8000ff 50%, #0080ff 75%, #ff8000 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'conic-gradient(from 90deg, #ff8000 0%, #ff4000 50%, #ff8000 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '30 100% 50%',
      secondaryColor: '320 100% 50%',
      accentColor: '270 100% 50%'
    },
    effects: {
      hero: 'cosmic-geometry',
      emotional: 'morphing-shapes',
      features: 'particle-storm',
      testimonials: 'quantum-bubbles',
      about: 'digital-waves',
      pricing: 'holographic',
      faq: 'liquid-metal',
      finalCta: 'crystal-matrix',
      contact: 'neon-grid-portal'
    }
  },
  // #19 אלקטרומגנטי
  {
    id: 'premium-electromagnetic',
    name: 'אלקטרומגנטי חשמלי',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #1a1a2a 0%, #3a3a5a 50%, #5a5a8a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #00aaff 0%, #aa00ff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #00aaff 0%, #ff00aa 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '200 100% 50%',
      secondaryColor: '300 100% 50%',
      accentColor: '250 100% 65%'
    },
    effects: {
      hero: 'digital-waves',
      emotional: 'particle-storm',
      features: 'holographic',
      testimonials: 'crystal-matrix',
      about: 'quantum-bubbles',
      pricing: 'liquid-metal',
      faq: 'cosmic-geometry',
      finalCta: 'morphing-shapes',
      contact: 'neon-grid-portal'
    }
  },
  // #20 פיזיקה קוונטית
  {
    id: 'premium-quantum-physics',
    name: 'פיזיקה קוונטית מתקדמת',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #2a1a2a 0%, #5a3a5a 50%, #8a5a8a 100%)',
      emotionalBackground: 'radial-gradient(ellipse, #ff40ff 0%, #4040ff 50%, #40ffff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'radial-gradient(ellipse, #ff40ff 0%, #ff4040 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '320 100% 60%',
      secondaryColor: '240 100% 60%',
      accentColor: '180 100% 60%'
    },
    effects: {
      hero: 'quantum-bubbles',
      emotional: 'holographic',
      features: 'cosmic-geometry',
      testimonials: 'particle-storm',
      about: 'crystal-matrix',
      pricing: 'morphing-shapes',
      faq: 'digital-waves',
      finalCta: 'liquid-metal',
      contact: 'neon-grid-portal'
    }
  },
  // #21 נבולה דיגיטלית
  {
    id: 'premium-digital-nebula',
    name: 'נבולה דיגיטלית צבעונית',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #0a1a3a 0%, #1a3a6a 50%, #2a5a9a 100%)',
      emotionalBackground: 'radial-gradient(circle, #ff6080 0%, #8060ff 50%, #6080ff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'radial-gradient(circle, #ff6080 0%, #60ff80 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '340 100% 70%',
      secondaryColor: '140 100% 70%',
      accentColor: '240 100% 70%'
    },
    effects: {
      hero: 'particle-storm',
      emotional: 'cosmic-geometry',
      features: 'morphing-shapes',
      testimonials: 'holographic',
      about: 'quantum-bubbles',
      pricing: 'digital-waves',
      faq: 'liquid-metal',
      finalCta: 'crystal-matrix',
      contact: 'neon-grid-portal'
    }
  },
  // #22 מחסום זמן
  {
    id: 'premium-time-barrier',
    name: 'מחסום זמן מתעוות',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #3a2a1a 0%, #6a5a3a 50%, #9a8a5a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ffaa44 0%, #ff4488 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ffaa44 0%, #aa44ff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '36 100% 60%',
      secondaryColor: '320 100% 60%',
      accentColor: '270 100% 60%'
    },
    effects: {
      hero: 'morphing-shapes',
      emotional: 'quantum-bubbles',
      features: 'digital-waves',
      testimonials: 'cosmic-geometry',
      about: 'particle-storm',
      pricing: 'holographic',
      faq: 'crystal-matrix',
      finalCta: 'liquid-metal',
      contact: 'neon-grid-portal'
    }
  },
  // #23 ציר זמן קוסמי
  {
    id: 'premium-cosmic-timeline',
    name: 'ציר זמן קוסמי נצחי',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #1a2a3a 0%, #3a5a6a 50%, #5a8a9a 100%)',
      emotionalBackground: 'linear-gradient(135deg, #88ccff 0%, #ccffaa 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #88ccff 0%, #ffcc88 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '200 100% 75%',
      secondaryColor: '80 100% 75%',
      accentColor: '140 100% 80%'
    },
    effects: {
      hero: 'cosmic-geometry',
      emotional: 'digital-waves',
      features: 'quantum-bubbles',
      testimonials: 'holographic',
      about: 'morphing-shapes',
      pricing: 'particle-storm',
      faq: 'liquid-metal',
      finalCta: 'crystal-matrix',
      contact: 'neon-grid-portal'
    }
  },
  // #24 מקור אור אינסופי
  {
    id: 'premium-infinite-light-source',
    name: 'מקור אור אינסופי בוער',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'radial-gradient(circle, #ffffff 0%, #ffccaa 50%, #ffaacc 100%)',
      emotionalBackground: 'radial-gradient(circle, #ffffaa 0%, #ffaaff 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'radial-gradient(circle, #ffffaa 0%, #aaffff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '60 100% 85%',
      secondaryColor: '300 100% 85%',
      accentColor: '180 100% 85%'
    },
    effects: {
      hero: 'holographic',
      emotional: 'particle-storm',
      features: 'cosmic-geometry',
      testimonials: 'liquid-metal',
      about: 'quantum-bubbles',
      pricing: 'crystal-matrix',
      faq: 'morphing-shapes',
      finalCta: 'digital-waves',
      contact: 'neon-grid-portal'
    }
  },
  // #25 חדירה קוונטית
  {
    id: 'premium-quantum-penetration',
    name: 'חדירה קוונטית עמוקה',
    category: 'premium',
    styles: {
      backgroundColor: '240 10% 3.9%',
      heroBackground: 'linear-gradient(135deg, #000000 0%, #330033 50%, #003333 100%)',
      emotionalBackground: 'linear-gradient(135deg, #ff00aa 0%, #00aaff 50%, #aaff00 100%)',
      featuresBackground: '240 3.7% 15.9%',
      testimonialsBackground: '240 10% 3.9%',
      aboutBackground: '240 3.7% 15.9%',
      pricingBackground: '240 3.7% 15.9%',
      faqBackground: '240 10% 3.9%',
      finalCtaBackground: 'linear-gradient(135deg, #ff00aa 0%, #aa00ff 100%)',
      contactBackground: '240 3.7% 15.9%',
      footerBackground: '0 0% 0%',
      textColor: '#ffffff',
      primaryColor: '320 100% 50%',
      secondaryColor: '200 100% 50%',
      accentColor: '80 100% 50%'
    },
    effects: {
      hero: 'quantum-bubbles',
      emotional: 'morphing-shapes',
      features: 'particle-storm',
      testimonials: 'digital-waves',
      about: 'holographic',
      pricing: 'cosmic-geometry',
      faq: 'liquid-metal',
      finalCta: 'crystal-matrix',
      contact: 'neon-grid-portal'
    }
  }
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