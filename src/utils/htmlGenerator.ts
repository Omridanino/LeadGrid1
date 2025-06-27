
import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (content: any, colors: ColorScheme, formData: any, heroImageUrl: string): string => {
  const businessName = formData?.businessName || 'העסק שלי';
  const businessType = formData?.businessType || 'שירותים עסקיים';
  const selectedElements = formData?.selectedElements || [];
  
  // Get the exact same style classes as used in ContentSections
  const getStyleClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'style-geometric';
      case 'glass':
        return 'style-glass';
      case 'metal':
        return 'style-metal';
      case 'image':
        return 'style-image';
      default:
        return 'style-3d';
    }
  };

  const getCardClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'card-geometric';
      case 'glass':
        return 'card-liquid-glass';
      case 'metal':
        return 'card-metal';
      case 'image':
        return 'card-image-depth';
      default:
        return 'card-3d';
    }
  };

  const getBackgroundClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'bg-geometric';
      case 'glass':
        return 'bg-liquid-glass';
      case 'metal':
        return 'bg-metal';
      case 'image':
        return 'bg-image-depth';
      default:
        return 'bg-3d';
    }
  };

  const getButtonClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'btn-geometric';
      case 'glass':
        return 'btn-liquid-glass';
      case 'metal':
        return 'btn-metal';
      case 'image':
        return 'btn-image-depth';
      default:
        return 'btn-3d';
    }
  };

  const getTypographyClass = () => {
    switch (formData.heroStyle) {
      case 'geometric':
        return 'typography-modern';
      case 'glass':
        return 'typography-liquid';
      case 'metal':
        return 'typography-luxury';
      case 'image':
        return 'typography-cinematic';
      default:
        return 'typography-tech';
    }
  };

  // Generate navigation section HTML exactly like NavigationSection component
  const generateNavigationHTML = () => {
    if (formData.navigationStyle === 'dock') {
      return `
        <div class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div class="dock">
            <div class="dock-item">
              <div class="dock-icon">
                <i class="ri-home-line text-2xl"></i>
              </div>
              <div class="dock-label">בית</div>
            </div>
            <div class="dock-item">
              <div class="dock-icon">
                <i class="ri-user-line text-2xl"></i>
              </div>
              <div class="dock-label">אודות</div>
            </div>
            <div class="dock-item">
              <div class="dock-icon">
                <i class="ri-briefcase-line text-2xl"></i>
              </div>
              <div class="dock-label">שירותים</div>
            </div>
            <div class="dock-item">
              <div class="dock-icon">
                <i class="ri-message-square-line text-2xl"></i>
              </div>
              <div class="dock-label">צור קשר</div>
            </div>
          </div>
        </div>
      `;
    }
    return '';
  };

  // Generate content sections using the exact same logic as ContentSections component
  const generateContentSectionsHTML = () => {
    // LIQUID GLASS STYLE - Exact copy from ContentSections
    if (formData.heroStyle === 'glass') {
      return `
        <!-- Liquid Glass Value Proposition - Floating Bubbles Design -->
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

        <!-- Liquid Glass Why Choose Us - Morphing Cards -->
        <section class="py-20 px-4 bg-liquid-glass-alt relative overflow-hidden">
          <div class="liquid-wave"></div>
          
          <div class="container mx-auto max-w-6xl relative z-10">
            <div class="text-center mb-16">
              <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                למה לבחור בנו?
              </h2>
              <div class="floating-subtitle">
                <p class="typography-liquid text-xl text-blue-200">
                  הסיבות הנוזליות שעושות אותנו שונים
                </p>
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
                  <h3 class="typography-liquid text-2xl font-bold mb-4 text-white liquid-text-glow">
                    ${reason.title}
                  </h3>
                  <p class="typography-liquid text-blue-200 leading-relaxed">
                    ${reason.description}
                  </p>
                  <div class="liquid-ripple"></div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Liquid Glass Services - Flowing Grid -->
        <section class="py-20 px-4 bg-liquid-glass relative overflow-hidden">
          <div class="liquid-flow-bg"></div>
          
          <div class="container mx-auto max-w-6xl relative z-10">
            <div class="text-center mb-16">
              <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                השירותים הנוזליים שלנו
              </h2>
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
                  <h3 class="typography-liquid text-xl font-bold text-white mb-3 liquid-text-glow">
                    ${service.title}
                  </h3>
                  <p class="typography-liquid text-blue-200 text-sm leading-relaxed">
                    ${service.description}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Liquid Glass Process - Flowing Timeline -->
        <section class="py-20 px-4 bg-liquid-glass-alt relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
              <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                תהליך העבודה הנוזלי
              </h2>
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
                    <h3 class="typography-liquid text-xl font-bold text-white mb-3 liquid-text-glow">
                      ${process.title}
                    </h3>
                    <p class="typography-liquid text-blue-200 leading-relaxed">
                      ${process.desc}
                    </p>
                  </div>
                  ${index < 3 ? '<div class="liquid-flow-connector"></div>' : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Liquid Glass Testimonials - Floating Bubbles -->
        <section class="py-20 px-4 bg-liquid-glass relative overflow-hidden">
          <div class="liquid-bubble-field">
            <div class="liquid-bubble liquid-bubble-1"></div>
            <div class="liquid-bubble liquid-bubble-2"></div>
            <div class="liquid-bubble liquid-bubble-3"></div>
            <div class="liquid-bubble liquid-bubble-4"></div>
          </div>
          
          <div class="container mx-auto max-w-6xl relative z-10">
            <div class="text-center mb-16">
              <h2 class="typography-liquid text-5xl md:text-7xl font-black mb-8 text-white liquid-glow">
                חוויות נוזליות
              </h2>
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
                  
                  <p class="typography-liquid leading-relaxed text-white mb-6 liquid-text-glow italic">
                    "${testimonial.content}"
                  </p>
                  
                  <div class="liquid-author">
                    <div class="liquid-avatar">
                      <i class="ri-user-line text-blue-300 text-lg"></i>
                    </div>
                    <div>
                      <p class="typography-liquid font-bold text-white">
                        ${testimonial.name}
                      </p>
                      ${testimonial.role ? `
                        <p class="typography-liquid text-xs text-blue-200">
                          ${testimonial.role}
                        </p>
                      ` : ''}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Liquid Glass CTA - Immersive Experience -->
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
    }

    // IMAGE STYLE - Exact copy from ContentSections
    if (formData.heroStyle === 'image') {
      return `
        <!-- Image Style Value Proposition - Cinematic Parallax -->
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

        <!-- Image Style Why Choose Us - Depth Cards -->
        <section class="py-20 px-4 bg-image-depth-alt relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
              <h2 class="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                הייחודיות שלנו
              </h2>
              <div class="cinematic-subtitle">
                <p class="typography-cinematic text-xl text-gray-300">
                  העומק והחדות שעושים את ההבדל
                </p>
              </div>
            </div>
            
            <div class="depth-cards-grid">
              ${(content?.sections?.whyUs?.reasons || [
                { title: "עומק ויזואלי מרהיב", description: "חוויה תלת-מימדית שמביאה את התוכן לחיים בצורה מדהימה" },
                { title: "פרספקטיבה ייחודית", description: "זווית ראייה חדשה שמציגה את השירות בצורה בלתי נשכחת" },
                { title: "איכות קולנועית", description: "רמת הפקה גבוהה שמתאימה לסטנדרטים המחמירים ביותר" },
                { title: "התחושה האמיתית", description: "חוויה אותנטית ומרגשת שנשארת בזיכרון לאורך זמן" }
              ]).map((reason: any) => `
                <div class="depth-card">
                  <div class="depth-card-inner">
                    <div class="depth-icon-frame">
                      <i class="ri-award-line text-yellow-400 text-3xl"></i>
                    </div>
                    <h3 class="typography-cinematic text-2xl font-bold mb-4 text-white cinematic-glow">
                      ${reason.title}
                    </h3>
                    <p class="typography-cinematic text-gray-300 leading-relaxed">
                      ${reason.description}
                    </p>
                  </div>
                  <div class="depth-shadow"></div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Image Style Services - Layered Showcase -->
        <section class="py-20 px-4 bg-image-depth relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
              <h2 class="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                השירותים המרהיבים שלנו
              </h2>
            </div>
            
            <div class="layered-services">
              ${(content?.sections?.whatWeGive?.services || [
                { title: "יצירה קולנועית", description: "הפקת תוכן ברמה קולנועית עם עומק וחדות מקסימלית" },
                { title: "עיצוב ממוקד", description: "פתרונות ויזואליים שמשלבים אסתטיקה עם פונקציונליות" },
                { title: "ליווי מקצועי", description: "הנחיה מומחית לאורך כל תהליך הפקת התוכן" },
                { title: "תוצאות מרהיבות", description: "הישגים ויזואליים שעוצרים את הנשימה" }
              ]).map((service: any) => `
                <div class="layered-service-item">
                  <div class="service-depth-frame">
                    <div class="service-icon-3d">
                      <i class="ri-check-circle-line text-green-400 text-2xl"></i>
                    </div>
                    <div class="service-content">
                      <h3 class="typography-cinematic text-xl font-bold text-white mb-3 cinematic-glow">
                        ${service.title}
                      </h3>
                      <p class="typography-cinematic text-gray-300 leading-relaxed">
                        ${service.description}
                      </p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Image Style Process - Cinematic Timeline -->
        <section class="py-20 px-4 bg-image-depth-alt relative overflow-hidden">
          <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
              <h2 class="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                תהליך הפקה קולנועי
              </h2>
            </div>
            
            <div class="cinematic-timeline">
              ${[
                { step: 1, title: "חזון ויזואלי", desc: "הגדרת הרעיון והחזון האסתטי", icon: "ri-eye-line" },
                { step: 2, title: "תכנון הפקה", desc: "עיצוב מפורט של כל שלבי הביצוע", icon: "ri-file-paper-line" },
                { step: 3, title: "יצירה והפקה", desc: "ביצוע מקצועי ברמה קולנועית", icon: "ri-camera-line" },
                { step: 4, title: "עיבוד וליטוש", desc: "שיפור וליטוש לתוצאה מושלמת", icon: "ri-diamond-line" }
              ].map((process) => `
                <div class="cinematic-process-frame">
                  <div class="process-number-3d">
                    <span class="typography-cinematic font-bold text-2xl text-white">${process.step}</span>
                  </div>
                  <div class="process-card-3d">
                    <div class="process-icon-showcase">
                      <i class="${process.icon} text-blue-400 text-4xl"></i>
                    </div>
                    <h3 class="typography-cinematic text-2xl font-bold text-white mb-4 cinematic-glow">
                      ${process.title}
                    </h3>
                    <p class="typography-cinematic text-gray-300 leading-relaxed">
                      ${process.desc}
                    </p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Image Style Testimonials - Spotlight Gallery -->
        <section class="py-20 px-4 bg-image-depth relative overflow-hidden">
          <div class="spotlight-overlay"></div>
          
          <div class="container mx-auto max-w-6xl relative z-10">
            <div class="text-center mb-16">
              <h2 class="typography-cinematic text-5xl md:text-7xl font-black mb-8 text-white cinematic-glow">
                ביקורות מרהיבות
              </h2>
            </div>
            
            <div class="spotlight-gallery">
              ${(content?.sections?.testimonials || [
                { name: "דני כהן", role: "במאי וידאו", content: `העבודה עם ${businessName} הייתה חוויה קולנועית אמיתית - כל פרט מושלם.` },
                { name: "שרה לוי", role: "מעצבת גרפית", content: `הרמה הוויזואלית פשוט מדהימה. כל פרויקט הופך ליצירת אמנות.` },
                { name: "מיכל רוזן", role: "מפיקה", content: "המקצועיות והיצירתיות שלהם מביאות תוצאות שעוצרות את הנשימה." }
              ]).map((testimonial: any) => `
                <div class="spotlight-card">
                  <div class="spotlight-beam"></div>
                  <div class="testimonial-frame-3d">
                    <div class="quote-icon-3d">
                      <i class="ri-double-quotes-l text-yellow-400 text-2xl"></i>
                    </div>
                    
                    <p class="typography-cinematic text-lg leading-relaxed text-white mb-6 cinematic-glow italic">
                      "${testimonial.content}"
                    </p>
                    
                    <div class="author-showcase">
                      <div class="author-avatar-3d">
                        <i class="ri-user-3-line text-blue-400 text-3xl"></i>
                      </div>
                      <div>
                        <p class="typography-cinematic text-xl font-bold text-white cinematic-glow">
                          ${testimonial.name}
                        </p>
                        ${testimonial.role ? `
                          <p class="typography-cinematic text-sm text-gray-400">
                            ${testimonial.role}
                          </p>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Image Style CTA - Epic Finale -->
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
                <button class="btn-base btn-image-depth">
                  <i class="ri-arrow-left-line text-lg"></i>
                  התחילו את הפרויקט
                </button>
                <button class="btn-base btn-image-depth">
                  <i class="ri-arrow-left-line text-lg"></i>
                  גלו את האפשרויות
                </button>
              </div>
            </div>
          </div>
        </section>
      `;
    }

    // Default styles (geometric, metal, and 3d) - Exact copy from ContentSections
    return `
      <!-- Value Proposition Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
        <div class="container mx-auto max-w-6xl">
          <div class="text-center">
            <h2 class="${getTypographyClass()} text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up">
              ${content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
            </h2>
            <div class="${getCardClass()} p-8 animate-slide-up animate-delay-1">
              <p class="typography-body text-lg md:text-xl leading-relaxed text-white">
                ${content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${businessType}.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
        <div class="container mx-auto max-w-6xl">
          <div class="text-center mb-12 animate-slide-up">
            <h2 class="${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white">
              ${content?.sections?.whyUs?.title || "למה כדאי לבחור דווקא בנו?"}
            </h2>
            <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${(content?.sections?.whyUs?.reasons || [
              { title: "שירות מקצועי ברמה הגבוהה", description: "צוות מנוסה עם מומחיות מוכחת ושנות ניסיון רבות" },
              { title: "זמינות ומהירות בשירות", description: "מענה מהיר ויעיל לכל פנייה תוך זמן קצר" },
              { title: "יחס אישי ומסור", description: "טיפול אישי בכל לקוח ופרויקט - אתם חשובים לנו" },
              { title: "מחירים הוגנים ושקופים", description: "תמחור ברור ללא הפתעות או עלויות נסתרות" }
            ]).map((reason: any, index: number) => `
              <div class="${getCardClass()} p-6 text-center animate-scale-in animate-delay-${index + 1}">
                <div class="icon-${formData.heroStyle || '3d'} mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <i class="ri-trophy-line text-yellow-400 text-2xl"></i>
                </div>
                <h3 class="${getTypographyClass()} text-lg font-bold mb-3 text-white">
                  ${reason.title}
                </h3>
                <p class="typography-body text-gray-300 leading-relaxed text-sm">
                  ${reason.description}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
        <div class="container mx-auto max-w-6xl">
          <div class="text-center mb-12 animate-slide-up">
            <h2 class="${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white">
              ${content?.sections?.whatWeGive?.title || "מה אתם מקבלים מאיתנו"}
            </h2>
            <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            ${(content?.sections?.whatWeGive?.services || [
              { title: "שירות מותאם אישית", description: "פתרונות מותאמים בדיוק לצרכים הייחודיים שלכם" },
              { title: "איכות ללא פשרות", description: "רמת שירות גבוהה ועקבית בכל שלב מהתהליך" },
              { title: "ליווי מלא", description: "תמיכה צמודה לאורך כל התהליך מההתחלה ועד הסוף" },
              { title: "תוצאות מוכחות", description: "הישגים קונקרטיים ומדידים שאתם יכולים לראות" }
            ]).map((service: any, index: number) => `
              <div class="${getCardClass()} p-6 animate-slide-up animate-delay-${index + 1}">
                <div class="flex items-start gap-4 mb-4">
                  <div class="icon-${formData.heroStyle || '3d'} w-8 h-8 flex items-center justify-center">
                    <i class="ri-check-line text-green-400 text-xl"></i>
                  </div>
                  <div>
                    <h3 class="${getTypographyClass()} text-lg font-bold text-white mb-2">
                      ${service.title}
                    </h3>
                    <p class="typography-body text-gray-300 leading-relaxed text-sm">
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
        <div class="container mx-auto max-w-6xl">
          <div class="text-center mb-12 animate-slide-up">
            <h2 class="${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white">
              <i class="ri-laptop-line text-blue-400 text-3xl ml-3"></i>
              תהליך העבודה שלנו
            </h2>
            <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${[
              { step: 1, title: "ניתוח צרכים", desc: "בדיקה מעמיקה של הדרישות והמטרות שלכם", icon: "ri-target-line" },
              { step: 2, title: "תכנון אסטרטגי", desc: "עיצוב תוכנית עבודה מותאמת אישית", icon: "ri-lightbulb-line" },
              { step: 3, title: "ביצוע מקצועי", desc: "יישום הפתרון ברמה הגבוהה ביותר", icon: "ri-settings-line" },
              { step: 4, title: "מעקב ותמיכה", desc: "ליווי מתמשך ושיפורים נוספים", icon: "ri-rocket-line" }
            ].map((process, index) => `
              <div class="${getCardClass()} text-center p-6 animate-scale-in animate-delay-${index + 1}">
                <div class="relative mb-6">
                  <div class="icon-${formData.heroStyle || '3d'} mx-auto w-12 h-12 flex items-center justify-center">
                    <i class="${process.icon} text-blue-400 text-xl"></i>
                  </div>
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    ${process.step}
                  </div>
                </div>
                <h3 class="${getTypographyClass()} text-lg font-bold mb-3 text-white">
                  ${process.title}
                </h3>
                <p class="typography-body text-gray-300 leading-relaxed text-sm">
                  ${process.desc}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
        <div class="container mx-auto max-w-6xl">
          <div class="text-center mb-12 animate-slide-up">
            <h2 class="${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white">
              מה הלקוחות שלנו אומרים
            </h2>
            <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              עדויות אמיתיות מלקוחות מרוצים
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            ${(content?.sections?.testimonials || [
              { name: "דני כהן", role: "מנהל עסק", content: `השירות של ${businessName} פשוט מעולה! הצוות המקצועי והיחס האישי עשו את כל ההבדל.` },
              { name: "שרה לוי", role: "יזמת", content: `עבדנו עם ${businessName} על מספר פרויקטים והתוצאות תמיד מעולות. מקצועיות ברמה אחרת!` },
              { name: "מיכל רוזן", role: "בעלת חנות", content: "הליווי והתמיכה שקיבלתי היו פשוט מדהימים. השירות החרג מכל הציפיות!" }
            ]).map((testimonial: any, index: number) => `
              <div class="${getCardClass()} p-6 animate-scale-in animate-delay-${index + 1}">
                <div class="flex mb-4">
                  ${Array(5).fill(0).map(() => '<i class="ri-star-fill text-yellow-400 text-sm"></i>').join('')}
                </div>
                
                <i class="ri-chat-quote-line text-blue-400 text-xl mb-3 block"></i>
                
                <p class="typography-body leading-relaxed text-white mb-4 italic text-sm">
                  "${testimonial.content}"
                </p>
                
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <i class="ri-user-line text-white text-lg"></i>
                  </div>
                  <div>
                    <p class="${getTypographyClass()} font-bold text-white text-sm">
                      ${testimonial.name}
                    </p>
                    ${testimonial.role ? `
                      <p class="typography-body text-xs text-gray-400">
                        ${testimonial.role}
                      </p>
                    ` : ''}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 px-4 ${getBackgroundClass()}">
        <div class="container mx-auto max-w-6xl">
          <div class="text-center mb-12 animate-slide-up">
            <h2 class="${getTypographyClass()} text-4xl md:text-5xl font-black mb-6 text-white">
              שאלות נפוצות
            </h2>
            <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
              תשובות לשאלות הנפוצות ביותר
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            ${[
              { question: "כמה זמן לוקח התהליך?", answer: "התהליך נע בין שבוע לחודש, תלוי במורכבות הפרויקט והדרישות הספציפיות שלכם." },
              { question: "איך הגישה שלכם שונה?", answer: "אנחנו מתמחים בפתרונות מותאמים אישית ובליווי צמוד לאורך כל התהליך." },
              { question: "מה כלול במחיר?", answer: "המחיר כולל את כל השירותים הבסיסיים, ליווי מלא ותמיכה לאחר הפרויקט." },
              { question: "איך מתחילים?", answer: "פשוט צרו קשר איתנו לייעוץ ראשוני חינמי ובחינת האפשרויות המתאימות לכם." }
            ].map((faq, index) => `
              <div class="${getCardClass()} p-6 animate-slide-up animate-delay-${index + 1}">
                <h3 class="${getTypographyClass()} text-lg font-bold mb-3 text-white">
                  ${faq.question}
                </h3>
                <p class="typography-body text-gray-300 leading-relaxed text-sm">
                  ${faq.answer}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Enhanced CTA Section -->
      <section class="py-16 px-4 ${getBackgroundClass()} relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        
        <div class="container mx-auto max-w-6xl text-center relative z-10">
          <div class="max-w-4xl mx-auto">
            <h2 class="${getTypographyClass()} text-4xl md:text-5xl font-black mb-8 text-white animate-slide-up">
              ${content?.contactTitle || 'מוכנים להתחיל?'}
            </h2>
            
            <div class="${getCardClass()} p-6 mb-8 animate-slide-up animate-delay-1">
              <p class="typography-body text-lg md:text-xl text-white leading-relaxed">
                בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 animate-slide-up animate-delay-2">
              <div class="${getCardClass()} p-4">
                <div class="flex items-center gap-3 justify-center">
                  <i class="ri-phone-line text-blue-400 text-lg"></i>
                  <span class="typography-body text-white font-medium">050-1234567</span>
                </div>
              </div>
              <div class="${getCardClass()} p-4">
                <div class="flex items-center gap-3 justify-center">
                  <i class="ri-mail-line text-blue-400 text-lg"></i>
                  <span class="typography-body text-white font-medium">info@business.co.il</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up animate-delay-3">
              <button class="btn-base ${getButtonClass()}">
                <i class="ri-arrow-left-line text-lg"></i>
                צור קשר עכשיו
              </button>
              <button class="btn-base ${getButtonClass()}">
                <i class="ri-arrow-left-line text-lg"></i>
                קבל הצעת מחיר
              </button>
            </div>

            <!-- Enhanced Trust Badges -->
            <div class="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up animate-delay-4">
              ${[
                { icon: 'ri-shield-check-line', title: 'מוגן ומאובטח', desc: 'ביטחון מלא' },
                { icon: 'ri-time-line', title: 'מענה מהיר', desc: 'תוך 24 שעות' },
                { icon: 'ri-heart-line', title: 'ללא התחייבות', desc: 'ייעוץ חינם' }
              ].map((badge, index) => `
                <div class="${getCardClass()} p-4 text-center">
                  <div class="icon-${formData.heroStyle || '3d'} mx-auto mb-2 w-8 h-8 flex items-center justify-center">
                    <i class="${badge.icon} text-blue-400 text-lg"></i>
                  </div>
                  <h3 class="${getTypographyClass()} font-semibold text-white mb-1 text-sm">
                    ${badge.title}
                  </h3>
                  <p class="typography-body text-gray-300 text-xs">
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

  // Get all the CSS from PreviewStyles.tsx (this needs to be included for proper styling)
  const getAllStyles = () => {
    return `
      <style>
        /* Base styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          direction: rtl;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Typography Classes */
        .typography-tech {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          letter-spacing: -0.02em;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .typography-modern {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .typography-luxury {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .typography-liquid {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .typography-cinematic {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .typography-body {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          line-height: 1.7;
        }

        /* 3D Style */
        .style-3d {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-3d {
          background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
          position: relative;
        }

        .card-3d {
          background: linear-gradient(145deg, #1e293b, #334155);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(148, 163, 184, 0.1);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .card-3d:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 12px 48px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(148, 163, 184, 0.2);
        }

        .btn-3d {
          background: linear-gradient(145deg, #3b82f6, #1d4ed8);
          border: none;
          border-radius: 12px;
          color: white;
          padding: 12px 24px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
        }

        .btn-3d:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
        }

        .icon-3d {
          background: linear-gradient(145deg, #374151, #4b5563);
          border-radius: 12px;
          border: 1px solid rgba(156, 163, 175, 0.2);
        }

        /* Geometric Style */
        .style-geometric {
          background: linear-gradient(45deg, #111827 0%, #1f2937 25%, #374151 50%, #1f2937 75%, #111827 100%);
          background-size: 400% 400%;
          animation: geometricShift 20s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }

        @keyframes geometricShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .bg-geometric {
          background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%);
          position: relative;
        }

        .card-geometric {
          background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
          border: 2px solid transparent;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .card-geometric::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
        }

        .btn-geometric {
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          border: none;
          border-radius: 8px;
          color: white;
          padding: 12px 24px;
          font-weight: 600;
          cursor: pointer;
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

        .icon-geometric {
          background: linear-gradient(45deg, #374151, #4b5563);
          border-radius: 8px;
          border: 1px solid #06b6d4;
        }

        /* Glass Style */
        .style-glass {
          background: radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
                      linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-liquid-glass {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.9) 0%,
            rgba(30, 41, 59, 0.8) 25%,
            rgba(51, 65, 85, 0.7) 50%,
            rgba(30, 41, 59, 0.8) 75%,
            rgba(15, 23, 42, 0.9) 100%
          );
          backdrop-filter: blur(20px);
          position: relative;
        }

        .bg-liquid-glass-alt {
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.9) 0%,
            rgba(51, 65, 85, 0.8) 50%,
            rgba(71, 85, 105, 0.7) 100%
          );
          backdrop-filter: blur(16px);
          position: relative;
        }

        .bg-liquid-glass-final {
          background: radial-gradient(circle at center, 
            rgba(59, 130, 246, 0.2) 0%,
            rgba(139, 92, 246, 0.1) 30%,
            rgba(15, 23, 42, 0.9) 70%
          );
          backdrop-filter: blur(24px);
          position: relative;
        }

        .card-liquid-glass {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .liquid-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, 
            rgba(59, 130, 246, 0.3) 0%,
            rgba(139, 92, 246, 0.2) 50%,
            transparent 100%
          );
          animation: liquidFloat 15s ease-in-out infinite;
        }

        .liquid-orb-1 {
          width: 300px;
          height: 300px;
          top: -150px;
          left: -100px;
          animation-delay: 0s;
        }

        .liquid-orb-2 {
          width: 200px;
          height: 200px;
          top: 50%;
          right: -100px;
          animation-delay: -5s;
        }

        .liquid-orb-3 {
          width: 150px;
          height: 150px;
          bottom: -75px;
          left: 30%;
          animation-delay: -10s;
        }

        @keyframes liquidFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }

        .floating-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
          animation: floatingBadge 3s ease-in-out infinite;
        }

        @keyframes floatingBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .liquid-glow {
          text-shadow: 
            0 0 20px rgba(59, 130, 246, 0.5),
            0 0 40px rgba(139, 92, 246, 0.3),
            0 0 60px rgba(6, 182, 212, 0.2);
        }

        .liquid-text-glow {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .liquid-glass-panel {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
        }

        .liquid-morph-card {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .liquid-morph-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.08) 100%
          );
        }

        .liquid-icon-orb {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, 
            rgba(59, 130, 246, 0.3) 0%,
            rgba(139, 92, 246, 0.2) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-liquid-glass {
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.8) 0%,
            rgba(139, 92, 246, 0.6) 100%
          );
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: white;
          padding: 12px 28px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-liquid-glass:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.9) 0%,
            rgba(139, 92, 246, 0.7) 100%
          );
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
        }

        /* Metal Style */
        .style-metal {
          background: linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 25%, #404040 50%, #2d2d2d 75%, #1c1c1c 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-metal {
          background: linear-gradient(135deg, #2d2d2d 0%, #404040 50%, #525252 100%);
          position: relative;
        }

        .card-metal {
          background: linear-gradient(145deg, #404040, #525252);
          border: 1px solid #666666;
          border-radius: 12px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .card-metal::before {
          content: '';
          position: absolute;
          inset: 1px;
          background: linear-gradient(145deg, #4a4a4a, #383838);
          border-radius: 11px;
          z-index: -1;
        }

        .btn-metal {
          background: linear-gradient(145deg, #666666, #404040);
          border: 1px solid #808080;
          border-radius: 8px;
          color: white;
          padding: 12px 24px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .btn-metal:hover {
          background: linear-gradient(145deg, #707070, #4a4a4a);
          transform: translateY(-1px);
        }

        .icon-metal {
          background: linear-gradient(145deg, #525252, #404040);
          border-radius: 8px;
          border: 1px solid #666666;
        }

        /* Image Style */
        .style-image {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-image-depth {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #3a3a3a 100%);
          position: relative;
        }

        .bg-image-depth-alt {
          background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 50%, #4a4a4a 100%);
          position: relative;
        }

        .bg-image-depth-finale {
          background: radial-gradient(circle at center, 
            rgba(59, 130, 246, 0.1) 0%,
            rgba(139, 92, 246, 0.05) 30%,
            rgba(10, 10, 10, 0.95) 70%
          );
          position: relative;
        }

        .card-image-depth {
          background: linear-gradient(145deg, #2a2a2a, #3a3a3a);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .cinematic-glow {
          text-shadow: 
            0 0 30px rgba(59, 130, 246, 0.4),
            0 0 60px rgba(139, 92, 246, 0.2),
            0 0 90px rgba(6, 182, 212, 0.1);
        }

        .cinematic-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 0.75rem 1.5rem;
        }

        .cinematic-panel {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.3) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }

        .btn-image-depth {
          background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          padding: 12px 28px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .btn-image-depth:hover {
          transform: translateY(-2px);
          background: linear-gradient(145deg, #4a4a4a, #3a3a3a);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
        }

        /* Button Base */
        .btn-base {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-family: inherit;
          font-size: 1rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out; }

        .animate-delay-1 { animation-delay: 0.1s; }
        .animate-delay-2 { animation-delay: 0.2s; }
        .animate-delay-3 { animation-delay: 0.3s; }
        .animate-delay-4 { animation-delay: 0.4s; }

        /* Responsive */
        @media (max-width: 768px) {
          .container { padding: 0 1rem; }
          .grid { grid-template-columns: 1fr; }
          .md\\:grid-cols-2 { grid-template-columns: 1fr; }
          .md\\:grid-cols-3 { grid-template-columns: 1fr; }
          .lg\\:grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
          .text-4xl, .text-5xl { font-size: 2rem; }
          .text-6xl, .text-7xl, .text-8xl { font-size: 2.5rem; }
        }

        /* Dock Styles */
        .dock {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 1rem 1.5rem;
        }

        .dock-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dock-item:hover {
          transform: translateY(-4px);
        }

        .dock-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(145deg, #374151, #4b5563);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .dock-item:hover .dock-icon {
          background: linear-gradient(145deg, #3b82f6, #1d4ed8);
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
        }

        .dock-label {
          font-size: 0.75rem;
          color: white;
          font-weight: 500;
        }

        /* Utility Classes */
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .text-right { text-align: right; }
        
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-16 { margin-bottom: 4rem; }

        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .p-10 { padding: 2.5rem; }

        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }

        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }

        .grid { display: grid; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }

        .relative { position: relative; }
        .absolute { position: absolute; }
        .fixed { position: fixed; }

        .z-10 { z-index: 10; }
        .z-50 { z-index: 50; }

        .overflow-hidden { overflow: hidden; }

        .rounded-full { border-radius: 9999px; }

        .text-white { color: #ffffff; }
        .text-gray-300 { color: #d1d5db; }
        .text-gray-400 { color: #9ca3af; }
        .text-blue-200 { color: #bfdbfe; }
        .text-blue-300 { color: #93c5fd; }
        .text-blue-400 { color: #60a5fa; }
        .text-green-400 { color: #4ade80; }
        .text-yellow-400 { color: #facc15; }

        .text-xs { font-size: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-5xl { font-size: 3rem; }
        .text-6xl { font-size: 3.75rem; }
        .text-7xl { font-size: 4.5rem; }
        .text-8xl { font-size: 6rem; }

        .font-bold { font-weight: 700; }
        .font-black { font-weight: 900; }
        .font-semibold { font-weight: 600; }
        .font-medium { font-weight: 500; }

        .leading-relaxed { line-height: 1.625; }

        .max-w-2xl { max-width: 42rem; }
        .max-w-3xl { max-width: 48rem; }
        .max-w-4xl { max-width: 56rem; }
        .max-w-6xl { max-width: 72rem; }

        .mx-auto { margin-left: auto; margin-right: auto; }

        .w-8 { width: 2rem; }
        .w-10 { width: 2.5rem; }
        .w-12 { width: 3rem; }
        .h-8 { height: 2rem; }
        .h-10 { height: 2.5rem; }
        .h-12 { height: 3rem; }

        .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
        .from-blue-500 { --tw-gradient-from: #3b82f6; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0)); }
        .to-purple-500 { --tw-gradient-to: #8b5cf6; }

        .italic { font-style: italic; }

        /* Grid responsive classes */
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .md\\:text-xl { font-size: 1.25rem; }
          .md\\:text-2xl { font-size: 1.5rem; }
          .md\\:text-5xl { font-size: 3rem; }
          .md\\:text-7xl { font-size: 4.5rem; }
          .md\\:text-8xl { font-size: 6rem; }
        }

        @media (min-width: 1024px) {
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        /* Responsive flex */
        @media (min-width: 640px) {
          .sm\\:flex-row { flex-direction: row; }
        }
      </style>
    `;
  };

  // Generate the complete HTML
  return `
    <!DOCTYPE html>
    <html lang="he" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${businessName} - ${businessType}</title>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet">
      ${getAllStyles()}
    </head>
    <body>
      <div class="w-full h-full ${getStyleClass()}" style="overflow-y: auto; overflow-x: hidden; scroll-behavior: smooth; position: relative;">
        
        <!-- Hero Section -->
        <section class="hero-section min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden ${getStyleClass()}">
          ${heroImageUrl ? `
            <div class="absolute inset-0 z-0">
              <img src="${heroImageUrl}" alt="Hero Background" class="w-full h-full object-cover opacity-30" />
              <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
            </div>
          ` : ''}
          
          <div class="container mx-auto max-w-6xl text-center relative z-10">
            <h1 class="${getTypographyClass()} text-5xl md:text-7xl font-black mb-8 text-white animate-fade-in">
              ${content?.hero?.title || `ברוכים הבאים ל${businessName}`}
            </h1>
            <p class="typography-body text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              ${content?.hero?.subtitle || `השירות המקצועי ביותר בתחום ${businessType} - כאן בשבילכם 24/7`}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
              <button class="btn-base ${getButtonClass()}">
                <i class="ri-arrow-left-line text-lg"></i>
                צור קשר עכשיו
              </button>
              <button class="btn-base ${getButtonClass()}">
                <i class="ri-phone-line text-lg"></i>
                התקשר: 050-1234567
              </button>
            </div>
          </div>
        </section>

        <!-- Navigation -->
        ${generateNavigationHTML()}

        <!-- Content Sections -->
        ${generateContentSectionsHTML()}

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
    </html>
  `;
};
