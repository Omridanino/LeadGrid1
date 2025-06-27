
import { ColorScheme } from "@/components/ColorEditor";

interface ContentWithState {
  headline?: string;
  subheadline?: string;
  cta?: string;
  valueProposition?: string;
  services?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  process?: Array<{
    title: string;
    description: string;
    step: number;
  }>;
  testimonials?: Array<{
    name: string;
    text: string;
    role: string;
    rating: number;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  currentColors: ColorScheme;
  formData: any;
  heroImage?: string;
}

export const generateHtmlFile = (contentWithState: ContentWithState): string => {
  const { currentColors, formData, heroImage } = contentWithState;
  const content = contentWithState;
  
  const getBusinessImage = (businessType: string) => {
    const businessImages = {
      'עורך דין': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop',
      'רופא': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop',
      'מעצב גרפי': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop',
      'יועץ עסקי': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
      'מורה פרטי': 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
      'מאמן כושר': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
      'צלם': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&h=1080&fit=crop',
      'נהג': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop',
      'מספר': 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=1920&h=1080&fit=crop',
      'default': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop'
    };
    return businessImages[businessType as keyof typeof businessImages] || businessImages.default;
  };

  const selectedElements = formData?.selectedElements || [];
  const businessImage = heroImage || getBusinessImage(formData?.businessType || 'default');
  
  const getStyleClass = () => {
    switch (formData?.heroStyle) {
      case 'geometric': return 'style-geometric';
      case 'glass': return 'style-glass';
      case 'metal': return 'style-metal';
      case 'image': return 'style-image';
      default: return 'style-3d';
    }
  };

  const generateHeroSection = () => {
    if (formData?.heroStyle === 'glass') {
      return `
        <section class="liquid-glass-hero section-hero">
          <div class="liquid-background">
            <div class="liquid-orb liquid-orb-hero-1"></div>
            <div class="liquid-orb liquid-orb-hero-2"></div>
            <div class="liquid-orb liquid-orb-hero-3"></div>
            <div class="liquid-orb liquid-orb-hero-4"></div>
          </div>
          
          <div class="liquid-waves">
            <div class="liquid-wave liquid-wave-1"></div>
            <div class="liquid-wave liquid-wave-2"></div>
            <div class="liquid-wave liquid-wave-3"></div>
          </div>
          
          <div class="container-hero relative z-10">
            <div class="liquid-hero-grid">
              <div class="liquid-content-flow">
                <div class="liquid-status-orb animate-slide-up">
                  <div class="liquid-pulse"></div>
                  <i class="ri-wifi-line text-green-400 text-lg"></i>
                  <span class="typography-liquid text-white font-semibold">זמין עכשיו</span>
                </div>

                <h1 class="typography-liquid text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 liquid-title-glow">
                  ${content?.headline || formData?.businessName || 'העסק שלי'}
                </h1>

                <div class="liquid-subtitle-flow mb-12 animate-slide-up animate-delay-2">
                  <div class="liquid-text-orb">
                    <p class="typography-liquid text-xl md:text-2xl text-white leading-relaxed liquid-text-glow">
                      ${content?.subheadline || `חוויה נוזלית ייחודית ל${formData?.targetAudience || 'לקוחות'}`}
                    </p>
                  </div>
                </div>

                <div class="liquid-actions-flow mb-16">
                  <button class="btn-base btn-liquid-glass animate-slide-up animate-delay-3">
                    <i class="ri-arrow-left-line text-lg"></i>
                    ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                  </button>
                  <button class="btn-base btn-liquid-glass animate-slide-up animate-delay-4">
                    <i class="ri-arrow-left-line text-lg"></i>
                    למד עוד
                  </button>
                </div>

                <div class="liquid-features-constellation animate-scale-in animate-delay-4">
                  <div class="liquid-feature-orb">
                    <div class="liquid-feature-glow">
                      <i class="ri-flashlight-line text-blue-300 text-xl"></i>
                    </div>
                    <span class="typography-liquid text-white text-sm font-medium liquid-text-glow">מהירות נוזלית</span>
                  </div>
                  <div class="liquid-feature-orb">
                    <div class="liquid-feature-glow">
                      <i class="ri-shield-check-line text-blue-300 text-xl"></i>
                    </div>
                    <span class="typography-liquid text-white text-sm font-medium liquid-text-glow">אמינות זורמת</span>
                  </div>
                  <div class="liquid-feature-orb">
                    <div class="liquid-feature-glow">
                      <i class="ri-infinity-line text-blue-300 text-xl"></i>
                    </div>
                    <span class="typography-liquid text-white text-sm font-medium liquid-text-glow">זמינות תמידית</span>
                  </div>
                </div>
              </div>

              <div class="liquid-visual-flow animate-scale-in animate-delay-3">
                <div class="liquid-showcase-orb">
                  <div class="liquid-showcase-rings">
                    <div class="liquid-ring liquid-ring-1"></div>
                    <div class="liquid-ring liquid-ring-2"></div>
                    <div class="liquid-ring liquid-ring-3"></div>
                  </div>
                  <div class="liquid-center-orb">
                    <i class="ri-atom-line text-blue-300 text-5xl"></i>
                  </div>
                </div>
                
                <div class="liquid-stats-bubbles">
                  <div class="liquid-stat-bubble liquid-bubble-top-left">
                    <div class="liquid-stat-glow">
                      <div class="typography-liquid text-2xl font-bold text-white liquid-text-glow">500+</div>
                      <div class="typography-liquid text-xs text-blue-200">זרימות מוצלחות</div>
                    </div>
                  </div>
                  <div class="liquid-stat-bubble liquid-bubble-top-right">
                    <div class="liquid-stat-glow">
                      <div class="typography-liquid text-2xl font-bold text-white liquid-text-glow">99%</div>
                      <div class="typography-liquid text-xs text-blue-200">שביעות רצון</div>
                    </div>
                  </div>
                  <div class="liquid-stat-bubble liquid-bubble-bottom-left">
                    <div class="liquid-stat-glow">
                      <div class="typography-liquid text-2xl font-bold text-white liquid-text-glow">24/7</div>
                      <div class="typography-liquid text-xs text-blue-200">זרימה רציפה</div>
                    </div>
                  </div>
                  <div class="liquid-stat-bubble liquid-bubble-bottom-right">
                    <div class="liquid-stat-glow">
                      <div class="typography-liquid text-2xl font-bold text-white liquid-text-glow">10+</div>
                      <div class="typography-liquid text-xs text-blue-200">שנות זרימה</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (formData?.heroStyle === 'geometric') {
      return `
        <section class="geometric-hero section-hero">
          <div class="geometric-shape"></div>
          <div class="geometric-shape"></div>
          <div class="geometric-shape"></div>
          
          <div class="container-hero relative z-10">
            <div class="text-center">
              <div class="flex items-center justify-center gap-4 mb-8 animate-slide-up">
                <div class="glass-card px-4 py-2">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                  </div>
                </div>
                <div class="glass-card px-4 py-2">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-sm font-medium text-white">מומחה מוסמך</span>
                  </div>
                </div>
              </div>

              <h1 class="typography-modern text-6xl md:text-8xl text-white mb-8 animate-slide-up animate-delay-1">
                ${content?.headline || formData?.businessName || 'העסק שלי'}
              </h1>

              <div class="typography-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2">
                ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData?.targetAudience || 'לקוחות'}`}
              </div>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button class="btn-base btn-geometric animate-slide-up animate-delay-3">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                </button>
                <button class="btn-base btn-geometric animate-slide-up animate-delay-4">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  למד עוד
                </button>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-scale-in animate-delay-4">
                <div class="geometric-card text-center">
                  <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                  <div class="typography-body text-gray-300 text-sm">לקוחות מרוצים</div>
                </div>
                <div class="geometric-card text-center">
                  <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                  <div class="typography-body text-gray-300 text-sm">שביעות רצון</div>
                </div>
                <div class="geometric-card text-center">
                  <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                  <div class="typography-body text-gray-300 text-sm">שנות ניסיון</div>
                </div>
                <div class="geometric-card text-center">
                  <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                  <div class="typography-body text-gray-300 text-sm">זמינות</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (formData?.heroStyle === 'metal') {
      return `
        <section class="section-hero bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-800/20"></div>
          
          <div class="container-hero relative z-10">
            <div class="text-center">
              <div class="inline-flex items-center gap-2 metal-card px-6 py-3 rounded-full mb-8 animate-slide-up">
                <svg class="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
                <span class="typography-luxury text-gray-800 font-semibold">פרימיום</span>
              </div>

              <h1 class="typography-luxury text-7xl md:text-9xl metal-text mb-8 animate-slide-up animate-delay-1">
                ${content?.headline || formData?.businessName || 'העסק שלי'}
              </h1>

              <div class="metal-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
                <p class="typography-luxury text-xl md:text-2xl text-gray-800 leading-relaxed">
                  ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData?.targetAudience || 'לקוחות'}`}
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button class="btn-base btn-metal animate-slide-up animate-delay-3">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                </button>
                <button class="btn-base btn-metal animate-slide-up animate-delay-4">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  למד עוד
                </button>
              </div>

              <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4">
                <div class="metal-card p-6 text-center">
                  <div class="typography-luxury text-3xl font-bold text-gray-800 mb-2">500+</div>
                  <div class="typography-body text-gray-700 text-sm">לקוחות VIP</div>
                </div>
                <div class="metal-card p-6 text-center">
                  <div class="typography-luxury text-3xl font-bold text-gray-800 mb-2">98%</div>
                  <div class="typography-body text-gray-700 text-sm">שביעות רצון</div>
                </div>
                <div class="metal-card p-6 text-center">
                  <div class="typography-luxury text-3xl font-bold text-gray-800 mb-2">10+</div>
                  <div class="typography-body text-gray-700 text-sm">שנות מצוינות</div>
                </div>
                <div class="metal-card p-6 text-center">
                  <div class="typography-luxury text-3xl font-bold text-gray-800 mb-2">24/7</div>
                  <div class="typography-body text-gray-700 text-sm">שירות פרמיום</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (formData?.heroStyle === 'image') {
      return `
        <section class="section-hero relative overflow-hidden" style="background-image: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${businessImage}); background-size: cover; background-position: center; background-attachment: fixed;">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
          
          <div class="container-hero relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="text-center lg:text-right">
                <div class="glass-card p-2 inline-block rounded-full mb-6 animate-slide-up">
                  <div class="flex items-center gap-2 px-4 py-2">
                    <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span class="text-sm font-medium text-white">מומלץ בחום</span>
                  </div>
                </div>

                <h1 class="typography-hero text-6xl md:text-8xl mb-8 animate-slide-up animate-delay-1">
                  ${content?.headline || formData?.businessName || 'העסק שלי'}
                </h1>

                <div class="glass-card p-6 mb-8 animate-slide-up animate-delay-2">
                  <p class="typography-body text-xl text-white leading-relaxed">
                    ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData?.targetAudience || 'לקוחות'}`}
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
                  <button class="btn-base btn-primary animate-slide-up animate-delay-3">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                  </button>
                  <button class="btn-base btn-primary animate-slide-up animate-delay-4">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    למד עוד
                  </button>
                </div>
              </div>

              <div class="hidden lg:block animate-scale-in animate-delay-4">
                <div class="glass-card p-8">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">איכות מובטחת</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">אמינות מוחלטת</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">ביצוע מהיר</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">זמינות תמידית</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // Default 3D Style
    return `
      <section class="hero-3d section-hero">
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        <div class="floating-element"></div>
        
        <div class="container-hero relative z-10">
          <div class="text-center">
            <div class="flex items-center justify-center gap-6 mb-8 animate-slide-up">
              <div class="glass-card px-4 py-2">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                </div>
              </div>
              <div class="glass-card px-4 py-2">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-sm font-medium text-white">מומחה מוסמך</span>
                </div>
              </div>
            </div>

            <h1 class="typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
              ${content?.headline || formData?.businessName || 'העסק שלי'}
            </h1>

            <div class="glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
              <p class="typography-body text-xl md:text-2xl text-white leading-relaxed">
                ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData?.targetAudience || 'לקוחות'}`}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button class="btn-base btn-primary animate-slide-up animate-delay-3">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                ${content?.cta || 'בואו נתחיל לעבוד יחד'}
              </button>
              <button class="btn-base btn-primary animate-slide-up animate-delay-4">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                למד עוד
              </button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4">
              <div class="glass-card p-6 text-center">
                <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div class="typography-body text-gray-300 text-sm">לקוחות מרוצים</div>
              </div>
              <div class="glass-card p-6 text-center">
                <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div class="typography-body text-gray-300 text-sm">שביעות רצון</div>
              </div>
              <div class="glass-card p-6 text-center">
                <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                <div class="typography-body text-gray-300 text-sm">שנות ניסיון</div>
              </div>
              <div class="glass-card p-6 text-center">
                <div class="typography-modern text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div class="typography-body text-gray-300 text-sm">זמינות</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  const generateValuePropositionSection = () => {
    if (!selectedElements.includes('valueProposition')) return '';
    
    return `
      <section class="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="typography-modern text-4xl md:text-6xl text-white mb-6 animate-slide-up">
              ${content?.valueProposition || 'הערך הייחודי שלנו'}
            </h2>
            <div class="glass-card p-6 max-w-4xl mx-auto animate-slide-up animate-delay-1">
              <p class="typography-body text-xl text-gray-300 leading-relaxed">
                כל פרויקט שמתחיל איתנו הוא מסע לקראת הצלחה מרשימה. אנחנו מחויבים לתת לכם ערך אמיתי שישרת אתכם לשנים רבות.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  const generateServicesSection = () => {
    if (!selectedElements.includes('services')) return '';
    
    const defaultServices = [
      { title: 'ייעוץ מקצועי', description: 'הדרכות מקצועיות מותאמות אישית לצרכים שלכם', icon: 'ri-lightbulb-line' },
      { title: 'ביצוע מהיר', description: 'מוכן לפעול בזמן קצר ולהגיע לתוצאות מרשימות', icon: 'ri-rocket-line' },
      { title: 'תמיכה מתמשכת', description: 'ליווי מקצועי וטכני לאורך כל הדרך', icon: 'ri-customer-service-line' }
    ];

    const services = content?.services || defaultServices;
    
    return `
      <section class="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="typography-modern text-4xl md:text-6xl text-white mb-6 animate-slide-up">
              השירותים שלנו
            </h2>
            <div class="glass-card p-6 max-w-4xl mx-auto animate-slide-up animate-delay-1">
              <p class="typography-body text-xl text-gray-300 leading-relaxed">
                פתרונות מקצועיים ומותאמים אישית שיעזרו לכם להגיע למטרות שלכם
              </p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 animate-scale-in animate-delay-2">
            ${services.map((service, index) => `
              <div class="glass-card p-8 text-center hover-3d">
                <div class="text-6xl mb-6 text-blue-400">
                  <i class="${service.icon}"></i>
                </div>
                <h3 class="typography-modern text-2xl font-bold text-white mb-4">${service.title}</h3>
                <p class="typography-body text-gray-300 leading-relaxed">${service.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  };

  const generateProcessSection = () => {
    if (!selectedElements.includes('process')) return '';
    
    const defaultProcess = [
      { title: 'ייעוץ ותכנון', description: 'אפיון מדויק של הצרכים והמטרות', step: 1 },
      { title: 'ביצוע מקצועי', description: 'יישום מדויק לפי התכנית שנקבעה', step: 2 },
      { title: 'מסירה ותמיכה', description: 'הקפדה על איכות ומתן תמיכה מתמשכת', step: 3 }
    ];

    const process = content?.process || defaultProcess;
    
    return `
      <section class="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="typography-modern text-4xl md:text-6xl text-white mb-6 animate-slide-up">
              תהליך העבודה שלנו
            </h2>
            <div class="glass-card p-6 max-w-4xl mx-auto animate-slide-up animate-delay-1">
              <p class="typography-body text-xl text-gray-300 leading-relaxed">
                תהליך מקצועי ומובנה שמבטיח תוצאות מעולות
              </p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 animate-scale-in animate-delay-2">
            ${process.map((step, index) => `
              <div class="glass-card p-8 text-center hover-3d">
                <div class="text-4xl font-bold text-blue-400 mb-4">${step.step}</div>
                <h3 class="typography-modern text-2xl font-bold text-white mb-4">${step.title}</h3>
                <p class="typography-body text-gray-300 leading-relaxed">${step.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  };

  const generateTestimonialsSection = () => {
    if (!selectedElements.includes('testimonials')) return '';
    
    const defaultTestimonials = [
      { name: 'מיכל כהן', text: 'שירות מקצועי ברמה גבוהה מאוד. המלצה חמה!', role: 'לקוחה מרוצה', rating: 5 },
      { name: 'דוד לוי', text: 'עבודה מהירה ויעילה, בדיוק מה שחיפשתי', role: 'לקוח מרוצה', rating: 5 },
      { name: 'רחל אברהם', text: 'תודה על השירות המעולה והתמיכה המקצועית', role: 'לקוחה מרוצה', rating: 5 }
    ];

    const testimonials = content?.testimonials || defaultTestimonials;
    
    return `
      <section class="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="typography-modern text-4xl md:text-6xl text-white mb-6 animate-slide-up">
              מה אומרים עלינו
            </h2>
            <div class="glass-card p-6 max-w-4xl mx-auto animate-slide-up animate-delay-1">
              <p class="typography-body text-xl text-gray-300 leading-relaxed">
                עדויות מלקוחות מרוצים שחוו את השירות המקצועי שלנו
              </p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 animate-scale-in animate-delay-2">
            ${testimonials.map((testimonial, index) => `
              <div class="glass-card p-8 hover-3d">
                <div class="flex mb-4">
                  ${Array.from({length: testimonial.rating}, () => '⭐').join('')}
                </div>
                <p class="typography-body text-gray-300 leading-relaxed mb-6">"${testimonial.text}"</p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ${testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 class="typography-modern font-bold text-white">${testimonial.name}</h4>
                    <p class="typography-body text-gray-400 text-sm">${testimonial.role}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  };

  const generateFAQSection = () => {
    if (!selectedElements.includes('faq')) return '';
    
    const defaultFAQ = [
      { question: 'כמה זמן לוקח הפרויקט?', answer: 'זמן הביצוע תלוי בהיקף הפרויקט, בדרך כלל בין שבוע לחודש' },
      { question: 'האם יש תמיכה לאחר המסירה?', answer: 'כן, אנו מספקים תמיכה מלאה ומתמשכת לכל הלקוחות' },
      { question: 'מה כלול במחיר?', answer: 'המחיר כולל את כל שלבי הפרויקט כולל תמיכה ראשונית' }
    ];

    const faq = content?.faq || defaultFAQ;
    
    return `
      <section class="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="typography-modern text-4xl md:text-6xl text-white mb-6 animate-slide-up">
              שאלות נפוצות
            </h2>
            <div class="glass-card p-6 max-w-4xl mx-auto animate-slide-up animate-delay-1">
              <p class="typography-body text-xl text-gray-300 leading-relaxed">
                תשובות לשאלות הנפוצות ביותר מלקוחותינו
              </p>
            </div>
          </div>
          
          <div class="max-w-4xl mx-auto space-y-6 animate-scale-in animate-delay-2">
            ${faq.map((item, index) => `
              <div class="glass-card p-6 hover-3d">
                <h3 class="typography-modern text-xl font-bold text-white mb-4">${item.question}</h3>
                <p class="typography-body text-gray-300 leading-relaxed">${item.answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  };

  const generateCTASection = () => {
    if (!selectedElements.includes('cta')) return '';
    
    return `
      <section class="section-padding bg-gradient-to-br from-blue-900 via-purple-900 to-black">
        <div class="container mx-auto px-4 text-center">
          <div class="glass-card p-12 max-w-4xl mx-auto animate-scale-in">
            <h2 class="typography-modern text-4xl md:text-6xl text-white mb-6">
              מוכנים להתחיל?
            </h2>
            <p class="typography-body text-xl text-gray-300 leading-relaxed mb-8">
              בואו נתחיל לעבוד יחד ונגיע לתוצאות מרשימות
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button class="btn-base btn-primary text-lg px-8 py-4">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                ${content?.cta || 'בואו נתחיל לעבוד יחד'}
              </button>
              <button class="btn-base btn-secondary text-lg px-8 py-4">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                צור קשר עכשיו
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  const generateNavigation = () => {
    return `
      <nav class="navigation-modern">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between py-4">
            <div class="typography-modern text-2xl font-bold text-white">
              ${formData?.businessName || 'העסק שלי'}
            </div>
            <div class="hidden md:flex items-center gap-8">
              ${selectedElements.includes('services') ? '<a href="#services" class="typography-body text-white hover:text-blue-400 transition-colors">שירותים</a>' : ''}
              ${selectedElements.includes('process') ? '<a href="#process" class="typography-body text-white hover:text-blue-400 transition-colors">תהליך</a>' : ''}
              ${selectedElements.includes('testimonials') ? '<a href="#testimonials" class="typography-body text-white hover:text-blue-400 transition-colors">המלצות</a>' : ''}
              ${selectedElements.includes('faq') ? '<a href="#faq" class="typography-body text-white hover:text-blue-400 transition-colors">שאלות</a>' : ''}
              <button class="btn-base btn-primary">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                צור קשר
              </button>
            </div>
          </div>
        </div>
      </nav>
    `;
  };

  const generateFooter = () => {
    return `
      <footer class="section-padding bg-black">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h3 class="typography-modern text-2xl font-bold text-white mb-4">
              ${formData?.businessName || 'העסק שלי'}
            </h3>
            <p class="typography-body text-gray-400 mb-8">
              © 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.
            </p>
            <div class="flex justify-center gap-8 text-gray-400">
              <span>טלפון: 050-1234567</span>
              <span>אימייל: info@business.co.il</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  };

  // Generate the complete HTML
  return `
    <!DOCTYPE html>
    <html lang="he" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${formData?.businessName || 'העסק שלי'} - ${content?.headline || 'דף נחיתה מקצועי'}</title>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet">
      <style>
        /* Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          direction: rtl;
        }
        
        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .container-hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Section Padding */
        .section-padding {
          padding: 80px 0;
        }
        
        .section-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        /* Typography */
        .typography-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          line-height: 1.1;
          text-align: center;
        }
        
        .typography-modern {
          font-weight: 700;
          line-height: 1.2;
        }
        
        .typography-body {
          font-weight: 400;
          line-height: 1.6;
        }
        
        .typography-luxury {
          font-family: 'Times New Roman', serif;
          font-weight: 700;
        }
        
        .typography-liquid {
          font-weight: 600;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        /* Glass Card */
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        /* Buttons */
        .btn-base {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.6);
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        /* Geometric Style */
        .geometric-hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          position: relative;
        }
        
        .geometric-shape {
          position: absolute;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 20px;
          animation: float 6s ease-in-out infinite;
        }
        
        .geometric-shape:nth-child(1) {
          top: 10%;
          left: 10%;
          width: 100px;
          height: 100px;
          animation-delay: 0s;
        }
        
        .geometric-shape:nth-child(2) {
          top: 60%;
          right: 10%;
          width: 150px;
          height: 150px;
          animation-delay: 2s;
        }
        
        .geometric-shape:nth-child(3) {
          bottom: 20%;
          left: 50%;
          width: 80px;
          height: 80px;
          animation-delay: 4s;
        }
        
        .geometric-card {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }
        
        .btn-geometric {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .btn-geometric::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-geometric:hover::before {
          left: 100%;
        }
        
        /* Liquid Glass Style */
        .liquid-glass-hero {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }
        
        .liquid-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .liquid-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.1));
          filter: blur(40px);
          animation: liquidFloat 8s ease-in-out infinite;
        }
        
        .liquid-orb-hero-1 {
          top: 10%;
          left: 10%;
          width: 300px;
          height: 300px;
          animation-delay: 0s;
        }
        
        .liquid-orb-hero-2 {
          top: 60%;
          right: 10%;
          width: 400px;
          height: 400px;
          animation-delay: 2s;
        }
        
        .liquid-orb-hero-3 {
          bottom: 10%;
          left: 50%;
          width: 250px;
          height: 250px;
          animation-delay: 4s;
        }
        
        .liquid-orb-hero-4 {
          top: 30%;
          left: 70%;
          width: 200px;
          height: 200px;
          animation-delay: 6s;
        }
        
        .liquid-waves {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .liquid-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          border-radius: 50%;
          animation: wave 6s ease-in-out infinite;
        }
        
        .liquid-wave-1 {
          animation-delay: 0s;
        }
        
        .liquid-wave-2 {
          animation-delay: 2s;
          opacity: 0.7;
        }
        
        .liquid-wave-3 {
          animation-delay: 4s;
          opacity: 0.5;
        }
        
        .liquid-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 100vh;
          padding: 80px 0;
        }
        
        .liquid-content-flow {
          position: relative;
        }
        
        .liquid-status-orb {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          padding: 12px 24px;
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
        }
        
        .liquid-pulse {
          position: absolute;
          top: 50%;
          left: 20px;
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .liquid-title-glow {
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }
        
        .liquid-subtitle-flow {
          position: relative;
        }
        
        .liquid-text-orb {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }
        
        .liquid-text-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        .liquid-actions-flow {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .btn-liquid-glass {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: white;
          backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
        }
        
        .btn-liquid-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-liquid-glass:hover::before {
          left: 100%;
        }
        
        .liquid-features-constellation {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          margin-top: 40px;
        }
        
        .liquid-feature-orb {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 50px;
          padding: 12px 20px;
          backdrop-filter: blur(10px);
        }
        
        .liquid-feature-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
        }
        
        .liquid-visual-flow {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 600px;
        }
        
        .liquid-showcase-orb {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .liquid-showcase-rings {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .liquid-ring {
          position: absolute;
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: rotate 10s linear infinite;
        }
        
        .liquid-ring-1 {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          animation-delay: 0s;
        }
        
        .liquid-ring-2 {
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
          animation-delay: 2s;
          animation-direction: reverse;
        }
        
        .liquid-ring-3 {
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
          animation-delay: 4s;
        }
        
        .liquid-center-orb {
          position: relative;
          width: 120px;
          height: 120px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(16px);
          z-index: 10;
        }
        
        .liquid-stats-bubbles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .liquid-stat-bubble {
          position: absolute;
          width: 120px;
          height: 80px;
        }
        
        .liquid-bubble-top-left {
          top: 0;
          left: 0;
        }
        
        .liquid-bubble-top-right {
          top: 0;
          right: 0;
        }
        
        .liquid-bubble-bottom-left {
          bottom: 0;
          left: 0;
        }
        
        .liquid-bubble-bottom-right {
          bottom: 0;
          right: 0;
        }
        
        .liquid-stat-glow {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          backdrop-filter: blur(10px);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        /* Metal Style */
        .metal-card {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(212, 175, 55, 0.2);
        }
        
        .metal-text {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-metal {
          background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%);
          color: #1a1a1a;
          font-weight: 700;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }
        
        .btn-metal:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        }
        
        /* 3D Style */
        .hero-3d {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
        }
        
        .floating-element {
          position: absolute;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 20px;
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-element:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .floating-element:nth-child(2) {
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }
        
        .floating-element:nth-child(3) {
          bottom: 20%;
          left: 50%;
          animation-delay: 4s;
        }
        
        /* Navigation */
        .navigation-modern {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }
        
        .navigation-modern a {
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        /* Hover Effects */
        .hover-3d {
          transition: transform 0.3s ease;
        }
        
        .hover-3d:hover {
          transform: perspective(1000px) rotateY(5deg) rotateX(5deg) translateZ(20px);
        }
        
        .icon-glass {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        
        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes liquidFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -10px) scale(1.1); }
          50% { transform: translate(-10px, -20px) scale(0.9); }
          75% { transform: translate(-20px, 10px) scale(1.1); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-delay-1 { animation-delay: 0.2s; }
        .animate-delay-2 { animation-delay: 0.4s; }
        .animate-delay-3 { animation-delay: 0.6s; }
        .animate-delay-4 { animation-delay: 0.8s; }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .section-hero {
            min-height: 80vh;
            padding: 40px 0;
          }
          
          .liquid-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          
          .typography-hero {
            font-size: 2.5rem;
          }
          
          .typography-modern {
            font-size: 2rem;
          }
          
          .liquid-visual-flow {
            height: 400px;
          }
          
          .liquid-showcase-orb {
            width: 200px;
            height: 200px;
          }
          
          .liquid-center-orb {
            width: 80px;
            height: 80px;
          }
          
          .liquid-actions-flow {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-base {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .md\\:grid-cols-3 {
            grid-template-columns: 1fr;
          }
          
          .md\\:grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .navigation-modern .hidden {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .typography-hero {
            font-size: 2rem;
          }
          
          .section-padding {
            padding: 40px 0;
          }
          
          .glass-card {
            padding: 20px;
          }
          
          .btn-base {
            padding: 12px 24px;
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body class="${getStyleClass()}">
      ${generateNavigation()}
      ${generateHeroSection()}
      ${generateValuePropositionSection()}
      ${generateServicesSection()}
      ${generateProcessSection()}
      ${generateTestimonialsSection()}
      ${generateFAQSection()}
      ${generateCTASection()}
      ${generateFooter()}
      
      <script>
        // Smooth scroll for navigation links
        document.addEventListener('DOMContentLoaded', function() {
          const links = document.querySelectorAll('a[href^="#"]');
          links.forEach(link => {
            link.addEventListener('click', function(e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });
          
          // Add scroll effect to navigation
          const nav = document.querySelector('.navigation-modern');
          window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
              nav.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
              nav.style.background = 'rgba(0, 0, 0, 0.9)';
            }
          });
        });
      </script>
    </body>
    </html>
  `;
};
