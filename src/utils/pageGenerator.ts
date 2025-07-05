
import { TemplateData } from '@/types/template';

export const generatePageHTML = (template: TemplateData): string => {
  // Generate complete HTML with proper CSS, backgrounds, and all elements
  const cssStyles = generateCSSStyles(template);
  const htmlContent = generateHTMLContent(template);
  
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${template.hero.title}</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Heebo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        ${cssStyles}
    </style>
</head>
<body>
    ${htmlContent}
    <script>
        // Add interactive functionality
        ${generateJavaScript(template)}
    </script>
</body>
</html>`;
};

const generateCSSStyles = (template: TemplateData): string => {
  const baseStyles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Heebo', 'Inter', sans-serif;
        line-height: 1.6;
        color: #333;
        overflow-x: hidden;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
        text-align: center;
    }
    
    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }
    
    .section {
        padding: 80px 0;
        position: relative;
        overflow: hidden;
    }
    
    .section h2 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        text-align: center;
    }
    
    .section p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        text-align: center;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .badge {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 768px) {
        .section {
            padding: 40px 0;
        }
        .section h2 {
            font-size: 2rem;
        }
        .container {
            padding: 0 15px;
        }
    }
  `;

  // Template-specific styles
  const templateStyles = getTemplateSpecificStyles(template);
  
  return baseStyles + templateStyles;
};

const getTemplateSpecificStyles = (template: TemplateData): string => {
  switch (template.id) {
    case 'tech-consultant-pro':
      return `
        .hero-section {
          background: linear-gradient(135deg, #1e293b 0%, #374151 100%);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .features-section {
          background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
          color: white;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .pricing-section {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: white;
        }
        
        .testimonials-section {
          background: linear-gradient(135deg, #111827 0%, #1e293b 100%);
          color: white;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .badge {
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
      `;
      
    case 'neon-academy-pro':
      return `
        .hero-section {
          background: linear-gradient(135deg, #000000 0%, #7c3aed 100%);
          color: #e0e7ff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
        }
        
        .neon-text {
          text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 40px #06b6d4;
        }
        
        .features-section {
          background: linear-gradient(135deg, #7c3aed 0%, #000000 100%);
          color: #e0e7ff;
        }
        
        .feature-card {
          background: rgba(124, 58, 237, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
        }
        
        .pricing-section {
          background: linear-gradient(135deg, #000000 0%, #581c87 100%);
          color: #e0e7ff;
        }
        
        .testimonials-section {
          background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%);
          color: #e0e7ff;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          color: white;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: #06b6d4;
          border: 2px solid #06b6d4;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }
        
        .badge {
          background: rgba(6, 182, 212, 0.2);
          color: #06b6d4;
          border: 1px solid rgba(6, 182, 212, 0.4);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.2);
        }
      `;
      
    case 'blockchain-tech-pro':
      return `
        .hero-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%);
          color: #bfdbfe;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="blockchain" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="none" stroke="rgba(59,130,246,0.2)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23blockchain)"/></svg>');
        }
        
        .features-section {
          background: linear-gradient(135deg, #3730a3 0%, #1e40af 100%);
          color: #bfdbfe;
        }
        
        .feature-card {
          background: rgba(59, 130, 246, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }
        
        .pricing-section {
          background: linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%);
          color: #bfdbfe;
        }
        
        .testimonials-section {
          background: linear-gradient(135deg, #1e1b4b 0%, #581c87 100%);
          color: #bfdbfe;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
        }
        
        .btn-secondary {
          background: transparent;
          color: #3b82f6;
          border: 2px solid rgba(59, 130, 246, 0.5);
        }
        
        .badge {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.4);
        }
      `;
      
    case 'nft-future-pro':
      return `
        .hero-section {
          background: linear-gradient(135deg, #581c87 0%, #ec4899 50%, #3b82f6 100%);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%);
        }
        
        .features-section {
          background: linear-gradient(135deg, #ec4899 0%, #581c87 100%);
          color: white;
        }
        
        .feature-card {
          background: rgba(236, 72, 153, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(236, 72, 153, 0.3);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.2);
        }
        
        .pricing-section {
          background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%);
          color: white;
        }
        
        .testimonials-section {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          color: white;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: #ec4899;
          border: 2px solid rgba(236, 72, 153, 0.5);
        }
        
        .badge {
          background: rgba(236, 72, 153, 0.2);
          color: #fbbf24;
          border: 1px solid rgba(236, 72, 153, 0.4);
        }
      `;
      
    case 'creative-3d-pro':
      return `
        .hero-section {
          background: linear-gradient(135deg, #fed7aa 0%, #fbbf24 50%, #f97316 100%);
          color: #1f2937;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .features-section {
          background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
          color: #1f2937;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 25px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 15px 35px rgba(249, 115, 22, 0.2);
        }
        
        .pricing-section {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
        }
        
        .testimonials-section {
          background: linear-gradient(135deg, #ea580c 0%, #fed7aa 100%);
          color: #1f2937;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          color: white;
          border-radius: 25px;
        }
        
        .btn-secondary {
          background: transparent;
          color: #f97316;
          border: 2px solid #f97316;
          border-radius: 25px;
        }
        
        .badge {
          background: rgba(249, 115, 22, 0.2);
          color: #ea580c;
          border: 1px solid rgba(249, 115, 22, 0.4);
          border-radius: 20px;
        }
      `;
      
    case 'authkit-tech-pro':
      return `
        .hero-section {
          background: linear-gradient(135deg, #030712 0%, #1e40af 100%);
          color: #bfdbfe;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="matrix" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(59,130,246,0.3)" stroke-width="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23matrix)"/></svg>');
        }
        
        .features-section {
          background: linear-gradient(135degrees, #1e40af 0%, #030712 100%);
          color: #bfdbfe;
        }
        
        .feature-card {
          background: rgba(30, 64, 175, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
        }
        
        .pricing-section {
          background: linear-gradient(135deg, #030712 0%, #1e3a8a 100%);
          color: #bfdbfe;
        }
        
        .testimonials-section {
          background: linear-gradient(135deg, #1e3a8a 0%, #030712 100%);
          color: #bfdbfe;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: #3b82f6;
          border: 2px solid rgba(59, 130, 246, 0.5);
        }
        
        .badge {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.4);
        }
      `;
      
    default:
      return `
        .hero-section {
          background: linear-gradient(135deg, #1f2937 0%, #3b82f6 50%, #7c3aed 100%);
          color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .features-section {
          background: linear-gradient(135deg, #3b82f6 0%, #1f2937 100%);
          color: white;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
        }
      `;
  }
};

const generateHTMLContent = (template: TemplateData): string => {
  let html = '';
  
  // Hero Section
  html += generateHeroSection(template);
  
  // Emotional Section
  if (template.emotional) {
    html += generateEmotionalSection(template);
  }
  
  // Features Section
  if (template.features) {
    html += generateFeaturesSection(template);
  }
  
  // Testimonials Section
  if (template.testimonials) {
    html += generateTestimonialsSection(template);
  }
  
  // About Section
  if (template.about) {
    html += generateAboutSection(template);
  }
  
  // Pricing Section
  if (template.pricing) {
    html += generatePricingSection(template);
  }
  
  // FAQ Section
  if (template.faq) {
    html += generateFaqSection(template);
  }
  
  // Additional content sections
  if (template.gallery) {
    html += generateGallerySection(template);
  }
  
  if (template.video) {
    html += generateVideoSection(template);
  }
  
  if (template.slider) {
    html += generateSliderSection(template);
  }
  
  if (template.list) {
    html += generateListSection(template);
  }
  
  if (template.embed) {
    html += generateEmbedSection(template);
  }
  
  if (template.socialBar) {
    html += generateSocialBarSection(template);
  }
  
  // Final CTA Section
  if (template.finalCta) {
    html += generateFinalCtaSection(template);
  }
  
  // Contact Section
  if (template.contact) {
    html += generateContactSection(template);
  }
  
  // Footer
  html += generateFooterSection(template);
  
  return html;
};

const generateHeroSection = (template: TemplateData): string => {
  return `
    <section class="hero-section section">
      <div class="container">
        <div style="position: relative; z-index: 10; text-align: center;">
          ${template.hero.badge ? `<div class="badge">${template.hero.badge}</div>` : ''}
          <h1 style="font-size: 3.5rem; font-weight: 900; margin-bottom: 1rem; line-height: 1.2;">
            ${template.hero.title}
          </h1>
          <h2 style="font-size: 1.5rem; font-weight: 400; margin-bottom: 1.5rem; opacity: 0.9;">
            ${template.hero.subtitle}
          </h2>
          <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.8; max-width: 600px; margin-left: auto; margin-right: auto;">
            ${template.hero.description}
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.hero.button1Icon ? `<i class="ri-${template.hero.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.hero.button1Text}
            </a>
            <a href="#about" class="btn btn-secondary">
              ${template.hero.button2Icon ? `<i class="ri-${template.hero.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.hero.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateEmotionalSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'emotional');
  
  return `
    <section class="emotional-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center;">
          ${template.emotional.badge ? `<div class="badge">${template.emotional.badge}</div>` : ''}
          <h2>${template.emotional.title}</h2>
          <p>${template.emotional.description}</p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.emotional.button1Icon ? `<i class="ri-${template.emotional.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.emotional.button1Text}
            </a>
            <a href="#features" class="btn btn-secondary">
              ${template.emotional.button2Icon ? `<i class="ri-${template.emotional.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.emotional.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateFeaturesSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'features');
  
  return `
    <section id="features" class="features-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.features.badge ? `<div class="badge">${template.features.badge}</div>` : ''}
          <h2>${template.features.title}</h2>
          ${template.features.subtitle ? `<p>${template.features.subtitle}</p>` : ''}
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          ${template.features.items.map(feature => `
            <div class="feature-card">
              <div style="width: 60px; height: 60px; margin: 0 auto 1rem; background: linear-gradient(135deg, ${getFeatureIconColor(template)} 0%, ${getFeatureIconColor(template, true)} 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                <i class="ri-${feature.icon}" style="font-size: 24px; color: white;"></i>
              </div>
              <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;">${feature.title}</h3>
              <p style="opacity: 0.8;">${feature.description}</p>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.features.button1Icon ? `<i class="ri-${template.features.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.features.button1Text}
            </a>
            <a href="#testimonials" class="btn btn-secondary">
              ${template.features.button2Icon ? `<i class="ri-${template.features.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.features.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateTestimonialsSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'testimonials');
  
  return `
    <section id="testimonials" class="testimonials-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.testimonials.badge ? `<div class="badge">${template.testimonials.badge}</div>` : ''}
          <h2>${template.testimonials.title}</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
          ${template.testimonials.testimonials.map(testimonial => `
            <div class="feature-card" style="text-align: right;">
              <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, ${getFeatureIconColor(template)} 0%, ${getFeatureIconColor(template, true)} 100%); margin-left: 1rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                  ${testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 0.25rem;">${testimonial.name}</h4>
                  <p style="font-size: 0.9rem; opacity: 0.7;">${testimonial.role}</p>
                </div>
              </div>
              <p style="font-style: italic; margin-bottom: 1rem;">"${testimonial.content}"</p>
              <div style="display: flex; gap: 0.25rem;">
                ${Array.from({length: testimonial.rating}, () => '<i class="ri-star-fill" style="color: #fbbf24;"></i>').join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.testimonials.button1Icon ? `<i class="ri-${template.testimonials.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.testimonials.button1Text}
            </a>
            <a href="#about" class="btn btn-secondary">
              ${template.testimonials.button2Icon ? `<i class="ri-${template.testimonials.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.testimonials.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateAboutSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'about');
  
  return `
    <section id="about" class="about-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center;">
          ${template.about.badge ? `<div class="badge">${template.about.badge}</div>` : ''}
          <h2>${template.about.title}</h2>
          <p>${template.about.description}</p>
          ${template.about.stats ? `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin: 3rem 0;">
              ${template.about.stats.map(stat => `
                <div style="text-align: center;">
                  <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem;">${stat.number}</div>
                  <div style="opacity: 0.8;">${stat.label}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.about.button1Icon ? `<i class="ri-${template.about.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.about.button1Text}
            </a>
            <a href="#pricing" class="btn btn-secondary">
              ${template.about.button2Icon ? `<i class="ri-${template.about.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.about.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generatePricingSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'pricing');
  
  return `
    <section id="pricing" class="pricing-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.pricing.badge ? `<div class="badge">${template.pricing.badge}</div>` : ''}
          <h2>${template.pricing.title}</h2>
          ${template.pricing.subtitle ? `<p>${template.pricing.subtitle}</p>` : ''}
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          ${template.pricing.plans.map(plan => `
            <div class="feature-card" style="text-align: center; ${plan.recommended ? 'border: 2px solid ' + getFeatureIconColor(template) + '; transform: scale(1.05);' : ''}">
              ${plan.recommended ? `<div style="background: ${getFeatureIconColor(template)}; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem; display: inline-block;">מומלץ</div>` : ''}
              <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">${plan.name}</h3>
              <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem;">${plan.price}</div>
              <div style="opacity: 0.7; margin-bottom: 2rem;">${plan.period}</div>
              <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                ${plan.features.map(feature => `
                  <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <i class="ri-check-line" style="color: ${getFeatureIconColor(template)}; margin-left: 0.5rem;"></i>
                    ${feature}
                  </li>
                `).join('')}
              </ul>
              <a href="#contact" class="btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'}" style="width: 100%;">
                ${plan.buttonText}
              </a>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.pricing.button1Icon ? `<i class="ri-${template.pricing.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.pricing.button1Text}
            </a>
            <a href="#faq" class="btn btn-secondary">
              ${template.pricing.button2Icon ? `<i class="ri-${template.pricing.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.pricing.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateFaqSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'faq');
  
  return `
    <section id="faq" class="faq-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.faq.badge ? `<div class="badge">${template.faq.badge}</div>` : ''}
          <h2>${template.faq.title}</h2>
          ${template.faq.subtitle ? `<p>${template.faq.subtitle}</p>` : ''}
        </div>
        <div style="max-width: 800px; margin: 0 auto;">
          ${template.faq.questions.map((faq, index) => `
            <div class="feature-card" style="margin-bottom: 1rem; text-align: right;">
              <div style="cursor: pointer;" onclick="toggleFaq(${index})">
                <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
                  ${faq.question}
                  <i class="ri-arrow-down-s-line" id="faq-icon-${index}" style="transition: transform 0.3s ease;"></i>
                </h3>
              </div>
              <div id="faq-answer-${index}" style="display: none; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <p>${faq.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.faq.button1Icon ? `<i class="ri-${template.faq.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.faq.button1Text}
            </a>
            <a href="#pricing" class="btn btn-secondary">
              ${template.faq.button2Icon ? `<i class="ri-${template.faq.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.faq.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateFinalCtaSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'finalCta');
  
  return `
    <section class="final-cta-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center;">
          ${template.finalCta.badge ? `<div class="badge">${template.finalCta.badge}</div>` : ''}
          <h2>${template.finalCta.title}</h2>
          <p>${template.finalCta.description}</p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#contact" class="btn btn-primary">
              ${template.finalCta.button1Icon ? `<i class="ri-${template.finalCta.button1Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.finalCta.button1Text}
            </a>
            <a href="#about" class="btn btn-secondary">
              ${template.finalCta.button2Icon ? `<i class="ri-${template.finalCta.button2Icon}" style="margin-left: 8px;"></i>` : ''}
              ${template.finalCta.button2Text}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateContactSection = (template: TemplateData): string => {
  const sectionBg = getSectionBackground(template, 'contact');
  
  return `
    <section id="contact" class="contact-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2>${template.contact.title}</h2>
          ${template.contact.subtitle ? `<p>${template.contact.subtitle}</p>` : ''}
        </div>
        <div style="max-width: 600px; margin: 0 auto;">
          <form class="feature-card">
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">שם מלא</label>
              <input type="text" style="width: 100%; padding: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; background: rgba(255,255,255,0.1); color: inherit;" placeholder="הכנס את שמך המלא" required>
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">אימייל</label>
              <input type="email" style="width: 100%; padding: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; background: rgba(255,255,255,0.1); color: inherit;" placeholder="הכנס את כתובת האימייל שלך" required>
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">טלפון</label>
              <input type="tel" style="width: 100%; padding: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; background: rgba(255,255,255,0.1); color: inherit;" placeholder="הכנס את מספר הטלפון שלך">
            </div>
            <div style="margin-bottom: 2rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">הודעה</label>
              <textarea style="width: 100%; padding: 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; background: rgba(255,255,255,0.1); color: inherit; min-height: 120px; resize: vertical;" placeholder="כתוב את הודעתך כאן..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">
              ${template.contact.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
};

const generateFooterSection = (template: TemplateData): string => {
  return `
    <footer style="background: #111827; color: white; padding: 40px 0 20px; text-align: center;">
      <div class="container">
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">${template.footer.companyName}</h3>
        ${template.footer.description ? `<p style="opacity: 0.7; margin-bottom: 2rem;">${template.footer.description}</p>` : ''}
        
        ${template.footer.socialMedia ? `
          <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
            ${template.footer.socialMedia.map(social => `
              <a href="${social.href}" style="width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; transition: all 0.3s ease;">
                <i class="ri-${social.icon}"></i>
              </a>
            `).join('')}
          </div>
        ` : ''}
        
        ${template.footer.contactInfo ? `
          <div style="opacity: 0.7; margin-bottom: 2rem;">
            <p>${template.footer.contactInfo.address}</p>
            <p>טלפון: ${template.footer.contactInfo.phone}</p>
            <p>אימייל: ${template.footer.contactInfo.email}</p>
          </div>
        ` : ''}
        
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; opacity: 0.7;">
          <p>&copy; ${new Date().getFullYear()} ${template.footer.companyName}. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  `;
};

// Additional content sections
const generateGallerySection = (template: TemplateData): string => {
  if (!template.gallery) return '';
  
  const sectionBg = getSectionBackground(template, 'gallery');
  
  return `
    <section class="gallery-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.gallery.badge ? `<div class="badge">${template.gallery.badge}</div>` : ''}
          <h2>${template.gallery.title}</h2>
          ${template.gallery.subtitle ? `<p>${template.gallery.subtitle}</p>` : ''}
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
          ${template.gallery.images.map(image => `
            <div class="feature-card" style="padding: 0; overflow: hidden;">
              <img src="${image.src}" alt="${image.alt}" style="width: 100%; height: 200px; object-fit: cover;">
              ${image.caption ? `
                <div style="padding: 1rem;">
                  <p>${image.caption}</p>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
};

const generateVideoSection = (template: TemplateData): string => {
  if (!template.video) return '';
  
  const sectionBg = getSectionBackground(template, 'video');
  
  return `
    <section class="video-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.video.badge ? `<div class="badge">${template.video.badge}</div>` : ''}
          ${template.video.title ? `<h2>${template.video.title}</h2>` : ''}
          ${template.video.subtitle ? `<p>${template.video.subtitle}</p>` : ''}
        </div>
        <div style="max-width: 800px; margin: 0 auto;">
          <div class="feature-card" style="padding: 0; overflow: hidden;">
            ${getVideoEmbed(template.video.videoUrl, template.video.videoType)}
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateSliderSection = (template: TemplateData): string => {
  if (!template.slider) return '';
  
  const sectionBg = getSectionBackground(template, 'slider');
  
  return `
    <section class="slider-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.slider.badge ? `<div class="badge">${template.slider.badge}</div>` : ''}
          ${template.slider.title ? `<h2>${template.slider.title}</h2>` : ''}
          ${template.slider.subtitle ? `<p>${template.slider.subtitle}</p>` : ''}
        </div>
        <div class="slider-container" style="position: relative; max-width: 800px; margin: 0 auto;">
          <div class="slider-wrapper" style="overflow: hidden; border-radius: 16px;">
            ${template.slider.slides.map((slide, index) => `
              <div class="slide ${index === 0 ? 'active' : ''}" style="display: ${index === 0 ? 'block' : 'none'};">
                <div class="feature-card" style="text-align: center;">
                  ${slide.image ? `<img src="${slide.image}" alt="${slide.title}" style="width: 100%; height: 300px; object-fit: cover; margin-bottom: 1rem; border-radius: 8px;">` : ''}
                  <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">${slide.title}</h3>
                  <p style="margin-bottom: 1.5rem;">${slide.description}</p>
                  ${slide.buttonText ? `<a href="${slide.buttonLink || '#'}" class="btn btn-primary">${slide.buttonText}</a>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
          ${template.slider.slides.length > 1 ? `
            <div style="text-align: center; margin-top: 1rem;">
              ${template.slider.slides.map((_, index) => `
                <button onclick="showSlide(${index})" style="width: 12px; height: 12px; border-radius: 50%; border: none; background: ${index === 0 ? getFeatureIconColor(template) : 'rgba(255,255,255,0.3)'}; margin: 0 4px; cursor: pointer;"></button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    </section>
  `;
};

const generateListSection = (template: TemplateData): string => {
  if (!template.list) return '';
  
  const sectionBg = getSectionBackground(template, 'list');
  
  return `
    <section class="list-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.list.badge ? `<div class="badge">${template.list.badge}</div>` : ''}
          ${template.list.title ? `<h2>${template.list.title}</h2>` : ''}
          ${template.list.subtitle ? `<p>${template.list.subtitle}</p>` : ''}
        </div>
        <div style="max-width: 800px; margin: 0 auto;">
          <div class="feature-card">
            ${getListHTML(template.list)}
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateEmbedSection = (template: TemplateData): string => {
  if (!template.embed) return '';
  
  const sectionBg = getSectionBackground(template, 'embed');
  
  return `
    <section class="embed-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.embed.badge ? `<div class="badge">${template.embed.badge}</div>` : ''}
          ${template.embed.title ? `<h2>${template.embed.title}</h2>` : ''}
          ${template.embed.subtitle ? `<p>${template.embed.subtitle}</p>` : ''}
        </div>
        <div style="max-width: 1000px; margin: 0 auto;">
          <div class="feature-card" style="padding: 0;">
            <div style="height: ${template.embed.height || 400}px; overflow: auto;">
              ${template.embed.htmlCode}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

const generateSocialBarSection = (template: TemplateData): string => {
  if (!template.socialBar) return '';
  
  const sectionBg = getSectionBackground(template, 'socialBar');
  
  return `
    <section class="social-bar-section section" style="${sectionBg}">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          ${template.socialBar.badge ? `<div class="badge">${template.socialBar.badge}</div>` : ''}
          ${template.socialBar.title ? `<h2>${template.socialBar.title}</h2>` : ''}
          ${template.socialBar.subtitle ? `<p>${template.socialBar.subtitle}</p>` : ''}
        </div>
        <div style="display: flex; justify-content: ${template.socialBar.alignment}; gap: 1rem; flex-wrap: wrap;">
          ${template.socialBar.socialLinks.map(social => `
            <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="feature-card" style="display: flex; align-items: center; padding: 1rem 1.5rem; text-decoration: none; color: inherit; transition: all 0.3s ease;">
              <i class="ri-${getSocialIcon(social.platform)}" style="font-size: 24px; margin-left: ${template.socialBar.showLabels ? '12px' : '0'};"></i>
              ${template.socialBar.showLabels ? `<span>${social.label || social.platform}</span>` : ''}
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
};

// Helper functions
const getSectionBackground = (template: TemplateData, section: string): string => {
  if (template.styles && template.styles[`${section}Background` as keyof typeof template.styles]) {
    const bgColor = template.styles[`${section}Background` as keyof typeof template.styles];
    const bgImage = template.styles[`${section}BackgroundImage` as keyof typeof template.styles];
    
    let style = `background: ${bgColor};`;
    if (bgImage) {
      style += ` background-image: url('${bgImage}'); background-size: cover; background-position: center;`;
    }
    return style;
  }
  
  // Default section backgrounds based on template
  const sectionBgs = {
    'tech-consultant-pro': {
      emotional: 'background: linear-gradient(135deg, #374151 0%, #1f2937 100%);',
      features: 'background: linear-gradient(135deg, #1f2937 0%, #111827 100%);',
      testimonials: 'background: linear-gradient(135deg, #111827 0%, #374151 100%);',
      about: 'background: linear-gradient(135deg, #374151 0%, #1f2937 100%);',
      pricing: 'background: linear-gradient(135deg, #1f2937 0%, #111827 100%);',
      faq: 'background: linear-gradient(135deg, #111827 0%, #374151 100%);',
      finalCta: 'background: linear-gradient(135deg, #374151 0%, #1f2937 100%);',
      contact: 'background: linear-gradient(135deg, #1f2937 0%, #111827 100%);'
    },
    'neon-academy-pro': {
      emotional: 'background: linear-gradient(135deg, #7c3aed 0%, #000000 100%);',
      features: 'background: linear-gradient(135deg, #000000 0%, #581c87 100%);',
      testimonials: 'background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%);',
      about: 'background: linear-gradient(135deg, #7c3aed 0%, #000000 100%);',
      pricing: 'background: linear-gradient(135deg, #000000 0%, #581c87 100%);',
      faq: 'background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%);',
      finalCta: 'background: linear-gradient(135deg, #7c3aed 0%, #000000 100%);',
      contact: 'background: linear-gradient(135deg, #000000 0%, #581c87 100%);'
    },
    'blockchain-tech-pro': {
      emotional: 'background: linear-gradient(135deg, #3730a3 0%, #1e40af 100%);',
      features: 'background: linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%);',
      testimonials: 'background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%);',
      about: 'background: linear-gradient(135deg, #3730a3 0%, #1e40af 100%);',
      pricing: 'background: linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%);',
      faq: 'background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%);',
      finalCta: 'background: linear-gradient(135deg, #3730a3 0%, #1e40af 100%);',
      contact: 'background: linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%);'
    },
    'nft-future-pro': {
      emotional: 'background: linear-gradient(135deg, #ec4899 0%, #581c87 100%);',
      features: 'background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%);',
      testimonials: 'background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);',
      about: 'background: linear-gradient(135deg, #ec4899 0%, #581c87 100%);',
      pricing: 'background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%);',
      faq: 'background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);',
      finalCta: 'background: linear-gradient(135deg, #ec4899 0%, #581c87 100%);',
      contact: 'background: linear-gradient(135deg, #581c87 0%, #7c3aed 100%);'
    },
    'creative-3d-pro': {
      emotional: 'background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);',
      features: 'background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);',
      testimonials: 'background: linear-gradient(135deg, #ea580c 0%, #fed7aa 100%);',
      about: 'background: linear-gradient(135deg, #fed7aa 0%, #fbbf24 100%);',
      pricing: 'background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);',
      faq: 'background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);',
      finalCta: 'background: linear-gradient(135deg, #ea580c 0%, #fed7aa 100%);',
      contact: 'background: linear-gradient(135deg, #fed7aa 0%, #fbbf24 100%);'
    },
    'authkit-tech-pro': {
      emotional: 'background: linear-gradient(135deg, #1e40af 0%, #030712 100%);',
      features: 'background: linear-gradient(135deg, #030712 0%, #1e3a8a 100%);',
      testimonials: 'background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);',
      about: 'background: linear-gradient(135deg, #1e40af 0%, #030712 100%);',
      pricing: 'background: linear-gradient(135deg, #030712 0%, #1e3a8a 100%);',
      faq: 'background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);',
      finalCta: 'background: linear-gradient(135deg, #1e40af 0%, #030712 100%);',
      contact: 'background: linear-gradient(135deg, #030712 0%, #1e3a8a 100%);'
    }
  };
  
  return sectionBgs[template.id as keyof typeof sectionBgs]?.[section as keyof typeof sectionBgs['tech-consultant-pro']] || '';
};

const getFeatureIconColor = (template: TemplateData, darker: boolean = false): string => {
  const colors = {
    'tech-consultant-pro': darker ? '#1d4ed8' : '#3b82f6',
    'neon-academy-pro': darker ? '#0891b2' : '#06b6d4',
    'blockchain-tech-pro': darker ? '#1d4ed8' : '#3b82f6',
    'nft-future-pro': darker ? '#be185d' : '#ec4899',
    'creative-3d-pro': darker ? '#ea580c' : '#f97316',
    'authkit-tech-pro': darker ? '#1d4ed8' : '#3b82f6'
  };
  
  return colors[template.id as keyof typeof colors] || (darker ? '#1d4ed8' : '#3b82f6');
};

const getVideoEmbed = (url: string, type: string): string => {
  if (type === 'youtube') {
    const videoId = url.includes('v=') ? url.split('v=')[1]?.split('&')[0] : url.split('/').pop();
    return `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  } else if (type === 'vimeo') {
    const videoId = url.split('/').pop();
    return `<iframe width="100%" height="400" src="https://player.vimeo.com/video/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    return `<video width="100%" height="400" controls><source src="${url}" type="video/mp4">הדפדפן שלך לא תומך בתגית וידאו.</video>`;
  }
};

const getListHTML = (list: any): string => {
  const listTag = list.listType === 'ordered' ? 'ol' : 'ul';
  const listStyle = list.listType === 'icon' ? 'list-style: none; padding: 0;' : '';
  
  return `
    <${listTag} style="${listStyle}">
      ${list.items.map((item: any) => `
        <li style="padding: 0.75rem 0; ${list.listType === 'icon' ? 'display: flex; align-items: center;' : ''}">
          ${list.listType === 'icon' && item.icon ? `<i class="ri-${item.icon}" style="margin-left: 12px; font-size: 18px;"></i>` : ''}
          <div>
            <h4 style="font-weight: 600; margin-bottom: 0.25rem;">${item.title}</h4>
            ${item.description ? `<p style="opacity: 0.8; font-size: 0.95rem;">${item.description}</p>` : ''}
          </div>
        </li>
      `).join('')}
    </${listTag}>
  `;
};

const getSocialIcon = (platform: string): string => {
  const icons = {
    facebook: 'facebook-fill',
    instagram: 'instagram-fill',
    twitter: 'twitter-fill',
    linkedin: 'linkedin-fill',
    youtube: 'youtube-fill',
    tiktok: 'tiktok-fill',
    whatsapp: 'whatsapp-fill',
    telegram: 'telegram-fill'
  };
  
  return icons[platform as keyof typeof icons] || 'link';
};

const generateJavaScript = (template: TemplateData): string => {
  return `
    // FAQ Toggle functionality
    function toggleFaq(index) {
      const answer = document.getElementById('faq-answer-' + index);
      const icon = document.getElementById('faq-icon-' + index);
      
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
      } else {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
      }
    }
    
    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
      
      const dots = document.querySelectorAll('button[onclick^="showSlide"]');
      dots.forEach((dot, i) => {
        dot.style.background = i === index ? '${getFeatureIconColor(template)}' : 'rgba(255,255,255,0.3)';
      });
      
      currentSlide = index;
    }
    
    // Auto-play slider if enabled
    ${template.slider?.autoplay ? `
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, ${template.slider.duration || 5000});
    ` : ''}
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    
    // Form submission handling
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('תודה על פנייתך! נחזור אליך בקרוב.');
    });
    
    // Add hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  `;
};
