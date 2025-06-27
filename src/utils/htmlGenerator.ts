
import { ColorScheme } from "@/components/ColorEditor";
import { getHeroImageUrl } from "./heroImageUtils";

interface ContentWithState {
  currentColors: ColorScheme;
  formData: any;
  heroImage: string;
  [key: string]: any;
}

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

const generateLiquidGlassHero = (content: any, formData: any) => {
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
              ${content?.headline || formData.businessName}
            </h1>

            <div class="liquid-subtitle-flow mb-12 animate-slide-up animate-delay-2">
              <div class="liquid-text-orb">
                <p class="typography-liquid text-xl md:text-2xl text-white leading-relaxed liquid-text-glow">
                  ${content?.subheadline || `חוויה נוזלית ייחודית ל${formData.targetAudience}`}
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
};

const generateGeometricHero = (content: any, formData: any) => {
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
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
                <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
              </div>
            </div>
            <div class="glass-card px-4 py-2">
              <div class="flex items-center gap-2">
                <i class="ri-shield-check-line text-green-400 text-sm"></i>
                <span class="text-sm font-medium text-white">מומחה מוסמך</span>
              </div>
            </div>
          </div>

          <h1 class="typography-modern text-6xl md:text-8xl text-white mb-8 animate-slide-up animate-delay-1">
            ${content?.headline || formData.businessName}
          </h1>

          <div class="typography-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up animate-delay-2">
            ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
          </div>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button class="btn-base btn-geometric animate-slide-up animate-delay-3">
              <i class="ri-arrow-left-line text-lg"></i>
              ${content?.cta || 'בואו נתחיל לעבוד יחד'}
            </button>
            <button class="btn-base btn-geometric animate-slide-up animate-delay-4">
              <i class="ri-arrow-left-line text-lg"></i>
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
};

const generateMetalHero = (content: any, formData: any) => {
  return `
    <section class="section-hero bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-800/20"></div>
      
      <div class="container-hero relative z-10">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 metal-card px-6 py-3 rounded-full mb-8 animate-slide-up">
            <i class="ri-award-line text-yellow-600 text-lg"></i>
            <span class="typography-luxury text-gray-800 font-semibold">פרימיום</span>
          </div>

          <h1 class="typography-luxury text-7xl md:text-9xl metal-text mb-8 animate-slide-up animate-delay-1">
            ${content?.headline || formData.businessName}
          </h1>

          <div class="metal-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
            <p class="typography-luxury text-xl md:text-2xl text-gray-800 leading-relaxed">
              ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button class="btn-base btn-metal animate-slide-up animate-delay-3">
              <i class="ri-arrow-left-line text-lg"></i>
              ${content?.cta || 'בואו נתחיל לעבוד יחד'}
            </button>
            <button class="btn-base btn-metal animate-slide-up animate-delay-4">
              <i class="ri-arrow-left-line text-lg"></i>
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
};

const generateImageHero = (content: any, formData: any, heroImage: string) => {
  const imageUrl = heroImage || getBusinessImage(formData.businessType);
  
  return `
    <section 
      class="section-hero relative overflow-hidden"
      style="background-image: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${imageUrl}); background-size: cover; background-position: center; background-attachment: fixed;"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30"></div>
      
      <div class="container-hero relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-right">
            <div class="glass-card p-2 inline-block rounded-full mb-6 animate-slide-up">
              <div class="flex items-center gap-2 px-4 py-2">
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
                <span class="text-sm font-medium text-white">מומלץ בחום</span>
              </div>
            </div>

            <h1 class="typography-hero text-6xl md:text-8xl mb-8 animate-slide-up animate-delay-1">
              ${content?.headline || formData.businessName}
            </h1>

            <div class="glass-card p-6 mb-8 animate-slide-up animate-delay-2">
              <p class="typography-body text-xl text-white leading-relaxed">
                ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-3">
              <button class="btn-base btn-image-depth">
                <i class="ri-arrow-left-line text-lg"></i>
                ${content?.cta || 'בואו נתחיל לעבוד יחד'}
              </button>
              <button class="btn-base btn-image-depth">
                <i class="ri-arrow-left-line text-lg"></i>
                למד עוד
              </button>
            </div>
          </div>

          <div class="hidden lg:block animate-scale-in animate-delay-4">
            <div class="glass-card p-8">
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4">
                  <div class="icon-glass mx-auto mb-3 text-blue-400">
                    <i class="ri-award-line text-2xl"></i>
                  </div>
                  <h3 class="typography-body text-white font-medium text-sm">איכות מובטחת</h3>
                </div>
                <div class="text-center p-4">
                  <div class="icon-glass mx-auto mb-3 text-blue-400">
                    <i class="ri-shield-check-line text-2xl"></i>
                  </div>
                  <h3 class="typography-body text-white font-medium text-sm">אמינות מוחלטת</h3>
                </div>
                <div class="text-center p-4">
                  <div class="icon-glass mx-auto mb-3 text-blue-400">
                    <i class="ri-flashlight-line text-2xl"></i>
                  </div>
                  <h3 class="typography-body text-white font-medium text-sm">ביצוע מהיר</h3>
                </div>
                <div class="text-center p-4">
                  <div class="icon-glass mx-auto mb-3 text-blue-400">
                    <i class="ri-time-line text-2xl"></i>
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

const generate3DHero = (content: any, formData: any) => {
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
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
                <span class="text-sm font-medium text-white">דירוג 5 כוכבים</span>
              </div>
            </div>
            <div class="glass-card px-4 py-2">
              <div class="flex items-center gap-2">
                <i class="ri-check-circle-line text-green-400 text-sm"></i>
                <span class="text-sm font-medium text-white">מומחה מוסמך</span>
              </div>
            </div>
          </div>

          <h1 class="typography-hero text-7xl md:text-9xl mb-8 animate-slide-up animate-delay-1">
            ${content?.headline || formData.businessName}
          </h1>

          <div class="glass-card p-8 max-w-5xl mx-auto mb-12 animate-slide-up animate-delay-2">
            <p class="typography-body text-xl md:text-2xl text-white leading-relaxed">
              ${content?.subheadline || `השירותים המקצועיים ביותר ל${formData.targetAudience}`}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button class="btn-base btn-primary animate-slide-up animate-delay-3">
              <i class="ri-arrow-left-line text-lg"></i>
              ${content?.cta || 'בואו נתחיל לעבוד יחד'}
            </button>
            <button class="btn-base btn-primary animate-slide-up animate-delay-4">
              <i class="ri-arrow-left-line text-lg"></i>
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

const generateLiquidGlassSections = (content: any, formData: any) => {
  const businessName = formData?.businessName || 'העסק שלי';
  
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
          <div class="floating-subtitle">
            <p class="typography-liquid text-xl text-blue-200">הסיבות הנוזליות שעושות אותנו שונים</p>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          ${(content?.sections?.whyUs?.reasons || [
            { title: "טכנולוגיה נוזלית מתקדמת", description: "פתרונות חדשניים המשלבים זרימה טבעית עם יעילות מקסימלית" },
            { title: "חוויית משתמש זורמת", description: "אינטראקציה חלקה ואינטואיטיבית שמתאימה לכל צורך" },
            { title: "גמישות מוחלטת", description: "התאמה דינמית לכל דרישה ושינוי בזמן אמת" },
            { title: "איכות שקופה ונקייה", description: "שירות ברור וישיר ללא הפתעות או עמימות" }
          ]).map((reason: any) => `
            <div class="liquid-morph-card group">
              <div class="liquid-icon-orb">
                <i class="ri-diamond-line text-blue-300 text-2xl"></i>
              </div>
              <h3 class="typography-liquid text-2xl font-bold mb-4 text-white liquid-text-glow">${reason.title}</h3>
              <p class="typography-liquid text-blue-200 leading-relaxed">${reason.description}</p>
              <div class="liquid-ripple"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Liquid Glass Services -->
    <section class="py-20 px-4 bg-liquid-glass relative overflow-hidden">
      <div class="liquid-flow-bg"></div>
      
      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center mb-16">
          <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">השירותים הנוזליים שלנו</h2>
        </div>
        
        <div class="liquid-grid">
          ${(content?.sections?.whatWeGive?.services || [
            { title: "פתרונות זורמים", description: "שירותים שמתאימים עצמם לצרכים המשתנים שלכם" },
            { title: "איכות שקופה", description: "רמת שירות גבוהה וברורה בכל שלב מהתהליך" },
            { title: "ליווי נוזלי", description: "תמיכה רציפה שזורמת איתכם לאורך כל המסע" },
            { title: "תוצאות נוזריות", description: "הישגים שמתפתחים ומשתפרים עם הזמן" }
          ]).map((service: any) => `
            <div class="liquid-service-card">
              <div class="liquid-check-orb">
                <i class="ri-check-line text-green-400 text-xl"></i>
              </div>
              <h3 class="typography-liquid text-xl font-bold text-white mb-3 liquid-text-glow">${service.title}</h3>
              <p class="typography-liquid text-blue-200 text-sm leading-relaxed">${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Liquid Glass Process -->
    <section class="py-20 px-4 bg-liquid-glass-alt relative overflow-hidden">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">תהליך העבודה הנוזלי</h2>
        </div>
        
        <div class="liquid-timeline">
          ${[
            { step: 1, title: "זרימה ראשונית", desc: "הבנה עמוקה של הצרכים והמטרות", icon: "ri-target-line" },
            { step: 2, title: "עיצוב נוזלי", desc: "תכנון גמיש שמתאים עצמו לדרישות", icon: "ri-lightbulb-line" },
            { step: 3, title: "יישום זורם", desc: "ביצוע חלק ומדוייק של הפתרון", icon: "ri-settings-line" },
            { step: 4, title: "התפתחות מתמשכת", desc: "שיפור וליווי רציף לאורך זמן", icon: "ri-rocket-line" }
          ].map((process, index) => `
            <div class="liquid-timeline-item">
              <div class="liquid-step-orb">
                <span class="typography-liquid font-bold text-lg text-blue-900">${process.step}</span>
              </div>
              <div class="liquid-process-card">
                <div class="liquid-process-icon">
                  <i class="${process.icon} text-blue-300 text-3xl"></i>
                </div>
                <h3 class="typography-liquid text-xl font-bold text-white mb-3 liquid-text-glow">${process.title}</h3>
                <p class="typography-liquid text-blue-200 leading-relaxed">${process.desc}</p>
              </div>
              ${index < 3 ? '<div class="liquid-flow-connector"></div>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Liquid Glass Testimonials -->
    <section class="py-20 px-4 bg-liquid-glass relative overflow-hidden">
      <div class="liquid-bubble-field">
        <div class="liquid-bubble liquid-bubble-1"></div>
        <div class="liquid-bubble liquid-bubble-2"></div>
        <div class="liquid-bubble liquid-bubble-3"></div>
        <div class="liquid-bubble liquid-bubble-4"></div>
      </div>
      
      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center mb-16">
          <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">חוויות נוזליות</h2>
        </div>
        
        <div class="liquid-testimonials-grid">
          ${(content?.sections?.testimonials || [
            { name: "דני כהן", role: "מנהל חדשנות", content: `החוויה עם ${businessName} הייתה נוזלית לחלוטין - הכל זרם בצורה טבעית ויעילה.` },
            { name: "שרה לוי", role: "יועצת טכנולוגיות", content: `הגישה הנוזלית שלהם פשוט מהפכנית. כל שינוי מתבצע בזרימה חלקה.` },
            { name: "מיכל רוזן", role: "מנהלת פרויקטים", content: "השירות זורם כמו נהר - טבעי, רציף ומרשים בתוצאותיו." }
          ]).map((testimonial: any) => `
            <div class="liquid-testimonial-bubble">
              <div class="liquid-quote-orb">
                <i class="ri-chat-quote-line text-blue-300 text-xl"></i>
              </div>
              
              <p class="typography-liquid leading-relaxed text-white mb-6 liquid-text-glow italic">"${testimonial.content}"</p>
              
              <div class="liquid-author">
                <div class="liquid-avatar">
                  <i class="ri-user-line text-blue-300 text-lg"></i>
                </div>
                <div>
                  <p class="typography-liquid font-bold text-white">${testimonial.name}</p>
                  ${testimonial.role ? `<p class="typography-liquid text-xs text-blue-200">${testimonial.role}</p>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
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
            <button class="btn-base btn-liquid-glass">
              <i class="ri-arrow-left-line text-lg"></i>
              התחילו את הזרימה
            </button>
            <button class="btn-base btn-liquid-glass">
              <i class="ri-arrow-left-line text-lg"></i>
              גלו את החוויה
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateDefaultSections = (content: any, formData: any, styleClass: string) => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  
  return `
    <!-- Value Proposition Section -->
    <section class="py-16 px-4 ${styleClass}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up">
            ${content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
          </h2>
          <div class="glass-card p-8 animate-slide-up animate-delay-1">
            <p class="text-lg md:text-xl leading-relaxed text-white">
              ${content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 px-4 ${styleClass}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-white">
            ${content?.sections?.whyUs?.title || "למה כדאי לבחור דווקא בנו?"}
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${(content?.sections?.whyUs?.reasons || [
            { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
            { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
            { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
            { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
          ]).map((reason: any, index: number) => `
            <div class="glass-card p-6 text-center animate-scale-in animate-delay-${index + 1}">
              <div class="icon-glass mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                <i class="ri-trophy-line text-yellow-400 text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold mb-3 text-white">${reason.title}</h3>
              <p class="text-gray-300 leading-relaxed text-sm">${reason.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16 px-4 ${styleClass}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-white">
            ${content?.sections?.whatWeGive?.title || "מה אתם מקבלים מאיתנו"}
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          ${(content?.sections?.whatWeGive?.services || [
            { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
            { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
            { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
            { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
          ]).map((service: any, index: number) => `
            <div class="glass-card p-6 animate-slide-up animate-delay-${index + 1}">
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-glass w-8 h-8 flex items-center justify-center">
                  <i class="ri-check-line text-green-400 text-xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">${service.title}</h3>
                  <p class="text-gray-300 leading-relaxed text-sm">${service.description}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 px-4 ${styleClass}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-white">
            <i class="ri-laptop-line text-blue-400 text-3xl ml-3"></i>
            תהליך העבודה שלנו
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">תהליך מובנה ומקצועי שמבטיח תוצאות מעולות</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${[
            { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "ri-target-line" },
            { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "ri-lightbulb-line" },
            { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "ri-settings-line" },
            { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "ri-rocket-line" }
          ].map((process, index) => `
            <div class="glass-card text-center p-6 animate-scale-in animate-delay-${index + 1}">
              <div class="relative mb-6">
                <div class="icon-glass mx-auto w-12 h-12 flex items-center justify-center">
                  <i class="${process.icon} text-blue-400 text-xl"></i>
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                  ${process.step}
                </div>
              </div>
              <h3 class="text-lg font-bold mb-3 text-white">${process.title}</h3>
              <p class="text-gray-300 leading-relaxed text-sm">${process.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 px-4 ${styleClass}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-white">מה הלקוחות שלנו אומרים</h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">עדויות אמיתיות מלקוחות מרוצים</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          ${(content?.sections?.testimonials || [
            { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.` },
            { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!` },
            { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!" }
          ]).map((testimonial: any, index: number) => `
            <div class="glass-card p-6 animate-scale-in animate-delay-${index + 1}">
              <div class="flex mb-4">
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
                <i class="ri-star-fill text-yellow-400 text-sm"></i>
              </div>
              
              <i class="ri-chat-quote-line text-blue-400 text-xl mb-3 block"></i>
              
              <p class="leading-relaxed text-white mb-4 italic text-sm">"${testimonial.content}"</p>
              
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <i class="ri-user-line text-white text-lg"></i>
                </div>
                <div>
                  <p class="font-bold text-white text-sm">${testimonial.name}</p>
                  ${testimonial.role ? `<p class="text-xs text-gray-400">${testimonial.role}</p>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-4 ${styleClass}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-white">שאלות נפוצות</h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">תשובות לשאלות הנפוצות ביותר</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          ${[
            { question: "כמה זמן לוקח התהליך?", answer: "התהליך נע בין שבוע לחודש, תלוי במורכבות הפרויקט והדרישות הספציפיות שלכם." },
            { question: "איך הגישה שלכם שונה?", answer: "אנחנו מתמחים בפתרונות מותאמים אישית ובליווי צמוד לאורך כל התהליך." },
            { question: "מה כלול במחיר?", answer: "המחיר כולל את כל השירותים הבסיסיים, ליווי מלא ותמיכה לאחר הפרויקט." },
            { question: "איך מתחילים?", answer: "פשוט צרו קשר איתנו לייעוץ ראשוני חינמי ובחינת האפשרויות המתאימות לכם." }
          ].map((faq, index) => `
            <div class="glass-card p-6 animate-slide-up animate-delay-${index + 1}">
              <h3 class="text-lg font-bold mb-3 text-white">${faq.question}</h3>
              <p class="text-gray-300 leading-relaxed text-sm">${faq.answer}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 ${styleClass} relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
      
      <div class="container mx-auto max-w-6xl text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up">
            ${content?.contactTitle || 'מוכנים להתחיל?'}
          </h2>
          
          <div class="glass-card p-6 mb-8 animate-slide-up animate-delay-1">
            <p class="text-lg md:text-xl text-white leading-relaxed">
              בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-2">
            <div class="glass-card p-4">
              <div class="flex items-center gap-3 justify-center">
                <i class="ri-phone-line text-blue-400 text-lg"></i>
                <span class="text-white font-medium">050-1234567</span>
              </div>
            </div>
            <div class="glass-card p-4">
              <div class="flex items-center gap-3 justify-center">
                <i class="ri-mail-line text-blue-400 text-lg"></i>
                <span class="text-white font-medium">info@business.co.il</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up animate-delay-3">
            <button class="btn-base btn-primary">
              <i class="ri-arrow-left-line text-lg"></i>
              צור קשר עכשיו
            </button>
            <button class="btn-base btn-primary">
              <i class="ri-arrow-left-line text-lg"></i>
              קבל הצעת מחיר
            </button>
          </div>

          <div class="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up animate-delay-4">
            ${[
              { icon: 'ri-shield-check-line', title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
              { icon: 'ri-time-line', title: 'מענה מהיר', desc: 'תוך 24 שעות' },
              { icon: 'ri-heart-line', title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
            ].map((badge, index) => `
              <div class="glass-card p-4 text-center">
                <div class="icon-glass mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                  <i class="${badge.icon} text-blue-400 text-lg"></i>
                </div>
                <h3 class="font-semibold text-white mb-1 text-sm">${badge.title}</h3>
                <p class="text-gray-300 text-xs">${badge.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
};

export const generateHtmlFile = (contentWithState: ContentWithState): string => {
  const { content, currentColors, formData, heroImage } = contentWithState;
  const businessName = formData?.businessName || 'העסק שלי';
  
  // Generate hero based on style
  let heroHtml = '';
  let sectionsHtml = '';
  let styleClass = '';
  
  switch (formData.heroStyle) {
    case 'glass':
      heroHtml = generateLiquidGlassHero(content, formData);
      sectionsHtml = generateLiquidGlassSections(content, formData);
      styleClass = 'style-glass';
      break;
    case 'geometric':
      heroHtml = generateGeometricHero(content, formData);
      sectionsHtml = generateDefaultSections(content, formData, 'bg-geometric');
      styleClass = 'style-geometric';
      break;
    case 'metal':
      heroHtml = generateMetalHero(content, formData);
      sectionsHtml = generateDefaultSections(content, formData, 'bg-metal');
      styleClass = 'style-metal';
      break;
    case 'image':
      heroHtml = generateImageHero(content, formData, heroImage);
      sectionsHtml = generateDefaultSections(content, formData, 'bg-image-depth');
      styleClass = 'style-image';
      break;
    default:
      heroHtml = generate3DHero(content, formData);
      sectionsHtml = generateDefaultSections(content, formData, 'bg-3d');
      styleClass = 'style-3d';
      break;
  }

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName} - דף נחיתה מקצועי</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Include all the exact styles from PreviewStyles component */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: #000;
            color: #fff;
            overflow-x: hidden;
        }

        /* Typography Classes */
        .typography-hero { font-family: 'Inter', sans-serif; font-weight: 900; line-height: 1.1; text-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        .typography-modern { font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.025em; }
        .typography-liquid { font-family: 'Inter', sans-serif; font-weight: 600; letter-spacing: -0.02em; text-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        .typography-luxury { font-family: 'Inter', sans-serif; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
        .typography-cinematic { font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.03em; }
        .typography-tech { font-family: 'Inter', sans-serif; font-weight: 600; letter-spacing: -0.01em; }
        .typography-body { font-family: 'Inter', sans-serif; font-weight: 400; line-height: 1.6; }

        /* Hero Section Base */
        .section-hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .container-hero {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Glass Card Effects */
        .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
        }

        .icon-glass {
            background: rgba(59, 130, 246, 0.2);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 12px;
        }

        /* Button Styles */
        .btn-base {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-weight: 600;
            border-radius: 12px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            text-decoration: none;
        }

        .btn-primary {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }

        /* Liquid Glass Styles */
        .liquid-glass-hero {
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #1a1a3e 75%, #0f0f23 100%);
            position: relative;
            overflow: hidden;
        }

        .liquid-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }

        .liquid-orb {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
            filter: blur(40px);
            animation: liquidFloat 6s ease-in-out infinite;
        }

        .liquid-orb-hero-1 {
            width: 300px;
            height: 300px;
            top: -150px;
            left: -150px;
            animation-delay: 0s;
        }

        .liquid-orb-hero-2 {
            width: 200px;
            height: 200px;
            top: 20%;
            right: -100px;
            animation-delay: 2s;
        }

        .liquid-orb-hero-3 {
            width: 250px;
            height: 250px;
            bottom: -125px;
            left: 30%;
            animation-delay: 4s;
        }

        .liquid-orb-hero-4 {
            width: 180px;
            height: 180px;
            top: 60%;
            right: 20%;
            animation-delay: 1s;
        }

        .liquid-waves {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 200px;
            z-index: 2;
        }

        .liquid-wave {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            background: linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.1));
            animation: liquidWave 8s ease-in-out infinite;
        }

        .liquid-wave-1 { animation-delay: 0s; }
        .liquid-wave-2 { animation-delay: 2s; opacity: 0.7; }
        .liquid-wave-3 { animation-delay: 4s; opacity: 0.5; }

        .liquid-hero-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 4rem;
            align-items: center;
            min-height: 100vh;
        }

        @media (min-width: 1024px) {
            .liquid-hero-grid {
                grid-template-columns: 1fr 0.8fr;
            }
        }

        .liquid-content-flow {
            text-align: center;
        }

        @media (min-width: 1024px) {
            .liquid-content-flow {
                text-align: right;
            }
        }

        .liquid-status-orb {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            background: rgba(16, 185, 129, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 50px;
            padding: 0.75rem 1.5rem;
            margin-bottom: 2rem;
            position: relative;
        }

        .liquid-pulse {
            position: absolute;
            right: 0.75rem;
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        .liquid-title-glow {
            background: linear-gradient(135deg, #ffffff, #93c5fd, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 50px rgba(59, 130, 246, 0.5);
        }

        .liquid-subtitle-flow {
            position: relative;
        }

        .liquid-text-orb {
            background: rgba(59, 130, 246, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 20px;
            padding: 2rem;
        }

        .liquid-text-glow {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .liquid-actions-flow {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }

        @media (min-width: 640px) {
            .liquid-actions-flow {
                flex-direction: row;
                justify-content: center;
            }
        }

        @media (min-width: 1024px) {
            .liquid-actions-flow {
                justify-content: flex-start;
            }
        }

        .btn-liquid-glass {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(59, 130, 246, 0.3);
            color: white;
            box-shadow: 0 8px 32px rgba(59, 130, 246, 0.2);
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
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .btn-liquid-glass:hover::before {
            left: 100%;
        }

        .btn-liquid-glass:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(59, 130, 246, 0.3);
        }

        .liquid-features-constellation {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
        }

        @media (min-width: 1024px) {
            .liquid-features-constellation {
                justify-content: flex-start;
            }
        }

        .liquid-feature-orb {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            text-align: center;
        }

        .liquid-feature-glow {
            width: 60px;
            height: 60px;
            background: rgba(59, 130, 246, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
        }

        .liquid-visual-flow {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .liquid-showcase-orb {
            width: 300px;
            height: 300px;
            position: relative;
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

        .liquid-ring-1 {
            inset: 0;
            animation-duration: 20s;
        }

        .liquid-ring-2 {
            inset: 20px;
            animation-duration: 25s;
            animation-direction: reverse;
        }

        .liquid-ring-3 {
            inset: 40px;
            animation-duration: 30s;
        }

        .liquid-center-orb {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(59, 130, 246, 0.4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 50px rgba(59, 130, 246, 0.3);
            position: relative;
            z-index: 10;
        }

        .liquid-stats-bubbles {
            position: absolute;
            inset: 0;
        }

        .liquid-stat-bubble {
            position: absolute;
            width: 120px;
            height: 80px;
            background: rgba(59, 130, 246, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: liquidFloat 4s ease-in-out infinite;
        }

        .liquid-bubble-top-left {
            top: -40px;
            left: -60px;
            animation-delay: 0s;
        }

        .liquid-bubble-top-right {
            top: -40px;
            right: -60px;
            animation-delay: 1s;
        }

        .liquid-bubble-bottom-left {
            bottom: -40px;
            left: -60px;
            animation-delay: 2s;
        }

        .liquid-bubble-bottom-right {
            bottom: -40px;
            right: -60px;
            animation-delay: 3s;
        }

        .liquid-stat-glow {
            text-align: center;
        }

        /* Geometric Styles */
        .geometric-hero {
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #3730a3 50%, #312e81 75%, #1e1b4b 100%);
            position: relative;
        }

        .geometric-shape {
            position: absolute;
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            animation: geometricFloat 8s ease-in-out infinite;
        }

        .geometric-shape:nth-child(1) {
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .geometric-shape:nth-child(2) {
            top: 60%;
            right: 15%;
            animation-delay: 2s;
            clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        }

        .geometric-shape:nth-child(3) {
            bottom: 20%;
            left: 60%;
            animation-delay: 4s;
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .geometric-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 12px;
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
        }

        .geometric-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }

        .btn-geometric {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
            backdrop-filter: blur(16px);
            border: 2px solid rgba(59, 130, 246, 0.3);
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
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
            transition: left 0.5s;
        }

        .btn-geometric:hover::before {
            left: 100%;
        }

        /* Metal Styles */
        .metal-card {
            background: linear-gradient(135deg, #e5e7eb, #f3f4f6, #e5e7eb);
            border: 1px solid #d1d5db;
            box-shadow: 
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1),
                0 4px 8px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .metal-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        }

        .metal-text {
            background: linear-gradient(135deg, #374151, #6b7280, #374151);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .btn-metal {
            background: linear-gradient(135deg, #e5e7eb, #f9fafb, #e5e7eb);
            border: 1px solid #d1d5db;
            color: #374151;
            box-shadow: 
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .btn-metal:hover {
            box-shadow: 
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                0 4px 8px rgba(0, 0, 0, 0.15);
            transform: translateY(-1px);
        }

        /* 3D Background Styles */
        .hero-3d {
            background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0c0c0c 100%);
            position: relative;
        }

        .floating-element {
            position: absolute;
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
            border-radius: 20px;
            animation: float3D 6s ease-in-out infinite;
            transform-style: preserve-3d;
        }

        .floating-element:nth-child(1) {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            top: 60%;
            right: 20%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            bottom: 30%;
            left: 70%;
            animation-delay: 4s;
        }

        /* Background Classes */
        .bg-liquid-glass { background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #1a1a3e 75%, #0f0f23 100%); }
        .bg-liquid-glass-alt { background: linear-gradient(135deg, #1a1a3e 0%, #2d1b69 25%, #0f0f23 50%, #2d1b69 75%, #1a1a3e 100%); }
        .bg-geometric { background: linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #3730a3 50%, #312e81 75%, #1e1b4b 100%); }
        .bg-metal { background: linear-gradient(135deg, #374151 0%, #4b5563 25%, #6b7280 50%, #4b5563 75%, #374151 100%); }
        .bg-3d { background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0c0c0c 100%); }

        /* Animations */
        @keyframes liquidFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes liquidWave {
            0%, 100% { transform: translateX(0) scaleY(1); }
            50% { transform: translateX(10px) scaleY(0.8); }
        }

        @keyframes liquidRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes geometricFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(10deg); }
        }

        @keyframes float3D {
            0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
            50% { transform: translateY(-20px) rotateX(10deg) rotateY(10deg); }
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        @keyframes slide-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }

        /* Animation Classes */
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
        .animate-delay-1 { animation-delay: 0.2s; }
        .animate-delay-2 { animation-delay: 0.4s; }
        .animate-delay-3 { animation-delay: 0.6s; }
        .animate-delay-4 { animation-delay: 0.8s; }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container-hero { padding: 0 1rem; }
            .section-hero { min-height: 80vh; }
            .liquid-hero-grid { gap: 2rem; }
            .liquid-stats-bubbles { display: none; }
        }

        /* Additional Liquid Glass Sections Styles */
        .floating-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 193, 7, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 193, 7, 0.3);
            border-radius: 50px;
            padding: 0.75rem 1.5rem;
        }

        .liquid-glass-panel {
            background: rgba(59, 130, 246, 0.05);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(59, 130, 246, 0.1);
            border-radius: 24px;
        }

        .liquid-glow {
            text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        .floating-subtitle {
            background: rgba(59, 130, 246, 0.05);
            backdrop-filter: blur(16px);
            border-radius: 16px;
            padding: 1rem 2rem;
            display: inline-block;
        }

        .liquid-morph-card {
            background: rgba(59, 130, 246, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 20px;
            padding: 2rem;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .liquid-morph-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }

        .liquid-icon-orb {
            width: 60px;
            height: 60px;
            background: rgba(59, 130, 246, 0.2);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .liquid-ripple {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
            animation: liquidRipple 2s ease-in-out infinite;
        }

        @keyframes liquidRipple {
            0%, 100% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
        }

        .liquid-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .liquid-service-card {
            background: rgba(59, 130, 246, 0.03);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.1);
            border-radius: 16px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.3s ease;
        }

        .liquid-service-card:hover {
            transform: translateY(-2px);
            border-color: rgba(59, 130, 246, 0.3);
        }

        .liquid-check-orb {
            width: 40px;
            height: 40px;
            background: rgba(16, 185, 129, 0.2);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .liquid-timeline {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        @media (min-width: 768px) {
            .liquid-timeline {
                flex-direction: row;
                justify-content: space-between;
            }
        }

        .liquid-timeline-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
        }

        .liquid-step-orb {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .liquid-process-card {
            background: rgba(59, 130, 246, 0.05);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 16px;
            padding: 1.5rem;
            width: 100%;
        }

        .liquid-process-icon {
            width: 50px;
            height: 50px;
            background: rgba(59, 130, 246, 0.1);
            backdrop-filter: blur(12px);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
        }

        .liquid-flow-connector {
            position: absolute;
            top: 30px;
            left: calc(100% + 1rem);
            width: 2rem;
            height: 2px;
            background: linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5));
            display: none;
        }

        @media (min-width: 768px) {
            .liquid-flow-connector {
                display: block;
            }
        }

        .liquid-testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .liquid-testimonial-bubble {
            background: rgba(59, 130, 246, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 20px;
            padding: 2rem;
            position: relative;
        }

        .liquid-quote-orb {
            width: 50px;
            height: 50px;
            background: rgba(59, 130, 246, 0.2);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .liquid-author {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .liquid-avatar {
            width: 40px;
            height: 40px;
            background: rgba(59, 130, 246, 0.2);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .liquid-cta-orb {
            max-width: 4xl;
            margin: 0 auto;
        }

        .liquid-immersion-panel {
            background: rgba(59, 130, 246, 0.05);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(59, 130, 246, 0.1);
            border-radius: 24px;
        }

        .liquid-contact-flow {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
        }

        .liquid-contact-orb {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: rgba(59, 130, 246, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 50px;
            padding: 1rem 1.5rem;
        }

        .liquid-action-flow {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }

        @media (min-width: 640px) {
            .liquid-action-flow {
                flex-direction: row;
                justify-content: center;
            }
        }

        /* Liquid Glass Background Variations */
        .bg-liquid-glass-final {
            background: linear-gradient(135deg, #0f0f23 0%, #2d1b69 50%, #0f0f23 100%);
        }

        .liquid-immersion-bg {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        }

        .liquid-flow-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%);
        }

        .liquid-bubble-field {
            position: absolute;
            inset: 0;
        }

        .liquid-bubble {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent);
            animation: liquidBubbleFloat 8s ease-in-out infinite;
        }

        .liquid-bubble-1 {
            width: 100px;
            height: 100px;
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .liquid-bubble-2 {
            width: 150px;
            height: 150px;
            top: 60%;
            right: 20%;
            animation-delay: 2s;
        }

        .liquid-bubble-3 {
            width: 80px;
            height: 80px;
            bottom: 20%;
            left: 60%;
            animation-delay: 4s;
        }

        .liquid-bubble-4 {
            width: 120px;
            height: 120px;
            top: 30%;
            right: 10%;
            animation-delay: 6s;
        }

        @keyframes liquidBubbleFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
            50% { transform: translateY(-30px) scale(1.1); opacity: 0.8; }
        }
    </style>
</head>
<body class="${styleClass}">
    <div class="w-full min-h-screen relative">
        ${heroHtml}
        
        <!-- Navigation -->
        <nav style="background: rgba(0,0,0,0.5); backdrop-filter: blur(16px); padding: 1rem 0; position: sticky; top: 0; z-index: 50;">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center">
                    <div class="text-white font-bold text-lg">${businessName}</div>
                    <div class="hidden md:flex items-center gap-6">
                        <a href="#about" class="text-white hover:text-blue-400 transition-colors">אודות</a>
                        <a href="#services" class="text-white hover:text-blue-400 transition-colors">שירותים</a>
                        <a href="#testimonials" class="text-white hover:text-blue-400 transition-colors">המלצות</a>
                        <a href="#contact" class="text-white hover:text-blue-400 transition-colors">צור קשר</a>
                    </div>
                    <button class="btn-base btn-primary md:hidden">תפריט</button>
                </div>
            </div>
        </nav>

        ${sectionsHtml}

        <!-- Footer -->
        <footer style="background: rgba(0,0,0,0.5); backdrop-filter: blur(16px); padding: 4rem 0; text-align: center;">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <h3 class="text-2xl font-bold text-white mb-4">${businessName}</h3>
                    <p class="text-gray-400 mb-8">© 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.</p>
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
