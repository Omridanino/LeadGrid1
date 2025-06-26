
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

  const getHeroBackground = () => {
    if (formData?.heroStyle === 'image' && heroImageUrl) {
      return `background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${heroImageUrl}'); background-size: cover; background-position: center;`;
    } else if (formData?.heroStyle === 'animated') {
      return `background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); background-size: 400% 400%; animation: gradient 8s ease infinite;`;
    } else {
      return `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`;
    }
  };

  const generateEmotionalSection = () => {
    if (!content?.sections?.emotionalSection) return '';
    
    return `
    <section class="tech-section py-20">
      <div class="container">
        <h2 class="tech-title text-center mb-8">${content.sections.emotionalSection.title}</h2>
        <p class="text-xl text-center max-w-4xl mx-auto leading-relaxed" style="color: ${colors.featuresTextColor};">
          ${content.sections.emotionalSection.content}
        </p>
      </div>
    </section>`;
  };

  const generateWhyUsSection = () => {
    if (!content?.sections?.whyUs || !content.sections.whyUs.reasons) return '';
    
    return `
    <section class="tech-section py-20">
      <div class="container">
        <h2 class="tech-title text-center mb-12">${content.sections.whyUs.title}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${content.sections.whyUs.reasons.map((reason: any) => `
            <div class="feature-card tech-glow hover:scale-105 transition-all duration-300">
              <div class="feature-icon tech-glow floating-animation" style="background-color: ${colors.primary}">
                🏆
              </div>
              <h3 style="color: ${colors.featuresColor}">${reason.title}</h3>
              <p style="color: ${colors.featuresTextColor}">${reason.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateWhatWeGiveSection = () => {
    if (!content?.sections?.whatWeGive || !content.sections.whatWeGive.services) return '';
    
    return `
    <section class="tech-section py-20">
      <div class="container">
        <h2 class="tech-title text-center mb-12">${content.sections.whatWeGive.title}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${content.sections.whatWeGive.services.map((service: any) => `
            <div class="service-card tech-glow hover:scale-105 transition-all duration-300">
              <div class="service-check" style="color: ${colors.primary}">✓</div>
              <h3 style="color: ${colors.featuresColor}">${service.title}</h3>
              <p style="color: ${colors.featuresTextColor}">${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateGallerySection = () => {
    if (!selectedElements.includes('gallery') || !content?.sections?.gallery?.images?.length) return '';
    
    return `
    <section class="tech-section py-20">
      <div class="container">
        <h2 class="tech-title text-center mb-12">
          🖼️ ${content.sections.gallery.title || 'גלריית העבודות שלנו'}
        </h2>
        <div class="gallery-grid">
          ${content.sections.gallery.images.filter((img: any) => img?.url).map((image: any, index: number) => `
            <div class="gallery-item tech-glow">
              <img src="${image.url}" alt="${image.description || `עבודה ${index + 1}`}" />
              <div class="gallery-overlay">
                <p>${image.description || `עבודה ${index + 1}`}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateProcessSection = () => {
    if (!selectedElements.includes('process')) return '';
    
    const processes = [
      { step: 1, title: "ניתוח חכם", desc: "ניתוח מתקדם של הצרכים באמצעות AI", icon: "⚡" },
      { step: 2, title: "תכנון דיגיטלי", desc: "עיצוב מתקדם באמצעות כלים טכנולוגיים", icon: "💻" },
      { step: 3, title: "פיתוח חכם", desc: "יישום מתקדם עם טכנולוגיות חדישות", icon: "🌐" },
      { step: 4, title: "השקה חדשנית", desc: "הטמעה חכמה ומעקב בזמן אמת", icon: "🚀" }
    ];
    
    return `
    <section class="tech-section py-20">
      <div class="container">
        <h2 class="tech-title text-center mb-12">
          💻 תהליך העבודה הטכנולוגי שלנו
        </h2>
        <div class="grid md:grid-cols-4 gap-8">
          ${processes.map((process) => `
            <div class="process-card tech-glow text-center">
              <div class="process-icon tech-glow floating-animation" style="background-color: ${colors.primary}">
                ${process.icon}
              </div>
              <div class="process-number" style="color: ${colors.primary}">${process.step}</div>
              <h3 style="color: ${colors.featuresColor}">${process.title}</h3>
              <p style="color: ${colors.featuresTextColor}">${process.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  };

  const generateAboutSection = () => {
    if (!selectedElements.includes('about')) return '';
    
    return `
    <section class="tech-section py-20">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="tech-title mb-6">
              👥 ${content?.sections?.about?.title || 'קצת עלינו'}
            </h2>
            <p style="color: ${colors.aboutTextColor}; margin-bottom: 1.5rem;" class="text-lg mb-6">
              ${content?.sections?.about?.paragraph1 || 'אנחנו צוות מקצועי עם ניסיון של מעל 10 שנים בתחום.'}
            </p>
            <p style="color: ${colors.aboutTextColor};" class="text-lg">
              ${content?.sections?.about?.paragraph2 || 'המטרה שלנו היא לספק שירות ברמה הגבוהה ביותר.'}
            </p>
          </div>
          <div class="about-image">
            <img src="${content?.sections?.about?.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'}" 
                 alt="הצוות שלנו" class="tech-glow" />
          </div>
        </div>
      </div>
    </section>`;
  };

  const generateTestimonialsSection = () => {
    const testimonials = content?.sections?.testimonials?.filter((t: any) => t.name && t.content) || [];
    if (!testimonials.length) return '';
    
    return `
    <section class="tech-section py-20">
      <div class="container">
        <h2 class="tech-title text-center mb-12">מה הלקוחות שלנו אומרים</h2>
        <div class="testimonials-grid">
          ${testimonials.map((testimonial: any) => `
            <div class="testimonial-card tech-glow">
              <div class="stars">⭐⭐⭐⭐⭐</div>
              <p style="color: ${colors.featuresTextColor}; font-style: italic; margin-bottom: 1rem;">
                "${testimonial.content}"
              </p>
              <div class="testimonial-author">
                <div class="author-avatar">👤</div>
                <div>
                  <p style="color: ${colors.featuresColor}; font-weight: bold;">${testimonial.name}</p>
                  ${testimonial.role ? `<p style="color: ${colors.featuresTextColor}; font-size: 0.9rem;">${testimonial.role}</p>` : ''}
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
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: white;
            background: #111827;
            direction: rtl;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            ${getHeroBackground()}
            position: relative;
            overflow: hidden;
        }
        
        .matrix-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: matrix-move 20s linear infinite;
            pointer-events: none;
        }
        
        .hero-content {
            text-align: center;
            z-index: 10;
            position: relative;
        }
        
        .tech-title {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            background: linear-gradient(45deg, #00f5ff, #0066ff, #00ccff);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: tech-gradient 3s ease infinite;
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            color: ${colors.subheadlineColor};
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        .cta-button {
            background-color: ${colors.primary};
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
        }
        
        /* Tech Effects */
        .tech-glow {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1);
            animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .tech-section {
            padding: 80px 0;
            background-color: ${colors.background};
            position: relative;
        }
        
        .tech-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .tech-section h2 {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
            z-index: 1;
        }
        
        /* Grid Layouts */
        .grid {
            display: grid;
            gap: 30px;
        }
        
        .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .lg\\:grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, 1fr);
        }
        
        .md\\:grid-cols-4 {
            grid-template-columns: repeat(4, 1fr);
        }
        
        /* Feature Cards */
        .feature-card {
            background: rgba(31, 41, 55, 0.5);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            border: 2px solid rgba(59, 130, 246, 0.2);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            border-color: ${colors.primary};
        }
        
        .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }
        
        .feature-card h3 {
            margin-bottom: 15px;
            font-size: 1.3rem;
        }
        
        /* Service Cards */
        .service-card {
            background: rgba(31, 41, 55, 0.5);
            padding: 25px;
            border-radius: 15px;
            border: 2px solid rgba(59, 130, 246, 0.2);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            border-color: ${colors.primary};
        }
        
        .service-check {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .service-card h3 {
            margin-bottom: 10px;
            font-size: 1.2rem;
        }
        
        /* Gallery */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .gallery-item {
            position: relative;
            aspect-ratio: 1;
            overflow: hidden;
            border-radius: 15px;
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        
        .gallery-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }
        
        /* Process Cards */
        .process-card {
            background: rgba(31, 41, 55, 0.5);
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            border: 2px solid rgba(59, 130, 246, 0.2);
            position: relative;
            backdrop-filter: blur(10px);
        }
        
        .process-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }
        
        .process-number {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .process-card h3 {
            margin-bottom: 15px;
            font-size: 1.3rem;
        }
        
        /* About Section */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }
        
        .about-image img {
            width: 100%;
            border-radius: 15px;
        }
        
        /* Testimonials */
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .testimonial-card {
            background: rgba(31, 41, 55, 0.5);
            padding: 25px;
            border-radius: 15px;
            border: 2px solid rgba(59, 130, 246, 0.2);
            backdrop-filter: blur(10px);
        }
        
        .stars {
            margin-bottom: 15px;
            font-size: 1.2rem;
        }
        
        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .author-avatar {
            width: 50px;
            height: 50px;
            background: rgba(107, 114, 128, 0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        
        /* Contact Section */
        .contact-section {
            padding: 80px 0;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            text-align: center;
        }
        
        .contact-info {
            max-width: 500px;
            margin: 0 auto 30px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        
        /* Utility Classes */
        .text-center { text-align: center; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .leading-relaxed { line-height: 1.625; }
        
        /* Animations */
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes tech-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.2); }
        }
        
        @keyframes matrix-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .floating-animation {
            animation: float 6s ease-in-out infinite;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .tech-title {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
            
            .about-content {
                grid-template-columns: 1fr;
            }
            
            .md\\:grid-cols-2,
            .lg\\:grid-cols-3,
            .lg\\:grid-cols-4,
            .md\\:grid-cols-4 {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Hero Section -->
    <section class="hero matrix-bg">
        <div class="hero-content">
            <h1 class="tech-title">${businessName}</h1>
            <p class="hero-subtitle tech-glow">${subheadline}</p>
            <a href="#contact" class="cta-button tech-glow floating-animation">${ctaText}</a>
        </div>
    </section>

    ${generateEmotionalSection()}
    ${generateWhyUsSection()}
    ${generateWhatWeGiveSection()}
    ${generateGallerySection()}
    ${generateProcessSection()}
    ${generateAboutSection()}
    ${generateTestimonialsSection()}

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
        <div class="container">
            <h2 class="tech-title">${content?.contactTitle || 'בואו נתחיל לעבוד יחד'}</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <span>📞</span>
                    <span>050-1234567</span>
                </div>
                <div class="contact-item">
                    <span>✉️</span>
                    <span>info@business.co.il</span>
                </div>
                <div class="contact-item">
                    <span>📍</span>
                    <span>תל אביב, ישראל</span>
                </div>
            </div>
            <a href="tel:0501234567" class="cta-button tech-glow floating-animation">צור קשר עכשיו</a>
        </div>
    </section>
</body>
</html>`;
};
