import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl: string): string => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  
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

  // Generate hero section based on style
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

    // Image style hero remains unchanged
    if (heroStyle === 'image') {
      return `
        <section class="section-hero relative overflow-hidden" style="background-image: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${heroImageUrl}); background-size: cover; background-position: center; background-attachment: fixed;">
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

    // Default hero styles (geometric, metal, 3d)
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

            <h1 class="${getTypographyClass(heroStyle)} text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
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

  // Generate content sections based on style
  const generateContentSections = () => {
    const heroStyle = formData.heroStyle;
    
    if (heroStyle === 'glass') {
      return `
        <!-- Liquid Glass Value Proposition -->
        <section class="py-20 px-4 bg-liquid-glass relative overflow-hidden">
          <div class="liquid-orb liquid-orb-1"></div>
          <div class="liquid-orb liquid-orb-2"></div>
          <div class="liquid-orb liquid-orb-3"></div>
          
          <div class="container mx-auto max-w-6xl relative z-10">
            <div class="text-center mb-16">
              <div class="floating-badge mb-8">
                <i class="ri-star-fill text-yellow-400 text-xl"></i>
                <span class="typography-liquid text-white font-semibold">הצעת הערך הייחודית</span>
              </div>
              <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                ${content?.sections?.emotionalSection?.title || "חוויה נוזלית מדהימה"}
              </h2>
              <div class="liquid-glass-panel p-10 max-w-4xl mx-auto">
                <p class="typography-liquid text-xl md:text-2xl leading-relaxed text-white liquid-text-glow">
                  ${content?.sections?.emotionalSection?.content || `בעולם הטכנולוגיה המתקדמת, ${businessName} מציע לכם חוויה נוזלית ייחודה שמשלבת חדשנות עם אלגנטיות.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Liquid Glass Why Choose Us -->
        <section class="py-20 px-4 bg-liquid-glass-alt relative overflow-hidden">
          <div class="liquid-wave"></div>
          
          <div class="container mx-auto max-w-6xl relative z-10">
            <div class="text-center mb-16">
              <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">למה לבחור בנו?</h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="liquid-morph-card group">
                <div class="liquid-icon-orb">
                  <i class="ri-diamond-line text-blue-300 text-2xl"></i>
                </div>
                <h3 class="typography-liquid text-2xl font-bold mb-4 text-white liquid-text-glow">טכנולוגיה נוזלית מתקדמת</h3>
                <p class="typography-liquid text-blue-200 leading-relaxed">פתרונות חדשניים המשלבים זרימה טבעית עם יעילות מקסימלית</p>
              </div>
              <div class="liquid-morph-card group">
                <div class="liquid-icon-orb">
                  <i class="ri-diamond-line text-blue-300 text-2xl"></i>
                </div>
                <h3 class="typography-liquid text-2xl font-bold mb-4 text-white liquid-text-glow">חוויית משתמש זורמת</h3>
                <p class="typography-liquid text-blue-200 leading-relaxed">אינטראקציה חלקה ואינטואיטיבית שמתאימה לכל צורך</p>
              </div>
              <div class="liquid-morph-card group">
                <div class="liquid-icon-orb">
                  <i class="ri-diamond-line text-blue-300 text-2xl"></i>
                </div>
                <h3 class="typography-liquid text-2xl font-bold mb-4 text-white liquid-text-glow">גמישות מוחלטת</h3>
                <p class="typography-liquid text-blue-200 leading-relaxed">התאמה דינמית לכל דרישה ושינוי בזמן אמת</p>
              </div>
              <div class="liquid-morph-card group">
                <div class="liquid-icon-orb">
                  <i class="ri-diamond-line text-blue-300 text-2xl"></i>
                </div>
                <h3 class="typography-liquid text-2xl font-bold mb-4 text-white liquid-text-glow">איכות שקופה ונקייה</h3>
                <p class="typography-liquid text-blue-200 leading-relaxed">שירות ברור וישיר ללא הפתעות או עמימות</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Liquid Glass CTA -->
        <section class="py-20 px-4 bg-liquid-glass-final relative overflow-hidden">
          <div class="liquid-immersion-bg"></div>
          
          <div class="container mx-auto max-w-6xl text-center relative z-10">
            <div class="liquid-cta-orb">
              <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-12 text-white liquid-glow">
                ${content?.contactTitle || 'צאו למסע נוזלי'}
              </h2>
              
              <div class="liquid-immersion-panel p-10 mb-12">
                <p class="typography-liquid text-2xl text-white leading-relaxed liquid-text-glow">
                  בואו ניצור יחד חוויה נוזלית שתשנה את האופן שבו אתם חושבים על השירות
                </p>
              </div>

              <div class="liquid-contact-flow mb-12">
                <div class="liquid-contact-orb">
                  <i class="ri-phone-line text-blue-300 text-xl"></i>
                  <span class="typography-liquid text-white font-medium">050-1234567</span>
                </div>
                <div class="liquid-contact-orb">
                  <i class="ri-mail-line text-blue-300 text-xl"></i>
                  <span class="typography-liquid text-white font-medium">info@business.co.il</span>
                </div>
              </div>

              <div class="liquid-action-flow">
                ${renderButton('התחילו את הזרימה', heroStyle)}
                ${renderButton('גלו את החוויה', heroStyle)}
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (heroStyle === 'image') {
      return `
        <!-- Image Style Value Proposition -->
        <section class="py-20 px-4 bg-image-depth relative overflow-hidden">
          <div class="cinematic-overlay"></div>
          <div class="depth-layers">
            <div class="depth-layer depth-layer-1"></div>
            <div class="depth-layer depth-layer-2"></div>
            <div class="depth-layer depth-layer-3"></div>
          </div>
          
          <div class="container mx-auto max-w-6xl relative z-10">
            <div class="cinematic-grid">
              <div class="cinematic-content">
                <div class="cinematic-badge">
                  <i class="ri-movie-line text-yellow-400 text-xl"></i>
                  <span class="typography-cinematic text-white font-semibold">הצגת הערך</span>
                </div>
                <h2 class="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                  ${content?.sections?.emotionalSection?.title || "חוויה קולנועית מרהיבה"}
                </h2>
                <div class="cinematic-panel">
                  <p class="typography-cinematic text-xl leading-relaxed text-white">
                    ${content?.sections?.emotionalSection?.content || `${businessName} מביא לכם חוויה קולנועית עמוקה שמשלבת אסתטיקה מרהיבה עם תוכן איכותי.`}
                  </p>
                </div>
              </div>
              <div class="cinematic-visual">
                <div class="depth-showcase">
                  <div class="showcase-frame"></div>
                  <div class="showcase-content">
                    <i class="ri-cube-line text-blue-400 text-6xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Image Style CTA -->
        <section class="py-20 px-4 bg-image-depth-finale relative overflow-hidden">
          <div class="epic-backdrop"></div>
          
          <div class="container mx-auto max-w-6xl text-center relative z-10">
            <div class="epic-stage">
              <h2 class="typography-cinematic text-6xl md:text-8xl font-black mb-12 text-white cinematic-glow epic-title">
                ${content?.contactTitle || 'הגיע הזמן לפעולה'}
              </h2>
              
              <div class="epic-panel">
                <p class="typography-cinematic text-2xl text-white leading-relaxed cinematic-glow">
                  בואו ניצור יחד פרויקט קולנועי שישאיר את כולם ללא מילים
                </p>
              </div>

              <div class="epic-contacts">
                <div class="contact-frame-3d">
                  <i class="ri-phone-line text-blue-400 text-2xl"></i>
                  <span class="typography-cinematic text-white font-bold text-lg">050-1234567</span>
                </div>
                <div class="contact-frame-3d">
                  <i class="ri-mail-line text-blue-400 text-2xl"></i>
                  <span class="typography-cinematic text-white font-bold text-lg">info@business.co.il</span>
                </div>
              </div>

              <div class="epic-actions">
                ${renderButton('התחילו את הפרויקט', heroStyle)}
                ${renderButton('גלו את האפשרויות', heroStyle)}
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // Default content sections for other styles
    return `
      <!-- Value Proposition Section -->
      <section class="py-16 px-4 ${getBackgroundClass(heroStyle)}">
        <div class="container mx-auto max-w-6xl">
          <div class="text-center">
            <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up">
              ${content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
            </h2>
            <div class="${getCardClass(heroStyle)} p-8 animate-slide-up animate-delay-1">
              <p class="typography-body text-lg md:text-xl leading-relaxed text-white">
                ${content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Enhanced CTA Section -->
      <section class="py-16 px-4 ${getBackgroundClass(heroStyle)} relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        <div class="container mx-auto max-w-6xl text-center relative z-10">
          <div class="max-w-4xl mx-auto">
            <h2 class="${getTypographyClass(heroStyle)} text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up">
              ${content?.contactTitle || 'מוכנים להתחיל?'}
            </h2>
            
            <div class="${getCardClass(heroStyle)} p-6 mb-8 animate-slide-up animate-delay-1">
              <p class="typography-body text-lg md:text-xl text-white leading-relaxed">
                בואו ניצור יחד משהו מרהיב שיקדם את העסק שלכם
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-2">
              <div class="${getCardClass(heroStyle)} p-4">
                <div class="flex items-center gap-3 justify-center">
                  <i class="ri-phone-line text-blue-400 text-lg"></i>
                  <span class="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div class="${getCardClass(heroStyle)} p-4">
                <div class="flex items-center gap-3 justify-center">
                  <i class="ri-mail-line text-blue-400 text-lg"></i>
                  <span class="typography-body text-white font-medium">info@business.co.il</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up animate-delay-3">
              ${renderButton('צור קשר עכשיו', heroStyle)}
              ${renderButton('קבל הצעת מחיר', heroStyle)}
            </div>
          </div>
        </div>
      </section>
    `;
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
        /* All existing styles plus liquid glass and image depth styles */
        ${getAllStyles()}
    </style>
</head>
<body class="bg-black text-white font-sans">
    ${generateHeroSection()}
    ${generateContentSections()}
</body>
</html>`;
};

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

    /* Background Styles */
    .bg-3d, .bg-geometric, .bg-metal, .bg-liquid-glass, .bg-image-depth {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    /* Liquid Glass Specific Styles */
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

    /* Image Depth Styles */
    .bg-image-depth, .bg-image-depth-alt, .bg-image-depth-finale {
      background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.8) 50%, rgba(0,0,0,0.9) 100%);
      position: relative;
    }

    .cinematic-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 70%);
    }

    .depth-layers {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .depth-layer {
      position: absolute;
      background: linear-gradient(45deg, transparent, rgba(100,100,100,0.1), transparent);
      animation: depthMove 20s linear infinite;
    }

    .depth-layer-1 { width: 100%; height: 100%; animation-delay: 0s; }
    .depth-layer-2 { width: 120%; height: 120%; animation-delay: 7s; }
    .depth-layer-3 { width: 80%; height: 80%; animation-delay: 14s; }

    @keyframes depthMove {
      0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(180deg); }
    }

    .cinematic-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      min-height: 80vh;
    }

    .cinematic-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50px;
      padding: 0.5rem 1rem;
      margin-bottom: 2rem;
    }

    .cinematic-glow {
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1);
    }

    .cinematic-panel {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 2rem;
      margin: 2rem 0;
    }

    .depth-showcase {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }

    .showcase-frame {
      position: absolute;
      inset: 0;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      transform: perspective(1000px) rotateY(15deg) rotateX(10deg);
    }

    .showcase-content {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: perspective(1000px) rotateY(15deg) rotateX(10deg) translateZ(50px);
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
      .liquid-hero-grid,
      .cinematic-grid {
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
      
      .typography-liquid,
      .typography-cinematic {
        font-size: 3rem !important;
      }
      
      .liquid-actions-flow {
        flex-direction: column;
        align-items: center;
      }
    }
  `;
};
