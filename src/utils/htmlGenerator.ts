import { ColorScheme } from '@/types/colors';

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImage: string) => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  const targetAudience = formData?.targetAudience || 'לקוחות';

  // Get business image function
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

  // Generate hero section based on style - EXACT match to preview
  const generateHeroSection = () => {
    const imageUrl = heroImage || getBusinessImage(formData.businessType);
    const headline = content?.headline || businessName;
    const subheadline = content?.subheadline || `השירותים המקצועיים ביותר ל${targetAudience}`;
    const cta = content?.cta || 'בואו נתחיל לעבוד יחד';

    // Geometric Hero Style - Exact match
    if (formData.heroStyle === 'geometric') {
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
                    <img src="https://img.icons8.com/3d-fluency/94/star.png" alt="star" style="width: 16px; height: 16px;" />
                    <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                  </div>
                </div>
                <div class="glass-card px-4 py-2">
                  <div class="flex items-center gap-2">
                    <img src="https://img.icons8.com/3d-fluency/94/security-checked.png" alt="shield" style="width: 16px; height: 16px;" />
                    <span class="text-sm font-medium text-white">מומחה מוסמך</span>
                  </div>
                </div>
              </div>

              <!-- Main Headline -->
              <h1 class="typography-modern text-6xl md:text-8xl text-white mb-8 animate-slide-up animate-delay-1">
                ${headline}
              </h1>

              <!-- Subheadline -->
              <div class="typography-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2">
                ${subheadline}
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button class="btn-base btn-geometric animate-slide-up animate-delay-3">
                  <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                  ${cta}
                </button>
                <button class="btn-base btn-geometric animate-slide-up animate-delay-4">
                  <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
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
    }

    // Glass Morphism Style - Exact match
    if (formData.heroStyle === 'glass') {
      return `
        <section class="hero-3d section-hero">
          <div class="floating-element"></div>
          <div class="floating-element"></div>
          <div class="floating-element"></div>
          
          <div class="container-hero relative z-10">
            <div class="text-center">
              <!-- Premium Badge -->
              <div class="inline-flex items-center gap-2 glass-intense px-6 py-3 rounded-full mb-8 animate-slide-up">
                <img src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="award" style="width: 20px; height: 20px;" />
                <span class="typography-body text-white font-medium">מספר 1 בתחום</span>
              </div>

              <!-- Hero Title -->
              <h1 class="typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
                ${headline}
              </h1>

              <!-- Subtitle -->
              <div class="glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
                <p class="typography-body text-xl md:text-2xl text-white leading-relaxed">
                  ${subheadline}
                </p>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button class="btn-base btn-glass animate-slide-up animate-delay-3">
                  <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                  ${cta}
                </button>
                <button class="btn-base btn-glass animate-slide-up animate-delay-4">
                  <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                  למד עוד
                </button>
              </div>

              <!-- Feature Highlights -->
              <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-scale-in animate-delay-4">
                <div class="glass-card p-6 text-center">
                  <div class="icon-glass mx-auto mb-4 text-blue-400">
                    <img src="https://img.icons8.com/3d-fluency/94/rocket.png" alt="zap" style="width: 24px; height: 24px;" />
                  </div>
                  <h3 class="typography-modern text-lg font-semibold text-white mb-2">תוצאות מיידיות</h3>
                  <p class="typography-body text-gray-300 text-sm">פתרונות מהירים ויעילים</p>
                </div>
                <div class="glass-card p-6 text-center">
                  <div class="icon-glass mx-auto mb-4 text-blue-400">
                    <img src="https://img.icons8.com/3d-fluency/94/security-checked.png" alt="shield" style="width: 24px; height: 24px;" />
                  </div>
                  <h3 class="typography-modern text-lg font-semibold text-white mb-2">אמינות מוחלטת</h3>
                  <p class="typography-body text-gray-300 text-sm">ביטחון ואמינות ברמה הגבוהה</p>
                </div>
                <div class="glass-card p-6 text-center">
                  <div class="icon-glass mx-auto mb-4 text-blue-400">
                    <img src="https://img.icons8.com/3d-fluency/94/clock.png" alt="clock" style="width: 24px; height: 24px;" />
                  </div>
                  <h3 class="typography-modern text-lg font-semibold text-white mb-2">זמינות 24/7</h3>
                  <p class="typography-body text-gray-300 text-sm">תמיכה מלאה בכל עת</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // Metallic Luxury Style - Exact match
    if (formData.heroStyle === 'metal') {
      return `
        <section class="section-hero bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-800/20"></div>
          
          <div class="container-hero relative z-10">
            <div class="text-center">
              <!-- Luxury Badge -->
              <div class="inline-flex items-center gap-2 metal-card px-6 py-3 rounded-full mb-8 animate-slide-up">
                <img src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="award" style="width: 20px; height: 20px;" />
                <span class="typography-luxury text-gray-800 font-semibold">פרימיום</span>
              </div>

              <!-- Luxury Title -->
              <h1 class="typography-luxury text-7xl md:text-9xl metal-text mb-8 animate-slide-up animate-delay-1">
                ${headline}
              </h1>

              <!-- Elegant Subtitle -->
              <div class="metal-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
                <p class="typography-luxury text-xl md:text-2xl text-gray-800 leading-relaxed">
                  ${subheadline}
                </p>
              </div>

              <!-- Premium Actions -->
              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button class="btn-base btn-metal animate-slide-up animate-delay-3">
                  <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                  ${cta}
                </button>
                <button class="btn-base btn-metal animate-slide-up animate-delay-4">
                  <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
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
    }

    // Image with 3D Effects Style - Exact match
    if (formData.heroStyle === 'image') {
      return `
        <section 
          class="section-hero relative overflow-hidden"
          style="
            background-image: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${imageUrl});
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
          "
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
          
          <div class="container-hero relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="text-center lg:text-right">
                <!-- Image Hero Content -->
                <div class="glass-card p-2 inline-block rounded-full mb-6 animate-slide-up">
                  <div class="flex items-center gap-2 px-4 py-2">
                    <img src="https://img.icons8.com/3d-fluency/94/star.png" alt="star" style="width: 16px; height: 16px;" />
                    <span class="text-sm font-medium text-white">מומלץ בחום</span>
                  </div>
                </div>

                <h1 class="typography-hero text-6xl md:text-8xl mb-8 animate-slide-up animate-delay-1">
                  ${headline}
                </h1>

                <div class="glass-card p-6 mb-8 animate-slide-up animate-delay-2">
                  <p class="typography-body text-xl text-white leading-relaxed">
                    ${subheadline}
                  </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
                  <button class="btn-base btn-primary animate-slide-up animate-delay-3">
                    <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                    ${cta}
                  </button>
                  <button class="btn-base btn-primary animate-slide-up animate-delay-4">
                    <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                    למד עוד
                  </button>
                </div>
              </div>

              <div class="hidden lg:block animate-scale-in animate-delay-4">
                <div class="glass-card p-8">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <img src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="award" style="width: 32px; height: 32px;" />
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">איכות מובטחת</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <img src="https://img.icons8.com/3d-fluency/94/security-checked.png" alt="shield" style="width: 32px; height: 32px;" />
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">אמינות מוחלטת</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <img src="https://img.icons8.com/3d-fluency/94/rocket.png" alt="zap" style="width: 32px; height: 32px;" />
                      </div>
                      <h3 class="typography-body text-white font-medium text-sm">ביצוע מהיר</h3>
                    </div>
                    <div class="text-center p-4">
                      <div class="icon-glass mx-auto mb-3 text-blue-400">
                        <img src="https://img.icons8.com/3d-fluency/94/clock.png" alt="clock" style="width: 32px; height: 32px;" />
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

    // Default 3D Background Style - Exact match
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
                  <img src="https://img.icons8.com/3d-fluency/94/star.png" alt="star" style="width: 16px; height: 16px;" />
                  <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
                </div>
              </div>
              <div class="glass-card px-4 py-2">
                <div class="flex items-center gap-2">
                  <img src="https://img.icons8.com/3d-fluency/94/checkmark.png" alt="check" style="width: 16px; height: 16px;" />
                  <span class="text-sm font-medium text-white">מומחה מוסמך</span>
                </div>
              </div>
            </div>

            <!-- Main Hero Content -->
            <h1 class="typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
              ${headline}
            </h1>

            <div class="glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
              <p class="typography-body text-xl md:text-2xl text-white leading-relaxed">
                ${subheadline}
              </p>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button class="btn-base btn-primary animate-slide-up animate-delay-3">
                <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                ${cta}
              </button>
              <button class="btn-base btn-primary animate-slide-up animate-delay-4">
                <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
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

  // Helper function to generate content sections - EXACT match to preview
  const generateContentSections = (content: any, formData: any, businessName: string, businessType: string, targetAudience: string) => {
    const getCardClass = () => {
      switch (formData.heroStyle) {
        case 'geometric': return 'geometric-card';
        case 'glass': return 'glass-card';
        case 'metal': return 'metal-card';
        case 'image': return 'glass-card';
        default: return 'glass-card';
      }
    };

    const getBackgroundClass = () => {
      switch (formData.heroStyle) {
        case 'geometric': return 'bg-geometric';
        case 'glass': return 'bg-glass';
        case 'metal': return 'bg-metal';
        case 'image': return 'bg-image';
        default: return 'bg-3d';
      }
    };

    const getTypographyClass = () => {
      switch (formData.heroStyle) {
        case 'geometric': return 'typography-modern';
        case 'glass': return 'typography-modern';
        case 'metal': return 'typography-luxury';
        case 'image': return 'typography-modern';
        default: return 'typography-tech';
      }
    };

    return `
      <!-- Value Proposition Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
          <div style="max-width: 1200px; margin: 0 auto;">
              <div style="text-align: center;">
                  <h2 class="${getTypographyClass()}" style="font-size: 3rem; font-weight: 900; margin-bottom: 2rem; color: white;">
                      ${content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
                  </h2>
                  <div class="${getCardClass()}" style="padding: 2rem;">
                      <p class="typography-body" style="font-size: 1.25rem; line-height: 1.75; color: white;">
                          ${content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`}
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
          <div style="max-width: 1200px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 3rem;">
                  <h2 class="${getTypographyClass()}" style="font-size: 3rem; font-weight: 900; margin-bottom: 1.5rem; color: white;">
                      ${content?.sections?.whyUs?.title || "למה כדאי לבחור דווקא בנו?"}
                  </h2>
                  <p class="typography-body" style="font-size: 1.125rem; color: #d1d5db; max-width: 768px; margin: 0 auto;">
                      הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
                  </p>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                  ${[
                    { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
                    { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
                    { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
                    { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
                  ].map((reason, index) => `
                    <div class="${getCardClass()}" style="padding: 1.5rem; text-align: center;">
                        <div style="margin: 0 auto 1rem; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;">
                            <img src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="trophy" style="width: 32px; height: 32px;" />
                        </div>
                        <h3 class="${getTypographyClass()}" style="font-size: 1.125rem; font-weight: bold; margin-bottom: 0.75rem; color: white;">
                            ${reason.title}
                        </h3>
                        <p class="typography-body" style="color: #d1d5db; line-height: 1.75; font-size: 0.875rem;">
                            ${reason.description}
                        </p>
                    </div>
                  `).join('')}
              </div>
          </div>
      </section>

      <!-- Services Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
          <div style="max-width: 1200px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 3rem;">
                  <h2 class="${getTypographyClass()}" style="font-size: 3rem; font-weight: 900; margin-bottom: 1.5rem; color: white;">
                      ${content?.sections?.whatWeGive?.title || "מה אתם מקבלים מאיתנו"}
                  </h2>
                  <p class="typography-body" style="font-size: 1.125rem; color: #d1d5db; max-width: 768px; margin: 0 auto;">
                      השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
                  </p>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem;">
                  ${[
                    { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
                    { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
                    { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
                    { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
                  ].map((service, index) => `
                    <div class="${getCardClass()}" style="padding: 1.5rem;">
                        <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                            <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
                                <img src="https://img.icons8.com/3d-fluency/94/checkmark.png" alt="check" style="width: 24px; height: 24px;" />
                            </div>
                            <div>
                                <h3 class="${getTypographyClass()}" style="font-size: 1.125rem; font-weight: bold; color: white; margin-bottom: 0.5rem;">
                                    ${service.title}
                                </h3>
                                <p class="typography-body" style="color: #d1d5db; line-height: 1.75; font-size: 0.875rem;">
                                    ${service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                  `).join('')}
              </div>
          </div>
      </section>

      <!-- Process Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
          <div style="max-width: 1200px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 3rem;">
                  <h2 class="${getTypographyClass()}" style="font-size: 3rem; font-weight: 900; margin-bottom: 1.5rem; color: white;">
                      <img src="https://img.icons8.com/3d-fluency/94/laptop.png" alt="process" style="width: 40px; height: 40px; display: inline-block; margin-left: 12px;" />
                      תהליך העבודה שלנו
                  </h2>
                  <p class="typography-body" style="font-size: 1.125rem; color: #d1d5db; max-width: 768px; margin: 0 auto;">
                      תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
                  </p>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                  ${[
                    { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "https://img.icons8.com/3d-fluency/94/bullseye.png" },
                    { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "https://img.icons8.com/3d-fluency/94/idea.png" },
                    { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "https://img.icons8.com/3d-fluency/94/gear.png" },
                    { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "https://img.icons8.com/3d-fluency/94/rocket.png" }
                  ].map((process, index) => `
                    <div class="${getCardClass()}" style="text-align: center; padding: 1.5rem;">
                        <div style="position: relative; margin-bottom: 1.5rem;">
                            <div style="margin: 0 auto; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;">
                                <img src="${process.icon}" alt="${process.title}" style="width: 24px; height: 24px;" />
                            </div>
                            <div style="position: absolute; top: -8px; right: -8px; width: 24px; height: 24px; background: #fbbf24; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: black; font-weight: bold; font-size: 0.75rem;">
                                ${process.step}
                            </div>
                        </div>
                        <h3 class="${getTypographyClass()}" style="font-size: 1.125rem; font-weight: bold; margin-bottom: 0.75rem; color: white;">
                            ${process.title}
                        </h3>
                        <p class="typography-body" style="color: #d1d5db; line-height: 1.75; font-size: 0.875rem;">
                            ${process.desc}
                        </p>
                    </div>
                  `).join('')}
              </div>
          </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
          <div style="max-width: 1200px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 3rem;">
                  <h2 class="${getTypographyClass()}" style="font-size: 3rem; font-weight: 900; margin-bottom: 1.5rem; color: white;">
                      מה הלקוחות שלנו אומרים
                  </h2>
                  <p class="typography-body" style="font-size: 1.125rem; color: #d1d5db; max-width: 768px; margin: 0 auto;">
                      עדויות אמיתיות מלקוחות מרוצים
                  </p>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                  ${[
                    { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.` },
                    { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!` },
                    { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!" }
                  ].map((testimonial, index) => `
                    <div class="${getCardClass()}" style="padding: 1.5rem;">
                        <div style="display: flex; margin-bottom: 1rem;">
                            ${Array(5).fill(0).map(() => '<img src="https://img.icons8.com/3d-fluency/94/star.png" alt="star" style="width: 16px; height: 16px;" />').join('')}
                        </div>
                        
                        <img src="https://img.icons8.com/3d-fluency/94/quote-left.png" alt="quote" style="width: 24px; height: 24px; margin-bottom: 12px;" />
                        
                        <p class="typography-body" style="line-height: 1.75; color: white; margin-bottom: 1rem; font-style: italic; font-size: 0.875rem;">
                            "${testimonial.content}"
                        </p>
                        
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(45deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center;">
                                <img src="https://img.icons8.com/3d-fluency/94/user.png" alt="user" style="width: 20px; height: 20px;" />
                            </div>
                            <div>
                                <p class="${getTypographyClass()}" style="font-weight: bold; color: white; font-size: 0.875rem;">
                                    ${testimonial.name}
                                </p>
                                <p class="typography-body" style="font-size: 0.75rem; color: #9ca3af;">
                                    ${testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                  `).join('')}
              </div>
          </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
          <div style="max-width: 1200px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 3rem;">
                  <h2 class="${getTypographyClass()}" style="font-size: 3rem; font-weight: 900; margin-bottom: 1.5rem; color: white;">
                      שאלות נפוצות
                  </h2>
                  <p class="typography-body" style="font-size: 1.125rem; color: #d1d5db; max-width: 768px; margin: 0 auto;">
                      תשובות לשאלות הנפוצות ביותר
                  </p>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; max-width: 896px; margin: 0 auto;">
                  ${[
                    { question: "כמה זמן לוקח התהליך?", answer: "התהליך נע בין שבוע לחודש, תלוי במורכבות הפרויקט והדרישות הספציפיות שלכם." },
                    { question: "איך הגישה שלכם שונה?", answer: "אנחנו מתמחים בפתרונות מותאמים אישית ובליווי צמוד לאורך כל התהליך." },
                    { question: "מה כלול במחיר?", answer: "המחיר כולל את כל השירותים הבסיסיים, ליווי מלא ותמיכה לאחר הפרויקט." },
                    { question: "איך מתחילים?", answer: "פשוט צרו קשר איתנו לייעוץ ראשוני חינמי ובחינת האפשרויות המתאימות לכם." }
                  ].map((faq, index) => `
                    <div class="${getCardClass()}" style="padding: 1.5rem;">
                        <h3 class="${getTypographyClass()}" style="font-size: 1.125rem; font-weight: bold; margin-bottom: 0.75rem; color: white;">
                            ${faq.question}
                        </h3>
                        <p class="typography-body" style="color: #d1d5db; line-height: 1.75; font-size: 0.875rem;">
                            ${faq.answer}
                        </p>
                    </div>
                  `).join('')}
              </div>
          </div>
      </section>

      <!-- Enhanced CTA Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}" style="position: relative; overflow: hidden;">
          <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%);"></div>
          
          <div style="max-width: 1200px; margin: 0 auto; text-align: center; position: relative; z-index: 10;">
              <div style="max-width: 896px; margin: 0 auto;">
                  <h2 class="${getTypographyClass()}" style="font-size: 3rem; font-weight: 900; margin-bottom: 2rem; color: white;">
                      ${content?.contactTitle || 'מוכנים להתחיל?'}
                  </h2>
                  
                  <div class="${getCardClass()}" style="padding: 1.5rem; margin-bottom: 2rem;">
                      <p class="typography-body" style="font-size: 1.25rem; color: white; line-height: 1.75;">
                          בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
                      </p>
                  </div>

                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 512px; margin: 0 auto 2rem;">
                      <div class="${getCardClass()}" style="padding: 1rem;">
                          <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                              <img src="https://img.icons8.com/3d-fluency/94/phone.png" alt="phone" style="width: 20px; height: 20px;" />
                              <span class="typography-body" style="color: white; font-weight: 500;">050-1234567</span>
                          </div>
                      </div>
                      <div class="${getCardClass()}" style="padding: 1rem;">
                          <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                              <img src="https://img.icons8.com/3d-fluency/94/email.png" alt="email" style="width: 20px; height: 20px;" />
                              <span class="typography-body" style="color: white; font-weight: 500;">info@business.co.il</span>
                          </div>
                      </div>
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center; margin-bottom: 2rem;">
                      <button class="btn-base btn-${formData.heroStyle === 'geometric' ? 'geometric' : formData.heroStyle === 'glass' ? 'glass' : formData.heroStyle === 'metal' ? 'metal' : 'primary'}">
                          <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                          צור קשר עכשיו
                      </button>
                      <button class="btn-base btn-${formData.heroStyle === 'geometric' ? 'geometric' : formData.heroStyle === 'glass' ? 'glass' : formData.heroStyle === 'metal' ? 'metal' : 'primary'}">
                          <img src="https://img.icons8.com/3d-fluency/94/left.png" alt="arrow" style="width: 20px; height: 20px;" />
                          קבל הצעת מחיר
                      </button>
                  </div>

                  <!-- Enhanced Trust Badges -->
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 768px; margin: 0 auto;">
                      ${[
                        { icon: 'https://img.icons8.com/3d-fluency/94/security-checked.png', title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
                        { icon: 'https://img.icons8.com/3d-fluency/94/clock.png', title: 'מענה מהיר', desc: 'תוך 24 שעות' },
                        { icon: 'https://img.icons8.com/3d-fluency/94/heart.png', title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
                      ].map((badge, index) => `
                        <div class="${getCardClass()}" style="padding: 1rem; text-align: center;">
                            <div style="margin: 0 auto 0.5rem; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
                                <img src="${badge.icon}" alt="${badge.title}" style="width: 20px; height: 20px;" />
                            </div>
                            <h3 class="${getTypographyClass()}" style="font-weight: 600; color: white; margin-bottom: 0.25rem; font-size: 0.875rem;">
                                ${badge.title}
                            </h3>
                            <p class="typography-body" style="color: #d1d5db; font-size: 0.75rem;">
                                ${badge.desc}
                            </p>
                        </div>
                      `).join('')}
                  </div>
              </div>
          </div>
      </section>
    `;
  };

  // Complete HTML structure with exact styling from preview
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName} - דף נחיתה</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        /* EXACT CSS from PreviewStyles.tsx */
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
            font-family: 'Heebo', sans-serif;
        }
        
        body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* HERO STYLES - EXACT MATCH */
        .section-hero {
            min-height: 100vh;
            padding: 8rem 0;
            position: relative;
            overflow: hidden;
        }

        .container-hero {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* 3D Hero Background */
        .hero-3d {
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            position: relative;
        }

        .hero-3d::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
            animation: gradientShift 15s ease-in-out infinite;
        }

        @keyframes gradientShift {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }

        .floating-element {
            position: absolute;
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            border-radius: 50%;
            filter: blur(1px);
            animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            top: 70%;
            right: 10%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            bottom: 20%;
            left: 50%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { 
                transform: translateY(0px); 
            }
            50% { 
                transform: translateY(-20px); 
            }
        }

        /* Geometric Hero */
        .geometric-hero {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%);
            position: relative;
        }

        .geometric-shape {
            position: absolute;
            width: 300px;
            height: 300px;
            background: linear-gradient(45deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%);
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
            animation: geometricFloat 8s ease-in-out infinite;
        }

        .geometric-shape:nth-child(1) {
            top: 10%;
            left: 5%;
            animation-delay: 0s;
        }

        .geometric-shape:nth-child(2) {
            top: 60%;
            right: 10%;
            animation-delay: 2s;
        }

        .geometric-shape:nth-child(3) {
            bottom: 10%;
            left: 40%;
            animation-delay: 4s;
        }

        @keyframes geometricFloat {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
            }
            50% { 
                transform: translateY(-30px) rotate(180deg); 
            }
        }

        /* Typography Classes */
        .typography-hero {
            font-weight: 900;
            line-height: 1.1;
            background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
        }

        .typography-modern {
            font-weight: 700;
            line-height: 1.2;
        }

        .typography-luxury {
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: 0.5px;
        }

        .typography-tech {
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: 1px;
        }

        .typography-body {
            font-weight: 400;
            line-height: 1.6;
        }

        /* Card Styles */
        .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .glass-intense {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 20px;
            box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
        }

        .geometric-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
            box-shadow: 0 6px 25px 0 rgba(0, 0, 0, 0.3);
        }

        .metal-card {
            background: linear-gradient(135deg, #c9aa7d 0%, #ffd89b 50%, #c9aa7d 100%);
            border: 2px solid #b8941f;
            border-radius: 8px;
            box-shadow: 
                0 4px 15px rgba(185, 148, 31, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2);
            position: relative;
        }

        .metal-text {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Button Styles */
        .btn-base {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            text-decoration: none;
            font-size: 1rem;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
        }

        .btn-glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .btn-glass:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .btn-geometric {
            background: linear-gradient(135deg, rgba(79, 172, 254, 0.8) 0%, rgba(0, 242, 254, 0.8) 100%);
            color: white;
            clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-geometric:hover {
            background: linear-gradient(135deg, rgba(79, 172, 254, 1) 0%, rgba(0, 242, 254, 1) 100%);
            transform: translateY(-2px);
        }

        .btn-metal {
            background: linear-gradient(135deg, #c9aa7d 0%, #ffd89b 50%, #c9aa7d 100%);
            color: #2d2d2d;
            border: 2px solid #b8941f;
            box-shadow: 
                0 4px 15px rgba(185, 148, 31, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .btn-metal:hover {
            background: linear-gradient(135deg, #d4b586 0%, #ffdd9f 50%, #d4b586 100%);
            transform: translateY(-2px);
        }

        /* Icon Styles */
        .icon-glass, .icon-geometric, .icon-metal, .icon-image, .icon-3d {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .icon-geometric {
            background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
            clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }

        /* Background Styles */
        .bg-3d, .bg-glass, .bg-image {
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        }

        .bg-geometric {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%);
        }

        .bg-metal {
            background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #0d0d0d 100%);
        }

        /* Style Classes */
        .style-3d, .style-glass, .style-image {
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        }

        .style-geometric {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%);
        }

        .style-metal {
            background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #0d0d0d 100%);
        }

        /* Animations */
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

        .animate-slide-up {
            animation: slide-up 0.6s ease-out;
        }

        .animate-scale-in {
            animation: scale-in 0.6s ease-out;
        }

        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }
        .animate-delay-4 { animation-delay: 0.4s; }

        /* Responsive */
        @media (max-width: 768px) {
            .section-hero {
                padding: 4rem 0;
            }
            
            .container-hero {
                padding: 0 1rem;
            }
        }
    </style>
</head>
<body class="min-h-screen ${formData.heroStyle === 'geometric' ? 'style-geometric' : formData.heroStyle === 'glass' ? 'style-glass' : formData.heroStyle === 'metal' ? 'style-metal' : formData.heroStyle === 'image' ? 'style-image' : 'style-3d'}">
    ${generateHeroSection()}
    
    ${generateContentSections(content, formData, businessName, businessType, targetAudience)}
    
    <!-- Footer Section -->
    <footer style="background: rgba(0,0,0,0.5); backdrop-filter: blur(16px); padding: 4rem 0; text-align: center;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <div style="max-width: 896px; margin: 0 auto;">
                <h3 style="font-size: 2rem; font-weight: bold; color: white; margin-bottom: 1rem;">
                    ${businessName}
                </h3>
                <p style="color: #9ca3af; margin-bottom: 2rem;">
                    © 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.
                </p>
                <div style="display: flex; justify-content: center; gap: 2rem; color: #9ca3af;">
                    <span>טלפון: 050-1234567</span>
                    <span>אימייל: info@business.co.il</span>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`;
};
