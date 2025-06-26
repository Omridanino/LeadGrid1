import { ColorScheme } from "@/components/ColorEditor";

export const generateHtmlFile = (
  content: any,
  colors: ColorScheme,
  formData: any,
  heroImageUrl?: string
): string => {
  const businessName = formData?.businessName || content?.headline || "העסק שלי";
  const subheadline = content?.subheadline || `השירותים המקצועיים ביותר ל${formData?.targetAudience || "לקוחות"}`;
  const ctaText = content?.cta || "בואו נתחיל לעבוד יחד";

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

  const getStyleClass = () => {
    switch (formData?.heroStyle) {
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
    switch (formData?.heroStyle) {
      case 'geometric':
        return 'card-geometric';
      case 'glass':
        return 'card-glass';
      case 'metal':
        return 'card-metal';
      case 'image':
        return 'card-image';
      default:
        return 'card-3d';
    }
  };

  const getButtonClass = () => {
    switch (formData?.heroStyle) {
      case 'geometric':
        return 'btn-geometric';
      case 'glass':
        return 'btn-glass';
      case 'metal':
        return 'btn-metal';
      case 'image':
        return 'btn-image';
      default:
        return 'btn-3d';
    }
  };

  const getTypographyClass = () => {
    switch (formData?.heroStyle) {
      case 'geometric':
        return 'typography-modern';
      case 'glass':
        return 'typography-modern';
      case 'metal':
        return 'typography-luxury';
      case 'image':
        return 'typography-modern';
      default:
        return 'typography-tech';
    }
  };

  const getHeroBackground = () => {
    if (formData?.heroStyle === 'image') {
      const imageUrl = heroImageUrl || getBusinessImage(formData.businessType);
      return `background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('${imageUrl}'); background-size: cover; background-position: center; background-attachment: fixed;`;
    }
    return '';
  };

  // צריך להכליל את כל ה-CSS מ-PreviewStyles.tsx בדיוק
  const getCSSStyles = () => `
    /* Professional Typography System */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

    :root {
      --gradient-3d: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%);
      --gradient-geometric: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #f9ca24 75%, #ff6b6b 100%);
      --gradient-glass: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.9) 100%);
      --gradient-metal: linear-gradient(135deg, #2c1810 0%, #8b7355 25%, #c9aa7c 50%, #f4e4bc 75%, #8b7355 100%);
      --gradient-image: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      direction: rtl;
    }

    /* Typography Classes */
    .typography-hero {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.04em;
    }

    .typography-luxury {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    .typography-modern {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: -0.01em;
    }

    .typography-tech {
      font-family: 'Orbitron', monospace;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: 0.02em;
    }

    .typography-body {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      letter-spacing: -0.005em;
    }

    /* Style Classes */
    .style-3d {
      background: var(--gradient-3d);
      position: relative;
      overflow: hidden;
    }

    .style-geometric {
      background: linear-gradient(45deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #e94560 75%, #0f0f23 100%);
      background-size: 400% 400%;
      animation: geometricFlow 15s ease infinite;
    }

    .style-glass {
      background: var(--gradient-glass);
      position: relative;
      overflow: hidden;
    }

    .style-metal {
      background: var(--gradient-metal);
      position: relative;
      overflow: hidden;
    }

    .style-image {
      position: relative;
      ${getHeroBackground()}
    }

    /* Card Classes - זהה למה שב-PreviewStyles */
    .card-3d {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 1rem;
      box-shadow: 0 25px 50px rgba(0,0,0,0.8), 0 12px 25px rgba(59, 130, 246, 0.3);
    }

    .card-geometric {
      background: linear-gradient(135deg, rgba(233, 69, 96, 0.2) 0%, rgba(78, 205, 196, 0.2) 100%);
      border: 2px solid;
      border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24) 1;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
    }

    .card-glass {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1.5rem;
    }

    .card-metal {
      background: linear-gradient(135deg, #c9aa7c 0%, #f4e4bc 25%, #c9aa7c 50%, #8b7355 75%, #f4e4bc 100%);
      background-size: 200% 200%;
      border-radius: 1.5rem;
      animation: metalFlow 12s ease infinite;
    }

    .card-image {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 1rem;
    }

    /* Button Classes */
    .btn-base {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5;
      transition: all 0.3s ease;
      cursor: pointer;
      border: none;
      text-decoration: none;
      color: white;
    }

    .btn-3d {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      border: 1px solid rgba(59, 130, 246, 0.5);
      box-shadow: 0 25px 50px rgba(0,0,0,0.8), 0 12px 25px rgba(59, 130, 246, 0.3);
    }

    .btn-geometric {
      background: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #f9ca24 75%, #ff6b6b 100%);
      background-size: 200% 200%;
      clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
      animation: geometricFlow 4s ease infinite;
    }

    .btn-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-metal {
      background: linear-gradient(135deg, #c9aa7c 0%, #f4e4bc 25%, #c9aa7c 50%, #8b7355 75%, #f4e4bc 100%);
      background-size: 200% 200%;
      color: #2d1810;
      animation: metalFlow 8s ease infinite;
    }

    .btn-image {
      background: rgba(59, 130, 246, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(59, 130, 246, 0.5);
    }

    /* Background Classes */
    .bg-3d {
      background: var(--gradient-3d);
    }

    .bg-geometric {
      background: linear-gradient(45deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #e94560 75%, #0f0f23 100%);
      background-size: 400% 400%;
      animation: geometricFlow 15s ease infinite;
    }

    .bg-glass {
      background: var(--gradient-glass);
    }

    .bg-metal {
      background: var(--gradient-metal);
    }

    .bg-image {
      background: var(--gradient-image);
    }

    /* Layout Classes */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .section-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 4rem 0;
    }

    .section-standard {
      padding: 4rem 0;
    }

    .grid {
      display: grid;
      gap: 1.5rem;
    }

    .grid-cols-1 { grid-template-columns: 1fr; }
    .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container { padding: 0 1rem; }
      .section-hero { min-height: 80vh; padding: 2rem 0; }
      .section-standard { padding: 3rem 0; }
      .grid-cols-2, .grid-cols-3, .grid-cols-4 { grid-template-columns: 1fr; }
      .text-4xl { font-size: 2rem; }
      .text-5xl { font-size: 2.5rem; }
    }

    /* Utility Classes */
    .text-center { text-align: center; }
    .text-white { color: white; }
    .text-lg { font-size: 1.125rem; }
    .text-xl { font-size: 1.25rem; }
    .text-2xl { font-size: 1.5rem; }
    .text-3xl { font-size: 1.875rem; }
    .text-4xl { font-size: 2.25rem; }
    .text-5xl { font-size: 3rem; }
    .font-bold { font-weight: bold; }
    .font-black { font-weight: 900; }
    .mb-3 { margin-bottom: 0.75rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .max-w-3xl { max-width: 48rem; }
    .max-w-4xl { max-width: 56rem; }
    .max-w-6xl { max-width: 72rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .leading-relaxed { line-height: 1.625; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .p-6 { padding: 1.5rem; }
    .p-8 { padding: 2rem; }

    /* Animations */
    @keyframes geometricFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes metalFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `;

  // Generate sections content exactly as in ContentSections
  const generateEmotionalSection = () => {
    return `
    <section class="py-16 px-4 bg-${formData?.heroStyle || '3d'}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-4xl text-5xl font-black mb-8 text-white">
            ${content?.sections?.emotionalSection?.title || "השירות שמשנה את המשחק"}
          </h2>
          <div class="card-${formData?.heroStyle || '3d'} p-8">
            <p class="typography-body text-lg text-xl leading-relaxed text-white">
              ${content?.sections?.emotionalSection?.content || `בעולם שמתפתח במהירות, ${businessName} כאן כדי לספק לכם את השירות המקצועי והאמין ביותר בתחום ${formData?.businessType || 'שירותים עסקיים'}.`}
            </p>
          </div>
        </div>
      </div>
    </section>`;
  };

  const generateWhyUsSection = () => {
    if (!content?.sections?.whyUs || !content.sections.whyUs.reasons) return '';
    
    return `
    <section class="py-16 px-4 bg-${formData?.heroStyle || '3d'}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-4xl text-5xl font-black mb-6 text-white">
            ${content.sections.whyUs.title || "למה כדאי לבחור דווקא בנו?"}
          </h2>
          <p class="typography-body text-lg max-w-3xl mx-auto" style="color: #d1d5db;">
            הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
          </p>
        </div>
        
        <div class="grid grid-cols-4 gap-6">
          ${content.sections.whyUs.reasons.map((reason: any) => `
            <div class="card-${formData?.heroStyle || '3d'} p-6 text-center">
              <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">🏆</div>
              <h3 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-lg font-bold mb-3 text-white">${reason.title}</h3>
              <p class="typography-body leading-relaxed text-sm" style="color: #d1d5db;">${reason.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateWhatWeGiveSection = () => {
    if (!content?.sections?.whatWeGive || !content.sections.whatWeGive.services) return '';
    
    return `
    <section class="py-16 px-4 bg-${formData?.heroStyle || '3d'}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-4xl text-5xl font-black mb-6 text-white">
            ${content.sections.whatWeGive.title || "מה אתם מקבלים מאיתנו"}
          </h2>
          <p class="typography-body text-lg max-w-3xl mx-auto" style="color: #d1d5db;">
            השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
          </p>
        </div>
        
        <div class="grid grid-cols-2 gap-6">
          ${content.sections.whatWeGive.services.map((service: any) => `
            <div class="card-${formData?.heroStyle || '3d'} p-6">
              <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 2rem; height: 2rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">✓</div>
                <div>
                  <h3 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-lg font-bold text-white mb-2">${service.title}</h3>
                  <p class="typography-body leading-relaxed text-sm" style="color: #d1d5db;">${service.description}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateProcessSection = () => {
    return `
    <section class="py-16 px-4 bg-${formData?.heroStyle || '3d'}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-4xl text-5xl font-black mb-6 text-white">
            תהליך העבודה שלנו
          </h2>
          <p class="typography-body text-lg text-gray-300 max-w-3xl mx-auto">
            תהליך מובנה ומקצועי שמבטיח תוצאות מעולות
          </p>
        </div>
        
        <div class="grid grid-cols-4 gap-6">
          <div class="card-${formData?.heroStyle || '3d'} text-center p-6">
            <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: black;">1</div>
            <h3 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-lg font-bold mb-3 text-white">ניתוח צרכים</h3>
            <p class="typography-body leading-relaxed text-sm" style="color: #d1d5db;">בדיקה מעמיקה של הדרישות והמטרות שלכם</p>
          </div>
          <div class="card-${formData?.heroStyle || '3d'} text-center p-6">
            <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: black;">2</div>
            <h3 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-lg font-bold mb-3 text-white">תכנון אסטרטגי</h3>
            <p class="typography-body leading-relaxed text-sm" style="color: #d1d5db;">עיצוב תוכנית עבודה מותאמת אישית</p>
          </div>
          <div class="card-${formData?.heroStyle || '3d'} text-center p-6">
            <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: black;">3</div>
            <h3 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-lg font-bold mb-3 text-white">ביצוע מקצועי</h3>
            <p class="typography-body leading-relaxed text-sm" style="color: #d1d5db;">יישום הפתרון ברמה הגבוהה ביותר</p>
          </div>
          <div class="card-${formData?.heroStyle || '3d'} text-center p-6">
            <div style="width: 3rem; height: 3rem; margin: 0 auto 1rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: black;">4</div>
            <h3 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-lg font-bold mb-3 text-white">מעקב ותמיכה</h3>
            <p class="typography-body leading-relaxed text-sm" style="color: #d1d5db;">ליווי מתמשך ושיפורים נוספים</p>
          </div>
        </div>
      </div>
    </section>`;
  };

  const generateTestimonialsSection = () => {
    const testimonials = content?.sections?.testimonials || [];
    if (!testimonials.length) return '';
    
    return `
    <section class="py-16 px-4 bg-${formData?.heroStyle || '3d'}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-4xl text-5xl font-black mb-6 text-white">מה הלקוחות שלנו אומרים</h2>
          <p class="typography-body text-lg max-w-3xl mx-auto" style="color: #d1d5db;">
            עדויות אמיתיות מלקוחות מרוצים
          </p>
        </div>
        <div class="grid grid-cols-3 gap-6">
          ${testimonials.map((testimonial: any) => `
            <div class="card-${formData?.heroStyle || '3d'} p-6">
              <div style="margin-bottom: 1rem; color: #facc15; font-size: 1.25rem;">★★★★★</div>
              <p class="typography-body text-lg leading-relaxed text-white mb-4" style="font-style: italic;">
                "${testimonial.content}"
              </p>
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 3rem; height: 3rem; border-radius: 50%; background: linear-gradient(45deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">👤</div>
                <div>
                  <p class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} font-bold text-white">${testimonial.name}</p>
                  ${testimonial.role ? `<p class="typography-body text-sm" style="color: #9ca3af;">${testimonial.role}</p>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateFAQSection = () => {
    const faqs = [
      { question: "כמה זמן לוקח התהליך?", answer: "התהליך נע בין שבוע לחודש, תלוי במורכבות הפרויקט והדרישות הספציפיות שלכם." },
      { question: "איך הגישה שלכם שונה?", answer: "אנחנו מתמחים בפתרונות מותאמים אישית ובליווי צמוד לאורך כל התהליך." },
      { question: "מה כלול במחיר?", answer: "המחיר כולל את כל השירותים הבסיסיים, ליווי מלא ותמיכה לאחר הפרויקט." },
      { question: "איך מתחילים?", answer: "פשוט צרו קשר איתנו לייעוץ ראשוני חינמי ובחינת האפשרויות המתאימות לכם." }
    ];

    return `
    <section class="py-16 px-4 bg-${formData?.heroStyle || '3d'}">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-4xl text-5xl font-black mb-6 text-white">
            שאלות נפוצות
          </h2>
          <p class="typography-body text-lg max-w-3xl mx-auto" style="color: #d1d5db;">
            תשובות לשאלות הנפוצות ביותר
          </p>
        </div>
        
        <div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          ${faqs.map(faq => `
            <div class="card-${formData?.heroStyle || '3d'} p-6">
              <h3 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-lg font-bold mb-3 text-white">${faq.question}</h3>
              <p class="typography-body leading-relaxed text-sm" style="color: #d1d5db;">${faq.answer}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateContactSection = () => {
    return `
    <section class="py-16 px-4 bg-${formData?.heroStyle || '3d'}" id="contact">
      <div class="container mx-auto max-w-6xl text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'modern'} text-4xl text-5xl font-black mb-8 text-white">
            ${content?.contactTitle || 'מוכנים להתחיל?'}
          </h2>
          
          <div class="card-${formData?.heroStyle || '3d'} p-6 mb-8">
            <p class="typography-body text-lg text-xl text-white leading-relaxed">
              בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div class="card-${formData?.heroStyle || '3d'} p-4">
              <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                <span style="color: #60a5fa;">📞</span>
                <span class="typography-body text-white font-medium">050-1234567</span>
              </div>
            </div>
            <div class="card-${formData?.heroStyle || '3d'} p-4">
              <div style="display: flex; align-items: center; gap: 0.75rem; justify-content: center;">
                <span style="color: #60a5fa;">✉️</span>
                <span class="typography-body text-white font-medium">info@business.co.il</span>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center; margin-bottom: 2rem;">
            <a href="tel:0501234567" class="btn-base btn-${formData?.heroStyle || '3d'}">צור קשר עכשיו</a>
            <a href="#" class="btn-base btn-${formData?.heroStyle || '3d'}">קבל הצעת מחיר</a>
          </div>
        </div>
      </div>
    </section>`;
  };

  const generateFooterSection = () => {
    return `
    <footer class="py-16 px-4 bg-black/50 text-center">
      <div class="container mx-auto max-w-4xl">
        <h3 class="text-2xl font-bold text-white mb-4">${businessName}</h3>
        <p class="text-gray-400 mb-8">© 2024 כל הזכויות שמורות. בניית אתרים מקצועית ואמינה.</p>
        <div style="display: flex; justify-content: center; gap: 2rem; color: #9ca3af;">
          <span>טלפון: 050-1234567</span>
          <span>אימייל: info@business.co.il</span>
        </div>
      </div>
    </footer>`;
  };

  return `
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessName}</title>
    <style>
        ${getCSSStyles()}
    </style>
</head>
<body class="${getStyleClass()}">
    <!-- Hero Section -->
    <section class="section-hero">
        <div class="container text-center">
            <h1 class="typography-${formData?.heroStyle === 'metal' ? 'luxury' : 'hero'} text-5xl font-black mb-8 text-white">${businessName}</h1>
            <div class="card-${formData?.heroStyle || '3d'} p-8 mb-12">
                <p class="typography-body text-lg text-xl text-white leading-relaxed">${subheadline}</p>
            </div>
            <a href="#contact" class="btn-base btn-${formData?.heroStyle || '3d'}">${ctaText}</a>
        </div>
    </section>

    ${generateEmotionalSection()}

    ${generateWhyUsSection()}

    ${generateWhatWeGiveSection()}

    ${generateProcessSection()}

    ${generateTestimonialsSection()}

    ${generateFAQSection()}

    ${generateContactSection()}

    ${generateFooterSection()}
</body>
</html>`;
};
