import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl: string): string => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  
  // Generate the exact HTML that matches FullScreenPreview
  const generateCompleteHTML = () => {
    const heroStyle = formData.heroStyle || '3d';
    
    return `
    <div class="w-full h-full style-${heroStyle}" style="overflow-y: auto; overflow-x: hidden; scroll-behavior: smooth; position: relative;">
      
      <!-- Hero Section - Match HeroSection component exactly -->
      ${generateHeroSection()}
      
      <!-- Navigation - Match NavigationSection component exactly -->
      ${generateNavigation()}
      
      <!-- Content Sections - Match ContentSections component exactly -->
      ${generateContentSections()}
      
      <!-- Footer Section - Match FullScreenPreview footer exactly -->
      ${generateFooter()}
      
    </div>
    `;
  };

  // Generate hero section that EXACTLY matches what user sees in preview
  const generateHeroSection = () => {
    const heroStyle = formData.heroStyle || '3d';
    
    if (heroStyle === 'glass') {
      return generateLiquidGlassHero();
    } else if (heroStyle === 'geometric') {
      return generateGeometricHero();
    } else if (heroStyle === 'metal') {
      return generateMetalHero();
    } else if (heroStyle === 'image') {
      return generateImageHero();
    } else {
      return generateDefault3DHero();
    }
  };

  // LIQUID GLASS HERO - Exact match with HeroSection component
  const generateLiquidGlassHero = () => {
    const title = content?.headline || formData.businessName;
    const subtitle = content?.subheadline || `חוויה נוזלית ייחודית ל${formData.targetAudience}`;
    const cta = content?.cta || 'בואו נתחיל לעבוד יחד';
    
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
            <!-- Floating Status Badge -->
            <div class="liquid-status-orb animate-slide-up">
              <div class="liquid-pulse"></div>
              <i class="ri-wifi-line text-green-400 text-lg"></i>
              <span class="typography-liquid text-white font-semibold">זמין עכשיו</span>
            </div>

            <!-- Liquid Hero Title -->
            <h1 class="typography-liquid text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1 liquid-title-glow">
              ${title}
            </h1>

            <!-- Flowing Subtitle Container -->
            <div class="liquid-subtitle-flow mb-12 animate-slide-up animate-delay-2">
              <div class="liquid-text-orb">
                <p class="typography-liquid text-xl md:text-2xl text-white leading-relaxed liquid-text-glow">
                  ${subtitle}
                </p>
              </div>
            </div>

            <!-- Liquid Action Buttons -->
            <div class="liquid-actions-flow mb-16">
              <button class="btn-base btn-liquid-glass animate-slide-up animate-delay-3">
                <i class="ri-arrow-left-line text-lg"></i>
                ${cta}
              </button>
              <button class="btn-base btn-liquid-glass animate-slide-up animate-delay-4">
                <i class="ri-arrow-left-line text-lg"></i>
                למד עוד
              </button>
            </div>

            <!-- Floating Features Orbs -->
            <div class="liquid-features-constellation animate-scale-in animate-delay-4">
              <div class="liquid-feature-orb">
                <div class="liquid-feature-glow">
                  <i class="ri-flashlight-line text-blue-300 text-xl"></i>
                </div>
                <span class="typography-liquid text-white text-sm font-medium liquid-text-glow">
                  מהירות נוזלית
                </span>
              </div>
              <div class="liquid-feature-orb">
                <div class="liquid-feature-glow">
                  <i class="ri-shield-check-line text-blue-300 text-xl"></i>
                </div>
                <span class="typography-liquid text-white text-sm font-medium liquid-text-glow">
                  אמינות זורמת
                </span>
              </div>
              <div class="liquid-feature-orb">
                <div class="liquid-feature-glow">
                  <i class="ri-infinity-line text-blue-300 text-xl"></i>
                </div>
                <span class="typography-liquid text-white text-sm font-medium liquid-text-glow">
                  זמינות תמידית
                </span>
              </div>
            </div>
          </div>

          <!-- Liquid Visual Showcase -->
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
            
            <!-- Floating Stats Bubbles -->
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
  };

  // GEOMETRIC HERO - Match HeroSection component exactly
  const generateGeometricHero = () => {
    const title = content?.headline || formData.businessName;
    const subtitle = content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`;
    const cta = content?.cta || 'בואו נתחיל לעבוד יחד';

    return `
    <section class="geometric-hero section-hero">
      <div class="geometric-shape"></div>
      <div class="geometric-shape"></div>
      <div class="geometric-shape"></div>
      
      <div class="container-hero relative z-10">
        <div class="text-center">
          <!-- Trust Badges -->
          <div class="flex items-center justify-center gap-4 mb-8 animate-slide-up">
            <div class="glass-card px-4 py-2">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
              </div>
            </div>
            <div class="glass-card px-4 py-2">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm font-medium text-white">מומחה מוסמך</span>
              </div>
            </div>
          </div>

          <!-- Main Headline -->
          <h1 class="typography-modern text-6xl md:text-8xl text-white mb-8 animate-slide-up animate-delay-1">
            ${title}
          </h1>

          <!-- Subheadline -->
          <div class="typography-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2">
            ${subtitle}
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button class="btn-base btn-geometric animate-slide-up animate-delay-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              ${cta}
            </button>
            <button class="btn-base btn-geometric animate-slide-up animate-delay-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              למד עוד
            </button>
          </div>

          <!-- Stats Grid -->
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
  };

  // METAL HERO - Match HeroSection component exactly
  const generateMetalHero = () => {
    const title = content?.headline || formData.businessName;
    const subtitle = content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`;
    const cta = content?.cta || 'בואו נתחיל לעבוד יחד';

    return `
    <section class="section-hero bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-800/20"></div>
      
      <div class="container-hero relative z-10">
        <div class="text-center">
          <!-- Luxury Badge -->
          <div class="inline-flex items-center gap-2 metal-card px-6 py-3 rounded-full mb-8 animate-slide-up">
            <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="typography-luxury text-gray-800 font-semibold">פרימיום</span>
          </div>

          <!-- Luxury Title -->
          <h1 class="typography-luxury text-7xl md:text-9xl metal-text mb-8 animate-slide-up animate-delay-1">
            ${title}
          </h1>

          <!-- Elegant Subtitle -->
          <div class="metal-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
            <p class="typography-luxury text-xl md:text-2xl text-gray-800 leading-relaxed">
              ${subtitle}
            </p>
          </div>

          <!-- Premium Actions -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button class="btn-base btn-metal animate-slide-up animate-delay-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              ${cta}
            </button>
            <button class="btn-base btn-metal animate-slide-up animate-delay-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              למד עוד
            </button>
          </div>

          <!-- Luxury Stats -->
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
  };

  // IMAGE HERO - Match HeroSection component exactly  
  const generateImageHero = () => {
    const title = content?.headline || formData.businessName;
    const subtitle = content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`;
    const cta = content?.cta || 'בואו נתחיל לעבוד יחד';
    const imageUrl = heroImageUrl || getBusinessImage(formData.businessType);

    return `
    <section 
      class="section-hero relative overflow-hidden"
      style="background-image: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${imageUrl}); background-size: cover; background-position: center; background-attachment: fixed;"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
      
      <div class="container-hero relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-right">
            <!-- Image Hero Content -->
            <div class="glass-card p-2 inline-block rounded-full mb-6 animate-slide-up">
              <div class="flex items-center gap-2 px-4 py-2">
                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <span class="text-sm font-medium text-white">מומלץ בחום</span>
              </div>
            </div>

            <h1 class="typography-hero text-6xl md:text-8xl mb-8 animate-slide-up animate-delay-1">
              ${title}
            </h1>

            <div class="glass-card p-6 mb-8 animate-slide-up animate-delay-2">
              <p class="typography-body text-xl text-white leading-relaxed">
                ${subtitle}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
              <button class="btn-base btn-primary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                ${cta}
              </button>
              <button class="btn-base btn-primary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
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
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 class="typography-body text-white font-medium text-sm">איכות מובטחת</h3>
                </div>
                <div class="text-center p-4">
                  <div class="icon-glass mx-auto mb-3 text-blue-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <h3 class="typography-body text-white font-medium text-sm">אמינות מוחלטת</h3>
                </div>
                <div class="text-center p-4">
                  <div class="icon-glass mx-auto mb-3 text-blue-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 class="typography-body text-white font-medium text-sm">ביצוע מהיר</h3>
                </div>
                <div class="text-center p-4">
                  <div class="icon-glass mx-auto mb-3 text-blue-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
  };

  // DEFAULT 3D HERO - Match HeroSection component exactly
  const generateDefault3DHero = () => {
    const title = content?.headline || formData.businessName;
    const subtitle = content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`;
    const cta = content?.cta || 'בואו נתחיל לעבוד יחד';

    return `
    <section class="hero-3d section-hero">
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      
      <div class="container-hero relative z-10">
        <div class="text-center">
          <!-- Trust Indicators -->
          <div class="flex items-center justify-center gap-6 mb-8 animate-slide-up">
            <div class="glass-card px-4 py-2">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
              </div>
            </div>
            <div class="glass-card px-4 py-2">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm font-medium text-white">מומחה מוסמך</span>
              </div>
            </div>
          </div>

          <!-- Main Hero Content -->
          <h1 class="typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
            ${title}
          </h1>

          <div class="glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
            <p class="typography-body text-xl md:text-2xl text-white leading-relaxed">
              ${subtitle}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button class="btn-base btn-primary animate-slide-up animate-delay-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              ${cta}
            </button>
            <button class="btn-base btn-primary animate-slide-up animate-delay-4">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              למד עוד
            </button>
          </div>

          <!-- Professional Stats -->
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

  // Helper function for business images
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

  // Navigation - Match NavigationSection exactly
  const generateNavigation = () => {
    return `
    <nav class="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="text-xl font-bold text-white">${businessName}</div>
          <div class="hidden md:flex space-x-8 space-x-reverse">
            <a href="#hero" class="text-white hover:text-blue-400 transition-colors cursor-pointer">בית</a>
            <a href="#about" class="text-white hover:text-blue-400 transition-colors cursor-pointer">אודות</a>
            <a href="#services" class="text-white hover:text-blue-400 transition-colors cursor-pointer">שירותים</a>
            <a href="#contact" class="text-white hover:text-blue-400 transition-colors cursor-pointer">צור קשר</a>
          </div>
        </div>
      </div>
    </nav>
    `;
  };

  // Content Sections - Match ContentSections exactly
  const generateContentSections = () => {
    return `
    ${generateAboutSection()}
    ${generateFeaturesSection()}
    ${generateWhyChooseUsSection()}
    ${generateTestimonialsSection()}
    ${generateFAQSection()}
    ${generateContactSection()}
    `;
  };

  const generateAboutSection = () => {
    const aboutTitle = content?.sections?.emotionalSection?.title || content?.aboutTitle || "השירות שמשנה את המשחק";
    const aboutContent = content?.sections?.emotionalSection?.content || content?.aboutContent || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`;
    
    return `
    <section id="about" class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-8 animate-slide-up">
            ${aboutTitle}
          </h2>
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto animate-slide-up delay-100">
            <p class="text-xl text-white leading-relaxed">
              ${aboutContent}
            </p>
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateFeaturesSection = () => {
    const features = content?.sections?.features || content?.features || [
      { title: "שירות מקצועי", description: "אנו מציעים שירות ברמה הגבוהה ביותר", icon: "🔥" },
      { title: "זמינות תמידית", description: "אנחנו כאן בשבילכם 24/7", icon: "⭐" },
      { title: "מחירים הוגנים", description: "מחירים תחרותיים ללא פשרות על איכות", icon: "💎" }
    ];

    const featuresTitle = content?.featuresTitle || 'השירותים שלנו';

    return `
    <section id="services" class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${featuresTitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${features.map((feature: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center animate-slide-up" style="animation-delay: ${index * 0.2}s">
                <div class="text-4xl mb-6">${feature.icon || '🔥'}</div>
                <h3 class="text-xl font-bold text-white mb-4">${feature.title}</h3>
                <p class="text-gray-300 leading-relaxed">${feature.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateWhyChooseUsSection = () => {
    const whyChooseUs = content?.sections?.whyChooseUs || content?.whyChooseUs || [
      { title: "ניסיון עשיר", description: "שנים של ניסיון בתחום", icon: "✅" },
      { title: "צוות מקצועי", description: "אנשי מקצוע מיומנים ומנוסים", icon: "✅" }
    ];

    const whyChooseTitle = content?.whyChooseTitle || 'למה לבחור בנו?';

    return `
    <section class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${whyChooseTitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            ${whyChooseUs.map((reason: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slide-up" style="animation-delay: ${index * 0.2}s">
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-2xl">${reason.icon || '✅'}</div>
                  <h3 class="text-xl font-bold text-white">${reason.title}</h3>
                </div>
                <p class="text-gray-300 leading-relaxed">${reason.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateTestimonialsSection = () => {
    const testimonials = content?.sections?.testimonials || content?.testimonials || [
      { name: "יוסי כהן", role: "לקוח מרוצה", content: "שירות מעולה ומקצועי! ממליץ בחום על השירותים." },
      { name: "רחל לוי", role: "לקוחה קבועה", content: "התמחות גבוהה וזמינות מלאה. בדיוק מה שחיפשתי." },
      { name: "דוד אברהם", role: "בעל עסק", content: "עזרו לי להגשים את החלום שלי. תודה רבה!" }
    ];

    const testimonialsTitle = content?.testimonialsTitle || 'מה אומרים עלינו';

    return `
    <section class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${testimonialsTitle}</h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${testimonials.map((testimonial: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slide-up" style="animation-delay: ${index * 0.2}s">
                <div class="flex gap-1 mb-4">
                  ${Array(5).fill(0).map(() => `
                    <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                    </svg>
                  `).join('')}
                </div>
                <p class="text-white mb-6 leading-relaxed">"${testimonial.content}"</p>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    ${testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div class="font-semibold text-white">${testimonial.name}</div>
                    <div class="text-sm text-gray-400">${testimonial.role}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateFAQSection = () => {
    const faq = content?.sections?.faq || content?.faq || [
      { question: "איך אפשר ליצור קשר?", answer: "ניתן ליצור קשר דרך הטלפון או האימייל המופיעים באתר." },
      { question: "מה שעות הפעילות?", answer: "אנחנו זמינים 24/7 לשירותכם." },
      { question: "האם יש אחריות על השירות?", answer: "כן, אנו נותנים אחריות מלאה על כל השירותים שלנו." }
    ];

    const faqTitle = content?.faqTitle || 'שאלות נפוצות';

    return `
    <section class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white animate-slide-up">${faqTitle}</h2>
          </div>
          <div class="space-y-4">
            ${faq.map((faqItem: any, index: number) => `
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slide-up" style="animation-delay: ${index * 0.1}s">
                <h3 class="text-lg font-bold text-white mb-3">${faqItem.question}</h3>
                <p class="text-gray-300 leading-relaxed">${faqItem.answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    `;
  };

  const generateContactSection = () => {
    const contactTitle = content?.contactTitle || 'מוכנים להתחיל?';
    const contactSubtitle = content?.contactSubtitle || 'בואו ניצור יחד משהו מרהיב שיקדם את העסק שלכם';
    const primaryCta = content?.primaryCta || 'צור קשר עכשיו';
    const secondaryCta = content?.secondaryCta || 'קבל הצעת מחיר';

    return `
    <section id="contact" class="section-content bg-black/80 backdrop-blur-lg py-20 relative">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-black text-white mb-8 animate-slide-up">
              ${contactTitle}
            </h2>
            
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 animate-slide-up delay-100">
              <p class="text-xl text-white leading-relaxed">
                ${contactSubtitle}
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8 animate-slide-up delay-200">
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-center gap-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-white font-medium">${formData?.contactInfo?.split('\n')[0]?.replace('טלפון: ', '') || '050-1234567'}</span>
              </div>
              <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center justify-center gap-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-white font-medium">${formData?.contactInfo?.split('\n')[1]?.replace('אימייל: ', '') || 'info@business.co.il'}</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-300">
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                ${primaryCta}
              </button>
              <button class="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
                ${secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  };

  // Footer - Match FullScreenPreview footer exactly
  const generateFooter = () => {
    return `
    <footer class="bg-black/50 backdrop-blur-md py-16 text-center">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold text-white mb-4">
            ${businessName}
          </h3>
          <p class="text-gray-400 mb-8">
            © 2024 כל הזכויות שמורות. ${businessType} מקצועית ואמינה.
          </p>
          <div class="flex justify-center gap-8 text-gray-400">
            <span>טלפון: ${formData?.contactInfo?.split('\n')[0]?.replace('טלפון: ', '') || '050-1234567'}</span>
            <span>אימייל: ${formData?.contactInfo?.split('\n')[1]?.replace('אימייל: ', '') || 'info@business.co.il'}</span>
          </div>
        </div>
      </div>
    </footer>
    `;
  };

  // Return complete HTML with ALL styles and functionality
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName} - ${businessType}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        ${getCompleteCSS()}
    </style>
</head>
<body class="bg-black text-white font-sans antialiased">
    ${generateCompleteHTML()}
    
    <script>
        ${getCompleteJavaScript()}
    </script>
</body>
</html>`;
};

// Complete CSS that matches PreviewStyles exactly
const getCompleteCSS = () => {
  return `
    /* Base Reset and Typography */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      background: #000;
      color: #fff;
      overflow-x: hidden;
      line-height: 1.6;
    }

    /* LIQUID GLASS STYLES - EXACTLY MATCH HEROSECTION */
    .liquid-glass-hero {
      background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0.9) 70%);
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .liquid-background {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .liquid-orb {
      position: absolute;
      border-radius: 50%;
      backdrop-filter: blur(16px);
      animation: liquidFloat 12s ease-in-out infinite;
    }

    .liquid-orb-hero-1 {
      width: 18rem;
      height: 18rem;
      top: 10%;
      left: 10%;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%);
      animation-delay: 0s;
    }

    .liquid-orb-hero-2 {
      width: 12rem;
      height: 12rem;
      top: 60%;
      right: 20%;
      background: linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.1) 100%);
      animation-delay: -4s;
    }

    .liquid-orb-hero-3 {
      width: 9rem;
      height: 9rem;
      bottom: 20%;
      left: 30%;
      background: linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 100%);
      animation-delay: -8s;
    }

    .liquid-orb-hero-4 {
      width: 6rem;
      height: 6rem;
      top: 30%;
      right: 40%;
      background: linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 100%);
      animation-delay: -6s;
    }

    .liquid-waves {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .liquid-wave {
      position: absolute;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%);
      animation: liquidWave 20s linear infinite;
    }

    .liquid-wave-1 { animation-delay: 0s; }
    .liquid-wave-2 { animation-delay: -7s; }
    .liquid-wave-3 { animation-delay: -14s; }

    .liquid-hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      max-width: 72rem;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .liquid-content-flow {
      text-align: center;
    }

    .liquid-status-orb {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(34, 197, 94, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(34, 197, 94, 0.2);
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      margin-bottom: 2rem;
      position: relative;
    }

    .liquid-pulse {
      position: absolute;
      left: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;
      background: #22c55e;
      border-radius: 50%;
      animation: liquidPulse 2s ease-in-out infinite;
    }

    .liquid-title-glow {
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
    }

    .liquid-subtitle-flow {
      margin-bottom: 3rem;
    }

    .liquid-text-orb {
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 1.5rem;
      padding: 2rem;
    }

    .liquid-text-glow {
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }

    .liquid-actions-flow {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 4rem;
    }

    .liquid-features-constellation {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .liquid-feature-orb {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .liquid-feature-glow {
      width: 3rem;
      height: 3rem;
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .liquid-visual-flow {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .liquid-showcase-orb {
      position: relative;
      width: 20rem;
      height: 20rem;
    }

    .liquid-showcase-rings {
      position: absolute;
      inset: 0;
    }

    .liquid-ring {
      position: absolute;
      border: 1px solid;
      border-radius: 50%;
      animation: liquidSpin 20s linear infinite;
    }

    .liquid-ring-1 {
      inset: 0;
      border-color: rgba(59, 130, 246, 0.3);
      animation-duration: 20s;
    }

    .liquid-ring-2 {
      inset: 20%;
      border-color: rgba(147, 51, 234, 0.3);
      animation-duration: 15s;
      animation-direction: reverse;
    }

    .liquid-ring-3 {
      inset: 40%;
      border-color: rgba(34, 197, 94, 0.3);
      animation-duration: 25s;
    }

    .liquid-center-orb {
      position: absolute;
      inset: 35%;
      background: rgba(59, 130, 246, 0.2);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .liquid-stats-bubbles {
      position: absolute;
      inset: 0;
    }

    .liquid-stat-bubble {
      position: absolute;
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 1rem;
      padding: 1rem;
      text-align: center;
    }

    .liquid-bubble-top-left { top: 0; left: 0; }
    .liquid-bubble-top-right { top: 0; right: 0; }
    .liquid-bubble-bottom-left { bottom: 0; left: 0; }
    .liquid-bubble-bottom-right { bottom: 0; right: 0; }

    .liquid-stat-glow {
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }

    /* BUTTON STYLES */
    .btn-base {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      padding: 1rem 2rem;
      border-radius: 1rem;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
      text-decoration: none;
    }

    .btn-liquid-glass {
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      color: white;
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }

    .btn-liquid-glass:hover {
      background: rgba(59, 130, 246, 0.2);
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
    }

    .btn-geometric {
      background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
      color: white;
      clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);
    }

    .btn-geometric:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(147, 51, 234, 0.3);
    }

    .btn-metal {
      background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
      color: white;
      border: 1px solid #6b7280;
    }

    .btn-metal:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .btn-primary {
      background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
      color: white;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }

    /* GEOMETRIC STYLES */
    .geometric-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .geometric-shape {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      animation: geometricFloat 8s ease-in-out infinite;
    }

    .geometric-shape:nth-child(1) {
      width: 12rem;
      height: 12rem;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .geometric-shape:nth-child(2) {
      width: 8rem;
      height: 8rem;
      top: 50%;
      right: 10%;
      animation-delay: -3s;
    }

    .geometric-shape:nth-child(3) {
      width: 6rem;
      height: 6rem;
      bottom: 10%;
      left: 30%;
      animation-delay: -6s;
    }

    .geometric-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 1.5rem;
    }

    /* METAL STYLES */
    .metal-card {
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      border: 1px solid #f59e0b;
      border-radius: 1rem;
    }

    .metal-text {
      background: linear-gradient(135deg, #000 0%, #374151 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* DEFAULT 3D STYLES */
    .hero-3d {
      background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0.9) 70%);
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .floating-element {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: defaultFloat 6s ease-in-out infinite;
    }

    .floating-element:nth-child(1) {
      width: 6rem;
      height: 6rem;
      top: 20%;
      left: 20%;
      animation-delay: 0s;
    }

    .floating-element:nth-child(2) {
      width: 4rem;
      height: 4rem;
      top: 60%;
      right: 30%;
      animation-delay: -2s;
    }

    .floating-element:nth-child(3) {
      width: 5rem;
      height: 5rem;
      bottom: 30%;
      left: 40%;
      animation-delay: -4s;
    }

    /* GLASS CARD STYLES */
    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
    }

    .icon-glass {
      width: 3rem;
      height: 3rem;
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* TYPOGRAPHY */
    .typography-liquid {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .typography-modern {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 900;
    }

    .typography-luxury {
      font-family: 'Georgia', serif;
    }

    .typography-hero {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 900;
    }

    .typography-body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    /* ANIMATIONS */
    @keyframes liquidFloat {
      0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
      25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
      50% { transform: translateY(10px) translateX(-15px) scale(0.95); }
      75% { transform: translateY(-10px) translateX(5px) scale(1.02); }
    }

    @keyframes liquidWave {
      0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(360deg); }
    }

    @keyframes liquidPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }

    @keyframes liquidSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes geometricFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    @keyframes defaultFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scale-in {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
    .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }
    .animate-delay-1 { animation-delay: 0.2s; }
    .animate-delay-2 { animation-delay: 0.4s; }
    .animate-delay-3 { animation-delay: 0.6s; }
    .animate-delay-4 { animation-delay: 0.8s; }

    /* CONTAINER STYLES */
    .container-hero {
      max-width: 72rem;
      margin: 0 auto;
      padding: 0 1rem;
      width: 100%;
    }

    .section-hero {
      min-height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .section-content {
      position: relative;
    }

    /* RESPONSIVE DESIGN */
    @media (max-width: 1024px) {
      .liquid-hero-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .liquid-visual-flow {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .text-7xl, .text-9xl { font-size: 3rem; }
      .text-6xl, .text-8xl { font-size: 2.5rem; }
      .text-5xl { font-size: 2rem; }
      .text-4xl { font-size: 1.75rem; }
      .text-3xl { font-size: 1.5rem; }
      .text-2xl { font-size: 1.25rem; }
      .text-xl { font-size: 1.125rem; }
      
      .liquid-actions-flow {
        flex-direction: column;
      }
      
      .liquid-features-constellation {
        flex-direction: column;
        align-items: center;
      }
    }

    /* UTILITY CLASSES */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
    .text-center { text-align: center; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .gap-1 { gap: 0.25rem; }
    .gap-2 { gap: 0.5rem; }
    .gap-3 { gap: 0.75rem; }
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
    .gap-8 { gap: 2rem; }
    .grid { display: grid; }
    .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
    .hidden { display: none; }
    .block { display: block; }
    .relative { position: relative; }
    .absolute { position: absolute; }
    .sticky { position: sticky; }
    .top-0 { top: 0; }
    .z-10 { z-index: 10; }
    .z-50 { z-index: 50; }
    .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
    .w-4 { width: 1rem; }
    .h-4 { height: 1rem; }
    .w-5 { width: 1.25rem; }
    .h-5 { height: 1.25rem; }
    .w-8 { width: 2rem; }
    .h-8 { height: 2rem; }
    .w-12 { width: 3rem; }
    .h-12 { height: 3rem; }
    .h-16 { height: 4rem; }
    .min-h-screen { min-height: 100vh; }
    .max-w-2xl { max-width: 42rem; }
    .max-w-3xl { max-width: 48rem; }
    .max-w-4xl { max-width: 56rem; }
    .max-w-5xl { max-width: 64rem; }
    .max-w-6xl { max-width: 72rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .mb-16 { margin-bottom: 4rem; }
    .p-2 { padding: 0.5rem; }
    .p-4 { padding: 1rem; }
    .p-6 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    .px-8 { padding-left: 2rem; padding-right: 2rem; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
    .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
    .rounded-full { border-radius: 9999px; }
    .rounded-2xl { border-radius: 1rem; }
    .border { border-width: 1px; }
    .border-b { border-bottom-width: 1px; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    .text-xs { font-size: 0.75rem; }
    .text-sm { font-size: 0.875rem; }
    .text-lg { font-size: 1.125rem; }
    .text-white { color: #fff; }
    .text-gray-300 { color: #d1d5db; }
    .text-gray-400 { color: #9ca3af; }
    .text-gray-700 { color: #374151; }
    .text-gray-800 { color: #1f2937; }
    .text-blue-200 { color: #dbeafe; }
    .text-blue-300 { color: #93c5fd; }
    .text-blue-400 { color: #60a5fa; }
    .text-green-400 { color: #4ade80; }
    .text-yellow-400 { color: #facc15; }
    .text-yellow-600 { color: #ca8a04; }
    .leading-relaxed { line-height: 1.625; }
    .bg-black { background-color: #000; }
    .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
    .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
    .from-blue-600 { --tw-gradient-from: #2563eb; --tw-gradient-to: rgba(37, 99, 235, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
    .to-purple-600 { --tw-gradient-to: #9333ea; }
    .from-blue-700 { --tw-gradient-from: #1d4ed8; }
    .to-purple-700 { --tw-gradient-to: #7c3aed; }
    .backdrop-blur-md { backdrop-filter: blur(12px); }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    .transition-colors { transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
    .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms; }
    .duration-300 { transition-duration: 300ms; }
    .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
    .hover\\:scale-105:hover { --tw-scale-x: 1.05; --tw-scale-y: 1.05; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
    .hover\\:text-blue-400:hover { color: #60a5fa; }
    .hover\\:from-blue-700:hover { --tw-gradient-from: #1d4ed8; }
    .hover\\:to-purple-700:hover { --tw-gradient-to: #7c3aed; }
    .hover\\:bg-white\\/20:hover { background-color: rgba(255, 255, 255, 0.2); }
    .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    .cursor-pointer { cursor: pointer; }
    .fill-current { fill: currentColor; }
    .overflow-hidden { overflow: hidden; }
    .space-y-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(1rem * var(--tw-space-y-reverse)); }
    .space-x-8 > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 0; margin-right: calc(2rem * var(--tw-space-x-reverse)); margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse))); }
    .space-x-reverse > :not([hidden]) ~ :not([hidden]) { --tw-space-x-reverse: 1; }
    .flex-col { flex-direction: column; }
    .flex-wrap { flex-wrap: wrap; }

    @media (min-width: 640px) {
      .sm\\:flex-row { flex-direction: row; }
    }

    @media (min-width: 768px) {
      .md\\:flex { display: flex; }
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
      .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
      .md\\:text-2xl { font-size: 1.5rem; }
      .md\\:text-4xl { font-size: 2.25rem; }
      .md\\:text-5xl { font-size: 3rem; }
      .md\\:text-8xl { font-size: 6rem; }
      .md\\:text-9xl { font-size: 8rem; }
    }

    @media (min-width: 1024px) {
      .lg\\:block { display: block; }
      .lg\\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
      .lg\\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
      .lg\\:text-right { text-align: right; }
      .lg\\:justify-start { justify-content: flex-start; }
    }
  `;
};

// Complete JavaScript functionality
const getCompleteJavaScript = () => {
  return `
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-slide-up, .animate-scale-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Button hover effects
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Mobile menu functionality (if needed)
    const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Parallax scrolling effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.section-hero');
        if (hero) {
            hero.style.transform = \`translateY(\${scrolled * 0.5}px)\`;
        }
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger animations on load
        setTimeout(() => {
            document.querySelectorAll('.animate-slide-up, .animate-scale-in').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
            });
        }, 100);
    });

    // Enhanced liquid glass interactions
    document.querySelectorAll('.liquid-feature-orb').forEach(orb => {
        orb.addEventListener('mouseenter', function() {
            this.querySelector('.liquid-feature-glow').style.transform = 'scale(1.2)';
            this.querySelector('.liquid-feature-glow').style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.4)';
        });
        
        orb.addEventListener('mouseleave', function() {
            this.querySelector('.liquid-feature-glow').style.transform = 'scale(1)';
            this.querySelector('.liquid-feature-glow').style.boxShadow = 'none';
        });
    });

    // Dynamic liquid orb movement based on mouse
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.liquid-orb');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            orb.style.transform = \`translate(\${x}px, \${y}px)\`;
        });
    });
  `;
};
