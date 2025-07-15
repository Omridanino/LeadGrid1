// Themed sections generator - creates design-specific sections for all themes
import { DesignTheme } from '@/types/designThemes';

// Helper to get theme-specific classes and styles
export const getThemeClasses = (theme: DesignTheme) => {
  switch (theme.id) {
    case 'liquid-glass':
      return {
        sectionBg: 'background: linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,58,138,0.95), rgba(126,34,206,0.95))',
        cardBg: 'background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2)',
        cardHover: 'transform: translateY(-10px); box-shadow: 0 20px 40px rgba(6,182,212,0.3)',
        textPrimary: 'color: #ffffff',
        textSecondary: 'color: rgba(255,255,255,0.8)',
        accent: 'color: #06b6d4',
        button: 'background: linear-gradient(45deg, #06b6d4, #3b82f6); color: white',
        buttonHover: 'background: linear-gradient(45deg, #0891b2, #2563eb)',
        glowEffect: 'box-shadow: 0 0 30px rgba(6,182,212,0.3)',
        borderGlow: 'border: 1px solid rgba(6,182,212,0.5); box-shadow: 0 0 20px rgba(6,182,212,0.2)'
      };
    case 'luxury-premium':
      return {
        sectionBg: 'background: linear-gradient(135deg, #0f172a, #1e293b, #000000)',
        cardBg: 'background: linear-gradient(135deg, rgba(217,119,6,0.1), rgba(245,158,11,0.1)); backdrop-filter: blur(20px); border: 1px solid rgba(217,119,6,0.3)',
        cardHover: 'transform: translateY(-10px); box-shadow: 0 20px 40px rgba(217,119,6,0.3)',
        textPrimary: 'color: #ffffff',
        textSecondary: 'color: #d1d5db',
        accent: 'color: #f59e0b',
        button: 'background: linear-gradient(45deg, #d97706, #f59e0b); color: white',
        buttonHover: 'background: linear-gradient(45deg, #b45309, #d97706)',
        glowEffect: 'box-shadow: 0 0 30px rgba(217,119,6,0.3)',
        borderGlow: 'border: 1px solid rgba(217,119,6,0.5); box-shadow: 0 0 20px rgba(217,119,6,0.2)'
      };
    case 'brutalist-mono':
      return {
        sectionBg: 'background: #ffffff',
        cardBg: 'background: #000000; border: 4px solid #000000',
        cardHover: 'transform: translateY(-5px) rotate(-1deg); box-shadow: 8px 8px 0px #000000',
        textPrimary: 'color: #000000',
        textSecondary: 'color: #374151',
        accent: 'color: #000000',
        button: 'background: #000000; color: white; border: 4px solid #000000',
        buttonHover: 'background: #374151; transform: translateY(-2px)',
        glowEffect: 'box-shadow: 8px 8px 0px #000000',
        borderGlow: 'border: 4px solid #000000'
      };
    case 'cyberpunk-neon':
      return {
        sectionBg: 'background: linear-gradient(135deg, #000000, #581c87, #000000)',
        cardBg: 'background: rgba(0,0,0,0.8); backdrop-filter: blur(20px); border: 1px solid #ec4899',
        cardHover: 'transform: translateY(-10px); box-shadow: 0 0 30px #10b981, 0 0 60px #ec4899',
        textPrimary: 'color: #10b981',
        textSecondary: 'color: #d1d5db',
        accent: 'color: #ec4899',
        button: 'background: #ec4899; color: #000000',
        buttonHover: 'background: #be185d; box-shadow: 0 0 20px #ec4899',
        glowEffect: 'box-shadow: 0 0 20px #10b981, 0 0 40px #ec4899',
        borderGlow: 'border: 1px solid #ec4899; box-shadow: 0 0 15px #10b981'
      };
    case 'organic-natural':
      return {
        sectionBg: 'background: linear-gradient(135deg, #f0fdf4, #ecfdf5, #f0fdfa)',
        cardBg: 'background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); border: 1px solid #86efac',
        cardHover: 'transform: translateY(-10px); box-shadow: 0 20px 40px rgba(34,197,94,0.2)',
        textPrimary: 'color: #166534',
        textSecondary: 'color: #15803d',
        accent: 'color: #0d9488',
        button: 'background: linear-gradient(45deg, #22c55e, #0d9488); color: white',
        buttonHover: 'background: linear-gradient(45deg, #16a34a, #0f766e)',
        glowEffect: 'box-shadow: 0 0 30px rgba(34,197,94,0.3)',
        borderGlow: 'border: 1px solid rgba(34,197,94,0.5); box-shadow: 0 0 20px rgba(34,197,94,0.2)'
      };
    default:
      return {
        sectionBg: 'background: #ffffff',
        cardBg: 'background: #ffffff; border: 1px solid #e5e7eb',
        cardHover: 'transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1)',
        textPrimary: 'color: #111827',
        textSecondary: 'color: #374151',
        accent: 'color: #2563eb',
        button: 'background: #2563eb; color: white',
        buttonHover: 'background: #1d4ed8',
        glowEffect: 'box-shadow: 0 4px 6px rgba(0,0,0,0.1)',
        borderGlow: 'border: 1px solid #2563eb'
      };
  }
};

export const generateThemedFeaturesSection = (features: any, theme: DesignTheme) => {
  if (!features || !features.features || features.features.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Features Section -->
  <section id="features" class="features py-20" style="${styles.sectionBg};">
      <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-16">
              ${features.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${features.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${features.title || 'השירותים שלנו'}</h2>
              ${features.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${features.subtitle}</p>` : ''}
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${features.features.map((feature: any, index: number) => `
                  <div class="rounded-2xl p-8 transition-all duration-300 hover-card" 
                       style="${styles.cardBg};"
                       onmouseover="this.style.cssText += '${styles.cardHover}'"
                       onmouseout="this.style.cssText = this.style.cssText.replace('${styles.cardHover}', '')">
                      <div class="text-5xl mb-6" style="${styles.accent};">
                          <i class="ri-${feature.icon}"></i>
                      </div>
                      <h3 class="text-2xl font-bold mb-4" style="${styles.textPrimary};">${feature.title}</h3>
                      <p class="text-lg leading-relaxed" style="${styles.textSecondary};">${feature.description}</p>
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedWhyUsSection = (whyUs: any, theme: DesignTheme) => {
  if (!whyUs || !whyUs.items || whyUs.items.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Why Us Section -->
  <section class="why-us py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
              ${whyUs.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${whyUs.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${whyUs.title}</h2>
              ${whyUs.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${whyUs.subtitle}</p>` : ''}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${whyUs.items.map((item: any) => `
                  <div class="rounded-2xl p-8 transition-all duration-300"
                       style="${styles.cardBg};"
                       onmouseover="this.style.cssText += '${styles.cardHover}'"
                       onmouseout="this.style.cssText = this.style.cssText.replace('${styles.cardHover}', '')">
                      <div class="text-4xl mb-6" style="${styles.accent};">
                          <i class="ri-${item.icon || 'star-line'}"></i>
                      </div>
                      <h3 class="text-2xl font-bold mb-4" style="${styles.textPrimary};">${item.title}</h3>
                      <p class="text-lg leading-relaxed" style="${styles.textSecondary};">${item.description}</p>
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedWhatWeGiveSection = (whatWeGive: any, theme: DesignTheme) => {
  if (!whatWeGive || !whatWeGive.items || whatWeGive.items.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- What We Give Section -->
  <section class="what-we-give py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
              ${whatWeGive.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${whatWeGive.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${whatWeGive.title}</h2>
              ${whatWeGive.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${whatWeGive.subtitle}</p>` : ''}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              ${whatWeGive.items.map((item: any) => `
                  <div class="rounded-2xl p-8 transition-all duration-300"
                       style="${styles.cardBg};"
                       onmouseover="this.style.cssText += '${styles.cardHover}'"
                       onmouseout="this.style.cssText = this.style.cssText.replace('${styles.cardHover}', '')">
                      <div class="flex items-start gap-6">
                          <div class="flex-shrink-0">
                              <div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl" style="${styles.borderGlow}; ${styles.accent};">
                                  <i class="ri-${item.icon || 'gift-line'}"></i>
                              </div>
                          </div>
                          <div class="flex-1">
                              <h3 class="text-2xl font-bold mb-4" style="${styles.textPrimary};">${item.title}</h3>
                              <p class="text-lg leading-relaxed" style="${styles.textSecondary};">${item.description}</p>
                          </div>
                      </div>
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedProcessSection = (process: any, theme: DesignTheme) => {
  if (!process || !process.steps || process.steps.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Process Section -->
  <section class="process py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
              ${process.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${process.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${process.title}</h2>
              ${process.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${process.subtitle}</p>` : ''}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              ${process.steps.map((step: any, index: number) => `
                  <div class="text-center">
                      <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-300" 
                           style="${styles.button}; ${styles.glowEffect};"
                           onmouseover="this.style.transform = 'scale(1.1)'"
                           onmouseout="this.style.transform = 'scale(1)'">
                          ${index + 1}
                      </div>
                      <h3 class="text-2xl font-bold mb-4" style="${styles.textPrimary};">${step.title}</h3>
                      <p class="text-lg leading-relaxed" style="${styles.textSecondary};">${step.description}</p>
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedGallerySection = (gallery: any, theme: DesignTheme) => {
  if (!gallery || !gallery.images || gallery.images.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Gallery Section -->
  <section class="gallery py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
              ${gallery.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${gallery.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${gallery.title}</h2>
              ${gallery.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${gallery.subtitle}</p>` : ''}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${gallery.images.map((image: any) => `
                  <div class="aspect-square rounded-2xl overflow-hidden transition-all duration-300" 
                       style="${styles.borderGlow};"
                       onmouseover="this.style.cssText += '${styles.cardHover}'"
                       onmouseout="this.style.cssText = this.style.cssText.replace('${styles.cardHover}', '')">
                      <img src="${image.url}" alt="${image.alt || ''}" class="w-full h-full object-cover">
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedTestimonialsSection = (testimonials: any, theme: DesignTheme) => {
  if (!testimonials || !testimonials.testimonials || testimonials.testimonials.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Testimonials Section -->
  <section class="testimonials py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
              ${testimonials.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${testimonials.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${testimonials.title || 'מה אומרים עלינו'}</h2>
              ${testimonials.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${testimonials.subtitle}</p>` : ''}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${testimonials.testimonials.slice(0, 6).map((testimonial: any) => `
                  <div class="rounded-2xl p-8 transition-all duration-300"
                       style="${styles.cardBg};"
                       onmouseover="this.style.cssText += '${styles.cardHover}'"
                       onmouseout="this.style.cssText = this.style.cssText.replace('${styles.cardHover}', '')">
                      <div class="mb-6">
                          <div class="flex text-2xl mb-4" style="${styles.accent};">
                              ★★★★★
                          </div>
                          <p class="text-lg leading-relaxed italic" style="${styles.textSecondary};">"${testimonial.text}"</p>
                      </div>
                      <div class="flex items-center gap-4">
                          <div class="w-12 h-12 rounded-full overflow-hidden" style="${styles.borderGlow};">
                              <img src="${testimonial.image || '/placeholder-avatar.jpg'}" alt="${testimonial.name}" class="w-full h-full object-cover">
                          </div>
                          <div>
                              <h4 class="font-bold" style="${styles.textPrimary};">${testimonial.name}</h4>
                              ${testimonial.title ? `<p class="text-sm" style="${styles.textSecondary};">${testimonial.title}</p>` : ''}
                          </div>
                      </div>
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedContactSection = (contact: any, theme: DesignTheme) => {
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Contact Section -->
  <section id="contact" class="contact py-20" style="${styles.sectionBg};">
      <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${contact?.title || 'צור קשר'}</h2>
          <p class="text-xl mb-12" style="${styles.textSecondary};">${contact?.subtitle || 'נשמח לשמוע ממך'}</p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
              ${contact?.phone ? `
                  <a href="tel:${contact.phone}" 
                     class="inline-flex items-center justify-center gap-3 rounded-xl text-lg font-semibold px-8 py-4 transition-all duration-300"
                     style="${styles.button};"
                     onmouseover="this.style.cssText += '${styles.buttonHover}; transform: translateY(-2px);'"
                     onmouseout="this.style.cssText = this.style.cssText.replace('${styles.buttonHover}; transform: translateY(-2px);', '')">
                      <i class="ri-phone-line text-2xl"></i>
                      ${contact.phone}
                  </a>
              ` : ''}
              
              ${contact?.email ? `
                  <a href="mailto:${contact.email}" 
                     class="inline-flex items-center justify-center gap-3 rounded-xl text-lg font-semibold px-8 py-4 transition-all duration-300"
                     style="${styles.button};"
                     onmouseover="this.style.cssText += '${styles.buttonHover}; transform: translateY(-2px);'"
                     onmouseout="this.style.cssText = this.style.cssText.replace('${styles.buttonHover}; transform: translateY(-2px);', '')">
                      <i class="ri-mail-line text-2xl"></i>
                      ${contact.email}
                  </a>
              ` : ''}
          </div>
      </div>
  </section>`;
};

export const generateThemedAboutSection = (about: any, theme: DesignTheme) => {
  if (!about) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- About Section -->
  <section class="about py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  ${about.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${about.badge}</div>` : ''}
                  <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${about.title || 'אודותינו'}</h2>
                  <p class="text-xl leading-relaxed mb-8" style="${styles.textSecondary};">${about.description || about.subtitle}</p>
                  ${about.features ? `
                      <div class="space-y-4">
                          ${about.features.map((feature: string) => `
                              <div class="flex items-center gap-3">
                                  <div class="w-6 h-6 rounded-full flex items-center justify-center" style="${styles.button};">
                                      <i class="ri-check-line text-sm"></i>
                                  </div>
                                  <span style="${styles.textSecondary};">${feature}</span>
                              </div>
                          `).join('')}
                      </div>
                  ` : ''}
              </div>
              ${about.image ? `
                  <div class="rounded-2xl overflow-hidden" style="${styles.borderGlow};">
                      <img src="${about.image}" alt="${about.title}" class="w-full h-full object-cover">
                  </div>
              ` : `
                  <div class="rounded-2xl p-12 text-center" style="${styles.cardBg};">
                      <div class="text-6xl mb-6" style="${styles.accent};">
                          <i class="ri-team-line"></i>
                      </div>
                      <h3 class="text-2xl font-bold mb-4" style="${styles.textPrimary};">הצוות שלנו</h3>
                      <p style="${styles.textSecondary};">אנחנו כאן כדי לעזור לך להצליח ולהגיע ליעדים שלך</p>
                  </div>
              `}
          </div>
      </div>
  </section>`;
};

export const generateThemedServicesSection = (services: any, theme: DesignTheme) => {
  if (!services || !services.services || services.services.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Services Section -->
  <section class="services py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
              ${services.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${services.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${services.title || 'השירותים שלנו'}</h2>
              ${services.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${services.subtitle}</p>` : ''}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${services.services.map((service: any) => `
                  <div class="rounded-2xl p-8 transition-all duration-300"
                       style="${styles.cardBg};"
                       onmouseover="this.style.cssText += '${styles.cardHover}'"
                       onmouseout="this.style.cssText = this.style.cssText.replace('${styles.cardHover}', '')">
                      <div class="text-5xl mb-6" style="${styles.accent};">
                          <i class="ri-${service.icon || 'service-line'}"></i>
                      </div>
                      <h3 class="text-2xl font-bold mb-4" style="${styles.textPrimary};">${service.title}</h3>
                      <p class="text-lg leading-relaxed mb-6" style="${styles.textSecondary};">${service.description}</p>
                      ${service.price ? `<div class="text-2xl font-bold" style="${styles.accent};">${service.price}</div>` : ''}
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedPricingSection = (pricing: any, theme: DesignTheme) => {
  if (!pricing || !pricing.plans || pricing.plans.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Pricing Section -->
  <section class="pricing py-20" style="${styles.sectionBg};">
      <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
              ${pricing.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${pricing.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${pricing.title || 'המחירים שלנו'}</h2>
              ${pricing.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${pricing.subtitle}</p>` : ''}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${pricing.plans.map((plan: any) => `
                  <div class="rounded-2xl p-8 transition-all duration-300 ${plan.featured ? 'ring-2' : ''}"
                       style="${styles.cardBg}; ${plan.featured ? styles.borderGlow : ''}"
                       onmouseover="this.style.cssText += '${styles.cardHover}'"
                       onmouseout="this.style.cssText = this.style.cssText.replace('${styles.cardHover}', '')">
                      ${plan.featured ? `<div class="text-center mb-4"><span class="px-3 py-1 rounded-full text-sm font-semibold" style="${styles.button};">מומלץ</span></div>` : ''}
                      <div class="text-center mb-8">
                          <h3 class="text-2xl font-bold mb-2" style="${styles.textPrimary};">${plan.name}</h3>
                          <div class="text-4xl font-bold mb-2" style="${styles.accent};">${plan.price}</div>
                          <p style="${styles.textSecondary};">${plan.period || 'לחודש'}</p>
                      </div>
                      <ul class="space-y-3 mb-8">
                          ${plan.features.map((feature: string) => `
                              <li class="flex items-center gap-3">
                                  <div class="w-5 h-5 rounded-full flex items-center justify-center" style="${styles.accent};">
                                      <i class="ri-check-line text-xs"></i>
                                  </div>
                                  <span style="${styles.textSecondary};">${feature}</span>
                              </li>
                          `).join('')}
                      </ul>
                      <button class="w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300" 
                              style="${styles.button};"
                              onmouseover="this.style.cssText += '${styles.buttonHover}'"
                              onmouseout="this.style.cssText = this.style.cssText.replace('${styles.buttonHover}', '')">
                          ${plan.buttonText || 'בחר תוכנית'}
                      </button>
                  </div>
              `).join('')}
          </div>
      </div>
  </section>`;
};

export const generateThemedFAQSection = (faq: any, theme: DesignTheme) => {
  if (!faq || !faq.questions || faq.questions.length === 0) return '';
  
  const styles = getThemeClasses(theme);
  
  return `
  <!-- FAQ Section -->
  <section class="faq py-20" style="${styles.sectionBg};">
      <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
              ${faq.badge ? `<div class="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold mb-6" style="${styles.borderGlow}; ${styles.accent};">${faq.badge}</div>` : ''}
              <h2 class="text-4xl md:text-5xl font-bold mb-6" style="${styles.textPrimary};">${faq.title || 'שאלות נפוצות'}</h2>
              ${faq.subtitle ? `<p class="text-xl" style="${styles.textSecondary};">${faq.subtitle}</p>` : ''}
          </div>
          <div class="space-y-4">
              ${faq.questions.map((item: any, index: number) => `
                  <div class="rounded-2xl overflow-hidden" style="${styles.cardBg};">
                      <button class="w-full p-6 text-right flex items-center justify-between" 
                              style="${styles.textPrimary};"
                              onclick="toggleFAQ(${index})">
                          <h3 class="text-xl font-semibold">${item.question}</h3>
                          <i class="ri-arrow-down-s-line text-2xl transition-transform" id="arrow-${index}"></i>
                      </button>
                      <div class="px-6 pb-6 hidden" id="answer-${index}">
                          <p style="${styles.textSecondary};">${item.answer}</p>
                      </div>
                  </div>
              `).join('')}
          </div>
      </div>
      
      <script>
          function toggleFAQ(index) {
              const answer = document.getElementById('answer-' + index);
              const arrow = document.getElementById('arrow-' + index);
              
              if (answer.classList.contains('hidden')) {
                  answer.classList.remove('hidden');
                  arrow.style.transform = 'rotate(180deg)';
              } else {
                  answer.classList.add('hidden');
                  arrow.style.transform = 'rotate(0deg)';
              }
          }
      </script>
  </section>`;
};

export const generateThemedFooter = (footer: any, theme: DesignTheme, template: any) => {
  const styles = getThemeClasses(theme);
  
  return `
  <!-- Footer -->
  <footer class="footer py-12" style="${styles.sectionBg}; border-top: 1px solid rgba(255,255,255,0.1);">
      <div class="max-w-7xl mx-auto px-6 text-center">
          <p class="text-lg" style="${styles.textSecondary};">
              &copy; 2024 ${footer?.companyName || template.hero?.title || 'החברה'}. כל הזכויות שמורות.
          </p>
      </div>
  </footer>`;
};