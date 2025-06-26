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
  const selectedElements = formData?.selectedElements || [];

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

  // Include the exact same CSS from PreviewStyles.tsx
  const getCSSStyles = () => `
    /* Professional Typography System */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

    :root {
      --gradient-3d: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%);
      --gradient-geometric: linear-gradient(45deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #f9ca24 75%, #ff6b6b 100%);
      --gradient-glass: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.9) 100%);
      --gradient-metal: linear-gradient(135deg, #2c1810 0%, #8b7355 25%, #c9aa7c 50%, #f4e4bc 75%, #8b7355 100%);
      --gradient-image: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%);
      
      --shadow-3d: 0 25px 50px rgba(0,0,0,0.8), 0 12px 25px rgba(59, 130, 246, 0.3);
      --shadow-geometric: 0 0 0 1px rgba(255, 107, 107, 0.3), 0 15px 35px rgba(255, 107, 107, 0.2);
      --shadow-glass: 0 8px 32px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(255,255,255,0.1);
      --shadow-metal: 0 12px 24px rgba(139, 115, 85, 0.4), inset 0 1px 0 rgba(244, 228, 188, 0.3);
      --shadow-image: 0 20px 40px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2);
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

    .style-3d::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%);
      animation: float3D 20s ease-in-out infinite;
    }

    .style-geometric {
      background: linear-gradient(45deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #e94560 75%, #0f0f23 100%);
      background-size: 400% 400%;
      animation: geometricFlow 15s ease infinite;
      position: relative;
      overflow: hidden;
    }

    .style-geometric::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(30deg, rgba(255, 107, 107, 0.1) 12%, transparent 12.5%),
        linear-gradient(150deg, rgba(78, 205, 196, 0.1) 12%, transparent 12.5%);
      background-size: 80px 80px;
      animation: geometricMove 30s linear infinite;
    }

    .style-glass {
      background: var(--gradient-glass);
      position: relative;
      overflow: hidden;
    }

    .style-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
      backdrop-filter: blur(1px);
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

    .style-image::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-image);
    }

    /* Card Classes */
    .card-3d {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 1rem;
      box-shadow: var(--shadow-3d);
      transform: perspective(1000px) rotateX(2deg) rotateY(-2deg);
      transition: all 0.3s ease;
      padding: 2rem;
    }

    .card-3d:hover {
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-10px);
    }

    .card-geometric {
      background: linear-gradient(135deg, rgba(233, 69, 96, 0.2) 0%, rgba(78, 205, 196, 0.2) 100%);
      border: 2px solid;
      border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24) 1;
      clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
      box-shadow: var(--shadow-geometric);
      transition: all 0.3s ease;
      padding: 2rem;
    }

    .card-glass {
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1.5rem;
      box-shadow: var(--shadow-glass);
      position: relative;
      overflow: hidden;
      padding: 2rem;
    }

    .card-glass::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    }

    .card-metal {
      background: linear-gradient(135deg, #c9aa7c 0%, #f4e4bc 25%, #c9aa7c 50%, #8b7355 75%, #f4e4bc 100%);
      background-size: 200% 200%;
      border-radius: 1.5rem;
      box-shadow: var(--shadow-metal);
      position: relative;
      overflow: hidden;
      animation: metalFlow 12s ease infinite;
      padding: 2rem;
    }

    .card-image {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 1rem;
      box-shadow: var(--shadow-image);
      padding: 2rem;
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
      box-shadow: var(--shadow-3d);
      transform: perspective(500px) rotateX(10deg);
    }

    .btn-geometric {
      background: var(--gradient-geometric);
      background-size: 200% 200%;
      clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
      animation: geometricFlow 4s ease infinite;
    }

    .btn-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: var(--shadow-glass);
    }

    .btn-metal {
      background: var(--gradient-metal);
      background-size: 200% 200%;
      color: #2d1810;
      box-shadow: var(--shadow-metal);
      animation: metalFlow 8s ease infinite;
    }

    .btn-image {
      background: rgba(59, 130, 246, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(59, 130, 246, 0.5);
      box-shadow: var(--shadow-image);
    }

    /* Layout Classes */
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 4rem 0;
    }

    .section-standard {
      padding: 8rem 0;
    }

    .grid {
      display: grid;
      gap: 2rem;
    }

    .grid-cols-1 { grid-template-columns: 1fr; }
    .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

    /* Utility Classes */
    .text-center { text-align: center; }
    .text-white { color: white; }
    .text-lg { font-size: 1.125rem; }
    .text-xl { font-size: 1.25rem; }
    .text-2xl { font-size: 1.5rem; }
    .text-3xl { font-size: 1.875rem; }
    .text-4xl { font-size: 2.25rem; }
    .text-5xl { font-size: 3rem; }
    .text-6xl { font-size: 3.75rem; }
    .text-7xl { font-size: 4.5rem; }
    .font-bold { font-weight: bold; }
    .font-black { font-weight: 900; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .mb-16 { margin-bottom: 4rem; }
    .max-w-3xl { max-width: 48rem; }
    .max-w-4xl { max-width: 56rem; }
    .max-w-6xl { max-width: 72rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .leading-relaxed { line-height: 1.625; }

    /* Animations */
    @keyframes float3D {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes geometricFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes geometricMove {
      0% { transform: translateX(0) translateY(0); }
      100% { transform: translateX(80px) translateY(80px); }
    }

    @keyframes metalFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .container { padding: 0 1rem; }
      .section-hero { min-height: 80vh; padding: 2rem 0; }
      .section-standard { padding: 4rem 0; }
      .grid-cols-2, .grid-cols-3, .grid-cols-4 { grid-template-columns: 1fr; }
      .text-5xl { font-size: 2.5rem; }
      .text-6xl { font-size: 3rem; }
      .text-7xl { font-size: 3.5rem; }
    }

    @media (max-width: 480px) {
      .btn-base { padding: 0.75rem 1.25rem; font-size: 0.875rem; }
      .text-5xl { font-size: 2rem; }
      .text-6xl { font-size: 2.5rem; }
      .text-7xl { font-size: 3rem; }
    }
  `;

  const generateEmotionalSection = () => {
    if (!content?.sections?.emotionalSection) return '';
    
    return `
    <section class="section-standard">
      <div class="container text-center max-w-6xl mx-auto">
        <h2 class="${getTypographyClass()} text-5xl text-7xl font-black mb-8 text-white">
          ${content.sections.emotionalSection.title}
        </h2>
        <div class="${getCardClass()} mb-12">
          <p class="typography-body text-xl text-2xl leading-relaxed text-white">
            ${content.sections.emotionalSection.content}
          </p>
        </div>
      </div>
    </section>`;
  };

  const generateWhyUsSection = () => {
    if (!content?.sections?.whyUs || !content.sections.whyUs.reasons) return '';
    
    return `
    <section class="section-standard">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="${getTypographyClass()} text-5xl text-6xl font-black mb-6 text-white">
            ${content.sections.whyUs.title}
          </h2>
          <p class="typography-body text-xl max-w-3xl mx-auto" style="color: #d1d5db;">
            הסיבות שעושות אותנו לבחירה הטובה ביותר עבורכם
          </p>
        </div>
        
        <div class="grid grid-cols-4 gap-8">
          ${content.sections.whyUs.reasons.map((reason: any) => `
            <div class="${getCardClass()} text-center">
              <div style="width: 4rem; height: 4rem; border-radius: 1rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                🏆
              </div>
              <h3 class="${getTypographyClass()} text-2xl font-bold mb-4 text-white">${reason.title}</h3>
              <p class="typography-body leading-relaxed" style="color: #d1d5db;">${reason.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateWhatWeGiveSection = () => {
    if (!content?.sections?.whatWeGive || !content.sections.whatWeGive.services) return '';
    
    return `
    <section class="section-standard">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="${getTypographyClass()} text-5xl text-6xl font-black mb-6 text-white">
            ${content.sections.whatWeGive.title}
          </h2>
          <p class="typography-body text-xl max-w-3xl mx-auto" style="color: #d1d5db;">
            השירותים המקצועיים שלנו מותאמים בדיוק לצרכים שלכם
          </p>
        </div>
        
        <div class="grid grid-cols-3 gap-8">
          ${content.sections.whatWeGive.services.map((service: any) => `
            <div class="${getCardClass()}">
              <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 3rem; height: 3rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">
                  ✓
                </div>
                <div>
                  <h3 class="${getTypographyClass()} text-xl font-bold text-white mb-2">${service.title}</h3>
                  <p class="typography-body leading-relaxed" style="color: #d1d5db;">${service.description}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateTestimonialsSection = () => {
    const testimonials = content?.sections?.testimonials?.filter((t: any) => t.name && t.content) || [];
    if (!testimonials.length) return '';
    
    return `
    <section class="section-standard">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="${getTypographyClass()} text-5xl text-6xl font-black mb-6 text-white">מה הלקוחות שלנו אומרים</h2>
          <p class="typography-body text-xl max-w-3xl mx-auto" style="color: #d1d5db;">
            עדויות אמיתיות מלקוחות מרוצים
          </p>
        </div>
        <div class="grid grid-cols-3 gap-8">
          ${testimonials.map((testimonial: any) => `
            <div class="${getCardClass()}">
              <div style="margin-bottom: 1rem;">⭐⭐⭐⭐⭐</div>
              <p class="typography-body text-lg leading-relaxed text-white mb-6" style="font-style: italic;">
                "${testimonial.content}"
              </p>
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 3rem; height: 3rem; border-radius: 50%; background: linear-gradient(45deg, #3b82f6, #8b5cf6); display: flex; align-items: center; justify-content: center;">
                  👤
                </div>
                <div>
                  <p class="${getTypographyClass()} font-bold text-white">${testimonial.name}</p>
                  ${testimonial.role ? `<p class="typography-body text-sm" style="color: #9ca3af;">${testimonial.role}</p>` : ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
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
            <h1 class="${getTypographyClass()} text-7xl font-black mb-8 text-white">${businessName}</h1>
            <div class="${getCardClass()} mb-12">
                <p class="typography-body text-xl text-2xl text-white leading-relaxed">${subheadline}</p>
            </div>
            <a href="#contact" class="btn-base ${getButtonClass()}">${ctaText}</a>
            
            <!-- Stats Grid -->
            <div class="grid grid-cols-4 gap-6 max-w-4xl mx-auto" style="margin-top: 4rem;">
                <div class="${getCardClass()} text-center">
                    <div class="${getTypographyClass()} text-3xl text-4xl font-bold text-white mb-2">500+</div>
                    <div class="typography-body" style="color: #d1d5db; font-size: 0.875rem;">לקוחות מרוצים</div>
                </div>
                <div class="${getCardClass()} text-center">
                    <div class="${getTypographyClass()} text-3xl text-4xl font-bold text-white mb-2">98%</div>
                    <div class="typography-body" style="color: #d1d5db; font-size: 0.875rem;">שביעות רצון</div>
                </div>
                <div class="${getCardClass()} text-center">
                    <div class="${getTypographyClass()} text-3xl text-4xl font-bold text-white mb-2">10+</div>
                    <div class="typography-body" style="color: #d1d5db; font-size: 0.875rem;">שנות ניסיון</div>
                </div>
                <div class="${getCardClass()} text-center">
                    <div class="${getTypographyClass()} text-3xl text-4xl font-bold text-white mb-2">24/7</div>
                    <div class="typography-body" style="color: #d1d5db; font-size: 0.875rem;">זמינות</div>
                </div>
            </div>
        </div>
    </section>

    ${generateEmotionalSection()}
    ${generateWhyUsSection()}
    ${generateWhatWeGiveSection()}
    ${generateTestimonialsSection()}

    <!-- Contact Section -->
    <section class="section-standard" id="contact">
        <div class="container text-center">
            <div class="max-w-4xl mx-auto">
                <h2 class="${getTypographyClass()} text-5xl text-6xl font-black mb-8 text-white">
                    ${content?.contactTitle || 'מוכנים להתחיל?'}
                </h2>
                
                <div class="${getCardClass()} mb-12">
                    <p class="typography-body text-xl text-2xl text-white leading-relaxed">
                        בואו ניצור יחד משהו מדהים שיקדם את העסק שלכם
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
                    <div class="${getCardClass()}">
                        <div style="display: flex; align-items: center; gap: 1rem; justify-content: center;">
                            <span style="color: #60a5fa;">📞</span>
                            <span class="typography-body text-white font-medium">050-1234567</span>
                        </div>
                    </div>
                    <div class="${getCardClass()}">
                        <div style="display: flex; align-items: center; gap: 1rem; justify-content: center;">
                            <span style="color: #60a5fa;">✉️</span>
                            <span class="typography-body text-white font-medium">info@business.co.il</span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 1.5rem; justify-content: center; align-items: center; margin-bottom: 3rem;">
                    <a href="tel:0501234567" class="btn-base ${getButtonClass()}" style="font-size: 1.125rem;">צור קשר עכשיו</a>
                    <a href="#" class="btn-base ${getButtonClass()}" style="font-size: 1.125rem;">קבל הצעת מחיר</a>
                </div>

                <!-- Trust Badges -->
                <div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div class="${getCardClass()} text-center">
                        <div style="width: 3rem; height: 3rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">🛡️</div>
                        <h3 class="${getTypographyClass()} font-semibold text-white mb-1">מוגן ומאובטח</h3>
                        <p class="typography-body text-sm" style="color: #d1d5db;">ביטחון מלא</p>
                    </div>
                    <div class="${getCardClass()} text-center">
                        <div style="width: 3rem; height: 3rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">⏰</div>
                        <h3 class="${getTypographyClass()} font-semibold text-white mb-1">מענה מהיר</h3>
                        <p class="typography-body text-sm" style="color: #d1d5db;">תוך 24 שעות</p>
                    </div>
                    <div class="${getCardClass()} text-center">
                        <div style="width: 3rem; height: 3rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);">❤️</div>
                        <h3 class="${getTypographyClass()} font-semibold text-white mb-1">ללא התחייבות</h3>
                        <p class="typography-body text-sm" style="color: #d1d5db;">ייעוץ חינם</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`;
};
