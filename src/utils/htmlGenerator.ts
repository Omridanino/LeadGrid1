
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl: string): string => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  const selectedElements = formData?.selectedElements || [];
  
  // Helper function to render buttons based on hero style
  const renderButton = (text: string, heroStyle: string) => {
    const baseClass = `btn-base ${getButtonClass(heroStyle)}`;
    const iconHtml = heroStyle === 'glass' ? 
      '<i class="ri-arrow-left-line text-lg"></i>' : 
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>';
    
    return `<button class="${baseClass}">${iconHtml}${text}</button>`;
  };

  const getButtonClass = (heroStyle: string) => {
    switch (heroStyle) {
      case 'geometric': return 'btn-geometric';
      case 'glass': return 'btn-liquid-glass';
      case 'metal': return 'btn-metal';
      case 'image': return 'btn-image-depth';
      default: return 'btn-3d';
    }
  };

  const getCardClass = (heroStyle: string) => {
    switch (heroStyle) {
      case 'geometric': return 'card-geometric';
      case 'glass': return 'card-liquid-glass';
      case 'metal': return 'card-metal';
      case 'image': return 'card-image-depth';
      default: return 'card-3d';
    }
  };

  const getBackgroundClass = (heroStyle: string) => {
    switch (heroStyle) {
      case 'geometric': return 'bg-geometric';
      case 'glass': return 'bg-liquid-glass';
      case 'metal': return 'bg-metal';
      case 'image': return 'bg-image-depth';
      default: return 'bg-3d';
    }
  };

  const getTypographyClass = (heroStyle: string) => {
    switch (heroStyle) {
      case 'geometric': return 'typography-modern';
      case 'glass': return 'typography-liquid';
      case 'metal': return 'typography-luxury';
      case 'image': return 'typography-cinematic';
      default: return 'typography-tech';
    }
  };

  // Generate hero section based on style - EXACT MATCH with HeroSection component
  const generateHeroSection = () => {
    const heroStyle = formData.heroStyle;
    
    if (heroStyle === 'glass') {
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
                  ${content?.headline || businessName}
                </h1>

                <div class="liquid-subtitle-flow mb-12 animate-slide-up animate-delay-2">
                  <div class="liquid-text-orb">
                    <p class="typography-liquid text-xl md:text-2xl text-white leading-relaxed liquid-text-glow">
                      ${content?.subheadline || `חוויה נוזלית ייחודית ל${formData.targetAudience}`}
                    </p>
                  </div>
                </div>

                <div class="liquid-actions-flow mb-16">
                  ${renderButton(content?.cta || 'בואו נתחיל לעבוד יחד', heroStyle)}
                  ${renderButton('למד עוד', heroStyle)}
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

    if (heroStyle === 'geometric') {
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
                    <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                    <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                  </div>
                </div>
                <div class="glass-card px-4 py-2">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    <span class="text-sm font-medium text-white">מומחה מוסמך</span>
                  </div>
                </div>
              </div>

              <h1 class="typography-modern text-6xl md:text-8xl text-white mb-8 animate-slide-up animate-delay-1">
                ${content?.headline || businessName}
              </h1>

              <div class="typography-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2">
                ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
              </div>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                ${renderButton(content?.cta || 'בואו נתחיל לעבוד יחד', heroStyle)}
                ${renderButton('למד עוד', heroStyle)}
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

    if (heroStyle === 'metal') {
      return `
        <section class="section-hero bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-800/20"></div>
          
          <div class="container-hero relative z-10">
            <div class="text-center">
              <div class="inline-flex items-center gap-2 metal-card px-6 py-3 rounded-full mb-8 animate-slide-up">
                <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="typography-luxury text-gray-800 font-semibold">פרימיום</span>
              </div>

              <h1 class="typography-luxury text-7xl md:text-9xl metal-text mb-8 animate-slide-up animate-delay-1">
                ${content?.headline || businessName}
              </h1>

              <div class="metal-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
                <p class="typography-luxury text-xl md:text-2xl text-gray-800 leading-relaxed">
                  ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                ${renderButton(content?.cta || 'בואו נתחיל לעבוד יחד', heroStyle)}
                ${renderButton('למד עוד', heroStyle)}
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

    if (heroStyle === 'image') {
      return `
        <section 
          class="section-hero relative overflow-hidden"
          style="background-image: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${heroImageUrl}); background-size: cover; background-position: center; background-attachment: fixed;"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
          
          <div class="container-hero relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="text-center lg:text-right">
                <div class="glass-card p-2 inline-block rounded-full mb-6 animate-slide-up">
                  <div class="flex items-center gap-2 px-4 py-2">
                    <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                    <span class="text-sm font-medium text-white">מומלץ בחום</span>
                  </div>
                </div>

                <h1 class="typography-hero text-6xl md:text-8xl mb-8 animate-slide-up animate-delay-1">
                  ${content?.headline || businessName}
                </h1>

                <div class="glass-card p-6 mb-8 animate-slide-up animate-delay-2">
                  <p class="typography-body text-xl text-white leading-relaxed">
                    ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
                  ${renderButton(content?.cta || 'בואו נתחיל לעבוד יחד', heroStyle)}
                  ${renderButton('למד עוד', heroStyle)}
                </div>
              </div>

              <div class="hidden lg:block animate-scale-in animate-delay-4">
                <div class="glass-card p-8">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">איכות מובטחת</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">אמינות מוחלטת</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">ביצוע מהיר</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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

    // Default 3D Background Style
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
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>
                  <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                </div>
              </div>
              <div class="glass-card px-4 py-2">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="text-sm font-medium text-white">מומחה מוסמך</span>
                </div>
              </div>
            </div>

            <h1 class="typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
              ${content?.headline || businessName}
            </h1>

            <div class="glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
              <p class="typography-body text-xl md:text-2xl text-white leading-relaxed">
                ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              ${renderButton(content?.cta || 'בואו נתחיל לעבוד יחד', heroStyle)}
              ${renderButton('למד עוד', heroStyle)}
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

  // Generate ALL content sections to match ContentSections component exactly
  const generateAllContentSections = () => {
    const heroStyle = formData.heroStyle || 'default';
    let sectionsHtml = '';

    // Navigation Section
    sectionsHtml += `
      <nav class="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-16">
            <div class="text-xl font-bold text-white">${businessName}</div>
            <div class="hidden md:flex space-x-8">
              <a href="#hero" class="text-white hover:text-blue-400 transition-colors">בית</a>
              <a href="#about" class="text-white hover:text-blue-400 transition-colors">אודות</a>
              <a href="#services" class="text-white hover:text-blue-400 transition-colors">שירותים</a>
              <a href="#contact" class="text-white hover:text-blue-400 transition-colors">צור קשר</a>
            </div>
          </div>
        </div>
      </nav>
    `;

    // About/Value Proposition Section
    if (content?.sections?.emotionalSection) {
      sectionsHtml += `
        <section id="about" class="py-20 px-4 ${getBackgroundClass(heroStyle)} relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center">
              <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-6xl font-black mb-8 text-white animate-slide-up">
                ${content.sections.emotionalSection.title || "השירות שמשנה את המשחק"}
              </h2>
              <div class="${getCardClass(heroStyle)} p-8 max-w-4xl mx-auto animate-slide-up animate-delay-1">
                <p class="typography-body text-lg md:text-xl leading-relaxed text-white">
                  ${content.sections.emotionalSection.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`}
                </p>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // Features Section
    if (content?.sections?.features && content.sections.features.length > 0) {
      sectionsHtml += `
        <section id="services" class="py-20 px-4 ${getBackgroundClass(heroStyle)} relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
              <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-6xl font-black mb-8 text-white animate-slide-up">
                השירותים שלנו
              </h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${content.sections.features.map((feature: any, index: number) => `
                <div class="${getCardClass(heroStyle)} p-8 text-center animate-slide-up" style="animation-delay: ${index * 0.2}s">
                  <div class="text-4xl mb-4">${feature.icon || '🔥'}</div>
                  <h3 class="${getTypographyClass(heroStyle)} text-xl font-bold mb-4 text-white">
                    ${feature.title}
                  </h3>
                  <p class="typography-body text-gray-300 leading-relaxed">
                    ${feature.description}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }

    // Why Choose Us Section
    if (content?.sections?.whyChooseUs && content.sections.whyChooseUs.length > 0) {
      sectionsHtml += `
        <section class="py-20 px-4 ${getBackgroundClass(heroStyle)} relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
              <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-6xl font-black mb-8 text-white animate-slide-up">
                למה לבחור בנו?
              </h2>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
              ${content.sections.whyChooseUs.map((reason: any, index: number) => `
                <div class="${getCardClass(heroStyle)} p-8 animate-slide-up" style="animation-delay: ${index * 0.2}s">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="text-3xl">${reason.icon || '✅'}</div>
                    <h3 class="${getTypographyClass(heroStyle)} text-xl font-bold text-white">
                      ${reason.title}
                    </h3>
                  </div>
                  <p class="typography-body text-gray-300 leading-relaxed">
                    ${reason.description}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }

    // Testimonials Section
    if (content?.sections?.testimonials && content.sections.testimonials.length > 0) {
      sectionsHtml += `
        <section class="py-20 px-4 ${getBackgroundClass(heroStyle)} relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
              <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-6xl font-black mb-8 text-white animate-slide-up">
                מה אומרים עלינו
              </h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${content.sections.testimonials.map((testimonial: any, index: number) => `
                <div class="${getCardClass(heroStyle)} p-8 animate-slide-up" style="animation-delay: ${index * 0.2}s">
                  <div class="flex items-center gap-1 mb-4">
                    ${Array(5).fill(0).map(() => `
                      <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                      </svg>
                    `).join('')}
                  </div>
                  <p class="typography-body text-white mb-4 leading-relaxed">
                    "${testimonial.content}"
                  </p>
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span class="text-white font-bold">${testimonial.name.charAt(0)}</span>
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
        </section>
      `;
    }

    // FAQ Section
    if (content?.sections?.faq && content.sections.faq.length > 0) {
      sectionsHtml += `
        <section class="py-20 px-4 ${getBackgroundClass(heroStyle)} relative overflow-hidden">
          <div class="container mx-auto max-w-4xl">
            <div class="text-center mb-16">
              <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-6xl font-black mb-8 text-white animate-slide-up">
                שאלות נפוצות
              </h2>
            </div>
            <div class="space-y-4">
              ${content.sections.faq.map((faq: any, index: number) => `
                <div class="${getCardClass(heroStyle)} animate-slide-up" style="animation-delay: ${index * 0.1}s">
                  <div class="p-6">
                    <h3 class="${getTypographyClass(heroStyle)} text-lg font-bold mb-3 text-white">
                      ${faq.question}
                    </h3>
                    <p class="typography-body text-gray-300 leading-relaxed">
                      ${faq.answer}
                    </p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }

    // Contact/CTA Section
    sectionsHtml += `
      <section id="contact" class="py-20 px-4 ${getBackgroundClass(heroStyle)} relative overflow-hidden">
        <div class="container mx-auto max-w-6xl text-center">
          <div class="max-w-4xl mx-auto">
            <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-6xl font-black mb-8 text-white animate-slide-up">
              ${content?.contactTitle || 'מוכנים להתחיל?'}
            </h2>
            
            <div class="${getCardClass(heroStyle)} p-8 mb-8 animate-slide-up animate-delay-1">
              <p class="typography-body text-lg md:text-xl text-white leading-relaxed">
                בואו ניצור יחד משהו מרהיב שיקדם את העסק שלכם
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-2">
              <div class="${getCardClass(heroStyle)} p-6">
                <div class="flex items-center gap-3 justify-center">
                  <i class="ri-phone-line text-blue-400 text-xl"></i>
                  <span class="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div class="${getCardClass(heroStyle)} p-6">
                <div class="flex items-center gap-3 justify-center">
                  <i class="ri-mail-line text-blue-400 text-xl"></i>
                  <span class="typography-body text-white font-medium">info@business.co.il</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-3">
              ${renderButton('צור קשר עכשיו', heroStyle)}
              ${renderButton('קבל הצעת מחיר', heroStyle)}
            </div>
          </div>
        </div>
      </section>
    `;

    return sectionsHtml;
  };

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName} - ${businessType}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        ${getAllStyles()}
    </style>
</head>
<body class="bg-black text-white font-sans">
    <div class="w-full min-h-screen ${formData.heroStyle === 'geometric' ? 'style-geometric' : formData.heroStyle === 'glass' ? 'style-glass' : formData.heroStyle === 'metal' ? 'style-metal' : formData.heroStyle === 'image' ? 'style-image' : 'style-3d'}">
        ${generateHeroSection()}
        ${generateAllContentSections()}
        
        <!-- Footer Section -->
        <footer style="background: rgba(0,0,0,0.5); backdrop-filter: blur(16px); padding: 4rem 0; text-align: center;">
          <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
              <h3 class="text-2xl font-bold text-white mb-4">
                ${businessName}
              </h3>
              <p class="text-gray-400 mb-8">
                © 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.
              </p>
              <div class="flex justify-center gap-8 text-gray-400">
                <span>טלפון: 050-1234567</span>
                <span>אימייל: info@business.co.il</span>
              </div>
            </div>
          </div>
        </footer>
    </div>
</body>
</html>`;
};

// All the existing styles from PreviewStyles component
const getAllStyles = () => {
  return `
    /* Base Styles */
    .section-hero {
      min-height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container-hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      width: 100%;
    }

    /* Typography Classes */
    .typography-hero { font-family: 'Arial', sans-serif; font-weight: 900; line-height: 1.1; }
    .typography-modern { font-family: 'Helvetica', sans-serif; font-weight: 700; }
    .typography-luxury { font-family: 'Georgia', serif; font-weight: 600; }
    .typography-liquid { font-family: 'Arial', sans-serif; font-weight: 800; }
    .typography-cinematic { font-family: 'Times', serif; font-weight: 700; }
    .typography-tech { font-family: 'Arial', sans-serif; font-weight: 700; }
    .typography-body { font-family: 'Arial', sans-serif; font-weight: 400; }

    /* Button Styles */
    .btn-base {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      text-decoration: none;
    }

    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3); }

    .btn-3d { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      transform: perspective(1px) translateZ(0);
    }
    .btn-3d:hover { 
      transform: translateY(-3px); 
      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4); 
    }

    .btn-geometric {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);
      padding: 1rem 2.5rem;
    }
    .btn-geometric:hover { 
      transform: translateX(-5px); 
      box-shadow: 5px 5px 15px rgba(102, 126, 234, 0.3); 
    }

    .btn-metal {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      color: #1a1a1a;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 15px rgba(255,215,0,0.3);
      border: 1px solid #b8860b;
    }
    .btn-metal:hover { 
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 25px rgba(255,215,0,0.4); 
      transform: translateY(-2px); 
    }

    .btn-liquid-glass {
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      color: white;
      box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
    }
    .btn-liquid-glass:hover {
      background: rgba(59, 130, 246, 0.2);
      transform: translateY(-3px);
      box-shadow: 0 15px 45px rgba(59, 130, 246, 0.2);
    }

    .btn-image-depth {
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    .btn-image-depth:hover {
      background: rgba(0, 0, 0, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    /* Card Styles */
    .card-3d, .card-geometric, .card-metal, .card-liquid-glass, .card-image-depth {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
    }

    .geometric-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      clip-path: polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%);
    }

    .metal-card {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 15px rgba(255,215,0,0.2);
      border: 1px solid #b8860b;
      border-radius: 1rem;
    }

    .metal-text {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Background Styles */
    .bg-3d, .bg-geometric, .bg-metal, .bg-liquid-glass, .bg-image-depth {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .hero-3d {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      overflow: hidden;
    }

    .geometric-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      overflow: hidden;
    }

    .geometric-shape {
      position: absolute;
      width: 200px;
      height: 200px;
      background: rgba(255, 255, 255, 0.1);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      animation: geometricFloat 10s ease-in-out infinite;
    }

    .geometric-shape:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
    .geometric-shape:nth-child(2) { top: 50%; right: 10%; animation-delay: 3s; }
    .geometric-shape:nth-child(3) { bottom: 10%; left: 30%; animation-delay: 6s; }

    @keyframes geometricFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    .floating-element {
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .floating-element:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
    .floating-element:nth-child(2) { top: 60%; right: 30%; animation-delay: 2s; }
    .floating-element:nth-child(3) { bottom: 30%; left: 40%; animation-delay: 4s; }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    /* Liquid Glass Styles */
    .liquid-glass-hero {
      background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0.9) 70%);
      position: relative;
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
      background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3), rgba(29, 78, 216, 0.1));
      filter: blur(1px);
      animation: liquidFloat 20s ease-in-out infinite;
    }

    .liquid-orb-hero-1 { width: 300px; height: 300px; top: 10%; left: 10%; animation-delay: 0s; }
    .liquid-orb-hero-2 { width: 200px; height: 200px; top: 60%; right: 20%; animation-delay: 5s; }
    .liquid-orb-hero-3 { width: 150px; height: 150px; bottom: 20%; left: 30%; animation-delay: 10s; }
    .liquid-orb-hero-4 { width: 250px; height: 250px; top: 30%; right: 10%; animation-delay: 15s; }

    @keyframes liquidFloat {
      0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
      25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
      50% { transform: translateY(10px) translateX(-15px) scale(0.95); }
      75% { transform: translateY(-10px) translateX(5px) scale(1.02); }
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
      background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
      animation: liquidWave 15s linear infinite;
    }

    .liquid-wave-1 { animation-delay: 0s; }
    .liquid-wave-2 { animation-delay: 5s; }
    .liquid-wave-3 { animation-delay: 10s; }

    @keyframes liquidWave {
      0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(360deg); }
    }

    .liquid-hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      min-height: 100vh;
    }

    .liquid-status-orb {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(34, 197, 94, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(34, 197, 94, 0.2);
      border-radius: 50px;
      padding: 0.5rem 1rem;
      position: relative;
    }

    .liquid-pulse {
      position: absolute;
      left: 0.5rem;
      width: 8px;
      height: 8px;
      background: #22c55e;
      border-radius: 50%;
      animation: liquidPulse 2s ease-in-out infinite;
    }

    @keyframes liquidPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.2); }
    }

    .liquid-title-glow {
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
    }

    .liquid-subtitle-flow {
      position: relative;
    }

    .liquid-text-orb {
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 2rem;
      padding: 2rem;
    }

    .liquid-text-glow {
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }

    .liquid-actions-flow {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .liquid-features-constellation {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .liquid-feature-orb {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      text-align: center;
    }

    .liquid-feature-glow {
      width: 3rem;
      height: 3rem;
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(10px);
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
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .liquid-showcase-rings {
      position: absolute;
      inset: 0;
    }

    .liquid-ring {
      position: absolute;
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 50%;
      animation: liquidRotate 20s linear infinite;
    }

    .liquid-ring-1 { inset: 0; animation-duration: 20s; }
    .liquid-ring-2 { inset: 20%; animation-duration: 15s; animation-direction: reverse; }
    .liquid-ring-3 { inset: 40%; animation-duration: 10s; }

    @keyframes liquidRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .liquid-center-orb {
      background: rgba(59, 130, 246, 0.2);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 10;
    }

    .liquid-stats-bubbles {
      position: absolute;
      inset: 0;
    }

    .liquid-stat-bubble {
      position: absolute;
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 1rem;
      padding: 1rem;
      text-align: center;
      animation: liquidFloat 8s ease-in-out infinite;
    }

    .liquid-bubble-top-left { top: 0; left: 0; animation-delay: 0s; }
    .liquid-bubble-top-right { top: 0; right: 0; animation-delay: 2s; }
    .liquid-bubble-bottom-left { bottom: 0; left: 0; animation-delay: 4s; }
    .liquid-bubble-bottom-right { bottom: 0; right: 0; animation-delay: 6s; }

    .icon-glass {
      width: 3rem;
      height: 3rem;
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Animation Classes */
    .animate-slide-up {
      animation: slideUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    .animate-scale-in {
      animation: scaleIn 0.8s ease-out forwards;
      opacity: 0;
      transform: scale(0.9);
    }

    .animate-delay-1 { animation-delay: 0.2s; }
    .animate-delay-2 { animation-delay: 0.4s; }
    .animate-delay-3 { animation-delay: 0.6s; }
    .animate-delay-4 { animation-delay: 0.8s; }

    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .liquid-hero-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .liquid-features-constellation {
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .section-hero {
        min-height: auto;
        padding: 4rem 0;
      }
      
      .typography-liquid {
        font-size: 3rem !important;
      }
      
      .liquid-actions-flow {
        flex-direction: column;
        align-items: center;
      }
    }
  `;
};
