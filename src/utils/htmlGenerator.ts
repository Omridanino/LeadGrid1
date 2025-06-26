import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl: string): string => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  const selectedElements = formData?.selectedElements || [];
  
  // Generate hero section - EXACT match with HeroSection component
  const generateHeroSection = () => {
    const heroStyle = formData.heroStyle || 'default';
    
    if (heroStyle === 'glass') {
      return `
        <section class="hero-liquid-glass section-hero">
          <div class="liquid-background">
            <div class="liquid-orb liquid-orb-1"></div>
            <div class="liquid-orb liquid-orb-2"></div>
            <div class="liquid-orb liquid-orb-3"></div>
          </div>
          
          <div class="liquid-waves">
            <div class="liquid-wave liquid-wave-1"></div>
            <div class="liquid-wave liquid-wave-2"></div>
          </div>
          
          <div class="container-hero relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
              <div class="text-center lg:text-right">
                <div class="liquid-status-badge mb-8 animate-slide-up">
                  <div class="liquid-pulse"></div>
                  <i class="ri-wifi-line text-green-400"></i>
                  <span class="text-white font-semibold">זמין עכשיו</span>
                </div>

                <h1 class="text-5xl md:text-7xl font-black text-white mb-8 animate-slide-up animate-delay-1 liquid-title-glow">
                  ${content?.headline || businessName}
                </h1>

                <div class="liquid-subtitle-container mb-12 animate-slide-up animate-delay-2">
                  <p class="text-xl md:text-2xl text-white leading-relaxed liquid-text-glow">
                    ${content?.subheadline || `חוויה נוזלית ייחודית ל${formData.targetAudience || 'לקוחות'}`}
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16 animate-slide-up animate-delay-3">
                  <button class="btn-liquid-glass">
                    <i class="ri-arrow-left-line"></i>
                    ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                  </button>
                  <button class="btn-liquid-glass-secondary">
                    <i class="ri-play-line"></i>
                    למד עוד
                  </button>
                </div>

                <div class="liquid-features-grid animate-scale-in animate-delay-4">
                  <div class="liquid-feature-item">
                    <div class="liquid-feature-icon">
                      <i class="ri-flashlight-line text-blue-300"></i>
                    </div>
                    <span class="text-white text-sm font-medium">מהירות נוזלית</span>
                  </div>
                  <div class="liquid-feature-item">
                    <div class="liquid-feature-icon">
                      <i class="ri-shield-check-line text-blue-300"></i>
                    </div>
                    <span class="text-white text-sm font-medium">אמינות זורמת</span>
                  </div>
                  <div class="liquid-feature-item">
                    <div class="liquid-feature-icon">
                      <i class="ri-infinity-line text-blue-300"></i>
                    </div>
                    <span class="text-white text-sm font-medium">זמינות תמידית</span>
                  </div>
                </div>
              </div>

              <div class="hidden lg:block animate-scale-in animate-delay-3">
                <div class="liquid-showcase-container">
                  <div class="liquid-showcase-rings">
                    <div class="liquid-ring liquid-ring-1"></div>
                    <div class="liquid-ring liquid-ring-2"></div>
                    <div class="liquid-ring liquid-ring-3"></div>
                  </div>
                  <div class="liquid-center-element">
                    <i class="ri-atom-line text-blue-300 text-5xl"></i>
                  </div>
                  
                  <div class="liquid-stats-container">
                    <div class="liquid-stat-bubble liquid-stat-1">
                      <div class="text-2xl font-bold text-white">500+</div>
                      <div class="text-xs text-blue-200">זרימות מוצלחות</div>
                    </div>
                    <div class="liquid-stat-bubble liquid-stat-2">
                      <div class="text-2xl font-bold text-white">99%</div>
                      <div class="text-xs text-blue-200">שביעות רצון</div>
                    </div>
                    <div class="liquid-stat-bubble liquid-stat-3">
                      <div class="text-2xl font-bold text-white">24/7</div>
                      <div class="text-xs text-blue-200">זרימה רציפה</div>
                    </div>
                    <div class="liquid-stat-bubble liquid-stat-4">
                      <div class="text-2xl font-bold text-white">10+</div>
                      <div class="text-xs text-blue-200">שנות זרימה</div>
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
        <section class="hero-geometric section-hero">
          <div class="geometric-background">
            <div class="geometric-shape geometric-shape-1"></div>
            <div class="geometric-shape geometric-shape-2"></div>
            <div class="geometric-shape geometric-shape-3"></div>
          </div>
          
          <div class="container-hero relative z-10">
            <div class="text-center">
              <div class="flex items-center justify-center gap-4 mb-8 animate-slide-up">
                <div class="geometric-badge">
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                  </svg>
                  <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                </div>
                <div class="geometric-badge">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <span class="text-sm font-medium text-white">מומחה מוסמך</span>
                </div>
              </div>

              <h1 class="text-5xl md:text-7xl font-black text-white mb-8 animate-slide-up animate-delay-1">
                ${content?.headline || businessName}
              </h1>

              <div class="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2">
                ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience || 'לקוחות'}`}
              </div>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up animate-delay-3">
                <button class="btn-geometric">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                  ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                </button>
                <button class="btn-geometric-secondary">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  למד עוד
                </button>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-scale-in animate-delay-4">
                <div class="geometric-stat-card">
                  <div class="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                  <div class="text-gray-300 text-sm">לקוחות מרוצים</div>
                </div>
                <div class="geometric-stat-card">
                  <div class="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                  <div class="text-gray-300 text-sm">שביעות רצון</div>
                </div>
                <div class="geometric-stat-card">
                  <div class="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                  <div class="text-gray-300 text-sm">שנות ניסיון</div>
                </div>
                <div class="geometric-stat-card">
                  <div class="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                  <div class="text-gray-300 text-sm">זמינות</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    if (heroStyle === 'metal') {
      return `
        <section class="hero-metal section-hero">
          <div class="metal-background"></div>
          
          <div class="container-hero relative z-10">
            <div class="text-center">
              <div class="metal-premium-badge mb-8 animate-slide-up">
                <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="font-semibold">פרימיום</span>
              </div>

              <h1 class="text-5xl md:text-7xl font-black mb-8 animate-slide-up animate-delay-1 metal-title">
                ${content?.headline || businessName}
              </h1>

              <div class="metal-content-card max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
                <p class="text-xl md:text-2xl leading-relaxed">
                  ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience || 'לקוחות'}`}
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up animate-delay-3">
                <button class="btn-metal">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                  ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                </button>
                <button class="btn-metal-secondary">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  למד עוד
                </button>
              </div>

              <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4">
                <div class="metal-stat-card">
                  <div class="text-3xl font-bold mb-2">500+</div>
                  <div class="text-sm">לקוחות VIP</div>
                </div>
                <div class="metal-stat-card">
                  <div class="text-3xl font-bold mb-2">98%</div>
                  <div class="text-sm">שביעות רצון</div>
                </div>
                <div class="metal-stat-card">
                  <div class="text-3xl font-bold mb-2">10+</div>
                  <div class="text-sm">שנות מצוינות</div>
                </div>
                <div class="metal-stat-card">
                  <div class="text-3xl font-bold mb-2">24/7</div>
                  <div class="text-sm">שירות פרמיום</div>
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
          class="hero-image section-hero"
          style="background-image: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${heroImageUrl}); background-size: cover; background-position: center; background-attachment: fixed;"
        >
          <div class="image-overlay"></div>
          
          <div class="container-hero relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
              <div class="text-center lg:text-right">
                <div class="image-quality-badge mb-6 animate-slide-up">
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                  </svg>
                  <span class="text-sm font-medium text-white">מומלץ בחום</span>
                </div>

                <h1 class="text-5xl md:text-7xl font-black text-white mb-8 animate-slide-up animate-delay-1">
                  ${content?.headline || businessName}
                </h1>

                <div class="image-content-card mb-8 animate-slide-up animate-delay-2">
                  <p class="text-xl text-white leading-relaxed">
                    ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience || 'לקוחות'}`}
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
                  <button class="btn-image">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    ${content?.cta || 'בואו נתחיל לעבוד יחד'}
                  </button>
                  <button class="btn-image-secondary">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    למד עוד
                  </button>
                </div>
              </div>

              <div class="hidden lg:block animate-scale-in animate-delay-4">
                <div class="image-features-grid">
                  <div class="image-feature-card">
                    <div class="image-feature-icon">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <h3 class="text-white font-medium text-sm">איכות מובטחת</h3>
                  </div>
                  <div class="image-feature-card">
                    <div class="image-feature-icon">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 class="text-white font-medium text-sm">אמינות מוחלטת</h3>
                  </div>
                  <div class="image-feature-card">
                    <div class="image-feature-icon">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <h3 class="text-white font-medium text-sm">ביצוע מהיר</h3>
                  </div>
                  <div class="image-feature-card">
                    <div class="image-feature-icon">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 class="text-white font-medium text-sm">זמינות תמידית</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // Default 3D style
    return `
      <section class="hero-3d section-hero">
        <div class="floating-elements">
          <div class="floating-element floating-element-1"></div>
          <div class="floating-element floating-element-2"></div>
          <div class="floating-element floating-element-3"></div>
        </div>
        
        <div class="container-hero relative z-10">
          <div class="text-center">
            <div class="flex items-center justify-center gap-6 mb-8 animate-slide-up">
              <div class="hero-badge">
                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
                <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
              </div>
              <div class="hero-badge">
                <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-sm font-medium text-white">מומחה מוסמך</span>
              </div>
            </div>

            <h1 class="text-5xl md:text-7xl font-black text-white mb-8 animate-slide-up animate-delay-1">
              ${content?.headline || businessName}
            </h1>

            <div class="hero-content-card max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
              <p class="text-xl md:text-2xl text-white leading-relaxed">
                ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience || 'לקוחות'}`}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up animate-delay-3">
              <button class="btn-3d">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                ${content?.cta || 'בואו נתחיל לעבוד יחד'}
              </button>
              <button class="btn-3d-secondary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                למד עוד
              </button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4">
              <div class="hero-stat-card">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div class="text-gray-300 text-sm">לקוחות מרוצים</div>
              </div>
              <div class="hero-stat-card">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
                <div class="text-gray-300 text-sm">שביעות רצון</div>
              </div>
              <div class="hero-stat-card">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                <div class="text-gray-300 text-sm">שנות ניסיון</div>
              </div>
              <div class="hero-stat-card">
                <div class="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div class="text-gray-300 text-sm">זמינות</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  // Generate navigation - EXACT match with NavigationSection component
  const generateNavigation = () => {
    return `
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
  };

  // Generate all content sections - ALWAYS include ALL sections regardless of content
  const generateAllSections = () => {
    let sectionsHtml = '';

    // About Section - ALWAYS include
    sectionsHtml += `
      <section id="about" class="section-content section-about">
        <div class="container mx-auto px-4 py-20">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="section-title mb-8 animate-slide-up">
              ${content?.sections?.emotionalSection?.title || content?.aboutTitle || "השירות שמשנה את המשחק"}
            </h2>
            <div class="content-card max-w-4xl mx-auto animate-slide-up animate-delay-1">
              <p class="section-text">
                ${content?.sections?.emotionalSection?.content || content?.aboutContent || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    `;

    // Features Section - ALWAYS include
    const features = content?.sections?.features || content?.features || [
      { title: "שירות מקצועי", description: "אנו מציעים שירות ברמה הגבוהה ביותר", icon: "🔥" },
      { title: "זמינות תמידית", description: "אנחנו כאן בשבילכם 24/7", icon: "⭐" },
      { title: "מחירים הוגנים", description: "מחירים תחרותיים ללא פשרות על איכות", icon: "💎" }
    ];

    sectionsHtml += `
      <section id="services" class="section-content section-features">
        <div class="container mx-auto px-4 py-20">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title animate-slide-up">${content?.featuresTitle || 'השירותים שלנו'}</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${features.map((feature: any, index: number) => `
                <div class="feature-card animate-slide-up" style="animation-delay: ${index * 0.2}s">
                  <div class="feature-icon">${feature.icon || '🔥'}</div>
                  <h3 class="feature-title">${feature.title}</h3>
                  <p class="feature-description">${feature.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;

    // Why Choose Us Section - ALWAYS include
    const whyChooseUs = content?.sections?.whyChooseUs || content?.whyChooseUs || [
      { title: "ניסיון עשיר", description: "שנים של ניסיון בתחום", icon: "✅" },
      { title: "צוות מקצועי", description: "אנשי מקצוע מיומנים ומנוסים", icon: "✅" }
    ];

    sectionsHtml += `
      <section class="section-content section-why-choose">
        <div class="container mx-auto px-4 py-20">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title animate-slide-up">${content?.whyChooseTitle || 'למה לבחור בנו?'}</h2>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
              ${whyChooseUs.map((reason: any, index: number) => `
                <div class="why-choose-card animate-slide-up" style="animation-delay: ${index * 0.2}s">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="why-choose-icon">${reason.icon || '✅'}</div>
                    <h3 class="why-choose-title">${reason.title}</h3>
                  </div>
                  <p class="why-choose-description">${reason.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;

    // Testimonials Section - ALWAYS include
    const testimonials = content?.sections?.testimonials || content?.testimonials || [
      { name: "יוסי כהן", role: "לקוח מרוצה", content: "שירות מעולה ומקצועי! ממליץ בחום על השירותים." },
      { name: "רחל לוי", role: "לקוחה קבועה", content: "התמחות גבוהה וזמינות מלאה. בדיוק מה שחיפשתי." },
      { name: "דוד אברהם", role: "בעל עסק", content: "עזרו לי להגשים את החלום שלי. תודה רבה!" }
    ];

    sectionsHtml += `
      <section class="section-content section-testimonials">
        <div class="container mx-auto px-4 py-20">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title animate-slide-up">${content?.testimonialsTitle || 'מה אומרים עלינו'}</h2>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${testimonials.map((testimonial: any, index: number) => `
                <div class="testimonial-card animate-slide-up" style="animation-delay: ${index * 0.2}s">
                  <div class="testimonial-stars">
                    ${Array(5).fill(0).map(() => `
                      <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                      </svg>
                    `).join('')}
                  </div>
                  <p class="testimonial-content">"${testimonial.content}"</p>
                  <div class="testimonial-author">
                    <div class="testimonial-avatar">
                      <span>${testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div class="testimonial-name">${testimonial.name}</div>
                      <div class="testimonial-role">${testimonial.role}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;

    // FAQ Section - ALWAYS include
    const faq = content?.sections?.faq || content?.faq || [
      { question: "איך אפשר ליצור קשר?", answer: "ניתן ליצור קשר דרך הטלפון או האימייל המופיעים באתר." },
      { question: "מה שעות הפעילות?", answer: "אנחנו זמינים 24/7 לשירותכם." },
      { question: "האם יש אחריות על השירות?", answer: "כן, אנו נותנים אחריות מלאה על כל השירותים שלנו." }
    ];

    sectionsHtml += `
      <section class="section-content section-faq">
        <div class="container mx-auto px-4 py-20">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="section-title animate-slide-up">${content?.faqTitle || 'שאלות נפוצות'}</h2>
            </div>
            <div class="space-y-4">
              ${faq.map((faqItem: any, index: number) => `
                <div class="faq-card animate-slide-up" style="animation-delay: ${index * 0.1}s">
                  <h3 class="faq-question">${faqItem.question}</h3>
                  <p class="faq-answer">${faqItem.answer}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;

    // Contact/CTA Section - ALWAYS include
    sectionsHtml += `
      <section id="contact" class="section-content section-contact">
        <div class="container mx-auto px-4 py-20">
          <div class="max-w-6xl mx-auto text-center">
            <div class="max-w-4xl mx-auto">
              <h2 class="section-title mb-8 animate-slide-up">
                ${content?.contactTitle || 'מוכנים להתחיל?'}
              </h2>
              
              <div class="content-card mb-8 animate-slide-up animate-delay-1">
                <p class="section-text">
                  ${content?.contactSubtitle || 'בואו ניצור יחד משהו מרהיב שיקדם את העסק שלכם'}
                </p>
              </div>

              <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-2">
                <div class="contact-info-card">
                  <i class="ri-phone-line text-blue-400 text-xl"></i>
                  <span class="contact-info-text">${formData?.contactInfo?.split('\n')[0]?.replace('טלפון: ', '') || '050-1234567'}</span>
                </div>
                <div class="contact-info-card">
                  <i class="ri-mail-line text-blue-400 text-xl"></i>
                  <span class="contact-info-text">${formData?.contactInfo?.split('\n')[1]?.replace('אימייל: ', '') || 'info@business.co.il'}</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-3">
                <button class="btn-primary">${content?.primaryCta || 'צור קשר עכשיו'}</button>
                <button class="btn-secondary">${content?.secondaryCta || 'קבל הצעת מחיר'}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    return sectionsHtml;
  };

  // Generate footer - ALWAYS include
  const generateFooter = () => {
    return `
      <footer class="footer-section">
        <div class="container mx-auto px-4 py-16">
          <div class="max-w-4xl mx-auto text-center">
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

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName} - ${businessType}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
    <style>
        ${getCompleteCSS(formData.heroStyle || 'default')}
    </style>
</head>
<body class="bg-black text-white font-sans">
    <div class="w-full min-h-screen style-${formData.heroStyle || 'default'}">
        ${generateHeroSection()}
        ${generateNavigation()}
        ${generateAllSections()}
        ${generateFooter()}
    </div>
</body>
</html>`;
};

// Complete CSS that matches PreviewStyles exactly
const getCompleteCSS = (heroStyle: string) => {
  return `
    /* Base Styles */
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
    }

    .section-hero {
      min-height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .container-hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      width: 100%;
    }

    /* Liquid Glass Styles */
    .hero-liquid-glass {
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

    .liquid-orb-1 { width: 300px; height: 300px; top: 10%; left: 10%; animation-delay: 0s; }
    .liquid-orb-2 { width: 200px; height: 200px; top: 60%; right: 20%; animation-delay: 5s; }
    .liquid-orb-3 { width: 150px; height: 150px; bottom: 20%; left: 30%; animation-delay: 10s; }

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

    @keyframes liquidWave {
      0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
      100% { transform: translateX(100%) translateY(100%) rotate(360deg); }
    }

    .liquid-status-badge {
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

    .liquid-subtitle-container {
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 2rem;
      padding: 2rem;
    }

    .liquid-text-glow {
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }

    .liquid-features-grid {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .liquid-feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      text-align: center;
    }

    .liquid-feature-icon {
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

    .liquid-showcase-container {
      position: relative;
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
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

    .liquid-center-element {
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

    .liquid-stats-container {
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

    .liquid-stat-1 { top: 0; left: 0; animation-delay: 0s; }
    .liquid-stat-2 { top: 0; right: 0; animation-delay: 2s; }
    .liquid-stat-3 { bottom: 0; left: 0; animation-delay: 4s; }
    .liquid-stat-4 { bottom: 0; right: 0; animation-delay: 6s; }

    /* Geometric Styles */
    .hero-geometric {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      overflow: hidden;
    }

    .geometric-background {
      position: absolute;
      inset: 0;
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

    .geometric-shape-1 { top: 10%; left: 10%; animation-delay: 0s; }
    .geometric-shape-2 { top: 50%; right: 10%; animation-delay: 3s; }
    .geometric-shape-3 { bottom: 10%; left: 30%; animation-delay: 6s; }

    @keyframes geometricFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    .geometric-badge {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .geometric-stat-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      clip-path: polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%);
    }

    /* Metal Styles */
    .hero-metal {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      position: relative;
      overflow: hidden;
    }

    .metal-background {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
    }

    .metal-premium-badge {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 15px rgba(255,215,0,0.3);
      border: 1px solid #b8860b;
      border-radius: 50px;
      padding: 0.5rem 1.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #1a1a1a;
    }

    .metal-title {
      background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: #1a1a1a;
    }

    .metal-content-card {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 15px rgba(255,215,0,0.2);
      border: 1px solid #b8860b;
      border-radius: 1rem;
      padding: 2rem;
      color: #1a1a1a;
    }

    .metal-stat-card {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 15px rgba(255,215,0,0.2);
      border: 1px solid #b8860b;
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      color: #1a1a1a;
    }

    /* Image Styles */
    .hero-image {
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      position: relative;
      overflow: hidden;
    }

    .image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%);
    }

    .image-quality-badge {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50px;
      padding: 0.5rem 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .image-content-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2rem;
      padding: 2rem;
    }

    .image-features-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2rem;
      padding: 2rem;
    }

    .image-feature-card {
      text-align: center;
      padding: 1rem;
    }

    .image-feature-icon {
      width: 3rem;
      height: 3rem;
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 0.75rem;
      color: #3b82f6;
    }

    /* Default 3D Styles */
    .hero-3d {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      overflow: hidden;
    }

    .floating-elements {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .floating-element {
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .floating-element-1 { top: 20%; left: 20%; animation-delay: 0s; }
    .floating-element-2 { top: 60%; right: 30%; animation-delay: 2s; }
    .floating-element-3 { bottom: 30%; left: 40%; animation-delay: 4s; }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    .hero-badge {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hero-content-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 2rem;
      padding: 2rem;
    }

    .hero-stat-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
    }

    /* Button Styles */
    .btn-liquid-glass {
      background: rgba(59, 130, 246, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(59, 130, 246, 0.2);
      color: white;
      box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-liquid-glass:hover {
      background: rgba(59, 130, 246, 0.2);
      transform: translateY(-3px);
      box-shadow: 0 15px 45px rgba(59, 130, 246, 0.2);
    }

    .btn-liquid-glass-secondary {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-geometric {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);
      padding: 1rem 2.5rem;
      border: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-geometric:hover {
      transform: translateX(-5px);
      box-shadow: 5px 5px 15px rgba(102, 126, 234, 0.3);
    }

    .btn-geometric-secondary {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-metal {
      background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #1a1a1a 100%);
      color: white;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 15px rgba(0,0,0,0.3);
      border: 1px solid #333;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-metal:hover {
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 25px rgba(0,0,0,0.4);
      transform: translateY(-2px);
    }

    .btn-metal-secondary {
      background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
      color: #1a1a1a;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 15px rgba(255,215,0,0.3);
      border: 1px solid #b8860b;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-image {
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-image:hover {
      background: rgba(0, 0, 0, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    .btn-image-secondary {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-3d {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      border: none;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-3d:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    }

    .btn-3d-secondary {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    /* Section Styles */
    .section-content {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(20px);
      position: relative;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 900;
      color: white;
      margin-bottom: 2rem;
      text-align: center;
    }

    .section-text {
      font-size: 1.25rem;
      line-height: 1.7;
      color: white;
    }

    .content-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 2rem;
    }

    /* Feature Styles */
    .feature-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 2rem;
      text-align: center;
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
    }

    .feature-description {
      color: #d1d5db;
      line-height: 1.6;
    }

    /* Why Choose Us Styles */
    .why-choose-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 2rem;
    }

    .why-choose-icon {
      font-size: 2rem;
    }

    .why-choose-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: white;
    }

    .why-choose-description {
      color: #d1d5db;
      line-height: 1.6;
    }

    /* Testimonial Styles */
    .testimonial-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 2rem;
    }

    .testimonial-stars {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }

    .testimonial-content {
      color: white;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .testimonial-avatar {
      width: 3rem;
      height: 3rem;
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .testimonial-name {
      font-weight: 600;
      color: white;
    }

    .testimonial-role {
      font-size: 0.875rem;
      color: #9ca3af;
    }

    /* FAQ Styles */
    .faq-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 2rem;
    }

    .faq-question {
      font-size: 1.125rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.75rem;
    }

    .faq-answer {
      color: #d1d5db;
      line-height: 1.6;
    }

    /* Contact Styles */
    .contact-info-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1rem;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .contact-info-text {
      color: white;
      font-weight: 500;
    }

    /* Footer Styles */
    .footer-section {
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(16px);
      text-align: center;
    }

    /* Animation Styles */
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
      .section-title {
        font-size: 2.5rem;
      }
      
      .grid {
        grid-template-columns: 1fr;
      }
      
      .lg\\:grid-cols-2 {
        grid-template-columns: 1fr;
      }
      
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .section-hero {
        min-height: auto;
        padding: 4rem 0;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .text-5xl,
      .text-7xl {
        font-size: 3rem !important;
      }
      
      .md\\:grid-cols-2,
      .md\\:grid-cols-4 {
        grid-template-columns: 1fr;
      }
      
      .md\\:grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .flex-col.sm\\:flex-row {
        flex-direction: column;
        align-items: center;
      }
    }

    /* Grid System */
    .grid {
      display: grid;
    }
    
    .grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, 1fr);
    }
    
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
    .gap-8 { gap: 2rem; }
    .gap-12 { gap: 3rem; }

    /* Flex System */
    .flex {
      display: flex;
    }
    
    .flex-col {
      flex-direction: column;
    }
    
    .flex-wrap {
      flex-wrap: wrap;
    }
    
    .items-center {
      align-items: center;
    }
    
    .justify-center {
      justify-content: center;
    }
    
    .justify-between {
      justify-content: space-between;
    }

    /* Spacing */
    .p-4 { padding: 1rem; }
    .p-6 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .mb-16 { margin-bottom: 4rem; }

    /* Layout */
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .max-w-2xl { max-width: 42rem; }
    .max-w-4xl { max-width: 56rem; }
    .max-w-6xl { max-width: 72rem; }
    
    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }
    
    .text-center {
      text-align: center;
    }
    
    .relative {
      position: relative;
    }
    
    .z-10 {
      z-index: 10;
    }
    
    .z-50 {
      z-index: 50;
    }
    
    .hidden {
      display: none;
    }
    
    .lg\\:block {
      display: block;
    }
    
    .md\\:flex {
      display: flex;
    }

    /* Navigation */
    .sticky {
      position: sticky;
    }
    
    .top-0 {
      top: 0;
    }
    
    .h-16 {
      height: 4rem;
    }
    
    .space-x-8 > * + * {
      margin-left: 2rem;
    }

    /* Text */
    .text-sm { font-size: 0.875rem; }
    .text-lg { font-size: 1.125rem; }
    .text-xl { font-size: 1.25rem; }
    .text-2xl { font-size: 1.5rem; }
    .text-3xl { font-size: 1.875rem; }
    .text-4xl { font-size: 2.25rem; }
    .text-5xl { font-size: 3rem; }
    .text-6xl { font-size: 3.75rem; }
    .text-7xl { font-size: 4.5rem; }
    
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .font-bold { font-weight: 700; }
    .font-black { font-weight: 900; }
    
    .leading-relaxed { line-height: 1.625; }

    /* Colors */
    .text-white { color: #fff; }
    .text-gray-300 { color: #d1d5db; }
    .text-gray-400 { color: #9ca3af; }
    .text-blue-200 { color: #bfdbfe; }
    .text-blue-300 { color: #93c5fd; }
    .text-blue-400 { color: #60a5fa; }
    .text-green-400 { color: #4ade80; }
    .text-yellow-400 { color: #facc15; }
    
    .bg-black { background-color: #000; }
    
    .border-white { border-color: #fff; }
    .border-b { border-bottom-width: 1px; }
    
    .hover\\:text-blue-400:hover { color: #60a5fa; }
    
    .transition-colors {
      transition-property: color, background-color, border-color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    /* Backdrop */
    .backdrop-blur-md {
      backdrop-filter: blur(12px);
    }
  `;
};
